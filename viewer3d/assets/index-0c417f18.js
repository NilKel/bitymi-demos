var ec=Object.defineProperty;var tc=(o,r,a)=>r in o?ec(o,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[r]=a;var D=(o,r,a)=>(tc(o,typeof r!="symbol"?r+"":r,a),a);(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))w(f);new MutationObserver(f=>{for(const b of f)if(b.type==="childList")for(const R of b.addedNodes)R.tagName==="LINK"&&R.rel==="modulepreload"&&w(R)}).observe(document,{childList:!0,subtree:!0});function a(f){const b={};return f.integrity&&(b.integrity=f.integrity),f.referrerPolicy&&(b.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?b.credentials="include":f.crossOrigin==="anonymous"?b.credentials="omit":b.credentials="same-origin",b}function w(f){if(f.ep)return;f.ep=!0;const b=a(f);fetch(f.href,b)}})();function nc(o,r){return class extends o{constructor(...a){super(...a),r(this)}}}const sc=nc(Array,o=>o.fill(0));let Fe=1e-6;function rc(o){function r(k=0,x=0){const S=new o(2);return k!==void 0&&(S[0]=k,x!==void 0&&(S[1]=x)),S}const a=r;function w(k,x,S){const i=S??new o(2);return i[0]=k,i[1]=x,i}function f(k,x){const S=x??new o(2);return S[0]=Math.ceil(k[0]),S[1]=Math.ceil(k[1]),S}function b(k,x){const S=x??new o(2);return S[0]=Math.floor(k[0]),S[1]=Math.floor(k[1]),S}function R(k,x){const S=x??new o(2);return S[0]=Math.round(k[0]),S[1]=Math.round(k[1]),S}function T(k,x=0,S=1,i){const v=i??new o(2);return v[0]=Math.min(S,Math.max(x,k[0])),v[1]=Math.min(S,Math.max(x,k[1])),v}function C(k,x,S){const i=S??new o(2);return i[0]=k[0]+x[0],i[1]=k[1]+x[1],i}function M(k,x,S,i){const v=i??new o(2);return v[0]=k[0]+x[0]*S,v[1]=k[1]+x[1]*S,v}function N(k,x){const S=k[0],i=k[1],v=x[0],d=x[1],p=Math.sqrt(S*S+i*i),c=Math.sqrt(v*v+d*d),m=p*c,E=m&&ue(k,x)/m;return Math.acos(E)}function G(k,x,S){const i=S??new o(2);return i[0]=k[0]-x[0],i[1]=k[1]-x[1],i}const I=G;function j(k,x){return Math.abs(k[0]-x[0])<Fe&&Math.abs(k[1]-x[1])<Fe}function ce(k,x){return k[0]===x[0]&&k[1]===x[1]}function z(k,x,S,i){const v=i??new o(2);return v[0]=k[0]+S*(x[0]-k[0]),v[1]=k[1]+S*(x[1]-k[1]),v}function O(k,x,S,i){const v=i??new o(2);return v[0]=k[0]+S[0]*(x[0]-k[0]),v[1]=k[1]+S[1]*(x[1]-k[1]),v}function X(k,x,S){const i=S??new o(2);return i[0]=Math.max(k[0],x[0]),i[1]=Math.max(k[1],x[1]),i}function F(k,x,S){const i=S??new o(2);return i[0]=Math.min(k[0],x[0]),i[1]=Math.min(k[1],x[1]),i}function se(k,x,S){const i=S??new o(2);return i[0]=k[0]*x,i[1]=k[1]*x,i}const q=se;function de(k,x,S){const i=S??new o(2);return i[0]=k[0]/x,i[1]=k[1]/x,i}function _e(k,x){const S=x??new o(2);return S[0]=1/k[0],S[1]=1/k[1],S}const fe=_e;function ie(k,x,S){const i=S??new o(3),v=k[0]*x[1]-k[1]*x[0];return i[0]=0,i[1]=0,i[2]=v,i}function ue(k,x){return k[0]*x[0]+k[1]*x[1]}function Te(k){const x=k[0],S=k[1];return Math.sqrt(x*x+S*S)}const le=Te;function te(k){const x=k[0],S=k[1];return x*x+S*S}const we=te;function Le(k,x){const S=k[0]-x[0],i=k[1]-x[1];return Math.sqrt(S*S+i*i)}const ke=Le;function Z(k,x){const S=k[0]-x[0],i=k[1]-x[1];return S*S+i*i}const J=Z;function H(k,x){const S=x??new o(2),i=k[0],v=k[1],d=Math.sqrt(i*i+v*v);return d>1e-5?(S[0]=i/d,S[1]=v/d):(S[0]=0,S[1]=0),S}function ee(k,x){const S=x??new o(2);return S[0]=-k[0],S[1]=-k[1],S}function be(k,x){const S=x??new o(2);return S[0]=k[0],S[1]=k[1],S}const De=be;function Se(k,x,S){const i=S??new o(2);return i[0]=k[0]*x[0],i[1]=k[1]*x[1],i}const Re=Se;function re(k,x,S){const i=S??new o(2);return i[0]=k[0]/x[0],i[1]=k[1]/x[1],i}const ve=re;function Pe(k=1,x){const S=x??new o(2),i=Math.random()*2*Math.PI;return S[0]=Math.cos(i)*k,S[1]=Math.sin(i)*k,S}function U(k){const x=k??new o(2);return x[0]=0,x[1]=0,x}function Y(k,x,S){const i=S??new o(2),v=k[0],d=k[1];return i[0]=v*x[0]+d*x[4]+x[12],i[1]=v*x[1]+d*x[5]+x[13],i}function g(k,x,S){const i=S??new o(2),v=k[0],d=k[1];return i[0]=x[0]*v+x[4]*d+x[8],i[1]=x[1]*v+x[5]*d+x[9],i}function l(k,x,S,i){const v=i??new o(2),d=k[0]-x[0],p=k[1]-x[1],c=Math.sin(S),m=Math.cos(S);return v[0]=d*m-p*c+x[0],v[1]=d*c+p*m+x[1],v}function _(k,x,S){const i=S??new o(2);return H(k,i),se(i,x,i)}function h(k,x,S){const i=S??new o(2);return Te(k)>x?_(k,x,i):be(k,i)}function y(k,x,S){const i=S??new o(2);return z(k,x,.5,i)}return{create:r,fromValues:a,set:w,ceil:f,floor:b,round:R,clamp:T,add:C,addScaled:M,angle:N,subtract:G,sub:I,equalsApproximately:j,equals:ce,lerp:z,lerpV:O,max:X,min:F,mulScalar:se,scale:q,divScalar:de,inverse:_e,invert:fe,cross:ie,dot:ue,length:Te,len:le,lengthSq:te,lenSq:we,distance:Le,dist:ke,distanceSq:Z,distSq:J,normalize:H,negate:ee,copy:be,clone:De,multiply:Se,mul:Re,divide:re,div:ve,random:Pe,zero:U,transformMat4:Y,transformMat3:g,rotate:l,setLength:_,truncate:h,midpoint:y}}const vi=new Map;function ji(o){let r=vi.get(o);return r||(r=rc(o),vi.set(o,r)),r}function ic(o){function r(c,m,E){const P=new o(3);return c!==void 0&&(P[0]=c,m!==void 0&&(P[1]=m,E!==void 0&&(P[2]=E))),P}const a=r;function w(c,m,E,P){const A=P??new o(3);return A[0]=c,A[1]=m,A[2]=E,A}function f(c,m){const E=m??new o(3);return E[0]=Math.ceil(c[0]),E[1]=Math.ceil(c[1]),E[2]=Math.ceil(c[2]),E}function b(c,m){const E=m??new o(3);return E[0]=Math.floor(c[0]),E[1]=Math.floor(c[1]),E[2]=Math.floor(c[2]),E}function R(c,m){const E=m??new o(3);return E[0]=Math.round(c[0]),E[1]=Math.round(c[1]),E[2]=Math.round(c[2]),E}function T(c,m=0,E=1,P){const A=P??new o(3);return A[0]=Math.min(E,Math.max(m,c[0])),A[1]=Math.min(E,Math.max(m,c[1])),A[2]=Math.min(E,Math.max(m,c[2])),A}function C(c,m,E){const P=E??new o(3);return P[0]=c[0]+m[0],P[1]=c[1]+m[1],P[2]=c[2]+m[2],P}function M(c,m,E,P){const A=P??new o(3);return A[0]=c[0]+m[0]*E,A[1]=c[1]+m[1]*E,A[2]=c[2]+m[2]*E,A}function N(c,m){const E=c[0],P=c[1],A=c[2],$=m[0],K=m[1],oe=m[2],ne=Math.sqrt(E*E+P*P+A*A),ae=Math.sqrt($*$+K*K+oe*oe),xe=ne*ae,Ae=xe&&ue(c,m)/xe;return Math.acos(Ae)}function G(c,m,E){const P=E??new o(3);return P[0]=c[0]-m[0],P[1]=c[1]-m[1],P[2]=c[2]-m[2],P}const I=G;function j(c,m){return Math.abs(c[0]-m[0])<Fe&&Math.abs(c[1]-m[1])<Fe&&Math.abs(c[2]-m[2])<Fe}function ce(c,m){return c[0]===m[0]&&c[1]===m[1]&&c[2]===m[2]}function z(c,m,E,P){const A=P??new o(3);return A[0]=c[0]+E*(m[0]-c[0]),A[1]=c[1]+E*(m[1]-c[1]),A[2]=c[2]+E*(m[2]-c[2]),A}function O(c,m,E,P){const A=P??new o(3);return A[0]=c[0]+E[0]*(m[0]-c[0]),A[1]=c[1]+E[1]*(m[1]-c[1]),A[2]=c[2]+E[2]*(m[2]-c[2]),A}function X(c,m,E){const P=E??new o(3);return P[0]=Math.max(c[0],m[0]),P[1]=Math.max(c[1],m[1]),P[2]=Math.max(c[2],m[2]),P}function F(c,m,E){const P=E??new o(3);return P[0]=Math.min(c[0],m[0]),P[1]=Math.min(c[1],m[1]),P[2]=Math.min(c[2],m[2]),P}function se(c,m,E){const P=E??new o(3);return P[0]=c[0]*m,P[1]=c[1]*m,P[2]=c[2]*m,P}const q=se;function de(c,m,E){const P=E??new o(3);return P[0]=c[0]/m,P[1]=c[1]/m,P[2]=c[2]/m,P}function _e(c,m){const E=m??new o(3);return E[0]=1/c[0],E[1]=1/c[1],E[2]=1/c[2],E}const fe=_e;function ie(c,m,E){const P=E??new o(3),A=c[2]*m[0]-c[0]*m[2],$=c[0]*m[1]-c[1]*m[0];return P[0]=c[1]*m[2]-c[2]*m[1],P[1]=A,P[2]=$,P}function ue(c,m){return c[0]*m[0]+c[1]*m[1]+c[2]*m[2]}function Te(c){const m=c[0],E=c[1],P=c[2];return Math.sqrt(m*m+E*E+P*P)}const le=Te;function te(c){const m=c[0],E=c[1],P=c[2];return m*m+E*E+P*P}const we=te;function Le(c,m){const E=c[0]-m[0],P=c[1]-m[1],A=c[2]-m[2];return Math.sqrt(E*E+P*P+A*A)}const ke=Le;function Z(c,m){const E=c[0]-m[0],P=c[1]-m[1],A=c[2]-m[2];return E*E+P*P+A*A}const J=Z;function H(c,m){const E=m??new o(3),P=c[0],A=c[1],$=c[2],K=Math.sqrt(P*P+A*A+$*$);return K>1e-5?(E[0]=P/K,E[1]=A/K,E[2]=$/K):(E[0]=0,E[1]=0,E[2]=0),E}function ee(c,m){const E=m??new o(3);return E[0]=-c[0],E[1]=-c[1],E[2]=-c[2],E}function be(c,m){const E=m??new o(3);return E[0]=c[0],E[1]=c[1],E[2]=c[2],E}const De=be;function Se(c,m,E){const P=E??new o(3);return P[0]=c[0]*m[0],P[1]=c[1]*m[1],P[2]=c[2]*m[2],P}const Re=Se;function re(c,m,E){const P=E??new o(3);return P[0]=c[0]/m[0],P[1]=c[1]/m[1],P[2]=c[2]/m[2],P}const ve=re;function Pe(c=1,m){const E=m??new o(3),P=Math.random()*2*Math.PI,A=Math.random()*2-1,$=Math.sqrt(1-A*A)*c;return E[0]=Math.cos(P)*$,E[1]=Math.sin(P)*$,E[2]=A*c,E}function U(c){const m=c??new o(3);return m[0]=0,m[1]=0,m[2]=0,m}function Y(c,m,E){const P=E??new o(3),A=c[0],$=c[1],K=c[2],oe=m[3]*A+m[7]*$+m[11]*K+m[15]||1;return P[0]=(m[0]*A+m[4]*$+m[8]*K+m[12])/oe,P[1]=(m[1]*A+m[5]*$+m[9]*K+m[13])/oe,P[2]=(m[2]*A+m[6]*$+m[10]*K+m[14])/oe,P}function g(c,m,E){const P=E??new o(3),A=c[0],$=c[1],K=c[2];return P[0]=A*m[0*4+0]+$*m[1*4+0]+K*m[2*4+0],P[1]=A*m[0*4+1]+$*m[1*4+1]+K*m[2*4+1],P[2]=A*m[0*4+2]+$*m[1*4+2]+K*m[2*4+2],P}function l(c,m,E){const P=E??new o(3),A=c[0],$=c[1],K=c[2];return P[0]=A*m[0]+$*m[4]+K*m[8],P[1]=A*m[1]+$*m[5]+K*m[9],P[2]=A*m[2]+$*m[6]+K*m[10],P}function _(c,m,E){const P=E??new o(3),A=m[0],$=m[1],K=m[2],oe=m[3]*2,ne=c[0],ae=c[1],xe=c[2],Ae=$*xe-K*ae,Ee=K*ne-A*xe,Be=A*ae-$*ne;return P[0]=ne+Ae*oe+($*Be-K*Ee)*2,P[1]=ae+Ee*oe+(K*Ae-A*Be)*2,P[2]=xe+Be*oe+(A*Ee-$*Ae)*2,P}function h(c,m){const E=m??new o(3);return E[0]=c[12],E[1]=c[13],E[2]=c[14],E}function y(c,m,E){const P=E??new o(3),A=m*4;return P[0]=c[A+0],P[1]=c[A+1],P[2]=c[A+2],P}function k(c,m){const E=m??new o(3),P=c[0],A=c[1],$=c[2],K=c[4],oe=c[5],ne=c[6],ae=c[8],xe=c[9],Ae=c[10];return E[0]=Math.sqrt(P*P+A*A+$*$),E[1]=Math.sqrt(K*K+oe*oe+ne*ne),E[2]=Math.sqrt(ae*ae+xe*xe+Ae*Ae),E}function x(c,m,E,P){const A=P??new o(3),$=[],K=[];return $[0]=c[0]-m[0],$[1]=c[1]-m[1],$[2]=c[2]-m[2],K[0]=$[0],K[1]=$[1]*Math.cos(E)-$[2]*Math.sin(E),K[2]=$[1]*Math.sin(E)+$[2]*Math.cos(E),A[0]=K[0]+m[0],A[1]=K[1]+m[1],A[2]=K[2]+m[2],A}function S(c,m,E,P){const A=P??new o(3),$=[],K=[];return $[0]=c[0]-m[0],$[1]=c[1]-m[1],$[2]=c[2]-m[2],K[0]=$[2]*Math.sin(E)+$[0]*Math.cos(E),K[1]=$[1],K[2]=$[2]*Math.cos(E)-$[0]*Math.sin(E),A[0]=K[0]+m[0],A[1]=K[1]+m[1],A[2]=K[2]+m[2],A}function i(c,m,E,P){const A=P??new o(3),$=[],K=[];return $[0]=c[0]-m[0],$[1]=c[1]-m[1],$[2]=c[2]-m[2],K[0]=$[0]*Math.cos(E)-$[1]*Math.sin(E),K[1]=$[0]*Math.sin(E)+$[1]*Math.cos(E),K[2]=$[2],A[0]=K[0]+m[0],A[1]=K[1]+m[1],A[2]=K[2]+m[2],A}function v(c,m,E){const P=E??new o(3);return H(c,P),se(P,m,P)}function d(c,m,E){const P=E??new o(3);return Te(c)>m?v(c,m,P):be(c,P)}function p(c,m,E){const P=E??new o(3);return z(c,m,.5,P)}return{create:r,fromValues:a,set:w,ceil:f,floor:b,round:R,clamp:T,add:C,addScaled:M,angle:N,subtract:G,sub:I,equalsApproximately:j,equals:ce,lerp:z,lerpV:O,max:X,min:F,mulScalar:se,scale:q,divScalar:de,inverse:_e,invert:fe,cross:ie,dot:ue,length:Te,len:le,lengthSq:te,lenSq:we,distance:Le,dist:ke,distanceSq:Z,distSq:J,normalize:H,negate:ee,copy:be,clone:De,multiply:Se,mul:Re,divide:re,div:ve,random:Pe,zero:U,transformMat4:Y,transformMat4Upper3x3:g,transformMat3:l,transformQuat:_,getTranslation:h,getAxis:y,getScaling:k,rotateX:x,rotateY:S,rotateZ:i,setLength:v,truncate:d,midpoint:p}}const bi=new Map;function As(o){let r=bi.get(o);return r||(r=ic(o),bi.set(o,r)),r}function oc(o){const r=ji(o),a=As(o);function w(l,_,h,y,k,x,S,i,v){const d=new o(12);return d[3]=0,d[7]=0,d[11]=0,l!==void 0&&(d[0]=l,_!==void 0&&(d[1]=_,h!==void 0&&(d[2]=h,y!==void 0&&(d[4]=y,k!==void 0&&(d[5]=k,x!==void 0&&(d[6]=x,S!==void 0&&(d[8]=S,i!==void 0&&(d[9]=i,v!==void 0&&(d[10]=v))))))))),d}function f(l,_,h,y,k,x,S,i,v,d){const p=d??new o(12);return p[0]=l,p[1]=_,p[2]=h,p[3]=0,p[4]=y,p[5]=k,p[6]=x,p[7]=0,p[8]=S,p[9]=i,p[10]=v,p[11]=0,p}function b(l,_){const h=_??new o(12);return h[0]=l[0],h[1]=l[1],h[2]=l[2],h[3]=0,h[4]=l[4],h[5]=l[5],h[6]=l[6],h[7]=0,h[8]=l[8],h[9]=l[9],h[10]=l[10],h[11]=0,h}function R(l,_){const h=_??new o(12),y=l[0],k=l[1],x=l[2],S=l[3],i=y+y,v=k+k,d=x+x,p=y*i,c=k*i,m=k*v,E=x*i,P=x*v,A=x*d,$=S*i,K=S*v,oe=S*d;return h[0]=1-m-A,h[1]=c+oe,h[2]=E-K,h[3]=0,h[4]=c-oe,h[5]=1-p-A,h[6]=P+$,h[7]=0,h[8]=E+K,h[9]=P-$,h[10]=1-p-m,h[11]=0,h}function T(l,_){const h=_??new o(12);return h[0]=-l[0],h[1]=-l[1],h[2]=-l[2],h[4]=-l[4],h[5]=-l[5],h[6]=-l[6],h[8]=-l[8],h[9]=-l[9],h[10]=-l[10],h}function C(l,_,h){const y=h??new o(12);return y[0]=l[0]*_,y[1]=l[1]*_,y[2]=l[2]*_,y[4]=l[4]*_,y[5]=l[5]*_,y[6]=l[6]*_,y[8]=l[8]*_,y[9]=l[9]*_,y[10]=l[10]*_,y}const M=C;function N(l,_,h){const y=h??new o(12);return y[0]=l[0]+_[0],y[1]=l[1]+_[1],y[2]=l[2]+_[2],y[4]=l[4]+_[4],y[5]=l[5]+_[5],y[6]=l[6]+_[6],y[8]=l[8]+_[8],y[9]=l[9]+_[9],y[10]=l[10]+_[10],y}function G(l,_){const h=_??new o(12);return h[0]=l[0],h[1]=l[1],h[2]=l[2],h[4]=l[4],h[5]=l[5],h[6]=l[6],h[8]=l[8],h[9]=l[9],h[10]=l[10],h}const I=G;function j(l,_){return Math.abs(l[0]-_[0])<Fe&&Math.abs(l[1]-_[1])<Fe&&Math.abs(l[2]-_[2])<Fe&&Math.abs(l[4]-_[4])<Fe&&Math.abs(l[5]-_[5])<Fe&&Math.abs(l[6]-_[6])<Fe&&Math.abs(l[8]-_[8])<Fe&&Math.abs(l[9]-_[9])<Fe&&Math.abs(l[10]-_[10])<Fe}function ce(l,_){return l[0]===_[0]&&l[1]===_[1]&&l[2]===_[2]&&l[4]===_[4]&&l[5]===_[5]&&l[6]===_[6]&&l[8]===_[8]&&l[9]===_[9]&&l[10]===_[10]}function z(l){const _=l??new o(12);return _[0]=1,_[1]=0,_[2]=0,_[4]=0,_[5]=1,_[6]=0,_[8]=0,_[9]=0,_[10]=1,_}function O(l,_){const h=_??new o(12);if(h===l){let m;return m=l[1],l[1]=l[4],l[4]=m,m=l[2],l[2]=l[8],l[8]=m,m=l[6],l[6]=l[9],l[9]=m,h}const y=l[0*4+0],k=l[0*4+1],x=l[0*4+2],S=l[1*4+0],i=l[1*4+1],v=l[1*4+2],d=l[2*4+0],p=l[2*4+1],c=l[2*4+2];return h[0]=y,h[1]=S,h[2]=d,h[4]=k,h[5]=i,h[6]=p,h[8]=x,h[9]=v,h[10]=c,h}function X(l,_){const h=_??new o(12),y=l[0*4+0],k=l[0*4+1],x=l[0*4+2],S=l[1*4+0],i=l[1*4+1],v=l[1*4+2],d=l[2*4+0],p=l[2*4+1],c=l[2*4+2],m=c*i-v*p,E=-c*S+v*d,P=p*S-i*d,A=1/(y*m+k*E+x*P);return h[0]=m*A,h[1]=(-c*k+x*p)*A,h[2]=(v*k-x*i)*A,h[4]=E*A,h[5]=(c*y-x*d)*A,h[6]=(-v*y+x*S)*A,h[8]=P*A,h[9]=(-p*y+k*d)*A,h[10]=(i*y-k*S)*A,h}function F(l){const _=l[0],h=l[0*4+1],y=l[0*4+2],k=l[1*4+0],x=l[1*4+1],S=l[1*4+2],i=l[2*4+0],v=l[2*4+1],d=l[2*4+2];return _*(x*d-v*S)-k*(h*d-v*y)+i*(h*S-x*y)}const se=X;function q(l,_,h){const y=h??new o(12),k=l[0],x=l[1],S=l[2],i=l[4+0],v=l[4+1],d=l[4+2],p=l[8+0],c=l[8+1],m=l[8+2],E=_[0],P=_[1],A=_[2],$=_[4+0],K=_[4+1],oe=_[4+2],ne=_[8+0],ae=_[8+1],xe=_[8+2];return y[0]=k*E+i*P+p*A,y[1]=x*E+v*P+c*A,y[2]=S*E+d*P+m*A,y[4]=k*$+i*K+p*oe,y[5]=x*$+v*K+c*oe,y[6]=S*$+d*K+m*oe,y[8]=k*ne+i*ae+p*xe,y[9]=x*ne+v*ae+c*xe,y[10]=S*ne+d*ae+m*xe,y}const de=q;function _e(l,_,h){const y=h??z();return l!==y&&(y[0]=l[0],y[1]=l[1],y[2]=l[2],y[4]=l[4],y[5]=l[5],y[6]=l[6]),y[8]=_[0],y[9]=_[1],y[10]=1,y}function fe(l,_){const h=_??r.create();return h[0]=l[8],h[1]=l[9],h}function ie(l,_,h){const y=h??r.create(),k=_*4;return y[0]=l[k+0],y[1]=l[k+1],y}function ue(l,_,h,y){const k=y===l?l:G(l,y),x=h*4;return k[x+0]=_[0],k[x+1]=_[1],k}function Te(l,_){const h=_??r.create(),y=l[0],k=l[1],x=l[4],S=l[5];return h[0]=Math.sqrt(y*y+k*k),h[1]=Math.sqrt(x*x+S*S),h}function le(l,_){const h=_??a.create(),y=l[0],k=l[1],x=l[2],S=l[4],i=l[5],v=l[6],d=l[8],p=l[9],c=l[10];return h[0]=Math.sqrt(y*y+k*k+x*x),h[1]=Math.sqrt(S*S+i*i+v*v),h[2]=Math.sqrt(d*d+p*p+c*c),h}function te(l,_){const h=_??new o(12);return h[0]=1,h[1]=0,h[2]=0,h[4]=0,h[5]=1,h[6]=0,h[8]=l[0],h[9]=l[1],h[10]=1,h}function we(l,_,h){const y=h??new o(12),k=_[0],x=_[1],S=l[0],i=l[1],v=l[2],d=l[1*4+0],p=l[1*4+1],c=l[1*4+2],m=l[2*4+0],E=l[2*4+1],P=l[2*4+2];return l!==y&&(y[0]=S,y[1]=i,y[2]=v,y[4]=d,y[5]=p,y[6]=c),y[8]=S*k+d*x+m,y[9]=i*k+p*x+E,y[10]=v*k+c*x+P,y}function Le(l,_){const h=_??new o(12),y=Math.cos(l),k=Math.sin(l);return h[0]=y,h[1]=k,h[2]=0,h[4]=-k,h[5]=y,h[6]=0,h[8]=0,h[9]=0,h[10]=1,h}function ke(l,_,h){const y=h??new o(12),k=l[0*4+0],x=l[0*4+1],S=l[0*4+2],i=l[1*4+0],v=l[1*4+1],d=l[1*4+2],p=Math.cos(_),c=Math.sin(_);return y[0]=p*k+c*i,y[1]=p*x+c*v,y[2]=p*S+c*d,y[4]=p*i-c*k,y[5]=p*v-c*x,y[6]=p*d-c*S,l!==y&&(y[8]=l[8],y[9]=l[9],y[10]=l[10]),y}function Z(l,_){const h=_??new o(12),y=Math.cos(l),k=Math.sin(l);return h[0]=1,h[1]=0,h[2]=0,h[4]=0,h[5]=y,h[6]=k,h[8]=0,h[9]=-k,h[10]=y,h}function J(l,_,h){const y=h??new o(12),k=l[4],x=l[5],S=l[6],i=l[8],v=l[9],d=l[10],p=Math.cos(_),c=Math.sin(_);return y[4]=p*k+c*i,y[5]=p*x+c*v,y[6]=p*S+c*d,y[8]=p*i-c*k,y[9]=p*v-c*x,y[10]=p*d-c*S,l!==y&&(y[0]=l[0],y[1]=l[1],y[2]=l[2]),y}function H(l,_){const h=_??new o(12),y=Math.cos(l),k=Math.sin(l);return h[0]=y,h[1]=0,h[2]=-k,h[4]=0,h[5]=1,h[6]=0,h[8]=k,h[9]=0,h[10]=y,h}function ee(l,_,h){const y=h??new o(12),k=l[0*4+0],x=l[0*4+1],S=l[0*4+2],i=l[2*4+0],v=l[2*4+1],d=l[2*4+2],p=Math.cos(_),c=Math.sin(_);return y[0]=p*k-c*i,y[1]=p*x-c*v,y[2]=p*S-c*d,y[8]=p*i+c*k,y[9]=p*v+c*x,y[10]=p*d+c*S,l!==y&&(y[4]=l[4],y[5]=l[5],y[6]=l[6]),y}const be=Le,De=ke;function Se(l,_){const h=_??new o(12);return h[0]=l[0],h[1]=0,h[2]=0,h[4]=0,h[5]=l[1],h[6]=0,h[8]=0,h[9]=0,h[10]=1,h}function Re(l,_,h){const y=h??new o(12),k=_[0],x=_[1];return y[0]=k*l[0*4+0],y[1]=k*l[0*4+1],y[2]=k*l[0*4+2],y[4]=x*l[1*4+0],y[5]=x*l[1*4+1],y[6]=x*l[1*4+2],l!==y&&(y[8]=l[8],y[9]=l[9],y[10]=l[10]),y}function re(l,_){const h=_??new o(12);return h[0]=l[0],h[1]=0,h[2]=0,h[4]=0,h[5]=l[1],h[6]=0,h[8]=0,h[9]=0,h[10]=l[2],h}function ve(l,_,h){const y=h??new o(12),k=_[0],x=_[1],S=_[2];return y[0]=k*l[0*4+0],y[1]=k*l[0*4+1],y[2]=k*l[0*4+2],y[4]=x*l[1*4+0],y[5]=x*l[1*4+1],y[6]=x*l[1*4+2],y[8]=S*l[2*4+0],y[9]=S*l[2*4+1],y[10]=S*l[2*4+2],y}function Pe(l,_){const h=_??new o(12);return h[0]=l,h[1]=0,h[2]=0,h[4]=0,h[5]=l,h[6]=0,h[8]=0,h[9]=0,h[10]=1,h}function U(l,_,h){const y=h??new o(12);return y[0]=_*l[0*4+0],y[1]=_*l[0*4+1],y[2]=_*l[0*4+2],y[4]=_*l[1*4+0],y[5]=_*l[1*4+1],y[6]=_*l[1*4+2],l!==y&&(y[8]=l[8],y[9]=l[9],y[10]=l[10]),y}function Y(l,_){const h=_??new o(12);return h[0]=l,h[1]=0,h[2]=0,h[4]=0,h[5]=l,h[6]=0,h[8]=0,h[9]=0,h[10]=l,h}function g(l,_,h){const y=h??new o(12);return y[0]=_*l[0*4+0],y[1]=_*l[0*4+1],y[2]=_*l[0*4+2],y[4]=_*l[1*4+0],y[5]=_*l[1*4+1],y[6]=_*l[1*4+2],y[8]=_*l[2*4+0],y[9]=_*l[2*4+1],y[10]=_*l[2*4+2],y}return{add:N,clone:I,copy:G,create:w,determinant:F,equals:ce,equalsApproximately:j,fromMat4:b,fromQuat:R,get3DScaling:le,getAxis:ie,getScaling:Te,getTranslation:fe,identity:z,inverse:X,invert:se,mul:de,mulScalar:M,multiply:q,multiplyScalar:C,negate:T,rotate:ke,rotateX:J,rotateY:ee,rotateZ:De,rotation:Le,rotationX:Z,rotationY:H,rotationZ:be,scale:Re,scale3D:ve,scaling:Se,scaling3D:re,set:f,setAxis:ue,setTranslation:_e,translate:we,translation:te,transpose:O,uniformScale:U,uniformScale3D:g,uniformScaling:Pe,uniformScaling3D:Y}}const gi=new Map;function ac(o){let r=gi.get(o);return r||(r=oc(o),gi.set(o,r)),r}function lc(o){const r=As(o);function a(i,v,d,p,c,m,E,P,A,$,K,oe,ne,ae,xe,Ae){const Ee=new o(16);return i!==void 0&&(Ee[0]=i,v!==void 0&&(Ee[1]=v,d!==void 0&&(Ee[2]=d,p!==void 0&&(Ee[3]=p,c!==void 0&&(Ee[4]=c,m!==void 0&&(Ee[5]=m,E!==void 0&&(Ee[6]=E,P!==void 0&&(Ee[7]=P,A!==void 0&&(Ee[8]=A,$!==void 0&&(Ee[9]=$,K!==void 0&&(Ee[10]=K,oe!==void 0&&(Ee[11]=oe,ne!==void 0&&(Ee[12]=ne,ae!==void 0&&(Ee[13]=ae,xe!==void 0&&(Ee[14]=xe,Ae!==void 0&&(Ee[15]=Ae)))))))))))))))),Ee}function w(i,v,d,p,c,m,E,P,A,$,K,oe,ne,ae,xe,Ae,Ee){const Be=Ee??new o(16);return Be[0]=i,Be[1]=v,Be[2]=d,Be[3]=p,Be[4]=c,Be[5]=m,Be[6]=E,Be[7]=P,Be[8]=A,Be[9]=$,Be[10]=K,Be[11]=oe,Be[12]=ne,Be[13]=ae,Be[14]=xe,Be[15]=Ae,Be}function f(i,v){const d=v??new o(16);return d[0]=i[0],d[1]=i[1],d[2]=i[2],d[3]=0,d[4]=i[4],d[5]=i[5],d[6]=i[6],d[7]=0,d[8]=i[8],d[9]=i[9],d[10]=i[10],d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function b(i,v){const d=v??new o(16),p=i[0],c=i[1],m=i[2],E=i[3],P=p+p,A=c+c,$=m+m,K=p*P,oe=c*P,ne=c*A,ae=m*P,xe=m*A,Ae=m*$,Ee=E*P,Be=E*A,Ge=E*$;return d[0]=1-ne-Ae,d[1]=oe+Ge,d[2]=ae-Be,d[3]=0,d[4]=oe-Ge,d[5]=1-K-Ae,d[6]=xe+Ee,d[7]=0,d[8]=ae+Be,d[9]=xe-Ee,d[10]=1-K-ne,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function R(i,v){const d=v??new o(16);return d[0]=-i[0],d[1]=-i[1],d[2]=-i[2],d[3]=-i[3],d[4]=-i[4],d[5]=-i[5],d[6]=-i[6],d[7]=-i[7],d[8]=-i[8],d[9]=-i[9],d[10]=-i[10],d[11]=-i[11],d[12]=-i[12],d[13]=-i[13],d[14]=-i[14],d[15]=-i[15],d}function T(i,v,d){const p=d??new o(16);return p[0]=i[0]+v[0],p[1]=i[1]+v[1],p[2]=i[2]+v[2],p[3]=i[3]+v[3],p[4]=i[4]+v[4],p[5]=i[5]+v[5],p[6]=i[6]+v[6],p[7]=i[7]+v[7],p[8]=i[8]+v[8],p[9]=i[9]+v[9],p[10]=i[10]+v[10],p[11]=i[11]+v[11],p[12]=i[12]+v[12],p[13]=i[13]+v[13],p[14]=i[14]+v[14],p[15]=i[15]+v[15],p}function C(i,v,d){const p=d??new o(16);return p[0]=i[0]*v,p[1]=i[1]*v,p[2]=i[2]*v,p[3]=i[3]*v,p[4]=i[4]*v,p[5]=i[5]*v,p[6]=i[6]*v,p[7]=i[7]*v,p[8]=i[8]*v,p[9]=i[9]*v,p[10]=i[10]*v,p[11]=i[11]*v,p[12]=i[12]*v,p[13]=i[13]*v,p[14]=i[14]*v,p[15]=i[15]*v,p}const M=C;function N(i,v){const d=v??new o(16);return d[0]=i[0],d[1]=i[1],d[2]=i[2],d[3]=i[3],d[4]=i[4],d[5]=i[5],d[6]=i[6],d[7]=i[7],d[8]=i[8],d[9]=i[9],d[10]=i[10],d[11]=i[11],d[12]=i[12],d[13]=i[13],d[14]=i[14],d[15]=i[15],d}const G=N;function I(i,v){return Math.abs(i[0]-v[0])<Fe&&Math.abs(i[1]-v[1])<Fe&&Math.abs(i[2]-v[2])<Fe&&Math.abs(i[3]-v[3])<Fe&&Math.abs(i[4]-v[4])<Fe&&Math.abs(i[5]-v[5])<Fe&&Math.abs(i[6]-v[6])<Fe&&Math.abs(i[7]-v[7])<Fe&&Math.abs(i[8]-v[8])<Fe&&Math.abs(i[9]-v[9])<Fe&&Math.abs(i[10]-v[10])<Fe&&Math.abs(i[11]-v[11])<Fe&&Math.abs(i[12]-v[12])<Fe&&Math.abs(i[13]-v[13])<Fe&&Math.abs(i[14]-v[14])<Fe&&Math.abs(i[15]-v[15])<Fe}function j(i,v){return i[0]===v[0]&&i[1]===v[1]&&i[2]===v[2]&&i[3]===v[3]&&i[4]===v[4]&&i[5]===v[5]&&i[6]===v[6]&&i[7]===v[7]&&i[8]===v[8]&&i[9]===v[9]&&i[10]===v[10]&&i[11]===v[11]&&i[12]===v[12]&&i[13]===v[13]&&i[14]===v[14]&&i[15]===v[15]}function ce(i){const v=i??new o(16);return v[0]=1,v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=1,v[6]=0,v[7]=0,v[8]=0,v[9]=0,v[10]=1,v[11]=0,v[12]=0,v[13]=0,v[14]=0,v[15]=1,v}function z(i,v){const d=v??new o(16);if(d===i){let Ie;return Ie=i[1],i[1]=i[4],i[4]=Ie,Ie=i[2],i[2]=i[8],i[8]=Ie,Ie=i[3],i[3]=i[12],i[12]=Ie,Ie=i[6],i[6]=i[9],i[9]=Ie,Ie=i[7],i[7]=i[13],i[13]=Ie,Ie=i[11],i[11]=i[14],i[14]=Ie,d}const p=i[0*4+0],c=i[0*4+1],m=i[0*4+2],E=i[0*4+3],P=i[1*4+0],A=i[1*4+1],$=i[1*4+2],K=i[1*4+3],oe=i[2*4+0],ne=i[2*4+1],ae=i[2*4+2],xe=i[2*4+3],Ae=i[3*4+0],Ee=i[3*4+1],Be=i[3*4+2],Ge=i[3*4+3];return d[0]=p,d[1]=P,d[2]=oe,d[3]=Ae,d[4]=c,d[5]=A,d[6]=ne,d[7]=Ee,d[8]=m,d[9]=$,d[10]=ae,d[11]=Be,d[12]=E,d[13]=K,d[14]=xe,d[15]=Ge,d}function O(i,v){const d=v??new o(16),p=i[0*4+0],c=i[0*4+1],m=i[0*4+2],E=i[0*4+3],P=i[1*4+0],A=i[1*4+1],$=i[1*4+2],K=i[1*4+3],oe=i[2*4+0],ne=i[2*4+1],ae=i[2*4+2],xe=i[2*4+3],Ae=i[3*4+0],Ee=i[3*4+1],Be=i[3*4+2],Ge=i[3*4+3],Ie=ae*Ge,Je=Be*xe,Ne=$*Ge,Ke=Be*K,qe=$*xe,We=ae*K,He=m*Ge,nt=Be*E,ct=m*xe,je=ae*E,st=m*K,rt=$*E,Ye=oe*Ee,it=Ae*ne,Qe=P*Ee,at=Ae*A,lt=P*ne,Pt=oe*A,ft=p*Ee,_t=Ae*c,zt=p*ne,Ot=oe*c,Tt=p*A,Lt=P*c,$t=Ie*A+Ke*ne+qe*Ee-(Je*A+Ne*ne+We*Ee),Ft=Je*c+He*ne+je*Ee-(Ie*c+nt*ne+ct*Ee),Bt=Ne*c+nt*A+st*Ee-(Ke*c+He*A+rt*Ee),Nt=We*c+ct*A+rt*ne-(qe*c+je*A+st*ne),ot=1/(p*$t+P*Ft+oe*Bt+Ae*Nt);return d[0]=ot*$t,d[1]=ot*Ft,d[2]=ot*Bt,d[3]=ot*Nt,d[4]=ot*(Je*P+Ne*oe+We*Ae-(Ie*P+Ke*oe+qe*Ae)),d[5]=ot*(Ie*p+nt*oe+ct*Ae-(Je*p+He*oe+je*Ae)),d[6]=ot*(Ke*p+He*P+rt*Ae-(Ne*p+nt*P+st*Ae)),d[7]=ot*(qe*p+je*P+st*oe-(We*p+ct*P+rt*oe)),d[8]=ot*(Ye*K+at*xe+lt*Ge-(it*K+Qe*xe+Pt*Ge)),d[9]=ot*(it*E+ft*xe+Ot*Ge-(Ye*E+_t*xe+zt*Ge)),d[10]=ot*(Qe*E+_t*K+Tt*Ge-(at*E+ft*K+Lt*Ge)),d[11]=ot*(Pt*E+zt*K+Lt*xe-(lt*E+Ot*K+Tt*xe)),d[12]=ot*(Qe*ae+Pt*Be+it*$-(lt*Be+Ye*$+at*ae)),d[13]=ot*(zt*Be+Ye*m+_t*ae-(ft*ae+Ot*Be+it*m)),d[14]=ot*(ft*$+Lt*Be+at*m-(Tt*Be+Qe*m+_t*$)),d[15]=ot*(Tt*ae+lt*m+Ot*$-(zt*$+Lt*ae+Pt*m)),d}function X(i){const v=i[0],d=i[0*4+1],p=i[0*4+2],c=i[0*4+3],m=i[1*4+0],E=i[1*4+1],P=i[1*4+2],A=i[1*4+3],$=i[2*4+0],K=i[2*4+1],oe=i[2*4+2],ne=i[2*4+3],ae=i[3*4+0],xe=i[3*4+1],Ae=i[3*4+2],Ee=i[3*4+3],Be=oe*Ee,Ge=Ae*ne,Ie=P*Ee,Je=Ae*A,Ne=P*ne,Ke=oe*A,qe=p*Ee,We=Ae*c,He=p*ne,nt=oe*c,ct=p*A,je=P*c,st=Be*E+Je*K+Ne*xe-(Ge*E+Ie*K+Ke*xe),rt=Ge*d+qe*K+nt*xe-(Be*d+We*K+He*xe),Ye=Ie*d+We*E+ct*xe-(Je*d+qe*E+je*xe),it=Ke*d+He*E+je*K-(Ne*d+nt*E+ct*K);return v*st+m*rt+$*Ye+ae*it}const F=O;function se(i,v,d){const p=d??new o(16),c=i[0],m=i[1],E=i[2],P=i[3],A=i[4+0],$=i[4+1],K=i[4+2],oe=i[4+3],ne=i[8+0],ae=i[8+1],xe=i[8+2],Ae=i[8+3],Ee=i[12+0],Be=i[12+1],Ge=i[12+2],Ie=i[12+3],Je=v[0],Ne=v[1],Ke=v[2],qe=v[3],We=v[4+0],He=v[4+1],nt=v[4+2],ct=v[4+3],je=v[8+0],st=v[8+1],rt=v[8+2],Ye=v[8+3],it=v[12+0],Qe=v[12+1],at=v[12+2],lt=v[12+3];return p[0]=c*Je+A*Ne+ne*Ke+Ee*qe,p[1]=m*Je+$*Ne+ae*Ke+Be*qe,p[2]=E*Je+K*Ne+xe*Ke+Ge*qe,p[3]=P*Je+oe*Ne+Ae*Ke+Ie*qe,p[4]=c*We+A*He+ne*nt+Ee*ct,p[5]=m*We+$*He+ae*nt+Be*ct,p[6]=E*We+K*He+xe*nt+Ge*ct,p[7]=P*We+oe*He+Ae*nt+Ie*ct,p[8]=c*je+A*st+ne*rt+Ee*Ye,p[9]=m*je+$*st+ae*rt+Be*Ye,p[10]=E*je+K*st+xe*rt+Ge*Ye,p[11]=P*je+oe*st+Ae*rt+Ie*Ye,p[12]=c*it+A*Qe+ne*at+Ee*lt,p[13]=m*it+$*Qe+ae*at+Be*lt,p[14]=E*it+K*Qe+xe*at+Ge*lt,p[15]=P*it+oe*Qe+Ae*at+Ie*lt,p}const q=se;function de(i,v,d){const p=d??ce();return i!==p&&(p[0]=i[0],p[1]=i[1],p[2]=i[2],p[3]=i[3],p[4]=i[4],p[5]=i[5],p[6]=i[6],p[7]=i[7],p[8]=i[8],p[9]=i[9],p[10]=i[10],p[11]=i[11]),p[12]=v[0],p[13]=v[1],p[14]=v[2],p[15]=1,p}function _e(i,v){const d=v??r.create();return d[0]=i[12],d[1]=i[13],d[2]=i[14],d}function fe(i,v,d){const p=d??r.create(),c=v*4;return p[0]=i[c+0],p[1]=i[c+1],p[2]=i[c+2],p}function ie(i,v,d,p){const c=p===i?p:N(i,p),m=d*4;return c[m+0]=v[0],c[m+1]=v[1],c[m+2]=v[2],c}function ue(i,v){const d=v??r.create(),p=i[0],c=i[1],m=i[2],E=i[4],P=i[5],A=i[6],$=i[8],K=i[9],oe=i[10];return d[0]=Math.sqrt(p*p+c*c+m*m),d[1]=Math.sqrt(E*E+P*P+A*A),d[2]=Math.sqrt($*$+K*K+oe*oe),d}function Te(i,v,d,p,c){const m=c??new o(16),E=Math.tan(Math.PI*.5-.5*i);if(m[0]=E/v,m[1]=0,m[2]=0,m[3]=0,m[4]=0,m[5]=E,m[6]=0,m[7]=0,m[8]=0,m[9]=0,m[11]=-1,m[12]=0,m[13]=0,m[15]=0,Number.isFinite(p)){const P=1/(d-p);m[10]=p*P,m[14]=p*d*P}else m[10]=-1,m[14]=-d;return m}function le(i,v,d,p=1/0,c){const m=c??new o(16),E=1/Math.tan(i*.5);if(m[0]=E/v,m[1]=0,m[2]=0,m[3]=0,m[4]=0,m[5]=E,m[6]=0,m[7]=0,m[8]=0,m[9]=0,m[11]=-1,m[12]=0,m[13]=0,m[15]=0,p===1/0)m[10]=0,m[14]=d;else{const P=1/(p-d);m[10]=d*P,m[14]=p*d*P}return m}function te(i,v,d,p,c,m,E){const P=E??new o(16);return P[0]=2/(v-i),P[1]=0,P[2]=0,P[3]=0,P[4]=0,P[5]=2/(p-d),P[6]=0,P[7]=0,P[8]=0,P[9]=0,P[10]=1/(c-m),P[11]=0,P[12]=(v+i)/(i-v),P[13]=(p+d)/(d-p),P[14]=c/(c-m),P[15]=1,P}function we(i,v,d,p,c,m,E){const P=E??new o(16),A=v-i,$=p-d,K=c-m;return P[0]=2*c/A,P[1]=0,P[2]=0,P[3]=0,P[4]=0,P[5]=2*c/$,P[6]=0,P[7]=0,P[8]=(i+v)/A,P[9]=(p+d)/$,P[10]=m/K,P[11]=-1,P[12]=0,P[13]=0,P[14]=c*m/K,P[15]=0,P}function Le(i,v,d,p,c,m=1/0,E){const P=E??new o(16),A=v-i,$=p-d;if(P[0]=2*c/A,P[1]=0,P[2]=0,P[3]=0,P[4]=0,P[5]=2*c/$,P[6]=0,P[7]=0,P[8]=(i+v)/A,P[9]=(p+d)/$,P[11]=-1,P[12]=0,P[13]=0,P[15]=0,m===1/0)P[10]=0,P[14]=c;else{const K=1/(m-c);P[10]=c*K,P[14]=m*c*K}return P}const ke=r.create(),Z=r.create(),J=r.create();function H(i,v,d,p){const c=p??new o(16);return r.normalize(r.subtract(v,i,J),J),r.normalize(r.cross(d,J,ke),ke),r.normalize(r.cross(J,ke,Z),Z),c[0]=ke[0],c[1]=ke[1],c[2]=ke[2],c[3]=0,c[4]=Z[0],c[5]=Z[1],c[6]=Z[2],c[7]=0,c[8]=J[0],c[9]=J[1],c[10]=J[2],c[11]=0,c[12]=i[0],c[13]=i[1],c[14]=i[2],c[15]=1,c}function ee(i,v,d,p){const c=p??new o(16);return r.normalize(r.subtract(i,v,J),J),r.normalize(r.cross(d,J,ke),ke),r.normalize(r.cross(J,ke,Z),Z),c[0]=ke[0],c[1]=ke[1],c[2]=ke[2],c[3]=0,c[4]=Z[0],c[5]=Z[1],c[6]=Z[2],c[7]=0,c[8]=J[0],c[9]=J[1],c[10]=J[2],c[11]=0,c[12]=i[0],c[13]=i[1],c[14]=i[2],c[15]=1,c}function be(i,v,d,p){const c=p??new o(16);return r.normalize(r.subtract(i,v,J),J),r.normalize(r.cross(d,J,ke),ke),r.normalize(r.cross(J,ke,Z),Z),c[0]=ke[0],c[1]=Z[0],c[2]=J[0],c[3]=0,c[4]=ke[1],c[5]=Z[1],c[6]=J[1],c[7]=0,c[8]=ke[2],c[9]=Z[2],c[10]=J[2],c[11]=0,c[12]=-(ke[0]*i[0]+ke[1]*i[1]+ke[2]*i[2]),c[13]=-(Z[0]*i[0]+Z[1]*i[1]+Z[2]*i[2]),c[14]=-(J[0]*i[0]+J[1]*i[1]+J[2]*i[2]),c[15]=1,c}function De(i,v){const d=v??new o(16);return d[0]=1,d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=1,d[6]=0,d[7]=0,d[8]=0,d[9]=0,d[10]=1,d[11]=0,d[12]=i[0],d[13]=i[1],d[14]=i[2],d[15]=1,d}function Se(i,v,d){const p=d??new o(16),c=v[0],m=v[1],E=v[2],P=i[0],A=i[1],$=i[2],K=i[3],oe=i[1*4+0],ne=i[1*4+1],ae=i[1*4+2],xe=i[1*4+3],Ae=i[2*4+0],Ee=i[2*4+1],Be=i[2*4+2],Ge=i[2*4+3],Ie=i[3*4+0],Je=i[3*4+1],Ne=i[3*4+2],Ke=i[3*4+3];return i!==p&&(p[0]=P,p[1]=A,p[2]=$,p[3]=K,p[4]=oe,p[5]=ne,p[6]=ae,p[7]=xe,p[8]=Ae,p[9]=Ee,p[10]=Be,p[11]=Ge),p[12]=P*c+oe*m+Ae*E+Ie,p[13]=A*c+ne*m+Ee*E+Je,p[14]=$*c+ae*m+Be*E+Ne,p[15]=K*c+xe*m+Ge*E+Ke,p}function Re(i,v){const d=v??new o(16),p=Math.cos(i),c=Math.sin(i);return d[0]=1,d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=p,d[6]=c,d[7]=0,d[8]=0,d[9]=-c,d[10]=p,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function re(i,v,d){const p=d??new o(16),c=i[4],m=i[5],E=i[6],P=i[7],A=i[8],$=i[9],K=i[10],oe=i[11],ne=Math.cos(v),ae=Math.sin(v);return p[4]=ne*c+ae*A,p[5]=ne*m+ae*$,p[6]=ne*E+ae*K,p[7]=ne*P+ae*oe,p[8]=ne*A-ae*c,p[9]=ne*$-ae*m,p[10]=ne*K-ae*E,p[11]=ne*oe-ae*P,i!==p&&(p[0]=i[0],p[1]=i[1],p[2]=i[2],p[3]=i[3],p[12]=i[12],p[13]=i[13],p[14]=i[14],p[15]=i[15]),p}function ve(i,v){const d=v??new o(16),p=Math.cos(i),c=Math.sin(i);return d[0]=p,d[1]=0,d[2]=-c,d[3]=0,d[4]=0,d[5]=1,d[6]=0,d[7]=0,d[8]=c,d[9]=0,d[10]=p,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function Pe(i,v,d){const p=d??new o(16),c=i[0*4+0],m=i[0*4+1],E=i[0*4+2],P=i[0*4+3],A=i[2*4+0],$=i[2*4+1],K=i[2*4+2],oe=i[2*4+3],ne=Math.cos(v),ae=Math.sin(v);return p[0]=ne*c-ae*A,p[1]=ne*m-ae*$,p[2]=ne*E-ae*K,p[3]=ne*P-ae*oe,p[8]=ne*A+ae*c,p[9]=ne*$+ae*m,p[10]=ne*K+ae*E,p[11]=ne*oe+ae*P,i!==p&&(p[4]=i[4],p[5]=i[5],p[6]=i[6],p[7]=i[7],p[12]=i[12],p[13]=i[13],p[14]=i[14],p[15]=i[15]),p}function U(i,v){const d=v??new o(16),p=Math.cos(i),c=Math.sin(i);return d[0]=p,d[1]=c,d[2]=0,d[3]=0,d[4]=-c,d[5]=p,d[6]=0,d[7]=0,d[8]=0,d[9]=0,d[10]=1,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function Y(i,v,d){const p=d??new o(16),c=i[0*4+0],m=i[0*4+1],E=i[0*4+2],P=i[0*4+3],A=i[1*4+0],$=i[1*4+1],K=i[1*4+2],oe=i[1*4+3],ne=Math.cos(v),ae=Math.sin(v);return p[0]=ne*c+ae*A,p[1]=ne*m+ae*$,p[2]=ne*E+ae*K,p[3]=ne*P+ae*oe,p[4]=ne*A-ae*c,p[5]=ne*$-ae*m,p[6]=ne*K-ae*E,p[7]=ne*oe-ae*P,i!==p&&(p[8]=i[8],p[9]=i[9],p[10]=i[10],p[11]=i[11],p[12]=i[12],p[13]=i[13],p[14]=i[14],p[15]=i[15]),p}function g(i,v,d){const p=d??new o(16);let c=i[0],m=i[1],E=i[2];const P=Math.sqrt(c*c+m*m+E*E);c/=P,m/=P,E/=P;const A=c*c,$=m*m,K=E*E,oe=Math.cos(v),ne=Math.sin(v),ae=1-oe;return p[0]=A+(1-A)*oe,p[1]=c*m*ae+E*ne,p[2]=c*E*ae-m*ne,p[3]=0,p[4]=c*m*ae-E*ne,p[5]=$+(1-$)*oe,p[6]=m*E*ae+c*ne,p[7]=0,p[8]=c*E*ae+m*ne,p[9]=m*E*ae-c*ne,p[10]=K+(1-K)*oe,p[11]=0,p[12]=0,p[13]=0,p[14]=0,p[15]=1,p}const l=g;function _(i,v,d,p){const c=p??new o(16);let m=v[0],E=v[1],P=v[2];const A=Math.sqrt(m*m+E*E+P*P);m/=A,E/=A,P/=A;const $=m*m,K=E*E,oe=P*P,ne=Math.cos(d),ae=Math.sin(d),xe=1-ne,Ae=$+(1-$)*ne,Ee=m*E*xe+P*ae,Be=m*P*xe-E*ae,Ge=m*E*xe-P*ae,Ie=K+(1-K)*ne,Je=E*P*xe+m*ae,Ne=m*P*xe+E*ae,Ke=E*P*xe-m*ae,qe=oe+(1-oe)*ne,We=i[0],He=i[1],nt=i[2],ct=i[3],je=i[4],st=i[5],rt=i[6],Ye=i[7],it=i[8],Qe=i[9],at=i[10],lt=i[11];return c[0]=Ae*We+Ee*je+Be*it,c[1]=Ae*He+Ee*st+Be*Qe,c[2]=Ae*nt+Ee*rt+Be*at,c[3]=Ae*ct+Ee*Ye+Be*lt,c[4]=Ge*We+Ie*je+Je*it,c[5]=Ge*He+Ie*st+Je*Qe,c[6]=Ge*nt+Ie*rt+Je*at,c[7]=Ge*ct+Ie*Ye+Je*lt,c[8]=Ne*We+Ke*je+qe*it,c[9]=Ne*He+Ke*st+qe*Qe,c[10]=Ne*nt+Ke*rt+qe*at,c[11]=Ne*ct+Ke*Ye+qe*lt,i!==c&&(c[12]=i[12],c[13]=i[13],c[14]=i[14],c[15]=i[15]),c}const h=_;function y(i,v){const d=v??new o(16);return d[0]=i[0],d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=i[1],d[6]=0,d[7]=0,d[8]=0,d[9]=0,d[10]=i[2],d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function k(i,v,d){const p=d??new o(16),c=v[0],m=v[1],E=v[2];return p[0]=c*i[0*4+0],p[1]=c*i[0*4+1],p[2]=c*i[0*4+2],p[3]=c*i[0*4+3],p[4]=m*i[1*4+0],p[5]=m*i[1*4+1],p[6]=m*i[1*4+2],p[7]=m*i[1*4+3],p[8]=E*i[2*4+0],p[9]=E*i[2*4+1],p[10]=E*i[2*4+2],p[11]=E*i[2*4+3],i!==p&&(p[12]=i[12],p[13]=i[13],p[14]=i[14],p[15]=i[15]),p}function x(i,v){const d=v??new o(16);return d[0]=i,d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=i,d[6]=0,d[7]=0,d[8]=0,d[9]=0,d[10]=i,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function S(i,v,d){const p=d??new o(16);return p[0]=v*i[0*4+0],p[1]=v*i[0*4+1],p[2]=v*i[0*4+2],p[3]=v*i[0*4+3],p[4]=v*i[1*4+0],p[5]=v*i[1*4+1],p[6]=v*i[1*4+2],p[7]=v*i[1*4+3],p[8]=v*i[2*4+0],p[9]=v*i[2*4+1],p[10]=v*i[2*4+2],p[11]=v*i[2*4+3],i!==p&&(p[12]=i[12],p[13]=i[13],p[14]=i[14],p[15]=i[15]),p}return{add:T,aim:H,axisRotate:_,axisRotation:g,cameraAim:ee,clone:G,copy:N,create:a,determinant:X,equals:j,equalsApproximately:I,fromMat3:f,fromQuat:b,frustum:we,frustumReverseZ:Le,getAxis:fe,getScaling:ue,getTranslation:_e,identity:ce,inverse:O,invert:F,lookAt:be,mul:q,mulScalar:M,multiply:se,multiplyScalar:C,negate:R,ortho:te,perspective:Te,perspectiveReverseZ:le,rotate:h,rotateX:re,rotateY:Pe,rotateZ:Y,rotation:l,rotationX:Re,rotationY:ve,rotationZ:U,scale:k,scaling:y,set:w,setAxis:ie,setTranslation:de,translate:Se,translation:De,transpose:z,uniformScale:S,uniformScaling:x}}const wi=new Map;function cc(o){let r=wi.get(o);return r||(r=lc(o),wi.set(o,r)),r}function uc(o){const r=As(o);function a(U,Y,g,l){const _=new o(4);return U!==void 0&&(_[0]=U,Y!==void 0&&(_[1]=Y,g!==void 0&&(_[2]=g,l!==void 0&&(_[3]=l)))),_}const w=a;function f(U,Y,g,l,_){const h=_??new o(4);return h[0]=U,h[1]=Y,h[2]=g,h[3]=l,h}function b(U,Y,g){const l=g??new o(4),_=Y*.5,h=Math.sin(_);return l[0]=h*U[0],l[1]=h*U[1],l[2]=h*U[2],l[3]=Math.cos(_),l}function R(U,Y){const g=Y??r.create(3),l=Math.acos(U[3])*2,_=Math.sin(l*.5);return _>Fe?(g[0]=U[0]/_,g[1]=U[1]/_,g[2]=U[2]/_):(g[0]=1,g[1]=0,g[2]=0),{angle:l,axis:g}}function T(U,Y){const g=Te(U,Y);return Math.acos(2*g*g-1)}function C(U,Y,g){const l=g??new o(4),_=U[0],h=U[1],y=U[2],k=U[3],x=Y[0],S=Y[1],i=Y[2],v=Y[3];return l[0]=_*v+k*x+h*i-y*S,l[1]=h*v+k*S+y*x-_*i,l[2]=y*v+k*i+_*S-h*x,l[3]=k*v-_*x-h*S-y*i,l}const M=C;function N(U,Y,g){const l=g??new o(4),_=Y*.5,h=U[0],y=U[1],k=U[2],x=U[3],S=Math.sin(_),i=Math.cos(_);return l[0]=h*i+x*S,l[1]=y*i+k*S,l[2]=k*i-y*S,l[3]=x*i-h*S,l}function G(U,Y,g){const l=g??new o(4),_=Y*.5,h=U[0],y=U[1],k=U[2],x=U[3],S=Math.sin(_),i=Math.cos(_);return l[0]=h*i-k*S,l[1]=y*i+x*S,l[2]=k*i+h*S,l[3]=x*i-y*S,l}function I(U,Y,g){const l=g??new o(4),_=Y*.5,h=U[0],y=U[1],k=U[2],x=U[3],S=Math.sin(_),i=Math.cos(_);return l[0]=h*i+y*S,l[1]=y*i-h*S,l[2]=k*i+x*S,l[3]=x*i-k*S,l}function j(U,Y,g,l){const _=l??new o(4),h=U[0],y=U[1],k=U[2],x=U[3];let S=Y[0],i=Y[1],v=Y[2],d=Y[3],p=h*S+y*i+k*v+x*d;p<0&&(p=-p,S=-S,i=-i,v=-v,d=-d);let c,m;if(1-p>Fe){const E=Math.acos(p),P=Math.sin(E);c=Math.sin((1-g)*E)/P,m=Math.sin(g*E)/P}else c=1-g,m=g;return _[0]=c*h+m*S,_[1]=c*y+m*i,_[2]=c*k+m*v,_[3]=c*x+m*d,_}function ce(U,Y){const g=Y??new o(4),l=U[0],_=U[1],h=U[2],y=U[3],k=l*l+_*_+h*h+y*y,x=k?1/k:0;return g[0]=-l*x,g[1]=-_*x,g[2]=-h*x,g[3]=y*x,g}function z(U,Y){const g=Y??new o(4);return g[0]=-U[0],g[1]=-U[1],g[2]=-U[2],g[3]=U[3],g}function O(U,Y){const g=Y??new o(4),l=U[0]+U[5]+U[10];if(l>0){const _=Math.sqrt(l+1);g[3]=.5*_;const h=.5/_;g[0]=(U[6]-U[9])*h,g[1]=(U[8]-U[2])*h,g[2]=(U[1]-U[4])*h}else{let _=0;U[5]>U[0]&&(_=1),U[10]>U[_*4+_]&&(_=2);const h=(_+1)%3,y=(_+2)%3,k=Math.sqrt(U[_*4+_]-U[h*4+h]-U[y*4+y]+1);g[_]=.5*k;const x=.5/k;g[3]=(U[h*4+y]-U[y*4+h])*x,g[h]=(U[h*4+_]+U[_*4+h])*x,g[y]=(U[y*4+_]+U[_*4+y])*x}return g}function X(U,Y,g,l,_){const h=_??new o(4),y=U*.5,k=Y*.5,x=g*.5,S=Math.sin(y),i=Math.cos(y),v=Math.sin(k),d=Math.cos(k),p=Math.sin(x),c=Math.cos(x);switch(l){case"xyz":h[0]=S*d*c+i*v*p,h[1]=i*v*c-S*d*p,h[2]=i*d*p+S*v*c,h[3]=i*d*c-S*v*p;break;case"xzy":h[0]=S*d*c-i*v*p,h[1]=i*v*c-S*d*p,h[2]=i*d*p+S*v*c,h[3]=i*d*c+S*v*p;break;case"yxz":h[0]=S*d*c+i*v*p,h[1]=i*v*c-S*d*p,h[2]=i*d*p-S*v*c,h[3]=i*d*c+S*v*p;break;case"yzx":h[0]=S*d*c+i*v*p,h[1]=i*v*c+S*d*p,h[2]=i*d*p-S*v*c,h[3]=i*d*c-S*v*p;break;case"zxy":h[0]=S*d*c-i*v*p,h[1]=i*v*c+S*d*p,h[2]=i*d*p+S*v*c,h[3]=i*d*c-S*v*p;break;case"zyx":h[0]=S*d*c-i*v*p,h[1]=i*v*c+S*d*p,h[2]=i*d*p-S*v*c,h[3]=i*d*c+S*v*p;break;default:throw new Error(`Unknown rotation order: ${l}`)}return h}function F(U,Y){const g=Y??new o(4);return g[0]=U[0],g[1]=U[1],g[2]=U[2],g[3]=U[3],g}const se=F;function q(U,Y,g){const l=g??new o(4);return l[0]=U[0]+Y[0],l[1]=U[1]+Y[1],l[2]=U[2]+Y[2],l[3]=U[3]+Y[3],l}function de(U,Y,g){const l=g??new o(4);return l[0]=U[0]-Y[0],l[1]=U[1]-Y[1],l[2]=U[2]-Y[2],l[3]=U[3]-Y[3],l}const _e=de;function fe(U,Y,g){const l=g??new o(4);return l[0]=U[0]*Y,l[1]=U[1]*Y,l[2]=U[2]*Y,l[3]=U[3]*Y,l}const ie=fe;function ue(U,Y,g){const l=g??new o(4);return l[0]=U[0]/Y,l[1]=U[1]/Y,l[2]=U[2]/Y,l[3]=U[3]/Y,l}function Te(U,Y){return U[0]*Y[0]+U[1]*Y[1]+U[2]*Y[2]+U[3]*Y[3]}function le(U,Y,g,l){const _=l??new o(4);return _[0]=U[0]+g*(Y[0]-U[0]),_[1]=U[1]+g*(Y[1]-U[1]),_[2]=U[2]+g*(Y[2]-U[2]),_[3]=U[3]+g*(Y[3]-U[3]),_}function te(U){const Y=U[0],g=U[1],l=U[2],_=U[3];return Math.sqrt(Y*Y+g*g+l*l+_*_)}const we=te;function Le(U){const Y=U[0],g=U[1],l=U[2],_=U[3];return Y*Y+g*g+l*l+_*_}const ke=Le;function Z(U,Y){const g=Y??new o(4),l=U[0],_=U[1],h=U[2],y=U[3],k=Math.sqrt(l*l+_*_+h*h+y*y);return k>1e-5?(g[0]=l/k,g[1]=_/k,g[2]=h/k,g[3]=y/k):(g[0]=0,g[1]=0,g[2]=0,g[3]=1),g}function J(U,Y){return Math.abs(U[0]-Y[0])<Fe&&Math.abs(U[1]-Y[1])<Fe&&Math.abs(U[2]-Y[2])<Fe&&Math.abs(U[3]-Y[3])<Fe}function H(U,Y){return U[0]===Y[0]&&U[1]===Y[1]&&U[2]===Y[2]&&U[3]===Y[3]}function ee(U){const Y=U??new o(4);return Y[0]=0,Y[1]=0,Y[2]=0,Y[3]=1,Y}const be=r.create(),De=r.create(),Se=r.create();function Re(U,Y,g){const l=g??new o(4),_=r.dot(U,Y);return _<-.999999?(r.cross(De,U,be),r.len(be)<1e-6&&r.cross(Se,U,be),r.normalize(be,be),b(be,Math.PI,l),l):_>.999999?(l[0]=0,l[1]=0,l[2]=0,l[3]=1,l):(r.cross(U,Y,be),l[0]=be[0],l[1]=be[1],l[2]=be[2],l[3]=1+_,Z(l,l))}const re=new o(4),ve=new o(4);function Pe(U,Y,g,l,_,h){const y=h??new o(4);return j(U,l,_,re),j(Y,g,_,ve),j(re,ve,2*_*(1-_),y),y}return{create:a,fromValues:w,set:f,fromAxisAngle:b,toAxisAngle:R,angle:T,multiply:C,mul:M,rotateX:N,rotateY:G,rotateZ:I,slerp:j,inverse:ce,conjugate:z,fromMat:O,fromEuler:X,copy:F,clone:se,add:q,subtract:de,sub:_e,mulScalar:fe,scale:ie,divScalar:ue,dot:Te,lerp:le,length:te,len:we,lengthSq:Le,lenSq:ke,normalize:Z,equalsApproximately:J,equals:H,identity:ee,rotationTo:Re,sqlerp:Pe}}const xi=new Map;function dc(o){let r=xi.get(o);return r||(r=uc(o),xi.set(o,r)),r}function pc(o){function r(g,l,_,h){const y=new o(4);return g!==void 0&&(y[0]=g,l!==void 0&&(y[1]=l,_!==void 0&&(y[2]=_,h!==void 0&&(y[3]=h)))),y}const a=r;function w(g,l,_,h,y){const k=y??new o(4);return k[0]=g,k[1]=l,k[2]=_,k[3]=h,k}function f(g,l){const _=l??new o(4);return _[0]=Math.ceil(g[0]),_[1]=Math.ceil(g[1]),_[2]=Math.ceil(g[2]),_[3]=Math.ceil(g[3]),_}function b(g,l){const _=l??new o(4);return _[0]=Math.floor(g[0]),_[1]=Math.floor(g[1]),_[2]=Math.floor(g[2]),_[3]=Math.floor(g[3]),_}function R(g,l){const _=l??new o(4);return _[0]=Math.round(g[0]),_[1]=Math.round(g[1]),_[2]=Math.round(g[2]),_[3]=Math.round(g[3]),_}function T(g,l=0,_=1,h){const y=h??new o(4);return y[0]=Math.min(_,Math.max(l,g[0])),y[1]=Math.min(_,Math.max(l,g[1])),y[2]=Math.min(_,Math.max(l,g[2])),y[3]=Math.min(_,Math.max(l,g[3])),y}function C(g,l,_){const h=_??new o(4);return h[0]=g[0]+l[0],h[1]=g[1]+l[1],h[2]=g[2]+l[2],h[3]=g[3]+l[3],h}function M(g,l,_,h){const y=h??new o(4);return y[0]=g[0]+l[0]*_,y[1]=g[1]+l[1]*_,y[2]=g[2]+l[2]*_,y[3]=g[3]+l[3]*_,y}function N(g,l,_){const h=_??new o(4);return h[0]=g[0]-l[0],h[1]=g[1]-l[1],h[2]=g[2]-l[2],h[3]=g[3]-l[3],h}const G=N;function I(g,l){return Math.abs(g[0]-l[0])<Fe&&Math.abs(g[1]-l[1])<Fe&&Math.abs(g[2]-l[2])<Fe&&Math.abs(g[3]-l[3])<Fe}function j(g,l){return g[0]===l[0]&&g[1]===l[1]&&g[2]===l[2]&&g[3]===l[3]}function ce(g,l,_,h){const y=h??new o(4);return y[0]=g[0]+_*(l[0]-g[0]),y[1]=g[1]+_*(l[1]-g[1]),y[2]=g[2]+_*(l[2]-g[2]),y[3]=g[3]+_*(l[3]-g[3]),y}function z(g,l,_,h){const y=h??new o(4);return y[0]=g[0]+_[0]*(l[0]-g[0]),y[1]=g[1]+_[1]*(l[1]-g[1]),y[2]=g[2]+_[2]*(l[2]-g[2]),y[3]=g[3]+_[3]*(l[3]-g[3]),y}function O(g,l,_){const h=_??new o(4);return h[0]=Math.max(g[0],l[0]),h[1]=Math.max(g[1],l[1]),h[2]=Math.max(g[2],l[2]),h[3]=Math.max(g[3],l[3]),h}function X(g,l,_){const h=_??new o(4);return h[0]=Math.min(g[0],l[0]),h[1]=Math.min(g[1],l[1]),h[2]=Math.min(g[2],l[2]),h[3]=Math.min(g[3],l[3]),h}function F(g,l,_){const h=_??new o(4);return h[0]=g[0]*l,h[1]=g[1]*l,h[2]=g[2]*l,h[3]=g[3]*l,h}const se=F;function q(g,l,_){const h=_??new o(4);return h[0]=g[0]/l,h[1]=g[1]/l,h[2]=g[2]/l,h[3]=g[3]/l,h}function de(g,l){const _=l??new o(4);return _[0]=1/g[0],_[1]=1/g[1],_[2]=1/g[2],_[3]=1/g[3],_}const _e=de;function fe(g,l){return g[0]*l[0]+g[1]*l[1]+g[2]*l[2]+g[3]*l[3]}function ie(g){const l=g[0],_=g[1],h=g[2],y=g[3];return Math.sqrt(l*l+_*_+h*h+y*y)}const ue=ie;function Te(g){const l=g[0],_=g[1],h=g[2],y=g[3];return l*l+_*_+h*h+y*y}const le=Te;function te(g,l){const _=g[0]-l[0],h=g[1]-l[1],y=g[2]-l[2],k=g[3]-l[3];return Math.sqrt(_*_+h*h+y*y+k*k)}const we=te;function Le(g,l){const _=g[0]-l[0],h=g[1]-l[1],y=g[2]-l[2],k=g[3]-l[3];return _*_+h*h+y*y+k*k}const ke=Le;function Z(g,l){const _=l??new o(4),h=g[0],y=g[1],k=g[2],x=g[3],S=Math.sqrt(h*h+y*y+k*k+x*x);return S>1e-5?(_[0]=h/S,_[1]=y/S,_[2]=k/S,_[3]=x/S):(_[0]=0,_[1]=0,_[2]=0,_[3]=0),_}function J(g,l){const _=l??new o(4);return _[0]=-g[0],_[1]=-g[1],_[2]=-g[2],_[3]=-g[3],_}function H(g,l){const _=l??new o(4);return _[0]=g[0],_[1]=g[1],_[2]=g[2],_[3]=g[3],_}const ee=H;function be(g,l,_){const h=_??new o(4);return h[0]=g[0]*l[0],h[1]=g[1]*l[1],h[2]=g[2]*l[2],h[3]=g[3]*l[3],h}const De=be;function Se(g,l,_){const h=_??new o(4);return h[0]=g[0]/l[0],h[1]=g[1]/l[1],h[2]=g[2]/l[2],h[3]=g[3]/l[3],h}const Re=Se;function re(g){const l=g??new o(4);return l[0]=0,l[1]=0,l[2]=0,l[3]=0,l}function ve(g,l,_){const h=_??new o(4),y=g[0],k=g[1],x=g[2],S=g[3];return h[0]=l[0]*y+l[4]*k+l[8]*x+l[12]*S,h[1]=l[1]*y+l[5]*k+l[9]*x+l[13]*S,h[2]=l[2]*y+l[6]*k+l[10]*x+l[14]*S,h[3]=l[3]*y+l[7]*k+l[11]*x+l[15]*S,h}function Pe(g,l,_){const h=_??new o(4);return Z(g,h),F(h,l,h)}function U(g,l,_){const h=_??new o(4);return ie(g)>l?Pe(g,l,h):H(g,h)}function Y(g,l,_){const h=_??new o(4);return ce(g,l,.5,h)}return{create:r,fromValues:a,set:w,ceil:f,floor:b,round:R,clamp:T,add:C,addScaled:M,subtract:N,sub:G,equalsApproximately:I,equals:j,lerp:ce,lerpV:z,max:O,min:X,mulScalar:F,scale:se,divScalar:q,inverse:de,invert:_e,dot:fe,length:ie,len:ue,lengthSq:Te,lenSq:le,distance:te,dist:we,distanceSq:Le,distSq:ke,normalize:Z,negate:J,copy:H,clone:ee,multiply:be,mul:De,divide:Se,div:Re,zero:re,transformMat4:ve,setLength:Pe,truncate:U,midpoint:Y}}const yi=new Map;function hc(o){let r=yi.get(o);return r||(r=pc(o),yi.set(o,r)),r}function _r(o,r,a,w,f,b){return{mat3:ac(o),mat4:cc(r),quat:dc(a),vec2:ji(w),vec3:As(f),vec4:hc(b)}}const{mat3:Ct,mat4:vt,quat:dt,vec2:Pi,vec3:W,vec4:yu}=_r(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);_r(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);_r(sc,Array,Array,Array,Array,Array);const Si=document.querySelector("#log");let Rt=null,Pn=null;function Hi(){if(Rt)return Rt;Rt=document.createElement("div"),Rt.className="ply-spinner-overlay";const o=document.createElement("div");return o.className="ply-spinner",Rt.appendChild(o),Pn=document.createElement("div"),Pn.className="ply-spinner-label",Rt.appendChild(Pn),Rt.style.display="none",document.body.appendChild(Rt),Rt}function Nn(o){Hi(),Pn&&o&&(Pn.textContent=o),Rt&&(Rt.style.opacity="1",Rt.style.display="flex")}function Dt(o){Hi(),Pn&&(Pn.textContent=o)}function jt(){if(!Rt)return;const o=Rt;o.style.opacity="0",setTimeout(()=>{o.style.opacity==="0"&&(o.style.display="none")},220)}function Yi(o,r){if(!Si)return;const a=document.createElement("p");a.innerText=o,r&&Object.assign(a.style,r),Si.appendChild(a)}async function wt(o){console.log(o),Yi(o)}async function fc(o){console.error(o),Yi(o,{color:"red",backgroundColor:"rgba(255, 0, 0, 0.1)"})}let Zi;function Xi(){Zi=performance.now()}function Ei(o){const r=performance.now()-Zi;wt(`⏱️ ${o} Time: ${r.toFixed(0)} ms`)}function _c(o,r){if(!o)throw new Error(r&&(typeof r=="string"?r:r()))}function Fn(o){return o+3&-4}const mc=2,vc=3,bc=5,gc=6,ns=7,ys=8,rs=9,is=10;function Vn(o){const r=new TextDecoder("ascii"),a=r.decode(new Uint8Array(o,0,4));if(a!=="NAT2")throw new Error(`NAT2 bad magic: '${a}'`);if(o.byteLength<4+64)throw new Error(`NAT2 truncated (${o.byteLength} bytes < 4 + 64)`);const w=new DataView(o),f=4,b=w.getUint32(f+0,!0),R=w.getUint32(f+4,!0),T=w.getUint32(f+8,!0),C=w.getUint32(f+12,!0),M=w.getUint32(f+16,!0),N=w.getFloat32(f+20,!0),G=w.getUint32(f+24,!0),I=w.getUint32(f+28,!0),j=w.getFloat32(f+32,!0),ce=w.getFloat32(f+36,!0),z=w.getFloat32(f+40,!0),O=w.getUint32(f+44,!0),X=w.getFloat32(f+48,!0),F=w.getFloat32(f+52,!0),se=w.getUint32(f+56,!0),q=w.getUint32(f+60,!0),de=I===rs||I===is,_e=de?q:0,fe=de?0:q&255,ie=de?0:q>>8&255,ue=fe>0?fe:1;if(I===bc||I===gc)throw new Error(`NAT2: paired-RVQ format=${I} is retired 2026-07-23; re-bake with typeD (--bc7-codebook)`);const Te=I===rs||I===is;if(I!==mc&&I!==vc&&I!==ns&&I!==ys&&!Te)throw new Error(`NAT2: Halloumi-WS supports BC7 (2), ASTC 4x4 (3), BC7-codebook (7), ASTC-codebook (8), probe-BC7 (9) or probe-ASTC (10); got format=${I}`);if(b%4!==0||O%4!==0)throw new Error(`NAT2 block-format dims must be 4-aligned: width=${b} layer_h=${O}`);let le=f+64;const te=(se+1)*4,we=new Uint32Array(o.slice(le,le+te));le+=te;let Le;if(ue>1){const re=(ue+1)*4;if(le+re>o.byteLength)throw new Error(`NAT2 truncated at column_cuts (need ${re} from ${le})`);Le=new Uint32Array(o.slice(le,le+re)),le+=re}else Le=new Uint32Array([0,b]);let ke=0;for(let re=0;re<ue;re++){const ve=Le[re+1]-Le[re];ve>ke&&(ke=ve)}if(Te){const re=_e&2?21:_e&1?7:6,ve=M*re*4;if(le+ve>o.byteLength)throw new Error(`NAT2 truncated at probes: need ${ve} more bytes from offset ${le}, have ${o.byteLength-le}`);const Pe=new Float32Array(o.slice(le,le+ve));le+=ve;const U=Math.max(1,_e>>8&255),Y=[];let g=0;for(let k=0,x=b,S=O;k<U;k++,x>>=1,S>>=1){const i=Math.max(1,x>>2)*Math.max(1,S>>2)*16;Y.push(i),g+=i}const l=o.byteLength-le;if(l<g)throw new Error(`NAT2 probe atlas truncated: need ${g} bytes for ${b}x${O} x${U} mips, have ${l}`);const _=[];let h=le;for(const k of Y)_.push(new Uint8Array(o.slice(h,h+k))),h+=k;const y=_[0];return{width:b,height:R,channels:T,kernel_type:C,num_rects:M,uv_extent:N,sb_number:G,format:I,sh_bias:j,res_bias:ce,compact_mult:z,layer_h:O,atlas_scale:X,atlas_offset:F,n_layers:se,n_cols:ue,layer_cuts:we,column_cuts:Le,slice_width:ke,rects_expanded:Pe,atlas_bytes:y,mip_bytes:_,probe_mode:_e&2?3:_e&1?2:1}}const Z=M*4*4;if(le+Z>o.byteLength)throw new Error(`NAT2 truncated at rects: need ${Z} more bytes from offset ${le}, have ${o.byteLength-le}`);const J=new Float32Array(o.slice(le,le+Z));le+=Z;const H=new Float32Array(M*5);for(let re=0;re<M;re++){const ve=J[re*4+0],Pe=J[re*4+1],U=J[re*4+2],Y=J[re*4+3];let g=0;for(let k=1;k<=se&&we[k]<=Pe;k++)g=k;let l=0;for(let k=1;k<=ue&&Le[k]<=ve;k++)l=k;const _=Pe-we[g],h=ve-Le[l],y=l*se+g;H[re*5+0]=h,H[re*5+1]=_,H[re*5+2]=U,H[re*5+3]=Y,H[re*5+4]=y}let ee,be;const De=ue,Re=b/4*16;if(I===ns||I===ys){if(le+24>o.byteLength)throw new Error("NAT2 truncated at typeD sub-header");const re=I===ns?"BCCB":"ACCB",ve=r.decode(new Uint8Array(o,le,4));if(ve!==re)throw new Error(`NAT2 typeD bad sub-magic: expected '${re}' got '${ve}'`);const Pe=w.getUint32(le+4,!0),U=w.getUint32(le+8,!0),Y=w.getUint32(le+12,!0),g=w.getUint32(le+16,!0),l=w.getUint32(le+20,!0);if(Pe!==1)throw new Error(`NAT2 BCCB unsupported version ${Pe}`);if(Y!==R/4||g!==b/4||l!==Y*g)throw new Error(`NAT2 BCCB block grid mismatch: header ${b}×${R}, sub-header ${g}×${Y} (${l} blocks)`);le+=24;const _=U*16;if(le+_>o.byteLength)throw new Error(`NAT2 BCCB truncated at codebook (need ${_}, have ${o.byteLength-le})`);const h=new Uint8Array(o,le,_);le+=_;const y=l*2;if(le+y>o.byteLength)throw new Error(`NAT2 BCCB truncated at indices (need ${y}, have ${o.byteLength-le})`);const k=new Uint16Array(o.slice(le,le+y));le+=y;const x=new Uint8Array(l*16);for(let S=0;S<l;S++){const i=k[S]*16;x.set(h.subarray(i,i+16),S*16)}if(ee=x,ie>1){be=[x];for(let S=1;S<ie;S++){if(le+24>o.byteLength)throw new Error(`NAT2 truncated at mip ${S} sub-header`);const i=r.decode(new Uint8Array(o,le,4));if(i!==re)throw new Error(`NAT2 mip ${S}: bad sub-magic '${i}'`);const v=w.getUint32(le+8,!0),d=w.getUint32(le+16,!0),p=w.getUint32(le+20,!0);if(d!==S)throw new Error(`NAT2 mip section order: expected level ${S}, got ${d}`);le+=24;let c=0;for(let A=0;A<De;A++)for(let $=0;$<se;$++){const K=Ji(S,Le[A+1]-Le[A],we[$+1]-we[$],ke,O);c+=(K.cw>>2)*(K.ch>>2)}if(c!==p)throw new Error(`NAT2 mip ${S}: ${p} blocks, loader expects ${c}`);if(le+v*16+p*2>o.byteLength)throw new Error(`NAT2 truncated in mip ${S}`);const m=new Uint8Array(o,le,v*16);le+=v*16;const E=new Uint16Array(o.slice(le,le+p*2));le+=p*2;const P=new Uint8Array(p*16);for(let A=0;A<p;A++){const $=E[A]*16;P.set(m.subarray($,$+16),A*16)}be.push(P)}}}else{let re=0;for(let ve=0;ve<se;ve++){const Pe=we[ve+1]-we[ve];if(Pe%4!==0)throw new Error(`NAT2 BC7 layer ${ve} rows ${Pe} not 4-aligned`);re+=Pe/4*Re}if(le+re>o.byteLength)throw new Error(`NAT2 truncated at atlas payload: need ${re} more bytes from offset ${le}, have ${o.byteLength-le}`);ee=new Uint8Array(o.slice(le,le+re))}return{width:b,height:R,channels:T,kernel_type:C,num_rects:M,uv_extent:N,sb_number:G,format:I,sh_bias:j,res_bias:ce,compact_mult:z,layer_h:O,atlas_scale:X,atlas_offset:F,n_layers:se,n_cols:ue,layer_cuts:we,column_cuts:Le,slice_width:ke,rects_expanded:H,atlas_bytes:ee,...be?{mip_bytes:be}:{}}}function Ji(o,r,a,w,f){const b=T=>T+3>>2<<2,R=1<<o;return{cw:Math.min(b(Math.max(1,w>>o)),b(Math.ceil(r/R))),ch:Math.min(b(Math.max(1,f>>o)),b(Math.ceil(a/R)))}}const wc=32;function ar(o,r,a){if(r.format===5||r.format===6)throw new Error(`paired-RVQ format=${r.format} is retired; re-bake with typeD (--bc7-codebook)`);let w,f,b,R;if(r.format===2||r.format===ns||r.format===rs){if(!o.features.has("texture-compression-bc"))return wt(`⚠️  bundle is BC7 (format=${r.format}) but texture-compression-bc not supported — atlas disabled`),null;R=r.format===rs?"BC7 atlas (proberes: shared probe texture)":r.format===ns?"BC7 atlas (typeD: codebook gather)":"BC7 atlas",{texture:w,view:f,sampler:b}=ki(o,r,"bc7-rgba-unorm",R)}else if(r.format===3||r.format===ys||r.format===is){if(!o.features.has("texture-compression-astc"))return wt(`⚠️  bundle is ASTC 4x4 (format=${r.format}) but texture-compression-astc not supported — atlas disabled`),null;R=r.format===is?"ASTC 4x4 atlas (proberes: shared probe texture)":r.format===ys?"ASTC 4x4 atlas (typeD-ASTC: codebook gather)":"ASTC 4x4 atlas",{texture:w,view:f,sampler:b}=ki(o,r,"astc-4x4-unorm",R)}else return wt(`⚠️  unsupported atlas format ${r.format} — atlas disabled`),null;const{rects_expanded:T}=r,C=o.createBuffer({label:"atlas rects (5-stride)",size:Fn(T.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(C,0,T);const M=o.createBuffer({label:"tex_params",size:48,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return xs(o,M,r,a),{texture:w,view:f,sampler:b,rectsBuffer:C,texParamsBuffer:M,meta:r}}function ki(o,r,a,w){const{width:f,layer_h:b,n_layers:R,n_cols:T,layer_cuts:C,column_cuts:M,slice_width:N,atlas_bytes:G}=r,j=f/4*16,ce=o.limits.maxTextureDimension2D;if(b>ce||N>ce)throw new Error(`⚠️  atlas slice dims ${N}x${b} exceed maxTextureDimension2D=${ce}. Re-bake with smaller LAYER_H or pack with column-aware atlas widths.`);const z=T*R;if(z>o.limits.maxTextureArrayLayers)throw new Error(`⚠️  ${T} cols × ${R} layers = ${z} slices > maxTextureArrayLayers=${o.limits.maxTextureArrayLayers}.`);const O=r.mip_bytes??[G],X=O.length,F=o.createTexture({label:w,size:{width:N,height:b,depthOrArrayLayers:z},mipLevelCount:X,sampleCount:1,dimension:"2d",format:a,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});for(let _e=0;_e<T;_e++){const fe=M[_e]/4,ie=(M[_e+1]-M[_e])/4;for(let ue=0;ue<R;ue++){const Te=C[ue]/4,le=(C[ue+1]-C[ue])/4,te=_e*R+ue,we=Te*j+fe*16;o.queue.writeTexture({texture:F,mipLevel:0,origin:{x:0,y:0,z:te},aspect:"all"},G,{offset:we,bytesPerRow:j,rowsPerImage:le},{width:ie*4,height:le*4,depthOrArrayLayers:1})}}const se=r.format===rs||r.format===is;for(let _e=1;_e<X&&!se;_e++){let fe=0;for(let ie=0;ie<T;ie++)for(let ue=0;ue<R;ue++){const{cw:Te,ch:le}=Ji(_e,M[ie+1]-M[ie],C[ue+1]-C[ue],N,b);o.queue.writeTexture({texture:F,mipLevel:_e,origin:{x:0,y:0,z:ie*R+ue},aspect:"all"},O[_e],{offset:fe,bytesPerRow:(Te>>2)*16,rowsPerImage:le>>2},{width:Te,height:le,depthOrArrayLayers:1}),fe+=(Te>>2)*(le>>2)*16}}for(let _e=1;_e<X&&se;_e++){const fe=Math.max(1,N>>_e),ie=Math.max(1,b>>_e);o.queue.writeTexture({texture:F,mipLevel:_e,origin:{x:0,y:0,z:0},aspect:"all"},O[_e],{offset:0,bytesPerRow:Math.max(1,fe>>2)*16,rowsPerImage:Math.max(1,ie>>2)},{width:fe,height:ie,depthOrArrayLayers:1})}X>1&&console.log(`[atlas] ${X} mip levels uploaded (${se?"trilinear":"per-surfel integer level"})`);const q=F.createView({label:`${w} view`,dimension:"2d-array"}),de=o.createSampler({label:`${w} sampler`,addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge",magFilter:"linear",minFilter:"linear",mipmapFilter:X>1&&se?"linear":"nearest"});return{texture:F,view:q,sampler:de}}function xs(o,r,a,w,f=1){var M;const b=new ArrayBuffer(32),R=new Uint32Array(b),T=new Float32Array(b);R[0]=w?1:0,T[1]=a.atlas_scale,T[2]=a.atlas_offset,T[3]=a.res_bias,R[4]=a.probe_mode?a.probe_mode|0:0,R[5]=a.width|0;const C=(((M=a.mip_bytes)==null?void 0:M.length)??1)>1;R[6]=C&&f!==0?1:0,T[7]=a.uv_extent,o.queue.writeBuffer(r,0,b)}async function Ps(o,r){wt(`loading ply file from File... : ${o.name}`),Nn("downloading PLY...");const a=await o.arrayBuffer();try{return await eo(a,r)}finally{jt()}}async function xc(o,r){wt(`loading ply file from URL... : ${o}`),Nn("downloading PLY...");try{Xi();const a=new URL(o,self.location.href).href;return await eo({url:a},r)}finally{jt()}}function Qi(o){return new Promise((r,a)=>{const w=new Worker(new URL(""+new URL("ply-worker-70df72a6.js",import.meta.url).href,self.location),{type:"module"});w.onmessage=f=>{const b=f.data;if((b==null?void 0:b.type)==="error"){fc(`PLY worker error: ${b.message??"unknown error"}`),w.terminate(),a(new Error(b.message??"Worker error"));return}else if((b==null?void 0:b.type)==="download_progress"){const R=b.totalBytes,T=b.loadedBytes/(1024*1024),C=R?R/(1024*1024):void 0,M=(b.speedBps??0)/(1024*1024),N=R?Math.min(99,Math.floor(b.loadedBytes/R*100)):void 0,G=C?`total ${C.toFixed(1)} MB`:"total -- MB",I=C&&N!==void 0?`${T.toFixed(1)} MB downloaded (${N}%)`:`${T.toFixed(1)} MB downloaded`,j=`${M.toFixed(2)} MB/s`;Dt(`downloading PLY ...
${G}, ${I}
${j}`);return}else if((b==null?void 0:b.type)==="fetched"){wt(`💾 Fetched (${b.byteLength} bytes)`),Ei("Download"),Dt("parsing PLY..."),Xi();return}else if((b==null?void 0:b.type)==="parse_progress"){const R=b.total??0,T=b.read??0,C=R>0?Math.floor(T/R*100):0;Dt(`parsing PLY ...
${T}/${R} surfels (${C}%)`);return}else(b==null?void 0:b.type)==="done"&&(w.terminate(),Ei("Parse"),r(b))},w.onerror=f=>{w.terminate(),a(f)},o instanceof ArrayBuffer?(Dt("parsing PLY..."),w.postMessage({type:"start",plyBuffer:o},[o])):w.postMessage({type:"start_url",url:o.url})})}async function Ci(o){var a,w,f,b,R,T,C,M,N,G,I,j;const r=await Qi(await o.arrayBuffer());return{num_points:r.num_points,K:r.K,feature_mode:r.feature_mode??0,sh_bias:r.sh_bias,kernel_type:r.kernel_type,surfel_data:new Float32Array(r.surfelBuffer),sv_params:new Float32Array(r.svParamsBuffer),bbox:r.bbox??{min:[-1,-1,-1],max:[1,1,1]},centroid:r.centroid??[((((w=(a=r.bbox)==null?void 0:a.min)==null?void 0:w[0])??-1)+(((b=(f=r.bbox)==null?void 0:f.max)==null?void 0:b[0])??1))/2,((((T=(R=r.bbox)==null?void 0:R.min)==null?void 0:T[1])??-1)+(((M=(C=r.bbox)==null?void 0:C.max)==null?void 0:M[1])??1))/2,((((G=(N=r.bbox)==null?void 0:N.min)==null?void 0:G[2])??-1)+(((j=(I=r.bbox)==null?void 0:I.max)==null?void 0:j[2])??1))/2]}}async function eo(o,r){var ce,z,O,X,F,se,q,de,_e,fe,ie,ue;const a=await Qi(o),w=a.num_points,f=a.K,b=a.feature_mode??0,R=a.sh_bias,T=a.kernel_type,C=a.surfelBuffer,M=a.svParamsBuffer,N=b===2?"NASG":b===1?"SB":"SV";wt(`🪐 Total surfels: ${w}, mode=${N}, K=${f}, sh_bias=${R}, kernel_type=${T}`);const G=r.createBuffer({label:"surfel input buffer",size:Fn(w*wc),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});r.queue.writeBuffer(G,0,C);const I=M.byteLength>0?M.byteLength:16,j=r.createBuffer({label:`color_params buffer (${N})`,size:Fn(I),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});return M.byteLength>0&&r.queue.writeBuffer(j,0,M),{num_points:w,K:f,feature_mode:b,sh_bias:R,kernel_type:T,surfel_buffer:G,surfel_data:new Float32Array(C),sv_params_buffer:j,bbox:a.bbox??{min:[-1,-1,-1],max:[1,1,1]},centroid:a.centroid??[((((z=(ce=a.bbox)==null?void 0:ce.min)==null?void 0:z[0])??-1)+(((X=(O=a.bbox)==null?void 0:O.max)==null?void 0:X[0])??1))/2,((((se=(F=a.bbox)==null?void 0:F.min)==null?void 0:se[1])??-1)+(((de=(q=a.bbox)==null?void 0:q.max)==null?void 0:de[1])??1))/2,((((fe=(_e=a.bbox)==null?void 0:_e.min)==null?void 0:fe[2])??-1)+(((ue=(ie=a.bbox)==null?void 0:ie.max)==null?void 0:ue[2])??1))/2]}}const Ss="BITYMI01",yc=0,Pc=1,Sc=2,Ec=3,kc=4,Cc=5;function mr(o){const r=new Uint8Array(o),a=new TextDecoder().decode(r.subarray(0,8));if(a!==Ss)throw new Error(`Not a BITYMI bundle (bad magic '${a}')`);const w=new DataView(o),f=w.getUint32(8,!0),b=12,R=20;let T=null,C=null,M=null;for(let N=0;N<f;N++){const G=b+N*R,I=w.getUint32(G+0,!0),j=Number(w.getBigUint64(G+4,!0)),ce=Number(w.getBigUint64(G+12,!0)),z=r.slice(j,j+ce).buffer;I===yc||I===Pc||I===Cc?T=z:I===Sc?C=z:(I===Ec||I===kc)&&(M=z)}if(T===null)throw new Error("BITYMI bundle has no point cloud chunk");return{pcBuffer:T,camerasBuffer:C,atlasBuffer:M}}async function $n(o,r){var R;const a=await fetch(o);if(!a.ok)throw new Error(`fetch failed: ${a.status} ${a.statusText}`);const w=(()=>{const T=a.headers.get("content-length");return T&&parseInt(T,10)||void 0})(),f=(R=a.body)==null?void 0:R.getReader();let b;if(!f)b=await a.arrayBuffer(),r&&r(b.byteLength,w,0);else{const T=[];let C=0,M=performance.now(),N=0;for(;;){const{done:j,value:ce}=await f.read();if(j)break;T.push(ce),C+=ce.byteLength;const z=performance.now();if(z-M>=150&&r){const O=(C-N)/((z-M)/1e3);r(C,w,O),M=z,N=C}}const G=new Uint8Array(C);let I=0;for(const j of T)G.set(j,I),I+=j.byteLength;b=G.buffer,r&&r(C,w,0)}return b.byteLength>=8&&new TextDecoder().decode(new Uint8Array(b,0,8))===Ss?{bundle:mr(b),rawPly:null}:{bundle:null,rawPly:b}}var Tc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},lr={exports:{}};/*! Tweakpane 3.1.10 (c) 2016 cocopon, licensed under the MIT license. */(function(o,r){(function(a,w){w(r)})(Tc,function(a){class w{constructor(e){const[t,s]=e.split("-"),u=t.split(".");this.major=parseInt(u[0],10),this.minor=parseInt(u[1],10),this.patch=parseInt(u[2],10),this.prerelease=s??null}toString(){const e=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[e,this.prerelease].join("-"):e}}class f{constructor(e){this.controller_=e}get element(){return this.controller_.view.element}get disabled(){return this.controller_.viewProps.get("disabled")}set disabled(e){this.controller_.viewProps.set("disabled",e)}get hidden(){return this.controller_.viewProps.get("hidden")}set hidden(e){this.controller_.viewProps.set("hidden",e)}dispose(){this.controller_.viewProps.set("disposed",!0)}}class b{constructor(e){this.target=e}}class R extends b{constructor(e,t,s,u){super(e),this.value=t,this.presetKey=s,this.last=u??!0}}class T extends b{constructor(e,t,s){super(e),this.value=t,this.presetKey=s}}class C extends b{constructor(e,t){super(e),this.expanded=t}}class M extends b{constructor(e,t){super(e),this.index=t}}function N(n){return n}function G(n){return n==null}function I(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0}function j(n,e){let t=n;do{const s=Object.getOwnPropertyDescriptor(t,e);if(s&&(s.set!==void 0||s.writable===!0))return!0;t=Object.getPrototypeOf(t)}while(t!==null);return!1}const ce={alreadydisposed:()=>"View has been already disposed",invalidparams:n=>`Invalid parameters for '${n.name}'`,nomatchingcontroller:n=>`No matching controller for '${n.key}'`,nomatchingview:n=>`No matching view for '${JSON.stringify(n.params)}'`,notbindable:()=>"Value is not bindable",propertynotfound:n=>`Property '${n.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class z{static alreadyDisposed(){return new z({type:"alreadydisposed"})}static notBindable(){return new z({type:"notbindable"})}static propertyNotFound(e){return new z({type:"propertynotfound",context:{name:e}})}static shouldNeverHappen(){return new z({type:"shouldneverhappen"})}constructor(e){var t;this.message=(t=ce[e.type](e.context))!==null&&t!==void 0?t:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=e.type}}class O{constructor(e,t,s){this.obj_=e,this.key_=t,this.presetKey_=s??t}static isBindable(e){return!(e===null||typeof e!="object"&&typeof e!="function")}get key(){return this.key_}get presetKey(){return this.presetKey_}read(){return this.obj_[this.key_]}write(e){this.obj_[this.key_]=e}writeProperty(e,t){const s=this.read();if(!O.isBindable(s))throw z.notBindable();if(!(e in s))throw z.propertyNotFound(e);s[e]=t}}class X extends f{get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get title(){var e;return(e=this.controller_.valueController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.valueController.props.set("title",e)}on(e,t){const s=t.bind(this);return this.controller_.valueController.emitter.on(e,()=>{s(new b(this))}),this}}class F{constructor(){this.observers_={}}on(e,t){let s=this.observers_[e];return s||(s=this.observers_[e]=[]),s.push({handler:t}),this}off(e,t){const s=this.observers_[e];return s&&(this.observers_[e]=s.filter(u=>u.handler!==t)),this}emit(e,t){const s=this.observers_[e];s&&s.forEach(u=>{u.handler(t)})}}const se="tp";function q(n){return(t,s)=>[se,"-",n,"v",t?`_${t}`:"",s?`-${s}`:""].join("")}function de(n,e){return t=>e(n(t))}function _e(n){return n.rawValue}function fe(n,e){n.emitter.on("change",de(_e,e)),e(n.rawValue)}function ie(n,e,t){fe(n.value(e),t)}function ue(n,e,t){t?n.classList.add(e):n.classList.remove(e)}function Te(n,e){return t=>{ue(n,e,t)}}function le(n,e){fe(n,t=>{e.textContent=t??""})}const te=q("btn");class we{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(te()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("button");s.classList.add(te("b")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const u=e.createElement("div");u.classList.add(te("t")),le(t.props.value("title"),u),this.buttonElement.appendChild(u)}}class Le{constructor(e,t){this.emitter=new F,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new we(e,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class ke{constructor(e,t){var s;this.constraint_=t==null?void 0:t.constraint,this.equals_=(s=t==null?void 0:t.equals)!==null&&s!==void 0?s:(u,B)=>u===B,this.emitter=new F,this.rawValue_=e}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const s=t??{forceEmit:!1,last:!0},u=this.constraint_?this.constraint_.constrain(e):e,B=this.rawValue_;this.equals_(B,u)&&!s.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=u,this.emitter.emit("change",{options:s,previousRawValue:B,rawValue:u,sender:this}))}}class Z{constructor(e){this.emitter=new F,this.value_=e}get rawValue(){return this.value_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const s=t??{forceEmit:!1,last:!0},u=this.value_;u===e&&!s.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=e,this.emitter.emit("change",{options:s,previousRawValue:u,rawValue:this.value_,sender:this}))}}function J(n,e){const t=e==null?void 0:e.constraint,s=e==null?void 0:e.equals;return!t&&!s?new Z(n):new ke(n,e)}class H{constructor(e){this.emitter=new F,this.valMap_=e;for(const t in this.valMap_)this.valMap_[t].emitter.on("change",()=>{this.emitter.emit("change",{key:t,sender:this})})}static createCore(e){return Object.keys(e).reduce((s,u)=>Object.assign(s,{[u]:J(e[u])}),{})}static fromObject(e){const t=this.createCore(e);return new H(t)}get(e){return this.valMap_[e].rawValue}set(e,t){this.valMap_[e].rawValue=t}value(e){return this.valMap_[e]}}function ee(n,e){const s=Object.keys(e).reduce((u,B)=>{if(u===void 0)return;const V=e[B],he=V(n[B]);return he.succeeded?Object.assign(Object.assign({},u),{[B]:he.value}):void 0},{});return s}function be(n,e){return n.reduce((t,s)=>{if(t===void 0)return;const u=e(s);if(!(!u.succeeded||u.value===void 0))return[...t,u.value]},[])}function De(n){return n===null?!1:typeof n=="object"}function Se(n){return e=>t=>{if(!e&&t===void 0)return{succeeded:!1,value:void 0};if(e&&t===void 0)return{succeeded:!0,value:void 0};const s=n(t);return s!==void 0?{succeeded:!0,value:s}:{succeeded:!1,value:void 0}}}function Re(n){return{custom:e=>Se(e)(n),boolean:Se(e=>typeof e=="boolean"?e:void 0)(n),number:Se(e=>typeof e=="number"?e:void 0)(n),string:Se(e=>typeof e=="string"?e:void 0)(n),function:Se(e=>typeof e=="function"?e:void 0)(n),constant:e=>Se(t=>t===e?e:void 0)(n),raw:Se(e=>e)(n),object:e=>Se(t=>{if(De(t))return ee(t,e)})(n),array:e=>Se(t=>{if(Array.isArray(t))return be(t,e)})(n)}}const re={optional:Re(!0),required:Re(!1)};function ve(n,e){const t=re.required.object(e)(n);return t.succeeded?t.value:void 0}function Pe(n){console.warn([`Missing '${n.key}' of ${n.target} in ${n.place}.`,"Please rebuild plugins with the latest core package."].join(" "))}function U(n){return n&&n.parentElement&&n.parentElement.removeChild(n),null}class Y{constructor(e){this.value_=e}static create(e){return[new Y(e),(t,s)=>{e.setRawValue(t,s)}]}get emitter(){return this.value_.emitter}get rawValue(){return this.value_.rawValue}}const g=q("");function l(n,e){return Te(n,g(void 0,e))}class _ extends H{constructor(e){var t;super(e),this.onDisabledChange_=this.onDisabledChange_.bind(this),this.onParentChange_=this.onParentChange_.bind(this),this.onParentGlobalDisabledChange_=this.onParentGlobalDisabledChange_.bind(this),[this.globalDisabled_,this.setGlobalDisabled_]=Y.create(J(this.getGlobalDisabled_())),this.value("disabled").emitter.on("change",this.onDisabledChange_),this.value("parent").emitter.on("change",this.onParentChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_)}static create(e){var t,s,u;const B=e??{};return new _(H.createCore({disabled:(t=B.disabled)!==null&&t!==void 0?t:!1,disposed:!1,hidden:(s=B.hidden)!==null&&s!==void 0?s:!1,parent:(u=B.parent)!==null&&u!==void 0?u:null}))}get globalDisabled(){return this.globalDisabled_}bindClassModifiers(e){fe(this.globalDisabled_,l(e,"disabled")),ie(this,"hidden",l(e,"hidden"))}bindDisabled(e){fe(this.globalDisabled_,t=>{e.disabled=t})}bindTabIndex(e){fe(this.globalDisabled_,t=>{e.tabIndex=t?-1:0})}handleDispose(e){this.value("disposed").emitter.on("change",t=>{t&&e()})}getGlobalDisabled_(){const e=this.get("parent");return(e?e.globalDisabled.rawValue:!1)||this.get("disabled")}updateGlobalDisabled_(){this.setGlobalDisabled_(this.getGlobalDisabled_())}onDisabledChange_(){this.updateGlobalDisabled_()}onParentGlobalDisabledChange_(){this.updateGlobalDisabled_()}onParentChange_(e){var t;const s=e.previousRawValue;s==null||s.globalDisabled.emitter.off("change",this.onParentGlobalDisabledChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_),this.updateGlobalDisabled_()}}function h(){return["veryfirst","first","last","verylast"]}const y=q(""),k={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class x{constructor(e){this.parent_=null,this.blade=e.blade,this.view=e.view,this.viewProps=e.viewProps;const t=this.view.element;this.blade.value("positions").emitter.on("change",()=>{h().forEach(s=>{t.classList.remove(y(void 0,k[s]))}),this.blade.get("positions").forEach(s=>{t.classList.add(y(void 0,k[s]))})}),this.viewProps.handleDispose(()=>{U(t)})}get parent(){return this.parent_}set parent(e){if(this.parent_=e,!("parent"in this.viewProps.valMap_)){Pe({key:"parent",target:_.name,place:"BladeController.parent"});return}this.viewProps.set("parent",this.parent_?this.parent_.viewProps:null)}}const S="http://www.w3.org/2000/svg";function i(n){n.offsetHeight}function v(n,e){const t=n.style.transition;n.style.transition="none",e(),n.style.transition=t}function d(n){return n.ontouchstart!==void 0}function p(){return globalThis}function c(){return p().document}function m(n){const e=n.ownerDocument.defaultView;return e&&"document"in e?n.getContext("2d",{willReadFrequently:!0}):null}const E={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function P(n,e){const t=n.createElementNS(S,"svg");return t.innerHTML=E[e],t}function A(n,e,t){n.insertBefore(e,n.children[t])}function $(n){n.parentElement&&n.parentElement.removeChild(n)}function K(n){for(;n.children.length>0;)n.removeChild(n.children[0])}function oe(n){for(;n.childNodes.length>0;)n.removeChild(n.childNodes[0])}function ne(n){return n.relatedTarget?n.relatedTarget:"explicitOriginalTarget"in n?n.explicitOriginalTarget:null}const ae=q("lbl");function xe(n,e){const t=n.createDocumentFragment();return e.split(`
`).map(u=>n.createTextNode(u)).forEach((u,B)=>{B>0&&t.appendChild(n.createElement("br")),t.appendChild(u)}),t}class Ae{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(ae()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(ae("l")),ie(t.props,"label",B=>{G(B)?this.element.classList.add(ae(void 0,"nol")):(this.element.classList.remove(ae(void 0,"nol")),oe(s),s.appendChild(xe(e,B)))}),this.element.appendChild(s),this.labelElement=s;const u=e.createElement("div");u.classList.add(ae("v")),this.element.appendChild(u),this.valueElement=u}}class Ee extends x{constructor(e,t){const s=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{view:new Ae(e,{props:t.props,viewProps:s}),viewProps:s})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}const Be={id:"button",type:"blade",accept(n){const e=re,t=ve(n,{title:e.required.string,view:e.required.constant("button"),label:e.optional.string});return t?{params:t}:null},controller(n){return new Ee(n.document,{blade:n.blade,props:H.fromObject({label:n.params.label}),valueController:new Le(n.document,{props:H.fromObject({title:n.params.title}),viewProps:n.viewProps})})},api(n){return!(n.controller instanceof Ee)||!(n.controller.valueController instanceof Le)?null:new X(n.controller)}};class Ge extends x{constructor(e){super(e),this.value=e.value}}function Ie(){return new H({positions:J([],{equals:I})})}class Je extends H{constructor(e){super(e)}static create(e){const t={completed:!0,expanded:e,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},s=H.createCore(t);return new Je(s)}get styleExpanded(){var e;return(e=this.get("temporaryExpanded"))!==null&&e!==void 0?e:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const e=this.get("expandedHeight");return this.get("shouldFixHeight")&&!G(e)?`${e}px`:"auto"}bindExpandedClass(e,t){const s=()=>{this.styleExpanded?e.classList.add(t):e.classList.remove(t)};ie(this,"expanded",s),ie(this,"temporaryExpanded",s)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function Ne(n,e){let t=0;return v(e,()=>{n.set("expandedHeight",null),n.set("temporaryExpanded",!0),i(e),t=e.clientHeight,n.set("temporaryExpanded",null),i(e)}),t}function Ke(n,e){e.style.height=n.styleHeight}function qe(n,e){n.value("expanded").emitter.on("beforechange",()=>{if(n.set("completed",!1),G(n.get("expandedHeight"))){const t=Ne(n,e);t>0&&n.set("expandedHeight",t)}n.set("shouldFixHeight",!0),i(e)}),n.emitter.on("change",()=>{Ke(n,e)}),Ke(n,e),e.addEventListener("transitionend",t=>{t.propertyName==="height"&&n.cleanUpTransition()})}class We extends f{constructor(e,t){super(e),this.rackApi_=t}}function He(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"button"}))}function nt(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"folder"}))}function ct(n,e){const t=e??{};return n.addBlade(Object.assign(Object.assign({},t),{view:"separator"}))}function je(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"tab"}))}class st{constructor(e){this.emitter=new F,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=e}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(e){for(const t of this.allItems())if(e(t))return t;return null}includes(e){return this.cache_.has(e)}add(e,t){if(this.includes(e))throw z.shouldNeverHappen();const s=t!==void 0?t:this.items_.length;this.items_.splice(s,0,e),this.cache_.add(e);const u=this.extract_(e);u&&(u.emitter.on("add",this.onSubListAdd_),u.emitter.on("remove",this.onSubListRemove_),u.allItems().forEach(B=>{this.cache_.add(B)})),this.emitter.emit("add",{index:s,item:e,root:this,target:this})}remove(e){const t=this.items_.indexOf(e);if(t<0)return;this.items_.splice(t,1),this.cache_.delete(e);const s=this.extract_(e);s&&(s.emitter.off("add",this.onSubListAdd_),s.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:t,item:e,root:this,target:this})}onSubListAdd_(e){this.cache_.add(e.item),this.emitter.emit("add",{index:e.index,item:e.item,root:this,target:e.target})}onSubListRemove_(e){this.cache_.delete(e.item),this.emitter.emit("remove",{index:e.index,item:e.item,root:this,target:e.target})}}class rt extends f{constructor(e){super(e),this.onBindingChange_=this.onBindingChange_.bind(this),this.emitter_=new F,this.controller_.binding.emitter.on("change",this.onBindingChange_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,u=>{s(u.event)}),this}refresh(){this.controller_.binding.read()}onBindingChange_(e){const t=e.sender.target.read();this.emitter_.emit("change",{event:new R(this,t,this.controller_.binding.target.presetKey,e.options.last)})}}class Ye extends Ee{constructor(e,t){super(e,t),this.binding=t.binding}}class it extends f{constructor(e){super(e),this.onBindingUpdate_=this.onBindingUpdate_.bind(this),this.emitter_=new F,this.controller_.binding.emitter.on("update",this.onBindingUpdate_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,u=>{s(u.event)}),this}refresh(){this.controller_.binding.read()}onBindingUpdate_(e){const t=e.sender.target.read();this.emitter_.emit("update",{event:new T(this,t,this.controller_.binding.target.presetKey)})}}class Qe extends Ee{constructor(e,t){super(e,t),this.binding=t.binding,this.viewProps.bindDisabled(this.binding.ticker),this.viewProps.handleDispose(()=>{this.binding.dispose()})}}function at(n){return n instanceof ft?n.apiSet_:n instanceof We?n.rackApi_.apiSet_:null}function lt(n,e){const t=n.find(s=>s.controller_===e);if(!t)throw z.shouldNeverHappen();return t}function Pt(n,e,t){if(!O.isBindable(n))throw z.notBindable();return new O(n,e,t)}class ft extends f{constructor(e,t){super(e),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.onRackInputChange_=this.onRackInputChange_.bind(this),this.onRackMonitorUpdate_=this.onRackMonitorUpdate_.bind(this),this.emitter_=new F,this.apiSet_=new st(at),this.pool_=t;const s=this.controller_.rack;s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),s.emitter.on("inputchange",this.onRackInputChange_),s.emitter.on("monitorupdate",this.onRackMonitorUpdate_),s.children.forEach(u=>{this.setUpApi_(u)})}get children(){return this.controller_.rack.children.map(e=>lt(this.apiSet_,e))}addInput(e,t,s){const u=s??{},B=this.controller_.view.element.ownerDocument,V=this.pool_.createInput(B,Pt(e,t,u.presetKey),u),he=new rt(V);return this.add(he,u.index)}addMonitor(e,t,s){const u=s??{},B=this.controller_.view.element.ownerDocument,V=this.pool_.createMonitor(B,Pt(e,t),u),he=new it(V);return this.add(he,u.index)}addFolder(e){return nt(this,e)}addButton(e){return He(this,e)}addSeparator(e){return ct(this,e)}addTab(e){return je(this,e)}add(e,t){this.controller_.rack.add(e.controller_,t);const s=this.apiSet_.find(u=>u.controller_===e.controller_);return s&&this.apiSet_.remove(s),this.apiSet_.add(e),e}remove(e){this.controller_.rack.remove(e.controller_)}addBlade(e){const t=this.controller_.view.element.ownerDocument,s=this.pool_.createBlade(t,e),u=this.pool_.createBladeApi(s);return this.add(u,e.index)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,u=>{s(u.event)}),this}setUpApi_(e){this.apiSet_.find(s=>s.controller_===e)||this.apiSet_.add(this.pool_.createBladeApi(e))}onRackAdd_(e){this.setUpApi_(e.bladeController)}onRackRemove_(e){if(e.isRoot){const t=lt(this.apiSet_,e.bladeController);this.apiSet_.remove(t)}}onRackInputChange_(e){const t=e.bladeController;if(t instanceof Ye){const s=lt(this.apiSet_,t),u=t.binding;this.emitter_.emit("change",{event:new R(s,u.target.read(),u.target.presetKey,e.options.last)})}else if(t instanceof Ge){const s=lt(this.apiSet_,t);this.emitter_.emit("change",{event:new R(s,t.value.rawValue,void 0,e.options.last)})}}onRackMonitorUpdate_(e){if(!(e.bladeController instanceof Qe))throw z.shouldNeverHappen();const t=lt(this.apiSet_,e.bladeController),s=e.bladeController.binding;this.emitter_.emit("update",{event:new T(t,s.target.read(),s.target.presetKey)})}}class _t extends We{constructor(e,t){super(e,new ft(e.rackController,t)),this.emitter_=new F,this.controller_.foldable.value("expanded").emitter.on("change",s=>{this.emitter_.emit("fold",{event:new C(this,s.sender.rawValue)})}),this.rackApi_.on("change",s=>{this.emitter_.emit("change",{event:s})}),this.rackApi_.on("update",s=>{this.emitter_.emit("update",{event:s})})}get expanded(){return this.controller_.foldable.get("expanded")}set expanded(e){this.controller_.foldable.set("expanded",e)}get title(){return this.controller_.props.get("title")}set title(e){this.controller_.props.set("title",e)}get children(){return this.rackApi_.children}addInput(e,t,s){return this.rackApi_.addInput(e,t,s)}addMonitor(e,t,s){return this.rackApi_.addMonitor(e,t,s)}addFolder(e){return this.rackApi_.addFolder(e)}addButton(e){return this.rackApi_.addButton(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){return this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addBlade(e){return this.rackApi_.addBlade(e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,u=>{s(u.event)}),this}}class zt extends x{constructor(e){super({blade:e.blade,view:e.view,viewProps:e.rackController.viewProps}),this.rackController=e.rackController}}class Ot{constructor(e,t){const s=q(t.viewName);this.element=e.createElement("div"),this.element.classList.add(s()),t.viewProps.bindClassModifiers(this.element)}}function Tt(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof Ye&&s.binding===e)return s}return null}function Lt(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof Qe&&s.binding===e)return s}return null}function $t(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof Ge&&s.value===e)return s}return null}function Ft(n){return n instanceof ot?n.rack:n instanceof zt?n.rackController.rack:null}function Bt(n){const e=Ft(n);return e?e.bcSet_:null}class Nt{constructor(e){var t,s;this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildInputChange_=this.onChildInputChange_.bind(this),this.onChildMonitorUpdate_=this.onChildMonitorUpdate_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onDescendantLayout_=this.onDescendantLayout_.bind(this),this.onDescendantInputChange_=this.onDescendantInputChange_.bind(this),this.onDescendantMonitorUpdate_=this.onDescendantMonitorUpdate_.bind(this),this.emitter=new F,this.blade_=(t=e.blade)!==null&&t!==void 0?t:null,(s=this.blade_)===null||s===void 0||s.value("positions").emitter.on("change",this.onBladePositionsChange_),this.viewProps=e.viewProps,this.bcSet_=new st(Bt),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(e,t){var s;(s=e.parent)===null||s===void 0||s.remove(e),j(e,"parent")?e.parent=this:(e.parent_=this,Pe({key:"parent",target:"BladeController",place:"BladeRack.add"})),this.bcSet_.add(e,t)}remove(e){j(e,"parent")?e.parent=null:(e.parent_=null,Pe({key:"parent",target:"BladeController",place:"BladeRack.remove"})),this.bcSet_.remove(e)}find(e){return this.bcSet_.allItems().filter(t=>t instanceof e)}onSetAdd_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("add",{bladeController:e.item,index:e.index,isRoot:t,sender:this}),!t)return;const s=e.item;if(s.viewProps.emitter.on("change",this.onChildViewPropsChange_),s.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),s.viewProps.handleDispose(this.onChildDispose_),s instanceof Ye)s.binding.emitter.on("change",this.onChildInputChange_);else if(s instanceof Qe)s.binding.emitter.on("update",this.onChildMonitorUpdate_);else if(s instanceof Ge)s.value.emitter.on("change",this.onChildValueChange_);else{const u=Ft(s);if(u){const B=u.emitter;B.on("layout",this.onDescendantLayout_),B.on("inputchange",this.onDescendantInputChange_),B.on("monitorupdate",this.onDescendantMonitorUpdate_)}}}onSetRemove_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("remove",{bladeController:e.item,isRoot:t,sender:this}),!t)return;const s=e.item;if(s instanceof Ye)s.binding.emitter.off("change",this.onChildInputChange_);else if(s instanceof Qe)s.binding.emitter.off("update",this.onChildMonitorUpdate_);else if(s instanceof Ge)s.value.emitter.off("change",this.onChildValueChange_);else{const u=Ft(s);if(u){const B=u.emitter;B.off("layout",this.onDescendantLayout_),B.off("inputchange",this.onDescendantInputChange_),B.off("monitorupdate",this.onDescendantMonitorUpdate_)}}}updatePositions_(){const e=this.bcSet_.items.filter(u=>!u.viewProps.get("hidden")),t=e[0],s=e[e.length-1];this.bcSet_.items.forEach(u=>{const B=[];u===t&&(B.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&B.push("veryfirst")),u===s&&(B.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&B.push("verylast")),u.blade.set("positions",B)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(t=>t.viewProps.get("disposed")).forEach(t=>{this.bcSet_.remove(t)})}onChildInputChange_(e){const t=Tt(this.find(Ye),e.sender);if(!t)throw z.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onChildMonitorUpdate_(e){const t=Lt(this.find(Qe),e.sender);if(!t)throw z.alreadyDisposed();this.emitter.emit("monitorupdate",{bladeController:t,sender:this})}onChildValueChange_(e){const t=$t(this.find(Ge),e.sender);if(!t)throw z.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onDescendantLayout_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onDescendantInputChange_(e){this.emitter.emit("inputchange",{bladeController:e.bladeController,options:e.options,sender:this})}onDescendantMonitorUpdate_(e){this.emitter.emit("monitorupdate",{bladeController:e.bladeController,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class ot extends x{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new Ot(e,{viewName:"brk",viewProps:t.viewProps})})),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const s=new Nt({blade:t.root?void 0:t.blade,viewProps:t.viewProps});s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),this.rack=s,this.viewProps.handleDispose(()=>{for(let u=this.rack.children.length-1;u>=0;u--)this.rack.children[u].viewProps.set("disposed",!0)})}onRackAdd_(e){e.isRoot&&A(this.view.element,e.bladeController.view.element,e.index)}onRackRemove_(e){e.isRoot&&$(e.bladeController.view.element)}}const ln=q("cnt");class En{constructor(e,t){var s;this.className_=q((s=t.viewName)!==null&&s!==void 0?s:"fld"),this.element=e.createElement("div"),this.element.classList.add(this.className_(),ln()),t.viewProps.bindClassModifiers(this.element),this.foldable_=t.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),ie(this.foldable_,"completed",Te(this.element,this.className_(void 0,"cpl")));const u=e.createElement("button");u.classList.add(this.className_("b")),ie(t.props,"title",Ue=>{G(Ue)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),t.viewProps.bindDisabled(u),this.element.appendChild(u),this.buttonElement=u;const B=e.createElement("div");B.classList.add(this.className_("i")),this.element.appendChild(B);const V=e.createElement("div");V.classList.add(this.className_("t")),le(t.props.value("title"),V),this.buttonElement.appendChild(V),this.titleElement=V;const he=e.createElement("div");he.classList.add(this.className_("m")),this.buttonElement.appendChild(he);const ze=t.containerElement;ze.classList.add(this.className_("c")),this.element.appendChild(ze),this.containerElement=ze}}class pt extends zt{constructor(e,t){var s;const u=Je.create((s=t.expanded)!==null&&s!==void 0?s:!0),B=new ot(e,{blade:t.blade,root:t.root,viewProps:t.viewProps});super(Object.assign(Object.assign({},t),{rackController:B,view:new En(e,{containerElement:B.view.element,foldable:u,props:t.props,viewName:t.root?"rot":void 0,viewProps:t.viewProps})})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=t.props,this.foldable=u,qe(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const kn={id:"folder",type:"blade",accept(n){const e=re,t=ve(n,{title:e.required.string,view:e.required.constant("folder"),expanded:e.optional.boolean});return t?{params:t}:null},controller(n){return new pt(n.document,{blade:n.blade,expanded:n.params.expanded,props:H.fromObject({title:n.params.title}),viewProps:n.viewProps})},api(n){return n.controller instanceof pt?new _t(n.controller,n.pool):null}};class qt extends Ge{constructor(e,t){const s=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{value:t.valueController.value,view:new Ae(e,{props:t.props,viewProps:s}),viewProps:s})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}class Cn extends f{}const os=q("spr");class as{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(os()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("hr");s.classList.add(os("r")),this.element.appendChild(s)}}class Tn extends x{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new as(e,{viewProps:t.viewProps})}))}}const ls={id:"separator",type:"blade",accept(n){const t=ve(n,{view:re.required.constant("separator")});return t?{params:t}:null},controller(n){return new Tn(n.document,{blade:n.blade,viewProps:n.viewProps})},api(n){return n.controller instanceof Tn?new Cn(n.controller):null}},en=q("tbi");class cs{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(en()),t.viewProps.bindClassModifiers(this.element),ie(t.props,"selected",B=>{B?this.element.classList.add(en(void 0,"sel")):this.element.classList.remove(en(void 0,"sel"))});const s=e.createElement("button");s.classList.add(en("b")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const u=e.createElement("div");u.classList.add(en("t")),le(t.props.value("title"),u),this.buttonElement.appendChild(u),this.titleElement=u}}class us{constructor(e,t){this.emitter=new F,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new cs(e,{props:t.props,viewProps:t.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class Bn{constructor(e,t){this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new us(e,{props:t.itemProps,viewProps:_.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.cc_=new ot(e,{blade:Ie(),viewProps:_.create()}),this.props=t.props,ie(this.props,"selected",s=>{this.itemController.props.set("selected",s),this.contentController.viewProps.set("hidden",!s)})}get itemController(){return this.ic_}get contentController(){return this.cc_}onItemClick_(){this.props.set("selected",!0)}}class qn{constructor(e,t){this.controller_=e,this.rackApi_=t}get title(){var e;return(e=this.controller_.itemController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.itemController.props.set("title",e)}get selected(){return this.controller_.props.get("selected")}set selected(e){this.controller_.props.set("selected",e)}get children(){return this.rackApi_.children}addButton(e){return this.rackApi_.addButton(e)}addFolder(e){return this.rackApi_.addFolder(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addInput(e,t,s){return this.rackApi_.addInput(e,t,s)}addMonitor(e,t,s){return this.rackApi_.addMonitor(e,t,s)}addBlade(e){return this.rackApi_.addBlade(e)}}class cn extends We{constructor(e,t){super(e,new ft(e.rackController,t)),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.onSelect_=this.onSelect_.bind(this),this.emitter_=new F,this.pageApiMap_=new Map,this.rackApi_.on("change",s=>{this.emitter_.emit("change",{event:s})}),this.rackApi_.on("update",s=>{this.emitter_.emit("update",{event:s})}),this.controller_.tab.selectedIndex.emitter.on("change",this.onSelect_),this.controller_.pageSet.emitter.on("add",this.onPageAdd_),this.controller_.pageSet.emitter.on("remove",this.onPageRemove_),this.controller_.pageSet.items.forEach(s=>{this.setUpPageApi_(s)})}get pages(){return this.controller_.pageSet.items.map(e=>{const t=this.pageApiMap_.get(e);if(!t)throw z.shouldNeverHappen();return t})}addPage(e){const t=this.controller_.view.element.ownerDocument,s=new Bn(t,{itemProps:H.fromObject({selected:!1,title:e.title}),props:H.fromObject({selected:!1})});this.controller_.add(s,e.index);const u=this.pageApiMap_.get(s);if(!u)throw z.shouldNeverHappen();return u}removePage(e){this.controller_.remove(e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,u=>{s(u.event)}),this}setUpPageApi_(e){const t=this.rackApi_.apiSet_.find(u=>u.controller_===e.contentController);if(!t)throw z.shouldNeverHappen();const s=new qn(e,t);this.pageApiMap_.set(e,s)}onPageAdd_(e){this.setUpPageApi_(e.item)}onPageRemove_(e){if(!this.pageApiMap_.get(e.item))throw z.shouldNeverHappen();this.pageApiMap_.delete(e.item)}onSelect_(e){this.emitter_.emit("select",{event:new M(this,e.rawValue)})}}const ds=-1;class un{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=J(!0),this.selectedIndex=J(ds),this.items_=[]}add(e,t){const s=t??this.items_.length;this.items_.splice(s,0,e),e.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(e){const t=this.items_.indexOf(e);t<0||(this.items_.splice(t,1),e.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=ds,this.empty.rawValue=!0;return}const e=this.items_.findIndex(t=>t.rawValue);e<0?(this.items_.forEach((t,s)=>{t.rawValue=s===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((t,s)=>{t.rawValue=s===e}),this.selectedIndex.rawValue=e),this.empty.rawValue=!1}onItemSelectedChange_(e){if(e.rawValue){const t=this.items_.findIndex(s=>s===e.sender);this.items_.forEach((s,u)=>{s.rawValue=u===t}),this.selectedIndex.rawValue=t}else this.keepSelection_()}}const dn=q("tab");class L{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(dn(),ln()),t.viewProps.bindClassModifiers(this.element),fe(t.empty,Te(this.element,dn(void 0,"nop")));const s=e.createElement("div");s.classList.add(dn("t")),this.element.appendChild(s),this.itemsElement=s;const u=e.createElement("div");u.classList.add(dn("i")),this.element.appendChild(u);const B=t.contentsElement;B.classList.add(dn("c")),this.element.appendChild(B),this.contentsElement=B}}class Q extends zt{constructor(e,t){const s=new ot(e,{blade:t.blade,viewProps:t.viewProps}),u=new un;super({blade:t.blade,rackController:s,view:new L(e,{contentsElement:s.view.element,empty:u.empty,viewProps:t.viewProps})}),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.pageSet_=new st(()=>null),this.pageSet_.emitter.on("add",this.onPageAdd_),this.pageSet_.emitter.on("remove",this.onPageRemove_),this.tab=u}get pageSet(){return this.pageSet_}add(e,t){this.pageSet_.add(e,t)}remove(e){this.pageSet_.remove(this.pageSet_.items[e])}onPageAdd_(e){const t=e.item;A(this.view.itemsElement,t.itemController.view.element,e.index),t.itemController.viewProps.set("parent",this.viewProps),this.rackController.rack.add(t.contentController,e.index),this.tab.add(t.props.value("selected"))}onPageRemove_(e){const t=e.item;$(t.itemController.view.element),t.itemController.viewProps.set("parent",null),this.rackController.rack.remove(t.contentController),this.tab.remove(t.props.value("selected"))}}const pe={id:"tab",type:"blade",accept(n){const e=re,t=ve(n,{pages:e.required.array(e.required.object({title:e.required.string})),view:e.required.constant("tab")});return!t||t.pages.length===0?null:{params:t}},controller(n){const e=new Q(n.document,{blade:n.blade,viewProps:n.viewProps});return n.params.pages.forEach(t=>{const s=new Bn(n.document,{itemProps:H.fromObject({selected:!1,title:t.title}),props:H.fromObject({selected:!1})});e.add(s)}),e},api(n){return n.controller instanceof Q?new cn(n.controller,n.pool):null}};function me(n,e){const t=n.accept(e.params);if(!t)return null;const s=re.optional.boolean(e.params.disabled).value,u=re.optional.boolean(e.params.hidden).value;return n.controller({blade:Ie(),document:e.document,params:Object.assign(Object.assign({},t.params),{disabled:s,hidden:u}),viewProps:_.create({disabled:s,hidden:u})})}class Ce{constructor(){this.disabled=!1,this.emitter=new F}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class ge{constructor(e,t){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=e,this.emitter=new F,this.interval_=t,this.setTimer_()}get disabled(){return this.disabled_}set disabled(e){this.disabled_=e,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const e=this.doc_.defaultView;e&&e.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const e=this.doc_.defaultView;e&&(this.timerId_=e.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class ye{constructor(e){this.onValueChange_=this.onValueChange_.bind(this),this.reader=e.reader,this.writer=e.writer,this.emitter=new F,this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.target=e.target,this.read()}read(){const e=this.target.read();e!==void 0&&(this.value.rawValue=this.reader(e))}write_(e){this.writer(this.target,e)}onValueChange_(e){this.write_(e.rawValue),this.emitter.emit("change",{options:e.options,rawValue:e.rawValue,sender:this})}}function Me(n,e){for(;n.length<e;)n.push(void 0)}function tt(n){const e=[];return Me(e,n),J(e)}function mt(n){const e=n.indexOf(void 0);return e<0?n:n.slice(0,e)}function kt(n,e){const t=[...mt(n),e];return t.length>n.length?t.splice(0,t.length-n.length):Me(t,n.length),t}class Oe{constructor(e){this.onTick_=this.onTick_.bind(this),this.reader_=e.reader,this.target=e.target,this.emitter=new F,this.value=e.value,this.ticker=e.ticker,this.ticker.emitter.on("tick",this.onTick_),this.read()}dispose(){this.ticker.dispose()}read(){const e=this.target.read();if(e===void 0)return;const t=this.value.rawValue,s=this.reader_(e);this.value.rawValue=kt(t,s),this.emitter.emit("update",{rawValue:s,sender:this})}onTick_(e){this.read()}}class Ze{constructor(e){this.constraints=e}constrain(e){return this.constraints.reduce((t,s)=>s.constrain(t),e)}}function bt(n,e){if(n instanceof e)return n;if(n instanceof Ze){const t=n.constraints.reduce((s,u)=>s||(u instanceof e?u:null),null);if(t)return t}return null}class Ve{constructor(e){this.values=H.fromObject({max:e.max,min:e.min})}constrain(e){const t=this.values.get("max"),s=this.values.get("min");return Math.min(Math.max(e,s),t)}}class St{constructor(e){this.values=H.fromObject({options:e})}get options(){return this.values.get("options")}constrain(e){const t=this.values.get("options");return t.length===0||t.filter(u=>u.value===e).length>0?e:t[0].value}}class ht{constructor(e){this.values=H.fromObject({max:e.max,min:e.min})}get maxValue(){return this.values.get("max")}get minValue(){return this.values.get("min")}constrain(e){const t=this.values.get("max"),s=this.values.get("min");let u=e;return G(s)||(u=Math.max(u,s)),G(t)||(u=Math.min(u,t)),u}}class Vt{constructor(e,t=0){this.step=e,this.origin=t}constrain(e){const t=this.origin%this.step,s=Math.round((e-t)/this.step);return t+s*this.step}}const Ut=q("lst");class An{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.props_=t.props,this.element=e.createElement("div"),this.element.classList.add(Ut()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("select");s.classList.add(Ut("s")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.selectElement=s;const u=e.createElement("div");u.classList.add(Ut("m")),u.appendChild(P(e,"dropdown")),this.element.appendChild(u),t.value.emitter.on("change",this.onValueChange_),this.value_=t.value,ie(this.props_,"options",B=>{K(this.selectElement),B.forEach(V=>{const he=e.createElement("option");he.textContent=V.text,this.selectElement.appendChild(he)}),this.update_()})}update_(){const e=this.props_.get("options").map(t=>t.value);this.selectElement.selectedIndex=e.indexOf(this.value_.rawValue)}onValueChange_(){this.update_()}}class At{constructor(e,t){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new An(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(e){const t=e.currentTarget;this.value.rawValue=this.props.get("options")[t.selectedIndex].value}}const Et=q("pop");class pn{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Et()),t.viewProps.bindClassModifiers(this.element),fe(t.shows,Te(this.element,Et(void 0,"v")))}}class hn{constructor(e,t){this.shows=J(!1),this.viewProps=t.viewProps,this.view=new pn(e,{shows:this.shows,viewProps:this.viewProps})}}const Wt=q("txt");class Mn{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Wt()),t.viewProps.bindClassModifiers(this.element),this.props_=t.props,this.props_.emitter.on("change",this.onChange_);const s=e.createElement("input");s.classList.add(Wt("i")),s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,t.value.emitter.on("change",this.onChange_),this.value_=t.value,this.refresh()}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value_.rawValue)}onChange_(){this.refresh()}}class Ht{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=t.parser,this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new Mn(e,{props:t.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const s=e.currentTarget.value,u=this.parser_(s);G(u)||(this.value.rawValue=u),this.view.refresh()}}function Ms(n){return String(n)}function Rn(n){return n==="false"?!1:!!n}function gr(n){return Ms(n)}class fo{constructor(e){this.text=e}evaluate(){return Number(this.text)}toString(){return this.text}}const _o={"**":(n,e)=>Math.pow(n,e),"*":(n,e)=>n*e,"/":(n,e)=>n/e,"%":(n,e)=>n%e,"+":(n,e)=>n+e,"-":(n,e)=>n-e,"<<":(n,e)=>n<<e,">>":(n,e)=>n>>e,">>>":(n,e)=>n>>>e,"&":(n,e)=>n&e,"^":(n,e)=>n^e,"|":(n,e)=>n|e};class mo{constructor(e,t,s){this.left=t,this.operator=e,this.right=s}evaluate(){const e=_o[this.operator];if(!e)throw new Error(`unexpected binary operator: '${this.operator}`);return e(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const vo={"+":n=>n,"-":n=>-n,"~":n=>~n};class bo{constructor(e,t){this.operator=e,this.expression=t}evaluate(){const e=vo[this.operator];if(!e)throw new Error(`unexpected unary operator: '${this.operator}`);return e(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function Rs(n){return(e,t)=>{for(let s=0;s<n.length;s++){const u=n[s](e,t);if(u!=="")return u}return""}}function Wn(n,e){var t;const s=n.substr(e).match(/^\s+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function go(n,e){const t=n.substr(e,1);return t.match(/^[1-9]$/)?t:""}function Kn(n,e){var t;const s=n.substr(e).match(/^[0-9]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function wo(n,e){const t=Kn(n,e);if(t!=="")return t;const s=n.substr(e,1);if(e+=1,s!=="-"&&s!=="+")return"";const u=Kn(n,e);return u===""?"":s+u}function Ds(n,e){const t=n.substr(e,1);if(e+=1,t.toLowerCase()!=="e")return"";const s=wo(n,e);return s===""?"":t+s}function wr(n,e){const t=n.substr(e,1);if(t==="0")return t;const s=go(n,e);return e+=s.length,s===""?"":s+Kn(n,e)}function xo(n,e){const t=wr(n,e);if(e+=t.length,t==="")return"";const s=n.substr(e,1);if(e+=s.length,s!==".")return"";const u=Kn(n,e);return e+=u.length,t+s+u+Ds(n,e)}function yo(n,e){const t=n.substr(e,1);if(e+=t.length,t!==".")return"";const s=Kn(n,e);return e+=s.length,s===""?"":t+s+Ds(n,e)}function Po(n,e){const t=wr(n,e);return e+=t.length,t===""?"":t+Ds(n,e)}const So=Rs([xo,yo,Po]);function Eo(n,e){var t;const s=n.substr(e).match(/^[01]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function ko(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0b")return"";const s=Eo(n,e);return s===""?"":t+s}function Co(n,e){var t;const s=n.substr(e).match(/^[0-7]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function To(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0o")return"";const s=Co(n,e);return s===""?"":t+s}function Bo(n,e){var t;const s=n.substr(e).match(/^[0-9a-f]+/i);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Ao(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0x")return"";const s=Bo(n,e);return s===""?"":t+s}const Mo=Rs([ko,To,Ao]),Ro=Rs([Mo,So]);function Do(n,e){const t=Ro(n,e);return e+=t.length,t===""?null:{evaluable:new fo(t),cursor:e}}function zo(n,e){const t=n.substr(e,1);if(e+=t.length,t!=="(")return null;const s=yr(n,e);if(!s)return null;e=s.cursor,e+=Wn(n,e).length;const u=n.substr(e,1);return e+=u.length,u!==")"?null:{evaluable:s.evaluable,cursor:e}}function Lo(n,e){var t;return(t=Do(n,e))!==null&&t!==void 0?t:zo(n,e)}function xr(n,e){const t=Lo(n,e);if(t)return t;const s=n.substr(e,1);if(e+=s.length,s!=="+"&&s!=="-"&&s!=="~")return null;const u=xr(n,e);return u?(e=u.cursor,{cursor:e,evaluable:new bo(s,u.evaluable)}):null}function Uo(n,e,t){t+=Wn(e,t).length;const s=n.filter(u=>e.startsWith(u,t))[0];return s?(t+=s.length,t+=Wn(e,t).length,{cursor:t,operator:s}):null}function Io(n,e){return(t,s)=>{const u=n(t,s);if(!u)return null;s=u.cursor;let B=u.evaluable;for(;;){const V=Uo(e,t,s);if(!V)break;s=V.cursor;const he=n(t,s);if(!he)return null;s=he.cursor,B=new mo(V.operator,B,he.evaluable)}return B?{cursor:s,evaluable:B}:null}}const Go=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((n,e)=>Io(n,e),xr);function yr(n,e){return e+=Wn(n,e).length,Go(n,e)}function Oo(n){const e=yr(n,0);return!e||e.cursor+Wn(n,e.cursor).length!==n.length?null:e.evaluable}function Yt(n){var e;const t=Oo(n);return(e=t==null?void 0:t.evaluate())!==null&&e!==void 0?e:null}function Pr(n){if(typeof n=="number")return n;if(typeof n=="string"){const e=Yt(n);if(!G(e))return e}return 0}function Fo(n){return String(n)}function yt(n){return e=>e.toFixed(Math.max(Math.min(n,20),0))}const Vo=yt(0);function ps(n){return Vo(n)+"%"}function Sr(n){return String(n)}function zs(n){return n}function jn({primary:n,secondary:e,forward:t,backward:s}){let u=!1;function B(V){u||(u=!0,V(),u=!1)}n.emitter.on("change",V=>{B(()=>{e.setRawValue(t(n,e),V.options)})}),e.emitter.on("change",V=>{B(()=>{n.setRawValue(s(n,e),V.options)}),B(()=>{e.setRawValue(t(n,e),V.options)})}),B(()=>{e.setRawValue(t(n,e),{forceEmit:!1,last:!0})})}function Mt(n,e){const t=n*(e.altKey?.1:1)*(e.shiftKey?10:1);return e.upKey?+t:e.downKey?-t:0}function Hn(n){return{altKey:n.altKey,downKey:n.key==="ArrowDown",shiftKey:n.shiftKey,upKey:n.key==="ArrowUp"}}function Zt(n){return{altKey:n.altKey,downKey:n.key==="ArrowLeft",shiftKey:n.shiftKey,upKey:n.key==="ArrowRight"}}function $o(n){return n==="ArrowUp"||n==="ArrowDown"}function Er(n){return $o(n)||n==="ArrowLeft"||n==="ArrowRight"}function Ls(n,e){var t,s;const u=e.ownerDocument.defaultView,B=e.getBoundingClientRect();return{x:n.pageX-(((t=u&&u.scrollX)!==null&&t!==void 0?t:0)+B.left),y:n.pageY-(((s=u&&u.scrollY)!==null&&s!==void 0?s:0)+B.top)}}class fn{constructor(e){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=e,this.emitter=new F,e.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),e.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),e.addEventListener("touchend",this.onTouchEnd_),e.addEventListener("mousedown",this.onMouseDown_)}computePosition_(e){const t=this.elem_.getBoundingClientRect();return{bounds:{width:t.width,height:t.height},point:e?{x:e.x,y:e.y}:null}}onMouseDown_(e){var t;e.preventDefault(),(t=e.currentTarget)===null||t===void 0||t.focus();const s=this.elem_.ownerDocument;s.addEventListener("mousemove",this.onDocumentMouseMove_),s.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(Ls(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseMove_(e){this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(Ls(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseUp_(e){const t=this.elem_.ownerDocument;t.removeEventListener("mousemove",this.onDocumentMouseMove_),t.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(Ls(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onTouchStart_(e){e.preventDefault();const t=e.targetTouches.item(0),s=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-s.left,y:t.clientY-s.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchMove_(e){const t=e.targetTouches.item(0),s=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-s.left,y:t.clientY-s.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchEnd_(e){var t;const s=(t=e.targetTouches.item(0))!==null&&t!==void 0?t:this.lastTouch_,u=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(s?{x:s.clientX-u.left,y:s.clientY-u.top}:void 0),sender:this,shiftKey:e.shiftKey})}}function ut(n,e,t,s,u){const B=(n-e)/(t-e);return s+B*(u-s)}function kr(n){return String(n.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function xt(n,e,t){return Math.min(Math.max(n,e),t)}function Cr(n,e){return(n%e+e)%e}const It=q("txt");class No{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(It(),It(void 0,"num")),t.arrayPosition&&this.element.classList.add(It(void 0,t.arrayPosition)),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("input");s.classList.add(It("i")),s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=t.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(It()),this.inputElement.classList.add(It("i"));const u=e.createElement("div");u.classList.add(It("k")),this.element.appendChild(u),this.knobElement=u;const B=e.createElementNS(S,"svg");B.classList.add(It("g")),this.knobElement.appendChild(B);const V=e.createElementNS(S,"path");V.classList.add(It("gb")),B.appendChild(V),this.guideBodyElem_=V;const he=e.createElementNS(S,"path");he.classList.add(It("gh")),B.appendChild(he),this.guideHeadElem_=he;const ze=e.createElement("div");ze.classList.add(q("tt")()),this.knobElement.appendChild(ze),this.tooltipElem_=ze,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.refresh()}onDraggingChange_(e){if(e.rawValue===null){this.element.classList.remove(It(void 0,"drg"));return}this.element.classList.add(It(void 0,"drg"));const t=e.rawValue/this.props_.get("draggingScale"),s=t+(t>0?-1:t<0?1:0),u=xt(-s,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${s+u},0 L${s},4 L${s+u},8`,`M ${t},-1 L${t},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${t},4`);const B=this.props_.get("formatter");this.tooltipElem_.textContent=B(this.value.rawValue),this.tooltipElem_.style.left=`${t}px`}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value.rawValue)}onChange_(){this.refresh()}}class Yn{constructor(e,t){var s;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.parser_=t.parser,this.props=t.props,this.sliderProps_=(s=t.sliderProps)!==null&&s!==void 0?s:null,this.value=t.value,this.viewProps=t.viewProps,this.dragging_=J(null),this.view=new No(e,{arrayPosition:t.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const u=new fn(this.view.knobElement);u.emitter.on("down",this.onPointerDown_),u.emitter.on("move",this.onPointerMove_),u.emitter.on("up",this.onPointerUp_)}constrainValue_(e){var t,s;const u=(t=this.sliderProps_)===null||t===void 0?void 0:t.get("minValue"),B=(s=this.sliderProps_)===null||s===void 0?void 0:s.get("maxValue");let V=e;return u!==void 0&&(V=Math.max(V,u)),B!==void 0&&(V=Math.min(V,B)),V}onInputChange_(e){const s=e.currentTarget.value,u=this.parser_(s);G(u)||(this.value.rawValue=this.constrainValue_(u)),this.view.refresh()}onInputKeyDown_(e){const t=Mt(this.baseStep_,Hn(e));t!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+t),{forceEmit:!1,last:!1})}onInputKeyUp_(e){Mt(this.baseStep_,Hn(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(e){if(!e.point)return null;const t=e.point.x-e.bounds.width/2;return this.constrainValue_(this.originRawValue_+t*this.props.get("draggingScale"))}onPointerMove_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const Us=q("sld");class qo{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(Us()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Us("t")),t.viewProps.bindTabIndex(s),this.element.appendChild(s),this.trackElement=s;const u=e.createElement("div");u.classList.add(Us("k")),this.trackElement.appendChild(u),this.knobElement=u,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.update_()}update_(){const e=xt(ut(this.value.rawValue,this.props_.get("minValue"),this.props_.get("maxValue"),0,100),0,100);this.knobElement.style.width=`${e}%`}onChange_(){this.update_()}}class Wo{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.value=t.value,this.viewProps=t.viewProps,this.props=t.props,this.view=new qo(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new fn(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){e.point&&this.value.setRawValue(ut(xt(e.point.x,0,e.bounds.width),0,e.bounds.width,this.props.get("minValue"),this.props.get("maxValue")),t)}onPointerDownOrMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=Mt(this.baseStep_,Zt(e));t!==0&&this.value.setRawValue(this.value.rawValue+t,{forceEmit:!1,last:!1})}onKeyUp_(e){Mt(this.baseStep_,Zt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Is=q("sldtxt");class Ko{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Is());const s=e.createElement("div");s.classList.add(Is("s")),this.sliderView_=t.sliderView,s.appendChild(this.sliderView_.element),this.element.appendChild(s);const u=e.createElement("div");u.classList.add(Is("t")),this.textView_=t.textView,u.appendChild(this.textView_.element),this.element.appendChild(u)}}class Gs{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.sliderC_=new Wo(e,{baseStep:t.baseStep,props:t.sliderProps,value:t.value,viewProps:this.viewProps}),this.textC_=new Yn(e,{baseStep:t.baseStep,parser:t.parser,props:t.textProps,sliderProps:t.sliderProps,value:t.value,viewProps:t.viewProps}),this.view=new Ko(e,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}}function Zn(n,e){n.write(e)}function hs(n){const e=re;if(Array.isArray(n))return e.required.array(e.required.object({text:e.required.string,value:e.required.raw}))(n).value;if(typeof n=="object")return e.required.raw(n).value}function Tr(n){if(n==="inline"||n==="popup")return n}function tn(n){const e=re;return e.required.object({max:e.optional.number,min:e.optional.number,step:e.optional.number})(n).value}function Br(n){if(Array.isArray(n))return n;const e=[];return Object.keys(n).forEach(t=>{e.push({text:t,value:n[t]})}),e}function Os(n){return G(n)?null:new St(Br(n))}function jo(n){const e=n?bt(n,Vt):null;return e?e.step:null}function fs(n,e){const t=n&&bt(n,Vt);return t?kr(t.step):Math.max(kr(e),2)}function Dn(n){const e=jo(n);return e??1}function zn(n,e){var t;const s=n&&bt(n,Vt),u=Math.abs((t=s==null?void 0:s.step)!==null&&t!==void 0?t:e);return u===0?.1:Math.pow(10,Math.floor(Math.log10(u))-1)}const _s=q("ckb");class Ho{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(_s()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("label");s.classList.add(_s("l")),this.element.appendChild(s);const u=e.createElement("input");u.classList.add(_s("i")),u.type="checkbox",s.appendChild(u),this.inputElement=u,t.viewProps.bindDisabled(this.inputElement);const B=e.createElement("div");B.classList.add(_s("w")),s.appendChild(B);const V=P(e,"check");B.appendChild(V),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class Yo{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Ho(e,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const t=e.currentTarget;this.value.rawValue=t.checked}}function Zo(n){const e=[],t=Os(n.options);return t&&e.push(t),new Ze(e)}const Xo={id:"input-bool",type:"input",accept:(n,e)=>{if(typeof n!="boolean")return null;const s=ve(e,{options:re.optional.custom(hs)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Rn,constraint:n=>Zo(n.params),writer:n=>Zn},controller:n=>{const e=n.document,t=n.value,s=n.constraint,u=s&&bt(s,St);return u?new At(e,{props:new H({options:u.values.value("options")}),value:t,viewProps:n.viewProps}):new Yo(e,{value:t,viewProps:n.viewProps})}},_n=q("col");class Jo{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(_n()),t.foldable.bindExpandedClass(this.element,_n(void 0,"expanded")),ie(t.foldable,"completed",Te(this.element,_n(void 0,"cpl")));const s=e.createElement("div");s.classList.add(_n("h")),this.element.appendChild(s);const u=e.createElement("div");u.classList.add(_n("s")),s.appendChild(u),this.swatchElement=u;const B=e.createElement("div");if(B.classList.add(_n("t")),s.appendChild(B),this.textElement=B,t.pickerLayout==="inline"){const V=e.createElement("div");V.classList.add(_n("p")),this.element.appendChild(V),this.pickerElement=V}else this.pickerElement=null}}function Qo(n,e,t){const s=xt(n/255,0,1),u=xt(e/255,0,1),B=xt(t/255,0,1),V=Math.max(s,u,B),he=Math.min(s,u,B),ze=V-he;let Ue=0,Xe=0;const et=(he+V)/2;return ze!==0&&(Xe=ze/(1-Math.abs(V+he-1)),s===V?Ue=(u-B)/ze:u===V?Ue=2+(B-s)/ze:Ue=4+(s-u)/ze,Ue=Ue/6+(Ue<0?1:0)),[Ue*360,Xe*100,et*100]}function ea(n,e,t){const s=(n%360+360)%360,u=xt(e/100,0,1),B=xt(t/100,0,1),V=(1-Math.abs(2*B-1))*u,he=V*(1-Math.abs(s/60%2-1)),ze=B-V/2;let Ue,Xe,et;return s>=0&&s<60?[Ue,Xe,et]=[V,he,0]:s>=60&&s<120?[Ue,Xe,et]=[he,V,0]:s>=120&&s<180?[Ue,Xe,et]=[0,V,he]:s>=180&&s<240?[Ue,Xe,et]=[0,he,V]:s>=240&&s<300?[Ue,Xe,et]=[he,0,V]:[Ue,Xe,et]=[V,0,he],[(Ue+ze)*255,(Xe+ze)*255,(et+ze)*255]}function ta(n,e,t){const s=xt(n/255,0,1),u=xt(e/255,0,1),B=xt(t/255,0,1),V=Math.max(s,u,B),he=Math.min(s,u,B),ze=V-he;let Ue;ze===0?Ue=0:V===s?Ue=60*(((u-B)/ze%6+6)%6):V===u?Ue=60*((B-s)/ze+2):Ue=60*((s-u)/ze+4);const Xe=V===0?0:ze/V,et=V;return[Ue,Xe*100,et*100]}function Ar(n,e,t){const s=Cr(n,360),u=xt(e/100,0,1),B=xt(t/100,0,1),V=B*u,he=V*(1-Math.abs(s/60%2-1)),ze=B-V;let Ue,Xe,et;return s>=0&&s<60?[Ue,Xe,et]=[V,he,0]:s>=60&&s<120?[Ue,Xe,et]=[he,V,0]:s>=120&&s<180?[Ue,Xe,et]=[0,V,he]:s>=180&&s<240?[Ue,Xe,et]=[0,he,V]:s>=240&&s<300?[Ue,Xe,et]=[he,0,V]:[Ue,Xe,et]=[V,0,he],[(Ue+ze)*255,(Xe+ze)*255,(et+ze)*255]}function na(n,e,t){const s=t+e*(100-Math.abs(2*t-100))/200;return[n,s!==0?e*(100-Math.abs(2*t-100))/s:0,t+e*(100-Math.abs(2*t-100))/(2*100)]}function sa(n,e,t){const s=100-Math.abs(t*(200-e)/100-100);return[n,s!==0?e*t/s:0,t*(200-e)/(2*100)]}function mn(n){return[n[0],n[1],n[2]]}function Mr(n,e){return[n[0],n[1],n[2],e]}const ra={hsl:{hsl:(n,e,t)=>[n,e,t],hsv:na,rgb:ea},hsv:{hsl:sa,hsv:(n,e,t)=>[n,e,t],rgb:Ar},rgb:{hsl:Qo,hsv:ta,rgb:(n,e,t)=>[n,e,t]}};function ms(n,e){return[e==="float"?1:n==="rgb"?255:360,e==="float"?1:n==="rgb"?255:100,e==="float"?1:n==="rgb"?255:100]}function ia(n,e){return n===e?e:Cr(n,e)}function oa(n,e,t){var s;const u=ms(e,t);return[e==="rgb"?xt(n[0],0,u[0]):ia(n[0],u[0]),xt(n[1],0,u[1]),xt(n[2],0,u[2]),xt((s=n[3])!==null&&s!==void 0?s:1,0,1)]}function Rr(n,e,t,s){const u=ms(e,t),B=ms(e,s);return n.map((V,he)=>V/u[he]*B[he])}function aa(n,e,t){const s=Rr(n,e.mode,e.type,"int"),u=ra[e.mode][t.mode](...s);return Rr(u,t.mode,"int",t.type)}function vs(n,e){return typeof n!="object"||G(n)?!1:e in n&&typeof n[e]=="number"}class $e{static black(e="int"){return new $e([0,0,0],"rgb",e)}static fromObject(e,t="int"){const s="a"in e?[e.r,e.g,e.b,e.a]:[e.r,e.g,e.b];return new $e(s,"rgb",t)}static toRgbaObject(e,t="int"){return e.toRgbaObject(t)}static isRgbColorObject(e){return vs(e,"r")&&vs(e,"g")&&vs(e,"b")}static isRgbaColorObject(e){return this.isRgbColorObject(e)&&vs(e,"a")}static isColorObject(e){return this.isRgbColorObject(e)}static equals(e,t){if(e.mode!==t.mode)return!1;const s=e.comps_,u=t.comps_;for(let B=0;B<s.length;B++)if(s[B]!==u[B])return!1;return!0}constructor(e,t,s="int"){this.mode=t,this.type=s,this.comps_=oa(e,t,s)}getComponents(e,t="int"){return Mr(aa(mn(this.comps_),{mode:this.mode,type:this.type},{mode:e??this.mode,type:t}),this.comps_[3])}toRgbaObject(e="int"){const t=this.getComponents("rgb",e);return{r:t[0],g:t[1],b:t[2],a:t[3]}}}const nn=q("colp");class la{constructor(e,t){this.alphaViews_=null,this.element=e.createElement("div"),this.element.classList.add(nn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(nn("hsv"));const u=e.createElement("div");u.classList.add(nn("sv")),this.svPaletteView_=t.svPaletteView,u.appendChild(this.svPaletteView_.element),s.appendChild(u);const B=e.createElement("div");B.classList.add(nn("h")),this.hPaletteView_=t.hPaletteView,B.appendChild(this.hPaletteView_.element),s.appendChild(B),this.element.appendChild(s);const V=e.createElement("div");if(V.classList.add(nn("rgb")),this.textView_=t.textView,V.appendChild(this.textView_.element),this.element.appendChild(V),t.alphaViews){this.alphaViews_={palette:t.alphaViews.palette,text:t.alphaViews.text};const he=e.createElement("div");he.classList.add(nn("a"));const ze=e.createElement("div");ze.classList.add(nn("ap")),ze.appendChild(this.alphaViews_.palette.element),he.appendChild(ze);const Ue=e.createElement("div");Ue.classList.add(nn("at")),Ue.appendChild(this.alphaViews_.text.element),he.appendChild(Ue),this.element.appendChild(he)}}get allFocusableElements(){const e=[this.svPaletteView_.element,this.hPaletteView_.element,this.textView_.modeSelectElement,...this.textView_.textViews.map(t=>t.inputElement)];return this.alphaViews_&&e.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),e}}function ca(n){return n==="int"?"int":n==="float"?"float":void 0}function Fs(n){const e=re;return ve(n,{alpha:e.optional.boolean,color:e.optional.object({alpha:e.optional.boolean,type:e.optional.custom(ca)}),expanded:e.optional.boolean,picker:e.optional.custom(Tr)})}function vn(n){return n?.1:1}function bn(n){var e;return(e=n.color)===null||e===void 0?void 0:e.type}function ua(n,e){return n.alpha===e.alpha&&n.mode===e.mode&&n.notation===e.notation&&n.type===e.type}function Gt(n,e){const t=n.match(/^(.+)%$/);return Math.min(t?parseFloat(t[1])*.01*e:parseFloat(n),e)}const da={deg:n=>n,grad:n=>n*360/400,rad:n=>n*360/(2*Math.PI),turn:n=>n*360};function Dr(n){const e=n.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!e)return parseFloat(n);const t=parseFloat(e[1]),s=e[2];return da[s](t)}function zr(n){const e=n.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[Gt(e[1],255),Gt(e[2],255),Gt(e[3],255)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function Lr(n){return e=>{const t=zr(e);return t?new $e(t,"rgb",n):null}}function Ur(n){const e=n.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[Gt(e[1],255),Gt(e[2],255),Gt(e[3],255),Gt(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function Ir(n){return e=>{const t=Ur(e);return t?new $e(t,"rgb",n):null}}function Gr(n){const e=n.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[Dr(e[1]),Gt(e[2],100),Gt(e[3],100)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function Or(n){return e=>{const t=Gr(e);return t?new $e(t,"hsl",n):null}}function Fr(n){const e=n.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[Dr(e[1]),Gt(e[2],100),Gt(e[3],100),Gt(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function Vr(n){return e=>{const t=Fr(e);return t?new $e(t,"hsl",n):null}}function $r(n){const e=n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)];const t=n.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:null}function pa(n){const e=$r(n);return e?new $e(e,"rgb","int"):null}function Nr(n){const e=n.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16),ut(parseInt(e[4]+e[4],16),0,255,0,1)];const t=n.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16),ut(parseInt(t[4],16),0,255,0,1)]:null}function ha(n){const e=Nr(n);return e?new $e(e,"rgb","int"):null}function qr(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function Wr(n){return e=>{const t=qr(e);return t?new $e(t,"rgb",n):null}}function Kr(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3]),parseFloat(e[4])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function jr(n){return e=>{const t=Kr(e);return t?new $e(t,"rgb",n):null}}const fa=[{parser:$r,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:Nr,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:zr,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:Ur,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:Gr,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:Fr,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:qr,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:Kr,result:{alpha:!0,mode:"rgb",notation:"object"}}];function _a(n){return fa.reduce((e,{parser:t,result:s})=>e||(t(n)?s:null),null)}function Vs(n,e="int"){const t=_a(n);return t?t.notation==="hex"&&e!=="float"?Object.assign(Object.assign({},t),{type:"int"}):t.notation==="func"?Object.assign(Object.assign({},t),{type:e}):null:null}const Hr={int:[pa,ha,Lr("int"),Ir("int"),Or("int"),Vr("int"),Wr("int"),jr("int")],float:[Lr("float"),Ir("float"),Or("float"),Vr("float"),Wr("float"),jr("float")]};function ma(n){const e=Hr[n];return t=>{if(typeof t!="string")return $e.black(n);const s=e.reduce((u,B)=>u||B(t),null);return s??$e.black(n)}}function $s(n){const e=Hr[n];return t=>e.reduce((s,u)=>s||u(t),null)}function Yr(n){const e=xt(Math.floor(n),0,255).toString(16);return e.length===1?`0${e}`:e}function Zr(n,e="#"){const t=mn(n.getComponents("rgb")).map(Yr).join("");return`${e}${t}`}function Ns(n,e="#"){const t=n.getComponents("rgb"),s=[t[0],t[1],t[2],t[3]*255].map(Yr).join("");return`${e}${s}`}function Xr(n,e){const t=yt(e==="float"?2:0);return`rgb(${mn(n.getComponents("rgb",e)).map(u=>t(u)).join(", ")})`}function va(n){return e=>Xr(e,n)}function bs(n,e){const t=yt(2),s=yt(e==="float"?2:0);return`rgba(${n.getComponents("rgb",e).map((B,V)=>(V===3?t:s)(B)).join(", ")})`}function ba(n){return e=>bs(e,n)}function ga(n){const e=[yt(0),ps,ps];return`hsl(${mn(n.getComponents("hsl")).map((s,u)=>e[u](s)).join(", ")})`}function wa(n){const e=[yt(0),ps,ps,yt(2)];return`hsla(${n.getComponents("hsl").map((s,u)=>e[u](s)).join(", ")})`}function Jr(n,e){const t=yt(e==="float"?2:0),s=["r","g","b"];return`{${mn(n.getComponents("rgb",e)).map((B,V)=>`${s[V]}: ${t(B)}`).join(", ")}}`}function xa(n){return e=>Jr(e,n)}function Qr(n,e){const t=yt(2),s=yt(e==="float"?2:0),u=["r","g","b","a"];return`{${n.getComponents("rgb",e).map((V,he)=>{const ze=he===3?t:s;return`${u[he]}: ${ze(V)}`}).join(", ")}}`}function ya(n){return e=>Qr(e,n)}const Pa=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:Zr},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:Ns},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:ga},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:wa},...["int","float"].reduce((n,e)=>[...n,{format:{alpha:!1,mode:"rgb",notation:"func",type:e},stringifier:va(e)},{format:{alpha:!0,mode:"rgb",notation:"func",type:e},stringifier:ba(e)},{format:{alpha:!1,mode:"rgb",notation:"object",type:e},stringifier:xa(e)},{format:{alpha:!0,mode:"rgb",notation:"object",type:e},stringifier:ya(e)}],[])];function qs(n){return Pa.reduce((e,t)=>e||(ua(t.format,n)?t.stringifier:null),null)}const Xn=q("apl");class Sa{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(Xn()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("div");s.classList.add(Xn("b")),this.element.appendChild(s);const u=e.createElement("div");u.classList.add(Xn("c")),s.appendChild(u),this.colorElem_=u;const B=e.createElement("div");B.classList.add(Xn("m")),this.element.appendChild(B),this.markerElem_=B;const V=e.createElement("div");V.classList.add(Xn("p")),this.markerElem_.appendChild(V),this.previewElem_=V,this.update_()}update_(){const e=this.value.rawValue,t=e.getComponents("rgb"),s=new $e([t[0],t[1],t[2],0],"rgb"),u=new $e([t[0],t[1],t[2],255],"rgb"),B=["to right",bs(s),bs(u)];this.colorElem_.style.background=`linear-gradient(${B.join(",")})`,this.previewElem_.style.backgroundColor=bs(e);const V=ut(t[3],0,1,0,100);this.markerElem_.style.left=`${V}%`}onValueChange_(){this.update_()}}class Ea{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Sa(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new fn(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=e.point.x/e.bounds.width,u=this.value.rawValue,[B,V,he]=u.getComponents("hsv");this.value.setRawValue(new $e([B,V,he,s],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=Mt(vn(!0),Zt(e));if(t===0)return;const s=this.value.rawValue,[u,B,V,he]=s.getComponents("hsv");this.value.setRawValue(new $e([u,B,V,he+t],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){Mt(vn(!0),Zt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Ln=q("coltxt");function ka(n){const e=n.createElement("select"),t=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"}];return e.appendChild(t.reduce((s,u)=>{const B=n.createElement("option");return B.textContent=u.text,B.value=u.value,s.appendChild(B),s},n.createDocumentFragment())),e}class Ca{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Ln()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Ln("m")),this.modeElem_=ka(e),this.modeElem_.classList.add(Ln("ms")),s.appendChild(this.modeSelectElement),t.viewProps.bindDisabled(this.modeElem_);const u=e.createElement("div");u.classList.add(Ln("mm")),u.appendChild(P(e,"dropdown")),s.appendChild(u),this.element.appendChild(s);const B=e.createElement("div");B.classList.add(Ln("w")),this.element.appendChild(B),this.textsElem_=B,this.textViews_=t.textViews,this.applyTextViews_(),fe(t.colorMode,V=>{this.modeElem_.value=V})}get modeSelectElement(){return this.modeElem_}get textViews(){return this.textViews_}set textViews(e){this.textViews_=e,this.applyTextViews_()}applyTextViews_(){K(this.textsElem_);const e=this.element.ownerDocument;this.textViews_.forEach(t=>{const s=e.createElement("div");s.classList.add(Ln("c")),s.appendChild(t.element),this.textsElem_.appendChild(s)})}}function Ta(n){return yt(n==="float"?2:0)}function Ba(n,e,t){const s=ms(n,e)[t];return new Ve({min:0,max:s})}function Ws(n,e,t){return new Yn(n,{arrayPosition:t===0?"fst":t===3-1?"lst":"mid",baseStep:vn(!1),parser:e.parser,props:H.fromObject({draggingScale:e.colorType==="float"?.01:1,formatter:Ta(e.colorType)}),value:J(0,{constraint:Ba(e.colorMode,e.colorType,t)}),viewProps:e.viewProps})}class Aa{constructor(e,t){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=t.colorType,this.parser_=t.parser,this.value=t.value,this.viewProps=t.viewProps,this.colorMode=J(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(e),this.view=new Ca(e,{colorMode:this.colorMode,textViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view],viewProps:this.viewProps}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(e){const t={colorMode:this.colorMode.rawValue,colorType:this.colorType_,parser:this.parser_,viewProps:this.viewProps},s=[Ws(e,t,0),Ws(e,t,1),Ws(e,t,2)];return s.forEach((u,B)=>{jn({primary:this.value,secondary:u.value,forward:V=>V.rawValue.getComponents(this.colorMode.rawValue,this.colorType_)[B],backward:(V,he)=>{const ze=this.colorMode.rawValue,Ue=V.rawValue.getComponents(ze,this.colorType_);return Ue[B]=he.rawValue,new $e(Mr(mn(Ue),Ue[3]),ze,this.colorType_)}})}),s}onModeSelectChange_(e){const t=e.currentTarget;this.colorMode.rawValue=t.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.textViews=[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}}const Ks=q("hpl");class Ma{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(Ks()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("div");s.classList.add(Ks("c")),this.element.appendChild(s);const u=e.createElement("div");u.classList.add(Ks("m")),this.element.appendChild(u),this.markerElem_=u,this.update_()}update_(){const e=this.value.rawValue,[t]=e.getComponents("hsv");this.markerElem_.style.backgroundColor=Xr(new $e([t,100,100],"hsv"));const s=ut(t,0,360,0,100);this.markerElem_.style.left=`${s}%`}onValueChange_(){this.update_()}}class Ra{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Ma(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new fn(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=ut(xt(e.point.x,0,e.bounds.width),0,e.bounds.width,0,360),u=this.value.rawValue,[,B,V,he]=u.getComponents("hsv");this.value.setRawValue(new $e([s,B,V,he],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=Mt(vn(!1),Zt(e));if(t===0)return;const s=this.value.rawValue,[u,B,V,he]=s.getComponents("hsv");this.value.setRawValue(new $e([u+t,B,V,he],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){Mt(vn(!1),Zt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const js=q("svp"),ei=64;class Da{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(js()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("canvas");s.height=ei,s.width=ei,s.classList.add(js("c")),this.element.appendChild(s),this.canvasElement=s;const u=e.createElement("div");u.classList.add(js("m")),this.element.appendChild(u),this.markerElem_=u,this.update_()}update_(){const e=m(this.canvasElement);if(!e)return;const s=this.value.rawValue.getComponents("hsv"),u=this.canvasElement.width,B=this.canvasElement.height,V=e.getImageData(0,0,u,B),he=V.data;for(let Xe=0;Xe<B;Xe++)for(let et=0;et<u;et++){const gn=ut(et,0,u,0,100),Qn=ut(Xe,0,B,100,0),es=Ar(s[0],gn,Qn),gs=(Xe*u+et)*4;he[gs]=es[0],he[gs+1]=es[1],he[gs+2]=es[2],he[gs+3]=255}e.putImageData(V,0,0);const ze=ut(s[1],0,100,0,100);this.markerElem_.style.left=`${ze}%`;const Ue=ut(s[2],0,100,100,0);this.markerElem_.style.top=`${Ue}%`}onValueChange_(){this.update_()}}class za{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Da(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new fn(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=ut(e.point.x,0,e.bounds.width,0,100),u=ut(e.point.y,0,e.bounds.height,100,0),[B,,,V]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new $e([B,s,u,V],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){Er(e.key)&&e.preventDefault();const[t,s,u,B]=this.value.rawValue.getComponents("hsv"),V=vn(!1),he=Mt(V,Zt(e)),ze=Mt(V,Hn(e));he===0&&ze===0||this.value.setRawValue(new $e([t,s+he,u+ze,B],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){const t=vn(!1),s=Mt(t,Zt(e)),u=Mt(t,Hn(e));s===0&&u===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class La{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.hPaletteC_=new Ra(e,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new za(e,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=t.supportsAlpha?{palette:new Ea(e,{value:this.value,viewProps:this.viewProps}),text:new Yn(e,{parser:Yt,baseStep:.1,props:H.fromObject({draggingScale:.01,formatter:yt(2)}),value:J(0,{constraint:new Ve({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&jn({primary:this.value,secondary:this.alphaIcs_.text.value,forward:s=>s.rawValue.getComponents()[3],backward:(s,u)=>{const B=s.rawValue.getComponents();return B[3]=u.rawValue,new $e(B,s.rawValue.mode)}}),this.textC_=new Aa(e,{colorType:t.colorType,parser:Yt,value:this.value,viewProps:this.viewProps}),this.view=new la(e,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:t.supportsAlpha,svPaletteView:this.svPaletteC_.view,textView:this.textC_.view,viewProps:this.viewProps})}get textController(){return this.textC_}}const Hs=q("colsw");class Ua{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.element=e.createElement("div"),this.element.classList.add(Hs()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Hs("sw")),this.element.appendChild(s),this.swatchElem_=s;const u=e.createElement("button");u.classList.add(Hs("b")),t.viewProps.bindDisabled(u),this.element.appendChild(u),this.buttonElement=u,this.update_()}update_(){const e=this.value.rawValue;this.swatchElem_.style.backgroundColor=Ns(e)}onValueChange_(){this.update_()}}class Ia{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new Ua(e,{value:this.value,viewProps:this.viewProps})}}class Ys{constructor(e,t){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=Je.create(t.expanded),this.swatchC_=new Ia(e,{value:this.value,viewProps:this.viewProps});const s=this.swatchC_.view.buttonElement;s.addEventListener("blur",this.onButtonBlur_),s.addEventListener("click",this.onButtonClick_),this.textC_=new Ht(e,{parser:t.parser,props:H.fromObject({formatter:t.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new Jo(e,{foldable:this.foldable_,pickerLayout:t.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=t.pickerLayout==="popup"?new hn(e,{viewProps:this.viewProps}):null;const u=new La(e,{colorType:t.colorType,supportsAlpha:t.supportsAlpha,value:this.value,viewProps:this.viewProps});u.view.allFocusableElements.forEach(B=>{B.addEventListener("blur",this.onPopupChildBlur_),B.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=u,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(u.view.element),jn({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:B=>B.rawValue,backward:(B,V)=>V.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),qe(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,s=e.relatedTarget;(!s||!t.contains(s))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,s=ne(e);s&&t.contains(s)||s&&s===this.swatchC_.view.buttonElement&&!d(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function Ga(n,e){return $e.isColorObject(n)?$e.fromObject(n,e):$e.black(e)}function Oa(n){return mn(n.getComponents("rgb")).reduce((e,t)=>e<<8|Math.floor(t)&255,0)}function Fa(n){return n.getComponents("rgb").reduce((e,t,s)=>{const u=Math.floor(s===3?t*255:t)&255;return e<<8|u},0)>>>0}function Va(n){return new $e([n>>16&255,n>>8&255,n&255],"rgb")}function $a(n){return new $e([n>>24&255,n>>16&255,n>>8&255,ut(n&255,0,255,0,1)],"rgb")}function Na(n){return typeof n!="number"?$e.black():Va(n)}function qa(n){return typeof n!="number"?$e.black():$a(n)}function Wa(n){const e=qs(n);return e?(t,s)=>{Zn(t,e(s))}:null}function Ka(n){const e=n?Fa:Oa;return(t,s)=>{Zn(t,e(s))}}function ja(n,e,t){const s=e.toRgbaObject(t);n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b),n.writeProperty("a",s.a)}function Ha(n,e,t){const s=e.toRgbaObject(t);n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b)}function Ya(n,e){return(t,s)=>{n?ja(t,s,e):Ha(t,s,e)}}function Zs(n){var e;return!!(n!=null&&n.alpha||!((e=n==null?void 0:n.color)===null||e===void 0)&&e.alpha)}function Za(n){return n?e=>Ns(e,"0x"):e=>Zr(e,"0x")}function Xa(n){return"color"in n||"view"in n&&n.view==="color"}const Ja={id:"input-color-number",type:"input",accept:(n,e)=>{if(typeof n!="number"||!Xa(e))return null;const t=Fs(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>Zs(n.params)?qa:Na,equals:$e.equals,writer:n=>Ka(Zs(n.params))},controller:n=>{const e=Zs(n.params),t="expanded"in n.params?n.params.expanded:void 0,s="picker"in n.params?n.params.picker:void 0;return new Ys(n.document,{colorType:"int",expanded:t??!1,formatter:Za(e),parser:$s("int"),pickerLayout:s??"popup",supportsAlpha:e,value:n.value,viewProps:n.viewProps})}};function Qa(n){return $e.isRgbaColorObject(n)}function el(n){return e=>Ga(e,n)}function tl(n,e){return t=>n?Qr(t,e):Jr(t,e)}const nl={id:"input-color-object",type:"input",accept:(n,e)=>{if(!$e.isColorObject(n))return null;const t=Fs(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>el(bn(n.params)),equals:$e.equals,writer:n=>Ya(Qa(n.initialValue),bn(n.params))},controller:n=>{var e;const t=$e.isRgbaColorObject(n.initialValue),s="expanded"in n.params?n.params.expanded:void 0,u="picker"in n.params?n.params.picker:void 0,B=(e=bn(n.params))!==null&&e!==void 0?e:"int";return new Ys(n.document,{colorType:B,expanded:s??!1,formatter:tl(t,B),parser:$s(B),pickerLayout:u??"popup",supportsAlpha:t,value:n.value,viewProps:n.viewProps})}},sl={id:"input-color-string",type:"input",accept:(n,e)=>{if(typeof n!="string"||"view"in e&&e.view==="text")return null;const t=Vs(n,bn(e));if(!t||!qs(t))return null;const u=Fs(e);return u?{initialValue:n,params:u}:null},binding:{reader:n=>{var e;return ma((e=bn(n.params))!==null&&e!==void 0?e:"int")},equals:$e.equals,writer:n=>{const e=Vs(n.initialValue,bn(n.params));if(!e)throw z.shouldNeverHappen();const t=Wa(e);if(!t)throw z.notBindable();return t}},controller:n=>{const e=Vs(n.initialValue,bn(n.params));if(!e)throw z.shouldNeverHappen();const t=qs(e);if(!t)throw z.shouldNeverHappen();const s="expanded"in n.params?n.params.expanded:void 0,u="picker"in n.params?n.params.picker:void 0;return new Ys(n.document,{colorType:e.type,expanded:s??!1,formatter:t,parser:$s(e.type),pickerLayout:u??"popup",supportsAlpha:e.alpha,value:n.value,viewProps:n.viewProps})}};class sn{constructor(e){this.components=e.components,this.asm_=e.assembly}constrain(e){const t=this.asm_.toComponents(e).map((s,u)=>{var B,V;return(V=(B=this.components[u])===null||B===void 0?void 0:B.constrain(s))!==null&&V!==void 0?V:s});return this.asm_.fromComponents(t)}}const ti=q("pndtxt");class rl{constructor(e,t){this.textViews=t.textViews,this.element=e.createElement("div"),this.element.classList.add(ti()),this.textViews.forEach(s=>{const u=e.createElement("div");u.classList.add(ti("a")),u.appendChild(s.element),this.element.appendChild(u)})}}function il(n,e,t){return new Yn(n,{arrayPosition:t===0?"fst":t===e.axes.length-1?"lst":"mid",baseStep:e.axes[t].baseStep,parser:e.parser,props:e.axes[t].textProps,value:J(0,{constraint:e.axes[t].constraint}),viewProps:e.viewProps})}class Xs{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.acs_=t.axes.map((s,u)=>il(e,t,u)),this.acs_.forEach((s,u)=>{jn({primary:this.value,secondary:s.value,forward:B=>t.assembly.toComponents(B.rawValue)[u],backward:(B,V)=>{const he=t.assembly.toComponents(B.rawValue);return he[u]=V.rawValue,t.assembly.fromComponents(he)}})}),this.view=new rl(e,{textViews:this.acs_.map(s=>s.view)})}}function ni(n,e){return"step"in n&&!G(n.step)?new Vt(n.step,e):null}function si(n){return!G(n.max)&&!G(n.min)?new Ve({max:n.max,min:n.min}):!G(n.max)||!G(n.min)?new ht({max:n.max,min:n.min}):null}function ol(n){const e=bt(n,Ve);if(e)return[e.values.get("min"),e.values.get("max")];const t=bt(n,ht);return t?[t.minValue,t.maxValue]:[void 0,void 0]}function al(n,e){const t=[],s=ni(n,e);s&&t.push(s);const u=si(n);u&&t.push(u);const B=Os(n.options);return B&&t.push(B),new Ze(t)}const ll={id:"input-number",type:"input",accept:(n,e)=>{if(typeof n!="number")return null;const t=re,s=ve(e,{format:t.optional.function,max:t.optional.number,min:t.optional.number,options:t.optional.custom(hs),step:t.optional.number});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Pr,constraint:n=>al(n.params,n.initialValue),writer:n=>Zn},controller:n=>{var e;const t=n.value,s=n.constraint,u=s&&bt(s,St);if(u)return new At(n.document,{props:new H({options:u.values.value("options")}),value:t,viewProps:n.viewProps});const B=(e="format"in n.params?n.params.format:void 0)!==null&&e!==void 0?e:yt(fs(s,t.rawValue)),V=s&&bt(s,Ve);return V?new Gs(n.document,{baseStep:Dn(s),parser:Yt,sliderProps:new H({maxValue:V.values.value("max"),minValue:V.values.value("min")}),textProps:H.fromObject({draggingScale:zn(s,t.rawValue),formatter:B}),value:t,viewProps:n.viewProps}):new Yn(n.document,{baseStep:Dn(s),parser:Yt,props:H.fromObject({draggingScale:zn(s,t.rawValue),formatter:B}),value:t,viewProps:n.viewProps})}};class rn{constructor(e=0,t=0){this.x=e,this.y=t}getComponents(){return[this.x,this.y]}static isObject(e){if(G(e))return!1;const t=e.x,s=e.y;return!(typeof t!="number"||typeof s!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y}toObject(){return{x:this.x,y:this.y}}}const ri={toComponents:n=>n.getComponents(),fromComponents:n=>new rn(...n)},Un=q("p2d");class cl{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Un()),t.viewProps.bindClassModifiers(this.element),fe(t.expanded,Te(this.element,Un(void 0,"expanded")));const s=e.createElement("div");s.classList.add(Un("h")),this.element.appendChild(s);const u=e.createElement("button");u.classList.add(Un("b")),u.appendChild(P(e,"p2dpad")),t.viewProps.bindDisabled(u),s.appendChild(u),this.buttonElement=u;const B=e.createElement("div");if(B.classList.add(Un("t")),s.appendChild(B),this.textElement=B,t.pickerLayout==="inline"){const V=e.createElement("div");V.classList.add(Un("p")),this.element.appendChild(V),this.pickerElement=V}else this.pickerElement=null}}const on=q("p2dp");class ul{constructor(e,t){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.invertsY_=t.invertsY,this.maxValue_=t.maxValue,this.element=e.createElement("div"),this.element.classList.add(on()),t.layout==="popup"&&this.element.classList.add(on(void 0,"p")),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(on("p")),t.viewProps.bindTabIndex(s),this.element.appendChild(s),this.padElement=s;const u=e.createElementNS(S,"svg");u.classList.add(on("g")),this.padElement.appendChild(u),this.svgElem_=u;const B=e.createElementNS(S,"line");B.classList.add(on("ax")),B.setAttributeNS(null,"x1","0"),B.setAttributeNS(null,"y1","50%"),B.setAttributeNS(null,"x2","100%"),B.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(B);const V=e.createElementNS(S,"line");V.classList.add(on("ax")),V.setAttributeNS(null,"x1","50%"),V.setAttributeNS(null,"y1","0"),V.setAttributeNS(null,"x2","50%"),V.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(V);const he=e.createElementNS(S,"line");he.classList.add(on("l")),he.setAttributeNS(null,"x1","50%"),he.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(he),this.lineElem_=he;const ze=e.createElement("div");ze.classList.add(on("m")),this.padElement.appendChild(ze),this.markerElem_=ze,t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[e,t]=this.value.rawValue.getComponents(),s=this.maxValue_,u=ut(e,-s,+s,0,100),B=ut(t,-s,+s,0,100),V=this.invertsY_?100-B:B;this.lineElem_.setAttributeNS(null,"x2",`${u}%`),this.lineElem_.setAttributeNS(null,"y2",`${V}%`),this.markerElem_.style.left=`${u}%`,this.markerElem_.style.top=`${V}%`}onValueChange_(){this.update_()}onFoldableChange_(){this.update_()}}function ii(n,e,t){return[Mt(e[0],Zt(n)),Mt(e[1],Hn(n))*(t?1:-1)]}class dl{constructor(e,t){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.baseSteps_=t.baseSteps,this.maxValue_=t.maxValue,this.invertsY_=t.invertsY,this.view=new ul(e,{invertsY:this.invertsY_,layout:t.layout,maxValue:this.maxValue_,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new fn(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=this.maxValue_,u=ut(e.point.x,0,e.bounds.width,-s,+s),B=ut(this.invertsY_?e.bounds.height-e.point.y:e.point.y,0,e.bounds.height,-s,+s);this.value.setRawValue(new rn(u,B),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onPadKeyDown_(e){Er(e.key)&&e.preventDefault();const[t,s]=ii(e,this.baseSteps_,this.invertsY_);t===0&&s===0||this.value.setRawValue(new rn(this.value.rawValue.x+t,this.value.rawValue.y+s),{forceEmit:!1,last:!1})}onPadKeyUp_(e){const[t,s]=ii(e,this.baseSteps_,this.invertsY_);t===0&&s===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class pl{constructor(e,t){var s,u;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=Je.create(t.expanded),this.popC_=t.pickerLayout==="popup"?new hn(e,{viewProps:this.viewProps}):null;const B=new dl(e,{baseSteps:[t.axes[0].baseStep,t.axes[1].baseStep],invertsY:t.invertsY,layout:t.pickerLayout,maxValue:t.maxValue,value:this.value,viewProps:this.viewProps});B.view.allFocusableElements.forEach(V=>{V.addEventListener("blur",this.onPopupChildBlur_),V.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=B,this.textC_=new Xs(e,{assembly:ri,axes:t.axes,parser:t.parser,value:this.value,viewProps:this.viewProps}),this.view=new cl(e,{expanded:this.foldable_.value("expanded"),pickerLayout:t.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(s=this.view.buttonElement)===null||s===void 0||s.addEventListener("blur",this.onPadButtonBlur_),(u=this.view.buttonElement)===null||u===void 0||u.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),jn({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:V=>V.rawValue,backward:(V,he)=>he.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),qe(this.foldable_,this.view.pickerElement))}onPadButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,s=e.relatedTarget;(!s||!t.contains(s))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,s=ne(e);s&&t.contains(s)||s&&s===this.view.buttonElement&&!d(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.view.buttonElement.focus()}}class In{constructor(e=0,t=0,s=0){this.x=e,this.y=t,this.z=s}getComponents(){return[this.x,this.y,this.z]}static isObject(e){if(G(e))return!1;const t=e.x,s=e.y,u=e.z;return!(typeof t!="number"||typeof s!="number"||typeof u!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const oi={toComponents:n=>n.getComponents(),fromComponents:n=>new In(...n)};function hl(n){return In.isObject(n)?new In(n.x,n.y,n.z):new In}function fl(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z)}function _l(n,e){return new sn({assembly:oi,components:[Xt("x"in n?n.x:void 0,e.x),Xt("y"in n?n.y:void 0,e.y),Xt("z"in n?n.z:void 0,e.z)]})}function Js(n,e){return{baseStep:Dn(e),constraint:e,textProps:H.fromObject({draggingScale:zn(e,n),formatter:yt(fs(e,n))})}}const ml={id:"input-point3d",type:"input",accept:(n,e)=>{if(!In.isObject(n))return null;const t=re,s=ve(e,{x:t.optional.custom(tn),y:t.optional.custom(tn),z:t.optional.custom(tn)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>hl,constraint:n=>_l(n.params,n.initialValue),equals:In.equals,writer:n=>fl},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof sn))throw z.shouldNeverHappen();return new Xs(n.document,{assembly:oi,axes:[Js(e.rawValue.x,t.components[0]),Js(e.rawValue.y,t.components[1]),Js(e.rawValue.z,t.components[2])],parser:Yt,value:e,viewProps:n.viewProps})}};class Gn{constructor(e=0,t=0,s=0,u=0){this.x=e,this.y=t,this.z=s,this.w=u}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(e){if(G(e))return!1;const t=e.x,s=e.y,u=e.z,B=e.w;return!(typeof t!="number"||typeof s!="number"||typeof u!="number"||typeof B!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z&&e.w===t.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const ai={toComponents:n=>n.getComponents(),fromComponents:n=>new Gn(...n)};function vl(n){return Gn.isObject(n)?new Gn(n.x,n.y,n.z,n.w):new Gn}function bl(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z),n.writeProperty("w",e.w)}function gl(n,e){return new sn({assembly:ai,components:[Xt("x"in n?n.x:void 0,e.x),Xt("y"in n?n.y:void 0,e.y),Xt("z"in n?n.z:void 0,e.z),Xt("w"in n?n.w:void 0,e.w)]})}function wl(n,e){return{baseStep:Dn(e),constraint:e,textProps:H.fromObject({draggingScale:zn(e,n),formatter:yt(fs(e,n))})}}const xl={id:"input-point4d",type:"input",accept:(n,e)=>{if(!Gn.isObject(n))return null;const t=re,s=ve(e,{x:t.optional.custom(tn),y:t.optional.custom(tn),z:t.optional.custom(tn),w:t.optional.custom(tn)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>vl,constraint:n=>gl(n.params,n.initialValue),equals:Gn.equals,writer:n=>bl},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof sn))throw z.shouldNeverHappen();return new Xs(n.document,{assembly:ai,axes:e.rawValue.getComponents().map((s,u)=>wl(s,t.components[u])),parser:Yt,value:e,viewProps:n.viewProps})}};function yl(n){const e=[],t=Os(n.options);return t&&e.push(t),new Ze(e)}const Pl={id:"input-string",type:"input",accept:(n,e)=>{if(typeof n!="string")return null;const s=ve(e,{options:re.optional.custom(hs)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Sr,constraint:n=>yl(n.params),writer:n=>Zn},controller:n=>{const e=n.document,t=n.value,s=n.constraint,u=s&&bt(s,St);return u?new At(e,{props:new H({options:u.values.value("options")}),value:t,viewProps:n.viewProps}):new Ht(e,{parser:B=>B,props:H.fromObject({formatter:zs}),value:t,viewProps:n.viewProps})}},Jn={monitor:{defaultInterval:200,defaultLineCount:3}},li=q("mll");class Sl{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(li()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("textarea");s.classList.add(li("i")),s.style.height=`calc(var(--bld-us) * ${t.lineCount})`,s.readOnly=!0,t.viewProps.bindDisabled(s),this.element.appendChild(s),this.textareaElem_=s,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.textareaElem_,t=e.scrollTop===e.scrollHeight-e.clientHeight,s=[];this.value.rawValue.forEach(u=>{u!==void 0&&s.push(this.formatter_(u))}),e.textContent=s.join(`
`),t&&(e.scrollTop=e.scrollHeight)}onValueUpdate_(){this.update_()}}class Qs{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new Sl(e,{formatter:t.formatter,lineCount:t.lineCount,value:this.value,viewProps:this.viewProps})}}const ci=q("sgl");class El{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(ci()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("input");s.classList.add(ci("i")),s.readOnly=!0,s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.value.rawValue,t=e[e.length-1];this.inputElement.value=t!==void 0?this.formatter_(t):""}onValueUpdate_(){this.update_()}}class er{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new El(e,{formatter:t.formatter,value:this.value,viewProps:this.viewProps})}}const kl={id:"monitor-bool",type:"monitor",accept:(n,e)=>{if(typeof n!="boolean")return null;const s=ve(e,{lineCount:re.optional.number});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Rn},controller:n=>{var e;return n.value.rawValue.length===1?new er(n.document,{formatter:gr,value:n.value,viewProps:n.viewProps}):new Qs(n.document,{formatter:gr,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Jn.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}},an=q("grl");class Cl{constructor(e,t){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=e.createElement("div"),this.element.classList.add(an()),t.viewProps.bindClassModifiers(this.element),this.formatter_=t.formatter,this.props_=t.props,this.cursor_=t.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const s=e.createElementNS(S,"svg");s.classList.add(an("g")),s.style.height=`calc(var(--bld-us) * ${t.lineCount})`,this.element.appendChild(s),this.svgElem_=s;const u=e.createElementNS(S,"polyline");this.svgElem_.appendChild(u),this.lineElem_=u;const B=e.createElement("div");B.classList.add(an("t"),q("tt")()),this.element.appendChild(B),this.tooltipElem_=B,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const e=this.svgElem_.getBoundingClientRect(),t=this.value.rawValue.length-1,s=this.props_.get("minValue"),u=this.props_.get("maxValue"),B=[];this.value.rawValue.forEach((Xe,et)=>{if(Xe===void 0)return;const gn=ut(et,0,t,0,e.width),Qn=ut(Xe,s,u,e.height,0);B.push([gn,Qn].join(","))}),this.lineElem_.setAttributeNS(null,"points",B.join(" "));const V=this.tooltipElem_,he=this.value.rawValue[this.cursor_.rawValue];if(he===void 0){V.classList.remove(an("t","a"));return}const ze=ut(this.cursor_.rawValue,0,t,0,e.width),Ue=ut(he,s,u,e.height,0);V.style.left=`${ze}px`,V.style.top=`${Ue}px`,V.textContent=`${this.formatter_(he)}`,V.classList.contains(an("t","a"))||(V.classList.add(an("t","a"),an("t","in")),i(V),V.classList.remove(an("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class Tl{constructor(e,t){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props_=t.props,this.value=t.value,this.viewProps=t.viewProps,this.cursor_=J(-1),this.view=new Cl(e,{cursor:this.cursor_,formatter:t.formatter,lineCount:t.lineCount,props:this.props_,value:this.value,viewProps:this.viewProps}),!d(e))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const s=new fn(this.view.element);s.emitter.on("down",this.onGraphPointerDown_),s.emitter.on("move",this.onGraphPointerMove_),s.emitter.on("up",this.onGraphPointerUp_)}}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(e){const t=this.view.element.getBoundingClientRect();this.cursor_.rawValue=Math.floor(ut(e.offsetX,0,t.width,0,this.value.rawValue.length))}onGraphPointerDown_(e){this.onGraphPointerMove_(e)}onGraphPointerMove_(e){if(!e.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(ut(e.data.point.x,0,e.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function tr(n){return"format"in n&&!G(n.format)?n.format:yt(2)}function Bl(n){var e;return n.value.rawValue.length===1?new er(n.document,{formatter:tr(n.params),value:n.value,viewProps:n.viewProps}):new Qs(n.document,{formatter:tr(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Jn.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}function Al(n){var e,t,s;return new Tl(n.document,{formatter:tr(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Jn.monitor.defaultLineCount,props:H.fromObject({maxValue:(t="max"in n.params?n.params.max:null)!==null&&t!==void 0?t:100,minValue:(s="min"in n.params?n.params.min:null)!==null&&s!==void 0?s:0}),value:n.value,viewProps:n.viewProps})}function ui(n){return"view"in n&&n.view==="graph"}const Ml={id:"monitor-number",type:"monitor",accept:(n,e)=>{if(typeof n!="number")return null;const t=re,s=ve(e,{format:t.optional.function,lineCount:t.optional.number,max:t.optional.number,min:t.optional.number,view:t.optional.string});return s?{initialValue:n,params:s}:null},binding:{defaultBufferSize:n=>ui(n)?64:1,reader:n=>Pr},controller:n=>ui(n.params)?Al(n):Bl(n)},Rl={id:"monitor-string",type:"monitor",accept:(n,e)=>{if(typeof n!="string")return null;const t=re,s=ve(e,{lineCount:t.optional.number,multiline:t.optional.boolean});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Sr},controller:n=>{var e;const t=n.value;return t.rawValue.length>1||"multiline"in n.params&&n.params.multiline?new Qs(n.document,{formatter:zs,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Jn.monitor.defaultLineCount,value:t,viewProps:n.viewProps}):new er(n.document,{formatter:zs,value:t,viewProps:n.viewProps})}};function Dl(n,e){var t;const s=n.accept(e.target.read(),e.params);if(G(s))return null;const u=re,B={target:e.target,initialValue:s.initialValue,params:s.params},V=n.binding.reader(B),he=n.binding.constraint?n.binding.constraint(B):void 0,ze=J(V(s.initialValue),{constraint:he,equals:n.binding.equals}),Ue=new ye({reader:V,target:e.target,value:ze,writer:n.binding.writer(B)}),Xe=u.optional.boolean(e.params.disabled).value,et=u.optional.boolean(e.params.hidden).value,gn=n.controller({constraint:he,document:e.document,initialValue:s.initialValue,params:s.params,value:Ue.value,viewProps:_.create({disabled:Xe,hidden:et})});return new Ye(e.document,{binding:Ue,blade:Ie(),props:H.fromObject({label:"label"in e.params?(t=u.optional.string(e.params.label).value)!==null&&t!==void 0?t:null:e.target.key}),valueController:gn})}function zl(n,e){return e===0?new Ce:new ge(n,e??Jn.monitor.defaultInterval)}function Ll(n,e){var t,s,u;const B=re,V=n.accept(e.target.read(),e.params);if(G(V))return null;const he={target:e.target,initialValue:V.initialValue,params:V.params},ze=n.binding.reader(he),Ue=(s=(t=B.optional.number(e.params.bufferSize).value)!==null&&t!==void 0?t:n.binding.defaultBufferSize&&n.binding.defaultBufferSize(V.params))!==null&&s!==void 0?s:1,Xe=B.optional.number(e.params.interval).value,et=new Oe({reader:ze,target:e.target,ticker:zl(e.document,Xe),value:tt(Ue)}),gn=B.optional.boolean(e.params.disabled).value,Qn=B.optional.boolean(e.params.hidden).value,es=n.controller({document:e.document,params:V.params,value:et.value,viewProps:_.create({disabled:gn,hidden:Qn})});return new Qe(e.document,{binding:et,blade:Ie(),props:H.fromObject({label:"label"in e.params?(u=B.optional.string(e.params.label).value)!==null&&u!==void 0?u:null:e.target.key}),valueController:es})}class Ul{constructor(){this.pluginsMap_={blades:[],inputs:[],monitors:[]}}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(e){e.type==="blade"?this.pluginsMap_.blades.unshift(e):e.type==="input"?this.pluginsMap_.inputs.unshift(e):e.type==="monitor"&&this.pluginsMap_.monitors.unshift(e)}createInput(e,t,s){const u=t.read();if(G(u))throw new z({context:{key:t.key},type:"nomatchingcontroller"});const B=this.pluginsMap_.inputs.reduce((V,he)=>V??Dl(he,{document:e,target:t,params:s}),null);if(B)return B;throw new z({context:{key:t.key},type:"nomatchingcontroller"})}createMonitor(e,t,s){const u=this.pluginsMap_.monitors.reduce((B,V)=>B??Ll(V,{document:e,params:s,target:t}),null);if(u)return u;throw new z({context:{key:t.key},type:"nomatchingcontroller"})}createBlade(e,t){const s=this.pluginsMap_.blades.reduce((u,B)=>u??me(B,{document:e,params:t}),null);if(!s)throw new z({type:"nomatchingview",context:{params:t}});return s}createBladeApi(e){if(e instanceof Ye)return new rt(e);if(e instanceof Qe)return new it(e);if(e instanceof ot)return new ft(e,this);const t=this.pluginsMap_.blades.reduce((s,u)=>s??u.api({controller:e,pool:this}),null);if(!t)throw z.shouldNeverHappen();return t}}function Il(){const n=new Ul;return[Nl,ml,xl,Pl,ll,sl,nl,Ja,Xo,kl,Rl,Ml,Be,kn,ls,pe].forEach(e=>{n.register(e)}),n}function Gl(n){return rn.isObject(n)?new rn(n.x,n.y):new rn}function Ol(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y)}function Xt(n,e){if(!n)return;const t=[],s=ni(n,e);s&&t.push(s);const u=si(n);return u&&t.push(u),new Ze(t)}function Fl(n,e){return new sn({assembly:ri,components:[Xt("x"in n?n.x:void 0,e.x),Xt("y"in n?n.y:void 0,e.y)]})}function di(n,e){const[t,s]=n?ol(n):[];if(!G(t)||!G(s))return Math.max(Math.abs(t??0),Math.abs(s??0));const u=Dn(n);return Math.max(Math.abs(u)*10,Math.abs(e)*10)}function Vl(n,e){const t=e instanceof sn?e.components[0]:void 0,s=e instanceof sn?e.components[1]:void 0,u=di(t,n.x),B=di(s,n.y);return Math.max(u,B)}function pi(n,e){return{baseStep:Dn(e),constraint:e,textProps:H.fromObject({draggingScale:zn(e,n),formatter:yt(fs(e,n))})}}function $l(n){if(!("y"in n))return!1;const e=n.y;return e&&"inverted"in e?!!e.inverted:!1}const Nl={id:"input-point2d",type:"input",accept:(n,e)=>{if(!rn.isObject(n))return null;const t=re,s=ve(e,{expanded:t.optional.boolean,picker:t.optional.custom(Tr),x:t.optional.custom(tn),y:t.optional.object({inverted:t.optional.boolean,max:t.optional.number,min:t.optional.number,step:t.optional.number})});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Gl,constraint:n=>Fl(n.params,n.initialValue),equals:rn.equals,writer:n=>Ol},controller:n=>{const e=n.document,t=n.value,s=n.constraint;if(!(s instanceof sn))throw z.shouldNeverHappen();const u="expanded"in n.params?n.params.expanded:void 0,B="picker"in n.params?n.params.picker:void 0;return new pl(e,{axes:[pi(t.rawValue.x,s.components[0]),pi(t.rawValue.y,s.components[1])],expanded:u??!1,invertsY:$l(n.params),maxValue:Vl(t.rawValue,s),parser:Yt,pickerLayout:B??"popup",value:t,viewProps:n.viewProps})}};class hi extends f{constructor(e){super(e),this.emitter_=new F,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new R(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get options(){return this.controller_.valueController.props.get("options")}set options(e){this.controller_.valueController.props.set("options",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,u=>{s(u.event)}),this}}class fi extends f{constructor(e){super(e),this.emitter_=new F,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new R(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get maxValue(){return this.controller_.valueController.sliderController.props.get("maxValue")}set maxValue(e){this.controller_.valueController.sliderController.props.set("maxValue",e)}get minValue(){return this.controller_.valueController.sliderController.props.get("minValue")}set minValue(e){this.controller_.valueController.sliderController.props.set("minValue",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,u=>{s(u.event)}),this}}class _i extends f{constructor(e){super(e),this.emitter_=new F,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new R(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get formatter(){return this.controller_.valueController.props.get("formatter")}set formatter(e){this.controller_.valueController.props.set("formatter",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,u=>{s(u.event)}),this}}const ql=function(){return{id:"list",type:"blade",accept(n){const e=re,t=ve(n,{options:e.required.custom(hs),value:e.required.raw,view:e.required.constant("list"),label:e.optional.string});return t?{params:t}:null},controller(n){const e=new St(Br(n.params.options)),t=J(n.params.value,{constraint:e}),s=new At(n.document,{props:new H({options:e.values.value("options")}),value:t,viewProps:n.viewProps});return new qt(n.document,{blade:n.blade,props:H.fromObject({label:n.params.label}),valueController:s})},api(n){return!(n.controller instanceof qt)||!(n.controller.valueController instanceof At)?null:new hi(n.controller)}}}();function Wl(n){return n.reduce((e,t)=>Object.assign(e,{[t.presetKey]:t.read()}),{})}function Kl(n,e){n.forEach(t=>{const s=e[t.target.presetKey];s!==void 0&&t.writer(t.target,t.reader(s))})}class jl extends _t{constructor(e,t){super(e,t)}get element(){return this.controller_.view.element}importPreset(e){const t=this.controller_.rackController.rack.find(Ye).map(s=>s.binding);Kl(t,e),this.refresh()}exportPreset(){const e=this.controller_.rackController.rack.find(Ye).map(t=>t.binding.target);return Wl(e)}refresh(){this.controller_.rackController.rack.find(Ye).forEach(e=>{e.binding.read()}),this.controller_.rackController.rack.find(Qe).forEach(e=>{e.binding.read()})}}class Hl extends pt{constructor(e,t){super(e,{expanded:t.expanded,blade:t.blade,props:t.props,root:!0,viewProps:t.viewProps})}}const Yl={id:"slider",type:"blade",accept(n){const e=re,t=ve(n,{max:e.required.number,min:e.required.number,view:e.required.constant("slider"),format:e.optional.function,label:e.optional.string,value:e.optional.number});return t?{params:t}:null},controller(n){var e,t;const s=(e=n.params.value)!==null&&e!==void 0?e:0,u=new Ve({max:n.params.max,min:n.params.min}),B=new Gs(n.document,{baseStep:1,parser:Yt,sliderProps:new H({maxValue:u.values.value("max"),minValue:u.values.value("min")}),textProps:H.fromObject({draggingScale:zn(void 0,s),formatter:(t=n.params.format)!==null&&t!==void 0?t:Fo}),value:J(s,{constraint:u}),viewProps:n.viewProps});return new qt(n.document,{blade:n.blade,props:H.fromObject({label:n.params.label}),valueController:B})},api(n){return!(n.controller instanceof qt)||!(n.controller.valueController instanceof Gs)?null:new fi(n.controller)}},Zl=function(){return{id:"text",type:"blade",accept(n){const e=re,t=ve(n,{parse:e.required.function,value:e.required.raw,view:e.required.constant("text"),format:e.optional.function,label:e.optional.string});return t?{params:t}:null},controller(n){var e;const t=new Ht(n.document,{parser:n.params.parse,props:H.fromObject({formatter:(e=n.params.format)!==null&&e!==void 0?e:s=>String(s)}),value:J(n.params.value),viewProps:n.viewProps});return new qt(n.document,{blade:n.blade,props:H.fromObject({label:n.params.label}),valueController:t})},api(n){return!(n.controller instanceof qt)||!(n.controller.valueController instanceof Ht)?null:new _i(n.controller)}}}();function Xl(n){const e=n.createElement("div");return e.classList.add(q("dfw")()),n.body&&n.body.appendChild(e),e}function mi(n,e,t){if(n.querySelector(`style[data-tp-style=${e}]`))return;const s=n.createElement("style");s.dataset.tpStyle=e,s.textContent=t,n.head.appendChild(s)}class Jl extends jl{constructor(e){var t,s;const u=e??{},B=(t=u.document)!==null&&t!==void 0?t:c(),V=Il(),he=new Hl(B,{expanded:u.expanded,blade:Ie(),props:H.fromObject({title:u.title}),viewProps:_.create()});super(he,V),this.pool_=V,this.containerElem_=(s=u.container)!==null&&s!==void 0?s:Xl(B),this.containerElem_.appendChild(this.element),this.doc_=B,this.usesDefaultWrapper_=!u.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw z.alreadyDisposed();return this.doc_}dispose(){const e=this.containerElem_;if(!e)throw z.alreadyDisposed();if(this.usesDefaultWrapper_){const t=e.parentElement;t&&t.removeChild(e)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(e){("plugin"in e?[e.plugin]:"plugins"in e?e.plugins:[]).forEach(s=>{this.pool_.register(s),this.embedPluginStyle_(s)})}embedPluginStyle_(e){e.css&&mi(this.document,`plugin-${e.id}`,e.css)}setUpDefaultPlugins_(){mi(this.document,"default",'.tp-tbiv_b,.tp-coltxtv_ms,.tp-ckbv_i,.tp-rotv_b,.tp-fldv_b,.tp-mllv_i,.tp-sglv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-mllv_i,.tp-sglv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--mo-fg);height:var(--bld-us);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-mllv_i::-webkit-scrollbar,.tp-sglv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-mllv_i::-webkit-scrollbar-corner,.tp-sglv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-mllv_i::-webkit-scrollbar-thumb,.tp-sglv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-br: var(--tp-base-border-radius, 6px);--cnt-h-p: var(--tp-container-horizontal-padding, 4px);--cnt-v-p: var(--tp-container-vertical-padding, 4px);--elm-br: var(--tp-element-border-radius, 2px);--bld-s: var(--tp-blade-spacing, 4px);--bld-us: var(--tp-blade-unit-size, 20px);--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tabv_c .tp-brkv>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-v-p))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tabv_c .tp-brkv>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--bld-s)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tabv_c .tp-brkv>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tabv_c .tp-brkv>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--elm-br);border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tabv_c .tp-brkv .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--elm-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);overflow:hidden;padding-left:var(--cnt-h-p);padding-right:calc(4px + var(--bld-us) + var(--cnt-h-p));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-h-p) + (var(--bld-us) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--elm-br);cursor:pointer;display:block;height:var(--bld-us);position:relative;width:var(--bld-us)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--bld-us)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--bld-s);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--bld-s)}.tp-colpv_rgb{display:flex;margin-top:var(--bld-s);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-v-p);padding-top:calc(var(--cnt-v-p) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--elm-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--bld-us)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--elm-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--elm-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;cursor:pointer;display:block;height:var(--bld-us);left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:var(--bld-us)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--elm-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--elm-br);color:var(--lbl-fg);cursor:pointer;height:var(--bld-us);line-height:var(--bld-us);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv.tp-fldv-not .tp-fldv_b{display:none}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--bld-us)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-h-p);padding-right:var(--cnt-h-p)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding:0 4px}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--bld-us)*3);line-height:var(--bld-us);padding:0 4px;resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--bld-us);margin-right:4px;position:relative;width:var(--bld-us)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--bld-s);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-p2dpv{padding-left:calc(var(--bld-us) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:6px;box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:168px;padding:var(--cnt-v-p) var(--cnt-h-p);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--bld-us);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--elm-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--bld-us) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_c{padding-bottom:var(--cnt-v-p);padding-left:4px;padding-top:var(--cnt-v-p)}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-h-p) + 4px);padding-right:calc(var(--cnt-h-p) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);bottom:2px;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);opacity:.5;overflow:hidden;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-txtv{position:relative}.tp-txtv_i{padding:0 4px}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:-3px;position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--bld-us) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--elm-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--font-family);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--bld-us) + var(--cnt-h-p));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv.tp-rotv-not .tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}'),this.pool_.getAll().forEach(e=>{this.embedPluginStyle_(e)}),this.registerPlugin({plugins:[Yl,ql,pe,Zl]})}}const Ql=new w("3.1.10");a.BladeApi=f,a.ButtonApi=X,a.FolderApi=_t,a.InputBindingApi=rt,a.ListApi=hi,a.MonitorBindingApi=it,a.Pane=Jl,a.SeparatorApi=Cn,a.SliderApi=fi,a.TabApi=cn,a.TabPageApi=qn,a.TextApi=_i,a.TpChangeEvent=R,a.VERSION=Ql,Object.defineProperty(a,"__esModule",{value:!0})})})(lr,lr.exports);var to=lr.exports;const Bc=`// 2DGS preprocess — per-alive-Gauss view-dependent color eval.
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
`,nr=`// 2DGS render — vertex+fragment.
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
`,zc=`// ============================================================================
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
}`,no=32,cr=1,ur=2,Ti=4,Bi=512,Ai=1024,Mi=2048,Ri=4096,Di=8192,Lc=0,Kt=new ArrayBuffer(no),gt={canvas_size:new Uint32Array(Kt,0,2),accel_flags:new Uint32Array(Kt,8,1),feature_mode:new Uint32Array(Kt,12,1),gaussian_scaling:new Float32Array(Kt,16,1),sh_bias:new Float32Array(Kt,20,1),color_K:new Uint32Array(Kt,24,1),walltime:new Float32Array(Kt,28,1)};function Uc(o){gt.canvas_size[0]=o.width>>>0,gt.canvas_size[1]=o.height>>>0,gt.accel_flags[0]=(o.accel_flags??cr|ur)>>>0,gt.feature_mode[0]=(o.feature_mode??Lc)>>>0,gt.gaussian_scaling[0]=o.gaussian_scaling??1,gt.sh_bias[0]=o.sh_bias??.5,gt.color_K[0]=(o.color_K??0)>>>0,gt.walltime[0]=o.walltime??0}function vr(o,r){o.queue.writeBuffer(r,0,Kt)}function Sn(o,r,a){a&&o&&r&&vr(o,r)}function wn(o,r,a,w,f=!0){gt.canvas_size[0]=o>>>0,gt.canvas_size[1]=r>>>0,Sn(a??null,w??null,f)}function zi(o,r,a,w=!0){gt.gaussian_scaling[0]=o,Sn(r??null,a??null,w)}function Li(o,r,a,w=!0){gt.sh_bias[0]=o,Sn(r??null,a??null,w)}function Ic(o,r,a,w=!0){gt.color_K[0]=o>>>0,Sn(r??null,a??null,w)}function Gc(o,r,a,w=!0){gt.feature_mode[0]=o>>>0,Sn(r??null,a??null,w)}function Oc(o){const r=new Float32Array(1),a=new Uint32Array(r.buffer);r[0]=o;const w=a[0],f=w>>>16&32768,b=(w>>>23&255)-127+15;return b<=0?f:b>=31?f|31744:f|b<<10|w>>>13&1023}function Ui(o,r=.3,a,w,f=!0){let b=gt.accel_flags[0]&65535&~Di;o&&(b=b|Di|Oc(r)<<16),gt.accel_flags[0]=b>>>0,Sn(a??null,w??null,f)}function ts(o,r,a,w=!0){let f=gt.accel_flags[0];o.oac!==void 0&&(f=o.oac?f|cr:f&~cr),o.spr!==void 0&&(f=o.spr?f|ur:f&~ur),o.bfc!==void 0&&(f=o.bfc?f|Ti:f&~Ti),o.hypLegacy!==void 0&&(f=o.hypLegacy?f|Bi:f&~Bi),o.centred!==void 0&&(f=o.centred?f|Ri:f&~Ri),o.raysplat!==void 0&&(f=o.raysplat?f|Mi:f&~Mi),o.legacyPos!==void 0&&(f=o.legacyPos?f|Ai:f&~Ai),gt.accel_flags[0]=f>>>0,Sn(r??null,a??null,w)}const Fc=256;function ws(o,r){const a=[],w=[];let f=!0;for(const b of o.split(`
`)){const R=b.trim();let T;if((T=/^\/\/#if\s+(\w+)\s*$/.exec(R))!==null){const C=!!r[T[1]];w.push({parent:f,taken:C}),f=f&&C;continue}if(/^\/\/#else\s*$/.test(R)){const C=w[w.length-1];if(C===void 0)throw new Error("preprocessWGSL: #else without #if");f=C.parent&&!C.taken;continue}if(/^\/\/#endif\s*$/.test(R)){const C=w.pop();if(C===void 0)throw new Error("preprocessWGSL: #endif without #if");f=C.parent;continue}f&&a.push(b)}if(w.length!==0)throw new Error("preprocessWGSL: unterminated #if");return a.join(`
`)}const Vc=no,$c=8,Nc=96,qc=12,br=8,Jt=1<<br,yn=256,Es=32/br,Wc=0,sr=Es&1;function Ii(o,r){return{sort_indices_buffer:r.createBuffer({label:"ping-pong payload (indices)",size:o*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),sort_depths_buffer:r.createBuffer({label:"ping-pong keys (depths)",size:o*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})}}function Kc(o,r){const a=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:7,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),w=o.createPipelineLayout({bindGroupLayouts:[a]}),f=b=>o.createComputePipeline({layout:w,compute:{module:r,entryPoint:b,constants:{WG_SIZE:yn}}});return{l0TileScan:f("prefix_l0_tile_scan"),l1TileScanOnL0:f("prefix_l1_tile_scan_on_l0_sums"),l1ScanSums:f("prefix_scan_l1_sums"),addL1ToL0:f("prefix_add_l1_to_l0_offsets"),addL0ToElems:f("prefix_add_l0_to_elements"),computeDigitBase:f("compute_digit_base"),prefixBindGroupLayout:a}}function jc(o,r,a){const w=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),f=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]}),b=o.createPipelineLayout({bindGroupLayouts:[w]}),R=o.createPipelineLayout({bindGroupLayouts:[f]}),T=[];for(let C=0;C<Es;C++){const M={PASS_ID:C+Wc,RS_RADIX_LOG2:br,RS_RADIX_SIZE:Jt};T.push({localHistogram:o.createComputePipeline({layout:b,compute:{module:r,entryPoint:"local_histogram_pass",constants:M}}),scatterElements:o.createComputePipeline({layout:R,compute:{module:a,entryPoint:"scatter_elements",constants:M}})})}return{passes:T,localHistogramBindGroupLayout:w,scatterBindGroupLayout:f}}function Hc(o){const r=o.createShaderModule({label:"local histogram",code:Dc}),a=o.createShaderModule({label:"scatter",code:Rc}),w=o.createShaderModule({label:"blelloch prefix",code:zc}),f=Kc(o,w),b=jc(o,r,a);return{localHistogramBindGroupLayout:b.localHistogramBindGroupLayout,scatterBindGroupLayout:b.scatterBindGroupLayout,passes:b.passes,hierarchicalBlelloch:f}}function Gi(o){const r=o.createTexture({label:"atlas stub (4x4x1 zero RGBA8)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),a=r.createView({dimension:"2d-array"}),w=o.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge"}),f=o.createBuffer({label:"atlas rects stub (5 zero floats)",size:4*5,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),b=o.createBuffer({label:"tex_params stub (atlas_enabled=0)",size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(b,0,new ArrayBuffer(32));const R={width:0,height:0,channels:0,kernel_type:0,num_rects:0,uv_extent:0,sb_number:0,format:4294967295,sh_bias:0,res_bias:0,compact_mult:0,layer_h:0,atlas_scale:0,atlas_offset:0,n_layers:0,n_cols:1,layer_cuts:new Uint32Array,column_cuts:new Uint32Array([0,0]),slice_width:0,rects_expanded:new Float32Array,atlas_bytes:new Uint8Array};return{texture:r,view:a,sampler:w,rectsBuffer:f,texParamsBuffer:b,meta:R}}const On=class On{constructor(r,a,w,f,b,R=null,T={}){D(this,"device");D(this,"pc");D(this,"presentationFormat");D(this,"camera_buffer");D(this,"render_settings_buffer");D(this,"draw_indirect_buffer");D(this,"splat_2d_buffer");D(this,"querySet");D(this,"resolveBuffer");D(this,"resultBuffer");D(this,"queriesPerFrame",$c);D(this,"queryCapacityFrames",200);D(this,"sort_prefixBindGroup");D(this,"sort_pipelines");D(this,"sort_localHistogramBindGroups");D(this,"sort_scatterBindGroups");D(this,"lastFrame",0);D(this,"frameCount",0);D(this,"preprocessPipeline");D(this,"cullPipeline");D(this,"renderPipeline");D(this,"indirectPipeline");D(this,"renderShaderModule");D(this,"betaKernel",1);D(this,"fetchById");D(this,"octBound");D(this,"acc16");D(this,"accTexture",null);D(this,"accView",null);D(this,"accW",0);D(this,"accH",0);D(this,"legacyRenderPipeline",null);D(this,"varyingsPipeline",null);D(this,"msaa",!1);D(this,"msaaTexture",null);D(this,"msaaView",null);D(this,"msaaW",0);D(this,"msaaH",0);D(this,"msaaPipelines",new Map);D(this,"mkVariant",null);D(this,"legacyRenderer",!1);D(this,"accResolvePipeline",null);D(this,"accResolveBgl",null);D(this,"accResolveBindGroup",null);D(this,"twoPass",!1);D(this,"twoPassThresh",.5);D(this,"twoPassParamsBuffer",null);D(this,"twoPassBgl",null);D(this,"twoPassBg",null);D(this,"twoPassSplatsBgl",null);D(this,"twoPassSplatsBg",null);D(this,"twoPassModules",new Map);D(this,"twoPassPipelines",new Map);D(this,"twoPassDepth",null);D(this,"twoPassDepthView",null);D(this,"twoPassW",0);D(this,"twoPassH",0);D(this,"overdrawMode",0);D(this,"overdrawMax",48);D(this,"ovTexture",null);D(this,"ovView",null);D(this,"ovW",0);D(this,"ovH",0);D(this,"ovParamsBuffer",null);D(this,"ovResolvePipeline",null);D(this,"ovResolveBgl",null);D(this,"ovResolveBg",null);D(this,"ovStatsPipeline",null);D(this,"ovStatsBgl",null);D(this,"ovStatsBg",null);D(this,"ovStatsBuffer",null);D(this,"ovReadback",null);D(this,"ovReadState","idle");D(this,"ovLastStats",null);D(this,"ovPipelines",new Map);D(this,"renderSettingsBgl");D(this,"preprocessBgl2");D(this,"renderSplatsBgl");D(this,"atlasBgl");D(this,"sort_info_buffer");D(this,"sort_ping_pong");D(this,"crsBg");D(this,"gsBg");D(this,"cullBg2");D(this,"preprocessBg1");D(this,"renderSplatsBindGroup");D(this,"renderSettingsBindGroup");D(this,"atlasBindGroup");D(this,"indirectBindGroup");D(this,"sh_solvers_buffer");D(this,"bfcParamsBuffer");D(this,"bfcBindGroupLayout");D(this,"bfcBindGroup");D(this,"staticSortKeys",null);D(this,"wideFrustum",!1);D(this,"staticKeysBuffer",null);D(this,"bgColor",[0,0,0,0]);D(this,"showPerfDialogNext",!1);D(this,"requestReorderNextFrame",!1);D(this,"reorderInFlight",!1);D(this,"downloadOnceNextRead",!1);D(this,"downloadOnceFileName","fps_metrics");D(this,"allFrameTimes",[]);D(this,"lastStageBreakdownMs",null);D(this,"timeQueryEnabled");D(this,"atlas");D(this,"atlasParamsBuffer");D(this,"_atlasEnabled",!0);D(this,"mipLodBias",1);D(this,"_mipMode",1);this.fetchById=T.fetchById??!0,this.staticSortKeys=T.staticSortKeys??null,this.wideFrustum=T.wideFrustum??!1,this.octBound=T.octBound??!1,this.acc16=T.acc16??!1,wt(`[render_2dgs] variants: fetch_by_id=${this.fetchById} oct_bound=${this.octBound} acc16=${this.acc16}`);const C=b.includes("timestamp-query");this.timeQueryEnabled=C,C&&wt("⏰ using timestamp-query"),this.pc=r,this.device=a,this.presentationFormat=w,this.camera_buffer=f,this.atlas=R??Gi(a),this.atlasParamsBuffer=a.createBuffer({label:"atlas_params UBO",size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.writeAtlasParams(),a.addEventListener("uncapturederror",Se=>{console.error("A WebGPU error was not captured:",Se.error)}),this._setupTimestampQueries(),this._setupBuffers();const M=(Math.floor((this.pc.num_points+yn-1)/yn)+1)*yn,N=Math.ceil(M/yn);console.log(`keys count adjusted: ${M}`),console.log(`key size: ${this.pc.num_points}`);const G=a.createBuffer({label:"sort info",size:16*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT});this.sort_pipelines=Hc(a);const I=[Ii(M,a),Ii(M,a)],j=a.createBuffer({label:"workgroup histograms",size:N*Jt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),ce=a.createBuffer({label:"workgroup prefixes",size:N*Jt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),z=a.createBuffer({label:"digit base",size:Jt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),O=Math.ceil(N/yn),X=Math.ceil(O/yn),F=a.createBuffer({label:"prefix l0 sums",size:O*Jt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),se=a.createBuffer({label:"prefix l0 offsets",size:O*Jt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),q=a.createBuffer({label:"prefix l1 sums",size:X*Jt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),de=a.createBuffer({label:"prefix l1 offsets",size:X*Jt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});this.sort_prefixBindGroup=a.createBindGroup({label:"prefix 2L bind group",layout:this.sort_pipelines.hierarchicalBlelloch.prefixBindGroupLayout,entries:[{binding:0,resource:{buffer:G}},{binding:1,resource:{buffer:j}},{binding:2,resource:{buffer:ce}},{binding:3,resource:{buffer:F}},{binding:4,resource:{buffer:se}},{binding:5,resource:{buffer:q}},{binding:6,resource:{buffer:de}},{binding:7,resource:{buffer:z}}]}),this.sort_localHistogramBindGroups=[a.createBindGroup({label:"localHistogram src=0",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:G}},{binding:1,resource:{buffer:I[0].sort_depths_buffer}},{binding:2,resource:{buffer:j}}]}),a.createBindGroup({label:"localHistogram src=1",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:G}},{binding:1,resource:{buffer:I[1].sort_depths_buffer}},{binding:2,resource:{buffer:j}}]})],this.sort_scatterBindGroups=[a.createBindGroup({label:"scatter 0->1",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:G}},{binding:1,resource:{buffer:z}},{binding:2,resource:{buffer:I[0].sort_depths_buffer}},{binding:3,resource:{buffer:I[1].sort_depths_buffer}},{binding:4,resource:{buffer:I[0].sort_indices_buffer}},{binding:5,resource:{buffer:I[1].sort_indices_buffer}},{binding:6,resource:{buffer:ce}}]}),a.createBindGroup({label:"scatter 1->0",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:G}},{binding:1,resource:{buffer:z}},{binding:2,resource:{buffer:I[1].sort_depths_buffer}},{binding:3,resource:{buffer:I[0].sort_depths_buffer}},{binding:4,resource:{buffer:I[1].sort_indices_buffer}},{binding:5,resource:{buffer:I[0].sort_indices_buffer}},{binding:6,resource:{buffer:ce}}]})],this.sort_info_buffer=G,this.sort_ping_pong=I;const _e=this.device.createBindGroupLayout({label:"camera + renderSettings",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),fe=this.device.createBindGroupLayout({label:"gaussians + splats",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),ie=this.device.createBindGroupLayout({label:"cullBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),ue=this.device.createBindGroupLayout({label:"preprocessBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]});this.crsBg=this.device.createBindGroup({label:"camera + renderSettings",layout:_e,entries:[{binding:0,resource:{buffer:this.camera_buffer}},{binding:1,resource:{buffer:this.render_settings_buffer}}]}),this.gsBg=this.device.createBindGroup({label:"surfels + splats",layout:fe,entries:[{binding:0,resource:{buffer:this.pc.surfel_buffer}},{binding:1,resource:{buffer:this.splat_2d_buffer}}]}),this.cullBg2=this.device.createBindGroup({label:"cullBg2",layout:ie,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[0].sort_depths_buffer}},{binding:2,resource:{buffer:this.sort_ping_pong[0].sort_indices_buffer}},{binding:3,resource:{buffer:this.sh_solvers_buffer}}]}),this.preprocessBgl2=ue,this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:ue,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}},{binding:4,resource:{buffer:this.atlas.rectsBuffer}},{binding:5,resource:{buffer:this.atlasParamsBuffer}},{binding:6,resource:{buffer:this.pc.surfel_buffer}}]});const Te=this.device.createShaderModule({code:Ac});this.indirectPipeline=this.device.createComputePipeline({label:"indirect dispatch calc",layout:"auto",compute:{module:Te,entryPoint:"write_dispatch_triples",constants:{RS_RADIX_SIZE:256}}}),this.indirectBindGroup=this.device.createBindGroup({label:"indirect dispatch bind group",layout:this.indirectPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.draw_indirect_buffer}}]}),this.bfcParamsBuffer=this.device.createBuffer({label:"bfc params (uniform, 16 B)",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([2,0,0,0]));const le=[{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}],te=[{binding:1,resource:{buffer:this.bfcParamsBuffer}}];if(this.staticSortKeys){if(this.staticSortKeys.length!==this.pc.num_points)throw new Error(`staticSortKeys has ${this.staticSortKeys.length} entries, expected ${this.pc.num_points}`);this.staticKeysBuffer=this.device.createBuffer({label:"static sort keys",size:Fn(this.staticSortKeys.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.staticKeysBuffer,0,this.staticSortKeys),le.push({binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}),te.push({binding:2,resource:{buffer:this.staticKeysBuffer}})}this.bfcBindGroupLayout=this.device.createBindGroupLayout({label:"bfc params (cull group 3)",entries:le}),this.bfcBindGroup=this.device.createBindGroup({label:"bfc params bind",layout:this.bfcBindGroupLayout,entries:te});const we=this.device.createShaderModule({code:ws(Mc,{STATIC_KEYS:this.staticSortKeys!==null,WIDE_FRUSTUM:this.wideFrustum})});this.cullPipeline=this.device.createComputePipeline({label:"surfel_cull",layout:this.device.createPipelineLayout({bindGroupLayouts:[_e,fe,ie,this.bfcBindGroupLayout]}),compute:{module:we,entryPoint:"surfel_cull"}});const Le=this.device.createShaderModule({code:Bc});this.preprocessPipeline=this.device.createComputePipeline({label:"preprocess_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[_e,ue]}),compute:{module:Le,entryPoint:"preprocess"}});const ke=this.device.createShaderModule({label:"render_2dgs",code:ws(nr,{FETCH_BY_ID:this.fetchById,OCT:this.octBound})});ke.getCompilationInfo().then(Se=>{Se.messages.length>0?(console.group("[render_2dgs.wgsl] compilation messages"),Se.messages.forEach(Re=>{(Re.type==="error"?console.error:Re.type==="warning"?console.warn:console.log)(`${Re.type} (line ${Re.lineNum}:${Re.linePos}): ${Re.message}`)}),console.groupEnd()):console.log("[render_2dgs.wgsl] compiled clean")});const Z=this.device.createBindGroupLayout({label:"render_settings (vertex+fragment)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),J=this.fetchById?GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT:GPUShaderStage.VERTEX,H=this.device.createBindGroupLayout({label:"splats_2d + indices (vertex)",entries:[{binding:0,visibility:J,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),ee=this.device.createBindGroupLayout({label:"atlas (fragment)",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array",multisampled:!1}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]}),be=this.atlas.meta.format!==4294967295&&this.atlas.meta.kernel_type===0?0:1;this.device.pushErrorScope("validation"),this.renderPipeline=this.device.createRenderPipeline({label:"render_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[Z,H,ee]}),vertex:{module:ke,entryPoint:"vs_main"},fragment:{module:ke,entryPoint:"fs_main",constants:{BETA_KERNEL:be},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}});const De=(Se,Re,re,ve=1)=>{const Pe=this.device.createShaderModule({label:`render_2dgs (${Se})`,code:ws(nr,{FETCH_BY_ID:Re,OCT:re})});return this.device.createRenderPipeline({label:`render_2dgs_${Se}`,multisample:{count:ve},layout:this.device.createPipelineLayout({bindGroupLayouts:[Z,H,ee]}),vertex:{module:Pe,entryPoint:"vs_main"},fragment:{module:Pe,entryPoint:"fs_main",constants:{BETA_KERNEL:be},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}})};this.varyingsPipeline=De("varyings",!1,this.octBound),this.legacyRenderPipeline=this.octBound?De("legacy",!1,!1):this.varyingsPipeline,this.mkVariant=De,this.device.popErrorScope().then(Se=>{Se?console.error("[render_2dgs] pipeline create validation error:",Se.message):console.log("[render_2dgs] pipeline created OK")}),this.renderSettingsBindGroup=this.device.createBindGroup({label:"render_settings (vertex)",layout:Z,entries:[{binding:0,resource:{buffer:this.render_settings_buffer}}]}),this.renderSplatsBindGroup=this.device.createBindGroup({label:"splats_2d + indices (vertex)",layout:H,entries:[{binding:0,resource:{buffer:this.splat_2d_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[sr].sort_indices_buffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:ee,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:this.atlas.sampler},{binding:2,resource:{buffer:this.atlas.texParamsBuffer}},{binding:3,resource:{buffer:this.atlas.rectsBuffer}}]}),this.renderShaderModule=ke,this.betaKernel=be,this.renderSettingsBgl=Z,this.renderSplatsBgl=H,this.atlasBgl=ee}get totalQueryCount(){return this.queriesPerFrame*this.queryCapacityFrames}setBfcParams(r,a){this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([r,a[0],a[1],a[2]]))}get texParamsBuffer(){return this.atlas.texParamsBuffer}get hasAtlas(){return this.atlas.meta.format!==4294967295}writeAtlasParams(){var f;const r=new ArrayBuffer(32),a=new Uint32Array(r),w=new Float32Array(r);a[0]=(this.atlas.meta.slice_width||this.atlas.meta.width)|0,a[1]=this.atlas.meta.layer_h|0,w[2]=this.atlas.meta.uv_extent||0,a[3]=this.atlas.meta.probe_mode|0||0,a[4]=this._mipMode!==0?Math.max(1,((f=this.atlas.meta.mip_bytes)==null?void 0:f.length)??1):1,w[5]=this.mipLodBias,this.device.queue.writeBuffer(this.atlasParamsBuffer,0,r)}setMsaa(r){r!==this.msaa&&(this.msaa=r,wt(`[render_2dgs] MSAA 4x: ${r?"ON":"OFF"}`))}get isMsaa(){return this.msaa}msaaPipelineFor(r,a){const w=`${r?"byid":"var"}_${a?"oct":"quad"}`;let f=this.msaaPipelines.get(w);return f||(f=this.mkVariant(`msaa4_${w}`,r,a,4),this.msaaPipelines.set(w,f)),f}ensureMsaaResources(r,a){var w;this.msaaTexture!==null&&this.msaaW===r&&this.msaaH===a||((w=this.msaaTexture)==null||w.destroy(),this.msaaTexture=this.device.createTexture({label:"msaa4 colour",size:{width:r,height:a},sampleCount:4,format:this.presentationFormat,usage:GPUTextureUsage.RENDER_ATTACHMENT}),this.msaaView=this.msaaTexture.createView(),this.msaaW=r,this.msaaH=a)}setTwoPass(r){r!==this.twoPass&&(this.twoPass=r,wt(`[render_2dgs] two-pass layer path: ${r?"ON":"OFF"} (thresh ${this.twoPassThresh.toFixed(2)})`))}get isTwoPass(){return this.twoPass}setOpaqueThresh(r){this.twoPassThresh=Math.min(.999,Math.max(.001,r)),this.writeTwoPassParams()}get opaqueThresh(){return this.twoPassThresh}writeTwoPassParams(){this.twoPassParamsBuffer!==null&&this.device.queue.writeBuffer(this.twoPassParamsBuffer,0,new Float32Array([this.twoPassThresh,0,0,0]))}ensureSplatsVF(){this.twoPassSplatsBg===null&&(this.twoPassSplatsBgl=this.device.createBindGroupLayout({label:"splats_2d + indices (vertex+fragment)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),this.twoPassSplatsBg=this.device.createBindGroup({label:"splats_2d + indices (vertex+fragment)",layout:this.twoPassSplatsBgl,entries:[{binding:0,resource:{buffer:this.splat_2d_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[sr].sort_indices_buffer}}]}))}ensureTwoPassResources(r,a){var w;this.ensureSplatsVF(),this.twoPassParamsBuffer===null&&(this.twoPassParamsBuffer=this.device.createBuffer({label:"twopass params",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.writeTwoPassParams(),this.twoPassBgl=this.device.createBindGroupLayout({label:"twopass (camera + params)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),this.twoPassBg=this.device.createBindGroup({label:"twopass (camera + params)",layout:this.twoPassBgl,entries:[{binding:0,resource:{buffer:this.camera_buffer}},{binding:1,resource:{buffer:this.twoPassParamsBuffer}}]})),!(this.twoPassDepth!==null&&this.twoPassW===r&&this.twoPassH===a)&&((w=this.twoPassDepth)==null||w.destroy(),this.twoPassDepth=this.device.createTexture({label:"twopass layer depth",size:{width:Math.max(1,r),height:Math.max(1,a),depthOrArrayLayers:1},format:"depth32float",usage:GPUTextureUsage.RENDER_ATTACHMENT}),this.twoPassDepthView=this.twoPassDepth.createView(),this.twoPassW=r,this.twoPassH=a)}renderModuleFor(r,a,w){const f=`${r?"byid":"vary"}_${a?"oct":"quad"}_${w?"hwz":"z0"}`,b=this.twoPassModules.get(f);if(b!==void 0)return b;const R=this.device.createShaderModule({label:`render_2dgs (${f})`,code:ws(nr,{FETCH_BY_ID:r,OCT:a,HW_DEPTH:w})});return R.getCompilationInfo().then(T=>{for(const C of T.messages)C.type==="error"&&console.error(`[render_2dgs ${f}] (line ${C.lineNum}:${C.linePos}): ${C.message}`)}),this.twoPassModules.set(f,R),R}twoPassPipelinesFor(r,a){const w=`${r?"byid":"vary"}_${a?"oct":"quad"}`,f=this.twoPassPipelines.get(w);if(f!==void 0)return f;const b=this.renderModuleFor(r,a,!0),R=this.device.createPipelineLayout({bindGroupLayouts:[this.renderSettingsBgl,this.twoPassSplatsBgl,this.atlasBgl,this.twoPassBgl]});this.device.pushErrorScope("validation");const T=this.device.createRenderPipeline({label:`render_2dgs_opaque_${w}`,layout:R,vertex:{module:b,entryPoint:"vs_main"},fragment:{module:b,entryPoint:"fs_opaque",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:this.presentationFormat}]},depthStencil:{format:"depth32float",depthWriteEnabled:!0,depthCompare:"less"},primitive:{topology:"triangle-strip",cullMode:"none"}}),C=this.device.createRenderPipeline({label:`render_2dgs_front_${w}`,layout:R,vertex:{module:b,entryPoint:"vs_main"},fragment:{module:b,entryPoint:"fs_front",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:this.presentationFormat,blend:On.BLEND_OVER}]},depthStencil:{format:"depth32float",depthWriteEnabled:!1,depthCompare:"less"},primitive:{topology:"triangle-strip",cullMode:"none"}});this.device.popErrorScope().then(N=>{N?console.error(`[render_2dgs twopass ${w}] pipeline validation error:`,N.message):console.log(`[render_2dgs twopass ${w}] pipelines created OK`)});const M={opaque:T,front:C};return this.twoPassPipelines.set(w,M),M}setOverdrawMode(r){r!==this.overdrawMode&&(this.overdrawMode=r,this.ovLastStats=null,wt(`[render_2dgs] overdraw view: ${["off","shaded fragments","rasterised fragments"][r]}`))}get overdrawModeValue(){return this.overdrawMode}setOverdrawMax(r){this.overdrawMax=Math.max(1,r),this.ovParamsBuffer&&this.device.queue.writeBuffer(this.ovParamsBuffer,0,new Float32Array([this.overdrawMax,0,0,0]))}ensureOverdrawResources(r,a){var w;if(this.ensureSplatsVF(),this.ovResolvePipeline===null){this.ovParamsBuffer=this.device.createBuffer({label:"overdraw params",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.ovParamsBuffer,0,new Float32Array([this.overdrawMax,0,0,0]));const f=`
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
}`,b=this.device.createShaderModule({label:"overdraw_resolve",code:f});this.ovResolveBgl=this.device.createBindGroupLayout({label:"overdraw resolve",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),this.ovResolvePipeline=this.device.createRenderPipeline({label:"overdraw_resolve",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.ovResolveBgl]}),vertex:{module:b,entryPoint:"vs_main"},fragment:{module:b,entryPoint:"fs_main",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list"}});const R=`
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
}`,T=this.device.createShaderModule({label:"overdraw_stats",code:R});this.ovStatsBgl=this.device.createBindGroupLayout({label:"overdraw stats",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:"unfilterable-float"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),this.ovStatsPipeline=this.device.createComputePipeline({label:"overdraw_stats",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.ovStatsBgl]}),compute:{module:T,entryPoint:"main"}}),this.ovStatsBuffer=this.device.createBuffer({label:"overdraw stats",size:16,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.ovReadback=this.device.createBuffer({label:"overdraw stats readback",size:16,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}this.ovTexture!==null&&this.ovW===r&&this.ovH===a||((w=this.ovTexture)==null||w.destroy(),this.ovTexture=this.device.createTexture({label:"overdraw counts",size:{width:Math.max(1,r),height:Math.max(1,a),depthOrArrayLayers:1},format:"r16float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.ovView=this.ovTexture.createView(),this.ovResolveBg=this.device.createBindGroup({label:"overdraw resolve",layout:this.ovResolveBgl,entries:[{binding:0,resource:this.ovView},{binding:1,resource:{buffer:this.ovParamsBuffer}}]}),this.ovStatsBg=this.device.createBindGroup({label:"overdraw stats",layout:this.ovStatsBgl,entries:[{binding:0,resource:this.ovView},{binding:1,resource:{buffer:this.ovStatsBuffer}}]}),this.ovW=r,this.ovH=a)}ovPipelineFor(r,a,w){const f=`${r}_${a?"byid":"vary"}_${w?"oct":"quad"}`,b=this.ovPipelines.get(f);if(b!==void 0)return b;const R=r.startsWith("tp_"),T=this.renderModuleFor(a,w,R),C=this.device.createPipelineLayout({bindGroupLayouts:R?[this.renderSettingsBgl,this.twoPassSplatsBgl,this.atlasBgl,this.twoPassBgl]:[this.renderSettingsBgl,this.twoPassSplatsBgl,this.atlasBgl]}),M={single_raster:"fs_count_raster",single_shaded:"fs_count_shaded",tp_raster:"fs_count_raster",tp_opaque:"fs_count_opaque",tp_front:"fs_count_front"}[r];let N;r==="tp_raster"?N={format:"depth32float",depthWriteEnabled:!1,depthCompare:"always"}:r==="tp_opaque"?N={format:"depth32float",depthWriteEnabled:!0,depthCompare:"less"}:r==="tp_front"&&(N={format:"depth32float",depthWriteEnabled:!1,depthCompare:"less"}),this.device.pushErrorScope("validation");const G=this.device.createRenderPipeline({label:`render_2dgs_${f}`,layout:C,vertex:{module:T,entryPoint:"vs_main"},fragment:{module:T,entryPoint:M,constants:{BETA_KERNEL:this.betaKernel},targets:[{format:"r16float",blend:On.BLEND_ADD}]},depthStencil:N,primitive:{topology:"triangle-strip",cullMode:"none"}});return this.device.popErrorScope().then(I=>{I&&console.error(`[render_2dgs overdraw ${f}] pipeline validation error:`,I.message)}),this.ovPipelines.set(f,G),G}async readOverdrawStats(){if(this.ovReadState!=="copied"||this.ovReadback===null)return this.ovLastStats;this.ovReadState="mapping";try{await this.ovReadback.mapAsync(GPUMapMode.READ);const r=new Uint32Array(this.ovReadback.getMappedRange().slice(0));this.ovReadback.unmap();const a=Math.max(1,this.ovW*this.ovH);this.ovLastStats={mean:r[0]/a,meanCovered:r[2]>0?r[0]/r[2]:0,max:r[1],coveredFrac:r[2]/a}}finally{this.ovReadState="idle"}return this.ovLastStats}ensureAccResources(r,a){var w;if(this.accResolvePipeline===null){const f=`
@group(0) @binding(0) var src : texture_2d<f32>;
@vertex fn vs_main(@builtin(vertex_index) vid : u32) -> @builtin(position) vec4<f32> {
    const pos = array(vec2<f32>(-1.0, -1.0), vec2<f32>(3.0, -1.0), vec2<f32>(-1.0, 3.0));
    return vec4<f32>(pos[vid], 0.0, 1.0);
}
@fragment fn fs_main(@builtin(position) p : vec4<f32>) -> @location(0) vec4<f32> {
    let dims = vec2<i32>(textureDimensions(src));
    let q = clamp(vec2<i32>(floor(p.xy)), vec2<i32>(0), dims - vec2<i32>(1));
    return textureLoad(src, q, 0);
}`,b=this.device.createShaderModule({label:"acc16_resolve",code:f});this.accResolveBgl=this.device.createBindGroupLayout({label:"acc16_resolve src",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}}]}),this.accResolvePipeline=this.device.createRenderPipeline({label:"acc16_resolve",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.accResolveBgl]}),vertex:{module:b,entryPoint:"vs_main"},fragment:{module:b,entryPoint:"fs_main",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list"}})}this.accTexture!==null&&this.accW===r&&this.accH===a||((w=this.accTexture)==null||w.destroy(),this.accTexture=this.device.createTexture({label:"acc16 target",size:{width:Math.max(1,r),height:Math.max(1,a),depthOrArrayLayers:1},format:"rgba16float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.accView=this.accTexture.createView(),this.accResolveBindGroup=this.device.createBindGroup({label:"acc16_resolve bind",layout:this.accResolveBgl,entries:[{binding:0,resource:this.accView}]}),this.accW=r,this.accH=a)}setAtlas(r){this.atlas=r??Gi(this.device),this.writeAtlasParams(),this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:this.preprocessBgl2,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}},{binding:4,resource:{buffer:this.atlas.rectsBuffer}},{binding:5,resource:{buffer:this.atlasParamsBuffer}},{binding:6,resource:{buffer:this.pc.surfel_buffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:this.atlasBgl,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:this.atlas.sampler},{binding:2,resource:{buffer:this.atlas.texParamsBuffer}},{binding:3,resource:{buffer:this.atlas.rectsBuffer}}]}),this.atlas.meta.format!==4294967295&&xs(this.device,this.atlas.texParamsBuffer,this.atlas.meta,this._atlasEnabled,this._mipMode)}setAtlasEnabled(r){this.atlas.meta.format!==4294967295&&(this._atlasEnabled=r,xs(this.device,this.atlas.texParamsBuffer,this.atlas.meta,r,this._mipMode))}setMipLodBias(r){this.mipLodBias=r,this.writeAtlasParams()}setFetchById(r){r!==this.fetchById&&(this.fetchById=r,wt(`[render_2dgs] fragment inputs: ${r?"fetch-by-id (storage re-read)":"13 flat varyings"}`))}get isFetchById(){return this.fetchById}setLegacyRenderer(r){if(r===this.legacyRenderer)return;this.legacyRenderer=r,ts({legacyPos:r,hypLegacy:r},this.device,this.render_settings_buffer);const a=!r&&this.octBound?8:4;this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([a])),wt(`[render_2dgs] renderer: ${r?"LEGACY (varyings, quad, f16 centres)":"current"}`)}get isLegacyRenderer(){return this.legacyRenderer}setMipMode(r){this.atlas.meta.format!==4294967295&&(this._mipMode=r?1:0,this.writeAtlasParams(),xs(this.device,this.atlas.texParamsBuffer,this.atlas.meta,this._atlasEnabled,this._mipMode))}get hasMips(){var r;return(((r=this.atlas.meta.mip_bytes)==null?void 0:r.length)??1)>1}async debugReadSortedIndices(r=30){const a=Math.max(0,Math.min(r,this.pc.num_points)),w=a*Uint32Array.BYTES_PER_ELEMENT;if(w===0){console.log("[DEBUG] No indices to read.");return}const f=this.device.createBuffer({size:w,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),b=this.device.createCommandEncoder();b.copyBufferToBuffer(this.sort_ping_pong[sr].sort_indices_buffer,0,f,0,w),this.device.queue.submit([b.finish()]),await f.mapAsync(GPUMapMode.READ);const R=new Uint32Array(f.getMappedRange());console.log("[DEBUG] Sorted indices (first",a,"):",Array.from(R)),f.unmap()}frame(r,a,w=!0){const b=(this.lastFrame+this.frameCount)%this.queryCapacityFrames*this.queriesPerFrame,R=w&&this.timeQueryEnabled;{r.clearBuffer(this.sort_info_buffer,0,4);const T={label:"cull"};R&&(T.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:b+0,endOfPassWriteIndex:b+1});const C=r.beginComputePass(T);C.setPipeline(this.cullPipeline),C.setBindGroup(0,this.crsBg),C.setBindGroup(1,this.gsBg),C.setBindGroup(2,this.cullBg2),C.setBindGroup(3,this.bfcBindGroup);const M=Math.ceil(this.pc.num_points/Fc);C.dispatchWorkgroups(M,1,1),C.end()}{const T=r.beginComputePass({label:"calculate indirect dispatch"});T.setPipeline(this.indirectPipeline),T.setBindGroup(0,this.indirectBindGroup),T.dispatchWorkgroups(1,1,1),T.end()}{const T={label:"preprocess"};R&&(T.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:b+2,endOfPassWriteIndex:b+3});const C=r.beginComputePass(T);C.setPipeline(this.preprocessPipeline),C.setBindGroup(0,this.crsBg),C.setBindGroup(1,this.preprocessBg1),C.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),C.end()}for(let T=0;T<Es;T++){const C=T&1,M=this.sort_pipelines.passes[T],N=this.sort_localHistogramBindGroups[C],G=this.sort_scatterBindGroups[C];{const I={label:`upsweep_round${T}`};R&&T==0&&(I.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:b+4});const j=r.beginComputePass(I);j.setPipeline(M.localHistogram),j.setBindGroup(0,N),j.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),j.end()}{const I=r.beginComputePass({label:`prefix_round${T} - l0TileScan`});I.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l0TileScan),I.setBindGroup(0,this.sort_prefixBindGroup),I.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),I.end()}{const I=r.beginComputePass({label:`prefix_round${T} - l1TileScanOnL0`});I.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1TileScanOnL0),I.setBindGroup(0,this.sort_prefixBindGroup),I.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),I.end()}{const I=r.beginComputePass({label:`prefix_round${T} - l1ScanSums`});I.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1ScanSums),I.setBindGroup(0,this.sort_prefixBindGroup),I.dispatchWorkgroups(1,Jt,1),I.end()}{const I=r.beginComputePass({label:`prefix_round${T} - addL1ToL0`});I.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL1ToL0),I.setBindGroup(0,this.sort_prefixBindGroup),I.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),I.end()}{const I=r.beginComputePass({label:`prefix_round${T} - addL0ToElems`});I.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL0ToElems),I.setBindGroup(0,this.sort_prefixBindGroup),I.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),I.end()}{const I=r.beginComputePass({label:`prefix_round${T} - computeDigitBase`});I.setPipeline(this.sort_pipelines.hierarchicalBlelloch.computeDigitBase),I.setBindGroup(0,this.sort_prefixBindGroup),I.dispatchWorkgroups(1,1,1),I.end()}{const I={label:`scatter_round${T}`};R&&T==Es-1&&(I.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:b+5});const j=r.beginComputePass(I);j.setPipeline(M.scatterElements),j.setBindGroup(0,G),j.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),j.end()}}{const T=gt.canvas_size[0],C=gt.canvas_size[1],M=this.overdrawMode!==0;let N=a;M?(this.ensureOverdrawResources(T,C),N=this.ovView):this.acc16&&(this.ensureAccResources(T,C),N=this.accView);const G=M?{r:0,g:0,b:0,a:0}:this.bgColor,I=M||this.acc16,j=this.fetchById&&!this.legacyRenderer,ce=this.octBound&&!this.legacyRenderer;if(this.twoPass){this.ensureTwoPassResources(T,C);let z,O;if(M)this.overdrawMode===1?(z=this.ovPipelineFor("tp_opaque",j,ce),O=this.ovPipelineFor("tp_front",j,ce)):z=O=this.ovPipelineFor("tp_raster",j,ce);else{const de=this.twoPassPipelinesFor(j,ce);z=de.opaque,O=de.front}const X={label:"render_opaque_layer",colorAttachments:[{view:N,loadOp:"clear",storeOp:"store",clearValue:G}],depthStencilAttachment:{view:this.twoPassDepthView,depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}};R&&(X.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:b+6});const F=r.beginRenderPass(X);F.setPipeline(z),F.setBindGroup(0,this.renderSettingsBindGroup),F.setBindGroup(1,this.twoPassSplatsBg),F.setBindGroup(2,this.atlasBindGroup),F.setBindGroup(3,this.twoPassBg),F.drawIndirect(this.draw_indirect_buffer,0),F.end();const se={label:"render_front",colorAttachments:[{view:N,loadOp:"load",storeOp:"store"}],depthStencilAttachment:{view:this.twoPassDepthView,depthReadOnly:!0}};R&&!I&&(se.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:b+7});const q=r.beginRenderPass(se);q.setPipeline(O),q.setBindGroup(0,this.renderSettingsBindGroup),q.setBindGroup(1,this.twoPassSplatsBg),q.setBindGroup(2,this.atlasBindGroup),q.setBindGroup(3,this.twoPassBg),q.drawIndirect(this.draw_indirect_buffer,0),q.end()}else{const z=this.msaa&&!M&&!this.acc16;z&&this.ensureMsaaResources(T,C);const O={label:"render",colorAttachments:[z?{view:this.msaaView,resolveTarget:N,loadOp:"clear",storeOp:"discard",clearValue:G}:{view:N,loadOp:"clear",storeOp:"store",clearValue:G}]};R&&(O.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:b+6,...I?{}:{endOfPassWriteIndex:b+7}});const X=r.beginRenderPass(O);M?(X.setPipeline(this.ovPipelineFor(this.overdrawMode===1?"single_shaded":"single_raster",j,ce)),X.setBindGroup(1,this.twoPassSplatsBg)):(X.setPipeline(z?this.msaaPipelineFor(j,ce):this.legacyRenderer?this.legacyRenderPipeline:this.fetchById?this.renderPipeline:this.varyingsPipeline),X.setBindGroup(1,this.renderSplatsBindGroup)),X.setBindGroup(0,this.renderSettingsBindGroup),X.setBindGroup(2,this.atlasBindGroup),X.drawIndirect(this.draw_indirect_buffer,0),X.end()}if(M){r.clearBuffer(this.ovStatsBuffer,0,16);const z=r.beginComputePass({label:"overdraw_stats"});z.setPipeline(this.ovStatsPipeline),z.setBindGroup(0,this.ovStatsBg),z.dispatchWorkgroups(Math.ceil(T/16),Math.ceil(C/16),1),z.end();const O={label:"overdraw_resolve",colorAttachments:[{view:a,loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:1}}]};R&&(O.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:b+7});const X=r.beginRenderPass(O);X.setPipeline(this.ovResolvePipeline),X.setBindGroup(0,this.ovResolveBg),X.draw(3),X.end(),this.ovReadState==="idle"&&(r.copyBufferToBuffer(this.ovStatsBuffer,0,this.ovReadback,0,16),this.ovReadState="copied")}else if(this.acc16){const z={label:"acc16_resolve",colorAttachments:[{view:a,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};R&&(z.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:b+7});const O=r.beginRenderPass(z);O.setPipeline(this.accResolvePipeline),O.setBindGroup(0,this.accResolveBindGroup),O.draw(3),O.end()}}this.frameCount++}async readPerfMetrics(r){const a=(r==null?void 0:r.silent)??!1;if(this.frameCount<=0)return;const w=this.device.createCommandEncoder({label:"timestamp resolve encoder"});w.resolveQuerySet(this.querySet,0,this.totalQueryCount,this.resolveBuffer,0),w.copyBufferToBuffer(this.resolveBuffer,0,this.resultBuffer,0,this.totalQueryCount*8),this.device.queue.submit([w.finish()]),await this.device.queue.onSubmittedWorkDone();const f=[["Total",7,0],["Culling",1,0],["Preprocess",3,2],["Sort",5,4],["Render",7,6]];await this.resultBuffer.mapAsync(GPUMapMode.READ);const b=new BigInt64Array(this.resultBuffer.getMappedRange()),R=Math.min(this.frameCount,this.queryCapacityFrames),T=(this.lastFrame+this.frameCount-R)%this.queryCapacityFrames,C=Array.from({length:f.length},()=>[]);let M=0;for(let X=0;X<R;X++){const F=(T+X)%this.queryCapacityFrames,se=F*this.queriesPerFrame;let q=!0;for(let de=0;de<f.length;de++){const[_e,fe,ie]=f[de];if(b[se+ie]===0n||b[se+fe]===0n||b[se+fe]<b[se+ie]){q=!1;break}}if(!q){!a&&F%60===0&&console.debug("[timestamp] frame slot",F,"contains unwritten (0) timestamps, skipped in stats");continue}M++;for(let de=0;de<f.length;de++){const[_e,fe,ie]=f[de],ue=Number(b[se+ie]),Te=Number(b[se+fe]);C[de].push((Te-ue)/1e6)}}if(M===0){this.resultBuffer.unmap(),a||console.warn("[timestamp] No complete frames available (some timestamps are 0). It may be the first frame or the GPU is still filling.");return}this.allFrameTimes.push(...C[0]);const N=[];let G=0,I=0,j=0;for(let X=0;X<f.length;X++){const F=f[X][0],se=C[X];let q=0;if(F==="Total"){const de=this.allFrameTimes;q=de.reduce((ie,ue)=>ie+ue,0)/de.length;const _e=[...de].sort((ie,ue)=>ie-ue);G=_e[Math.floor(_e.length*.99)]||0;const fe=de.reduce((ie,ue)=>ie+Math.pow(ue-q,2),0)/de.length;I=Math.sqrt(fe),j=q}else q=se.reduce((de,_e)=>de+_e,0)/se.length;N.push([F,q])}this.lastFrame+=this.frameCount,this.frameCount=0;const ce=Object.fromEntries(N);this.lastStageBreakdownMs={cull:ce.Culling??0,preprocess:ce.Preprocess??0,sort:ce.Sort??0,render:ce.Render??0,total:ce.Total??0};const O=`[TIMESTAMP - ${this.constructor.name}]
`+N.map(([X,F])=>`${X}: ${F.toFixed(3)}ms`).join(`
`)+`
Total P99: ${G.toFixed(3)}ms
Total STD: ${I.toFixed(3)}ms
Total AVG: ${j.toFixed(3)}ms
Stats computed over ${this.allFrameTimes.length} frames (cumulative)
${this.lastFrame} frames rendered since start`;if(a||(console.log(O),console.log("All Frame Times (Total, ms):",JSON.stringify(this.allFrameTimes))),this.downloadOnceNextRead){this.downloadOnceNextRead=!1;const X=`Stage,ms
`,F=N.map(([de,_e])=>`${de},${_e.toFixed(3)}`).join(`
`),se="data:text/csv;charset=utf-8,"+encodeURIComponent(X+F),q=document.createElement("a");q.href=se,q.download=`${this.downloadOnceFileName}.csv`,document.body.appendChild(q),q.click(),q.remove()}if(this.showPerfDialogNext){this.showPerfDialogNext=!1;try{alert(O)}catch{console.warn("Unable to show dialog; metrics printed to console.")}}this.resultBuffer.unmap()}_setupTimestampQueries(){this.querySet=this.device.createQuerySet({type:"timestamp",count:this.totalQueryCount});const r=this.totalQueryCount*8;this.resolveBuffer=this.device.createBuffer({size:r,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),this.resultBuffer=this.device.createBuffer({size:r,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}_setupBuffers(){this.render_settings_buffer=this.device.createBuffer({label:"render settings",size:Vc,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const r=document.querySelector("canvas"),a=r?r.width:1,w=r?r.height:1;Uc({width:a,height:w,sh_bias:this.pc.sh_bias,color_K:this.pc.K,feature_mode:this.pc.feature_mode}),vr(this.device,this.render_settings_buffer),this.splat_2d_buffer=this.device.createBuffer({label:"splats_2d (Splat2DGS)",size:Fn(this.pc.num_points*Nc),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.draw_indirect_buffer=this.device.createBuffer({label:"draw indirect",size:4*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT}),this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([this.octBound?8:4,0,0,0])),this.sh_solvers_buffer=this.device.createBuffer({label:"sh_solvers",size:Fn(this.pc.num_points*qc),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST})}requestPerfDialog(){this.showPerfDialogNext=!0}requestDownloadMetrics(r){if(r&&r.trim().length>0){const a=r.trim().replace(/[^a-zA-Z0-9_\-]/g,"_");this.downloadOnceFileName=a.length>0?a:this.downloadOnceFileName}else{const a=new Date,w=`${a.getFullYear()}${String(a.getMonth()+1).padStart(2,"0")}${String(a.getDate()).padStart(2,"0")}_${String(a.getHours()).padStart(2,"0")}${String(a.getMinutes()).padStart(2,"0")}${String(a.getSeconds()).padStart(2,"0")}`;this.downloadOnceFileName=`fps_metrics_${w}`}this.downloadOnceNextRead=!0}requestReorder(){}async maybeReorderAfterSubmit(){}};D(On,"BLEND_OVER",{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}),D(On,"BLEND_ADD",{color:{operation:"add",srcFactor:"one",dstFactor:"one"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one"}});let ks=On;function Yc(o,r){return 2*Math.atan(r/(2*o))}function Zc(o,r,a,w){const f=Math.tan(w/2),b=Math.tan(a/2),R=f*o,T=-R,C=b*o,M=-C,N=vt.create();return N[0]=2*o/(C-M),N[5]=-2*o/(R-T),N[2]=(C+M)/(C-M),N[6]=(R+T)/(R-T),N[14]=1,N[10]=r/(r-o),N[11]=-(r*o)/(r-o),vt.transpose(N,N),N}async function dr(o){wt(`loading scene camera file... : ${o}`);const a=await(await fetch(o)).json();return wt(`loaded cameras count: ${a.length}`),a.map(w=>{const f=W.clone(w.position),b=Ct.create(...w.rotation.flat()),R=b[0],T=b[4],C=b[8],M=b[1],N=b[5],G=b[9],I=b[2],j=b[6],ce=b[10];R*(N*ce-G*j)-T*(M*ce-G*I)+C*(M*j-N*I)<0&&(b[1]=-b[1],b[5]=-b[5],b[9]=-b[9]);const O=vt.fromMat3(b);return{position:f,rotation:O,img_name:w.img_name,id:w.id}})}const Xc=4*2,Jc=4*16,so=4*Jc+2*Xc;function Qc(o){return o.createBuffer({label:"camera uniform",size:so,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}const xn=new Float32Array(so/Float32Array.BYTES_PER_ELEMENT),Bs=class Bs{constructor(r,a){D(this,"_renderSize",null);D(this,"uniform_buffer");D(this,"position",W.create());D(this,"rotation",vt.create());D(this,"zfar",100);D(this,"fovY",45/180*Math.PI);D(this,"fovX");D(this,"focalRatioX",1);D(this,"focal",Pi.create());D(this,"viewport",Pi.create());D(this,"view_matrix",vt.identity());D(this,"view_inv_matrix",vt.identity());D(this,"proj_matrix",vt.identity());D(this,"proj_inv_matrix",vt.identity());D(this,"_negPos",W.create());D(this,"look",W.create(0,0,1));D(this,"up",W.create(0,1,0));D(this,"right",W.create(1,0,0));this.canvas=r,this.device=a,this.uniform_buffer=a?Qc(a):null,this.on_update_canvas()}getFovY(){return this.fovY}setRenderSize(r,a){this._renderSize=[r,a],this.on_update_canvas()}clearRenderSize(){this._renderSize=null,this.on_update_canvas()}on_update_canvas(){const r=this._renderSize?this._renderSize[0]:this.canvas.width,a=this._renderSize?this._renderSize[1]:this.canvas.height,w=.5*a/Math.tan(this.fovY*.5);this.focal[0]=w*this.focalRatioX,this.focal[1]=w,this.fovX=Yc(this.focal[0],r),this.viewport[0]=r,this.viewport[1]=a,this.proj_matrix=Zc(.01,this.zfar,this.fovX,this.fovY),vt.inverse(this.proj_matrix,this.proj_inv_matrix),this.update_buffer()}update_buffer(){this._negPos[0]=-this.position[0],this._negPos[1]=-this.position[1],this._negPos[2]=-this.position[2],vt.copy(this.rotation,this.view_matrix),vt.translate(this.view_matrix,this._negPos,this.view_matrix),vt.inverse(this.view_matrix,this.view_inv_matrix),W.transformMat4Upper3x3(Bs.Z_AXIS,this.view_inv_matrix,this.look),W.normalize(this.look,this.look),W.cross(this.up,this.look,this.right),W.normalize(this.right,this.right);let r=0;xn.set(this.view_matrix,r),r+=16,xn.set(this.view_inv_matrix,r),r+=16,xn.set(this.proj_matrix,r),r+=16,xn.set(this.proj_inv_matrix,r),r+=16,xn.set(this.viewport,r),r+=2,xn.set(this.focal,r),r+=2,this.device&&this.device.queue.writeBuffer(this.uniform_buffer,0,xn)}set_preset(r){W.copy(r.position,this.position),vt.copy(r.rotation,this.rotation),this.update_buffer()}setFov(r){this.fovY=r,this.on_update_canvas()}setFocalRatio(r){this.focalRatioX=r,this.on_update_canvas()}getFov(){return this.fovY}};D(Bs,"Z_AXIS",W.create(0,0,1));let Cs=Bs;const eu=W.create(1,0,0),tu=W.create(0,1,0),nu=W.create(0,0,1);function su(o,r){const a=o[0],w=o[4],f=o[8],b=o[1],R=o[5],T=o[9],C=o[2],M=o[6],N=o[10],G=a+R+N;let I,j,ce,z;if(G>0){const O=.5/Math.sqrt(G+1);I=.25/O,j=(M-T)*O,ce=(f-C)*O,z=(b-w)*O}else if(a>R&&a>N){const O=2*Math.sqrt(1+a-R-N);I=(M-T)/O,j=.25*O,ce=(w+b)/O,z=(f+C)/O}else if(R>N){const O=2*Math.sqrt(1+R-a-N);I=(f-C)/O,j=(w+b)/O,ce=.25*O,z=(T+M)/O}else{const O=2*Math.sqrt(1+N-a-R);I=(b-w)/O,j=(f+C)/O,ce=(T+M)/O,z=.25*O}return r[0]=j,r[1]=ce,r[2]=z,r[3]=I,r}class ro{constructor(r){D(this,"element");D(this,"enabled",!0);D(this,"center",W.create(0,0,0));D(this,"up",W.create(0,1,0));D(this,"rotation",[0,0]);D(this,"shift",[0,0]);D(this,"scroll",0);D(this,"speed",.1);D(this,"sensitivity",.08);D(this,"leftPressed",!1);D(this,"rightPressed",!1);D(this,"leftDragPans",!1);D(this,"lastX",0);D(this,"lastY",0);D(this,"touches",new Map);D(this,"lastTouchCenter",null);D(this,"lastPinchDistance",null);D(this,"lastTwoFingerAngle",null);D(this,"lastTouchCount",0);D(this,"roll",0);D(this,"_dir",W.create());D(this,"_right",W.create());D(this,"_upCam",W.create());D(this,"_scratch",W.create());D(this,"_qY",dt.create());D(this,"_qX",dt.create());D(this,"_qRot",dt.create());D(this,"_qZ",dt.create());D(this,"_qLocal",dt.create());D(this,"_qWorldToCam",dt.create());D(this,"_scratchMat3",Ct.create());D(this,"bboxMin",null);D(this,"bboxMax",null);D(this,"anchor",W.create(0,0,0));D(this,"downCallback",r=>{var a,w,f,b;if(this.enabled){if(r.pointerType==="touch"){this.touches.set(r.pointerId,{x:r.pageX,y:r.pageY}),this.handleTouchGestures(),(w=(a=r.target)==null?void 0:a.setPointerCapture)==null||w.call(a,r.pointerId),r.preventDefault();return}r.isPrimary&&(r.button===0?(this.leftPressed=!0,this.leftDragPans=r.shiftKey):r.button===2?this.rightPressed=!0:this.rightPressed=!0,this.lastX=r.pageX,this.lastY=r.pageY,(b=(f=r.target)==null?void 0:f.setPointerCapture)==null||b.call(f,r.pointerId),r.preventDefault())}});D(this,"moveCallback",r=>{if(!this.enabled)return;if(r.pointerType==="touch"){if(!this.touches.has(r.pointerId))return;this.touches.set(r.pointerId,{x:r.pageX,y:r.pageY}),this.handleTouchGestures(),r.preventDefault();return}if(!r.isPrimary||!this.leftPressed&&!this.rightPressed)return;r.preventDefault();const a=r.pageX-this.lastX,w=r.pageY-this.lastY;this.lastX=r.pageX,this.lastY=r.pageY,this.leftPressed&&!this.leftDragPans?(this.rotation[0]+=a,this.rotation[1]-=w):(this.rightPressed||this.leftPressed&&this.leftDragPans)&&(this.shift[1]-=a,this.shift[0]+=w)});D(this,"upCallback",r=>{var a,w,f,b;if(r.pointerType==="touch"){this.touches.delete(r.pointerId),this.handleTouchGestures(),(w=(a=r.target)==null?void 0:a.releasePointerCapture)==null||w.call(a,r.pointerId),r.preventDefault();return}r.button===0?this.leftPressed=!1:r.button===2?this.rightPressed=!1:this.rightPressed=!1,(b=(f=r.target)==null?void 0:f.releasePointerCapture)==null||b.call(f,r.pointerId),r.preventDefault()});D(this,"wheelCallback",r=>{if(!this.enabled||(r.preventDefault(),this.rightPressed))return;let a=r.deltaY;r.deltaMode===1?a*=16:r.deltaMode===2&&(a*=100),this.scroll+=a*.01});this.camera=r,this.registerElement(r.canvas)}get sceneRadius(){if(!this.bboxMin||!this.bboxMax)return null;const r=this.bboxMax[0]-this.bboxMin[0],a=this.bboxMax[1]-this.bboxMin[1],w=this.bboxMax[2]-this.bboxMin[2],f=.5*Math.sqrt(r*r+a*a+w*w);return f>1e-6?f:null}addRoll(r){this.roll+=r}registerElement(r){this.element&&this.element!==r&&(this.element.removeEventListener("pointerdown",this.downCallback),this.element.removeEventListener("pointermove",this.moveCallback),this.element.removeEventListener("pointerup",this.upCallback),this.element.removeEventListener("wheel",this.wheelCallback)),this.element=r,this.element.addEventListener("pointerdown",this.downCallback),this.element.addEventListener("pointermove",this.moveCallback),this.element.addEventListener("pointerup",this.upCallback),this.element.addEventListener("wheel",this.wheelCallback,{passive:!1}),this.element.addEventListener("contextmenu",a=>a.preventDefault())}setCenter(r){W.copy(r,this.center),W.copy(r,this.anchor)}setOrbitPivot(r){W.set(r[0],r[1],r[2],this.center),this._reorientCameraToCenter()}setOrbitDepth(r){if(!isFinite(r)||r<.001)return;const a=this.camera.rotation;W.set(a[2],a[6],a[10],this._dir),W.normalize(this._dir,this._dir),W.scale(this._dir,r,this._dir),W.add(this.camera.position,this._dir,this.center)}_reorientCameraToCenter(){const r=this.camera;if(W.subtract(this.center,r.position,this._scratch),W.length(this._scratch)<1e-6)return;W.normalize(this._scratch,this._scratch),W.cross(this.up,this._scratch,this._right),W.length(this._right)<1e-6&&W.set(1,0,0,this._right),W.normalize(this._right,this._right),W.cross(this._scratch,this._right,this._upCam),W.normalize(this._upCam,this._upCam);const a=r.rotation;a[0]=this._right[0],a[1]=this._upCam[0],a[2]=this._scratch[0],a[3]=0,a[4]=this._right[1],a[5]=this._upCam[1],a[6]=this._scratch[1],a[7]=0,a[8]=this._right[2],a[9]=this._upCam[2],a[10]=this._scratch[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,r.update_buffer()}setBbox(r,a){this.bboxMin=W.create(r[0],r[1],r[2]),this.bboxMax=W.create(a[0],a[1],a[2]);const w=(r[0]+a[0])*.5,f=(r[1]+a[1])*.5,b=(r[2]+a[2])*.5;W.set(w,f,b,this.center),W.set(w,f,b,this.anchor)}resetToCamera(){const r=this.camera.rotation;W.set(r[2],r[6],r[10],this._dir),W.normalize(this._dir,this._dir);let a=null;if(this.bboxMin&&this.bboxMax){let w=-1/0,f=1/0,b=!1;for(let R=0;R<3;R++){const T=this._dir[R],C=this.bboxMin[R]-this.camera.position[R],M=this.bboxMax[R]-this.camera.position[R];if(Math.abs(T)>1e-8){const N=C/T,G=M/T;w=Math.max(w,Math.min(N,G)),f=Math.min(f,Math.max(N,G))}else if(C>0||M<0){b=!0;break}}!b&&w<=f&&f>0&&(a=(Math.max(w,0)+f)*.5)}if(a===null||!isFinite(a)||a<.001){W.subtract(this.anchor,this.camera.position,this._scratch);const w=W.dot(this._scratch,this._dir);a=w>.001?w:W.length(this._scratch)}a=Math.max(.1,a),W.scale(this._dir,a,this._dir),W.add(this.camera.position,this._dir,this.center)}handleTouchGestures(){const r=this.touches.size;if(r!==this.lastTouchCount&&(this.lastTouchCenter=null,this.lastPinchDistance=null,this.lastTwoFingerAngle=null),this.lastTouchCount=r,r===1){const a=this.touches.values().next().value;if(this.lastTouchCenter){const w=a.x-this.lastTouchCenter[0],f=a.y-this.lastTouchCenter[1];this.rotation[0]+=w*.3,this.rotation[1]-=f*.3}this.lastTouchCenter=[a.x,a.y]}else if(r===2){const a=Array.from(this.touches.values()),w=(a[0].x+a[1].x)*.5,f=(a[0].y+a[1].y)*.5,b=a[1].x-a[0].x,R=a[1].y-a[0].y,T=Math.hypot(b,R),C=Math.atan2(R,b);if(this.lastTouchCenter!==null&&this.lastPinchDistance!==null&&this.lastTwoFingerAngle!==null){const M=w-this.lastTouchCenter[0],N=f-this.lastTouchCenter[1],G=Math.hypot(M,N),I=Math.abs(T-this.lastPinchDistance);let j=C-this.lastTwoFingerAngle;j>Math.PI&&(j-=2*Math.PI),j<-Math.PI&&(j+=2*Math.PI),G>.5&&(this.shift[1]-=M,this.shift[0]+=N),I>1&&this.lastPinchDistance>.001&&(this.scroll+=-Math.log(T/this.lastPinchDistance)*10),Math.abs(j)>.0087&&(this.roll+=j)}this.lastTouchCenter=[w,f],this.lastPinchDistance=T,this.lastTwoFingerAngle=C}}update(r){if(!this.enabled||Math.abs(this.rotation[0])<1e-4&&Math.abs(this.rotation[1])<1e-4&&Math.abs(this.shift[0])<1e-4&&Math.abs(this.shift[1])<1e-4&&Math.abs(this.scroll)<1e-4&&Math.abs(this.roll)<1e-4)return;const a=this.camera;{const O=a.rotation;this.up[0]=O[1],this.up[1]=O[5],this.up[2]=O[9],W.length(this.up)>1e-6?W.normalize(this.up,this.up):W.set(0,1,0,this.up)}let w=0,f=!1;Math.abs(this.roll)>1e-4&&(w=this.roll,this.roll=0,f=!0),W.subtract(a.position,this.center,this._dir);let b=W.length(this._dir);b<1e-6&&(b=1e-6);const R=Math.exp(Math.log(b)+this.scroll*r*10*this.speed);W.scale(this._dir,R/b,this._dir),b=R;const T=a.rotation;this._right[0]=T[0],this._right[1]=T[4],this._right[2]=T[8],W.normalize(this._right,this._right),W.length(this._right)<1e-6&&W.set(1,0,0,this._right);const C=W.create(T[1],T[5],T[9]);W.normalize(C,C),W.length(C)<1e-6&&W.set(0,1,0,C);const M=r*this.speed*.1*b,N=this.shift[1]*M,G=-this.shift[0]*M;W.scale(this._right,N,this._scratch),W.add(this.center,this._scratch,this.center),W.add(a.position,this._scratch,a.position),W.scale(C,G,this._scratch),W.add(this.center,this._scratch,this.center),W.add(a.position,this._scratch,a.position);const I=this.rotation[0]*r*this.sensitivity,j=this.rotation[1]*r*this.sensitivity;if(Math.abs(I)>1e-5||Math.abs(j)>1e-5||f){const O=a.rotation;su(O,this._qWorldToCam),dt.fromAxisAngle(eu,-j,this._qX),dt.fromAxisAngle(tu,-I,this._qY),dt.multiply(this._qX,this._qY,this._qLocal),f&&(dt.fromAxisAngle(nu,1*w,this._qZ),dt.multiply(this._qZ,this._qLocal,this._qLocal)),dt.normalize(this._qLocal,this._qLocal),dt.multiply(this._qLocal,this._qWorldToCam,this._qWorldToCam),dt.normalize(this._qWorldToCam,this._qWorldToCam),Ct.fromQuat(this._qWorldToCam,this._scratchMat3),vt.fromMat3(this._scratchMat3,a.rotation);const X=a.rotation,F=X[2],se=X[6],q=X[10];a.position[0]=this.center[0]-F*b,a.position[1]=this.center[1]-se*b,a.position[2]=this.center[2]-q*b,this.up[0]=X[1],this.up[1]=X[5],this.up[2]=X[9],W.normalize(this.up,this.up)}else W.add(this.center,this._dir,a.position);a.update_buffer();const z=Math.pow(.8,r*60);this.rotation[0]*=z,Math.abs(this.rotation[0])<1e-4&&(this.rotation[0]=0),this.rotation[1]*=z,Math.abs(this.rotation[1])<1e-4&&(this.rotation[1]=0),this.shift[0]*=z,Math.abs(this.shift[0])<1e-4&&(this.shift[0]=0),this.shift[1]*=z,Math.abs(this.shift[1])<1e-4&&(this.shift[1]=0),this.scroll*=z,Math.abs(this.scroll)<1e-4&&(this.scroll=0)}}function io(o){const r=W.create();for(const a of o)W.add(r,a,r);return W.scale(r,1/Math.max(o.length,1),r)}function oo(o,r){const a=Ct.create();Ct.inverse(o,a);const w=W.create();return w[0]=a[0]*r[0]+a[4]*r[1]+a[8]*r[2],w[1]=a[1]*r[0]+a[5]*r[1]+a[9]*r[2],w[2]=a[2]*r[0]+a[6]*r[1]+a[10]*r[2],w}function ru(o){const r=o.slice(),a=[1,0,0,0,1,0,0,0,1],w=(C,M)=>r[C*3+M],f=(C,M,N)=>{r[C*3+M]=N},b=(C,M)=>a[C*3+M],R=(C,M,N)=>{a[C*3+M]=N};for(let C=0;C<30;C++){let M=0,N=1,G=Math.abs(w(0,1));if(Math.abs(w(0,2))>G&&(M=0,N=2,G=Math.abs(w(0,2))),Math.abs(w(1,2))>G&&(M=1,N=2,G=Math.abs(w(1,2))),G<1e-12)break;const I=w(M,M),j=w(N,N),ce=w(M,N);let z;Math.abs(I-j)<1e-30?z=Math.PI/4*Math.sign(ce):z=.5*Math.atan2(2*ce,I-j);const O=Math.cos(z),X=Math.sin(z);for(let F=0;F<3;F++){const se=w(F,M),q=w(F,N);f(F,M,O*se+X*q),f(F,N,-X*se+O*q)}for(let F=0;F<3;F++){const se=w(M,F),q=w(N,F);f(M,F,O*se+X*q),f(N,F,-X*se+O*q)}for(let F=0;F<3;F++){const se=b(F,M),q=b(F,N);R(F,M,O*se+X*q),R(F,N,-X*se+O*q)}}const T=[];for(let C=0;C<3;C++)T.push({val:w(C,C),vec:W.create(b(0,C),b(1,C),b(2,C))});return T.sort((C,M)=>M.val-C.val),{vals:[T[0].val,T[1].val,T[2].val],vecs:[T[0].vec,T[1].vec,T[2].vec]}}function iu(o,r){const a=io(o);let w=0,f=0,b=0,R=0,T=0,C=0;for(const ce of o){const z=ce[0]-a[0],O=ce[1]-a[1],X=ce[2]-a[2];w+=z*z,f+=z*O,b+=z*X,R+=O*O,T+=O*X,C+=X*X}const M=[w,f,b,f,R,T,b,T,C],{vecs:N}=ru(M);let G=N[0],I=N[1],j=N[2];return W.dot(j,r)<0&&(W.scale(j,-1,j),W.scale(I,-1,I)),{centroid:a,normal:j,u:G,v:I}}function ou(o){let r=0,a=0,w=0,f=0,b=0,R=0,T=0,C=0,M=0;for(const[O,X]of o){const F=-2*O,se=-2*X,q=1,de=-(O*O+X*X);r+=F*F,a+=F*se,w+=F*q,f+=se*se,b+=se*q,R+=q*q,T+=F*de,C+=se*de,M+=q*de}const N=Ct.create(r,a,w,a,f,b,w,b,R),G=oo(N,W.create(T,C,M)),I=G[0],j=G[1],ce=G[2],z=I*I+j*j-ce;return{center:[I,j],radius:Math.sqrt(Math.max(z,1e-12))}}function au(o,r){let a=0,w=0,f=0,b=0,R=0,T=0,C=0,M=0,N=0;for(let I=0;I<o.length;I++){const j=o[I],ce=W.normalize(r[I],W.create()),z=1-ce[0]*ce[0],O=-ce[0]*ce[1],X=-ce[0]*ce[2],F=1-ce[1]*ce[1],se=-ce[1]*ce[2],q=1-ce[2]*ce[2];a+=z,w+=O,f+=X,b+=F,R+=se,T+=q,C+=z*j[0]+O*j[1]+X*j[2],M+=O*j[0]+F*j[1]+se*j[2],N+=X*j[0]+se*j[1]+q*j[2]}const G=Ct.create(a,w,f,w,b,R,f,R,T);return oo(G,W.create(C,M,N))}function ao(o,r={}){if(o.length===0)return null;const a=r.tiltDownDeg??8,w=r.radiusScale??1,f=r.alignFirst??!0,b=(r.direction??"ccw")==="ccw"?1:-1,R=o.map(ie=>W.clone(ie.position)),T=o.map(ie=>{const ue=ie.rotation;return W.create(ue[8],ue[9],ue[10])}),C=o.map(ie=>{const ue=ie.rotation;return W.create(ue[4],ue[5],ue[6])}),M=io(C),N=W.normalize(W.scale(M,-1,W.create())),{centroid:G,normal:I,u:j,v:ce}=iu(R,N),z=R.map(ie=>{const ue=W.sub(ie,G,W.create());return[W.dot(ue,j),W.dot(ue,ce)]}),{center:O,radius:X}=ou(z),F=X*w,se=W.add(G,W.add(W.scale(j,O[0],W.create()),W.scale(ce,O[1],W.create()),W.create()),W.create()),q=au(R,T),de=F*Math.tan(a*Math.PI/180),_e=W.sub(q,W.scale(I,de,W.create()),W.create());let fe=0;if(f){const ie=W.sub(R[0],se,W.create());fe=Math.atan2(W.dot(ie,ce),W.dot(ie,j))/(2*Math.PI)%1,fe<0&&(fe+=1)}return console.log(`[orbit] fit ${o.length} train cams: radius=${F.toFixed(2)}, tilt=${a}°, normal=[${I[0].toFixed(2)}, ${I[1].toFixed(2)}, ${I[2].toFixed(2)}], startPhase=${fe.toFixed(3)}`),{center:se,radius:F,normal:I,u:j,v:ce,lookAt:_e,startPhase:fe,direction:b}}function lo(o,r){const a=(o.startPhase+r*o.direction)*2*Math.PI,w=Math.cos(a),f=Math.sin(a),b=W.add(o.center,W.add(W.scale(o.u,o.radius*w,W.create()),W.scale(o.v,o.radius*f,W.create()),W.create()),W.create()),R=W.normalize(W.sub(o.lookAt,b,W.create())),T=W.cross(R,o.normal,W.create());W.length(T)<1e-6&&W.copy(o.u,T),W.normalize(T,T);const C=W.cross(R,T,W.create());W.normalize(C,C);const M=vt.create();return M[0]=T[0],M[1]=C[0],M[2]=R[0],M[3]=0,M[4]=T[1],M[5]=C[1],M[6]=R[1],M[7]=0,M[8]=T[2],M[9]=C[2],M[10]=R[2],M[11]=0,M[12]=0,M[13]=0,M[14]=0,M[15]=1,{position:b,rotation:M,img_name:`orbit_${(r*1e3).toFixed(0)}`,id:0}}function lu(o,r={}){const a=ao(o,r);if(!a)return[];const w=r.numViews??120;return Array.from({length:w},(f,b)=>({...lo(a,b/w),img_name:`circle_${b.toString().padStart(4,"0")}`,id:b}))}const co="halloumi.renderer";function cu(){const o=new URLSearchParams(window.location.search).get("renderer"),r=o==="webgl"||o==="webgpu"?o:null;let a=null;try{const w=localStorage.getItem(co);(w==="webgl"||w==="webgpu")&&(a=w)}catch{}return{forced:r,stored:a}}function pr(o){try{localStorage.setItem(co,o)}catch{}const r=new URLSearchParams(window.location.search);r.set("renderer",o),window.location.search=r.toString()}function Qt(o){const r=(o&32768)>>15,a=(o&31744)>>10,w=o&1023;return a===0?(r?-1:1)*Math.pow(2,-14)*(w/1024):a===31?w?NaN:r?-1/0:1/0:(r?-1:1)*Math.pow(2,a-15)*(1+w/1024)}function hr(o,r,a,w,f,b,R,T,C,M=.5){const N=C?C.length:R.length/8,G=[],I=[];for(let z=0;z<N;z++){const X=(C?C[z]:z)*8,F=R[X]-o,se=R[X+1]-r,q=R[X+2]-a,de=F*w+se*f+q*b;if(de<=0||!(T[X+7]>>>16&1))continue;const _e=T[X+4],fe=Qt(_e&65535),ie=Qt(_e>>>16&65535),ue=3*Math.max(fe,ie),Te=F-de*w,le=se-de*f,te=q-de*b;if(Te*Te+le*le+te*te>ue*ue)continue;const we=Qt(T[X+3]&65535);if(we<1/255)continue;const Le=T[X+5],ke=T[X+6];let Z=Qt(Le&65535),J=Qt(Le>>>16&65535),H=Qt(ke&65535),ee=Qt(ke>>>16&65535);const be=Math.hypot(Z,J,H,ee)||1;Z/=be,J/=be,H/=be,ee/=be;const De=1-2*(H*H+ee*ee),Se=2*(J*H+Z*ee),Re=2*(J*ee-Z*H),re=2*(J*H-Z*ee),ve=1-2*(J*J+ee*ee),Pe=2*(H*ee+Z*J),U=2*(J*ee+Z*H),Y=2*(H*ee-Z*J),g=1-2*(J*J+H*H),l=w*U+f*Y+b*g;if(Math.abs(l)<1e-6)continue;const _=(F*U+se*Y+q*g)/l;if(!(_>0))continue;const h=_*w-F,y=_*f-se,k=_*b-q,x=(h*De+y*Se+k*Re)/(fe||1e-6),S=(h*re+y*ve+k*Pe)/(ie||1e-6),i=x*x+S*S;if(i>9)continue;const v=Math.min(.99,we*Math.exp(-.5*i));v<1/255||(G.push(_),I.push(v))}if(G.length===0)return null;const j=G.map((z,O)=>O).sort((z,O)=>G[z]-G[O]);let ce=1;for(const z of j)if(ce*=1-I[z],ce<M)return G[z];return null}function Ts(o,r,a){const w=(o-a.viewport[0]*.5)/a.focal[0],f=-((r-a.viewport[1]*.5)/a.focal[1]),b=a.rotation;let R=w*b[0]+f*b[1]+b[2],T=w*b[4]+f*b[5]+b[6],C=w*b[8]+f*b[9]+b[10];const M=Math.hypot(R,T,C)||1;return[R/M,T/M,C/M]}function fr(o,r,a,w,f,b){const[R,T,C]=Ts(o,r,w),M=w.position[0],N=w.position[1],G=w.position[2],I=new Uint32Array(f.buffer,f.byteOffset,f.length);let j=hr(M,N,G,R,T,C,f,I,null,.5);return j===null&&(j=hr(M,N,G,R,T,C,f,I,null,.8)),j===null?null:[M+j*R,N+j*T,G+j*C]}function uo(o,r){const a=o.viewport[0],w=o.viewport[1],f=new Uint32Array(r.buffer,r.byteOffset,r.length),b=o.position[0],R=o.position[1],T=o.position[2],[C,M,N]=Ts(a*.5,w*.5,o),G=.06*Math.max(a,w),I=(G+2)/o.focal[0],j=r.length/8,ce=[];for(let F=0;F<j;F++){const se=F*8,q=r[se]-b,de=r[se+1]-R,_e=r[se+2]-T,fe=q*C+de*M+_e*N;if(fe<=0)continue;const ie=f[se+4],ue=3*Math.max(Qt(ie&65535),Qt(ie>>>16&65535)),Te=q-fe*C,le=de-fe*M,te=_e-fe*N,we=fe*I+ue;Te*Te+le*le+te*te<=we*we&&ce.push(F)}if(ce.length===0)return null;const z=Int32Array.from(ce),O=[],X=5;for(let F=0;F<X;F++)for(let se=0;se<X;se++){const q=a*.5+(se-(X-1)/2)/((X-1)/2)*G,de=w*.5+(F-(X-1)/2)/((X-1)/2)*G,[_e,fe,ie]=Ts(q,de,o),ue=hr(b,R,T,_e,fe,ie,r,f,z,.5);ue!==null&&O.push(ue*(_e*C+fe*M+ie*N))}return O.length<3?null:(O.sort((F,se)=>F-se),O[O.length>>1])}function uu(o){return new Promise(r=>{const a=document.createElement("input");a.type="file",a.accept=o,a.style.display="none",a.onchange=()=>{var w;return r(((w=a.files)==null?void 0:w[0])??null)},document.body.appendChild(a),a.click(),setTimeout(()=>document.body.removeChild(a),1e3)})}function du(o,r,a){const w=document.getElementById("ui-panel-container"),f=document.getElementById("load-button"),b=document.getElementById("quick-links");f&&(f.onclick=async()=>{const M=await uu(".ply,.bitymi");if(M)if(w&&(w.style.display="none"),M.name.toLowerCase().endsWith(".bitymi")){const N=await M.arrayBuffer(),{pcBuffer:G}=mr(N),I=new File([G],M.name.replace(/\.bitymi$/i,".ply"),{type:"application/octet-stream"}),j=await Ps(I,o);r(j)}else{const N=await Ps(M,o);r(N)}}),b&&(b.innerHTML="");const R=new URLSearchParams(window.location.search),T=R.get("bundle")??R.get("model_url"),C=R.get("camera_url");T&&(w&&(w.style.display="none"),a(T,C))}async function pu(o,r,a){const{bundle:w}=await $n(o,(R,T)=>a(`downloading B ... ${(R/1048576).toFixed(1)}${T?` / ${(T/1048576).toFixed(1)}`:""} MB`));if(!w)throw new Error("bundle_b must be a .bitymi bundle");a("parsing B ...");const f=await Ps(new File([w.pcBuffer],"bundle_b.ply",{type:"application/octet-stream"}),r);let b=null;if(w.atlasBuffer){a("uploading B atlas ...");try{b=ar(r,Vn(w.atlasBuffer),!0)}catch(R){console.warn("[A/B] B atlas failed:",R)}}return{pc:f,atlas:b}}function rr(o){const r=new Uint32Array(o.surfel_data.buffer,o.surfel_data.byteOffset,o.num_points*8);for(let a=0;a<o.num_points;a++){const w=r[a*8+7];if(!(w>>>16&1)||(w>>>17&1)===1)return!0}return!1}async function hu(o,r,a,w){const f=new Cs(o,a),b=new ro(f);let R=!1;o.addEventListener("pointerdown",()=>{R=!0}),window.addEventListener("pointerup",()=>{R=!1});const T=typeof window<"u"&&window.parent!==window,C={pos:new Float32Array(3),rot:new Float32Array(16)};if(T){window.addEventListener("message",Z=>{const J=Z.data;if(!(!J||J.type!=="halloumi_sync_pose")&&!(!Array.isArray(J.position)||J.position.length!==3)&&!(!Array.isArray(J.rotation)||J.rotation.length!==16)){for(let H=0;H<3;H++)f.position[H]=J.position[H];for(let H=0;H<16;H++)f.rotation[H]=J.rotation[H];f.update_buffer(),b.resetToCamera();for(let H=0;H<3;H++)C.pos[H]=f.position[H];for(let H=0;H<16;H++)C.rot[H]=f.rotation[H]}});try{window.parent.postMessage({type:"halloumi_sync_ready"},"*")}catch{}}const M=()=>{if(!T)return;const Z=f.position,J=f.rotation;let H=!1;for(let ee=0;ee<3;ee++)if(Math.abs(Z[ee]-C.pos[ee])>1e-6){H=!0;break}if(!H){for(let ee=0;ee<16;ee++)if(Math.abs(J[ee]-C.rot[ee])>1e-6){H=!0;break}}if(H){for(let ee=0;ee<3;ee++)C.pos[ee]=Z[ee];for(let ee=0;ee<16;ee++)C.rot[ee]=J[ee];try{window.parent.postMessage({type:"halloumi_camera_state",position:[Z[0],Z[1],Z[2]],rotation:Array.from(J)},"*")}catch{}}},N="rgba8unorm";r.configure({device:a,format:N,alphaMode:"opaque",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING});let G=null,I=null;const j=()=>{f.on_update_canvas(),G!==null&&wn(o.width,o.height,a,G.render_settings_buffer),I!==null&&I()};new ResizeObserver(()=>{const Z=Math.max(.25,te.render_scale),J=Math.max(1,Math.ceil(Z*o.clientWidth)),H=Math.max(1,Math.ceil(Z*o.clientHeight));o.width===J&&o.height===H||(o.width=J,o.height=H,j())}).observe(o);let z=0,O=0;const X=()=>{(o.width!==z||o.height!==O)&&(z=o.width,O=o.height,j())},F=new URLSearchParams(window.location.search);let q=F.get("animation")==="1";b.enabled=!q;const de=F.get("camera_url"),_e=F.get("bfc"),fe=_e==="1"||_e==="true",ie=F.get("bfc_cos"),ue=ie!==null?Number(ie):NaN,Te=Number.isFinite(ue)?ue:2,le=Math.max(1,window.devicePixelRatio||1),te={msaa:!1,gaussian_scaling:1,sh_bias:.5,animate:q,animateMode:"presets",bg:{r:0,g:0,b:0,a:0},atlas_enabled:!1,mips:(new URLSearchParams(window.location.search).get("mip")??"1")!=="0",bfc:fe,bfc_cos:Te,legacy_renderer:!1,surfel_math:"conic",hyp_legacy:!1,mip2d:!1,mip2d_k:.3,fetch_by_id:!0,two_pass:!1,opaque_thresh:.5,overdraw:"off",overdraw_max:48,render_scale:1},we=new to.Pane({title:"Config",expanded:!0});we.addInput(te,"animate",{label:"Animate"}).on("change",Z=>{const J=q;q=Z.value,b.enabled=!Z.value,!J&&q&&Le.value&&Le.value.onAnimateStart(),J&&!q&&Le.value&&Le.value.onAnimateStop()}),we.addInput(te,"animateMode",{label:"Anim path",options:{"Training views":"presets","Circle orbit":"circle"}});const Le={value:null};du(a,Z=>ke(Z,[],null),async(Z,J)=>{let H=J??de,ee,be=null;const De=Z.toLowerCase();if(De.endsWith(".bitymi")||De.includes(".bitymi?")){Nn("downloading bundle ...");try{const{bundle:Pe}=await $n(Z,(Y,g,l)=>{const _=Y/1048576,h=g?g/(1024*1024):void 0,y=l/(1024*1024),k=g?Math.min(99,Math.floor(Y/g*100)):void 0,x=h?`total ${h.toFixed(1)} MB`:"total -- MB",S=h&&k!==void 0?`${_.toFixed(1)} MB downloaded (${k}%)`:`${_.toFixed(1)} MB downloaded`,i=`${y.toFixed(2)} MB/s`;Dt(`downloading bundle ...
${x}, ${S}
${i}`)});if(!Pe)throw new Error("Expected a .bitymi bundle");Dt("parsing PLY ...");const U=new File([Pe.pcBuffer],"bundle.ply",{type:"application/octet-stream"});if(ee=await Ps(U,a),!H&&Pe.camerasBuffer&&(H=URL.createObjectURL(new Blob([Pe.camerasBuffer],{type:"application/json"}))),Pe.atlasBuffer){const Y=Pe.atlasBuffer.byteLength/1048576;Dt(`uploading atlas ...
${Y.toFixed(1)} MB BC7`);try{const g=Vn(Pe.atlasBuffer);be=ar(a,g,!0)}catch(g){console.warn("[atlas] failed to parse/upload atlas:",g)}}}catch(Pe){throw jt(),Pe}}else ee=await xc(Z,a);let Se=null,Re="";const re=F.get("atlas2");if(re)try{const{bundle:Pe}=await $n(re,(U,Y)=>{Dt(`downloading second atlas ...
${(U/1048576).toFixed(1)}${Y?` / ${(Y/1048576).toFixed(1)}`:""} MB`)});if(!(Pe!=null&&Pe.atlasBuffer))throw new Error("second bundle has no atlas chunk");Dt("uploading second atlas ..."),Se=ar(a,Vn(Pe.atlasBuffer),!0),Se||(Re="second atlas: format unsupported on this device")}catch(Pe){console.warn("[atlas2] failed:",Pe),Re=`second atlas failed: ${Pe}`}const ve=H?await dr(H):[];ve.length>0&&f.set_preset(ve[0]),ke(ee,ve,be,Se,Re)});function ke(Z,J=[],H=null,ee=null,be=""){const De=[(Z.bbox.min[0]+Z.bbox.max[0])/2,(Z.bbox.min[1]+Z.bbox.max[1])/2,(Z.bbox.min[2]+Z.bbox.max[2])/2];b.setBbox(Z.bbox.min,Z.bbox.max),.5*Math.sqrt((Z.bbox.max[0]-Z.bbox.min[0])**2+(Z.bbox.max[1]-Z.bbox.min[1])**2+(Z.bbox.max[2]-Z.bbox.min[2])**2);function Se(L,Q){const pe=fr(L,Q,o,f,Z.surfel_data);pe&&(b.setOrbitPivot(pe),console.log(`[pick] orbit pivot → (${pe[0].toFixed(3)}, ${pe[1].toFixed(3)}, ${pe[2].toFixed(3)})`))}function Re(){const L=uo(f,Z.surfel_data);if(L!==null&&L>.001){b.setOrbitDepth(L);return}const Q=f.rotation,pe=Q[2],me=Q[6],Ce=Q[10],ge=(Z.centroid[0]-f.position[0])*pe+(Z.centroid[1]-f.position[1])*me+(Z.centroid[2]-f.position[2])*Ce;ge>.001&&b.setOrbitDepth(ge)}if(J.length===0){const L=Z.bbox.max[0]-Z.bbox.min[0],Q=Z.bbox.max[1]-Z.bbox.min[1],pe=Z.bbox.max[2]-Z.bbox.min[2],Ce=.5*Math.sqrt(L*L+Q*Q+pe*pe)*.5;W.set(De[0]-Ce,De[1]-Ce,De[2]-Ce,f.position);const ge=W.create(Ce,Ce,Ce);W.normalize(ge,ge);const ye=W.create(0,1,0),Me=W.create();W.cross(ye,ge,Me),W.normalize(Me,Me);const tt=W.create();W.cross(ge,Me,tt);const mt=Ct.create(Me[0],tt[0],ge[0],Me[1],tt[1],ge[1],Me[2],tt[2],ge[2]);vt.fromMat3(mt,f.rotation),f.update_buffer()}b.setCenter(W.create(Z.centroid[0],Z.centroid[1],Z.centroid[2]));const re=/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&/Mac/i.test(navigator.platform),ve="halloumi.fetch_by_id";let Pe=null;try{const L=localStorage.getItem(ve);(L==="0"||L==="1")&&(Pe=L==="1")}catch{}const U=F.get("byid"),Y={fetchById:U!==null?U==="1":Pe!==null?Pe:!re,octBound:F.get("oct")==="1",acc16:F.get("acc16")==="1"};let g=new ks(Z,a,N,f.uniform_buffer,w,H,Y);const l=F.get("surfel_math");te.surfel_math=l==="raysplat"||l==="centred"?l:F.get("raysplat")==="1"?"raysplat":"conic",te.hyp_legacy=F.get("hyp_legacy")==="1",te.mip2d=F.get("mip2d")==="1";{const L=parseFloat(F.get("mip2d_k")??"");Number.isFinite(L)&&L>0&&(te.mip2d_k=L)}Ui(te.mip2d,te.mip2d_k,a,g.render_settings_buffer),ts({hypLegacy:te.hyp_legacy,raysplat:te.surfel_math==="raysplat",centred:te.surfel_math==="centred"},a,g.render_settings_buffer),te.legacy_renderer=F.get("legacy")==="1",te.legacy_renderer&&g.setLegacyRenderer(!0),te.two_pass=F.get("twopass")==="1";{const L=parseFloat(F.get("opaque_t")??"");Number.isFinite(L)&&(te.opaque_thresh=Math.min(.99,Math.max(.01,L)))}g.setOpaqueThresh(te.opaque_thresh),te.two_pass&&g.setTwoPass(!0);{const L=F.get("overdraw");(L==="shaded"||L==="raster"||L==="1")&&(te.overdraw=L==="raster"?"raster":"shaded");const Q=parseInt(F.get("overdraw_max")??"",10);Number.isFinite(Q)&&Q>0&&(te.overdraw_max=Q)}g.setOverdrawMax(te.overdraw_max),te.overdraw!=="off"&&g.setOverdrawMode(te.overdraw==="raster"?2:1),te.fetch_by_id=Y.fetchById,console.log(`[render_2dgs] fetch_by_id=${Y.fetchById} (source: ${U!==null?"?byid":Pe!==null?"remembered":`handheld=${re}`})`),G=g,wn(o.width,o.height,a,g.render_settings_buffer),te.atlas_enabled=H!==null;{const L=Z.surfel_data,Q=L.length/8;let pe=0,me=0,Ce=0;for(let ye=0;ye<Q;ye++)pe+=L[ye*8],me+=L[ye*8+1],Ce+=L[ye*8+2];const ge=Q>0?[pe/Q,me/Q,Ce/Q]:[0,0,0];g.setBfcParams(te.bfc_cos,ge),ts({bfc:te.bfc},a,g.render_settings_buffer),console.log(`[bfc] flag=${te.bfc} cos=${te.bfc_cos} centroid=(${ge[0].toFixed(3)}, ${ge[1].toFixed(3)}, ${ge[2].toFixed(3)})`)}let _=!1;const h=(()=>{if(H!==null)return`${H.meta.format===2?"BC7":H.meta.format===3?"ASTC 4×4":H.meta.format===7?"BC7 codebook gather (typeD)":`format=${H.meta.format}`} ${H.meta.width}×${H.meta.height}, ${H.meta.n_layers} layers`;const L=a.features.has("texture-compression-bc"),Q=a.features.has("texture-compression-astc");return`no atlas in bundle (GPU supports: ${(L?["BC7"]:[]).concat(Q?["ASTC"]:[]).join("+")||"none"})`})();console.log("[atlas]",h),Li(Z.sh_bias,a,g.render_settings_buffer),zi(te.gaussian_scaling,a,g.render_settings_buffer),te.sh_bias=Z.sh_bias;let y=Z.num_points.toLocaleString();const k={stats:`${y} surfels · -- fps`};we.addMonitor(k,"stats",{label:"Stats",interval:200});const x=.4,S=3,i=.3;let v=null,d=0,p=0;const c=dt.create(),m=Ct.create();let E=J.length>0?0:-1;const P={view:J.length>0?`${E+1} / ${J.length}: ${J[E].img_name??E}`:"— no presets —"},A=document.createElement("span");function $(L){const Q=Ct.create(L[0],L[1],L[2],L[4],L[5],L[6],L[8],L[9],L[10]);return dt.fromMat(Q)}function K(L,Q){v={fromPos:W.clone(f.position),toPos:W.clone(L.position),fromQuat:dt.normalize($(f.rotation)),toQuat:dt.normalize($(L.rotation)),target:L,t:0,duration:Math.max(.01,Q)}}const oe=(L,Q=!0)=>{if(J.length===0)return;E=(L%J.length+J.length)%J.length;const pe=J[E];Q?K(pe,x):(f.set_preset(pe),b.resetToCamera(),Re()),P.view=`${E+1} / ${J.length}: ${J[E].img_name??E}`,A.textContent=P.view};if(J.length>0){const L=we.addSeparator(),Q=document.createElement("div");Q.style.cssText="display:flex;gap:4px;align-items:center;padding:3px 6px;";const pe=(Ce,ge,ye)=>{const Me=document.createElement("button");return Me.className="tp-btnv_b",Me.textContent=Ce,Me.title=ge,Me.style.cssText="flex:0 0 34px;height:24px;padding:0;",Me.addEventListener("click",ye),Me};A.textContent=P.view,A.style.cssText="flex:1 1 auto;font-size:11px;text-align:center;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;opacity:.85;",Q.appendChild(pe("◀","previous view (←)",()=>oe(E-1))),Q.appendChild(A),Q.appendChild(pe("▶","next view (→)",()=>oe(E+1))),(we.element.querySelector(".tp-rotv_c")??we.element).insertBefore(Q,L.element),L.dispose()}const ne=J.length>0?ao(J,{tiltDownDeg:15,alignFirst:!0}):null,ae=ne?lu(J,{numViews:120,tiltDownDeg:15,alignFirst:!0}):[];let xe=0;const Ae=12;Le.value={onAnimateStart:()=>{xe=0},onAnimateStop:()=>{b.resetToCamera(),Re()}},we.addInput(te,"render_scale",{label:"Render scale",min:.25,max:le,step:.25}).on("change",L=>{const Q=Math.max(.25,L.value),pe=Math.max(1,Math.ceil(Q*o.clientWidth)),me=Math.max(1,Math.ceil(Q*o.clientHeight));(o.width!==pe||o.height!==me)&&(o.width=pe,o.height=me,j())});const Ee={res:""},Be=()=>{const L=o.width*o.height/1e6;Ee.res=`${o.width}×${o.height}  (${L.toFixed(2)} MP)
CSS ${o.clientWidth}×${o.clientHeight} · DPR ${le.toFixed(2)} · native ${Math.round(o.clientWidth*le)}×${Math.round(o.clientHeight*le)}`};Be(),I=Be,we.addMonitor(Ee,"res",{label:"Resolution",interval:250,multiline:!0,lineCount:2}),we.addInput(te,"gaussian_scaling",{label:"Surfel scale",min:0,max:1}).on("change",L=>zi(L.value,a,g.render_settings_buffer)),we.addInput(te,"sh_bias",{label:"SH bias",min:0,max:2,step:.01}).on("change",L=>Li(L.value,a,g.render_settings_buffer)),we.addInput(te,"bg",{label:"Background",color:{type:"float",alpha:!0}}).on("change",L=>{g.bgColor=[L.value.r,L.value.g,L.value.b,L.value.a]});const Ge=L=>L===null?"":L.meta.format===3||L.meta.format===8||L.meta.format===10?" (ASTC)":" (BC7)";let Ie=Ge(H);const Je=we.addInput(te,"atlas_enabled",{label:`Texture${Ie}`}).on("change",L=>{g.setAtlasEnabled(L.value),Ke()}),Ne=document.createElement("button");Ne.style.cssText="position:fixed;top:8px;right:276px;z-index:1000;height:28px;padding:0 10px;border-radius:6px;border:1px solid #444;background:#1c1c1ccc;color:#eee;font:600 12px/1 system-ui,sans-serif;cursor:pointer;backdrop-filter:blur(4px);";const Ke=()=>{Ne.textContent=`Texture${Ie}: ${te.atlas_enabled?"ON":"OFF"}`,Ne.style.borderColor=te.atlas_enabled?"#f0b060":"#444",Ne.style.color=te.atlas_enabled?"#f0b060":"#bbb"},qe=()=>{te.atlas_enabled=!te.atlas_enabled,g.setAtlasEnabled(te.atlas_enabled),Je.refresh(),Ke()};Ne.title="toggle the baked texture (T)",Ne.addEventListener("click",qe),H&&document.body.appendChild(Ne),Ke();const We=F.get("bundle_b");let He=()=>{};if(rr(Z)||We){const L=document.createElement("button");L.style.cssText=Ne.style.cssText.replace("top:8px","top:42px"),L.title="Mip-Splatting 2D Mip filter on the 3D kernels (normalises the screen-space dilation; helps when zoomed out)";let Q=null;const pe=()=>{L.textContent=`Mip 2D filter: ${te.mip2d?"ON":"OFF"}`,L.style.borderColor=te.mip2d?"#f0b060":"#444",L.style.color=te.mip2d?"#f0b060":"#bbb";try{const Ce=new URL(window.location.href);te.mip2d?Ce.searchParams.set("mip2d","1"):Ce.searchParams.delete("mip2d"),history.replaceState(history.state,"",Ce.toString())}catch{}},me=()=>{Ui(te.mip2d,te.mip2d_k,a,g.render_settings_buffer),Q==null||Q.refresh(),pe()};L.addEventListener("click",()=>{te.mip2d=!te.mip2d,me()}),Q=we.addInput(te,"mip2d",{label:"Mip 2D filter"}).on("change",()=>me()),document.body.appendChild(L),pe(),He=()=>{const Ce=rr(Z);L.style.display=Ce?"":"none",Q&&(Q.hidden=!Ce)},He(),window.__halloumiMip2D={get on(){return te.mip2d},toggle:()=>L.click()}}let nt=()=>{};if(We){const L=F.get("label_a")??"A",Q=F.get("label_b")??"B",pe={a:{pc:Z,atlas:H,renderer:g},b:null};let me="a",Ce=null;const ge=document.createElement("button");ge.style.cssText=Ne.style.cssText.replace("top:8px","top:76px"),ge.title=`switch between the two bakes of this scene (B key): ${L} / ${Q}`;const ye=(Oe="")=>{ge.textContent=Oe||`Scene: ${me==="a"?L:Q}  ⇄`,ge.style.borderColor=me==="b"?"#60b0f0":"#f0b060",ge.style.color=me==="b"?"#60b0f0":"#f0b060";try{const Ze=new URL(window.location.href);me==="b"?Ze.searchParams.set("side","b"):Ze.searchParams.delete("side"),history.replaceState(history.state,"",Ze.toString())}catch{}},Me=()=>pe.b?Promise.resolve(pe.b):(Ce||(Ce=pu(We,a,Oe=>{me==="a"&&ye(Oe)}).then(Oe=>(pe.b={pc:Oe.pc,atlas:Oe.atlas,renderer:null},ye(),pe.b))),Ce),tt=Oe=>{const Ze=Kt.slice(0);Oe.renderer=new ks(Oe.pc,a,N,f.uniform_buffer,w,Oe.atlas,Y),new Uint8Array(Kt).set(new Uint8Array(Ze))},mt=Oe=>{const Ze=pe[Oe];Ze.renderer||tt(Ze);const bt=g,Ve=Ze.renderer;Ve.bgColor=[...bt.bgColor],Ve.setAtlasEnabled(te.atlas_enabled&&Ze.atlas!==null),Ve.setLegacyRenderer(te.legacy_renderer),Ve.setOpaqueThresh(te.opaque_thresh),Ve.setTwoPass(te.two_pass),Ve.setOverdrawMax(te.overdraw_max),Ve.setOverdrawMode(te.overdraw==="off"?0:te.overdraw==="raster"?2:1),Ve.setMsaa(te.msaa),Ve.setFetchById(te.fetch_by_id);{const St=Ze.pc.surfel_data,ht=St.length/8;let Vt=0,Ut=0,An=0;for(let At=0;At<ht;At++)Vt+=St[At*8],Ut+=St[At*8+1],An+=St[At*8+2];Ve.setBfcParams(te.bfc_cos,ht>0?[Vt/ht,Ut/ht,An/ht]:[0,0,0])}Gc(Ze.pc.feature_mode,void 0,void 0,!1),Ic(Ze.pc.K,void 0,void 0,!1),wn(o.width,o.height,void 0,void 0,!1),vr(a,Ve.render_settings_buffer),g=Ve,G=Ve,Z=Ze.pc,H=Ze.atlas,y=Z.num_points.toLocaleString(),me=Oe,He(),ye(),console.log(`[A/B] active = ${Oe} (${Oe==="a"?L:Q}): ${Z.num_points} surfels, feature_mode ${Z.feature_mode}, EWA rows ${rr(Z)}`)};nt=()=>{if(me==="a"){if(pe.b){mt("b");return}Nn(`loading ${Q} ...`),Me().then(()=>{mt("b"),jt()}).catch(Oe=>{jt(),console.error("[A/B] B failed:",Oe),ye(`B failed: ${(Oe==null?void 0:Oe.message)??Oe}`)})}else mt("a")},ge.addEventListener("click",()=>nt()),document.body.appendChild(ge),ye(),F.get("side")==="b"?nt():re||setTimeout(()=>{Me().then(Oe=>{Oe.renderer||tt(Oe)}).catch(Oe=>console.warn("[A/B] preload failed:",Oe))},1500),window.__halloumiAB={get side(){return me},toggle:()=>nt(),get bReady(){var Oe;return!!((Oe=pe.b)!=null&&Oe.renderer)}}}if(H&&(ee||be))if(ee){const L={};L[`A${Ge(H)} · bundle`]="A",L[`B${Ge(ee)} · atlas2`]="B";const Q={atlas:"A"};we.addInput(Q,"atlas",{label:"Atlas source",options:L}).on("change",pe=>{const me=pe.value==="B"?ee:H;g.setAtlas(me),Ie=Ge(me),Je.label=`Texture${Ie}`,Ke(),console.log(`[atlas2] now sampling ${pe.value}${Ie}`)})}else{const L={note:be};we.addMonitor(L,"note",{label:"Atlas B",multiline:!0,lineCount:2})}const ct=H!==null&&(H.meta.probe_mode|0)>0;if(g.hasMips&&ct)g.setMipMode(te.mips),we.addInput(te,"mips",{label:"Mips (trilinear)"}).on("change",L=>g.setMipMode(L.value));else if(g.hasMips){const L=F.get("mipbias"),Q={mode:L==="0"||L==="1"||L==="2"?L:"off"},pe=me=>{me==="off"?g.setMipMode(!1):(g.setMipLodBias(Number(me)),g.setMipMode(!0)),console.log(`[mips] ${me==="off"?"off (level 0 only)":`on, bias ${me}`}`)};pe(Q.mode),we.addInput(Q,"mode",{label:"Atlas mips",options:{"off (level 0)":"off","bias 0 (full)":"0","bias 1":"1","bias 2":"2"}}).on("change",me=>pe(me.value))}const je=we.addFolder({title:"🔬 Surfel math (A/B)",expanded:!0});je.addInput(te,"surfel_math",{label:"Surfel math",options:{"Conic (default)":"conic","Ray-splat":"raysplat",Centred:"centred"}}).on("change",L=>ts({raysplat:L.value==="raysplat",centred:L.value==="centred"},a,g.render_settings_buffer));const st=globalThis.__gpuAdapterInfo??{},rt={s:`${st.vendor??"?"} / ${st.architecture??"?"}
${st.device||st.description||"?"}`};je.addMonitor(rt,"s",{label:"GPU",multiline:!0,lineCount:2}),je.addInput(te,"hyp_legacy",{label:"Hyp-rect legacy"}).on("change",L=>ts({hypLegacy:L.value},a,g.render_settings_buffer)),je.addInput(te,"two_pass",{label:"Two-pass (layer)"}).on("change",L=>g.setTwoPass(L.value)),je.addInput(te,"opaque_thresh",{label:"Layer α >",min:.05,max:.99,step:.01}).on("change",L=>g.setOpaqueThresh(L.value)),je.addInput(te,"overdraw",{label:"Overdraw view",options:{Off:"off","Shaded fragments":"shaded","Rasterized fragments":"raster"}}).on("change",L=>g.setOverdrawMode(L.value==="shaded"?1:L.value==="raster"?2:0)),je.addInput(te,"overdraw_max",{label:"Overdraw scale",min:4,max:256,step:1}).on("change",L=>g.setOverdrawMax(L.value));const Ye={s:"—"};je.addMonitor(Ye,"s",{label:"Overdraw",multiline:!0,lineCount:2}),setInterval(()=>{if(g.overdrawModeValue===0){Ye.s="—";return}g.readOverdrawStats().then(L=>{L&&(Ye.s=`mean ${L.mean.toFixed(1)} frag/px · ${L.meanCovered.toFixed(1)} on covered
max ${L.max} · covered ${(L.coveredFrac*100).toFixed(0)} % of pixels`)}).catch(L=>console.warn("[overdraw] readback failed:",L))},500),we.addInput(te,"legacy_renderer",{label:"Legacy renderer"}).on("change",L=>g.setLegacyRenderer(L.value)),we.addInput(te,"fetch_by_id",{label:"Fetch-by-id (frag)"}).on("change",L=>{g.setFetchById(L.value);try{localStorage.setItem("halloumi.fetch_by_id",L.value?"1":"0")}catch{}}),we.addButton({title:"🔁 Switch to WebGL2 renderer"}).on("click",()=>pr("webgl")),te.msaa=F.get("msaa")==="1",te.msaa&&g.setMsaa(!0),we.addInput(te,"msaa",{label:"MSAA 4×"}).on("change",L=>g.setMsaa(L.value));const it={aspect:"canvas"},Qe=we.addFolder({title:"📸 Screenshot",expanded:!1});Qe.addInput(it,"aspect",{label:"Aspect",options:{Canvas:"canvas","16:9":"16:9","3:2":"3:2","4:3":"4:3","1:1":"1:1","9:16":"9:16","21:9":"21:9"}});const at={s:"pick a size to capture"};Qe.addMonitor(at,"s",{label:"Status",interval:250,multiline:!0,lineCount:2});const lt=[["SD",854],["HD",1280],["FHD",1920],["QHD",2560],["4K",3840],["8K",7680]];let Pt=null;function ft(L){let Q;if(it.aspect==="canvas")Q=o.width/o.height;else{const[ye,Me]=it.aspect.split(":").map(Number);Q=ye/Me}const pe=a.limits.maxTextureDimension2D;let me,Ce;if(L==="canvas"&&it.aspect==="canvas")me=o.width,Ce=o.height;else{const ye=L==="canvas"?Math.max(o.width,o.height):L;Q>=1?(me=ye,Ce=Math.round(ye/Q)):(Ce=ye,me=Math.round(ye*Q))}const ge=Math.min(1,pe/Math.max(me,Ce));return me=Math.max(2,Math.round(me*ge)&-2),Ce=Math.max(2,Math.round(Ce*ge)&-2),[me,Ce]}function _t(L,Q){const pe=URL.createObjectURL(L),me=document.createElement("a");me.href=pe,me.download=Q,document.body.appendChild(me),me.click(),me.remove(),setTimeout(()=>URL.revokeObjectURL(pe),1e4)}async function zt(L,Q){var ye;const pe=(L.size/1048576).toFixed(1),me=window;if(typeof me.showSaveFilePicker=="function")try{const Me=await me.showSaveFilePicker({suggestedName:Q,types:[{description:"PNG image",accept:{"image/png":[".png"]}}]}),tt=await Me.createWritable();return await tt.write(L),await tt.close(),`saved ${Me.name??Q} (${pe} MB) where you chose`}catch(Me){if((Me==null?void 0:Me.name)==="AbortError")return"save cancelled — use ⬇ Download last"}const Ce=new File([L],Q,{type:"image/png"}),ge=navigator;if(ge.share&&((ye=ge.canShare)!=null&&ye.call(ge,{files:[Ce]})))try{return await ge.share({files:[Ce],title:Q}),`shared ${Q} (${pe} MB) via share sheet`}catch(Me){if((Me==null?void 0:Me.name)==="AbortError")return"share cancelled — use ⬇ Download last"}return _t(L,Q),`downloaded ${Q} (${pe} MB) to your browser's Downloads folder`}async function Ot(L){if(_)return;const[Q,pe]=ft(L);at.s=`rendering ${Q}×${pe}…`;const me=o.width,Ce=o.height;f.setRenderSize(Q,pe),wn(Q,pe,a,g.render_settings_buffer);const ge=a.createTexture({size:[Q,pe,1],format:N,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.COPY_SRC}),ye=Math.ceil(Q*4/256)*256,Me=a.createBuffer({size:ye*pe,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),tt=a.createCommandEncoder({label:"screenshot"});g.frame(tt,ge.createView(),!1),tt.copyTextureToBuffer({texture:ge},{buffer:Me,bytesPerRow:ye,rowsPerImage:pe},[Q,pe,1]),a.queue.submit([tt.finish()]),f.clearRenderSize(),wn(me,Ce,a,g.render_settings_buffer);try{await Me.mapAsync(GPUMapMode.READ);const mt=new Uint8Array(Me.getMappedRange()),kt=new Uint8ClampedArray(Q*pe*4);for(let ht=0;ht<pe;ht++)kt.set(mt.subarray(ht*ye,ht*ye+Q*4),ht*Q*4);for(let ht=3;ht<kt.length;ht+=4)kt[ht]=255;Me.unmap();const Oe=document.createElement("canvas");Oe.width=Q,Oe.height=pe,Oe.getContext("2d").putImageData(new ImageData(kt,Q,pe),0,0);const Ze=await new Promise((ht,Vt)=>Oe.toBlob(Ut=>Ut?ht(Ut):Vt(new Error("toBlob failed")),"image/png")),bt=(new URLSearchParams(window.location.search).get("bundle")??"halloumi").split("/").pop().replace(/\.(bitymi|ply)$/i,""),Ve=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),St=`${bt}_${Q}x${pe}_${Ve}.png`;Pt={blob:Ze,name:St},at.s=await zt(Ze,St)}catch(mt){console.error("[screenshot]",mt),at.s=`failed: ${mt}`}finally{Me.destroy(),ge.destroy()}}{const L=document.createElement("div");L.style.cssText="display:flex;gap:4px;padding:4px 6px;flex-wrap:wrap;";const Q=(me,Ce,ge)=>{const ye=document.createElement("button");ye.className="tp-btnv_b",ye.textContent=me,ye.title=Ce,ye.style.cssText="flex:1 1 auto;min-width:44px;height:26px;padding:0 6px;",ye.addEventListener("click",ge),L.appendChild(ye)};Q("Canvas","current canvas size",()=>{Ot("canvas")});for(const[me,Ce]of lt)Q(me,`${Ce} px long edge`,()=>{Ot(Ce)});(Qe.element.querySelector(".tp-fldv_c")??Qe.element).appendChild(L)}Qe.addButton({title:"⬇ Download last"}).on("click",()=>{if(!Pt){at.s="nothing captured yet";return}_t(Pt.blob,Pt.name),at.s=`downloaded ${Pt.name} to your browser's Downloads folder`}),we.addButton({title:"🎯 Reset camera"}).on("click",()=>{if(J.length>0)f.set_preset(J[0]);else{const L=Z.bbox.max[0]-Z.bbox.min[0],Q=Z.bbox.max[1]-Z.bbox.min[1],pe=Z.bbox.max[2]-Z.bbox.min[2],Ce=.5*Math.sqrt(L*L+Q*Q+pe*pe)*.5;W.set(De[0]-Ce,De[1]-Ce,De[2]-Ce,f.position);const ge=W.create(Ce,Ce,Ce);W.normalize(ge,ge);const ye=W.create();W.cross(W.create(0,1,0),ge,ye),W.normalize(ye,ye);const Me=W.create();W.cross(ge,ye,Me);const tt=Ct.create(ye[0],Me[0],ge[0],ye[1],Me[1],ge[1],ye[2],Me[2],ge[2]);vt.fromMat3(tt,f.rotation),f.update_buffer()}b.resetToCamera(),Re()});const Tt={result:"— click Benchmark —"},Lt=we.addMonitor(Tt,"result",{label:"Bench",interval:500,multiline:!0,lineCount:4});Lt.hidden=!0;const $t={bicycle:{w:1237,h:822,fovY:2*Math.atan(3286/(2*4627.3))},flowers:{w:1256,h:828,fovY:2*Math.atan(3312/(2*4285.5))},garden:{w:1297,h:840,fovY:2*Math.atan(3361/(2*3852.4))},stump:{w:1245,h:825,fovY:2*Math.atan(3300/(2*4528.1))},treehill:{w:1267,h:832,fovY:2*Math.atan(3326/(2*4205.6))},bonsai:{w:1559,h:1039,fovY:2*Math.atan(2078/(2*3222.7))},counter:{w:1558,h:1038,fovY:2*Math.atan(2076/(2*3192.7))},kitchen:{w:1558,h:1039,fovY:2*Math.atan(2078/(2*3240.8))},room:{w:1557,h:1038,fovY:2*Math.atan(2075/(2*3174))}};function Ft(){const Q=((new URLSearchParams(window.location.search).get("bundle")??"").split("/").pop()??"").toLowerCase();for(const pe of Object.keys($t))if(Q.startsWith(pe))return pe;return null}const Bt=document.createElement("div");Bt.id="bench-overlay",Bt.style.cssText=["position:fixed","top:50%","left:50%","transform:translate(-50%,-50%)","background:rgba(0,0,0,0.9)","color:#fff","padding:24px 32px","border-radius:8px","font-family:monospace","font-size:14px","min-width:340px","text-align:left","box-shadow:0 4px 24px rgba(0,0,0,0.6)","display:none","z-index:9999","pointer-events:none"].join(";"),document.body.appendChild(Bt);function Nt(L,Q,pe){const me=Math.floor(Q/Math.max(1,pe)*100),Ce=32,ge=Math.floor(Q/Math.max(1,pe)*Ce),ye="█".repeat(ge)+"░".repeat(Ce-ge);Bt.innerHTML=`<div style="margin-bottom:10px;font-weight:bold">📊 ${L}</div><div>[${ye}] ${me}%</div><div style="margin-top:6px;font-size:11px;opacity:0.7">${Q} / ${pe} frames · offscreen · pipelined · no vsync</div>`,Bt.style.display="block"}function ot(){Bt.style.display="none"}async function ln(L=10,Q=200){if(_)return;if(J.length===0){Tt.result="no cameras to benchmark";return}_=!0;const pe=q,me=te.animate,Ce=new Float32Array(f.position),ge=new Float32Array(f.rotation);q=!1,te.animate=!1,we.refresh(),v=null,b.enabled=!1;const ye=Ft(),Me=ye?$t[ye]:null,tt=(Me==null?void 0:Me.w)??o.width,mt=(Me==null?void 0:Me.h)??o.height,kt=(Me==null?void 0:Me.fovY)??f.getFov(),Oe=ye?`${ye} · ${tt>=4e3/4+500?"images_4":"images_2"}`:"custom",Ze=o.width,bt=o.height,Ve=f.getFov();o.width=tt,o.height=mt,f.setFov(kt),wn(tt,mt,a,g.render_settings_buffer);const St=a.createTexture({size:[tt,mt,1],format:N,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING}),ht=St.createView(),Vt=()=>{const Et=a.createCommandEncoder();g.frame(Et,ht,!1),a.queue.submit([Et.finish()])},Ut=()=>new Promise(Et=>setTimeout(Et,0)),An=20,At=async(Et,pn)=>{let hn=0,Wt=0;for(Nt(pn,0,Et),await Ut();Wt<Et;){const Mn=Math.min(An,Et-Wt),Ht=performance.now();for(let Rn=0;Rn<Mn;Rn++)f.set_preset(J[(Wt+Rn)%J.length]),Vt();await a.queue.onSubmittedWorkDone();const Ms=performance.now();hn+=Ms-Ht,Wt+=Mn,Nt(pn,Wt,Et),await Ut()}return hn};try{await At(L,"Warming up");const pn=await At(Q,"Benchmarking")/Q,hn=1e3/pn,Wt=Z.num_points??Z.surfel_data.length/8,Mn=(kt*180/Math.PI).toFixed(1),Ht=`${hn.toFixed(1)} FPS  (${pn.toFixed(2)} ms/frame)
${tt}×${mt} · fovY ${Mn}° · ${Oe}
${Wt.toLocaleString()} surfels · ${L}w+${Q}b · pipelined`+(g.hasMips?` · ${g._mipMode?`mips bias ${g.mipLodBias}`:"mips off"}`:"");Tt.result=Ht,Lt.hidden=!1,console.log("[bench]",Ht.replace(/\n/g,"  |  "))}catch(Et){console.error("[bench] failed:",Et),Tt.result=`bench failed: ${Et}`,Lt.hidden=!1}finally{ot(),St.destroy(),o.width=Ze,o.height=bt,f.setFov(Ve),wn(Ze,bt,a,g.render_settings_buffer),f.position.set(Ce),f.rotation.set(ge),f.update_buffer(),b.enabled=!pe,q=pe,te.animate=me,we.refresh(),_=!1}}we.addButton({title:"📊 Benchmark"}).on("click",()=>ln());const En=Math.PI/2,pt=new Set,kn=["KeyW","KeyA","KeyS","KeyD","KeyQ","KeyE","KeyZ","KeyX","ShiftLeft","ShiftRight"],qt=L=>{const Q=L.target;return!!Q&&(Q.tagName==="INPUT"||Q.tagName==="TEXTAREA"||Q.isContentEditable)},Cn=()=>pt.has("ShiftLeft")||pt.has("ShiftRight");document.addEventListener("keyup",L=>{pt.delete(L.code)}),window.addEventListener("blur",()=>pt.clear()),document.addEventListener("visibilitychange",()=>{document.hidden&&pt.clear()});const os=L=>{if(pt.size===0||te.animate)return;const Q=Cn()?3:1;let pe=0;pt.has("KeyX")&&(pe+=1),pt.has("KeyZ")&&(pe-=1),pe!==0&&(b.addRoll(pe*En*Q*L),v=null);const me=f.rotation,Ce=[me[0],me[4],me[8]],ge=[me[1],me[5],me[9]],ye=[me[2],me[6],me[10]],Me=b.center,mt=(b.sceneRadius??Math.max(.05,W.distance(f.position,Me)))*.5*Q*L;let kt=0,Oe=0,Ze=0;if(pt.has("KeyW")&&(Ze+=1),pt.has("KeyS")&&(Ze-=1),pt.has("KeyD")&&(kt+=1),pt.has("KeyA")&&(kt-=1),pt.has("KeyE")&&(Oe+=1),pt.has("KeyQ")&&(Oe-=1),!kt&&!Oe&&!Ze)return;const bt=[0,0,0];for(let Ve=0;Ve<3;Ve++)bt[Ve]=(Ce[Ve]*kt+ge[Ve]*Oe+ye[Ve]*Ze)*mt;for(let Ve=0;Ve<3;Ve++)f.position[Ve]+=bt[Ve],Me[Ve]+=bt[Ve];f.update_buffer(),v=null};document.addEventListener("keydown",L=>{if(qt(L))return;const Q=L.key,pe=Q.toLowerCase();if(L.ctrlKey||L.metaKey||L.altKey){pt.clear();return}if(kn.includes(L.code)&&!(L.shiftKey&&L.code==="KeyD")){pt.add(L.code),L.preventDefault();return}if(pe==="t"){qe();return}if(pe==="b"){nt();return}if(Q>="0"&&Q<="9"&&J.length>0){const me=parseInt(Q);me<J.length&&oe(me)}else Q==="ArrowLeft"||Q==="PageUp"?(oe(E-1),L.preventDefault()):Q==="ArrowRight"||Q==="PageDown"?(oe(E+1),L.preventDefault()):L.shiftKey&&pe==="d"&&g.debugReadSortedIndices(30).catch(me=>console.error("[DEBUG] readback failed:",me))});function as(L,Q){const pe=o.getBoundingClientRect(),me=window.devicePixelRatio||1;return[(L-pe.left)*me,(Q-pe.top)*me]}o.addEventListener("dblclick",L=>{const[Q,pe]=as(L.clientX,L.clientY);Se(Q,pe)});let Tn=0,ls=0,en=0;o.addEventListener("pointerdown",L=>{if(L.pointerType!=="touch")return;const Q=performance.now(),pe=Q-Tn,me=L.clientX-ls,Ce=L.clientY-en;if(pe>0&&pe<300&&me*me+Ce*Ce<40*40){const[ge,ye]=as(L.clientX,L.clientY);Se(ge,ye),Tn=0}else Tn=Q,ls=L.clientX,en=L.clientY});function cs(){return R}let us=performance.now(),Bn=60,qn=Promise.resolve(),cn=0,ds=0;function un(){dn().catch(L=>{ds++<5&&console.error("[frame] exception (render loop kept alive):",L),requestAnimationFrame(un)})}async function dn(){var Ce;const L=performance.now(),Q=Math.min((L-us)/1e3,.1);if(us=L,Q>0){const ge=((Ce=g.lastStageBreakdownMs)==null?void 0:Ce.total)??0,ye=ge>.5?1e3/ge:1/Q;Bn=Bn*.9+ye*.1,k.stats=`${y} surfels · ${Math.round(Bn)} fps`}if(_){requestAnimationFrame(un);return}if(cs()&&(v||q)&&(v=null,b.resetToCamera(),Re(),q&&(q=!1,te.animate=!1,we.refresh())),q&&te.animateMode==="circle"&&ne){xe+=Q/Ae,xe>=1&&(xe-=1);const ge=lo(ne,xe);f.set_preset(ge),b.update(Q);const ye=a.createCommandEncoder();g.frame(ye,r.getCurrentTexture().createView()),a.queue.submit([ye.finish()]),cn++,cn===2&&jt(),requestAnimationFrame(un);return}if(v){v.t+=Q/v.duration;const ge=Math.min(1,v.t),ye=ge*ge*(3-2*ge);W.lerp(v.fromPos,v.toPos,ye,f.position),dt.slerp(v.fromQuat,v.toQuat,ye,c),Ct.fromQuat(c,m),vt.fromMat3(m,f.rotation),f.update_buffer(),v.t>=1&&(f.set_preset(v.target),v=null,q?J.length>0&&(d=i):(b.resetToCamera(),Re()))}else if(q&&!cs()){const ge=te.animateMode==="circle"&&ae.length>0,ye=ge?ae:J;if(ye.length!==0){if(d-=Q,d<=0){const tt=((ge?p:E)+1)%ye.length;ge?p=tt:E=tt;const mt=ge?S/8:S;K(ye[tt],mt),ge||(P.view=`${E+1} / ${J.length}: ${J[E].img_name??E}`)}}}os(Q),b.update(Q),M(),X(),await qn;const pe=a.createCommandEncoder(),me=r.getCurrentTexture().createView();g.frame(pe,me),a.queue.submit([pe.finish()]),qn=a.queue.onSubmittedWorkDone(),cn++,cn===2&&jt(),requestAnimationFrame(un)}requestAnimationFrame(un)}}const fu=o=>`#version 300 es
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
}`;function po(o){return{bc7:!!o.getExtension("EXT_texture_compression_bptc"),astc:!!o.getExtension("WEBGL_compressed_texture_astc")}}function _u(o,r){const a=po(o),w=r.format===2||r.format===7,f=r.format===3||r.format===8;let b=0;w&&a.bc7?b=36492:f&&a.astc&&(b=37808);const R=ee=>(console.warn("[gl]",ee),{tex:null,status:ee,slice_width:r.slice_width,layer_h:r.layer_h,n_slices:0,rects:r.rects_expanded});if(!b)return R(`atlas is ${w?"BC7":f?"ASTC":`format ${r.format}`}; this GPU has bc7=${a.bc7} astc=${a.astc}`);let T=o.getParameter(o.MAX_TEXTURE_SIZE);try{const ee=parseInt(new URLSearchParams(window.location.search).get("maxtex")??"",10);ee>=256&&(T=Math.min(T,ee-ee%4))}catch{}const C=o.getParameter(o.MAX_ARRAY_TEXTURE_LAYERS),{width:M,n_layers:N,n_cols:G,layer_cuts:I,column_cuts:j,atlas_bytes:ce}=r,z=M/4*16,O=r.rects_expanded,X=O.length/5,F=[];let se=0,q=0,de=0,_e=!1;const fe=Array.from({length:G*N},()=>[]);let ie=0,ue=0;for(let ee=0;ee<X;ee++){const be=O[ee*5+4]|0,De=O[ee*5+2],Se=O[ee*5+3];be>=0&&be<fe.length&&De>0&&(fe[be].push(ee),ie=Math.max(ie,De),ue=Math.max(ue,Se))}ie=Math.ceil(ie/4)*4,ue=Math.ceil(ue/4)*4;const Te=(ee,be)=>{if(ee<=T)return[0,ee];const De=T-be;if(De<64)throw new Error(`atlas re-shard: tiles up to ${be} px do not fit MAX_TEXTURE_SIZE ${T}`);const Se=Math.ceil(ee/De),Re=[0];for(let re=1;re<Se;re++)Re.push(Math.round(ee*re/Se/4)*4);return Re.push(ee),Re},le=(ee,be,De,Se)=>Math.min(ee[be+1]-ee[be]+De,Se-ee[be]);try{for(let ee=0;ee<G;ee++)for(let be=0;be<N;be++){const De=j[ee+1]-j[ee],Se=I[be+1]-I[be],Re=Te(De,ie),re=Te(Se,ue);(Re.length>2||re.length>2)&&(_e=!0);for(let ve=0;ve<Re.length-1;ve++)q=Math.max(q,le(Re,ve,ie,De));for(let ve=0;ve<re.length-1;ve++)de=Math.max(de,le(re,ve,ue,Se));F.push({c:ee,l:be,xcuts:Re,ycuts:re,base:se}),se+=(Re.length-1)*(re.length-1)}}catch(ee){return R(String(ee))}if(q=Math.ceil(q/4)*4,de=Math.ceil(de/4)*4,se>C)return R(`atlas needs ${se} array layers, GPU allows ${C}`);const te=q/4*16,we=te*(de/4);let Le;try{Le=new Uint8Array(we*se)}catch(ee){return R(`atlas staging buffer ${(we*se/2**20).toFixed(0)} MB failed: ${ee}`)}let ke=O;_e&&(ke=new Float32Array(O));for(const ee of F){const be=ee.xcuts.length-1,De=ee.ycuts.length-1,Se=j[ee.c+1]-j[ee.c],Re=I[ee.l+1]-I[ee.l];for(let re=0;re<De;re++)for(let ve=0;ve<be;ve++){const Pe=ee.base+re*be+ve,U=j[ee.c]+ee.xcuts[ve],Y=le(ee.xcuts,ve,ie,Se),g=I[ee.l]+ee.ycuts[re],l=le(ee.ycuts,re,ue,Re),_=Pe*we,h=U/4,y=Y/4;for(let k=0;k<l/4;k++){const x=(g/4+k)*z+h*16;Le.set(ce.subarray(x,x+y*16),_+k*te)}}if(_e)for(const re of fe[ee.c*N+ee.l]){const ve=O[re*5],Pe=O[re*5+1];let U=0;for(;U<be-1&&ve>=ee.xcuts[U+1];)U++;let Y=0;for(;Y<De-1&&Pe>=ee.ycuts[Y+1];)Y++;ke[re*5]=ve-ee.xcuts[U],ke[re*5+1]=Pe-ee.ycuts[Y],ke[re*5+4]=ee.base+Y*be+U}}const Z=o.createTexture();o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D_ARRAY,Z),o.compressedTexImage3D(o.TEXTURE_2D_ARRAY,0,b,q,de,se,0,Le),o.texParameteri(o.TEXTURE_2D_ARRAY,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D_ARRAY,o.TEXTURE_MAG_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D_ARRAY,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D_ARRAY,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE);const J=o.getError();if(J!==o.NO_ERROR){o.deleteTexture(Z);const ee=J===o.OUT_OF_MEMORY?"OUT_OF_MEMORY":J===o.INVALID_VALUE?"INVALID_VALUE":`0x${J.toString(16)}`;return R(`atlas upload failed: GL ${ee} (${q}x${de}x${se} ${b===36492?"BC7":"ASTC"}, ${(we*se/2**20).toFixed(0)} MB, max tex ${T})`)}const H=`${b===36492?"BC7":"ASTC"} atlas ${q}x${de}x${se}${_e?` (re-sharded for max tex ${T})`:""}`;return{tex:Z,status:H,slice_width:q,layer_h:de,n_slices:se,rects:ke}}const Oi=28,ss=8,mu=o=>`#version 300 es
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
        float lg[${ss}];
        float lmax = -3.4e38;
        for (int k = 0; k < ${ss}; k++) {
            if (k >= u_K) break;
            vec4 st = texelFetch(u_sv, tc(base + k), 0);
            vec3 sd = st.xyz * inversesqrt(max(dot(st.xyz, st.xyz), 1e-20)) - vd;
            lg[k] = -exp(st.w) * length(sd);
            lmax = max(lmax, lg[k]);
        }
        float ws = 0.0;
        for (int k = 0; k < ${ss}; k++) {
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
}`,vu=`#version 300 es
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
}`;class Fi{constructor(r,a,w,f={}){D(this,"gl");D(this,"n");D(this,"K");D(this,"twLog2");D(this,"pre");D(this,"draw");D(this,"preU",{});D(this,"drawU",{});D(this,"texSurf");D(this,"texSv");D(this,"texUv");D(this,"idBuf");D(this,"recBuf");D(this,"preVao");D(this,"drawVao");D(this,"tf");D(this,"atlasTex",null);D(this,"atlasStatus","no atlas");D(this,"atlasUpload",null);D(this,"atlasOn",!1);D(this,"sd");D(this,"ok");D(this,"keyF");D(this,"keyU");D(this,"ids");D(this,"ids2");D(this,"keys2");D(this,"hist");D(this,"cnt",new Uint32Array(256));D(this,"bgColor",[0,0,0]);D(this,"scaling",1);D(this,"lastStats",{visible:0,cpuMs:0});D(this,"only",-1);D(this,"dbg",0);if(this.gl=r,a.feature_mode!==0)throw new Error("WebGL2 backend supports SV colour only (feature_mode 0)");if(a.K>ss)throw new Error(`WebGL2 backend supports K <= ${ss} SV sites (bundle has ${a.K})`);this.n=a.num_points,this.K=a.K,this.sd=a.surfel_data;const b=this.n,R=r.getParameter(r.MAX_TEXTURE_SIZE);this.twLog2=R>=4096?12:11;const T=1<<this.twLog2,C=new Uint32Array(a.surfel_data.buffer,a.surfel_data.byteOffset,b*8);for(let z=0;z<b;z++)if(C[z*8+7]>>>17&1)throw new Error("WebGL2 backend does not support --tex3d bundles (3D kernels); use WebGPU");this.ok=new Uint8Array(b);for(let z=0;z<b;z++){const O=bu(C[z*8+3]);this.ok[z]=O>1/255&&(C[z*8+7]>>>16&1)===1?1:0}this.keyF=new Float32Array(b),this.keyU=new Uint32Array(this.keyF.buffer),this.ids=new Uint32Array(b),this.ids2=new Uint32Array(b),this.keys2=new Uint32Array(b),this.hist=new Uint32Array(256*4);const M=z=>Math.max(1,Math.ceil(b*z/T)),N=(z,O,X,F,se)=>{const q=r.createTexture();return r.bindTexture(r.TEXTURE_2D,q),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.texImage2D(r.TEXTURE_2D,0,z,T,M(F),0,O,X,se),q};{const z=M(2),O=new Uint32Array(T*z*4);O.set(C),this.texSurf=N(r.RGBA32UI,r.RGBA_INTEGER,r.UNSIGNED_INT,2,O)}{const z=this.K,O=M(2*z),X=new Float32Array(T*O*4),F=a.sv_params,se=z*7;for(let q=0;q<b;q++){const de=q*se,_e=q*2*z*4;for(let fe=0;fe<z;fe++){X[_e+fe*4]=F[de+fe*3],X[_e+fe*4+1]=F[de+fe*3+1],X[_e+fe*4+2]=F[de+fe*3+2],X[_e+fe*4+3]=F[de+z*6+fe];const ie=_e+(z+fe)*4;X[ie]=F[de+z*3+fe*3],X[ie+1]=F[de+z*3+fe*3+1],X[ie+2]=F[de+z*3+fe*3+2]}}this.texSv=N(r.RGBA32F,r.RGBA,r.FLOAT,2*z,X)}const G=w?_u(r,w):null;G&&(this.atlasStatus=G.status),this.atlasUpload=G;{const z=M(2),O=new Float32Array(T*z*4);if(w&&G&&G.tex){const X=G.slice_width,F=G.layer_h,se=w.uv_extent,q=G.rects;for(let de=0;de<b;de++){if(!this.ok[de])continue;const _e=q[de*5],fe=q[de*5+1],ie=q[de*5+2],ue=q[de*5+3],Te=de*8;O[Te]=(_e+.5*Math.max(ie,1))/X,O[Te+1]=(fe+.5*Math.max(ue,1))/F,O[Te+2]=ie/(2*se)/X,O[Te+3]=ue/(2*se)/F,O[Te+4]=q[de*5+4]}}this.texUv=N(r.RGBA32F,r.RGBA,r.FLOAT,2,O)}const I=(z,O)=>{const X=r.createShader(z);if(r.shaderSource(X,O),r.compileShader(X),!r.getShaderParameter(X,r.COMPILE_STATUS))throw new Error("GLSL: "+r.getShaderInfoLog(X));return X},j=z=>{if(r.linkProgram(z),!r.getProgramParameter(z,r.LINK_STATUS))throw new Error("GLSL link: "+r.getProgramInfoLog(z))};this.pre=r.createProgram(),r.attachShader(this.pre,I(r.VERTEX_SHADER,mu(this.twLog2))),r.attachShader(this.pre,I(r.FRAGMENT_SHADER,`#version 300 es
precision mediump float;
out vec4 o;
void main(){ o = vec4(0.0); }`)),r.transformFeedbackVaryings(this.pre,["v_tu_op","v_tv_sh","v_tw_ly","v_col_dc","v_ctr_ext","v_uv","v_dp"],r.INTERLEAVED_ATTRIBS),j(this.pre);for(const z of["u_surf","u_sv","u_uv","u_R","u_t","u_eye","u_vp","u_focal","u_zfar","u_scaling","u_sh_bias","u_K"])this.preU[z]=r.getUniformLocation(this.pre,z);const ce=!(w&&w.kernel_type===0)&&a.kernel_type!==0;this.draw=r.createProgram(),r.attachShader(this.draw,I(r.VERTEX_SHADER,vu)),r.attachShader(this.draw,I(r.FRAGMENT_SHADER,fu(ce))),j(this.draw);for(const z of["u_vp","u_atlas","u_atlas_on","u_tex","u_dims","u_dbg"])this.drawU[z]=r.getUniformLocation(this.draw,z);try{const z=new URLSearchParams(window.location.search);this.only=parseInt(z.get("only")??"-1",10),this.dbg=parseInt(z.get("dbg")??"0",10)|0}catch{}this.idBuf=r.createBuffer(),r.bindBuffer(r.ARRAY_BUFFER,this.idBuf),r.bufferData(r.ARRAY_BUFFER,b*4,r.DYNAMIC_DRAW),this.recBuf=r.createBuffer(),r.bindBuffer(r.ARRAY_BUFFER,this.recBuf),r.bufferData(r.ARRAY_BUFFER,b*Oi*4,r.STREAM_COPY),r.bindBuffer(r.ARRAY_BUFFER,null),this.preVao=r.createVertexArray(),r.bindVertexArray(this.preVao),r.bindBuffer(r.ARRAY_BUFFER,this.idBuf),r.enableVertexAttribArray(0),r.vertexAttribIPointer(0,1,r.UNSIGNED_INT,0,0),r.bindVertexArray(null),this.drawVao=r.createVertexArray(),r.bindVertexArray(this.drawVao),r.bindBuffer(r.ARRAY_BUFFER,this.recBuf);for(let z=0;z<7;z++)r.enableVertexAttribArray(z),r.vertexAttribPointer(z,4,r.FLOAT,!1,Oi*4,z*16),r.vertexAttribDivisor(z,1);r.bindVertexArray(null),r.bindBuffer(r.ARRAY_BUFFER,null),this.tf=r.createTransformFeedback(),r.useProgram(this.pre),r.uniform1i(this.preU.u_surf,1),r.uniform1i(this.preU.u_sv,2),r.uniform1i(this.preU.u_uv,3),r.uniform1i(this.preU.u_K,this.K),r.uniform1f(this.preU.u_sh_bias,f.shBias??a.sh_bias),r.uniform1f(this.preU.u_scaling,this.scaling),r.useProgram(this.draw),r.uniform1i(this.drawU.u_atlas,0),r.uniform1i(this.drawU.u_atlas_on,0),r.uniform4f(this.drawU.u_tex,0,0,w?w.res_bias:0,w?w.uv_extent:4),w&&G&&G.tex&&(this.atlasTex=G.tex,this.atlasOn=!0,r.uniform1i(this.drawU.u_atlas_on,1),r.uniform4f(this.drawU.u_tex,w.atlas_scale,w.atlas_offset,w.res_bias,w.uv_extent),r.uniform2f(this.drawU.u_dims,G.slice_width,G.layer_h)),r.useProgram(null)}get hasAtlas(){return this.atlasTex!==null}get atlasEnabled(){return this.atlasOn}setAtlasEnabled(r){this.atlasTex&&(this.atlasOn=r,this.gl.useProgram(this.draw),this.gl.uniform1i(this.drawU.u_atlas_on,r?1:0))}setGaussianScaling(r){this.scaling=r,this.gl.useProgram(this.pre),this.gl.uniform1f(this.preU.u_scaling,r)}setShBias(r){this.gl.useProgram(this.pre),this.gl.uniform1f(this.preU.u_sh_bias,r)}render(r){const a=this.gl,w=this.n,f=r.rotation,b=r.eye,R=this.sd,T=this.ok,C=r.width,M=r.height,N=performance.now(),G=.5*M/Math.tan(r.fovY*.5),I=-(f[0]*b[0]+f[4]*b[1]+f[8]*b[2]),j=-(f[1]*b[0]+f[5]*b[1]+f[9]*b[2]),ce=-(f[2]*b[0]+f[6]*b[1]+f[10]*b[2]),z=.01,O=r.zfar??100,X=O/(O-z),F=-(O*z)/(O-z),se=2*G/C,q=2*G/M,de=f[0],_e=f[4],fe=f[8],ie=f[1],ue=f[5],Te=f[9],le=f[2],te=f[6],we=f[10],Le=this.keyF,ke=this.ids;let Z=0;for(let ee=0;ee<w;ee++){if(T[ee]===0||this.only>=0&&ee!==this.only)continue;const be=ee*8,De=R[be],Se=R[be+1],Re=R[be+2],re=le*De+te*Se+we*Re+ce;if(!(re>0))continue;const ve=X*re+F,Pe=ve/re;if(!(Pe>0&&Pe<1))continue;const U=1.2*re,Y=de*De+_e*Se+fe*Re+I;if(Math.abs(se*Y)>U)continue;const g=ie*De+ue*Se+Te*Re+j;Math.abs(q*g)>U||(Le[Z]=O-ve,ke[Z]=ee,Z++)}const J=this.radixSort(Z),H=performance.now()-N;return this.lastStats={visible:Z,cpuMs:H},Z===0?(a.viewport(0,0,C,M),a.clearColor(this.bgColor[0],this.bgColor[1],this.bgColor[2],1),a.clear(a.COLOR_BUFFER_BIT),0):(a.bindBuffer(a.ARRAY_BUFFER,this.idBuf),a.bufferSubData(a.ARRAY_BUFFER,0,J,0,Z),a.bindBuffer(a.ARRAY_BUFFER,null),a.useProgram(this.pre),a.activeTexture(a.TEXTURE1),a.bindTexture(a.TEXTURE_2D,this.texSurf),a.activeTexture(a.TEXTURE2),a.bindTexture(a.TEXTURE_2D,this.texSv),a.activeTexture(a.TEXTURE3),a.bindTexture(a.TEXTURE_2D,this.texUv),a.uniformMatrix3fv(this.preU.u_R,!1,[de,ie,le,_e,ue,te,fe,Te,we]),a.uniform3f(this.preU.u_t,I,j,ce),a.uniform3f(this.preU.u_eye,b[0],b[1],b[2]),a.uniform2f(this.preU.u_vp,C,M),a.uniform1f(this.preU.u_focal,G),a.uniform1f(this.preU.u_zfar,O),a.bindVertexArray(this.preVao),a.bindTransformFeedback(a.TRANSFORM_FEEDBACK,this.tf),a.bindBufferBase(a.TRANSFORM_FEEDBACK_BUFFER,0,this.recBuf),a.enable(a.RASTERIZER_DISCARD),a.beginTransformFeedback(a.POINTS),a.drawArrays(a.POINTS,0,Z),a.endTransformFeedback(),a.disable(a.RASTERIZER_DISCARD),a.bindBufferBase(a.TRANSFORM_FEEDBACK_BUFFER,0,null),a.bindTransformFeedback(a.TRANSFORM_FEEDBACK,null),a.bindVertexArray(null),a.viewport(0,0,C,M),a.clearColor(this.bgColor[0],this.bgColor[1],this.bgColor[2],1),a.clear(a.COLOR_BUFFER_BIT),a.enable(a.BLEND),a.blendFunc(a.ONE,a.ONE_MINUS_SRC_ALPHA),a.disable(a.DEPTH_TEST),a.useProgram(this.draw),a.uniform2f(this.drawU.u_vp,C,M),a.uniform1i(this.drawU.u_dbg,this.dbg),this.atlasTex&&(a.activeTexture(a.TEXTURE0),a.bindTexture(a.TEXTURE_2D_ARRAY,this.atlasTex)),a.bindVertexArray(this.drawVao),a.drawArraysInstanced(a.TRIANGLE_STRIP,0,4,Z),a.bindVertexArray(null),Z)}radixSort(r){const a=this.keyU,w=this.hist;w.fill(0);for(let M=0;M<r;M++){const N=a[M];w[N&255]++,w[256+(N>>>8&255)]++,w[512+(N>>>16&255)]++,w[768+(N>>>24)]++}let f=a,b=this.ids,R=this.keys2,T=this.ids2;const C=this.cnt;for(let M=0;M<4;M++){const N=M*8,G=M*256;let I=!1;for(let O=0;O<256;O++)if(w[G+O]===r){I=!0;break}if(I)continue;let j=0;for(let O=0;O<256;O++)C[O]=j,j+=w[G+O];for(let O=0;O<r;O++){const X=f[O],F=X>>>N&255,se=C[F]++;R[se]=X,T[se]=b[O]}const ce=f;f=R,R=ce;const z=b;b=T,T=z}return b}}function bu(o){const r=o&65535,a=r&32768?-1:1,w=r>>10&31,f=r&1023;return w===0?a*f*5960464477539063e-23:w===31?f?NaN:a*(1/0):a*(1+f/1024)*Math.pow(2,w-15)}const ir=o=>o.format===2||o.format===7,or=o=>o.format===3||o.format===8;async function Vi(o,r,a){const w=new URLSearchParams(window.location.search),f=new Cs(o,null),b=new ro(f),R=po(r);wt(`[gl] WebGL2 backend · bc7=${R.bc7} astc=${R.astc} · ${r.getParameter(r.RENDERER)}`);let T=null,C=null,M=[],N=null;const G={animate:w.get("animation")==="1",atlas_enabled:!0,render_scale:1,gaussian_scaling:1,bg:{r:0,g:0,b:0}},I=new to.Pane({title:"Config (WebGL2)",expanded:!0}),j={stats:"— loading —"};I.addMonitor(j,"stats",{label:"Stats",interval:200});const ce={s:a.gpuAvailable?"WebGL2 (WebGPU available)":"WebGL2 (no WebGPU here)"};I.addMonitor(ce,"s",{label:"Renderer"}),I.addButton({title:"🔁 Switch to WebGPU",disabled:!a.gpuAvailable}).on("click",()=>pr("webgpu"));let O=G.animate;b.enabled=!O,I.addInput(G,"animate",{label:"Animate"}).on("change",x=>{O=x.value,b.enabled=!O,O||(b.resetToCamera(),Z())}),I.addInput(G,"atlas_enabled",{label:"Texture"}).on("change",x=>T==null?void 0:T.setAtlasEnabled(x.value)),I.addInput(G,"render_scale",{label:"Render scale",min:.25,max:Math.max(1,window.devicePixelRatio||1),step:.05}).on("change",()=>q()),I.addInput(G,"gaussian_scaling",{label:"Surfel scale",min:.1,max:2,step:.05}).on("change",x=>T==null?void 0:T.setGaussianScaling(x.value)),I.addInput(G,"bg",{label:"Background",color:{type:"float"}}).on("change",x=>{T&&(T.bgColor=[x.value.r,x.value.g,x.value.b])});const X={s:"—"};I.addMonitor(X,"s",{label:"Atlas"}),I.addButton({title:"🎯 Reset camera"}).on("click",()=>J(0,!1));const F=document.createElement("button");F.textContent="Texture: on",Object.assign(F.style,{position:"fixed",top:"8px",right:"270px",zIndex:"1000",padding:"4px 8px",font:"12px system-ui, sans-serif",borderRadius:"4px",border:"1px solid #666",background:"rgba(20,20,30,0.8)",color:"#eee",cursor:"pointer"}),document.body.appendChild(F);const se=()=>{G.atlas_enabled=!G.atlas_enabled,T==null||T.setAtlasEnabled(G.atlas_enabled),F.textContent=`Texture: ${G.atlas_enabled?"on":"off"}`,I.refresh()};F.addEventListener("click",se);const q=()=>{const x=Math.max(.25,G.render_scale),S=Math.max(1,Math.ceil(x*o.clientWidth)),i=Math.max(1,Math.ceil(x*o.clientHeight));(o.width!==S||o.height!==i)&&(o.width=S,o.height=i),f.on_update_canvas()};new ResizeObserver(()=>q()).observe(o),q();const de=.4,_e=3,fe=.3;let ie=-1,ue=null,Te=0;const le=dt.create(),te=Ct.create(),we=x=>dt.fromMat(Ct.create(x[0],x[1],x[2],x[4],x[5],x[6],x[8],x[9],x[10])),Le=(x,S)=>{ue={fromPos:W.clone(f.position),toPos:W.clone(x.position),fromQuat:dt.normalize(we(f.rotation)),toQuat:dt.normalize(we(x.rotation)),target:x,t:0,duration:Math.max(.01,S)}},ke=document.createElement("span"),Z=()=>{if(!C)return;const x=uo(f,C.surfel_data);x!==null&&b.setOrbitDepth(x)},J=(x,S=!0)=>{if(M.length===0)return;ie=(x%M.length+M.length)%M.length;const i=M[ie];S?Le(i,de):(f.set_preset(i),b.resetToCamera(),Z()),ke.textContent=`${ie+1} / ${M.length}: ${M[ie].img_name??ie}`};let H=null;const ee=()=>{if(H||M.length===0)return;I.addSeparator(),H=document.createElement("div"),H.style.cssText="display:flex;gap:4px;align-items:center;padding:3px 6px;";const x=(S,i)=>{const v=document.createElement("button");return v.className="tp-btnv_b",v.textContent=S,v.style.cssText="flex:0 0 34px;height:24px;padding:0;",v.addEventListener("click",i),v};ke.style.cssText="flex:1 1 auto;font-size:11px;text-align:center;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;opacity:.85;",H.appendChild(x("◀",()=>J(ie-1))),H.appendChild(ke),H.appendChild(x("▶",()=>J(ie+1))),I.element.appendChild(H)};window.addEventListener("keydown",x=>{var S;((S=x.target)==null?void 0:S.tagName)!=="INPUT"&&(x.key==="ArrowLeft"||x.key==="PageUp"?J(ie-1):x.key==="ArrowRight"||x.key==="PageDown"?J(ie+1):x.key==="t"||x.key==="T"?se():x.key==="b"||x.key==="B"?Pe():x.key>="1"&&x.key<="9"&&J(parseInt(x.key,10)-1))});let be=0;const De=(x,S)=>{if(!C)return;const i=o.getBoundingClientRect(),v=fr((x-i.left)*o.width/i.width,(S-i.top)*o.height/i.height,o,f,C.surfel_data);v&&b.setOrbitPivot(v)};o.addEventListener("dblclick",x=>De(x.clientX,x.clientY)),o.addEventListener("pointerup",x=>{if(x.pointerType!=="touch")return;const S=performance.now();S-be<300&&De(x.clientX,x.clientY),be=S});const Se=w.get("bundle")??w.get("model_url");async function Re(x,S){Nn(`parsing ${S} ...`);try{const i=new TextDecoder().decode(new Uint8Array(x,0,8));let v=x,d=null,p=null;i===Ss&&({pcBuffer:v,camerasBuffer:d,atlasBuffer:p}=mr(x)),Dt("parsing surfels ..."),C=await Ci(new File([v],S));let c=null;if(p&&w.get("notex")!=="1"){c=Vn(p);const E=ir(c)&&R.bc7||or(c)&&R.astc;let P=w.get("atlas2");if(!E&&!P&&Se){const A=Se.match(/^(.*?)(_astc)?\.bitymi(\?.*)?$/);A&&(P=A[2]?`${A[1]}.bitymi${A[3]??""}`:`${A[1]}_astc.bitymi${A[3]??""}`)}if(!E&&P){Dt("atlas format unsupported here — fetching the twin bundle ...");try{const{bundle:A}=await $n(P,($,K)=>Dt(`downloading twin atlas ...
${($/1048576).toFixed(1)}${K?` / ${(K/1048576).toFixed(1)}`:""} MB`));if(A!=null&&A.atlasBuffer){const $=Vn(A.atlasBuffer);(ir($)&&R.bc7||or($)&&R.astc)&&(c=$)}}catch(A){console.warn("[gl] atlas2 failed:",A)}}}Dt("building GPU resources ..."),N=c,T=new Fi(r,C,c),T.bgColor=[G.bg.r,G.bg.g,G.bg.b],T.setGaussianScaling(G.gaussian_scaling),T.setAtlasEnabled(G.atlas_enabled),X.s=T.atlasStatus,wt(`[gl] max tex ${r.getParameter(r.MAX_TEXTURE_SIZE)} · layers ${r.getParameter(r.MAX_ARRAY_TEXTURE_LAYERS)} · ${T.atlasStatus}`),wt(`[gl] ${C.num_points} surfels · ${T.atlasStatus}`),M=[];const m=w.get("camera_url");if(d){const E=URL.createObjectURL(new Blob([d],{type:"application/json"}));try{M=await dr(E)}finally{URL.revokeObjectURL(E)}}else if(m)try{M=await dr(m)}catch(E){console.warn("[gl] camera_url failed:",E)}if(b.setBbox(C.bbox.min,C.bbox.max),M.length>0)ee(),J(0,!1);else{const E=C.centroid,P=.5*Math.hypot(C.bbox.max[0]-C.bbox.min[0],C.bbox.max[1]-C.bbox.min[1],C.bbox.max[2]-C.bbox.min[2]),A=W.create(E[0]-P,E[1]-P,E[2]-P),$=vt.lookAt(A,W.create(E[0],E[1],E[2]),W.create(0,1,0));vt.copy($,f.rotation),f.rotation[12]=0,f.rotation[13]=0,f.rotation[14]=0,W.copy(A,f.position),f.update_buffer(),b.resetToCamera()}}catch(i){throw jt(),i}}const re=document.getElementById("load-button");if(re==null||re.addEventListener("click",()=>{const x=document.createElement("input");x.type="file",x.accept=".ply,.bitymi",x.onchange=async()=>{var i;const S=(i=x.files)==null?void 0:i[0];S&&await Re(await S.arrayBuffer(),S.name)},x.click()}),Se)try{Nn("downloading ...");const{bundle:x,rawPly:S}=await $n(Se,(i,v,d)=>Dt(`downloading ...
${(i/2**20).toFixed(1)}${v?` / ${(v/2**20).toFixed(1)}`:""} MB · ${(d/2**20).toFixed(1)} MB/s`));x?await ve(x.pcBuffer,x.camerasBuffer,x.atlasBuffer,Se.split("/").pop()??"bundle"):S&&await Re(S,Se.split("/").pop()??"scene.ply")}catch(x){jt(),console.error("[gl] bundle load failed:",x),j.stats=`load failed: ${(x==null?void 0:x.message)??x}`;const S=document.createElement("div");S.textContent=`Could not load this bundle in the WebGL2 renderer: ${(x==null?void 0:x.message)??x}`,Object.assign(S.style,{position:"fixed",left:"50%",top:"40%",transform:"translate(-50%,-50%)",maxWidth:"80vw",color:"#eee",background:"rgba(20,20,20,0.92)",border:"1px solid #f0b060",borderRadius:"8px",font:"15px system-ui, sans-serif",padding:"16px 20px",textAlign:"center",zIndex:"10000"}),document.body.appendChild(S)}else j.stats="no ?bundle= — use 📂 Load";async function ve(x,S,i,v){const d=new TextEncoder().encode(Ss),p=[x],c=[0];S&&(p.push(S),c.push(2)),i&&(p.push(i),c.push(3));const m=4+p.length*20,E=8+m,P=E+p.reduce((oe,ne)=>oe+ne.byteLength,0),A=new Uint8Array(P),$=new DataView(A.buffer);A.set(d,0),$.setUint32(8,p.length,!0);let K=E;p.forEach((oe,ne)=>{$.setUint32(12+ne*20,c[ne],!0),$.setBigUint64(16+ne*20,BigInt(K),!0),$.setBigUint64(24+ne*20,BigInt(oe.byteLength),!0),A.set(new Uint8Array(oe),K),K+=oe.byteLength}),await Re(A.buffer,v)}let Pe=()=>{};const U=w.get("bundle_b");if(U&&T&&C){const x=w.get("label_a")??"A",S=w.get("label_b")??"B",i={a:{pc:C,renderer:T,atlas:N},b:null};let v="a",d=!1,p="";const c=document.createElement("button");Object.assign(c.style,{position:"fixed",top:"40px",right:"270px",zIndex:"1000",padding:"4px 8px",font:"12px system-ui, sans-serif",borderRadius:"4px",border:"1px solid #f0b060",background:"rgba(20,20,30,0.8)",color:"#f0b060",cursor:"pointer"});const m=(A="")=>{c.textContent=A||`Scene: ${v==="a"?x:S}  ⇄`;try{const $=new URL(window.location.href);v==="b"?$.searchParams.set("side","b"):$.searchParams.delete("side"),history.replaceState(history.state,"",$.toString())}catch{}},E=A=>{const $=document.createElement("div");Object.assign($.style,{position:"fixed",left:"50%",top:"30%",transform:"translate(-50%,-50%)",maxWidth:"80vw",color:"#eee",background:"rgba(20,20,20,0.94)",border:"1px solid #60b0f0",borderRadius:"8px",font:"15px system-ui, sans-serif",padding:"16px 20px",textAlign:"center",zIndex:"10000"});const K=document.createElement("div");K.textContent=A,$.appendChild(K);const oe=document.createElement("div");oe.style.marginTop="12px";const ne=(ae,xe)=>{const Ae=document.createElement("button");Ae.textContent=ae,Object.assign(Ae.style,{margin:"0 6px",padding:"6px 14px",font:"600 13px system-ui, sans-serif",borderRadius:"6px",border:"1px solid #666",background:"#222",color:"#eee",cursor:"pointer"}),Ae.onclick=xe,oe.appendChild(Ae)};a.gpuAvailable&&ne("Switch to WebGPU",()=>pr("webgpu")),ne("OK",()=>$.remove()),$.appendChild(oe),document.body.appendChild($)},P=A=>{const $=A==="a"?i.a:i.b;T=$.renderer,C=$.pc,N=$.atlas,T.bgColor=[G.bg.r,G.bg.g,G.bg.b],T.setGaussianScaling(G.gaussian_scaling),T.setAtlasEnabled(G.atlas_enabled),X.s=T.atlasStatus,v=A,m(),console.log(`[gl A/B] active = ${A}: ${C.num_points} surfels`)};Pe=async()=>{if(!d){if(v==="b"){P("a");return}if(i.b){P("b");return}if(p){E(p);return}d=!0,m(`loading ${S} ...`);try{const{bundle:A}=await $n(U,(ne,ae)=>m(`loading ${S} ... ${(ne/1048576).toFixed(0)}${ae?`/${(ae/1048576).toFixed(0)}`:""} MB`));if(!A)throw new Error("bundle_b must be a .bitymi bundle");const $=await Ci(new File([A.pcBuffer],"bundle_b.ply"));let K=null;if(A.atlasBuffer&&w.get("notex")!=="1"){const ne=Vn(A.atlasBuffer);(ir(ne)&&R.bc7||or(ne)&&R.astc)&&(K=ne)}let oe;try{oe=new Fi(r,$,K)}catch(ne){throw p=/tex3d/.test(String(ne==null?void 0:ne.message))?`“${S}” is a 3D-kernel bake (--tex3d), which only the WebGPU renderer can draw. Still showing “${x}”.`:`“${S}” cannot be shown in the WebGL2 renderer: ${(ne==null?void 0:ne.message)??ne}. Still showing “${x}”.`,new Error(p)}i.b={pc:$,renderer:oe,atlas:K},P("b")}catch(A){console.error("[gl A/B] B failed:",A),p||(p=`Could not load “${S}”: ${(A==null?void 0:A.message)??A}`),m(),E(p)}finally{d=!1}}},c.addEventListener("click",()=>Pe()),document.body.appendChild(c),m(),w.get("side")==="b"&&Pe()}let Y=performance.now(),g=0,l=0;const _=()=>{var x;return((x=b.isDragging)==null?void 0:x.call(b))??!1};let h=0;function y(){try{k()}catch(x){h++<5&&console.error("[gl frame] exception (render loop kept alive):",x)}requestAnimationFrame(y)}function k(){const x=performance.now(),S=Math.min((x-Y)/1e3,.1);if(Y=x,T&&C){if(ue){ue.t+=S/ue.duration;const d=Math.min(1,ue.t),p=d*d*(3-2*d);W.lerp(ue.fromPos,ue.toPos,p,f.position),dt.slerp(ue.fromQuat,ue.toQuat,p,le),Ct.fromQuat(le,te),vt.fromMat3(te,f.rotation),f.update_buffer(),ue.t>=1&&(f.set_preset(ue.target),ue=null,O?Te=fe:(b.resetToCamera(),Z()))}else O&&M.length>0&&(Te-=S,Te<=0&&(ie=(ie+1)%M.length,Le(M[ie],_e),ke.textContent=`${ie+1} / ${M.length}: ${M[ie].img_name??ie}`));_()&&ue&&(ue=null),b.update(S);const i=T.render({rotation:f.rotation,eye:f.position,fovY:f.getFovY(),width:o.width,height:o.height,zfar:f.zfar}),v=1/Math.max(S,.001);g=g===0?v:g*.9+v*.1,j.stats=`${i.toLocaleString()} / ${C.num_points.toLocaleString()} surfels · ${Math.round(g)} fps · cpu ${T.lastStats.cpuMs.toFixed(1)} ms`,l++,l===2&&jt()}}requestAnimationFrame(y),window.__halloumiGL={stats:j,get renderer(){return T},get cameras(){return M},setPreset:J,get atlas(){return N},pick(x,S){return C?fr(x,S,o,f,C.surfel_data):null},pickIds(x,S){if(!C)return[];const[i,v,d]=Ts(x,S,f),p=f.position[0],c=f.position[1],m=f.position[2],E=C.surfel_data,P=new Uint32Array(E.buffer,E.byteOffset,E.length),A=K=>{const oe=K>>10&31,ne=K&1023,ae=K&32768?-1:1;return oe===0?ae*ne*596e-10:ae*(1+ne/1024)*Math.pow(2,oe-15)},$=[];for(let K=0;K<C.num_points;K++){const oe=K*8,ne=E[oe],ae=E[oe+1],xe=E[oe+2],Ae=A(P[oe+4]&65535),Ee=A(P[oe+4]>>>16),Be=A(P[oe+5]&65535),Ge=A(P[oe+5]>>>16),Ie=A(P[oe+6]&65535),Je=A(P[oe+6]>>>16),Ne=1/Math.hypot(Be,Ge,Ie,Je),Ke=Be*Ne,qe=Ge*Ne,We=Ie*Ne,He=Je*Ne,nt=[1-2*(We*We+He*He),2*(qe*We+Ke*He),2*(qe*He-Ke*We)],ct=[2*(qe*We-Ke*He),1-2*(qe*qe+He*He),2*(We*He+Ke*qe)],je=[2*(qe*He+Ke*We),2*(We*He-Ke*qe),1-2*(qe*qe+We*We)],st=i*je[0]+v*je[1]+d*je[2];if(Math.abs(st)<1e-9)continue;const rt=((ne-p)*je[0]+(ae-c)*je[1]+(xe-m)*je[2])/st;if(rt<=0)continue;const Ye=p+rt*i-ne,it=c+rt*v-ae,Qe=m+rt*d-xe,at=(Ye*nt[0]+it*nt[1]+Qe*nt[2])/Ae,lt=(Ye*ct[0]+it*ct[1]+Qe*ct[2])/Ee,Pt=at*at+lt*lt,ft=f.rotation,_t=f.position,zt=ft[0]*(ne-_t[0])+ft[4]*(ae-_t[1])+ft[8]*(xe-_t[2]),Ot=ft[1]*(ne-_t[0])+ft[5]*(ae-_t[1])+ft[9]*(xe-_t[2]),Tt=ft[2]*(ne-_t[0])+ft[6]*(ae-_t[1])+ft[10]*(xe-_t[2]),Lt=o.width,$t=o.height,Ft=.5*$t/Math.tan(f.getFovY()*.5),Bt=Ft*zt/Tt+(Lt-1)*.5,Nt=Ft*Ot/Tt+($t-1)*.5,ot=2*((Bt-x)*(Bt-x)+(Nt-S)*(Nt-S)),ln=A(P[oe+3]&65535),En=A(P[oe+3]>>>16),pt=Pt>=9?0:Math.pow(Math.max(0,1-Pt/9),En>1e-6?En:1),kn=Math.min(.99,ln*Math.max(pt,Math.exp(-.5*ot)));if(kn<1/255)continue;const qt=N?Array.from(N.rects_expanded.subarray(K*5,K*5+5)):null,Cn=T&&T.atlasUpload?Array.from(T.atlasUpload.rects.subarray(K*5,K*5+5)):null;$.push({id:K,t:+rt.toFixed(3),u:+at.toFixed(2),v:+lt.toFixed(2),rho2d:+ot.toFixed(2),alpha:+kn.toFixed(3),opa:+ln.toFixed(2),tex:P[oe+7]>>>16&1,rect:qt,remap:Cn})}return $.sort((K,oe)=>K.t-oe.t)}}}const $i="halloumi.gpuLossReload",gu=6e4;let Ni=!1;function qi(o,r){const a=document.createElement("div");Object.assign(a.style,{position:"fixed",inset:"0",display:"flex",flexDirection:"column",gap:"14px",alignItems:"center",justifyContent:"center",zIndex:"10000",color:"#eee",background:"rgba(10,10,10,0.92)",font:"15px system-ui, sans-serif",padding:"24px",textAlign:"center"});const w=document.createElement("div");if(w.textContent=o,a.appendChild(w),r){const f=document.createElement("button");f.textContent="Reload",Object.assign(f.style,{font:"600 14px system-ui, sans-serif",padding:"8px 18px",borderRadius:"6px",border:"1px solid #f0b060",background:"#222",color:"#f0b060",cursor:"pointer"}),f.onclick=()=>window.location.reload(),a.appendChild(f)}document.body.appendChild(a)}function ho(o,r){if(Ni)return;Ni=!0,console.error(`[gpu-loss] ${o} lost: ${r}`);let a=0;try{a=parseInt(sessionStorage.getItem($i)??"0",10)||0}catch{}const w=Date.now();if(w-a>gu){try{sessionStorage.setItem($i,String(w))}catch{}qi("The GPU device was lost — reloading the viewer…",!1),setTimeout(()=>window.location.reload(),400)}else qi(`The GPU device was lost again (${o}: ${r}). Reload to try once more.`,!0)}function wu(o){o.lost.then(a=>{a.reason!=="destroyed"&&ho("webgpu",`${a.reason}: ${a.message}`)});let r=0;o.addEventListener("uncapturederror",a=>{var w;r++<5&&console.error("[webgpu] uncaptured error:",((w=a==null?void 0:a.error)==null?void 0:w.message)??a)})}function Wi(o){o.addEventListener("webglcontextlost",r=>{r.preventDefault(),ho("webgl","webglcontextlost")},!1)}(function(){let r="dev";for(const w of Array.from(document.querySelectorAll('script[type="module"]'))){const b=w.src.match(/\/assets\/index-([0-9a-z]+)\.js$/i);if(b){r=b[1];break}}const a=document.createElement("div");a.textContent="v "+r,a.title="viewer build hash (Vite content hash of index-*.js)",Object.assign(a.style,{position:"fixed",right:"6px",bottom:"6px",font:"10px ui-monospace, SFMono-Regular, Menlo, monospace",color:"rgba(255,255,255,0.55)",background:"rgba(0,0,0,0.35)",padding:"2px 6px",borderRadius:"4px",pointerEvents:"none",zIndex:"9999",userSelect:"all"}),document.body.appendChild(a)})();function Ki(o){const r=document.createElement("div");r.textContent=o,Object.assign(r.style,{position:"fixed",inset:"0",display:"flex",alignItems:"center",justifyContent:"center",color:"#eee",background:"#111",font:"16px system-ui, sans-serif",padding:"24px",textAlign:"center"}),document.body.appendChild(r)}(async()=>{const o=document.querySelector("#webgpu-canvas");_c(o!==null);const{forced:r,stored:a}=cu(),w=r??a??"webgpu";let f=null;if(navigator.gpu!==void 0)try{f=await navigator.gpu.requestAdapter({powerPreference:"high-performance"})}catch(C){console.warn("[backend] requestAdapter failed:",C)}if(w==="webgl"||f===null){const C=o.getContext("webgl2",{alpha:!1,antialias:!1,depth:!1,stencil:!1,premultipliedAlpha:!0,powerPreference:"high-performance"});if(!C){Ki(f===null?"This browser has neither WebGPU nor WebGL2.":"WebGL2 is not available in this browser.");return}console.log(`[backend] WebGL2 (${w==="webgl"?r?"?renderer=webgl":"remembered choice":"no WebGPU adapter"})`),Wi(o),Vi(o,C,{gpuAvailable:f!==null});return}const b=[];f.features.has("timestamp-query")&&b.push("timestamp-query"),f.features.has("texture-compression-bc")&&b.push("texture-compression-bc"),f.features.has("texture-compression-astc")&&b.push("texture-compression-astc"),console.log("[adapter]",f.info??"(unknown)");try{const C=f.info??{};globalThis.__gpuAdapterInfo={vendor:C.vendor??"?",architecture:C.architecture??"?",device:C.device??"?",description:C.description??"?",features:Array.from(f.features).join(",")}}catch{}console.log("[adapter] features:",Array.from(f.features)),console.log("[adapter] BC7:",f.features.has("texture-compression-bc")),console.log("[adapter] ASTC:",f.features.has("texture-compression-astc")),console.log("[adapter] limits:",{maxStorageBuffersPerShaderStage:f.limits.maxStorageBuffersPerShaderStage,maxComputeWorkgroupStorageSize:f.limits.maxComputeWorkgroupStorageSize,maxBufferSize:f.limits.maxBufferSize,maxStorageBufferBindingSize:f.limits.maxStorageBufferBindingSize,maxTextureDimension2D:f.limits.maxTextureDimension2D});let R;try{R=await f.requestDevice({requiredFeatures:b,requiredLimits:{maxStorageBuffersPerShaderStage:10,maxComputeWorkgroupStorageSize:f.limits.maxComputeWorkgroupStorageSize,maxBufferSize:f.limits.maxBufferSize,maxStorageBufferBindingSize:f.limits.maxStorageBufferBindingSize}})}catch(C){console.warn("[backend] requestDevice failed, falling back to WebGL2:",C);const M=o.getContext("webgl2",{alpha:!1,antialias:!1,depth:!1,stencil:!1,premultipliedAlpha:!0,powerPreference:"high-performance"});if(!M){Ki(`WebGPU device creation failed (${C}) and WebGL2 is not available.`);return}Wi(o),Vi(o,M,{gpuAvailable:!1});return}wu(R);const T=o.getContext("webgpu");hu(o,T,R,b)})();
