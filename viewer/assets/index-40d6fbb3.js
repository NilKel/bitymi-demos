var xl=Object.defineProperty;var yl=(o,a,h)=>a in o?xl(o,a,{enumerable:!0,configurable:!0,writable:!0,value:h}):o[a]=h;var G=(o,a,h)=>(yl(o,typeof a!="symbol"?a+"":a,h),h);(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const g of document.querySelectorAll('link[rel="modulepreload"]'))P(g);new MutationObserver(g=>{for(const E of g)if(E.type==="childList")for(const T of E.addedNodes)T.tagName==="LINK"&&T.rel==="modulepreload"&&P(T)}).observe(document,{childList:!0,subtree:!0});function h(g){const E={};return g.integrity&&(E.integrity=g.integrity),g.referrerPolicy&&(E.referrerPolicy=g.referrerPolicy),g.crossOrigin==="use-credentials"?E.credentials="include":g.crossOrigin==="anonymous"?E.credentials="omit":E.credentials="same-origin",E}function P(g){if(g.ep)return;g.ep=!0;const E=h(g);fetch(g.href,E)}})();function Pl(o,a){return class extends o{constructor(...h){super(...h),a(this)}}}const Sl=Pl(Array,o=>o.fill(0));let De=1e-6;function El(o){function a(w=0,C=0){const k=new o(2);return w!==void 0&&(k[0]=w,C!==void 0&&(k[1]=C)),k}const h=a;function P(w,C,k){const r=k??new o(2);return r[0]=w,r[1]=C,r}function g(w,C){const k=C??new o(2);return k[0]=Math.ceil(w[0]),k[1]=Math.ceil(w[1]),k}function E(w,C){const k=C??new o(2);return k[0]=Math.floor(w[0]),k[1]=Math.floor(w[1]),k}function T(w,C){const k=C??new o(2);return k[0]=Math.round(w[0]),k[1]=Math.round(w[1]),k}function $(w,C=0,k=1,r){const _=r??new o(2);return _[0]=Math.min(k,Math.max(C,w[0])),_[1]=Math.min(k,Math.max(C,w[1])),_}function I(w,C,k){const r=k??new o(2);return r[0]=w[0]+C[0],r[1]=w[1]+C[1],r}function O(w,C,k,r){const _=r??new o(2);return _[0]=w[0]+C[0]*k,_[1]=w[1]+C[1]*k,_}function U(w,C){const k=w[0],r=w[1],_=C[0],c=C[1],d=Math.sqrt(k*k+r*r),l=Math.sqrt(_*_+c*c),m=d*l,y=m&&fe(w,C)/m;return Math.acos(y)}function W(w,C,k){const r=k??new o(2);return r[0]=w[0]-C[0],r[1]=w[1]-C[1],r}const H=W;function R(w,C){return Math.abs(w[0]-C[0])<De&&Math.abs(w[1]-C[1])<De}function N(w,C){return w[0]===C[0]&&w[1]===C[1]}function F(w,C,k,r){const _=r??new o(2);return _[0]=w[0]+k*(C[0]-w[0]),_[1]=w[1]+k*(C[1]-w[1]),_}function D(w,C,k,r){const _=r??new o(2);return _[0]=w[0]+k[0]*(C[0]-w[0]),_[1]=w[1]+k[1]*(C[1]-w[1]),_}function Y(w,C,k){const r=k??new o(2);return r[0]=Math.max(w[0],C[0]),r[1]=Math.max(w[1],C[1]),r}function L(w,C,k){const r=k??new o(2);return r[0]=Math.min(w[0],C[0]),r[1]=Math.min(w[1],C[1]),r}function q(w,C,k){const r=k??new o(2);return r[0]=w[0]*C,r[1]=w[1]*C,r}const Z=q;function ae(w,C,k){const r=k??new o(2);return r[0]=w[0]/C,r[1]=w[1]/C,r}function ge(w,C){const k=C??new o(2);return k[0]=1/w[0],k[1]=1/w[1],k}const ue=ge;function ne(w,C,k){const r=k??new o(3),_=w[0]*C[1]-w[1]*C[0];return r[0]=0,r[1]=0,r[2]=_,r}function fe(w,C){return w[0]*C[0]+w[1]*C[1]}function te(w){const C=w[0],k=w[1];return Math.sqrt(C*C+k*k)}const Oe=te;function Ge(w){const C=w[0],k=w[1];return C*C+k*k}const Le=Ge;function Me(w,C){const k=w[0]-C[0],r=w[1]-C[1];return Math.sqrt(k*k+r*r)}const ve=Me;function Pe(w,C){const k=w[0]-C[0],r=w[1]-C[1];return k*k+r*r}const le=Pe;function se(w,C){const k=C??new o(2),r=w[0],_=w[1],c=Math.sqrt(r*r+_*_);return c>1e-5?(k[0]=r/c,k[1]=_/c):(k[0]=0,k[1]=0),k}function ie(w,C){const k=C??new o(2);return k[0]=-w[0],k[1]=-w[1],k}function _e(w,C){const k=C??new o(2);return k[0]=w[0],k[1]=w[1],k}const pe=_e;function me(w,C,k){const r=k??new o(2);return r[0]=w[0]*C[0],r[1]=w[1]*C[1],r}const Ae=me;function ye(w,C,k){const r=k??new o(2);return r[0]=w[0]/C[0],r[1]=w[1]/C[1],r}const Te=ye;function Ue(w=1,C){const k=C??new o(2),r=Math.random()*2*Math.PI;return k[0]=Math.cos(r)*w,k[1]=Math.sin(r)*w,k}function M(w){const C=w??new o(2);return C[0]=0,C[1]=0,C}function K(w,C,k){const r=k??new o(2),_=w[0],c=w[1];return r[0]=_*C[0]+c*C[4]+C[12],r[1]=_*C[1]+c*C[5]+C[13],r}function x(w,C,k){const r=k??new o(2),_=w[0],c=w[1];return r[0]=C[0]*_+C[4]*c+C[8],r[1]=C[1]*_+C[5]*c+C[9],r}function i(w,C,k,r){const _=r??new o(2),c=w[0]-C[0],d=w[1]-C[1],l=Math.sin(k),m=Math.cos(k);return _[0]=c*m-d*l+C[0],_[1]=c*l+d*m+C[1],_}function f(w,C,k){const r=k??new o(2);return se(w,r),q(r,C,r)}function p(w,C,k){const r=k??new o(2);return te(w)>C?f(w,C,r):_e(w,r)}function b(w,C,k){const r=k??new o(2);return F(w,C,.5,r)}return{create:a,fromValues:h,set:P,ceil:g,floor:E,round:T,clamp:$,add:I,addScaled:O,angle:U,subtract:W,sub:H,equalsApproximately:R,equals:N,lerp:F,lerpV:D,max:Y,min:L,mulScalar:q,scale:Z,divScalar:ae,inverse:ge,invert:ue,cross:ne,dot:fe,length:te,len:Oe,lengthSq:Ge,lenSq:Le,distance:Me,dist:ve,distanceSq:Pe,distSq:le,normalize:se,negate:ie,copy:_e,clone:pe,multiply:me,mul:Ae,divide:ye,div:Te,random:Ue,zero:M,transformMat4:K,transformMat3:x,rotate:i,setLength:f,truncate:p,midpoint:b}}const Kr=new Map;function di(o){let a=Kr.get(o);return a||(a=El(o),Kr.set(o,a)),a}function Cl(o){function a(l,m,y){const v=new o(3);return l!==void 0&&(v[0]=l,m!==void 0&&(v[1]=m,y!==void 0&&(v[2]=y))),v}const h=a;function P(l,m,y,v){const B=v??new o(3);return B[0]=l,B[1]=m,B[2]=y,B}function g(l,m){const y=m??new o(3);return y[0]=Math.ceil(l[0]),y[1]=Math.ceil(l[1]),y[2]=Math.ceil(l[2]),y}function E(l,m){const y=m??new o(3);return y[0]=Math.floor(l[0]),y[1]=Math.floor(l[1]),y[2]=Math.floor(l[2]),y}function T(l,m){const y=m??new o(3);return y[0]=Math.round(l[0]),y[1]=Math.round(l[1]),y[2]=Math.round(l[2]),y}function $(l,m=0,y=1,v){const B=v??new o(3);return B[0]=Math.min(y,Math.max(m,l[0])),B[1]=Math.min(y,Math.max(m,l[1])),B[2]=Math.min(y,Math.max(m,l[2])),B}function I(l,m,y){const v=y??new o(3);return v[0]=l[0]+m[0],v[1]=l[1]+m[1],v[2]=l[2]+m[2],v}function O(l,m,y,v){const B=v??new o(3);return B[0]=l[0]+m[0]*y,B[1]=l[1]+m[1]*y,B[2]=l[2]+m[2]*y,B}function U(l,m){const y=l[0],v=l[1],B=l[2],V=m[0],j=m[1],re=m[2],Q=Math.sqrt(y*y+v*v+B*B),J=Math.sqrt(V*V+j*j+re*re),ce=Q*J,we=ce&&fe(l,m)/ce;return Math.acos(we)}function W(l,m,y){const v=y??new o(3);return v[0]=l[0]-m[0],v[1]=l[1]-m[1],v[2]=l[2]-m[2],v}const H=W;function R(l,m){return Math.abs(l[0]-m[0])<De&&Math.abs(l[1]-m[1])<De&&Math.abs(l[2]-m[2])<De}function N(l,m){return l[0]===m[0]&&l[1]===m[1]&&l[2]===m[2]}function F(l,m,y,v){const B=v??new o(3);return B[0]=l[0]+y*(m[0]-l[0]),B[1]=l[1]+y*(m[1]-l[1]),B[2]=l[2]+y*(m[2]-l[2]),B}function D(l,m,y,v){const B=v??new o(3);return B[0]=l[0]+y[0]*(m[0]-l[0]),B[1]=l[1]+y[1]*(m[1]-l[1]),B[2]=l[2]+y[2]*(m[2]-l[2]),B}function Y(l,m,y){const v=y??new o(3);return v[0]=Math.max(l[0],m[0]),v[1]=Math.max(l[1],m[1]),v[2]=Math.max(l[2],m[2]),v}function L(l,m,y){const v=y??new o(3);return v[0]=Math.min(l[0],m[0]),v[1]=Math.min(l[1],m[1]),v[2]=Math.min(l[2],m[2]),v}function q(l,m,y){const v=y??new o(3);return v[0]=l[0]*m,v[1]=l[1]*m,v[2]=l[2]*m,v}const Z=q;function ae(l,m,y){const v=y??new o(3);return v[0]=l[0]/m,v[1]=l[1]/m,v[2]=l[2]/m,v}function ge(l,m){const y=m??new o(3);return y[0]=1/l[0],y[1]=1/l[1],y[2]=1/l[2],y}const ue=ge;function ne(l,m,y){const v=y??new o(3),B=l[2]*m[0]-l[0]*m[2],V=l[0]*m[1]-l[1]*m[0];return v[0]=l[1]*m[2]-l[2]*m[1],v[1]=B,v[2]=V,v}function fe(l,m){return l[0]*m[0]+l[1]*m[1]+l[2]*m[2]}function te(l){const m=l[0],y=l[1],v=l[2];return Math.sqrt(m*m+y*y+v*v)}const Oe=te;function Ge(l){const m=l[0],y=l[1],v=l[2];return m*m+y*y+v*v}const Le=Ge;function Me(l,m){const y=l[0]-m[0],v=l[1]-m[1],B=l[2]-m[2];return Math.sqrt(y*y+v*v+B*B)}const ve=Me;function Pe(l,m){const y=l[0]-m[0],v=l[1]-m[1],B=l[2]-m[2];return y*y+v*v+B*B}const le=Pe;function se(l,m){const y=m??new o(3),v=l[0],B=l[1],V=l[2],j=Math.sqrt(v*v+B*B+V*V);return j>1e-5?(y[0]=v/j,y[1]=B/j,y[2]=V/j):(y[0]=0,y[1]=0,y[2]=0),y}function ie(l,m){const y=m??new o(3);return y[0]=-l[0],y[1]=-l[1],y[2]=-l[2],y}function _e(l,m){const y=m??new o(3);return y[0]=l[0],y[1]=l[1],y[2]=l[2],y}const pe=_e;function me(l,m,y){const v=y??new o(3);return v[0]=l[0]*m[0],v[1]=l[1]*m[1],v[2]=l[2]*m[2],v}const Ae=me;function ye(l,m,y){const v=y??new o(3);return v[0]=l[0]/m[0],v[1]=l[1]/m[1],v[2]=l[2]/m[2],v}const Te=ye;function Ue(l=1,m){const y=m??new o(3),v=Math.random()*2*Math.PI,B=Math.random()*2-1,V=Math.sqrt(1-B*B)*l;return y[0]=Math.cos(v)*V,y[1]=Math.sin(v)*V,y[2]=B*l,y}function M(l){const m=l??new o(3);return m[0]=0,m[1]=0,m[2]=0,m}function K(l,m,y){const v=y??new o(3),B=l[0],V=l[1],j=l[2],re=m[3]*B+m[7]*V+m[11]*j+m[15]||1;return v[0]=(m[0]*B+m[4]*V+m[8]*j+m[12])/re,v[1]=(m[1]*B+m[5]*V+m[9]*j+m[13])/re,v[2]=(m[2]*B+m[6]*V+m[10]*j+m[14])/re,v}function x(l,m,y){const v=y??new o(3),B=l[0],V=l[1],j=l[2];return v[0]=B*m[0*4+0]+V*m[1*4+0]+j*m[2*4+0],v[1]=B*m[0*4+1]+V*m[1*4+1]+j*m[2*4+1],v[2]=B*m[0*4+2]+V*m[1*4+2]+j*m[2*4+2],v}function i(l,m,y){const v=y??new o(3),B=l[0],V=l[1],j=l[2];return v[0]=B*m[0]+V*m[4]+j*m[8],v[1]=B*m[1]+V*m[5]+j*m[9],v[2]=B*m[2]+V*m[6]+j*m[10],v}function f(l,m,y){const v=y??new o(3),B=m[0],V=m[1],j=m[2],re=m[3]*2,Q=l[0],J=l[1],ce=l[2],we=V*ce-j*J,de=j*Q-B*ce,be=B*J-V*Q;return v[0]=Q+we*re+(V*be-j*de)*2,v[1]=J+de*re+(j*we-B*be)*2,v[2]=ce+be*re+(B*de-V*we)*2,v}function p(l,m){const y=m??new o(3);return y[0]=l[12],y[1]=l[13],y[2]=l[14],y}function b(l,m,y){const v=y??new o(3),B=m*4;return v[0]=l[B+0],v[1]=l[B+1],v[2]=l[B+2],v}function w(l,m){const y=m??new o(3),v=l[0],B=l[1],V=l[2],j=l[4],re=l[5],Q=l[6],J=l[8],ce=l[9],we=l[10];return y[0]=Math.sqrt(v*v+B*B+V*V),y[1]=Math.sqrt(j*j+re*re+Q*Q),y[2]=Math.sqrt(J*J+ce*ce+we*we),y}function C(l,m,y,v){const B=v??new o(3),V=[],j=[];return V[0]=l[0]-m[0],V[1]=l[1]-m[1],V[2]=l[2]-m[2],j[0]=V[0],j[1]=V[1]*Math.cos(y)-V[2]*Math.sin(y),j[2]=V[1]*Math.sin(y)+V[2]*Math.cos(y),B[0]=j[0]+m[0],B[1]=j[1]+m[1],B[2]=j[2]+m[2],B}function k(l,m,y,v){const B=v??new o(3),V=[],j=[];return V[0]=l[0]-m[0],V[1]=l[1]-m[1],V[2]=l[2]-m[2],j[0]=V[2]*Math.sin(y)+V[0]*Math.cos(y),j[1]=V[1],j[2]=V[2]*Math.cos(y)-V[0]*Math.sin(y),B[0]=j[0]+m[0],B[1]=j[1]+m[1],B[2]=j[2]+m[2],B}function r(l,m,y,v){const B=v??new o(3),V=[],j=[];return V[0]=l[0]-m[0],V[1]=l[1]-m[1],V[2]=l[2]-m[2],j[0]=V[0]*Math.cos(y)-V[1]*Math.sin(y),j[1]=V[0]*Math.sin(y)+V[1]*Math.cos(y),j[2]=V[2],B[0]=j[0]+m[0],B[1]=j[1]+m[1],B[2]=j[2]+m[2],B}function _(l,m,y){const v=y??new o(3);return se(l,v),q(v,m,v)}function c(l,m,y){const v=y??new o(3);return te(l)>m?_(l,m,v):_e(l,v)}function d(l,m,y){const v=y??new o(3);return F(l,m,.5,v)}return{create:a,fromValues:h,set:P,ceil:g,floor:E,round:T,clamp:$,add:I,addScaled:O,angle:U,subtract:W,sub:H,equalsApproximately:R,equals:N,lerp:F,lerpV:D,max:Y,min:L,mulScalar:q,scale:Z,divScalar:ae,inverse:ge,invert:ue,cross:ne,dot:fe,length:te,len:Oe,lengthSq:Ge,lenSq:Le,distance:Me,dist:ve,distanceSq:Pe,distSq:le,normalize:se,negate:ie,copy:_e,clone:pe,multiply:me,mul:Ae,divide:ye,div:Te,random:Ue,zero:M,transformMat4:K,transformMat4Upper3x3:x,transformMat3:i,transformQuat:f,getTranslation:p,getAxis:b,getScaling:w,rotateX:C,rotateY:k,rotateZ:r,setLength:_,truncate:c,midpoint:d}}const Hr=new Map;function rs(o){let a=Hr.get(o);return a||(a=Cl(o),Hr.set(o,a)),a}function kl(o){const a=di(o),h=rs(o);function P(i,f,p,b,w,C,k,r,_){const c=new o(12);return c[3]=0,c[7]=0,c[11]=0,i!==void 0&&(c[0]=i,f!==void 0&&(c[1]=f,p!==void 0&&(c[2]=p,b!==void 0&&(c[4]=b,w!==void 0&&(c[5]=w,C!==void 0&&(c[6]=C,k!==void 0&&(c[8]=k,r!==void 0&&(c[9]=r,_!==void 0&&(c[10]=_))))))))),c}function g(i,f,p,b,w,C,k,r,_,c){const d=c??new o(12);return d[0]=i,d[1]=f,d[2]=p,d[3]=0,d[4]=b,d[5]=w,d[6]=C,d[7]=0,d[8]=k,d[9]=r,d[10]=_,d[11]=0,d}function E(i,f){const p=f??new o(12);return p[0]=i[0],p[1]=i[1],p[2]=i[2],p[3]=0,p[4]=i[4],p[5]=i[5],p[6]=i[6],p[7]=0,p[8]=i[8],p[9]=i[9],p[10]=i[10],p[11]=0,p}function T(i,f){const p=f??new o(12),b=i[0],w=i[1],C=i[2],k=i[3],r=b+b,_=w+w,c=C+C,d=b*r,l=w*r,m=w*_,y=C*r,v=C*_,B=C*c,V=k*r,j=k*_,re=k*c;return p[0]=1-m-B,p[1]=l+re,p[2]=y-j,p[3]=0,p[4]=l-re,p[5]=1-d-B,p[6]=v+V,p[7]=0,p[8]=y+j,p[9]=v-V,p[10]=1-d-m,p[11]=0,p}function $(i,f){const p=f??new o(12);return p[0]=-i[0],p[1]=-i[1],p[2]=-i[2],p[4]=-i[4],p[5]=-i[5],p[6]=-i[6],p[8]=-i[8],p[9]=-i[9],p[10]=-i[10],p}function I(i,f,p){const b=p??new o(12);return b[0]=i[0]*f,b[1]=i[1]*f,b[2]=i[2]*f,b[4]=i[4]*f,b[5]=i[5]*f,b[6]=i[6]*f,b[8]=i[8]*f,b[9]=i[9]*f,b[10]=i[10]*f,b}const O=I;function U(i,f,p){const b=p??new o(12);return b[0]=i[0]+f[0],b[1]=i[1]+f[1],b[2]=i[2]+f[2],b[4]=i[4]+f[4],b[5]=i[5]+f[5],b[6]=i[6]+f[6],b[8]=i[8]+f[8],b[9]=i[9]+f[9],b[10]=i[10]+f[10],b}function W(i,f){const p=f??new o(12);return p[0]=i[0],p[1]=i[1],p[2]=i[2],p[4]=i[4],p[5]=i[5],p[6]=i[6],p[8]=i[8],p[9]=i[9],p[10]=i[10],p}const H=W;function R(i,f){return Math.abs(i[0]-f[0])<De&&Math.abs(i[1]-f[1])<De&&Math.abs(i[2]-f[2])<De&&Math.abs(i[4]-f[4])<De&&Math.abs(i[5]-f[5])<De&&Math.abs(i[6]-f[6])<De&&Math.abs(i[8]-f[8])<De&&Math.abs(i[9]-f[9])<De&&Math.abs(i[10]-f[10])<De}function N(i,f){return i[0]===f[0]&&i[1]===f[1]&&i[2]===f[2]&&i[4]===f[4]&&i[5]===f[5]&&i[6]===f[6]&&i[8]===f[8]&&i[9]===f[9]&&i[10]===f[10]}function F(i){const f=i??new o(12);return f[0]=1,f[1]=0,f[2]=0,f[4]=0,f[5]=1,f[6]=0,f[8]=0,f[9]=0,f[10]=1,f}function D(i,f){const p=f??new o(12);if(p===i){let m;return m=i[1],i[1]=i[4],i[4]=m,m=i[2],i[2]=i[8],i[8]=m,m=i[6],i[6]=i[9],i[9]=m,p}const b=i[0*4+0],w=i[0*4+1],C=i[0*4+2],k=i[1*4+0],r=i[1*4+1],_=i[1*4+2],c=i[2*4+0],d=i[2*4+1],l=i[2*4+2];return p[0]=b,p[1]=k,p[2]=c,p[4]=w,p[5]=r,p[6]=d,p[8]=C,p[9]=_,p[10]=l,p}function Y(i,f){const p=f??new o(12),b=i[0*4+0],w=i[0*4+1],C=i[0*4+2],k=i[1*4+0],r=i[1*4+1],_=i[1*4+2],c=i[2*4+0],d=i[2*4+1],l=i[2*4+2],m=l*r-_*d,y=-l*k+_*c,v=d*k-r*c,B=1/(b*m+w*y+C*v);return p[0]=m*B,p[1]=(-l*w+C*d)*B,p[2]=(_*w-C*r)*B,p[4]=y*B,p[5]=(l*b-C*c)*B,p[6]=(-_*b+C*k)*B,p[8]=v*B,p[9]=(-d*b+w*c)*B,p[10]=(r*b-w*k)*B,p}function L(i){const f=i[0],p=i[0*4+1],b=i[0*4+2],w=i[1*4+0],C=i[1*4+1],k=i[1*4+2],r=i[2*4+0],_=i[2*4+1],c=i[2*4+2];return f*(C*c-_*k)-w*(p*c-_*b)+r*(p*k-C*b)}const q=Y;function Z(i,f,p){const b=p??new o(12),w=i[0],C=i[1],k=i[2],r=i[4+0],_=i[4+1],c=i[4+2],d=i[8+0],l=i[8+1],m=i[8+2],y=f[0],v=f[1],B=f[2],V=f[4+0],j=f[4+1],re=f[4+2],Q=f[8+0],J=f[8+1],ce=f[8+2];return b[0]=w*y+r*v+d*B,b[1]=C*y+_*v+l*B,b[2]=k*y+c*v+m*B,b[4]=w*V+r*j+d*re,b[5]=C*V+_*j+l*re,b[6]=k*V+c*j+m*re,b[8]=w*Q+r*J+d*ce,b[9]=C*Q+_*J+l*ce,b[10]=k*Q+c*J+m*ce,b}const ae=Z;function ge(i,f,p){const b=p??F();return i!==b&&(b[0]=i[0],b[1]=i[1],b[2]=i[2],b[4]=i[4],b[5]=i[5],b[6]=i[6]),b[8]=f[0],b[9]=f[1],b[10]=1,b}function ue(i,f){const p=f??a.create();return p[0]=i[8],p[1]=i[9],p}function ne(i,f,p){const b=p??a.create(),w=f*4;return b[0]=i[w+0],b[1]=i[w+1],b}function fe(i,f,p,b){const w=b===i?i:W(i,b),C=p*4;return w[C+0]=f[0],w[C+1]=f[1],w}function te(i,f){const p=f??a.create(),b=i[0],w=i[1],C=i[4],k=i[5];return p[0]=Math.sqrt(b*b+w*w),p[1]=Math.sqrt(C*C+k*k),p}function Oe(i,f){const p=f??h.create(),b=i[0],w=i[1],C=i[2],k=i[4],r=i[5],_=i[6],c=i[8],d=i[9],l=i[10];return p[0]=Math.sqrt(b*b+w*w+C*C),p[1]=Math.sqrt(k*k+r*r+_*_),p[2]=Math.sqrt(c*c+d*d+l*l),p}function Ge(i,f){const p=f??new o(12);return p[0]=1,p[1]=0,p[2]=0,p[4]=0,p[5]=1,p[6]=0,p[8]=i[0],p[9]=i[1],p[10]=1,p}function Le(i,f,p){const b=p??new o(12),w=f[0],C=f[1],k=i[0],r=i[1],_=i[2],c=i[1*4+0],d=i[1*4+1],l=i[1*4+2],m=i[2*4+0],y=i[2*4+1],v=i[2*4+2];return i!==b&&(b[0]=k,b[1]=r,b[2]=_,b[4]=c,b[5]=d,b[6]=l),b[8]=k*w+c*C+m,b[9]=r*w+d*C+y,b[10]=_*w+l*C+v,b}function Me(i,f){const p=f??new o(12),b=Math.cos(i),w=Math.sin(i);return p[0]=b,p[1]=w,p[2]=0,p[4]=-w,p[5]=b,p[6]=0,p[8]=0,p[9]=0,p[10]=1,p}function ve(i,f,p){const b=p??new o(12),w=i[0*4+0],C=i[0*4+1],k=i[0*4+2],r=i[1*4+0],_=i[1*4+1],c=i[1*4+2],d=Math.cos(f),l=Math.sin(f);return b[0]=d*w+l*r,b[1]=d*C+l*_,b[2]=d*k+l*c,b[4]=d*r-l*w,b[5]=d*_-l*C,b[6]=d*c-l*k,i!==b&&(b[8]=i[8],b[9]=i[9],b[10]=i[10]),b}function Pe(i,f){const p=f??new o(12),b=Math.cos(i),w=Math.sin(i);return p[0]=1,p[1]=0,p[2]=0,p[4]=0,p[5]=b,p[6]=w,p[8]=0,p[9]=-w,p[10]=b,p}function le(i,f,p){const b=p??new o(12),w=i[4],C=i[5],k=i[6],r=i[8],_=i[9],c=i[10],d=Math.cos(f),l=Math.sin(f);return b[4]=d*w+l*r,b[5]=d*C+l*_,b[6]=d*k+l*c,b[8]=d*r-l*w,b[9]=d*_-l*C,b[10]=d*c-l*k,i!==b&&(b[0]=i[0],b[1]=i[1],b[2]=i[2]),b}function se(i,f){const p=f??new o(12),b=Math.cos(i),w=Math.sin(i);return p[0]=b,p[1]=0,p[2]=-w,p[4]=0,p[5]=1,p[6]=0,p[8]=w,p[9]=0,p[10]=b,p}function ie(i,f,p){const b=p??new o(12),w=i[0*4+0],C=i[0*4+1],k=i[0*4+2],r=i[2*4+0],_=i[2*4+1],c=i[2*4+2],d=Math.cos(f),l=Math.sin(f);return b[0]=d*w-l*r,b[1]=d*C-l*_,b[2]=d*k-l*c,b[8]=d*r+l*w,b[9]=d*_+l*C,b[10]=d*c+l*k,i!==b&&(b[4]=i[4],b[5]=i[5],b[6]=i[6]),b}const _e=Me,pe=ve;function me(i,f){const p=f??new o(12);return p[0]=i[0],p[1]=0,p[2]=0,p[4]=0,p[5]=i[1],p[6]=0,p[8]=0,p[9]=0,p[10]=1,p}function Ae(i,f,p){const b=p??new o(12),w=f[0],C=f[1];return b[0]=w*i[0*4+0],b[1]=w*i[0*4+1],b[2]=w*i[0*4+2],b[4]=C*i[1*4+0],b[5]=C*i[1*4+1],b[6]=C*i[1*4+2],i!==b&&(b[8]=i[8],b[9]=i[9],b[10]=i[10]),b}function ye(i,f){const p=f??new o(12);return p[0]=i[0],p[1]=0,p[2]=0,p[4]=0,p[5]=i[1],p[6]=0,p[8]=0,p[9]=0,p[10]=i[2],p}function Te(i,f,p){const b=p??new o(12),w=f[0],C=f[1],k=f[2];return b[0]=w*i[0*4+0],b[1]=w*i[0*4+1],b[2]=w*i[0*4+2],b[4]=C*i[1*4+0],b[5]=C*i[1*4+1],b[6]=C*i[1*4+2],b[8]=k*i[2*4+0],b[9]=k*i[2*4+1],b[10]=k*i[2*4+2],b}function Ue(i,f){const p=f??new o(12);return p[0]=i,p[1]=0,p[2]=0,p[4]=0,p[5]=i,p[6]=0,p[8]=0,p[9]=0,p[10]=1,p}function M(i,f,p){const b=p??new o(12);return b[0]=f*i[0*4+0],b[1]=f*i[0*4+1],b[2]=f*i[0*4+2],b[4]=f*i[1*4+0],b[5]=f*i[1*4+1],b[6]=f*i[1*4+2],i!==b&&(b[8]=i[8],b[9]=i[9],b[10]=i[10]),b}function K(i,f){const p=f??new o(12);return p[0]=i,p[1]=0,p[2]=0,p[4]=0,p[5]=i,p[6]=0,p[8]=0,p[9]=0,p[10]=i,p}function x(i,f,p){const b=p??new o(12);return b[0]=f*i[0*4+0],b[1]=f*i[0*4+1],b[2]=f*i[0*4+2],b[4]=f*i[1*4+0],b[5]=f*i[1*4+1],b[6]=f*i[1*4+2],b[8]=f*i[2*4+0],b[9]=f*i[2*4+1],b[10]=f*i[2*4+2],b}return{add:U,clone:H,copy:W,create:P,determinant:L,equals:N,equalsApproximately:R,fromMat4:E,fromQuat:T,get3DScaling:Oe,getAxis:ne,getScaling:te,getTranslation:ue,identity:F,inverse:Y,invert:q,mul:ae,mulScalar:O,multiply:Z,multiplyScalar:I,negate:$,rotate:ve,rotateX:le,rotateY:ie,rotateZ:pe,rotation:Me,rotationX:Pe,rotationY:se,rotationZ:_e,scale:Ae,scale3D:Te,scaling:me,scaling3D:ye,set:g,setAxis:fe,setTranslation:ge,translate:Le,translation:Ge,transpose:D,uniformScale:M,uniformScale3D:x,uniformScaling:Ue,uniformScaling3D:K}}const Yr=new Map;function Bl(o){let a=Yr.get(o);return a||(a=kl(o),Yr.set(o,a)),a}function Tl(o){const a=rs(o);function h(r,_,c,d,l,m,y,v,B,V,j,re,Q,J,ce,we){const de=new o(16);return r!==void 0&&(de[0]=r,_!==void 0&&(de[1]=_,c!==void 0&&(de[2]=c,d!==void 0&&(de[3]=d,l!==void 0&&(de[4]=l,m!==void 0&&(de[5]=m,y!==void 0&&(de[6]=y,v!==void 0&&(de[7]=v,B!==void 0&&(de[8]=B,V!==void 0&&(de[9]=V,j!==void 0&&(de[10]=j,re!==void 0&&(de[11]=re,Q!==void 0&&(de[12]=Q,J!==void 0&&(de[13]=J,ce!==void 0&&(de[14]=ce,we!==void 0&&(de[15]=we)))))))))))))))),de}function P(r,_,c,d,l,m,y,v,B,V,j,re,Q,J,ce,we,de){const be=de??new o(16);return be[0]=r,be[1]=_,be[2]=c,be[3]=d,be[4]=l,be[5]=m,be[6]=y,be[7]=v,be[8]=B,be[9]=V,be[10]=j,be[11]=re,be[12]=Q,be[13]=J,be[14]=ce,be[15]=we,be}function g(r,_){const c=_??new o(16);return c[0]=r[0],c[1]=r[1],c[2]=r[2],c[3]=0,c[4]=r[4],c[5]=r[5],c[6]=r[6],c[7]=0,c[8]=r[8],c[9]=r[9],c[10]=r[10],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function E(r,_){const c=_??new o(16),d=r[0],l=r[1],m=r[2],y=r[3],v=d+d,B=l+l,V=m+m,j=d*v,re=l*v,Q=l*B,J=m*v,ce=m*B,we=m*V,de=y*v,be=y*B,xe=y*V;return c[0]=1-Q-we,c[1]=re+xe,c[2]=J-be,c[3]=0,c[4]=re-xe,c[5]=1-j-we,c[6]=ce+de,c[7]=0,c[8]=J+be,c[9]=ce-de,c[10]=1-j-Q,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function T(r,_){const c=_??new o(16);return c[0]=-r[0],c[1]=-r[1],c[2]=-r[2],c[3]=-r[3],c[4]=-r[4],c[5]=-r[5],c[6]=-r[6],c[7]=-r[7],c[8]=-r[8],c[9]=-r[9],c[10]=-r[10],c[11]=-r[11],c[12]=-r[12],c[13]=-r[13],c[14]=-r[14],c[15]=-r[15],c}function $(r,_,c){const d=c??new o(16);return d[0]=r[0]+_[0],d[1]=r[1]+_[1],d[2]=r[2]+_[2],d[3]=r[3]+_[3],d[4]=r[4]+_[4],d[5]=r[5]+_[5],d[6]=r[6]+_[6],d[7]=r[7]+_[7],d[8]=r[8]+_[8],d[9]=r[9]+_[9],d[10]=r[10]+_[10],d[11]=r[11]+_[11],d[12]=r[12]+_[12],d[13]=r[13]+_[13],d[14]=r[14]+_[14],d[15]=r[15]+_[15],d}function I(r,_,c){const d=c??new o(16);return d[0]=r[0]*_,d[1]=r[1]*_,d[2]=r[2]*_,d[3]=r[3]*_,d[4]=r[4]*_,d[5]=r[5]*_,d[6]=r[6]*_,d[7]=r[7]*_,d[8]=r[8]*_,d[9]=r[9]*_,d[10]=r[10]*_,d[11]=r[11]*_,d[12]=r[12]*_,d[13]=r[13]*_,d[14]=r[14]*_,d[15]=r[15]*_,d}const O=I;function U(r,_){const c=_??new o(16);return c[0]=r[0],c[1]=r[1],c[2]=r[2],c[3]=r[3],c[4]=r[4],c[5]=r[5],c[6]=r[6],c[7]=r[7],c[8]=r[8],c[9]=r[9],c[10]=r[10],c[11]=r[11],c[12]=r[12],c[13]=r[13],c[14]=r[14],c[15]=r[15],c}const W=U;function H(r,_){return Math.abs(r[0]-_[0])<De&&Math.abs(r[1]-_[1])<De&&Math.abs(r[2]-_[2])<De&&Math.abs(r[3]-_[3])<De&&Math.abs(r[4]-_[4])<De&&Math.abs(r[5]-_[5])<De&&Math.abs(r[6]-_[6])<De&&Math.abs(r[7]-_[7])<De&&Math.abs(r[8]-_[8])<De&&Math.abs(r[9]-_[9])<De&&Math.abs(r[10]-_[10])<De&&Math.abs(r[11]-_[11])<De&&Math.abs(r[12]-_[12])<De&&Math.abs(r[13]-_[13])<De&&Math.abs(r[14]-_[14])<De&&Math.abs(r[15]-_[15])<De}function R(r,_){return r[0]===_[0]&&r[1]===_[1]&&r[2]===_[2]&&r[3]===_[3]&&r[4]===_[4]&&r[5]===_[5]&&r[6]===_[6]&&r[7]===_[7]&&r[8]===_[8]&&r[9]===_[9]&&r[10]===_[10]&&r[11]===_[11]&&r[12]===_[12]&&r[13]===_[13]&&r[14]===_[14]&&r[15]===_[15]}function N(r){const _=r??new o(16);return _[0]=1,_[1]=0,_[2]=0,_[3]=0,_[4]=0,_[5]=1,_[6]=0,_[7]=0,_[8]=0,_[9]=0,_[10]=1,_[11]=0,_[12]=0,_[13]=0,_[14]=0,_[15]=1,_}function F(r,_){const c=_??new o(16);if(c===r){let ke;return ke=r[1],r[1]=r[4],r[4]=ke,ke=r[2],r[2]=r[8],r[8]=ke,ke=r[3],r[3]=r[12],r[12]=ke,ke=r[6],r[6]=r[9],r[9]=ke,ke=r[7],r[7]=r[13],r[13]=ke,ke=r[11],r[11]=r[14],r[14]=ke,c}const d=r[0*4+0],l=r[0*4+1],m=r[0*4+2],y=r[0*4+3],v=r[1*4+0],B=r[1*4+1],V=r[1*4+2],j=r[1*4+3],re=r[2*4+0],Q=r[2*4+1],J=r[2*4+2],ce=r[2*4+3],we=r[3*4+0],de=r[3*4+1],be=r[3*4+2],xe=r[3*4+3];return c[0]=d,c[1]=v,c[2]=re,c[3]=we,c[4]=l,c[5]=B,c[6]=Q,c[7]=de,c[8]=m,c[9]=V,c[10]=J,c[11]=be,c[12]=y,c[13]=j,c[14]=ce,c[15]=xe,c}function D(r,_){const c=_??new o(16),d=r[0*4+0],l=r[0*4+1],m=r[0*4+2],y=r[0*4+3],v=r[1*4+0],B=r[1*4+1],V=r[1*4+2],j=r[1*4+3],re=r[2*4+0],Q=r[2*4+1],J=r[2*4+2],ce=r[2*4+3],we=r[3*4+0],de=r[3*4+1],be=r[3*4+2],xe=r[3*4+3],ke=J*xe,$e=be*ce,Xe=V*xe,Ke=be*j,ze=V*ce,Qe=J*j,rt=m*xe,it=be*y,Je=m*ce,tt=J*y,nt=m*j,He=V*y,qe=re*de,ot=we*Q,Ye=v*de,ut=we*B,st=v*Q,Bt=re*B,xt=d*de,Et=we*l,gt=d*Q,Dt=re*l,Ut=d*B,wt=v*l,Ht=ke*B+Ke*Q+ze*de-($e*B+Xe*Q+Qe*de),Vt=$e*l+rt*Q+tt*de-(ke*l+it*Q+Je*de),cn=Xe*l+it*B+nt*de-(Ke*l+rt*B+He*de),Yt=Qe*l+Je*B+He*Q-(ze*l+tt*B+nt*Q),je=1/(d*Ht+v*Vt+re*cn+we*Yt);return c[0]=je*Ht,c[1]=je*Vt,c[2]=je*cn,c[3]=je*Yt,c[4]=je*($e*v+Xe*re+Qe*we-(ke*v+Ke*re+ze*we)),c[5]=je*(ke*d+it*re+Je*we-($e*d+rt*re+tt*we)),c[6]=je*(Ke*d+rt*v+He*we-(Xe*d+it*v+nt*we)),c[7]=je*(ze*d+tt*v+nt*re-(Qe*d+Je*v+He*re)),c[8]=je*(qe*j+ut*ce+st*xe-(ot*j+Ye*ce+Bt*xe)),c[9]=je*(ot*y+xt*ce+Dt*xe-(qe*y+Et*ce+gt*xe)),c[10]=je*(Ye*y+Et*j+Ut*xe-(ut*y+xt*j+wt*xe)),c[11]=je*(Bt*y+gt*j+wt*ce-(st*y+Dt*j+Ut*ce)),c[12]=je*(Ye*J+Bt*be+ot*V-(st*be+qe*V+ut*J)),c[13]=je*(gt*be+qe*m+Et*J-(xt*J+Dt*be+ot*m)),c[14]=je*(xt*V+wt*be+ut*m-(Ut*be+Ye*m+Et*V)),c[15]=je*(Ut*J+st*m+Dt*V-(gt*V+wt*J+Bt*m)),c}function Y(r){const _=r[0],c=r[0*4+1],d=r[0*4+2],l=r[0*4+3],m=r[1*4+0],y=r[1*4+1],v=r[1*4+2],B=r[1*4+3],V=r[2*4+0],j=r[2*4+1],re=r[2*4+2],Q=r[2*4+3],J=r[3*4+0],ce=r[3*4+1],we=r[3*4+2],de=r[3*4+3],be=re*de,xe=we*Q,ke=v*de,$e=we*B,Xe=v*Q,Ke=re*B,ze=d*de,Qe=we*l,rt=d*Q,it=re*l,Je=d*B,tt=v*l,nt=be*y+$e*j+Xe*ce-(xe*y+ke*j+Ke*ce),He=xe*c+ze*j+it*ce-(be*c+Qe*j+rt*ce),qe=ke*c+Qe*y+Je*ce-($e*c+ze*y+tt*ce),ot=Ke*c+rt*y+tt*j-(Xe*c+it*y+Je*j);return _*nt+m*He+V*qe+J*ot}const L=D;function q(r,_,c){const d=c??new o(16),l=r[0],m=r[1],y=r[2],v=r[3],B=r[4+0],V=r[4+1],j=r[4+2],re=r[4+3],Q=r[8+0],J=r[8+1],ce=r[8+2],we=r[8+3],de=r[12+0],be=r[12+1],xe=r[12+2],ke=r[12+3],$e=_[0],Xe=_[1],Ke=_[2],ze=_[3],Qe=_[4+0],rt=_[4+1],it=_[4+2],Je=_[4+3],tt=_[8+0],nt=_[8+1],He=_[8+2],qe=_[8+3],ot=_[12+0],Ye=_[12+1],ut=_[12+2],st=_[12+3];return d[0]=l*$e+B*Xe+Q*Ke+de*ze,d[1]=m*$e+V*Xe+J*Ke+be*ze,d[2]=y*$e+j*Xe+ce*Ke+xe*ze,d[3]=v*$e+re*Xe+we*Ke+ke*ze,d[4]=l*Qe+B*rt+Q*it+de*Je,d[5]=m*Qe+V*rt+J*it+be*Je,d[6]=y*Qe+j*rt+ce*it+xe*Je,d[7]=v*Qe+re*rt+we*it+ke*Je,d[8]=l*tt+B*nt+Q*He+de*qe,d[9]=m*tt+V*nt+J*He+be*qe,d[10]=y*tt+j*nt+ce*He+xe*qe,d[11]=v*tt+re*nt+we*He+ke*qe,d[12]=l*ot+B*Ye+Q*ut+de*st,d[13]=m*ot+V*Ye+J*ut+be*st,d[14]=y*ot+j*Ye+ce*ut+xe*st,d[15]=v*ot+re*Ye+we*ut+ke*st,d}const Z=q;function ae(r,_,c){const d=c??N();return r!==d&&(d[0]=r[0],d[1]=r[1],d[2]=r[2],d[3]=r[3],d[4]=r[4],d[5]=r[5],d[6]=r[6],d[7]=r[7],d[8]=r[8],d[9]=r[9],d[10]=r[10],d[11]=r[11]),d[12]=_[0],d[13]=_[1],d[14]=_[2],d[15]=1,d}function ge(r,_){const c=_??a.create();return c[0]=r[12],c[1]=r[13],c[2]=r[14],c}function ue(r,_,c){const d=c??a.create(),l=_*4;return d[0]=r[l+0],d[1]=r[l+1],d[2]=r[l+2],d}function ne(r,_,c,d){const l=d===r?d:U(r,d),m=c*4;return l[m+0]=_[0],l[m+1]=_[1],l[m+2]=_[2],l}function fe(r,_){const c=_??a.create(),d=r[0],l=r[1],m=r[2],y=r[4],v=r[5],B=r[6],V=r[8],j=r[9],re=r[10];return c[0]=Math.sqrt(d*d+l*l+m*m),c[1]=Math.sqrt(y*y+v*v+B*B),c[2]=Math.sqrt(V*V+j*j+re*re),c}function te(r,_,c,d,l){const m=l??new o(16),y=Math.tan(Math.PI*.5-.5*r);if(m[0]=y/_,m[1]=0,m[2]=0,m[3]=0,m[4]=0,m[5]=y,m[6]=0,m[7]=0,m[8]=0,m[9]=0,m[11]=-1,m[12]=0,m[13]=0,m[15]=0,Number.isFinite(d)){const v=1/(c-d);m[10]=d*v,m[14]=d*c*v}else m[10]=-1,m[14]=-c;return m}function Oe(r,_,c,d=1/0,l){const m=l??new o(16),y=1/Math.tan(r*.5);if(m[0]=y/_,m[1]=0,m[2]=0,m[3]=0,m[4]=0,m[5]=y,m[6]=0,m[7]=0,m[8]=0,m[9]=0,m[11]=-1,m[12]=0,m[13]=0,m[15]=0,d===1/0)m[10]=0,m[14]=c;else{const v=1/(d-c);m[10]=c*v,m[14]=d*c*v}return m}function Ge(r,_,c,d,l,m,y){const v=y??new o(16);return v[0]=2/(_-r),v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=2/(d-c),v[6]=0,v[7]=0,v[8]=0,v[9]=0,v[10]=1/(l-m),v[11]=0,v[12]=(_+r)/(r-_),v[13]=(d+c)/(c-d),v[14]=l/(l-m),v[15]=1,v}function Le(r,_,c,d,l,m,y){const v=y??new o(16),B=_-r,V=d-c,j=l-m;return v[0]=2*l/B,v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=2*l/V,v[6]=0,v[7]=0,v[8]=(r+_)/B,v[9]=(d+c)/V,v[10]=m/j,v[11]=-1,v[12]=0,v[13]=0,v[14]=l*m/j,v[15]=0,v}function Me(r,_,c,d,l,m=1/0,y){const v=y??new o(16),B=_-r,V=d-c;if(v[0]=2*l/B,v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=2*l/V,v[6]=0,v[7]=0,v[8]=(r+_)/B,v[9]=(d+c)/V,v[11]=-1,v[12]=0,v[13]=0,v[15]=0,m===1/0)v[10]=0,v[14]=l;else{const j=1/(m-l);v[10]=l*j,v[14]=m*l*j}return v}const ve=a.create(),Pe=a.create(),le=a.create();function se(r,_,c,d){const l=d??new o(16);return a.normalize(a.subtract(_,r,le),le),a.normalize(a.cross(c,le,ve),ve),a.normalize(a.cross(le,ve,Pe),Pe),l[0]=ve[0],l[1]=ve[1],l[2]=ve[2],l[3]=0,l[4]=Pe[0],l[5]=Pe[1],l[6]=Pe[2],l[7]=0,l[8]=le[0],l[9]=le[1],l[10]=le[2],l[11]=0,l[12]=r[0],l[13]=r[1],l[14]=r[2],l[15]=1,l}function ie(r,_,c,d){const l=d??new o(16);return a.normalize(a.subtract(r,_,le),le),a.normalize(a.cross(c,le,ve),ve),a.normalize(a.cross(le,ve,Pe),Pe),l[0]=ve[0],l[1]=ve[1],l[2]=ve[2],l[3]=0,l[4]=Pe[0],l[5]=Pe[1],l[6]=Pe[2],l[7]=0,l[8]=le[0],l[9]=le[1],l[10]=le[2],l[11]=0,l[12]=r[0],l[13]=r[1],l[14]=r[2],l[15]=1,l}function _e(r,_,c,d){const l=d??new o(16);return a.normalize(a.subtract(r,_,le),le),a.normalize(a.cross(c,le,ve),ve),a.normalize(a.cross(le,ve,Pe),Pe),l[0]=ve[0],l[1]=Pe[0],l[2]=le[0],l[3]=0,l[4]=ve[1],l[5]=Pe[1],l[6]=le[1],l[7]=0,l[8]=ve[2],l[9]=Pe[2],l[10]=le[2],l[11]=0,l[12]=-(ve[0]*r[0]+ve[1]*r[1]+ve[2]*r[2]),l[13]=-(Pe[0]*r[0]+Pe[1]*r[1]+Pe[2]*r[2]),l[14]=-(le[0]*r[0]+le[1]*r[1]+le[2]*r[2]),l[15]=1,l}function pe(r,_){const c=_??new o(16);return c[0]=1,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=1,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=1,c[11]=0,c[12]=r[0],c[13]=r[1],c[14]=r[2],c[15]=1,c}function me(r,_,c){const d=c??new o(16),l=_[0],m=_[1],y=_[2],v=r[0],B=r[1],V=r[2],j=r[3],re=r[1*4+0],Q=r[1*4+1],J=r[1*4+2],ce=r[1*4+3],we=r[2*4+0],de=r[2*4+1],be=r[2*4+2],xe=r[2*4+3],ke=r[3*4+0],$e=r[3*4+1],Xe=r[3*4+2],Ke=r[3*4+3];return r!==d&&(d[0]=v,d[1]=B,d[2]=V,d[3]=j,d[4]=re,d[5]=Q,d[6]=J,d[7]=ce,d[8]=we,d[9]=de,d[10]=be,d[11]=xe),d[12]=v*l+re*m+we*y+ke,d[13]=B*l+Q*m+de*y+$e,d[14]=V*l+J*m+be*y+Xe,d[15]=j*l+ce*m+xe*y+Ke,d}function Ae(r,_){const c=_??new o(16),d=Math.cos(r),l=Math.sin(r);return c[0]=1,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=d,c[6]=l,c[7]=0,c[8]=0,c[9]=-l,c[10]=d,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function ye(r,_,c){const d=c??new o(16),l=r[4],m=r[5],y=r[6],v=r[7],B=r[8],V=r[9],j=r[10],re=r[11],Q=Math.cos(_),J=Math.sin(_);return d[4]=Q*l+J*B,d[5]=Q*m+J*V,d[6]=Q*y+J*j,d[7]=Q*v+J*re,d[8]=Q*B-J*l,d[9]=Q*V-J*m,d[10]=Q*j-J*y,d[11]=Q*re-J*v,r!==d&&(d[0]=r[0],d[1]=r[1],d[2]=r[2],d[3]=r[3],d[12]=r[12],d[13]=r[13],d[14]=r[14],d[15]=r[15]),d}function Te(r,_){const c=_??new o(16),d=Math.cos(r),l=Math.sin(r);return c[0]=d,c[1]=0,c[2]=-l,c[3]=0,c[4]=0,c[5]=1,c[6]=0,c[7]=0,c[8]=l,c[9]=0,c[10]=d,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function Ue(r,_,c){const d=c??new o(16),l=r[0*4+0],m=r[0*4+1],y=r[0*4+2],v=r[0*4+3],B=r[2*4+0],V=r[2*4+1],j=r[2*4+2],re=r[2*4+3],Q=Math.cos(_),J=Math.sin(_);return d[0]=Q*l-J*B,d[1]=Q*m-J*V,d[2]=Q*y-J*j,d[3]=Q*v-J*re,d[8]=Q*B+J*l,d[9]=Q*V+J*m,d[10]=Q*j+J*y,d[11]=Q*re+J*v,r!==d&&(d[4]=r[4],d[5]=r[5],d[6]=r[6],d[7]=r[7],d[12]=r[12],d[13]=r[13],d[14]=r[14],d[15]=r[15]),d}function M(r,_){const c=_??new o(16),d=Math.cos(r),l=Math.sin(r);return c[0]=d,c[1]=l,c[2]=0,c[3]=0,c[4]=-l,c[5]=d,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=1,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function K(r,_,c){const d=c??new o(16),l=r[0*4+0],m=r[0*4+1],y=r[0*4+2],v=r[0*4+3],B=r[1*4+0],V=r[1*4+1],j=r[1*4+2],re=r[1*4+3],Q=Math.cos(_),J=Math.sin(_);return d[0]=Q*l+J*B,d[1]=Q*m+J*V,d[2]=Q*y+J*j,d[3]=Q*v+J*re,d[4]=Q*B-J*l,d[5]=Q*V-J*m,d[6]=Q*j-J*y,d[7]=Q*re-J*v,r!==d&&(d[8]=r[8],d[9]=r[9],d[10]=r[10],d[11]=r[11],d[12]=r[12],d[13]=r[13],d[14]=r[14],d[15]=r[15]),d}function x(r,_,c){const d=c??new o(16);let l=r[0],m=r[1],y=r[2];const v=Math.sqrt(l*l+m*m+y*y);l/=v,m/=v,y/=v;const B=l*l,V=m*m,j=y*y,re=Math.cos(_),Q=Math.sin(_),J=1-re;return d[0]=B+(1-B)*re,d[1]=l*m*J+y*Q,d[2]=l*y*J-m*Q,d[3]=0,d[4]=l*m*J-y*Q,d[5]=V+(1-V)*re,d[6]=m*y*J+l*Q,d[7]=0,d[8]=l*y*J+m*Q,d[9]=m*y*J-l*Q,d[10]=j+(1-j)*re,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}const i=x;function f(r,_,c,d){const l=d??new o(16);let m=_[0],y=_[1],v=_[2];const B=Math.sqrt(m*m+y*y+v*v);m/=B,y/=B,v/=B;const V=m*m,j=y*y,re=v*v,Q=Math.cos(c),J=Math.sin(c),ce=1-Q,we=V+(1-V)*Q,de=m*y*ce+v*J,be=m*v*ce-y*J,xe=m*y*ce-v*J,ke=j+(1-j)*Q,$e=y*v*ce+m*J,Xe=m*v*ce+y*J,Ke=y*v*ce-m*J,ze=re+(1-re)*Q,Qe=r[0],rt=r[1],it=r[2],Je=r[3],tt=r[4],nt=r[5],He=r[6],qe=r[7],ot=r[8],Ye=r[9],ut=r[10],st=r[11];return l[0]=we*Qe+de*tt+be*ot,l[1]=we*rt+de*nt+be*Ye,l[2]=we*it+de*He+be*ut,l[3]=we*Je+de*qe+be*st,l[4]=xe*Qe+ke*tt+$e*ot,l[5]=xe*rt+ke*nt+$e*Ye,l[6]=xe*it+ke*He+$e*ut,l[7]=xe*Je+ke*qe+$e*st,l[8]=Xe*Qe+Ke*tt+ze*ot,l[9]=Xe*rt+Ke*nt+ze*Ye,l[10]=Xe*it+Ke*He+ze*ut,l[11]=Xe*Je+Ke*qe+ze*st,r!==l&&(l[12]=r[12],l[13]=r[13],l[14]=r[14],l[15]=r[15]),l}const p=f;function b(r,_){const c=_??new o(16);return c[0]=r[0],c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=r[1],c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=r[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function w(r,_,c){const d=c??new o(16),l=_[0],m=_[1],y=_[2];return d[0]=l*r[0*4+0],d[1]=l*r[0*4+1],d[2]=l*r[0*4+2],d[3]=l*r[0*4+3],d[4]=m*r[1*4+0],d[5]=m*r[1*4+1],d[6]=m*r[1*4+2],d[7]=m*r[1*4+3],d[8]=y*r[2*4+0],d[9]=y*r[2*4+1],d[10]=y*r[2*4+2],d[11]=y*r[2*4+3],r!==d&&(d[12]=r[12],d[13]=r[13],d[14]=r[14],d[15]=r[15]),d}function C(r,_){const c=_??new o(16);return c[0]=r,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=r,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=r,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function k(r,_,c){const d=c??new o(16);return d[0]=_*r[0*4+0],d[1]=_*r[0*4+1],d[2]=_*r[0*4+2],d[3]=_*r[0*4+3],d[4]=_*r[1*4+0],d[5]=_*r[1*4+1],d[6]=_*r[1*4+2],d[7]=_*r[1*4+3],d[8]=_*r[2*4+0],d[9]=_*r[2*4+1],d[10]=_*r[2*4+2],d[11]=_*r[2*4+3],r!==d&&(d[12]=r[12],d[13]=r[13],d[14]=r[14],d[15]=r[15]),d}return{add:$,aim:se,axisRotate:f,axisRotation:x,cameraAim:ie,clone:W,copy:U,create:h,determinant:Y,equals:R,equalsApproximately:H,fromMat3:g,fromQuat:E,frustum:Le,frustumReverseZ:Me,getAxis:ue,getScaling:fe,getTranslation:ge,identity:N,inverse:D,invert:L,lookAt:_e,mul:Z,mulScalar:O,multiply:q,multiplyScalar:I,negate:T,ortho:Ge,perspective:te,perspectiveReverseZ:Oe,rotate:p,rotateX:ye,rotateY:Ue,rotateZ:K,rotation:i,rotationX:Ae,rotationY:Te,rotationZ:M,scale:w,scaling:b,set:P,setAxis:ne,setTranslation:ae,translate:me,translation:pe,transpose:F,uniformScale:k,uniformScaling:C}}const Zr=new Map;function Ml(o){let a=Zr.get(o);return a||(a=Tl(o),Zr.set(o,a)),a}function Al(o){const a=rs(o);function h(M,K,x,i){const f=new o(4);return M!==void 0&&(f[0]=M,K!==void 0&&(f[1]=K,x!==void 0&&(f[2]=x,i!==void 0&&(f[3]=i)))),f}const P=h;function g(M,K,x,i,f){const p=f??new o(4);return p[0]=M,p[1]=K,p[2]=x,p[3]=i,p}function E(M,K,x){const i=x??new o(4),f=K*.5,p=Math.sin(f);return i[0]=p*M[0],i[1]=p*M[1],i[2]=p*M[2],i[3]=Math.cos(f),i}function T(M,K){const x=K??a.create(3),i=Math.acos(M[3])*2,f=Math.sin(i*.5);return f>De?(x[0]=M[0]/f,x[1]=M[1]/f,x[2]=M[2]/f):(x[0]=1,x[1]=0,x[2]=0),{angle:i,axis:x}}function $(M,K){const x=te(M,K);return Math.acos(2*x*x-1)}function I(M,K,x){const i=x??new o(4),f=M[0],p=M[1],b=M[2],w=M[3],C=K[0],k=K[1],r=K[2],_=K[3];return i[0]=f*_+w*C+p*r-b*k,i[1]=p*_+w*k+b*C-f*r,i[2]=b*_+w*r+f*k-p*C,i[3]=w*_-f*C-p*k-b*r,i}const O=I;function U(M,K,x){const i=x??new o(4),f=K*.5,p=M[0],b=M[1],w=M[2],C=M[3],k=Math.sin(f),r=Math.cos(f);return i[0]=p*r+C*k,i[1]=b*r+w*k,i[2]=w*r-b*k,i[3]=C*r-p*k,i}function W(M,K,x){const i=x??new o(4),f=K*.5,p=M[0],b=M[1],w=M[2],C=M[3],k=Math.sin(f),r=Math.cos(f);return i[0]=p*r-w*k,i[1]=b*r+C*k,i[2]=w*r+p*k,i[3]=C*r-b*k,i}function H(M,K,x){const i=x??new o(4),f=K*.5,p=M[0],b=M[1],w=M[2],C=M[3],k=Math.sin(f),r=Math.cos(f);return i[0]=p*r+b*k,i[1]=b*r-p*k,i[2]=w*r+C*k,i[3]=C*r-w*k,i}function R(M,K,x,i){const f=i??new o(4),p=M[0],b=M[1],w=M[2],C=M[3];let k=K[0],r=K[1],_=K[2],c=K[3],d=p*k+b*r+w*_+C*c;d<0&&(d=-d,k=-k,r=-r,_=-_,c=-c);let l,m;if(1-d>De){const y=Math.acos(d),v=Math.sin(y);l=Math.sin((1-x)*y)/v,m=Math.sin(x*y)/v}else l=1-x,m=x;return f[0]=l*p+m*k,f[1]=l*b+m*r,f[2]=l*w+m*_,f[3]=l*C+m*c,f}function N(M,K){const x=K??new o(4),i=M[0],f=M[1],p=M[2],b=M[3],w=i*i+f*f+p*p+b*b,C=w?1/w:0;return x[0]=-i*C,x[1]=-f*C,x[2]=-p*C,x[3]=b*C,x}function F(M,K){const x=K??new o(4);return x[0]=-M[0],x[1]=-M[1],x[2]=-M[2],x[3]=M[3],x}function D(M,K){const x=K??new o(4),i=M[0]+M[5]+M[10];if(i>0){const f=Math.sqrt(i+1);x[3]=.5*f;const p=.5/f;x[0]=(M[6]-M[9])*p,x[1]=(M[8]-M[2])*p,x[2]=(M[1]-M[4])*p}else{let f=0;M[5]>M[0]&&(f=1),M[10]>M[f*4+f]&&(f=2);const p=(f+1)%3,b=(f+2)%3,w=Math.sqrt(M[f*4+f]-M[p*4+p]-M[b*4+b]+1);x[f]=.5*w;const C=.5/w;x[3]=(M[p*4+b]-M[b*4+p])*C,x[p]=(M[p*4+f]+M[f*4+p])*C,x[b]=(M[b*4+f]+M[f*4+b])*C}return x}function Y(M,K,x,i,f){const p=f??new o(4),b=M*.5,w=K*.5,C=x*.5,k=Math.sin(b),r=Math.cos(b),_=Math.sin(w),c=Math.cos(w),d=Math.sin(C),l=Math.cos(C);switch(i){case"xyz":p[0]=k*c*l+r*_*d,p[1]=r*_*l-k*c*d,p[2]=r*c*d+k*_*l,p[3]=r*c*l-k*_*d;break;case"xzy":p[0]=k*c*l-r*_*d,p[1]=r*_*l-k*c*d,p[2]=r*c*d+k*_*l,p[3]=r*c*l+k*_*d;break;case"yxz":p[0]=k*c*l+r*_*d,p[1]=r*_*l-k*c*d,p[2]=r*c*d-k*_*l,p[3]=r*c*l+k*_*d;break;case"yzx":p[0]=k*c*l+r*_*d,p[1]=r*_*l+k*c*d,p[2]=r*c*d-k*_*l,p[3]=r*c*l-k*_*d;break;case"zxy":p[0]=k*c*l-r*_*d,p[1]=r*_*l+k*c*d,p[2]=r*c*d+k*_*l,p[3]=r*c*l-k*_*d;break;case"zyx":p[0]=k*c*l-r*_*d,p[1]=r*_*l+k*c*d,p[2]=r*c*d-k*_*l,p[3]=r*c*l+k*_*d;break;default:throw new Error(`Unknown rotation order: ${i}`)}return p}function L(M,K){const x=K??new o(4);return x[0]=M[0],x[1]=M[1],x[2]=M[2],x[3]=M[3],x}const q=L;function Z(M,K,x){const i=x??new o(4);return i[0]=M[0]+K[0],i[1]=M[1]+K[1],i[2]=M[2]+K[2],i[3]=M[3]+K[3],i}function ae(M,K,x){const i=x??new o(4);return i[0]=M[0]-K[0],i[1]=M[1]-K[1],i[2]=M[2]-K[2],i[3]=M[3]-K[3],i}const ge=ae;function ue(M,K,x){const i=x??new o(4);return i[0]=M[0]*K,i[1]=M[1]*K,i[2]=M[2]*K,i[3]=M[3]*K,i}const ne=ue;function fe(M,K,x){const i=x??new o(4);return i[0]=M[0]/K,i[1]=M[1]/K,i[2]=M[2]/K,i[3]=M[3]/K,i}function te(M,K){return M[0]*K[0]+M[1]*K[1]+M[2]*K[2]+M[3]*K[3]}function Oe(M,K,x,i){const f=i??new o(4);return f[0]=M[0]+x*(K[0]-M[0]),f[1]=M[1]+x*(K[1]-M[1]),f[2]=M[2]+x*(K[2]-M[2]),f[3]=M[3]+x*(K[3]-M[3]),f}function Ge(M){const K=M[0],x=M[1],i=M[2],f=M[3];return Math.sqrt(K*K+x*x+i*i+f*f)}const Le=Ge;function Me(M){const K=M[0],x=M[1],i=M[2],f=M[3];return K*K+x*x+i*i+f*f}const ve=Me;function Pe(M,K){const x=K??new o(4),i=M[0],f=M[1],p=M[2],b=M[3],w=Math.sqrt(i*i+f*f+p*p+b*b);return w>1e-5?(x[0]=i/w,x[1]=f/w,x[2]=p/w,x[3]=b/w):(x[0]=0,x[1]=0,x[2]=0,x[3]=1),x}function le(M,K){return Math.abs(M[0]-K[0])<De&&Math.abs(M[1]-K[1])<De&&Math.abs(M[2]-K[2])<De&&Math.abs(M[3]-K[3])<De}function se(M,K){return M[0]===K[0]&&M[1]===K[1]&&M[2]===K[2]&&M[3]===K[3]}function ie(M){const K=M??new o(4);return K[0]=0,K[1]=0,K[2]=0,K[3]=1,K}const _e=a.create(),pe=a.create(),me=a.create();function Ae(M,K,x){const i=x??new o(4),f=a.dot(M,K);return f<-.999999?(a.cross(pe,M,_e),a.len(_e)<1e-6&&a.cross(me,M,_e),a.normalize(_e,_e),E(_e,Math.PI,i),i):f>.999999?(i[0]=0,i[1]=0,i[2]=0,i[3]=1,i):(a.cross(M,K,_e),i[0]=_e[0],i[1]=_e[1],i[2]=_e[2],i[3]=1+f,Pe(i,i))}const ye=new o(4),Te=new o(4);function Ue(M,K,x,i,f,p){const b=p??new o(4);return R(M,i,f,ye),R(K,x,f,Te),R(ye,Te,2*f*(1-f),b),b}return{create:h,fromValues:P,set:g,fromAxisAngle:E,toAxisAngle:T,angle:$,multiply:I,mul:O,rotateX:U,rotateY:W,rotateZ:H,slerp:R,inverse:N,conjugate:F,fromMat:D,fromEuler:Y,copy:L,clone:q,add:Z,subtract:ae,sub:ge,mulScalar:ue,scale:ne,divScalar:fe,dot:te,lerp:Oe,length:Ge,len:Le,lengthSq:Me,lenSq:ve,normalize:Pe,equalsApproximately:le,equals:se,identity:ie,rotationTo:Ae,sqlerp:Ue}}const Xr=new Map;function Dl(o){let a=Xr.get(o);return a||(a=Al(o),Xr.set(o,a)),a}function Gl(o){function a(x,i,f,p){const b=new o(4);return x!==void 0&&(b[0]=x,i!==void 0&&(b[1]=i,f!==void 0&&(b[2]=f,p!==void 0&&(b[3]=p)))),b}const h=a;function P(x,i,f,p,b){const w=b??new o(4);return w[0]=x,w[1]=i,w[2]=f,w[3]=p,w}function g(x,i){const f=i??new o(4);return f[0]=Math.ceil(x[0]),f[1]=Math.ceil(x[1]),f[2]=Math.ceil(x[2]),f[3]=Math.ceil(x[3]),f}function E(x,i){const f=i??new o(4);return f[0]=Math.floor(x[0]),f[1]=Math.floor(x[1]),f[2]=Math.floor(x[2]),f[3]=Math.floor(x[3]),f}function T(x,i){const f=i??new o(4);return f[0]=Math.round(x[0]),f[1]=Math.round(x[1]),f[2]=Math.round(x[2]),f[3]=Math.round(x[3]),f}function $(x,i=0,f=1,p){const b=p??new o(4);return b[0]=Math.min(f,Math.max(i,x[0])),b[1]=Math.min(f,Math.max(i,x[1])),b[2]=Math.min(f,Math.max(i,x[2])),b[3]=Math.min(f,Math.max(i,x[3])),b}function I(x,i,f){const p=f??new o(4);return p[0]=x[0]+i[0],p[1]=x[1]+i[1],p[2]=x[2]+i[2],p[3]=x[3]+i[3],p}function O(x,i,f,p){const b=p??new o(4);return b[0]=x[0]+i[0]*f,b[1]=x[1]+i[1]*f,b[2]=x[2]+i[2]*f,b[3]=x[3]+i[3]*f,b}function U(x,i,f){const p=f??new o(4);return p[0]=x[0]-i[0],p[1]=x[1]-i[1],p[2]=x[2]-i[2],p[3]=x[3]-i[3],p}const W=U;function H(x,i){return Math.abs(x[0]-i[0])<De&&Math.abs(x[1]-i[1])<De&&Math.abs(x[2]-i[2])<De&&Math.abs(x[3]-i[3])<De}function R(x,i){return x[0]===i[0]&&x[1]===i[1]&&x[2]===i[2]&&x[3]===i[3]}function N(x,i,f,p){const b=p??new o(4);return b[0]=x[0]+f*(i[0]-x[0]),b[1]=x[1]+f*(i[1]-x[1]),b[2]=x[2]+f*(i[2]-x[2]),b[3]=x[3]+f*(i[3]-x[3]),b}function F(x,i,f,p){const b=p??new o(4);return b[0]=x[0]+f[0]*(i[0]-x[0]),b[1]=x[1]+f[1]*(i[1]-x[1]),b[2]=x[2]+f[2]*(i[2]-x[2]),b[3]=x[3]+f[3]*(i[3]-x[3]),b}function D(x,i,f){const p=f??new o(4);return p[0]=Math.max(x[0],i[0]),p[1]=Math.max(x[1],i[1]),p[2]=Math.max(x[2],i[2]),p[3]=Math.max(x[3],i[3]),p}function Y(x,i,f){const p=f??new o(4);return p[0]=Math.min(x[0],i[0]),p[1]=Math.min(x[1],i[1]),p[2]=Math.min(x[2],i[2]),p[3]=Math.min(x[3],i[3]),p}function L(x,i,f){const p=f??new o(4);return p[0]=x[0]*i,p[1]=x[1]*i,p[2]=x[2]*i,p[3]=x[3]*i,p}const q=L;function Z(x,i,f){const p=f??new o(4);return p[0]=x[0]/i,p[1]=x[1]/i,p[2]=x[2]/i,p[3]=x[3]/i,p}function ae(x,i){const f=i??new o(4);return f[0]=1/x[0],f[1]=1/x[1],f[2]=1/x[2],f[3]=1/x[3],f}const ge=ae;function ue(x,i){return x[0]*i[0]+x[1]*i[1]+x[2]*i[2]+x[3]*i[3]}function ne(x){const i=x[0],f=x[1],p=x[2],b=x[3];return Math.sqrt(i*i+f*f+p*p+b*b)}const fe=ne;function te(x){const i=x[0],f=x[1],p=x[2],b=x[3];return i*i+f*f+p*p+b*b}const Oe=te;function Ge(x,i){const f=x[0]-i[0],p=x[1]-i[1],b=x[2]-i[2],w=x[3]-i[3];return Math.sqrt(f*f+p*p+b*b+w*w)}const Le=Ge;function Me(x,i){const f=x[0]-i[0],p=x[1]-i[1],b=x[2]-i[2],w=x[3]-i[3];return f*f+p*p+b*b+w*w}const ve=Me;function Pe(x,i){const f=i??new o(4),p=x[0],b=x[1],w=x[2],C=x[3],k=Math.sqrt(p*p+b*b+w*w+C*C);return k>1e-5?(f[0]=p/k,f[1]=b/k,f[2]=w/k,f[3]=C/k):(f[0]=0,f[1]=0,f[2]=0,f[3]=0),f}function le(x,i){const f=i??new o(4);return f[0]=-x[0],f[1]=-x[1],f[2]=-x[2],f[3]=-x[3],f}function se(x,i){const f=i??new o(4);return f[0]=x[0],f[1]=x[1],f[2]=x[2],f[3]=x[3],f}const ie=se;function _e(x,i,f){const p=f??new o(4);return p[0]=x[0]*i[0],p[1]=x[1]*i[1],p[2]=x[2]*i[2],p[3]=x[3]*i[3],p}const pe=_e;function me(x,i,f){const p=f??new o(4);return p[0]=x[0]/i[0],p[1]=x[1]/i[1],p[2]=x[2]/i[2],p[3]=x[3]/i[3],p}const Ae=me;function ye(x){const i=x??new o(4);return i[0]=0,i[1]=0,i[2]=0,i[3]=0,i}function Te(x,i,f){const p=f??new o(4),b=x[0],w=x[1],C=x[2],k=x[3];return p[0]=i[0]*b+i[4]*w+i[8]*C+i[12]*k,p[1]=i[1]*b+i[5]*w+i[9]*C+i[13]*k,p[2]=i[2]*b+i[6]*w+i[10]*C+i[14]*k,p[3]=i[3]*b+i[7]*w+i[11]*C+i[15]*k,p}function Ue(x,i,f){const p=f??new o(4);return Pe(x,p),L(p,i,p)}function M(x,i,f){const p=f??new o(4);return ne(x)>i?Ue(x,i,p):se(x,p)}function K(x,i,f){const p=f??new o(4);return N(x,i,.5,p)}return{create:a,fromValues:h,set:P,ceil:g,floor:E,round:T,clamp:$,add:I,addScaled:O,subtract:U,sub:W,equalsApproximately:H,equals:R,lerp:N,lerpV:F,max:D,min:Y,mulScalar:L,scale:q,divScalar:Z,inverse:ae,invert:ge,dot:ue,length:ne,len:fe,lengthSq:te,lenSq:Oe,distance:Ge,dist:Le,distanceSq:Me,distSq:ve,normalize:Pe,negate:le,copy:se,clone:ie,multiply:_e,mul:pe,divide:me,div:Ae,zero:ye,transformMat4:Te,setLength:Ue,truncate:M,midpoint:K}}const Qr=new Map;function zl(o){let a=Qr.get(o);return a||(a=Gl(o),Qr.set(o,a)),a}function Ns(o,a,h,P,g,E){return{mat3:Bl(o),mat4:Ml(a),quat:Dl(h),vec2:di(P),vec3:rs(g),vec4:zl(E)}}const{mat3:St,mat4:dt,quat:_t,vec2:Jr,vec3:z,vec4:Yc}=Ns(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);Ns(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);Ns(Sl,Array,Array,Array,Array,Array);const ei=document.querySelector("#log");let vt=null,ln=null;function pi(){if(vt)return vt;vt=document.createElement("div"),vt.className="ply-spinner-overlay";const o=document.createElement("div");return o.className="ply-spinner",vt.appendChild(o),ln=document.createElement("div"),ln.className="ply-spinner-label",vt.appendChild(ln),vt.style.display="none",document.body.appendChild(vt),vt}function $s(o){pi(),ln&&o&&(ln.textContent=o),vt&&(vt.style.opacity="1",vt.style.display="flex")}function Rt(o){pi(),ln&&(ln.textContent=o)}function zn(){if(!vt)return;const o=vt;o.style.opacity="0",setTimeout(()=>{o.style.opacity==="0"&&(o.style.display="none")},220)}function hi(o,a){if(!ei)return;const h=document.createElement("p");h.innerText=o,a&&Object.assign(h.style,a),ei.appendChild(h)}async function kt(o){console.log(o),hi(o)}async function Ll(o){console.error(o),hi(o,{color:"red",backgroundColor:"rgba(255, 0, 0, 0.1)"})}let fi;function _i(){fi=performance.now()}function ti(o){const a=performance.now()-fi;kt(`⏱️ ${o} Time: ${a.toFixed(0)} ms`)}function Il(o,a){if(!o)throw new Error(a&&(typeof a=="string"?a:a()))}function In(o){return o+3&-4}const Rl=2,Ul=3,Vl=5,Ol=6,Ln=7,Jn=8,es=9,ts=10;function Fl(o){const a=new TextDecoder("ascii"),h=a.decode(new Uint8Array(o,0,4));if(h!=="NAT2")throw new Error(`NAT2 bad magic: '${h}'`);if(o.byteLength<4+64)throw new Error(`NAT2 truncated (${o.byteLength} bytes < 4 + 64)`);const P=new DataView(o),g=4,E=P.getUint32(g+0,!0),T=P.getUint32(g+4,!0),$=P.getUint32(g+8,!0),I=P.getUint32(g+12,!0),O=P.getUint32(g+16,!0),U=P.getFloat32(g+20,!0),W=P.getUint32(g+24,!0),H=P.getUint32(g+28,!0),R=P.getFloat32(g+32,!0),N=P.getFloat32(g+36,!0),F=P.getFloat32(g+40,!0),D=P.getUint32(g+44,!0),Y=P.getFloat32(g+48,!0),L=P.getFloat32(g+52,!0),q=P.getUint32(g+56,!0),Z=P.getUint32(g+60,!0),ae=H===es||H===ts,ge=ae?Z:0,ue=ae?0:Z,ne=ue>0?ue:1;if(H===Vl||H===Ol)throw new Error(`NAT2: paired-RVQ format=${H} is retired 2026-07-23; re-bake with typeD (--bc7-codebook)`);const fe=H===es||H===ts;if(H!==Rl&&H!==Ul&&H!==Ln&&H!==Jn&&!fe)throw new Error(`NAT2: Halloumi-WS supports BC7 (2), ASTC 4x4 (3), BC7-codebook (7), ASTC-codebook (8), probe-BC7 (9) or probe-ASTC (10); got format=${H}`);if(E%4!==0||D%4!==0)throw new Error(`NAT2 block-format dims must be 4-aligned: width=${E} layer_h=${D}`);let te=g+64;const Oe=(q+1)*4,Ge=new Uint32Array(o.slice(te,te+Oe));te+=Oe;let Le;if(ne>1){const pe=(ne+1)*4;if(te+pe>o.byteLength)throw new Error(`NAT2 truncated at column_cuts (need ${pe} from ${te})`);Le=new Uint32Array(o.slice(te,te+pe)),te+=pe}else Le=new Uint32Array([0,E]);let Me=0;for(let pe=0;pe<ne;pe++){const me=Le[pe+1]-Le[pe];me>Me&&(Me=me)}if(fe){const pe=ge&1?7:6,me=O*pe*4;if(te+me>o.byteLength)throw new Error(`NAT2 truncated at probes: need ${me} more bytes from offset ${te}, have ${o.byteLength-te}`);const Ae=new Float32Array(o.slice(te,te+me));te+=me;const ye=E/4,Te=D/4,Ue=ye*Te*16,M=o.byteLength-te;if(M<Ue)throw new Error(`NAT2 probe atlas truncated: need ${Ue} bytes for ${E}x${D}, have ${M}`);const K=new Uint8Array(o.slice(te,te+Ue));return{width:E,height:T,channels:$,kernel_type:I,num_rects:O,uv_extent:U,sb_number:W,format:H,sh_bias:R,res_bias:N,compact_mult:F,layer_h:D,atlas_scale:Y,atlas_offset:L,n_layers:q,n_cols:ne,layer_cuts:Ge,column_cuts:Le,slice_width:Me,rects_expanded:Ae,atlas_bytes:K,probe_mode:ge&1?2:1}}const ve=O*4*4;if(te+ve>o.byteLength)throw new Error(`NAT2 truncated at rects: need ${ve} more bytes from offset ${te}, have ${o.byteLength-te}`);const Pe=new Float32Array(o.slice(te,te+ve));te+=ve;const le=new Float32Array(O*5);for(let pe=0;pe<O;pe++){const me=Pe[pe*4+0],Ae=Pe[pe*4+1],ye=Pe[pe*4+2],Te=Pe[pe*4+3];let Ue=0;for(let f=1;f<=q&&Ge[f]<=Ae;f++)Ue=f;let M=0;for(let f=1;f<=ne&&Le[f]<=me;f++)M=f;const K=Ae-Ge[Ue],x=me-Le[M],i=M*q+Ue;le[pe*5+0]=x,le[pe*5+1]=K,le[pe*5+2]=ye,le[pe*5+3]=Te,le[pe*5+4]=i}let se;const _e=E/4*16;if(H===Ln||H===Jn){if(te+24>o.byteLength)throw new Error("NAT2 truncated at typeD sub-header");const pe=H===Ln?"BCCB":"ACCB",me=a.decode(new Uint8Array(o,te,4));if(me!==pe)throw new Error(`NAT2 typeD bad sub-magic: expected '${pe}' got '${me}'`);const Ae=P.getUint32(te+4,!0),ye=P.getUint32(te+8,!0),Te=P.getUint32(te+12,!0),Ue=P.getUint32(te+16,!0),M=P.getUint32(te+20,!0);if(Ae!==1)throw new Error(`NAT2 BCCB unsupported version ${Ae}`);if(Te!==T/4||Ue!==E/4||M!==Te*Ue)throw new Error(`NAT2 BCCB block grid mismatch: header ${E}×${T}, sub-header ${Ue}×${Te} (${M} blocks)`);te+=24;const K=ye*16;if(te+K>o.byteLength)throw new Error(`NAT2 BCCB truncated at codebook (need ${K}, have ${o.byteLength-te})`);const x=new Uint8Array(o,te,K);te+=K;const i=M*2;if(te+i>o.byteLength)throw new Error(`NAT2 BCCB truncated at indices (need ${i}, have ${o.byteLength-te})`);const f=new Uint16Array(o.slice(te,te+i));te+=i;const p=new Uint8Array(M*16);for(let b=0;b<M;b++){const w=f[b]*16;p.set(x.subarray(w,w+16),b*16)}se=p}else{let pe=0;for(let me=0;me<q;me++){const Ae=Ge[me+1]-Ge[me];if(Ae%4!==0)throw new Error(`NAT2 BC7 layer ${me} rows ${Ae} not 4-aligned`);pe+=Ae/4*_e}if(te+pe>o.byteLength)throw new Error(`NAT2 truncated at atlas payload: need ${pe} more bytes from offset ${te}, have ${o.byteLength-te}`);se=new Uint8Array(o.slice(te,te+pe))}return{width:E,height:T,channels:$,kernel_type:I,num_rects:O,uv_extent:U,sb_number:W,format:H,sh_bias:R,res_bias:N,compact_mult:F,layer_h:D,atlas_scale:Y,atlas_offset:L,n_layers:q,n_cols:ne,layer_cuts:Ge,column_cuts:Le,slice_width:Me,rects_expanded:le,atlas_bytes:se}}const Nl=32;function $l(o,a,h){if(a.format===5||a.format===6)throw new Error(`paired-RVQ format=${a.format} is retired; re-bake with typeD (--bc7-codebook)`);let P,g,E,T;if(a.format===2||a.format===Ln||a.format===es){if(!o.features.has("texture-compression-bc"))return kt(`⚠️  bundle is BC7 (format=${a.format}) but texture-compression-bc not supported — atlas disabled`),null;T=a.format===es?"BC7 atlas (proberes: shared probe texture)":a.format===Ln?"BC7 atlas (typeD: codebook gather)":"BC7 atlas",{texture:P,view:g,sampler:E}=ni(o,a,"bc7-rgba-unorm",T)}else if(a.format===3||a.format===Jn||a.format===ts){if(!o.features.has("texture-compression-astc"))return kt(`⚠️  bundle is ASTC 4x4 (format=${a.format}) but texture-compression-astc not supported — atlas disabled`),null;T=a.format===ts?"ASTC 4x4 atlas (proberes: shared probe texture)":a.format===Jn?"ASTC 4x4 atlas (typeD-ASTC: codebook gather)":"ASTC 4x4 atlas",{texture:P,view:g,sampler:E}=ni(o,a,"astc-4x4-unorm",T)}else return kt(`⚠️  unsupported atlas format ${a.format} — atlas disabled`),null;const{rects_expanded:$}=a,I=o.createBuffer({label:"atlas rects (5-stride)",size:In($.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(I,0,$);const O=o.createBuffer({label:"tex_params",size:48,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return mi(o,O,a,h),{texture:P,view:g,sampler:E,rectsBuffer:I,texParamsBuffer:O,meta:a}}function ni(o,a,h,P){const{width:g,layer_h:E,n_layers:T,n_cols:$,layer_cuts:I,column_cuts:O,slice_width:U,atlas_bytes:W}=a,R=g/4*16,N=o.limits.maxTextureDimension2D;if(E>N||U>N)throw new Error(`⚠️  atlas slice dims ${U}x${E} exceed maxTextureDimension2D=${N}. Re-bake with smaller LAYER_H or pack with column-aware atlas widths.`);const F=$*T;if(F>o.limits.maxTextureArrayLayers)throw new Error(`⚠️  ${$} cols × ${T} layers = ${F} slices > maxTextureArrayLayers=${o.limits.maxTextureArrayLayers}.`);const D=o.createTexture({label:P,size:{width:U,height:E,depthOrArrayLayers:F},mipLevelCount:1,sampleCount:1,dimension:"2d",format:h,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});for(let q=0;q<$;q++){const Z=O[q]/4,ae=(O[q+1]-O[q])/4;for(let ge=0;ge<T;ge++){const ue=I[ge]/4,ne=(I[ge+1]-I[ge])/4,fe=q*T+ge,te=ue*R+Z*16;o.queue.writeTexture({texture:D,mipLevel:0,origin:{x:0,y:0,z:fe},aspect:"all"},W,{offset:te,bytesPerRow:R,rowsPerImage:ne},{width:ae*4,height:ne*4,depthOrArrayLayers:1})}}const Y=D.createView({label:`${P} view`,dimension:"2d-array"}),L=o.createSampler({label:`${P} sampler`,addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge",magFilter:"linear",minFilter:"linear",mipmapFilter:"nearest"});return{texture:D,view:Y,sampler:L}}function mi(o,a,h,P){const g=new ArrayBuffer(32),E=new Uint32Array(g),T=new Float32Array(g);E[0]=P?1:0,T[1]=h.atlas_scale,T[2]=h.atlas_offset,T[3]=h.res_bias,E[4]=h.probe_mode?h.probe_mode|0:0,o.queue.writeBuffer(a,0,g)}async function Is(o,a){kt(`loading ply file from File... : ${o.name}`),$s("downloading PLY...");const h=await o.arrayBuffer();try{return await bi(h,a)}finally{zn()}}async function Wl(o,a){kt(`loading ply file from URL... : ${o}`),$s("downloading PLY...");try{_i();const h=new URL(o,self.location.href).href;return await bi({url:h},a)}finally{zn()}}async function bi(o,a){return new Promise((h,P)=>{const g=new Worker(new URL(""+new URL("ply-worker-621cb083.js",import.meta.url).href,self.location),{type:"module"});g.onmessage=E=>{var $,I,O,U,W,H,R,N,F,D,Y,L;const T=E.data;if((T==null?void 0:T.type)==="error"){Ll(`PLY worker error: ${T.message??"unknown error"}`),g.terminate(),P(new Error(T.message??"Worker error"));return}else if((T==null?void 0:T.type)==="download_progress"){const q=T.totalBytes,Z=T.loadedBytes/(1024*1024),ae=q?q/(1024*1024):void 0,ge=(T.speedBps??0)/(1024*1024),ue=q?Math.min(99,Math.floor(T.loadedBytes/q*100)):void 0,ne=ae?`total ${ae.toFixed(1)} MB`:"total -- MB",fe=ae&&ue!==void 0?`${Z.toFixed(1)} MB downloaded (${ue}%)`:`${Z.toFixed(1)} MB downloaded`,te=`${ge.toFixed(2)} MB/s`;Rt(`downloading PLY ...
${ne}, ${fe}
${te}`);return}else if((T==null?void 0:T.type)==="fetched"){kt(`💾 Fetched (${T.byteLength} bytes)`),ti("Download"),Rt("parsing PLY..."),_i();return}else if((T==null?void 0:T.type)==="parse_progress"){const q=T.total??0,Z=T.read??0,ae=q>0?Math.floor(Z/q*100):0;Rt(`parsing PLY ...
${Z}/${q} surfels (${ae}%)`);return}else if((T==null?void 0:T.type)==="done"){const q=T.num_points,Z=T.K,ae=T.feature_mode??0,ge=T.sh_bias,ue=T.kernel_type,ne=T.surfelBuffer,fe=T.svParamsBuffer;kt(`🪐 Total surfels: ${q}, mode=${ae===1?"SB":"SV"}, K=${Z}, sh_bias=${ge}, kernel_type=${ue}`);const Oe=a.createBuffer({label:"surfel input buffer",size:In(q*Nl),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});a.queue.writeBuffer(Oe,0,ne);const Ge=fe.byteLength>0?fe.byteLength:16,Le=a.createBuffer({label:ae===1?"color_params buffer (SB)":"color_params buffer (SV)",size:In(Ge),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});fe.byteLength>0&&a.queue.writeBuffer(Le,0,fe),g.terminate(),ti("Parse"),h({num_points:q,K:Z,feature_mode:ae,sh_bias:ge,kernel_type:ue,surfel_buffer:Oe,surfel_data:new Float32Array(ne),sv_params_buffer:Le,bbox:T.bbox??{min:[-1,-1,-1],max:[1,1,1]},centroid:T.centroid??[((((I=($=T.bbox)==null?void 0:$.min)==null?void 0:I[0])??-1)+(((U=(O=T.bbox)==null?void 0:O.max)==null?void 0:U[0])??1))/2,((((H=(W=T.bbox)==null?void 0:W.min)==null?void 0:H[1])??-1)+(((N=(R=T.bbox)==null?void 0:R.max)==null?void 0:N[1])??1))/2,((((D=(F=T.bbox)==null?void 0:F.min)==null?void 0:D[2])??-1)+(((L=(Y=T.bbox)==null?void 0:Y.max)==null?void 0:L[2])??1))/2]})}},g.onerror=E=>{g.terminate(),P(E)},o instanceof ArrayBuffer?(Rt("parsing PLY..."),g.postMessage({type:"start",plyBuffer:o},[o])):g.postMessage({type:"start_url",url:o.url})})}var ql=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Rs={exports:{}};/*! Tweakpane 3.1.10 (c) 2016 cocopon, licensed under the MIT license. */(function(o,a){(function(h,P){P(a)})(ql,function(h){class P{constructor(e){const[t,s]=e.split("-"),u=t.split(".");this.major=parseInt(u[0],10),this.minor=parseInt(u[1],10),this.patch=parseInt(u[2],10),this.prerelease=s??null}toString(){const e=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[e,this.prerelease].join("-"):e}}class g{constructor(e){this.controller_=e}get element(){return this.controller_.view.element}get disabled(){return this.controller_.viewProps.get("disabled")}set disabled(e){this.controller_.viewProps.set("disabled",e)}get hidden(){return this.controller_.viewProps.get("hidden")}set hidden(e){this.controller_.viewProps.set("hidden",e)}dispose(){this.controller_.viewProps.set("disposed",!0)}}class E{constructor(e){this.target=e}}class T extends E{constructor(e,t,s,u){super(e),this.value=t,this.presetKey=s,this.last=u??!0}}class $ extends E{constructor(e,t,s){super(e),this.value=t,this.presetKey=s}}class I extends E{constructor(e,t){super(e),this.expanded=t}}class O extends E{constructor(e,t){super(e),this.index=t}}function U(n){return n}function W(n){return n==null}function H(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0}function R(n,e){let t=n;do{const s=Object.getOwnPropertyDescriptor(t,e);if(s&&(s.set!==void 0||s.writable===!0))return!0;t=Object.getPrototypeOf(t)}while(t!==null);return!1}const N={alreadydisposed:()=>"View has been already disposed",invalidparams:n=>`Invalid parameters for '${n.name}'`,nomatchingcontroller:n=>`No matching controller for '${n.key}'`,nomatchingview:n=>`No matching view for '${JSON.stringify(n.params)}'`,notbindable:()=>"Value is not bindable",propertynotfound:n=>`Property '${n.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class F{static alreadyDisposed(){return new F({type:"alreadydisposed"})}static notBindable(){return new F({type:"notbindable"})}static propertyNotFound(e){return new F({type:"propertynotfound",context:{name:e}})}static shouldNeverHappen(){return new F({type:"shouldneverhappen"})}constructor(e){var t;this.message=(t=N[e.type](e.context))!==null&&t!==void 0?t:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=e.type}}class D{constructor(e,t,s){this.obj_=e,this.key_=t,this.presetKey_=s??t}static isBindable(e){return!(e===null||typeof e!="object"&&typeof e!="function")}get key(){return this.key_}get presetKey(){return this.presetKey_}read(){return this.obj_[this.key_]}write(e){this.obj_[this.key_]=e}writeProperty(e,t){const s=this.read();if(!D.isBindable(s))throw F.notBindable();if(!(e in s))throw F.propertyNotFound(e);s[e]=t}}class Y extends g{get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get title(){var e;return(e=this.controller_.valueController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.valueController.props.set("title",e)}on(e,t){const s=t.bind(this);return this.controller_.valueController.emitter.on(e,()=>{s(new E(this))}),this}}class L{constructor(){this.observers_={}}on(e,t){let s=this.observers_[e];return s||(s=this.observers_[e]=[]),s.push({handler:t}),this}off(e,t){const s=this.observers_[e];return s&&(this.observers_[e]=s.filter(u=>u.handler!==t)),this}emit(e,t){const s=this.observers_[e];s&&s.forEach(u=>{u.handler(t)})}}const q="tp";function Z(n){return(t,s)=>[q,"-",n,"v",t?`_${t}`:"",s?`-${s}`:""].join("")}function ae(n,e){return t=>e(n(t))}function ge(n){return n.rawValue}function ue(n,e){n.emitter.on("change",ae(ge,e)),e(n.rawValue)}function ne(n,e,t){ue(n.value(e),t)}function fe(n,e,t){t?n.classList.add(e):n.classList.remove(e)}function te(n,e){return t=>{fe(n,e,t)}}function Oe(n,e){ue(n,t=>{e.textContent=t??""})}const Ge=Z("btn");class Le{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Ge()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("button");s.classList.add(Ge("b")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const u=e.createElement("div");u.classList.add(Ge("t")),Oe(t.props.value("title"),u),this.buttonElement.appendChild(u)}}class Me{constructor(e,t){this.emitter=new L,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new Le(e,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class ve{constructor(e,t){var s;this.constraint_=t==null?void 0:t.constraint,this.equals_=(s=t==null?void 0:t.equals)!==null&&s!==void 0?s:(u,S)=>u===S,this.emitter=new L,this.rawValue_=e}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const s=t??{forceEmit:!1,last:!0},u=this.constraint_?this.constraint_.constrain(e):e,S=this.rawValue_;this.equals_(S,u)&&!s.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=u,this.emitter.emit("change",{options:s,previousRawValue:S,rawValue:u,sender:this}))}}class Pe{constructor(e){this.emitter=new L,this.value_=e}get rawValue(){return this.value_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const s=t??{forceEmit:!1,last:!0},u=this.value_;u===e&&!s.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=e,this.emitter.emit("change",{options:s,previousRawValue:u,rawValue:this.value_,sender:this}))}}function le(n,e){const t=e==null?void 0:e.constraint,s=e==null?void 0:e.equals;return!t&&!s?new Pe(n):new ve(n,e)}class se{constructor(e){this.emitter=new L,this.valMap_=e;for(const t in this.valMap_)this.valMap_[t].emitter.on("change",()=>{this.emitter.emit("change",{key:t,sender:this})})}static createCore(e){return Object.keys(e).reduce((s,u)=>Object.assign(s,{[u]:le(e[u])}),{})}static fromObject(e){const t=this.createCore(e);return new se(t)}get(e){return this.valMap_[e].rawValue}set(e,t){this.valMap_[e].rawValue=t}value(e){return this.valMap_[e]}}function ie(n,e){const s=Object.keys(e).reduce((u,S)=>{if(u===void 0)return;const A=e[S],ee=A(n[S]);return ee.succeeded?Object.assign(Object.assign({},u),{[S]:ee.value}):void 0},{});return s}function _e(n,e){return n.reduce((t,s)=>{if(t===void 0)return;const u=e(s);if(!(!u.succeeded||u.value===void 0))return[...t,u.value]},[])}function pe(n){return n===null?!1:typeof n=="object"}function me(n){return e=>t=>{if(!e&&t===void 0)return{succeeded:!1,value:void 0};if(e&&t===void 0)return{succeeded:!0,value:void 0};const s=n(t);return s!==void 0?{succeeded:!0,value:s}:{succeeded:!1,value:void 0}}}function Ae(n){return{custom:e=>me(e)(n),boolean:me(e=>typeof e=="boolean"?e:void 0)(n),number:me(e=>typeof e=="number"?e:void 0)(n),string:me(e=>typeof e=="string"?e:void 0)(n),function:me(e=>typeof e=="function"?e:void 0)(n),constant:e=>me(t=>t===e?e:void 0)(n),raw:me(e=>e)(n),object:e=>me(t=>{if(pe(t))return ie(t,e)})(n),array:e=>me(t=>{if(Array.isArray(t))return _e(t,e)})(n)}}const ye={optional:Ae(!0),required:Ae(!1)};function Te(n,e){const t=ye.required.object(e)(n);return t.succeeded?t.value:void 0}function Ue(n){console.warn([`Missing '${n.key}' of ${n.target} in ${n.place}.`,"Please rebuild plugins with the latest core package."].join(" "))}function M(n){return n&&n.parentElement&&n.parentElement.removeChild(n),null}class K{constructor(e){this.value_=e}static create(e){return[new K(e),(t,s)=>{e.setRawValue(t,s)}]}get emitter(){return this.value_.emitter}get rawValue(){return this.value_.rawValue}}const x=Z("");function i(n,e){return te(n,x(void 0,e))}class f extends se{constructor(e){var t;super(e),this.onDisabledChange_=this.onDisabledChange_.bind(this),this.onParentChange_=this.onParentChange_.bind(this),this.onParentGlobalDisabledChange_=this.onParentGlobalDisabledChange_.bind(this),[this.globalDisabled_,this.setGlobalDisabled_]=K.create(le(this.getGlobalDisabled_())),this.value("disabled").emitter.on("change",this.onDisabledChange_),this.value("parent").emitter.on("change",this.onParentChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_)}static create(e){var t,s,u;const S=e??{};return new f(se.createCore({disabled:(t=S.disabled)!==null&&t!==void 0?t:!1,disposed:!1,hidden:(s=S.hidden)!==null&&s!==void 0?s:!1,parent:(u=S.parent)!==null&&u!==void 0?u:null}))}get globalDisabled(){return this.globalDisabled_}bindClassModifiers(e){ue(this.globalDisabled_,i(e,"disabled")),ne(this,"hidden",i(e,"hidden"))}bindDisabled(e){ue(this.globalDisabled_,t=>{e.disabled=t})}bindTabIndex(e){ue(this.globalDisabled_,t=>{e.tabIndex=t?-1:0})}handleDispose(e){this.value("disposed").emitter.on("change",t=>{t&&e()})}getGlobalDisabled_(){const e=this.get("parent");return(e?e.globalDisabled.rawValue:!1)||this.get("disabled")}updateGlobalDisabled_(){this.setGlobalDisabled_(this.getGlobalDisabled_())}onDisabledChange_(){this.updateGlobalDisabled_()}onParentGlobalDisabledChange_(){this.updateGlobalDisabled_()}onParentChange_(e){var t;const s=e.previousRawValue;s==null||s.globalDisabled.emitter.off("change",this.onParentGlobalDisabledChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_),this.updateGlobalDisabled_()}}function p(){return["veryfirst","first","last","verylast"]}const b=Z(""),w={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class C{constructor(e){this.parent_=null,this.blade=e.blade,this.view=e.view,this.viewProps=e.viewProps;const t=this.view.element;this.blade.value("positions").emitter.on("change",()=>{p().forEach(s=>{t.classList.remove(b(void 0,w[s]))}),this.blade.get("positions").forEach(s=>{t.classList.add(b(void 0,w[s]))})}),this.viewProps.handleDispose(()=>{M(t)})}get parent(){return this.parent_}set parent(e){if(this.parent_=e,!("parent"in this.viewProps.valMap_)){Ue({key:"parent",target:f.name,place:"BladeController.parent"});return}this.viewProps.set("parent",this.parent_?this.parent_.viewProps:null)}}const k="http://www.w3.org/2000/svg";function r(n){n.offsetHeight}function _(n,e){const t=n.style.transition;n.style.transition="none",e(),n.style.transition=t}function c(n){return n.ontouchstart!==void 0}function d(){return globalThis}function l(){return d().document}function m(n){const e=n.ownerDocument.defaultView;return e&&"document"in e?n.getContext("2d",{willReadFrequently:!0}):null}const y={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function v(n,e){const t=n.createElementNS(k,"svg");return t.innerHTML=y[e],t}function B(n,e,t){n.insertBefore(e,n.children[t])}function V(n){n.parentElement&&n.parentElement.removeChild(n)}function j(n){for(;n.children.length>0;)n.removeChild(n.children[0])}function re(n){for(;n.childNodes.length>0;)n.removeChild(n.childNodes[0])}function Q(n){return n.relatedTarget?n.relatedTarget:"explicitOriginalTarget"in n?n.explicitOriginalTarget:null}const J=Z("lbl");function ce(n,e){const t=n.createDocumentFragment();return e.split(`
`).map(u=>n.createTextNode(u)).forEach((u,S)=>{S>0&&t.appendChild(n.createElement("br")),t.appendChild(u)}),t}class we{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(J()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(J("l")),ne(t.props,"label",S=>{W(S)?this.element.classList.add(J(void 0,"nol")):(this.element.classList.remove(J(void 0,"nol")),re(s),s.appendChild(ce(e,S)))}),this.element.appendChild(s),this.labelElement=s;const u=e.createElement("div");u.classList.add(J("v")),this.element.appendChild(u),this.valueElement=u}}class de extends C{constructor(e,t){const s=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{view:new we(e,{props:t.props,viewProps:s}),viewProps:s})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}const be={id:"button",type:"blade",accept(n){const e=ye,t=Te(n,{title:e.required.string,view:e.required.constant("button"),label:e.optional.string});return t?{params:t}:null},controller(n){return new de(n.document,{blade:n.blade,props:se.fromObject({label:n.params.label}),valueController:new Me(n.document,{props:se.fromObject({title:n.params.title}),viewProps:n.viewProps})})},api(n){return!(n.controller instanceof de)||!(n.controller.valueController instanceof Me)?null:new Y(n.controller)}};class xe extends C{constructor(e){super(e),this.value=e.value}}function ke(){return new se({positions:le([],{equals:H})})}class $e extends se{constructor(e){super(e)}static create(e){const t={completed:!0,expanded:e,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},s=se.createCore(t);return new $e(s)}get styleExpanded(){var e;return(e=this.get("temporaryExpanded"))!==null&&e!==void 0?e:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const e=this.get("expandedHeight");return this.get("shouldFixHeight")&&!W(e)?`${e}px`:"auto"}bindExpandedClass(e,t){const s=()=>{this.styleExpanded?e.classList.add(t):e.classList.remove(t)};ne(this,"expanded",s),ne(this,"temporaryExpanded",s)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function Xe(n,e){let t=0;return _(e,()=>{n.set("expandedHeight",null),n.set("temporaryExpanded",!0),r(e),t=e.clientHeight,n.set("temporaryExpanded",null),r(e)}),t}function Ke(n,e){e.style.height=n.styleHeight}function ze(n,e){n.value("expanded").emitter.on("beforechange",()=>{if(n.set("completed",!1),W(n.get("expandedHeight"))){const t=Xe(n,e);t>0&&n.set("expandedHeight",t)}n.set("shouldFixHeight",!0),r(e)}),n.emitter.on("change",()=>{Ke(n,e)}),Ke(n,e),e.addEventListener("transitionend",t=>{t.propertyName==="height"&&n.cleanUpTransition()})}class Qe extends g{constructor(e,t){super(e),this.rackApi_=t}}function rt(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"button"}))}function it(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"folder"}))}function Je(n,e){const t=e??{};return n.addBlade(Object.assign(Object.assign({},t),{view:"separator"}))}function tt(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"tab"}))}class nt{constructor(e){this.emitter=new L,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=e}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(e){for(const t of this.allItems())if(e(t))return t;return null}includes(e){return this.cache_.has(e)}add(e,t){if(this.includes(e))throw F.shouldNeverHappen();const s=t!==void 0?t:this.items_.length;this.items_.splice(s,0,e),this.cache_.add(e);const u=this.extract_(e);u&&(u.emitter.on("add",this.onSubListAdd_),u.emitter.on("remove",this.onSubListRemove_),u.allItems().forEach(S=>{this.cache_.add(S)})),this.emitter.emit("add",{index:s,item:e,root:this,target:this})}remove(e){const t=this.items_.indexOf(e);if(t<0)return;this.items_.splice(t,1),this.cache_.delete(e);const s=this.extract_(e);s&&(s.emitter.off("add",this.onSubListAdd_),s.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:t,item:e,root:this,target:this})}onSubListAdd_(e){this.cache_.add(e.item),this.emitter.emit("add",{index:e.index,item:e.item,root:this,target:e.target})}onSubListRemove_(e){this.cache_.delete(e.item),this.emitter.emit("remove",{index:e.index,item:e.item,root:this,target:e.target})}}class He extends g{constructor(e){super(e),this.onBindingChange_=this.onBindingChange_.bind(this),this.emitter_=new L,this.controller_.binding.emitter.on("change",this.onBindingChange_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,u=>{s(u.event)}),this}refresh(){this.controller_.binding.read()}onBindingChange_(e){const t=e.sender.target.read();this.emitter_.emit("change",{event:new T(this,t,this.controller_.binding.target.presetKey,e.options.last)})}}class qe extends de{constructor(e,t){super(e,t),this.binding=t.binding}}class ot extends g{constructor(e){super(e),this.onBindingUpdate_=this.onBindingUpdate_.bind(this),this.emitter_=new L,this.controller_.binding.emitter.on("update",this.onBindingUpdate_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,u=>{s(u.event)}),this}refresh(){this.controller_.binding.read()}onBindingUpdate_(e){const t=e.sender.target.read();this.emitter_.emit("update",{event:new $(this,t,this.controller_.binding.target.presetKey)})}}class Ye extends de{constructor(e,t){super(e,t),this.binding=t.binding,this.viewProps.bindDisabled(this.binding.ticker),this.viewProps.handleDispose(()=>{this.binding.dispose()})}}function ut(n){return n instanceof xt?n.apiSet_:n instanceof Qe?n.rackApi_.apiSet_:null}function st(n,e){const t=n.find(s=>s.controller_===e);if(!t)throw F.shouldNeverHappen();return t}function Bt(n,e,t){if(!D.isBindable(n))throw F.notBindable();return new D(n,e,t)}class xt extends g{constructor(e,t){super(e),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.onRackInputChange_=this.onRackInputChange_.bind(this),this.onRackMonitorUpdate_=this.onRackMonitorUpdate_.bind(this),this.emitter_=new L,this.apiSet_=new nt(ut),this.pool_=t;const s=this.controller_.rack;s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),s.emitter.on("inputchange",this.onRackInputChange_),s.emitter.on("monitorupdate",this.onRackMonitorUpdate_),s.children.forEach(u=>{this.setUpApi_(u)})}get children(){return this.controller_.rack.children.map(e=>st(this.apiSet_,e))}addInput(e,t,s){const u=s??{},S=this.controller_.view.element.ownerDocument,A=this.pool_.createInput(S,Bt(e,t,u.presetKey),u),ee=new He(A);return this.add(ee,u.index)}addMonitor(e,t,s){const u=s??{},S=this.controller_.view.element.ownerDocument,A=this.pool_.createMonitor(S,Bt(e,t),u),ee=new ot(A);return this.add(ee,u.index)}addFolder(e){return it(this,e)}addButton(e){return rt(this,e)}addSeparator(e){return Je(this,e)}addTab(e){return tt(this,e)}add(e,t){this.controller_.rack.add(e.controller_,t);const s=this.apiSet_.find(u=>u.controller_===e.controller_);return s&&this.apiSet_.remove(s),this.apiSet_.add(e),e}remove(e){this.controller_.rack.remove(e.controller_)}addBlade(e){const t=this.controller_.view.element.ownerDocument,s=this.pool_.createBlade(t,e),u=this.pool_.createBladeApi(s);return this.add(u,e.index)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,u=>{s(u.event)}),this}setUpApi_(e){this.apiSet_.find(s=>s.controller_===e)||this.apiSet_.add(this.pool_.createBladeApi(e))}onRackAdd_(e){this.setUpApi_(e.bladeController)}onRackRemove_(e){if(e.isRoot){const t=st(this.apiSet_,e.bladeController);this.apiSet_.remove(t)}}onRackInputChange_(e){const t=e.bladeController;if(t instanceof qe){const s=st(this.apiSet_,t),u=t.binding;this.emitter_.emit("change",{event:new T(s,u.target.read(),u.target.presetKey,e.options.last)})}else if(t instanceof xe){const s=st(this.apiSet_,t);this.emitter_.emit("change",{event:new T(s,t.value.rawValue,void 0,e.options.last)})}}onRackMonitorUpdate_(e){if(!(e.bladeController instanceof Ye))throw F.shouldNeverHappen();const t=st(this.apiSet_,e.bladeController),s=e.bladeController.binding;this.emitter_.emit("update",{event:new $(t,s.target.read(),s.target.presetKey)})}}class Et extends Qe{constructor(e,t){super(e,new xt(e.rackController,t)),this.emitter_=new L,this.controller_.foldable.value("expanded").emitter.on("change",s=>{this.emitter_.emit("fold",{event:new I(this,s.sender.rawValue)})}),this.rackApi_.on("change",s=>{this.emitter_.emit("change",{event:s})}),this.rackApi_.on("update",s=>{this.emitter_.emit("update",{event:s})})}get expanded(){return this.controller_.foldable.get("expanded")}set expanded(e){this.controller_.foldable.set("expanded",e)}get title(){return this.controller_.props.get("title")}set title(e){this.controller_.props.set("title",e)}get children(){return this.rackApi_.children}addInput(e,t,s){return this.rackApi_.addInput(e,t,s)}addMonitor(e,t,s){return this.rackApi_.addMonitor(e,t,s)}addFolder(e){return this.rackApi_.addFolder(e)}addButton(e){return this.rackApi_.addButton(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){return this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addBlade(e){return this.rackApi_.addBlade(e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,u=>{s(u.event)}),this}}class gt extends C{constructor(e){super({blade:e.blade,view:e.view,viewProps:e.rackController.viewProps}),this.rackController=e.rackController}}class Dt{constructor(e,t){const s=Z(t.viewName);this.element=e.createElement("div"),this.element.classList.add(s()),t.viewProps.bindClassModifiers(this.element)}}function Ut(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof qe&&s.binding===e)return s}return null}function wt(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof Ye&&s.binding===e)return s}return null}function Ht(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof xe&&s.value===e)return s}return null}function Vt(n){return n instanceof je?n.rack:n instanceof gt?n.rackController.rack:null}function cn(n){const e=Vt(n);return e?e.bcSet_:null}class Yt{constructor(e){var t,s;this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildInputChange_=this.onChildInputChange_.bind(this),this.onChildMonitorUpdate_=this.onChildMonitorUpdate_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onDescendantLayout_=this.onDescendantLayout_.bind(this),this.onDescendantInputChange_=this.onDescendantInputChange_.bind(this),this.onDescendantMonitorUpdate_=this.onDescendantMonitorUpdate_.bind(this),this.emitter=new L,this.blade_=(t=e.blade)!==null&&t!==void 0?t:null,(s=this.blade_)===null||s===void 0||s.value("positions").emitter.on("change",this.onBladePositionsChange_),this.viewProps=e.viewProps,this.bcSet_=new nt(cn),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(e,t){var s;(s=e.parent)===null||s===void 0||s.remove(e),R(e,"parent")?e.parent=this:(e.parent_=this,Ue({key:"parent",target:"BladeController",place:"BladeRack.add"})),this.bcSet_.add(e,t)}remove(e){R(e,"parent")?e.parent=null:(e.parent_=null,Ue({key:"parent",target:"BladeController",place:"BladeRack.remove"})),this.bcSet_.remove(e)}find(e){return this.bcSet_.allItems().filter(t=>t instanceof e)}onSetAdd_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("add",{bladeController:e.item,index:e.index,isRoot:t,sender:this}),!t)return;const s=e.item;if(s.viewProps.emitter.on("change",this.onChildViewPropsChange_),s.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),s.viewProps.handleDispose(this.onChildDispose_),s instanceof qe)s.binding.emitter.on("change",this.onChildInputChange_);else if(s instanceof Ye)s.binding.emitter.on("update",this.onChildMonitorUpdate_);else if(s instanceof xe)s.value.emitter.on("change",this.onChildValueChange_);else{const u=Vt(s);if(u){const S=u.emitter;S.on("layout",this.onDescendantLayout_),S.on("inputchange",this.onDescendantInputChange_),S.on("monitorupdate",this.onDescendantMonitorUpdate_)}}}onSetRemove_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("remove",{bladeController:e.item,isRoot:t,sender:this}),!t)return;const s=e.item;if(s instanceof qe)s.binding.emitter.off("change",this.onChildInputChange_);else if(s instanceof Ye)s.binding.emitter.off("update",this.onChildMonitorUpdate_);else if(s instanceof xe)s.value.emitter.off("change",this.onChildValueChange_);else{const u=Vt(s);if(u){const S=u.emitter;S.off("layout",this.onDescendantLayout_),S.off("inputchange",this.onDescendantInputChange_),S.off("monitorupdate",this.onDescendantMonitorUpdate_)}}}updatePositions_(){const e=this.bcSet_.items.filter(u=>!u.viewProps.get("hidden")),t=e[0],s=e[e.length-1];this.bcSet_.items.forEach(u=>{const S=[];u===t&&(S.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&S.push("veryfirst")),u===s&&(S.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&S.push("verylast")),u.blade.set("positions",S)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(t=>t.viewProps.get("disposed")).forEach(t=>{this.bcSet_.remove(t)})}onChildInputChange_(e){const t=Ut(this.find(qe),e.sender);if(!t)throw F.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onChildMonitorUpdate_(e){const t=wt(this.find(Ye),e.sender);if(!t)throw F.alreadyDisposed();this.emitter.emit("monitorupdate",{bladeController:t,sender:this})}onChildValueChange_(e){const t=Ht(this.find(xe),e.sender);if(!t)throw F.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onDescendantLayout_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onDescendantInputChange_(e){this.emitter.emit("inputchange",{bladeController:e.bladeController,options:e.options,sender:this})}onDescendantMonitorUpdate_(e){this.emitter.emit("monitorupdate",{bladeController:e.bladeController,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class je extends C{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new Dt(e,{viewName:"brk",viewProps:t.viewProps})})),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const s=new Yt({blade:t.root?void 0:t.blade,viewProps:t.viewProps});s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),this.rack=s,this.viewProps.handleDispose(()=>{for(let u=this.rack.children.length-1;u>=0;u--)this.rack.children[u].viewProps.set("disposed",!0)})}onRackAdd_(e){e.isRoot&&B(this.view.element,e.bladeController.view.element,e.index)}onRackRemove_(e){e.isRoot&&V(e.bladeController.view.element)}}const vn=Z("cnt");class Rn{constructor(e,t){var s;this.className_=Z((s=t.viewName)!==null&&s!==void 0?s:"fld"),this.element=e.createElement("div"),this.element.classList.add(this.className_(),vn()),t.viewProps.bindClassModifiers(this.element),this.foldable_=t.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),ne(this.foldable_,"completed",te(this.element,this.className_(void 0,"cpl")));const u=e.createElement("button");u.classList.add(this.className_("b")),ne(t.props,"title",Ce=>{W(Ce)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),t.viewProps.bindDisabled(u),this.element.appendChild(u),this.buttonElement=u;const S=e.createElement("div");S.classList.add(this.className_("i")),this.element.appendChild(S);const A=e.createElement("div");A.classList.add(this.className_("t")),Oe(t.props.value("title"),A),this.buttonElement.appendChild(A),this.titleElement=A;const ee=e.createElement("div");ee.classList.add(this.className_("m")),this.buttonElement.appendChild(ee);const Ee=t.containerElement;Ee.classList.add(this.className_("c")),this.element.appendChild(Ee),this.containerElement=Ee}}class un extends gt{constructor(e,t){var s;const u=$e.create((s=t.expanded)!==null&&s!==void 0?s:!0),S=new je(e,{blade:t.blade,root:t.root,viewProps:t.viewProps});super(Object.assign(Object.assign({},t),{rackController:S,view:new Rn(e,{containerElement:S.view.element,foldable:u,props:t.props,viewName:t.root?"rot":void 0,viewProps:t.viewProps})})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=t.props,this.foldable=u,ze(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const Un={id:"folder",type:"blade",accept(n){const e=ye,t=Te(n,{title:e.required.string,view:e.required.constant("folder"),expanded:e.optional.boolean});return t?{params:t}:null},controller(n){return new un(n.document,{blade:n.blade,expanded:n.params.expanded,props:se.fromObject({title:n.params.title}),viewProps:n.viewProps})},api(n){return n.controller instanceof un?new Et(n.controller,n.pool):null}};class Tt extends xe{constructor(e,t){const s=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{value:t.valueController.value,view:new we(e,{props:t.props,viewProps:s}),viewProps:s})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}class gn extends g{}const Zt=Z("spr");class dn{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Zt()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("hr");s.classList.add(Zt("r")),this.element.appendChild(s)}}class X extends C{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new dn(e,{viewProps:t.viewProps})}))}}const he={id:"separator",type:"blade",accept(n){const t=Te(n,{view:ye.required.constant("separator")});return t?{params:t}:null},controller(n){return new X(n.document,{blade:n.blade,viewProps:n.viewProps})},api(n){return n.controller instanceof X?new gn(n.controller):null}},oe=Z("tbi");class Ie{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(oe()),t.viewProps.bindClassModifiers(this.element),ne(t.props,"selected",S=>{S?this.element.classList.add(oe(void 0,"sel")):this.element.classList.remove(oe(void 0,"sel"))});const s=e.createElement("button");s.classList.add(oe("b")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const u=e.createElement("div");u.classList.add(oe("t")),Oe(t.props.value("title"),u),this.buttonElement.appendChild(u),this.titleElement=u}}class Ve{constructor(e,t){this.emitter=new L,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new Ie(e,{props:t.props,viewProps:t.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class Se{constructor(e,t){this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new Ve(e,{props:t.itemProps,viewProps:f.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.cc_=new je(e,{blade:ke(),viewProps:f.create()}),this.props=t.props,ne(this.props,"selected",s=>{this.itemController.props.set("selected",s),this.contentController.viewProps.set("hidden",!s)})}get itemController(){return this.ic_}get contentController(){return this.cc_}onItemClick_(){this.props.set("selected",!0)}}class Be{constructor(e,t){this.controller_=e,this.rackApi_=t}get title(){var e;return(e=this.controller_.itemController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.itemController.props.set("title",e)}get selected(){return this.controller_.props.get("selected")}set selected(e){this.controller_.props.set("selected",e)}get children(){return this.rackApi_.children}addButton(e){return this.rackApi_.addButton(e)}addFolder(e){return this.rackApi_.addFolder(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addInput(e,t,s){return this.rackApi_.addInput(e,t,s)}addMonitor(e,t,s){return this.rackApi_.addMonitor(e,t,s)}addBlade(e){return this.rackApi_.addBlade(e)}}class We extends Qe{constructor(e,t){super(e,new xt(e.rackController,t)),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.onSelect_=this.onSelect_.bind(this),this.emitter_=new L,this.pageApiMap_=new Map,this.rackApi_.on("change",s=>{this.emitter_.emit("change",{event:s})}),this.rackApi_.on("update",s=>{this.emitter_.emit("update",{event:s})}),this.controller_.tab.selectedIndex.emitter.on("change",this.onSelect_),this.controller_.pageSet.emitter.on("add",this.onPageAdd_),this.controller_.pageSet.emitter.on("remove",this.onPageRemove_),this.controller_.pageSet.items.forEach(s=>{this.setUpPageApi_(s)})}get pages(){return this.controller_.pageSet.items.map(e=>{const t=this.pageApiMap_.get(e);if(!t)throw F.shouldNeverHappen();return t})}addPage(e){const t=this.controller_.view.element.ownerDocument,s=new Se(t,{itemProps:se.fromObject({selected:!1,title:e.title}),props:se.fromObject({selected:!1})});this.controller_.add(s,e.index);const u=this.pageApiMap_.get(s);if(!u)throw F.shouldNeverHappen();return u}removePage(e){this.controller_.remove(e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,u=>{s(u.event)}),this}setUpPageApi_(e){const t=this.rackApi_.apiSet_.find(u=>u.controller_===e.contentController);if(!t)throw F.shouldNeverHappen();const s=new Be(e,t);this.pageApiMap_.set(e,s)}onPageAdd_(e){this.setUpPageApi_(e.item)}onPageRemove_(e){if(!this.pageApiMap_.get(e.item))throw F.shouldNeverHappen();this.pageApiMap_.delete(e.item)}onSelect_(e){this.emitter_.emit("select",{event:new O(this,e.rawValue)})}}const Ze=-1;class lt{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=le(!0),this.selectedIndex=le(Ze),this.items_=[]}add(e,t){const s=t??this.items_.length;this.items_.splice(s,0,e),e.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(e){const t=this.items_.indexOf(e);t<0||(this.items_.splice(t,1),e.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=Ze,this.empty.rawValue=!0;return}const e=this.items_.findIndex(t=>t.rawValue);e<0?(this.items_.forEach((t,s)=>{t.rawValue=s===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((t,s)=>{t.rawValue=s===e}),this.selectedIndex.rawValue=e),this.empty.rawValue=!1}onItemSelectedChange_(e){if(e.rawValue){const t=this.items_.findIndex(s=>s===e.sender);this.items_.forEach((s,u)=>{s.rawValue=u===t}),this.selectedIndex.rawValue=t}else this.keepSelection_()}}const pt=Z("tab");class os{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(pt(),vn()),t.viewProps.bindClassModifiers(this.element),ue(t.empty,te(this.element,pt(void 0,"nop")));const s=e.createElement("div");s.classList.add(pt("t")),this.element.appendChild(s),this.itemsElement=s;const u=e.createElement("div");u.classList.add(pt("i")),this.element.appendChild(u);const S=t.contentsElement;S.classList.add(pt("c")),this.element.appendChild(S),this.contentsElement=S}}class wn extends gt{constructor(e,t){const s=new je(e,{blade:t.blade,viewProps:t.viewProps}),u=new lt;super({blade:t.blade,rackController:s,view:new os(e,{contentsElement:s.view.element,empty:u.empty,viewProps:t.viewProps})}),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.pageSet_=new nt(()=>null),this.pageSet_.emitter.on("add",this.onPageAdd_),this.pageSet_.emitter.on("remove",this.onPageRemove_),this.tab=u}get pageSet(){return this.pageSet_}add(e,t){this.pageSet_.add(e,t)}remove(e){this.pageSet_.remove(this.pageSet_.items[e])}onPageAdd_(e){const t=e.item;B(this.view.itemsElement,t.itemController.view.element,e.index),t.itemController.viewProps.set("parent",this.viewProps),this.rackController.rack.add(t.contentController,e.index),this.tab.add(t.props.value("selected"))}onPageRemove_(e){const t=e.item;V(t.itemController.view.element),t.itemController.viewProps.set("parent",null),this.rackController.rack.remove(t.contentController),this.tab.remove(t.props.value("selected"))}}const xn={id:"tab",type:"blade",accept(n){const e=ye,t=Te(n,{pages:e.required.array(e.required.object({title:e.required.string})),view:e.required.constant("tab")});return!t||t.pages.length===0?null:{params:t}},controller(n){const e=new wn(n.document,{blade:n.blade,viewProps:n.viewProps});return n.params.pages.forEach(t=>{const s=new Se(n.document,{itemProps:se.fromObject({selected:!1,title:t.title}),props:se.fromObject({selected:!1})});e.add(s)}),e},api(n){return n.controller instanceof wn?new We(n.controller,n.pool):null}};function as(n,e){const t=n.accept(e.params);if(!t)return null;const s=ye.optional.boolean(e.params.disabled).value,u=ye.optional.boolean(e.params.hidden).value;return n.controller({blade:ke(),document:e.document,params:Object.assign(Object.assign({},t.params),{disabled:s,hidden:u}),viewProps:f.create({disabled:s,hidden:u})})}class Vn{constructor(){this.disabled=!1,this.emitter=new L}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class ls{constructor(e,t){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=e,this.emitter=new L,this.interval_=t,this.setTimer_()}get disabled(){return this.disabled_}set disabled(e){this.disabled_=e,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const e=this.doc_.defaultView;e&&e.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const e=this.doc_.defaultView;e&&(this.timerId_=e.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class cs{constructor(e){this.onValueChange_=this.onValueChange_.bind(this),this.reader=e.reader,this.writer=e.writer,this.emitter=new L,this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.target=e.target,this.read()}read(){const e=this.target.read();e!==void 0&&(this.value.rawValue=this.reader(e))}write_(e){this.writer(this.target,e)}onValueChange_(e){this.write_(e.rawValue),this.emitter.emit("change",{options:e.options,rawValue:e.rawValue,sender:this})}}function yn(n,e){for(;n.length<e;)n.push(void 0)}function us(n){const e=[];return yn(e,n),le(e)}function On(n){const e=n.indexOf(void 0);return e<0?n:n.slice(0,e)}function mt(n,e){const t=[...On(n),e];return t.length>n.length?t.splice(0,t.length-n.length):yn(t,n.length),t}class Xt{constructor(e){this.onTick_=this.onTick_.bind(this),this.reader_=e.reader,this.target=e.target,this.emitter=new L,this.value=e.value,this.ticker=e.ticker,this.ticker.emitter.on("tick",this.onTick_),this.read()}dispose(){this.ticker.dispose()}read(){const e=this.target.read();if(e===void 0)return;const t=this.value.rawValue,s=this.reader_(e);this.value.rawValue=mt(t,s),this.emitter.emit("update",{rawValue:s,sender:this})}onTick_(e){this.read()}}class Mt{constructor(e){this.constraints=e}constrain(e){return this.constraints.reduce((t,s)=>s.constrain(t),e)}}function ht(n,e){if(n instanceof e)return n;if(n instanceof Mt){const t=n.constraints.reduce((s,u)=>s||(u instanceof e?u:null),null);if(t)return t}return null}class Ct{constructor(e){this.values=se.fromObject({max:e.max,min:e.min})}constrain(e){const t=this.values.get("max"),s=this.values.get("min");return Math.min(Math.max(e,s),t)}}class At{constructor(e){this.values=se.fromObject({options:e})}get options(){return this.values.get("options")}constrain(e){const t=this.values.get("options");return t.length===0||t.filter(u=>u.value===e).length>0?e:t[0].value}}class Fn{constructor(e){this.values=se.fromObject({max:e.max,min:e.min})}get maxValue(){return this.values.get("max")}get minValue(){return this.values.get("min")}constrain(e){const t=this.values.get("max"),s=this.values.get("min");let u=e;return W(s)||(u=Math.max(u,s)),W(t)||(u=Math.min(u,t)),u}}class Ot{constructor(e,t=0){this.step=e,this.origin=t}constrain(e){const t=this.origin%this.step,s=Math.round((e-t)/this.step);return t+s*this.step}}const ds=Z("lst");class Mi{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.props_=t.props,this.element=e.createElement("div"),this.element.classList.add(ds()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("select");s.classList.add(ds("s")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.selectElement=s;const u=e.createElement("div");u.classList.add(ds("m")),u.appendChild(v(e,"dropdown")),this.element.appendChild(u),t.value.emitter.on("change",this.onValueChange_),this.value_=t.value,ne(this.props_,"options",S=>{j(this.selectElement),S.forEach(A=>{const ee=e.createElement("option");ee.textContent=A.text,this.selectElement.appendChild(ee)}),this.update_()})}update_(){const e=this.props_.get("options").map(t=>t.value);this.selectElement.selectedIndex=e.indexOf(this.value_.rawValue)}onValueChange_(){this.update_()}}class Pn{constructor(e,t){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new Mi(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(e){const t=e.currentTarget;this.value.rawValue=this.props.get("options")[t.selectedIndex].value}}const qs=Z("pop");class Ai{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(qs()),t.viewProps.bindClassModifiers(this.element),ue(t.shows,te(this.element,qs(void 0,"v")))}}class js{constructor(e,t){this.shows=le(!1),this.viewProps=t.viewProps,this.view=new Ai(e,{shows:this.shows,viewProps:this.viewProps})}}const Ks=Z("txt");class Di{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Ks()),t.viewProps.bindClassModifiers(this.element),this.props_=t.props,this.props_.emitter.on("change",this.onChange_);const s=e.createElement("input");s.classList.add(Ks("i")),s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,t.value.emitter.on("change",this.onChange_),this.value_=t.value,this.refresh()}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value_.rawValue)}onChange_(){this.refresh()}}class Nn{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=t.parser,this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new Di(e,{props:t.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const s=e.currentTarget.value,u=this.parser_(s);W(u)||(this.value.rawValue=u),this.view.refresh()}}function Gi(n){return String(n)}function Hs(n){return n==="false"?!1:!!n}function Ys(n){return Gi(n)}class zi{constructor(e){this.text=e}evaluate(){return Number(this.text)}toString(){return this.text}}const Li={"**":(n,e)=>Math.pow(n,e),"*":(n,e)=>n*e,"/":(n,e)=>n/e,"%":(n,e)=>n%e,"+":(n,e)=>n+e,"-":(n,e)=>n-e,"<<":(n,e)=>n<<e,">>":(n,e)=>n>>e,">>>":(n,e)=>n>>>e,"&":(n,e)=>n&e,"^":(n,e)=>n^e,"|":(n,e)=>n|e};class Ii{constructor(e,t,s){this.left=t,this.operator=e,this.right=s}evaluate(){const e=Li[this.operator];if(!e)throw new Error(`unexpected binary operator: '${this.operator}`);return e(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const Ri={"+":n=>n,"-":n=>-n,"~":n=>~n};class Ui{constructor(e,t){this.operator=e,this.expression=t}evaluate(){const e=Ri[this.operator];if(!e)throw new Error(`unexpected unary operator: '${this.operator}`);return e(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function ps(n){return(e,t)=>{for(let s=0;s<n.length;s++){const u=n[s](e,t);if(u!=="")return u}return""}}function Sn(n,e){var t;const s=n.substr(e).match(/^\s+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Vi(n,e){const t=n.substr(e,1);return t.match(/^[1-9]$/)?t:""}function En(n,e){var t;const s=n.substr(e).match(/^[0-9]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Oi(n,e){const t=En(n,e);if(t!=="")return t;const s=n.substr(e,1);if(e+=1,s!=="-"&&s!=="+")return"";const u=En(n,e);return u===""?"":s+u}function hs(n,e){const t=n.substr(e,1);if(e+=1,t.toLowerCase()!=="e")return"";const s=Oi(n,e);return s===""?"":t+s}function Zs(n,e){const t=n.substr(e,1);if(t==="0")return t;const s=Vi(n,e);return e+=s.length,s===""?"":s+En(n,e)}function Fi(n,e){const t=Zs(n,e);if(e+=t.length,t==="")return"";const s=n.substr(e,1);if(e+=s.length,s!==".")return"";const u=En(n,e);return e+=u.length,t+s+u+hs(n,e)}function Ni(n,e){const t=n.substr(e,1);if(e+=t.length,t!==".")return"";const s=En(n,e);return e+=s.length,s===""?"":t+s+hs(n,e)}function $i(n,e){const t=Zs(n,e);return e+=t.length,t===""?"":t+hs(n,e)}const Wi=ps([Fi,Ni,$i]);function qi(n,e){var t;const s=n.substr(e).match(/^[01]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function ji(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0b")return"";const s=qi(n,e);return s===""?"":t+s}function Ki(n,e){var t;const s=n.substr(e).match(/^[0-7]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Hi(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0o")return"";const s=Ki(n,e);return s===""?"":t+s}function Yi(n,e){var t;const s=n.substr(e).match(/^[0-9a-f]+/i);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Zi(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0x")return"";const s=Yi(n,e);return s===""?"":t+s}const Xi=ps([ji,Hi,Zi]),Qi=ps([Xi,Wi]);function Ji(n,e){const t=Qi(n,e);return e+=t.length,t===""?null:{evaluable:new zi(t),cursor:e}}function eo(n,e){const t=n.substr(e,1);if(e+=t.length,t!=="(")return null;const s=Qs(n,e);if(!s)return null;e=s.cursor,e+=Sn(n,e).length;const u=n.substr(e,1);return e+=u.length,u!==")"?null:{evaluable:s.evaluable,cursor:e}}function to(n,e){var t;return(t=Ji(n,e))!==null&&t!==void 0?t:eo(n,e)}function Xs(n,e){const t=to(n,e);if(t)return t;const s=n.substr(e,1);if(e+=s.length,s!=="+"&&s!=="-"&&s!=="~")return null;const u=Xs(n,e);return u?(e=u.cursor,{cursor:e,evaluable:new Ui(s,u.evaluable)}):null}function no(n,e,t){t+=Sn(e,t).length;const s=n.filter(u=>e.startsWith(u,t))[0];return s?(t+=s.length,t+=Sn(e,t).length,{cursor:t,operator:s}):null}function so(n,e){return(t,s)=>{const u=n(t,s);if(!u)return null;s=u.cursor;let S=u.evaluable;for(;;){const A=no(e,t,s);if(!A)break;s=A.cursor;const ee=n(t,s);if(!ee)return null;s=ee.cursor,S=new Ii(A.operator,S,ee.evaluable)}return S?{cursor:s,evaluable:S}:null}}const ro=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((n,e)=>so(n,e),Xs);function Qs(n,e){return e+=Sn(n,e).length,ro(n,e)}function io(n){const e=Qs(n,0);return!e||e.cursor+Sn(n,e.cursor).length!==n.length?null:e.evaluable}function Gt(n){var e;const t=io(n);return(e=t==null?void 0:t.evaluate())!==null&&e!==void 0?e:null}function Js(n){if(typeof n=="number")return n;if(typeof n=="string"){const e=Gt(n);if(!W(e))return e}return 0}function oo(n){return String(n)}function ft(n){return e=>e.toFixed(Math.max(Math.min(n,20),0))}const ao=ft(0);function $n(n){return ao(n)+"%"}function er(n){return String(n)}function fs(n){return n}function Cn({primary:n,secondary:e,forward:t,backward:s}){let u=!1;function S(A){u||(u=!0,A(),u=!1)}n.emitter.on("change",A=>{S(()=>{e.setRawValue(t(n,e),A.options)})}),e.emitter.on("change",A=>{S(()=>{n.setRawValue(s(n,e),A.options)}),S(()=>{e.setRawValue(t(n,e),A.options)})}),S(()=>{e.setRawValue(t(n,e),{forceEmit:!1,last:!0})})}function bt(n,e){const t=n*(e.altKey?.1:1)*(e.shiftKey?10:1);return e.upKey?+t:e.downKey?-t:0}function kn(n){return{altKey:n.altKey,downKey:n.key==="ArrowDown",shiftKey:n.shiftKey,upKey:n.key==="ArrowUp"}}function zt(n){return{altKey:n.altKey,downKey:n.key==="ArrowLeft",shiftKey:n.shiftKey,upKey:n.key==="ArrowRight"}}function lo(n){return n==="ArrowUp"||n==="ArrowDown"}function tr(n){return lo(n)||n==="ArrowLeft"||n==="ArrowRight"}function _s(n,e){var t,s;const u=e.ownerDocument.defaultView,S=e.getBoundingClientRect();return{x:n.pageX-(((t=u&&u.scrollX)!==null&&t!==void 0?t:0)+S.left),y:n.pageY-(((s=u&&u.scrollY)!==null&&s!==void 0?s:0)+S.top)}}class Qt{constructor(e){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=e,this.emitter=new L,e.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),e.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),e.addEventListener("touchend",this.onTouchEnd_),e.addEventListener("mousedown",this.onMouseDown_)}computePosition_(e){const t=this.elem_.getBoundingClientRect();return{bounds:{width:t.width,height:t.height},point:e?{x:e.x,y:e.y}:null}}onMouseDown_(e){var t;e.preventDefault(),(t=e.currentTarget)===null||t===void 0||t.focus();const s=this.elem_.ownerDocument;s.addEventListener("mousemove",this.onDocumentMouseMove_),s.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(_s(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseMove_(e){this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(_s(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseUp_(e){const t=this.elem_.ownerDocument;t.removeEventListener("mousemove",this.onDocumentMouseMove_),t.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(_s(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onTouchStart_(e){e.preventDefault();const t=e.targetTouches.item(0),s=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-s.left,y:t.clientY-s.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchMove_(e){const t=e.targetTouches.item(0),s=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-s.left,y:t.clientY-s.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchEnd_(e){var t;const s=(t=e.targetTouches.item(0))!==null&&t!==void 0?t:this.lastTouch_,u=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(s?{x:s.clientX-u.left,y:s.clientY-u.top}:void 0),sender:this,shiftKey:e.shiftKey})}}function et(n,e,t,s,u){const S=(n-e)/(t-e);return s+S*(u-s)}function nr(n){return String(n.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function ct(n,e,t){return Math.min(Math.max(n,e),t)}function sr(n,e){return(n%e+e)%e}const yt=Z("txt");class co{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(yt(),yt(void 0,"num")),t.arrayPosition&&this.element.classList.add(yt(void 0,t.arrayPosition)),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("input");s.classList.add(yt("i")),s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=t.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(yt()),this.inputElement.classList.add(yt("i"));const u=e.createElement("div");u.classList.add(yt("k")),this.element.appendChild(u),this.knobElement=u;const S=e.createElementNS(k,"svg");S.classList.add(yt("g")),this.knobElement.appendChild(S);const A=e.createElementNS(k,"path");A.classList.add(yt("gb")),S.appendChild(A),this.guideBodyElem_=A;const ee=e.createElementNS(k,"path");ee.classList.add(yt("gh")),S.appendChild(ee),this.guideHeadElem_=ee;const Ee=e.createElement("div");Ee.classList.add(Z("tt")()),this.knobElement.appendChild(Ee),this.tooltipElem_=Ee,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.refresh()}onDraggingChange_(e){if(e.rawValue===null){this.element.classList.remove(yt(void 0,"drg"));return}this.element.classList.add(yt(void 0,"drg"));const t=e.rawValue/this.props_.get("draggingScale"),s=t+(t>0?-1:t<0?1:0),u=ct(-s,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${s+u},0 L${s},4 L${s+u},8`,`M ${t},-1 L${t},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${t},4`);const S=this.props_.get("formatter");this.tooltipElem_.textContent=S(this.value.rawValue),this.tooltipElem_.style.left=`${t}px`}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value.rawValue)}onChange_(){this.refresh()}}class Bn{constructor(e,t){var s;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.parser_=t.parser,this.props=t.props,this.sliderProps_=(s=t.sliderProps)!==null&&s!==void 0?s:null,this.value=t.value,this.viewProps=t.viewProps,this.dragging_=le(null),this.view=new co(e,{arrayPosition:t.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const u=new Qt(this.view.knobElement);u.emitter.on("down",this.onPointerDown_),u.emitter.on("move",this.onPointerMove_),u.emitter.on("up",this.onPointerUp_)}constrainValue_(e){var t,s;const u=(t=this.sliderProps_)===null||t===void 0?void 0:t.get("minValue"),S=(s=this.sliderProps_)===null||s===void 0?void 0:s.get("maxValue");let A=e;return u!==void 0&&(A=Math.max(A,u)),S!==void 0&&(A=Math.min(A,S)),A}onInputChange_(e){const s=e.currentTarget.value,u=this.parser_(s);W(u)||(this.value.rawValue=this.constrainValue_(u)),this.view.refresh()}onInputKeyDown_(e){const t=bt(this.baseStep_,kn(e));t!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+t),{forceEmit:!1,last:!1})}onInputKeyUp_(e){bt(this.baseStep_,kn(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(e){if(!e.point)return null;const t=e.point.x-e.bounds.width/2;return this.constrainValue_(this.originRawValue_+t*this.props.get("draggingScale"))}onPointerMove_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const ms=Z("sld");class uo{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(ms()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(ms("t")),t.viewProps.bindTabIndex(s),this.element.appendChild(s),this.trackElement=s;const u=e.createElement("div");u.classList.add(ms("k")),this.trackElement.appendChild(u),this.knobElement=u,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.update_()}update_(){const e=ct(et(this.value.rawValue,this.props_.get("minValue"),this.props_.get("maxValue"),0,100),0,100);this.knobElement.style.width=`${e}%`}onChange_(){this.update_()}}class po{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.value=t.value,this.viewProps=t.viewProps,this.props=t.props,this.view=new uo(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Qt(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){e.point&&this.value.setRawValue(et(ct(e.point.x,0,e.bounds.width),0,e.bounds.width,this.props.get("minValue"),this.props.get("maxValue")),t)}onPointerDownOrMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=bt(this.baseStep_,zt(e));t!==0&&this.value.setRawValue(this.value.rawValue+t,{forceEmit:!1,last:!1})}onKeyUp_(e){bt(this.baseStep_,zt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const bs=Z("sldtxt");class ho{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(bs());const s=e.createElement("div");s.classList.add(bs("s")),this.sliderView_=t.sliderView,s.appendChild(this.sliderView_.element),this.element.appendChild(s);const u=e.createElement("div");u.classList.add(bs("t")),this.textView_=t.textView,u.appendChild(this.textView_.element),this.element.appendChild(u)}}class vs{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.sliderC_=new po(e,{baseStep:t.baseStep,props:t.sliderProps,value:t.value,viewProps:this.viewProps}),this.textC_=new Bn(e,{baseStep:t.baseStep,parser:t.parser,props:t.textProps,sliderProps:t.sliderProps,value:t.value,viewProps:t.viewProps}),this.view=new ho(e,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}}function Tn(n,e){n.write(e)}function Wn(n){const e=ye;if(Array.isArray(n))return e.required.array(e.required.object({text:e.required.string,value:e.required.raw}))(n).value;if(typeof n=="object")return e.required.raw(n).value}function rr(n){if(n==="inline"||n==="popup")return n}function Ft(n){const e=ye;return e.required.object({max:e.optional.number,min:e.optional.number,step:e.optional.number})(n).value}function ir(n){if(Array.isArray(n))return n;const e=[];return Object.keys(n).forEach(t=>{e.push({text:t,value:n[t]})}),e}function gs(n){return W(n)?null:new At(ir(n))}function fo(n){const e=n?ht(n,Ot):null;return e?e.step:null}function qn(n,e){const t=n&&ht(n,Ot);return t?nr(t.step):Math.max(nr(e),2)}function pn(n){const e=fo(n);return e??1}function hn(n,e){var t;const s=n&&ht(n,Ot),u=Math.abs((t=s==null?void 0:s.step)!==null&&t!==void 0?t:e);return u===0?.1:Math.pow(10,Math.floor(Math.log10(u))-1)}const jn=Z("ckb");class _o{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(jn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("label");s.classList.add(jn("l")),this.element.appendChild(s);const u=e.createElement("input");u.classList.add(jn("i")),u.type="checkbox",s.appendChild(u),this.inputElement=u,t.viewProps.bindDisabled(this.inputElement);const S=e.createElement("div");S.classList.add(jn("w")),s.appendChild(S);const A=v(e,"check");S.appendChild(A),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class mo{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new _o(e,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const t=e.currentTarget;this.value.rawValue=t.checked}}function bo(n){const e=[],t=gs(n.options);return t&&e.push(t),new Mt(e)}const vo={id:"input-bool",type:"input",accept:(n,e)=>{if(typeof n!="boolean")return null;const s=Te(e,{options:ye.optional.custom(Wn)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Hs,constraint:n=>bo(n.params),writer:n=>Tn},controller:n=>{const e=n.document,t=n.value,s=n.constraint,u=s&&ht(s,At);return u?new Pn(e,{props:new se({options:u.values.value("options")}),value:t,viewProps:n.viewProps}):new mo(e,{value:t,viewProps:n.viewProps})}},Jt=Z("col");class go{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Jt()),t.foldable.bindExpandedClass(this.element,Jt(void 0,"expanded")),ne(t.foldable,"completed",te(this.element,Jt(void 0,"cpl")));const s=e.createElement("div");s.classList.add(Jt("h")),this.element.appendChild(s);const u=e.createElement("div");u.classList.add(Jt("s")),s.appendChild(u),this.swatchElement=u;const S=e.createElement("div");if(S.classList.add(Jt("t")),s.appendChild(S),this.textElement=S,t.pickerLayout==="inline"){const A=e.createElement("div");A.classList.add(Jt("p")),this.element.appendChild(A),this.pickerElement=A}else this.pickerElement=null}}function wo(n,e,t){const s=ct(n/255,0,1),u=ct(e/255,0,1),S=ct(t/255,0,1),A=Math.max(s,u,S),ee=Math.min(s,u,S),Ee=A-ee;let Ce=0,Fe=0;const Ne=(ee+A)/2;return Ee!==0&&(Fe=Ee/(1-Math.abs(A+ee-1)),s===A?Ce=(u-S)/Ee:u===A?Ce=2+(S-s)/Ee:Ce=4+(s-u)/Ee,Ce=Ce/6+(Ce<0?1:0)),[Ce*360,Fe*100,Ne*100]}function xo(n,e,t){const s=(n%360+360)%360,u=ct(e/100,0,1),S=ct(t/100,0,1),A=(1-Math.abs(2*S-1))*u,ee=A*(1-Math.abs(s/60%2-1)),Ee=S-A/2;let Ce,Fe,Ne;return s>=0&&s<60?[Ce,Fe,Ne]=[A,ee,0]:s>=60&&s<120?[Ce,Fe,Ne]=[ee,A,0]:s>=120&&s<180?[Ce,Fe,Ne]=[0,A,ee]:s>=180&&s<240?[Ce,Fe,Ne]=[0,ee,A]:s>=240&&s<300?[Ce,Fe,Ne]=[ee,0,A]:[Ce,Fe,Ne]=[A,0,ee],[(Ce+Ee)*255,(Fe+Ee)*255,(Ne+Ee)*255]}function yo(n,e,t){const s=ct(n/255,0,1),u=ct(e/255,0,1),S=ct(t/255,0,1),A=Math.max(s,u,S),ee=Math.min(s,u,S),Ee=A-ee;let Ce;Ee===0?Ce=0:A===s?Ce=60*(((u-S)/Ee%6+6)%6):A===u?Ce=60*((S-s)/Ee+2):Ce=60*((s-u)/Ee+4);const Fe=A===0?0:Ee/A,Ne=A;return[Ce,Fe*100,Ne*100]}function or(n,e,t){const s=sr(n,360),u=ct(e/100,0,1),S=ct(t/100,0,1),A=S*u,ee=A*(1-Math.abs(s/60%2-1)),Ee=S-A;let Ce,Fe,Ne;return s>=0&&s<60?[Ce,Fe,Ne]=[A,ee,0]:s>=60&&s<120?[Ce,Fe,Ne]=[ee,A,0]:s>=120&&s<180?[Ce,Fe,Ne]=[0,A,ee]:s>=180&&s<240?[Ce,Fe,Ne]=[0,ee,A]:s>=240&&s<300?[Ce,Fe,Ne]=[ee,0,A]:[Ce,Fe,Ne]=[A,0,ee],[(Ce+Ee)*255,(Fe+Ee)*255,(Ne+Ee)*255]}function Po(n,e,t){const s=t+e*(100-Math.abs(2*t-100))/200;return[n,s!==0?e*(100-Math.abs(2*t-100))/s:0,t+e*(100-Math.abs(2*t-100))/(2*100)]}function So(n,e,t){const s=100-Math.abs(t*(200-e)/100-100);return[n,s!==0?e*t/s:0,t*(200-e)/(2*100)]}function en(n){return[n[0],n[1],n[2]]}function ar(n,e){return[n[0],n[1],n[2],e]}const Eo={hsl:{hsl:(n,e,t)=>[n,e,t],hsv:Po,rgb:xo},hsv:{hsl:So,hsv:(n,e,t)=>[n,e,t],rgb:or},rgb:{hsl:wo,hsv:yo,rgb:(n,e,t)=>[n,e,t]}};function Kn(n,e){return[e==="float"?1:n==="rgb"?255:360,e==="float"?1:n==="rgb"?255:100,e==="float"?1:n==="rgb"?255:100]}function Co(n,e){return n===e?e:sr(n,e)}function ko(n,e,t){var s;const u=Kn(e,t);return[e==="rgb"?ct(n[0],0,u[0]):Co(n[0],u[0]),ct(n[1],0,u[1]),ct(n[2],0,u[2]),ct((s=n[3])!==null&&s!==void 0?s:1,0,1)]}function lr(n,e,t,s){const u=Kn(e,t),S=Kn(e,s);return n.map((A,ee)=>A/u[ee]*S[ee])}function Bo(n,e,t){const s=lr(n,e.mode,e.type,"int"),u=Eo[e.mode][t.mode](...s);return lr(u,t.mode,"int",t.type)}function Hn(n,e){return typeof n!="object"||W(n)?!1:e in n&&typeof n[e]=="number"}class Re{static black(e="int"){return new Re([0,0,0],"rgb",e)}static fromObject(e,t="int"){const s="a"in e?[e.r,e.g,e.b,e.a]:[e.r,e.g,e.b];return new Re(s,"rgb",t)}static toRgbaObject(e,t="int"){return e.toRgbaObject(t)}static isRgbColorObject(e){return Hn(e,"r")&&Hn(e,"g")&&Hn(e,"b")}static isRgbaColorObject(e){return this.isRgbColorObject(e)&&Hn(e,"a")}static isColorObject(e){return this.isRgbColorObject(e)}static equals(e,t){if(e.mode!==t.mode)return!1;const s=e.comps_,u=t.comps_;for(let S=0;S<s.length;S++)if(s[S]!==u[S])return!1;return!0}constructor(e,t,s="int"){this.mode=t,this.type=s,this.comps_=ko(e,t,s)}getComponents(e,t="int"){return ar(Bo(en(this.comps_),{mode:this.mode,type:this.type},{mode:e??this.mode,type:t}),this.comps_[3])}toRgbaObject(e="int"){const t=this.getComponents("rgb",e);return{r:t[0],g:t[1],b:t[2],a:t[3]}}}const Nt=Z("colp");class To{constructor(e,t){this.alphaViews_=null,this.element=e.createElement("div"),this.element.classList.add(Nt()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Nt("hsv"));const u=e.createElement("div");u.classList.add(Nt("sv")),this.svPaletteView_=t.svPaletteView,u.appendChild(this.svPaletteView_.element),s.appendChild(u);const S=e.createElement("div");S.classList.add(Nt("h")),this.hPaletteView_=t.hPaletteView,S.appendChild(this.hPaletteView_.element),s.appendChild(S),this.element.appendChild(s);const A=e.createElement("div");if(A.classList.add(Nt("rgb")),this.textView_=t.textView,A.appendChild(this.textView_.element),this.element.appendChild(A),t.alphaViews){this.alphaViews_={palette:t.alphaViews.palette,text:t.alphaViews.text};const ee=e.createElement("div");ee.classList.add(Nt("a"));const Ee=e.createElement("div");Ee.classList.add(Nt("ap")),Ee.appendChild(this.alphaViews_.palette.element),ee.appendChild(Ee);const Ce=e.createElement("div");Ce.classList.add(Nt("at")),Ce.appendChild(this.alphaViews_.text.element),ee.appendChild(Ce),this.element.appendChild(ee)}}get allFocusableElements(){const e=[this.svPaletteView_.element,this.hPaletteView_.element,this.textView_.modeSelectElement,...this.textView_.textViews.map(t=>t.inputElement)];return this.alphaViews_&&e.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),e}}function Mo(n){return n==="int"?"int":n==="float"?"float":void 0}function ws(n){const e=ye;return Te(n,{alpha:e.optional.boolean,color:e.optional.object({alpha:e.optional.boolean,type:e.optional.custom(Mo)}),expanded:e.optional.boolean,picker:e.optional.custom(rr)})}function tn(n){return n?.1:1}function nn(n){var e;return(e=n.color)===null||e===void 0?void 0:e.type}function Ao(n,e){return n.alpha===e.alpha&&n.mode===e.mode&&n.notation===e.notation&&n.type===e.type}function Pt(n,e){const t=n.match(/^(.+)%$/);return Math.min(t?parseFloat(t[1])*.01*e:parseFloat(n),e)}const Do={deg:n=>n,grad:n=>n*360/400,rad:n=>n*360/(2*Math.PI),turn:n=>n*360};function cr(n){const e=n.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!e)return parseFloat(n);const t=parseFloat(e[1]),s=e[2];return Do[s](t)}function ur(n){const e=n.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[Pt(e[1],255),Pt(e[2],255),Pt(e[3],255)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function dr(n){return e=>{const t=ur(e);return t?new Re(t,"rgb",n):null}}function pr(n){const e=n.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[Pt(e[1],255),Pt(e[2],255),Pt(e[3],255),Pt(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function hr(n){return e=>{const t=pr(e);return t?new Re(t,"rgb",n):null}}function fr(n){const e=n.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[cr(e[1]),Pt(e[2],100),Pt(e[3],100)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function _r(n){return e=>{const t=fr(e);return t?new Re(t,"hsl",n):null}}function mr(n){const e=n.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[cr(e[1]),Pt(e[2],100),Pt(e[3],100),Pt(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function br(n){return e=>{const t=mr(e);return t?new Re(t,"hsl",n):null}}function vr(n){const e=n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)];const t=n.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:null}function Go(n){const e=vr(n);return e?new Re(e,"rgb","int"):null}function gr(n){const e=n.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16),et(parseInt(e[4]+e[4],16),0,255,0,1)];const t=n.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16),et(parseInt(t[4],16),0,255,0,1)]:null}function zo(n){const e=gr(n);return e?new Re(e,"rgb","int"):null}function wr(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function xr(n){return e=>{const t=wr(e);return t?new Re(t,"rgb",n):null}}function yr(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3]),parseFloat(e[4])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function Pr(n){return e=>{const t=yr(e);return t?new Re(t,"rgb",n):null}}const Lo=[{parser:vr,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:gr,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:ur,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:pr,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:fr,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:mr,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:wr,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:yr,result:{alpha:!0,mode:"rgb",notation:"object"}}];function Io(n){return Lo.reduce((e,{parser:t,result:s})=>e||(t(n)?s:null),null)}function xs(n,e="int"){const t=Io(n);return t?t.notation==="hex"&&e!=="float"?Object.assign(Object.assign({},t),{type:"int"}):t.notation==="func"?Object.assign(Object.assign({},t),{type:e}):null:null}const Sr={int:[Go,zo,dr("int"),hr("int"),_r("int"),br("int"),xr("int"),Pr("int")],float:[dr("float"),hr("float"),_r("float"),br("float"),xr("float"),Pr("float")]};function Ro(n){const e=Sr[n];return t=>{if(typeof t!="string")return Re.black(n);const s=e.reduce((u,S)=>u||S(t),null);return s??Re.black(n)}}function ys(n){const e=Sr[n];return t=>e.reduce((s,u)=>s||u(t),null)}function Er(n){const e=ct(Math.floor(n),0,255).toString(16);return e.length===1?`0${e}`:e}function Cr(n,e="#"){const t=en(n.getComponents("rgb")).map(Er).join("");return`${e}${t}`}function Ps(n,e="#"){const t=n.getComponents("rgb"),s=[t[0],t[1],t[2],t[3]*255].map(Er).join("");return`${e}${s}`}function kr(n,e){const t=ft(e==="float"?2:0);return`rgb(${en(n.getComponents("rgb",e)).map(u=>t(u)).join(", ")})`}function Uo(n){return e=>kr(e,n)}function Yn(n,e){const t=ft(2),s=ft(e==="float"?2:0);return`rgba(${n.getComponents("rgb",e).map((S,A)=>(A===3?t:s)(S)).join(", ")})`}function Vo(n){return e=>Yn(e,n)}function Oo(n){const e=[ft(0),$n,$n];return`hsl(${en(n.getComponents("hsl")).map((s,u)=>e[u](s)).join(", ")})`}function Fo(n){const e=[ft(0),$n,$n,ft(2)];return`hsla(${n.getComponents("hsl").map((s,u)=>e[u](s)).join(", ")})`}function Br(n,e){const t=ft(e==="float"?2:0),s=["r","g","b"];return`{${en(n.getComponents("rgb",e)).map((S,A)=>`${s[A]}: ${t(S)}`).join(", ")}}`}function No(n){return e=>Br(e,n)}function Tr(n,e){const t=ft(2),s=ft(e==="float"?2:0),u=["r","g","b","a"];return`{${n.getComponents("rgb",e).map((A,ee)=>{const Ee=ee===3?t:s;return`${u[ee]}: ${Ee(A)}`}).join(", ")}}`}function $o(n){return e=>Tr(e,n)}const Wo=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:Cr},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:Ps},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:Oo},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:Fo},...["int","float"].reduce((n,e)=>[...n,{format:{alpha:!1,mode:"rgb",notation:"func",type:e},stringifier:Uo(e)},{format:{alpha:!0,mode:"rgb",notation:"func",type:e},stringifier:Vo(e)},{format:{alpha:!1,mode:"rgb",notation:"object",type:e},stringifier:No(e)},{format:{alpha:!0,mode:"rgb",notation:"object",type:e},stringifier:$o(e)}],[])];function Ss(n){return Wo.reduce((e,t)=>e||(Ao(t.format,n)?t.stringifier:null),null)}const Mn=Z("apl");class qo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(Mn()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("div");s.classList.add(Mn("b")),this.element.appendChild(s);const u=e.createElement("div");u.classList.add(Mn("c")),s.appendChild(u),this.colorElem_=u;const S=e.createElement("div");S.classList.add(Mn("m")),this.element.appendChild(S),this.markerElem_=S;const A=e.createElement("div");A.classList.add(Mn("p")),this.markerElem_.appendChild(A),this.previewElem_=A,this.update_()}update_(){const e=this.value.rawValue,t=e.getComponents("rgb"),s=new Re([t[0],t[1],t[2],0],"rgb"),u=new Re([t[0],t[1],t[2],255],"rgb"),S=["to right",Yn(s),Yn(u)];this.colorElem_.style.background=`linear-gradient(${S.join(",")})`,this.previewElem_.style.backgroundColor=Yn(e);const A=et(t[3],0,1,0,100);this.markerElem_.style.left=`${A}%`}onValueChange_(){this.update_()}}class jo{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new qo(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Qt(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=e.point.x/e.bounds.width,u=this.value.rawValue,[S,A,ee]=u.getComponents("hsv");this.value.setRawValue(new Re([S,A,ee,s],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=bt(tn(!0),zt(e));if(t===0)return;const s=this.value.rawValue,[u,S,A,ee]=s.getComponents("hsv");this.value.setRawValue(new Re([u,S,A,ee+t],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){bt(tn(!0),zt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const fn=Z("coltxt");function Ko(n){const e=n.createElement("select"),t=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"}];return e.appendChild(t.reduce((s,u)=>{const S=n.createElement("option");return S.textContent=u.text,S.value=u.value,s.appendChild(S),s},n.createDocumentFragment())),e}class Ho{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(fn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(fn("m")),this.modeElem_=Ko(e),this.modeElem_.classList.add(fn("ms")),s.appendChild(this.modeSelectElement),t.viewProps.bindDisabled(this.modeElem_);const u=e.createElement("div");u.classList.add(fn("mm")),u.appendChild(v(e,"dropdown")),s.appendChild(u),this.element.appendChild(s);const S=e.createElement("div");S.classList.add(fn("w")),this.element.appendChild(S),this.textsElem_=S,this.textViews_=t.textViews,this.applyTextViews_(),ue(t.colorMode,A=>{this.modeElem_.value=A})}get modeSelectElement(){return this.modeElem_}get textViews(){return this.textViews_}set textViews(e){this.textViews_=e,this.applyTextViews_()}applyTextViews_(){j(this.textsElem_);const e=this.element.ownerDocument;this.textViews_.forEach(t=>{const s=e.createElement("div");s.classList.add(fn("c")),s.appendChild(t.element),this.textsElem_.appendChild(s)})}}function Yo(n){return ft(n==="float"?2:0)}function Zo(n,e,t){const s=Kn(n,e)[t];return new Ct({min:0,max:s})}function Es(n,e,t){return new Bn(n,{arrayPosition:t===0?"fst":t===3-1?"lst":"mid",baseStep:tn(!1),parser:e.parser,props:se.fromObject({draggingScale:e.colorType==="float"?.01:1,formatter:Yo(e.colorType)}),value:le(0,{constraint:Zo(e.colorMode,e.colorType,t)}),viewProps:e.viewProps})}class Xo{constructor(e,t){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=t.colorType,this.parser_=t.parser,this.value=t.value,this.viewProps=t.viewProps,this.colorMode=le(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(e),this.view=new Ho(e,{colorMode:this.colorMode,textViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view],viewProps:this.viewProps}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(e){const t={colorMode:this.colorMode.rawValue,colorType:this.colorType_,parser:this.parser_,viewProps:this.viewProps},s=[Es(e,t,0),Es(e,t,1),Es(e,t,2)];return s.forEach((u,S)=>{Cn({primary:this.value,secondary:u.value,forward:A=>A.rawValue.getComponents(this.colorMode.rawValue,this.colorType_)[S],backward:(A,ee)=>{const Ee=this.colorMode.rawValue,Ce=A.rawValue.getComponents(Ee,this.colorType_);return Ce[S]=ee.rawValue,new Re(ar(en(Ce),Ce[3]),Ee,this.colorType_)}})}),s}onModeSelectChange_(e){const t=e.currentTarget;this.colorMode.rawValue=t.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.textViews=[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}}const Cs=Z("hpl");class Qo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(Cs()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("div");s.classList.add(Cs("c")),this.element.appendChild(s);const u=e.createElement("div");u.classList.add(Cs("m")),this.element.appendChild(u),this.markerElem_=u,this.update_()}update_(){const e=this.value.rawValue,[t]=e.getComponents("hsv");this.markerElem_.style.backgroundColor=kr(new Re([t,100,100],"hsv"));const s=et(t,0,360,0,100);this.markerElem_.style.left=`${s}%`}onValueChange_(){this.update_()}}class Jo{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Qo(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Qt(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=et(ct(e.point.x,0,e.bounds.width),0,e.bounds.width,0,360),u=this.value.rawValue,[,S,A,ee]=u.getComponents("hsv");this.value.setRawValue(new Re([s,S,A,ee],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=bt(tn(!1),zt(e));if(t===0)return;const s=this.value.rawValue,[u,S,A,ee]=s.getComponents("hsv");this.value.setRawValue(new Re([u+t,S,A,ee],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){bt(tn(!1),zt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const ks=Z("svp"),Mr=64;class ea{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(ks()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("canvas");s.height=Mr,s.width=Mr,s.classList.add(ks("c")),this.element.appendChild(s),this.canvasElement=s;const u=e.createElement("div");u.classList.add(ks("m")),this.element.appendChild(u),this.markerElem_=u,this.update_()}update_(){const e=m(this.canvasElement);if(!e)return;const s=this.value.rawValue.getComponents("hsv"),u=this.canvasElement.width,S=this.canvasElement.height,A=e.getImageData(0,0,u,S),ee=A.data;for(let Fe=0;Fe<S;Fe++)for(let Ne=0;Ne<u;Ne++){const sn=et(Ne,0,u,0,100),Dn=et(Fe,0,S,100,0),Gn=or(s[0],sn,Dn),Zn=(Fe*u+Ne)*4;ee[Zn]=Gn[0],ee[Zn+1]=Gn[1],ee[Zn+2]=Gn[2],ee[Zn+3]=255}e.putImageData(A,0,0);const Ee=et(s[1],0,100,0,100);this.markerElem_.style.left=`${Ee}%`;const Ce=et(s[2],0,100,100,0);this.markerElem_.style.top=`${Ce}%`}onValueChange_(){this.update_()}}class ta{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new ea(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Qt(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=et(e.point.x,0,e.bounds.width,0,100),u=et(e.point.y,0,e.bounds.height,100,0),[S,,,A]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new Re([S,s,u,A],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){tr(e.key)&&e.preventDefault();const[t,s,u,S]=this.value.rawValue.getComponents("hsv"),A=tn(!1),ee=bt(A,zt(e)),Ee=bt(A,kn(e));ee===0&&Ee===0||this.value.setRawValue(new Re([t,s+ee,u+Ee,S],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){const t=tn(!1),s=bt(t,zt(e)),u=bt(t,kn(e));s===0&&u===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class na{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.hPaletteC_=new Jo(e,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new ta(e,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=t.supportsAlpha?{palette:new jo(e,{value:this.value,viewProps:this.viewProps}),text:new Bn(e,{parser:Gt,baseStep:.1,props:se.fromObject({draggingScale:.01,formatter:ft(2)}),value:le(0,{constraint:new Ct({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&Cn({primary:this.value,secondary:this.alphaIcs_.text.value,forward:s=>s.rawValue.getComponents()[3],backward:(s,u)=>{const S=s.rawValue.getComponents();return S[3]=u.rawValue,new Re(S,s.rawValue.mode)}}),this.textC_=new Xo(e,{colorType:t.colorType,parser:Gt,value:this.value,viewProps:this.viewProps}),this.view=new To(e,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:t.supportsAlpha,svPaletteView:this.svPaletteC_.view,textView:this.textC_.view,viewProps:this.viewProps})}get textController(){return this.textC_}}const Bs=Z("colsw");class sa{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.element=e.createElement("div"),this.element.classList.add(Bs()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Bs("sw")),this.element.appendChild(s),this.swatchElem_=s;const u=e.createElement("button");u.classList.add(Bs("b")),t.viewProps.bindDisabled(u),this.element.appendChild(u),this.buttonElement=u,this.update_()}update_(){const e=this.value.rawValue;this.swatchElem_.style.backgroundColor=Ps(e)}onValueChange_(){this.update_()}}class ra{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new sa(e,{value:this.value,viewProps:this.viewProps})}}class Ts{constructor(e,t){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=$e.create(t.expanded),this.swatchC_=new ra(e,{value:this.value,viewProps:this.viewProps});const s=this.swatchC_.view.buttonElement;s.addEventListener("blur",this.onButtonBlur_),s.addEventListener("click",this.onButtonClick_),this.textC_=new Nn(e,{parser:t.parser,props:se.fromObject({formatter:t.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new go(e,{foldable:this.foldable_,pickerLayout:t.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=t.pickerLayout==="popup"?new js(e,{viewProps:this.viewProps}):null;const u=new na(e,{colorType:t.colorType,supportsAlpha:t.supportsAlpha,value:this.value,viewProps:this.viewProps});u.view.allFocusableElements.forEach(S=>{S.addEventListener("blur",this.onPopupChildBlur_),S.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=u,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(u.view.element),Cn({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:S=>S.rawValue,backward:(S,A)=>A.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),ze(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,s=e.relatedTarget;(!s||!t.contains(s))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,s=Q(e);s&&t.contains(s)||s&&s===this.swatchC_.view.buttonElement&&!c(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function ia(n,e){return Re.isColorObject(n)?Re.fromObject(n,e):Re.black(e)}function oa(n){return en(n.getComponents("rgb")).reduce((e,t)=>e<<8|Math.floor(t)&255,0)}function aa(n){return n.getComponents("rgb").reduce((e,t,s)=>{const u=Math.floor(s===3?t*255:t)&255;return e<<8|u},0)>>>0}function la(n){return new Re([n>>16&255,n>>8&255,n&255],"rgb")}function ca(n){return new Re([n>>24&255,n>>16&255,n>>8&255,et(n&255,0,255,0,1)],"rgb")}function ua(n){return typeof n!="number"?Re.black():la(n)}function da(n){return typeof n!="number"?Re.black():ca(n)}function pa(n){const e=Ss(n);return e?(t,s)=>{Tn(t,e(s))}:null}function ha(n){const e=n?aa:oa;return(t,s)=>{Tn(t,e(s))}}function fa(n,e,t){const s=e.toRgbaObject(t);n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b),n.writeProperty("a",s.a)}function _a(n,e,t){const s=e.toRgbaObject(t);n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b)}function ma(n,e){return(t,s)=>{n?fa(t,s,e):_a(t,s,e)}}function Ms(n){var e;return!!(n!=null&&n.alpha||!((e=n==null?void 0:n.color)===null||e===void 0)&&e.alpha)}function ba(n){return n?e=>Ps(e,"0x"):e=>Cr(e,"0x")}function va(n){return"color"in n||"view"in n&&n.view==="color"}const ga={id:"input-color-number",type:"input",accept:(n,e)=>{if(typeof n!="number"||!va(e))return null;const t=ws(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>Ms(n.params)?da:ua,equals:Re.equals,writer:n=>ha(Ms(n.params))},controller:n=>{const e=Ms(n.params),t="expanded"in n.params?n.params.expanded:void 0,s="picker"in n.params?n.params.picker:void 0;return new Ts(n.document,{colorType:"int",expanded:t??!1,formatter:ba(e),parser:ys("int"),pickerLayout:s??"popup",supportsAlpha:e,value:n.value,viewProps:n.viewProps})}};function wa(n){return Re.isRgbaColorObject(n)}function xa(n){return e=>ia(e,n)}function ya(n,e){return t=>n?Tr(t,e):Br(t,e)}const Pa={id:"input-color-object",type:"input",accept:(n,e)=>{if(!Re.isColorObject(n))return null;const t=ws(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>xa(nn(n.params)),equals:Re.equals,writer:n=>ma(wa(n.initialValue),nn(n.params))},controller:n=>{var e;const t=Re.isRgbaColorObject(n.initialValue),s="expanded"in n.params?n.params.expanded:void 0,u="picker"in n.params?n.params.picker:void 0,S=(e=nn(n.params))!==null&&e!==void 0?e:"int";return new Ts(n.document,{colorType:S,expanded:s??!1,formatter:ya(t,S),parser:ys(S),pickerLayout:u??"popup",supportsAlpha:t,value:n.value,viewProps:n.viewProps})}},Sa={id:"input-color-string",type:"input",accept:(n,e)=>{if(typeof n!="string"||"view"in e&&e.view==="text")return null;const t=xs(n,nn(e));if(!t||!Ss(t))return null;const u=ws(e);return u?{initialValue:n,params:u}:null},binding:{reader:n=>{var e;return Ro((e=nn(n.params))!==null&&e!==void 0?e:"int")},equals:Re.equals,writer:n=>{const e=xs(n.initialValue,nn(n.params));if(!e)throw F.shouldNeverHappen();const t=pa(e);if(!t)throw F.notBindable();return t}},controller:n=>{const e=xs(n.initialValue,nn(n.params));if(!e)throw F.shouldNeverHappen();const t=Ss(e);if(!t)throw F.shouldNeverHappen();const s="expanded"in n.params?n.params.expanded:void 0,u="picker"in n.params?n.params.picker:void 0;return new Ts(n.document,{colorType:e.type,expanded:s??!1,formatter:t,parser:ys(e.type),pickerLayout:u??"popup",supportsAlpha:e.alpha,value:n.value,viewProps:n.viewProps})}};class $t{constructor(e){this.components=e.components,this.asm_=e.assembly}constrain(e){const t=this.asm_.toComponents(e).map((s,u)=>{var S,A;return(A=(S=this.components[u])===null||S===void 0?void 0:S.constrain(s))!==null&&A!==void 0?A:s});return this.asm_.fromComponents(t)}}const Ar=Z("pndtxt");class Ea{constructor(e,t){this.textViews=t.textViews,this.element=e.createElement("div"),this.element.classList.add(Ar()),this.textViews.forEach(s=>{const u=e.createElement("div");u.classList.add(Ar("a")),u.appendChild(s.element),this.element.appendChild(u)})}}function Ca(n,e,t){return new Bn(n,{arrayPosition:t===0?"fst":t===e.axes.length-1?"lst":"mid",baseStep:e.axes[t].baseStep,parser:e.parser,props:e.axes[t].textProps,value:le(0,{constraint:e.axes[t].constraint}),viewProps:e.viewProps})}class As{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.acs_=t.axes.map((s,u)=>Ca(e,t,u)),this.acs_.forEach((s,u)=>{Cn({primary:this.value,secondary:s.value,forward:S=>t.assembly.toComponents(S.rawValue)[u],backward:(S,A)=>{const ee=t.assembly.toComponents(S.rawValue);return ee[u]=A.rawValue,t.assembly.fromComponents(ee)}})}),this.view=new Ea(e,{textViews:this.acs_.map(s=>s.view)})}}function Dr(n,e){return"step"in n&&!W(n.step)?new Ot(n.step,e):null}function Gr(n){return!W(n.max)&&!W(n.min)?new Ct({max:n.max,min:n.min}):!W(n.max)||!W(n.min)?new Fn({max:n.max,min:n.min}):null}function ka(n){const e=ht(n,Ct);if(e)return[e.values.get("min"),e.values.get("max")];const t=ht(n,Fn);return t?[t.minValue,t.maxValue]:[void 0,void 0]}function Ba(n,e){const t=[],s=Dr(n,e);s&&t.push(s);const u=Gr(n);u&&t.push(u);const S=gs(n.options);return S&&t.push(S),new Mt(t)}const Ta={id:"input-number",type:"input",accept:(n,e)=>{if(typeof n!="number")return null;const t=ye,s=Te(e,{format:t.optional.function,max:t.optional.number,min:t.optional.number,options:t.optional.custom(Wn),step:t.optional.number});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Js,constraint:n=>Ba(n.params,n.initialValue),writer:n=>Tn},controller:n=>{var e;const t=n.value,s=n.constraint,u=s&&ht(s,At);if(u)return new Pn(n.document,{props:new se({options:u.values.value("options")}),value:t,viewProps:n.viewProps});const S=(e="format"in n.params?n.params.format:void 0)!==null&&e!==void 0?e:ft(qn(s,t.rawValue)),A=s&&ht(s,Ct);return A?new vs(n.document,{baseStep:pn(s),parser:Gt,sliderProps:new se({maxValue:A.values.value("max"),minValue:A.values.value("min")}),textProps:se.fromObject({draggingScale:hn(s,t.rawValue),formatter:S}),value:t,viewProps:n.viewProps}):new Bn(n.document,{baseStep:pn(s),parser:Gt,props:se.fromObject({draggingScale:hn(s,t.rawValue),formatter:S}),value:t,viewProps:n.viewProps})}};class Wt{constructor(e=0,t=0){this.x=e,this.y=t}getComponents(){return[this.x,this.y]}static isObject(e){if(W(e))return!1;const t=e.x,s=e.y;return!(typeof t!="number"||typeof s!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y}toObject(){return{x:this.x,y:this.y}}}const zr={toComponents:n=>n.getComponents(),fromComponents:n=>new Wt(...n)},_n=Z("p2d");class Ma{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(_n()),t.viewProps.bindClassModifiers(this.element),ue(t.expanded,te(this.element,_n(void 0,"expanded")));const s=e.createElement("div");s.classList.add(_n("h")),this.element.appendChild(s);const u=e.createElement("button");u.classList.add(_n("b")),u.appendChild(v(e,"p2dpad")),t.viewProps.bindDisabled(u),s.appendChild(u),this.buttonElement=u;const S=e.createElement("div");if(S.classList.add(_n("t")),s.appendChild(S),this.textElement=S,t.pickerLayout==="inline"){const A=e.createElement("div");A.classList.add(_n("p")),this.element.appendChild(A),this.pickerElement=A}else this.pickerElement=null}}const qt=Z("p2dp");class Aa{constructor(e,t){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.invertsY_=t.invertsY,this.maxValue_=t.maxValue,this.element=e.createElement("div"),this.element.classList.add(qt()),t.layout==="popup"&&this.element.classList.add(qt(void 0,"p")),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(qt("p")),t.viewProps.bindTabIndex(s),this.element.appendChild(s),this.padElement=s;const u=e.createElementNS(k,"svg");u.classList.add(qt("g")),this.padElement.appendChild(u),this.svgElem_=u;const S=e.createElementNS(k,"line");S.classList.add(qt("ax")),S.setAttributeNS(null,"x1","0"),S.setAttributeNS(null,"y1","50%"),S.setAttributeNS(null,"x2","100%"),S.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(S);const A=e.createElementNS(k,"line");A.classList.add(qt("ax")),A.setAttributeNS(null,"x1","50%"),A.setAttributeNS(null,"y1","0"),A.setAttributeNS(null,"x2","50%"),A.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(A);const ee=e.createElementNS(k,"line");ee.classList.add(qt("l")),ee.setAttributeNS(null,"x1","50%"),ee.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(ee),this.lineElem_=ee;const Ee=e.createElement("div");Ee.classList.add(qt("m")),this.padElement.appendChild(Ee),this.markerElem_=Ee,t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[e,t]=this.value.rawValue.getComponents(),s=this.maxValue_,u=et(e,-s,+s,0,100),S=et(t,-s,+s,0,100),A=this.invertsY_?100-S:S;this.lineElem_.setAttributeNS(null,"x2",`${u}%`),this.lineElem_.setAttributeNS(null,"y2",`${A}%`),this.markerElem_.style.left=`${u}%`,this.markerElem_.style.top=`${A}%`}onValueChange_(){this.update_()}onFoldableChange_(){this.update_()}}function Lr(n,e,t){return[bt(e[0],zt(n)),bt(e[1],kn(n))*(t?1:-1)]}class Da{constructor(e,t){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.baseSteps_=t.baseSteps,this.maxValue_=t.maxValue,this.invertsY_=t.invertsY,this.view=new Aa(e,{invertsY:this.invertsY_,layout:t.layout,maxValue:this.maxValue_,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Qt(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=this.maxValue_,u=et(e.point.x,0,e.bounds.width,-s,+s),S=et(this.invertsY_?e.bounds.height-e.point.y:e.point.y,0,e.bounds.height,-s,+s);this.value.setRawValue(new Wt(u,S),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onPadKeyDown_(e){tr(e.key)&&e.preventDefault();const[t,s]=Lr(e,this.baseSteps_,this.invertsY_);t===0&&s===0||this.value.setRawValue(new Wt(this.value.rawValue.x+t,this.value.rawValue.y+s),{forceEmit:!1,last:!1})}onPadKeyUp_(e){const[t,s]=Lr(e,this.baseSteps_,this.invertsY_);t===0&&s===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class Ga{constructor(e,t){var s,u;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=$e.create(t.expanded),this.popC_=t.pickerLayout==="popup"?new js(e,{viewProps:this.viewProps}):null;const S=new Da(e,{baseSteps:[t.axes[0].baseStep,t.axes[1].baseStep],invertsY:t.invertsY,layout:t.pickerLayout,maxValue:t.maxValue,value:this.value,viewProps:this.viewProps});S.view.allFocusableElements.forEach(A=>{A.addEventListener("blur",this.onPopupChildBlur_),A.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=S,this.textC_=new As(e,{assembly:zr,axes:t.axes,parser:t.parser,value:this.value,viewProps:this.viewProps}),this.view=new Ma(e,{expanded:this.foldable_.value("expanded"),pickerLayout:t.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(s=this.view.buttonElement)===null||s===void 0||s.addEventListener("blur",this.onPadButtonBlur_),(u=this.view.buttonElement)===null||u===void 0||u.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),Cn({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:A=>A.rawValue,backward:(A,ee)=>ee.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),ze(this.foldable_,this.view.pickerElement))}onPadButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,s=e.relatedTarget;(!s||!t.contains(s))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,s=Q(e);s&&t.contains(s)||s&&s===this.view.buttonElement&&!c(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.view.buttonElement.focus()}}class mn{constructor(e=0,t=0,s=0){this.x=e,this.y=t,this.z=s}getComponents(){return[this.x,this.y,this.z]}static isObject(e){if(W(e))return!1;const t=e.x,s=e.y,u=e.z;return!(typeof t!="number"||typeof s!="number"||typeof u!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const Ir={toComponents:n=>n.getComponents(),fromComponents:n=>new mn(...n)};function za(n){return mn.isObject(n)?new mn(n.x,n.y,n.z):new mn}function La(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z)}function Ia(n,e){return new $t({assembly:Ir,components:[Lt("x"in n?n.x:void 0,e.x),Lt("y"in n?n.y:void 0,e.y),Lt("z"in n?n.z:void 0,e.z)]})}function Ds(n,e){return{baseStep:pn(e),constraint:e,textProps:se.fromObject({draggingScale:hn(e,n),formatter:ft(qn(e,n))})}}const Ra={id:"input-point3d",type:"input",accept:(n,e)=>{if(!mn.isObject(n))return null;const t=ye,s=Te(e,{x:t.optional.custom(Ft),y:t.optional.custom(Ft),z:t.optional.custom(Ft)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>za,constraint:n=>Ia(n.params,n.initialValue),equals:mn.equals,writer:n=>La},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof $t))throw F.shouldNeverHappen();return new As(n.document,{assembly:Ir,axes:[Ds(e.rawValue.x,t.components[0]),Ds(e.rawValue.y,t.components[1]),Ds(e.rawValue.z,t.components[2])],parser:Gt,value:e,viewProps:n.viewProps})}};class bn{constructor(e=0,t=0,s=0,u=0){this.x=e,this.y=t,this.z=s,this.w=u}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(e){if(W(e))return!1;const t=e.x,s=e.y,u=e.z,S=e.w;return!(typeof t!="number"||typeof s!="number"||typeof u!="number"||typeof S!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z&&e.w===t.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const Rr={toComponents:n=>n.getComponents(),fromComponents:n=>new bn(...n)};function Ua(n){return bn.isObject(n)?new bn(n.x,n.y,n.z,n.w):new bn}function Va(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z),n.writeProperty("w",e.w)}function Oa(n,e){return new $t({assembly:Rr,components:[Lt("x"in n?n.x:void 0,e.x),Lt("y"in n?n.y:void 0,e.y),Lt("z"in n?n.z:void 0,e.z),Lt("w"in n?n.w:void 0,e.w)]})}function Fa(n,e){return{baseStep:pn(e),constraint:e,textProps:se.fromObject({draggingScale:hn(e,n),formatter:ft(qn(e,n))})}}const Na={id:"input-point4d",type:"input",accept:(n,e)=>{if(!bn.isObject(n))return null;const t=ye,s=Te(e,{x:t.optional.custom(Ft),y:t.optional.custom(Ft),z:t.optional.custom(Ft),w:t.optional.custom(Ft)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Ua,constraint:n=>Oa(n.params,n.initialValue),equals:bn.equals,writer:n=>Va},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof $t))throw F.shouldNeverHappen();return new As(n.document,{assembly:Rr,axes:e.rawValue.getComponents().map((s,u)=>Fa(s,t.components[u])),parser:Gt,value:e,viewProps:n.viewProps})}};function $a(n){const e=[],t=gs(n.options);return t&&e.push(t),new Mt(e)}const Wa={id:"input-string",type:"input",accept:(n,e)=>{if(typeof n!="string")return null;const s=Te(e,{options:ye.optional.custom(Wn)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>er,constraint:n=>$a(n.params),writer:n=>Tn},controller:n=>{const e=n.document,t=n.value,s=n.constraint,u=s&&ht(s,At);return u?new Pn(e,{props:new se({options:u.values.value("options")}),value:t,viewProps:n.viewProps}):new Nn(e,{parser:S=>S,props:se.fromObject({formatter:fs}),value:t,viewProps:n.viewProps})}},An={monitor:{defaultInterval:200,defaultLineCount:3}},Ur=Z("mll");class qa{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(Ur()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("textarea");s.classList.add(Ur("i")),s.style.height=`calc(var(--bld-us) * ${t.lineCount})`,s.readOnly=!0,t.viewProps.bindDisabled(s),this.element.appendChild(s),this.textareaElem_=s,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.textareaElem_,t=e.scrollTop===e.scrollHeight-e.clientHeight,s=[];this.value.rawValue.forEach(u=>{u!==void 0&&s.push(this.formatter_(u))}),e.textContent=s.join(`
`),t&&(e.scrollTop=e.scrollHeight)}onValueUpdate_(){this.update_()}}class Gs{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new qa(e,{formatter:t.formatter,lineCount:t.lineCount,value:this.value,viewProps:this.viewProps})}}const Vr=Z("sgl");class ja{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(Vr()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("input");s.classList.add(Vr("i")),s.readOnly=!0,s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.value.rawValue,t=e[e.length-1];this.inputElement.value=t!==void 0?this.formatter_(t):""}onValueUpdate_(){this.update_()}}class zs{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new ja(e,{formatter:t.formatter,value:this.value,viewProps:this.viewProps})}}const Ka={id:"monitor-bool",type:"monitor",accept:(n,e)=>{if(typeof n!="boolean")return null;const s=Te(e,{lineCount:ye.optional.number});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Hs},controller:n=>{var e;return n.value.rawValue.length===1?new zs(n.document,{formatter:Ys,value:n.value,viewProps:n.viewProps}):new Gs(n.document,{formatter:Ys,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:An.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}},jt=Z("grl");class Ha{constructor(e,t){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=e.createElement("div"),this.element.classList.add(jt()),t.viewProps.bindClassModifiers(this.element),this.formatter_=t.formatter,this.props_=t.props,this.cursor_=t.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const s=e.createElementNS(k,"svg");s.classList.add(jt("g")),s.style.height=`calc(var(--bld-us) * ${t.lineCount})`,this.element.appendChild(s),this.svgElem_=s;const u=e.createElementNS(k,"polyline");this.svgElem_.appendChild(u),this.lineElem_=u;const S=e.createElement("div");S.classList.add(jt("t"),Z("tt")()),this.element.appendChild(S),this.tooltipElem_=S,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const e=this.svgElem_.getBoundingClientRect(),t=this.value.rawValue.length-1,s=this.props_.get("minValue"),u=this.props_.get("maxValue"),S=[];this.value.rawValue.forEach((Fe,Ne)=>{if(Fe===void 0)return;const sn=et(Ne,0,t,0,e.width),Dn=et(Fe,s,u,e.height,0);S.push([sn,Dn].join(","))}),this.lineElem_.setAttributeNS(null,"points",S.join(" "));const A=this.tooltipElem_,ee=this.value.rawValue[this.cursor_.rawValue];if(ee===void 0){A.classList.remove(jt("t","a"));return}const Ee=et(this.cursor_.rawValue,0,t,0,e.width),Ce=et(ee,s,u,e.height,0);A.style.left=`${Ee}px`,A.style.top=`${Ce}px`,A.textContent=`${this.formatter_(ee)}`,A.classList.contains(jt("t","a"))||(A.classList.add(jt("t","a"),jt("t","in")),r(A),A.classList.remove(jt("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class Ya{constructor(e,t){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props_=t.props,this.value=t.value,this.viewProps=t.viewProps,this.cursor_=le(-1),this.view=new Ha(e,{cursor:this.cursor_,formatter:t.formatter,lineCount:t.lineCount,props:this.props_,value:this.value,viewProps:this.viewProps}),!c(e))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const s=new Qt(this.view.element);s.emitter.on("down",this.onGraphPointerDown_),s.emitter.on("move",this.onGraphPointerMove_),s.emitter.on("up",this.onGraphPointerUp_)}}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(e){const t=this.view.element.getBoundingClientRect();this.cursor_.rawValue=Math.floor(et(e.offsetX,0,t.width,0,this.value.rawValue.length))}onGraphPointerDown_(e){this.onGraphPointerMove_(e)}onGraphPointerMove_(e){if(!e.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(et(e.data.point.x,0,e.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function Ls(n){return"format"in n&&!W(n.format)?n.format:ft(2)}function Za(n){var e;return n.value.rawValue.length===1?new zs(n.document,{formatter:Ls(n.params),value:n.value,viewProps:n.viewProps}):new Gs(n.document,{formatter:Ls(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:An.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}function Xa(n){var e,t,s;return new Ya(n.document,{formatter:Ls(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:An.monitor.defaultLineCount,props:se.fromObject({maxValue:(t="max"in n.params?n.params.max:null)!==null&&t!==void 0?t:100,minValue:(s="min"in n.params?n.params.min:null)!==null&&s!==void 0?s:0}),value:n.value,viewProps:n.viewProps})}function Or(n){return"view"in n&&n.view==="graph"}const Qa={id:"monitor-number",type:"monitor",accept:(n,e)=>{if(typeof n!="number")return null;const t=ye,s=Te(e,{format:t.optional.function,lineCount:t.optional.number,max:t.optional.number,min:t.optional.number,view:t.optional.string});return s?{initialValue:n,params:s}:null},binding:{defaultBufferSize:n=>Or(n)?64:1,reader:n=>Js},controller:n=>Or(n.params)?Xa(n):Za(n)},Ja={id:"monitor-string",type:"monitor",accept:(n,e)=>{if(typeof n!="string")return null;const t=ye,s=Te(e,{lineCount:t.optional.number,multiline:t.optional.boolean});return s?{initialValue:n,params:s}:null},binding:{reader:n=>er},controller:n=>{var e;const t=n.value;return t.rawValue.length>1||"multiline"in n.params&&n.params.multiline?new Gs(n.document,{formatter:fs,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:An.monitor.defaultLineCount,value:t,viewProps:n.viewProps}):new zs(n.document,{formatter:fs,value:t,viewProps:n.viewProps})}};function el(n,e){var t;const s=n.accept(e.target.read(),e.params);if(W(s))return null;const u=ye,S={target:e.target,initialValue:s.initialValue,params:s.params},A=n.binding.reader(S),ee=n.binding.constraint?n.binding.constraint(S):void 0,Ee=le(A(s.initialValue),{constraint:ee,equals:n.binding.equals}),Ce=new cs({reader:A,target:e.target,value:Ee,writer:n.binding.writer(S)}),Fe=u.optional.boolean(e.params.disabled).value,Ne=u.optional.boolean(e.params.hidden).value,sn=n.controller({constraint:ee,document:e.document,initialValue:s.initialValue,params:s.params,value:Ce.value,viewProps:f.create({disabled:Fe,hidden:Ne})});return new qe(e.document,{binding:Ce,blade:ke(),props:se.fromObject({label:"label"in e.params?(t=u.optional.string(e.params.label).value)!==null&&t!==void 0?t:null:e.target.key}),valueController:sn})}function tl(n,e){return e===0?new Vn:new ls(n,e??An.monitor.defaultInterval)}function nl(n,e){var t,s,u;const S=ye,A=n.accept(e.target.read(),e.params);if(W(A))return null;const ee={target:e.target,initialValue:A.initialValue,params:A.params},Ee=n.binding.reader(ee),Ce=(s=(t=S.optional.number(e.params.bufferSize).value)!==null&&t!==void 0?t:n.binding.defaultBufferSize&&n.binding.defaultBufferSize(A.params))!==null&&s!==void 0?s:1,Fe=S.optional.number(e.params.interval).value,Ne=new Xt({reader:Ee,target:e.target,ticker:tl(e.document,Fe),value:us(Ce)}),sn=S.optional.boolean(e.params.disabled).value,Dn=S.optional.boolean(e.params.hidden).value,Gn=n.controller({document:e.document,params:A.params,value:Ne.value,viewProps:f.create({disabled:sn,hidden:Dn})});return new Ye(e.document,{binding:Ne,blade:ke(),props:se.fromObject({label:"label"in e.params?(u=S.optional.string(e.params.label).value)!==null&&u!==void 0?u:null:e.target.key}),valueController:Gn})}class sl{constructor(){this.pluginsMap_={blades:[],inputs:[],monitors:[]}}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(e){e.type==="blade"?this.pluginsMap_.blades.unshift(e):e.type==="input"?this.pluginsMap_.inputs.unshift(e):e.type==="monitor"&&this.pluginsMap_.monitors.unshift(e)}createInput(e,t,s){const u=t.read();if(W(u))throw new F({context:{key:t.key},type:"nomatchingcontroller"});const S=this.pluginsMap_.inputs.reduce((A,ee)=>A??el(ee,{document:e,target:t,params:s}),null);if(S)return S;throw new F({context:{key:t.key},type:"nomatchingcontroller"})}createMonitor(e,t,s){const u=this.pluginsMap_.monitors.reduce((S,A)=>S??nl(A,{document:e,params:s,target:t}),null);if(u)return u;throw new F({context:{key:t.key},type:"nomatchingcontroller"})}createBlade(e,t){const s=this.pluginsMap_.blades.reduce((u,S)=>u??as(S,{document:e,params:t}),null);if(!s)throw new F({type:"nomatchingview",context:{params:t}});return s}createBladeApi(e){if(e instanceof qe)return new He(e);if(e instanceof Ye)return new ot(e);if(e instanceof je)return new xt(e,this);const t=this.pluginsMap_.blades.reduce((s,u)=>s??u.api({controller:e,pool:this}),null);if(!t)throw F.shouldNeverHappen();return t}}function rl(){const n=new sl;return[ul,Ra,Na,Wa,Ta,Sa,Pa,ga,vo,Ka,Ja,Qa,be,Un,he,xn].forEach(e=>{n.register(e)}),n}function il(n){return Wt.isObject(n)?new Wt(n.x,n.y):new Wt}function ol(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y)}function Lt(n,e){if(!n)return;const t=[],s=Dr(n,e);s&&t.push(s);const u=Gr(n);return u&&t.push(u),new Mt(t)}function al(n,e){return new $t({assembly:zr,components:[Lt("x"in n?n.x:void 0,e.x),Lt("y"in n?n.y:void 0,e.y)]})}function Fr(n,e){const[t,s]=n?ka(n):[];if(!W(t)||!W(s))return Math.max(Math.abs(t??0),Math.abs(s??0));const u=pn(n);return Math.max(Math.abs(u)*10,Math.abs(e)*10)}function ll(n,e){const t=e instanceof $t?e.components[0]:void 0,s=e instanceof $t?e.components[1]:void 0,u=Fr(t,n.x),S=Fr(s,n.y);return Math.max(u,S)}function Nr(n,e){return{baseStep:pn(e),constraint:e,textProps:se.fromObject({draggingScale:hn(e,n),formatter:ft(qn(e,n))})}}function cl(n){if(!("y"in n))return!1;const e=n.y;return e&&"inverted"in e?!!e.inverted:!1}const ul={id:"input-point2d",type:"input",accept:(n,e)=>{if(!Wt.isObject(n))return null;const t=ye,s=Te(e,{expanded:t.optional.boolean,picker:t.optional.custom(rr),x:t.optional.custom(Ft),y:t.optional.object({inverted:t.optional.boolean,max:t.optional.number,min:t.optional.number,step:t.optional.number})});return s?{initialValue:n,params:s}:null},binding:{reader:n=>il,constraint:n=>al(n.params,n.initialValue),equals:Wt.equals,writer:n=>ol},controller:n=>{const e=n.document,t=n.value,s=n.constraint;if(!(s instanceof $t))throw F.shouldNeverHappen();const u="expanded"in n.params?n.params.expanded:void 0,S="picker"in n.params?n.params.picker:void 0;return new Ga(e,{axes:[Nr(t.rawValue.x,s.components[0]),Nr(t.rawValue.y,s.components[1])],expanded:u??!1,invertsY:cl(n.params),maxValue:ll(t.rawValue,s),parser:Gt,pickerLayout:S??"popup",value:t,viewProps:n.viewProps})}};class $r extends g{constructor(e){super(e),this.emitter_=new L,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new T(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get options(){return this.controller_.valueController.props.get("options")}set options(e){this.controller_.valueController.props.set("options",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,u=>{s(u.event)}),this}}class Wr extends g{constructor(e){super(e),this.emitter_=new L,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new T(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get maxValue(){return this.controller_.valueController.sliderController.props.get("maxValue")}set maxValue(e){this.controller_.valueController.sliderController.props.set("maxValue",e)}get minValue(){return this.controller_.valueController.sliderController.props.get("minValue")}set minValue(e){this.controller_.valueController.sliderController.props.set("minValue",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,u=>{s(u.event)}),this}}class qr extends g{constructor(e){super(e),this.emitter_=new L,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new T(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get formatter(){return this.controller_.valueController.props.get("formatter")}set formatter(e){this.controller_.valueController.props.set("formatter",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,u=>{s(u.event)}),this}}const dl=function(){return{id:"list",type:"blade",accept(n){const e=ye,t=Te(n,{options:e.required.custom(Wn),value:e.required.raw,view:e.required.constant("list"),label:e.optional.string});return t?{params:t}:null},controller(n){const e=new At(ir(n.params.options)),t=le(n.params.value,{constraint:e}),s=new Pn(n.document,{props:new se({options:e.values.value("options")}),value:t,viewProps:n.viewProps});return new Tt(n.document,{blade:n.blade,props:se.fromObject({label:n.params.label}),valueController:s})},api(n){return!(n.controller instanceof Tt)||!(n.controller.valueController instanceof Pn)?null:new $r(n.controller)}}}();function pl(n){return n.reduce((e,t)=>Object.assign(e,{[t.presetKey]:t.read()}),{})}function hl(n,e){n.forEach(t=>{const s=e[t.target.presetKey];s!==void 0&&t.writer(t.target,t.reader(s))})}class fl extends Et{constructor(e,t){super(e,t)}get element(){return this.controller_.view.element}importPreset(e){const t=this.controller_.rackController.rack.find(qe).map(s=>s.binding);hl(t,e),this.refresh()}exportPreset(){const e=this.controller_.rackController.rack.find(qe).map(t=>t.binding.target);return pl(e)}refresh(){this.controller_.rackController.rack.find(qe).forEach(e=>{e.binding.read()}),this.controller_.rackController.rack.find(Ye).forEach(e=>{e.binding.read()})}}class _l extends un{constructor(e,t){super(e,{expanded:t.expanded,blade:t.blade,props:t.props,root:!0,viewProps:t.viewProps})}}const ml={id:"slider",type:"blade",accept(n){const e=ye,t=Te(n,{max:e.required.number,min:e.required.number,view:e.required.constant("slider"),format:e.optional.function,label:e.optional.string,value:e.optional.number});return t?{params:t}:null},controller(n){var e,t;const s=(e=n.params.value)!==null&&e!==void 0?e:0,u=new Ct({max:n.params.max,min:n.params.min}),S=new vs(n.document,{baseStep:1,parser:Gt,sliderProps:new se({maxValue:u.values.value("max"),minValue:u.values.value("min")}),textProps:se.fromObject({draggingScale:hn(void 0,s),formatter:(t=n.params.format)!==null&&t!==void 0?t:oo}),value:le(s,{constraint:u}),viewProps:n.viewProps});return new Tt(n.document,{blade:n.blade,props:se.fromObject({label:n.params.label}),valueController:S})},api(n){return!(n.controller instanceof Tt)||!(n.controller.valueController instanceof vs)?null:new Wr(n.controller)}},bl=function(){return{id:"text",type:"blade",accept(n){const e=ye,t=Te(n,{parse:e.required.function,value:e.required.raw,view:e.required.constant("text"),format:e.optional.function,label:e.optional.string});return t?{params:t}:null},controller(n){var e;const t=new Nn(n.document,{parser:n.params.parse,props:se.fromObject({formatter:(e=n.params.format)!==null&&e!==void 0?e:s=>String(s)}),value:le(n.params.value),viewProps:n.viewProps});return new Tt(n.document,{blade:n.blade,props:se.fromObject({label:n.params.label}),valueController:t})},api(n){return!(n.controller instanceof Tt)||!(n.controller.valueController instanceof Nn)?null:new qr(n.controller)}}}();function vl(n){const e=n.createElement("div");return e.classList.add(Z("dfw")()),n.body&&n.body.appendChild(e),e}function jr(n,e,t){if(n.querySelector(`style[data-tp-style=${e}]`))return;const s=n.createElement("style");s.dataset.tpStyle=e,s.textContent=t,n.head.appendChild(s)}class gl extends fl{constructor(e){var t,s;const u=e??{},S=(t=u.document)!==null&&t!==void 0?t:l(),A=rl(),ee=new _l(S,{expanded:u.expanded,blade:ke(),props:se.fromObject({title:u.title}),viewProps:f.create()});super(ee,A),this.pool_=A,this.containerElem_=(s=u.container)!==null&&s!==void 0?s:vl(S),this.containerElem_.appendChild(this.element),this.doc_=S,this.usesDefaultWrapper_=!u.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw F.alreadyDisposed();return this.doc_}dispose(){const e=this.containerElem_;if(!e)throw F.alreadyDisposed();if(this.usesDefaultWrapper_){const t=e.parentElement;t&&t.removeChild(e)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(e){("plugin"in e?[e.plugin]:"plugins"in e?e.plugins:[]).forEach(s=>{this.pool_.register(s),this.embedPluginStyle_(s)})}embedPluginStyle_(e){e.css&&jr(this.document,`plugin-${e.id}`,e.css)}setUpDefaultPlugins_(){jr(this.document,"default",'.tp-tbiv_b,.tp-coltxtv_ms,.tp-ckbv_i,.tp-rotv_b,.tp-fldv_b,.tp-mllv_i,.tp-sglv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-mllv_i,.tp-sglv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--mo-fg);height:var(--bld-us);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-mllv_i::-webkit-scrollbar,.tp-sglv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-mllv_i::-webkit-scrollbar-corner,.tp-sglv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-mllv_i::-webkit-scrollbar-thumb,.tp-sglv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-br: var(--tp-base-border-radius, 6px);--cnt-h-p: var(--tp-container-horizontal-padding, 4px);--cnt-v-p: var(--tp-container-vertical-padding, 4px);--elm-br: var(--tp-element-border-radius, 2px);--bld-s: var(--tp-blade-spacing, 4px);--bld-us: var(--tp-blade-unit-size, 20px);--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tabv_c .tp-brkv>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-v-p))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tabv_c .tp-brkv>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--bld-s)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tabv_c .tp-brkv>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tabv_c .tp-brkv>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--elm-br);border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tabv_c .tp-brkv .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--elm-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);overflow:hidden;padding-left:var(--cnt-h-p);padding-right:calc(4px + var(--bld-us) + var(--cnt-h-p));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-h-p) + (var(--bld-us) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--elm-br);cursor:pointer;display:block;height:var(--bld-us);position:relative;width:var(--bld-us)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--bld-us)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--bld-s);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--bld-s)}.tp-colpv_rgb{display:flex;margin-top:var(--bld-s);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-v-p);padding-top:calc(var(--cnt-v-p) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--elm-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--bld-us)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--elm-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--elm-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;cursor:pointer;display:block;height:var(--bld-us);left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:var(--bld-us)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--elm-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--elm-br);color:var(--lbl-fg);cursor:pointer;height:var(--bld-us);line-height:var(--bld-us);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv.tp-fldv-not .tp-fldv_b{display:none}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--bld-us)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-h-p);padding-right:var(--cnt-h-p)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding:0 4px}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--bld-us)*3);line-height:var(--bld-us);padding:0 4px;resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--bld-us);margin-right:4px;position:relative;width:var(--bld-us)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--bld-s);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-p2dpv{padding-left:calc(var(--bld-us) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:6px;box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:168px;padding:var(--cnt-v-p) var(--cnt-h-p);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--bld-us);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--elm-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--bld-us) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_c{padding-bottom:var(--cnt-v-p);padding-left:4px;padding-top:var(--cnt-v-p)}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-h-p) + 4px);padding-right:calc(var(--cnt-h-p) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);bottom:2px;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);opacity:.5;overflow:hidden;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-txtv{position:relative}.tp-txtv_i{padding:0 4px}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:-3px;position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--bld-us) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--elm-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--font-family);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--bld-us) + var(--cnt-h-p));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv.tp-rotv-not .tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}'),this.pool_.getAll().forEach(e=>{this.embedPluginStyle_(e)}),this.registerPlugin({plugins:[ml,dl,xn,bl]})}}const wl=new P("3.1.10");h.BladeApi=g,h.ButtonApi=Y,h.FolderApi=Et,h.InputBindingApi=He,h.ListApi=$r,h.MonitorBindingApi=ot,h.Pane=gl,h.SeparatorApi=gn,h.SliderApi=Wr,h.TabApi=We,h.TabPageApi=Be,h.TextApi=qr,h.TpChangeEvent=T,h.VERSION=wl,Object.defineProperty(h,"__esModule",{value:!0})})})(Rs,Rs.exports);var jl=Rs.exports;const Kl=`// 2DGS preprocess — per-alive-Gauss view-dependent color eval.
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
`,Hl=`// 2DGS render — vertex+fragment.
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
  // Proberes off-diagonal terms (A01, A10) / tex_res. Unused when probe_mode==0.
  @location(11) @interpolate(flat) uv_skew     : vec2<f32>,
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
  // 0 = baked (per-surfel rect, diagonal affine, multi-layer atlas)
  // 1 = proberes (shared single-layer texture, general 2x2 affine + low-pass
  //     centre collapse). Set by the loader for NAT2 atlas_format 9/10.
  probe_mode    : u32,
  // Explicit u32 pads (NOT vec3<f32>): a vec3 aligns to 16 and would push the
  // struct to 48 B, mismatching buildStubAtlas's 32-byte TexParams buffer.
  _pad0 : u32, _pad1 : u32, _pad2 : u32,
};

@group(0) @binding(0) var<uniform>       render_settings : RenderSettings;
@group(1) @binding(0) var<storage, read> splats_2d       : array<Splat2DGS>;
@group(1) @binding(1) var<storage, read> indices         : array<u32>;
@group(2) @binding(0) var                atlas           : texture_2d_array<f32>;
@group(2) @binding(1) var                atlas_samp      : sampler;
@group(2) @binding(2) var<uniform>       tex_params      : TexParams;
// Per-surfel probe affines, stride 6 [A00, A01, A10, A11, t0, t1], already
// divided by tex_res. Read directly here (indexed by gauss_id) instead of
// packed through Splat2DGS varyings — the packed route had to survive
// cull -> preprocess -> vertex -> fragment and could not be verified offline.
// Only read when tex_params.probe_mode != 0.
@group(2) @binding(3) var<storage, read> atlas_probes    : array<f32>;

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
    // Under probe_mode the layer/_pad slots carry A01/A10 (see preprocess).
    // Harmless otherwise — probe_mode==0 never reads uv_skew.
    out.uv_skew     = vec2<f32>(bitcast<f32>(splat.layer), bitcast<f32>(splat._pad));
    return out;
}

// Shared fragment evaluation — returns un-premultiplied rgb, alpha, and the
// per-pixel VIEW-SPACE depth of the exact ray-splat intersection (zv). All
// three fragment entry points (sorted fs_main, hybrid-transparency fs_core /
// fs_tail) call this; discards inside cull the fragment in every mode.
struct ShadeOut {
    rgb : vec3<f32>,
    a   : f32,
    zv  : f32,
};

fn shade(in: VertexOutput) -> ShadeOut {
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
        let rgba = textureSampleLevel(atlas, atlas_samp, uv, layer, 0.0);
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
    let sh = shade(in);
    return vec4<f32>(sh.rgb, 1.0) * sh.a;
}

// ---------------------------------------------------------------------------
// Hybrid-transparency path (HTGS, Hahlbohm et al. 2025, K=1 hardware form).
// No sorting at all. Two geometry passes over the SAME unsorted instances:
//
//   fs_core — depth32 attachment (write, compare LESS). frag_depth is the
//     EXACT per-pixel ray-splat intersection depth, so the z-buffer resolves
//     the true frontmost fragment per pixel. Blending OFF; the target keeps
//     the winner's premultiplied (α·c, α).
//
//   fs_tail — same depth attachment, compare GREATER, write OFF: every
//     fragment strictly behind the core winner. MRT, fixed-function
//     order-independent: target0 accumulates (Σα·c, Σα) additively; target1
//     accumulates T = Π(1−α) multiplicatively (srcFactor zero, dstFactor
//     one-minus-src, cleared to 1).
//
// ht_composite.wgsl then blends per HTGS Eq. 17 with K=1:
//   C = α_F·c_F + (1−α_F)·(1−T_tail)·(Σαc/Σα)   [+ T_total·bg via canvas clear]
//
// frag_depth mapping: log2(1+zv)/22 — any strictly monotone map works since
// only this pass pair consumes the buffer (never compared against mesh_depth).
// Log spacing keeps depth32float resolution roughly uniform in relative depth.
// ---------------------------------------------------------------------------
fn ht_depth(zv: f32) -> f32 {
    return clamp(log2(1.0 + max(zv, 0.0)) * (1.0 / 22.0), 0.0, 1.0);
}

fn ht_inv_depth(d: f32) -> f32 {
    return exp2(d * 22.0) - 1.0;
}

// Tail-only bindings (group 3): the core pass's depth buffer (bound read-only
// — it's simultaneously the pass's read-only depth attachment) + the depth-
// weighting strength. The unweighted K=1 tail average treats a fragment 10 cm
// behind the core surface the same as one 1 mm behind it → background bleed
// ("semi-transparent" look) and averaged-away atlas residuals. Weighting each
// tail fragment by exp(−k·(zv−zv_core)/zv_core) — the WBOIT-style fix HTGS
// §Limitations suggests, anchored at the core depth — redistributes the
// normalized average (Σwαc/Σwα, w cancels in scale) toward the fragments just
// behind the surface, which are the ones sorted blending would show crisply.
// k=0 restores the uniform average. The transmittance product target stays
// UNWEIGHTED — it is the tail's physical total opacity.
@group(3) @binding(0) var ht_core_depth : texture_depth_2d;
struct HtParams { tail_k : f32, _p0 : f32, _p1 : f32, _p2 : f32 };
@group(3) @binding(1) var<uniform> ht_params : HtParams;

struct CoreOut {
    @location(0) color : vec4<f32>,
    @builtin(frag_depth) depth : f32,
};

@fragment
fn fs_core(in: VertexOutput) -> CoreOut {
    let sh = shade(in);
    var out : CoreOut;
    out.color = vec4<f32>(sh.rgb, 1.0) * sh.a;
    out.depth = ht_depth(sh.zv);
    return out;
}

struct TailOut {
    @location(0) accum : vec4<f32>,   // (α·c, α) — additive
    @location(1) trans : vec4<f32>,   // .r = α — multiplicative (1−α) product
    @builtin(frag_depth) depth : f32,
};

// HT mode 2 tail: the tail draws in RADIX-SORTED order with standard
// premultiplied over blending into its own target (no averaging — crisp
// textures, proper layering), depth-tested GREATER against the exact core.
// The dominant popping term (frontmost flip) is gone via the core; residual
// order flips within the tail are attenuated by (1−α_F) at composite.
struct TailSortedOut {
    @location(0) color : vec4<f32>,
    @builtin(frag_depth) depth : f32,
};

@fragment
fn fs_tail_sorted(in: VertexOutput) -> TailSortedOut {
    let sh = shade(in);
    var out : TailSortedOut;
    out.color = vec4<f32>(sh.rgb, 1.0) * sh.a;
    out.depth = ht_depth(sh.zv);
    return out;
}

// ---------------------------------------------------------------------------
// WSR path (?wsr=1): fully sort-free weighted-sum composite with a LEARNED
// per-surfel occlusion (docs/WSR_DISTILL.md in nest-splatting). Single MRT
// geometry pass over unsorted instances, no core, no depth attachment:
//   target0 += (w·c, w),  w = α·occ   (additive)
//   target1  = target1 · (1−α)        (multiplicative coverage product)
// wsr_composite then draws (1−P)·Σwc/Σw premultiplied over the bg-cleared
// canvas. occ is the 7th float of the stride-7 probe records (WSR bundles;
// header flag bit 0). Trained by the WSR finetune to reproduce sorted
// blending — popping is structurally impossible (no order anywhere).
// ---------------------------------------------------------------------------
struct WsrOut {
    @location(0) accum : vec4<f32>,   // (w·c, w) — additive
    @location(1) trans : vec4<f32>,   // .r = α — multiplicative (1−α) product
};

@fragment
fn fs_wsr(in: VertexOutput) -> WsrOut {
    let sh = shade(in);
    // gauss_id bit 31 = untextured flag (no probe record) → occ = 1.
    let gid = in.gauss_id & 0x7fffffffu;
    var occ = 1.0;
    if (in.gauss_id & 0x80000000u) == 0u {
        occ = atlas_probes[gid * 7u + 6u];
    }
    let w = sh.a * occ;
    var out : WsrOut;
    out.accum = vec4<f32>(sh.rgb * w, w);
    out.trans = vec4<f32>(sh.a, 0.0, 0.0, sh.a);
    return out;
}

// ---------------------------------------------------------------------------
// Gated WSR (?wsr=2) — the 2-pass transmittance-saturation gate.
// Pass 1 (fs_wsr_bins): every fragment adds its optical depth −log(1−α) into
// one of 16 log-depth bins per pixel (4×rgba16float MRT, additive blending —
// order-independent by construction). Pass 2 (fs_wsr_gated): each fragment
// reads the finished bins, computes the EXCLUSIVE-prefix transmittance of all
// strictly-nearer bins T_before(bin), and discards itself when T_before <
// wsr_gate_tau — "once accumulated opacity saturates, gate the rest", as a
// DEPTH relation (no sort, frame-coherent). Then the normal WSR accumulate.
// Bin mapping MUST match the CUDA trainer byte-for-byte
// (diff_surfel_3D_sh_res_probe_wsr forward.cu wsr_gate_bin: zmin=0.2,
// zmax=120, 16 bins):
//   d = clamp((log2(1+zv) − LO) · INVR, 0, 1),  bin = min(15, floor(d·16))
// ---------------------------------------------------------------------------
const WSR_GATE_LO   : f32 = 0.2630344058337938;   // log2(1 + 0.2)
const WSR_GATE_INVR : f32 = 0.15023207295953746;  // 1/(log2(1+120) − LO)
const WSR_GATE_TAU  : f32 = 0.05;                 // saturation threshold

fn wsr_gate_bin(zv : f32) -> u32 {
    let d = clamp((log2(1.0 + max(zv, 0.0)) - WSR_GATE_LO) * WSR_GATE_INVR, 0.0, 1.0);
    return min(15u, u32(d * 16.0));
}

// Lean alpha+depth evaluation for the bin pre-pass: duplicates shade()'s
// geometry/kernel math (CONIC affine, low-pass, beta kernel, same culls) but
// skips SV color and the atlas fetch entirely. KEEP IN SYNC with shade() —
// a divergence here silently shifts the gate against the blend pass.
struct AlphaOut { a : f32, zv : f32 };

fn shade_alpha(in: VertexOutput) -> AlphaOut {
    let pixf = floor(in.position.xy);
    if (in.gauss_id & 0x80000000u) != 0u {
        let dx_e = pixf - in.center_pix;
        let m_e  = in.Tu.x * dx_e.x * dx_e.x
                 + 2.0 * in.Tu.y * dx_e.x * dx_e.y
                 + in.Tu.z * dx_e.y * dx_e.y;
        if m_e < 0.0 { discard; }
        let alpha_e = min(0.99, in.color.a * exp(-0.5 * m_e));
        if alpha_e < 1.0 / 255.0 { discard; }
        if in.depth_plane.z < 0.2 { discard; }
        return AlphaOut(alpha_e, in.depth_plane.z);
    }
    let J00 = in.Tu.z; let J01 = in.Tv.x;
    let J10 = in.Tv.y; let J11 = in.Tv.z;
    let dwdxr = in.Tw.x; let dwdyr = in.Tw.y;
    let d = pixf - in.center_pix;
    let du_lin = J00 * d.x + J01 * d.y;
    let dv_lin = J10 * d.x + J11 * d.y;
    let denom  = 1.0 + dwdxr * d.x + dwdyr * d.y;
    if denom < 0.1 { discard; }
    let inv_d  = 1.0 / denom;
    let s      = vec2<f32>(in.Tu.x + du_lin * inv_d, in.Tu.y + dv_lin * inv_d);
    let rho3d  = dot(s, s);
    let d_pix = in.center_pix - pixf;
    let rho2d = FILTER_INV_SQUARE * dot(d_pix, d_pix);
    let depth_plane_interp = dot(in.depth_plane, vec3<f32>(s, 1.0));
    let depth = select(in.depth_plane.z, depth_plane_interp, rho3d <= rho2d);
    if depth < 0.2 { discard; }
    var alpha_beta : f32;
    if BETA_KERNEL == 0u {
        alpha_beta = exp(-rho3d * 0.5);
    } else {
        if rho3d >= K_BETA_SQ + 1e-6 { discard; }
        let base = max(0.0, 1.0 - rho3d / K_BETA_SQ);
        let sh = in.shape;
        if sh >= 1.99 && sh <= 2.01 {
            alpha_beta = base * base;
        } else if sh >= 0.99 && sh <= 1.01 {
            alpha_beta = base;
        } else if sh >= 0.49 && sh <= 0.51 {
            alpha_beta = sqrt(base);
        } else if sh >= 3.99 && sh <= 4.01 {
            let b2 = base * base;
            alpha_beta = b2 * b2;
        } else {
            alpha_beta = pow(base, sh);
        }
    }
    let alpha_lp = exp(-rho2d * 0.5);
    let b = min(0.99, in.color.a * max(alpha_beta, alpha_lp));
    if b < 1.0 / 255.0 { discard; }
    return AlphaOut(b, depth);
}

struct WsrBinsOut {
    @location(0) b0 : vec4<f32>,
    @location(1) b1 : vec4<f32>,
    @location(2) b2 : vec4<f32>,
    @location(3) b3 : vec4<f32>,
};

@fragment
fn fs_wsr_bins(in: VertexOutput) -> WsrBinsOut {
    let g = shade_alpha(in);
    let od = -log(1.0 - g.a);          // α ≤ 0.99 ⇒ od ≤ 4.6, fp16-safe sums
    let bin = wsr_gate_bin(g.zv);
    var v = vec4<f32>(0.0);
    v[bin % 4u] = od;
    let t = bin / 4u;
    var out : WsrBinsOut;
    out.b0 = select(vec4<f32>(0.0), v, t == 0u);
    out.b1 = select(vec4<f32>(0.0), v, t == 1u);
    out.b2 = select(vec4<f32>(0.0), v, t == 2u);
    out.b3 = select(vec4<f32>(0.0), v, t == 3u);
    return out;
}

// Bin textures for pass 2 (distinct bindings — group 3 slots 0/1 belong to
// the ht path's depth/params, and one entry point must never see both).
@group(3) @binding(4) var wsr_bin_t0 : texture_2d<f32>;
@group(3) @binding(5) var wsr_bin_t1 : texture_2d<f32>;
@group(3) @binding(6) var wsr_bin_t2 : texture_2d<f32>;
@group(3) @binding(7) var wsr_bin_t3 : texture_2d<f32>;

@fragment
fn fs_wsr_gated(in: VertexOutput) -> WsrOut {
    let sh = shade(in);
    // Exclusive-prefix transmittance of strictly-nearer bins.
    let p = vec2<i32>(floor(in.position.xy));
    let bin = wsr_gate_bin(sh.zv);
    var bins = array<vec4<f32>, 4>(
        textureLoad(wsr_bin_t0, p, 0), textureLoad(wsr_bin_t1, p, 0),
        textureLoad(wsr_bin_t2, p, 0), textureLoad(wsr_bin_t3, p, 0));
    var od = 0.0;
    for (var i = 0u; i < bin; i = i + 1u) {
        od += bins[i / 4u][i % 4u];
    }
    if exp(-od) < WSR_GATE_TAU { discard; }
    let gid = in.gauss_id & 0x7fffffffu;
    var occ = 1.0;
    if (in.gauss_id & 0x80000000u) == 0u {
        occ = atlas_probes[gid * 7u + 6u];
    }
    let w = sh.a * occ;
    var out : WsrOut;
    out.accum = vec4<f32>(sh.rgb * w, w);
    out.trans = vec4<f32>(sh.a, 0.0, 0.0, sh.a);
    return out;
}

// ht=3 tail: like fs_tail but weighted by the LEARNED per-surfel occlusion
// (stride-7 probe records, probe_mode 2) instead of the exp(−k·Δz) depth
// heuristic — matches the --wsr_composite CUDA finetune operator exactly:
//   C = α_F·c_F + (1−α_F)·(1−P_tail)·(Σ α·occ·c / Σ α·occ).
// Depth test vs the core (GREATER, no write) supplies the front/tail split;
// ht_params is unused here.
@fragment
fn fs_tail_occ(in: VertexOutput) -> TailOut {
    let sh = shade(in);
    let gid = in.gauss_id & 0x7fffffffu;
    var occ = 1.0;
    if (in.gauss_id & 0x80000000u) == 0u {
        occ = atlas_probes[gid * 7u + 6u];
    }
    var out : TailOut;
    out.accum = vec4<f32>(sh.rgb * sh.a * occ, sh.a * occ);
    out.trans = vec4<f32>(sh.a, 0.0, 0.0, sh.a);
    out.depth = ht_depth(sh.zv);
    return out;
}

@fragment
fn fs_tail(in: VertexOutput) -> TailOut {
    let sh = shade(in);
    let p = vec2<i32>(floor(in.position.xy));
    let zc = ht_inv_depth(textureLoad(ht_core_depth, p, 0));
    let rel = max(0.0, (sh.zv - zc) / max(zc, 1e-3));
    // Exponent clamp at 10, NOT 20: the accum target is rgba16float, whose
    // smallest subnormal is 5.96e-8. exp(-20) = 2.06e-9 flushes to ZERO on the
    // ROP write, so at high ht_k every tail fragment more than ~10/k relative
    // depth behind the core vanished from the weighted sum while the
    // (unweighted) transmittance product still reported real opacity — the
    // black-seam-at-surfel-boundaries artifact. exp(-10) = 4.54e-5 is safely
    // fp16-normal; relative weighting beyond 10 e-folds is visually nil.
    let w = exp(-min(10.0, ht_params.tail_k * rel));
    var out : TailOut;
    out.accum = vec4<f32>(sh.rgb * sh.a * w, sh.a * w);
    out.trans = vec4<f32>(sh.a, 0.0, 0.0, sh.a);
    out.depth = ht_depth(sh.zv);
    return out;
}
`,Yl=`// Hybrid-transparency composite (HTGS Eq. 17, K=1 hardware form).
//
// Inputs (all canvas-resolution, written by the fs_core / fs_tail passes in
// render_2dgs.wgsl):
//   core_tex  : rgba16float — frontmost fragment's premultiplied (α_F·c_F, α_F)
//   accum_tex : rgba16float — order-independent tail accumulation (Σα·c, Σα)
//   trans_tex : r16float    — tail transmittance T = Π(1−α), cleared to 1
//
// Output (premultiplied, blended over the bg-cleared canvas):
//   C = α_F·c_F + (1−α_F)·(1−T)·(Σα·c / Σα)
//   A = α_F + (1−α_F)·(1−T)
// The canvas clear supplies the T_total·bg term through the premultiplied
// over-blend — identical background handling to the sorted path.

@group(0) @binding(0) var core_tex  : texture_2d<f32>;
@group(0) @binding(1) var accum_tex : texture_2d<f32>;
@group(0) @binding(2) var trans_tex : texture_2d<f32>;

@vertex
fn vs_main(@builtin(vertex_index) vid: u32) -> @builtin(position) vec4<f32> {
    // Single fullscreen triangle.
    const pos = array(
        vec2<f32>(-1.0, -1.0),
        vec2<f32>( 3.0, -1.0),
        vec2<f32>(-1.0,  3.0),
    );
    return vec4<f32>(pos[vid], 0.0, 1.0);
}

@fragment
fn fs_main(@builtin(position) frag_coord: vec4<f32>) -> @location(0) vec4<f32> {
    let dims = vec2<i32>(textureDimensions(core_tex));
    let p = clamp(vec2<i32>(floor(frag_coord.xy)), vec2<i32>(0), dims - vec2<i32>(1));

    let core = textureLoad(core_tex, p, 0);
    let acc  = textureLoad(accum_tex, p, 0);
    let T    = textureLoad(trans_tex, p, 0).r;

    var tail_a = clamp(1.0 - T, 0.0, 1.0);
    var tail_rgb = vec3<f32>(0.0);
    if acc.a > 1e-4 {
        tail_rgb = acc.rgb / acc.a;
    } else {
        // No usable weighted colour: every tail fragment's w = exp(-k*rel)
        // underflowed (happens as ht_k rises). tail_a comes from the
        // UNWEIGHTED transmittance product, so it is still large -- leaving
        // tail_rgb at 0 composites an OPAQUE BLACK layer over the core, which
        // is the black seam-at-high-ht_k artifact (visible against any
        // background because it is painted, not background showing through).
        // Unknown colour must contribute nothing, not black.
        tail_a = 0.0;
    }

    let rgb = core.rgb + (1.0 - core.a) * tail_rgb * tail_a;
    let a   = core.a   + (1.0 - core.a) * tail_a;
    return vec4<f32>(rgb, a);
}

// WSR composite (?wsr=1): pure sort-free weighted sum, no core at all.
//   accum_tex = (Σ w·c, Σ w) with w = α·occ  (fs_wsr)
//   trans_tex = P = Π(1−α)                    (coverage product)
//   C = (1−P)·(Σwc/Σw),  A = 1−P   — premultiplied over bg-cleared canvas.
// core_tex is bound but unread (shared bind group layout with the HT modes).
@fragment
fn fs_wsr_composite(@builtin(position) frag_coord: vec4<f32>) -> @location(0) vec4<f32> {
    let dims = vec2<i32>(textureDimensions(accum_tex));
    let p = clamp(vec2<i32>(floor(frag_coord.xy)), vec2<i32>(0), dims - vec2<i32>(1));
    let acc = textureLoad(accum_tex, p, 0);
    let P   = clamp(textureLoad(trans_tex, p, 0).r, 0.0, 1.0);
    var a = 1.0 - P;
    var rgb = vec3<f32>(0.0);
    if acc.a > 1e-6 {
        rgb = (acc.rgb / acc.a) * a;
    } else {
        a = 0.0;   // no usable colour → contribute nothing, not black
    }
    return vec4<f32>(rgb, a);
}

// HT mode 2 composite: accum_tex holds the SORTED premultiplied tail blend
// (standard over-composited among tail fragments). Exact suffix compose:
//   C = α_F·c_F + (1−α_F)·C_tail,   A = α_F + (1−α_F)·A_tail
@fragment
fn fs_sorted_tail(@builtin(position) frag_coord: vec4<f32>) -> @location(0) vec4<f32> {
    let dims = vec2<i32>(textureDimensions(core_tex));
    let p = clamp(vec2<i32>(floor(frag_coord.xy)), vec2<i32>(0), dims - vec2<i32>(1));
    let core = textureLoad(core_tex, p, 0);
    let tail = textureLoad(accum_tex, p, 0);
    return vec4<f32>(
        core.rgb + (1.0 - core.a) * tail.rgb,
        core.a   + (1.0 - core.a) * tail.a,
    );
}
`,Zl=`const WG_SIZE = 256u;
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
}`,Xl=`// 2DGS surfel cull pass — forked from gaussian_cull.wgsl.
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
                    // FOOTPRINT-AWARE sampling (anti-popping). A single
                    // center-texel point sample is discontinuous two ways:
                    // at the mesh's own silhouette adjacent texels flip
                    // between finite depth and far-plane (1.0 = no hit), and
                    // a wide surfel's center samples one texel while its
                    // visible splat spans dozens. Both make the cull decision
                    // flicker with sub-pixel camera motion — no depth-band
                    // fade can bridge a discontinuity in the SAMPLED value.
                    // Fix: 5 taps (center + ±r on each axis, r = projected
                    // surfel radius in pixels) combined MOST-PERMISSIVELY:
                    // any no-hit tap ⇒ keep outright; otherwise fade against
                    // the DEEPEST tap. A surfel only fades when its whole
                    // footprint is confidently inside and behind the mesh.
                    let sxy_r = unpack2x16float(s.scale_rot[0]);
                    let zv_r = max(camspace.z, 1e-4);
                    let r_px = clamp(max(sxy_r.x, sxy_r.y) / zv_r * camera.focal.y,
                                     1.0, 64.0);
                    var mesh_z : f32 = 0.0;   // running MAX over taps
                    var any_miss : bool = false;
                    for (var ti = 0u; ti < 5u; ti++) {
                        var ox = 0.0; var oy = 0.0;
                        if ti == 1u { ox =  r_px; }
                        else if ti == 2u { ox = -r_px; }
                        else if ti == 3u { oy =  r_px; }
                        else if ti == 4u { oy = -r_px; }
                        let tx = clamp(i32(px_f + ox), 0, tex_dims.x - 1);
                        let ty = clamp(i32(py_f + oy), 0, tex_dims.y - 1);
                        let mz = textureLoad(mesh_depth_tex, vec2<i32>(tx, ty), 0);
                        if mz >= 0.9999 {   // far-plane clear ⇒ no mesh at this tap
                            any_miss = true;
                        }
                        mesh_z = max(mesh_z, mz);
                    }
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
                        // Standard: fade out surfels BEHIND the mesh, with
                        // two anti-popping measures on top of the old binary
                        // compare (a hard center-test pops LARGE surfels in
                        // and out as the camera moves — their footprint is
                        // visible long after their center crosses the wall):
                        //   1. per-surfel SCALE SLACK (GES-style adaptive ε):
                        //      a surfel gets max(sx, sy) · MESH_SLACK_K of
                        //      extra depth allowance before the fade starts,
                        //      so big discs whose centers sit slightly behind
                        //      the wall but whose rims are visible survive;
                        //   2. a metric FADE BAND: opacity ramps 1 → 0 over
                        //      MESH_FADE_BAND_M metres beyond the slack
                        //      instead of a step — stateless, view-continuous,
                        //      no temporal popping at the decision boundary.
                        // Metres → NDC-z via the projective slope dz_ndc/dz =
                        // −p11/z² (p11 = proj[3].z = −zfar·znear/(zfar−znear)).
                        const MESH_SLACK_K    : f32 = 2.0;
                        const MESH_FADE_BAND_M : f32 = 0.012;
                        let sxy = unpack2x16float(s.scale_rot[0]);
                        let slack_w = MESH_SLACK_K * max(sxy.x, sxy.y);
                        let zv = max(camspace.z, 1e-4);
                        let ndc_per_m = -camera.proj[3].z /
                            (zv * max(zv + slack_w + MESH_FADE_BAND_M, 1e-4));
                        let start = mesh_z + ndc_per_m * slack_w;
                        let band  = max(ndc_per_m * MESH_FADE_BAND_M, 1e-7);
                        let fade = 1.0 - smoothstep(start, start + band, z_ndc);
                        opacity = opacity * fade;
                        if opacity <= 1.0 / 255.0 {
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
`,Ql=`// Depth-only rasterization of a proxy triangle mesh — feeds the mesh Z-cull
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
`,Jl=`// Debug overlay — renders the proxy mesh as translucent green triangles on
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
`,ec=`// shader implementing gpu radix sort.

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
`,tc=`// shader implementing gpu radix sort.

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
`,nc=`// ============================================================================
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
}`,vi=32,Us=1,Vs=2,si=4,Os=8,gi=4,sc=7<<gi,ri=128,ii=256,rc=0,Kt=new ArrayBuffer(vi),at={canvas_size:new Uint32Array(Kt,0,2),accel_flags:new Uint32Array(Kt,8,1),feature_mode:new Uint32Array(Kt,12,1),gaussian_scaling:new Float32Array(Kt,16,1),sh_bias:new Float32Array(Kt,20,1),color_K:new Uint32Array(Kt,24,1),walltime:new Float32Array(Kt,28,1)};function ic(o){at.canvas_size[0]=o.width>>>0,at.canvas_size[1]=o.height>>>0,at.accel_flags[0]=(o.accel_flags??Us|Vs)>>>0,at.feature_mode[0]=(o.feature_mode??rc)>>>0,at.gaussian_scaling[0]=o.gaussian_scaling??1,at.sh_bias[0]=o.sh_bias??.5,at.color_K[0]=(o.color_K??0)>>>0,at.walltime[0]=o.walltime??0}function wi(o,a){o.queue.writeBuffer(a,0,Kt)}function is(o,a,h){h&&o&&a&&wi(o,a)}function Xn(o,a,h,P,g=!0){at.canvas_size[0]=o>>>0,at.canvas_size[1]=a>>>0,is(h??null,P??null,g)}function oi(o,a,h,P=!0){at.gaussian_scaling[0]=o,is(a??null,h??null,P)}function ai(o,a,h,P=!0){at.sh_bias[0]=o,is(a??null,h??null,P)}function on(o,a,h,P=!0){let g=at.accel_flags[0];if(o.oac!==void 0&&(g=o.oac?g|Us:g&~Us),o.spr!==void 0&&(g=o.spr?g|Vs:g&~Vs),o.bfc!==void 0&&(g=o.bfc?g|si:g&~si),o.meshCull!==void 0&&(g=o.meshCull?g|Os:g&~Os),o.meshSampleMode!==void 0){const E=(o.meshSampleMode&7)<<gi;g=g&~sc|E}o.meshSilhouetteCull!==void 0&&(g=o.meshSilhouetteCull?g|ri:g&~ri),o.meshInvertDepth!==void 0&&(g=o.meshInvertDepth?g|ii:g&~ii),at.accel_flags[0]=g>>>0,is(a??null,h??null,P)}const oc=256,ac=vi,lc=8,cc=96,uc=12,Ws=8,It=1<<Ws,an=256,ns=32/Ws,dc=0,li=ns&1;function ci(o,a){return{sort_indices_buffer:a.createBuffer({label:"ping-pong payload (indices)",size:o*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),sort_depths_buffer:a.createBuffer({label:"ping-pong keys (depths)",size:o*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})}}function pc(o,a){const h=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:7,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),P=o.createPipelineLayout({bindGroupLayouts:[h]}),g=E=>o.createComputePipeline({layout:P,compute:{module:a,entryPoint:E,constants:{WG_SIZE:an}}});return{l0TileScan:g("prefix_l0_tile_scan"),l1TileScanOnL0:g("prefix_l1_tile_scan_on_l0_sums"),l1ScanSums:g("prefix_scan_l1_sums"),addL1ToL0:g("prefix_add_l1_to_l0_offsets"),addL0ToElems:g("prefix_add_l0_to_elements"),computeDigitBase:g("compute_digit_base"),prefixBindGroupLayout:h}}function hc(o,a,h){const P=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),g=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]}),E=o.createPipelineLayout({bindGroupLayouts:[P]}),T=o.createPipelineLayout({bindGroupLayouts:[g]}),$=[];for(let I=0;I<ns;I++){const O={PASS_ID:I+dc,RS_RADIX_LOG2:Ws,RS_RADIX_SIZE:It};$.push({localHistogram:o.createComputePipeline({layout:E,compute:{module:a,entryPoint:"local_histogram_pass",constants:O}}),scatterElements:o.createComputePipeline({layout:T,compute:{module:h,entryPoint:"scatter_elements",constants:O}})})}return{passes:$,localHistogramBindGroupLayout:P,scatterBindGroupLayout:g}}function fc(o){const a=o.createShaderModule({label:"local histogram",code:tc}),h=o.createShaderModule({label:"scatter",code:ec}),P=o.createShaderModule({label:"blelloch prefix",code:nc}),g=pc(o,P),E=hc(o,a,h);return{localHistogramBindGroupLayout:E.localHistogramBindGroupLayout,scatterBindGroupLayout:E.scatterBindGroupLayout,passes:E.passes,hierarchicalBlelloch:g}}function _c(o){const a=o.createTexture({label:"atlas stub (4x4x1 zero RGBA8)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),h=a.createView({dimension:"2d-array"}),P=o.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge"}),g=o.createBuffer({label:"atlas rects stub (5 zero floats)",size:4*5,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),E=o.createBuffer({label:"tex_params stub (atlas_enabled=0)",size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(E,0,new ArrayBuffer(32));const T={width:0,height:0,channels:0,kernel_type:0,num_rects:0,uv_extent:0,sb_number:0,format:4294967295,sh_bias:0,res_bias:0,compact_mult:0,layer_h:0,atlas_scale:0,atlas_offset:0,n_layers:0,n_cols:1,layer_cuts:new Uint32Array,column_cuts:new Uint32Array([0,0]),slice_width:0,rects_expanded:new Float32Array,atlas_bytes:new Uint8Array};return{texture:a,view:h,sampler:P,rectsBuffer:g,texParamsBuffer:E,meta:T}}class mc{constructor(a,h,P,g,E,T=null,$=null){G(this,"device");G(this,"pc");G(this,"presentationFormat");G(this,"camera_buffer");G(this,"render_settings_buffer");G(this,"draw_indirect_buffer");G(this,"splat_2d_buffer");G(this,"querySet");G(this,"resolveBuffer");G(this,"resultBuffer");G(this,"queriesPerFrame",lc);G(this,"queryCapacityFrames",200);G(this,"sort_prefixBindGroup");G(this,"sort_pipelines");G(this,"sort_localHistogramBindGroups");G(this,"sort_scatterBindGroups");G(this,"lastFrame",0);G(this,"frameCount",0);G(this,"preprocessPipeline");G(this,"cullPipeline");G(this,"renderPipeline");G(this,"indirectPipeline");G(this,"htEnabled",!1);G(this,"wsrEnabled",!1);G(this,"wsrPipeline",null);G(this,"wsrCompositePipeline",null);G(this,"wsrGateEnabled",!1);G(this,"wsrBinsPipeline",null);G(this,"wsrGatedPipeline",null);G(this,"wsrBinsBgl",null);G(this,"wsrBinsBindGroup",null);G(this,"wsrBinTextures",[null,null,null,null]);G(this,"wsrBinViews",[null,null,null,null]);G(this,"htSortedTail",!1);G(this,"htOccTail",!1);G(this,"htTailOccPipeline",null);G(this,"renderShaderModule");G(this,"betaKernel",1);G(this,"renderSettingsBgl");G(this,"renderSplatsBgl");G(this,"atlasBgl");G(this,"htCorePipeline",null);G(this,"htTailPipeline",null);G(this,"htTail2Pipeline",null);G(this,"htCompositePipeline",null);G(this,"htComposite2Pipeline",null);G(this,"htCompositeBgl",null);G(this,"htCompositeBindGroup",null);G(this,"htDepthTexture",null);G(this,"htDepthView",null);G(this,"htCoreTexture",null);G(this,"htCoreView",null);G(this,"htAccumTexture",null);G(this,"htAccumView",null);G(this,"htTransTexture",null);G(this,"htTransView",null);G(this,"htW",0);G(this,"htH",0);G(this,"htTailBgl",null);G(this,"htTailBindGroup",null);G(this,"htParamsBuffer",null);G(this,"htTailK",150);G(this,"sort_info_buffer");G(this,"sort_ping_pong");G(this,"crsBg");G(this,"gsBg");G(this,"cullBg2");G(this,"preprocessBg1");G(this,"renderSplatsBindGroup");G(this,"renderSettingsBindGroup");G(this,"atlasBindGroup");G(this,"indirectBindGroup");G(this,"sh_solvers_buffer");G(this,"mesh");G(this,"meshDepthPipeline",null);G(this,"meshDepthCameraBindGroup",null);G(this,"meshDepthMarginBindGroup",null);G(this,"meshMarginBuffer",null);G(this,"meshDepthTexture",null);G(this,"meshDepthView",null);G(this,"meshCullBindGroupLayout");G(this,"meshCullBindGroup");G(this,"meshCullWidth",0);G(this,"meshCullHeight",0);G(this,"meshStubTexture");G(this,"meshStubView");G(this,"bfcParamsBuffer");G(this,"meshOverlayPipeline",null);G(this,"meshOverlayEnabled",!1);G(this,"bgColor",[0,0,0,0]);G(this,"showPerfDialogNext",!1);G(this,"requestReorderNextFrame",!1);G(this,"reorderInFlight",!1);G(this,"downloadOnceNextRead",!1);G(this,"downloadOnceFileName","fps_metrics");G(this,"allFrameTimes",[]);G(this,"lastStageBreakdownMs",null);G(this,"timeQueryEnabled");G(this,"atlas");G(this,"atlasParamsBuffer");this.mesh=$;const I=E.includes("timestamp-query");this.timeQueryEnabled=I,I&&kt("⏰ using timestamp-query"),this.pc=a,this.device=h,this.presentationFormat=P,this.camera_buffer=g,this.atlas=T??_c(h),this.atlasParamsBuffer=h.createBuffer({label:"atlas_params UBO",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.writeAtlasParams(),h.addEventListener("uncapturederror",se=>{console.error("A WebGPU error was not captured:",se.error)}),this._setupTimestampQueries(),this._setupBuffers();const O=(Math.floor((this.pc.num_points+an-1)/an)+1)*an,U=Math.ceil(O/an);console.log(`keys count adjusted: ${O}`),console.log(`key size: ${this.pc.num_points}`);const W=h.createBuffer({label:"sort info",size:16*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT});this.sort_pipelines=fc(h);const H=[ci(O,h),ci(O,h)],R=h.createBuffer({label:"workgroup histograms",size:U*It*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),N=h.createBuffer({label:"workgroup prefixes",size:U*It*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),F=h.createBuffer({label:"digit base",size:It*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),D=Math.ceil(U/an),Y=Math.ceil(D/an),L=h.createBuffer({label:"prefix l0 sums",size:D*It*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),q=h.createBuffer({label:"prefix l0 offsets",size:D*It*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),Z=h.createBuffer({label:"prefix l1 sums",size:Y*It*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),ae=h.createBuffer({label:"prefix l1 offsets",size:Y*It*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});this.sort_prefixBindGroup=h.createBindGroup({label:"prefix 2L bind group",layout:this.sort_pipelines.hierarchicalBlelloch.prefixBindGroupLayout,entries:[{binding:0,resource:{buffer:W}},{binding:1,resource:{buffer:R}},{binding:2,resource:{buffer:N}},{binding:3,resource:{buffer:L}},{binding:4,resource:{buffer:q}},{binding:5,resource:{buffer:Z}},{binding:6,resource:{buffer:ae}},{binding:7,resource:{buffer:F}}]}),this.sort_localHistogramBindGroups=[h.createBindGroup({label:"localHistogram src=0",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:W}},{binding:1,resource:{buffer:H[0].sort_depths_buffer}},{binding:2,resource:{buffer:R}}]}),h.createBindGroup({label:"localHistogram src=1",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:W}},{binding:1,resource:{buffer:H[1].sort_depths_buffer}},{binding:2,resource:{buffer:R}}]})],this.sort_scatterBindGroups=[h.createBindGroup({label:"scatter 0->1",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:W}},{binding:1,resource:{buffer:F}},{binding:2,resource:{buffer:H[0].sort_depths_buffer}},{binding:3,resource:{buffer:H[1].sort_depths_buffer}},{binding:4,resource:{buffer:H[0].sort_indices_buffer}},{binding:5,resource:{buffer:H[1].sort_indices_buffer}},{binding:6,resource:{buffer:N}}]}),h.createBindGroup({label:"scatter 1->0",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:W}},{binding:1,resource:{buffer:F}},{binding:2,resource:{buffer:H[1].sort_depths_buffer}},{binding:3,resource:{buffer:H[0].sort_depths_buffer}},{binding:4,resource:{buffer:H[1].sort_indices_buffer}},{binding:5,resource:{buffer:H[0].sort_indices_buffer}},{binding:6,resource:{buffer:N}}]})],this.sort_info_buffer=W,this.sort_ping_pong=H;const ge=this.device.createBindGroupLayout({label:"camera + renderSettings",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),ue=this.device.createBindGroupLayout({label:"gaussians + splats",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),ne=this.device.createBindGroupLayout({label:"cullBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),fe=this.device.createBindGroupLayout({label:"preprocessBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]});this.crsBg=this.device.createBindGroup({label:"camera + renderSettings",layout:ge,entries:[{binding:0,resource:{buffer:this.camera_buffer}},{binding:1,resource:{buffer:this.render_settings_buffer}}]}),this.gsBg=this.device.createBindGroup({label:"surfels + splats",layout:ue,entries:[{binding:0,resource:{buffer:this.pc.surfel_buffer}},{binding:1,resource:{buffer:this.splat_2d_buffer}}]}),this.cullBg2=this.device.createBindGroup({label:"cullBg2",layout:ne,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[0].sort_depths_buffer}},{binding:2,resource:{buffer:this.sort_ping_pong[0].sort_indices_buffer}},{binding:3,resource:{buffer:this.sh_solvers_buffer}}]}),this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:fe,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}},{binding:4,resource:{buffer:this.atlas.rectsBuffer}},{binding:5,resource:{buffer:this.atlasParamsBuffer}}]});const te=this.device.createShaderModule({code:Zl});this.indirectPipeline=this.device.createComputePipeline({label:"indirect dispatch calc",layout:"auto",compute:{module:te,entryPoint:"write_dispatch_triples",constants:{RS_RADIX_SIZE:256}}}),this.indirectBindGroup=this.device.createBindGroup({label:"indirect dispatch bind group",layout:this.indirectPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.draw_indirect_buffer}}]}),this.bfcParamsBuffer=this.device.createBuffer({label:"bfc params (uniform, 16 B)",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([2,0,0,0])),this.meshCullBindGroupLayout=this.device.createBindGroupLayout({label:"mesh cull (cull group 3)",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:"depth",viewDimension:"2d",multisampled:!1}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),this.meshStubTexture=this.device.createTexture({label:"mesh cull stub (1x1 depth32float)",size:{width:1,height:1,depthOrArrayLayers:1},format:"depth32float",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.RENDER_ATTACHMENT}),this.meshStubView=this.meshStubTexture.createView({dimension:"2d"}),this.meshCullBindGroup=this.device.createBindGroup({label:"mesh cull bind (stub)",layout:this.meshCullBindGroupLayout,entries:[{binding:0,resource:this.meshStubView},{binding:1,resource:{buffer:this.bfcParamsBuffer}}]});const Oe=this.device.createShaderModule({code:Xl});if(this.cullPipeline=this.device.createComputePipeline({label:"surfel_cull",layout:this.device.createPipelineLayout({bindGroupLayouts:[ge,ue,ne,this.meshCullBindGroupLayout]}),compute:{module:Oe,entryPoint:"surfel_cull"}}),this.mesh!==null){const se=this.device.createBindGroupLayout({label:"mesh_depth camera (group 0)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]});this.meshDepthCameraBindGroup=this.device.createBindGroup({label:"mesh_depth camera bind",layout:se,entries:[{binding:0,resource:{buffer:this.camera_buffer}}]});const ie=this.device.createBindGroupLayout({label:"mesh_depth margin (group 1)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]});this.meshMarginBuffer=this.device.createBuffer({label:"mesh cull margin (uniform, 16 B)",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.meshMarginBuffer,0,new Float32Array([0,0,0,0])),this.meshDepthMarginBindGroup=this.device.createBindGroup({label:"mesh_depth margin bind",layout:ie,entries:[{binding:0,resource:{buffer:this.meshMarginBuffer}}]});const _e=this.device.createShaderModule({code:Ql});this.meshDepthPipeline=this.device.createRenderPipeline({label:"mesh_depth",layout:this.device.createPipelineLayout({bindGroupLayouts:[se,ie]}),vertex:{module:_e,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]},{arrayStride:12,attributes:[{shaderLocation:1,offset:0,format:"float32x3"}]}]},primitive:{topology:"triangle-list",cullMode:"none"},depthStencil:{format:"depth32float",depthWriteEnabled:!0,depthCompare:"less"}})}const Ge=this.device.createShaderModule({code:Kl});this.preprocessPipeline=this.device.createComputePipeline({label:"preprocess_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[ge,fe]}),compute:{module:Ge,entryPoint:"preprocess"}});const Le=this.device.createShaderModule({code:Hl});Le.getCompilationInfo().then(se=>{se.messages.length>0?(console.group("[render_2dgs.wgsl] compilation messages"),se.messages.forEach(ie=>{(ie.type==="error"?console.error:ie.type==="warning"?console.warn:console.log)(`${ie.type} (line ${ie.lineNum}:${ie.linePos}): ${ie.message}`)}),console.groupEnd()):console.log("[render_2dgs.wgsl] compiled clean")});const Me=this.device.createBindGroupLayout({label:"render_settings (vertex)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]}),ve=this.device.createBindGroupLayout({label:"splats_2d + indices (vertex)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),Pe=this.device.createBindGroupLayout({label:"atlas (fragment)",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array",multisampled:!1}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]}),le=this.atlas.meta.format!==4294967295&&this.atlas.meta.kernel_type===0?0:1;this.device.pushErrorScope("validation"),this.renderPipeline=this.device.createRenderPipeline({label:"render_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[Me,ve,Pe]}),vertex:{module:Le,entryPoint:"vs_main"},fragment:{module:Le,entryPoint:"fs_main",constants:{BETA_KERNEL:le},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}}),this.device.popErrorScope().then(se=>{se?console.error("[render_2dgs] pipeline create validation error:",se.message):console.log("[render_2dgs] pipeline created OK")}),this.renderSettingsBindGroup=this.device.createBindGroup({label:"render_settings (vertex)",layout:Me,entries:[{binding:0,resource:{buffer:this.render_settings_buffer}}]}),this.renderSplatsBindGroup=this.device.createBindGroup({label:"splats_2d + indices (vertex)",layout:ve,entries:[{binding:0,resource:{buffer:this.splat_2d_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[li].sort_indices_buffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:Pe,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:this.atlas.sampler},{binding:2,resource:{buffer:this.atlas.texParamsBuffer}},{binding:3,resource:{buffer:this.atlas.rectsBuffer}}]}),this.renderShaderModule=Le,this.betaKernel=le,this.renderSettingsBgl=Me,this.renderSplatsBgl=ve,this.atlasBgl=Pe}get totalQueryCount(){return this.queriesPerFrame*this.queryCapacityFrames}setHtTailK(a){this.htTailK=a,this.htParamsBuffer!==null&&this.device.queue.writeBuffer(this.htParamsBuffer,0,new Float32Array([a,0,0,0]))}setMeshOverlayEnabled(a){this.meshOverlayEnabled=a&&this.mesh!==null}setMeshCullEnabled(a){on({meshCull:a&&this.mesh!==null},this.device,this.render_settings_buffer)}setMeshMargin(a){this.meshMarginBuffer!==null&&this.device.queue.writeBuffer(this.meshMarginBuffer,0,new Float32Array([a]))}setBfcParams(a,h){this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([a,h[0],h[1],h[2]]))}get hasMesh(){return this.mesh!==null}get texParamsBuffer(){return this.atlas.texParamsBuffer}get hasAtlas(){return this.atlas.meta.format!==4294967295}writeAtlasParams(){const a=new ArrayBuffer(16),h=new Uint32Array(a),P=new Float32Array(a);h[0]=this.atlas.meta.width|0,h[1]=this.atlas.meta.layer_h|0,P[2]=this.atlas.meta.uv_extent||0,h[3]=this.atlas.meta.probe_mode|0||0,this.device.queue.writeBuffer(this.atlasParamsBuffer,0,a)}ensureHtResources(a,h){var E,T,$,I,O;if(this.htCorePipeline===null){const U=this.device.createPipelineLayout({bindGroupLayouts:[this.renderSettingsBgl,this.renderSplatsBgl,this.atlasBgl]});this.htTailBgl=this.device.createBindGroupLayout({label:"ht_tail depth-weighting (group 3)",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"depth",viewDimension:"2d",multisampled:!1}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),this.htParamsBuffer=this.device.createBuffer({label:"ht params (uniform, 16 B)",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.htParamsBuffer,0,new Float32Array([this.htTailK,0,0,0]));const W=this.device.createPipelineLayout({bindGroupLayouts:[this.renderSettingsBgl,this.renderSplatsBgl,this.atlasBgl,this.htTailBgl]});this.htCorePipeline=this.device.createRenderPipeline({label:"ht_core",layout:U,vertex:{module:this.renderShaderModule,entryPoint:"vs_main"},fragment:{module:this.renderShaderModule,entryPoint:"fs_core",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:"rgba16float"}]},primitive:{topology:"triangle-strip",cullMode:"none"},depthStencil:{format:"depth32float",depthWriteEnabled:!0,depthCompare:"less"}}),this.htTailPipeline=this.device.createRenderPipeline({label:"ht_tail",layout:W,vertex:{module:this.renderShaderModule,entryPoint:"vs_main"},fragment:{module:this.renderShaderModule,entryPoint:"fs_tail",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:"rgba16float",blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one"}}},{format:"r16float",blend:{color:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src"},alpha:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"},depthStencil:{format:"depth32float",depthWriteEnabled:!1,depthCompare:"greater"}}),this.htTailOccPipeline=this.device.createRenderPipeline({label:"ht_tail_occ",layout:W,vertex:{module:this.renderShaderModule,entryPoint:"vs_main"},fragment:{module:this.renderShaderModule,entryPoint:"fs_tail_occ",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:"rgba16float",blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one"}}},{format:"r16float",blend:{color:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src"},alpha:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"},depthStencil:{format:"depth32float",depthWriteEnabled:!1,depthCompare:"greater"}}),this.htTail2Pipeline=this.device.createRenderPipeline({label:"ht_tail_sorted",layout:U,vertex:{module:this.renderShaderModule,entryPoint:"vs_main"},fragment:{module:this.renderShaderModule,entryPoint:"fs_tail_sorted",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:"rgba16float",blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"},depthStencil:{format:"depth32float",depthWriteEnabled:!1,depthCompare:"greater"}}),this.wsrPipeline=this.device.createRenderPipeline({label:"wsr_accumulate",layout:U,vertex:{module:this.renderShaderModule,entryPoint:"vs_main"},fragment:{module:this.renderShaderModule,entryPoint:"fs_wsr",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:"rgba16float",blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one"}}},{format:"r16float",blend:{color:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src"},alpha:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}});const H={format:"rgba16float",blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one"}}};this.wsrBinsPipeline=this.device.createRenderPipeline({label:"wsr_bins_prepass",layout:U,vertex:{module:this.renderShaderModule,entryPoint:"vs_main"},fragment:{module:this.renderShaderModule,entryPoint:"fs_wsr_bins",constants:{BETA_KERNEL:this.betaKernel},targets:[H,H,H,H]},primitive:{topology:"triangle-strip",cullMode:"none"}}),this.wsrBinsBgl=this.device.createBindGroupLayout({label:"wsr gate bins (group 3)",entries:[4,5,6,7].map(N=>({binding:N,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}}))}),this.wsrGatedPipeline=this.device.createRenderPipeline({label:"wsr_gated_accumulate",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.renderSettingsBgl,this.renderSplatsBgl,this.atlasBgl,this.wsrBinsBgl]}),vertex:{module:this.renderShaderModule,entryPoint:"vs_main"},fragment:{module:this.renderShaderModule,entryPoint:"fs_wsr_gated",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:"rgba16float",blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one"}}},{format:"r16float",blend:{color:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src"},alpha:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}});const R=this.device.createShaderModule({label:"ht_composite",code:Yl});this.htCompositeBgl=this.device.createBindGroupLayout({label:"ht_composite inputs",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}}]}),this.htCompositePipeline=this.device.createRenderPipeline({label:"ht_composite",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.htCompositeBgl]}),vertex:{module:R,entryPoint:"vs_main"},fragment:{module:R,entryPoint:"fs_main",targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-list"}}),this.wsrCompositePipeline=this.device.createRenderPipeline({label:"wsr_composite",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.htCompositeBgl]}),vertex:{module:R,entryPoint:"vs_main"},fragment:{module:R,entryPoint:"fs_wsr_composite",targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-list"}}),this.htComposite2Pipeline=this.device.createRenderPipeline({label:"ht_composite_sorted",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.htCompositeBgl]}),vertex:{module:R,entryPoint:"vs_main"},fragment:{module:R,entryPoint:"fs_sorted_tail",targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-list"}})}if(this.htCoreTexture!==null&&this.htW===a&&this.htH===h)return;(E=this.htDepthTexture)==null||E.destroy(),(T=this.htCoreTexture)==null||T.destroy(),($=this.htAccumTexture)==null||$.destroy(),(I=this.htTransTexture)==null||I.destroy();const P={width:Math.max(1,a),height:Math.max(1,h),depthOrArrayLayers:1},g=GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING;this.htDepthTexture=this.device.createTexture({label:"ht depth",size:P,format:"depth32float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.htCoreTexture=this.device.createTexture({label:"ht core",size:P,format:"rgba16float",usage:g}),this.htAccumTexture=this.device.createTexture({label:"ht accum",size:P,format:"rgba16float",usage:g}),this.htTransTexture=this.device.createTexture({label:"ht trans",size:P,format:"r16float",usage:g}),this.htDepthView=this.htDepthTexture.createView(),this.htCoreView=this.htCoreTexture.createView(),this.htAccumView=this.htAccumTexture.createView(),this.htTransView=this.htTransTexture.createView(),this.htCompositeBindGroup=this.device.createBindGroup({label:"ht composite bind",layout:this.htCompositeBgl,entries:[{binding:0,resource:this.htCoreView},{binding:1,resource:this.htAccumView},{binding:2,resource:this.htTransView}]}),this.htTailBindGroup=this.device.createBindGroup({label:"ht tail bind (group 3)",layout:this.htTailBgl,entries:[{binding:0,resource:this.htDepthView},{binding:1,resource:{buffer:this.htParamsBuffer}}]});for(let U=0;U<4;U++)(O=this.wsrBinTextures[U])==null||O.destroy(),this.wsrBinTextures[U]=this.device.createTexture({label:`wsr bins ${U}`,size:P,format:"rgba16float",usage:g}),this.wsrBinViews[U]=this.wsrBinTextures[U].createView();this.wsrBinsBindGroup=this.device.createBindGroup({label:"wsr gate bins bind (group 3)",layout:this.wsrBinsBgl,entries:[0,1,2,3].map(U=>({binding:4+U,resource:this.wsrBinViews[U]}))}),this.htW=a,this.htH=h}ensureMeshDepthTexture(a,h){var P;this.mesh!==null&&(this.meshDepthTexture!==null&&this.meshCullWidth===a&&this.meshCullHeight===h||((P=this.meshDepthTexture)==null||P.destroy(),this.meshDepthTexture=this.device.createTexture({label:"mesh_depth attachment",size:{width:Math.max(1,a),height:Math.max(1,h),depthOrArrayLayers:1},format:"depth32float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.meshDepthView=this.meshDepthTexture.createView({dimension:"2d"}),this.meshCullBindGroup=this.device.createBindGroup({label:"mesh cull bind (live)",layout:this.meshCullBindGroupLayout,entries:[{binding:0,resource:this.meshDepthView},{binding:1,resource:{buffer:this.bfcParamsBuffer}}]}),this.meshCullWidth=a,this.meshCullHeight=h))}setAtlasEnabled(a){this.atlas.meta.format!==4294967295&&mi(this.device,this.atlas.texParamsBuffer,this.atlas.meta,a)}async debugReadSortedIndices(a=30){const h=Math.max(0,Math.min(a,this.pc.num_points)),P=h*Uint32Array.BYTES_PER_ELEMENT;if(P===0){console.log("[DEBUG] No indices to read.");return}const g=this.device.createBuffer({size:P,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),E=this.device.createCommandEncoder();E.copyBufferToBuffer(this.sort_ping_pong[li].sort_indices_buffer,0,g,0,P),this.device.queue.submit([E.finish()]),await g.mapAsync(GPUMapMode.READ);const T=new Uint32Array(g.getMappedRange());console.log("[DEBUG] Sorted indices (first",h,"):",Array.from(T)),g.unmap()}frame(a,h,P=!0){var O,U,W,H;const E=(this.lastFrame+this.frameCount)%this.queryCapacityFrames*this.queriesPerFrame,T=P&&this.timeQueryEnabled;if(this.mesh!==null&&this.meshDepthPipeline!==null&&(at.accel_flags[0]&Os)!==0){const R=at.canvas_size[0],N=at.canvas_size[1];this.ensureMeshDepthTexture(R,N);const F={label:"mesh_depth",colorAttachments:[],depthStencilAttachment:{view:this.meshDepthView,depthLoadOp:"clear",depthClearValue:1,depthStoreOp:"store"}},D=a.beginRenderPass(F);D.setPipeline(this.meshDepthPipeline),D.setBindGroup(0,this.meshDepthCameraBindGroup),D.setBindGroup(1,this.meshDepthMarginBindGroup),D.setVertexBuffer(0,this.mesh.vertexBuffer),D.setVertexBuffer(1,this.mesh.normalBuffer),D.setIndexBuffer(this.mesh.indexBuffer,"uint32"),D.drawIndexed(this.mesh.numIndices),D.end()}{a.clearBuffer(this.sort_info_buffer,0,4);const R={label:"cull"};T&&(R.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:E+0,endOfPassWriteIndex:E+1});const N=a.beginComputePass(R);N.setPipeline(this.cullPipeline),N.setBindGroup(0,this.crsBg),N.setBindGroup(1,this.gsBg),N.setBindGroup(2,this.cullBg2),N.setBindGroup(3,this.meshCullBindGroup);const F=Math.ceil(this.pc.num_points/oc);N.dispatchWorkgroups(F,1,1),N.end()}{const R=a.beginComputePass({label:"calculate indirect dispatch"});R.setPipeline(this.indirectPipeline),R.setBindGroup(0,this.indirectBindGroup),R.dispatchWorkgroups(1,1,1),R.end()}{const R={label:"preprocess"};T&&(R.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:E+2,endOfPassWriteIndex:E+3});const N=a.beginComputePass(R);N.setPipeline(this.preprocessPipeline),N.setBindGroup(0,this.crsBg),N.setBindGroup(1,this.preprocessBg1),N.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),N.end()}const I=this.wsrEnabled&&(((U=(O=this.atlas)==null?void 0:O.meta)==null?void 0:U.probe_mode)|0)===2;if(!this.htEnabled&&!I||this.htSortedTail)for(let R=0;R<ns;R++){const N=R&1,F=this.sort_pipelines.passes[R],D=this.sort_localHistogramBindGroups[N],Y=this.sort_scatterBindGroups[N];{const L={label:`upsweep_round${R}`};T&&!this.htEnabled&&R==0&&(L.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:E+4});const q=a.beginComputePass(L);q.setPipeline(F.localHistogram),q.setBindGroup(0,D),q.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),q.end()}{const L=a.beginComputePass({label:`prefix_round${R} - l0TileScan`});L.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l0TileScan),L.setBindGroup(0,this.sort_prefixBindGroup),L.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),L.end()}{const L=a.beginComputePass({label:`prefix_round${R} - l1TileScanOnL0`});L.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1TileScanOnL0),L.setBindGroup(0,this.sort_prefixBindGroup),L.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),L.end()}{const L=a.beginComputePass({label:`prefix_round${R} - l1ScanSums`});L.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1ScanSums),L.setBindGroup(0,this.sort_prefixBindGroup),L.dispatchWorkgroups(1,It,1),L.end()}{const L=a.beginComputePass({label:`prefix_round${R} - addL1ToL0`});L.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL1ToL0),L.setBindGroup(0,this.sort_prefixBindGroup),L.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),L.end()}{const L=a.beginComputePass({label:`prefix_round${R} - addL0ToElems`});L.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL0ToElems),L.setBindGroup(0,this.sort_prefixBindGroup),L.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),L.end()}{const L=a.beginComputePass({label:`prefix_round${R} - computeDigitBase`});L.setPipeline(this.sort_pipelines.hierarchicalBlelloch.computeDigitBase),L.setBindGroup(0,this.sort_prefixBindGroup),L.dispatchWorkgroups(1,1,1),L.end()}{const L={label:`scatter_round${R}`};T&&!this.htEnabled&&R==ns-1&&(L.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:E+5});const q=a.beginComputePass(L);q.setPipeline(F.scatterElements),q.setBindGroup(0,Y),q.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),q.end()}}if(I){const R=at.canvas_size[0],N=at.canvas_size[1];this.ensureHtResources(R,N);const F=this.wsrGateEnabled;if(F){const D={label:"wsr_bins_prepass",colorAttachments:this.wsrBinViews.map(L=>({view:L,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,0]}))},Y=a.beginRenderPass(D);Y.setPipeline(this.wsrBinsPipeline),Y.setBindGroup(0,this.renderSettingsBindGroup),Y.setBindGroup(1,this.renderSplatsBindGroup),Y.setBindGroup(2,this.atlasBindGroup),Y.drawIndirect(this.draw_indirect_buffer,0),Y.end()}{const D={label:"wsr_accumulate",colorAttachments:[{view:this.htAccumView,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,0]},{view:this.htTransView,loadOp:"clear",storeOp:"store",clearValue:[1,0,0,1]}]};T&&(D.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:E+4,endOfPassWriteIndex:E+5});const Y=a.beginRenderPass(D);Y.setPipeline(F?this.wsrGatedPipeline:this.wsrPipeline),Y.setBindGroup(0,this.renderSettingsBindGroup),Y.setBindGroup(1,this.renderSplatsBindGroup),Y.setBindGroup(2,this.atlasBindGroup),F&&Y.setBindGroup(3,this.wsrBinsBindGroup),Y.drawIndirect(this.draw_indirect_buffer,0),Y.end()}{const D={label:"wsr_composite",colorAttachments:[{view:h,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};T&&(D.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:E+7});const Y=a.beginRenderPass(D);Y.setPipeline(this.wsrCompositePipeline),Y.setBindGroup(0,this.htCompositeBindGroup),Y.draw(3),Y.end()}}else if(this.htEnabled){const R=at.canvas_size[0],N=at.canvas_size[1];this.ensureHtResources(R,N);{const F={label:"ht_core",colorAttachments:[{view:this.htCoreView,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,0]}],depthStencilAttachment:{view:this.htDepthView,depthLoadOp:"clear",depthClearValue:1,depthStoreOp:"store"}};T&&(F.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:E+4,endOfPassWriteIndex:E+5});const D=a.beginRenderPass(F);D.setPipeline(this.htCorePipeline),D.setBindGroup(0,this.renderSettingsBindGroup),D.setBindGroup(1,this.renderSplatsBindGroup),D.setBindGroup(2,this.atlasBindGroup),D.drawIndirect(this.draw_indirect_buffer,0),D.end()}if(this.htSortedTail){const F={label:"ht_tail_sorted",colorAttachments:[{view:this.htAccumView,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,0]}],depthStencilAttachment:{view:this.htDepthView,depthReadOnly:!0}};T&&(F.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:E+6});const D=a.beginRenderPass(F);D.setPipeline(this.htTail2Pipeline),D.setBindGroup(0,this.renderSettingsBindGroup),D.setBindGroup(1,this.renderSplatsBindGroup),D.setBindGroup(2,this.atlasBindGroup),D.drawIndirect(this.draw_indirect_buffer,0),D.end()}else{const F={label:"ht_tail",colorAttachments:[{view:this.htAccumView,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,0]},{view:this.htTransView,loadOp:"clear",storeOp:"store",clearValue:[1,0,0,1]}],depthStencilAttachment:{view:this.htDepthView,depthReadOnly:!0}};T&&(F.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:E+6});const D=a.beginRenderPass(F),Y=this.htOccTail&&(((H=(W=this.atlas)==null?void 0:W.meta)==null?void 0:H.probe_mode)|0)===2;D.setPipeline(Y?this.htTailOccPipeline:this.htTailPipeline),D.setBindGroup(0,this.renderSettingsBindGroup),D.setBindGroup(1,this.renderSplatsBindGroup),D.setBindGroup(2,this.atlasBindGroup),D.setBindGroup(3,this.htTailBindGroup),D.drawIndirect(this.draw_indirect_buffer,0),D.end()}{const F={label:"ht_composite",colorAttachments:[{view:h,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};T&&(F.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:E+7});const D=a.beginRenderPass(F);D.setPipeline(this.htSortedTail?this.htComposite2Pipeline:this.htCompositePipeline),D.setBindGroup(0,this.htCompositeBindGroup),D.draw(3),D.end()}}else{const R={label:"render",colorAttachments:[{view:h,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};T&&(R.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:E+6,endOfPassWriteIndex:E+7});const N=a.beginRenderPass(R);N.setPipeline(this.renderPipeline),N.setBindGroup(0,this.renderSettingsBindGroup),N.setBindGroup(1,this.renderSplatsBindGroup),N.setBindGroup(2,this.atlasBindGroup),N.drawIndirect(this.draw_indirect_buffer,0),N.end()}if(this.meshOverlayEnabled&&this.mesh!==null){if(this.meshOverlayPipeline===null){const F=this.device.createShaderModule({code:Jl}),D=this.device.createBindGroupLayout({label:"mesh_overlay camera (group 0)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]}),Y=this.device.createBindGroupLayout({label:"mesh_overlay margin (group 1)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]});this.meshOverlayPipeline=this.device.createRenderPipeline({label:"mesh_overlay",layout:this.device.createPipelineLayout({bindGroupLayouts:[D,Y]}),vertex:{module:F,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]},{arrayStride:12,attributes:[{shaderLocation:1,offset:0,format:"float32x3"}]}]},fragment:{module:F,entryPoint:"fs_main",targets:[{format:this.presentationFormat,blend:{color:{srcFactor:"src-alpha",dstFactor:"one-minus-src-alpha",operation:"add"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"}}}]},primitive:{topology:"triangle-list",cullMode:"none"}})}const R={label:"mesh_overlay",colorAttachments:[{view:h,loadOp:"load",storeOp:"store"}]},N=a.beginRenderPass(R);N.setPipeline(this.meshOverlayPipeline),N.setBindGroup(0,this.meshDepthCameraBindGroup),N.setBindGroup(1,this.meshDepthMarginBindGroup),N.setVertexBuffer(0,this.mesh.vertexBuffer),N.setVertexBuffer(1,this.mesh.normalBuffer),N.setIndexBuffer(this.mesh.indexBuffer,"uint32"),N.drawIndexed(this.mesh.numIndices),N.end()}this.frameCount++}async readPerfMetrics(a){const h=(a==null?void 0:a.silent)??!1;if(this.frameCount<=0)return;const P=this.device.createCommandEncoder({label:"timestamp resolve encoder"});P.resolveQuerySet(this.querySet,0,this.totalQueryCount,this.resolveBuffer,0),P.copyBufferToBuffer(this.resolveBuffer,0,this.resultBuffer,0,this.totalQueryCount*8),this.device.queue.submit([P.finish()]),await this.device.queue.onSubmittedWorkDone();const g=[["Total",7,0],["Culling",1,0],["Preprocess",3,2],["Sort",5,4],["Render",7,6]];await this.resultBuffer.mapAsync(GPUMapMode.READ);const E=new BigInt64Array(this.resultBuffer.getMappedRange()),T=Math.min(this.frameCount,this.queryCapacityFrames),$=(this.lastFrame+this.frameCount-T)%this.queryCapacityFrames,I=Array.from({length:g.length},()=>[]);let O=0;for(let Y=0;Y<T;Y++){const L=($+Y)%this.queryCapacityFrames,q=L*this.queriesPerFrame;let Z=!0;for(let ae=0;ae<g.length;ae++){const[ge,ue,ne]=g[ae];if(E[q+ne]===0n||E[q+ue]===0n||E[q+ue]<E[q+ne]){Z=!1;break}}if(!Z){!h&&L%60===0&&console.debug("[timestamp] frame slot",L,"contains unwritten (0) timestamps, skipped in stats");continue}O++;for(let ae=0;ae<g.length;ae++){const[ge,ue,ne]=g[ae],fe=Number(E[q+ne]),te=Number(E[q+ue]);I[ae].push((te-fe)/1e6)}}if(O===0){this.resultBuffer.unmap(),h||console.warn("[timestamp] No complete frames available (some timestamps are 0). It may be the first frame or the GPU is still filling.");return}this.allFrameTimes.push(...I[0]);const U=[];let W=0,H=0,R=0;for(let Y=0;Y<g.length;Y++){const L=g[Y][0],q=I[Y];let Z=0;if(L==="Total"){const ae=this.allFrameTimes;Z=ae.reduce((ne,fe)=>ne+fe,0)/ae.length;const ge=[...ae].sort((ne,fe)=>ne-fe);W=ge[Math.floor(ge.length*.99)]||0;const ue=ae.reduce((ne,fe)=>ne+Math.pow(fe-Z,2),0)/ae.length;H=Math.sqrt(ue),R=Z}else Z=q.reduce((ae,ge)=>ae+ge,0)/q.length;U.push([L,Z])}this.lastFrame+=this.frameCount,this.frameCount=0;const N=Object.fromEntries(U);this.lastStageBreakdownMs={cull:N.Culling??0,preprocess:N.Preprocess??0,sort:N.Sort??0,render:N.Render??0,total:N.Total??0};const D=`[TIMESTAMP - ${this.constructor.name}]
`+U.map(([Y,L])=>`${Y}: ${L.toFixed(3)}ms`).join(`
`)+`
Total P99: ${W.toFixed(3)}ms
Total STD: ${H.toFixed(3)}ms
Total AVG: ${R.toFixed(3)}ms
Stats computed over ${this.allFrameTimes.length} frames (cumulative)
${this.lastFrame} frames rendered since start`;if(h||(console.log(D),console.log("All Frame Times (Total, ms):",JSON.stringify(this.allFrameTimes))),this.downloadOnceNextRead){this.downloadOnceNextRead=!1;const Y=`Stage,ms
`,L=U.map(([ae,ge])=>`${ae},${ge.toFixed(3)}`).join(`
`),q="data:text/csv;charset=utf-8,"+encodeURIComponent(Y+L),Z=document.createElement("a");Z.href=q,Z.download=`${this.downloadOnceFileName}.csv`,document.body.appendChild(Z),Z.click(),Z.remove()}if(this.showPerfDialogNext){this.showPerfDialogNext=!1;try{alert(D)}catch{console.warn("Unable to show dialog; metrics printed to console.")}}this.resultBuffer.unmap()}_setupTimestampQueries(){this.querySet=this.device.createQuerySet({type:"timestamp",count:this.totalQueryCount});const a=this.totalQueryCount*8;this.resolveBuffer=this.device.createBuffer({size:a,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),this.resultBuffer=this.device.createBuffer({size:a,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}_setupBuffers(){this.render_settings_buffer=this.device.createBuffer({label:"render settings",size:ac,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const a=document.querySelector("canvas"),h=a?a.width:1,P=a?a.height:1;ic({width:h,height:P,sh_bias:this.pc.sh_bias,color_K:this.pc.K,feature_mode:this.pc.feature_mode}),wi(this.device,this.render_settings_buffer),this.splat_2d_buffer=this.device.createBuffer({label:"splats_2d (Splat2DGS)",size:In(this.pc.num_points*cc),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.draw_indirect_buffer=this.device.createBuffer({label:"draw indirect",size:4*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT}),this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([4,0,0,0])),this.sh_solvers_buffer=this.device.createBuffer({label:"sh_solvers",size:In(this.pc.num_points*uc),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST})}requestPerfDialog(){this.showPerfDialogNext=!0}requestDownloadMetrics(a){if(a&&a.trim().length>0){const h=a.trim().replace(/[^a-zA-Z0-9_\-]/g,"_");this.downloadOnceFileName=h.length>0?h:this.downloadOnceFileName}else{const h=new Date,P=`${h.getFullYear()}${String(h.getMonth()+1).padStart(2,"0")}${String(h.getDate()).padStart(2,"0")}_${String(h.getHours()).padStart(2,"0")}${String(h.getMinutes()).padStart(2,"0")}${String(h.getSeconds()).padStart(2,"0")}`;this.downloadOnceFileName=`fps_metrics_${P}`}this.downloadOnceNextRead=!0}requestReorder(){}async maybeReorderAfterSubmit(){}}function bc(o,a){return 2*Math.atan(a/(2*o))}function vc(o,a,h,P){const g=Math.tan(P/2),E=Math.tan(h/2),T=g*o,$=-T,I=E*o,O=-I,U=dt.create();return U[0]=2*o/(I-O),U[5]=-2*o/(T-$),U[2]=(I+O)/(I-O),U[6]=(T+$)/(T-$),U[14]=1,U[10]=a/(a-o),U[11]=-(a*o)/(a-o),dt.transpose(U,U),U}async function gc(o){kt(`loading scene camera file... : ${o}`);const h=await(await fetch(o)).json();return kt(`loaded cameras count: ${h.length}`),h.map(P=>{const g=z.clone(P.position),E=St.create(...P.rotation.flat()),T=E[0],$=E[4],I=E[8],O=E[1],U=E[5],W=E[9],H=E[2],R=E[6],N=E[10];T*(U*N-W*R)-$*(O*N-W*H)+I*(O*R-U*H)<0&&(E[1]=-E[1],E[5]=-E[5],E[9]=-E[9]);const D=dt.fromMat3(E);return{position:g,rotation:D,img_name:P.img_name,id:P.id}})}const wc=4*2,xc=4*16,xi=4*xc+2*wc;function yc(o){return o.createBuffer({label:"camera uniform",size:xi,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}const rn=new Float32Array(xi/Float32Array.BYTES_PER_ELEMENT),ss=class ss{constructor(a,h){G(this,"uniform_buffer");G(this,"position",z.create());G(this,"rotation",dt.create());G(this,"fovY",45/180*Math.PI);G(this,"fovX");G(this,"focal",Jr.create());G(this,"viewport",Jr.create());G(this,"view_matrix",dt.identity());G(this,"view_inv_matrix",dt.identity());G(this,"proj_matrix",dt.identity());G(this,"proj_inv_matrix",dt.identity());G(this,"_negPos",z.create());G(this,"look",z.create(0,0,1));G(this,"up",z.create(0,1,0));G(this,"right",z.create(1,0,0));this.canvas=a,this.device=h,this.uniform_buffer=yc(h),this.on_update_canvas()}on_update_canvas(){const a=.5*this.canvas.height/Math.tan(this.fovY*.5);this.focal[0]=a,this.focal[1]=a,this.fovX=bc(a,this.canvas.width),this.viewport[0]=this.canvas.width,this.viewport[1]=this.canvas.height,this.proj_matrix=vc(.01,100,this.fovX,this.fovY),dt.inverse(this.proj_matrix,this.proj_inv_matrix),this.update_buffer()}update_buffer(){this._negPos[0]=-this.position[0],this._negPos[1]=-this.position[1],this._negPos[2]=-this.position[2],dt.copy(this.rotation,this.view_matrix),dt.translate(this.view_matrix,this._negPos,this.view_matrix),dt.inverse(this.view_matrix,this.view_inv_matrix),z.transformMat4Upper3x3(ss.Z_AXIS,this.view_inv_matrix,this.look),z.normalize(this.look,this.look),z.cross(this.up,this.look,this.right),z.normalize(this.right,this.right);let a=0;rn.set(this.view_matrix,a),a+=16,rn.set(this.view_inv_matrix,a),a+=16,rn.set(this.proj_matrix,a),a+=16,rn.set(this.proj_inv_matrix,a),a+=16,rn.set(this.viewport,a),a+=2,rn.set(this.focal,a),a+=2,this.device.queue.writeBuffer(this.uniform_buffer,0,rn)}set_preset(a){z.copy(a.position,this.position),dt.copy(a.rotation,this.rotation),this.update_buffer()}setFov(a){this.fovY=a,this.on_update_canvas()}getFov(){return this.fovY}};G(ss,"Z_AXIS",z.create(0,0,1));let Fs=ss;const Pc=z.create(1,0,0),Sc=z.create(0,1,0);function Ec(o,a){const h=o[0],P=o[4],g=o[8],E=o[1],T=o[5],$=o[9],I=o[2],O=o[6],U=o[10],W=h+T+U;let H,R,N,F;if(W>0){const D=.5/Math.sqrt(W+1);H=.25/D,R=(O-$)*D,N=(g-I)*D,F=(E-P)*D}else if(h>T&&h>U){const D=2*Math.sqrt(1+h-T-U);H=(O-$)/D,R=.25*D,N=(P+E)/D,F=(g+I)/D}else if(T>U){const D=2*Math.sqrt(1+T-h-U);H=(g-I)/D,R=(P+E)/D,N=.25*D,F=($+O)/D}else{const D=2*Math.sqrt(1+U-h-T);H=(E-P)/D,R=(g+I)/D,N=($+O)/D,F=.25*D}return a[0]=R,a[1]=N,a[2]=F,a[3]=H,a}class Cc{constructor(a){G(this,"element");G(this,"enabled",!0);G(this,"center",z.create(0,0,0));G(this,"up",z.create(0,1,0));G(this,"rotation",[0,0]);G(this,"shift",[0,0]);G(this,"scroll",0);G(this,"speed",.1);G(this,"sensitivity",.08);G(this,"leftPressed",!1);G(this,"rightPressed",!1);G(this,"leftDragPans",!1);G(this,"lastX",0);G(this,"lastY",0);G(this,"touches",new Map);G(this,"lastTouchCenter",null);G(this,"lastPinchDistance",null);G(this,"lastTwoFingerAngle",null);G(this,"lastTouchCount",0);G(this,"roll",0);G(this,"_dir",z.create());G(this,"_right",z.create());G(this,"_upCam",z.create());G(this,"_scratch",z.create());G(this,"_qY",_t.create());G(this,"_qX",_t.create());G(this,"_qRot",_t.create());G(this,"_qLocal",_t.create());G(this,"_qWorldToCam",_t.create());G(this,"_scratchMat3",St.create());G(this,"bboxMin",null);G(this,"bboxMax",null);G(this,"anchor",z.create(0,0,0));G(this,"downCallback",a=>{var h,P,g,E;if(this.enabled){if(a.pointerType==="touch"){this.touches.set(a.pointerId,{x:a.pageX,y:a.pageY}),this.handleTouchGestures(),(P=(h=a.target)==null?void 0:h.setPointerCapture)==null||P.call(h,a.pointerId),a.preventDefault();return}a.isPrimary&&(a.button===0?(this.leftPressed=!0,this.leftDragPans=a.shiftKey):a.button===2?this.rightPressed=!0:this.rightPressed=!0,this.lastX=a.pageX,this.lastY=a.pageY,(E=(g=a.target)==null?void 0:g.setPointerCapture)==null||E.call(g,a.pointerId),a.preventDefault())}});G(this,"moveCallback",a=>{if(!this.enabled)return;if(a.pointerType==="touch"){if(!this.touches.has(a.pointerId))return;this.touches.set(a.pointerId,{x:a.pageX,y:a.pageY}),this.handleTouchGestures(),a.preventDefault();return}if(!a.isPrimary||!this.leftPressed&&!this.rightPressed)return;a.preventDefault();const h=a.pageX-this.lastX,P=a.pageY-this.lastY;this.lastX=a.pageX,this.lastY=a.pageY,this.leftPressed&&!this.leftDragPans?(this.rotation[0]+=h,this.rotation[1]-=P):(this.rightPressed||this.leftPressed&&this.leftDragPans)&&(this.shift[1]-=h,this.shift[0]+=P)});G(this,"upCallback",a=>{var h,P,g,E;if(a.pointerType==="touch"){this.touches.delete(a.pointerId),this.handleTouchGestures(),(P=(h=a.target)==null?void 0:h.releasePointerCapture)==null||P.call(h,a.pointerId),a.preventDefault();return}a.button===0?this.leftPressed=!1:a.button===2?this.rightPressed=!1:this.rightPressed=!1,(E=(g=a.target)==null?void 0:g.releasePointerCapture)==null||E.call(g,a.pointerId),a.preventDefault()});G(this,"wheelCallback",a=>{if(!this.enabled||(a.preventDefault(),this.rightPressed))return;let h=a.deltaY;a.deltaMode===1?h*=16:a.deltaMode===2&&(h*=100),this.scroll+=h*.01});this.camera=a,this.registerElement(a.canvas)}registerElement(a){this.element&&this.element!==a&&(this.element.removeEventListener("pointerdown",this.downCallback),this.element.removeEventListener("pointermove",this.moveCallback),this.element.removeEventListener("pointerup",this.upCallback),this.element.removeEventListener("wheel",this.wheelCallback)),this.element=a,this.element.addEventListener("pointerdown",this.downCallback),this.element.addEventListener("pointermove",this.moveCallback),this.element.addEventListener("pointerup",this.upCallback),this.element.addEventListener("wheel",this.wheelCallback,{passive:!1}),this.element.addEventListener("contextmenu",h=>h.preventDefault())}setCenter(a){z.copy(a,this.center),z.copy(a,this.anchor)}setOrbitPivot(a){z.set(a[0],a[1],a[2],this.center),this._reorientCameraToCenter()}setOrbitDepth(a){if(!isFinite(a)||a<.001)return;const h=this.camera.rotation;z.set(h[2],h[6],h[10],this._dir),z.normalize(this._dir,this._dir),z.scale(this._dir,a,this._dir),z.add(this.camera.position,this._dir,this.center)}_reorientCameraToCenter(){const a=this.camera;if(z.subtract(this.center,a.position,this._scratch),z.length(this._scratch)<1e-6)return;z.normalize(this._scratch,this._scratch),z.cross(this.up,this._scratch,this._right),z.length(this._right)<1e-6&&z.set(1,0,0,this._right),z.normalize(this._right,this._right),z.cross(this._scratch,this._right,this._upCam),z.normalize(this._upCam,this._upCam);const h=a.rotation;h[0]=this._right[0],h[1]=this._upCam[0],h[2]=this._scratch[0],h[3]=0,h[4]=this._right[1],h[5]=this._upCam[1],h[6]=this._scratch[1],h[7]=0,h[8]=this._right[2],h[9]=this._upCam[2],h[10]=this._scratch[2],h[11]=0,h[12]=0,h[13]=0,h[14]=0,h[15]=1,a.update_buffer()}setBbox(a,h){this.bboxMin=z.create(a[0],a[1],a[2]),this.bboxMax=z.create(h[0],h[1],h[2]);const P=(a[0]+h[0])*.5,g=(a[1]+h[1])*.5,E=(a[2]+h[2])*.5;z.set(P,g,E,this.center),z.set(P,g,E,this.anchor)}resetToCamera(){const a=this.camera.rotation;z.set(a[2],a[6],a[10],this._dir),z.normalize(this._dir,this._dir);let h=null;if(this.bboxMin&&this.bboxMax){let P=-1/0,g=1/0,E=!1;for(let T=0;T<3;T++){const $=this._dir[T],I=this.bboxMin[T]-this.camera.position[T],O=this.bboxMax[T]-this.camera.position[T];if(Math.abs($)>1e-8){const U=I/$,W=O/$;P=Math.max(P,Math.min(U,W)),g=Math.min(g,Math.max(U,W))}else if(I>0||O<0){E=!0;break}}!E&&P<=g&&g>0&&(h=(Math.max(P,0)+g)*.5)}if(h===null||!isFinite(h)||h<.001){z.subtract(this.anchor,this.camera.position,this._scratch);const P=z.dot(this._scratch,this._dir);h=P>.001?P:z.length(this._scratch)}h=Math.max(.1,h),z.scale(this._dir,h,this._dir),z.add(this.camera.position,this._dir,this.center)}handleTouchGestures(){const a=this.touches.size;if(a!==this.lastTouchCount&&(this.lastTouchCenter=null,this.lastPinchDistance=null,this.lastTwoFingerAngle=null),this.lastTouchCount=a,a===1){const h=this.touches.values().next().value;if(this.lastTouchCenter){const P=h.x-this.lastTouchCenter[0],g=h.y-this.lastTouchCenter[1];this.rotation[0]+=P*.3,this.rotation[1]-=g*.3}this.lastTouchCenter=[h.x,h.y]}else if(a===2){const h=Array.from(this.touches.values()),P=(h[0].x+h[1].x)*.5,g=(h[0].y+h[1].y)*.5,E=h[1].x-h[0].x,T=h[1].y-h[0].y,$=Math.hypot(E,T),I=Math.atan2(T,E);if(this.lastTouchCenter!==null&&this.lastPinchDistance!==null&&this.lastTwoFingerAngle!==null){const O=P-this.lastTouchCenter[0],U=g-this.lastTouchCenter[1],W=Math.hypot(O,U),H=Math.abs($-this.lastPinchDistance);let R=I-this.lastTwoFingerAngle;R>Math.PI&&(R-=2*Math.PI),R<-Math.PI&&(R+=2*Math.PI),W>.5&&(this.shift[1]-=O,this.shift[0]+=U),H>1&&this.lastPinchDistance>.001&&(this.scroll+=-Math.log($/this.lastPinchDistance)*10),Math.abs(R)>.0087&&(this.roll+=-R)}this.lastTouchCenter=[P,g],this.lastPinchDistance=$,this.lastTwoFingerAngle=I}}update(a){if(!this.enabled||Math.abs(this.rotation[0])<1e-4&&Math.abs(this.rotation[1])<1e-4&&Math.abs(this.shift[0])<1e-4&&Math.abs(this.shift[1])<1e-4&&Math.abs(this.scroll)<1e-4&&Math.abs(this.roll)<1e-4)return;const h=this.camera;{const F=h.rotation;this.up[0]=F[1],this.up[1]=F[5],this.up[2]=F[9],z.length(this.up)>1e-6?z.normalize(this.up,this.up):z.set(0,1,0,this.up)}let P=!1;if(Math.abs(this.roll)>1e-4){const F=h.rotation;z.set(F[2],F[6],F[10],this._scratch),z.normalize(this._scratch,this._scratch),_t.fromAxisAngle(this._scratch,this.roll,this._qRot),z.transformQuat(this.up,this._qRot,this.up),z.normalize(this.up,this.up),this.roll=0,P=!0}z.subtract(h.position,this.center,this._dir);let g=z.length(this._dir);g<1e-6&&(g=1e-6);const E=Math.exp(Math.log(g)+this.scroll*a*10*this.speed);z.scale(this._dir,E/g,this._dir),g=E;const T=h.rotation;this._right[0]=T[0],this._right[1]=T[4],this._right[2]=T[8],z.normalize(this._right,this._right),z.length(this._right)<1e-6&&z.set(1,0,0,this._right);const $=z.create(T[1],T[5],T[9]);z.normalize($,$),z.length($)<1e-6&&z.set(0,1,0,$);const I=a*this.speed*.1*g,O=this.shift[1]*I,U=-this.shift[0]*I;z.scale(this._right,O,this._scratch),z.add(this.center,this._scratch,this.center),z.add(h.position,this._scratch,h.position),z.scale($,U,this._scratch),z.add(this.center,this._scratch,this.center),z.add(h.position,this._scratch,h.position);const W=this.rotation[0]*a*this.sensitivity,H=this.rotation[1]*a*this.sensitivity;if(Math.abs(W)>1e-5||Math.abs(H)>1e-5||P){const F=h.rotation;Ec(F,this._qWorldToCam),_t.fromAxisAngle(Pc,-H,this._qX),_t.fromAxisAngle(Sc,-W,this._qY),_t.multiply(this._qX,this._qY,this._qLocal),_t.normalize(this._qLocal,this._qLocal),_t.multiply(this._qLocal,this._qWorldToCam,this._qWorldToCam),_t.normalize(this._qWorldToCam,this._qWorldToCam),St.fromQuat(this._qWorldToCam,this._scratchMat3),dt.fromMat3(this._scratchMat3,h.rotation);const D=h.rotation,Y=D[2],L=D[6],q=D[10];h.position[0]=this.center[0]-Y*g,h.position[1]=this.center[1]-L*g,h.position[2]=this.center[2]-q*g,this.up[0]=D[1],this.up[1]=D[5],this.up[2]=D[9],z.normalize(this.up,this.up)}else z.add(this.center,this._dir,h.position);h.update_buffer();const N=Math.pow(.8,a*60);this.rotation[0]*=N,Math.abs(this.rotation[0])<1e-4&&(this.rotation[0]=0),this.rotation[1]*=N,Math.abs(this.rotation[1])<1e-4&&(this.rotation[1]=0),this.shift[0]*=N,Math.abs(this.shift[0])<1e-4&&(this.shift[0]=0),this.shift[1]*=N,Math.abs(this.shift[1])<1e-4&&(this.shift[1]=0),this.scroll*=N,Math.abs(this.scroll)<1e-4&&(this.scroll=0)}}function yi(o){const a=z.create();for(const h of o)z.add(a,h,a);return z.scale(a,1/Math.max(o.length,1),a)}function Pi(o,a){const h=St.create();St.inverse(o,h);const P=z.create();return P[0]=h[0]*a[0]+h[4]*a[1]+h[8]*a[2],P[1]=h[1]*a[0]+h[5]*a[1]+h[9]*a[2],P[2]=h[2]*a[0]+h[6]*a[1]+h[10]*a[2],P}function kc(o){const a=o.slice(),h=[1,0,0,0,1,0,0,0,1],P=(I,O)=>a[I*3+O],g=(I,O,U)=>{a[I*3+O]=U},E=(I,O)=>h[I*3+O],T=(I,O,U)=>{h[I*3+O]=U};for(let I=0;I<30;I++){let O=0,U=1,W=Math.abs(P(0,1));if(Math.abs(P(0,2))>W&&(O=0,U=2,W=Math.abs(P(0,2))),Math.abs(P(1,2))>W&&(O=1,U=2,W=Math.abs(P(1,2))),W<1e-12)break;const H=P(O,O),R=P(U,U),N=P(O,U);let F;Math.abs(H-R)<1e-30?F=Math.PI/4*Math.sign(N):F=.5*Math.atan2(2*N,H-R);const D=Math.cos(F),Y=Math.sin(F);for(let L=0;L<3;L++){const q=P(L,O),Z=P(L,U);g(L,O,D*q+Y*Z),g(L,U,-Y*q+D*Z)}for(let L=0;L<3;L++){const q=P(O,L),Z=P(U,L);g(O,L,D*q+Y*Z),g(U,L,-Y*q+D*Z)}for(let L=0;L<3;L++){const q=E(L,O),Z=E(L,U);T(L,O,D*q+Y*Z),T(L,U,-Y*q+D*Z)}}const $=[];for(let I=0;I<3;I++)$.push({val:P(I,I),vec:z.create(E(0,I),E(1,I),E(2,I))});return $.sort((I,O)=>O.val-I.val),{vals:[$[0].val,$[1].val,$[2].val],vecs:[$[0].vec,$[1].vec,$[2].vec]}}function Bc(o,a){const h=yi(o);let P=0,g=0,E=0,T=0,$=0,I=0;for(const N of o){const F=N[0]-h[0],D=N[1]-h[1],Y=N[2]-h[2];P+=F*F,g+=F*D,E+=F*Y,T+=D*D,$+=D*Y,I+=Y*Y}const O=[P,g,E,g,T,$,E,$,I],{vecs:U}=kc(O);let W=U[0],H=U[1],R=U[2];return z.dot(R,a)<0&&(z.scale(R,-1,R),z.scale(H,-1,H)),{centroid:h,normal:R,u:W,v:H}}function Tc(o){let a=0,h=0,P=0,g=0,E=0,T=0,$=0,I=0,O=0;for(const[D,Y]of o){const L=-2*D,q=-2*Y,Z=1,ae=-(D*D+Y*Y);a+=L*L,h+=L*q,P+=L*Z,g+=q*q,E+=q*Z,T+=Z*Z,$+=L*ae,I+=q*ae,O+=Z*ae}const U=St.create(a,h,P,h,g,E,P,E,T),W=Pi(U,z.create($,I,O)),H=W[0],R=W[1],N=W[2],F=H*H+R*R-N;return{center:[H,R],radius:Math.sqrt(Math.max(F,1e-12))}}function Mc(o,a){let h=0,P=0,g=0,E=0,T=0,$=0,I=0,O=0,U=0;for(let H=0;H<o.length;H++){const R=o[H],N=z.normalize(a[H],z.create()),F=1-N[0]*N[0],D=-N[0]*N[1],Y=-N[0]*N[2],L=1-N[1]*N[1],q=-N[1]*N[2],Z=1-N[2]*N[2];h+=F,P+=D,g+=Y,E+=L,T+=q,$+=Z,I+=F*R[0]+D*R[1]+Y*R[2],O+=D*R[0]+L*R[1]+q*R[2],U+=Y*R[0]+q*R[1]+Z*R[2]}const W=St.create(h,P,g,P,E,T,g,T,$);return Pi(W,z.create(I,O,U))}function Si(o,a={}){if(o.length===0)return null;const h=a.tiltDownDeg??8,P=a.radiusScale??1,g=a.alignFirst??!0,E=(a.direction??"ccw")==="ccw"?1:-1,T=o.map(ne=>z.clone(ne.position)),$=o.map(ne=>{const fe=ne.rotation;return z.create(fe[8],fe[9],fe[10])}),I=o.map(ne=>{const fe=ne.rotation;return z.create(fe[4],fe[5],fe[6])}),O=yi(I),U=z.normalize(z.scale(O,-1,z.create())),{centroid:W,normal:H,u:R,v:N}=Bc(T,U),F=T.map(ne=>{const fe=z.sub(ne,W,z.create());return[z.dot(fe,R),z.dot(fe,N)]}),{center:D,radius:Y}=Tc(F),L=Y*P,q=z.add(W,z.add(z.scale(R,D[0],z.create()),z.scale(N,D[1],z.create()),z.create()),z.create()),Z=Mc(T,$),ae=L*Math.tan(h*Math.PI/180),ge=z.sub(Z,z.scale(H,ae,z.create()),z.create());let ue=0;if(g){const ne=z.sub(T[0],q,z.create());ue=Math.atan2(z.dot(ne,N),z.dot(ne,R))/(2*Math.PI)%1,ue<0&&(ue+=1)}return console.log(`[orbit] fit ${o.length} train cams: radius=${L.toFixed(2)}, tilt=${h}°, normal=[${H[0].toFixed(2)}, ${H[1].toFixed(2)}, ${H[2].toFixed(2)}], startPhase=${ue.toFixed(3)}`),{center:q,radius:L,normal:H,u:R,v:N,lookAt:ge,startPhase:ue,direction:E}}function Ei(o,a){const h=(o.startPhase+a*o.direction)*2*Math.PI,P=Math.cos(h),g=Math.sin(h),E=z.add(o.center,z.add(z.scale(o.u,o.radius*P,z.create()),z.scale(o.v,o.radius*g,z.create()),z.create()),z.create()),T=z.normalize(z.sub(o.lookAt,E,z.create())),$=z.cross(T,o.normal,z.create());z.length($)<1e-6&&z.copy(o.u,$),z.normalize($,$);const I=z.cross(T,$,z.create());z.normalize(I,I);const O=dt.create();return O[0]=$[0],O[1]=I[0],O[2]=T[0],O[3]=0,O[4]=$[1],O[5]=I[1],O[6]=T[1],O[7]=0,O[8]=$[2],O[9]=I[2],O[10]=T[2],O[11]=0,O[12]=0,O[13]=0,O[14]=0,O[15]=1,{position:E,rotation:O,img_name:`orbit_${(a*1e3).toFixed(0)}`,id:0}}function Ac(o,a={}){const h=Si(o,a);if(!h)return[];const P=a.numViews??120;return Array.from({length:P},(g,E)=>({...Ei(h,E/P),img_name:`circle_${E.toString().padStart(4,"0")}`,id:E}))}function Dc(o){const a=new Uint8Array(o),h=Math.min(a.byteLength,65536),P=new TextDecoder("ascii").decode(a.subarray(0,h)),g=P.indexOf("end_header");if(g<0)throw new Error("mesh PLY: 'end_header' not found in first 64KB");const E=g+10+1,T=P.slice(0,g).split(/\r?\n/).map(ie=>ie.trim()).filter(Boolean);if(T[0]!=="ply")throw new Error("mesh PLY: missing 'ply' magic");const $=T.find(ie=>ie.startsWith("format"));if(!$||!$.includes("binary_little_endian"))throw new Error(`mesh PLY: only binary_little_endian supported (got: ${$??"<none>"})`);const I={char:1,uchar:1,int8:1,uint8:1,short:2,ushort:2,int16:2,uint16:2,int:4,uint:4,int32:4,uint32:4,float:4,float32:4,double:8,float64:8},O=[];let U=null;for(const ie of T)if(ie.startsWith("element ")){const[,_e,pe]=ie.split(/\s+/);U={name:_e,count:parseInt(pe,10),props:[],bytesPerRecord:0,hasList:!1},O.push(U)}else if(ie.startsWith("property ")&&U){const _e=ie.split(/\s+/);if(_e[1]==="list"){const pe=_e[2],me=_e[3],Ae=_e[4];U.props.push({name:Ae,type:me,isList:!0,listCountType:pe,listItemType:me}),U.hasList=!0}else{const pe=_e[1],me=_e[2];if(U.props.push({name:me,type:pe,isList:!1}),I[pe]===void 0)throw new Error(`mesh PLY: unsupported prop type '${pe}'`);U.bytesPerRecord+=I[pe]}}const W=O.find(ie=>ie.name==="vertex"),H=O.find(ie=>ie.name==="face"||ie.name==="faces");if(!W)throw new Error("mesh PLY: missing 'element vertex'");if(!H)throw new Error("mesh PLY: missing 'element face' (mesh has no triangles)");if(W.hasList)throw new Error("mesh PLY: unexpected list property on vertex element");const R=W.props.find(ie=>ie.name==="x"),N=W.props.find(ie=>ie.name==="y"),F=W.props.find(ie=>ie.name==="z");if(!R||!N||!F)throw new Error("mesh PLY: vertex must have x/y/z");let D=0;const Y=new Map;for(const ie of W.props)Y.set(ie.name,{off:D,type:ie.type}),D+=I[ie.type];const L=Y.get("x"),q=Y.get("y"),Z=Y.get("z");if(L.type!==q.type||L.type!==Z.type)throw new Error(`mesh PLY: x/y/z must share a type (got ${L.type}/${q.type}/${Z.type})`);const ae=L.type,ge=ae==="double"||ae==="float64";if(!ge&&ae!=="float"&&ae!=="float32")throw new Error(`mesh PLY: x/y/z must be float or double (got '${ae}')`);const ue=new Float32Array(W.count*3),ne=new DataView(o),fe=E,te=W.bytesPerRecord;for(let ie=0;ie<W.count;ie++){const _e=fe+ie*te;ge?(ue[ie*3+0]=ne.getFloat64(_e+L.off,!0),ue[ie*3+1]=ne.getFloat64(_e+q.off,!0),ue[ie*3+2]=ne.getFloat64(_e+Z.off,!0)):(ue[ie*3+0]=ne.getFloat32(_e+L.off,!0),ue[ie*3+1]=ne.getFloat32(_e+q.off,!0),ue[ie*3+2]=ne.getFloat32(_e+Z.off,!0))}const Oe=fe+W.count*te,Ge=H.props.find(ie=>ie.isList);if(!Ge)throw new Error("mesh PLY: face element has no list property");const Le=I[Ge.listCountType],Me=I[Ge.listItemType];if(Le!==1)throw new Error(`mesh PLY: unsupported face list count size ${Le}`);let ve=Oe,Pe=0;for(let ie=0;ie<H.count;ie++){const _e=ne.getUint8(ve);_e===3&&Pe++,ve+=1+_e*Me}const le=new Uint32Array(Pe*3);ve=Oe;let se=0;for(let ie=0;ie<H.count;ie++){const _e=ne.getUint8(ve);if(ve+=1,_e===3)for(let pe=0;pe<3;pe++){const me=ve+pe*Me;let Ae;if(Me===4)Ae=ne.getUint32(me,!0);else if(Me===2)Ae=ne.getUint16(me,!0);else if(Me===1)Ae=ne.getUint8(me);else throw new Error(`mesh PLY: unsupported face index size ${Me}`);le[se++]=Ae}ve+=_e*Me}return{positions:ue,indices:le}}function Gc(o){const a=new DataView(o);if(o.byteLength<8)throw new Error("mesh .bin: too small (need at least 8-byte header)");const h=a.getUint32(0,!0),P=a.getUint32(4,!0),g=h*12,E=P*4;if(o.byteLength<8+g+E)throw new Error(`mesh .bin: truncated (expected ${8+g+E} B, got ${o.byteLength} B)`);const T=new Float32Array(o.slice(8,8+g)),$=new Uint32Array(o.slice(8+g,8+g+E));return{positions:T,indices:$}}function Ci(o,a){return(a??"").toLowerCase().endsWith(".ply")?Dc(o):Gc(o)}function zc(o,a){const h=o.length/3,P=new Float32Array(h*3);for(let g=0;g<a.length;g+=3){const E=a[g]*3,T=a[g+1]*3,$=a[g+2]*3,I=o[E],O=o[E+1],U=o[E+2],W=o[T],H=o[T+1],R=o[T+2],N=o[$],F=o[$+1],D=o[$+2],Y=W-I,L=H-O,q=R-U,Z=N-I,ae=F-O,ge=D-U,ue=L*ge-q*ae,ne=q*Z-Y*ge,fe=Y*ae-L*Z;P[E]+=ue,P[E+1]+=ne,P[E+2]+=fe,P[T]+=ue,P[T+1]+=ne,P[T+2]+=fe,P[$]+=ue,P[$+1]+=ne,P[$+2]+=fe}for(let g=0;g<h;g++){const E=g*3,T=P[E],$=P[E+1],I=P[E+2],O=Math.sqrt(T*T+$*$+I*I);if(O>1e-12){const U=1/O;P[E]=T*U,P[E+1]=$*U,P[E+2]=I*U}}return P}function ki(o,a){const h=o.createBuffer({label:"mesh-cull vertex buffer",size:a.positions.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(h,0,a.positions);const P=zc(a.positions,a.indices),g=o.createBuffer({label:"mesh-cull normal buffer",size:P.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(g,0,P);const E=o.createBuffer({label:"mesh-cull index buffer",size:a.indices.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST});return o.queue.writeBuffer(E,0,a.indices),{vertexBuffer:h,normalBuffer:g,indexBuffer:E,numVerts:a.positions.length/3,numIndices:a.indices.length}}async function Lc(o,a){try{const h=await fetch(a);if(!h.ok)return console.warn(`[mesh-cull] fetch failed for ${a}: ${h.status}`),null;const P=await h.arrayBuffer(),g=Ci(P,a);return console.log(`[mesh-cull] loaded ${a}: ${g.positions.length/3} verts, ${g.indices.length/3} tris`),ki(o,g)}catch(h){return console.warn(`[mesh-cull] load error for ${a}:`,h),null}}function Ic(o,a,h){try{const P=Ci(a,h);return console.log(`[mesh-cull] loaded from bundle: ${P.positions.length/3} verts, ${P.indices.length/3} tris`),ki(o,P)}catch(P){return console.warn("[mesh-cull] parse error:",P),null}}const Bi="BITYMI01",Rc=0,Uc=1,Vc=2,Oc=3,Fc=4,Nc=5,$c=6;function Qn(o){const a=(o&32768)>>15,h=(o&31744)>>10,P=o&1023;return h===0?(a?-1:1)*Math.pow(2,-14)*(P/1024):h===31?P?NaN:a?-1/0:1/0:(a?-1:1)*Math.pow(2,h-15)*(1+P/1024)}function ui(o,a,h,P,g,E){const T=(o-h.width*.5)/P.focal[0],$=-((a-h.height*.5)/P.focal[1]),I=P.rotation,O=I[0],U=I[4],W=I[8],H=I[1],R=I[5],N=I[9],F=I[2],D=I[6],Y=I[10];let L=T*O+$*H+F,q=T*U+$*R+D,Z=T*W+$*N+Y;const ae=Math.hypot(L,q,Z)||1;L/=ae,q/=ae,Z/=ae;const ge=P.position[0],ue=P.position[1],ne=P.position[2],fe=E*.005,te=fe*fe,Oe=new Uint32Array(g.buffer,g.byteOffset,g.length),Ge=g.length/8;let Le=1/0,Me=0,ve=0,Pe=0,le=-1;for(let se=0;se<Ge;se++){const ie=se*8,_e=g[ie+0]-ge,pe=g[ie+1]-ue,me=g[ie+2]-ne,Ae=_e*L+pe*q+me*Z;if(Ae<=0)continue;const ye=_e-Ae*L,Te=pe-Ae*q,Ue=me-Ae*Z;if(ye*ye+Te*Te+Ue*Ue>=te||!(Oe[ie+7]>>>16&1))continue;const x=Oe[ie+5],i=Oe[ie+6],f=Qn(x&65535),p=Qn(x>>>16&65535),b=Qn(i&65535),w=Qn(i>>>16&65535),C=Math.hypot(f,p,b,w)||1,k=f/C,r=p/C,_=b/C,c=w/C,d=2*(r*c+k*_),l=2*(_*c-k*r),m=1-2*(r*r+_*_),y=L*d+q*l+Z*m;let v;Math.abs(y)>1e-6?(v=(_e*d+pe*l+me*m)/y,(!isFinite(v)||v<=0)&&(v=Ae)):v=Ae,v<Le&&(Le=v,Me=ge+v*L,ve=ue+v*q,Pe=ne+v*Z,le=se)}return le<0?null:[Me,ve,Pe]}function Ti(o){const a=new Uint8Array(o),h=new TextDecoder().decode(a.subarray(0,8));if(h!==Bi)throw new Error(`Not a BITYMI bundle (bad magic '${h}')`);const P=new DataView(o),g=P.getUint32(8,!0),E=12,T=20;let $=null,I=null,O=null,U=null;for(let W=0;W<g;W++){const H=E+W*T,R=P.getUint32(H+0,!0),N=Number(P.getBigUint64(H+4,!0)),F=Number(P.getBigUint64(H+12,!0)),D=a.slice(N,N+F).buffer;R===Rc||R===Uc||R===Nc?$=D:R===Vc?I=D:R===Oc||R===Fc?O=D:R===$c&&(U=D)}if($===null)throw new Error("BITYMI bundle has no point cloud chunk");return{pcBuffer:$,camerasBuffer:I,atlasBuffer:O,meshBuffer:U}}async function Wc(o,a){var T;const h=await fetch(o);if(!h.ok)throw new Error(`fetch failed: ${h.status} ${h.statusText}`);const P=(()=>{const $=h.headers.get("content-length");return $&&parseInt($,10)||void 0})(),g=(T=h.body)==null?void 0:T.getReader();let E;if(!g)E=await h.arrayBuffer(),a&&a(E.byteLength,P,0);else{const $=[];let I=0,O=performance.now(),U=0;for(;;){const{done:R,value:N}=await g.read();if(R)break;$.push(N),I+=N.byteLength;const F=performance.now();if(F-O>=150&&a){const D=(I-U)/((F-O)/1e3);a(I,P,D),O=F,U=I}}const W=new Uint8Array(I);let H=0;for(const R of $)W.set(R,H),H+=R.byteLength;E=W.buffer,a&&a(I,P,0)}return E.byteLength>=8&&new TextDecoder().decode(new Uint8Array(E,0,8))===Bi?{bundle:Ti(E),rawPly:null}:{bundle:null,rawPly:E}}function qc(o){return new Promise(a=>{const h=document.createElement("input");h.type="file",h.accept=o,h.style.display="none",h.onchange=()=>{var P;return a(((P=h.files)==null?void 0:P[0])??null)},document.body.appendChild(h),h.click(),setTimeout(()=>document.body.removeChild(h),1e3)})}function jc(o,a,h){const P=document.getElementById("ui-panel-container"),g=document.getElementById("load-button"),E=document.getElementById("quick-links");g&&(g.onclick=async()=>{const U=await qc(".ply,.bitymi");if(U)if(P&&(P.style.display="none"),U.name.toLowerCase().endsWith(".bitymi")){const W=await U.arrayBuffer(),{pcBuffer:H}=Ti(W),R=new File([H],U.name.replace(/\.bitymi$/i,".ply"),{type:"application/octet-stream"}),N=await Is(R,o);a(N)}else{const W=await Is(U,o);a(W)}}),E&&(E.innerHTML="");const T=new URLSearchParams(window.location.search),$=T.get("bundle")??T.get("model_url"),I=T.get("camera_url"),O=T.get("mesh_url");$&&(P&&(P.style.display="none"),h($,I,O))}async function Kc(o,a,h,P){const g=new Fs(o,h),E=new Cc(g);let T=!1;o.addEventListener("pointerdown",()=>{T=!0}),window.addEventListener("pointerup",()=>{T=!1});const $=typeof window<"u"&&window.parent!==window,I={pos:new Float32Array(3),rot:new Float32Array(16)};if($){window.addEventListener("message",r=>{const _=r.data;if(!(!_||_.type!=="halloumi_sync_pose")&&!(!Array.isArray(_.position)||_.position.length!==3)&&!(!Array.isArray(_.rotation)||_.rotation.length!==16)){for(let c=0;c<3;c++)g.position[c]=_.position[c];for(let c=0;c<16;c++)g.rotation[c]=_.rotation[c];g.update_buffer(),E.resetToCamera();for(let c=0;c<3;c++)I.pos[c]=g.position[c];for(let c=0;c<16;c++)I.rot[c]=g.rotation[c]}});try{window.parent.postMessage({type:"halloumi_sync_ready"},"*")}catch{}}const O=()=>{if(!$)return;const r=g.position,_=g.rotation;let c=!1;for(let d=0;d<3;d++)if(Math.abs(r[d]-I.pos[d])>1e-6){c=!0;break}if(!c){for(let d=0;d<16;d++)if(Math.abs(_[d]-I.rot[d])>1e-6){c=!0;break}}if(c){for(let d=0;d<3;d++)I.pos[d]=r[d];for(let d=0;d<16;d++)I.rot[d]=_[d];try{window.parent.postMessage({type:"halloumi_camera_state",position:[r[0],r[1],r[2]],rotation:Array.from(_)},"*")}catch{}}},U="rgba8unorm";a.configure({device:h,format:U,alphaMode:"opaque",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING});let W=null;const H=()=>{g.on_update_canvas(),W!==null&&Xn(o.width,o.height,h,W.render_settings_buffer)};new ResizeObserver(()=>{const r=Math.max(.25,b.render_scale),_=Math.max(1,Math.ceil(r*o.clientWidth)),c=Math.max(1,Math.ceil(r*o.clientHeight));o.width===_&&o.height===c||(o.width=_,o.height=c,H())}).observe(o);let N=0,F=0;const D=()=>{(o.width!==N||o.height!==F)&&(N=o.width,F=o.height,H())},Y=new URLSearchParams(window.location.search);let q=Y.get("animation")==="1";E.enabled=!q;const Z=Y.get("camera_url"),ae=Y.get("mesh_cull"),ge=ae==="1"||ae==="true",ue=Y.get("mesh_normal_margin")??Y.get("mesh_margin"),ne=ue!==null?Number(ue):NaN,fe=Number.isFinite(ne)?ne:0,te=Y.get("mesh_debug"),Oe=te==="1"||te==="true",Ge=Y.get("bfc"),Le=Ge==="1"||Ge==="true",Me=Y.get("bfc_cos"),ve=Me!==null?Number(Me):NaN,Pe=Number.isFinite(ve)?ve:2,le=Y.get("mesh_sample_mode"),se=le!==null?parseInt(le,10):NaN,ie=Number.isFinite(se)&&se>=0&&se<=7?se:1,_e=Y.get("mesh_silhouette"),pe=_e==="1"||_e==="true",me=Y.get("mesh_invert_depth"),Ae=me==="1"||me==="true",ye=Y.get("ht"),Te=ye==="3"?3:ye==="2"?2:ye==="1"||ye==="true"?1:0,Ue=Y.get("ht_k"),M=Ue!==null?Number(Ue):NaN,K=Number.isFinite(M)?M:150,x=Y.get("wsr"),i=x==="1"||x==="true"||x==="2",f=x==="2",p=Math.max(1,window.devicePixelRatio||1),b={gaussian_scaling:1,sh_bias:.5,animate:q,animateMode:"presets",bg:{r:0,g:0,b:0,a:0},atlas_enabled:!1,bfc:Le,bfc_cos:Pe,ht_mode:Te,ht_k:K,wsr:i,wsr_gate:f,mesh_cull:ge,mesh_margin:fe,mesh_debug:Oe,mesh_sample_mode:ie,mesh_silhouette:pe,mesh_invert_depth:Ae,render_scale:1},w=new jl.Pane({title:"Config",expanded:!0});w.addInput(b,"animate",{label:"Animate"}).on("change",r=>{const _=q;q=r.value,E.enabled=!r.value,!_&&q&&C.value&&C.value.onAnimateStart(),_&&!q&&C.value&&C.value.onAnimateStop()}),w.addInput(b,"animateMode",{label:"Anim path",options:{"Training views":"presets","Circle orbit":"circle"}});const C={value:null};jc(h,r=>k(r,[],null,null),async(r,_,c)=>{let d=_??Z,l,m=null,y=null;const v=r.toLowerCase();if(v.endsWith(".bitymi")||v.includes(".bitymi?")){$s("downloading bundle ...");try{const{bundle:V}=await Wc(r,(re,Q,J)=>{const ce=re/1048576,we=Q?Q/(1024*1024):void 0,de=J/(1024*1024),be=Q?Math.min(99,Math.floor(re/Q*100)):void 0,xe=we?`total ${we.toFixed(1)} MB`:"total -- MB",ke=we&&be!==void 0?`${ce.toFixed(1)} MB downloaded (${be}%)`:`${ce.toFixed(1)} MB downloaded`,$e=`${de.toFixed(2)} MB/s`;Rt(`downloading bundle ...
${xe}, ${ke}
${$e}`)});if(!V)throw new Error("Expected a .bitymi bundle");Rt("parsing PLY ...");const j=new File([V.pcBuffer],"bundle.ply",{type:"application/octet-stream"});if(l=await Is(j,h),!d&&V.camerasBuffer&&(d=URL.createObjectURL(new Blob([V.camerasBuffer],{type:"application/json"}))),V.atlasBuffer){const re=V.atlasBuffer.byteLength/1048576;Rt(`uploading atlas ...
${re.toFixed(1)} MB BC7`);try{const Q=Fl(V.atlasBuffer);m=$l(h,Q,!0)}catch(Q){console.warn("[atlas] failed to parse/upload atlas:",Q)}}V.meshBuffer&&!c&&(Rt("uploading mesh ..."),y=Ic(h,V.meshBuffer,"bundle.mesh"))}catch(V){throw zn(),V}}else l=await Wl(r,h);c&&(Rt("loading mesh ..."),y=await Lc(h,c));const B=d?await gc(d):[];B.length>0&&g.set_preset(B[0]),k(l,B,m,y)});function k(r,_=[],c=null,d=null){const l=[(r.bbox.min[0]+r.bbox.max[0])/2,(r.bbox.min[1]+r.bbox.max[1])/2,(r.bbox.min[2]+r.bbox.max[2])/2];E.setBbox(r.bbox.min,r.bbox.max);const m=.5*Math.sqrt((r.bbox.max[0]-r.bbox.min[0])**2+(r.bbox.max[1]-r.bbox.min[1])**2+(r.bbox.max[2]-r.bbox.min[2])**2);function y(X,he){const oe=ui(X,he,o,g,r.surfel_data,m);oe&&(E.setOrbitPivot(oe),console.log(`[pick] orbit pivot → (${oe[0].toFixed(3)}, ${oe[1].toFixed(3)}, ${oe[2].toFixed(3)})`))}function v(){const X=o.width*.5,he=o.height*.5,oe=ui(X,he,o,g,r.surfel_data,m);if(!oe)return;const Ie=g.rotation,Ve=Ie[2],Se=Ie[6],Be=Ie[10],We=oe[0]-g.position[0],Ze=oe[1]-g.position[1],lt=oe[2]-g.position[2],pt=We*Ve+Ze*Se+lt*Be;pt>0&&E.setOrbitDepth(pt)}if(_.length===0){const X=r.bbox.max[0]-r.bbox.min[0],he=r.bbox.max[1]-r.bbox.min[1],oe=r.bbox.max[2]-r.bbox.min[2],Ve=.5*Math.sqrt(X*X+he*he+oe*oe)*.5;z.set(l[0]-Ve,l[1]-Ve,l[2]-Ve,g.position);const Se=z.create(Ve,Ve,Ve);z.normalize(Se,Se);const Be=z.create(0,1,0),We=z.create();z.cross(Be,Se,We),z.normalize(We,We);const Ze=z.create();z.cross(Se,We,Ze);const lt=St.create(We[0],Ze[0],Se[0],We[1],Ze[1],Se[1],We[2],Ze[2],Se[2]);dt.fromMat3(lt,g.rotation),g.update_buffer()}E.setCenter(z.create(r.centroid[0],r.centroid[1],r.centroid[2]));const B=new mc(r,h,U,g.uniform_buffer,P,c,d);W=B,Xn(o.width,o.height,h,B.render_settings_buffer),b.atlas_enabled=c!==null,d===null&&(b.mesh_cull=!1),B.setMeshCullEnabled(b.mesh_cull),B.setMeshMargin(b.mesh_margin),d===null&&(b.mesh_debug=!1),B.setMeshOverlayEnabled(b.mesh_debug);{const X=r.surfel_data,he=X.length/8;let oe=0,Ie=0,Ve=0;for(let Be=0;Be<he;Be++)oe+=X[Be*8],Ie+=X[Be*8+1],Ve+=X[Be*8+2];const Se=he>0?[oe/he,Ie/he,Ve/he]:[0,0,0];B.setBfcParams(b.bfc_cos,Se),on({bfc:b.bfc},h,B.render_settings_buffer),console.log(`[bfc] flag=${b.bfc} cos=${b.bfc_cos} centroid=(${Se[0].toFixed(3)}, ${Se[1].toFixed(3)}, ${Se[2].toFixed(3)})`)}B.htEnabled=b.ht_mode>0,B.htSortedTail=b.ht_mode===2,B.htOccTail=b.ht_mode===3,B.setHtTailK(b.ht_k),b.ht_mode>0&&console.log(`[ht] hybrid transparency ON (mode ${b.ht_mode}: ${b.ht_mode===2?"exact core + SORTED tail":b.ht_mode===3?"K=1 core + OCC tail (learned occlusion)":"K=1 core + OIT tail"}, tail_k=${b.ht_k})`),B.wsrEnabled=b.wsr,B.wsrGateEnabled=b.wsr_gate,b.wsr&&console.log("[wsr] sort-free weighted-sum mode requested — active only on probe_mode-2 bundles (stride-7 probes with learned occlusion)"),on({meshSampleMode:b.mesh_sample_mode,meshSilhouetteCull:b.mesh_silhouette,meshInvertDepth:b.mesh_invert_depth},h,B.render_settings_buffer),console.log(`[mesh-cull] ${d!==null?"mesh loaded":"no mesh"} · toggle=${b.mesh_cull} · margin=${b.mesh_margin}m · debug=${b.mesh_debug} · sample_mode=${b.mesh_sample_mode} · silhouette=${b.mesh_silhouette} · invert=${b.mesh_invert_depth}`);let V=!1;const j=(()=>{if(c!==null)return`${c.meta.format===2?"BC7":c.meta.format===3?"ASTC 4×4":c.meta.format===7?"BC7 codebook gather (typeD)":`format=${c.meta.format}`} ${c.meta.width}×${c.meta.height}, ${c.meta.n_layers} layers`;const X=h.features.has("texture-compression-bc"),he=h.features.has("texture-compression-astc");return`no atlas in bundle (GPU supports: ${(X?["BC7"]:[]).concat(he?["ASTC"]:[]).join("+")||"none"})`})();console.log("[atlas]",j),ai(r.sh_bias,h,B.render_settings_buffer),oi(b.gaussian_scaling,h,B.render_settings_buffer),b.sh_bias=r.sh_bias;const re=r.num_points.toLocaleString(),Q={stats:`${re} surfels · -- fps`};w.addMonitor(Q,"stats",{label:"Stats",interval:200}),w.addMonitor({atlas:j},"atlas",{label:"Atlas"});const J={stages:"— ms · awaiting timestamp data"};w.addMonitor(J,"stages",{label:"Stages",interval:500});let ce=null;if(B.timeQueryEnabled){ce=document.createElement("canvas"),ce.width=280,ce.height=24,ce.style.cssText="position:fixed;right:8px;bottom:8px;width:280px;height:24px;background:#0008;border:1px solid #2a2a2a;border-radius:4px;font-family:ui-monospace,Menlo,monospace;pointer-events:none;z-index:1000;",document.body.appendChild(ce);const X=oe=>{const Ie=ce.getContext("2d");if(!Ie)return;const Ve=ce.width,Se=ce.height;if(Ie.clearRect(0,0,Ve,Se),!oe||oe.total<=0){Ie.fillStyle="#888",Ie.font="11px ui-monospace,Menlo,monospace",Ie.fillText("awaiting GPU timestamps…",8,16);return}const Be=[{label:"cull",ms:oe.cull,color:"#3aa3ff"},{label:"pre",ms:oe.preprocess,color:"#3ad27a"},{label:"sort",ms:oe.sort,color:"#ffa53a"},{label:"render",ms:oe.render,color:"#ff5566"}],We=Math.max(.001,Be.reduce((lt,pt)=>lt+pt.ms,0));let Ze=0;Ie.font="10px ui-monospace,Menlo,monospace",Ie.textBaseline="middle";for(const lt of Be){const pt=lt.ms/We*Ve;Ie.fillStyle=lt.color,Ie.fillRect(Ze,0,pt,Se),pt>=38&&(Ie.fillStyle="#000c",Ie.fillText(`${lt.label} ${lt.ms.toFixed(1)}`,Ze+4,Se/2)),Ze+=pt}};setInterval(()=>{V||B.readPerfMetrics({silent:!0}).then(()=>{const oe=B.lastStageBreakdownMs;X(oe),oe&&(J.stages=`${oe.total.toFixed(1)} ms · cull ${oe.cull.toFixed(1)} / pre ${oe.preprocess.toFixed(1)} / sort ${oe.sort.toFixed(1)} / render ${oe.render.toFixed(1)}`)}).catch(oe=>console.warn("[perf] readPerfMetrics failed:",oe))},500)}const we=.4,de=3,be=.3;let xe=null,ke=0,$e=0;const Xe=_t.create(),Ke=St.create();let ze=_.length>0?0:-1;const Qe={view:_.length>0?`${ze+1} / ${_.length}: ${_[ze].img_name??ze}`:"— no presets —"};w.addMonitor(Qe,"view",{label:"View",interval:100});function rt(X){const he=St.create(X[0],X[1],X[2],X[4],X[5],X[6],X[8],X[9],X[10]);return _t.fromMat(he)}function it(X,he){xe={fromPos:z.clone(g.position),toPos:z.clone(X.position),fromQuat:_t.normalize(rt(g.rotation)),toQuat:_t.normalize(rt(X.rotation)),target:X,t:0,duration:Math.max(.01,he)}}const Je=(X,he=!0)=>{if(_.length===0)return;ze=(X%_.length+_.length)%_.length;const oe=_[ze];he?it(oe,we):(g.set_preset(oe),E.resetToCamera(),v()),Qe.view=`${ze+1} / ${_.length}: ${_[ze].img_name??ze}`};_.length>0&&(w.addButton({title:"◀ Prev view"}).on("click",()=>Je(ze-1)),w.addButton({title:"Next view ▶"}).on("click",()=>Je(ze+1)));const tt=_.length>0?Si(_,{tiltDownDeg:15,alignFirst:!0}):null,nt=tt?Ac(_,{numViews:120,tiltDownDeg:15,alignFirst:!0}):[];let He=0;const qe=12;C.value={onAnimateStart:()=>{He=0},onAnimateStop:()=>{E.resetToCamera(),v()}},w.addInput(b,"render_scale",{label:"Render scale",min:.25,max:p,step:.25}).on("change",X=>{const he=Math.max(.25,X.value),oe=Math.max(1,Math.ceil(he*o.clientWidth)),Ie=Math.max(1,Math.ceil(he*o.clientHeight));(o.width!==oe||o.height!==Ie)&&(o.width=oe,o.height=Ie,H())}),w.addInput(b,"gaussian_scaling",{label:"Surfel scale",min:0,max:1}).on("change",X=>oi(X.value,h,B.render_settings_buffer)),w.addInput(b,"sh_bias",{label:"SH bias",min:0,max:2,step:.01}).on("change",X=>ai(X.value,h,B.render_settings_buffer)),w.addInput(b,"bg",{label:"Background",color:{type:"float",alpha:!0}}).on("change",X=>{B.bgColor=[X.value.r,X.value.g,X.value.b,X.value.a]});const ot=c?c.meta.format===3?"Atlas (ASTC)":"Atlas (BC7)":"Atlas";w.addInput(b,"atlas_enabled",{label:ot}).on("change",X=>B.setAtlasEnabled(X.value)),w.addInput(b,"bfc",{label:"Backface"}).on("change",X=>on({bfc:X.value},h,B.render_settings_buffer)),w.addInput(b,"ht_mode",{label:"HybridT",options:{"off (sorted)":0,"OIT tail (no sort)":1,"sorted tail":2,"occ tail (learned)":3}}).on("change",X=>{B.htEnabled=X.value>0,B.htSortedTail=X.value===2,B.htOccTail=X.value===3}),w.addInput(b,"ht_k",{label:"HybridT tail k",min:0,max:2e3,step:10}).on("change",X=>B.setHtTailK(X.value)),w.addInput(b,"wsr",{label:"WSR (sort-free)"}).on("change",X=>{B.wsrEnabled=X.value}),w.addInput(b,"wsr_gate",{label:"WSR sat-gate"}).on("change",X=>{B.wsrGateEnabled=X.value});const Ye=w.addInput(b,"mesh_cull",{label:"Mesh cull"});Ye.on("change",X=>B.setMeshCullEnabled(X.value)),B.hasMesh||(Ye.disabled=!0);const ut=w.addInput(b,"mesh_margin",{label:"Mesh normal margin (m)",min:-.5,max:.5,step:.005});ut.on("change",X=>B.setMeshMargin(X.value)),B.hasMesh||(ut.disabled=!0);const st=w.addInput(b,"mesh_debug",{label:"Mesh debug"});st.on("change",X=>B.setMeshOverlayEnabled(X.value)),B.hasMesh||(st.disabled=!0);const Bt=w.addInput(b,"mesh_sample_mode",{label:"MeshCull pixel formula",options:{"0: (ndc+1)/2 baseline":0,"1: y-flipped":1,"2: x-flipped":2,"3: both flipped":3,"4: swap axes":4,"5: swap + y-flip":5,"6: swap + x-flip":6,"7: swap + both flip":7}});Bt.on("change",X=>on({meshSampleMode:X.value},h,B.render_settings_buffer)),B.hasMesh||(Bt.disabled=!0);const xt=w.addInput(b,"mesh_silhouette",{label:"Silhouette cull"});xt.on("change",X=>on({meshSilhouetteCull:X.value},h,B.render_settings_buffer)),B.hasMesh||(xt.disabled=!0);const Et=w.addInput(b,"mesh_invert_depth",{label:"Invert depth cull"});Et.on("change",X=>on({meshInvertDepth:X.value},h,B.render_settings_buffer)),B.hasMesh||(Et.disabled=!0),w.addButton({title:"🎯 Reset camera"}).on("click",()=>{if(_.length>0)g.set_preset(_[0]);else{const X=r.bbox.max[0]-r.bbox.min[0],he=r.bbox.max[1]-r.bbox.min[1],oe=r.bbox.max[2]-r.bbox.min[2],Ve=.5*Math.sqrt(X*X+he*he+oe*oe)*.5;z.set(l[0]-Ve,l[1]-Ve,l[2]-Ve,g.position);const Se=z.create(Ve,Ve,Ve);z.normalize(Se,Se);const Be=z.create();z.cross(z.create(0,1,0),Se,Be),z.normalize(Be,Be);const We=z.create();z.cross(Se,Be,We);const Ze=St.create(Be[0],We[0],Se[0],Be[1],We[1],Se[1],Be[2],We[2],Se[2]);dt.fromMat3(Ze,g.rotation),g.update_buffer()}E.resetToCamera(),v()});const gt={result:"— click Benchmark —"};w.addMonitor(gt,"result",{label:"Bench",interval:500,multiline:!0,lineCount:4});const Dt={bicycle:{w:1237,h:822,fovY:2*Math.atan(3286/(2*4627.3))},flowers:{w:1256,h:828,fovY:2*Math.atan(3312/(2*4285.5))},garden:{w:1297,h:840,fovY:2*Math.atan(3361/(2*3852.4))},stump:{w:1245,h:825,fovY:2*Math.atan(3300/(2*4528.1))},treehill:{w:1267,h:832,fovY:2*Math.atan(3326/(2*4205.6))},bonsai:{w:1559,h:1039,fovY:2*Math.atan(2078/(2*3222.7))},counter:{w:1558,h:1038,fovY:2*Math.atan(2076/(2*3192.7))},kitchen:{w:1558,h:1039,fovY:2*Math.atan(2078/(2*3240.8))},room:{w:1557,h:1038,fovY:2*Math.atan(2075/(2*3174))}};function Ut(){const he=((new URLSearchParams(window.location.search).get("bundle")??"").split("/").pop()??"").toLowerCase();for(const oe of Object.keys(Dt))if(he.startsWith(oe))return oe;return null}const wt=document.createElement("div");wt.id="bench-overlay",wt.style.cssText=["position:fixed","top:50%","left:50%","transform:translate(-50%,-50%)","background:rgba(0,0,0,0.9)","color:#fff","padding:24px 32px","border-radius:8px","font-family:monospace","font-size:14px","min-width:340px","text-align:left","box-shadow:0 4px 24px rgba(0,0,0,0.6)","display:none","z-index:9999","pointer-events:none"].join(";"),document.body.appendChild(wt);function Ht(X,he,oe){const Ie=Math.floor(he/Math.max(1,oe)*100),Ve=32,Se=Math.floor(he/Math.max(1,oe)*Ve),Be="█".repeat(Se)+"░".repeat(Ve-Se);wt.innerHTML=`<div style="margin-bottom:10px;font-weight:bold">📊 ${X}</div><div>[${Be}] ${Ie}%</div><div style="margin-top:6px;font-size:11px;opacity:0.7">${he} / ${oe} frames · offscreen · pipelined · no vsync</div>`,wt.style.display="block"}function Vt(){wt.style.display="none"}async function cn(X=10,he=200){if(V)return;if(_.length===0){gt.result="no cameras to benchmark";return}V=!0;const oe=q,Ie=b.animate,Ve=new Float32Array(g.position),Se=new Float32Array(g.rotation);q=!1,b.animate=!1,w.refresh(),xe=null,E.enabled=!1;const Be=Ut(),We=Be?Dt[Be]:null,Ze=(We==null?void 0:We.w)??o.width,lt=(We==null?void 0:We.h)??o.height,pt=(We==null?void 0:We.fovY)??g.getFov(),os=Be?`${Be} · ${Ze>=4e3/4+500?"images_4":"images_2"}`:"custom",wn=o.width,xn=o.height,as=g.getFov();o.width=Ze,o.height=lt,g.setFov(pt),Xn(Ze,lt,h,B.render_settings_buffer);const Vn=h.createTexture({size:[Ze,lt,1],format:U,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING}),ls=Vn.createView(),cs=()=>{const mt=h.createCommandEncoder();B.frame(mt,ls,!1),h.queue.submit([mt.finish()])},yn=()=>new Promise(mt=>setTimeout(mt,0)),us=20,On=async(mt,Xt)=>{let Mt=0,ht=0;for(Ht(Xt,0,mt),await yn();ht<mt;){const Ct=Math.min(us,mt-ht),At=performance.now();for(let Ot=0;Ot<Ct;Ot++)g.set_preset(_[(ht+Ot)%_.length]),cs();await h.queue.onSubmittedWorkDone();const Fn=performance.now();Mt+=Fn-At,ht+=Ct,Ht(Xt,ht,mt),await yn()}return Mt};try{await On(X,"Warming up");const Xt=await On(he,"Benchmarking")/he,Mt=1e3/Xt,ht=r.num_points??r.surfel_data.length/8,Ct=(pt*180/Math.PI).toFixed(1),At=`${Mt.toFixed(1)} FPS  (${Xt.toFixed(2)} ms/frame)
${Ze}×${lt} · fovY ${Ct}° · ${os}
${ht.toLocaleString()} surfels · ${X}w+${he}b · pipelined`;gt.result=At,console.log("[bench]",At.replace(/\n/g,"  |  "))}catch(mt){console.error("[bench] failed:",mt),gt.result=`bench failed: ${mt}`}finally{Vt(),Vn.destroy(),o.width=wn,o.height=xn,g.setFov(as),Xn(wn,xn,h,B.render_settings_buffer),g.position.set(Ve),g.rotation.set(Se),g.update_buffer(),E.enabled=!oe,q=oe,b.animate=Ie,w.refresh(),V=!1}}w.addButton({title:"📊 Benchmark"}).on("click",()=>cn()),document.addEventListener("keydown",X=>{const he=X.key;if(he>="0"&&he<="9"&&_.length>0){const oe=parseInt(he);oe<_.length&&Je(oe)}else he==="ArrowLeft"||he==="PageUp"?(Je(ze-1),X.preventDefault()):he==="ArrowRight"||he==="PageDown"?(Je(ze+1),X.preventDefault()):(he==="d"||he==="D")&&B.debugReadSortedIndices(30).catch(oe=>console.error("[DEBUG] readback failed:",oe))});function Yt(X,he){const oe=o.getBoundingClientRect(),Ie=window.devicePixelRatio||1;return[(X-oe.left)*Ie,(he-oe.top)*Ie]}o.addEventListener("dblclick",X=>{const[he,oe]=Yt(X.clientX,X.clientY);y(he,oe)});let je=0,vn=0,Rn=0;o.addEventListener("pointerdown",X=>{if(X.pointerType!=="touch")return;const he=performance.now(),oe=he-je,Ie=X.clientX-vn,Ve=X.clientY-Rn;if(oe>0&&oe<300&&Ie*Ie+Ve*Ve<40*40){const[Se,Be]=Yt(X.clientX,X.clientY);y(Se,Be),je=0}else je=he,vn=X.clientX,Rn=X.clientY});function un(){return T}let Un=performance.now(),Tt=60,gn=Promise.resolve(),Zt=0;async function dn(){var Ve;const X=performance.now(),he=Math.min((X-Un)/1e3,.1);if(Un=X,he>0){const Se=((Ve=B.lastStageBreakdownMs)==null?void 0:Ve.total)??0,Be=Se>.5?1e3/Se:1/he;Tt=Tt*.9+Be*.1,Q.stats=`${re} surfels · ${Math.round(Tt)} fps`}if(V){requestAnimationFrame(dn);return}if(un()&&(xe||q)&&(xe=null,E.resetToCamera(),v(),q&&(q=!1,b.animate=!1,w.refresh())),q&&b.animateMode==="circle"&&tt){He+=he/qe,He>=1&&(He-=1);const Se=Ei(tt,He);g.set_preset(Se),E.update(he);const Be=h.createCommandEncoder();B.frame(Be,a.getCurrentTexture().createView()),h.queue.submit([Be.finish()]),Zt++,Zt===2&&zn(),requestAnimationFrame(dn);return}if(xe){xe.t+=he/xe.duration;const Se=Math.min(1,xe.t),Be=Se*Se*(3-2*Se);z.lerp(xe.fromPos,xe.toPos,Be,g.position),_t.slerp(xe.fromQuat,xe.toQuat,Be,Xe),St.fromQuat(Xe,Ke),dt.fromMat3(Ke,g.rotation),g.update_buffer(),xe.t>=1&&(g.set_preset(xe.target),xe=null,q?_.length>0&&(ke=be):(E.resetToCamera(),v()))}else if(q&&!un()){const Se=b.animateMode==="circle"&&nt.length>0,Be=Se?nt:_;if(Be.length!==0){if(ke-=he,ke<=0){const Ze=((Se?$e:ze)+1)%Be.length;Se?$e=Ze:ze=Ze;const lt=Se?de/8:de;it(Be[Ze],lt),Se||(Qe.view=`${ze+1} / ${_.length}: ${_[ze].img_name??ze}`)}}}E.update(he),O(),D(),await gn;const oe=h.createCommandEncoder(),Ie=a.getCurrentTexture().createView();B.frame(oe,Ie),h.queue.submit([oe.finish()]),gn=h.queue.onSubmittedWorkDone(),Zt++,Zt===2&&zn(),requestAnimationFrame(dn)}requestAnimationFrame(dn)}}(function(){let a="dev";for(const P of Array.from(document.querySelectorAll('script[type="module"]'))){const E=P.src.match(/\/assets\/index-([0-9a-z]+)\.js$/i);if(E){a=E[1];break}}const h=document.createElement("div");h.textContent="v "+a,h.title="viewer build hash (Vite content hash of index-*.js)",Object.assign(h.style,{position:"fixed",right:"6px",bottom:"6px",font:"10px ui-monospace, SFMono-Regular, Menlo, monospace",color:"rgba(255,255,255,0.55)",background:"rgba(0,0,0,0.35)",padding:"2px 6px",borderRadius:"4px",pointerEvents:"none",zIndex:"9999",userSelect:"all"}),document.body.appendChild(h)})();(async()=>{if(navigator.gpu===void 0){const E=document.querySelector("#title");E.innerText="WebGPU is not supported in this browser.";return}const o=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(o===null){const E=document.querySelector("#title");E.innerText="No adapter is available for WebGPU.";return}const a=[];o.features.has("timestamp-query")&&a.push("timestamp-query"),o.features.has("texture-compression-bc")&&a.push("texture-compression-bc"),o.features.has("texture-compression-astc")&&a.push("texture-compression-astc"),console.log("[adapter]",o.info??"(unknown)"),console.log("[adapter] features:",Array.from(o.features)),console.log("[adapter] BC7:",o.features.has("texture-compression-bc")),console.log("[adapter] ASTC:",o.features.has("texture-compression-astc")),console.log("[adapter] limits:",{maxStorageBuffersPerShaderStage:o.limits.maxStorageBuffersPerShaderStage,maxComputeWorkgroupStorageSize:o.limits.maxComputeWorkgroupStorageSize,maxBufferSize:o.limits.maxBufferSize,maxStorageBufferBindingSize:o.limits.maxStorageBufferBindingSize,maxTextureDimension2D:o.limits.maxTextureDimension2D});const h=await o.requestDevice({requiredFeatures:a,requiredLimits:{maxStorageBuffersPerShaderStage:10,maxComputeWorkgroupStorageSize:o.limits.maxComputeWorkgroupStorageSize,maxBufferSize:o.limits.maxBufferSize,maxStorageBufferBindingSize:o.limits.maxStorageBufferBindingSize}}),P=document.querySelector("#webgpu-canvas");Il(P!==null);const g=P.getContext("webgpu");Kc(P,g,h,a)})();
