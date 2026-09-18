var pn=Object.defineProperty;var hn=(r,n,d)=>n in r?pn(r,n,{enumerable:!0,configurable:!0,writable:!0,value:d}):r[n]=d;var T=(r,n,d)=>(hn(r,typeof n!="symbol"?n+"":n,d),d);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const b of document.querySelectorAll('link[rel="modulepreload"]'))v(b);new MutationObserver(b=>{for(const w of b)if(w.type==="childList")for(const S of w.addedNodes)S.tagName==="LINK"&&S.rel==="modulepreload"&&v(S)}).observe(document,{childList:!0,subtree:!0});function d(b){const w={};return b.integrity&&(w.integrity=b.integrity),b.referrerPolicy&&(w.referrerPolicy=b.referrerPolicy),b.crossOrigin==="use-credentials"?w.credentials="include":b.crossOrigin==="anonymous"?w.credentials="omit":w.credentials="same-origin",w}function v(b){if(b.ep)return;b.ep=!0;const w=d(b);fetch(b.href,w)}})();function _n(r,n){return class extends r{constructor(...d){super(...d),n(this)}}}const gn=_n(Array,r=>r.fill(0));let be=1e-6;function mn(r){function n(g=0,x=0){const y=new r(2);return g!==void 0&&(y[0]=g,x!==void 0&&(y[1]=x)),y}const d=n;function v(g,x,y){const e=y??new r(2);return e[0]=g,e[1]=x,e}function b(g,x){const y=x??new r(2);return y[0]=Math.ceil(g[0]),y[1]=Math.ceil(g[1]),y}function w(g,x){const y=x??new r(2);return y[0]=Math.floor(g[0]),y[1]=Math.floor(g[1]),y}function S(g,x){const y=x??new r(2);return y[0]=Math.round(g[0]),y[1]=Math.round(g[1]),y}function M(g,x=0,y=1,e){const u=e??new r(2);return u[0]=Math.min(y,Math.max(x,g[0])),u[1]=Math.min(y,Math.max(x,g[1])),u}function G(g,x,y){const e=y??new r(2);return e[0]=g[0]+x[0],e[1]=g[1]+x[1],e}function R(g,x,y,e){const u=e??new r(2);return u[0]=g[0]+x[0]*y,u[1]=g[1]+x[1]*y,u}function W(g,x){const y=g[0],e=g[1],u=x[0],i=x[1],o=Math.sqrt(y*y+e*e),s=Math.sqrt(u*u+i*i),l=o*s,m=l&&Z(g,x)/l;return Math.acos(m)}function J(g,x,y){const e=y??new r(2);return e[0]=g[0]-x[0],e[1]=g[1]-x[1],e}const I=J;function Q(g,x){return Math.abs(g[0]-x[0])<be&&Math.abs(g[1]-x[1])<be}function ae(g,x){return g[0]===x[0]&&g[1]===x[1]}function oe(g,x,y,e){const u=e??new r(2);return u[0]=g[0]+y*(x[0]-g[0]),u[1]=g[1]+y*(x[1]-g[1]),u}function O(g,x,y,e){const u=e??new r(2);return u[0]=g[0]+y[0]*(x[0]-g[0]),u[1]=g[1]+y[1]*(x[1]-g[1]),u}function ee(g,x,y){const e=y??new r(2);return e[0]=Math.max(g[0],x[0]),e[1]=Math.max(g[1],x[1]),e}function pe(g,x,y){const e=y??new r(2);return e[0]=Math.min(g[0],x[0]),e[1]=Math.min(g[1],x[1]),e}function L(g,x,y){const e=y??new r(2);return e[0]=g[0]*x,e[1]=g[1]*x,e}const te=L;function ie(g,x,y){const e=y??new r(2);return e[0]=g[0]/x,e[1]=g[1]/x,e}function $(g,x){const y=x??new r(2);return y[0]=1/g[0],y[1]=1/g[1],y}const he=$;function K(g,x,y){const e=y??new r(3),u=g[0]*x[1]-g[1]*x[0];return e[0]=0,e[1]=0,e[2]=u,e}function Z(g,x){return g[0]*x[0]+g[1]*x[1]}function _e(g){const x=g[0],y=g[1];return Math.sqrt(x*x+y*y)}const D=_e;function ne(g){const x=g[0],y=g[1];return x*x+y*y}const C=ne;function de(g,x){const y=g[0]-x[0],e=g[1]-x[1];return Math.sqrt(y*y+e*e)}const ge=de;function V(g,x){const y=g[0]-x[0],e=g[1]-x[1];return y*y+e*e}const re=V;function ye(g,x){const y=x??new r(2),e=g[0],u=g[1],i=Math.sqrt(e*e+u*u);return i>1e-5?(y[0]=e/i,y[1]=u/i):(y[0]=0,y[1]=0),y}function Se(g,x){const y=x??new r(2);return y[0]=-g[0],y[1]=-g[1],y}function me(g,x){const y=x??new r(2);return y[0]=g[0],y[1]=g[1],y}const Te=me;function ze(g,x,y){const e=y??new r(2);return e[0]=g[0]*x[0],e[1]=g[1]*x[1],e}const ke=ze;function le(g,x,y){const e=y??new r(2);return e[0]=g[0]/x[0],e[1]=g[1]/x[1],e}const we=le;function Be(g=1,x){const y=x??new r(2),e=Math.random()*2*Math.PI;return y[0]=Math.cos(e)*g,y[1]=Math.sin(e)*g,y}function B(g){const x=g??new r(2);return x[0]=0,x[1]=0,x}function A(g,x,y){const e=y??new r(2),u=g[0],i=g[1];return e[0]=u*x[0]+i*x[4]+x[12],e[1]=u*x[1]+i*x[5]+x[13],e}function h(g,x,y){const e=y??new r(2),u=g[0],i=g[1];return e[0]=x[0]*u+x[4]*i+x[8],e[1]=x[1]*u+x[5]*i+x[9],e}function t(g,x,y,e){const u=e??new r(2),i=g[0]-x[0],o=g[1]-x[1],s=Math.sin(y),l=Math.cos(y);return u[0]=i*l-o*s+x[0],u[1]=i*s+o*l+x[1],u}function c(g,x,y){const e=y??new r(2);return ye(g,e),L(e,x,e)}function a(g,x,y){const e=y??new r(2);return _e(g)>x?c(g,x,e):me(g,e)}function f(g,x,y){const e=y??new r(2);return oe(g,x,.5,e)}return{create:n,fromValues:d,set:v,ceil:b,floor:w,round:S,clamp:M,add:G,addScaled:R,angle:W,subtract:J,sub:I,equalsApproximately:Q,equals:ae,lerp:oe,lerpV:O,max:ee,min:pe,mulScalar:L,scale:te,divScalar:ie,inverse:$,invert:he,cross:K,dot:Z,length:_e,len:D,lengthSq:ne,lenSq:C,distance:de,dist:ge,distanceSq:V,distSq:re,normalize:ye,negate:Se,copy:me,clone:Te,multiply:ze,mul:ke,divide:le,div:we,random:Be,zero:B,transformMat4:A,transformMat3:h,rotate:t,setLength:c,truncate:a,midpoint:f}}const Et=new Map;function Qt(r){let n=Et.get(r);return n||(n=mn(r),Et.set(r,n)),n}function xn(r){function n(s,l,m){const _=new r(3);return s!==void 0&&(_[0]=s,l!==void 0&&(_[1]=l,m!==void 0&&(_[2]=m))),_}const d=n;function v(s,l,m,_){const p=_??new r(3);return p[0]=s,p[1]=l,p[2]=m,p}function b(s,l){const m=l??new r(3);return m[0]=Math.ceil(s[0]),m[1]=Math.ceil(s[1]),m[2]=Math.ceil(s[2]),m}function w(s,l){const m=l??new r(3);return m[0]=Math.floor(s[0]),m[1]=Math.floor(s[1]),m[2]=Math.floor(s[2]),m}function S(s,l){const m=l??new r(3);return m[0]=Math.round(s[0]),m[1]=Math.round(s[1]),m[2]=Math.round(s[2]),m}function M(s,l=0,m=1,_){const p=_??new r(3);return p[0]=Math.min(m,Math.max(l,s[0])),p[1]=Math.min(m,Math.max(l,s[1])),p[2]=Math.min(m,Math.max(l,s[2])),p}function G(s,l,m){const _=m??new r(3);return _[0]=s[0]+l[0],_[1]=s[1]+l[1],_[2]=s[2]+l[2],_}function R(s,l,m,_){const p=_??new r(3);return p[0]=s[0]+l[0]*m,p[1]=s[1]+l[1]*m,p[2]=s[2]+l[2]*m,p}function W(s,l){const m=s[0],_=s[1],p=s[2],P=l[0],k=l[1],U=l[2],E=Math.sqrt(m*m+_*_+p*p),z=Math.sqrt(P*P+k*k+U*U),N=E*z,Y=N&&Z(s,l)/N;return Math.acos(Y)}function J(s,l,m){const _=m??new r(3);return _[0]=s[0]-l[0],_[1]=s[1]-l[1],_[2]=s[2]-l[2],_}const I=J;function Q(s,l){return Math.abs(s[0]-l[0])<be&&Math.abs(s[1]-l[1])<be&&Math.abs(s[2]-l[2])<be}function ae(s,l){return s[0]===l[0]&&s[1]===l[1]&&s[2]===l[2]}function oe(s,l,m,_){const p=_??new r(3);return p[0]=s[0]+m*(l[0]-s[0]),p[1]=s[1]+m*(l[1]-s[1]),p[2]=s[2]+m*(l[2]-s[2]),p}function O(s,l,m,_){const p=_??new r(3);return p[0]=s[0]+m[0]*(l[0]-s[0]),p[1]=s[1]+m[1]*(l[1]-s[1]),p[2]=s[2]+m[2]*(l[2]-s[2]),p}function ee(s,l,m){const _=m??new r(3);return _[0]=Math.max(s[0],l[0]),_[1]=Math.max(s[1],l[1]),_[2]=Math.max(s[2],l[2]),_}function pe(s,l,m){const _=m??new r(3);return _[0]=Math.min(s[0],l[0]),_[1]=Math.min(s[1],l[1]),_[2]=Math.min(s[2],l[2]),_}function L(s,l,m){const _=m??new r(3);return _[0]=s[0]*l,_[1]=s[1]*l,_[2]=s[2]*l,_}const te=L;function ie(s,l,m){const _=m??new r(3);return _[0]=s[0]/l,_[1]=s[1]/l,_[2]=s[2]/l,_}function $(s,l){const m=l??new r(3);return m[0]=1/s[0],m[1]=1/s[1],m[2]=1/s[2],m}const he=$;function K(s,l,m){const _=m??new r(3),p=s[2]*l[0]-s[0]*l[2],P=s[0]*l[1]-s[1]*l[0];return _[0]=s[1]*l[2]-s[2]*l[1],_[1]=p,_[2]=P,_}function Z(s,l){return s[0]*l[0]+s[1]*l[1]+s[2]*l[2]}function _e(s){const l=s[0],m=s[1],_=s[2];return Math.sqrt(l*l+m*m+_*_)}const D=_e;function ne(s){const l=s[0],m=s[1],_=s[2];return l*l+m*m+_*_}const C=ne;function de(s,l){const m=s[0]-l[0],_=s[1]-l[1],p=s[2]-l[2];return Math.sqrt(m*m+_*_+p*p)}const ge=de;function V(s,l){const m=s[0]-l[0],_=s[1]-l[1],p=s[2]-l[2];return m*m+_*_+p*p}const re=V;function ye(s,l){const m=l??new r(3),_=s[0],p=s[1],P=s[2],k=Math.sqrt(_*_+p*p+P*P);return k>1e-5?(m[0]=_/k,m[1]=p/k,m[2]=P/k):(m[0]=0,m[1]=0,m[2]=0),m}function Se(s,l){const m=l??new r(3);return m[0]=-s[0],m[1]=-s[1],m[2]=-s[2],m}function me(s,l){const m=l??new r(3);return m[0]=s[0],m[1]=s[1],m[2]=s[2],m}const Te=me;function ze(s,l,m){const _=m??new r(3);return _[0]=s[0]*l[0],_[1]=s[1]*l[1],_[2]=s[2]*l[2],_}const ke=ze;function le(s,l,m){const _=m??new r(3);return _[0]=s[0]/l[0],_[1]=s[1]/l[1],_[2]=s[2]/l[2],_}const we=le;function Be(s=1,l){const m=l??new r(3),_=Math.random()*2*Math.PI,p=Math.random()*2-1,P=Math.sqrt(1-p*p)*s;return m[0]=Math.cos(_)*P,m[1]=Math.sin(_)*P,m[2]=p*s,m}function B(s){const l=s??new r(3);return l[0]=0,l[1]=0,l[2]=0,l}function A(s,l,m){const _=m??new r(3),p=s[0],P=s[1],k=s[2],U=l[3]*p+l[7]*P+l[11]*k+l[15]||1;return _[0]=(l[0]*p+l[4]*P+l[8]*k+l[12])/U,_[1]=(l[1]*p+l[5]*P+l[9]*k+l[13])/U,_[2]=(l[2]*p+l[6]*P+l[10]*k+l[14])/U,_}function h(s,l,m){const _=m??new r(3),p=s[0],P=s[1],k=s[2];return _[0]=p*l[0*4+0]+P*l[1*4+0]+k*l[2*4+0],_[1]=p*l[0*4+1]+P*l[1*4+1]+k*l[2*4+1],_[2]=p*l[0*4+2]+P*l[1*4+2]+k*l[2*4+2],_}function t(s,l,m){const _=m??new r(3),p=s[0],P=s[1],k=s[2];return _[0]=p*l[0]+P*l[4]+k*l[8],_[1]=p*l[1]+P*l[5]+k*l[9],_[2]=p*l[2]+P*l[6]+k*l[10],_}function c(s,l,m){const _=m??new r(3),p=l[0],P=l[1],k=l[2],U=l[3]*2,E=s[0],z=s[1],N=s[2],Y=P*N-k*z,F=k*E-p*N,H=p*z-P*E;return _[0]=E+Y*U+(P*H-k*F)*2,_[1]=z+F*U+(k*Y-p*H)*2,_[2]=N+H*U+(p*F-P*Y)*2,_}function a(s,l){const m=l??new r(3);return m[0]=s[12],m[1]=s[13],m[2]=s[14],m}function f(s,l,m){const _=m??new r(3),p=l*4;return _[0]=s[p+0],_[1]=s[p+1],_[2]=s[p+2],_}function g(s,l){const m=l??new r(3),_=s[0],p=s[1],P=s[2],k=s[4],U=s[5],E=s[6],z=s[8],N=s[9],Y=s[10];return m[0]=Math.sqrt(_*_+p*p+P*P),m[1]=Math.sqrt(k*k+U*U+E*E),m[2]=Math.sqrt(z*z+N*N+Y*Y),m}function x(s,l,m,_){const p=_??new r(3),P=[],k=[];return P[0]=s[0]-l[0],P[1]=s[1]-l[1],P[2]=s[2]-l[2],k[0]=P[0],k[1]=P[1]*Math.cos(m)-P[2]*Math.sin(m),k[2]=P[1]*Math.sin(m)+P[2]*Math.cos(m),p[0]=k[0]+l[0],p[1]=k[1]+l[1],p[2]=k[2]+l[2],p}function y(s,l,m,_){const p=_??new r(3),P=[],k=[];return P[0]=s[0]-l[0],P[1]=s[1]-l[1],P[2]=s[2]-l[2],k[0]=P[2]*Math.sin(m)+P[0]*Math.cos(m),k[1]=P[1],k[2]=P[2]*Math.cos(m)-P[0]*Math.sin(m),p[0]=k[0]+l[0],p[1]=k[1]+l[1],p[2]=k[2]+l[2],p}function e(s,l,m,_){const p=_??new r(3),P=[],k=[];return P[0]=s[0]-l[0],P[1]=s[1]-l[1],P[2]=s[2]-l[2],k[0]=P[0]*Math.cos(m)-P[1]*Math.sin(m),k[1]=P[0]*Math.sin(m)+P[1]*Math.cos(m),k[2]=P[2],p[0]=k[0]+l[0],p[1]=k[1]+l[1],p[2]=k[2]+l[2],p}function u(s,l,m){const _=m??new r(3);return ye(s,_),L(_,l,_)}function i(s,l,m){const _=m??new r(3);return _e(s)>l?u(s,l,_):me(s,_)}function o(s,l,m){const _=m??new r(3);return oe(s,l,.5,_)}return{create:n,fromValues:d,set:v,ceil:b,floor:w,round:S,clamp:M,add:G,addScaled:R,angle:W,subtract:J,sub:I,equalsApproximately:Q,equals:ae,lerp:oe,lerpV:O,max:ee,min:pe,mulScalar:L,scale:te,divScalar:ie,inverse:$,invert:he,cross:K,dot:Z,length:_e,len:D,lengthSq:ne,lenSq:C,distance:de,dist:ge,distanceSq:V,distSq:re,normalize:ye,negate:Se,copy:me,clone:Te,multiply:ze,mul:ke,divide:le,div:we,random:Be,zero:B,transformMat4:A,transformMat4Upper3x3:h,transformMat3:t,transformQuat:c,getTranslation:a,getAxis:f,getScaling:g,rotateX:x,rotateY:y,rotateZ:e,setLength:u,truncate:i,midpoint:o}}const Dt=new Map;function xt(r){let n=Dt.get(r);return n||(n=xn(r),Dt.set(r,n)),n}function yn(r){const n=Qt(r),d=xt(r);function v(t,c,a,f,g,x,y,e,u){const i=new r(12);return i[3]=0,i[7]=0,i[11]=0,t!==void 0&&(i[0]=t,c!==void 0&&(i[1]=c,a!==void 0&&(i[2]=a,f!==void 0&&(i[4]=f,g!==void 0&&(i[5]=g,x!==void 0&&(i[6]=x,y!==void 0&&(i[8]=y,e!==void 0&&(i[9]=e,u!==void 0&&(i[10]=u))))))))),i}function b(t,c,a,f,g,x,y,e,u,i){const o=i??new r(12);return o[0]=t,o[1]=c,o[2]=a,o[3]=0,o[4]=f,o[5]=g,o[6]=x,o[7]=0,o[8]=y,o[9]=e,o[10]=u,o[11]=0,o}function w(t,c){const a=c??new r(12);return a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=0,a[4]=t[4],a[5]=t[5],a[6]=t[6],a[7]=0,a[8]=t[8],a[9]=t[9],a[10]=t[10],a[11]=0,a}function S(t,c){const a=c??new r(12),f=t[0],g=t[1],x=t[2],y=t[3],e=f+f,u=g+g,i=x+x,o=f*e,s=g*e,l=g*u,m=x*e,_=x*u,p=x*i,P=y*e,k=y*u,U=y*i;return a[0]=1-l-p,a[1]=s+U,a[2]=m-k,a[3]=0,a[4]=s-U,a[5]=1-o-p,a[6]=_+P,a[7]=0,a[8]=m+k,a[9]=_-P,a[10]=1-o-l,a[11]=0,a}function M(t,c){const a=c??new r(12);return a[0]=-t[0],a[1]=-t[1],a[2]=-t[2],a[4]=-t[4],a[5]=-t[5],a[6]=-t[6],a[8]=-t[8],a[9]=-t[9],a[10]=-t[10],a}function G(t,c,a){const f=a??new r(12);return f[0]=t[0]*c,f[1]=t[1]*c,f[2]=t[2]*c,f[4]=t[4]*c,f[5]=t[5]*c,f[6]=t[6]*c,f[8]=t[8]*c,f[9]=t[9]*c,f[10]=t[10]*c,f}const R=G;function W(t,c,a){const f=a??new r(12);return f[0]=t[0]+c[0],f[1]=t[1]+c[1],f[2]=t[2]+c[2],f[4]=t[4]+c[4],f[5]=t[5]+c[5],f[6]=t[6]+c[6],f[8]=t[8]+c[8],f[9]=t[9]+c[9],f[10]=t[10]+c[10],f}function J(t,c){const a=c??new r(12);return a[0]=t[0],a[1]=t[1],a[2]=t[2],a[4]=t[4],a[5]=t[5],a[6]=t[6],a[8]=t[8],a[9]=t[9],a[10]=t[10],a}const I=J;function Q(t,c){return Math.abs(t[0]-c[0])<be&&Math.abs(t[1]-c[1])<be&&Math.abs(t[2]-c[2])<be&&Math.abs(t[4]-c[4])<be&&Math.abs(t[5]-c[5])<be&&Math.abs(t[6]-c[6])<be&&Math.abs(t[8]-c[8])<be&&Math.abs(t[9]-c[9])<be&&Math.abs(t[10]-c[10])<be}function ae(t,c){return t[0]===c[0]&&t[1]===c[1]&&t[2]===c[2]&&t[4]===c[4]&&t[5]===c[5]&&t[6]===c[6]&&t[8]===c[8]&&t[9]===c[9]&&t[10]===c[10]}function oe(t){const c=t??new r(12);return c[0]=1,c[1]=0,c[2]=0,c[4]=0,c[5]=1,c[6]=0,c[8]=0,c[9]=0,c[10]=1,c}function O(t,c){const a=c??new r(12);if(a===t){let l;return l=t[1],t[1]=t[4],t[4]=l,l=t[2],t[2]=t[8],t[8]=l,l=t[6],t[6]=t[9],t[9]=l,a}const f=t[0*4+0],g=t[0*4+1],x=t[0*4+2],y=t[1*4+0],e=t[1*4+1],u=t[1*4+2],i=t[2*4+0],o=t[2*4+1],s=t[2*4+2];return a[0]=f,a[1]=y,a[2]=i,a[4]=g,a[5]=e,a[6]=o,a[8]=x,a[9]=u,a[10]=s,a}function ee(t,c){const a=c??new r(12),f=t[0*4+0],g=t[0*4+1],x=t[0*4+2],y=t[1*4+0],e=t[1*4+1],u=t[1*4+2],i=t[2*4+0],o=t[2*4+1],s=t[2*4+2],l=s*e-u*o,m=-s*y+u*i,_=o*y-e*i,p=1/(f*l+g*m+x*_);return a[0]=l*p,a[1]=(-s*g+x*o)*p,a[2]=(u*g-x*e)*p,a[4]=m*p,a[5]=(s*f-x*i)*p,a[6]=(-u*f+x*y)*p,a[8]=_*p,a[9]=(-o*f+g*i)*p,a[10]=(e*f-g*y)*p,a}function pe(t){const c=t[0],a=t[0*4+1],f=t[0*4+2],g=t[1*4+0],x=t[1*4+1],y=t[1*4+2],e=t[2*4+0],u=t[2*4+1],i=t[2*4+2];return c*(x*i-u*y)-g*(a*i-u*f)+e*(a*y-x*f)}const L=ee;function te(t,c,a){const f=a??new r(12),g=t[0],x=t[1],y=t[2],e=t[4+0],u=t[4+1],i=t[4+2],o=t[8+0],s=t[8+1],l=t[8+2],m=c[0],_=c[1],p=c[2],P=c[4+0],k=c[4+1],U=c[4+2],E=c[8+0],z=c[8+1],N=c[8+2];return f[0]=g*m+e*_+o*p,f[1]=x*m+u*_+s*p,f[2]=y*m+i*_+l*p,f[4]=g*P+e*k+o*U,f[5]=x*P+u*k+s*U,f[6]=y*P+i*k+l*U,f[8]=g*E+e*z+o*N,f[9]=x*E+u*z+s*N,f[10]=y*E+i*z+l*N,f}const ie=te;function $(t,c,a){const f=a??oe();return t!==f&&(f[0]=t[0],f[1]=t[1],f[2]=t[2],f[4]=t[4],f[5]=t[5],f[6]=t[6]),f[8]=c[0],f[9]=c[1],f[10]=1,f}function he(t,c){const a=c??n.create();return a[0]=t[8],a[1]=t[9],a}function K(t,c,a){const f=a??n.create(),g=c*4;return f[0]=t[g+0],f[1]=t[g+1],f}function Z(t,c,a,f){const g=f===t?t:J(t,f),x=a*4;return g[x+0]=c[0],g[x+1]=c[1],g}function _e(t,c){const a=c??n.create(),f=t[0],g=t[1],x=t[4],y=t[5];return a[0]=Math.sqrt(f*f+g*g),a[1]=Math.sqrt(x*x+y*y),a}function D(t,c){const a=c??d.create(),f=t[0],g=t[1],x=t[2],y=t[4],e=t[5],u=t[6],i=t[8],o=t[9],s=t[10];return a[0]=Math.sqrt(f*f+g*g+x*x),a[1]=Math.sqrt(y*y+e*e+u*u),a[2]=Math.sqrt(i*i+o*o+s*s),a}function ne(t,c){const a=c??new r(12);return a[0]=1,a[1]=0,a[2]=0,a[4]=0,a[5]=1,a[6]=0,a[8]=t[0],a[9]=t[1],a[10]=1,a}function C(t,c,a){const f=a??new r(12),g=c[0],x=c[1],y=t[0],e=t[1],u=t[2],i=t[1*4+0],o=t[1*4+1],s=t[1*4+2],l=t[2*4+0],m=t[2*4+1],_=t[2*4+2];return t!==f&&(f[0]=y,f[1]=e,f[2]=u,f[4]=i,f[5]=o,f[6]=s),f[8]=y*g+i*x+l,f[9]=e*g+o*x+m,f[10]=u*g+s*x+_,f}function de(t,c){const a=c??new r(12),f=Math.cos(t),g=Math.sin(t);return a[0]=f,a[1]=g,a[2]=0,a[4]=-g,a[5]=f,a[6]=0,a[8]=0,a[9]=0,a[10]=1,a}function ge(t,c,a){const f=a??new r(12),g=t[0*4+0],x=t[0*4+1],y=t[0*4+2],e=t[1*4+0],u=t[1*4+1],i=t[1*4+2],o=Math.cos(c),s=Math.sin(c);return f[0]=o*g+s*e,f[1]=o*x+s*u,f[2]=o*y+s*i,f[4]=o*e-s*g,f[5]=o*u-s*x,f[6]=o*i-s*y,t!==f&&(f[8]=t[8],f[9]=t[9],f[10]=t[10]),f}function V(t,c){const a=c??new r(12),f=Math.cos(t),g=Math.sin(t);return a[0]=1,a[1]=0,a[2]=0,a[4]=0,a[5]=f,a[6]=g,a[8]=0,a[9]=-g,a[10]=f,a}function re(t,c,a){const f=a??new r(12),g=t[4],x=t[5],y=t[6],e=t[8],u=t[9],i=t[10],o=Math.cos(c),s=Math.sin(c);return f[4]=o*g+s*e,f[5]=o*x+s*u,f[6]=o*y+s*i,f[8]=o*e-s*g,f[9]=o*u-s*x,f[10]=o*i-s*y,t!==f&&(f[0]=t[0],f[1]=t[1],f[2]=t[2]),f}function ye(t,c){const a=c??new r(12),f=Math.cos(t),g=Math.sin(t);return a[0]=f,a[1]=0,a[2]=-g,a[4]=0,a[5]=1,a[6]=0,a[8]=g,a[9]=0,a[10]=f,a}function Se(t,c,a){const f=a??new r(12),g=t[0*4+0],x=t[0*4+1],y=t[0*4+2],e=t[2*4+0],u=t[2*4+1],i=t[2*4+2],o=Math.cos(c),s=Math.sin(c);return f[0]=o*g-s*e,f[1]=o*x-s*u,f[2]=o*y-s*i,f[8]=o*e+s*g,f[9]=o*u+s*x,f[10]=o*i+s*y,t!==f&&(f[4]=t[4],f[5]=t[5],f[6]=t[6]),f}const me=de,Te=ge;function ze(t,c){const a=c??new r(12);return a[0]=t[0],a[1]=0,a[2]=0,a[4]=0,a[5]=t[1],a[6]=0,a[8]=0,a[9]=0,a[10]=1,a}function ke(t,c,a){const f=a??new r(12),g=c[0],x=c[1];return f[0]=g*t[0*4+0],f[1]=g*t[0*4+1],f[2]=g*t[0*4+2],f[4]=x*t[1*4+0],f[5]=x*t[1*4+1],f[6]=x*t[1*4+2],t!==f&&(f[8]=t[8],f[9]=t[9],f[10]=t[10]),f}function le(t,c){const a=c??new r(12);return a[0]=t[0],a[1]=0,a[2]=0,a[4]=0,a[5]=t[1],a[6]=0,a[8]=0,a[9]=0,a[10]=t[2],a}function we(t,c,a){const f=a??new r(12),g=c[0],x=c[1],y=c[2];return f[0]=g*t[0*4+0],f[1]=g*t[0*4+1],f[2]=g*t[0*4+2],f[4]=x*t[1*4+0],f[5]=x*t[1*4+1],f[6]=x*t[1*4+2],f[8]=y*t[2*4+0],f[9]=y*t[2*4+1],f[10]=y*t[2*4+2],f}function Be(t,c){const a=c??new r(12);return a[0]=t,a[1]=0,a[2]=0,a[4]=0,a[5]=t,a[6]=0,a[8]=0,a[9]=0,a[10]=1,a}function B(t,c,a){const f=a??new r(12);return f[0]=c*t[0*4+0],f[1]=c*t[0*4+1],f[2]=c*t[0*4+2],f[4]=c*t[1*4+0],f[5]=c*t[1*4+1],f[6]=c*t[1*4+2],t!==f&&(f[8]=t[8],f[9]=t[9],f[10]=t[10]),f}function A(t,c){const a=c??new r(12);return a[0]=t,a[1]=0,a[2]=0,a[4]=0,a[5]=t,a[6]=0,a[8]=0,a[9]=0,a[10]=t,a}function h(t,c,a){const f=a??new r(12);return f[0]=c*t[0*4+0],f[1]=c*t[0*4+1],f[2]=c*t[0*4+2],f[4]=c*t[1*4+0],f[5]=c*t[1*4+1],f[6]=c*t[1*4+2],f[8]=c*t[2*4+0],f[9]=c*t[2*4+1],f[10]=c*t[2*4+2],f}return{add:W,clone:I,copy:J,create:v,determinant:pe,equals:ae,equalsApproximately:Q,fromMat4:w,fromQuat:S,get3DScaling:D,getAxis:K,getScaling:_e,getTranslation:he,identity:oe,inverse:ee,invert:L,mul:ie,mulScalar:R,multiply:te,multiplyScalar:G,negate:M,rotate:ge,rotateX:re,rotateY:Se,rotateZ:Te,rotation:de,rotationX:V,rotationY:ye,rotationZ:me,scale:ke,scale3D:we,scaling:ze,scaling3D:le,set:b,setAxis:Z,setTranslation:$,translate:C,translation:ne,transpose:O,uniformScale:B,uniformScale3D:h,uniformScaling:Be,uniformScaling3D:A}}const It=new Map;function bn(r){let n=It.get(r);return n||(n=yn(r),It.set(r,n)),n}function wn(r){const n=xt(r);function d(e,u,i,o,s,l,m,_,p,P,k,U,E,z,N,Y){const F=new r(16);return e!==void 0&&(F[0]=e,u!==void 0&&(F[1]=u,i!==void 0&&(F[2]=i,o!==void 0&&(F[3]=o,s!==void 0&&(F[4]=s,l!==void 0&&(F[5]=l,m!==void 0&&(F[6]=m,_!==void 0&&(F[7]=_,p!==void 0&&(F[8]=p,P!==void 0&&(F[9]=P,k!==void 0&&(F[10]=k,U!==void 0&&(F[11]=U,E!==void 0&&(F[12]=E,z!==void 0&&(F[13]=z,N!==void 0&&(F[14]=N,Y!==void 0&&(F[15]=Y)))))))))))))))),F}function v(e,u,i,o,s,l,m,_,p,P,k,U,E,z,N,Y,F){const H=F??new r(16);return H[0]=e,H[1]=u,H[2]=i,H[3]=o,H[4]=s,H[5]=l,H[6]=m,H[7]=_,H[8]=p,H[9]=P,H[10]=k,H[11]=U,H[12]=E,H[13]=z,H[14]=N,H[15]=Y,H}function b(e,u){const i=u??new r(16);return i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=0,i[4]=e[4],i[5]=e[5],i[6]=e[6],i[7]=0,i[8]=e[8],i[9]=e[9],i[10]=e[10],i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,i}function w(e,u){const i=u??new r(16),o=e[0],s=e[1],l=e[2],m=e[3],_=o+o,p=s+s,P=l+l,k=o*_,U=s*_,E=s*p,z=l*_,N=l*p,Y=l*P,F=m*_,H=m*p,q=m*P;return i[0]=1-E-Y,i[1]=U+q,i[2]=z-H,i[3]=0,i[4]=U-q,i[5]=1-k-Y,i[6]=N+F,i[7]=0,i[8]=z+H,i[9]=N-F,i[10]=1-k-E,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,i}function S(e,u){const i=u??new r(16);return i[0]=-e[0],i[1]=-e[1],i[2]=-e[2],i[3]=-e[3],i[4]=-e[4],i[5]=-e[5],i[6]=-e[6],i[7]=-e[7],i[8]=-e[8],i[9]=-e[9],i[10]=-e[10],i[11]=-e[11],i[12]=-e[12],i[13]=-e[13],i[14]=-e[14],i[15]=-e[15],i}function M(e,u,i){const o=i??new r(16);return o[0]=e[0]+u[0],o[1]=e[1]+u[1],o[2]=e[2]+u[2],o[3]=e[3]+u[3],o[4]=e[4]+u[4],o[5]=e[5]+u[5],o[6]=e[6]+u[6],o[7]=e[7]+u[7],o[8]=e[8]+u[8],o[9]=e[9]+u[9],o[10]=e[10]+u[10],o[11]=e[11]+u[11],o[12]=e[12]+u[12],o[13]=e[13]+u[13],o[14]=e[14]+u[14],o[15]=e[15]+u[15],o}function G(e,u,i){const o=i??new r(16);return o[0]=e[0]*u,o[1]=e[1]*u,o[2]=e[2]*u,o[3]=e[3]*u,o[4]=e[4]*u,o[5]=e[5]*u,o[6]=e[6]*u,o[7]=e[7]*u,o[8]=e[8]*u,o[9]=e[9]*u,o[10]=e[10]*u,o[11]=e[11]*u,o[12]=e[12]*u,o[13]=e[13]*u,o[14]=e[14]*u,o[15]=e[15]*u,o}const R=G;function W(e,u){const i=u??new r(16);return i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=e[3],i[4]=e[4],i[5]=e[5],i[6]=e[6],i[7]=e[7],i[8]=e[8],i[9]=e[9],i[10]=e[10],i[11]=e[11],i[12]=e[12],i[13]=e[13],i[14]=e[14],i[15]=e[15],i}const J=W;function I(e,u){return Math.abs(e[0]-u[0])<be&&Math.abs(e[1]-u[1])<be&&Math.abs(e[2]-u[2])<be&&Math.abs(e[3]-u[3])<be&&Math.abs(e[4]-u[4])<be&&Math.abs(e[5]-u[5])<be&&Math.abs(e[6]-u[6])<be&&Math.abs(e[7]-u[7])<be&&Math.abs(e[8]-u[8])<be&&Math.abs(e[9]-u[9])<be&&Math.abs(e[10]-u[10])<be&&Math.abs(e[11]-u[11])<be&&Math.abs(e[12]-u[12])<be&&Math.abs(e[13]-u[13])<be&&Math.abs(e[14]-u[14])<be&&Math.abs(e[15]-u[15])<be}function Q(e,u){return e[0]===u[0]&&e[1]===u[1]&&e[2]===u[2]&&e[3]===u[3]&&e[4]===u[4]&&e[5]===u[5]&&e[6]===u[6]&&e[7]===u[7]&&e[8]===u[8]&&e[9]===u[9]&&e[10]===u[10]&&e[11]===u[11]&&e[12]===u[12]&&e[13]===u[13]&&e[14]===u[14]&&e[15]===u[15]}function ae(e){const u=e??new r(16);return u[0]=1,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=1,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=1,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function oe(e,u){const i=u??new r(16);if(i===e){let j;return j=e[1],e[1]=e[4],e[4]=j,j=e[2],e[2]=e[8],e[8]=j,j=e[3],e[3]=e[12],e[12]=j,j=e[6],e[6]=e[9],e[9]=j,j=e[7],e[7]=e[13],e[13]=j,j=e[11],e[11]=e[14],e[14]=j,i}const o=e[0*4+0],s=e[0*4+1],l=e[0*4+2],m=e[0*4+3],_=e[1*4+0],p=e[1*4+1],P=e[1*4+2],k=e[1*4+3],U=e[2*4+0],E=e[2*4+1],z=e[2*4+2],N=e[2*4+3],Y=e[3*4+0],F=e[3*4+1],H=e[3*4+2],q=e[3*4+3];return i[0]=o,i[1]=_,i[2]=U,i[3]=Y,i[4]=s,i[5]=p,i[6]=E,i[7]=F,i[8]=l,i[9]=P,i[10]=z,i[11]=H,i[12]=m,i[13]=k,i[14]=N,i[15]=q,i}function O(e,u){const i=u??new r(16),o=e[0*4+0],s=e[0*4+1],l=e[0*4+2],m=e[0*4+3],_=e[1*4+0],p=e[1*4+1],P=e[1*4+2],k=e[1*4+3],U=e[2*4+0],E=e[2*4+1],z=e[2*4+2],N=e[2*4+3],Y=e[3*4+0],F=e[3*4+1],H=e[3*4+2],q=e[3*4+3],j=z*q,ce=H*N,X=P*q,ue=H*k,xe=P*N,ve=z*k,Ee=l*q,De=H*m,Ie=l*N,Me=z*m,Ue=l*k,Oe=P*m,Re=U*F,fe=Y*E,Ge=_*F,Ae=Y*p,Pe=_*E,He=U*p,je=o*F,Ye=Y*s,Le=o*E,Ce=U*s,lt=o*p,ut=_*s,Mt=j*p+ue*E+xe*F-(ce*p+X*E+ve*F),Gt=ce*s+Ee*E+Me*F-(j*s+De*E+Ie*F),At=X*s+De*p+Ue*F-(ue*s+Ee*p+Oe*F),zt=ve*s+Ie*p+Oe*E-(xe*s+Me*p+Ue*E),Fe=1/(o*Mt+_*Gt+U*At+Y*zt);return i[0]=Fe*Mt,i[1]=Fe*Gt,i[2]=Fe*At,i[3]=Fe*zt,i[4]=Fe*(ce*_+X*U+ve*Y-(j*_+ue*U+xe*Y)),i[5]=Fe*(j*o+De*U+Ie*Y-(ce*o+Ee*U+Me*Y)),i[6]=Fe*(ue*o+Ee*_+Oe*Y-(X*o+De*_+Ue*Y)),i[7]=Fe*(xe*o+Me*_+Ue*U-(ve*o+Ie*_+Oe*U)),i[8]=Fe*(Re*k+Ae*N+Pe*q-(fe*k+Ge*N+He*q)),i[9]=Fe*(fe*m+je*N+Ce*q-(Re*m+Ye*N+Le*q)),i[10]=Fe*(Ge*m+Ye*k+lt*q-(Ae*m+je*k+ut*q)),i[11]=Fe*(He*m+Le*k+ut*N-(Pe*m+Ce*k+lt*N)),i[12]=Fe*(Ge*z+He*H+fe*P-(Pe*H+Re*P+Ae*z)),i[13]=Fe*(Le*H+Re*l+Ye*z-(je*z+Ce*H+fe*l)),i[14]=Fe*(je*P+ut*H+Ae*l-(lt*H+Ge*l+Ye*P)),i[15]=Fe*(lt*z+Pe*l+Ce*P-(Le*P+ut*z+He*l)),i}function ee(e){const u=e[0],i=e[0*4+1],o=e[0*4+2],s=e[0*4+3],l=e[1*4+0],m=e[1*4+1],_=e[1*4+2],p=e[1*4+3],P=e[2*4+0],k=e[2*4+1],U=e[2*4+2],E=e[2*4+3],z=e[3*4+0],N=e[3*4+1],Y=e[3*4+2],F=e[3*4+3],H=U*F,q=Y*E,j=_*F,ce=Y*p,X=_*E,ue=U*p,xe=o*F,ve=Y*s,Ee=o*E,De=U*s,Ie=o*p,Me=_*s,Ue=H*m+ce*k+X*N-(q*m+j*k+ue*N),Oe=q*i+xe*k+De*N-(H*i+ve*k+Ee*N),Re=j*i+ve*m+Ie*N-(ce*i+xe*m+Me*N),fe=ue*i+Ee*m+Me*k-(X*i+De*m+Ie*k);return u*Ue+l*Oe+P*Re+z*fe}const pe=O;function L(e,u,i){const o=i??new r(16),s=e[0],l=e[1],m=e[2],_=e[3],p=e[4+0],P=e[4+1],k=e[4+2],U=e[4+3],E=e[8+0],z=e[8+1],N=e[8+2],Y=e[8+3],F=e[12+0],H=e[12+1],q=e[12+2],j=e[12+3],ce=u[0],X=u[1],ue=u[2],xe=u[3],ve=u[4+0],Ee=u[4+1],De=u[4+2],Ie=u[4+3],Me=u[8+0],Ue=u[8+1],Oe=u[8+2],Re=u[8+3],fe=u[12+0],Ge=u[12+1],Ae=u[12+2],Pe=u[12+3];return o[0]=s*ce+p*X+E*ue+F*xe,o[1]=l*ce+P*X+z*ue+H*xe,o[2]=m*ce+k*X+N*ue+q*xe,o[3]=_*ce+U*X+Y*ue+j*xe,o[4]=s*ve+p*Ee+E*De+F*Ie,o[5]=l*ve+P*Ee+z*De+H*Ie,o[6]=m*ve+k*Ee+N*De+q*Ie,o[7]=_*ve+U*Ee+Y*De+j*Ie,o[8]=s*Me+p*Ue+E*Oe+F*Re,o[9]=l*Me+P*Ue+z*Oe+H*Re,o[10]=m*Me+k*Ue+N*Oe+q*Re,o[11]=_*Me+U*Ue+Y*Oe+j*Re,o[12]=s*fe+p*Ge+E*Ae+F*Pe,o[13]=l*fe+P*Ge+z*Ae+H*Pe,o[14]=m*fe+k*Ge+N*Ae+q*Pe,o[15]=_*fe+U*Ge+Y*Ae+j*Pe,o}const te=L;function ie(e,u,i){const o=i??ae();return e!==o&&(o[0]=e[0],o[1]=e[1],o[2]=e[2],o[3]=e[3],o[4]=e[4],o[5]=e[5],o[6]=e[6],o[7]=e[7],o[8]=e[8],o[9]=e[9],o[10]=e[10],o[11]=e[11]),o[12]=u[0],o[13]=u[1],o[14]=u[2],o[15]=1,o}function $(e,u){const i=u??n.create();return i[0]=e[12],i[1]=e[13],i[2]=e[14],i}function he(e,u,i){const o=i??n.create(),s=u*4;return o[0]=e[s+0],o[1]=e[s+1],o[2]=e[s+2],o}function K(e,u,i,o){const s=o===e?o:W(e,o),l=i*4;return s[l+0]=u[0],s[l+1]=u[1],s[l+2]=u[2],s}function Z(e,u){const i=u??n.create(),o=e[0],s=e[1],l=e[2],m=e[4],_=e[5],p=e[6],P=e[8],k=e[9],U=e[10];return i[0]=Math.sqrt(o*o+s*s+l*l),i[1]=Math.sqrt(m*m+_*_+p*p),i[2]=Math.sqrt(P*P+k*k+U*U),i}function _e(e,u,i,o,s){const l=s??new r(16),m=Math.tan(Math.PI*.5-.5*e);if(l[0]=m/u,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=m,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[11]=-1,l[12]=0,l[13]=0,l[15]=0,Number.isFinite(o)){const _=1/(i-o);l[10]=o*_,l[14]=o*i*_}else l[10]=-1,l[14]=-i;return l}function D(e,u,i,o=1/0,s){const l=s??new r(16),m=1/Math.tan(e*.5);if(l[0]=m/u,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=m,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[11]=-1,l[12]=0,l[13]=0,l[15]=0,o===1/0)l[10]=0,l[14]=i;else{const _=1/(o-i);l[10]=i*_,l[14]=o*i*_}return l}function ne(e,u,i,o,s,l,m){const _=m??new r(16);return _[0]=2/(u-e),_[1]=0,_[2]=0,_[3]=0,_[4]=0,_[5]=2/(o-i),_[6]=0,_[7]=0,_[8]=0,_[9]=0,_[10]=1/(s-l),_[11]=0,_[12]=(u+e)/(e-u),_[13]=(o+i)/(i-o),_[14]=s/(s-l),_[15]=1,_}function C(e,u,i,o,s,l,m){const _=m??new r(16),p=u-e,P=o-i,k=s-l;return _[0]=2*s/p,_[1]=0,_[2]=0,_[3]=0,_[4]=0,_[5]=2*s/P,_[6]=0,_[7]=0,_[8]=(e+u)/p,_[9]=(o+i)/P,_[10]=l/k,_[11]=-1,_[12]=0,_[13]=0,_[14]=s*l/k,_[15]=0,_}function de(e,u,i,o,s,l=1/0,m){const _=m??new r(16),p=u-e,P=o-i;if(_[0]=2*s/p,_[1]=0,_[2]=0,_[3]=0,_[4]=0,_[5]=2*s/P,_[6]=0,_[7]=0,_[8]=(e+u)/p,_[9]=(o+i)/P,_[11]=-1,_[12]=0,_[13]=0,_[15]=0,l===1/0)_[10]=0,_[14]=s;else{const k=1/(l-s);_[10]=s*k,_[14]=l*s*k}return _}const ge=n.create(),V=n.create(),re=n.create();function ye(e,u,i,o){const s=o??new r(16);return n.normalize(n.subtract(u,e,re),re),n.normalize(n.cross(i,re,ge),ge),n.normalize(n.cross(re,ge,V),V),s[0]=ge[0],s[1]=ge[1],s[2]=ge[2],s[3]=0,s[4]=V[0],s[5]=V[1],s[6]=V[2],s[7]=0,s[8]=re[0],s[9]=re[1],s[10]=re[2],s[11]=0,s[12]=e[0],s[13]=e[1],s[14]=e[2],s[15]=1,s}function Se(e,u,i,o){const s=o??new r(16);return n.normalize(n.subtract(e,u,re),re),n.normalize(n.cross(i,re,ge),ge),n.normalize(n.cross(re,ge,V),V),s[0]=ge[0],s[1]=ge[1],s[2]=ge[2],s[3]=0,s[4]=V[0],s[5]=V[1],s[6]=V[2],s[7]=0,s[8]=re[0],s[9]=re[1],s[10]=re[2],s[11]=0,s[12]=e[0],s[13]=e[1],s[14]=e[2],s[15]=1,s}function me(e,u,i,o){const s=o??new r(16);return n.normalize(n.subtract(e,u,re),re),n.normalize(n.cross(i,re,ge),ge),n.normalize(n.cross(re,ge,V),V),s[0]=ge[0],s[1]=V[0],s[2]=re[0],s[3]=0,s[4]=ge[1],s[5]=V[1],s[6]=re[1],s[7]=0,s[8]=ge[2],s[9]=V[2],s[10]=re[2],s[11]=0,s[12]=-(ge[0]*e[0]+ge[1]*e[1]+ge[2]*e[2]),s[13]=-(V[0]*e[0]+V[1]*e[1]+V[2]*e[2]),s[14]=-(re[0]*e[0]+re[1]*e[1]+re[2]*e[2]),s[15]=1,s}function Te(e,u){const i=u??new r(16);return i[0]=1,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=1,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=1,i[11]=0,i[12]=e[0],i[13]=e[1],i[14]=e[2],i[15]=1,i}function ze(e,u,i){const o=i??new r(16),s=u[0],l=u[1],m=u[2],_=e[0],p=e[1],P=e[2],k=e[3],U=e[1*4+0],E=e[1*4+1],z=e[1*4+2],N=e[1*4+3],Y=e[2*4+0],F=e[2*4+1],H=e[2*4+2],q=e[2*4+3],j=e[3*4+0],ce=e[3*4+1],X=e[3*4+2],ue=e[3*4+3];return e!==o&&(o[0]=_,o[1]=p,o[2]=P,o[3]=k,o[4]=U,o[5]=E,o[6]=z,o[7]=N,o[8]=Y,o[9]=F,o[10]=H,o[11]=q),o[12]=_*s+U*l+Y*m+j,o[13]=p*s+E*l+F*m+ce,o[14]=P*s+z*l+H*m+X,o[15]=k*s+N*l+q*m+ue,o}function ke(e,u){const i=u??new r(16),o=Math.cos(e),s=Math.sin(e);return i[0]=1,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=o,i[6]=s,i[7]=0,i[8]=0,i[9]=-s,i[10]=o,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,i}function le(e,u,i){const o=i??new r(16),s=e[4],l=e[5],m=e[6],_=e[7],p=e[8],P=e[9],k=e[10],U=e[11],E=Math.cos(u),z=Math.sin(u);return o[4]=E*s+z*p,o[5]=E*l+z*P,o[6]=E*m+z*k,o[7]=E*_+z*U,o[8]=E*p-z*s,o[9]=E*P-z*l,o[10]=E*k-z*m,o[11]=E*U-z*_,e!==o&&(o[0]=e[0],o[1]=e[1],o[2]=e[2],o[3]=e[3],o[12]=e[12],o[13]=e[13],o[14]=e[14],o[15]=e[15]),o}function we(e,u){const i=u??new r(16),o=Math.cos(e),s=Math.sin(e);return i[0]=o,i[1]=0,i[2]=-s,i[3]=0,i[4]=0,i[5]=1,i[6]=0,i[7]=0,i[8]=s,i[9]=0,i[10]=o,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,i}function Be(e,u,i){const o=i??new r(16),s=e[0*4+0],l=e[0*4+1],m=e[0*4+2],_=e[0*4+3],p=e[2*4+0],P=e[2*4+1],k=e[2*4+2],U=e[2*4+3],E=Math.cos(u),z=Math.sin(u);return o[0]=E*s-z*p,o[1]=E*l-z*P,o[2]=E*m-z*k,o[3]=E*_-z*U,o[8]=E*p+z*s,o[9]=E*P+z*l,o[10]=E*k+z*m,o[11]=E*U+z*_,e!==o&&(o[4]=e[4],o[5]=e[5],o[6]=e[6],o[7]=e[7],o[12]=e[12],o[13]=e[13],o[14]=e[14],o[15]=e[15]),o}function B(e,u){const i=u??new r(16),o=Math.cos(e),s=Math.sin(e);return i[0]=o,i[1]=s,i[2]=0,i[3]=0,i[4]=-s,i[5]=o,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=1,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,i}function A(e,u,i){const o=i??new r(16),s=e[0*4+0],l=e[0*4+1],m=e[0*4+2],_=e[0*4+3],p=e[1*4+0],P=e[1*4+1],k=e[1*4+2],U=e[1*4+3],E=Math.cos(u),z=Math.sin(u);return o[0]=E*s+z*p,o[1]=E*l+z*P,o[2]=E*m+z*k,o[3]=E*_+z*U,o[4]=E*p-z*s,o[5]=E*P-z*l,o[6]=E*k-z*m,o[7]=E*U-z*_,e!==o&&(o[8]=e[8],o[9]=e[9],o[10]=e[10],o[11]=e[11],o[12]=e[12],o[13]=e[13],o[14]=e[14],o[15]=e[15]),o}function h(e,u,i){const o=i??new r(16);let s=e[0],l=e[1],m=e[2];const _=Math.sqrt(s*s+l*l+m*m);s/=_,l/=_,m/=_;const p=s*s,P=l*l,k=m*m,U=Math.cos(u),E=Math.sin(u),z=1-U;return o[0]=p+(1-p)*U,o[1]=s*l*z+m*E,o[2]=s*m*z-l*E,o[3]=0,o[4]=s*l*z-m*E,o[5]=P+(1-P)*U,o[6]=l*m*z+s*E,o[7]=0,o[8]=s*m*z+l*E,o[9]=l*m*z-s*E,o[10]=k+(1-k)*U,o[11]=0,o[12]=0,o[13]=0,o[14]=0,o[15]=1,o}const t=h;function c(e,u,i,o){const s=o??new r(16);let l=u[0],m=u[1],_=u[2];const p=Math.sqrt(l*l+m*m+_*_);l/=p,m/=p,_/=p;const P=l*l,k=m*m,U=_*_,E=Math.cos(i),z=Math.sin(i),N=1-E,Y=P+(1-P)*E,F=l*m*N+_*z,H=l*_*N-m*z,q=l*m*N-_*z,j=k+(1-k)*E,ce=m*_*N+l*z,X=l*_*N+m*z,ue=m*_*N-l*z,xe=U+(1-U)*E,ve=e[0],Ee=e[1],De=e[2],Ie=e[3],Me=e[4],Ue=e[5],Oe=e[6],Re=e[7],fe=e[8],Ge=e[9],Ae=e[10],Pe=e[11];return s[0]=Y*ve+F*Me+H*fe,s[1]=Y*Ee+F*Ue+H*Ge,s[2]=Y*De+F*Oe+H*Ae,s[3]=Y*Ie+F*Re+H*Pe,s[4]=q*ve+j*Me+ce*fe,s[5]=q*Ee+j*Ue+ce*Ge,s[6]=q*De+j*Oe+ce*Ae,s[7]=q*Ie+j*Re+ce*Pe,s[8]=X*ve+ue*Me+xe*fe,s[9]=X*Ee+ue*Ue+xe*Ge,s[10]=X*De+ue*Oe+xe*Ae,s[11]=X*Ie+ue*Re+xe*Pe,e!==s&&(s[12]=e[12],s[13]=e[13],s[14]=e[14],s[15]=e[15]),s}const a=c;function f(e,u){const i=u??new r(16);return i[0]=e[0],i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=e[1],i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=e[2],i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,i}function g(e,u,i){const o=i??new r(16),s=u[0],l=u[1],m=u[2];return o[0]=s*e[0*4+0],o[1]=s*e[0*4+1],o[2]=s*e[0*4+2],o[3]=s*e[0*4+3],o[4]=l*e[1*4+0],o[5]=l*e[1*4+1],o[6]=l*e[1*4+2],o[7]=l*e[1*4+3],o[8]=m*e[2*4+0],o[9]=m*e[2*4+1],o[10]=m*e[2*4+2],o[11]=m*e[2*4+3],e!==o&&(o[12]=e[12],o[13]=e[13],o[14]=e[14],o[15]=e[15]),o}function x(e,u){const i=u??new r(16);return i[0]=e,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=e,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=e,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,i}function y(e,u,i){const o=i??new r(16);return o[0]=u*e[0*4+0],o[1]=u*e[0*4+1],o[2]=u*e[0*4+2],o[3]=u*e[0*4+3],o[4]=u*e[1*4+0],o[5]=u*e[1*4+1],o[6]=u*e[1*4+2],o[7]=u*e[1*4+3],o[8]=u*e[2*4+0],o[9]=u*e[2*4+1],o[10]=u*e[2*4+2],o[11]=u*e[2*4+3],e!==o&&(o[12]=e[12],o[13]=e[13],o[14]=e[14],o[15]=e[15]),o}return{add:M,aim:ye,axisRotate:c,axisRotation:h,cameraAim:Se,clone:J,copy:W,create:d,determinant:ee,equals:Q,equalsApproximately:I,fromMat3:b,fromQuat:w,frustum:C,frustumReverseZ:de,getAxis:he,getScaling:Z,getTranslation:$,identity:ae,inverse:O,invert:pe,lookAt:me,mul:te,mulScalar:R,multiply:L,multiplyScalar:G,negate:S,ortho:ne,perspective:_e,perspectiveReverseZ:D,rotate:a,rotateX:le,rotateY:Be,rotateZ:A,rotation:t,rotationX:ke,rotationY:we,rotationZ:B,scale:g,scaling:f,set:v,setAxis:K,setTranslation:ie,translate:ze,translation:Te,transpose:oe,uniformScale:y,uniformScaling:x}}const Ut=new Map;function vn(r){let n=Ut.get(r);return n||(n=wn(r),Ut.set(r,n)),n}function Sn(r){const n=xt(r);function d(B,A,h,t){const c=new r(4);return B!==void 0&&(c[0]=B,A!==void 0&&(c[1]=A,h!==void 0&&(c[2]=h,t!==void 0&&(c[3]=t)))),c}const v=d;function b(B,A,h,t,c){const a=c??new r(4);return a[0]=B,a[1]=A,a[2]=h,a[3]=t,a}function w(B,A,h){const t=h??new r(4),c=A*.5,a=Math.sin(c);return t[0]=a*B[0],t[1]=a*B[1],t[2]=a*B[2],t[3]=Math.cos(c),t}function S(B,A){const h=A??n.create(3),t=Math.acos(B[3])*2,c=Math.sin(t*.5);return c>be?(h[0]=B[0]/c,h[1]=B[1]/c,h[2]=B[2]/c):(h[0]=1,h[1]=0,h[2]=0),{angle:t,axis:h}}function M(B,A){const h=_e(B,A);return Math.acos(2*h*h-1)}function G(B,A,h){const t=h??new r(4),c=B[0],a=B[1],f=B[2],g=B[3],x=A[0],y=A[1],e=A[2],u=A[3];return t[0]=c*u+g*x+a*e-f*y,t[1]=a*u+g*y+f*x-c*e,t[2]=f*u+g*e+c*y-a*x,t[3]=g*u-c*x-a*y-f*e,t}const R=G;function W(B,A,h){const t=h??new r(4),c=A*.5,a=B[0],f=B[1],g=B[2],x=B[3],y=Math.sin(c),e=Math.cos(c);return t[0]=a*e+x*y,t[1]=f*e+g*y,t[2]=g*e-f*y,t[3]=x*e-a*y,t}function J(B,A,h){const t=h??new r(4),c=A*.5,a=B[0],f=B[1],g=B[2],x=B[3],y=Math.sin(c),e=Math.cos(c);return t[0]=a*e-g*y,t[1]=f*e+x*y,t[2]=g*e+a*y,t[3]=x*e-f*y,t}function I(B,A,h){const t=h??new r(4),c=A*.5,a=B[0],f=B[1],g=B[2],x=B[3],y=Math.sin(c),e=Math.cos(c);return t[0]=a*e+f*y,t[1]=f*e-a*y,t[2]=g*e+x*y,t[3]=x*e-g*y,t}function Q(B,A,h,t){const c=t??new r(4),a=B[0],f=B[1],g=B[2],x=B[3];let y=A[0],e=A[1],u=A[2],i=A[3],o=a*y+f*e+g*u+x*i;o<0&&(o=-o,y=-y,e=-e,u=-u,i=-i);let s,l;if(1-o>be){const m=Math.acos(o),_=Math.sin(m);s=Math.sin((1-h)*m)/_,l=Math.sin(h*m)/_}else s=1-h,l=h;return c[0]=s*a+l*y,c[1]=s*f+l*e,c[2]=s*g+l*u,c[3]=s*x+l*i,c}function ae(B,A){const h=A??new r(4),t=B[0],c=B[1],a=B[2],f=B[3],g=t*t+c*c+a*a+f*f,x=g?1/g:0;return h[0]=-t*x,h[1]=-c*x,h[2]=-a*x,h[3]=f*x,h}function oe(B,A){const h=A??new r(4);return h[0]=-B[0],h[1]=-B[1],h[2]=-B[2],h[3]=B[3],h}function O(B,A){const h=A??new r(4),t=B[0]+B[5]+B[10];if(t>0){const c=Math.sqrt(t+1);h[3]=.5*c;const a=.5/c;h[0]=(B[6]-B[9])*a,h[1]=(B[8]-B[2])*a,h[2]=(B[1]-B[4])*a}else{let c=0;B[5]>B[0]&&(c=1),B[10]>B[c*4+c]&&(c=2);const a=(c+1)%3,f=(c+2)%3,g=Math.sqrt(B[c*4+c]-B[a*4+a]-B[f*4+f]+1);h[c]=.5*g;const x=.5/g;h[3]=(B[a*4+f]-B[f*4+a])*x,h[a]=(B[a*4+c]+B[c*4+a])*x,h[f]=(B[f*4+c]+B[c*4+f])*x}return h}function ee(B,A,h,t,c){const a=c??new r(4),f=B*.5,g=A*.5,x=h*.5,y=Math.sin(f),e=Math.cos(f),u=Math.sin(g),i=Math.cos(g),o=Math.sin(x),s=Math.cos(x);switch(t){case"xyz":a[0]=y*i*s+e*u*o,a[1]=e*u*s-y*i*o,a[2]=e*i*o+y*u*s,a[3]=e*i*s-y*u*o;break;case"xzy":a[0]=y*i*s-e*u*o,a[1]=e*u*s-y*i*o,a[2]=e*i*o+y*u*s,a[3]=e*i*s+y*u*o;break;case"yxz":a[0]=y*i*s+e*u*o,a[1]=e*u*s-y*i*o,a[2]=e*i*o-y*u*s,a[3]=e*i*s+y*u*o;break;case"yzx":a[0]=y*i*s+e*u*o,a[1]=e*u*s+y*i*o,a[2]=e*i*o-y*u*s,a[3]=e*i*s-y*u*o;break;case"zxy":a[0]=y*i*s-e*u*o,a[1]=e*u*s+y*i*o,a[2]=e*i*o+y*u*s,a[3]=e*i*s-y*u*o;break;case"zyx":a[0]=y*i*s-e*u*o,a[1]=e*u*s+y*i*o,a[2]=e*i*o-y*u*s,a[3]=e*i*s+y*u*o;break;default:throw new Error(`Unknown rotation order: ${t}`)}return a}function pe(B,A){const h=A??new r(4);return h[0]=B[0],h[1]=B[1],h[2]=B[2],h[3]=B[3],h}const L=pe;function te(B,A,h){const t=h??new r(4);return t[0]=B[0]+A[0],t[1]=B[1]+A[1],t[2]=B[2]+A[2],t[3]=B[3]+A[3],t}function ie(B,A,h){const t=h??new r(4);return t[0]=B[0]-A[0],t[1]=B[1]-A[1],t[2]=B[2]-A[2],t[3]=B[3]-A[3],t}const $=ie;function he(B,A,h){const t=h??new r(4);return t[0]=B[0]*A,t[1]=B[1]*A,t[2]=B[2]*A,t[3]=B[3]*A,t}const K=he;function Z(B,A,h){const t=h??new r(4);return t[0]=B[0]/A,t[1]=B[1]/A,t[2]=B[2]/A,t[3]=B[3]/A,t}function _e(B,A){return B[0]*A[0]+B[1]*A[1]+B[2]*A[2]+B[3]*A[3]}function D(B,A,h,t){const c=t??new r(4);return c[0]=B[0]+h*(A[0]-B[0]),c[1]=B[1]+h*(A[1]-B[1]),c[2]=B[2]+h*(A[2]-B[2]),c[3]=B[3]+h*(A[3]-B[3]),c}function ne(B){const A=B[0],h=B[1],t=B[2],c=B[3];return Math.sqrt(A*A+h*h+t*t+c*c)}const C=ne;function de(B){const A=B[0],h=B[1],t=B[2],c=B[3];return A*A+h*h+t*t+c*c}const ge=de;function V(B,A){const h=A??new r(4),t=B[0],c=B[1],a=B[2],f=B[3],g=Math.sqrt(t*t+c*c+a*a+f*f);return g>1e-5?(h[0]=t/g,h[1]=c/g,h[2]=a/g,h[3]=f/g):(h[0]=0,h[1]=0,h[2]=0,h[3]=1),h}function re(B,A){return Math.abs(B[0]-A[0])<be&&Math.abs(B[1]-A[1])<be&&Math.abs(B[2]-A[2])<be&&Math.abs(B[3]-A[3])<be}function ye(B,A){return B[0]===A[0]&&B[1]===A[1]&&B[2]===A[2]&&B[3]===A[3]}function Se(B){const A=B??new r(4);return A[0]=0,A[1]=0,A[2]=0,A[3]=1,A}const me=n.create(),Te=n.create(),ze=n.create();function ke(B,A,h){const t=h??new r(4),c=n.dot(B,A);return c<-.999999?(n.cross(Te,B,me),n.len(me)<1e-6&&n.cross(ze,B,me),n.normalize(me,me),w(me,Math.PI,t),t):c>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):(n.cross(B,A,me),t[0]=me[0],t[1]=me[1],t[2]=me[2],t[3]=1+c,V(t,t))}const le=new r(4),we=new r(4);function Be(B,A,h,t,c,a){const f=a??new r(4);return Q(B,t,c,le),Q(A,h,c,we),Q(le,we,2*c*(1-c),f),f}return{create:d,fromValues:v,set:b,fromAxisAngle:w,toAxisAngle:S,angle:M,multiply:G,mul:R,rotateX:W,rotateY:J,rotateZ:I,slerp:Q,inverse:ae,conjugate:oe,fromMat:O,fromEuler:ee,copy:pe,clone:L,add:te,subtract:ie,sub:$,mulScalar:he,scale:K,divScalar:Z,dot:_e,lerp:D,length:ne,len:C,lengthSq:de,lenSq:ge,normalize:V,equalsApproximately:re,equals:ye,identity:Se,rotationTo:ke,sqlerp:Be}}const Rt=new Map;function Bn(r){let n=Rt.get(r);return n||(n=Sn(r),Rt.set(r,n)),n}function Pn(r){function n(h,t,c,a){const f=new r(4);return h!==void 0&&(f[0]=h,t!==void 0&&(f[1]=t,c!==void 0&&(f[2]=c,a!==void 0&&(f[3]=a)))),f}const d=n;function v(h,t,c,a,f){const g=f??new r(4);return g[0]=h,g[1]=t,g[2]=c,g[3]=a,g}function b(h,t){const c=t??new r(4);return c[0]=Math.ceil(h[0]),c[1]=Math.ceil(h[1]),c[2]=Math.ceil(h[2]),c[3]=Math.ceil(h[3]),c}function w(h,t){const c=t??new r(4);return c[0]=Math.floor(h[0]),c[1]=Math.floor(h[1]),c[2]=Math.floor(h[2]),c[3]=Math.floor(h[3]),c}function S(h,t){const c=t??new r(4);return c[0]=Math.round(h[0]),c[1]=Math.round(h[1]),c[2]=Math.round(h[2]),c[3]=Math.round(h[3]),c}function M(h,t=0,c=1,a){const f=a??new r(4);return f[0]=Math.min(c,Math.max(t,h[0])),f[1]=Math.min(c,Math.max(t,h[1])),f[2]=Math.min(c,Math.max(t,h[2])),f[3]=Math.min(c,Math.max(t,h[3])),f}function G(h,t,c){const a=c??new r(4);return a[0]=h[0]+t[0],a[1]=h[1]+t[1],a[2]=h[2]+t[2],a[3]=h[3]+t[3],a}function R(h,t,c,a){const f=a??new r(4);return f[0]=h[0]+t[0]*c,f[1]=h[1]+t[1]*c,f[2]=h[2]+t[2]*c,f[3]=h[3]+t[3]*c,f}function W(h,t,c){const a=c??new r(4);return a[0]=h[0]-t[0],a[1]=h[1]-t[1],a[2]=h[2]-t[2],a[3]=h[3]-t[3],a}const J=W;function I(h,t){return Math.abs(h[0]-t[0])<be&&Math.abs(h[1]-t[1])<be&&Math.abs(h[2]-t[2])<be&&Math.abs(h[3]-t[3])<be}function Q(h,t){return h[0]===t[0]&&h[1]===t[1]&&h[2]===t[2]&&h[3]===t[3]}function ae(h,t,c,a){const f=a??new r(4);return f[0]=h[0]+c*(t[0]-h[0]),f[1]=h[1]+c*(t[1]-h[1]),f[2]=h[2]+c*(t[2]-h[2]),f[3]=h[3]+c*(t[3]-h[3]),f}function oe(h,t,c,a){const f=a??new r(4);return f[0]=h[0]+c[0]*(t[0]-h[0]),f[1]=h[1]+c[1]*(t[1]-h[1]),f[2]=h[2]+c[2]*(t[2]-h[2]),f[3]=h[3]+c[3]*(t[3]-h[3]),f}function O(h,t,c){const a=c??new r(4);return a[0]=Math.max(h[0],t[0]),a[1]=Math.max(h[1],t[1]),a[2]=Math.max(h[2],t[2]),a[3]=Math.max(h[3],t[3]),a}function ee(h,t,c){const a=c??new r(4);return a[0]=Math.min(h[0],t[0]),a[1]=Math.min(h[1],t[1]),a[2]=Math.min(h[2],t[2]),a[3]=Math.min(h[3],t[3]),a}function pe(h,t,c){const a=c??new r(4);return a[0]=h[0]*t,a[1]=h[1]*t,a[2]=h[2]*t,a[3]=h[3]*t,a}const L=pe;function te(h,t,c){const a=c??new r(4);return a[0]=h[0]/t,a[1]=h[1]/t,a[2]=h[2]/t,a[3]=h[3]/t,a}function ie(h,t){const c=t??new r(4);return c[0]=1/h[0],c[1]=1/h[1],c[2]=1/h[2],c[3]=1/h[3],c}const $=ie;function he(h,t){return h[0]*t[0]+h[1]*t[1]+h[2]*t[2]+h[3]*t[3]}function K(h){const t=h[0],c=h[1],a=h[2],f=h[3];return Math.sqrt(t*t+c*c+a*a+f*f)}const Z=K;function _e(h){const t=h[0],c=h[1],a=h[2],f=h[3];return t*t+c*c+a*a+f*f}const D=_e;function ne(h,t){const c=h[0]-t[0],a=h[1]-t[1],f=h[2]-t[2],g=h[3]-t[3];return Math.sqrt(c*c+a*a+f*f+g*g)}const C=ne;function de(h,t){const c=h[0]-t[0],a=h[1]-t[1],f=h[2]-t[2],g=h[3]-t[3];return c*c+a*a+f*f+g*g}const ge=de;function V(h,t){const c=t??new r(4),a=h[0],f=h[1],g=h[2],x=h[3],y=Math.sqrt(a*a+f*f+g*g+x*x);return y>1e-5?(c[0]=a/y,c[1]=f/y,c[2]=g/y,c[3]=x/y):(c[0]=0,c[1]=0,c[2]=0,c[3]=0),c}function re(h,t){const c=t??new r(4);return c[0]=-h[0],c[1]=-h[1],c[2]=-h[2],c[3]=-h[3],c}function ye(h,t){const c=t??new r(4);return c[0]=h[0],c[1]=h[1],c[2]=h[2],c[3]=h[3],c}const Se=ye;function me(h,t,c){const a=c??new r(4);return a[0]=h[0]*t[0],a[1]=h[1]*t[1],a[2]=h[2]*t[2],a[3]=h[3]*t[3],a}const Te=me;function ze(h,t,c){const a=c??new r(4);return a[0]=h[0]/t[0],a[1]=h[1]/t[1],a[2]=h[2]/t[2],a[3]=h[3]/t[3],a}const ke=ze;function le(h){const t=h??new r(4);return t[0]=0,t[1]=0,t[2]=0,t[3]=0,t}function we(h,t,c){const a=c??new r(4),f=h[0],g=h[1],x=h[2],y=h[3];return a[0]=t[0]*f+t[4]*g+t[8]*x+t[12]*y,a[1]=t[1]*f+t[5]*g+t[9]*x+t[13]*y,a[2]=t[2]*f+t[6]*g+t[10]*x+t[14]*y,a[3]=t[3]*f+t[7]*g+t[11]*x+t[15]*y,a}function Be(h,t,c){const a=c??new r(4);return V(h,a),pe(a,t,a)}function B(h,t,c){const a=c??new r(4);return K(h)>t?Be(h,t,a):ye(h,a)}function A(h,t,c){const a=c??new r(4);return ae(h,t,.5,a)}return{create:n,fromValues:d,set:v,ceil:b,floor:w,round:S,clamp:M,add:G,addScaled:R,subtract:W,sub:J,equalsApproximately:I,equals:Q,lerp:ae,lerpV:oe,max:O,min:ee,mulScalar:pe,scale:L,divScalar:te,inverse:ie,invert:$,dot:he,length:K,len:Z,lengthSq:_e,lenSq:D,distance:ne,dist:C,distanceSq:de,distSq:ge,normalize:V,negate:re,copy:ye,clone:Se,multiply:me,mul:Te,divide:ze,div:ke,zero:le,transformMat4:we,setLength:Be,truncate:B,midpoint:A}}const Ot=new Map;function Tn(r){let n=Ot.get(r);return n||(n=Pn(r),Ot.set(r,n)),n}function Pt(r,n,d,v,b,w){return{mat3:bn(r),mat4:vn(n),quat:Bn(d),vec2:Qt(v),vec3:xt(b),vec4:Tn(w)}}const{mat3:bt,mat4:We,quat:$e,vec2:Lt,vec3:se,vec4:Ps}=Pt(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);Pt(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);Pt(gn,Array,Array,Array,Array,Array);const Ft=document.querySelector("#log");let qe=null,rt=null;function en(){if(qe)return qe;qe=document.createElement("div"),qe.className="ply-spinner-overlay";const r=document.createElement("div");return r.className="ply-spinner",qe.appendChild(r),rt=document.createElement("div"),rt.className="ply-spinner-label",qe.appendChild(rt),qe.style.display="none",document.body.appendChild(qe),qe}function kn(r){en(),rt&&r&&(rt.textContent=r),qe&&(qe.style.opacity="1",qe.style.display="flex")}function dt(r){en(),rt&&(rt.textContent=r)}function Mn(){if(!qe)return;const r=qe;r.style.opacity="0",setTimeout(()=>{r.style.opacity==="0"&&(r.style.display="none")},220)}function tn(r,n){if(!Ft)return;const d=document.createElement("p");d.innerText=r,n&&Object.assign(d.style,n),Ft.appendChild(d)}async function Ze(r){console.log(r),tn(r)}async function Gn(r){console.error(r),tn(r,{color:"red",backgroundColor:"rgba(255, 0, 0, 0.1)"})}let nn;function An(){nn=performance.now()}function Ct(r){const n=performance.now()-nn;Ze(`⏱️ ${r} Time: ${n.toFixed(0)} ms`)}function zn(r,n){return 2*Math.atan(n/(2*r))}function En(r,n,d,v){const b=Math.tan(v/2),w=Math.tan(d/2),S=b*r,M=-S,G=w*r,R=-G,W=We.create();return W[0]=2*r/(G-R),W[5]=-2*r/(S-M),W[2]=(G+R)/(G-R),W[6]=(S+M)/(S-M),W[14]=1,W[10]=n/(n-r),W[11]=-(n*r)/(n-r),We.transpose(W,W),W}async function Dn(r){Ze(`loading scene camera file... : ${r}`);const d=await(await fetch(r)).json();return Ze(`loaded cameras count: ${d.length}`),d.map(v=>{const b=se.clone(v.position),w=bt.create(...v.rotation.flat()),S=w[0],M=w[4],G=w[8],R=w[1],W=w[5],J=w[9],I=w[2],Q=w[6],ae=w[10];S*(W*ae-J*Q)-M*(R*ae-J*I)+G*(R*Q-W*I)<0&&(w[1]=-w[1],w[5]=-w[5],w[9]=-w[9]);const O=We.fromMat3(w);return{position:b,rotation:O,img_name:v.img_name,id:v.id}})}const In=4*2,Un=4*16,sn=4*Un+2*In;function Rn(r){return r.createBuffer({label:"camera uniform",size:sn,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}const Qe=new Float32Array(sn/Float32Array.BYTES_PER_ELEMENT),mt=class mt{constructor(n,d){T(this,"_renderSize",null);T(this,"uniform_buffer");T(this,"position",se.create());T(this,"rotation",We.create());T(this,"fovY",45/180*Math.PI);T(this,"fovX");T(this,"focalRatioX",1);T(this,"focal",Lt.create());T(this,"viewport",Lt.create());T(this,"view_matrix",We.identity());T(this,"view_inv_matrix",We.identity());T(this,"proj_matrix",We.identity());T(this,"proj_inv_matrix",We.identity());T(this,"_negPos",se.create());T(this,"look",se.create(0,0,1));T(this,"up",se.create(0,1,0));T(this,"right",se.create(1,0,0));this.canvas=n,this.device=d,this.uniform_buffer=Rn(d),this.on_update_canvas()}setRenderSize(n,d){this._renderSize=[n,d],this.on_update_canvas()}clearRenderSize(){this._renderSize=null,this.on_update_canvas()}on_update_canvas(){const n=this._renderSize?this._renderSize[0]:this.canvas.width,d=this._renderSize?this._renderSize[1]:this.canvas.height,v=.5*d/Math.tan(this.fovY*.5);this.focal[0]=v*this.focalRatioX,this.focal[1]=v,this.fovX=zn(this.focal[0],n),this.viewport[0]=n,this.viewport[1]=d,this.proj_matrix=En(.01,100,this.fovX,this.fovY),We.inverse(this.proj_matrix,this.proj_inv_matrix),this.update_buffer()}update_buffer(){this._negPos[0]=-this.position[0],this._negPos[1]=-this.position[1],this._negPos[2]=-this.position[2],We.copy(this.rotation,this.view_matrix),We.translate(this.view_matrix,this._negPos,this.view_matrix),We.inverse(this.view_matrix,this.view_inv_matrix),se.transformMat4Upper3x3(mt.Z_AXIS,this.view_inv_matrix,this.look),se.normalize(this.look,this.look),se.cross(this.up,this.look,this.right),se.normalize(this.right,this.right);let n=0;Qe.set(this.view_matrix,n),n+=16,Qe.set(this.view_inv_matrix,n),n+=16,Qe.set(this.proj_matrix,n),n+=16,Qe.set(this.proj_inv_matrix,n),n+=16,Qe.set(this.viewport,n),n+=2,Qe.set(this.focal,n),n+=2,this.device.queue.writeBuffer(this.uniform_buffer,0,Qe)}set_preset(n){se.copy(n.position,this.position),We.copy(n.rotation,this.rotation),this.update_buffer()}setFov(n){this.fovY=n,this.on_update_canvas()}setFocalRatio(n){this.focalRatioX=n,this.on_update_canvas()}getFov(){return this.fovY}};T(mt,"Z_AXIS",se.create(0,0,1));let wt=mt;const On=se.create(1,0,0),Ln=se.create(0,1,0),Fn=se.create(0,0,1);function Cn(r,n){const d=r[0],v=r[4],b=r[8],w=r[1],S=r[5],M=r[9],G=r[2],R=r[6],W=r[10],J=d+S+W;let I,Q,ae,oe;if(J>0){const O=.5/Math.sqrt(J+1);I=.25/O,Q=(R-M)*O,ae=(b-G)*O,oe=(w-v)*O}else if(d>S&&d>W){const O=2*Math.sqrt(1+d-S-W);I=(R-M)/O,Q=.25*O,ae=(v+w)/O,oe=(b+G)/O}else if(S>W){const O=2*Math.sqrt(1+S-d-W);I=(b-G)/O,Q=(v+w)/O,ae=.25*O,oe=(M+R)/O}else{const O=2*Math.sqrt(1+W-d-S);I=(w-v)/O,Q=(b+G)/O,ae=(M+R)/O,oe=.25*O}return n[0]=Q,n[1]=ae,n[2]=oe,n[3]=I,n}class $n{constructor(n){T(this,"element");T(this,"enabled",!0);T(this,"center",se.create(0,0,0));T(this,"up",se.create(0,1,0));T(this,"rotation",[0,0]);T(this,"shift",[0,0]);T(this,"scroll",0);T(this,"speed",.1);T(this,"sensitivity",.08);T(this,"leftPressed",!1);T(this,"rightPressed",!1);T(this,"leftDragPans",!1);T(this,"lastX",0);T(this,"lastY",0);T(this,"touches",new Map);T(this,"lastTouchCenter",null);T(this,"lastPinchDistance",null);T(this,"lastTwoFingerAngle",null);T(this,"lastTouchCount",0);T(this,"roll",0);T(this,"_dir",se.create());T(this,"_right",se.create());T(this,"_upCam",se.create());T(this,"_scratch",se.create());T(this,"_qY",$e.create());T(this,"_qX",$e.create());T(this,"_qRot",$e.create());T(this,"_qZ",$e.create());T(this,"_qLocal",$e.create());T(this,"_qWorldToCam",$e.create());T(this,"_scratchMat3",bt.create());T(this,"bboxMin",null);T(this,"bboxMax",null);T(this,"anchor",se.create(0,0,0));T(this,"downCallback",n=>{var d,v,b,w;if(this.enabled){if(n.pointerType==="touch"){this.touches.set(n.pointerId,{x:n.pageX,y:n.pageY}),this.handleTouchGestures(),(v=(d=n.target)==null?void 0:d.setPointerCapture)==null||v.call(d,n.pointerId),n.preventDefault();return}n.isPrimary&&(n.button===0?(this.leftPressed=!0,this.leftDragPans=n.shiftKey):n.button===2?this.rightPressed=!0:this.rightPressed=!0,this.lastX=n.pageX,this.lastY=n.pageY,(w=(b=n.target)==null?void 0:b.setPointerCapture)==null||w.call(b,n.pointerId),n.preventDefault())}});T(this,"moveCallback",n=>{if(!this.enabled)return;if(n.pointerType==="touch"){if(!this.touches.has(n.pointerId))return;this.touches.set(n.pointerId,{x:n.pageX,y:n.pageY}),this.handleTouchGestures(),n.preventDefault();return}if(!n.isPrimary||!this.leftPressed&&!this.rightPressed)return;n.preventDefault();const d=n.pageX-this.lastX,v=n.pageY-this.lastY;this.lastX=n.pageX,this.lastY=n.pageY,this.leftPressed&&!this.leftDragPans?(this.rotation[0]+=d,this.rotation[1]-=v):(this.rightPressed||this.leftPressed&&this.leftDragPans)&&(this.shift[1]-=d,this.shift[0]+=v)});T(this,"upCallback",n=>{var d,v,b,w;if(n.pointerType==="touch"){this.touches.delete(n.pointerId),this.handleTouchGestures(),(v=(d=n.target)==null?void 0:d.releasePointerCapture)==null||v.call(d,n.pointerId),n.preventDefault();return}n.button===0?this.leftPressed=!1:n.button===2?this.rightPressed=!1:this.rightPressed=!1,(w=(b=n.target)==null?void 0:b.releasePointerCapture)==null||w.call(b,n.pointerId),n.preventDefault()});T(this,"wheelCallback",n=>{if(!this.enabled||(n.preventDefault(),this.rightPressed))return;let d=n.deltaY;n.deltaMode===1?d*=16:n.deltaMode===2&&(d*=100),this.scroll+=d*.01});this.camera=n,this.registerElement(n.canvas)}registerElement(n){this.element&&this.element!==n&&(this.element.removeEventListener("pointerdown",this.downCallback),this.element.removeEventListener("pointermove",this.moveCallback),this.element.removeEventListener("pointerup",this.upCallback),this.element.removeEventListener("wheel",this.wheelCallback)),this.element=n,this.element.addEventListener("pointerdown",this.downCallback),this.element.addEventListener("pointermove",this.moveCallback),this.element.addEventListener("pointerup",this.upCallback),this.element.addEventListener("wheel",this.wheelCallback,{passive:!1}),this.element.addEventListener("contextmenu",d=>d.preventDefault())}setCenter(n){se.copy(n,this.center),se.copy(n,this.anchor)}setOrbitPivot(n){se.set(n[0],n[1],n[2],this.center),this._reorientCameraToCenter()}setOrbitDepth(n){if(!isFinite(n)||n<.001)return;const d=this.camera.rotation;se.set(d[2],d[6],d[10],this._dir),se.normalize(this._dir,this._dir),se.scale(this._dir,n,this._dir),se.add(this.camera.position,this._dir,this.center)}_reorientCameraToCenter(){const n=this.camera;if(se.subtract(this.center,n.position,this._scratch),se.length(this._scratch)<1e-6)return;se.normalize(this._scratch,this._scratch),se.cross(this.up,this._scratch,this._right),se.length(this._right)<1e-6&&se.set(1,0,0,this._right),se.normalize(this._right,this._right),se.cross(this._scratch,this._right,this._upCam),se.normalize(this._upCam,this._upCam);const d=n.rotation;d[0]=this._right[0],d[1]=this._upCam[0],d[2]=this._scratch[0],d[3]=0,d[4]=this._right[1],d[5]=this._upCam[1],d[6]=this._scratch[1],d[7]=0,d[8]=this._right[2],d[9]=this._upCam[2],d[10]=this._scratch[2],d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,n.update_buffer()}setBbox(n,d){this.bboxMin=se.create(n[0],n[1],n[2]),this.bboxMax=se.create(d[0],d[1],d[2]);const v=(n[0]+d[0])*.5,b=(n[1]+d[1])*.5,w=(n[2]+d[2])*.5;se.set(v,b,w,this.center),se.set(v,b,w,this.anchor)}resetToCamera(){const n=this.camera.rotation;se.set(n[2],n[6],n[10],this._dir),se.normalize(this._dir,this._dir);let d=null;if(this.bboxMin&&this.bboxMax){let v=-1/0,b=1/0,w=!1;for(let S=0;S<3;S++){const M=this._dir[S],G=this.bboxMin[S]-this.camera.position[S],R=this.bboxMax[S]-this.camera.position[S];if(Math.abs(M)>1e-8){const W=G/M,J=R/M;v=Math.max(v,Math.min(W,J)),b=Math.min(b,Math.max(W,J))}else if(G>0||R<0){w=!0;break}}!w&&v<=b&&b>0&&(d=(Math.max(v,0)+b)*.5)}if(d===null||!isFinite(d)||d<.001){se.subtract(this.anchor,this.camera.position,this._scratch);const v=se.dot(this._scratch,this._dir);d=v>.001?v:se.length(this._scratch)}d=Math.max(.1,d),se.scale(this._dir,d,this._dir),se.add(this.camera.position,this._dir,this.center)}handleTouchGestures(){const n=this.touches.size;if(n!==this.lastTouchCount&&(this.lastTouchCenter=null,this.lastPinchDistance=null,this.lastTwoFingerAngle=null),this.lastTouchCount=n,n===1){const d=this.touches.values().next().value;if(this.lastTouchCenter){const v=d.x-this.lastTouchCenter[0],b=d.y-this.lastTouchCenter[1];this.rotation[0]+=v*.3,this.rotation[1]-=b*.3}this.lastTouchCenter=[d.x,d.y]}else if(n===2){const d=Array.from(this.touches.values()),v=(d[0].x+d[1].x)*.5,b=(d[0].y+d[1].y)*.5,w=d[1].x-d[0].x,S=d[1].y-d[0].y,M=Math.hypot(w,S),G=Math.atan2(S,w);if(this.lastTouchCenter!==null&&this.lastPinchDistance!==null&&this.lastTwoFingerAngle!==null){const R=v-this.lastTouchCenter[0],W=b-this.lastTouchCenter[1],J=Math.hypot(R,W),I=Math.abs(M-this.lastPinchDistance);let Q=G-this.lastTwoFingerAngle;Q>Math.PI&&(Q-=2*Math.PI),Q<-Math.PI&&(Q+=2*Math.PI),J>.5&&(this.shift[1]-=R,this.shift[0]+=W),I>1&&this.lastPinchDistance>.001&&(this.scroll+=-Math.log(M/this.lastPinchDistance)*10),Math.abs(Q)>.0087&&(this.roll+=Q)}this.lastTouchCenter=[v,b],this.lastPinchDistance=M,this.lastTwoFingerAngle=G}}update(n){if(!this.enabled||Math.abs(this.rotation[0])<1e-4&&Math.abs(this.rotation[1])<1e-4&&Math.abs(this.shift[0])<1e-4&&Math.abs(this.shift[1])<1e-4&&Math.abs(this.scroll)<1e-4&&Math.abs(this.roll)<1e-4)return;const d=this.camera;{const O=d.rotation;this.up[0]=O[1],this.up[1]=O[5],this.up[2]=O[9],se.length(this.up)>1e-6?se.normalize(this.up,this.up):se.set(0,1,0,this.up)}let v=0,b=!1;Math.abs(this.roll)>1e-4&&(v=this.roll,this.roll=0,b=!0),se.subtract(d.position,this.center,this._dir);let w=se.length(this._dir);w<1e-6&&(w=1e-6);const S=Math.exp(Math.log(w)+this.scroll*n*10*this.speed);se.scale(this._dir,S/w,this._dir),w=S;const M=d.rotation;this._right[0]=M[0],this._right[1]=M[4],this._right[2]=M[8],se.normalize(this._right,this._right),se.length(this._right)<1e-6&&se.set(1,0,0,this._right);const G=se.create(M[1],M[5],M[9]);se.normalize(G,G),se.length(G)<1e-6&&se.set(0,1,0,G);const R=n*this.speed*.1*w,W=this.shift[1]*R,J=-this.shift[0]*R;se.scale(this._right,W,this._scratch),se.add(this.center,this._scratch,this.center),se.add(d.position,this._scratch,d.position),se.scale(G,J,this._scratch),se.add(this.center,this._scratch,this.center),se.add(d.position,this._scratch,d.position);const I=this.rotation[0]*n*this.sensitivity,Q=this.rotation[1]*n*this.sensitivity;if(Math.abs(I)>1e-5||Math.abs(Q)>1e-5||b){const O=d.rotation;Cn(O,this._qWorldToCam),$e.fromAxisAngle(On,-Q,this._qX),$e.fromAxisAngle(Ln,-I,this._qY),$e.multiply(this._qX,this._qY,this._qLocal),b&&($e.fromAxisAngle(Fn,1*v,this._qZ),$e.multiply(this._qZ,this._qLocal,this._qLocal)),$e.normalize(this._qLocal,this._qLocal),$e.multiply(this._qLocal,this._qWorldToCam,this._qWorldToCam),$e.normalize(this._qWorldToCam,this._qWorldToCam),bt.fromQuat(this._qWorldToCam,this._scratchMat3),We.fromMat3(this._scratchMat3,d.rotation);const ee=d.rotation,pe=ee[2],L=ee[6],te=ee[10];d.position[0]=this.center[0]-pe*w,d.position[1]=this.center[1]-L*w,d.position[2]=this.center[2]-te*w,this.up[0]=ee[1],this.up[1]=ee[5],this.up[2]=ee[9],se.normalize(this.up,this.up)}else se.add(this.center,this._dir,d.position);d.update_buffer();const oe=Math.pow(.8,n*60);this.rotation[0]*=oe,Math.abs(this.rotation[0])<1e-4&&(this.rotation[0]=0),this.rotation[1]*=oe,Math.abs(this.rotation[1])<1e-4&&(this.rotation[1]=0),this.shift[0]*=oe,Math.abs(this.shift[0])<1e-4&&(this.shift[0]=0),this.shift[1]*=oe,Math.abs(this.shift[1])<1e-4&&(this.shift[1]=0),this.scroll*=oe,Math.abs(this.scroll)<1e-4&&(this.scroll=0)}}function at(r){return r+3&-4}const Wn=2,qn=3,Nn=5,Zn=6,it=7,_t=8,ot=9,ct=10;function Hn(r){const n=new TextDecoder("ascii"),d=n.decode(new Uint8Array(r,0,4));if(d!=="NAT2")throw new Error(`NAT2 bad magic: '${d}'`);if(r.byteLength<4+64)throw new Error(`NAT2 truncated (${r.byteLength} bytes < 4 + 64)`);const v=new DataView(r),b=4,w=v.getUint32(b+0,!0),S=v.getUint32(b+4,!0),M=v.getUint32(b+8,!0),G=v.getUint32(b+12,!0),R=v.getUint32(b+16,!0),W=v.getFloat32(b+20,!0),J=v.getUint32(b+24,!0),I=v.getUint32(b+28,!0),Q=v.getFloat32(b+32,!0),ae=v.getFloat32(b+36,!0),oe=v.getFloat32(b+40,!0),O=v.getUint32(b+44,!0),ee=v.getFloat32(b+48,!0),pe=v.getFloat32(b+52,!0),L=v.getUint32(b+56,!0),te=v.getUint32(b+60,!0),ie=I===ot||I===ct,$=ie?te:0,he=ie?0:te&255,K=ie?0:te>>8&255,Z=he>0?he:1;if(I===Nn||I===Zn)throw new Error(`NAT2: paired-RVQ format=${I} is retired 2026-07-23; re-bake with typeD (--bc7-codebook)`);const _e=I===ot||I===ct;if(I!==Wn&&I!==qn&&I!==it&&I!==_t&&!_e)throw new Error(`NAT2: Halloumi-WS supports BC7 (2), ASTC 4x4 (3), BC7-codebook (7), ASTC-codebook (8), probe-BC7 (9) or probe-ASTC (10); got format=${I}`);if(w%4!==0||O%4!==0)throw new Error(`NAT2 block-format dims must be 4-aligned: width=${w} layer_h=${O}`);let D=b+64;const ne=(L+1)*4,C=new Uint32Array(r.slice(D,D+ne));D+=ne;let de;if(Z>1){const le=(Z+1)*4;if(D+le>r.byteLength)throw new Error(`NAT2 truncated at column_cuts (need ${le} from ${D})`);de=new Uint32Array(r.slice(D,D+le)),D+=le}else de=new Uint32Array([0,w]);let ge=0;for(let le=0;le<Z;le++){const we=de[le+1]-de[le];we>ge&&(ge=we)}if(_e){const le=$&1?7:6,we=R*le*4;if(D+we>r.byteLength)throw new Error(`NAT2 truncated at probes: need ${we} more bytes from offset ${D}, have ${r.byteLength-D}`);const Be=new Float32Array(r.slice(D,D+we));D+=we;const B=Math.max(1,$>>8&255),A=[];let h=0;for(let g=0,x=w,y=O;g<B;g++,x>>=1,y>>=1){const e=Math.max(1,x>>2)*Math.max(1,y>>2)*16;A.push(e),h+=e}const t=r.byteLength-D;if(t<h)throw new Error(`NAT2 probe atlas truncated: need ${h} bytes for ${w}x${O} x${B} mips, have ${t}`);const c=[];let a=D;for(const g of A)c.push(new Uint8Array(r.slice(a,a+g))),a+=g;const f=c[0];return{width:w,height:S,channels:M,kernel_type:G,num_rects:R,uv_extent:W,sb_number:J,format:I,sh_bias:Q,res_bias:ae,compact_mult:oe,layer_h:O,atlas_scale:ee,atlas_offset:pe,n_layers:L,n_cols:Z,layer_cuts:C,column_cuts:de,slice_width:ge,rects_expanded:Be,atlas_bytes:f,mip_bytes:c,probe_mode:$&1?2:1}}const V=R*4*4;if(D+V>r.byteLength)throw new Error(`NAT2 truncated at rects: need ${V} more bytes from offset ${D}, have ${r.byteLength-D}`);const re=new Float32Array(r.slice(D,D+V));D+=V;const ye=new Float32Array(R*5);for(let le=0;le<R;le++){const we=re[le*4+0],Be=re[le*4+1],B=re[le*4+2],A=re[le*4+3];let h=0;for(let g=1;g<=L&&C[g]<=Be;g++)h=g;let t=0;for(let g=1;g<=Z&&de[g]<=we;g++)t=g;const c=Be-C[h],a=we-de[t],f=t*L+h;ye[le*5+0]=a,ye[le*5+1]=c,ye[le*5+2]=B,ye[le*5+3]=A,ye[le*5+4]=f}let Se,me;const Te=Z,ke=w/4*16;if(I===it||I===_t){if(D+24>r.byteLength)throw new Error("NAT2 truncated at typeD sub-header");const le=I===it?"BCCB":"ACCB",we=n.decode(new Uint8Array(r,D,4));if(we!==le)throw new Error(`NAT2 typeD bad sub-magic: expected '${le}' got '${we}'`);const Be=v.getUint32(D+4,!0),B=v.getUint32(D+8,!0),A=v.getUint32(D+12,!0),h=v.getUint32(D+16,!0),t=v.getUint32(D+20,!0);if(Be!==1)throw new Error(`NAT2 BCCB unsupported version ${Be}`);if(A!==S/4||h!==w/4||t!==A*h)throw new Error(`NAT2 BCCB block grid mismatch: header ${w}×${S}, sub-header ${h}×${A} (${t} blocks)`);D+=24;const c=B*16;if(D+c>r.byteLength)throw new Error(`NAT2 BCCB truncated at codebook (need ${c}, have ${r.byteLength-D})`);const a=new Uint8Array(r,D,c);D+=c;const f=t*2;if(D+f>r.byteLength)throw new Error(`NAT2 BCCB truncated at indices (need ${f}, have ${r.byteLength-D})`);const g=new Uint16Array(r.slice(D,D+f));D+=f;const x=new Uint8Array(t*16);for(let y=0;y<t;y++){const e=g[y]*16;x.set(a.subarray(e,e+16),y*16)}if(Se=x,K>1){me=[x];for(let y=1;y<K;y++){if(D+24>r.byteLength)throw new Error(`NAT2 truncated at mip ${y} sub-header`);const e=n.decode(new Uint8Array(r,D,4));if(e!==le)throw new Error(`NAT2 mip ${y}: bad sub-magic '${e}'`);const u=v.getUint32(D+8,!0),i=v.getUint32(D+16,!0),o=v.getUint32(D+20,!0);if(i!==y)throw new Error(`NAT2 mip section order: expected level ${y}, got ${i}`);D+=24;let s=0;for(let p=0;p<Te;p++)for(let P=0;P<L;P++){const k=rn(y,de[p+1]-de[p],C[P+1]-C[P],ge,O);s+=(k.cw>>2)*(k.ch>>2)}if(s!==o)throw new Error(`NAT2 mip ${y}: ${o} blocks, loader expects ${s}`);if(D+u*16+o*2>r.byteLength)throw new Error(`NAT2 truncated in mip ${y}`);const l=new Uint8Array(r,D,u*16);D+=u*16;const m=new Uint16Array(r.slice(D,D+o*2));D+=o*2;const _=new Uint8Array(o*16);for(let p=0;p<o;p++){const P=m[p]*16;_.set(l.subarray(P,P+16),p*16)}me.push(_)}}}else{let le=0;for(let we=0;we<L;we++){const Be=C[we+1]-C[we];if(Be%4!==0)throw new Error(`NAT2 BC7 layer ${we} rows ${Be} not 4-aligned`);le+=Be/4*ke}if(D+le>r.byteLength)throw new Error(`NAT2 truncated at atlas payload: need ${le} more bytes from offset ${D}, have ${r.byteLength-D}`);Se=new Uint8Array(r.slice(D,D+le))}return{width:w,height:S,channels:M,kernel_type:G,num_rects:R,uv_extent:W,sb_number:J,format:I,sh_bias:Q,res_bias:ae,compact_mult:oe,layer_h:O,atlas_scale:ee,atlas_offset:pe,n_layers:L,n_cols:Z,layer_cuts:C,column_cuts:de,slice_width:ge,rects_expanded:ye,atlas_bytes:Se,...me?{mip_bytes:me}:{}}}function rn(r,n,d,v,b){const w=M=>M+3>>2<<2,S=1<<r;return{cw:Math.min(w(Math.max(1,v>>r)),w(Math.ceil(n/S))),ch:Math.min(w(Math.max(1,b>>r)),w(Math.ceil(d/S)))}}const jn=32;function Yn(r,n,d){if(n.format===5||n.format===6)throw new Error(`paired-RVQ format=${n.format} is retired; re-bake with typeD (--bc7-codebook)`);let v,b,w,S;if(n.format===2||n.format===it||n.format===ot){if(!r.features.has("texture-compression-bc"))return Ze(`⚠️  bundle is BC7 (format=${n.format}) but texture-compression-bc not supported — atlas disabled`),null;S=n.format===ot?"BC7 atlas (proberes: shared probe texture)":n.format===it?"BC7 atlas (typeD: codebook gather)":"BC7 atlas",{texture:v,view:b,sampler:w}=$t(r,n,"bc7-rgba-unorm",S)}else if(n.format===3||n.format===_t||n.format===ct){if(!r.features.has("texture-compression-astc"))return Ze(`⚠️  bundle is ASTC 4x4 (format=${n.format}) but texture-compression-astc not supported — atlas disabled`),null;S=n.format===ct?"ASTC 4x4 atlas (proberes: shared probe texture)":n.format===_t?"ASTC 4x4 atlas (typeD-ASTC: codebook gather)":"ASTC 4x4 atlas",{texture:v,view:b,sampler:w}=$t(r,n,"astc-4x4-unorm",S)}else return Ze(`⚠️  unsupported atlas format ${n.format} — atlas disabled`),null;const{rects_expanded:M}=n,G=r.createBuffer({label:"atlas rects (5-stride)",size:at(M.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});r.queue.writeBuffer(G,0,M);const R=r.createBuffer({label:"tex_params",size:48,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return ht(r,R,n,d),{texture:v,view:b,sampler:w,rectsBuffer:G,texParamsBuffer:R,meta:n}}function $t(r,n,d,v){const{width:b,layer_h:w,n_layers:S,n_cols:M,layer_cuts:G,column_cuts:R,slice_width:W,atlas_bytes:J}=n,Q=b/4*16,ae=r.limits.maxTextureDimension2D;if(w>ae||W>ae)throw new Error(`⚠️  atlas slice dims ${W}x${w} exceed maxTextureDimension2D=${ae}. Re-bake with smaller LAYER_H or pack with column-aware atlas widths.`);const oe=M*S;if(oe>r.limits.maxTextureArrayLayers)throw new Error(`⚠️  ${M} cols × ${S} layers = ${oe} slices > maxTextureArrayLayers=${r.limits.maxTextureArrayLayers}.`);const O=n.mip_bytes??[J],ee=O.length,pe=r.createTexture({label:v,size:{width:W,height:w,depthOrArrayLayers:oe},mipLevelCount:ee,sampleCount:1,dimension:"2d",format:d,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});for(let $=0;$<M;$++){const he=R[$]/4,K=(R[$+1]-R[$])/4;for(let Z=0;Z<S;Z++){const _e=G[Z]/4,D=(G[Z+1]-G[Z])/4,ne=$*S+Z,C=_e*Q+he*16;r.queue.writeTexture({texture:pe,mipLevel:0,origin:{x:0,y:0,z:ne},aspect:"all"},J,{offset:C,bytesPerRow:Q,rowsPerImage:D},{width:K*4,height:D*4,depthOrArrayLayers:1})}}const L=n.format===ot||n.format===ct;for(let $=1;$<ee&&!L;$++){let he=0;for(let K=0;K<M;K++)for(let Z=0;Z<S;Z++){const{cw:_e,ch:D}=rn($,R[K+1]-R[K],G[Z+1]-G[Z],W,w);r.queue.writeTexture({texture:pe,mipLevel:$,origin:{x:0,y:0,z:K*S+Z},aspect:"all"},O[$],{offset:he,bytesPerRow:(_e>>2)*16,rowsPerImage:D>>2},{width:_e,height:D,depthOrArrayLayers:1}),he+=(_e>>2)*(D>>2)*16}}for(let $=1;$<ee&&L;$++){const he=Math.max(1,W>>$),K=Math.max(1,w>>$);r.queue.writeTexture({texture:pe,mipLevel:$,origin:{x:0,y:0,z:0},aspect:"all"},O[$],{offset:0,bytesPerRow:Math.max(1,he>>2)*16,rowsPerImage:Math.max(1,K>>2)},{width:he,height:K,depthOrArrayLayers:1})}ee>1&&console.log(`[atlas] ${ee} mip levels uploaded (${L?"trilinear":"per-surfel integer level"})`);const te=pe.createView({label:`${v} view`,dimension:"2d-array"}),ie=r.createSampler({label:`${v} sampler`,addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge",magFilter:"linear",minFilter:"linear",mipmapFilter:ee>1&&L?"linear":"nearest"});return{texture:pe,view:te,sampler:ie}}function ht(r,n,d,v,b=1){var R;const w=new ArrayBuffer(32),S=new Uint32Array(w),M=new Float32Array(w);S[0]=v?1:0,M[1]=d.atlas_scale,M[2]=d.atlas_offset,M[3]=d.res_bias,S[4]=d.probe_mode?d.probe_mode|0:0,S[5]=d.width|0;const G=(((R=d.mip_bytes)==null?void 0:R.length)??1)>1;S[6]=G&&b!==0?1:0,r.queue.writeBuffer(n,0,w)}async function Vn(r,n){Ze(`loading ply file from File... : ${r.name}`),kn("downloading PLY...");const d=await r.arrayBuffer();try{return await Xn(d,n)}finally{Mn()}}async function Xn(r,n){return new Promise((d,v)=>{const b=new Worker(new URL(""+new URL("ply-worker-621cb083.js",import.meta.url).href,self.location),{type:"module"});b.onmessage=w=>{var M,G,R,W,J,I,Q,ae,oe,O,ee,pe;const S=w.data;if((S==null?void 0:S.type)==="error"){Gn(`PLY worker error: ${S.message??"unknown error"}`),b.terminate(),v(new Error(S.message??"Worker error"));return}else if((S==null?void 0:S.type)==="download_progress"){const L=S.totalBytes,te=S.loadedBytes/(1024*1024),ie=L?L/(1024*1024):void 0,$=(S.speedBps??0)/(1024*1024),he=L?Math.min(99,Math.floor(S.loadedBytes/L*100)):void 0,K=ie?`total ${ie.toFixed(1)} MB`:"total -- MB",Z=ie&&he!==void 0?`${te.toFixed(1)} MB downloaded (${he}%)`:`${te.toFixed(1)} MB downloaded`,_e=`${$.toFixed(2)} MB/s`;dt(`downloading PLY ...
${K}, ${Z}
${_e}`);return}else if((S==null?void 0:S.type)==="fetched"){Ze(`💾 Fetched (${S.byteLength} bytes)`),Ct("Download"),dt("parsing PLY..."),An();return}else if((S==null?void 0:S.type)==="parse_progress"){const L=S.total??0,te=S.read??0,ie=L>0?Math.floor(te/L*100):0;dt(`parsing PLY ...
${te}/${L} surfels (${ie}%)`);return}else if((S==null?void 0:S.type)==="done"){const L=S.num_points,te=S.K,ie=S.feature_mode??0,$=S.sh_bias,he=S.kernel_type,K=S.surfelBuffer,Z=S.svParamsBuffer;Ze(`🪐 Total surfels: ${L}, mode=${ie===1?"SB":"SV"}, K=${te}, sh_bias=${$}, kernel_type=${he}`);const D=n.createBuffer({label:"surfel input buffer",size:at(L*jn),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});n.queue.writeBuffer(D,0,K);const ne=Z.byteLength>0?Z.byteLength:16,C=n.createBuffer({label:ie===1?"color_params buffer (SB)":"color_params buffer (SV)",size:at(ne),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});Z.byteLength>0&&n.queue.writeBuffer(C,0,Z),b.terminate(),Ct("Parse"),d({num_points:L,K:te,feature_mode:ie,sh_bias:$,kernel_type:he,surfel_buffer:D,surfel_data:new Float32Array(K),sv_params_buffer:C,bbox:S.bbox??{min:[-1,-1,-1],max:[1,1,1]},centroid:S.centroid??[((((G=(M=S.bbox)==null?void 0:M.min)==null?void 0:G[0])??-1)+(((W=(R=S.bbox)==null?void 0:R.max)==null?void 0:W[0])??1))/2,((((I=(J=S.bbox)==null?void 0:J.min)==null?void 0:I[1])??-1)+(((ae=(Q=S.bbox)==null?void 0:Q.max)==null?void 0:ae[1])??1))/2,((((O=(oe=S.bbox)==null?void 0:oe.min)==null?void 0:O[2])??-1)+(((pe=(ee=S.bbox)==null?void 0:ee.max)==null?void 0:pe[2])??1))/2]})}},b.onerror=w=>{b.terminate(),v(w)},r instanceof ArrayBuffer?(dt("parsing PLY..."),b.postMessage({type:"start",plyBuffer:r},[r])):b.postMessage({type:"start_url",url:r.url})})}const Kn=`// 2DGS preprocess — per-alive-Gauss view-dependent color eval.
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
            if lod >= 1.0 {
                // Level-l texel centres span [u0 + 2^l/2, u0 + w − 2^l/2]: shrink the uv span
                // about the tile centre so bilinear taps stay inside the tile (< ½ level-l
                // texel of distortion; at l = log2(w) the tile collapses to its mean).
                let t = exp2(lod);
                fx = max(w_span - t, 0.0) / w_span;
                fy = max(h_span - t, 0.0) / h_span;
            }
        }
        splats_2d[store_idx].uv_base_x  = (u0 + 0.5 * w_span + 0.5 * fx) * inv_w;
        splats_2d[store_idx].uv_base_y  = (v0 + 0.5 * h_span + 0.5 * fy) * inv_h;
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
`,Wt=`// 2DGS render — vertex+fragment.
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
`,an=`const WG_SIZE = 256u;
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
}`,Jn=`// 2DGS surfel cull pass — forked from gaussian_cull.wgsl.
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
`,on=`// shader implementing gpu radix sort.

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
`,cn=`// shader implementing gpu radix sort.

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
`,ln=`// ============================================================================
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
}`,un=32,vt=1,St=2,qt=4,Nt=512,Zt=1024,Qn=0,Je=new ArrayBuffer(un),Ne={canvas_size:new Uint32Array(Je,0,2),accel_flags:new Uint32Array(Je,8,1),feature_mode:new Uint32Array(Je,12,1),gaussian_scaling:new Float32Array(Je,16,1),sh_bias:new Float32Array(Je,20,1),color_K:new Uint32Array(Je,24,1),walltime:new Float32Array(Je,28,1)};function es(r){Ne.canvas_size[0]=r.width>>>0,Ne.canvas_size[1]=r.height>>>0,Ne.accel_flags[0]=(r.accel_flags??vt|St)>>>0,Ne.feature_mode[0]=(r.feature_mode??Qn)>>>0,Ne.gaussian_scaling[0]=r.gaussian_scaling??1,Ne.sh_bias[0]=r.sh_bias??.5,Ne.color_K[0]=(r.color_K??0)>>>0,Ne.walltime[0]=r.walltime??0}function dn(r,n){r.queue.writeBuffer(n,0,Je)}function fn(r,n,d){d&&r&&n&&dn(r,n)}function ts(r,n,d,v,b=!0){Ne.canvas_size[0]=r>>>0,Ne.canvas_size[1]=n>>>0,fn(d??null,v??null,b)}function ns(r,n,d,v=!0){let b=Ne.accel_flags[0];r.oac!==void 0&&(b=r.oac?b|vt:b&~vt),r.spr!==void 0&&(b=r.spr?b|St:b&~St),r.bfc!==void 0&&(b=r.bfc?b|qt:b&~qt),r.hypLegacy!==void 0&&(b=r.hypLegacy?b|Nt:b&~Nt),r.legacyPos!==void 0&&(b=r.legacyPos?b|Zt:b&~Zt),Ne.accel_flags[0]=b>>>0,fn(n??null,d??null,v)}const ss=256;function Ht(r,n){const d=[],v=[];let b=!0;for(const w of r.split(`
`)){const S=w.trim();let M;if((M=/^\/\/#if\s+(\w+)\s*$/.exec(S))!==null){const G=!!n[M[1]];v.push({parent:b,taken:G}),b=b&&G;continue}if(/^\/\/#else\s*$/.test(S)){const G=v[v.length-1];if(G===void 0)throw new Error("preprocessWGSL: #else without #if");b=G.parent&&!G.taken;continue}if(/^\/\/#endif\s*$/.test(S)){const G=v.pop();if(G===void 0)throw new Error("preprocessWGSL: #endif without #if");b=G.parent;continue}b&&d.push(w)}if(v.length!==0)throw new Error("preprocessWGSL: unterminated #if");return d.join(`
`)}const rs=un,is=8,as=96,os=12,Tt=8,Xe=1<<Tt,st=256,gt=32/Tt,cs=0,jt=gt&1;function Yt(r,n){return{sort_indices_buffer:n.createBuffer({label:"ping-pong payload (indices)",size:r*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),sort_depths_buffer:n.createBuffer({label:"ping-pong keys (depths)",size:r*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})}}function ls(r,n){const d=r.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:7,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),v=r.createPipelineLayout({bindGroupLayouts:[d]}),b=w=>r.createComputePipeline({layout:v,compute:{module:n,entryPoint:w,constants:{WG_SIZE:st}}});return{l0TileScan:b("prefix_l0_tile_scan"),l1TileScanOnL0:b("prefix_l1_tile_scan_on_l0_sums"),l1ScanSums:b("prefix_scan_l1_sums"),addL1ToL0:b("prefix_add_l1_to_l0_offsets"),addL0ToElems:b("prefix_add_l0_to_elements"),computeDigitBase:b("compute_digit_base"),prefixBindGroupLayout:d}}function us(r,n,d){const v=r.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),b=r.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]}),w=r.createPipelineLayout({bindGroupLayouts:[v]}),S=r.createPipelineLayout({bindGroupLayouts:[b]}),M=[];for(let G=0;G<gt;G++){const R={PASS_ID:G+cs,RS_RADIX_LOG2:Tt,RS_RADIX_SIZE:Xe};M.push({localHistogram:r.createComputePipeline({layout:w,compute:{module:n,entryPoint:"local_histogram_pass",constants:R}}),scatterElements:r.createComputePipeline({layout:S,compute:{module:d,entryPoint:"scatter_elements",constants:R}})})}return{passes:M,localHistogramBindGroupLayout:v,scatterBindGroupLayout:b}}function ds(r){const n=r.createShaderModule({label:"local histogram",code:cn}),d=r.createShaderModule({label:"scatter",code:on}),v=r.createShaderModule({label:"blelloch prefix",code:ln}),b=ls(r,v),w=us(r,n,d);return{localHistogramBindGroupLayout:w.localHistogramBindGroupLayout,scatterBindGroupLayout:w.scatterBindGroupLayout,passes:w.passes,hierarchicalBlelloch:b}}function Vt(r){const n=r.createTexture({label:"atlas stub (4x4x1 zero RGBA8)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),d=n.createView({dimension:"2d-array"}),v=r.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge"}),b=r.createBuffer({label:"atlas rects stub (5 zero floats)",size:4*5,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),w=r.createBuffer({label:"tex_params stub (atlas_enabled=0)",size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});r.queue.writeBuffer(w,0,new ArrayBuffer(32));const S={width:0,height:0,channels:0,kernel_type:0,num_rects:0,uv_extent:0,sb_number:0,format:4294967295,sh_bias:0,res_bias:0,compact_mult:0,layer_h:0,atlas_scale:0,atlas_offset:0,n_layers:0,n_cols:1,layer_cuts:new Uint32Array,column_cuts:new Uint32Array([0,0]),slice_width:0,rects_expanded:new Float32Array,atlas_bytes:new Uint8Array};return{texture:n,view:d,sampler:v,rectsBuffer:b,texParamsBuffer:w,meta:S}}class fs{constructor(n,d,v,b,w,S=null,M={}){T(this,"device");T(this,"pc");T(this,"presentationFormat");T(this,"camera_buffer");T(this,"render_settings_buffer");T(this,"draw_indirect_buffer");T(this,"splat_2d_buffer");T(this,"querySet");T(this,"resolveBuffer");T(this,"resultBuffer");T(this,"queriesPerFrame",is);T(this,"queryCapacityFrames",200);T(this,"sort_prefixBindGroup");T(this,"sort_pipelines");T(this,"sort_localHistogramBindGroups");T(this,"sort_scatterBindGroups");T(this,"lastFrame",0);T(this,"frameCount",0);T(this,"preprocessPipeline");T(this,"cullPipeline");T(this,"renderPipeline");T(this,"indirectPipeline");T(this,"renderShaderModule");T(this,"betaKernel",1);T(this,"fetchById");T(this,"octBound");T(this,"acc16");T(this,"accTexture",null);T(this,"accView",null);T(this,"accW",0);T(this,"accH",0);T(this,"legacyRenderPipeline",null);T(this,"varyingsPipeline",null);T(this,"legacyRenderer",!1);T(this,"accResolvePipeline",null);T(this,"accResolveBgl",null);T(this,"accResolveBindGroup",null);T(this,"renderSettingsBgl");T(this,"preprocessBgl2");T(this,"renderSplatsBgl");T(this,"atlasBgl");T(this,"sort_info_buffer");T(this,"sort_ping_pong");T(this,"crsBg");T(this,"gsBg");T(this,"cullBg2");T(this,"preprocessBg1");T(this,"renderSplatsBindGroup");T(this,"renderSettingsBindGroup");T(this,"atlasBindGroup");T(this,"indirectBindGroup");T(this,"sh_solvers_buffer");T(this,"bfcParamsBuffer");T(this,"bfcBindGroupLayout");T(this,"bfcBindGroup");T(this,"bgColor",[0,0,0,0]);T(this,"showPerfDialogNext",!1);T(this,"requestReorderNextFrame",!1);T(this,"reorderInFlight",!1);T(this,"downloadOnceNextRead",!1);T(this,"downloadOnceFileName","fps_metrics");T(this,"allFrameTimes",[]);T(this,"lastStageBreakdownMs",null);T(this,"timeQueryEnabled");T(this,"atlas");T(this,"atlasParamsBuffer");T(this,"_atlasEnabled",!0);T(this,"mipLodBias",1);T(this,"_mipMode",1);this.fetchById=M.fetchById??!0,this.octBound=M.octBound??!1,this.acc16=M.acc16??!1,Ze(`[render_2dgs] variants: fetch_by_id=${this.fetchById} oct_bound=${this.octBound} acc16=${this.acc16}`);const G=w.includes("timestamp-query");this.timeQueryEnabled=G,G&&Ze("⏰ using timestamp-query"),this.pc=n,this.device=d,this.presentationFormat=v,this.camera_buffer=b,this.atlas=S??Vt(d),this.atlasParamsBuffer=d.createBuffer({label:"atlas_params UBO",size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.writeAtlasParams(),d.addEventListener("uncapturederror",me=>{console.error("A WebGPU error was not captured:",me.error)}),this._setupTimestampQueries(),this._setupBuffers();const R=(Math.floor((this.pc.num_points+st-1)/st)+1)*st,W=Math.ceil(R/st);console.log(`keys count adjusted: ${R}`),console.log(`key size: ${this.pc.num_points}`);const J=d.createBuffer({label:"sort info",size:16*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT});this.sort_pipelines=ds(d);const I=[Yt(R,d),Yt(R,d)],Q=d.createBuffer({label:"workgroup histograms",size:W*Xe*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),ae=d.createBuffer({label:"workgroup prefixes",size:W*Xe*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),oe=d.createBuffer({label:"digit base",size:Xe*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),O=Math.ceil(W/st),ee=Math.ceil(O/st),pe=d.createBuffer({label:"prefix l0 sums",size:O*Xe*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),L=d.createBuffer({label:"prefix l0 offsets",size:O*Xe*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),te=d.createBuffer({label:"prefix l1 sums",size:ee*Xe*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),ie=d.createBuffer({label:"prefix l1 offsets",size:ee*Xe*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});this.sort_prefixBindGroup=d.createBindGroup({label:"prefix 2L bind group",layout:this.sort_pipelines.hierarchicalBlelloch.prefixBindGroupLayout,entries:[{binding:0,resource:{buffer:J}},{binding:1,resource:{buffer:Q}},{binding:2,resource:{buffer:ae}},{binding:3,resource:{buffer:pe}},{binding:4,resource:{buffer:L}},{binding:5,resource:{buffer:te}},{binding:6,resource:{buffer:ie}},{binding:7,resource:{buffer:oe}}]}),this.sort_localHistogramBindGroups=[d.createBindGroup({label:"localHistogram src=0",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:J}},{binding:1,resource:{buffer:I[0].sort_depths_buffer}},{binding:2,resource:{buffer:Q}}]}),d.createBindGroup({label:"localHistogram src=1",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:J}},{binding:1,resource:{buffer:I[1].sort_depths_buffer}},{binding:2,resource:{buffer:Q}}]})],this.sort_scatterBindGroups=[d.createBindGroup({label:"scatter 0->1",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:J}},{binding:1,resource:{buffer:oe}},{binding:2,resource:{buffer:I[0].sort_depths_buffer}},{binding:3,resource:{buffer:I[1].sort_depths_buffer}},{binding:4,resource:{buffer:I[0].sort_indices_buffer}},{binding:5,resource:{buffer:I[1].sort_indices_buffer}},{binding:6,resource:{buffer:ae}}]}),d.createBindGroup({label:"scatter 1->0",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:J}},{binding:1,resource:{buffer:oe}},{binding:2,resource:{buffer:I[1].sort_depths_buffer}},{binding:3,resource:{buffer:I[0].sort_depths_buffer}},{binding:4,resource:{buffer:I[1].sort_indices_buffer}},{binding:5,resource:{buffer:I[0].sort_indices_buffer}},{binding:6,resource:{buffer:ae}}]})],this.sort_info_buffer=J,this.sort_ping_pong=I;const $=this.device.createBindGroupLayout({label:"camera + renderSettings",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),he=this.device.createBindGroupLayout({label:"gaussians + splats",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),K=this.device.createBindGroupLayout({label:"cullBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),Z=this.device.createBindGroupLayout({label:"preprocessBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]});this.crsBg=this.device.createBindGroup({label:"camera + renderSettings",layout:$,entries:[{binding:0,resource:{buffer:this.camera_buffer}},{binding:1,resource:{buffer:this.render_settings_buffer}}]}),this.gsBg=this.device.createBindGroup({label:"surfels + splats",layout:he,entries:[{binding:0,resource:{buffer:this.pc.surfel_buffer}},{binding:1,resource:{buffer:this.splat_2d_buffer}}]}),this.cullBg2=this.device.createBindGroup({label:"cullBg2",layout:K,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[0].sort_depths_buffer}},{binding:2,resource:{buffer:this.sort_ping_pong[0].sort_indices_buffer}},{binding:3,resource:{buffer:this.sh_solvers_buffer}}]}),this.preprocessBgl2=Z,this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:Z,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}},{binding:4,resource:{buffer:this.atlas.rectsBuffer}},{binding:5,resource:{buffer:this.atlasParamsBuffer}}]});const _e=this.device.createShaderModule({code:an});this.indirectPipeline=this.device.createComputePipeline({label:"indirect dispatch calc",layout:"auto",compute:{module:_e,entryPoint:"write_dispatch_triples",constants:{RS_RADIX_SIZE:256}}}),this.indirectBindGroup=this.device.createBindGroup({label:"indirect dispatch bind group",layout:this.indirectPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.draw_indirect_buffer}}]}),this.bfcParamsBuffer=this.device.createBuffer({label:"bfc params (uniform, 16 B)",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([2,0,0,0])),this.bfcBindGroupLayout=this.device.createBindGroupLayout({label:"bfc params (cull group 3)",entries:[{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),this.bfcBindGroup=this.device.createBindGroup({label:"bfc params bind",layout:this.bfcBindGroupLayout,entries:[{binding:1,resource:{buffer:this.bfcParamsBuffer}}]});const D=this.device.createShaderModule({code:Jn});this.cullPipeline=this.device.createComputePipeline({label:"surfel_cull",layout:this.device.createPipelineLayout({bindGroupLayouts:[$,he,K,this.bfcBindGroupLayout]}),compute:{module:D,entryPoint:"surfel_cull"}});const ne=this.device.createShaderModule({code:Kn});this.preprocessPipeline=this.device.createComputePipeline({label:"preprocess_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[$,Z]}),compute:{module:ne,entryPoint:"preprocess"}});const C=this.device.createShaderModule({label:"render_2dgs",code:Ht(Wt,{FETCH_BY_ID:this.fetchById,OCT:this.octBound})});C.getCompilationInfo().then(me=>{me.messages.length>0?(console.group("[render_2dgs.wgsl] compilation messages"),me.messages.forEach(Te=>{(Te.type==="error"?console.error:Te.type==="warning"?console.warn:console.log)(`${Te.type} (line ${Te.lineNum}:${Te.linePos}): ${Te.message}`)}),console.groupEnd()):console.log("[render_2dgs.wgsl] compiled clean")});const de=this.device.createBindGroupLayout({label:"render_settings (vertex+fragment)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),ge=this.fetchById?GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT:GPUShaderStage.VERTEX,V=this.device.createBindGroupLayout({label:"splats_2d + indices (vertex)",entries:[{binding:0,visibility:ge,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),re=this.device.createBindGroupLayout({label:"atlas (fragment)",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array",multisampled:!1}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]}),ye=this.atlas.meta.format!==4294967295&&this.atlas.meta.kernel_type===0?0:1;this.device.pushErrorScope("validation"),this.renderPipeline=this.device.createRenderPipeline({label:"render_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[de,V,re]}),vertex:{module:C,entryPoint:"vs_main"},fragment:{module:C,entryPoint:"fs_main",constants:{BETA_KERNEL:ye},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}});const Se=(me,Te,ze)=>{const ke=this.device.createShaderModule({label:`render_2dgs (${me})`,code:Ht(Wt,{FETCH_BY_ID:Te,OCT:ze})});return this.device.createRenderPipeline({label:`render_2dgs_${me}`,layout:this.device.createPipelineLayout({bindGroupLayouts:[de,V,re]}),vertex:{module:ke,entryPoint:"vs_main"},fragment:{module:ke,entryPoint:"fs_main",constants:{BETA_KERNEL:ye},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}})};this.varyingsPipeline=Se("varyings",!1,this.octBound),this.legacyRenderPipeline=this.octBound?Se("legacy",!1,!1):this.varyingsPipeline,this.device.popErrorScope().then(me=>{me?console.error("[render_2dgs] pipeline create validation error:",me.message):console.log("[render_2dgs] pipeline created OK")}),this.renderSettingsBindGroup=this.device.createBindGroup({label:"render_settings (vertex)",layout:de,entries:[{binding:0,resource:{buffer:this.render_settings_buffer}}]}),this.renderSplatsBindGroup=this.device.createBindGroup({label:"splats_2d + indices (vertex)",layout:V,entries:[{binding:0,resource:{buffer:this.splat_2d_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[jt].sort_indices_buffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:re,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:this.atlas.sampler},{binding:2,resource:{buffer:this.atlas.texParamsBuffer}},{binding:3,resource:{buffer:this.atlas.rectsBuffer}}]}),this.renderShaderModule=C,this.betaKernel=ye,this.renderSettingsBgl=de,this.renderSplatsBgl=V,this.atlasBgl=re}get totalQueryCount(){return this.queriesPerFrame*this.queryCapacityFrames}setBfcParams(n,d){this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([n,d[0],d[1],d[2]]))}get texParamsBuffer(){return this.atlas.texParamsBuffer}get hasAtlas(){return this.atlas.meta.format!==4294967295}writeAtlasParams(){var b;const n=new ArrayBuffer(32),d=new Uint32Array(n),v=new Float32Array(n);d[0]=(this.atlas.meta.slice_width||this.atlas.meta.width)|0,d[1]=this.atlas.meta.layer_h|0,v[2]=this.atlas.meta.uv_extent||0,d[3]=this.atlas.meta.probe_mode|0||0,d[4]=this._mipMode!==0?Math.max(1,((b=this.atlas.meta.mip_bytes)==null?void 0:b.length)??1):1,v[5]=this.mipLodBias,this.device.queue.writeBuffer(this.atlasParamsBuffer,0,n)}ensureAccResources(n,d){var v;if(this.accResolvePipeline===null){const b=`
@group(0) @binding(0) var src : texture_2d<f32>;
@vertex fn vs_main(@builtin(vertex_index) vid : u32) -> @builtin(position) vec4<f32> {
    const pos = array(vec2<f32>(-1.0, -1.0), vec2<f32>(3.0, -1.0), vec2<f32>(-1.0, 3.0));
    return vec4<f32>(pos[vid], 0.0, 1.0);
}
@fragment fn fs_main(@builtin(position) p : vec4<f32>) -> @location(0) vec4<f32> {
    let dims = vec2<i32>(textureDimensions(src));
    let q = clamp(vec2<i32>(floor(p.xy)), vec2<i32>(0), dims - vec2<i32>(1));
    return textureLoad(src, q, 0);
}`,w=this.device.createShaderModule({label:"acc16_resolve",code:b});this.accResolveBgl=this.device.createBindGroupLayout({label:"acc16_resolve src",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}}]}),this.accResolvePipeline=this.device.createRenderPipeline({label:"acc16_resolve",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.accResolveBgl]}),vertex:{module:w,entryPoint:"vs_main"},fragment:{module:w,entryPoint:"fs_main",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list"}})}this.accTexture!==null&&this.accW===n&&this.accH===d||((v=this.accTexture)==null||v.destroy(),this.accTexture=this.device.createTexture({label:"acc16 target",size:{width:Math.max(1,n),height:Math.max(1,d),depthOrArrayLayers:1},format:"rgba16float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.accView=this.accTexture.createView(),this.accResolveBindGroup=this.device.createBindGroup({label:"acc16_resolve bind",layout:this.accResolveBgl,entries:[{binding:0,resource:this.accView}]}),this.accW=n,this.accH=d)}setAtlas(n){this.atlas=n??Vt(this.device),this.writeAtlasParams(),this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:this.preprocessBgl2,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}},{binding:4,resource:{buffer:this.atlas.rectsBuffer}},{binding:5,resource:{buffer:this.atlasParamsBuffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:this.atlasBgl,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:this.atlas.sampler},{binding:2,resource:{buffer:this.atlas.texParamsBuffer}},{binding:3,resource:{buffer:this.atlas.rectsBuffer}}]}),this.atlas.meta.format!==4294967295&&ht(this.device,this.atlas.texParamsBuffer,this.atlas.meta,this._atlasEnabled,this._mipMode)}setAtlasEnabled(n){this.atlas.meta.format!==4294967295&&(this._atlasEnabled=n,ht(this.device,this.atlas.texParamsBuffer,this.atlas.meta,n,this._mipMode))}setMipLodBias(n){this.mipLodBias=n,this.writeAtlasParams()}setFetchById(n){n!==this.fetchById&&(this.fetchById=n,Ze(`[render_2dgs] fragment inputs: ${n?"fetch-by-id (storage re-read)":"13 flat varyings"}`))}get isFetchById(){return this.fetchById}setLegacyRenderer(n){if(n===this.legacyRenderer)return;this.legacyRenderer=n,ns({legacyPos:n,hypLegacy:n},this.device,this.render_settings_buffer);const d=!n&&this.octBound?8:4;this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([d])),Ze(`[render_2dgs] renderer: ${n?"LEGACY (varyings, quad, f16 centres)":"current"}`)}get isLegacyRenderer(){return this.legacyRenderer}setMipMode(n){this.atlas.meta.format!==4294967295&&(this._mipMode=n?1:0,this.writeAtlasParams(),ht(this.device,this.atlas.texParamsBuffer,this.atlas.meta,this._atlasEnabled,this._mipMode))}get hasMips(){var n;return(((n=this.atlas.meta.mip_bytes)==null?void 0:n.length)??1)>1}async debugReadSortedIndices(n=30){const d=Math.max(0,Math.min(n,this.pc.num_points)),v=d*Uint32Array.BYTES_PER_ELEMENT;if(v===0){console.log("[DEBUG] No indices to read.");return}const b=this.device.createBuffer({size:v,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),w=this.device.createCommandEncoder();w.copyBufferToBuffer(this.sort_ping_pong[jt].sort_indices_buffer,0,b,0,v),this.device.queue.submit([w.finish()]),await b.mapAsync(GPUMapMode.READ);const S=new Uint32Array(b.getMappedRange());console.log("[DEBUG] Sorted indices (first",d,"):",Array.from(S)),b.unmap()}frame(n,d,v=!0){const w=(this.lastFrame+this.frameCount)%this.queryCapacityFrames*this.queriesPerFrame,S=v&&this.timeQueryEnabled;{n.clearBuffer(this.sort_info_buffer,0,4);const M={label:"cull"};S&&(M.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:w+0,endOfPassWriteIndex:w+1});const G=n.beginComputePass(M);G.setPipeline(this.cullPipeline),G.setBindGroup(0,this.crsBg),G.setBindGroup(1,this.gsBg),G.setBindGroup(2,this.cullBg2),G.setBindGroup(3,this.bfcBindGroup);const R=Math.ceil(this.pc.num_points/ss);G.dispatchWorkgroups(R,1,1),G.end()}{const M=n.beginComputePass({label:"calculate indirect dispatch"});M.setPipeline(this.indirectPipeline),M.setBindGroup(0,this.indirectBindGroup),M.dispatchWorkgroups(1,1,1),M.end()}{const M={label:"preprocess"};S&&(M.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:w+2,endOfPassWriteIndex:w+3});const G=n.beginComputePass(M);G.setPipeline(this.preprocessPipeline),G.setBindGroup(0,this.crsBg),G.setBindGroup(1,this.preprocessBg1),G.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),G.end()}for(let M=0;M<gt;M++){const G=M&1,R=this.sort_pipelines.passes[M],W=this.sort_localHistogramBindGroups[G],J=this.sort_scatterBindGroups[G];{const I={label:`upsweep_round${M}`};S&&M==0&&(I.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:w+4});const Q=n.beginComputePass(I);Q.setPipeline(R.localHistogram),Q.setBindGroup(0,W),Q.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),Q.end()}{const I=n.beginComputePass({label:`prefix_round${M} - l0TileScan`});I.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l0TileScan),I.setBindGroup(0,this.sort_prefixBindGroup),I.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),I.end()}{const I=n.beginComputePass({label:`prefix_round${M} - l1TileScanOnL0`});I.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1TileScanOnL0),I.setBindGroup(0,this.sort_prefixBindGroup),I.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),I.end()}{const I=n.beginComputePass({label:`prefix_round${M} - l1ScanSums`});I.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1ScanSums),I.setBindGroup(0,this.sort_prefixBindGroup),I.dispatchWorkgroups(1,Xe,1),I.end()}{const I=n.beginComputePass({label:`prefix_round${M} - addL1ToL0`});I.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL1ToL0),I.setBindGroup(0,this.sort_prefixBindGroup),I.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),I.end()}{const I=n.beginComputePass({label:`prefix_round${M} - addL0ToElems`});I.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL0ToElems),I.setBindGroup(0,this.sort_prefixBindGroup),I.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),I.end()}{const I=n.beginComputePass({label:`prefix_round${M} - computeDigitBase`});I.setPipeline(this.sort_pipelines.hierarchicalBlelloch.computeDigitBase),I.setBindGroup(0,this.sort_prefixBindGroup),I.dispatchWorkgroups(1,1,1),I.end()}{const I={label:`scatter_round${M}`};S&&M==gt-1&&(I.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:w+5});const Q=n.beginComputePass(I);Q.setPipeline(R.scatterElements),Q.setBindGroup(0,J),Q.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),Q.end()}}{let M=d;this.acc16&&(this.ensureAccResources(Ne.canvas_size[0],Ne.canvas_size[1]),M=this.accView);const G={label:"render",colorAttachments:[{view:M,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};S&&(G.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:w+6,...this.acc16?{}:{endOfPassWriteIndex:w+7}});const R=n.beginRenderPass(G);if(R.setPipeline(this.legacyRenderer?this.legacyRenderPipeline:this.fetchById?this.renderPipeline:this.varyingsPipeline),R.setBindGroup(0,this.renderSettingsBindGroup),R.setBindGroup(1,this.renderSplatsBindGroup),R.setBindGroup(2,this.atlasBindGroup),R.drawIndirect(this.draw_indirect_buffer,0),R.end(),this.acc16){const W={label:"acc16_resolve",colorAttachments:[{view:d,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};S&&(W.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:w+7});const J=n.beginRenderPass(W);J.setPipeline(this.accResolvePipeline),J.setBindGroup(0,this.accResolveBindGroup),J.draw(3),J.end()}}this.frameCount++}async readPerfMetrics(n){const d=(n==null?void 0:n.silent)??!1;if(this.frameCount<=0)return;const v=this.device.createCommandEncoder({label:"timestamp resolve encoder"});v.resolveQuerySet(this.querySet,0,this.totalQueryCount,this.resolveBuffer,0),v.copyBufferToBuffer(this.resolveBuffer,0,this.resultBuffer,0,this.totalQueryCount*8),this.device.queue.submit([v.finish()]),await this.device.queue.onSubmittedWorkDone();const b=[["Total",7,0],["Culling",1,0],["Preprocess",3,2],["Sort",5,4],["Render",7,6]];await this.resultBuffer.mapAsync(GPUMapMode.READ);const w=new BigInt64Array(this.resultBuffer.getMappedRange()),S=Math.min(this.frameCount,this.queryCapacityFrames),M=(this.lastFrame+this.frameCount-S)%this.queryCapacityFrames,G=Array.from({length:b.length},()=>[]);let R=0;for(let ee=0;ee<S;ee++){const pe=(M+ee)%this.queryCapacityFrames,L=pe*this.queriesPerFrame;let te=!0;for(let ie=0;ie<b.length;ie++){const[$,he,K]=b[ie];if(w[L+K]===0n||w[L+he]===0n||w[L+he]<w[L+K]){te=!1;break}}if(!te){!d&&pe%60===0&&console.debug("[timestamp] frame slot",pe,"contains unwritten (0) timestamps, skipped in stats");continue}R++;for(let ie=0;ie<b.length;ie++){const[$,he,K]=b[ie],Z=Number(w[L+K]),_e=Number(w[L+he]);G[ie].push((_e-Z)/1e6)}}if(R===0){this.resultBuffer.unmap(),d||console.warn("[timestamp] No complete frames available (some timestamps are 0). It may be the first frame or the GPU is still filling.");return}this.allFrameTimes.push(...G[0]);const W=[];let J=0,I=0,Q=0;for(let ee=0;ee<b.length;ee++){const pe=b[ee][0],L=G[ee];let te=0;if(pe==="Total"){const ie=this.allFrameTimes;te=ie.reduce((K,Z)=>K+Z,0)/ie.length;const $=[...ie].sort((K,Z)=>K-Z);J=$[Math.floor($.length*.99)]||0;const he=ie.reduce((K,Z)=>K+Math.pow(Z-te,2),0)/ie.length;I=Math.sqrt(he),Q=te}else te=L.reduce((ie,$)=>ie+$,0)/L.length;W.push([pe,te])}this.lastFrame+=this.frameCount,this.frameCount=0;const ae=Object.fromEntries(W);this.lastStageBreakdownMs={cull:ae.Culling??0,preprocess:ae.Preprocess??0,sort:ae.Sort??0,render:ae.Render??0,total:ae.Total??0};const O=`[TIMESTAMP - ${this.constructor.name}]
`+W.map(([ee,pe])=>`${ee}: ${pe.toFixed(3)}ms`).join(`
`)+`
Total P99: ${J.toFixed(3)}ms
Total STD: ${I.toFixed(3)}ms
Total AVG: ${Q.toFixed(3)}ms
Stats computed over ${this.allFrameTimes.length} frames (cumulative)
${this.lastFrame} frames rendered since start`;if(d||(console.log(O),console.log("All Frame Times (Total, ms):",JSON.stringify(this.allFrameTimes))),this.downloadOnceNextRead){this.downloadOnceNextRead=!1;const ee=`Stage,ms
`,pe=W.map(([ie,$])=>`${ie},${$.toFixed(3)}`).join(`
`),L="data:text/csv;charset=utf-8,"+encodeURIComponent(ee+pe),te=document.createElement("a");te.href=L,te.download=`${this.downloadOnceFileName}.csv`,document.body.appendChild(te),te.click(),te.remove()}if(this.showPerfDialogNext){this.showPerfDialogNext=!1;try{alert(O)}catch{console.warn("Unable to show dialog; metrics printed to console.")}}this.resultBuffer.unmap()}_setupTimestampQueries(){this.querySet=this.device.createQuerySet({type:"timestamp",count:this.totalQueryCount});const n=this.totalQueryCount*8;this.resolveBuffer=this.device.createBuffer({size:n,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),this.resultBuffer=this.device.createBuffer({size:n,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}_setupBuffers(){this.render_settings_buffer=this.device.createBuffer({label:"render settings",size:rs,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const n=document.querySelector("canvas"),d=n?n.width:1,v=n?n.height:1;es({width:d,height:v,sh_bias:this.pc.sh_bias,color_K:this.pc.K,feature_mode:this.pc.feature_mode}),dn(this.device,this.render_settings_buffer),this.splat_2d_buffer=this.device.createBuffer({label:"splats_2d (Splat2DGS)",size:at(this.pc.num_points*as),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.draw_indirect_buffer=this.device.createBuffer({label:"draw indirect",size:4*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT}),this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([this.octBound?8:4,0,0,0])),this.sh_solvers_buffer=this.device.createBuffer({label:"sh_solvers",size:at(this.pc.num_points*os),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST})}requestPerfDialog(){this.showPerfDialogNext=!0}requestDownloadMetrics(n){if(n&&n.trim().length>0){const d=n.trim().replace(/[^a-zA-Z0-9_\-]/g,"_");this.downloadOnceFileName=d.length>0?d:this.downloadOnceFileName}else{const d=new Date,v=`${d.getFullYear()}${String(d.getMonth()+1).padStart(2,"0")}${String(d.getDate()).padStart(2,"0")}_${String(d.getHours()).padStart(2,"0")}${String(d.getMinutes()).padStart(2,"0")}${String(d.getSeconds()).padStart(2,"0")}`;this.downloadOnceFileName=`fps_metrics_${v}`}this.downloadOnceNextRead=!0}requestReorder(){}async maybeReorderAfterSubmit(){}}function ps(r){const n=new TextDecoder().decode(new Uint8Array(r,0,4));if(n!=="GSB1")throw new Error(`not a GSB1 file (magic '${n}')`);const d=new DataView(r).getUint32(4,!0),v=JSON.parse(new TextDecoder().decode(new Uint8Array(r,8,d))),b=8+d;return{header:v,bytes:r.byteLength,block(w){const S=v.blocks.find(M=>M.name===w);if(!S)throw new Error(`GSB block '${w}' missing`);return r.slice(b+S.offset,b+S.offset+S.nbytes)}}}const Xt=`// Shared by the COMPUTE passes of the bench.html baselines (prepended to each; the including
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
`,hs=`// Sorted 3DGS path (FastGS, Speedy-Splat), pass 1 of 3: frustum cull + EWA projection +
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
`,_s=`// Mobile-GS (Du et al., ICLR'26) compute passes, a line-by-line port of their released
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
`,gs=`// Raster pass shared by both bench baselines. One quad per splat, spanned by the 2D
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

`,ms=`// Mobile-GS fullscreen resolve of gs_raster.wgsl's fs_wsum targets: C = (Σcαw / max(Σαw, eps))·(1 - T) + T·bg  (bg = black).
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
`,kt=8,Ve=1<<kt,et=256,yt=32/kt;class xs{constructor(n,d,v){T(this,"depthsIn");T(this,"indicesIn");T(this,"indicesOut");T(this,"owned",[]);T(this,"passes",[]);T(this,"histBg");T(this,"scatterBg");T(this,"prefixBg");T(this,"prefix",{});this.device=n,this.info=v;const b=(Math.floor((d+et-1)/et)+1)*et,w=Math.ceil(b/et),S=(ne,C)=>{const de=n.createBuffer({label:ne,size:C,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});return this.owned.push(de),de},M=[0,1].map(ne=>({d:S(`sort keys ${ne}`,b*4),p:S(`sort payload ${ne}`,b*4)})),G=S("wg histograms",w*Ve*4),R=S("wg prefixes",w*Ve*4),W=S("digit base",Ve*4),J=Math.ceil(w/et),I=Math.ceil(J/et),Q=S("l0 sums",J*Ve*4),ae=S("l0 offsets",J*Ve*4),oe=S("l1 sums",I*Ve*4),O=S("l1 offsets",I*Ve*4);this.depthsIn=M[0].d,this.indicesIn=M[0].p,this.indicesOut=M[yt&1].p;const ee=ne=>({visibility:GPUShaderStage.COMPUTE,buffer:{type:ne}}),pe=n.createBindGroupLayout({entries:[{binding:0,...ee("read-only-storage")},{binding:1,...ee("read-only-storage")},{binding:2,...ee("storage")}]}),L=n.createBindGroupLayout({entries:[{binding:0,...ee("read-only-storage")},{binding:1,...ee("read-only-storage")},{binding:2,...ee("read-only-storage")},{binding:3,...ee("storage")},{binding:4,...ee("read-only-storage")},{binding:5,...ee("storage")},{binding:6,...ee("read-only-storage")}]}),te=n.createBindGroupLayout({entries:[{binding:0,...ee("read-only-storage")},{binding:1,...ee("read-only-storage")},...[2,3,4,5,6,7].map(ne=>({binding:ne,...ee("storage")}))]}),ie=n.createShaderModule({label:"bench radix histogram",code:cn}),$=n.createShaderModule({label:"bench radix scatter",code:on}),he=n.createShaderModule({label:"bench radix prefix",code:ln}),K=n.createPipelineLayout({bindGroupLayouts:[pe]}),Z=n.createPipelineLayout({bindGroupLayouts:[L]});for(let ne=0;ne<yt;ne++){const C={PASS_ID:ne,RS_RADIX_LOG2:kt,RS_RADIX_SIZE:Ve};this.passes.push({hist:n.createComputePipeline({layout:K,compute:{module:ie,entryPoint:"local_histogram_pass",constants:C}}),scatter:n.createComputePipeline({layout:Z,compute:{module:$,entryPoint:"scatter_elements",constants:C}})})}const _e=n.createPipelineLayout({bindGroupLayouts:[te]});for(const ne of["prefix_l0_tile_scan","prefix_l1_tile_scan_on_l0_sums","prefix_scan_l1_sums","prefix_add_l1_to_l0_offsets","prefix_add_l0_to_elements","compute_digit_base"])this.prefix[ne]=n.createComputePipeline({layout:_e,compute:{module:he,entryPoint:ne,constants:{WG_SIZE:et}}});const D=(ne,C)=>({binding:ne,resource:{buffer:C}});this.prefixBg=n.createBindGroup({layout:te,entries:[D(0,v),D(1,G),D(2,R),D(3,Q),D(4,ae),D(5,oe),D(6,O),D(7,W)]}),this.histBg=[0,1].map(ne=>n.createBindGroup({layout:pe,entries:[D(0,v),D(1,M[ne].d),D(2,G)]})),this.scatterBg=[0,1].map(ne=>n.createBindGroup({layout:L,entries:[D(0,v),D(1,W),D(2,M[ne].d),D(3,M[1-ne].d),D(4,M[ne].p),D(5,M[1-ne].p),D(6,R)]}))}encode(n){const d=(v,b,w,S)=>{const M=n.beginComputePass();M.setPipeline(v),M.setBindGroup(0,b),w!==null?M.dispatchWorkgroupsIndirect(this.info,w):M.dispatchWorkgroups(S[0],S[1],1),M.end()};for(let v=0;v<yt;v++){const b=v&1;d(this.passes[v].hist,this.histBg[b],4),d(this.prefix.prefix_l0_tile_scan,this.prefixBg,16),d(this.prefix.prefix_l1_tile_scan_on_l0_sums,this.prefixBg,32),d(this.prefix.prefix_scan_l1_sums,this.prefixBg,null,[1,Ve]),d(this.prefix.prefix_add_l1_to_l0_offsets,this.prefixBg,32),d(this.prefix.prefix_add_l0_to_elements,this.prefixBg,16),d(this.prefix.compute_digit_base,this.prefixBg,null,[1,1]),d(this.passes[v].scatter,this.scatterBg[b],4)}}destroy(){for(const n of this.owned)n.destroy()}}const Kt=256,ys=64,tt=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST;class bs{constructor(n,d,v,b,w){T(this,"n");T(this,"kind");T(this,"freezeMlp",!1);T(this,"owned",[]);T(this,"params",new ArrayBuffer(32));T(this,"paramsBuf");T(this,"info");T(this,"drawArgs");T(this,"vpBuf");T(this,"indirectPipe");T(this,"indirectBg");T(this,"computeBgs");T(this,"cullPipe");T(this,"mlpPipe",null);T(this,"mlpAllPipe",null);T(this,"prepPipe",null);T(this,"rasterPipe");T(this,"rasterBg");T(this,"sorter",null);T(this,"countCopy",null);T(this,"cullInfoBg",null);T(this,"accTex",null);T(this,"trTex",null);T(this,"resolvePipe",null);T(this,"resolveBgl",null);T(this,"resolveBg",null);T(this,"accFormat");T(this,"wScale");T(this,"eps",null);this.device=n,this.targetFormat=b;const S=d.header;this.n=S.n,this.kind=S.render;const M=S.n,G=(V,re,ye=tt|GPUBufferUsage.COPY_SRC)=>{const Se=n.createBuffer({label:V,size:Math.max(16,re+(4-re%4)%4),usage:ye});return this.owned.push(Se),Se},R=(V,re)=>{const ye=re instanceof ArrayBuffer?new Uint8Array(re):new Uint8Array(re.buffer,re.byteOffset,re.byteLength),Se=G(V,ye.byteLength,tt);return n.queue.writeBuffer(Se,0,ye),Se},W=new Float32Array(d.block("pos")),J=new Float32Array(d.block("cov3d")),I=this.kind==="sorted_3dgs"?new Float32Array(d.block("opacity")):null,Q=new Float32Array(M*10);for(let V=0;V<M;V++)Q[V*10]=W[V*3],Q[V*10+1]=W[V*3+1],Q[V*10+2]=W[V*3+2],Q[V*10+3]=I?I[V]:1,Q.set(J.subarray(V*6,V*6+6),V*10+4);const ae=R("bench gauss",Q),oe=R("bench sh",d.block("sh"));this.paramsBuf=G("bench params",32,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST),this.accFormat=w.float32Blend?"rgba32float":"rgba16float",this.wScale=w.float32Blend?1:1/1024;const O=new Uint32Array(this.params),ee=new Float32Array(this.params);O[0]=M,O[1]=S.sh_degree,ee[2]=w.cutoffMult??S.cutoff_mult??1,ee[3]=this.wScale,n.queue.writeBuffer(this.paramsBuf,0,this.params),this.info=G("bench sort info",64,tt|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT),this.drawArgs=G("bench draw args",16,tt|GPUBufferUsage.INDIRECT),n.queue.writeBuffer(this.drawArgs,0,new Uint32Array([4,0,0,0])),this.vpBuf=G("bench viewport",16,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST);const pe=G("bench splats",M*ys),L=n.createShaderModule({label:"bench indirect",code:an});this.indirectPipe=n.createComputePipeline({layout:"auto",compute:{module:L,entryPoint:"write_dispatch_triples",constants:{RS_RADIX_SIZE:256}}}),this.indirectBg=n.createBindGroup({layout:this.indirectPipe.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.info}},{binding:1,resource:{buffer:this.drawArgs}}]});const te=GPUShaderStage.COMPUTE,ie=(V,re=te)=>n.createBindGroupLayout({entries:V.map((ye,Se)=>({binding:Se,visibility:re,buffer:{type:ye}}))}),$=(V,re)=>({binding:V,resource:{buffer:re}}),he=ie(["uniform","uniform"]),K=n.createBindGroup({layout:he,entries:[$(0,v),$(1,this.paramsBuf)]});let Z,_e;if(this.kind==="sorted_3dgs"){this.sorter=new xs(n,M,this.info);const V=ie(["read-only-storage","read-only-storage","storage"]),re=ie(["storage","storage","storage"]),ye=n.createShaderModule({label:"gs3d_cull",code:Xt+hs});this.cullPipe=n.createComputePipeline({label:"gs3d_cull",layout:n.createPipelineLayout({bindGroupLayouts:[he,V,re]}),compute:{module:ye,entryPoint:"cull"}}),this.computeBgs=[K,n.createBindGroup({layout:V,entries:[$(0,ae),$(1,oe),$(2,pe)]}),n.createBindGroup({layout:re,entries:[$(0,this.info),$(1,this.sorter.depthsIn),$(2,this.sorter.indicesIn)]})],_e=this.sorter.indicesOut,Z=G("bench weights stub",16,tt)}else{const V=new Float32Array(d.block("scale")),re=new Float32Array(d.block("rot")),ye=new Float32Array(M*7);for(let x=0;x<M;x++)ye.set(V.subarray(x*3,x*3+3),x*7),ye.set(re.subarray(x*4,x*4+4),x*7+3);const Se=R("bench mgs attr",ye),me=(x,y,e)=>{const u=new Float32Array(x.length);for(let i=0;i<y;i++)for(let o=0;o<e;o++)u[o*y+i]=x[i*e+o];return u},Te=S.mlp.flatMap(x=>[me(new Float32Array(d.block(`${x.name}.weight`)),x.out_dim,x.in_dim),new Float32Array(d.block(`${x.name}.bias`))]),ze=S.mlp.map(x=>`${x.in_dim}>${x.out_dim}`).join(",");if(ze!=="22>256,256>128,128>64,64>1,64>1")throw new Error(`unexpected Mobile-GS MLP ${ze}`);const ke=new Float32Array(Te.reduce((x,y)=>x+y.length,0));let le=0;for(const x of Te)ke.set(x,le),le+=x.length;const we=R("bench mgs mlp",ke),Be=G("bench mgs vis",M*4),B=G("bench mgs mlp out",M*8);Z=G("bench mgs weights",M*4),this.countCopy=G("bench mgs count",16,tt);const A=ie(["read-only-storage","read-only-storage","read-only-storage","read-only-storage"]),h=ie(["read-only-storage","storage","storage","storage","storage"]),t=ie(["storage"]),c=n.createShaderModule({label:"mgs_compute",code:Xt+_s}),a=n.createPipelineLayout({bindGroupLayouts:[he,A,h,t]}),f=n.createPipelineLayout({bindGroupLayouts:[he,A,h]}),g=(x,y)=>n.createComputePipeline({label:`mgs_${x}`,layout:y,compute:{module:c,entryPoint:x}});this.cullPipe=g("cull",a),this.mlpPipe=g("mlp_coop",f),this.mlpAllPipe=g("mlp_all_coop",f),this.prepPipe=g("prep",f),this.computeBgs=[K,n.createBindGroup({layout:A,entries:[$(0,ae),$(1,oe),$(2,Se),$(3,we)]}),n.createBindGroup({layout:h,entries:[$(0,this.countCopy),$(1,Be),$(2,B),$(3,pe),$(4,Z)]})],this.cullInfoBg=n.createBindGroup({layout:t,entries:[$(0,this.info)]}),_e=G("bench order stub",16,tt)}const D=GPUShaderStage.VERTEX,ne=n.createBindGroupLayout({entries:[{binding:0,visibility:D,buffer:{type:"read-only-storage"}},{binding:1,visibility:D,buffer:{type:"read-only-storage"}},{binding:2,visibility:D,buffer:{type:"uniform"}},{binding:3,visibility:D,buffer:{type:"read-only-storage"}}]});this.rasterBg=n.createBindGroup({layout:ne,entries:[$(0,pe),$(1,_e),$(2,this.vpBuf),$(3,Z)]});const C=n.createShaderModule({label:"gs_raster",code:gs}),de=V=>({operation:"add",srcFactor:"one",dstFactor:V}),ge=this.kind==="sorted_3dgs";if(this.rasterPipe=n.createRenderPipeline({label:ge?"gs_raster over":"gs_raster wsum",layout:n.createPipelineLayout({bindGroupLayouts:[ne]}),vertex:{module:C,entryPoint:ge?"vs_main":"vs_wsum"},fragment:ge?{module:C,entryPoint:"fs_over",targets:[{format:b,blend:{color:de("one-minus-src-alpha"),alpha:de("one-minus-src-alpha")}}]}:{module:C,entryPoint:"fs_wsum",targets:[{format:this.accFormat,blend:{color:de("one"),alpha:de("one")}},{format:"r16float",blend:{color:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src"},alpha:{operation:"add",srcFactor:"zero",dstFactor:"one"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}}),!ge){this.eps=G("bench resolve eps",16,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST),n.queue.writeBuffer(this.eps,0,new Float32Array([1e-5*this.wScale,0,0,0]));const V=GPUShaderStage.FRAGMENT;this.resolveBgl=n.createBindGroupLayout({entries:[{binding:0,visibility:V,texture:{sampleType:"unfilterable-float"}},{binding:1,visibility:V,texture:{sampleType:"unfilterable-float"}},{binding:2,visibility:V,buffer:{type:"uniform"}}]});const re=n.createShaderModule({label:"mgs_resolve",code:ms});this.resolvePipe=n.createRenderPipeline({layout:n.createPipelineLayout({bindGroupLayouts:[this.resolveBgl]}),vertex:{module:re,entryPoint:"vs_full"},fragment:{module:re,entryPoint:"fs_resolve",targets:[{format:b}]},primitive:{topology:"triangle-list"}})}}get label(){return this.kind==="sorted_3dgs"?"sorted 3DGS":`sort-free (${this.accFormat})`}get accumulationFormat(){return this.accFormat}async computeAllMlp(n=32768){if(!this.mlpAllPipe)return;const d=new Uint32Array(this.params);for(let v=0;v<this.n;v+=n){d[4]=v,this.device.queue.writeBuffer(this.paramsBuf,0,this.params);const b=this.device.createCommandEncoder(),w=b.beginComputePass();w.setPipeline(this.mlpAllPipe),this.computeBgs.forEach((S,M)=>w.setBindGroup(M,S)),w.dispatchWorkgroups(Math.ceil(Math.min(n,this.n-v)/Kt)),w.end(),this.device.queue.submit([b.finish()]),await this.device.queue.onSubmittedWorkDone()}d[4]=0,this.device.queue.writeBuffer(this.paramsBuf,0,this.params)}ensureTargets(n,d){var b,w;if(this.kind!=="sortfree_weighted"||this.accTex&&this.accTex.width===n&&this.accTex.height===d)return;(b=this.accTex)==null||b.destroy(),(w=this.trTex)==null||w.destroy();const v=GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING;this.accTex=this.device.createTexture({label:"mgs acc",size:[n,d],format:this.accFormat,usage:v}),this.trTex=this.device.createTexture({label:"mgs T",size:[n,d],format:"r16float",usage:v}),this.resolveBg=this.device.createBindGroup({layout:this.resolveBgl,entries:[{binding:0,resource:this.accTex.createView()},{binding:1,resource:this.trTex.createView()},{binding:2,resource:{buffer:this.eps}}]})}frame(n,d,v,b){this.device.queue.writeBuffer(this.vpBuf,0,new Float32Array([v,b,0,0])),this.ensureTargets(v,b);const w=(G,R)=>{const W=n.beginComputePass();W.setPipeline(G),this.computeBgs.forEach((J,I)=>W.setBindGroup(I,J)),!R&&this.cullInfoBg&&W.setBindGroup(3,this.cullInfoBg),R?W.dispatchWorkgroupsIndirect(this.info,4):W.dispatchWorkgroups(Math.ceil(this.n/Kt)),W.end()};n.clearBuffer(this.info,0,4),w(this.cullPipe,!1);{const G=n.beginComputePass();G.setPipeline(this.indirectPipe),G.setBindGroup(0,this.indirectBg),G.dispatchWorkgroups(1),G.end()}if(this.kind==="sorted_3dgs"){this.sorter.encode(n);const G=n.beginRenderPass({colorAttachments:[{view:d,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,1]}]});G.setPipeline(this.rasterPipe),G.setBindGroup(0,this.rasterBg),G.drawIndirect(this.drawArgs,0),G.end();return}n.copyBufferToBuffer(this.info,0,this.countCopy,0,4),this.freezeMlp||w(this.mlpPipe,!0),w(this.prepPipe,!0);const S=n.beginRenderPass({colorAttachments:[{view:this.accTex.createView(),loadOp:"clear",storeOp:"store",clearValue:[0,0,0,0]},{view:this.trTex.createView(),loadOp:"clear",storeOp:"store",clearValue:[1,0,0,0]}]});S.setPipeline(this.rasterPipe),S.setBindGroup(0,this.rasterBg),S.drawIndirect(this.drawArgs,0),S.end();const M=n.beginRenderPass({colorAttachments:[{view:d,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,1]}]});M.setPipeline(this.resolvePipe),M.setBindGroup(0,this.resolveBg),M.draw(3),M.end()}destroy(){var n,d,v;for(const b of this.owned)b.destroy();(n=this.sorter)==null||n.destroy(),(d=this.accTex)==null||d.destroy(),(v=this.trTex)==null||v.destroy()}}const nt="rgba8unorm",Jt="https://huggingface.co/datasets/Nilkel/bitymi-demos/resolve/main",Ke=[{id:"bitymi",label:"BITYMI (ours)",asset:"bitymi",note:"baked 2DGS + compressed atlas, stock viewer renderer"},{id:"bitymi_noatlas",label:"BITYMI (atlas off)",asset:"bitymi",note:"diagnostic: same surfels, no atlas texture fetch (SV colour only)"},{id:"bitymi_oct",label:"BITYMI (octagon bound)",asset:"bitymi",note:"diagnostic: 8-vertex ellipse-tangent bound, ~25% fewer fragments (?oct=1)"},{id:"bitymi_mip0",label:"BITYMI (mips, bias 0)",asset:"bitymimip",note:"diagnostic: atlas mip chain, full per-surfel prefiltering"},{id:"bitymi_mip1",label:"BITYMI (mips, bias 1)",asset:"bitymimip",note:"diagnostic: atlas mip chain, one level less prefiltering"},{id:"bitymi_mipft0",label:"BITYMI (mip-aware ft, bias 0)",asset:"bitymimipft",note:"atlas finetuned with the bias-0 per-surfel mip rule"},{id:"fastgs",label:"FastGS",asset:"fastgs",note:"authors checkpoint, sorted 3DGS SH3"},{id:"speedy",label:"Speedy-Splat",asset:"speedy",note:"authors checkpoint, sorted 3DGS SH3"},{id:"mobilegs",label:"Mobile-GS",asset:"mobilegs",note:"authors checkpoint (their decode), sort-free, per-frame MLP"},{id:"mobilegs_frozen",label:"Mobile-GS (MLP frozen)",asset:"mobilegs",note:"ablation: MLP evaluated once, raster cost only"}],ws=r=>new Promise(n=>setTimeout(n,r)),ft=()=>new Promise(r=>setTimeout(r,0));function vs(r){const n=new TextDecoder().decode(new Uint8Array(r,0,8));if(n!=="BITYMI01")throw new Error(`not a BITYMI bundle ('${n}')`);const d=new DataView(r);let v=null,b=null;for(let w=0;w<d.getUint32(8,!0);w++){const S=12+w*20,M=d.getUint32(S,!0),G=Number(d.getBigUint64(S+4,!0)),R=Number(d.getBigUint64(S+12,!0));M===0||M===1||M===5?v=r.slice(G,G+R):(M===3||M===4)&&(b=r.slice(G,G+R))}if(!v)throw new Error("bundle has no point cloud chunk");return{pc:v,atlas:b}}async function pt(r,n){var W;const d=await fetch(r);if(!d.ok)throw new Error(`${r}: HTTP ${d.status}`);const v=Number(d.headers.get("content-length"))||0,b=(W=d.body)==null?void 0:W.getReader();if(!b)return d.arrayBuffer();const w=[];let S=0,M=0;for(;;){const{done:J,value:I}=await b.read();if(J)break;w.push(I),S+=I.byteLength,S-M>2<<20&&(M=S,n(S/2**20,v?v/2**20:null))}const G=new Uint8Array(S);let R=0;for(const J of w)G.set(J,R),R+=J.byteLength;return G.buffer}function Bt(r,n,d=new Set,v=0){if(!(!r||typeof r!="object"||d.has(r)||v>2)){d.add(r);for(const b of Object.values(r))n.has(b)||(b instanceof GPUBuffer||b instanceof GPUTexture?b.destroy():Array.isArray(b)?b.forEach(w=>Bt(w,n,d,v+1)):b&&typeof b=="object"&&Object.getPrototypeOf(b)===Object.prototype&&Bt(b,n,d,v+1))}}async function Ss(r,n,d,v,b){const w=new URLSearchParams(location.search),S=w.get("scene")??"garden",M=(w.get("assets")??`${Jt}/bench/${S}`).replace(/\/$/,""),G=d.features.has("texture-compression-bc"),R=d.features.has("texture-compression-astc"),W=w.get("bitymi")??`${Jt}/mip_360/${S}_e3rdraw${G||!R?"":"_astc"}.bitymi`,J=d.features.has("float32-blendable"),I=/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&/Mac/i.test(navigator.platform),Q=w.get("byid");let ae=Q!==null?Q==="1":!I,oe=w.get("legacy")==="1";n.configure({device:d,format:nt,alphaMode:"opaque"});const O=new wt(r,d),ee=new $n(O),pe=document.getElementById("bench-panel"),L=p=>document.getElementById(p),te=p=>{L("status").textContent=p},ie=await(await fetch(`${M}/manifest.json`)).json(),$=await Dn(`${M}/${ie.cameras}`),he=await(await fetch(`${M}/${ie.cameras}`)).json(),[K,Z]=ie.resolution,_e=2*Math.atan(Z/(2*he[0].fy));O.setFov(_e),O.setFocalRatio(he[0].fx/he[0].fy),O.set_preset($[0]),ee.resetToCamera();const D=L("method");for(const p of Ke)D.add(new Option(p.label,p.id));const ne=v.info;L("device").textContent=`${ne.vendor||"?"} ${ne.architecture||""} ${ne.device||ne.description||""}`.trim()+` · BC7 ${G?"✓":"✗"} ASTC ${R?"✓":"✗"} · float32-blend ${J?"✓":"✗"}`;let C=null,de=!1,ge=null,V=null,re=null;const ye=w.get("bitymimip")??W.replace(/_e3rdraw(_astc)?\.bitymi$/,"_e3rdmip$1.bitymi"),Se=w.get("bitymimipft")??W.replace(/_e3rdraw(_astc)?\.bitymi$/,"_e3rdmipft$1.bitymi"),me=p=>p==="bitymimip"||p==="bitymimipft",Te=p=>["bitymi_mip0","bitymi_mipft0"].includes(p.base??p.id)?0:1;async function ze(p){var N,Y;const P=performance.now(),k=(F,H)=>te(`${p.label}: downloading ${F.toFixed(0)}${H?` / ${H.toFixed(0)}`:""} MB`);if(p.asset==="bitymi"||me(p.asset)){const F=p.asset==="bitymi"?ge??(ge=await pt(W,k)):p.asset==="bitymimip"?V??(V=await pt(ye,k)):re??(re=await pt(Se,k)),H=(p.base??p.id)==="bitymi_oct";te(`${p.label}: parsing`);const{pc:q,atlas:j}=vs(F),ce=await Vn(new File([q],"bundle.ply"),d);let X=null;j&&(X=Yn(d,Hn(j),!0));const ue=new fs(ce,d,nt,O.uniform_buffer,b,X,{fetchById:p.byid??ae,octBound:H,acc16:!1});(p.legacy??oe)&&ue.setLegacyRenderer(!0),ue.setAtlasEnabled((p.base??p.id)!=="bitymi_noatlas"),me(p.asset)&&ue.setMipLodBias(Te(p));let xe=0,ve=0;const Ee=X?X.meta.format===3||X.meta.format===8||X.meta.format===10?"ASTC":"BC7":"NONE (atlas unsupported: renders SV-only, not comparable)";return{def:p,prims:ce.num_points,downloadBytes:F.byteLength,gs:ue,oct:H,atlasKind:Ee,detail:`atlas ${(p.base??p.id)==="bitymi_noatlas"?"OFF (diagnostic)":Ee} · fragment inputs ${p.byid??ae?"fetch-by-id":"varyings"} · ${p.legacy??oe?"LEGACY renderer":"current renderer"}${H?" · octagon bound":""}${me(p.asset)?` · atlas mips (${((Y=(N=X==null?void 0:X.meta)==null?void 0:N.mip_bytes)==null?void 0:Y.length)??1} levels)`:""} · ${(performance.now()-P).toFixed(0)} ms load`,render(De,Ie,Me,Ue){(Me!==xe||Ue!==ve)&&(ts(Me,Ue,d,ue.render_settings_buffer),xe=Me,ve=Ue),ue.frame(De,Ie,!1)},destroy(){ce.surfel_buffer.destroy(),ce.sv_params_buffer.destroy(),X&&(X.texture.destroy(),X.rectsBuffer.destroy(),X.texParamsBuffer.destroy()),Bt(ue,new Set([O.uniform_buffer]))}}}const U=await pt(`${M}/${ie.methods[p.asset].file}`,k);te(`${p.label}: uploading`);const E=new bs(d,ps(U),O.uniform_buffer,nt,{float32Blend:J});return{def:p,prims:E.n,downloadBytes:U.byteLength,baseline:E,detail:`${E.label}${p.asset==="mobilegs"?` · shipped model ${(ie.methods.mobilegs.shipped_bytes/2**20).toFixed(1)} MB (comp.xz, decoded offline)`:""}`,render:(F,H,q,j)=>E.frame(F,H,q,j),destroy:()=>E.destroy()}}async function ke(p){var k,U;const P=(C==null?void 0:C.gs)&&C.def.asset===p.asset&&C.oct===((p.base??p.id)==="bitymi_oct");if(C&&C.def.asset===p.asset&&(C.baseline||P)?(C={...C,def:p},(k=C.gs)==null||k.setAtlasEnabled((p.base??p.id)!=="bitymi_noatlas"),me(p.asset)&&((U=C.gs)==null||U.setMipLodBias(Te(p))),C.gs&&(C.gs.setFetchById(p.byid??ae),C.gs.setLegacyRenderer(p.legacy??oe),C.detail=C.detail.replace(/^atlas [^·]+·/,`atlas ${(p.base??p.id)==="bitymi_noatlas"?"OFF (diagnostic)":C.atlasKind} ·`).replace(/fragment inputs [a-z-]+/,`fragment inputs ${p.byid??ae?"fetch-by-id":"varyings"}`).replace(/(LEGACY|current) renderer/,p.legacy??oe?"LEGACY renderer":"current renderer"))):(C==null||C.destroy(),C=null,await d.queue.onSubmittedWorkDone(),C=await ze(p)),C.baseline&&C.baseline.kind==="sortfree_weighted"){const E=p.id==="mobilegs_frozen";E&&(O.set_preset($[0]),te("Mobile-GS: evaluating the MLP once for all Gaussians"),await C.baseline.computeAllMlp()),C.baseline.freezeMlp=E}return L("info").textContent=`${C.def.label}: ${C.prims.toLocaleString()} primitives · ${(C.downloadBytes/2**20).toFixed(1)} MB download · ${C.detail}`,te("ready"),C}D.onchange=async()=>{if(!(de||h)){de=!0;try{await ke(Ke.find(p=>p.id===D.value))}catch(p){te(`load failed: ${p}`),console.error(p)}finally{de=!1}}};const le=L("byid"),we=L("legacy");le.checked=ae,we.checked=oe;const Be=async()=>{if(de||h){le.checked=ae,we.checked=oe;return}if(ae=le.checked,oe=we.checked,(C==null?void 0:C.def.id)==="bitymi"){de=!0;try{C.destroy(),C=null,await d.queue.onSubmittedWorkDone(),await ke(Ke[0])}catch(p){te(`load failed: ${p}`),console.error(p)}finally{de=!1}}};le.onchange=Be,we.onchange=Be;let B=0;const A=p=>{B=(p+$.length)%$.length,O.set_preset($[B]),ee.resetToCamera(),L("view").textContent=`${B+1}/${$.length}`};L("prev").onclick=()=>A(B-1),L("next").onclick=()=>A(B+1);let h=!1,t=!1;document.addEventListener("visibilitychange",()=>{document.hidden&&(t=!0)});const c=()=>({warmupS:Number(L("warmup").value),measureS:Number(L("measure").value),minFrames:Number(L("minframes").value),maxS:Number(L("maxs").value),cooldownS:Number(L("cooldown").value),rounds:Number(L("rounds").value),frozen:L("frozen").checked,diag:L("diag").checked});window.__setMipBias=p=>{var P;(P=C==null?void 0:C.gs)==null||P.setMipLodBias(p)},window.__mipHistogram=async p=>{const P=C==null?void 0:C.gs;if(!P)throw new Error("BITYMI not loaded");const k=d.createTexture({size:[K,Z],format:nt,usage:GPUTextureUsage.RENDER_ATTACHMENT});O.setRenderSize(K,Z),O.setFov(_e),O.set_preset($[p]);const U=d.createCommandEncoder();C.render(U,k.createView(),K,Z);const E=P.splat_2d_buffer.size,z=d.createBuffer({size:E,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),N=d.createBuffer({size:16,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});U.copyBufferToBuffer(P.splat_2d_buffer,0,z,0,E),U.copyBufferToBuffer(P.sort_info_buffer,0,N,0,16),d.queue.submit([U.finish()]),await Promise.all([z.mapAsync(GPUMapMode.READ),N.mapAsync(GPUMapMode.READ)]);const Y=new Uint32Array(N.getMappedRange())[0],F=new Uint32Array(z.getMappedRange()),H=new Float32Array(F.buffer),q=[0,0,0,0,0],j=[0,0,0,0,0],ce=X=>{const ue=X>>10&31,xe=X&1023;return ue===0?xe/1024*2**-14:2**(ue-15)*(1+xe/1024)};for(let X=0;X<Y;X++){const ue=Math.min(4,Math.round(H[X*24+23])),xe=F[X*24+11],ve=4*ce(xe&65535)*ce(xe>>>16);q[ue]++,j[ue]+=ve}return z.unmap(),N.unmap(),z.destroy(),N.destroy(),k.destroy(),O.clearRenderSize(),O.setFov(_e),A(B),{n:Y,cnt:q,area:j}},window.__setMipMode=p=>{var P;(P=C==null?void 0:C.gs)==null||P.setMipMode(p)},window.__benchRender=async p=>{if(!C)throw new Error("nothing loaded");const P=d.createTexture({size:[K,Z],format:nt,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.COPY_SRC}),k=Math.ceil(K*4/256)*256,U=d.createBuffer({size:k*Z,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});O.setRenderSize(K,Z),O.setFov(_e),O.set_preset($[p]);const E=d.createCommandEncoder();C.render(E,P.createView(),K,Z),E.copyTextureToBuffer({texture:P},{buffer:U,bytesPerRow:k,rowsPerImage:Z},[K,Z,1]),d.queue.submit([E.finish()]),await U.mapAsync(GPUMapMode.READ);const z=new Uint8Array(U.getMappedRange()),N=new Uint8Array(K*Z*4);for(let F=0;F<Z;F++)N.set(z.subarray(F*k,F*k+K*4),F*K*4);U.unmap(),U.destroy(),P.destroy(),O.clearRenderSize(),O.setFov(_e),A(B);let Y="";for(let F=0;F<N.length;F+=32768)Y+=String.fromCharCode(...N.subarray(F,F+32768));return{w:K,h:Z,b64:btoa(Y)}};async function a(p,P,k){const U=d.createTexture({size:[K,Z],format:nt,usage:GPUTextureUsage.RENDER_ATTACHMENT}),E=U.createView();O.setRenderSize(K,Z),O.setFov(_e);let z=0;const N=async q=>{const j=performance.now();for(let ce=0;ce<q;ce++){O.set_preset($[z++%$.length]);const X=d.createCommandEncoder();p.render(X,E,K,Z),d.queue.submit([X.finish()])}return await d.queue.onSubmittedWorkDone(),performance.now()-j};let Y=1;const F=(q,j)=>{Y=Math.max(1,Math.min(60,Math.round(j*250/Math.max(q,1))))},H=`${p.def.label} · round ${P+1}`;t=!1;try{let q=0,j=0;for(;q<k.warmupS*1e3||j<3;){const xe=Y,ve=await N(xe);q+=ve,j+=xe,F(ve,xe),te(`${H}: warmup ${(q/1e3).toFixed(1)}/${k.warmupS} s`),await ft()}let ce=0,X=0;const ue=[];for(;(ce<k.measureS*1e3||X<k.minFrames)&&ce<k.maxS*1e3;){const xe=Y,ve=await N(xe);ce+=ve,X+=xe,ue.push(+(ve/xe).toFixed(3)),F(ve,xe),te(`${H}: ${(1e3*X/ce).toFixed(1)} FPS · ${X} frames · ${(ce/1e3).toFixed(1)} s`),await ft()}return{round:P,frames:X,ms:ce,fps:1e3*X/ce,chunkMsPerFrame:ue,interrupted:t}}finally{U.destroy(),O.clearRenderSize(),O.setFov(_e),A(B)}}let f=null,g=Ke;function x(p,P){var N;const k=((N=g.find(Y=>(Y.base??Y.id)==="bitymi"))==null?void 0:N.id)??"bitymi",U=p.get(k),E=U&&U.length?U.reduce((Y,F)=>Y+F.frames,0)/U.reduce((Y,F)=>Y+F.ms,0)*1e3:0,z=g.filter(Y=>p.has(Y.id)).map(Y=>{const F=p.get(Y.id),H=F.length?F.reduce((j,ce)=>j+ce.frames,0)/F.reduce((j,ce)=>j+ce.ms,0)*1e3:0,q=P.get(Y.id);return`<tr><td>${Y.label}</td><td>${q?q.prims.toLocaleString():""}</td><td>${q?(q.bytes/2**20).toFixed(0):""}</td><td>${F.map(j=>j.fps.toFixed(1)+(j.interrupted?"⚠":"")).join(" / ")}</td><td><b>${H?H.toFixed(1):""}</b></td><td>${H?(1e3/H).toFixed(1):""}</td><td>${E&&H&&!Y.id.startsWith("bitymi")?(E/H).toFixed(1)+"×":""}</td></tr>`}).join("");L("results").innerHTML=`<table><tr><th>method</th><th>prims</th><th>MB</th><th>FPS per round</th><th>FPS</th><th>ms</th><th>ours ×</th></tr>${z}</table>`}async function y(){var F,H;if(h||de)return;h=!0;const p=c(),P=L("benchall");P.disabled=!0,D.disabled=!0;let k=null;try{k=await((F=navigator.wakeLock)==null?void 0:F.request("screen"))}catch{}const U=(H=w.get("only"))==null?void 0:H.split(",").map(q=>q.trim()).filter(Boolean);let E=U!=null&&U.length?Ke.filter(q=>U.includes(q.id)):Ke.filter(q=>(p.frozen||q.id!=="mobilegs_frozen")&&(p.diag||!q.id.startsWith("bitymi_")));w.get("combos")==="1"&&(E=E.flatMap(q=>q.asset.startsWith("bitymi")?[[!0,!1],[!1,!1],[!0,!0],[!1,!0]].map(([j,ce])=>({...q,base:q.id,byid:j,legacy:ce,id:`${q.id}@${j?"byid":"vary"}${ce?"+legacy":""}`,label:`${q.label} · ${j?"byid":"varyings"}${ce?" · legacy":""}`})):[q])),g=E;const z=new Map,N=new Map,Y=new Date().toISOString();try{let q=!0;for(let j=0;j<p.rounds;j++){const ce=j%2===0?E:[...E].reverse();for(const X of ce){const ue=await ke(X);if(N.set(X.id,{prims:ue.prims,bytes:ue.downloadBytes,detail:ue.detail}),!q&&p.cooldownS>0)for(let ve=p.cooldownS;ve>0;ve--)te(`cooldown ${ve} s (next: ${X.label})`),await ws(1e3);q=!1;const xe=await a(ue,j,p);z.has(X.id)||z.set(X.id,[]),z.get(X.id).push(xe),x(z,N)}}f={kind:"bitymi-mobile-bench",version:1,scene:S,started:Y,finished:new Date().toISOString(),userAgent:navigator.userAgent,devicePixelRatio,adapter:{vendor:ne.vendor,architecture:ne.architecture,device:ne.device,description:ne.description},features:{bc:G,astc:R,float32Blendable:J,timestampQuery:d.features.has("timestamp-query")},resolution:[K,Z],fovY:_e,cameras:$.length,assets:M,bitymiUrl:W,bitymiVariant:{fetchById:ae,legacy:oe},protocol:{...p,order:E.map(j=>j.id),mirrored:!0,timing:"performance.now around chunked submits fenced by onSubmittedWorkDone, offscreen rgba8unorm"},methods:E.map(j=>({id:j.id,base:j.base,byid:j.byid,legacy:j.legacy,label:j.label,note:j.note,...N.get(j.id),fps:(()=>{const ce=z.get(j.id)??[],X=ce.reduce((ue,xe)=>ue+xe.ms,0);return X?1e3*ce.reduce((ue,xe)=>ue+xe.frames,0)/X:null})(),rounds:z.get(j.id)??[]}))},te(`done · ${E.length} methods × ${p.rounds} rounds`),L("summary").value=e(f),L("export").style.display=""}catch(q){te(`bench failed: ${q}`),console.error(q)}finally{try{await(k==null?void 0:k.release())}catch{}P.disabled=!1,D.disabled=!1,h=!1,D.value=(C==null?void 0:C.def.id)??"bitymi"}}function e(p){var Y,F,H;const P=p.methods.find(q=>(q.base??q.id)==="bitymi"),k=P==null?void 0:P.fps,U=[p.adapter.vendor,p.adapter.architecture,p.adapter.device||p.adapter.description].filter(Boolean).join(" ")||"unknown GPU",E=(((Y=p.userAgent.match(/\(([^)]*)\)/))==null?void 0:Y[1])??"")+" "+(((F=p.userAgent.match(/(Chrome|Firefox|Safari)\/[\d.]+/))==null?void 0:F[0])??""),z=p.protocol;return[`**${p.scene} render benchmark** · ${U} · ${E.trim()}`,`${p.resolution[0]}×${p.resolution[1]}, ${p.cameras} test views · ${z.rounds} rounds mirrored · warmup ${z.warmupS} s · measure ≥${z.measureS} s / ${z.minFrames} frames · cooldown ${z.cooldownS} s`,"","| method | primitives | download (MB) | FPS per round | FPS | ms/frame | BITYMI speed-up |","|---|---:|---:|---|---:|---:|---:|",...p.methods.map(q=>{var j;return`| ${q.label} | ${((j=q.prims)==null?void 0:j.toLocaleString())??""} | ${q.bytes?(q.bytes/2**20).toFixed(0):""} | ${q.rounds.map(ce=>ce.fps.toFixed(1)+(ce.interrupted?" (tab hidden)":"")).join(" / ")} | ${q.fps?q.fps.toFixed(1):""} | ${q.fps?(1e3/q.fps).toFixed(1):""} | ${!q.id.startsWith("bitymi")&&k&&q.fps?(k/q.fps).toFixed(2)+"×":""} |`}),"",`BITYMI: ${(P==null?void 0:P.detail)??((H=p.methods.find(q=>q.id.startsWith("bitymi")))==null?void 0:H.detail)??""}. Mobile-GS blend target: ${p.features.float32Blendable?"rgba32float":"rgba16float (float32-blendable unavailable)"}; frozen-MLP row = MLP evaluated once, i.e. raster cost only.`].join(`
`)}async function u(){var q,j,ce;if(h||de)return;h=!0;const p=L("abrun");p.disabled=!0,L("benchall").disabled=!0,D.disabled=!0;const P=Number(w.get("slice")??3),k=Number(w.get("cycles")??10),U=w.get("combos")==="1",E=[{id:"stock",label:"BITYMI (no mips)",atlas:!0,mips:!1,bias:1},{id:"noatlas",label:"BITYMI (atlas off)",atlas:!1,mips:!1,bias:1},{id:"mip0",label:"BITYMI (mips, bias 0)",atlas:!0,mips:!0,bias:0},{id:"mip1",label:"BITYMI (mips, bias 1)",atlas:!0,mips:!0,bias:1}],z=U?E.flatMap(X=>[[!0,!1],[!1,!1],[!0,!0],[!1,!0]].map(([ue,xe])=>({...X,byid:ue,legacy:xe,id:`${X.id}@${ue?"byid":"vary"}${xe?"+legacy":""}`,label:`${X.label} · ${ue?"byid":"varyings"}${xe?" · legacy":""}`}))):E.map(X=>({...X,byid:ae,legacy:oe}));let N=null;try{N=await((q=navigator.wakeLock)==null?void 0:q.request("screen"))}catch{}const Y=new Date().toISOString(),F=d.createTexture({size:[K,Z],format:nt,usage:GPUTextureUsage.RENDER_ATTACHMENT}),H=F.createView();try{const X=await ke(Ke.find(fe=>fe.id==="bitymi_mip1")),ue=X.gs,xe=fe=>{ue.setFetchById(fe.byid),ue.setLegacyRenderer(fe.legacy),ue.setMipLodBias(fe.bias),ue.setMipMode(fe.mips),ue.setAtlasEnabled(fe.atlas)};O.setRenderSize(K,Z),O.setFov(_e);let ve=0;const Ee=async fe=>{const Ge=performance.now();for(let Ae=0;Ae<fe;Ae++){O.set_preset($[ve++%$.length]);const Pe=d.createCommandEncoder();X.render(Pe,H,K,Z),d.queue.submit([Pe.finish()])}return await d.queue.onSubmittedWorkDone(),performance.now()-Ge};for(const fe of z)xe(fe),te(`A/B warmup: ${fe.label}`),await ft(),await Ee(10);const De={};for(const fe of z)De[fe.id]=[];for(let fe=0;fe<k;fe++){const Ge=z.map((Ae,Pe)=>z[(Pe+fe)%z.length]);for(const Ae of Ge){xe(Ae),await Ee(3);let Pe=0,He=0,je=4;for(;Pe<P*1e3;){const Ye=await Ee(je);Pe+=Ye,He+=je,je=Math.max(1,Math.min(60,Math.round(je*250/Math.max(Ye,1))))}De[Ae.id].push(1e3*He/Pe),te(`A/B cycle ${fe+1}/${k} · ${Ae.label}: ${(1e3*He/Pe).toFixed(1)} FPS`),await ft()}}const Ie=z[0].id,Me=z.map(fe=>{const Ge=De[fe.id],Ae=Ge.reduce((Le,Ce)=>Le+Ce,0)/Ge.length,Pe=Ge.map((Le,Ce)=>Le/De[Ie][Ce]),He=Pe.reduce((Le,Ce)=>Le+Ce,0)/Pe.length,je=Math.sqrt(Pe.reduce((Le,Ce)=>Le+(Ce-He)**2,0)/Math.max(1,Pe.length-1)/Pe.length),Ye=Math.sqrt(Ge.reduce((Le,Ce)=>Le+(Ce-Ae)**2,0)/Math.max(1,Ge.length-1));return{...fe,fps:Ae,fpsSd:Ye,ratio:He,ratioSe:je,perCycle:Ge.map(Le=>+Le.toFixed(2))}}),Ue=[ne.vendor,ne.architecture,ne.device||ne.description].filter(Boolean).join(" ")||"unknown GPU",Oe=(((j=navigator.userAgent.match(/\(([^)]*)\)/))==null?void 0:j[1])??"")+" "+(((ce=navigator.userAgent.match(/(Chrome|Firefox|Safari)\/[\d.]+/))==null?void 0:ce[0])??""),Re=[`**${S} interleaved A/B (BITYMI variants)** · ${Ue} · ${Oe.trim()}`,`${K}×${Z}, ${$.length} test views · ${k} cycles × ${z.length} variants × ${P} s slices, rotating order · ratio = paired per-cycle FPS / stock ± s.e.`,"","| variant | FPS (mean ± sd over cycles) | ms/frame | vs stock (paired) |","|---|---:|---:|---:|",...Me.map(fe=>`| ${fe.label} | ${fe.fps.toFixed(1)} ± ${fe.fpsSd.toFixed(1)} | ${(1e3/fe.fps).toFixed(2)} | ${fe.id===Ie?"1.00":`${fe.ratio.toFixed(3)} ± ${fe.ratioSe.toFixed(3)}`} |`),"",`bundle: ${ye.split("/").pop()} (mips off = the stock atlas: level 0 is identical) · ${X.detail}`].join(`
`);f={kind:"bitymi-interleaved-ab",version:1,scene:S,started:Y,finished:new Date().toISOString(),userAgent:navigator.userAgent,adapter:{vendor:ne.vendor,architecture:ne.architecture,device:ne.device,description:ne.description},resolution:[K,Z],slice_s:P,cycles:k,variants:Me},L("summary").value=Re,L("results").innerHTML="<table><tr><th>variant</th><th>FPS</th><th>vs stock</th></tr>"+Me.map(fe=>`<tr><td>${fe.label}</td><td>${fe.fps.toFixed(1)} ± ${fe.fpsSd.toFixed(1)}</td><td>${fe.id===Ie?"1.00":`${fe.ratio.toFixed(3)} ± ${fe.ratioSe.toFixed(3)}`}</td></tr>`).join("")+"</table>",L("export").style.display="",te(`A/B done · ${k} cycles × ${z.length} variants`),window.__abText=Re}catch(X){te(`A/B failed: ${X}`),console.error(X)}finally{F.destroy(),O.clearRenderSize(),O.setFov(_e),A(B);try{await(N==null?void 0:N.release())}catch{}p.disabled=!1,L("benchall").disabled=!1,D.disabled=!1,h=!1}}L("abrun").onclick=()=>u();const i=async(p,P)=>{try{await navigator.clipboard.writeText(p)}catch{const k=L("summary");k.value=p,k.select(),document.execCommand("copy")}te(`${P} copied`)};L("benchall").onclick=()=>y(),L("copytable").onclick=()=>{f&&i(f.kind==="bitymi-interleaved-ab"?window.__abText:e(f),"table")},L("copy").onclick=()=>{f&&i(JSON.stringify(f,null,1),"JSON")},L("download").onclick=()=>{if(!f)return;const p=document.createElement("a");p.href=URL.createObjectURL(new Blob([JSON.stringify(f,null,1)],{type:"application/json"})),p.download=`bench_${S}_${(ne.vendor||"gpu").replace(/\W+/g,"_")}_${Date.now()}.json`,p.click()};const o=()=>{r.width=Math.max(1,Math.round(r.clientWidth)),r.height=Math.max(1,Math.round(r.clientHeight)),O.on_update_canvas()};new ResizeObserver(o).observe(r),o();let s=performance.now(),l=0,m=Promise.resolve();async function _(){const p=performance.now(),P=Math.min(.1,(p-s)/1e3);if(s=p,!h&&C&&!de){ee.update(P),await m;const k=C;if(!k||h||de){requestAnimationFrame(_);return}const U=performance.now(),E=d.createCommandEncoder();k.render(E,n.getCurrentTexture().createView(),r.width,r.height),d.queue.submit([E.finish()]),m=d.queue.onSubmittedWorkDone().then(()=>{const z=performance.now()-U;l=l?.9*l+.1*z:z,L("live").textContent=`${(1e3/l).toFixed(0)} FPS live (${r.width}×${r.height}, vsync-capped)`})}requestAnimationFrame(_)}requestAnimationFrame(_),pe.style.display="",D.value="bitymi",de=!0;try{await ke(Ke[0])}catch(p){te(`load failed: ${p}`),console.error(p)}finally{de=!1}}(async()=>{const r=w=>{document.body.insertAdjacentHTML("afterbegin",`<p style="color:#fff;padding:16px;font:15px sans-serif">${w}</p>`)};if(navigator.gpu===void 0)return r("WebGPU is not supported in this browser.");const n=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(n===null)return r("No WebGPU adapter available.");const d=[];for(const w of["timestamp-query","texture-compression-bc","texture-compression-astc","float32-blendable"])n.features.has(w)&&d.push(w);if(n.limits.maxStorageBuffersPerShaderStage<10)return r(`This GPU exposes ${n.limits.maxStorageBuffersPerShaderStage} storage buffers per stage; the renderers need 10.`);const v=await n.requestDevice({requiredFeatures:d,requiredLimits:{maxStorageBuffersPerShaderStage:10,maxComputeWorkgroupStorageSize:n.limits.maxComputeWorkgroupStorageSize,maxBufferSize:n.limits.maxBufferSize,maxStorageBufferBindingSize:n.limits.maxStorageBufferBindingSize}});v.lost.then(w=>r(`GPU device lost: ${w.message}`)),v.addEventListener("uncapturederror",w=>{var S;return console.error("[bench] WebGPU error:",((S=w.error)==null?void 0:S.message)??w.error)});const b=document.querySelector("#webgpu-canvas");await Ss(b,b.getContext("webgpu"),v,n,d)})();
