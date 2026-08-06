var xl=Object.defineProperty;var yl=(o,l,f)=>l in o?xl(o,l,{enumerable:!0,configurable:!0,writable:!0,value:f}):o[l]=f;var L=(o,l,f)=>(yl(o,typeof l!="symbol"?l+"":l,f),f);(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const g of document.querySelectorAll('link[rel="modulepreload"]'))S(g);new MutationObserver(g=>{for(const C of g)if(C.type==="childList")for(const B of C.addedNodes)B.tagName==="LINK"&&B.rel==="modulepreload"&&S(B)}).observe(document,{childList:!0,subtree:!0});function f(g){const C={};return g.integrity&&(C.integrity=g.integrity),g.referrerPolicy&&(C.referrerPolicy=g.referrerPolicy),g.crossOrigin==="use-credentials"?C.credentials="include":g.crossOrigin==="anonymous"?C.credentials="omit":C.credentials="same-origin",C}function S(g){if(g.ep)return;g.ep=!0;const C=f(g);fetch(g.href,C)}})();function Pl(o,l){return class extends o{constructor(...f){super(...f),l(this)}}}const Sl=Pl(Array,o=>o.fill(0));let De=1e-6;function El(o){function l(b=0,P=0){const k=new o(2);return b!==void 0&&(k[0]=b,P!==void 0&&(k[1]=P)),k}const f=l;function S(b,P,k){const r=k??new o(2);return r[0]=b,r[1]=P,r}function g(b,P){const k=P??new o(2);return k[0]=Math.ceil(b[0]),k[1]=Math.ceil(b[1]),k}function C(b,P){const k=P??new o(2);return k[0]=Math.floor(b[0]),k[1]=Math.floor(b[1]),k}function B(b,P){const k=P??new o(2);return k[0]=Math.round(b[0]),k[1]=Math.round(b[1]),k}function W(b,P=0,k=1,r){const h=r??new o(2);return h[0]=Math.min(k,Math.max(P,b[0])),h[1]=Math.min(k,Math.max(P,b[1])),h}function I(b,P,k){const r=k??new o(2);return r[0]=b[0]+P[0],r[1]=b[1]+P[1],r}function V(b,P,k,r){const h=r??new o(2);return h[0]=b[0]+P[0]*k,h[1]=b[1]+P[1]*k,h}function q(b,P){const k=b[0],r=b[1],h=P[0],c=P[1],d=Math.sqrt(k*k+r*r),a=Math.sqrt(h*h+c*c),m=d*a,y=m&&he(b,P)/m;return Math.acos(y)}function U(b,P,k){const r=k??new o(2);return r[0]=b[0]-P[0],r[1]=b[1]-P[1],r}const Y=U;function Z(b,P){return Math.abs(b[0]-P[0])<De&&Math.abs(b[1]-P[1])<De}function O(b,P){return b[0]===P[0]&&b[1]===P[1]}function z(b,P,k,r){const h=r??new o(2);return h[0]=b[0]+k*(P[0]-b[0]),h[1]=b[1]+k*(P[1]-b[1]),h}function N(b,P,k,r){const h=r??new o(2);return h[0]=b[0]+k[0]*(P[0]-b[0]),h[1]=b[1]+k[1]*(P[1]-b[1]),h}function $(b,P,k){const r=k??new o(2);return r[0]=Math.max(b[0],P[0]),r[1]=Math.max(b[1],P[1]),r}function j(b,P,k){const r=k??new o(2);return r[0]=Math.min(b[0],P[0]),r[1]=Math.min(b[1],P[1]),r}function M(b,P,k){const r=k??new o(2);return r[0]=b[0]*P,r[1]=b[1]*P,r}const K=M;function oe(b,P,k){const r=k??new o(2);return r[0]=b[0]/P,r[1]=b[1]/P,r}function we(b,P){const k=P??new o(2);return k[0]=1/b[0],k[1]=1/b[1],k}const ue=we;function ne(b,P,k){const r=k??new o(3),h=b[0]*P[1]-b[1]*P[0];return r[0]=0,r[1]=0,r[2]=h,r}function he(b,P){return b[0]*P[0]+b[1]*P[1]}function te(b){const P=b[0],k=b[1];return Math.sqrt(P*P+k*k)}const Oe=te;function Ge(b){const P=b[0],k=b[1];return P*P+k*k}const Le=Ge;function Te(b,P){const k=b[0]-P[0],r=b[1]-P[1];return Math.sqrt(k*k+r*r)}const ge=Te;function Pe(b,P){const k=b[0]-P[0],r=b[1]-P[1];return k*k+r*r}const ae=Pe;function se(b,P){const k=P??new o(2),r=b[0],h=b[1],c=Math.sqrt(r*r+h*h);return c>1e-5?(k[0]=r/c,k[1]=h/c):(k[0]=0,k[1]=0),k}function ie(b,P){const k=P??new o(2);return k[0]=-b[0],k[1]=-b[1],k}function _e(b,P){const k=P??new o(2);return k[0]=b[0],k[1]=b[1],k}const pe=_e;function be(b,P,k){const r=k??new o(2);return r[0]=b[0]*P[0],r[1]=b[1]*P[1],r}const Me=be;function ye(b,P,k){const r=k??new o(2);return r[0]=b[0]/P[0],r[1]=b[1]/P[1],r}const Be=ye;function Ve(b=1,P){const k=P??new o(2),r=Math.random()*2*Math.PI;return k[0]=Math.cos(r)*b,k[1]=Math.sin(r)*b,k}function A(b){const P=b??new o(2);return P[0]=0,P[1]=0,P}function H(b,P,k){const r=k??new o(2),h=b[0],c=b[1];return r[0]=h*P[0]+c*P[4]+P[12],r[1]=h*P[1]+c*P[5]+P[13],r}function x(b,P,k){const r=k??new o(2),h=b[0],c=b[1];return r[0]=P[0]*h+P[4]*c+P[8],r[1]=P[1]*h+P[5]*c+P[9],r}function i(b,P,k,r){const h=r??new o(2),c=b[0]-P[0],d=b[1]-P[1],a=Math.sin(k),m=Math.cos(k);return h[0]=c*m-d*a+P[0],h[1]=c*a+d*m+P[1],h}function _(b,P,k){const r=k??new o(2);return se(b,r),M(r,P,r)}function p(b,P,k){const r=k??new o(2);return te(b)>P?_(b,P,r):_e(b,r)}function v(b,P,k){const r=k??new o(2);return z(b,P,.5,r)}return{create:l,fromValues:f,set:S,ceil:g,floor:C,round:B,clamp:W,add:I,addScaled:V,angle:q,subtract:U,sub:Y,equalsApproximately:Z,equals:O,lerp:z,lerpV:N,max:$,min:j,mulScalar:M,scale:K,divScalar:oe,inverse:we,invert:ue,cross:ne,dot:he,length:te,len:Oe,lengthSq:Ge,lenSq:Le,distance:Te,dist:ge,distanceSq:Pe,distSq:ae,normalize:se,negate:ie,copy:_e,clone:pe,multiply:be,mul:Me,divide:ye,div:Be,random:Ve,zero:A,transformMat4:H,transformMat3:x,rotate:i,setLength:_,truncate:p,midpoint:v}}const Kr=new Map;function di(o){let l=Kr.get(o);return l||(l=El(o),Kr.set(o,l)),l}function Cl(o){function l(a,m,y){const w=new o(3);return a!==void 0&&(w[0]=a,m!==void 0&&(w[1]=m,y!==void 0&&(w[2]=y))),w}const f=l;function S(a,m,y,w){const D=w??new o(3);return D[0]=a,D[1]=m,D[2]=y,D}function g(a,m){const y=m??new o(3);return y[0]=Math.ceil(a[0]),y[1]=Math.ceil(a[1]),y[2]=Math.ceil(a[2]),y}function C(a,m){const y=m??new o(3);return y[0]=Math.floor(a[0]),y[1]=Math.floor(a[1]),y[2]=Math.floor(a[2]),y}function B(a,m){const y=m??new o(3);return y[0]=Math.round(a[0]),y[1]=Math.round(a[1]),y[2]=Math.round(a[2]),y}function W(a,m=0,y=1,w){const D=w??new o(3);return D[0]=Math.min(y,Math.max(m,a[0])),D[1]=Math.min(y,Math.max(m,a[1])),D[2]=Math.min(y,Math.max(m,a[2])),D}function I(a,m,y){const w=y??new o(3);return w[0]=a[0]+m[0],w[1]=a[1]+m[1],w[2]=a[2]+m[2],w}function V(a,m,y,w){const D=w??new o(3);return D[0]=a[0]+m[0]*y,D[1]=a[1]+m[1]*y,D[2]=a[2]+m[2]*y,D}function q(a,m){const y=a[0],w=a[1],D=a[2],T=m[0],F=m[1],re=m[2],J=Math.sqrt(y*y+w*w+D*D),X=Math.sqrt(T*T+F*F+re*re),fe=J*X,me=fe&&he(a,m)/fe;return Math.acos(me)}function U(a,m,y){const w=y??new o(3);return w[0]=a[0]-m[0],w[1]=a[1]-m[1],w[2]=a[2]-m[2],w}const Y=U;function Z(a,m){return Math.abs(a[0]-m[0])<De&&Math.abs(a[1]-m[1])<De&&Math.abs(a[2]-m[2])<De}function O(a,m){return a[0]===m[0]&&a[1]===m[1]&&a[2]===m[2]}function z(a,m,y,w){const D=w??new o(3);return D[0]=a[0]+y*(m[0]-a[0]),D[1]=a[1]+y*(m[1]-a[1]),D[2]=a[2]+y*(m[2]-a[2]),D}function N(a,m,y,w){const D=w??new o(3);return D[0]=a[0]+y[0]*(m[0]-a[0]),D[1]=a[1]+y[1]*(m[1]-a[1]),D[2]=a[2]+y[2]*(m[2]-a[2]),D}function $(a,m,y){const w=y??new o(3);return w[0]=Math.max(a[0],m[0]),w[1]=Math.max(a[1],m[1]),w[2]=Math.max(a[2],m[2]),w}function j(a,m,y){const w=y??new o(3);return w[0]=Math.min(a[0],m[0]),w[1]=Math.min(a[1],m[1]),w[2]=Math.min(a[2],m[2]),w}function M(a,m,y){const w=y??new o(3);return w[0]=a[0]*m,w[1]=a[1]*m,w[2]=a[2]*m,w}const K=M;function oe(a,m,y){const w=y??new o(3);return w[0]=a[0]/m,w[1]=a[1]/m,w[2]=a[2]/m,w}function we(a,m){const y=m??new o(3);return y[0]=1/a[0],y[1]=1/a[1],y[2]=1/a[2],y}const ue=we;function ne(a,m,y){const w=y??new o(3),D=a[2]*m[0]-a[0]*m[2],T=a[0]*m[1]-a[1]*m[0];return w[0]=a[1]*m[2]-a[2]*m[1],w[1]=D,w[2]=T,w}function he(a,m){return a[0]*m[0]+a[1]*m[1]+a[2]*m[2]}function te(a){const m=a[0],y=a[1],w=a[2];return Math.sqrt(m*m+y*y+w*w)}const Oe=te;function Ge(a){const m=a[0],y=a[1],w=a[2];return m*m+y*y+w*w}const Le=Ge;function Te(a,m){const y=a[0]-m[0],w=a[1]-m[1],D=a[2]-m[2];return Math.sqrt(y*y+w*w+D*D)}const ge=Te;function Pe(a,m){const y=a[0]-m[0],w=a[1]-m[1],D=a[2]-m[2];return y*y+w*w+D*D}const ae=Pe;function se(a,m){const y=m??new o(3),w=a[0],D=a[1],T=a[2],F=Math.sqrt(w*w+D*D+T*T);return F>1e-5?(y[0]=w/F,y[1]=D/F,y[2]=T/F):(y[0]=0,y[1]=0,y[2]=0),y}function ie(a,m){const y=m??new o(3);return y[0]=-a[0],y[1]=-a[1],y[2]=-a[2],y}function _e(a,m){const y=m??new o(3);return y[0]=a[0],y[1]=a[1],y[2]=a[2],y}const pe=_e;function be(a,m,y){const w=y??new o(3);return w[0]=a[0]*m[0],w[1]=a[1]*m[1],w[2]=a[2]*m[2],w}const Me=be;function ye(a,m,y){const w=y??new o(3);return w[0]=a[0]/m[0],w[1]=a[1]/m[1],w[2]=a[2]/m[2],w}const Be=ye;function Ve(a=1,m){const y=m??new o(3),w=Math.random()*2*Math.PI,D=Math.random()*2-1,T=Math.sqrt(1-D*D)*a;return y[0]=Math.cos(w)*T,y[1]=Math.sin(w)*T,y[2]=D*a,y}function A(a){const m=a??new o(3);return m[0]=0,m[1]=0,m[2]=0,m}function H(a,m,y){const w=y??new o(3),D=a[0],T=a[1],F=a[2],re=m[3]*D+m[7]*T+m[11]*F+m[15]||1;return w[0]=(m[0]*D+m[4]*T+m[8]*F+m[12])/re,w[1]=(m[1]*D+m[5]*T+m[9]*F+m[13])/re,w[2]=(m[2]*D+m[6]*T+m[10]*F+m[14])/re,w}function x(a,m,y){const w=y??new o(3),D=a[0],T=a[1],F=a[2];return w[0]=D*m[0*4+0]+T*m[1*4+0]+F*m[2*4+0],w[1]=D*m[0*4+1]+T*m[1*4+1]+F*m[2*4+1],w[2]=D*m[0*4+2]+T*m[1*4+2]+F*m[2*4+2],w}function i(a,m,y){const w=y??new o(3),D=a[0],T=a[1],F=a[2];return w[0]=D*m[0]+T*m[4]+F*m[8],w[1]=D*m[1]+T*m[5]+F*m[9],w[2]=D*m[2]+T*m[6]+F*m[10],w}function _(a,m,y){const w=y??new o(3),D=m[0],T=m[1],F=m[2],re=m[3]*2,J=a[0],X=a[1],fe=a[2],me=T*fe-F*X,de=F*J-D*fe,ve=D*X-T*J;return w[0]=J+me*re+(T*ve-F*de)*2,w[1]=X+de*re+(F*me-D*ve)*2,w[2]=fe+ve*re+(D*de-T*me)*2,w}function p(a,m){const y=m??new o(3);return y[0]=a[12],y[1]=a[13],y[2]=a[14],y}function v(a,m,y){const w=y??new o(3),D=m*4;return w[0]=a[D+0],w[1]=a[D+1],w[2]=a[D+2],w}function b(a,m){const y=m??new o(3),w=a[0],D=a[1],T=a[2],F=a[4],re=a[5],J=a[6],X=a[8],fe=a[9],me=a[10];return y[0]=Math.sqrt(w*w+D*D+T*T),y[1]=Math.sqrt(F*F+re*re+J*J),y[2]=Math.sqrt(X*X+fe*fe+me*me),y}function P(a,m,y,w){const D=w??new o(3),T=[],F=[];return T[0]=a[0]-m[0],T[1]=a[1]-m[1],T[2]=a[2]-m[2],F[0]=T[0],F[1]=T[1]*Math.cos(y)-T[2]*Math.sin(y),F[2]=T[1]*Math.sin(y)+T[2]*Math.cos(y),D[0]=F[0]+m[0],D[1]=F[1]+m[1],D[2]=F[2]+m[2],D}function k(a,m,y,w){const D=w??new o(3),T=[],F=[];return T[0]=a[0]-m[0],T[1]=a[1]-m[1],T[2]=a[2]-m[2],F[0]=T[2]*Math.sin(y)+T[0]*Math.cos(y),F[1]=T[1],F[2]=T[2]*Math.cos(y)-T[0]*Math.sin(y),D[0]=F[0]+m[0],D[1]=F[1]+m[1],D[2]=F[2]+m[2],D}function r(a,m,y,w){const D=w??new o(3),T=[],F=[];return T[0]=a[0]-m[0],T[1]=a[1]-m[1],T[2]=a[2]-m[2],F[0]=T[0]*Math.cos(y)-T[1]*Math.sin(y),F[1]=T[0]*Math.sin(y)+T[1]*Math.cos(y),F[2]=T[2],D[0]=F[0]+m[0],D[1]=F[1]+m[1],D[2]=F[2]+m[2],D}function h(a,m,y){const w=y??new o(3);return se(a,w),M(w,m,w)}function c(a,m,y){const w=y??new o(3);return te(a)>m?h(a,m,w):_e(a,w)}function d(a,m,y){const w=y??new o(3);return z(a,m,.5,w)}return{create:l,fromValues:f,set:S,ceil:g,floor:C,round:B,clamp:W,add:I,addScaled:V,angle:q,subtract:U,sub:Y,equalsApproximately:Z,equals:O,lerp:z,lerpV:N,max:$,min:j,mulScalar:M,scale:K,divScalar:oe,inverse:we,invert:ue,cross:ne,dot:he,length:te,len:Oe,lengthSq:Ge,lenSq:Le,distance:Te,dist:ge,distanceSq:Pe,distSq:ae,normalize:se,negate:ie,copy:_e,clone:pe,multiply:be,mul:Me,divide:ye,div:Be,random:Ve,zero:A,transformMat4:H,transformMat4Upper3x3:x,transformMat3:i,transformQuat:_,getTranslation:p,getAxis:v,getScaling:b,rotateX:P,rotateY:k,rotateZ:r,setLength:h,truncate:c,midpoint:d}}const Hr=new Map;function as(o){let l=Hr.get(o);return l||(l=Cl(o),Hr.set(o,l)),l}function kl(o){const l=di(o),f=as(o);function S(i,_,p,v,b,P,k,r,h){const c=new o(12);return c[3]=0,c[7]=0,c[11]=0,i!==void 0&&(c[0]=i,_!==void 0&&(c[1]=_,p!==void 0&&(c[2]=p,v!==void 0&&(c[4]=v,b!==void 0&&(c[5]=b,P!==void 0&&(c[6]=P,k!==void 0&&(c[8]=k,r!==void 0&&(c[9]=r,h!==void 0&&(c[10]=h))))))))),c}function g(i,_,p,v,b,P,k,r,h,c){const d=c??new o(12);return d[0]=i,d[1]=_,d[2]=p,d[3]=0,d[4]=v,d[5]=b,d[6]=P,d[7]=0,d[8]=k,d[9]=r,d[10]=h,d[11]=0,d}function C(i,_){const p=_??new o(12);return p[0]=i[0],p[1]=i[1],p[2]=i[2],p[3]=0,p[4]=i[4],p[5]=i[5],p[6]=i[6],p[7]=0,p[8]=i[8],p[9]=i[9],p[10]=i[10],p[11]=0,p}function B(i,_){const p=_??new o(12),v=i[0],b=i[1],P=i[2],k=i[3],r=v+v,h=b+b,c=P+P,d=v*r,a=b*r,m=b*h,y=P*r,w=P*h,D=P*c,T=k*r,F=k*h,re=k*c;return p[0]=1-m-D,p[1]=a+re,p[2]=y-F,p[3]=0,p[4]=a-re,p[5]=1-d-D,p[6]=w+T,p[7]=0,p[8]=y+F,p[9]=w-T,p[10]=1-d-m,p[11]=0,p}function W(i,_){const p=_??new o(12);return p[0]=-i[0],p[1]=-i[1],p[2]=-i[2],p[4]=-i[4],p[5]=-i[5],p[6]=-i[6],p[8]=-i[8],p[9]=-i[9],p[10]=-i[10],p}function I(i,_,p){const v=p??new o(12);return v[0]=i[0]*_,v[1]=i[1]*_,v[2]=i[2]*_,v[4]=i[4]*_,v[5]=i[5]*_,v[6]=i[6]*_,v[8]=i[8]*_,v[9]=i[9]*_,v[10]=i[10]*_,v}const V=I;function q(i,_,p){const v=p??new o(12);return v[0]=i[0]+_[0],v[1]=i[1]+_[1],v[2]=i[2]+_[2],v[4]=i[4]+_[4],v[5]=i[5]+_[5],v[6]=i[6]+_[6],v[8]=i[8]+_[8],v[9]=i[9]+_[9],v[10]=i[10]+_[10],v}function U(i,_){const p=_??new o(12);return p[0]=i[0],p[1]=i[1],p[2]=i[2],p[4]=i[4],p[5]=i[5],p[6]=i[6],p[8]=i[8],p[9]=i[9],p[10]=i[10],p}const Y=U;function Z(i,_){return Math.abs(i[0]-_[0])<De&&Math.abs(i[1]-_[1])<De&&Math.abs(i[2]-_[2])<De&&Math.abs(i[4]-_[4])<De&&Math.abs(i[5]-_[5])<De&&Math.abs(i[6]-_[6])<De&&Math.abs(i[8]-_[8])<De&&Math.abs(i[9]-_[9])<De&&Math.abs(i[10]-_[10])<De}function O(i,_){return i[0]===_[0]&&i[1]===_[1]&&i[2]===_[2]&&i[4]===_[4]&&i[5]===_[5]&&i[6]===_[6]&&i[8]===_[8]&&i[9]===_[9]&&i[10]===_[10]}function z(i){const _=i??new o(12);return _[0]=1,_[1]=0,_[2]=0,_[4]=0,_[5]=1,_[6]=0,_[8]=0,_[9]=0,_[10]=1,_}function N(i,_){const p=_??new o(12);if(p===i){let m;return m=i[1],i[1]=i[4],i[4]=m,m=i[2],i[2]=i[8],i[8]=m,m=i[6],i[6]=i[9],i[9]=m,p}const v=i[0*4+0],b=i[0*4+1],P=i[0*4+2],k=i[1*4+0],r=i[1*4+1],h=i[1*4+2],c=i[2*4+0],d=i[2*4+1],a=i[2*4+2];return p[0]=v,p[1]=k,p[2]=c,p[4]=b,p[5]=r,p[6]=d,p[8]=P,p[9]=h,p[10]=a,p}function $(i,_){const p=_??new o(12),v=i[0*4+0],b=i[0*4+1],P=i[0*4+2],k=i[1*4+0],r=i[1*4+1],h=i[1*4+2],c=i[2*4+0],d=i[2*4+1],a=i[2*4+2],m=a*r-h*d,y=-a*k+h*c,w=d*k-r*c,D=1/(v*m+b*y+P*w);return p[0]=m*D,p[1]=(-a*b+P*d)*D,p[2]=(h*b-P*r)*D,p[4]=y*D,p[5]=(a*v-P*c)*D,p[6]=(-h*v+P*k)*D,p[8]=w*D,p[9]=(-d*v+b*c)*D,p[10]=(r*v-b*k)*D,p}function j(i){const _=i[0],p=i[0*4+1],v=i[0*4+2],b=i[1*4+0],P=i[1*4+1],k=i[1*4+2],r=i[2*4+0],h=i[2*4+1],c=i[2*4+2];return _*(P*c-h*k)-b*(p*c-h*v)+r*(p*k-P*v)}const M=$;function K(i,_,p){const v=p??new o(12),b=i[0],P=i[1],k=i[2],r=i[4+0],h=i[4+1],c=i[4+2],d=i[8+0],a=i[8+1],m=i[8+2],y=_[0],w=_[1],D=_[2],T=_[4+0],F=_[4+1],re=_[4+2],J=_[8+0],X=_[8+1],fe=_[8+2];return v[0]=b*y+r*w+d*D,v[1]=P*y+h*w+a*D,v[2]=k*y+c*w+m*D,v[4]=b*T+r*F+d*re,v[5]=P*T+h*F+a*re,v[6]=k*T+c*F+m*re,v[8]=b*J+r*X+d*fe,v[9]=P*J+h*X+a*fe,v[10]=k*J+c*X+m*fe,v}const oe=K;function we(i,_,p){const v=p??z();return i!==v&&(v[0]=i[0],v[1]=i[1],v[2]=i[2],v[4]=i[4],v[5]=i[5],v[6]=i[6]),v[8]=_[0],v[9]=_[1],v[10]=1,v}function ue(i,_){const p=_??l.create();return p[0]=i[8],p[1]=i[9],p}function ne(i,_,p){const v=p??l.create(),b=_*4;return v[0]=i[b+0],v[1]=i[b+1],v}function he(i,_,p,v){const b=v===i?i:U(i,v),P=p*4;return b[P+0]=_[0],b[P+1]=_[1],b}function te(i,_){const p=_??l.create(),v=i[0],b=i[1],P=i[4],k=i[5];return p[0]=Math.sqrt(v*v+b*b),p[1]=Math.sqrt(P*P+k*k),p}function Oe(i,_){const p=_??f.create(),v=i[0],b=i[1],P=i[2],k=i[4],r=i[5],h=i[6],c=i[8],d=i[9],a=i[10];return p[0]=Math.sqrt(v*v+b*b+P*P),p[1]=Math.sqrt(k*k+r*r+h*h),p[2]=Math.sqrt(c*c+d*d+a*a),p}function Ge(i,_){const p=_??new o(12);return p[0]=1,p[1]=0,p[2]=0,p[4]=0,p[5]=1,p[6]=0,p[8]=i[0],p[9]=i[1],p[10]=1,p}function Le(i,_,p){const v=p??new o(12),b=_[0],P=_[1],k=i[0],r=i[1],h=i[2],c=i[1*4+0],d=i[1*4+1],a=i[1*4+2],m=i[2*4+0],y=i[2*4+1],w=i[2*4+2];return i!==v&&(v[0]=k,v[1]=r,v[2]=h,v[4]=c,v[5]=d,v[6]=a),v[8]=k*b+c*P+m,v[9]=r*b+d*P+y,v[10]=h*b+a*P+w,v}function Te(i,_){const p=_??new o(12),v=Math.cos(i),b=Math.sin(i);return p[0]=v,p[1]=b,p[2]=0,p[4]=-b,p[5]=v,p[6]=0,p[8]=0,p[9]=0,p[10]=1,p}function ge(i,_,p){const v=p??new o(12),b=i[0*4+0],P=i[0*4+1],k=i[0*4+2],r=i[1*4+0],h=i[1*4+1],c=i[1*4+2],d=Math.cos(_),a=Math.sin(_);return v[0]=d*b+a*r,v[1]=d*P+a*h,v[2]=d*k+a*c,v[4]=d*r-a*b,v[5]=d*h-a*P,v[6]=d*c-a*k,i!==v&&(v[8]=i[8],v[9]=i[9],v[10]=i[10]),v}function Pe(i,_){const p=_??new o(12),v=Math.cos(i),b=Math.sin(i);return p[0]=1,p[1]=0,p[2]=0,p[4]=0,p[5]=v,p[6]=b,p[8]=0,p[9]=-b,p[10]=v,p}function ae(i,_,p){const v=p??new o(12),b=i[4],P=i[5],k=i[6],r=i[8],h=i[9],c=i[10],d=Math.cos(_),a=Math.sin(_);return v[4]=d*b+a*r,v[5]=d*P+a*h,v[6]=d*k+a*c,v[8]=d*r-a*b,v[9]=d*h-a*P,v[10]=d*c-a*k,i!==v&&(v[0]=i[0],v[1]=i[1],v[2]=i[2]),v}function se(i,_){const p=_??new o(12),v=Math.cos(i),b=Math.sin(i);return p[0]=v,p[1]=0,p[2]=-b,p[4]=0,p[5]=1,p[6]=0,p[8]=b,p[9]=0,p[10]=v,p}function ie(i,_,p){const v=p??new o(12),b=i[0*4+0],P=i[0*4+1],k=i[0*4+2],r=i[2*4+0],h=i[2*4+1],c=i[2*4+2],d=Math.cos(_),a=Math.sin(_);return v[0]=d*b-a*r,v[1]=d*P-a*h,v[2]=d*k-a*c,v[8]=d*r+a*b,v[9]=d*h+a*P,v[10]=d*c+a*k,i!==v&&(v[4]=i[4],v[5]=i[5],v[6]=i[6]),v}const _e=Te,pe=ge;function be(i,_){const p=_??new o(12);return p[0]=i[0],p[1]=0,p[2]=0,p[4]=0,p[5]=i[1],p[6]=0,p[8]=0,p[9]=0,p[10]=1,p}function Me(i,_,p){const v=p??new o(12),b=_[0],P=_[1];return v[0]=b*i[0*4+0],v[1]=b*i[0*4+1],v[2]=b*i[0*4+2],v[4]=P*i[1*4+0],v[5]=P*i[1*4+1],v[6]=P*i[1*4+2],i!==v&&(v[8]=i[8],v[9]=i[9],v[10]=i[10]),v}function ye(i,_){const p=_??new o(12);return p[0]=i[0],p[1]=0,p[2]=0,p[4]=0,p[5]=i[1],p[6]=0,p[8]=0,p[9]=0,p[10]=i[2],p}function Be(i,_,p){const v=p??new o(12),b=_[0],P=_[1],k=_[2];return v[0]=b*i[0*4+0],v[1]=b*i[0*4+1],v[2]=b*i[0*4+2],v[4]=P*i[1*4+0],v[5]=P*i[1*4+1],v[6]=P*i[1*4+2],v[8]=k*i[2*4+0],v[9]=k*i[2*4+1],v[10]=k*i[2*4+2],v}function Ve(i,_){const p=_??new o(12);return p[0]=i,p[1]=0,p[2]=0,p[4]=0,p[5]=i,p[6]=0,p[8]=0,p[9]=0,p[10]=1,p}function A(i,_,p){const v=p??new o(12);return v[0]=_*i[0*4+0],v[1]=_*i[0*4+1],v[2]=_*i[0*4+2],v[4]=_*i[1*4+0],v[5]=_*i[1*4+1],v[6]=_*i[1*4+2],i!==v&&(v[8]=i[8],v[9]=i[9],v[10]=i[10]),v}function H(i,_){const p=_??new o(12);return p[0]=i,p[1]=0,p[2]=0,p[4]=0,p[5]=i,p[6]=0,p[8]=0,p[9]=0,p[10]=i,p}function x(i,_,p){const v=p??new o(12);return v[0]=_*i[0*4+0],v[1]=_*i[0*4+1],v[2]=_*i[0*4+2],v[4]=_*i[1*4+0],v[5]=_*i[1*4+1],v[6]=_*i[1*4+2],v[8]=_*i[2*4+0],v[9]=_*i[2*4+1],v[10]=_*i[2*4+2],v}return{add:q,clone:Y,copy:U,create:S,determinant:j,equals:O,equalsApproximately:Z,fromMat4:C,fromQuat:B,get3DScaling:Oe,getAxis:ne,getScaling:te,getTranslation:ue,identity:z,inverse:$,invert:M,mul:oe,mulScalar:V,multiply:K,multiplyScalar:I,negate:W,rotate:ge,rotateX:ae,rotateY:ie,rotateZ:pe,rotation:Te,rotationX:Pe,rotationY:se,rotationZ:_e,scale:Me,scale3D:Be,scaling:be,scaling3D:ye,set:g,setAxis:he,setTranslation:we,translate:Le,translation:Ge,transpose:N,uniformScale:A,uniformScale3D:x,uniformScaling:Ve,uniformScaling3D:H}}const Yr=new Map;function Bl(o){let l=Yr.get(o);return l||(l=kl(o),Yr.set(o,l)),l}function Tl(o){const l=as(o);function f(r,h,c,d,a,m,y,w,D,T,F,re,J,X,fe,me){const de=new o(16);return r!==void 0&&(de[0]=r,h!==void 0&&(de[1]=h,c!==void 0&&(de[2]=c,d!==void 0&&(de[3]=d,a!==void 0&&(de[4]=a,m!==void 0&&(de[5]=m,y!==void 0&&(de[6]=y,w!==void 0&&(de[7]=w,D!==void 0&&(de[8]=D,T!==void 0&&(de[9]=T,F!==void 0&&(de[10]=F,re!==void 0&&(de[11]=re,J!==void 0&&(de[12]=J,X!==void 0&&(de[13]=X,fe!==void 0&&(de[14]=fe,me!==void 0&&(de[15]=me)))))))))))))))),de}function S(r,h,c,d,a,m,y,w,D,T,F,re,J,X,fe,me,de){const ve=de??new o(16);return ve[0]=r,ve[1]=h,ve[2]=c,ve[3]=d,ve[4]=a,ve[5]=m,ve[6]=y,ve[7]=w,ve[8]=D,ve[9]=T,ve[10]=F,ve[11]=re,ve[12]=J,ve[13]=X,ve[14]=fe,ve[15]=me,ve}function g(r,h){const c=h??new o(16);return c[0]=r[0],c[1]=r[1],c[2]=r[2],c[3]=0,c[4]=r[4],c[5]=r[5],c[6]=r[6],c[7]=0,c[8]=r[8],c[9]=r[9],c[10]=r[10],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function C(r,h){const c=h??new o(16),d=r[0],a=r[1],m=r[2],y=r[3],w=d+d,D=a+a,T=m+m,F=d*w,re=a*w,J=a*D,X=m*w,fe=m*D,me=m*T,de=y*w,ve=y*D,Ae=y*T;return c[0]=1-J-me,c[1]=re+Ae,c[2]=X-ve,c[3]=0,c[4]=re-Ae,c[5]=1-F-me,c[6]=fe+de,c[7]=0,c[8]=X+ve,c[9]=fe-de,c[10]=1-F-J,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function B(r,h){const c=h??new o(16);return c[0]=-r[0],c[1]=-r[1],c[2]=-r[2],c[3]=-r[3],c[4]=-r[4],c[5]=-r[5],c[6]=-r[6],c[7]=-r[7],c[8]=-r[8],c[9]=-r[9],c[10]=-r[10],c[11]=-r[11],c[12]=-r[12],c[13]=-r[13],c[14]=-r[14],c[15]=-r[15],c}function W(r,h,c){const d=c??new o(16);return d[0]=r[0]+h[0],d[1]=r[1]+h[1],d[2]=r[2]+h[2],d[3]=r[3]+h[3],d[4]=r[4]+h[4],d[5]=r[5]+h[5],d[6]=r[6]+h[6],d[7]=r[7]+h[7],d[8]=r[8]+h[8],d[9]=r[9]+h[9],d[10]=r[10]+h[10],d[11]=r[11]+h[11],d[12]=r[12]+h[12],d[13]=r[13]+h[13],d[14]=r[14]+h[14],d[15]=r[15]+h[15],d}function I(r,h,c){const d=c??new o(16);return d[0]=r[0]*h,d[1]=r[1]*h,d[2]=r[2]*h,d[3]=r[3]*h,d[4]=r[4]*h,d[5]=r[5]*h,d[6]=r[6]*h,d[7]=r[7]*h,d[8]=r[8]*h,d[9]=r[9]*h,d[10]=r[10]*h,d[11]=r[11]*h,d[12]=r[12]*h,d[13]=r[13]*h,d[14]=r[14]*h,d[15]=r[15]*h,d}const V=I;function q(r,h){const c=h??new o(16);return c[0]=r[0],c[1]=r[1],c[2]=r[2],c[3]=r[3],c[4]=r[4],c[5]=r[5],c[6]=r[6],c[7]=r[7],c[8]=r[8],c[9]=r[9],c[10]=r[10],c[11]=r[11],c[12]=r[12],c[13]=r[13],c[14]=r[14],c[15]=r[15],c}const U=q;function Y(r,h){return Math.abs(r[0]-h[0])<De&&Math.abs(r[1]-h[1])<De&&Math.abs(r[2]-h[2])<De&&Math.abs(r[3]-h[3])<De&&Math.abs(r[4]-h[4])<De&&Math.abs(r[5]-h[5])<De&&Math.abs(r[6]-h[6])<De&&Math.abs(r[7]-h[7])<De&&Math.abs(r[8]-h[8])<De&&Math.abs(r[9]-h[9])<De&&Math.abs(r[10]-h[10])<De&&Math.abs(r[11]-h[11])<De&&Math.abs(r[12]-h[12])<De&&Math.abs(r[13]-h[13])<De&&Math.abs(r[14]-h[14])<De&&Math.abs(r[15]-h[15])<De}function Z(r,h){return r[0]===h[0]&&r[1]===h[1]&&r[2]===h[2]&&r[3]===h[3]&&r[4]===h[4]&&r[5]===h[5]&&r[6]===h[6]&&r[7]===h[7]&&r[8]===h[8]&&r[9]===h[9]&&r[10]===h[10]&&r[11]===h[11]&&r[12]===h[12]&&r[13]===h[13]&&r[14]===h[14]&&r[15]===h[15]}function O(r){const h=r??new o(16);return h[0]=1,h[1]=0,h[2]=0,h[3]=0,h[4]=0,h[5]=1,h[6]=0,h[7]=0,h[8]=0,h[9]=0,h[10]=1,h[11]=0,h[12]=0,h[13]=0,h[14]=0,h[15]=1,h}function z(r,h){const c=h??new o(16);if(c===r){let xe;return xe=r[1],r[1]=r[4],r[4]=xe,xe=r[2],r[2]=r[8],r[8]=xe,xe=r[3],r[3]=r[12],r[12]=xe,xe=r[6],r[6]=r[9],r[9]=xe,xe=r[7],r[7]=r[13],r[13]=xe,xe=r[11],r[11]=r[14],r[14]=xe,c}const d=r[0*4+0],a=r[0*4+1],m=r[0*4+2],y=r[0*4+3],w=r[1*4+0],D=r[1*4+1],T=r[1*4+2],F=r[1*4+3],re=r[2*4+0],J=r[2*4+1],X=r[2*4+2],fe=r[2*4+3],me=r[3*4+0],de=r[3*4+1],ve=r[3*4+2],Ae=r[3*4+3];return c[0]=d,c[1]=w,c[2]=re,c[3]=me,c[4]=a,c[5]=D,c[6]=J,c[7]=de,c[8]=m,c[9]=T,c[10]=X,c[11]=ve,c[12]=y,c[13]=F,c[14]=fe,c[15]=Ae,c}function N(r,h){const c=h??new o(16),d=r[0*4+0],a=r[0*4+1],m=r[0*4+2],y=r[0*4+3],w=r[1*4+0],D=r[1*4+1],T=r[1*4+2],F=r[1*4+3],re=r[2*4+0],J=r[2*4+1],X=r[2*4+2],fe=r[2*4+3],me=r[3*4+0],de=r[3*4+1],ve=r[3*4+2],Ae=r[3*4+3],xe=X*Ae,$e=ve*fe,je=T*Ae,Ke=ve*F,Ye=T*fe,ze=X*F,nt=m*Ae,it=ve*y,ot=m*fe,Ze=X*y,et=m*F,st=T*y,Fe=re*de,at=me*J,Xe=w*de,ut=me*D,rt=w*J,Mt=re*D,wt=d*de,St=me*a,Et=d*J,Ct=re*a,Dt=d*D,Ot=w*a,kt=xe*D+Ke*J+Ye*de-($e*D+je*J+ze*de),Gt=$e*a+nt*J+Ze*de-(xe*a+it*J+ot*de),ln=je*a+it*D+et*de-(Ke*a+nt*D+st*de),cn=ze*a+ot*D+st*J-(Ye*a+Ze*D+et*J),He=1/(d*kt+w*Gt+re*ln+me*cn);return c[0]=He*kt,c[1]=He*Gt,c[2]=He*ln,c[3]=He*cn,c[4]=He*($e*w+je*re+ze*me-(xe*w+Ke*re+Ye*me)),c[5]=He*(xe*d+it*re+ot*me-($e*d+nt*re+Ze*me)),c[6]=He*(Ke*d+nt*w+st*me-(je*d+it*w+et*me)),c[7]=He*(Ye*d+Ze*w+et*re-(ze*d+ot*w+st*re)),c[8]=He*(Fe*F+ut*fe+rt*Ae-(at*F+Xe*fe+Mt*Ae)),c[9]=He*(at*y+wt*fe+Ct*Ae-(Fe*y+St*fe+Et*Ae)),c[10]=He*(Xe*y+St*F+Dt*Ae-(ut*y+wt*F+Ot*Ae)),c[11]=He*(Mt*y+Et*F+Ot*fe-(rt*y+Ct*F+Dt*fe)),c[12]=He*(Xe*X+Mt*ve+at*T-(rt*ve+Fe*T+ut*X)),c[13]=He*(Et*ve+Fe*m+St*X-(wt*X+Ct*ve+at*m)),c[14]=He*(wt*T+Ot*ve+ut*m-(Dt*ve+Xe*m+St*T)),c[15]=He*(Dt*X+rt*m+Ct*T-(Et*T+Ot*X+Mt*m)),c}function $(r){const h=r[0],c=r[0*4+1],d=r[0*4+2],a=r[0*4+3],m=r[1*4+0],y=r[1*4+1],w=r[1*4+2],D=r[1*4+3],T=r[2*4+0],F=r[2*4+1],re=r[2*4+2],J=r[2*4+3],X=r[3*4+0],fe=r[3*4+1],me=r[3*4+2],de=r[3*4+3],ve=re*de,Ae=me*J,xe=w*de,$e=me*D,je=w*J,Ke=re*D,Ye=d*de,ze=me*a,nt=d*J,it=re*a,ot=d*D,Ze=w*a,et=ve*y+$e*F+je*fe-(Ae*y+xe*F+Ke*fe),st=Ae*c+Ye*F+it*fe-(ve*c+ze*F+nt*fe),Fe=xe*c+ze*y+ot*fe-($e*c+Ye*y+Ze*fe),at=Ke*c+nt*y+Ze*F-(je*c+it*y+ot*F);return h*et+m*st+T*Fe+X*at}const j=N;function M(r,h,c){const d=c??new o(16),a=r[0],m=r[1],y=r[2],w=r[3],D=r[4+0],T=r[4+1],F=r[4+2],re=r[4+3],J=r[8+0],X=r[8+1],fe=r[8+2],me=r[8+3],de=r[12+0],ve=r[12+1],Ae=r[12+2],xe=r[12+3],$e=h[0],je=h[1],Ke=h[2],Ye=h[3],ze=h[4+0],nt=h[4+1],it=h[4+2],ot=h[4+3],Ze=h[8+0],et=h[8+1],st=h[8+2],Fe=h[8+3],at=h[12+0],Xe=h[12+1],ut=h[12+2],rt=h[12+3];return d[0]=a*$e+D*je+J*Ke+de*Ye,d[1]=m*$e+T*je+X*Ke+ve*Ye,d[2]=y*$e+F*je+fe*Ke+Ae*Ye,d[3]=w*$e+re*je+me*Ke+xe*Ye,d[4]=a*ze+D*nt+J*it+de*ot,d[5]=m*ze+T*nt+X*it+ve*ot,d[6]=y*ze+F*nt+fe*it+Ae*ot,d[7]=w*ze+re*nt+me*it+xe*ot,d[8]=a*Ze+D*et+J*st+de*Fe,d[9]=m*Ze+T*et+X*st+ve*Fe,d[10]=y*Ze+F*et+fe*st+Ae*Fe,d[11]=w*Ze+re*et+me*st+xe*Fe,d[12]=a*at+D*Xe+J*ut+de*rt,d[13]=m*at+T*Xe+X*ut+ve*rt,d[14]=y*at+F*Xe+fe*ut+Ae*rt,d[15]=w*at+re*Xe+me*ut+xe*rt,d}const K=M;function oe(r,h,c){const d=c??O();return r!==d&&(d[0]=r[0],d[1]=r[1],d[2]=r[2],d[3]=r[3],d[4]=r[4],d[5]=r[5],d[6]=r[6],d[7]=r[7],d[8]=r[8],d[9]=r[9],d[10]=r[10],d[11]=r[11]),d[12]=h[0],d[13]=h[1],d[14]=h[2],d[15]=1,d}function we(r,h){const c=h??l.create();return c[0]=r[12],c[1]=r[13],c[2]=r[14],c}function ue(r,h,c){const d=c??l.create(),a=h*4;return d[0]=r[a+0],d[1]=r[a+1],d[2]=r[a+2],d}function ne(r,h,c,d){const a=d===r?d:q(r,d),m=c*4;return a[m+0]=h[0],a[m+1]=h[1],a[m+2]=h[2],a}function he(r,h){const c=h??l.create(),d=r[0],a=r[1],m=r[2],y=r[4],w=r[5],D=r[6],T=r[8],F=r[9],re=r[10];return c[0]=Math.sqrt(d*d+a*a+m*m),c[1]=Math.sqrt(y*y+w*w+D*D),c[2]=Math.sqrt(T*T+F*F+re*re),c}function te(r,h,c,d,a){const m=a??new o(16),y=Math.tan(Math.PI*.5-.5*r);if(m[0]=y/h,m[1]=0,m[2]=0,m[3]=0,m[4]=0,m[5]=y,m[6]=0,m[7]=0,m[8]=0,m[9]=0,m[11]=-1,m[12]=0,m[13]=0,m[15]=0,Number.isFinite(d)){const w=1/(c-d);m[10]=d*w,m[14]=d*c*w}else m[10]=-1,m[14]=-c;return m}function Oe(r,h,c,d=1/0,a){const m=a??new o(16),y=1/Math.tan(r*.5);if(m[0]=y/h,m[1]=0,m[2]=0,m[3]=0,m[4]=0,m[5]=y,m[6]=0,m[7]=0,m[8]=0,m[9]=0,m[11]=-1,m[12]=0,m[13]=0,m[15]=0,d===1/0)m[10]=0,m[14]=c;else{const w=1/(d-c);m[10]=c*w,m[14]=d*c*w}return m}function Ge(r,h,c,d,a,m,y){const w=y??new o(16);return w[0]=2/(h-r),w[1]=0,w[2]=0,w[3]=0,w[4]=0,w[5]=2/(d-c),w[6]=0,w[7]=0,w[8]=0,w[9]=0,w[10]=1/(a-m),w[11]=0,w[12]=(h+r)/(r-h),w[13]=(d+c)/(c-d),w[14]=a/(a-m),w[15]=1,w}function Le(r,h,c,d,a,m,y){const w=y??new o(16),D=h-r,T=d-c,F=a-m;return w[0]=2*a/D,w[1]=0,w[2]=0,w[3]=0,w[4]=0,w[5]=2*a/T,w[6]=0,w[7]=0,w[8]=(r+h)/D,w[9]=(d+c)/T,w[10]=m/F,w[11]=-1,w[12]=0,w[13]=0,w[14]=a*m/F,w[15]=0,w}function Te(r,h,c,d,a,m=1/0,y){const w=y??new o(16),D=h-r,T=d-c;if(w[0]=2*a/D,w[1]=0,w[2]=0,w[3]=0,w[4]=0,w[5]=2*a/T,w[6]=0,w[7]=0,w[8]=(r+h)/D,w[9]=(d+c)/T,w[11]=-1,w[12]=0,w[13]=0,w[15]=0,m===1/0)w[10]=0,w[14]=a;else{const F=1/(m-a);w[10]=a*F,w[14]=m*a*F}return w}const ge=l.create(),Pe=l.create(),ae=l.create();function se(r,h,c,d){const a=d??new o(16);return l.normalize(l.subtract(h,r,ae),ae),l.normalize(l.cross(c,ae,ge),ge),l.normalize(l.cross(ae,ge,Pe),Pe),a[0]=ge[0],a[1]=ge[1],a[2]=ge[2],a[3]=0,a[4]=Pe[0],a[5]=Pe[1],a[6]=Pe[2],a[7]=0,a[8]=ae[0],a[9]=ae[1],a[10]=ae[2],a[11]=0,a[12]=r[0],a[13]=r[1],a[14]=r[2],a[15]=1,a}function ie(r,h,c,d){const a=d??new o(16);return l.normalize(l.subtract(r,h,ae),ae),l.normalize(l.cross(c,ae,ge),ge),l.normalize(l.cross(ae,ge,Pe),Pe),a[0]=ge[0],a[1]=ge[1],a[2]=ge[2],a[3]=0,a[4]=Pe[0],a[5]=Pe[1],a[6]=Pe[2],a[7]=0,a[8]=ae[0],a[9]=ae[1],a[10]=ae[2],a[11]=0,a[12]=r[0],a[13]=r[1],a[14]=r[2],a[15]=1,a}function _e(r,h,c,d){const a=d??new o(16);return l.normalize(l.subtract(r,h,ae),ae),l.normalize(l.cross(c,ae,ge),ge),l.normalize(l.cross(ae,ge,Pe),Pe),a[0]=ge[0],a[1]=Pe[0],a[2]=ae[0],a[3]=0,a[4]=ge[1],a[5]=Pe[1],a[6]=ae[1],a[7]=0,a[8]=ge[2],a[9]=Pe[2],a[10]=ae[2],a[11]=0,a[12]=-(ge[0]*r[0]+ge[1]*r[1]+ge[2]*r[2]),a[13]=-(Pe[0]*r[0]+Pe[1]*r[1]+Pe[2]*r[2]),a[14]=-(ae[0]*r[0]+ae[1]*r[1]+ae[2]*r[2]),a[15]=1,a}function pe(r,h){const c=h??new o(16);return c[0]=1,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=1,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=1,c[11]=0,c[12]=r[0],c[13]=r[1],c[14]=r[2],c[15]=1,c}function be(r,h,c){const d=c??new o(16),a=h[0],m=h[1],y=h[2],w=r[0],D=r[1],T=r[2],F=r[3],re=r[1*4+0],J=r[1*4+1],X=r[1*4+2],fe=r[1*4+3],me=r[2*4+0],de=r[2*4+1],ve=r[2*4+2],Ae=r[2*4+3],xe=r[3*4+0],$e=r[3*4+1],je=r[3*4+2],Ke=r[3*4+3];return r!==d&&(d[0]=w,d[1]=D,d[2]=T,d[3]=F,d[4]=re,d[5]=J,d[6]=X,d[7]=fe,d[8]=me,d[9]=de,d[10]=ve,d[11]=Ae),d[12]=w*a+re*m+me*y+xe,d[13]=D*a+J*m+de*y+$e,d[14]=T*a+X*m+ve*y+je,d[15]=F*a+fe*m+Ae*y+Ke,d}function Me(r,h){const c=h??new o(16),d=Math.cos(r),a=Math.sin(r);return c[0]=1,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=d,c[6]=a,c[7]=0,c[8]=0,c[9]=-a,c[10]=d,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function ye(r,h,c){const d=c??new o(16),a=r[4],m=r[5],y=r[6],w=r[7],D=r[8],T=r[9],F=r[10],re=r[11],J=Math.cos(h),X=Math.sin(h);return d[4]=J*a+X*D,d[5]=J*m+X*T,d[6]=J*y+X*F,d[7]=J*w+X*re,d[8]=J*D-X*a,d[9]=J*T-X*m,d[10]=J*F-X*y,d[11]=J*re-X*w,r!==d&&(d[0]=r[0],d[1]=r[1],d[2]=r[2],d[3]=r[3],d[12]=r[12],d[13]=r[13],d[14]=r[14],d[15]=r[15]),d}function Be(r,h){const c=h??new o(16),d=Math.cos(r),a=Math.sin(r);return c[0]=d,c[1]=0,c[2]=-a,c[3]=0,c[4]=0,c[5]=1,c[6]=0,c[7]=0,c[8]=a,c[9]=0,c[10]=d,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function Ve(r,h,c){const d=c??new o(16),a=r[0*4+0],m=r[0*4+1],y=r[0*4+2],w=r[0*4+3],D=r[2*4+0],T=r[2*4+1],F=r[2*4+2],re=r[2*4+3],J=Math.cos(h),X=Math.sin(h);return d[0]=J*a-X*D,d[1]=J*m-X*T,d[2]=J*y-X*F,d[3]=J*w-X*re,d[8]=J*D+X*a,d[9]=J*T+X*m,d[10]=J*F+X*y,d[11]=J*re+X*w,r!==d&&(d[4]=r[4],d[5]=r[5],d[6]=r[6],d[7]=r[7],d[12]=r[12],d[13]=r[13],d[14]=r[14],d[15]=r[15]),d}function A(r,h){const c=h??new o(16),d=Math.cos(r),a=Math.sin(r);return c[0]=d,c[1]=a,c[2]=0,c[3]=0,c[4]=-a,c[5]=d,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=1,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function H(r,h,c){const d=c??new o(16),a=r[0*4+0],m=r[0*4+1],y=r[0*4+2],w=r[0*4+3],D=r[1*4+0],T=r[1*4+1],F=r[1*4+2],re=r[1*4+3],J=Math.cos(h),X=Math.sin(h);return d[0]=J*a+X*D,d[1]=J*m+X*T,d[2]=J*y+X*F,d[3]=J*w+X*re,d[4]=J*D-X*a,d[5]=J*T-X*m,d[6]=J*F-X*y,d[7]=J*re-X*w,r!==d&&(d[8]=r[8],d[9]=r[9],d[10]=r[10],d[11]=r[11],d[12]=r[12],d[13]=r[13],d[14]=r[14],d[15]=r[15]),d}function x(r,h,c){const d=c??new o(16);let a=r[0],m=r[1],y=r[2];const w=Math.sqrt(a*a+m*m+y*y);a/=w,m/=w,y/=w;const D=a*a,T=m*m,F=y*y,re=Math.cos(h),J=Math.sin(h),X=1-re;return d[0]=D+(1-D)*re,d[1]=a*m*X+y*J,d[2]=a*y*X-m*J,d[3]=0,d[4]=a*m*X-y*J,d[5]=T+(1-T)*re,d[6]=m*y*X+a*J,d[7]=0,d[8]=a*y*X+m*J,d[9]=m*y*X-a*J,d[10]=F+(1-F)*re,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}const i=x;function _(r,h,c,d){const a=d??new o(16);let m=h[0],y=h[1],w=h[2];const D=Math.sqrt(m*m+y*y+w*w);m/=D,y/=D,w/=D;const T=m*m,F=y*y,re=w*w,J=Math.cos(c),X=Math.sin(c),fe=1-J,me=T+(1-T)*J,de=m*y*fe+w*X,ve=m*w*fe-y*X,Ae=m*y*fe-w*X,xe=F+(1-F)*J,$e=y*w*fe+m*X,je=m*w*fe+y*X,Ke=y*w*fe-m*X,Ye=re+(1-re)*J,ze=r[0],nt=r[1],it=r[2],ot=r[3],Ze=r[4],et=r[5],st=r[6],Fe=r[7],at=r[8],Xe=r[9],ut=r[10],rt=r[11];return a[0]=me*ze+de*Ze+ve*at,a[1]=me*nt+de*et+ve*Xe,a[2]=me*it+de*st+ve*ut,a[3]=me*ot+de*Fe+ve*rt,a[4]=Ae*ze+xe*Ze+$e*at,a[5]=Ae*nt+xe*et+$e*Xe,a[6]=Ae*it+xe*st+$e*ut,a[7]=Ae*ot+xe*Fe+$e*rt,a[8]=je*ze+Ke*Ze+Ye*at,a[9]=je*nt+Ke*et+Ye*Xe,a[10]=je*it+Ke*st+Ye*ut,a[11]=je*ot+Ke*Fe+Ye*rt,r!==a&&(a[12]=r[12],a[13]=r[13],a[14]=r[14],a[15]=r[15]),a}const p=_;function v(r,h){const c=h??new o(16);return c[0]=r[0],c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=r[1],c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=r[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function b(r,h,c){const d=c??new o(16),a=h[0],m=h[1],y=h[2];return d[0]=a*r[0*4+0],d[1]=a*r[0*4+1],d[2]=a*r[0*4+2],d[3]=a*r[0*4+3],d[4]=m*r[1*4+0],d[5]=m*r[1*4+1],d[6]=m*r[1*4+2],d[7]=m*r[1*4+3],d[8]=y*r[2*4+0],d[9]=y*r[2*4+1],d[10]=y*r[2*4+2],d[11]=y*r[2*4+3],r!==d&&(d[12]=r[12],d[13]=r[13],d[14]=r[14],d[15]=r[15]),d}function P(r,h){const c=h??new o(16);return c[0]=r,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=r,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=r,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function k(r,h,c){const d=c??new o(16);return d[0]=h*r[0*4+0],d[1]=h*r[0*4+1],d[2]=h*r[0*4+2],d[3]=h*r[0*4+3],d[4]=h*r[1*4+0],d[5]=h*r[1*4+1],d[6]=h*r[1*4+2],d[7]=h*r[1*4+3],d[8]=h*r[2*4+0],d[9]=h*r[2*4+1],d[10]=h*r[2*4+2],d[11]=h*r[2*4+3],r!==d&&(d[12]=r[12],d[13]=r[13],d[14]=r[14],d[15]=r[15]),d}return{add:W,aim:se,axisRotate:_,axisRotation:x,cameraAim:ie,clone:U,copy:q,create:f,determinant:$,equals:Z,equalsApproximately:Y,fromMat3:g,fromQuat:C,frustum:Le,frustumReverseZ:Te,getAxis:ue,getScaling:he,getTranslation:we,identity:O,inverse:N,invert:j,lookAt:_e,mul:K,mulScalar:V,multiply:M,multiplyScalar:I,negate:B,ortho:Ge,perspective:te,perspectiveReverseZ:Oe,rotate:p,rotateX:ye,rotateY:Ve,rotateZ:H,rotation:i,rotationX:Me,rotationY:Be,rotationZ:A,scale:b,scaling:v,set:S,setAxis:ne,setTranslation:oe,translate:be,translation:pe,transpose:z,uniformScale:k,uniformScaling:P}}const Zr=new Map;function Ml(o){let l=Zr.get(o);return l||(l=Tl(o),Zr.set(o,l)),l}function Al(o){const l=as(o);function f(A,H,x,i){const _=new o(4);return A!==void 0&&(_[0]=A,H!==void 0&&(_[1]=H,x!==void 0&&(_[2]=x,i!==void 0&&(_[3]=i)))),_}const S=f;function g(A,H,x,i,_){const p=_??new o(4);return p[0]=A,p[1]=H,p[2]=x,p[3]=i,p}function C(A,H,x){const i=x??new o(4),_=H*.5,p=Math.sin(_);return i[0]=p*A[0],i[1]=p*A[1],i[2]=p*A[2],i[3]=Math.cos(_),i}function B(A,H){const x=H??l.create(3),i=Math.acos(A[3])*2,_=Math.sin(i*.5);return _>De?(x[0]=A[0]/_,x[1]=A[1]/_,x[2]=A[2]/_):(x[0]=1,x[1]=0,x[2]=0),{angle:i,axis:x}}function W(A,H){const x=te(A,H);return Math.acos(2*x*x-1)}function I(A,H,x){const i=x??new o(4),_=A[0],p=A[1],v=A[2],b=A[3],P=H[0],k=H[1],r=H[2],h=H[3];return i[0]=_*h+b*P+p*r-v*k,i[1]=p*h+b*k+v*P-_*r,i[2]=v*h+b*r+_*k-p*P,i[3]=b*h-_*P-p*k-v*r,i}const V=I;function q(A,H,x){const i=x??new o(4),_=H*.5,p=A[0],v=A[1],b=A[2],P=A[3],k=Math.sin(_),r=Math.cos(_);return i[0]=p*r+P*k,i[1]=v*r+b*k,i[2]=b*r-v*k,i[3]=P*r-p*k,i}function U(A,H,x){const i=x??new o(4),_=H*.5,p=A[0],v=A[1],b=A[2],P=A[3],k=Math.sin(_),r=Math.cos(_);return i[0]=p*r-b*k,i[1]=v*r+P*k,i[2]=b*r+p*k,i[3]=P*r-v*k,i}function Y(A,H,x){const i=x??new o(4),_=H*.5,p=A[0],v=A[1],b=A[2],P=A[3],k=Math.sin(_),r=Math.cos(_);return i[0]=p*r+v*k,i[1]=v*r-p*k,i[2]=b*r+P*k,i[3]=P*r-b*k,i}function Z(A,H,x,i){const _=i??new o(4),p=A[0],v=A[1],b=A[2],P=A[3];let k=H[0],r=H[1],h=H[2],c=H[3],d=p*k+v*r+b*h+P*c;d<0&&(d=-d,k=-k,r=-r,h=-h,c=-c);let a,m;if(1-d>De){const y=Math.acos(d),w=Math.sin(y);a=Math.sin((1-x)*y)/w,m=Math.sin(x*y)/w}else a=1-x,m=x;return _[0]=a*p+m*k,_[1]=a*v+m*r,_[2]=a*b+m*h,_[3]=a*P+m*c,_}function O(A,H){const x=H??new o(4),i=A[0],_=A[1],p=A[2],v=A[3],b=i*i+_*_+p*p+v*v,P=b?1/b:0;return x[0]=-i*P,x[1]=-_*P,x[2]=-p*P,x[3]=v*P,x}function z(A,H){const x=H??new o(4);return x[0]=-A[0],x[1]=-A[1],x[2]=-A[2],x[3]=A[3],x}function N(A,H){const x=H??new o(4),i=A[0]+A[5]+A[10];if(i>0){const _=Math.sqrt(i+1);x[3]=.5*_;const p=.5/_;x[0]=(A[6]-A[9])*p,x[1]=(A[8]-A[2])*p,x[2]=(A[1]-A[4])*p}else{let _=0;A[5]>A[0]&&(_=1),A[10]>A[_*4+_]&&(_=2);const p=(_+1)%3,v=(_+2)%3,b=Math.sqrt(A[_*4+_]-A[p*4+p]-A[v*4+v]+1);x[_]=.5*b;const P=.5/b;x[3]=(A[p*4+v]-A[v*4+p])*P,x[p]=(A[p*4+_]+A[_*4+p])*P,x[v]=(A[v*4+_]+A[_*4+v])*P}return x}function $(A,H,x,i,_){const p=_??new o(4),v=A*.5,b=H*.5,P=x*.5,k=Math.sin(v),r=Math.cos(v),h=Math.sin(b),c=Math.cos(b),d=Math.sin(P),a=Math.cos(P);switch(i){case"xyz":p[0]=k*c*a+r*h*d,p[1]=r*h*a-k*c*d,p[2]=r*c*d+k*h*a,p[3]=r*c*a-k*h*d;break;case"xzy":p[0]=k*c*a-r*h*d,p[1]=r*h*a-k*c*d,p[2]=r*c*d+k*h*a,p[3]=r*c*a+k*h*d;break;case"yxz":p[0]=k*c*a+r*h*d,p[1]=r*h*a-k*c*d,p[2]=r*c*d-k*h*a,p[3]=r*c*a+k*h*d;break;case"yzx":p[0]=k*c*a+r*h*d,p[1]=r*h*a+k*c*d,p[2]=r*c*d-k*h*a,p[3]=r*c*a-k*h*d;break;case"zxy":p[0]=k*c*a-r*h*d,p[1]=r*h*a+k*c*d,p[2]=r*c*d+k*h*a,p[3]=r*c*a-k*h*d;break;case"zyx":p[0]=k*c*a-r*h*d,p[1]=r*h*a+k*c*d,p[2]=r*c*d-k*h*a,p[3]=r*c*a+k*h*d;break;default:throw new Error(`Unknown rotation order: ${i}`)}return p}function j(A,H){const x=H??new o(4);return x[0]=A[0],x[1]=A[1],x[2]=A[2],x[3]=A[3],x}const M=j;function K(A,H,x){const i=x??new o(4);return i[0]=A[0]+H[0],i[1]=A[1]+H[1],i[2]=A[2]+H[2],i[3]=A[3]+H[3],i}function oe(A,H,x){const i=x??new o(4);return i[0]=A[0]-H[0],i[1]=A[1]-H[1],i[2]=A[2]-H[2],i[3]=A[3]-H[3],i}const we=oe;function ue(A,H,x){const i=x??new o(4);return i[0]=A[0]*H,i[1]=A[1]*H,i[2]=A[2]*H,i[3]=A[3]*H,i}const ne=ue;function he(A,H,x){const i=x??new o(4);return i[0]=A[0]/H,i[1]=A[1]/H,i[2]=A[2]/H,i[3]=A[3]/H,i}function te(A,H){return A[0]*H[0]+A[1]*H[1]+A[2]*H[2]+A[3]*H[3]}function Oe(A,H,x,i){const _=i??new o(4);return _[0]=A[0]+x*(H[0]-A[0]),_[1]=A[1]+x*(H[1]-A[1]),_[2]=A[2]+x*(H[2]-A[2]),_[3]=A[3]+x*(H[3]-A[3]),_}function Ge(A){const H=A[0],x=A[1],i=A[2],_=A[3];return Math.sqrt(H*H+x*x+i*i+_*_)}const Le=Ge;function Te(A){const H=A[0],x=A[1],i=A[2],_=A[3];return H*H+x*x+i*i+_*_}const ge=Te;function Pe(A,H){const x=H??new o(4),i=A[0],_=A[1],p=A[2],v=A[3],b=Math.sqrt(i*i+_*_+p*p+v*v);return b>1e-5?(x[0]=i/b,x[1]=_/b,x[2]=p/b,x[3]=v/b):(x[0]=0,x[1]=0,x[2]=0,x[3]=1),x}function ae(A,H){return Math.abs(A[0]-H[0])<De&&Math.abs(A[1]-H[1])<De&&Math.abs(A[2]-H[2])<De&&Math.abs(A[3]-H[3])<De}function se(A,H){return A[0]===H[0]&&A[1]===H[1]&&A[2]===H[2]&&A[3]===H[3]}function ie(A){const H=A??new o(4);return H[0]=0,H[1]=0,H[2]=0,H[3]=1,H}const _e=l.create(),pe=l.create(),be=l.create();function Me(A,H,x){const i=x??new o(4),_=l.dot(A,H);return _<-.999999?(l.cross(pe,A,_e),l.len(_e)<1e-6&&l.cross(be,A,_e),l.normalize(_e,_e),C(_e,Math.PI,i),i):_>.999999?(i[0]=0,i[1]=0,i[2]=0,i[3]=1,i):(l.cross(A,H,_e),i[0]=_e[0],i[1]=_e[1],i[2]=_e[2],i[3]=1+_,Pe(i,i))}const ye=new o(4),Be=new o(4);function Ve(A,H,x,i,_,p){const v=p??new o(4);return Z(A,i,_,ye),Z(H,x,_,Be),Z(ye,Be,2*_*(1-_),v),v}return{create:f,fromValues:S,set:g,fromAxisAngle:C,toAxisAngle:B,angle:W,multiply:I,mul:V,rotateX:q,rotateY:U,rotateZ:Y,slerp:Z,inverse:O,conjugate:z,fromMat:N,fromEuler:$,copy:j,clone:M,add:K,subtract:oe,sub:we,mulScalar:ue,scale:ne,divScalar:he,dot:te,lerp:Oe,length:Ge,len:Le,lengthSq:Te,lenSq:ge,normalize:Pe,equalsApproximately:ae,equals:se,identity:ie,rotationTo:Me,sqlerp:Ve}}const Xr=new Map;function Dl(o){let l=Xr.get(o);return l||(l=Al(o),Xr.set(o,l)),l}function Gl(o){function l(x,i,_,p){const v=new o(4);return x!==void 0&&(v[0]=x,i!==void 0&&(v[1]=i,_!==void 0&&(v[2]=_,p!==void 0&&(v[3]=p)))),v}const f=l;function S(x,i,_,p,v){const b=v??new o(4);return b[0]=x,b[1]=i,b[2]=_,b[3]=p,b}function g(x,i){const _=i??new o(4);return _[0]=Math.ceil(x[0]),_[1]=Math.ceil(x[1]),_[2]=Math.ceil(x[2]),_[3]=Math.ceil(x[3]),_}function C(x,i){const _=i??new o(4);return _[0]=Math.floor(x[0]),_[1]=Math.floor(x[1]),_[2]=Math.floor(x[2]),_[3]=Math.floor(x[3]),_}function B(x,i){const _=i??new o(4);return _[0]=Math.round(x[0]),_[1]=Math.round(x[1]),_[2]=Math.round(x[2]),_[3]=Math.round(x[3]),_}function W(x,i=0,_=1,p){const v=p??new o(4);return v[0]=Math.min(_,Math.max(i,x[0])),v[1]=Math.min(_,Math.max(i,x[1])),v[2]=Math.min(_,Math.max(i,x[2])),v[3]=Math.min(_,Math.max(i,x[3])),v}function I(x,i,_){const p=_??new o(4);return p[0]=x[0]+i[0],p[1]=x[1]+i[1],p[2]=x[2]+i[2],p[3]=x[3]+i[3],p}function V(x,i,_,p){const v=p??new o(4);return v[0]=x[0]+i[0]*_,v[1]=x[1]+i[1]*_,v[2]=x[2]+i[2]*_,v[3]=x[3]+i[3]*_,v}function q(x,i,_){const p=_??new o(4);return p[0]=x[0]-i[0],p[1]=x[1]-i[1],p[2]=x[2]-i[2],p[3]=x[3]-i[3],p}const U=q;function Y(x,i){return Math.abs(x[0]-i[0])<De&&Math.abs(x[1]-i[1])<De&&Math.abs(x[2]-i[2])<De&&Math.abs(x[3]-i[3])<De}function Z(x,i){return x[0]===i[0]&&x[1]===i[1]&&x[2]===i[2]&&x[3]===i[3]}function O(x,i,_,p){const v=p??new o(4);return v[0]=x[0]+_*(i[0]-x[0]),v[1]=x[1]+_*(i[1]-x[1]),v[2]=x[2]+_*(i[2]-x[2]),v[3]=x[3]+_*(i[3]-x[3]),v}function z(x,i,_,p){const v=p??new o(4);return v[0]=x[0]+_[0]*(i[0]-x[0]),v[1]=x[1]+_[1]*(i[1]-x[1]),v[2]=x[2]+_[2]*(i[2]-x[2]),v[3]=x[3]+_[3]*(i[3]-x[3]),v}function N(x,i,_){const p=_??new o(4);return p[0]=Math.max(x[0],i[0]),p[1]=Math.max(x[1],i[1]),p[2]=Math.max(x[2],i[2]),p[3]=Math.max(x[3],i[3]),p}function $(x,i,_){const p=_??new o(4);return p[0]=Math.min(x[0],i[0]),p[1]=Math.min(x[1],i[1]),p[2]=Math.min(x[2],i[2]),p[3]=Math.min(x[3],i[3]),p}function j(x,i,_){const p=_??new o(4);return p[0]=x[0]*i,p[1]=x[1]*i,p[2]=x[2]*i,p[3]=x[3]*i,p}const M=j;function K(x,i,_){const p=_??new o(4);return p[0]=x[0]/i,p[1]=x[1]/i,p[2]=x[2]/i,p[3]=x[3]/i,p}function oe(x,i){const _=i??new o(4);return _[0]=1/x[0],_[1]=1/x[1],_[2]=1/x[2],_[3]=1/x[3],_}const we=oe;function ue(x,i){return x[0]*i[0]+x[1]*i[1]+x[2]*i[2]+x[3]*i[3]}function ne(x){const i=x[0],_=x[1],p=x[2],v=x[3];return Math.sqrt(i*i+_*_+p*p+v*v)}const he=ne;function te(x){const i=x[0],_=x[1],p=x[2],v=x[3];return i*i+_*_+p*p+v*v}const Oe=te;function Ge(x,i){const _=x[0]-i[0],p=x[1]-i[1],v=x[2]-i[2],b=x[3]-i[3];return Math.sqrt(_*_+p*p+v*v+b*b)}const Le=Ge;function Te(x,i){const _=x[0]-i[0],p=x[1]-i[1],v=x[2]-i[2],b=x[3]-i[3];return _*_+p*p+v*v+b*b}const ge=Te;function Pe(x,i){const _=i??new o(4),p=x[0],v=x[1],b=x[2],P=x[3],k=Math.sqrt(p*p+v*v+b*b+P*P);return k>1e-5?(_[0]=p/k,_[1]=v/k,_[2]=b/k,_[3]=P/k):(_[0]=0,_[1]=0,_[2]=0,_[3]=0),_}function ae(x,i){const _=i??new o(4);return _[0]=-x[0],_[1]=-x[1],_[2]=-x[2],_[3]=-x[3],_}function se(x,i){const _=i??new o(4);return _[0]=x[0],_[1]=x[1],_[2]=x[2],_[3]=x[3],_}const ie=se;function _e(x,i,_){const p=_??new o(4);return p[0]=x[0]*i[0],p[1]=x[1]*i[1],p[2]=x[2]*i[2],p[3]=x[3]*i[3],p}const pe=_e;function be(x,i,_){const p=_??new o(4);return p[0]=x[0]/i[0],p[1]=x[1]/i[1],p[2]=x[2]/i[2],p[3]=x[3]/i[3],p}const Me=be;function ye(x){const i=x??new o(4);return i[0]=0,i[1]=0,i[2]=0,i[3]=0,i}function Be(x,i,_){const p=_??new o(4),v=x[0],b=x[1],P=x[2],k=x[3];return p[0]=i[0]*v+i[4]*b+i[8]*P+i[12]*k,p[1]=i[1]*v+i[5]*b+i[9]*P+i[13]*k,p[2]=i[2]*v+i[6]*b+i[10]*P+i[14]*k,p[3]=i[3]*v+i[7]*b+i[11]*P+i[15]*k,p}function Ve(x,i,_){const p=_??new o(4);return Pe(x,p),j(p,i,p)}function A(x,i,_){const p=_??new o(4);return ne(x)>i?Ve(x,i,p):se(x,p)}function H(x,i,_){const p=_??new o(4);return O(x,i,.5,p)}return{create:l,fromValues:f,set:S,ceil:g,floor:C,round:B,clamp:W,add:I,addScaled:V,subtract:q,sub:U,equalsApproximately:Y,equals:Z,lerp:O,lerpV:z,max:N,min:$,mulScalar:j,scale:M,divScalar:K,inverse:oe,invert:we,dot:ue,length:ne,len:he,lengthSq:te,lenSq:Oe,distance:Ge,dist:Le,distanceSq:Te,distSq:ge,normalize:Pe,negate:ae,copy:se,clone:ie,multiply:_e,mul:pe,divide:be,div:Me,zero:ye,transformMat4:Be,setLength:Ve,truncate:A,midpoint:H}}const Qr=new Map;function Ll(o){let l=Qr.get(o);return l||(l=Gl(o),Qr.set(o,l)),l}function Ns(o,l,f,S,g,C){return{mat3:Bl(o),mat4:Ml(l),quat:Dl(f),vec2:di(S),vec3:as(g),vec4:Ll(C)}}const{mat3:Pt,mat4:dt,quat:ht,vec2:Jr,vec3:R,vec4:Yc}=Ns(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);Ns(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);Ns(Sl,Array,Array,Array,Array,Array);const ei=document.querySelector("#log");let vt=null,an=null;function pi(){if(vt)return vt;vt=document.createElement("div"),vt.className="ply-spinner-overlay";const o=document.createElement("div");return o.className="ply-spinner",vt.appendChild(o),an=document.createElement("div"),an.className="ply-spinner-label",vt.appendChild(an),vt.style.display="none",document.body.appendChild(vt),vt}function $s(o){pi(),an&&o&&(an.textContent=o),vt&&(vt.style.opacity="1",vt.style.display="flex")}function Vt(o){pi(),an&&(an.textContent=o)}function Ln(){if(!vt)return;const o=vt;o.style.opacity="0",setTimeout(()=>{o.style.opacity==="0"&&(o.style.display="none")},220)}function hi(o,l){if(!ei)return;const f=document.createElement("p");f.innerText=o,l&&Object.assign(f.style,l),ei.appendChild(f)}async function Tt(o){console.log(o),hi(o)}async function zl(o){console.error(o),hi(o,{color:"red",backgroundColor:"rgba(255, 0, 0, 0.1)"})}let fi;function _i(){fi=performance.now()}function ti(o){const l=performance.now()-fi;Tt(`⏱️ ${o} Time: ${l.toFixed(0)} ms`)}function Rl(o,l){if(!o)throw new Error(l&&(typeof l=="string"?l:l()))}function Rn(o){return o+3&-4}const Il=2,Ul=3,Vl=5,Ol=6,zn=7,ns=8,ss=9,rs=10;function Fl(o){const l=new TextDecoder("ascii"),f=l.decode(new Uint8Array(o,0,4));if(f!=="NAT2")throw new Error(`NAT2 bad magic: '${f}'`);if(o.byteLength<4+64)throw new Error(`NAT2 truncated (${o.byteLength} bytes < 4 + 64)`);const S=new DataView(o),g=4,C=S.getUint32(g+0,!0),B=S.getUint32(g+4,!0),W=S.getUint32(g+8,!0),I=S.getUint32(g+12,!0),V=S.getUint32(g+16,!0),q=S.getFloat32(g+20,!0),U=S.getUint32(g+24,!0),Y=S.getUint32(g+28,!0),Z=S.getFloat32(g+32,!0),O=S.getFloat32(g+36,!0),z=S.getFloat32(g+40,!0),N=S.getUint32(g+44,!0),$=S.getFloat32(g+48,!0),j=S.getFloat32(g+52,!0),M=S.getUint32(g+56,!0),K=S.getUint32(g+60,!0),oe=Y===ss||Y===rs,we=oe?K:0,ue=oe?0:K,ne=ue>0?ue:1;if(Y===Vl||Y===Ol)throw new Error(`NAT2: paired-RVQ format=${Y} is retired 2026-07-23; re-bake with typeD (--bc7-codebook)`);const he=Y===ss||Y===rs;if(Y!==Il&&Y!==Ul&&Y!==zn&&Y!==ns&&!he)throw new Error(`NAT2: Halloumi-WS supports BC7 (2), ASTC 4x4 (3), BC7-codebook (7), ASTC-codebook (8), probe-BC7 (9) or probe-ASTC (10); got format=${Y}`);if(C%4!==0||N%4!==0)throw new Error(`NAT2 block-format dims must be 4-aligned: width=${C} layer_h=${N}`);let te=g+64;const Oe=(M+1)*4,Ge=new Uint32Array(o.slice(te,te+Oe));te+=Oe;let Le;if(ne>1){const pe=(ne+1)*4;if(te+pe>o.byteLength)throw new Error(`NAT2 truncated at column_cuts (need ${pe} from ${te})`);Le=new Uint32Array(o.slice(te,te+pe)),te+=pe}else Le=new Uint32Array([0,C]);let Te=0;for(let pe=0;pe<ne;pe++){const be=Le[pe+1]-Le[pe];be>Te&&(Te=be)}if(he){const pe=we&1?7:6,be=V*pe*4;if(te+be>o.byteLength)throw new Error(`NAT2 truncated at probes: need ${be} more bytes from offset ${te}, have ${o.byteLength-te}`);const Me=new Float32Array(o.slice(te,te+be));te+=be;const ye=C/4,Be=N/4,Ve=ye*Be*16,A=o.byteLength-te;if(A<Ve)throw new Error(`NAT2 probe atlas truncated: need ${Ve} bytes for ${C}x${N}, have ${A}`);const H=new Uint8Array(o.slice(te,te+Ve));return{width:C,height:B,channels:W,kernel_type:I,num_rects:V,uv_extent:q,sb_number:U,format:Y,sh_bias:Z,res_bias:O,compact_mult:z,layer_h:N,atlas_scale:$,atlas_offset:j,n_layers:M,n_cols:ne,layer_cuts:Ge,column_cuts:Le,slice_width:Te,rects_expanded:Me,atlas_bytes:H,probe_mode:we&1?2:1}}const ge=V*4*4;if(te+ge>o.byteLength)throw new Error(`NAT2 truncated at rects: need ${ge} more bytes from offset ${te}, have ${o.byteLength-te}`);const Pe=new Float32Array(o.slice(te,te+ge));te+=ge;const ae=new Float32Array(V*5);for(let pe=0;pe<V;pe++){const be=Pe[pe*4+0],Me=Pe[pe*4+1],ye=Pe[pe*4+2],Be=Pe[pe*4+3];let Ve=0;for(let _=1;_<=M&&Ge[_]<=Me;_++)Ve=_;let A=0;for(let _=1;_<=ne&&Le[_]<=be;_++)A=_;const H=Me-Ge[Ve],x=be-Le[A],i=A*M+Ve;ae[pe*5+0]=x,ae[pe*5+1]=H,ae[pe*5+2]=ye,ae[pe*5+3]=Be,ae[pe*5+4]=i}let se;const _e=C/4*16;if(Y===zn||Y===ns){if(te+24>o.byteLength)throw new Error("NAT2 truncated at typeD sub-header");const pe=Y===zn?"BCCB":"ACCB",be=l.decode(new Uint8Array(o,te,4));if(be!==pe)throw new Error(`NAT2 typeD bad sub-magic: expected '${pe}' got '${be}'`);const Me=S.getUint32(te+4,!0),ye=S.getUint32(te+8,!0),Be=S.getUint32(te+12,!0),Ve=S.getUint32(te+16,!0),A=S.getUint32(te+20,!0);if(Me!==1)throw new Error(`NAT2 BCCB unsupported version ${Me}`);if(Be!==B/4||Ve!==C/4||A!==Be*Ve)throw new Error(`NAT2 BCCB block grid mismatch: header ${C}×${B}, sub-header ${Ve}×${Be} (${A} blocks)`);te+=24;const H=ye*16;if(te+H>o.byteLength)throw new Error(`NAT2 BCCB truncated at codebook (need ${H}, have ${o.byteLength-te})`);const x=new Uint8Array(o,te,H);te+=H;const i=A*2;if(te+i>o.byteLength)throw new Error(`NAT2 BCCB truncated at indices (need ${i}, have ${o.byteLength-te})`);const _=new Uint16Array(o.slice(te,te+i));te+=i;const p=new Uint8Array(A*16);for(let v=0;v<A;v++){const b=_[v]*16;p.set(x.subarray(b,b+16),v*16)}se=p}else{let pe=0;for(let be=0;be<M;be++){const Me=Ge[be+1]-Ge[be];if(Me%4!==0)throw new Error(`NAT2 BC7 layer ${be} rows ${Me} not 4-aligned`);pe+=Me/4*_e}if(te+pe>o.byteLength)throw new Error(`NAT2 truncated at atlas payload: need ${pe} more bytes from offset ${te}, have ${o.byteLength-te}`);se=new Uint8Array(o.slice(te,te+pe))}return{width:C,height:B,channels:W,kernel_type:I,num_rects:V,uv_extent:q,sb_number:U,format:Y,sh_bias:Z,res_bias:O,compact_mult:z,layer_h:N,atlas_scale:$,atlas_offset:j,n_layers:M,n_cols:ne,layer_cuts:Ge,column_cuts:Le,slice_width:Te,rects_expanded:ae,atlas_bytes:se}}const Nl=32;function $l(o,l,f){if(l.format===5||l.format===6)throw new Error(`paired-RVQ format=${l.format} is retired; re-bake with typeD (--bc7-codebook)`);let S,g,C,B;if(l.format===2||l.format===zn||l.format===ss){if(!o.features.has("texture-compression-bc"))return Tt(`⚠️  bundle is BC7 (format=${l.format}) but texture-compression-bc not supported — atlas disabled`),null;B=l.format===ss?"BC7 atlas (proberes: shared probe texture)":l.format===zn?"BC7 atlas (typeD: codebook gather)":"BC7 atlas",{texture:S,view:g,sampler:C}=ni(o,l,"bc7-rgba-unorm",B)}else if(l.format===3||l.format===ns||l.format===rs){if(!o.features.has("texture-compression-astc"))return Tt(`⚠️  bundle is ASTC 4x4 (format=${l.format}) but texture-compression-astc not supported — atlas disabled`),null;B=l.format===rs?"ASTC 4x4 atlas (proberes: shared probe texture)":l.format===ns?"ASTC 4x4 atlas (typeD-ASTC: codebook gather)":"ASTC 4x4 atlas",{texture:S,view:g,sampler:C}=ni(o,l,"astc-4x4-unorm",B)}else return Tt(`⚠️  unsupported atlas format ${l.format} — atlas disabled`),null;const{rects_expanded:W}=l,I=o.createBuffer({label:"atlas rects (5-stride)",size:Rn(W.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(I,0,W);const V=o.createBuffer({label:"tex_params",size:48,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return mi(o,V,l,f),{texture:S,view:g,sampler:C,rectsBuffer:I,texParamsBuffer:V,meta:l}}function ni(o,l,f,S){const{width:g,layer_h:C,n_layers:B,n_cols:W,layer_cuts:I,column_cuts:V,slice_width:q,atlas_bytes:U}=l,Z=g/4*16,O=o.limits.maxTextureDimension2D;if(C>O||q>O)throw new Error(`⚠️  atlas slice dims ${q}x${C} exceed maxTextureDimension2D=${O}. Re-bake with smaller LAYER_H or pack with column-aware atlas widths.`);const z=W*B;if(z>o.limits.maxTextureArrayLayers)throw new Error(`⚠️  ${W} cols × ${B} layers = ${z} slices > maxTextureArrayLayers=${o.limits.maxTextureArrayLayers}.`);const N=o.createTexture({label:S,size:{width:q,height:C,depthOrArrayLayers:z},mipLevelCount:1,sampleCount:1,dimension:"2d",format:f,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});for(let M=0;M<W;M++){const K=V[M]/4,oe=(V[M+1]-V[M])/4;for(let we=0;we<B;we++){const ue=I[we]/4,ne=(I[we+1]-I[we])/4,he=M*B+we,te=ue*Z+K*16;o.queue.writeTexture({texture:N,mipLevel:0,origin:{x:0,y:0,z:he},aspect:"all"},U,{offset:te,bytesPerRow:Z,rowsPerImage:ne},{width:oe*4,height:ne*4,depthOrArrayLayers:1})}}const $=N.createView({label:`${S} view`,dimension:"2d-array"}),j=o.createSampler({label:`${S} sampler`,addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge",magFilter:"linear",minFilter:"linear",mipmapFilter:"nearest"});return{texture:N,view:$,sampler:j}}function mi(o,l,f,S){const g=new ArrayBuffer(32),C=new Uint32Array(g),B=new Float32Array(g);C[0]=S?1:0,B[1]=f.atlas_scale,B[2]=f.atlas_offset,B[3]=f.res_bias,C[4]=f.probe_mode?f.probe_mode|0:0,o.queue.writeBuffer(l,0,g)}async function Rs(o,l){Tt(`loading ply file from File... : ${o.name}`),$s("downloading PLY...");const f=await o.arrayBuffer();try{return await bi(f,l)}finally{Ln()}}async function Wl(o,l){Tt(`loading ply file from URL... : ${o}`),$s("downloading PLY...");try{_i();const f=new URL(o,self.location.href).href;return await bi({url:f},l)}finally{Ln()}}async function bi(o,l){return new Promise((f,S)=>{const g=new Worker(new URL(""+new URL("ply-worker-621cb083.js",import.meta.url).href,self.location),{type:"module"});g.onmessage=C=>{var W,I,V,q,U,Y,Z,O,z,N,$,j;const B=C.data;if((B==null?void 0:B.type)==="error"){zl(`PLY worker error: ${B.message??"unknown error"}`),g.terminate(),S(new Error(B.message??"Worker error"));return}else if((B==null?void 0:B.type)==="download_progress"){const M=B.totalBytes,K=B.loadedBytes/(1024*1024),oe=M?M/(1024*1024):void 0,we=(B.speedBps??0)/(1024*1024),ue=M?Math.min(99,Math.floor(B.loadedBytes/M*100)):void 0,ne=oe?`total ${oe.toFixed(1)} MB`:"total -- MB",he=oe&&ue!==void 0?`${K.toFixed(1)} MB downloaded (${ue}%)`:`${K.toFixed(1)} MB downloaded`,te=`${we.toFixed(2)} MB/s`;Vt(`downloading PLY ...
${ne}, ${he}
${te}`);return}else if((B==null?void 0:B.type)==="fetched"){Tt(`💾 Fetched (${B.byteLength} bytes)`),ti("Download"),Vt("parsing PLY..."),_i();return}else if((B==null?void 0:B.type)==="parse_progress"){const M=B.total??0,K=B.read??0,oe=M>0?Math.floor(K/M*100):0;Vt(`parsing PLY ...
${K}/${M} surfels (${oe}%)`);return}else if((B==null?void 0:B.type)==="done"){const M=B.num_points,K=B.K,oe=B.feature_mode??0,we=B.sh_bias,ue=B.kernel_type,ne=B.surfelBuffer,he=B.svParamsBuffer;Tt(`🪐 Total surfels: ${M}, mode=${oe===1?"SB":"SV"}, K=${K}, sh_bias=${we}, kernel_type=${ue}`);const Oe=l.createBuffer({label:"surfel input buffer",size:Rn(M*Nl),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});l.queue.writeBuffer(Oe,0,ne);const Ge=he.byteLength>0?he.byteLength:16,Le=l.createBuffer({label:oe===1?"color_params buffer (SB)":"color_params buffer (SV)",size:Rn(Ge),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});he.byteLength>0&&l.queue.writeBuffer(Le,0,he),g.terminate(),ti("Parse"),f({num_points:M,K,feature_mode:oe,sh_bias:we,kernel_type:ue,surfel_buffer:Oe,surfel_data:new Float32Array(ne),sv_params_buffer:Le,bbox:B.bbox??{min:[-1,-1,-1],max:[1,1,1]},centroid:B.centroid??[((((I=(W=B.bbox)==null?void 0:W.min)==null?void 0:I[0])??-1)+(((q=(V=B.bbox)==null?void 0:V.max)==null?void 0:q[0])??1))/2,((((Y=(U=B.bbox)==null?void 0:U.min)==null?void 0:Y[1])??-1)+(((O=(Z=B.bbox)==null?void 0:Z.max)==null?void 0:O[1])??1))/2,((((N=(z=B.bbox)==null?void 0:z.min)==null?void 0:N[2])??-1)+(((j=($=B.bbox)==null?void 0:$.max)==null?void 0:j[2])??1))/2]})}},g.onerror=C=>{g.terminate(),S(C)},o instanceof ArrayBuffer?(Vt("parsing PLY..."),g.postMessage({type:"start",plyBuffer:o},[o])):g.postMessage({type:"start_url",url:o.url})})}var ql=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Is={exports:{}};/*! Tweakpane 3.1.10 (c) 2016 cocopon, licensed under the MIT license. */(function(o,l){(function(f,S){S(l)})(ql,function(f){class S{constructor(e){const[t,s]=e.split("-"),u=t.split(".");this.major=parseInt(u[0],10),this.minor=parseInt(u[1],10),this.patch=parseInt(u[2],10),this.prerelease=s??null}toString(){const e=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[e,this.prerelease].join("-"):e}}class g{constructor(e){this.controller_=e}get element(){return this.controller_.view.element}get disabled(){return this.controller_.viewProps.get("disabled")}set disabled(e){this.controller_.viewProps.set("disabled",e)}get hidden(){return this.controller_.viewProps.get("hidden")}set hidden(e){this.controller_.viewProps.set("hidden",e)}dispose(){this.controller_.viewProps.set("disposed",!0)}}class C{constructor(e){this.target=e}}class B extends C{constructor(e,t,s,u){super(e),this.value=t,this.presetKey=s,this.last=u??!0}}class W extends C{constructor(e,t,s){super(e),this.value=t,this.presetKey=s}}class I extends C{constructor(e,t){super(e),this.expanded=t}}class V extends C{constructor(e,t){super(e),this.index=t}}function q(n){return n}function U(n){return n==null}function Y(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0}function Z(n,e){let t=n;do{const s=Object.getOwnPropertyDescriptor(t,e);if(s&&(s.set!==void 0||s.writable===!0))return!0;t=Object.getPrototypeOf(t)}while(t!==null);return!1}const O={alreadydisposed:()=>"View has been already disposed",invalidparams:n=>`Invalid parameters for '${n.name}'`,nomatchingcontroller:n=>`No matching controller for '${n.key}'`,nomatchingview:n=>`No matching view for '${JSON.stringify(n.params)}'`,notbindable:()=>"Value is not bindable",propertynotfound:n=>`Property '${n.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class z{static alreadyDisposed(){return new z({type:"alreadydisposed"})}static notBindable(){return new z({type:"notbindable"})}static propertyNotFound(e){return new z({type:"propertynotfound",context:{name:e}})}static shouldNeverHappen(){return new z({type:"shouldneverhappen"})}constructor(e){var t;this.message=(t=O[e.type](e.context))!==null&&t!==void 0?t:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=e.type}}class N{constructor(e,t,s){this.obj_=e,this.key_=t,this.presetKey_=s??t}static isBindable(e){return!(e===null||typeof e!="object"&&typeof e!="function")}get key(){return this.key_}get presetKey(){return this.presetKey_}read(){return this.obj_[this.key_]}write(e){this.obj_[this.key_]=e}writeProperty(e,t){const s=this.read();if(!N.isBindable(s))throw z.notBindable();if(!(e in s))throw z.propertyNotFound(e);s[e]=t}}class $ extends g{get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get title(){var e;return(e=this.controller_.valueController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.valueController.props.set("title",e)}on(e,t){const s=t.bind(this);return this.controller_.valueController.emitter.on(e,()=>{s(new C(this))}),this}}class j{constructor(){this.observers_={}}on(e,t){let s=this.observers_[e];return s||(s=this.observers_[e]=[]),s.push({handler:t}),this}off(e,t){const s=this.observers_[e];return s&&(this.observers_[e]=s.filter(u=>u.handler!==t)),this}emit(e,t){const s=this.observers_[e];s&&s.forEach(u=>{u.handler(t)})}}const M="tp";function K(n){return(t,s)=>[M,"-",n,"v",t?`_${t}`:"",s?`-${s}`:""].join("")}function oe(n,e){return t=>e(n(t))}function we(n){return n.rawValue}function ue(n,e){n.emitter.on("change",oe(we,e)),e(n.rawValue)}function ne(n,e,t){ue(n.value(e),t)}function he(n,e,t){t?n.classList.add(e):n.classList.remove(e)}function te(n,e){return t=>{he(n,e,t)}}function Oe(n,e){ue(n,t=>{e.textContent=t??""})}const Ge=K("btn");class Le{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Ge()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("button");s.classList.add(Ge("b")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const u=e.createElement("div");u.classList.add(Ge("t")),Oe(t.props.value("title"),u),this.buttonElement.appendChild(u)}}class Te{constructor(e,t){this.emitter=new j,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new Le(e,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class ge{constructor(e,t){var s;this.constraint_=t==null?void 0:t.constraint,this.equals_=(s=t==null?void 0:t.equals)!==null&&s!==void 0?s:(u,E)=>u===E,this.emitter=new j,this.rawValue_=e}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const s=t??{forceEmit:!1,last:!0},u=this.constraint_?this.constraint_.constrain(e):e,E=this.rawValue_;this.equals_(E,u)&&!s.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=u,this.emitter.emit("change",{options:s,previousRawValue:E,rawValue:u,sender:this}))}}class Pe{constructor(e){this.emitter=new j,this.value_=e}get rawValue(){return this.value_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const s=t??{forceEmit:!1,last:!0},u=this.value_;u===e&&!s.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=e,this.emitter.emit("change",{options:s,previousRawValue:u,rawValue:this.value_,sender:this}))}}function ae(n,e){const t=e==null?void 0:e.constraint,s=e==null?void 0:e.equals;return!t&&!s?new Pe(n):new ge(n,e)}class se{constructor(e){this.emitter=new j,this.valMap_=e;for(const t in this.valMap_)this.valMap_[t].emitter.on("change",()=>{this.emitter.emit("change",{key:t,sender:this})})}static createCore(e){return Object.keys(e).reduce((s,u)=>Object.assign(s,{[u]:ae(e[u])}),{})}static fromObject(e){const t=this.createCore(e);return new se(t)}get(e){return this.valMap_[e].rawValue}set(e,t){this.valMap_[e].rawValue=t}value(e){return this.valMap_[e]}}function ie(n,e){const s=Object.keys(e).reduce((u,E)=>{if(u===void 0)return;const G=e[E],ee=G(n[E]);return ee.succeeded?Object.assign(Object.assign({},u),{[E]:ee.value}):void 0},{});return s}function _e(n,e){return n.reduce((t,s)=>{if(t===void 0)return;const u=e(s);if(!(!u.succeeded||u.value===void 0))return[...t,u.value]},[])}function pe(n){return n===null?!1:typeof n=="object"}function be(n){return e=>t=>{if(!e&&t===void 0)return{succeeded:!1,value:void 0};if(e&&t===void 0)return{succeeded:!0,value:void 0};const s=n(t);return s!==void 0?{succeeded:!0,value:s}:{succeeded:!1,value:void 0}}}function Me(n){return{custom:e=>be(e)(n),boolean:be(e=>typeof e=="boolean"?e:void 0)(n),number:be(e=>typeof e=="number"?e:void 0)(n),string:be(e=>typeof e=="string"?e:void 0)(n),function:be(e=>typeof e=="function"?e:void 0)(n),constant:e=>be(t=>t===e?e:void 0)(n),raw:be(e=>e)(n),object:e=>be(t=>{if(pe(t))return ie(t,e)})(n),array:e=>be(t=>{if(Array.isArray(t))return _e(t,e)})(n)}}const ye={optional:Me(!0),required:Me(!1)};function Be(n,e){const t=ye.required.object(e)(n);return t.succeeded?t.value:void 0}function Ve(n){console.warn([`Missing '${n.key}' of ${n.target} in ${n.place}.`,"Please rebuild plugins with the latest core package."].join(" "))}function A(n){return n&&n.parentElement&&n.parentElement.removeChild(n),null}class H{constructor(e){this.value_=e}static create(e){return[new H(e),(t,s)=>{e.setRawValue(t,s)}]}get emitter(){return this.value_.emitter}get rawValue(){return this.value_.rawValue}}const x=K("");function i(n,e){return te(n,x(void 0,e))}class _ extends se{constructor(e){var t;super(e),this.onDisabledChange_=this.onDisabledChange_.bind(this),this.onParentChange_=this.onParentChange_.bind(this),this.onParentGlobalDisabledChange_=this.onParentGlobalDisabledChange_.bind(this),[this.globalDisabled_,this.setGlobalDisabled_]=H.create(ae(this.getGlobalDisabled_())),this.value("disabled").emitter.on("change",this.onDisabledChange_),this.value("parent").emitter.on("change",this.onParentChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_)}static create(e){var t,s,u;const E=e??{};return new _(se.createCore({disabled:(t=E.disabled)!==null&&t!==void 0?t:!1,disposed:!1,hidden:(s=E.hidden)!==null&&s!==void 0?s:!1,parent:(u=E.parent)!==null&&u!==void 0?u:null}))}get globalDisabled(){return this.globalDisabled_}bindClassModifiers(e){ue(this.globalDisabled_,i(e,"disabled")),ne(this,"hidden",i(e,"hidden"))}bindDisabled(e){ue(this.globalDisabled_,t=>{e.disabled=t})}bindTabIndex(e){ue(this.globalDisabled_,t=>{e.tabIndex=t?-1:0})}handleDispose(e){this.value("disposed").emitter.on("change",t=>{t&&e()})}getGlobalDisabled_(){const e=this.get("parent");return(e?e.globalDisabled.rawValue:!1)||this.get("disabled")}updateGlobalDisabled_(){this.setGlobalDisabled_(this.getGlobalDisabled_())}onDisabledChange_(){this.updateGlobalDisabled_()}onParentGlobalDisabledChange_(){this.updateGlobalDisabled_()}onParentChange_(e){var t;const s=e.previousRawValue;s==null||s.globalDisabled.emitter.off("change",this.onParentGlobalDisabledChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_),this.updateGlobalDisabled_()}}function p(){return["veryfirst","first","last","verylast"]}const v=K(""),b={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class P{constructor(e){this.parent_=null,this.blade=e.blade,this.view=e.view,this.viewProps=e.viewProps;const t=this.view.element;this.blade.value("positions").emitter.on("change",()=>{p().forEach(s=>{t.classList.remove(v(void 0,b[s]))}),this.blade.get("positions").forEach(s=>{t.classList.add(v(void 0,b[s]))})}),this.viewProps.handleDispose(()=>{A(t)})}get parent(){return this.parent_}set parent(e){if(this.parent_=e,!("parent"in this.viewProps.valMap_)){Ve({key:"parent",target:_.name,place:"BladeController.parent"});return}this.viewProps.set("parent",this.parent_?this.parent_.viewProps:null)}}const k="http://www.w3.org/2000/svg";function r(n){n.offsetHeight}function h(n,e){const t=n.style.transition;n.style.transition="none",e(),n.style.transition=t}function c(n){return n.ontouchstart!==void 0}function d(){return globalThis}function a(){return d().document}function m(n){const e=n.ownerDocument.defaultView;return e&&"document"in e?n.getContext("2d",{willReadFrequently:!0}):null}const y={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function w(n,e){const t=n.createElementNS(k,"svg");return t.innerHTML=y[e],t}function D(n,e,t){n.insertBefore(e,n.children[t])}function T(n){n.parentElement&&n.parentElement.removeChild(n)}function F(n){for(;n.children.length>0;)n.removeChild(n.children[0])}function re(n){for(;n.childNodes.length>0;)n.removeChild(n.childNodes[0])}function J(n){return n.relatedTarget?n.relatedTarget:"explicitOriginalTarget"in n?n.explicitOriginalTarget:null}const X=K("lbl");function fe(n,e){const t=n.createDocumentFragment();return e.split(`
`).map(u=>n.createTextNode(u)).forEach((u,E)=>{E>0&&t.appendChild(n.createElement("br")),t.appendChild(u)}),t}class me{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(X()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(X("l")),ne(t.props,"label",E=>{U(E)?this.element.classList.add(X(void 0,"nol")):(this.element.classList.remove(X(void 0,"nol")),re(s),s.appendChild(fe(e,E)))}),this.element.appendChild(s),this.labelElement=s;const u=e.createElement("div");u.classList.add(X("v")),this.element.appendChild(u),this.valueElement=u}}class de extends P{constructor(e,t){const s=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{view:new me(e,{props:t.props,viewProps:s}),viewProps:s})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}const ve={id:"button",type:"blade",accept(n){const e=ye,t=Be(n,{title:e.required.string,view:e.required.constant("button"),label:e.optional.string});return t?{params:t}:null},controller(n){return new de(n.document,{blade:n.blade,props:se.fromObject({label:n.params.label}),valueController:new Te(n.document,{props:se.fromObject({title:n.params.title}),viewProps:n.viewProps})})},api(n){return!(n.controller instanceof de)||!(n.controller.valueController instanceof Te)?null:new $(n.controller)}};class Ae extends P{constructor(e){super(e),this.value=e.value}}function xe(){return new se({positions:ae([],{equals:Y})})}class $e extends se{constructor(e){super(e)}static create(e){const t={completed:!0,expanded:e,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},s=se.createCore(t);return new $e(s)}get styleExpanded(){var e;return(e=this.get("temporaryExpanded"))!==null&&e!==void 0?e:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const e=this.get("expandedHeight");return this.get("shouldFixHeight")&&!U(e)?`${e}px`:"auto"}bindExpandedClass(e,t){const s=()=>{this.styleExpanded?e.classList.add(t):e.classList.remove(t)};ne(this,"expanded",s),ne(this,"temporaryExpanded",s)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function je(n,e){let t=0;return h(e,()=>{n.set("expandedHeight",null),n.set("temporaryExpanded",!0),r(e),t=e.clientHeight,n.set("temporaryExpanded",null),r(e)}),t}function Ke(n,e){e.style.height=n.styleHeight}function Ye(n,e){n.value("expanded").emitter.on("beforechange",()=>{if(n.set("completed",!1),U(n.get("expandedHeight"))){const t=je(n,e);t>0&&n.set("expandedHeight",t)}n.set("shouldFixHeight",!0),r(e)}),n.emitter.on("change",()=>{Ke(n,e)}),Ke(n,e),e.addEventListener("transitionend",t=>{t.propertyName==="height"&&n.cleanUpTransition()})}class ze extends g{constructor(e,t){super(e),this.rackApi_=t}}function nt(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"button"}))}function it(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"folder"}))}function ot(n,e){const t=e??{};return n.addBlade(Object.assign(Object.assign({},t),{view:"separator"}))}function Ze(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"tab"}))}class et{constructor(e){this.emitter=new j,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=e}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(e){for(const t of this.allItems())if(e(t))return t;return null}includes(e){return this.cache_.has(e)}add(e,t){if(this.includes(e))throw z.shouldNeverHappen();const s=t!==void 0?t:this.items_.length;this.items_.splice(s,0,e),this.cache_.add(e);const u=this.extract_(e);u&&(u.emitter.on("add",this.onSubListAdd_),u.emitter.on("remove",this.onSubListRemove_),u.allItems().forEach(E=>{this.cache_.add(E)})),this.emitter.emit("add",{index:s,item:e,root:this,target:this})}remove(e){const t=this.items_.indexOf(e);if(t<0)return;this.items_.splice(t,1),this.cache_.delete(e);const s=this.extract_(e);s&&(s.emitter.off("add",this.onSubListAdd_),s.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:t,item:e,root:this,target:this})}onSubListAdd_(e){this.cache_.add(e.item),this.emitter.emit("add",{index:e.index,item:e.item,root:this,target:e.target})}onSubListRemove_(e){this.cache_.delete(e.item),this.emitter.emit("remove",{index:e.index,item:e.item,root:this,target:e.target})}}class st extends g{constructor(e){super(e),this.onBindingChange_=this.onBindingChange_.bind(this),this.emitter_=new j,this.controller_.binding.emitter.on("change",this.onBindingChange_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,u=>{s(u.event)}),this}refresh(){this.controller_.binding.read()}onBindingChange_(e){const t=e.sender.target.read();this.emitter_.emit("change",{event:new B(this,t,this.controller_.binding.target.presetKey,e.options.last)})}}class Fe extends de{constructor(e,t){super(e,t),this.binding=t.binding}}class at extends g{constructor(e){super(e),this.onBindingUpdate_=this.onBindingUpdate_.bind(this),this.emitter_=new j,this.controller_.binding.emitter.on("update",this.onBindingUpdate_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,u=>{s(u.event)}),this}refresh(){this.controller_.binding.read()}onBindingUpdate_(e){const t=e.sender.target.read();this.emitter_.emit("update",{event:new W(this,t,this.controller_.binding.target.presetKey)})}}class Xe extends de{constructor(e,t){super(e,t),this.binding=t.binding,this.viewProps.bindDisabled(this.binding.ticker),this.viewProps.handleDispose(()=>{this.binding.dispose()})}}function ut(n){return n instanceof wt?n.apiSet_:n instanceof ze?n.rackApi_.apiSet_:null}function rt(n,e){const t=n.find(s=>s.controller_===e);if(!t)throw z.shouldNeverHappen();return t}function Mt(n,e,t){if(!N.isBindable(n))throw z.notBindable();return new N(n,e,t)}class wt extends g{constructor(e,t){super(e),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.onRackInputChange_=this.onRackInputChange_.bind(this),this.onRackMonitorUpdate_=this.onRackMonitorUpdate_.bind(this),this.emitter_=new j,this.apiSet_=new et(ut),this.pool_=t;const s=this.controller_.rack;s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),s.emitter.on("inputchange",this.onRackInputChange_),s.emitter.on("monitorupdate",this.onRackMonitorUpdate_),s.children.forEach(u=>{this.setUpApi_(u)})}get children(){return this.controller_.rack.children.map(e=>rt(this.apiSet_,e))}addInput(e,t,s){const u=s??{},E=this.controller_.view.element.ownerDocument,G=this.pool_.createInput(E,Mt(e,t,u.presetKey),u),ee=new st(G);return this.add(ee,u.index)}addMonitor(e,t,s){const u=s??{},E=this.controller_.view.element.ownerDocument,G=this.pool_.createMonitor(E,Mt(e,t),u),ee=new at(G);return this.add(ee,u.index)}addFolder(e){return it(this,e)}addButton(e){return nt(this,e)}addSeparator(e){return ot(this,e)}addTab(e){return Ze(this,e)}add(e,t){this.controller_.rack.add(e.controller_,t);const s=this.apiSet_.find(u=>u.controller_===e.controller_);return s&&this.apiSet_.remove(s),this.apiSet_.add(e),e}remove(e){this.controller_.rack.remove(e.controller_)}addBlade(e){const t=this.controller_.view.element.ownerDocument,s=this.pool_.createBlade(t,e),u=this.pool_.createBladeApi(s);return this.add(u,e.index)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,u=>{s(u.event)}),this}setUpApi_(e){this.apiSet_.find(s=>s.controller_===e)||this.apiSet_.add(this.pool_.createBladeApi(e))}onRackAdd_(e){this.setUpApi_(e.bladeController)}onRackRemove_(e){if(e.isRoot){const t=rt(this.apiSet_,e.bladeController);this.apiSet_.remove(t)}}onRackInputChange_(e){const t=e.bladeController;if(t instanceof Fe){const s=rt(this.apiSet_,t),u=t.binding;this.emitter_.emit("change",{event:new B(s,u.target.read(),u.target.presetKey,e.options.last)})}else if(t instanceof Ae){const s=rt(this.apiSet_,t);this.emitter_.emit("change",{event:new B(s,t.value.rawValue,void 0,e.options.last)})}}onRackMonitorUpdate_(e){if(!(e.bladeController instanceof Xe))throw z.shouldNeverHappen();const t=rt(this.apiSet_,e.bladeController),s=e.bladeController.binding;this.emitter_.emit("update",{event:new W(t,s.target.read(),s.target.presetKey)})}}class St extends ze{constructor(e,t){super(e,new wt(e.rackController,t)),this.emitter_=new j,this.controller_.foldable.value("expanded").emitter.on("change",s=>{this.emitter_.emit("fold",{event:new I(this,s.sender.rawValue)})}),this.rackApi_.on("change",s=>{this.emitter_.emit("change",{event:s})}),this.rackApi_.on("update",s=>{this.emitter_.emit("update",{event:s})})}get expanded(){return this.controller_.foldable.get("expanded")}set expanded(e){this.controller_.foldable.set("expanded",e)}get title(){return this.controller_.props.get("title")}set title(e){this.controller_.props.set("title",e)}get children(){return this.rackApi_.children}addInput(e,t,s){return this.rackApi_.addInput(e,t,s)}addMonitor(e,t,s){return this.rackApi_.addMonitor(e,t,s)}addFolder(e){return this.rackApi_.addFolder(e)}addButton(e){return this.rackApi_.addButton(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){return this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addBlade(e){return this.rackApi_.addBlade(e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,u=>{s(u.event)}),this}}class Et extends P{constructor(e){super({blade:e.blade,view:e.view,viewProps:e.rackController.viewProps}),this.rackController=e.rackController}}class Ct{constructor(e,t){const s=K(t.viewName);this.element=e.createElement("div"),this.element.classList.add(s()),t.viewProps.bindClassModifiers(this.element)}}function Dt(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof Fe&&s.binding===e)return s}return null}function Ot(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof Xe&&s.binding===e)return s}return null}function kt(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof Ae&&s.value===e)return s}return null}function Gt(n){return n instanceof He?n.rack:n instanceof Et?n.rackController.rack:null}function ln(n){const e=Gt(n);return e?e.bcSet_:null}class cn{constructor(e){var t,s;this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildInputChange_=this.onChildInputChange_.bind(this),this.onChildMonitorUpdate_=this.onChildMonitorUpdate_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onDescendantLayout_=this.onDescendantLayout_.bind(this),this.onDescendantInputChange_=this.onDescendantInputChange_.bind(this),this.onDescendantMonitorUpdate_=this.onDescendantMonitorUpdate_.bind(this),this.emitter=new j,this.blade_=(t=e.blade)!==null&&t!==void 0?t:null,(s=this.blade_)===null||s===void 0||s.value("positions").emitter.on("change",this.onBladePositionsChange_),this.viewProps=e.viewProps,this.bcSet_=new et(ln),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(e,t){var s;(s=e.parent)===null||s===void 0||s.remove(e),Z(e,"parent")?e.parent=this:(e.parent_=this,Ve({key:"parent",target:"BladeController",place:"BladeRack.add"})),this.bcSet_.add(e,t)}remove(e){Z(e,"parent")?e.parent=null:(e.parent_=null,Ve({key:"parent",target:"BladeController",place:"BladeRack.remove"})),this.bcSet_.remove(e)}find(e){return this.bcSet_.allItems().filter(t=>t instanceof e)}onSetAdd_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("add",{bladeController:e.item,index:e.index,isRoot:t,sender:this}),!t)return;const s=e.item;if(s.viewProps.emitter.on("change",this.onChildViewPropsChange_),s.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),s.viewProps.handleDispose(this.onChildDispose_),s instanceof Fe)s.binding.emitter.on("change",this.onChildInputChange_);else if(s instanceof Xe)s.binding.emitter.on("update",this.onChildMonitorUpdate_);else if(s instanceof Ae)s.value.emitter.on("change",this.onChildValueChange_);else{const u=Gt(s);if(u){const E=u.emitter;E.on("layout",this.onDescendantLayout_),E.on("inputchange",this.onDescendantInputChange_),E.on("monitorupdate",this.onDescendantMonitorUpdate_)}}}onSetRemove_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("remove",{bladeController:e.item,isRoot:t,sender:this}),!t)return;const s=e.item;if(s instanceof Fe)s.binding.emitter.off("change",this.onChildInputChange_);else if(s instanceof Xe)s.binding.emitter.off("update",this.onChildMonitorUpdate_);else if(s instanceof Ae)s.value.emitter.off("change",this.onChildValueChange_);else{const u=Gt(s);if(u){const E=u.emitter;E.off("layout",this.onDescendantLayout_),E.off("inputchange",this.onDescendantInputChange_),E.off("monitorupdate",this.onDescendantMonitorUpdate_)}}}updatePositions_(){const e=this.bcSet_.items.filter(u=>!u.viewProps.get("hidden")),t=e[0],s=e[e.length-1];this.bcSet_.items.forEach(u=>{const E=[];u===t&&(E.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&E.push("veryfirst")),u===s&&(E.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&E.push("verylast")),u.blade.set("positions",E)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(t=>t.viewProps.get("disposed")).forEach(t=>{this.bcSet_.remove(t)})}onChildInputChange_(e){const t=Dt(this.find(Fe),e.sender);if(!t)throw z.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onChildMonitorUpdate_(e){const t=Ot(this.find(Xe),e.sender);if(!t)throw z.alreadyDisposed();this.emitter.emit("monitorupdate",{bladeController:t,sender:this})}onChildValueChange_(e){const t=kt(this.find(Ae),e.sender);if(!t)throw z.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onDescendantLayout_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onDescendantInputChange_(e){this.emitter.emit("inputchange",{bladeController:e.bladeController,options:e.options,sender:this})}onDescendantMonitorUpdate_(e){this.emitter.emit("monitorupdate",{bladeController:e.bladeController,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class He extends P{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new Ct(e,{viewName:"brk",viewProps:t.viewProps})})),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const s=new cn({blade:t.root?void 0:t.blade,viewProps:t.viewProps});s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),this.rack=s,this.viewProps.handleDispose(()=>{for(let u=this.rack.children.length-1;u>=0;u--)this.rack.children[u].viewProps.set("disposed",!0)})}onRackAdd_(e){e.isRoot&&D(this.view.element,e.bladeController.view.element,e.index)}onRackRemove_(e){e.isRoot&&T(e.bladeController.view.element)}}const un=K("cnt");class In{constructor(e,t){var s;this.className_=K((s=t.viewName)!==null&&s!==void 0?s:"fld"),this.element=e.createElement("div"),this.element.classList.add(this.className_(),un()),t.viewProps.bindClassModifiers(this.element),this.foldable_=t.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),ne(this.foldable_,"completed",te(this.element,this.className_(void 0,"cpl")));const u=e.createElement("button");u.classList.add(this.className_("b")),ne(t.props,"title",Ce=>{U(Ce)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),t.viewProps.bindDisabled(u),this.element.appendChild(u),this.buttonElement=u;const E=e.createElement("div");E.classList.add(this.className_("i")),this.element.appendChild(E);const G=e.createElement("div");G.classList.add(this.className_("t")),Oe(t.props.value("title"),G),this.buttonElement.appendChild(G),this.titleElement=G;const ee=e.createElement("div");ee.classList.add(this.className_("m")),this.buttonElement.appendChild(ee);const Ee=t.containerElement;Ee.classList.add(this.className_("c")),this.element.appendChild(Ee),this.containerElement=Ee}}class dn extends Et{constructor(e,t){var s;const u=$e.create((s=t.expanded)!==null&&s!==void 0?s:!0),E=new He(e,{blade:t.blade,root:t.root,viewProps:t.viewProps});super(Object.assign(Object.assign({},t),{rackController:E,view:new In(e,{containerElement:E.view.element,foldable:u,props:t.props,viewName:t.root?"rot":void 0,viewProps:t.viewProps})})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=t.props,this.foldable=u,Ye(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const Un={id:"folder",type:"blade",accept(n){const e=ye,t=Be(n,{title:e.required.string,view:e.required.constant("folder"),expanded:e.optional.boolean});return t?{params:t}:null},controller(n){return new dn(n.document,{blade:n.blade,expanded:n.params.expanded,props:se.fromObject({title:n.params.title}),viewProps:n.viewProps})},api(n){return n.controller instanceof dn?new St(n.controller,n.pool):null}};class Lt extends Ae{constructor(e,t){const s=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{value:t.valueController.value,view:new me(e,{props:t.props,viewProps:s}),viewProps:s})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}class pn extends g{}const xn=K("spr");class hn{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(xn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("hr");s.classList.add(xn("r")),this.element.appendChild(s)}}class Ht extends P{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new hn(e,{viewProps:t.viewProps})}))}}const Q={id:"separator",type:"blade",accept(n){const t=Be(n,{view:ye.required.constant("separator")});return t?{params:t}:null},controller(n){return new Ht(n.document,{blade:n.blade,viewProps:n.viewProps})},api(n){return n.controller instanceof Ht?new pn(n.controller):null}},ce=K("tbi");class le{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(ce()),t.viewProps.bindClassModifiers(this.element),ne(t.props,"selected",E=>{E?this.element.classList.add(ce(void 0,"sel")):this.element.classList.remove(ce(void 0,"sel"))});const s=e.createElement("button");s.classList.add(ce("b")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const u=e.createElement("div");u.classList.add(ce("t")),Oe(t.props.value("title"),u),this.buttonElement.appendChild(u),this.titleElement=u}}class Re{constructor(e,t){this.emitter=new j,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new le(e,{props:t.props,viewProps:t.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class Ue{constructor(e,t){this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new Re(e,{props:t.itemProps,viewProps:_.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.cc_=new He(e,{blade:xe(),viewProps:_.create()}),this.props=t.props,ne(this.props,"selected",s=>{this.itemController.props.set("selected",s),this.contentController.viewProps.set("hidden",!s)})}get itemController(){return this.ic_}get contentController(){return this.cc_}onItemClick_(){this.props.set("selected",!0)}}class Se{constructor(e,t){this.controller_=e,this.rackApi_=t}get title(){var e;return(e=this.controller_.itemController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.itemController.props.set("title",e)}get selected(){return this.controller_.props.get("selected")}set selected(e){this.controller_.props.set("selected",e)}get children(){return this.rackApi_.children}addButton(e){return this.rackApi_.addButton(e)}addFolder(e){return this.rackApi_.addFolder(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addInput(e,t,s){return this.rackApi_.addInput(e,t,s)}addMonitor(e,t,s){return this.rackApi_.addMonitor(e,t,s)}addBlade(e){return this.rackApi_.addBlade(e)}}class ke extends ze{constructor(e,t){super(e,new wt(e.rackController,t)),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.onSelect_=this.onSelect_.bind(this),this.emitter_=new j,this.pageApiMap_=new Map,this.rackApi_.on("change",s=>{this.emitter_.emit("change",{event:s})}),this.rackApi_.on("update",s=>{this.emitter_.emit("update",{event:s})}),this.controller_.tab.selectedIndex.emitter.on("change",this.onSelect_),this.controller_.pageSet.emitter.on("add",this.onPageAdd_),this.controller_.pageSet.emitter.on("remove",this.onPageRemove_),this.controller_.pageSet.items.forEach(s=>{this.setUpPageApi_(s)})}get pages(){return this.controller_.pageSet.items.map(e=>{const t=this.pageApiMap_.get(e);if(!t)throw z.shouldNeverHappen();return t})}addPage(e){const t=this.controller_.view.element.ownerDocument,s=new Ue(t,{itemProps:se.fromObject({selected:!1,title:e.title}),props:se.fromObject({selected:!1})});this.controller_.add(s,e.index);const u=this.pageApiMap_.get(s);if(!u)throw z.shouldNeverHappen();return u}removePage(e){this.controller_.remove(e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,u=>{s(u.event)}),this}setUpPageApi_(e){const t=this.rackApi_.apiSet_.find(u=>u.controller_===e.contentController);if(!t)throw z.shouldNeverHappen();const s=new Se(e,t);this.pageApiMap_.set(e,s)}onPageAdd_(e){this.setUpPageApi_(e.item)}onPageRemove_(e){if(!this.pageApiMap_.get(e.item))throw z.shouldNeverHappen();this.pageApiMap_.delete(e.item)}onSelect_(e){this.emitter_.emit("select",{event:new V(this,e.rawValue)})}}const qe=-1;class Qe{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=ae(!0),this.selectedIndex=ae(qe),this.items_=[]}add(e,t){const s=t??this.items_.length;this.items_.splice(s,0,e),e.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(e){const t=this.items_.indexOf(e);t<0||(this.items_.splice(t,1),e.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=qe,this.empty.rawValue=!0;return}const e=this.items_.findIndex(t=>t.rawValue);e<0?(this.items_.forEach((t,s)=>{t.rawValue=s===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((t,s)=>{t.rawValue=s===e}),this.selectedIndex.rawValue=e),this.empty.rawValue=!1}onItemSelectedChange_(e){if(e.rawValue){const t=this.items_.findIndex(s=>s===e.sender);this.items_.forEach((s,u)=>{s.rawValue=u===t}),this.selectedIndex.rawValue=t}else this.keepSelection_()}}const tt=K("tab");class gt{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(tt(),un()),t.viewProps.bindClassModifiers(this.element),ue(t.empty,te(this.element,tt(void 0,"nop")));const s=e.createElement("div");s.classList.add(tt("t")),this.element.appendChild(s),this.itemsElement=s;const u=e.createElement("div");u.classList.add(tt("i")),this.element.appendChild(u);const E=t.contentsElement;E.classList.add(tt("c")),this.element.appendChild(E),this.contentsElement=E}}class Vn extends Et{constructor(e,t){const s=new He(e,{blade:t.blade,viewProps:t.viewProps}),u=new Qe;super({blade:t.blade,rackController:s,view:new gt(e,{contentsElement:s.view.element,empty:u.empty,viewProps:t.viewProps})}),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.pageSet_=new et(()=>null),this.pageSet_.emitter.on("add",this.onPageAdd_),this.pageSet_.emitter.on("remove",this.onPageRemove_),this.tab=u}get pageSet(){return this.pageSet_}add(e,t){this.pageSet_.add(e,t)}remove(e){this.pageSet_.remove(this.pageSet_.items[e])}onPageAdd_(e){const t=e.item;D(this.view.itemsElement,t.itemController.view.element,e.index),t.itemController.viewProps.set("parent",this.viewProps),this.rackController.rack.add(t.contentController,e.index),this.tab.add(t.props.value("selected"))}onPageRemove_(e){const t=e.item;T(t.itemController.view.element),t.itemController.viewProps.set("parent",null),this.rackController.rack.remove(t.contentController),this.tab.remove(t.props.value("selected"))}}const yn={id:"tab",type:"blade",accept(n){const e=ye,t=Be(n,{pages:e.required.array(e.required.object({title:e.required.string})),view:e.required.constant("tab")});return!t||t.pages.length===0?null:{params:t}},controller(n){const e=new Vn(n.document,{blade:n.blade,viewProps:n.viewProps});return n.params.pages.forEach(t=>{const s=new Ue(n.document,{itemProps:se.fromObject({selected:!1,title:t.title}),props:se.fromObject({selected:!1})});e.add(s)}),e},api(n){return n.controller instanceof Vn?new ke(n.controller,n.pool):null}};function On(n,e){const t=n.accept(e.params);if(!t)return null;const s=ye.optional.boolean(e.params.disabled).value,u=ye.optional.boolean(e.params.hidden).value;return n.controller({blade:xe(),document:e.document,params:Object.assign(Object.assign({},t.params),{disabled:s,hidden:u}),viewProps:_.create({disabled:s,hidden:u})})}class cs{constructor(){this.disabled=!1,this.emitter=new j}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class Fn{constructor(e,t){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=e,this.emitter=new j,this.interval_=t,this.setTimer_()}get disabled(){return this.disabled_}set disabled(e){this.disabled_=e,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const e=this.doc_.defaultView;e&&e.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const e=this.doc_.defaultView;e&&(this.timerId_=e.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class us{constructor(e){this.onValueChange_=this.onValueChange_.bind(this),this.reader=e.reader,this.writer=e.writer,this.emitter=new j,this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.target=e.target,this.read()}read(){const e=this.target.read();e!==void 0&&(this.value.rawValue=this.reader(e))}write_(e){this.writer(this.target,e)}onValueChange_(e){this.write_(e.rawValue),this.emitter.emit("change",{options:e.options,rawValue:e.rawValue,sender:this})}}function Nn(n,e){for(;n.length<e;)n.push(void 0)}function $n(n){const e=[];return Nn(e,n),ae(e)}function ds(n){const e=n.indexOf(void 0);return e<0?n:n.slice(0,e)}function Wn(n,e){const t=[...ds(n),e];return t.length>n.length?t.splice(0,t.length-n.length):Nn(t,n.length),t}class ft{constructor(e){this.onTick_=this.onTick_.bind(this),this.reader_=e.reader,this.target=e.target,this.emitter=new j,this.value=e.value,this.ticker=e.ticker,this.ticker.emitter.on("tick",this.onTick_),this.read()}dispose(){this.ticker.dispose()}read(){const e=this.target.read();if(e===void 0)return;const t=this.value.rawValue,s=this.reader_(e);this.value.rawValue=Wn(t,s),this.emitter.emit("update",{rawValue:s,sender:this})}onTick_(e){this.read()}}class Bt{constructor(e){this.constraints=e}constrain(e){return this.constraints.reduce((t,s)=>s.constrain(t),e)}}function _t(n,e){if(n instanceof e)return n;if(n instanceof Bt){const t=n.constraints.reduce((s,u)=>s||(u instanceof e?u:null),null);if(t)return t}return null}class mt{constructor(e){this.values=se.fromObject({max:e.max,min:e.min})}constrain(e){const t=this.values.get("max"),s=this.values.get("min");return Math.min(Math.max(e,s),t)}}class At{constructor(e){this.values=se.fromObject({options:e})}get options(){return this.values.get("options")}constrain(e){const t=this.values.get("options");return t.length===0||t.filter(u=>u.value===e).length>0?e:t[0].value}}class Yt{constructor(e){this.values=se.fromObject({max:e.max,min:e.min})}get maxValue(){return this.values.get("max")}get minValue(){return this.values.get("min")}constrain(e){const t=this.values.get("max"),s=this.values.get("min");let u=e;return U(s)||(u=Math.max(u,s)),U(t)||(u=Math.min(u,t)),u}}class fn{constructor(e,t=0){this.step=e,this.origin=t}constrain(e){const t=this.origin%this.step,s=Math.round((e-t)/this.step);return t+s*this.step}}const Zt=K("lst");class Mi{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.props_=t.props,this.element=e.createElement("div"),this.element.classList.add(Zt()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("select");s.classList.add(Zt("s")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.selectElement=s;const u=e.createElement("div");u.classList.add(Zt("m")),u.appendChild(w(e,"dropdown")),this.element.appendChild(u),t.value.emitter.on("change",this.onValueChange_),this.value_=t.value,ne(this.props_,"options",E=>{F(this.selectElement),E.forEach(G=>{const ee=e.createElement("option");ee.textContent=G.text,this.selectElement.appendChild(ee)}),this.update_()})}update_(){const e=this.props_.get("options").map(t=>t.value);this.selectElement.selectedIndex=e.indexOf(this.value_.rawValue)}onValueChange_(){this.update_()}}class Pn{constructor(e,t){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new Mi(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(e){const t=e.currentTarget;this.value.rawValue=this.props.get("options")[t.selectedIndex].value}}const qs=K("pop");class Ai{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(qs()),t.viewProps.bindClassModifiers(this.element),ue(t.shows,te(this.element,qs(void 0,"v")))}}class js{constructor(e,t){this.shows=ae(!1),this.viewProps=t.viewProps,this.view=new Ai(e,{shows:this.shows,viewProps:this.viewProps})}}const Ks=K("txt");class Di{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Ks()),t.viewProps.bindClassModifiers(this.element),this.props_=t.props,this.props_.emitter.on("change",this.onChange_);const s=e.createElement("input");s.classList.add(Ks("i")),s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,t.value.emitter.on("change",this.onChange_),this.value_=t.value,this.refresh()}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value_.rawValue)}onChange_(){this.refresh()}}class qn{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=t.parser,this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new Di(e,{props:t.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const s=e.currentTarget.value,u=this.parser_(s);U(u)||(this.value.rawValue=u),this.view.refresh()}}function Gi(n){return String(n)}function Hs(n){return n==="false"?!1:!!n}function Ys(n){return Gi(n)}class Li{constructor(e){this.text=e}evaluate(){return Number(this.text)}toString(){return this.text}}const zi={"**":(n,e)=>Math.pow(n,e),"*":(n,e)=>n*e,"/":(n,e)=>n/e,"%":(n,e)=>n%e,"+":(n,e)=>n+e,"-":(n,e)=>n-e,"<<":(n,e)=>n<<e,">>":(n,e)=>n>>e,">>>":(n,e)=>n>>>e,"&":(n,e)=>n&e,"^":(n,e)=>n^e,"|":(n,e)=>n|e};class Ri{constructor(e,t,s){this.left=t,this.operator=e,this.right=s}evaluate(){const e=zi[this.operator];if(!e)throw new Error(`unexpected binary operator: '${this.operator}`);return e(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const Ii={"+":n=>n,"-":n=>-n,"~":n=>~n};class Ui{constructor(e,t){this.operator=e,this.expression=t}evaluate(){const e=Ii[this.operator];if(!e)throw new Error(`unexpected unary operator: '${this.operator}`);return e(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function ps(n){return(e,t)=>{for(let s=0;s<n.length;s++){const u=n[s](e,t);if(u!=="")return u}return""}}function Sn(n,e){var t;const s=n.substr(e).match(/^\s+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Vi(n,e){const t=n.substr(e,1);return t.match(/^[1-9]$/)?t:""}function En(n,e){var t;const s=n.substr(e).match(/^[0-9]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Oi(n,e){const t=En(n,e);if(t!=="")return t;const s=n.substr(e,1);if(e+=1,s!=="-"&&s!=="+")return"";const u=En(n,e);return u===""?"":s+u}function hs(n,e){const t=n.substr(e,1);if(e+=1,t.toLowerCase()!=="e")return"";const s=Oi(n,e);return s===""?"":t+s}function Zs(n,e){const t=n.substr(e,1);if(t==="0")return t;const s=Vi(n,e);return e+=s.length,s===""?"":s+En(n,e)}function Fi(n,e){const t=Zs(n,e);if(e+=t.length,t==="")return"";const s=n.substr(e,1);if(e+=s.length,s!==".")return"";const u=En(n,e);return e+=u.length,t+s+u+hs(n,e)}function Ni(n,e){const t=n.substr(e,1);if(e+=t.length,t!==".")return"";const s=En(n,e);return e+=s.length,s===""?"":t+s+hs(n,e)}function $i(n,e){const t=Zs(n,e);return e+=t.length,t===""?"":t+hs(n,e)}const Wi=ps([Fi,Ni,$i]);function qi(n,e){var t;const s=n.substr(e).match(/^[01]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function ji(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0b")return"";const s=qi(n,e);return s===""?"":t+s}function Ki(n,e){var t;const s=n.substr(e).match(/^[0-7]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Hi(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0o")return"";const s=Ki(n,e);return s===""?"":t+s}function Yi(n,e){var t;const s=n.substr(e).match(/^[0-9a-f]+/i);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Zi(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0x")return"";const s=Yi(n,e);return s===""?"":t+s}const Xi=ps([ji,Hi,Zi]),Qi=ps([Xi,Wi]);function Ji(n,e){const t=Qi(n,e);return e+=t.length,t===""?null:{evaluable:new Li(t),cursor:e}}function eo(n,e){const t=n.substr(e,1);if(e+=t.length,t!=="(")return null;const s=Qs(n,e);if(!s)return null;e=s.cursor,e+=Sn(n,e).length;const u=n.substr(e,1);return e+=u.length,u!==")"?null:{evaluable:s.evaluable,cursor:e}}function to(n,e){var t;return(t=Ji(n,e))!==null&&t!==void 0?t:eo(n,e)}function Xs(n,e){const t=to(n,e);if(t)return t;const s=n.substr(e,1);if(e+=s.length,s!=="+"&&s!=="-"&&s!=="~")return null;const u=Xs(n,e);return u?(e=u.cursor,{cursor:e,evaluable:new Ui(s,u.evaluable)}):null}function no(n,e,t){t+=Sn(e,t).length;const s=n.filter(u=>e.startsWith(u,t))[0];return s?(t+=s.length,t+=Sn(e,t).length,{cursor:t,operator:s}):null}function so(n,e){return(t,s)=>{const u=n(t,s);if(!u)return null;s=u.cursor;let E=u.evaluable;for(;;){const G=no(e,t,s);if(!G)break;s=G.cursor;const ee=n(t,s);if(!ee)return null;s=ee.cursor,E=new Ri(G.operator,E,ee.evaluable)}return E?{cursor:s,evaluable:E}:null}}const ro=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((n,e)=>so(n,e),Xs);function Qs(n,e){return e+=Sn(n,e).length,ro(n,e)}function io(n){const e=Qs(n,0);return!e||e.cursor+Sn(n,e.cursor).length!==n.length?null:e.evaluable}function zt(n){var e;const t=io(n);return(e=t==null?void 0:t.evaluate())!==null&&e!==void 0?e:null}function Js(n){if(typeof n=="number")return n;if(typeof n=="string"){const e=zt(n);if(!U(e))return e}return 0}function oo(n){return String(n)}function pt(n){return e=>e.toFixed(Math.max(Math.min(n,20),0))}const ao=pt(0);function jn(n){return ao(n)+"%"}function er(n){return String(n)}function fs(n){return n}function Cn({primary:n,secondary:e,forward:t,backward:s}){let u=!1;function E(G){u||(u=!0,G(),u=!1)}n.emitter.on("change",G=>{E(()=>{e.setRawValue(t(n,e),G.options)})}),e.emitter.on("change",G=>{E(()=>{n.setRawValue(s(n,e),G.options)}),E(()=>{e.setRawValue(t(n,e),G.options)})}),E(()=>{e.setRawValue(t(n,e),{forceEmit:!1,last:!0})})}function bt(n,e){const t=n*(e.altKey?.1:1)*(e.shiftKey?10:1);return e.upKey?+t:e.downKey?-t:0}function kn(n){return{altKey:n.altKey,downKey:n.key==="ArrowDown",shiftKey:n.shiftKey,upKey:n.key==="ArrowUp"}}function Rt(n){return{altKey:n.altKey,downKey:n.key==="ArrowLeft",shiftKey:n.shiftKey,upKey:n.key==="ArrowRight"}}function lo(n){return n==="ArrowUp"||n==="ArrowDown"}function tr(n){return lo(n)||n==="ArrowLeft"||n==="ArrowRight"}function _s(n,e){var t,s;const u=e.ownerDocument.defaultView,E=e.getBoundingClientRect();return{x:n.pageX-(((t=u&&u.scrollX)!==null&&t!==void 0?t:0)+E.left),y:n.pageY-(((s=u&&u.scrollY)!==null&&s!==void 0?s:0)+E.top)}}class Xt{constructor(e){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=e,this.emitter=new j,e.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),e.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),e.addEventListener("touchend",this.onTouchEnd_),e.addEventListener("mousedown",this.onMouseDown_)}computePosition_(e){const t=this.elem_.getBoundingClientRect();return{bounds:{width:t.width,height:t.height},point:e?{x:e.x,y:e.y}:null}}onMouseDown_(e){var t;e.preventDefault(),(t=e.currentTarget)===null||t===void 0||t.focus();const s=this.elem_.ownerDocument;s.addEventListener("mousemove",this.onDocumentMouseMove_),s.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(_s(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseMove_(e){this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(_s(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseUp_(e){const t=this.elem_.ownerDocument;t.removeEventListener("mousemove",this.onDocumentMouseMove_),t.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(_s(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onTouchStart_(e){e.preventDefault();const t=e.targetTouches.item(0),s=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-s.left,y:t.clientY-s.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchMove_(e){const t=e.targetTouches.item(0),s=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-s.left,y:t.clientY-s.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchEnd_(e){var t;const s=(t=e.targetTouches.item(0))!==null&&t!==void 0?t:this.lastTouch_,u=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(s?{x:s.clientX-u.left,y:s.clientY-u.top}:void 0),sender:this,shiftKey:e.shiftKey})}}function Je(n,e,t,s,u){const E=(n-e)/(t-e);return s+E*(u-s)}function nr(n){return String(n.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function ct(n,e,t){return Math.min(Math.max(n,e),t)}function sr(n,e){return(n%e+e)%e}const xt=K("txt");class co{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(xt(),xt(void 0,"num")),t.arrayPosition&&this.element.classList.add(xt(void 0,t.arrayPosition)),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("input");s.classList.add(xt("i")),s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=t.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(xt()),this.inputElement.classList.add(xt("i"));const u=e.createElement("div");u.classList.add(xt("k")),this.element.appendChild(u),this.knobElement=u;const E=e.createElementNS(k,"svg");E.classList.add(xt("g")),this.knobElement.appendChild(E);const G=e.createElementNS(k,"path");G.classList.add(xt("gb")),E.appendChild(G),this.guideBodyElem_=G;const ee=e.createElementNS(k,"path");ee.classList.add(xt("gh")),E.appendChild(ee),this.guideHeadElem_=ee;const Ee=e.createElement("div");Ee.classList.add(K("tt")()),this.knobElement.appendChild(Ee),this.tooltipElem_=Ee,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.refresh()}onDraggingChange_(e){if(e.rawValue===null){this.element.classList.remove(xt(void 0,"drg"));return}this.element.classList.add(xt(void 0,"drg"));const t=e.rawValue/this.props_.get("draggingScale"),s=t+(t>0?-1:t<0?1:0),u=ct(-s,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${s+u},0 L${s},4 L${s+u},8`,`M ${t},-1 L${t},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${t},4`);const E=this.props_.get("formatter");this.tooltipElem_.textContent=E(this.value.rawValue),this.tooltipElem_.style.left=`${t}px`}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value.rawValue)}onChange_(){this.refresh()}}class Bn{constructor(e,t){var s;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.parser_=t.parser,this.props=t.props,this.sliderProps_=(s=t.sliderProps)!==null&&s!==void 0?s:null,this.value=t.value,this.viewProps=t.viewProps,this.dragging_=ae(null),this.view=new co(e,{arrayPosition:t.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const u=new Xt(this.view.knobElement);u.emitter.on("down",this.onPointerDown_),u.emitter.on("move",this.onPointerMove_),u.emitter.on("up",this.onPointerUp_)}constrainValue_(e){var t,s;const u=(t=this.sliderProps_)===null||t===void 0?void 0:t.get("minValue"),E=(s=this.sliderProps_)===null||s===void 0?void 0:s.get("maxValue");let G=e;return u!==void 0&&(G=Math.max(G,u)),E!==void 0&&(G=Math.min(G,E)),G}onInputChange_(e){const s=e.currentTarget.value,u=this.parser_(s);U(u)||(this.value.rawValue=this.constrainValue_(u)),this.view.refresh()}onInputKeyDown_(e){const t=bt(this.baseStep_,kn(e));t!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+t),{forceEmit:!1,last:!1})}onInputKeyUp_(e){bt(this.baseStep_,kn(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(e){if(!e.point)return null;const t=e.point.x-e.bounds.width/2;return this.constrainValue_(this.originRawValue_+t*this.props.get("draggingScale"))}onPointerMove_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const ms=K("sld");class uo{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(ms()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(ms("t")),t.viewProps.bindTabIndex(s),this.element.appendChild(s),this.trackElement=s;const u=e.createElement("div");u.classList.add(ms("k")),this.trackElement.appendChild(u),this.knobElement=u,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.update_()}update_(){const e=ct(Je(this.value.rawValue,this.props_.get("minValue"),this.props_.get("maxValue"),0,100),0,100);this.knobElement.style.width=`${e}%`}onChange_(){this.update_()}}class po{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.value=t.value,this.viewProps=t.viewProps,this.props=t.props,this.view=new uo(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Xt(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){e.point&&this.value.setRawValue(Je(ct(e.point.x,0,e.bounds.width),0,e.bounds.width,this.props.get("minValue"),this.props.get("maxValue")),t)}onPointerDownOrMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=bt(this.baseStep_,Rt(e));t!==0&&this.value.setRawValue(this.value.rawValue+t,{forceEmit:!1,last:!1})}onKeyUp_(e){bt(this.baseStep_,Rt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const bs=K("sldtxt");class ho{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(bs());const s=e.createElement("div");s.classList.add(bs("s")),this.sliderView_=t.sliderView,s.appendChild(this.sliderView_.element),this.element.appendChild(s);const u=e.createElement("div");u.classList.add(bs("t")),this.textView_=t.textView,u.appendChild(this.textView_.element),this.element.appendChild(u)}}class vs{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.sliderC_=new po(e,{baseStep:t.baseStep,props:t.sliderProps,value:t.value,viewProps:this.viewProps}),this.textC_=new Bn(e,{baseStep:t.baseStep,parser:t.parser,props:t.textProps,sliderProps:t.sliderProps,value:t.value,viewProps:t.viewProps}),this.view=new ho(e,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}}function Tn(n,e){n.write(e)}function Kn(n){const e=ye;if(Array.isArray(n))return e.required.array(e.required.object({text:e.required.string,value:e.required.raw}))(n).value;if(typeof n=="object")return e.required.raw(n).value}function rr(n){if(n==="inline"||n==="popup")return n}function Ft(n){const e=ye;return e.required.object({max:e.optional.number,min:e.optional.number,step:e.optional.number})(n).value}function ir(n){if(Array.isArray(n))return n;const e=[];return Object.keys(n).forEach(t=>{e.push({text:t,value:n[t]})}),e}function gs(n){return U(n)?null:new At(ir(n))}function fo(n){const e=n?_t(n,fn):null;return e?e.step:null}function Hn(n,e){const t=n&&_t(n,fn);return t?nr(t.step):Math.max(nr(e),2)}function _n(n){const e=fo(n);return e??1}function mn(n,e){var t;const s=n&&_t(n,fn),u=Math.abs((t=s==null?void 0:s.step)!==null&&t!==void 0?t:e);return u===0?.1:Math.pow(10,Math.floor(Math.log10(u))-1)}const Yn=K("ckb");class _o{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Yn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("label");s.classList.add(Yn("l")),this.element.appendChild(s);const u=e.createElement("input");u.classList.add(Yn("i")),u.type="checkbox",s.appendChild(u),this.inputElement=u,t.viewProps.bindDisabled(this.inputElement);const E=e.createElement("div");E.classList.add(Yn("w")),s.appendChild(E);const G=w(e,"check");E.appendChild(G),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class mo{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new _o(e,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const t=e.currentTarget;this.value.rawValue=t.checked}}function bo(n){const e=[],t=gs(n.options);return t&&e.push(t),new Bt(e)}const vo={id:"input-bool",type:"input",accept:(n,e)=>{if(typeof n!="boolean")return null;const s=Be(e,{options:ye.optional.custom(Kn)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Hs,constraint:n=>bo(n.params),writer:n=>Tn},controller:n=>{const e=n.document,t=n.value,s=n.constraint,u=s&&_t(s,At);return u?new Pn(e,{props:new se({options:u.values.value("options")}),value:t,viewProps:n.viewProps}):new mo(e,{value:t,viewProps:n.viewProps})}},Qt=K("col");class go{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Qt()),t.foldable.bindExpandedClass(this.element,Qt(void 0,"expanded")),ne(t.foldable,"completed",te(this.element,Qt(void 0,"cpl")));const s=e.createElement("div");s.classList.add(Qt("h")),this.element.appendChild(s);const u=e.createElement("div");u.classList.add(Qt("s")),s.appendChild(u),this.swatchElement=u;const E=e.createElement("div");if(E.classList.add(Qt("t")),s.appendChild(E),this.textElement=E,t.pickerLayout==="inline"){const G=e.createElement("div");G.classList.add(Qt("p")),this.element.appendChild(G),this.pickerElement=G}else this.pickerElement=null}}function wo(n,e,t){const s=ct(n/255,0,1),u=ct(e/255,0,1),E=ct(t/255,0,1),G=Math.max(s,u,E),ee=Math.min(s,u,E),Ee=G-ee;let Ce=0,Ne=0;const We=(ee+G)/2;return Ee!==0&&(Ne=Ee/(1-Math.abs(G+ee-1)),s===G?Ce=(u-E)/Ee:u===G?Ce=2+(E-s)/Ee:Ce=4+(s-u)/Ee,Ce=Ce/6+(Ce<0?1:0)),[Ce*360,Ne*100,We*100]}function xo(n,e,t){const s=(n%360+360)%360,u=ct(e/100,0,1),E=ct(t/100,0,1),G=(1-Math.abs(2*E-1))*u,ee=G*(1-Math.abs(s/60%2-1)),Ee=E-G/2;let Ce,Ne,We;return s>=0&&s<60?[Ce,Ne,We]=[G,ee,0]:s>=60&&s<120?[Ce,Ne,We]=[ee,G,0]:s>=120&&s<180?[Ce,Ne,We]=[0,G,ee]:s>=180&&s<240?[Ce,Ne,We]=[0,ee,G]:s>=240&&s<300?[Ce,Ne,We]=[ee,0,G]:[Ce,Ne,We]=[G,0,ee],[(Ce+Ee)*255,(Ne+Ee)*255,(We+Ee)*255]}function yo(n,e,t){const s=ct(n/255,0,1),u=ct(e/255,0,1),E=ct(t/255,0,1),G=Math.max(s,u,E),ee=Math.min(s,u,E),Ee=G-ee;let Ce;Ee===0?Ce=0:G===s?Ce=60*(((u-E)/Ee%6+6)%6):G===u?Ce=60*((E-s)/Ee+2):Ce=60*((s-u)/Ee+4);const Ne=G===0?0:Ee/G,We=G;return[Ce,Ne*100,We*100]}function or(n,e,t){const s=sr(n,360),u=ct(e/100,0,1),E=ct(t/100,0,1),G=E*u,ee=G*(1-Math.abs(s/60%2-1)),Ee=E-G;let Ce,Ne,We;return s>=0&&s<60?[Ce,Ne,We]=[G,ee,0]:s>=60&&s<120?[Ce,Ne,We]=[ee,G,0]:s>=120&&s<180?[Ce,Ne,We]=[0,G,ee]:s>=180&&s<240?[Ce,Ne,We]=[0,ee,G]:s>=240&&s<300?[Ce,Ne,We]=[ee,0,G]:[Ce,Ne,We]=[G,0,ee],[(Ce+Ee)*255,(Ne+Ee)*255,(We+Ee)*255]}function Po(n,e,t){const s=t+e*(100-Math.abs(2*t-100))/200;return[n,s!==0?e*(100-Math.abs(2*t-100))/s:0,t+e*(100-Math.abs(2*t-100))/(2*100)]}function So(n,e,t){const s=100-Math.abs(t*(200-e)/100-100);return[n,s!==0?e*t/s:0,t*(200-e)/(2*100)]}function Jt(n){return[n[0],n[1],n[2]]}function ar(n,e){return[n[0],n[1],n[2],e]}const Eo={hsl:{hsl:(n,e,t)=>[n,e,t],hsv:Po,rgb:xo},hsv:{hsl:So,hsv:(n,e,t)=>[n,e,t],rgb:or},rgb:{hsl:wo,hsv:yo,rgb:(n,e,t)=>[n,e,t]}};function Zn(n,e){return[e==="float"?1:n==="rgb"?255:360,e==="float"?1:n==="rgb"?255:100,e==="float"?1:n==="rgb"?255:100]}function Co(n,e){return n===e?e:sr(n,e)}function ko(n,e,t){var s;const u=Zn(e,t);return[e==="rgb"?ct(n[0],0,u[0]):Co(n[0],u[0]),ct(n[1],0,u[1]),ct(n[2],0,u[2]),ct((s=n[3])!==null&&s!==void 0?s:1,0,1)]}function lr(n,e,t,s){const u=Zn(e,t),E=Zn(e,s);return n.map((G,ee)=>G/u[ee]*E[ee])}function Bo(n,e,t){const s=lr(n,e.mode,e.type,"int"),u=Eo[e.mode][t.mode](...s);return lr(u,t.mode,"int",t.type)}function Xn(n,e){return typeof n!="object"||U(n)?!1:e in n&&typeof n[e]=="number"}class Ie{static black(e="int"){return new Ie([0,0,0],"rgb",e)}static fromObject(e,t="int"){const s="a"in e?[e.r,e.g,e.b,e.a]:[e.r,e.g,e.b];return new Ie(s,"rgb",t)}static toRgbaObject(e,t="int"){return e.toRgbaObject(t)}static isRgbColorObject(e){return Xn(e,"r")&&Xn(e,"g")&&Xn(e,"b")}static isRgbaColorObject(e){return this.isRgbColorObject(e)&&Xn(e,"a")}static isColorObject(e){return this.isRgbColorObject(e)}static equals(e,t){if(e.mode!==t.mode)return!1;const s=e.comps_,u=t.comps_;for(let E=0;E<s.length;E++)if(s[E]!==u[E])return!1;return!0}constructor(e,t,s="int"){this.mode=t,this.type=s,this.comps_=ko(e,t,s)}getComponents(e,t="int"){return ar(Bo(Jt(this.comps_),{mode:this.mode,type:this.type},{mode:e??this.mode,type:t}),this.comps_[3])}toRgbaObject(e="int"){const t=this.getComponents("rgb",e);return{r:t[0],g:t[1],b:t[2],a:t[3]}}}const Nt=K("colp");class To{constructor(e,t){this.alphaViews_=null,this.element=e.createElement("div"),this.element.classList.add(Nt()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Nt("hsv"));const u=e.createElement("div");u.classList.add(Nt("sv")),this.svPaletteView_=t.svPaletteView,u.appendChild(this.svPaletteView_.element),s.appendChild(u);const E=e.createElement("div");E.classList.add(Nt("h")),this.hPaletteView_=t.hPaletteView,E.appendChild(this.hPaletteView_.element),s.appendChild(E),this.element.appendChild(s);const G=e.createElement("div");if(G.classList.add(Nt("rgb")),this.textView_=t.textView,G.appendChild(this.textView_.element),this.element.appendChild(G),t.alphaViews){this.alphaViews_={palette:t.alphaViews.palette,text:t.alphaViews.text};const ee=e.createElement("div");ee.classList.add(Nt("a"));const Ee=e.createElement("div");Ee.classList.add(Nt("ap")),Ee.appendChild(this.alphaViews_.palette.element),ee.appendChild(Ee);const Ce=e.createElement("div");Ce.classList.add(Nt("at")),Ce.appendChild(this.alphaViews_.text.element),ee.appendChild(Ce),this.element.appendChild(ee)}}get allFocusableElements(){const e=[this.svPaletteView_.element,this.hPaletteView_.element,this.textView_.modeSelectElement,...this.textView_.textViews.map(t=>t.inputElement)];return this.alphaViews_&&e.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),e}}function Mo(n){return n==="int"?"int":n==="float"?"float":void 0}function ws(n){const e=ye;return Be(n,{alpha:e.optional.boolean,color:e.optional.object({alpha:e.optional.boolean,type:e.optional.custom(Mo)}),expanded:e.optional.boolean,picker:e.optional.custom(rr)})}function en(n){return n?.1:1}function tn(n){var e;return(e=n.color)===null||e===void 0?void 0:e.type}function Ao(n,e){return n.alpha===e.alpha&&n.mode===e.mode&&n.notation===e.notation&&n.type===e.type}function yt(n,e){const t=n.match(/^(.+)%$/);return Math.min(t?parseFloat(t[1])*.01*e:parseFloat(n),e)}const Do={deg:n=>n,grad:n=>n*360/400,rad:n=>n*360/(2*Math.PI),turn:n=>n*360};function cr(n){const e=n.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!e)return parseFloat(n);const t=parseFloat(e[1]),s=e[2];return Do[s](t)}function ur(n){const e=n.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[yt(e[1],255),yt(e[2],255),yt(e[3],255)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function dr(n){return e=>{const t=ur(e);return t?new Ie(t,"rgb",n):null}}function pr(n){const e=n.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[yt(e[1],255),yt(e[2],255),yt(e[3],255),yt(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function hr(n){return e=>{const t=pr(e);return t?new Ie(t,"rgb",n):null}}function fr(n){const e=n.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[cr(e[1]),yt(e[2],100),yt(e[3],100)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function _r(n){return e=>{const t=fr(e);return t?new Ie(t,"hsl",n):null}}function mr(n){const e=n.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[cr(e[1]),yt(e[2],100),yt(e[3],100),yt(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function br(n){return e=>{const t=mr(e);return t?new Ie(t,"hsl",n):null}}function vr(n){const e=n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)];const t=n.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:null}function Go(n){const e=vr(n);return e?new Ie(e,"rgb","int"):null}function gr(n){const e=n.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16),Je(parseInt(e[4]+e[4],16),0,255,0,1)];const t=n.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16),Je(parseInt(t[4],16),0,255,0,1)]:null}function Lo(n){const e=gr(n);return e?new Ie(e,"rgb","int"):null}function wr(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function xr(n){return e=>{const t=wr(e);return t?new Ie(t,"rgb",n):null}}function yr(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3]),parseFloat(e[4])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function Pr(n){return e=>{const t=yr(e);return t?new Ie(t,"rgb",n):null}}const zo=[{parser:vr,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:gr,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:ur,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:pr,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:fr,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:mr,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:wr,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:yr,result:{alpha:!0,mode:"rgb",notation:"object"}}];function Ro(n){return zo.reduce((e,{parser:t,result:s})=>e||(t(n)?s:null),null)}function xs(n,e="int"){const t=Ro(n);return t?t.notation==="hex"&&e!=="float"?Object.assign(Object.assign({},t),{type:"int"}):t.notation==="func"?Object.assign(Object.assign({},t),{type:e}):null:null}const Sr={int:[Go,Lo,dr("int"),hr("int"),_r("int"),br("int"),xr("int"),Pr("int")],float:[dr("float"),hr("float"),_r("float"),br("float"),xr("float"),Pr("float")]};function Io(n){const e=Sr[n];return t=>{if(typeof t!="string")return Ie.black(n);const s=e.reduce((u,E)=>u||E(t),null);return s??Ie.black(n)}}function ys(n){const e=Sr[n];return t=>e.reduce((s,u)=>s||u(t),null)}function Er(n){const e=ct(Math.floor(n),0,255).toString(16);return e.length===1?`0${e}`:e}function Cr(n,e="#"){const t=Jt(n.getComponents("rgb")).map(Er).join("");return`${e}${t}`}function Ps(n,e="#"){const t=n.getComponents("rgb"),s=[t[0],t[1],t[2],t[3]*255].map(Er).join("");return`${e}${s}`}function kr(n,e){const t=pt(e==="float"?2:0);return`rgb(${Jt(n.getComponents("rgb",e)).map(u=>t(u)).join(", ")})`}function Uo(n){return e=>kr(e,n)}function Qn(n,e){const t=pt(2),s=pt(e==="float"?2:0);return`rgba(${n.getComponents("rgb",e).map((E,G)=>(G===3?t:s)(E)).join(", ")})`}function Vo(n){return e=>Qn(e,n)}function Oo(n){const e=[pt(0),jn,jn];return`hsl(${Jt(n.getComponents("hsl")).map((s,u)=>e[u](s)).join(", ")})`}function Fo(n){const e=[pt(0),jn,jn,pt(2)];return`hsla(${n.getComponents("hsl").map((s,u)=>e[u](s)).join(", ")})`}function Br(n,e){const t=pt(e==="float"?2:0),s=["r","g","b"];return`{${Jt(n.getComponents("rgb",e)).map((E,G)=>`${s[G]}: ${t(E)}`).join(", ")}}`}function No(n){return e=>Br(e,n)}function Tr(n,e){const t=pt(2),s=pt(e==="float"?2:0),u=["r","g","b","a"];return`{${n.getComponents("rgb",e).map((G,ee)=>{const Ee=ee===3?t:s;return`${u[ee]}: ${Ee(G)}`}).join(", ")}}`}function $o(n){return e=>Tr(e,n)}const Wo=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:Cr},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:Ps},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:Oo},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:Fo},...["int","float"].reduce((n,e)=>[...n,{format:{alpha:!1,mode:"rgb",notation:"func",type:e},stringifier:Uo(e)},{format:{alpha:!0,mode:"rgb",notation:"func",type:e},stringifier:Vo(e)},{format:{alpha:!1,mode:"rgb",notation:"object",type:e},stringifier:No(e)},{format:{alpha:!0,mode:"rgb",notation:"object",type:e},stringifier:$o(e)}],[])];function Ss(n){return Wo.reduce((e,t)=>e||(Ao(t.format,n)?t.stringifier:null),null)}const Mn=K("apl");class qo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(Mn()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("div");s.classList.add(Mn("b")),this.element.appendChild(s);const u=e.createElement("div");u.classList.add(Mn("c")),s.appendChild(u),this.colorElem_=u;const E=e.createElement("div");E.classList.add(Mn("m")),this.element.appendChild(E),this.markerElem_=E;const G=e.createElement("div");G.classList.add(Mn("p")),this.markerElem_.appendChild(G),this.previewElem_=G,this.update_()}update_(){const e=this.value.rawValue,t=e.getComponents("rgb"),s=new Ie([t[0],t[1],t[2],0],"rgb"),u=new Ie([t[0],t[1],t[2],255],"rgb"),E=["to right",Qn(s),Qn(u)];this.colorElem_.style.background=`linear-gradient(${E.join(",")})`,this.previewElem_.style.backgroundColor=Qn(e);const G=Je(t[3],0,1,0,100);this.markerElem_.style.left=`${G}%`}onValueChange_(){this.update_()}}class jo{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new qo(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Xt(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=e.point.x/e.bounds.width,u=this.value.rawValue,[E,G,ee]=u.getComponents("hsv");this.value.setRawValue(new Ie([E,G,ee,s],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=bt(en(!0),Rt(e));if(t===0)return;const s=this.value.rawValue,[u,E,G,ee]=s.getComponents("hsv");this.value.setRawValue(new Ie([u,E,G,ee+t],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){bt(en(!0),Rt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const bn=K("coltxt");function Ko(n){const e=n.createElement("select"),t=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"}];return e.appendChild(t.reduce((s,u)=>{const E=n.createElement("option");return E.textContent=u.text,E.value=u.value,s.appendChild(E),s},n.createDocumentFragment())),e}class Ho{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(bn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(bn("m")),this.modeElem_=Ko(e),this.modeElem_.classList.add(bn("ms")),s.appendChild(this.modeSelectElement),t.viewProps.bindDisabled(this.modeElem_);const u=e.createElement("div");u.classList.add(bn("mm")),u.appendChild(w(e,"dropdown")),s.appendChild(u),this.element.appendChild(s);const E=e.createElement("div");E.classList.add(bn("w")),this.element.appendChild(E),this.textsElem_=E,this.textViews_=t.textViews,this.applyTextViews_(),ue(t.colorMode,G=>{this.modeElem_.value=G})}get modeSelectElement(){return this.modeElem_}get textViews(){return this.textViews_}set textViews(e){this.textViews_=e,this.applyTextViews_()}applyTextViews_(){F(this.textsElem_);const e=this.element.ownerDocument;this.textViews_.forEach(t=>{const s=e.createElement("div");s.classList.add(bn("c")),s.appendChild(t.element),this.textsElem_.appendChild(s)})}}function Yo(n){return pt(n==="float"?2:0)}function Zo(n,e,t){const s=Zn(n,e)[t];return new mt({min:0,max:s})}function Es(n,e,t){return new Bn(n,{arrayPosition:t===0?"fst":t===3-1?"lst":"mid",baseStep:en(!1),parser:e.parser,props:se.fromObject({draggingScale:e.colorType==="float"?.01:1,formatter:Yo(e.colorType)}),value:ae(0,{constraint:Zo(e.colorMode,e.colorType,t)}),viewProps:e.viewProps})}class Xo{constructor(e,t){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=t.colorType,this.parser_=t.parser,this.value=t.value,this.viewProps=t.viewProps,this.colorMode=ae(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(e),this.view=new Ho(e,{colorMode:this.colorMode,textViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view],viewProps:this.viewProps}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(e){const t={colorMode:this.colorMode.rawValue,colorType:this.colorType_,parser:this.parser_,viewProps:this.viewProps},s=[Es(e,t,0),Es(e,t,1),Es(e,t,2)];return s.forEach((u,E)=>{Cn({primary:this.value,secondary:u.value,forward:G=>G.rawValue.getComponents(this.colorMode.rawValue,this.colorType_)[E],backward:(G,ee)=>{const Ee=this.colorMode.rawValue,Ce=G.rawValue.getComponents(Ee,this.colorType_);return Ce[E]=ee.rawValue,new Ie(ar(Jt(Ce),Ce[3]),Ee,this.colorType_)}})}),s}onModeSelectChange_(e){const t=e.currentTarget;this.colorMode.rawValue=t.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.textViews=[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}}const Cs=K("hpl");class Qo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(Cs()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("div");s.classList.add(Cs("c")),this.element.appendChild(s);const u=e.createElement("div");u.classList.add(Cs("m")),this.element.appendChild(u),this.markerElem_=u,this.update_()}update_(){const e=this.value.rawValue,[t]=e.getComponents("hsv");this.markerElem_.style.backgroundColor=kr(new Ie([t,100,100],"hsv"));const s=Je(t,0,360,0,100);this.markerElem_.style.left=`${s}%`}onValueChange_(){this.update_()}}class Jo{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Qo(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Xt(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=Je(ct(e.point.x,0,e.bounds.width),0,e.bounds.width,0,360),u=this.value.rawValue,[,E,G,ee]=u.getComponents("hsv");this.value.setRawValue(new Ie([s,E,G,ee],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=bt(en(!1),Rt(e));if(t===0)return;const s=this.value.rawValue,[u,E,G,ee]=s.getComponents("hsv");this.value.setRawValue(new Ie([u+t,E,G,ee],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){bt(en(!1),Rt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const ks=K("svp"),Mr=64;class ea{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(ks()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("canvas");s.height=Mr,s.width=Mr,s.classList.add(ks("c")),this.element.appendChild(s),this.canvasElement=s;const u=e.createElement("div");u.classList.add(ks("m")),this.element.appendChild(u),this.markerElem_=u,this.update_()}update_(){const e=m(this.canvasElement);if(!e)return;const s=this.value.rawValue.getComponents("hsv"),u=this.canvasElement.width,E=this.canvasElement.height,G=e.getImageData(0,0,u,E),ee=G.data;for(let Ne=0;Ne<E;Ne++)for(let We=0;We<u;We++){const nn=Je(We,0,u,0,100),Dn=Je(Ne,0,E,100,0),Gn=or(s[0],nn,Dn),Jn=(Ne*u+We)*4;ee[Jn]=Gn[0],ee[Jn+1]=Gn[1],ee[Jn+2]=Gn[2],ee[Jn+3]=255}e.putImageData(G,0,0);const Ee=Je(s[1],0,100,0,100);this.markerElem_.style.left=`${Ee}%`;const Ce=Je(s[2],0,100,100,0);this.markerElem_.style.top=`${Ce}%`}onValueChange_(){this.update_()}}class ta{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new ea(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Xt(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=Je(e.point.x,0,e.bounds.width,0,100),u=Je(e.point.y,0,e.bounds.height,100,0),[E,,,G]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new Ie([E,s,u,G],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){tr(e.key)&&e.preventDefault();const[t,s,u,E]=this.value.rawValue.getComponents("hsv"),G=en(!1),ee=bt(G,Rt(e)),Ee=bt(G,kn(e));ee===0&&Ee===0||this.value.setRawValue(new Ie([t,s+ee,u+Ee,E],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){const t=en(!1),s=bt(t,Rt(e)),u=bt(t,kn(e));s===0&&u===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class na{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.hPaletteC_=new Jo(e,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new ta(e,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=t.supportsAlpha?{palette:new jo(e,{value:this.value,viewProps:this.viewProps}),text:new Bn(e,{parser:zt,baseStep:.1,props:se.fromObject({draggingScale:.01,formatter:pt(2)}),value:ae(0,{constraint:new mt({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&Cn({primary:this.value,secondary:this.alphaIcs_.text.value,forward:s=>s.rawValue.getComponents()[3],backward:(s,u)=>{const E=s.rawValue.getComponents();return E[3]=u.rawValue,new Ie(E,s.rawValue.mode)}}),this.textC_=new Xo(e,{colorType:t.colorType,parser:zt,value:this.value,viewProps:this.viewProps}),this.view=new To(e,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:t.supportsAlpha,svPaletteView:this.svPaletteC_.view,textView:this.textC_.view,viewProps:this.viewProps})}get textController(){return this.textC_}}const Bs=K("colsw");class sa{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.element=e.createElement("div"),this.element.classList.add(Bs()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Bs("sw")),this.element.appendChild(s),this.swatchElem_=s;const u=e.createElement("button");u.classList.add(Bs("b")),t.viewProps.bindDisabled(u),this.element.appendChild(u),this.buttonElement=u,this.update_()}update_(){const e=this.value.rawValue;this.swatchElem_.style.backgroundColor=Ps(e)}onValueChange_(){this.update_()}}class ra{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new sa(e,{value:this.value,viewProps:this.viewProps})}}class Ts{constructor(e,t){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=$e.create(t.expanded),this.swatchC_=new ra(e,{value:this.value,viewProps:this.viewProps});const s=this.swatchC_.view.buttonElement;s.addEventListener("blur",this.onButtonBlur_),s.addEventListener("click",this.onButtonClick_),this.textC_=new qn(e,{parser:t.parser,props:se.fromObject({formatter:t.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new go(e,{foldable:this.foldable_,pickerLayout:t.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=t.pickerLayout==="popup"?new js(e,{viewProps:this.viewProps}):null;const u=new na(e,{colorType:t.colorType,supportsAlpha:t.supportsAlpha,value:this.value,viewProps:this.viewProps});u.view.allFocusableElements.forEach(E=>{E.addEventListener("blur",this.onPopupChildBlur_),E.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=u,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(u.view.element),Cn({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:E=>E.rawValue,backward:(E,G)=>G.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Ye(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,s=e.relatedTarget;(!s||!t.contains(s))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,s=J(e);s&&t.contains(s)||s&&s===this.swatchC_.view.buttonElement&&!c(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function ia(n,e){return Ie.isColorObject(n)?Ie.fromObject(n,e):Ie.black(e)}function oa(n){return Jt(n.getComponents("rgb")).reduce((e,t)=>e<<8|Math.floor(t)&255,0)}function aa(n){return n.getComponents("rgb").reduce((e,t,s)=>{const u=Math.floor(s===3?t*255:t)&255;return e<<8|u},0)>>>0}function la(n){return new Ie([n>>16&255,n>>8&255,n&255],"rgb")}function ca(n){return new Ie([n>>24&255,n>>16&255,n>>8&255,Je(n&255,0,255,0,1)],"rgb")}function ua(n){return typeof n!="number"?Ie.black():la(n)}function da(n){return typeof n!="number"?Ie.black():ca(n)}function pa(n){const e=Ss(n);return e?(t,s)=>{Tn(t,e(s))}:null}function ha(n){const e=n?aa:oa;return(t,s)=>{Tn(t,e(s))}}function fa(n,e,t){const s=e.toRgbaObject(t);n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b),n.writeProperty("a",s.a)}function _a(n,e,t){const s=e.toRgbaObject(t);n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b)}function ma(n,e){return(t,s)=>{n?fa(t,s,e):_a(t,s,e)}}function Ms(n){var e;return!!(n!=null&&n.alpha||!((e=n==null?void 0:n.color)===null||e===void 0)&&e.alpha)}function ba(n){return n?e=>Ps(e,"0x"):e=>Cr(e,"0x")}function va(n){return"color"in n||"view"in n&&n.view==="color"}const ga={id:"input-color-number",type:"input",accept:(n,e)=>{if(typeof n!="number"||!va(e))return null;const t=ws(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>Ms(n.params)?da:ua,equals:Ie.equals,writer:n=>ha(Ms(n.params))},controller:n=>{const e=Ms(n.params),t="expanded"in n.params?n.params.expanded:void 0,s="picker"in n.params?n.params.picker:void 0;return new Ts(n.document,{colorType:"int",expanded:t??!1,formatter:ba(e),parser:ys("int"),pickerLayout:s??"popup",supportsAlpha:e,value:n.value,viewProps:n.viewProps})}};function wa(n){return Ie.isRgbaColorObject(n)}function xa(n){return e=>ia(e,n)}function ya(n,e){return t=>n?Tr(t,e):Br(t,e)}const Pa={id:"input-color-object",type:"input",accept:(n,e)=>{if(!Ie.isColorObject(n))return null;const t=ws(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>xa(tn(n.params)),equals:Ie.equals,writer:n=>ma(wa(n.initialValue),tn(n.params))},controller:n=>{var e;const t=Ie.isRgbaColorObject(n.initialValue),s="expanded"in n.params?n.params.expanded:void 0,u="picker"in n.params?n.params.picker:void 0,E=(e=tn(n.params))!==null&&e!==void 0?e:"int";return new Ts(n.document,{colorType:E,expanded:s??!1,formatter:ya(t,E),parser:ys(E),pickerLayout:u??"popup",supportsAlpha:t,value:n.value,viewProps:n.viewProps})}},Sa={id:"input-color-string",type:"input",accept:(n,e)=>{if(typeof n!="string"||"view"in e&&e.view==="text")return null;const t=xs(n,tn(e));if(!t||!Ss(t))return null;const u=ws(e);return u?{initialValue:n,params:u}:null},binding:{reader:n=>{var e;return Io((e=tn(n.params))!==null&&e!==void 0?e:"int")},equals:Ie.equals,writer:n=>{const e=xs(n.initialValue,tn(n.params));if(!e)throw z.shouldNeverHappen();const t=pa(e);if(!t)throw z.notBindable();return t}},controller:n=>{const e=xs(n.initialValue,tn(n.params));if(!e)throw z.shouldNeverHappen();const t=Ss(e);if(!t)throw z.shouldNeverHappen();const s="expanded"in n.params?n.params.expanded:void 0,u="picker"in n.params?n.params.picker:void 0;return new Ts(n.document,{colorType:e.type,expanded:s??!1,formatter:t,parser:ys(e.type),pickerLayout:u??"popup",supportsAlpha:e.alpha,value:n.value,viewProps:n.viewProps})}};class $t{constructor(e){this.components=e.components,this.asm_=e.assembly}constrain(e){const t=this.asm_.toComponents(e).map((s,u)=>{var E,G;return(G=(E=this.components[u])===null||E===void 0?void 0:E.constrain(s))!==null&&G!==void 0?G:s});return this.asm_.fromComponents(t)}}const Ar=K("pndtxt");class Ea{constructor(e,t){this.textViews=t.textViews,this.element=e.createElement("div"),this.element.classList.add(Ar()),this.textViews.forEach(s=>{const u=e.createElement("div");u.classList.add(Ar("a")),u.appendChild(s.element),this.element.appendChild(u)})}}function Ca(n,e,t){return new Bn(n,{arrayPosition:t===0?"fst":t===e.axes.length-1?"lst":"mid",baseStep:e.axes[t].baseStep,parser:e.parser,props:e.axes[t].textProps,value:ae(0,{constraint:e.axes[t].constraint}),viewProps:e.viewProps})}class As{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.acs_=t.axes.map((s,u)=>Ca(e,t,u)),this.acs_.forEach((s,u)=>{Cn({primary:this.value,secondary:s.value,forward:E=>t.assembly.toComponents(E.rawValue)[u],backward:(E,G)=>{const ee=t.assembly.toComponents(E.rawValue);return ee[u]=G.rawValue,t.assembly.fromComponents(ee)}})}),this.view=new Ea(e,{textViews:this.acs_.map(s=>s.view)})}}function Dr(n,e){return"step"in n&&!U(n.step)?new fn(n.step,e):null}function Gr(n){return!U(n.max)&&!U(n.min)?new mt({max:n.max,min:n.min}):!U(n.max)||!U(n.min)?new Yt({max:n.max,min:n.min}):null}function ka(n){const e=_t(n,mt);if(e)return[e.values.get("min"),e.values.get("max")];const t=_t(n,Yt);return t?[t.minValue,t.maxValue]:[void 0,void 0]}function Ba(n,e){const t=[],s=Dr(n,e);s&&t.push(s);const u=Gr(n);u&&t.push(u);const E=gs(n.options);return E&&t.push(E),new Bt(t)}const Ta={id:"input-number",type:"input",accept:(n,e)=>{if(typeof n!="number")return null;const t=ye,s=Be(e,{format:t.optional.function,max:t.optional.number,min:t.optional.number,options:t.optional.custom(Kn),step:t.optional.number});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Js,constraint:n=>Ba(n.params,n.initialValue),writer:n=>Tn},controller:n=>{var e;const t=n.value,s=n.constraint,u=s&&_t(s,At);if(u)return new Pn(n.document,{props:new se({options:u.values.value("options")}),value:t,viewProps:n.viewProps});const E=(e="format"in n.params?n.params.format:void 0)!==null&&e!==void 0?e:pt(Hn(s,t.rawValue)),G=s&&_t(s,mt);return G?new vs(n.document,{baseStep:_n(s),parser:zt,sliderProps:new se({maxValue:G.values.value("max"),minValue:G.values.value("min")}),textProps:se.fromObject({draggingScale:mn(s,t.rawValue),formatter:E}),value:t,viewProps:n.viewProps}):new Bn(n.document,{baseStep:_n(s),parser:zt,props:se.fromObject({draggingScale:mn(s,t.rawValue),formatter:E}),value:t,viewProps:n.viewProps})}};class Wt{constructor(e=0,t=0){this.x=e,this.y=t}getComponents(){return[this.x,this.y]}static isObject(e){if(U(e))return!1;const t=e.x,s=e.y;return!(typeof t!="number"||typeof s!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y}toObject(){return{x:this.x,y:this.y}}}const Lr={toComponents:n=>n.getComponents(),fromComponents:n=>new Wt(...n)},vn=K("p2d");class Ma{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(vn()),t.viewProps.bindClassModifiers(this.element),ue(t.expanded,te(this.element,vn(void 0,"expanded")));const s=e.createElement("div");s.classList.add(vn("h")),this.element.appendChild(s);const u=e.createElement("button");u.classList.add(vn("b")),u.appendChild(w(e,"p2dpad")),t.viewProps.bindDisabled(u),s.appendChild(u),this.buttonElement=u;const E=e.createElement("div");if(E.classList.add(vn("t")),s.appendChild(E),this.textElement=E,t.pickerLayout==="inline"){const G=e.createElement("div");G.classList.add(vn("p")),this.element.appendChild(G),this.pickerElement=G}else this.pickerElement=null}}const qt=K("p2dp");class Aa{constructor(e,t){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.invertsY_=t.invertsY,this.maxValue_=t.maxValue,this.element=e.createElement("div"),this.element.classList.add(qt()),t.layout==="popup"&&this.element.classList.add(qt(void 0,"p")),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(qt("p")),t.viewProps.bindTabIndex(s),this.element.appendChild(s),this.padElement=s;const u=e.createElementNS(k,"svg");u.classList.add(qt("g")),this.padElement.appendChild(u),this.svgElem_=u;const E=e.createElementNS(k,"line");E.classList.add(qt("ax")),E.setAttributeNS(null,"x1","0"),E.setAttributeNS(null,"y1","50%"),E.setAttributeNS(null,"x2","100%"),E.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(E);const G=e.createElementNS(k,"line");G.classList.add(qt("ax")),G.setAttributeNS(null,"x1","50%"),G.setAttributeNS(null,"y1","0"),G.setAttributeNS(null,"x2","50%"),G.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(G);const ee=e.createElementNS(k,"line");ee.classList.add(qt("l")),ee.setAttributeNS(null,"x1","50%"),ee.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(ee),this.lineElem_=ee;const Ee=e.createElement("div");Ee.classList.add(qt("m")),this.padElement.appendChild(Ee),this.markerElem_=Ee,t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[e,t]=this.value.rawValue.getComponents(),s=this.maxValue_,u=Je(e,-s,+s,0,100),E=Je(t,-s,+s,0,100),G=this.invertsY_?100-E:E;this.lineElem_.setAttributeNS(null,"x2",`${u}%`),this.lineElem_.setAttributeNS(null,"y2",`${G}%`),this.markerElem_.style.left=`${u}%`,this.markerElem_.style.top=`${G}%`}onValueChange_(){this.update_()}onFoldableChange_(){this.update_()}}function zr(n,e,t){return[bt(e[0],Rt(n)),bt(e[1],kn(n))*(t?1:-1)]}class Da{constructor(e,t){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.baseSteps_=t.baseSteps,this.maxValue_=t.maxValue,this.invertsY_=t.invertsY,this.view=new Aa(e,{invertsY:this.invertsY_,layout:t.layout,maxValue:this.maxValue_,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Xt(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=this.maxValue_,u=Je(e.point.x,0,e.bounds.width,-s,+s),E=Je(this.invertsY_?e.bounds.height-e.point.y:e.point.y,0,e.bounds.height,-s,+s);this.value.setRawValue(new Wt(u,E),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onPadKeyDown_(e){tr(e.key)&&e.preventDefault();const[t,s]=zr(e,this.baseSteps_,this.invertsY_);t===0&&s===0||this.value.setRawValue(new Wt(this.value.rawValue.x+t,this.value.rawValue.y+s),{forceEmit:!1,last:!1})}onPadKeyUp_(e){const[t,s]=zr(e,this.baseSteps_,this.invertsY_);t===0&&s===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class Ga{constructor(e,t){var s,u;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=$e.create(t.expanded),this.popC_=t.pickerLayout==="popup"?new js(e,{viewProps:this.viewProps}):null;const E=new Da(e,{baseSteps:[t.axes[0].baseStep,t.axes[1].baseStep],invertsY:t.invertsY,layout:t.pickerLayout,maxValue:t.maxValue,value:this.value,viewProps:this.viewProps});E.view.allFocusableElements.forEach(G=>{G.addEventListener("blur",this.onPopupChildBlur_),G.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=E,this.textC_=new As(e,{assembly:Lr,axes:t.axes,parser:t.parser,value:this.value,viewProps:this.viewProps}),this.view=new Ma(e,{expanded:this.foldable_.value("expanded"),pickerLayout:t.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(s=this.view.buttonElement)===null||s===void 0||s.addEventListener("blur",this.onPadButtonBlur_),(u=this.view.buttonElement)===null||u===void 0||u.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),Cn({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:G=>G.rawValue,backward:(G,ee)=>ee.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Ye(this.foldable_,this.view.pickerElement))}onPadButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,s=e.relatedTarget;(!s||!t.contains(s))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,s=J(e);s&&t.contains(s)||s&&s===this.view.buttonElement&&!c(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.view.buttonElement.focus()}}class gn{constructor(e=0,t=0,s=0){this.x=e,this.y=t,this.z=s}getComponents(){return[this.x,this.y,this.z]}static isObject(e){if(U(e))return!1;const t=e.x,s=e.y,u=e.z;return!(typeof t!="number"||typeof s!="number"||typeof u!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const Rr={toComponents:n=>n.getComponents(),fromComponents:n=>new gn(...n)};function La(n){return gn.isObject(n)?new gn(n.x,n.y,n.z):new gn}function za(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z)}function Ra(n,e){return new $t({assembly:Rr,components:[It("x"in n?n.x:void 0,e.x),It("y"in n?n.y:void 0,e.y),It("z"in n?n.z:void 0,e.z)]})}function Ds(n,e){return{baseStep:_n(e),constraint:e,textProps:se.fromObject({draggingScale:mn(e,n),formatter:pt(Hn(e,n))})}}const Ia={id:"input-point3d",type:"input",accept:(n,e)=>{if(!gn.isObject(n))return null;const t=ye,s=Be(e,{x:t.optional.custom(Ft),y:t.optional.custom(Ft),z:t.optional.custom(Ft)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>La,constraint:n=>Ra(n.params,n.initialValue),equals:gn.equals,writer:n=>za},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof $t))throw z.shouldNeverHappen();return new As(n.document,{assembly:Rr,axes:[Ds(e.rawValue.x,t.components[0]),Ds(e.rawValue.y,t.components[1]),Ds(e.rawValue.z,t.components[2])],parser:zt,value:e,viewProps:n.viewProps})}};class wn{constructor(e=0,t=0,s=0,u=0){this.x=e,this.y=t,this.z=s,this.w=u}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(e){if(U(e))return!1;const t=e.x,s=e.y,u=e.z,E=e.w;return!(typeof t!="number"||typeof s!="number"||typeof u!="number"||typeof E!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z&&e.w===t.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const Ir={toComponents:n=>n.getComponents(),fromComponents:n=>new wn(...n)};function Ua(n){return wn.isObject(n)?new wn(n.x,n.y,n.z,n.w):new wn}function Va(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z),n.writeProperty("w",e.w)}function Oa(n,e){return new $t({assembly:Ir,components:[It("x"in n?n.x:void 0,e.x),It("y"in n?n.y:void 0,e.y),It("z"in n?n.z:void 0,e.z),It("w"in n?n.w:void 0,e.w)]})}function Fa(n,e){return{baseStep:_n(e),constraint:e,textProps:se.fromObject({draggingScale:mn(e,n),formatter:pt(Hn(e,n))})}}const Na={id:"input-point4d",type:"input",accept:(n,e)=>{if(!wn.isObject(n))return null;const t=ye,s=Be(e,{x:t.optional.custom(Ft),y:t.optional.custom(Ft),z:t.optional.custom(Ft),w:t.optional.custom(Ft)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Ua,constraint:n=>Oa(n.params,n.initialValue),equals:wn.equals,writer:n=>Va},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof $t))throw z.shouldNeverHappen();return new As(n.document,{assembly:Ir,axes:e.rawValue.getComponents().map((s,u)=>Fa(s,t.components[u])),parser:zt,value:e,viewProps:n.viewProps})}};function $a(n){const e=[],t=gs(n.options);return t&&e.push(t),new Bt(e)}const Wa={id:"input-string",type:"input",accept:(n,e)=>{if(typeof n!="string")return null;const s=Be(e,{options:ye.optional.custom(Kn)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>er,constraint:n=>$a(n.params),writer:n=>Tn},controller:n=>{const e=n.document,t=n.value,s=n.constraint,u=s&&_t(s,At);return u?new Pn(e,{props:new se({options:u.values.value("options")}),value:t,viewProps:n.viewProps}):new qn(e,{parser:E=>E,props:se.fromObject({formatter:fs}),value:t,viewProps:n.viewProps})}},An={monitor:{defaultInterval:200,defaultLineCount:3}},Ur=K("mll");class qa{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(Ur()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("textarea");s.classList.add(Ur("i")),s.style.height=`calc(var(--bld-us) * ${t.lineCount})`,s.readOnly=!0,t.viewProps.bindDisabled(s),this.element.appendChild(s),this.textareaElem_=s,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.textareaElem_,t=e.scrollTop===e.scrollHeight-e.clientHeight,s=[];this.value.rawValue.forEach(u=>{u!==void 0&&s.push(this.formatter_(u))}),e.textContent=s.join(`
`),t&&(e.scrollTop=e.scrollHeight)}onValueUpdate_(){this.update_()}}class Gs{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new qa(e,{formatter:t.formatter,lineCount:t.lineCount,value:this.value,viewProps:this.viewProps})}}const Vr=K("sgl");class ja{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(Vr()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("input");s.classList.add(Vr("i")),s.readOnly=!0,s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.value.rawValue,t=e[e.length-1];this.inputElement.value=t!==void 0?this.formatter_(t):""}onValueUpdate_(){this.update_()}}class Ls{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new ja(e,{formatter:t.formatter,value:this.value,viewProps:this.viewProps})}}const Ka={id:"monitor-bool",type:"monitor",accept:(n,e)=>{if(typeof n!="boolean")return null;const s=Be(e,{lineCount:ye.optional.number});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Hs},controller:n=>{var e;return n.value.rawValue.length===1?new Ls(n.document,{formatter:Ys,value:n.value,viewProps:n.viewProps}):new Gs(n.document,{formatter:Ys,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:An.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}},jt=K("grl");class Ha{constructor(e,t){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=e.createElement("div"),this.element.classList.add(jt()),t.viewProps.bindClassModifiers(this.element),this.formatter_=t.formatter,this.props_=t.props,this.cursor_=t.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const s=e.createElementNS(k,"svg");s.classList.add(jt("g")),s.style.height=`calc(var(--bld-us) * ${t.lineCount})`,this.element.appendChild(s),this.svgElem_=s;const u=e.createElementNS(k,"polyline");this.svgElem_.appendChild(u),this.lineElem_=u;const E=e.createElement("div");E.classList.add(jt("t"),K("tt")()),this.element.appendChild(E),this.tooltipElem_=E,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const e=this.svgElem_.getBoundingClientRect(),t=this.value.rawValue.length-1,s=this.props_.get("minValue"),u=this.props_.get("maxValue"),E=[];this.value.rawValue.forEach((Ne,We)=>{if(Ne===void 0)return;const nn=Je(We,0,t,0,e.width),Dn=Je(Ne,s,u,e.height,0);E.push([nn,Dn].join(","))}),this.lineElem_.setAttributeNS(null,"points",E.join(" "));const G=this.tooltipElem_,ee=this.value.rawValue[this.cursor_.rawValue];if(ee===void 0){G.classList.remove(jt("t","a"));return}const Ee=Je(this.cursor_.rawValue,0,t,0,e.width),Ce=Je(ee,s,u,e.height,0);G.style.left=`${Ee}px`,G.style.top=`${Ce}px`,G.textContent=`${this.formatter_(ee)}`,G.classList.contains(jt("t","a"))||(G.classList.add(jt("t","a"),jt("t","in")),r(G),G.classList.remove(jt("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class Ya{constructor(e,t){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props_=t.props,this.value=t.value,this.viewProps=t.viewProps,this.cursor_=ae(-1),this.view=new Ha(e,{cursor:this.cursor_,formatter:t.formatter,lineCount:t.lineCount,props:this.props_,value:this.value,viewProps:this.viewProps}),!c(e))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const s=new Xt(this.view.element);s.emitter.on("down",this.onGraphPointerDown_),s.emitter.on("move",this.onGraphPointerMove_),s.emitter.on("up",this.onGraphPointerUp_)}}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(e){const t=this.view.element.getBoundingClientRect();this.cursor_.rawValue=Math.floor(Je(e.offsetX,0,t.width,0,this.value.rawValue.length))}onGraphPointerDown_(e){this.onGraphPointerMove_(e)}onGraphPointerMove_(e){if(!e.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(Je(e.data.point.x,0,e.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function zs(n){return"format"in n&&!U(n.format)?n.format:pt(2)}function Za(n){var e;return n.value.rawValue.length===1?new Ls(n.document,{formatter:zs(n.params),value:n.value,viewProps:n.viewProps}):new Gs(n.document,{formatter:zs(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:An.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}function Xa(n){var e,t,s;return new Ya(n.document,{formatter:zs(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:An.monitor.defaultLineCount,props:se.fromObject({maxValue:(t="max"in n.params?n.params.max:null)!==null&&t!==void 0?t:100,minValue:(s="min"in n.params?n.params.min:null)!==null&&s!==void 0?s:0}),value:n.value,viewProps:n.viewProps})}function Or(n){return"view"in n&&n.view==="graph"}const Qa={id:"monitor-number",type:"monitor",accept:(n,e)=>{if(typeof n!="number")return null;const t=ye,s=Be(e,{format:t.optional.function,lineCount:t.optional.number,max:t.optional.number,min:t.optional.number,view:t.optional.string});return s?{initialValue:n,params:s}:null},binding:{defaultBufferSize:n=>Or(n)?64:1,reader:n=>Js},controller:n=>Or(n.params)?Xa(n):Za(n)},Ja={id:"monitor-string",type:"monitor",accept:(n,e)=>{if(typeof n!="string")return null;const t=ye,s=Be(e,{lineCount:t.optional.number,multiline:t.optional.boolean});return s?{initialValue:n,params:s}:null},binding:{reader:n=>er},controller:n=>{var e;const t=n.value;return t.rawValue.length>1||"multiline"in n.params&&n.params.multiline?new Gs(n.document,{formatter:fs,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:An.monitor.defaultLineCount,value:t,viewProps:n.viewProps}):new Ls(n.document,{formatter:fs,value:t,viewProps:n.viewProps})}};function el(n,e){var t;const s=n.accept(e.target.read(),e.params);if(U(s))return null;const u=ye,E={target:e.target,initialValue:s.initialValue,params:s.params},G=n.binding.reader(E),ee=n.binding.constraint?n.binding.constraint(E):void 0,Ee=ae(G(s.initialValue),{constraint:ee,equals:n.binding.equals}),Ce=new us({reader:G,target:e.target,value:Ee,writer:n.binding.writer(E)}),Ne=u.optional.boolean(e.params.disabled).value,We=u.optional.boolean(e.params.hidden).value,nn=n.controller({constraint:ee,document:e.document,initialValue:s.initialValue,params:s.params,value:Ce.value,viewProps:_.create({disabled:Ne,hidden:We})});return new Fe(e.document,{binding:Ce,blade:xe(),props:se.fromObject({label:"label"in e.params?(t=u.optional.string(e.params.label).value)!==null&&t!==void 0?t:null:e.target.key}),valueController:nn})}function tl(n,e){return e===0?new cs:new Fn(n,e??An.monitor.defaultInterval)}function nl(n,e){var t,s,u;const E=ye,G=n.accept(e.target.read(),e.params);if(U(G))return null;const ee={target:e.target,initialValue:G.initialValue,params:G.params},Ee=n.binding.reader(ee),Ce=(s=(t=E.optional.number(e.params.bufferSize).value)!==null&&t!==void 0?t:n.binding.defaultBufferSize&&n.binding.defaultBufferSize(G.params))!==null&&s!==void 0?s:1,Ne=E.optional.number(e.params.interval).value,We=new ft({reader:Ee,target:e.target,ticker:tl(e.document,Ne),value:$n(Ce)}),nn=E.optional.boolean(e.params.disabled).value,Dn=E.optional.boolean(e.params.hidden).value,Gn=n.controller({document:e.document,params:G.params,value:We.value,viewProps:_.create({disabled:nn,hidden:Dn})});return new Xe(e.document,{binding:We,blade:xe(),props:se.fromObject({label:"label"in e.params?(u=E.optional.string(e.params.label).value)!==null&&u!==void 0?u:null:e.target.key}),valueController:Gn})}class sl{constructor(){this.pluginsMap_={blades:[],inputs:[],monitors:[]}}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(e){e.type==="blade"?this.pluginsMap_.blades.unshift(e):e.type==="input"?this.pluginsMap_.inputs.unshift(e):e.type==="monitor"&&this.pluginsMap_.monitors.unshift(e)}createInput(e,t,s){const u=t.read();if(U(u))throw new z({context:{key:t.key},type:"nomatchingcontroller"});const E=this.pluginsMap_.inputs.reduce((G,ee)=>G??el(ee,{document:e,target:t,params:s}),null);if(E)return E;throw new z({context:{key:t.key},type:"nomatchingcontroller"})}createMonitor(e,t,s){const u=this.pluginsMap_.monitors.reduce((E,G)=>E??nl(G,{document:e,params:s,target:t}),null);if(u)return u;throw new z({context:{key:t.key},type:"nomatchingcontroller"})}createBlade(e,t){const s=this.pluginsMap_.blades.reduce((u,E)=>u??On(E,{document:e,params:t}),null);if(!s)throw new z({type:"nomatchingview",context:{params:t}});return s}createBladeApi(e){if(e instanceof Fe)return new st(e);if(e instanceof Xe)return new at(e);if(e instanceof He)return new wt(e,this);const t=this.pluginsMap_.blades.reduce((s,u)=>s??u.api({controller:e,pool:this}),null);if(!t)throw z.shouldNeverHappen();return t}}function rl(){const n=new sl;return[ul,Ia,Na,Wa,Ta,Sa,Pa,ga,vo,Ka,Ja,Qa,ve,Un,Q,yn].forEach(e=>{n.register(e)}),n}function il(n){return Wt.isObject(n)?new Wt(n.x,n.y):new Wt}function ol(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y)}function It(n,e){if(!n)return;const t=[],s=Dr(n,e);s&&t.push(s);const u=Gr(n);return u&&t.push(u),new Bt(t)}function al(n,e){return new $t({assembly:Lr,components:[It("x"in n?n.x:void 0,e.x),It("y"in n?n.y:void 0,e.y)]})}function Fr(n,e){const[t,s]=n?ka(n):[];if(!U(t)||!U(s))return Math.max(Math.abs(t??0),Math.abs(s??0));const u=_n(n);return Math.max(Math.abs(u)*10,Math.abs(e)*10)}function ll(n,e){const t=e instanceof $t?e.components[0]:void 0,s=e instanceof $t?e.components[1]:void 0,u=Fr(t,n.x),E=Fr(s,n.y);return Math.max(u,E)}function Nr(n,e){return{baseStep:_n(e),constraint:e,textProps:se.fromObject({draggingScale:mn(e,n),formatter:pt(Hn(e,n))})}}function cl(n){if(!("y"in n))return!1;const e=n.y;return e&&"inverted"in e?!!e.inverted:!1}const ul={id:"input-point2d",type:"input",accept:(n,e)=>{if(!Wt.isObject(n))return null;const t=ye,s=Be(e,{expanded:t.optional.boolean,picker:t.optional.custom(rr),x:t.optional.custom(Ft),y:t.optional.object({inverted:t.optional.boolean,max:t.optional.number,min:t.optional.number,step:t.optional.number})});return s?{initialValue:n,params:s}:null},binding:{reader:n=>il,constraint:n=>al(n.params,n.initialValue),equals:Wt.equals,writer:n=>ol},controller:n=>{const e=n.document,t=n.value,s=n.constraint;if(!(s instanceof $t))throw z.shouldNeverHappen();const u="expanded"in n.params?n.params.expanded:void 0,E="picker"in n.params?n.params.picker:void 0;return new Ga(e,{axes:[Nr(t.rawValue.x,s.components[0]),Nr(t.rawValue.y,s.components[1])],expanded:u??!1,invertsY:cl(n.params),maxValue:ll(t.rawValue,s),parser:zt,pickerLayout:E??"popup",value:t,viewProps:n.viewProps})}};class $r extends g{constructor(e){super(e),this.emitter_=new j,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new B(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get options(){return this.controller_.valueController.props.get("options")}set options(e){this.controller_.valueController.props.set("options",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,u=>{s(u.event)}),this}}class Wr extends g{constructor(e){super(e),this.emitter_=new j,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new B(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get maxValue(){return this.controller_.valueController.sliderController.props.get("maxValue")}set maxValue(e){this.controller_.valueController.sliderController.props.set("maxValue",e)}get minValue(){return this.controller_.valueController.sliderController.props.get("minValue")}set minValue(e){this.controller_.valueController.sliderController.props.set("minValue",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,u=>{s(u.event)}),this}}class qr extends g{constructor(e){super(e),this.emitter_=new j,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new B(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get formatter(){return this.controller_.valueController.props.get("formatter")}set formatter(e){this.controller_.valueController.props.set("formatter",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,u=>{s(u.event)}),this}}const dl=function(){return{id:"list",type:"blade",accept(n){const e=ye,t=Be(n,{options:e.required.custom(Kn),value:e.required.raw,view:e.required.constant("list"),label:e.optional.string});return t?{params:t}:null},controller(n){const e=new At(ir(n.params.options)),t=ae(n.params.value,{constraint:e}),s=new Pn(n.document,{props:new se({options:e.values.value("options")}),value:t,viewProps:n.viewProps});return new Lt(n.document,{blade:n.blade,props:se.fromObject({label:n.params.label}),valueController:s})},api(n){return!(n.controller instanceof Lt)||!(n.controller.valueController instanceof Pn)?null:new $r(n.controller)}}}();function pl(n){return n.reduce((e,t)=>Object.assign(e,{[t.presetKey]:t.read()}),{})}function hl(n,e){n.forEach(t=>{const s=e[t.target.presetKey];s!==void 0&&t.writer(t.target,t.reader(s))})}class fl extends St{constructor(e,t){super(e,t)}get element(){return this.controller_.view.element}importPreset(e){const t=this.controller_.rackController.rack.find(Fe).map(s=>s.binding);hl(t,e),this.refresh()}exportPreset(){const e=this.controller_.rackController.rack.find(Fe).map(t=>t.binding.target);return pl(e)}refresh(){this.controller_.rackController.rack.find(Fe).forEach(e=>{e.binding.read()}),this.controller_.rackController.rack.find(Xe).forEach(e=>{e.binding.read()})}}class _l extends dn{constructor(e,t){super(e,{expanded:t.expanded,blade:t.blade,props:t.props,root:!0,viewProps:t.viewProps})}}const ml={id:"slider",type:"blade",accept(n){const e=ye,t=Be(n,{max:e.required.number,min:e.required.number,view:e.required.constant("slider"),format:e.optional.function,label:e.optional.string,value:e.optional.number});return t?{params:t}:null},controller(n){var e,t;const s=(e=n.params.value)!==null&&e!==void 0?e:0,u=new mt({max:n.params.max,min:n.params.min}),E=new vs(n.document,{baseStep:1,parser:zt,sliderProps:new se({maxValue:u.values.value("max"),minValue:u.values.value("min")}),textProps:se.fromObject({draggingScale:mn(void 0,s),formatter:(t=n.params.format)!==null&&t!==void 0?t:oo}),value:ae(s,{constraint:u}),viewProps:n.viewProps});return new Lt(n.document,{blade:n.blade,props:se.fromObject({label:n.params.label}),valueController:E})},api(n){return!(n.controller instanceof Lt)||!(n.controller.valueController instanceof vs)?null:new Wr(n.controller)}},bl=function(){return{id:"text",type:"blade",accept(n){const e=ye,t=Be(n,{parse:e.required.function,value:e.required.raw,view:e.required.constant("text"),format:e.optional.function,label:e.optional.string});return t?{params:t}:null},controller(n){var e;const t=new qn(n.document,{parser:n.params.parse,props:se.fromObject({formatter:(e=n.params.format)!==null&&e!==void 0?e:s=>String(s)}),value:ae(n.params.value),viewProps:n.viewProps});return new Lt(n.document,{blade:n.blade,props:se.fromObject({label:n.params.label}),valueController:t})},api(n){return!(n.controller instanceof Lt)||!(n.controller.valueController instanceof qn)?null:new qr(n.controller)}}}();function vl(n){const e=n.createElement("div");return e.classList.add(K("dfw")()),n.body&&n.body.appendChild(e),e}function jr(n,e,t){if(n.querySelector(`style[data-tp-style=${e}]`))return;const s=n.createElement("style");s.dataset.tpStyle=e,s.textContent=t,n.head.appendChild(s)}class gl extends fl{constructor(e){var t,s;const u=e??{},E=(t=u.document)!==null&&t!==void 0?t:a(),G=rl(),ee=new _l(E,{expanded:u.expanded,blade:xe(),props:se.fromObject({title:u.title}),viewProps:_.create()});super(ee,G),this.pool_=G,this.containerElem_=(s=u.container)!==null&&s!==void 0?s:vl(E),this.containerElem_.appendChild(this.element),this.doc_=E,this.usesDefaultWrapper_=!u.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw z.alreadyDisposed();return this.doc_}dispose(){const e=this.containerElem_;if(!e)throw z.alreadyDisposed();if(this.usesDefaultWrapper_){const t=e.parentElement;t&&t.removeChild(e)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(e){("plugin"in e?[e.plugin]:"plugins"in e?e.plugins:[]).forEach(s=>{this.pool_.register(s),this.embedPluginStyle_(s)})}embedPluginStyle_(e){e.css&&jr(this.document,`plugin-${e.id}`,e.css)}setUpDefaultPlugins_(){jr(this.document,"default",'.tp-tbiv_b,.tp-coltxtv_ms,.tp-ckbv_i,.tp-rotv_b,.tp-fldv_b,.tp-mllv_i,.tp-sglv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-mllv_i,.tp-sglv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--mo-fg);height:var(--bld-us);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-mllv_i::-webkit-scrollbar,.tp-sglv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-mllv_i::-webkit-scrollbar-corner,.tp-sglv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-mllv_i::-webkit-scrollbar-thumb,.tp-sglv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-br: var(--tp-base-border-radius, 6px);--cnt-h-p: var(--tp-container-horizontal-padding, 4px);--cnt-v-p: var(--tp-container-vertical-padding, 4px);--elm-br: var(--tp-element-border-radius, 2px);--bld-s: var(--tp-blade-spacing, 4px);--bld-us: var(--tp-blade-unit-size, 20px);--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tabv_c .tp-brkv>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-v-p))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tabv_c .tp-brkv>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--bld-s)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tabv_c .tp-brkv>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tabv_c .tp-brkv>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--elm-br);border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tabv_c .tp-brkv .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--elm-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);overflow:hidden;padding-left:var(--cnt-h-p);padding-right:calc(4px + var(--bld-us) + var(--cnt-h-p));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-h-p) + (var(--bld-us) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--elm-br);cursor:pointer;display:block;height:var(--bld-us);position:relative;width:var(--bld-us)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--bld-us)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--bld-s);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--bld-s)}.tp-colpv_rgb{display:flex;margin-top:var(--bld-s);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-v-p);padding-top:calc(var(--cnt-v-p) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--elm-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--bld-us)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--elm-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--elm-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;cursor:pointer;display:block;height:var(--bld-us);left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:var(--bld-us)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--elm-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--elm-br);color:var(--lbl-fg);cursor:pointer;height:var(--bld-us);line-height:var(--bld-us);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv.tp-fldv-not .tp-fldv_b{display:none}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--bld-us)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-h-p);padding-right:var(--cnt-h-p)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding:0 4px}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--bld-us)*3);line-height:var(--bld-us);padding:0 4px;resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--bld-us);margin-right:4px;position:relative;width:var(--bld-us)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--bld-s);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-p2dpv{padding-left:calc(var(--bld-us) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:6px;box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:168px;padding:var(--cnt-v-p) var(--cnt-h-p);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--bld-us);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--elm-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--bld-us) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_c{padding-bottom:var(--cnt-v-p);padding-left:4px;padding-top:var(--cnt-v-p)}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-h-p) + 4px);padding-right:calc(var(--cnt-h-p) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);bottom:2px;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);opacity:.5;overflow:hidden;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-txtv{position:relative}.tp-txtv_i{padding:0 4px}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:-3px;position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--bld-us) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--elm-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--font-family);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--bld-us) + var(--cnt-h-p));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv.tp-rotv-not .tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}'),this.pool_.getAll().forEach(e=>{this.embedPluginStyle_(e)}),this.registerPlugin({plugins:[ml,dl,yn,bl]})}}const wl=new S("3.1.10");f.BladeApi=g,f.ButtonApi=$,f.FolderApi=St,f.InputBindingApi=st,f.ListApi=$r,f.MonitorBindingApi=at,f.Pane=gl,f.SeparatorApi=pn,f.SliderApi=Wr,f.TabApi=ke,f.TabPageApi=Se,f.TextApi=qr,f.TpChangeEvent=B,f.VERSION=wl,Object.defineProperty(f,"__esModule",{value:!0})})})(Is,Is.exports);var jl=Is.exports;const Kl=`// 2DGS preprocess — per-alive-Gauss view-dependent color eval.
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
    // Continuous saturation gate — MUST mirror the CUDA trainer's
    // wsr_gate_soft byte-for-byte: exclusive-prefix optical depth of
    // strictly-nearer bins, plus a LINEAR interpolation inside the
    // fragment's own bin (deep-shadow-map style). A piecewise-constant
    // prefix steps at bin edges, and bin edges are camera-attached
    // iso-depth planes → whole bands of fragments flipped at once as the
    // camera moved ("rippling lines"). The soft factor s (smoothstep of
    // T over [0.5τ, 1.5τ]) is folded into the occ WEIGHT, never a hard
    // discard, and the coverage target keeps raw α — fully continuous.
    let p = vec2<i32>(floor(in.position.xy));
    let dn = clamp((log2(1.0 + max(sh.zv, 0.0)) - WSR_GATE_LO) * WSR_GATE_INVR, 0.0, 1.0) * 16.0;
    // ONE BIN NEARER than the fragment (matches CUDA wsr_gate_soft): at the
    // fragment's own position the lerp mixes in its own bin's mass and a
    // one-bin surface stack partially gates ITSELF. One bin back, co-surface
    // mass never counts and the value is continuous across bin crossings.
    let dg = max(dn - 1.0, 0.0);
    let bin = min(15u, u32(dg));
    let frac = clamp(dg - f32(bin), 0.0, 1.0);
    var bins = array<vec4<f32>, 4>(
        textureLoad(wsr_bin_t0, p, 0), textureLoad(wsr_bin_t1, p, 0),
        textureLoad(wsr_bin_t2, p, 0), textureLoad(wsr_bin_t3, p, 0));
    var od = 0.0;
    for (var i = 0u; i < bin; i = i + 1u) {
        od += bins[i / 4u][i % 4u];
    }
    od += frac * bins[bin / 4u][bin % 4u];
    var s = clamp((exp(-od) - 0.5 * WSR_GATE_TAU) / WSR_GATE_TAU, 0.0, 1.0);
    s = s * s * (3.0 - 2.0 * s);
    let gid = in.gauss_id & 0x7fffffffu;
    var occ = 1.0;
    if (in.gauss_id & 0x80000000u) == 0u {
        occ = atlas_probes[gid * 7u + 6u];
    }
    let w = sh.a * occ * s;
    var out : WsrOut;
    out.accum = vec4<f32>(sh.rgb * w, w);
    out.trans = vec4<f32>(sh.a, 0.0, 0.0, sh.a);
    return out;
}

// ---------------------------------------------------------------------------
// Mean-depth-gated WSR (?wsr=3, "D-gate"). The sort is kept, but used ONLY
// for the per-pixel visibility anchor — a scalar that is an INTEGRAL of
// opacity along the ray and therefore robust to the local order swaps that
// make sorted COLOR compositing pop. Color still blends order-independently.
//
//   fs_wsr_depth — drawn in radix-sorted (back-to-front) order with standard
//     premultiplied over blending; src = (zv·α, 0, 0, α). The blend unit then
//     accumulates exactly (Σ α·T·zv, Σ α·T): .r/.a = the sorted alpha-weighted
//     mean depth D̄, .a = saturation A = 1 − T_final.
//
//   fs_wsr_gated_d — the WSR accumulate with the occ weight faded smoothly
//     behind D̄ over a RELATIVE margin, scaled by g(A) so unsaturated pixels
//     (translucent mixes) never gate their genuinely-visible background:
//       s = 1 − g(A)·smoothstep(D̄(1+m/2), D̄(1+3m/2), zv)
//       g = smoothstep(0.6, 0.9, A),  m = WSR_DGATE_MARGIN
//     No bins ⇒ nothing camera-attached to ripple; D̄ moves continuously.
// MUST mirror the CUDA trainer (wsrDGatePrepassCUDA + the occ fold) exactly.
// ---------------------------------------------------------------------------
const WSR_DGATE_MARGIN : f32 = 0.15;

@fragment
fn fs_wsr_depth(in: VertexOutput) -> @location(0) vec4<f32> {
    let g = shade_alpha(in);
    return vec4<f32>(g.zv * g.a, 0.0, 0.0, g.a);
}

// D̄/A buffer for pass 2 (group 3 binding 8 — 4..7 are the bin textures).
@group(3) @binding(8) var wsr_dbuf_t : texture_2d<f32>;

@fragment
fn fs_wsr_gated_d(in: VertexOutput) -> WsrOut {
    let sh = shade(in);
    let p = vec2<i32>(floor(in.position.xy));
    let db = textureLoad(wsr_dbuf_t, p, 0);
    let A = db.a;
    let Dbar = db.r / max(db.a, 1e-6);
    let t0 = Dbar * (1.0 + 0.5 * WSR_DGATE_MARGIN);
    let t1 = Dbar * (1.0 + 1.5 * WSR_DGATE_MARGIN);
    var x = clamp((sh.zv - t0) / max(t1 - t0, 1e-6), 0.0, 1.0);
    x = x * x * (3.0 - 2.0 * x);
    var g = clamp((A - 0.6) / 0.3, 0.0, 1.0);
    g = g * g * (3.0 - 2.0 * g);
    let s = 1.0 - g * x;
    let gid = in.gauss_id & 0x7fffffffu;
    var occ = 1.0;
    if (in.gauss_id & 0x80000000u) == 0u {
        occ = atlas_probes[gid * 7u + 6u];
    }
    let w = sh.a * occ * s;
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
}`,vi=32,Us=1,Vs=2,si=4,Os=8,gi=4,sc=7<<gi,ri=128,ii=256,rc=0,Kt=new ArrayBuffer(vi),lt={canvas_size:new Uint32Array(Kt,0,2),accel_flags:new Uint32Array(Kt,8,1),feature_mode:new Uint32Array(Kt,12,1),gaussian_scaling:new Float32Array(Kt,16,1),sh_bias:new Float32Array(Kt,20,1),color_K:new Uint32Array(Kt,24,1),walltime:new Float32Array(Kt,28,1)};function ic(o){lt.canvas_size[0]=o.width>>>0,lt.canvas_size[1]=o.height>>>0,lt.accel_flags[0]=(o.accel_flags??Us|Vs)>>>0,lt.feature_mode[0]=(o.feature_mode??rc)>>>0,lt.gaussian_scaling[0]=o.gaussian_scaling??1,lt.sh_bias[0]=o.sh_bias??.5,lt.color_K[0]=(o.color_K??0)>>>0,lt.walltime[0]=o.walltime??0}function wi(o,l){o.queue.writeBuffer(l,0,Kt)}function ls(o,l,f){f&&o&&l&&wi(o,l)}function es(o,l,f,S,g=!0){lt.canvas_size[0]=o>>>0,lt.canvas_size[1]=l>>>0,ls(f??null,S??null,g)}function oi(o,l,f,S=!0){lt.gaussian_scaling[0]=o,ls(l??null,f??null,S)}function ai(o,l,f,S=!0){lt.sh_bias[0]=o,ls(l??null,f??null,S)}function rn(o,l,f,S=!0){let g=lt.accel_flags[0];if(o.oac!==void 0&&(g=o.oac?g|Us:g&~Us),o.spr!==void 0&&(g=o.spr?g|Vs:g&~Vs),o.bfc!==void 0&&(g=o.bfc?g|si:g&~si),o.meshCull!==void 0&&(g=o.meshCull?g|Os:g&~Os),o.meshSampleMode!==void 0){const C=(o.meshSampleMode&7)<<gi;g=g&~sc|C}o.meshSilhouetteCull!==void 0&&(g=o.meshSilhouetteCull?g|ri:g&~ri),o.meshInvertDepth!==void 0&&(g=o.meshInvertDepth?g|ii:g&~ii),lt.accel_flags[0]=g>>>0,ls(l??null,f??null,S)}const oc=256,ac=vi,lc=8,cc=96,uc=12,Ws=8,Ut=1<<Ws,on=256,is=32/Ws,dc=0,li=is&1;function ci(o,l){return{sort_indices_buffer:l.createBuffer({label:"ping-pong payload (indices)",size:o*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),sort_depths_buffer:l.createBuffer({label:"ping-pong keys (depths)",size:o*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})}}function pc(o,l){const f=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:7,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),S=o.createPipelineLayout({bindGroupLayouts:[f]}),g=C=>o.createComputePipeline({layout:S,compute:{module:l,entryPoint:C,constants:{WG_SIZE:on}}});return{l0TileScan:g("prefix_l0_tile_scan"),l1TileScanOnL0:g("prefix_l1_tile_scan_on_l0_sums"),l1ScanSums:g("prefix_scan_l1_sums"),addL1ToL0:g("prefix_add_l1_to_l0_offsets"),addL0ToElems:g("prefix_add_l0_to_elements"),computeDigitBase:g("compute_digit_base"),prefixBindGroupLayout:f}}function hc(o,l,f){const S=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),g=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]}),C=o.createPipelineLayout({bindGroupLayouts:[S]}),B=o.createPipelineLayout({bindGroupLayouts:[g]}),W=[];for(let I=0;I<is;I++){const V={PASS_ID:I+dc,RS_RADIX_LOG2:Ws,RS_RADIX_SIZE:Ut};W.push({localHistogram:o.createComputePipeline({layout:C,compute:{module:l,entryPoint:"local_histogram_pass",constants:V}}),scatterElements:o.createComputePipeline({layout:B,compute:{module:f,entryPoint:"scatter_elements",constants:V}})})}return{passes:W,localHistogramBindGroupLayout:S,scatterBindGroupLayout:g}}function fc(o){const l=o.createShaderModule({label:"local histogram",code:tc}),f=o.createShaderModule({label:"scatter",code:ec}),S=o.createShaderModule({label:"blelloch prefix",code:nc}),g=pc(o,S),C=hc(o,l,f);return{localHistogramBindGroupLayout:C.localHistogramBindGroupLayout,scatterBindGroupLayout:C.scatterBindGroupLayout,passes:C.passes,hierarchicalBlelloch:g}}function _c(o){const l=o.createTexture({label:"atlas stub (4x4x1 zero RGBA8)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),f=l.createView({dimension:"2d-array"}),S=o.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge"}),g=o.createBuffer({label:"atlas rects stub (5 zero floats)",size:4*5,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),C=o.createBuffer({label:"tex_params stub (atlas_enabled=0)",size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(C,0,new ArrayBuffer(32));const B={width:0,height:0,channels:0,kernel_type:0,num_rects:0,uv_extent:0,sb_number:0,format:4294967295,sh_bias:0,res_bias:0,compact_mult:0,layer_h:0,atlas_scale:0,atlas_offset:0,n_layers:0,n_cols:1,layer_cuts:new Uint32Array,column_cuts:new Uint32Array([0,0]),slice_width:0,rects_expanded:new Float32Array,atlas_bytes:new Uint8Array};return{texture:l,view:f,sampler:S,rectsBuffer:g,texParamsBuffer:C,meta:B}}class mc{constructor(l,f,S,g,C,B=null,W=null){L(this,"device");L(this,"pc");L(this,"presentationFormat");L(this,"camera_buffer");L(this,"render_settings_buffer");L(this,"draw_indirect_buffer");L(this,"splat_2d_buffer");L(this,"querySet");L(this,"resolveBuffer");L(this,"resultBuffer");L(this,"queriesPerFrame",lc);L(this,"queryCapacityFrames",200);L(this,"sort_prefixBindGroup");L(this,"sort_pipelines");L(this,"sort_localHistogramBindGroups");L(this,"sort_scatterBindGroups");L(this,"lastFrame",0);L(this,"frameCount",0);L(this,"preprocessPipeline");L(this,"cullPipeline");L(this,"renderPipeline");L(this,"indirectPipeline");L(this,"htEnabled",!1);L(this,"wsrEnabled",!1);L(this,"wsrPipeline",null);L(this,"wsrCompositePipeline",null);L(this,"wsrGateEnabled",!1);L(this,"wsrBinsPipeline",null);L(this,"wsrGatedPipeline",null);L(this,"wsrBinsBgl",null);L(this,"wsrBinsBindGroup",null);L(this,"wsrBinTextures",[null,null,null,null]);L(this,"wsrBinViews",[null,null,null,null]);L(this,"wsrDGateEnabled",!1);L(this,"wsrDepthPipeline",null);L(this,"wsrGatedDPipeline",null);L(this,"wsrDbufBgl",null);L(this,"wsrDbufBindGroup",null);L(this,"wsrDbufTexture",null);L(this,"wsrDbufView",null);L(this,"htSortedTail",!1);L(this,"htOccTail",!1);L(this,"htTailOccPipeline",null);L(this,"renderShaderModule");L(this,"betaKernel",1);L(this,"renderSettingsBgl");L(this,"renderSplatsBgl");L(this,"atlasBgl");L(this,"htCorePipeline",null);L(this,"htTailPipeline",null);L(this,"htTail2Pipeline",null);L(this,"htCompositePipeline",null);L(this,"htComposite2Pipeline",null);L(this,"htCompositeBgl",null);L(this,"htCompositeBindGroup",null);L(this,"htDepthTexture",null);L(this,"htDepthView",null);L(this,"htCoreTexture",null);L(this,"htCoreView",null);L(this,"htAccumTexture",null);L(this,"htAccumView",null);L(this,"htTransTexture",null);L(this,"htTransView",null);L(this,"htW",0);L(this,"htH",0);L(this,"htTailBgl",null);L(this,"htTailBindGroup",null);L(this,"htParamsBuffer",null);L(this,"htTailK",150);L(this,"sort_info_buffer");L(this,"sort_ping_pong");L(this,"crsBg");L(this,"gsBg");L(this,"cullBg2");L(this,"preprocessBg1");L(this,"renderSplatsBindGroup");L(this,"renderSettingsBindGroup");L(this,"atlasBindGroup");L(this,"indirectBindGroup");L(this,"sh_solvers_buffer");L(this,"mesh");L(this,"meshDepthPipeline",null);L(this,"meshDepthCameraBindGroup",null);L(this,"meshDepthMarginBindGroup",null);L(this,"meshMarginBuffer",null);L(this,"meshDepthTexture",null);L(this,"meshDepthView",null);L(this,"meshCullBindGroupLayout");L(this,"meshCullBindGroup");L(this,"meshCullWidth",0);L(this,"meshCullHeight",0);L(this,"meshStubTexture");L(this,"meshStubView");L(this,"bfcParamsBuffer");L(this,"meshOverlayPipeline",null);L(this,"meshOverlayEnabled",!1);L(this,"bgColor",[0,0,0,0]);L(this,"showPerfDialogNext",!1);L(this,"requestReorderNextFrame",!1);L(this,"reorderInFlight",!1);L(this,"downloadOnceNextRead",!1);L(this,"downloadOnceFileName","fps_metrics");L(this,"allFrameTimes",[]);L(this,"lastStageBreakdownMs",null);L(this,"timeQueryEnabled");L(this,"atlas");L(this,"atlasParamsBuffer");this.mesh=W;const I=C.includes("timestamp-query");this.timeQueryEnabled=I,I&&Tt("⏰ using timestamp-query"),this.pc=l,this.device=f,this.presentationFormat=S,this.camera_buffer=g,this.atlas=B??_c(f),this.atlasParamsBuffer=f.createBuffer({label:"atlas_params UBO",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.writeAtlasParams(),f.addEventListener("uncapturederror",se=>{console.error("A WebGPU error was not captured:",se.error)}),this._setupTimestampQueries(),this._setupBuffers();const V=(Math.floor((this.pc.num_points+on-1)/on)+1)*on,q=Math.ceil(V/on);console.log(`keys count adjusted: ${V}`),console.log(`key size: ${this.pc.num_points}`);const U=f.createBuffer({label:"sort info",size:16*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT});this.sort_pipelines=fc(f);const Y=[ci(V,f),ci(V,f)],Z=f.createBuffer({label:"workgroup histograms",size:q*Ut*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),O=f.createBuffer({label:"workgroup prefixes",size:q*Ut*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),z=f.createBuffer({label:"digit base",size:Ut*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),N=Math.ceil(q/on),$=Math.ceil(N/on),j=f.createBuffer({label:"prefix l0 sums",size:N*Ut*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),M=f.createBuffer({label:"prefix l0 offsets",size:N*Ut*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),K=f.createBuffer({label:"prefix l1 sums",size:$*Ut*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),oe=f.createBuffer({label:"prefix l1 offsets",size:$*Ut*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});this.sort_prefixBindGroup=f.createBindGroup({label:"prefix 2L bind group",layout:this.sort_pipelines.hierarchicalBlelloch.prefixBindGroupLayout,entries:[{binding:0,resource:{buffer:U}},{binding:1,resource:{buffer:Z}},{binding:2,resource:{buffer:O}},{binding:3,resource:{buffer:j}},{binding:4,resource:{buffer:M}},{binding:5,resource:{buffer:K}},{binding:6,resource:{buffer:oe}},{binding:7,resource:{buffer:z}}]}),this.sort_localHistogramBindGroups=[f.createBindGroup({label:"localHistogram src=0",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:U}},{binding:1,resource:{buffer:Y[0].sort_depths_buffer}},{binding:2,resource:{buffer:Z}}]}),f.createBindGroup({label:"localHistogram src=1",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:U}},{binding:1,resource:{buffer:Y[1].sort_depths_buffer}},{binding:2,resource:{buffer:Z}}]})],this.sort_scatterBindGroups=[f.createBindGroup({label:"scatter 0->1",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:U}},{binding:1,resource:{buffer:z}},{binding:2,resource:{buffer:Y[0].sort_depths_buffer}},{binding:3,resource:{buffer:Y[1].sort_depths_buffer}},{binding:4,resource:{buffer:Y[0].sort_indices_buffer}},{binding:5,resource:{buffer:Y[1].sort_indices_buffer}},{binding:6,resource:{buffer:O}}]}),f.createBindGroup({label:"scatter 1->0",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:U}},{binding:1,resource:{buffer:z}},{binding:2,resource:{buffer:Y[1].sort_depths_buffer}},{binding:3,resource:{buffer:Y[0].sort_depths_buffer}},{binding:4,resource:{buffer:Y[1].sort_indices_buffer}},{binding:5,resource:{buffer:Y[0].sort_indices_buffer}},{binding:6,resource:{buffer:O}}]})],this.sort_info_buffer=U,this.sort_ping_pong=Y;const we=this.device.createBindGroupLayout({label:"camera + renderSettings",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),ue=this.device.createBindGroupLayout({label:"gaussians + splats",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),ne=this.device.createBindGroupLayout({label:"cullBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),he=this.device.createBindGroupLayout({label:"preprocessBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]});this.crsBg=this.device.createBindGroup({label:"camera + renderSettings",layout:we,entries:[{binding:0,resource:{buffer:this.camera_buffer}},{binding:1,resource:{buffer:this.render_settings_buffer}}]}),this.gsBg=this.device.createBindGroup({label:"surfels + splats",layout:ue,entries:[{binding:0,resource:{buffer:this.pc.surfel_buffer}},{binding:1,resource:{buffer:this.splat_2d_buffer}}]}),this.cullBg2=this.device.createBindGroup({label:"cullBg2",layout:ne,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[0].sort_depths_buffer}},{binding:2,resource:{buffer:this.sort_ping_pong[0].sort_indices_buffer}},{binding:3,resource:{buffer:this.sh_solvers_buffer}}]}),this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:he,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}},{binding:4,resource:{buffer:this.atlas.rectsBuffer}},{binding:5,resource:{buffer:this.atlasParamsBuffer}}]});const te=this.device.createShaderModule({code:Zl});this.indirectPipeline=this.device.createComputePipeline({label:"indirect dispatch calc",layout:"auto",compute:{module:te,entryPoint:"write_dispatch_triples",constants:{RS_RADIX_SIZE:256}}}),this.indirectBindGroup=this.device.createBindGroup({label:"indirect dispatch bind group",layout:this.indirectPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.draw_indirect_buffer}}]}),this.bfcParamsBuffer=this.device.createBuffer({label:"bfc params (uniform, 16 B)",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([2,0,0,0])),this.meshCullBindGroupLayout=this.device.createBindGroupLayout({label:"mesh cull (cull group 3)",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:"depth",viewDimension:"2d",multisampled:!1}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),this.meshStubTexture=this.device.createTexture({label:"mesh cull stub (1x1 depth32float)",size:{width:1,height:1,depthOrArrayLayers:1},format:"depth32float",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.RENDER_ATTACHMENT}),this.meshStubView=this.meshStubTexture.createView({dimension:"2d"}),this.meshCullBindGroup=this.device.createBindGroup({label:"mesh cull bind (stub)",layout:this.meshCullBindGroupLayout,entries:[{binding:0,resource:this.meshStubView},{binding:1,resource:{buffer:this.bfcParamsBuffer}}]});const Oe=this.device.createShaderModule({code:Xl});if(this.cullPipeline=this.device.createComputePipeline({label:"surfel_cull",layout:this.device.createPipelineLayout({bindGroupLayouts:[we,ue,ne,this.meshCullBindGroupLayout]}),compute:{module:Oe,entryPoint:"surfel_cull"}}),this.mesh!==null){const se=this.device.createBindGroupLayout({label:"mesh_depth camera (group 0)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]});this.meshDepthCameraBindGroup=this.device.createBindGroup({label:"mesh_depth camera bind",layout:se,entries:[{binding:0,resource:{buffer:this.camera_buffer}}]});const ie=this.device.createBindGroupLayout({label:"mesh_depth margin (group 1)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]});this.meshMarginBuffer=this.device.createBuffer({label:"mesh cull margin (uniform, 16 B)",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.meshMarginBuffer,0,new Float32Array([0,0,0,0])),this.meshDepthMarginBindGroup=this.device.createBindGroup({label:"mesh_depth margin bind",layout:ie,entries:[{binding:0,resource:{buffer:this.meshMarginBuffer}}]});const _e=this.device.createShaderModule({code:Ql});this.meshDepthPipeline=this.device.createRenderPipeline({label:"mesh_depth",layout:this.device.createPipelineLayout({bindGroupLayouts:[se,ie]}),vertex:{module:_e,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]},{arrayStride:12,attributes:[{shaderLocation:1,offset:0,format:"float32x3"}]}]},primitive:{topology:"triangle-list",cullMode:"none"},depthStencil:{format:"depth32float",depthWriteEnabled:!0,depthCompare:"less"}})}const Ge=this.device.createShaderModule({code:Kl});this.preprocessPipeline=this.device.createComputePipeline({label:"preprocess_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[we,he]}),compute:{module:Ge,entryPoint:"preprocess"}});const Le=this.device.createShaderModule({code:Hl});Le.getCompilationInfo().then(se=>{se.messages.length>0?(console.group("[render_2dgs.wgsl] compilation messages"),se.messages.forEach(ie=>{(ie.type==="error"?console.error:ie.type==="warning"?console.warn:console.log)(`${ie.type} (line ${ie.lineNum}:${ie.linePos}): ${ie.message}`)}),console.groupEnd()):console.log("[render_2dgs.wgsl] compiled clean")});const Te=this.device.createBindGroupLayout({label:"render_settings (vertex)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]}),ge=this.device.createBindGroupLayout({label:"splats_2d + indices (vertex)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),Pe=this.device.createBindGroupLayout({label:"atlas (fragment)",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array",multisampled:!1}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]}),ae=this.atlas.meta.format!==4294967295&&this.atlas.meta.kernel_type===0?0:1;this.device.pushErrorScope("validation"),this.renderPipeline=this.device.createRenderPipeline({label:"render_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[Te,ge,Pe]}),vertex:{module:Le,entryPoint:"vs_main"},fragment:{module:Le,entryPoint:"fs_main",constants:{BETA_KERNEL:ae},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}}),this.device.popErrorScope().then(se=>{se?console.error("[render_2dgs] pipeline create validation error:",se.message):console.log("[render_2dgs] pipeline created OK")}),this.renderSettingsBindGroup=this.device.createBindGroup({label:"render_settings (vertex)",layout:Te,entries:[{binding:0,resource:{buffer:this.render_settings_buffer}}]}),this.renderSplatsBindGroup=this.device.createBindGroup({label:"splats_2d + indices (vertex)",layout:ge,entries:[{binding:0,resource:{buffer:this.splat_2d_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[li].sort_indices_buffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:Pe,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:this.atlas.sampler},{binding:2,resource:{buffer:this.atlas.texParamsBuffer}},{binding:3,resource:{buffer:this.atlas.rectsBuffer}}]}),this.renderShaderModule=Le,this.betaKernel=ae,this.renderSettingsBgl=Te,this.renderSplatsBgl=ge,this.atlasBgl=Pe}get totalQueryCount(){return this.queriesPerFrame*this.queryCapacityFrames}setHtTailK(l){this.htTailK=l,this.htParamsBuffer!==null&&this.device.queue.writeBuffer(this.htParamsBuffer,0,new Float32Array([l,0,0,0]))}setMeshOverlayEnabled(l){this.meshOverlayEnabled=l&&this.mesh!==null}setMeshCullEnabled(l){rn({meshCull:l&&this.mesh!==null},this.device,this.render_settings_buffer)}setMeshMargin(l){this.meshMarginBuffer!==null&&this.device.queue.writeBuffer(this.meshMarginBuffer,0,new Float32Array([l]))}setBfcParams(l,f){this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([l,f[0],f[1],f[2]]))}get hasMesh(){return this.mesh!==null}get texParamsBuffer(){return this.atlas.texParamsBuffer}get hasAtlas(){return this.atlas.meta.format!==4294967295}writeAtlasParams(){const l=new ArrayBuffer(16),f=new Uint32Array(l),S=new Float32Array(l);f[0]=this.atlas.meta.width|0,f[1]=this.atlas.meta.layer_h|0,S[2]=this.atlas.meta.uv_extent||0,f[3]=this.atlas.meta.probe_mode|0||0,this.device.queue.writeBuffer(this.atlasParamsBuffer,0,l)}ensureHtResources(l,f){var C,B,W,I,V,q;if(this.htCorePipeline===null){const U=this.device.createPipelineLayout({bindGroupLayouts:[this.renderSettingsBgl,this.renderSplatsBgl,this.atlasBgl]});this.htTailBgl=this.device.createBindGroupLayout({label:"ht_tail depth-weighting (group 3)",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"depth",viewDimension:"2d",multisampled:!1}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),this.htParamsBuffer=this.device.createBuffer({label:"ht params (uniform, 16 B)",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.htParamsBuffer,0,new Float32Array([this.htTailK,0,0,0]));const Y=this.device.createPipelineLayout({bindGroupLayouts:[this.renderSettingsBgl,this.renderSplatsBgl,this.atlasBgl,this.htTailBgl]});this.htCorePipeline=this.device.createRenderPipeline({label:"ht_core",layout:U,vertex:{module:this.renderShaderModule,entryPoint:"vs_main"},fragment:{module:this.renderShaderModule,entryPoint:"fs_core",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:"rgba16float"}]},primitive:{topology:"triangle-strip",cullMode:"none"},depthStencil:{format:"depth32float",depthWriteEnabled:!0,depthCompare:"less"}}),this.htTailPipeline=this.device.createRenderPipeline({label:"ht_tail",layout:Y,vertex:{module:this.renderShaderModule,entryPoint:"vs_main"},fragment:{module:this.renderShaderModule,entryPoint:"fs_tail",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:"rgba16float",blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one"}}},{format:"r16float",blend:{color:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src"},alpha:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"},depthStencil:{format:"depth32float",depthWriteEnabled:!1,depthCompare:"greater"}}),this.htTailOccPipeline=this.device.createRenderPipeline({label:"ht_tail_occ",layout:Y,vertex:{module:this.renderShaderModule,entryPoint:"vs_main"},fragment:{module:this.renderShaderModule,entryPoint:"fs_tail_occ",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:"rgba16float",blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one"}}},{format:"r16float",blend:{color:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src"},alpha:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"},depthStencil:{format:"depth32float",depthWriteEnabled:!1,depthCompare:"greater"}}),this.htTail2Pipeline=this.device.createRenderPipeline({label:"ht_tail_sorted",layout:U,vertex:{module:this.renderShaderModule,entryPoint:"vs_main"},fragment:{module:this.renderShaderModule,entryPoint:"fs_tail_sorted",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:"rgba16float",blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"},depthStencil:{format:"depth32float",depthWriteEnabled:!1,depthCompare:"greater"}}),this.wsrPipeline=this.device.createRenderPipeline({label:"wsr_accumulate",layout:U,vertex:{module:this.renderShaderModule,entryPoint:"vs_main"},fragment:{module:this.renderShaderModule,entryPoint:"fs_wsr",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:"rgba16float",blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one"}}},{format:"r16float",blend:{color:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src"},alpha:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}});const Z={format:"rgba16float",blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one"}}};this.wsrBinsPipeline=this.device.createRenderPipeline({label:"wsr_bins_prepass",layout:U,vertex:{module:this.renderShaderModule,entryPoint:"vs_main"},fragment:{module:this.renderShaderModule,entryPoint:"fs_wsr_bins",constants:{BETA_KERNEL:this.betaKernel},targets:[Z,Z,Z,Z]},primitive:{topology:"triangle-strip",cullMode:"none"}}),this.wsrBinsBgl=this.device.createBindGroupLayout({label:"wsr gate bins (group 3)",entries:[4,5,6,7].map(z=>({binding:z,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}}))}),this.wsrGatedPipeline=this.device.createRenderPipeline({label:"wsr_gated_accumulate",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.renderSettingsBgl,this.renderSplatsBgl,this.atlasBgl,this.wsrBinsBgl]}),vertex:{module:this.renderShaderModule,entryPoint:"vs_main"},fragment:{module:this.renderShaderModule,entryPoint:"fs_wsr_gated",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:"rgba16float",blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one"}}},{format:"r16float",blend:{color:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src"},alpha:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}}),this.wsrDepthPipeline=this.device.createRenderPipeline({label:"wsr_depth_anchor",layout:U,vertex:{module:this.renderShaderModule,entryPoint:"vs_main"},fragment:{module:this.renderShaderModule,entryPoint:"fs_wsr_depth",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:"rgba16float",blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}}),this.wsrDbufBgl=this.device.createBindGroupLayout({label:"wsr dgate dbuf (group 3)",entries:[{binding:8,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}}]}),this.wsrGatedDPipeline=this.device.createRenderPipeline({label:"wsr_gated_d_accumulate",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.renderSettingsBgl,this.renderSplatsBgl,this.atlasBgl,this.wsrDbufBgl]}),vertex:{module:this.renderShaderModule,entryPoint:"vs_main"},fragment:{module:this.renderShaderModule,entryPoint:"fs_wsr_gated_d",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:"rgba16float",blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one"}}},{format:"r16float",blend:{color:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src"},alpha:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}});const O=this.device.createShaderModule({label:"ht_composite",code:Yl});this.htCompositeBgl=this.device.createBindGroupLayout({label:"ht_composite inputs",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}}]}),this.htCompositePipeline=this.device.createRenderPipeline({label:"ht_composite",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.htCompositeBgl]}),vertex:{module:O,entryPoint:"vs_main"},fragment:{module:O,entryPoint:"fs_main",targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-list"}}),this.wsrCompositePipeline=this.device.createRenderPipeline({label:"wsr_composite",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.htCompositeBgl]}),vertex:{module:O,entryPoint:"vs_main"},fragment:{module:O,entryPoint:"fs_wsr_composite",targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-list"}}),this.htComposite2Pipeline=this.device.createRenderPipeline({label:"ht_composite_sorted",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.htCompositeBgl]}),vertex:{module:O,entryPoint:"vs_main"},fragment:{module:O,entryPoint:"fs_sorted_tail",targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-list"}})}if(this.htCoreTexture!==null&&this.htW===l&&this.htH===f)return;(C=this.htDepthTexture)==null||C.destroy(),(B=this.htCoreTexture)==null||B.destroy(),(W=this.htAccumTexture)==null||W.destroy(),(I=this.htTransTexture)==null||I.destroy();const S={width:Math.max(1,l),height:Math.max(1,f),depthOrArrayLayers:1},g=GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING;this.htDepthTexture=this.device.createTexture({label:"ht depth",size:S,format:"depth32float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.htCoreTexture=this.device.createTexture({label:"ht core",size:S,format:"rgba16float",usage:g}),this.htAccumTexture=this.device.createTexture({label:"ht accum",size:S,format:"rgba16float",usage:g}),this.htTransTexture=this.device.createTexture({label:"ht trans",size:S,format:"r16float",usage:g}),this.htDepthView=this.htDepthTexture.createView(),this.htCoreView=this.htCoreTexture.createView(),this.htAccumView=this.htAccumTexture.createView(),this.htTransView=this.htTransTexture.createView(),this.htCompositeBindGroup=this.device.createBindGroup({label:"ht composite bind",layout:this.htCompositeBgl,entries:[{binding:0,resource:this.htCoreView},{binding:1,resource:this.htAccumView},{binding:2,resource:this.htTransView}]}),this.htTailBindGroup=this.device.createBindGroup({label:"ht tail bind (group 3)",layout:this.htTailBgl,entries:[{binding:0,resource:this.htDepthView},{binding:1,resource:{buffer:this.htParamsBuffer}}]});for(let U=0;U<4;U++)(V=this.wsrBinTextures[U])==null||V.destroy(),this.wsrBinTextures[U]=this.device.createTexture({label:`wsr bins ${U}`,size:S,format:"rgba16float",usage:g}),this.wsrBinViews[U]=this.wsrBinTextures[U].createView();this.wsrBinsBindGroup=this.device.createBindGroup({label:"wsr gate bins bind (group 3)",layout:this.wsrBinsBgl,entries:[0,1,2,3].map(U=>({binding:4+U,resource:this.wsrBinViews[U]}))}),(q=this.wsrDbufTexture)==null||q.destroy(),this.wsrDbufTexture=this.device.createTexture({label:"wsr dgate dbuf",size:S,format:"rgba16float",usage:g}),this.wsrDbufView=this.wsrDbufTexture.createView(),this.wsrDbufBindGroup=this.device.createBindGroup({label:"wsr dgate dbuf bind (group 3)",layout:this.wsrDbufBgl,entries:[{binding:8,resource:this.wsrDbufView}]}),this.htW=l,this.htH=f}ensureMeshDepthTexture(l,f){var S;this.mesh!==null&&(this.meshDepthTexture!==null&&this.meshCullWidth===l&&this.meshCullHeight===f||((S=this.meshDepthTexture)==null||S.destroy(),this.meshDepthTexture=this.device.createTexture({label:"mesh_depth attachment",size:{width:Math.max(1,l),height:Math.max(1,f),depthOrArrayLayers:1},format:"depth32float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.meshDepthView=this.meshDepthTexture.createView({dimension:"2d"}),this.meshCullBindGroup=this.device.createBindGroup({label:"mesh cull bind (live)",layout:this.meshCullBindGroupLayout,entries:[{binding:0,resource:this.meshDepthView},{binding:1,resource:{buffer:this.bfcParamsBuffer}}]}),this.meshCullWidth=l,this.meshCullHeight=f))}setAtlasEnabled(l){this.atlas.meta.format!==4294967295&&mi(this.device,this.atlas.texParamsBuffer,this.atlas.meta,l)}async debugReadSortedIndices(l=30){const f=Math.max(0,Math.min(l,this.pc.num_points)),S=f*Uint32Array.BYTES_PER_ELEMENT;if(S===0){console.log("[DEBUG] No indices to read.");return}const g=this.device.createBuffer({size:S,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),C=this.device.createCommandEncoder();C.copyBufferToBuffer(this.sort_ping_pong[li].sort_indices_buffer,0,g,0,S),this.device.queue.submit([C.finish()]),await g.mapAsync(GPUMapMode.READ);const B=new Uint32Array(g.getMappedRange());console.log("[DEBUG] Sorted indices (first",f,"):",Array.from(B)),g.unmap()}frame(l,f,S=!0){var q,U,Y,Z;const C=(this.lastFrame+this.frameCount)%this.queryCapacityFrames*this.queriesPerFrame,B=S&&this.timeQueryEnabled;if(this.mesh!==null&&this.meshDepthPipeline!==null&&(lt.accel_flags[0]&Os)!==0){const O=lt.canvas_size[0],z=lt.canvas_size[1];this.ensureMeshDepthTexture(O,z);const N={label:"mesh_depth",colorAttachments:[],depthStencilAttachment:{view:this.meshDepthView,depthLoadOp:"clear",depthClearValue:1,depthStoreOp:"store"}},$=l.beginRenderPass(N);$.setPipeline(this.meshDepthPipeline),$.setBindGroup(0,this.meshDepthCameraBindGroup),$.setBindGroup(1,this.meshDepthMarginBindGroup),$.setVertexBuffer(0,this.mesh.vertexBuffer),$.setVertexBuffer(1,this.mesh.normalBuffer),$.setIndexBuffer(this.mesh.indexBuffer,"uint32"),$.drawIndexed(this.mesh.numIndices),$.end()}{l.clearBuffer(this.sort_info_buffer,0,4);const O={label:"cull"};B&&(O.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:C+0,endOfPassWriteIndex:C+1});const z=l.beginComputePass(O);z.setPipeline(this.cullPipeline),z.setBindGroup(0,this.crsBg),z.setBindGroup(1,this.gsBg),z.setBindGroup(2,this.cullBg2),z.setBindGroup(3,this.meshCullBindGroup);const N=Math.ceil(this.pc.num_points/oc);z.dispatchWorkgroups(N,1,1),z.end()}{const O=l.beginComputePass({label:"calculate indirect dispatch"});O.setPipeline(this.indirectPipeline),O.setBindGroup(0,this.indirectBindGroup),O.dispatchWorkgroups(1,1,1),O.end()}{const O={label:"preprocess"};B&&(O.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:C+2,endOfPassWriteIndex:C+3});const z=l.beginComputePass(O);z.setPipeline(this.preprocessPipeline),z.setBindGroup(0,this.crsBg),z.setBindGroup(1,this.preprocessBg1),z.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),z.end()}const I=this.wsrEnabled&&(((U=(q=this.atlas)==null?void 0:q.meta)==null?void 0:U.probe_mode)|0)===2,V=I&&this.wsrDGateEnabled;if(!this.htEnabled&&!I||this.htSortedTail||V)for(let O=0;O<is;O++){const z=O&1,N=this.sort_pipelines.passes[O],$=this.sort_localHistogramBindGroups[z],j=this.sort_scatterBindGroups[z];{const M={label:`upsweep_round${O}`};B&&!this.htEnabled&&O==0&&(M.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:C+4});const K=l.beginComputePass(M);K.setPipeline(N.localHistogram),K.setBindGroup(0,$),K.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),K.end()}{const M=l.beginComputePass({label:`prefix_round${O} - l0TileScan`});M.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l0TileScan),M.setBindGroup(0,this.sort_prefixBindGroup),M.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),M.end()}{const M=l.beginComputePass({label:`prefix_round${O} - l1TileScanOnL0`});M.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1TileScanOnL0),M.setBindGroup(0,this.sort_prefixBindGroup),M.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),M.end()}{const M=l.beginComputePass({label:`prefix_round${O} - l1ScanSums`});M.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1ScanSums),M.setBindGroup(0,this.sort_prefixBindGroup),M.dispatchWorkgroups(1,Ut,1),M.end()}{const M=l.beginComputePass({label:`prefix_round${O} - addL1ToL0`});M.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL1ToL0),M.setBindGroup(0,this.sort_prefixBindGroup),M.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),M.end()}{const M=l.beginComputePass({label:`prefix_round${O} - addL0ToElems`});M.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL0ToElems),M.setBindGroup(0,this.sort_prefixBindGroup),M.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),M.end()}{const M=l.beginComputePass({label:`prefix_round${O} - computeDigitBase`});M.setPipeline(this.sort_pipelines.hierarchicalBlelloch.computeDigitBase),M.setBindGroup(0,this.sort_prefixBindGroup),M.dispatchWorkgroups(1,1,1),M.end()}{const M={label:`scatter_round${O}`};B&&!this.htEnabled&&O==is-1&&(M.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:C+5});const K=l.beginComputePass(M);K.setPipeline(N.scatterElements),K.setBindGroup(0,j),K.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),K.end()}}if(I){const O=lt.canvas_size[0],z=lt.canvas_size[1];this.ensureHtResources(O,z);const N=this.wsrDGateEnabled,$=this.wsrGateEnabled&&!N;if($){const j={label:"wsr_bins_prepass",colorAttachments:this.wsrBinViews.map(K=>({view:K,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,0]}))},M=l.beginRenderPass(j);M.setPipeline(this.wsrBinsPipeline),M.setBindGroup(0,this.renderSettingsBindGroup),M.setBindGroup(1,this.renderSplatsBindGroup),M.setBindGroup(2,this.atlasBindGroup),M.drawIndirect(this.draw_indirect_buffer,0),M.end()}if(N){const j={label:"wsr_depth_anchor",colorAttachments:[{view:this.wsrDbufView,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,0]}]},M=l.beginRenderPass(j);M.setPipeline(this.wsrDepthPipeline),M.setBindGroup(0,this.renderSettingsBindGroup),M.setBindGroup(1,this.renderSplatsBindGroup),M.setBindGroup(2,this.atlasBindGroup),M.drawIndirect(this.draw_indirect_buffer,0),M.end()}{const j={label:"wsr_accumulate",colorAttachments:[{view:this.htAccumView,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,0]},{view:this.htTransView,loadOp:"clear",storeOp:"store",clearValue:[1,0,0,1]}]};B&&(j.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:C+4,endOfPassWriteIndex:C+5});const M=l.beginRenderPass(j);M.setPipeline(N?this.wsrGatedDPipeline:$?this.wsrGatedPipeline:this.wsrPipeline),M.setBindGroup(0,this.renderSettingsBindGroup),M.setBindGroup(1,this.renderSplatsBindGroup),M.setBindGroup(2,this.atlasBindGroup),N?M.setBindGroup(3,this.wsrDbufBindGroup):$&&M.setBindGroup(3,this.wsrBinsBindGroup),M.drawIndirect(this.draw_indirect_buffer,0),M.end()}{const j={label:"wsr_composite",colorAttachments:[{view:f,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};B&&(j.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:C+7});const M=l.beginRenderPass(j);M.setPipeline(this.wsrCompositePipeline),M.setBindGroup(0,this.htCompositeBindGroup),M.draw(3),M.end()}}else if(this.htEnabled){const O=lt.canvas_size[0],z=lt.canvas_size[1];this.ensureHtResources(O,z);{const N={label:"ht_core",colorAttachments:[{view:this.htCoreView,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,0]}],depthStencilAttachment:{view:this.htDepthView,depthLoadOp:"clear",depthClearValue:1,depthStoreOp:"store"}};B&&(N.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:C+4,endOfPassWriteIndex:C+5});const $=l.beginRenderPass(N);$.setPipeline(this.htCorePipeline),$.setBindGroup(0,this.renderSettingsBindGroup),$.setBindGroup(1,this.renderSplatsBindGroup),$.setBindGroup(2,this.atlasBindGroup),$.drawIndirect(this.draw_indirect_buffer,0),$.end()}if(this.htSortedTail){const N={label:"ht_tail_sorted",colorAttachments:[{view:this.htAccumView,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,0]}],depthStencilAttachment:{view:this.htDepthView,depthReadOnly:!0}};B&&(N.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:C+6});const $=l.beginRenderPass(N);$.setPipeline(this.htTail2Pipeline),$.setBindGroup(0,this.renderSettingsBindGroup),$.setBindGroup(1,this.renderSplatsBindGroup),$.setBindGroup(2,this.atlasBindGroup),$.drawIndirect(this.draw_indirect_buffer,0),$.end()}else{const N={label:"ht_tail",colorAttachments:[{view:this.htAccumView,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,0]},{view:this.htTransView,loadOp:"clear",storeOp:"store",clearValue:[1,0,0,1]}],depthStencilAttachment:{view:this.htDepthView,depthReadOnly:!0}};B&&(N.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:C+6});const $=l.beginRenderPass(N),j=this.htOccTail&&(((Z=(Y=this.atlas)==null?void 0:Y.meta)==null?void 0:Z.probe_mode)|0)===2;$.setPipeline(j?this.htTailOccPipeline:this.htTailPipeline),$.setBindGroup(0,this.renderSettingsBindGroup),$.setBindGroup(1,this.renderSplatsBindGroup),$.setBindGroup(2,this.atlasBindGroup),$.setBindGroup(3,this.htTailBindGroup),$.drawIndirect(this.draw_indirect_buffer,0),$.end()}{const N={label:"ht_composite",colorAttachments:[{view:f,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};B&&(N.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:C+7});const $=l.beginRenderPass(N);$.setPipeline(this.htSortedTail?this.htComposite2Pipeline:this.htCompositePipeline),$.setBindGroup(0,this.htCompositeBindGroup),$.draw(3),$.end()}}else{const O={label:"render",colorAttachments:[{view:f,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};B&&(O.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:C+6,endOfPassWriteIndex:C+7});const z=l.beginRenderPass(O);z.setPipeline(this.renderPipeline),z.setBindGroup(0,this.renderSettingsBindGroup),z.setBindGroup(1,this.renderSplatsBindGroup),z.setBindGroup(2,this.atlasBindGroup),z.drawIndirect(this.draw_indirect_buffer,0),z.end()}if(this.meshOverlayEnabled&&this.mesh!==null){if(this.meshOverlayPipeline===null){const N=this.device.createShaderModule({code:Jl}),$=this.device.createBindGroupLayout({label:"mesh_overlay camera (group 0)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]}),j=this.device.createBindGroupLayout({label:"mesh_overlay margin (group 1)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]});this.meshOverlayPipeline=this.device.createRenderPipeline({label:"mesh_overlay",layout:this.device.createPipelineLayout({bindGroupLayouts:[$,j]}),vertex:{module:N,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]},{arrayStride:12,attributes:[{shaderLocation:1,offset:0,format:"float32x3"}]}]},fragment:{module:N,entryPoint:"fs_main",targets:[{format:this.presentationFormat,blend:{color:{srcFactor:"src-alpha",dstFactor:"one-minus-src-alpha",operation:"add"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"}}}]},primitive:{topology:"triangle-list",cullMode:"none"}})}const O={label:"mesh_overlay",colorAttachments:[{view:f,loadOp:"load",storeOp:"store"}]},z=l.beginRenderPass(O);z.setPipeline(this.meshOverlayPipeline),z.setBindGroup(0,this.meshDepthCameraBindGroup),z.setBindGroup(1,this.meshDepthMarginBindGroup),z.setVertexBuffer(0,this.mesh.vertexBuffer),z.setVertexBuffer(1,this.mesh.normalBuffer),z.setIndexBuffer(this.mesh.indexBuffer,"uint32"),z.drawIndexed(this.mesh.numIndices),z.end()}this.frameCount++}async readPerfMetrics(l){const f=(l==null?void 0:l.silent)??!1;if(this.frameCount<=0)return;const S=this.device.createCommandEncoder({label:"timestamp resolve encoder"});S.resolveQuerySet(this.querySet,0,this.totalQueryCount,this.resolveBuffer,0),S.copyBufferToBuffer(this.resolveBuffer,0,this.resultBuffer,0,this.totalQueryCount*8),this.device.queue.submit([S.finish()]),await this.device.queue.onSubmittedWorkDone();const g=[["Total",7,0],["Culling",1,0],["Preprocess",3,2],["Sort",5,4],["Render",7,6]];await this.resultBuffer.mapAsync(GPUMapMode.READ);const C=new BigInt64Array(this.resultBuffer.getMappedRange()),B=Math.min(this.frameCount,this.queryCapacityFrames),W=(this.lastFrame+this.frameCount-B)%this.queryCapacityFrames,I=Array.from({length:g.length},()=>[]);let V=0;for(let $=0;$<B;$++){const j=(W+$)%this.queryCapacityFrames,M=j*this.queriesPerFrame;let K=!0;for(let oe=0;oe<g.length;oe++){const[we,ue,ne]=g[oe];if(C[M+ne]===0n||C[M+ue]===0n||C[M+ue]<C[M+ne]){K=!1;break}}if(!K){!f&&j%60===0&&console.debug("[timestamp] frame slot",j,"contains unwritten (0) timestamps, skipped in stats");continue}V++;for(let oe=0;oe<g.length;oe++){const[we,ue,ne]=g[oe],he=Number(C[M+ne]),te=Number(C[M+ue]);I[oe].push((te-he)/1e6)}}if(V===0){this.resultBuffer.unmap(),f||console.warn("[timestamp] No complete frames available (some timestamps are 0). It may be the first frame or the GPU is still filling.");return}this.allFrameTimes.push(...I[0]);const q=[];let U=0,Y=0,Z=0;for(let $=0;$<g.length;$++){const j=g[$][0],M=I[$];let K=0;if(j==="Total"){const oe=this.allFrameTimes;K=oe.reduce((ne,he)=>ne+he,0)/oe.length;const we=[...oe].sort((ne,he)=>ne-he);U=we[Math.floor(we.length*.99)]||0;const ue=oe.reduce((ne,he)=>ne+Math.pow(he-K,2),0)/oe.length;Y=Math.sqrt(ue),Z=K}else K=M.reduce((oe,we)=>oe+we,0)/M.length;q.push([j,K])}this.lastFrame+=this.frameCount,this.frameCount=0;const O=Object.fromEntries(q);this.lastStageBreakdownMs={cull:O.Culling??0,preprocess:O.Preprocess??0,sort:O.Sort??0,render:O.Render??0,total:O.Total??0};const N=`[TIMESTAMP - ${this.constructor.name}]
`+q.map(([$,j])=>`${$}: ${j.toFixed(3)}ms`).join(`
`)+`
Total P99: ${U.toFixed(3)}ms
Total STD: ${Y.toFixed(3)}ms
Total AVG: ${Z.toFixed(3)}ms
Stats computed over ${this.allFrameTimes.length} frames (cumulative)
${this.lastFrame} frames rendered since start`;if(f||(console.log(N),console.log("All Frame Times (Total, ms):",JSON.stringify(this.allFrameTimes))),this.downloadOnceNextRead){this.downloadOnceNextRead=!1;const $=`Stage,ms
`,j=q.map(([oe,we])=>`${oe},${we.toFixed(3)}`).join(`
`),M="data:text/csv;charset=utf-8,"+encodeURIComponent($+j),K=document.createElement("a");K.href=M,K.download=`${this.downloadOnceFileName}.csv`,document.body.appendChild(K),K.click(),K.remove()}if(this.showPerfDialogNext){this.showPerfDialogNext=!1;try{alert(N)}catch{console.warn("Unable to show dialog; metrics printed to console.")}}this.resultBuffer.unmap()}_setupTimestampQueries(){this.querySet=this.device.createQuerySet({type:"timestamp",count:this.totalQueryCount});const l=this.totalQueryCount*8;this.resolveBuffer=this.device.createBuffer({size:l,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),this.resultBuffer=this.device.createBuffer({size:l,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}_setupBuffers(){this.render_settings_buffer=this.device.createBuffer({label:"render settings",size:ac,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const l=document.querySelector("canvas"),f=l?l.width:1,S=l?l.height:1;ic({width:f,height:S,sh_bias:this.pc.sh_bias,color_K:this.pc.K,feature_mode:this.pc.feature_mode}),wi(this.device,this.render_settings_buffer),this.splat_2d_buffer=this.device.createBuffer({label:"splats_2d (Splat2DGS)",size:Rn(this.pc.num_points*cc),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.draw_indirect_buffer=this.device.createBuffer({label:"draw indirect",size:4*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT}),this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([4,0,0,0])),this.sh_solvers_buffer=this.device.createBuffer({label:"sh_solvers",size:Rn(this.pc.num_points*uc),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST})}requestPerfDialog(){this.showPerfDialogNext=!0}requestDownloadMetrics(l){if(l&&l.trim().length>0){const f=l.trim().replace(/[^a-zA-Z0-9_\-]/g,"_");this.downloadOnceFileName=f.length>0?f:this.downloadOnceFileName}else{const f=new Date,S=`${f.getFullYear()}${String(f.getMonth()+1).padStart(2,"0")}${String(f.getDate()).padStart(2,"0")}_${String(f.getHours()).padStart(2,"0")}${String(f.getMinutes()).padStart(2,"0")}${String(f.getSeconds()).padStart(2,"0")}`;this.downloadOnceFileName=`fps_metrics_${S}`}this.downloadOnceNextRead=!0}requestReorder(){}async maybeReorderAfterSubmit(){}}function bc(o,l){return 2*Math.atan(l/(2*o))}function vc(o,l,f,S){const g=Math.tan(S/2),C=Math.tan(f/2),B=g*o,W=-B,I=C*o,V=-I,q=dt.create();return q[0]=2*o/(I-V),q[5]=-2*o/(B-W),q[2]=(I+V)/(I-V),q[6]=(B+W)/(B-W),q[14]=1,q[10]=l/(l-o),q[11]=-(l*o)/(l-o),dt.transpose(q,q),q}async function gc(o){Tt(`loading scene camera file... : ${o}`);const f=await(await fetch(o)).json();return Tt(`loaded cameras count: ${f.length}`),f.map(S=>{const g=R.clone(S.position),C=Pt.create(...S.rotation.flat()),B=C[0],W=C[4],I=C[8],V=C[1],q=C[5],U=C[9],Y=C[2],Z=C[6],O=C[10];B*(q*O-U*Z)-W*(V*O-U*Y)+I*(V*Z-q*Y)<0&&(C[1]=-C[1],C[5]=-C[5],C[9]=-C[9]);const N=dt.fromMat3(C);return{position:g,rotation:N,img_name:S.img_name,id:S.id}})}const wc=4*2,xc=4*16,xi=4*xc+2*wc;function yc(o){return o.createBuffer({label:"camera uniform",size:xi,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}const sn=new Float32Array(xi/Float32Array.BYTES_PER_ELEMENT),os=class os{constructor(l,f){L(this,"uniform_buffer");L(this,"position",R.create());L(this,"rotation",dt.create());L(this,"fovY",45/180*Math.PI);L(this,"fovX");L(this,"focal",Jr.create());L(this,"viewport",Jr.create());L(this,"view_matrix",dt.identity());L(this,"view_inv_matrix",dt.identity());L(this,"proj_matrix",dt.identity());L(this,"proj_inv_matrix",dt.identity());L(this,"_negPos",R.create());L(this,"look",R.create(0,0,1));L(this,"up",R.create(0,1,0));L(this,"right",R.create(1,0,0));this.canvas=l,this.device=f,this.uniform_buffer=yc(f),this.on_update_canvas()}on_update_canvas(){const l=.5*this.canvas.height/Math.tan(this.fovY*.5);this.focal[0]=l,this.focal[1]=l,this.fovX=bc(l,this.canvas.width),this.viewport[0]=this.canvas.width,this.viewport[1]=this.canvas.height,this.proj_matrix=vc(.01,100,this.fovX,this.fovY),dt.inverse(this.proj_matrix,this.proj_inv_matrix),this.update_buffer()}update_buffer(){this._negPos[0]=-this.position[0],this._negPos[1]=-this.position[1],this._negPos[2]=-this.position[2],dt.copy(this.rotation,this.view_matrix),dt.translate(this.view_matrix,this._negPos,this.view_matrix),dt.inverse(this.view_matrix,this.view_inv_matrix),R.transformMat4Upper3x3(os.Z_AXIS,this.view_inv_matrix,this.look),R.normalize(this.look,this.look),R.cross(this.up,this.look,this.right),R.normalize(this.right,this.right);let l=0;sn.set(this.view_matrix,l),l+=16,sn.set(this.view_inv_matrix,l),l+=16,sn.set(this.proj_matrix,l),l+=16,sn.set(this.proj_inv_matrix,l),l+=16,sn.set(this.viewport,l),l+=2,sn.set(this.focal,l),l+=2,this.device.queue.writeBuffer(this.uniform_buffer,0,sn)}set_preset(l){R.copy(l.position,this.position),dt.copy(l.rotation,this.rotation),this.update_buffer()}setFov(l){this.fovY=l,this.on_update_canvas()}getFov(){return this.fovY}};L(os,"Z_AXIS",R.create(0,0,1));let Fs=os;const Pc=R.create(1,0,0),Sc=R.create(0,1,0);function Ec(o,l){const f=o[0],S=o[4],g=o[8],C=o[1],B=o[5],W=o[9],I=o[2],V=o[6],q=o[10],U=f+B+q;let Y,Z,O,z;if(U>0){const N=.5/Math.sqrt(U+1);Y=.25/N,Z=(V-W)*N,O=(g-I)*N,z=(C-S)*N}else if(f>B&&f>q){const N=2*Math.sqrt(1+f-B-q);Y=(V-W)/N,Z=.25*N,O=(S+C)/N,z=(g+I)/N}else if(B>q){const N=2*Math.sqrt(1+B-f-q);Y=(g-I)/N,Z=(S+C)/N,O=.25*N,z=(W+V)/N}else{const N=2*Math.sqrt(1+q-f-B);Y=(C-S)/N,Z=(g+I)/N,O=(W+V)/N,z=.25*N}return l[0]=Z,l[1]=O,l[2]=z,l[3]=Y,l}class Cc{constructor(l){L(this,"element");L(this,"enabled",!0);L(this,"center",R.create(0,0,0));L(this,"up",R.create(0,1,0));L(this,"rotation",[0,0]);L(this,"shift",[0,0]);L(this,"scroll",0);L(this,"speed",.1);L(this,"sensitivity",.08);L(this,"leftPressed",!1);L(this,"rightPressed",!1);L(this,"leftDragPans",!1);L(this,"lastX",0);L(this,"lastY",0);L(this,"touches",new Map);L(this,"lastTouchCenter",null);L(this,"lastPinchDistance",null);L(this,"lastTwoFingerAngle",null);L(this,"lastTouchCount",0);L(this,"roll",0);L(this,"_dir",R.create());L(this,"_right",R.create());L(this,"_upCam",R.create());L(this,"_scratch",R.create());L(this,"_qY",ht.create());L(this,"_qX",ht.create());L(this,"_qRot",ht.create());L(this,"_qLocal",ht.create());L(this,"_qWorldToCam",ht.create());L(this,"_scratchMat3",Pt.create());L(this,"bboxMin",null);L(this,"bboxMax",null);L(this,"anchor",R.create(0,0,0));L(this,"downCallback",l=>{var f,S,g,C;if(this.enabled){if(l.pointerType==="touch"){this.touches.set(l.pointerId,{x:l.pageX,y:l.pageY}),this.handleTouchGestures(),(S=(f=l.target)==null?void 0:f.setPointerCapture)==null||S.call(f,l.pointerId),l.preventDefault();return}l.isPrimary&&(l.button===0?(this.leftPressed=!0,this.leftDragPans=l.shiftKey):l.button===2?this.rightPressed=!0:this.rightPressed=!0,this.lastX=l.pageX,this.lastY=l.pageY,(C=(g=l.target)==null?void 0:g.setPointerCapture)==null||C.call(g,l.pointerId),l.preventDefault())}});L(this,"moveCallback",l=>{if(!this.enabled)return;if(l.pointerType==="touch"){if(!this.touches.has(l.pointerId))return;this.touches.set(l.pointerId,{x:l.pageX,y:l.pageY}),this.handleTouchGestures(),l.preventDefault();return}if(!l.isPrimary||!this.leftPressed&&!this.rightPressed)return;l.preventDefault();const f=l.pageX-this.lastX,S=l.pageY-this.lastY;this.lastX=l.pageX,this.lastY=l.pageY,this.leftPressed&&!this.leftDragPans?(this.rotation[0]+=f,this.rotation[1]-=S):(this.rightPressed||this.leftPressed&&this.leftDragPans)&&(this.shift[1]-=f,this.shift[0]+=S)});L(this,"upCallback",l=>{var f,S,g,C;if(l.pointerType==="touch"){this.touches.delete(l.pointerId),this.handleTouchGestures(),(S=(f=l.target)==null?void 0:f.releasePointerCapture)==null||S.call(f,l.pointerId),l.preventDefault();return}l.button===0?this.leftPressed=!1:l.button===2?this.rightPressed=!1:this.rightPressed=!1,(C=(g=l.target)==null?void 0:g.releasePointerCapture)==null||C.call(g,l.pointerId),l.preventDefault()});L(this,"wheelCallback",l=>{if(!this.enabled||(l.preventDefault(),this.rightPressed))return;let f=l.deltaY;l.deltaMode===1?f*=16:l.deltaMode===2&&(f*=100),this.scroll+=f*.01});this.camera=l,this.registerElement(l.canvas)}registerElement(l){this.element&&this.element!==l&&(this.element.removeEventListener("pointerdown",this.downCallback),this.element.removeEventListener("pointermove",this.moveCallback),this.element.removeEventListener("pointerup",this.upCallback),this.element.removeEventListener("wheel",this.wheelCallback)),this.element=l,this.element.addEventListener("pointerdown",this.downCallback),this.element.addEventListener("pointermove",this.moveCallback),this.element.addEventListener("pointerup",this.upCallback),this.element.addEventListener("wheel",this.wheelCallback,{passive:!1}),this.element.addEventListener("contextmenu",f=>f.preventDefault())}setCenter(l){R.copy(l,this.center),R.copy(l,this.anchor)}setOrbitPivot(l){R.set(l[0],l[1],l[2],this.center),this._reorientCameraToCenter()}setOrbitDepth(l){if(!isFinite(l)||l<.001)return;const f=this.camera.rotation;R.set(f[2],f[6],f[10],this._dir),R.normalize(this._dir,this._dir),R.scale(this._dir,l,this._dir),R.add(this.camera.position,this._dir,this.center)}_reorientCameraToCenter(){const l=this.camera;if(R.subtract(this.center,l.position,this._scratch),R.length(this._scratch)<1e-6)return;R.normalize(this._scratch,this._scratch),R.cross(this.up,this._scratch,this._right),R.length(this._right)<1e-6&&R.set(1,0,0,this._right),R.normalize(this._right,this._right),R.cross(this._scratch,this._right,this._upCam),R.normalize(this._upCam,this._upCam);const f=l.rotation;f[0]=this._right[0],f[1]=this._upCam[0],f[2]=this._scratch[0],f[3]=0,f[4]=this._right[1],f[5]=this._upCam[1],f[6]=this._scratch[1],f[7]=0,f[8]=this._right[2],f[9]=this._upCam[2],f[10]=this._scratch[2],f[11]=0,f[12]=0,f[13]=0,f[14]=0,f[15]=1,l.update_buffer()}setBbox(l,f){this.bboxMin=R.create(l[0],l[1],l[2]),this.bboxMax=R.create(f[0],f[1],f[2]);const S=(l[0]+f[0])*.5,g=(l[1]+f[1])*.5,C=(l[2]+f[2])*.5;R.set(S,g,C,this.center),R.set(S,g,C,this.anchor)}resetToCamera(){const l=this.camera.rotation;R.set(l[2],l[6],l[10],this._dir),R.normalize(this._dir,this._dir);let f=null;if(this.bboxMin&&this.bboxMax){let S=-1/0,g=1/0,C=!1;for(let B=0;B<3;B++){const W=this._dir[B],I=this.bboxMin[B]-this.camera.position[B],V=this.bboxMax[B]-this.camera.position[B];if(Math.abs(W)>1e-8){const q=I/W,U=V/W;S=Math.max(S,Math.min(q,U)),g=Math.min(g,Math.max(q,U))}else if(I>0||V<0){C=!0;break}}!C&&S<=g&&g>0&&(f=(Math.max(S,0)+g)*.5)}if(f===null||!isFinite(f)||f<.001){R.subtract(this.anchor,this.camera.position,this._scratch);const S=R.dot(this._scratch,this._dir);f=S>.001?S:R.length(this._scratch)}f=Math.max(.1,f),R.scale(this._dir,f,this._dir),R.add(this.camera.position,this._dir,this.center)}handleTouchGestures(){const l=this.touches.size;if(l!==this.lastTouchCount&&(this.lastTouchCenter=null,this.lastPinchDistance=null,this.lastTwoFingerAngle=null),this.lastTouchCount=l,l===1){const f=this.touches.values().next().value;if(this.lastTouchCenter){const S=f.x-this.lastTouchCenter[0],g=f.y-this.lastTouchCenter[1];this.rotation[0]+=S*.3,this.rotation[1]-=g*.3}this.lastTouchCenter=[f.x,f.y]}else if(l===2){const f=Array.from(this.touches.values()),S=(f[0].x+f[1].x)*.5,g=(f[0].y+f[1].y)*.5,C=f[1].x-f[0].x,B=f[1].y-f[0].y,W=Math.hypot(C,B),I=Math.atan2(B,C);if(this.lastTouchCenter!==null&&this.lastPinchDistance!==null&&this.lastTwoFingerAngle!==null){const V=S-this.lastTouchCenter[0],q=g-this.lastTouchCenter[1],U=Math.hypot(V,q),Y=Math.abs(W-this.lastPinchDistance);let Z=I-this.lastTwoFingerAngle;Z>Math.PI&&(Z-=2*Math.PI),Z<-Math.PI&&(Z+=2*Math.PI),U>.5&&(this.shift[1]-=V,this.shift[0]+=q),Y>1&&this.lastPinchDistance>.001&&(this.scroll+=-Math.log(W/this.lastPinchDistance)*10),Math.abs(Z)>.0087&&(this.roll+=-Z)}this.lastTouchCenter=[S,g],this.lastPinchDistance=W,this.lastTwoFingerAngle=I}}update(l){if(!this.enabled||Math.abs(this.rotation[0])<1e-4&&Math.abs(this.rotation[1])<1e-4&&Math.abs(this.shift[0])<1e-4&&Math.abs(this.shift[1])<1e-4&&Math.abs(this.scroll)<1e-4&&Math.abs(this.roll)<1e-4)return;const f=this.camera;{const z=f.rotation;this.up[0]=z[1],this.up[1]=z[5],this.up[2]=z[9],R.length(this.up)>1e-6?R.normalize(this.up,this.up):R.set(0,1,0,this.up)}let S=!1;if(Math.abs(this.roll)>1e-4){const z=f.rotation;R.set(z[2],z[6],z[10],this._scratch),R.normalize(this._scratch,this._scratch),ht.fromAxisAngle(this._scratch,this.roll,this._qRot),R.transformQuat(this.up,this._qRot,this.up),R.normalize(this.up,this.up),this.roll=0,S=!0}R.subtract(f.position,this.center,this._dir);let g=R.length(this._dir);g<1e-6&&(g=1e-6);const C=Math.exp(Math.log(g)+this.scroll*l*10*this.speed);R.scale(this._dir,C/g,this._dir),g=C;const B=f.rotation;this._right[0]=B[0],this._right[1]=B[4],this._right[2]=B[8],R.normalize(this._right,this._right),R.length(this._right)<1e-6&&R.set(1,0,0,this._right);const W=R.create(B[1],B[5],B[9]);R.normalize(W,W),R.length(W)<1e-6&&R.set(0,1,0,W);const I=l*this.speed*.1*g,V=this.shift[1]*I,q=-this.shift[0]*I;R.scale(this._right,V,this._scratch),R.add(this.center,this._scratch,this.center),R.add(f.position,this._scratch,f.position),R.scale(W,q,this._scratch),R.add(this.center,this._scratch,this.center),R.add(f.position,this._scratch,f.position);const U=this.rotation[0]*l*this.sensitivity,Y=this.rotation[1]*l*this.sensitivity;if(Math.abs(U)>1e-5||Math.abs(Y)>1e-5||S){const z=f.rotation;Ec(z,this._qWorldToCam),ht.fromAxisAngle(Pc,-Y,this._qX),ht.fromAxisAngle(Sc,-U,this._qY),ht.multiply(this._qX,this._qY,this._qLocal),ht.normalize(this._qLocal,this._qLocal),ht.multiply(this._qLocal,this._qWorldToCam,this._qWorldToCam),ht.normalize(this._qWorldToCam,this._qWorldToCam),Pt.fromQuat(this._qWorldToCam,this._scratchMat3),dt.fromMat3(this._scratchMat3,f.rotation);const N=f.rotation,$=N[2],j=N[6],M=N[10];f.position[0]=this.center[0]-$*g,f.position[1]=this.center[1]-j*g,f.position[2]=this.center[2]-M*g,this.up[0]=N[1],this.up[1]=N[5],this.up[2]=N[9],R.normalize(this.up,this.up)}else R.add(this.center,this._dir,f.position);f.update_buffer();const O=Math.pow(.8,l*60);this.rotation[0]*=O,Math.abs(this.rotation[0])<1e-4&&(this.rotation[0]=0),this.rotation[1]*=O,Math.abs(this.rotation[1])<1e-4&&(this.rotation[1]=0),this.shift[0]*=O,Math.abs(this.shift[0])<1e-4&&(this.shift[0]=0),this.shift[1]*=O,Math.abs(this.shift[1])<1e-4&&(this.shift[1]=0),this.scroll*=O,Math.abs(this.scroll)<1e-4&&(this.scroll=0)}}function yi(o){const l=R.create();for(const f of o)R.add(l,f,l);return R.scale(l,1/Math.max(o.length,1),l)}function Pi(o,l){const f=Pt.create();Pt.inverse(o,f);const S=R.create();return S[0]=f[0]*l[0]+f[4]*l[1]+f[8]*l[2],S[1]=f[1]*l[0]+f[5]*l[1]+f[9]*l[2],S[2]=f[2]*l[0]+f[6]*l[1]+f[10]*l[2],S}function kc(o){const l=o.slice(),f=[1,0,0,0,1,0,0,0,1],S=(I,V)=>l[I*3+V],g=(I,V,q)=>{l[I*3+V]=q},C=(I,V)=>f[I*3+V],B=(I,V,q)=>{f[I*3+V]=q};for(let I=0;I<30;I++){let V=0,q=1,U=Math.abs(S(0,1));if(Math.abs(S(0,2))>U&&(V=0,q=2,U=Math.abs(S(0,2))),Math.abs(S(1,2))>U&&(V=1,q=2,U=Math.abs(S(1,2))),U<1e-12)break;const Y=S(V,V),Z=S(q,q),O=S(V,q);let z;Math.abs(Y-Z)<1e-30?z=Math.PI/4*Math.sign(O):z=.5*Math.atan2(2*O,Y-Z);const N=Math.cos(z),$=Math.sin(z);for(let j=0;j<3;j++){const M=S(j,V),K=S(j,q);g(j,V,N*M+$*K),g(j,q,-$*M+N*K)}for(let j=0;j<3;j++){const M=S(V,j),K=S(q,j);g(V,j,N*M+$*K),g(q,j,-$*M+N*K)}for(let j=0;j<3;j++){const M=C(j,V),K=C(j,q);B(j,V,N*M+$*K),B(j,q,-$*M+N*K)}}const W=[];for(let I=0;I<3;I++)W.push({val:S(I,I),vec:R.create(C(0,I),C(1,I),C(2,I))});return W.sort((I,V)=>V.val-I.val),{vals:[W[0].val,W[1].val,W[2].val],vecs:[W[0].vec,W[1].vec,W[2].vec]}}function Bc(o,l){const f=yi(o);let S=0,g=0,C=0,B=0,W=0,I=0;for(const O of o){const z=O[0]-f[0],N=O[1]-f[1],$=O[2]-f[2];S+=z*z,g+=z*N,C+=z*$,B+=N*N,W+=N*$,I+=$*$}const V=[S,g,C,g,B,W,C,W,I],{vecs:q}=kc(V);let U=q[0],Y=q[1],Z=q[2];return R.dot(Z,l)<0&&(R.scale(Z,-1,Z),R.scale(Y,-1,Y)),{centroid:f,normal:Z,u:U,v:Y}}function Tc(o){let l=0,f=0,S=0,g=0,C=0,B=0,W=0,I=0,V=0;for(const[N,$]of o){const j=-2*N,M=-2*$,K=1,oe=-(N*N+$*$);l+=j*j,f+=j*M,S+=j*K,g+=M*M,C+=M*K,B+=K*K,W+=j*oe,I+=M*oe,V+=K*oe}const q=Pt.create(l,f,S,f,g,C,S,C,B),U=Pi(q,R.create(W,I,V)),Y=U[0],Z=U[1],O=U[2],z=Y*Y+Z*Z-O;return{center:[Y,Z],radius:Math.sqrt(Math.max(z,1e-12))}}function Mc(o,l){let f=0,S=0,g=0,C=0,B=0,W=0,I=0,V=0,q=0;for(let Y=0;Y<o.length;Y++){const Z=o[Y],O=R.normalize(l[Y],R.create()),z=1-O[0]*O[0],N=-O[0]*O[1],$=-O[0]*O[2],j=1-O[1]*O[1],M=-O[1]*O[2],K=1-O[2]*O[2];f+=z,S+=N,g+=$,C+=j,B+=M,W+=K,I+=z*Z[0]+N*Z[1]+$*Z[2],V+=N*Z[0]+j*Z[1]+M*Z[2],q+=$*Z[0]+M*Z[1]+K*Z[2]}const U=Pt.create(f,S,g,S,C,B,g,B,W);return Pi(U,R.create(I,V,q))}function Si(o,l={}){if(o.length===0)return null;const f=l.tiltDownDeg??8,S=l.radiusScale??1,g=l.alignFirst??!0,C=(l.direction??"ccw")==="ccw"?1:-1,B=o.map(ne=>R.clone(ne.position)),W=o.map(ne=>{const he=ne.rotation;return R.create(he[8],he[9],he[10])}),I=o.map(ne=>{const he=ne.rotation;return R.create(he[4],he[5],he[6])}),V=yi(I),q=R.normalize(R.scale(V,-1,R.create())),{centroid:U,normal:Y,u:Z,v:O}=Bc(B,q),z=B.map(ne=>{const he=R.sub(ne,U,R.create());return[R.dot(he,Z),R.dot(he,O)]}),{center:N,radius:$}=Tc(z),j=$*S,M=R.add(U,R.add(R.scale(Z,N[0],R.create()),R.scale(O,N[1],R.create()),R.create()),R.create()),K=Mc(B,W),oe=j*Math.tan(f*Math.PI/180),we=R.sub(K,R.scale(Y,oe,R.create()),R.create());let ue=0;if(g){const ne=R.sub(B[0],M,R.create());ue=Math.atan2(R.dot(ne,O),R.dot(ne,Z))/(2*Math.PI)%1,ue<0&&(ue+=1)}return console.log(`[orbit] fit ${o.length} train cams: radius=${j.toFixed(2)}, tilt=${f}°, normal=[${Y[0].toFixed(2)}, ${Y[1].toFixed(2)}, ${Y[2].toFixed(2)}], startPhase=${ue.toFixed(3)}`),{center:M,radius:j,normal:Y,u:Z,v:O,lookAt:we,startPhase:ue,direction:C}}function Ei(o,l){const f=(o.startPhase+l*o.direction)*2*Math.PI,S=Math.cos(f),g=Math.sin(f),C=R.add(o.center,R.add(R.scale(o.u,o.radius*S,R.create()),R.scale(o.v,o.radius*g,R.create()),R.create()),R.create()),B=R.normalize(R.sub(o.lookAt,C,R.create())),W=R.cross(B,o.normal,R.create());R.length(W)<1e-6&&R.copy(o.u,W),R.normalize(W,W);const I=R.cross(B,W,R.create());R.normalize(I,I);const V=dt.create();return V[0]=W[0],V[1]=I[0],V[2]=B[0],V[3]=0,V[4]=W[1],V[5]=I[1],V[6]=B[1],V[7]=0,V[8]=W[2],V[9]=I[2],V[10]=B[2],V[11]=0,V[12]=0,V[13]=0,V[14]=0,V[15]=1,{position:C,rotation:V,img_name:`orbit_${(l*1e3).toFixed(0)}`,id:0}}function Ac(o,l={}){const f=Si(o,l);if(!f)return[];const S=l.numViews??120;return Array.from({length:S},(g,C)=>({...Ei(f,C/S),img_name:`circle_${C.toString().padStart(4,"0")}`,id:C}))}function Dc(o){const l=new Uint8Array(o),f=Math.min(l.byteLength,65536),S=new TextDecoder("ascii").decode(l.subarray(0,f)),g=S.indexOf("end_header");if(g<0)throw new Error("mesh PLY: 'end_header' not found in first 64KB");const C=g+10+1,B=S.slice(0,g).split(/\r?\n/).map(ie=>ie.trim()).filter(Boolean);if(B[0]!=="ply")throw new Error("mesh PLY: missing 'ply' magic");const W=B.find(ie=>ie.startsWith("format"));if(!W||!W.includes("binary_little_endian"))throw new Error(`mesh PLY: only binary_little_endian supported (got: ${W??"<none>"})`);const I={char:1,uchar:1,int8:1,uint8:1,short:2,ushort:2,int16:2,uint16:2,int:4,uint:4,int32:4,uint32:4,float:4,float32:4,double:8,float64:8},V=[];let q=null;for(const ie of B)if(ie.startsWith("element ")){const[,_e,pe]=ie.split(/\s+/);q={name:_e,count:parseInt(pe,10),props:[],bytesPerRecord:0,hasList:!1},V.push(q)}else if(ie.startsWith("property ")&&q){const _e=ie.split(/\s+/);if(_e[1]==="list"){const pe=_e[2],be=_e[3],Me=_e[4];q.props.push({name:Me,type:be,isList:!0,listCountType:pe,listItemType:be}),q.hasList=!0}else{const pe=_e[1],be=_e[2];if(q.props.push({name:be,type:pe,isList:!1}),I[pe]===void 0)throw new Error(`mesh PLY: unsupported prop type '${pe}'`);q.bytesPerRecord+=I[pe]}}const U=V.find(ie=>ie.name==="vertex"),Y=V.find(ie=>ie.name==="face"||ie.name==="faces");if(!U)throw new Error("mesh PLY: missing 'element vertex'");if(!Y)throw new Error("mesh PLY: missing 'element face' (mesh has no triangles)");if(U.hasList)throw new Error("mesh PLY: unexpected list property on vertex element");const Z=U.props.find(ie=>ie.name==="x"),O=U.props.find(ie=>ie.name==="y"),z=U.props.find(ie=>ie.name==="z");if(!Z||!O||!z)throw new Error("mesh PLY: vertex must have x/y/z");let N=0;const $=new Map;for(const ie of U.props)$.set(ie.name,{off:N,type:ie.type}),N+=I[ie.type];const j=$.get("x"),M=$.get("y"),K=$.get("z");if(j.type!==M.type||j.type!==K.type)throw new Error(`mesh PLY: x/y/z must share a type (got ${j.type}/${M.type}/${K.type})`);const oe=j.type,we=oe==="double"||oe==="float64";if(!we&&oe!=="float"&&oe!=="float32")throw new Error(`mesh PLY: x/y/z must be float or double (got '${oe}')`);const ue=new Float32Array(U.count*3),ne=new DataView(o),he=C,te=U.bytesPerRecord;for(let ie=0;ie<U.count;ie++){const _e=he+ie*te;we?(ue[ie*3+0]=ne.getFloat64(_e+j.off,!0),ue[ie*3+1]=ne.getFloat64(_e+M.off,!0),ue[ie*3+2]=ne.getFloat64(_e+K.off,!0)):(ue[ie*3+0]=ne.getFloat32(_e+j.off,!0),ue[ie*3+1]=ne.getFloat32(_e+M.off,!0),ue[ie*3+2]=ne.getFloat32(_e+K.off,!0))}const Oe=he+U.count*te,Ge=Y.props.find(ie=>ie.isList);if(!Ge)throw new Error("mesh PLY: face element has no list property");const Le=I[Ge.listCountType],Te=I[Ge.listItemType];if(Le!==1)throw new Error(`mesh PLY: unsupported face list count size ${Le}`);let ge=Oe,Pe=0;for(let ie=0;ie<Y.count;ie++){const _e=ne.getUint8(ge);_e===3&&Pe++,ge+=1+_e*Te}const ae=new Uint32Array(Pe*3);ge=Oe;let se=0;for(let ie=0;ie<Y.count;ie++){const _e=ne.getUint8(ge);if(ge+=1,_e===3)for(let pe=0;pe<3;pe++){const be=ge+pe*Te;let Me;if(Te===4)Me=ne.getUint32(be,!0);else if(Te===2)Me=ne.getUint16(be,!0);else if(Te===1)Me=ne.getUint8(be);else throw new Error(`mesh PLY: unsupported face index size ${Te}`);ae[se++]=Me}ge+=_e*Te}return{positions:ue,indices:ae}}function Gc(o){const l=new DataView(o);if(o.byteLength<8)throw new Error("mesh .bin: too small (need at least 8-byte header)");const f=l.getUint32(0,!0),S=l.getUint32(4,!0),g=f*12,C=S*4;if(o.byteLength<8+g+C)throw new Error(`mesh .bin: truncated (expected ${8+g+C} B, got ${o.byteLength} B)`);const B=new Float32Array(o.slice(8,8+g)),W=new Uint32Array(o.slice(8+g,8+g+C));return{positions:B,indices:W}}function Ci(o,l){return(l??"").toLowerCase().endsWith(".ply")?Dc(o):Gc(o)}function Lc(o,l){const f=o.length/3,S=new Float32Array(f*3);for(let g=0;g<l.length;g+=3){const C=l[g]*3,B=l[g+1]*3,W=l[g+2]*3,I=o[C],V=o[C+1],q=o[C+2],U=o[B],Y=o[B+1],Z=o[B+2],O=o[W],z=o[W+1],N=o[W+2],$=U-I,j=Y-V,M=Z-q,K=O-I,oe=z-V,we=N-q,ue=j*we-M*oe,ne=M*K-$*we,he=$*oe-j*K;S[C]+=ue,S[C+1]+=ne,S[C+2]+=he,S[B]+=ue,S[B+1]+=ne,S[B+2]+=he,S[W]+=ue,S[W+1]+=ne,S[W+2]+=he}for(let g=0;g<f;g++){const C=g*3,B=S[C],W=S[C+1],I=S[C+2],V=Math.sqrt(B*B+W*W+I*I);if(V>1e-12){const q=1/V;S[C]=B*q,S[C+1]=W*q,S[C+2]=I*q}}return S}function ki(o,l){const f=o.createBuffer({label:"mesh-cull vertex buffer",size:l.positions.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(f,0,l.positions);const S=Lc(l.positions,l.indices),g=o.createBuffer({label:"mesh-cull normal buffer",size:S.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(g,0,S);const C=o.createBuffer({label:"mesh-cull index buffer",size:l.indices.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST});return o.queue.writeBuffer(C,0,l.indices),{vertexBuffer:f,normalBuffer:g,indexBuffer:C,numVerts:l.positions.length/3,numIndices:l.indices.length}}async function zc(o,l){try{const f=await fetch(l);if(!f.ok)return console.warn(`[mesh-cull] fetch failed for ${l}: ${f.status}`),null;const S=await f.arrayBuffer(),g=Ci(S,l);return console.log(`[mesh-cull] loaded ${l}: ${g.positions.length/3} verts, ${g.indices.length/3} tris`),ki(o,g)}catch(f){return console.warn(`[mesh-cull] load error for ${l}:`,f),null}}function Rc(o,l,f){try{const S=Ci(l,f);return console.log(`[mesh-cull] loaded from bundle: ${S.positions.length/3} verts, ${S.indices.length/3} tris`),ki(o,S)}catch(S){return console.warn("[mesh-cull] parse error:",S),null}}const Bi="BITYMI01",Ic=0,Uc=1,Vc=2,Oc=3,Fc=4,Nc=5,$c=6;function ts(o){const l=(o&32768)>>15,f=(o&31744)>>10,S=o&1023;return f===0?(l?-1:1)*Math.pow(2,-14)*(S/1024):f===31?S?NaN:l?-1/0:1/0:(l?-1:1)*Math.pow(2,f-15)*(1+S/1024)}function ui(o,l,f,S,g,C){const B=(o-f.width*.5)/S.focal[0],W=-((l-f.height*.5)/S.focal[1]),I=S.rotation,V=I[0],q=I[4],U=I[8],Y=I[1],Z=I[5],O=I[9],z=I[2],N=I[6],$=I[10];let j=B*V+W*Y+z,M=B*q+W*Z+N,K=B*U+W*O+$;const oe=Math.hypot(j,M,K)||1;j/=oe,M/=oe,K/=oe;const we=S.position[0],ue=S.position[1],ne=S.position[2],he=C*.005,te=he*he,Oe=new Uint32Array(g.buffer,g.byteOffset,g.length),Ge=g.length/8;let Le=1/0,Te=0,ge=0,Pe=0,ae=-1;for(let se=0;se<Ge;se++){const ie=se*8,_e=g[ie+0]-we,pe=g[ie+1]-ue,be=g[ie+2]-ne,Me=_e*j+pe*M+be*K;if(Me<=0)continue;const ye=_e-Me*j,Be=pe-Me*M,Ve=be-Me*K;if(ye*ye+Be*Be+Ve*Ve>=te||!(Oe[ie+7]>>>16&1))continue;const x=Oe[ie+5],i=Oe[ie+6],_=ts(x&65535),p=ts(x>>>16&65535),v=ts(i&65535),b=ts(i>>>16&65535),P=Math.hypot(_,p,v,b)||1,k=_/P,r=p/P,h=v/P,c=b/P,d=2*(r*c+k*h),a=2*(h*c-k*r),m=1-2*(r*r+h*h),y=j*d+M*a+K*m;let w;Math.abs(y)>1e-6?(w=(_e*d+pe*a+be*m)/y,(!isFinite(w)||w<=0)&&(w=Me)):w=Me,w<Le&&(Le=w,Te=we+w*j,ge=ue+w*M,Pe=ne+w*K,ae=se)}return ae<0?null:[Te,ge,Pe]}function Ti(o){const l=new Uint8Array(o),f=new TextDecoder().decode(l.subarray(0,8));if(f!==Bi)throw new Error(`Not a BITYMI bundle (bad magic '${f}')`);const S=new DataView(o),g=S.getUint32(8,!0),C=12,B=20;let W=null,I=null,V=null,q=null;for(let U=0;U<g;U++){const Y=C+U*B,Z=S.getUint32(Y+0,!0),O=Number(S.getBigUint64(Y+4,!0)),z=Number(S.getBigUint64(Y+12,!0)),N=l.slice(O,O+z).buffer;Z===Ic||Z===Uc||Z===Nc?W=N:Z===Vc?I=N:Z===Oc||Z===Fc?V=N:Z===$c&&(q=N)}if(W===null)throw new Error("BITYMI bundle has no point cloud chunk");return{pcBuffer:W,camerasBuffer:I,atlasBuffer:V,meshBuffer:q}}async function Wc(o,l){var B;const f=await fetch(o);if(!f.ok)throw new Error(`fetch failed: ${f.status} ${f.statusText}`);const S=(()=>{const W=f.headers.get("content-length");return W&&parseInt(W,10)||void 0})(),g=(B=f.body)==null?void 0:B.getReader();let C;if(!g)C=await f.arrayBuffer(),l&&l(C.byteLength,S,0);else{const W=[];let I=0,V=performance.now(),q=0;for(;;){const{done:Z,value:O}=await g.read();if(Z)break;W.push(O),I+=O.byteLength;const z=performance.now();if(z-V>=150&&l){const N=(I-q)/((z-V)/1e3);l(I,S,N),V=z,q=I}}const U=new Uint8Array(I);let Y=0;for(const Z of W)U.set(Z,Y),Y+=Z.byteLength;C=U.buffer,l&&l(I,S,0)}return C.byteLength>=8&&new TextDecoder().decode(new Uint8Array(C,0,8))===Bi?{bundle:Ti(C),rawPly:null}:{bundle:null,rawPly:C}}function qc(o){return new Promise(l=>{const f=document.createElement("input");f.type="file",f.accept=o,f.style.display="none",f.onchange=()=>{var S;return l(((S=f.files)==null?void 0:S[0])??null)},document.body.appendChild(f),f.click(),setTimeout(()=>document.body.removeChild(f),1e3)})}function jc(o,l,f){const S=document.getElementById("ui-panel-container"),g=document.getElementById("load-button"),C=document.getElementById("quick-links");g&&(g.onclick=async()=>{const q=await qc(".ply,.bitymi");if(q)if(S&&(S.style.display="none"),q.name.toLowerCase().endsWith(".bitymi")){const U=await q.arrayBuffer(),{pcBuffer:Y}=Ti(U),Z=new File([Y],q.name.replace(/\.bitymi$/i,".ply"),{type:"application/octet-stream"}),O=await Rs(Z,o);l(O)}else{const U=await Rs(q,o);l(U)}}),C&&(C.innerHTML="");const B=new URLSearchParams(window.location.search),W=B.get("bundle")??B.get("model_url"),I=B.get("camera_url"),V=B.get("mesh_url");W&&(S&&(S.style.display="none"),f(W,I,V))}async function Kc(o,l,f,S){const g=new Fs(o,f),C=new Cc(g);let B=!1;o.addEventListener("pointerdown",()=>{B=!0}),window.addEventListener("pointerup",()=>{B=!1});const W=typeof window<"u"&&window.parent!==window,I={pos:new Float32Array(3),rot:new Float32Array(16)};if(W){window.addEventListener("message",h=>{const c=h.data;if(!(!c||c.type!=="halloumi_sync_pose")&&!(!Array.isArray(c.position)||c.position.length!==3)&&!(!Array.isArray(c.rotation)||c.rotation.length!==16)){for(let d=0;d<3;d++)g.position[d]=c.position[d];for(let d=0;d<16;d++)g.rotation[d]=c.rotation[d];g.update_buffer(),C.resetToCamera();for(let d=0;d<3;d++)I.pos[d]=g.position[d];for(let d=0;d<16;d++)I.rot[d]=g.rotation[d]}});try{window.parent.postMessage({type:"halloumi_sync_ready"},"*")}catch{}}const V=()=>{if(!W)return;const h=g.position,c=g.rotation;let d=!1;for(let a=0;a<3;a++)if(Math.abs(h[a]-I.pos[a])>1e-6){d=!0;break}if(!d){for(let a=0;a<16;a++)if(Math.abs(c[a]-I.rot[a])>1e-6){d=!0;break}}if(d){for(let a=0;a<3;a++)I.pos[a]=h[a];for(let a=0;a<16;a++)I.rot[a]=c[a];try{window.parent.postMessage({type:"halloumi_camera_state",position:[h[0],h[1],h[2]],rotation:Array.from(c)},"*")}catch{}}},q="rgba8unorm";l.configure({device:f,format:q,alphaMode:"opaque",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING});let U=null;const Y=()=>{g.on_update_canvas(),U!==null&&es(o.width,o.height,f,U.render_settings_buffer)};new ResizeObserver(()=>{const h=Math.max(.25,b.render_scale),c=Math.max(1,Math.ceil(h*o.clientWidth)),d=Math.max(1,Math.ceil(h*o.clientHeight));o.width===c&&o.height===d||(o.width=c,o.height=d,Y())}).observe(o);let O=0,z=0;const N=()=>{(o.width!==O||o.height!==z)&&(O=o.width,z=o.height,Y())},$=new URLSearchParams(window.location.search);let M=$.get("animation")==="1";C.enabled=!M;const K=$.get("camera_url"),oe=$.get("mesh_cull"),we=oe==="1"||oe==="true",ue=$.get("mesh_normal_margin")??$.get("mesh_margin"),ne=ue!==null?Number(ue):NaN,he=Number.isFinite(ne)?ne:0,te=$.get("mesh_debug"),Oe=te==="1"||te==="true",Ge=$.get("bfc"),Le=Ge==="1"||Ge==="true",Te=$.get("bfc_cos"),ge=Te!==null?Number(Te):NaN,Pe=Number.isFinite(ge)?ge:2,ae=$.get("mesh_sample_mode"),se=ae!==null?parseInt(ae,10):NaN,ie=Number.isFinite(se)&&se>=0&&se<=7?se:1,_e=$.get("mesh_silhouette"),pe=_e==="1"||_e==="true",be=$.get("mesh_invert_depth"),Me=be==="1"||be==="true",ye=$.get("ht"),Be=ye==="3"?3:ye==="2"?2:ye==="1"||ye==="true"?1:0,Ve=$.get("ht_k"),A=Ve!==null?Number(Ve):NaN,H=Number.isFinite(A)?A:150,x=$.get("wsr"),i=x==="1"||x==="true"||x==="2"||x==="3",_=x==="2",p=x==="3",v=Math.max(1,window.devicePixelRatio||1),b={gaussian_scaling:1,sh_bias:.5,animate:M,animateMode:"presets",bg:{r:0,g:0,b:0,a:0},atlas_enabled:!1,bfc:Le,bfc_cos:Pe,ht_mode:Be,ht_k:H,wsr:i,wsr_gate:_,wsr_dgate:p,mesh_cull:we,mesh_margin:he,mesh_debug:Oe,mesh_sample_mode:ie,mesh_silhouette:pe,mesh_invert_depth:Me,render_scale:1},P=new jl.Pane({title:"Config",expanded:!0});P.addInput(b,"animate",{label:"Animate"}).on("change",h=>{const c=M;M=h.value,C.enabled=!h.value,!c&&M&&k.value&&k.value.onAnimateStart(),c&&!M&&k.value&&k.value.onAnimateStop()}),P.addInput(b,"animateMode",{label:"Anim path",options:{"Training views":"presets","Circle orbit":"circle"}});const k={value:null};jc(f,h=>r(h,[],null,null),async(h,c,d)=>{let a=c??K,m,y=null,w=null;const D=h.toLowerCase();if(D.endsWith(".bitymi")||D.includes(".bitymi?")){$s("downloading bundle ...");try{const{bundle:F}=await Wc(h,(J,X,fe)=>{const me=J/1048576,de=X?X/(1024*1024):void 0,ve=fe/(1024*1024),Ae=X?Math.min(99,Math.floor(J/X*100)):void 0,xe=de?`total ${de.toFixed(1)} MB`:"total -- MB",$e=de&&Ae!==void 0?`${me.toFixed(1)} MB downloaded (${Ae}%)`:`${me.toFixed(1)} MB downloaded`,je=`${ve.toFixed(2)} MB/s`;Vt(`downloading bundle ...
${xe}, ${$e}
${je}`)});if(!F)throw new Error("Expected a .bitymi bundle");Vt("parsing PLY ...");const re=new File([F.pcBuffer],"bundle.ply",{type:"application/octet-stream"});if(m=await Rs(re,f),!a&&F.camerasBuffer&&(a=URL.createObjectURL(new Blob([F.camerasBuffer],{type:"application/json"}))),F.atlasBuffer){const J=F.atlasBuffer.byteLength/1048576;Vt(`uploading atlas ...
${J.toFixed(1)} MB BC7`);try{const X=Fl(F.atlasBuffer);y=$l(f,X,!0)}catch(X){console.warn("[atlas] failed to parse/upload atlas:",X)}}F.meshBuffer&&!d&&(Vt("uploading mesh ..."),w=Rc(f,F.meshBuffer,"bundle.mesh"))}catch(F){throw Ln(),F}}else m=await Wl(h,f);d&&(Vt("loading mesh ..."),w=await zc(f,d));const T=a?await gc(a):[];T.length>0&&g.set_preset(T[0]),r(m,T,y,w)});function r(h,c=[],d=null,a=null){const m=[(h.bbox.min[0]+h.bbox.max[0])/2,(h.bbox.min[1]+h.bbox.max[1])/2,(h.bbox.min[2]+h.bbox.max[2])/2];C.setBbox(h.bbox.min,h.bbox.max);const y=.5*Math.sqrt((h.bbox.max[0]-h.bbox.min[0])**2+(h.bbox.max[1]-h.bbox.min[1])**2+(h.bbox.max[2]-h.bbox.min[2])**2);function w(Q,ce){const le=ui(Q,ce,o,g,h.surfel_data,y);le&&(C.setOrbitPivot(le),console.log(`[pick] orbit pivot → (${le[0].toFixed(3)}, ${le[1].toFixed(3)}, ${le[2].toFixed(3)})`))}function D(){const Q=o.width*.5,ce=o.height*.5,le=ui(Q,ce,o,g,h.surfel_data,y);if(!le)return;const Re=g.rotation,Ue=Re[2],Se=Re[6],ke=Re[10],qe=le[0]-g.position[0],Qe=le[1]-g.position[1],tt=le[2]-g.position[2],gt=qe*Ue+Qe*Se+tt*ke;gt>0&&C.setOrbitDepth(gt)}if(c.length===0){const Q=h.bbox.max[0]-h.bbox.min[0],ce=h.bbox.max[1]-h.bbox.min[1],le=h.bbox.max[2]-h.bbox.min[2],Ue=.5*Math.sqrt(Q*Q+ce*ce+le*le)*.5;R.set(m[0]-Ue,m[1]-Ue,m[2]-Ue,g.position);const Se=R.create(Ue,Ue,Ue);R.normalize(Se,Se);const ke=R.create(0,1,0),qe=R.create();R.cross(ke,Se,qe),R.normalize(qe,qe);const Qe=R.create();R.cross(Se,qe,Qe);const tt=Pt.create(qe[0],Qe[0],Se[0],qe[1],Qe[1],Se[1],qe[2],Qe[2],Se[2]);dt.fromMat3(tt,g.rotation),g.update_buffer()}C.setCenter(R.create(h.centroid[0],h.centroid[1],h.centroid[2]));const T=new mc(h,f,q,g.uniform_buffer,S,d,a);U=T,es(o.width,o.height,f,T.render_settings_buffer),b.atlas_enabled=d!==null,a===null&&(b.mesh_cull=!1),T.setMeshCullEnabled(b.mesh_cull),T.setMeshMargin(b.mesh_margin),a===null&&(b.mesh_debug=!1),T.setMeshOverlayEnabled(b.mesh_debug);{const Q=h.surfel_data,ce=Q.length/8;let le=0,Re=0,Ue=0;for(let ke=0;ke<ce;ke++)le+=Q[ke*8],Re+=Q[ke*8+1],Ue+=Q[ke*8+2];const Se=ce>0?[le/ce,Re/ce,Ue/ce]:[0,0,0];T.setBfcParams(b.bfc_cos,Se),rn({bfc:b.bfc},f,T.render_settings_buffer),console.log(`[bfc] flag=${b.bfc} cos=${b.bfc_cos} centroid=(${Se[0].toFixed(3)}, ${Se[1].toFixed(3)}, ${Se[2].toFixed(3)})`)}T.htEnabled=b.ht_mode>0,T.htSortedTail=b.ht_mode===2,T.htOccTail=b.ht_mode===3,T.setHtTailK(b.ht_k),b.ht_mode>0&&console.log(`[ht] hybrid transparency ON (mode ${b.ht_mode}: ${b.ht_mode===2?"exact core + SORTED tail":b.ht_mode===3?"K=1 core + OCC tail (learned occlusion)":"K=1 core + OIT tail"}, tail_k=${b.ht_k})`),T.wsrEnabled=b.wsr,T.wsrGateEnabled=b.wsr_gate,T.wsrDGateEnabled=b.wsr_dgate,b.wsr&&console.log("[wsr] sort-free weighted-sum mode requested — active only on probe_mode-2 bundles (stride-7 probes with learned occlusion)"),rn({meshSampleMode:b.mesh_sample_mode,meshSilhouetteCull:b.mesh_silhouette,meshInvertDepth:b.mesh_invert_depth},f,T.render_settings_buffer),console.log(`[mesh-cull] ${a!==null?"mesh loaded":"no mesh"} · toggle=${b.mesh_cull} · margin=${b.mesh_margin}m · debug=${b.mesh_debug} · sample_mode=${b.mesh_sample_mode} · silhouette=${b.mesh_silhouette} · invert=${b.mesh_invert_depth}`);let F=!1;const re=(()=>{if(d!==null)return`${d.meta.format===2?"BC7":d.meta.format===3?"ASTC 4×4":d.meta.format===7?"BC7 codebook gather (typeD)":`format=${d.meta.format}`} ${d.meta.width}×${d.meta.height}, ${d.meta.n_layers} layers`;const Q=f.features.has("texture-compression-bc"),ce=f.features.has("texture-compression-astc");return`no atlas in bundle (GPU supports: ${(Q?["BC7"]:[]).concat(ce?["ASTC"]:[]).join("+")||"none"})`})();console.log("[atlas]",re),ai(h.sh_bias,f,T.render_settings_buffer),oi(b.gaussian_scaling,f,T.render_settings_buffer),b.sh_bias=h.sh_bias;const J=h.num_points.toLocaleString(),X={stats:`${J} surfels · -- fps`};P.addMonitor(X,"stats",{label:"Stats",interval:200}),P.addMonitor({atlas:re},"atlas",{label:"Atlas"});const fe={stages:"— ms · awaiting timestamp data"};P.addMonitor(fe,"stages",{label:"Stages",interval:500});let me=null;if(T.timeQueryEnabled){me=document.createElement("canvas"),me.width=280,me.height=24,me.style.cssText="position:fixed;right:8px;bottom:8px;width:280px;height:24px;background:#0008;border:1px solid #2a2a2a;border-radius:4px;font-family:ui-monospace,Menlo,monospace;pointer-events:none;z-index:1000;",document.body.appendChild(me);const Q=le=>{const Re=me.getContext("2d");if(!Re)return;const Ue=me.width,Se=me.height;if(Re.clearRect(0,0,Ue,Se),!le||le.total<=0){Re.fillStyle="#888",Re.font="11px ui-monospace,Menlo,monospace",Re.fillText("awaiting GPU timestamps…",8,16);return}const ke=[{label:"cull",ms:le.cull,color:"#3aa3ff"},{label:"pre",ms:le.preprocess,color:"#3ad27a"},{label:"sort",ms:le.sort,color:"#ffa53a"},{label:"render",ms:le.render,color:"#ff5566"}],qe=Math.max(.001,ke.reduce((tt,gt)=>tt+gt.ms,0));let Qe=0;Re.font="10px ui-monospace,Menlo,monospace",Re.textBaseline="middle";for(const tt of ke){const gt=tt.ms/qe*Ue;Re.fillStyle=tt.color,Re.fillRect(Qe,0,gt,Se),gt>=38&&(Re.fillStyle="#000c",Re.fillText(`${tt.label} ${tt.ms.toFixed(1)}`,Qe+4,Se/2)),Qe+=gt}};setInterval(()=>{F||T.readPerfMetrics({silent:!0}).then(()=>{const le=T.lastStageBreakdownMs;Q(le),le&&(fe.stages=`${le.total.toFixed(1)} ms · cull ${le.cull.toFixed(1)} / pre ${le.preprocess.toFixed(1)} / sort ${le.sort.toFixed(1)} / render ${le.render.toFixed(1)}`)}).catch(le=>console.warn("[perf] readPerfMetrics failed:",le))},500)}const de=.4,ve=3,Ae=.3;let xe=null,$e=0,je=0;const Ke=ht.create(),Ye=Pt.create();let ze=c.length>0?0:-1;const nt={view:c.length>0?`${ze+1} / ${c.length}: ${c[ze].img_name??ze}`:"— no presets —"};P.addMonitor(nt,"view",{label:"View",interval:100});function it(Q){const ce=Pt.create(Q[0],Q[1],Q[2],Q[4],Q[5],Q[6],Q[8],Q[9],Q[10]);return ht.fromMat(ce)}function ot(Q,ce){xe={fromPos:R.clone(g.position),toPos:R.clone(Q.position),fromQuat:ht.normalize(it(g.rotation)),toQuat:ht.normalize(it(Q.rotation)),target:Q,t:0,duration:Math.max(.01,ce)}}const Ze=(Q,ce=!0)=>{if(c.length===0)return;ze=(Q%c.length+c.length)%c.length;const le=c[ze];ce?ot(le,de):(g.set_preset(le),C.resetToCamera(),D()),nt.view=`${ze+1} / ${c.length}: ${c[ze].img_name??ze}`};c.length>0&&(P.addButton({title:"◀ Prev view"}).on("click",()=>Ze(ze-1)),P.addButton({title:"Next view ▶"}).on("click",()=>Ze(ze+1)));const et=c.length>0?Si(c,{tiltDownDeg:15,alignFirst:!0}):null,st=et?Ac(c,{numViews:120,tiltDownDeg:15,alignFirst:!0}):[];let Fe=0;const at=12;k.value={onAnimateStart:()=>{Fe=0},onAnimateStop:()=>{C.resetToCamera(),D()}},P.addInput(b,"render_scale",{label:"Render scale",min:.25,max:v,step:.25}).on("change",Q=>{const ce=Math.max(.25,Q.value),le=Math.max(1,Math.ceil(ce*o.clientWidth)),Re=Math.max(1,Math.ceil(ce*o.clientHeight));(o.width!==le||o.height!==Re)&&(o.width=le,o.height=Re,Y())}),P.addInput(b,"gaussian_scaling",{label:"Surfel scale",min:0,max:1}).on("change",Q=>oi(Q.value,f,T.render_settings_buffer)),P.addInput(b,"sh_bias",{label:"SH bias",min:0,max:2,step:.01}).on("change",Q=>ai(Q.value,f,T.render_settings_buffer)),P.addInput(b,"bg",{label:"Background",color:{type:"float",alpha:!0}}).on("change",Q=>{T.bgColor=[Q.value.r,Q.value.g,Q.value.b,Q.value.a]});const Xe=d?d.meta.format===3?"Atlas (ASTC)":"Atlas (BC7)":"Atlas";P.addInput(b,"atlas_enabled",{label:Xe}).on("change",Q=>T.setAtlasEnabled(Q.value)),P.addInput(b,"bfc",{label:"Backface"}).on("change",Q=>rn({bfc:Q.value},f,T.render_settings_buffer)),P.addInput(b,"ht_mode",{label:"HybridT",options:{"off (sorted)":0,"OIT tail (no sort)":1,"sorted tail":2,"occ tail (learned)":3}}).on("change",Q=>{T.htEnabled=Q.value>0,T.htSortedTail=Q.value===2,T.htOccTail=Q.value===3}),P.addInput(b,"ht_k",{label:"HybridT tail k",min:0,max:2e3,step:10}).on("change",Q=>T.setHtTailK(Q.value)),P.addInput(b,"wsr",{label:"WSR (sort-free)"}).on("change",Q=>{T.wsrEnabled=Q.value}),P.addInput(b,"wsr_gate",{label:"WSR sat-gate"}).on("change",Q=>{T.wsrGateEnabled=Q.value}),P.addInput(b,"wsr_dgate",{label:"WSR D-gate"}).on("change",Q=>{T.wsrDGateEnabled=Q.value});const ut=P.addInput(b,"mesh_cull",{label:"Mesh cull"});ut.on("change",Q=>T.setMeshCullEnabled(Q.value)),T.hasMesh||(ut.disabled=!0);const rt=P.addInput(b,"mesh_margin",{label:"Mesh normal margin (m)",min:-.5,max:.5,step:.005});rt.on("change",Q=>T.setMeshMargin(Q.value)),T.hasMesh||(rt.disabled=!0);const Mt=P.addInput(b,"mesh_debug",{label:"Mesh debug"});Mt.on("change",Q=>T.setMeshOverlayEnabled(Q.value)),T.hasMesh||(Mt.disabled=!0);const wt=P.addInput(b,"mesh_sample_mode",{label:"MeshCull pixel formula",options:{"0: (ndc+1)/2 baseline":0,"1: y-flipped":1,"2: x-flipped":2,"3: both flipped":3,"4: swap axes":4,"5: swap + y-flip":5,"6: swap + x-flip":6,"7: swap + both flip":7}});wt.on("change",Q=>rn({meshSampleMode:Q.value},f,T.render_settings_buffer)),T.hasMesh||(wt.disabled=!0);const St=P.addInput(b,"mesh_silhouette",{label:"Silhouette cull"});St.on("change",Q=>rn({meshSilhouetteCull:Q.value},f,T.render_settings_buffer)),T.hasMesh||(St.disabled=!0);const Et=P.addInput(b,"mesh_invert_depth",{label:"Invert depth cull"});Et.on("change",Q=>rn({meshInvertDepth:Q.value},f,T.render_settings_buffer)),T.hasMesh||(Et.disabled=!0),P.addButton({title:"🎯 Reset camera"}).on("click",()=>{if(c.length>0)g.set_preset(c[0]);else{const Q=h.bbox.max[0]-h.bbox.min[0],ce=h.bbox.max[1]-h.bbox.min[1],le=h.bbox.max[2]-h.bbox.min[2],Ue=.5*Math.sqrt(Q*Q+ce*ce+le*le)*.5;R.set(m[0]-Ue,m[1]-Ue,m[2]-Ue,g.position);const Se=R.create(Ue,Ue,Ue);R.normalize(Se,Se);const ke=R.create();R.cross(R.create(0,1,0),Se,ke),R.normalize(ke,ke);const qe=R.create();R.cross(Se,ke,qe);const Qe=Pt.create(ke[0],qe[0],Se[0],ke[1],qe[1],Se[1],ke[2],qe[2],Se[2]);dt.fromMat3(Qe,g.rotation),g.update_buffer()}C.resetToCamera(),D()});const Ct={result:"— click Benchmark —"};P.addMonitor(Ct,"result",{label:"Bench",interval:500,multiline:!0,lineCount:4});const Dt={bicycle:{w:1237,h:822,fovY:2*Math.atan(3286/(2*4627.3))},flowers:{w:1256,h:828,fovY:2*Math.atan(3312/(2*4285.5))},garden:{w:1297,h:840,fovY:2*Math.atan(3361/(2*3852.4))},stump:{w:1245,h:825,fovY:2*Math.atan(3300/(2*4528.1))},treehill:{w:1267,h:832,fovY:2*Math.atan(3326/(2*4205.6))},bonsai:{w:1559,h:1039,fovY:2*Math.atan(2078/(2*3222.7))},counter:{w:1558,h:1038,fovY:2*Math.atan(2076/(2*3192.7))},kitchen:{w:1558,h:1039,fovY:2*Math.atan(2078/(2*3240.8))},room:{w:1557,h:1038,fovY:2*Math.atan(2075/(2*3174))}};function Ot(){const ce=((new URLSearchParams(window.location.search).get("bundle")??"").split("/").pop()??"").toLowerCase();for(const le of Object.keys(Dt))if(ce.startsWith(le))return le;return null}const kt=document.createElement("div");kt.id="bench-overlay",kt.style.cssText=["position:fixed","top:50%","left:50%","transform:translate(-50%,-50%)","background:rgba(0,0,0,0.9)","color:#fff","padding:24px 32px","border-radius:8px","font-family:monospace","font-size:14px","min-width:340px","text-align:left","box-shadow:0 4px 24px rgba(0,0,0,0.6)","display:none","z-index:9999","pointer-events:none"].join(";"),document.body.appendChild(kt);function Gt(Q,ce,le){const Re=Math.floor(ce/Math.max(1,le)*100),Ue=32,Se=Math.floor(ce/Math.max(1,le)*Ue),ke="█".repeat(Se)+"░".repeat(Ue-Se);kt.innerHTML=`<div style="margin-bottom:10px;font-weight:bold">📊 ${Q}</div><div>[${ke}] ${Re}%</div><div style="margin-top:6px;font-size:11px;opacity:0.7">${ce} / ${le} frames · offscreen · pipelined · no vsync</div>`,kt.style.display="block"}function ln(){kt.style.display="none"}async function cn(Q=10,ce=200){if(F)return;if(c.length===0){Ct.result="no cameras to benchmark";return}F=!0;const le=M,Re=b.animate,Ue=new Float32Array(g.position),Se=new Float32Array(g.rotation);M=!1,b.animate=!1,P.refresh(),xe=null,C.enabled=!1;const ke=Ot(),qe=ke?Dt[ke]:null,Qe=(qe==null?void 0:qe.w)??o.width,tt=(qe==null?void 0:qe.h)??o.height,gt=(qe==null?void 0:qe.fovY)??g.getFov(),Vn=ke?`${ke} · ${Qe>=4e3/4+500?"images_4":"images_2"}`:"custom",yn=o.width,On=o.height,cs=g.getFov();o.width=Qe,o.height=tt,g.setFov(gt),es(Qe,tt,f,T.render_settings_buffer);const Fn=f.createTexture({size:[Qe,tt,1],format:q,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING}),us=Fn.createView(),Nn=()=>{const ft=f.createCommandEncoder();T.frame(ft,us,!1),f.queue.submit([ft.finish()])},$n=()=>new Promise(ft=>setTimeout(ft,0)),ds=20,Wn=async(ft,Bt)=>{let _t=0,mt=0;for(Gt(Bt,0,ft),await $n();mt<ft;){const At=Math.min(ds,ft-mt),Yt=performance.now();for(let Zt=0;Zt<At;Zt++)g.set_preset(c[(mt+Zt)%c.length]),Nn();await f.queue.onSubmittedWorkDone();const fn=performance.now();_t+=fn-Yt,mt+=At,Gt(Bt,mt,ft),await $n()}return _t};try{await Wn(Q,"Warming up");const Bt=await Wn(ce,"Benchmarking")/ce,_t=1e3/Bt,mt=h.num_points??h.surfel_data.length/8,At=(gt*180/Math.PI).toFixed(1),Yt=`${_t.toFixed(1)} FPS  (${Bt.toFixed(2)} ms/frame)
${Qe}×${tt} · fovY ${At}° · ${Vn}
${mt.toLocaleString()} surfels · ${Q}w+${ce}b · pipelined`;Ct.result=Yt,console.log("[bench]",Yt.replace(/\n/g,"  |  "))}catch(ft){console.error("[bench] failed:",ft),Ct.result=`bench failed: ${ft}`}finally{ln(),Fn.destroy(),o.width=yn,o.height=On,g.setFov(cs),es(yn,On,f,T.render_settings_buffer),g.position.set(Ue),g.rotation.set(Se),g.update_buffer(),C.enabled=!le,M=le,b.animate=Re,P.refresh(),F=!1}}P.addButton({title:"📊 Benchmark"}).on("click",()=>cn()),document.addEventListener("keydown",Q=>{const ce=Q.key;if(ce>="0"&&ce<="9"&&c.length>0){const le=parseInt(ce);le<c.length&&Ze(le)}else ce==="ArrowLeft"||ce==="PageUp"?(Ze(ze-1),Q.preventDefault()):ce==="ArrowRight"||ce==="PageDown"?(Ze(ze+1),Q.preventDefault()):(ce==="d"||ce==="D")&&T.debugReadSortedIndices(30).catch(le=>console.error("[DEBUG] readback failed:",le))});function He(Q,ce){const le=o.getBoundingClientRect(),Re=window.devicePixelRatio||1;return[(Q-le.left)*Re,(ce-le.top)*Re]}o.addEventListener("dblclick",Q=>{const[ce,le]=He(Q.clientX,Q.clientY);w(ce,le)});let un=0,In=0,dn=0;o.addEventListener("pointerdown",Q=>{if(Q.pointerType!=="touch")return;const ce=performance.now(),le=ce-un,Re=Q.clientX-In,Ue=Q.clientY-dn;if(le>0&&le<300&&Re*Re+Ue*Ue<40*40){const[Se,ke]=He(Q.clientX,Q.clientY);w(Se,ke),un=0}else un=ce,In=Q.clientX,dn=Q.clientY});function Un(){return B}let Lt=performance.now(),pn=60,xn=Promise.resolve(),hn=0;async function Ht(){var Ue;const Q=performance.now(),ce=Math.min((Q-Lt)/1e3,.1);if(Lt=Q,ce>0){const Se=((Ue=T.lastStageBreakdownMs)==null?void 0:Ue.total)??0,ke=Se>.5?1e3/Se:1/ce;pn=pn*.9+ke*.1,X.stats=`${J} surfels · ${Math.round(pn)} fps`}if(F){requestAnimationFrame(Ht);return}if(Un()&&(xe||M)&&(xe=null,C.resetToCamera(),D(),M&&(M=!1,b.animate=!1,P.refresh())),M&&b.animateMode==="circle"&&et){Fe+=ce/at,Fe>=1&&(Fe-=1);const Se=Ei(et,Fe);g.set_preset(Se),C.update(ce);const ke=f.createCommandEncoder();T.frame(ke,l.getCurrentTexture().createView()),f.queue.submit([ke.finish()]),hn++,hn===2&&Ln(),requestAnimationFrame(Ht);return}if(xe){xe.t+=ce/xe.duration;const Se=Math.min(1,xe.t),ke=Se*Se*(3-2*Se);R.lerp(xe.fromPos,xe.toPos,ke,g.position),ht.slerp(xe.fromQuat,xe.toQuat,ke,Ke),Pt.fromQuat(Ke,Ye),dt.fromMat3(Ye,g.rotation),g.update_buffer(),xe.t>=1&&(g.set_preset(xe.target),xe=null,M?c.length>0&&($e=Ae):(C.resetToCamera(),D()))}else if(M&&!Un()){const Se=b.animateMode==="circle"&&st.length>0,ke=Se?st:c;if(ke.length!==0){if($e-=ce,$e<=0){const Qe=((Se?je:ze)+1)%ke.length;Se?je=Qe:ze=Qe;const tt=Se?ve/8:ve;ot(ke[Qe],tt),Se||(nt.view=`${ze+1} / ${c.length}: ${c[ze].img_name??ze}`)}}}C.update(ce),V(),N(),await xn;const le=f.createCommandEncoder(),Re=l.getCurrentTexture().createView();T.frame(le,Re),f.queue.submit([le.finish()]),xn=f.queue.onSubmittedWorkDone(),hn++,hn===2&&Ln(),requestAnimationFrame(Ht)}requestAnimationFrame(Ht)}}(function(){let l="dev";for(const S of Array.from(document.querySelectorAll('script[type="module"]'))){const C=S.src.match(/\/assets\/index-([0-9a-z]+)\.js$/i);if(C){l=C[1];break}}const f=document.createElement("div");f.textContent="v "+l,f.title="viewer build hash (Vite content hash of index-*.js)",Object.assign(f.style,{position:"fixed",right:"6px",bottom:"6px",font:"10px ui-monospace, SFMono-Regular, Menlo, monospace",color:"rgba(255,255,255,0.55)",background:"rgba(0,0,0,0.35)",padding:"2px 6px",borderRadius:"4px",pointerEvents:"none",zIndex:"9999",userSelect:"all"}),document.body.appendChild(f)})();(async()=>{if(navigator.gpu===void 0){const C=document.querySelector("#title");C.innerText="WebGPU is not supported in this browser.";return}const o=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(o===null){const C=document.querySelector("#title");C.innerText="No adapter is available for WebGPU.";return}const l=[];o.features.has("timestamp-query")&&l.push("timestamp-query"),o.features.has("texture-compression-bc")&&l.push("texture-compression-bc"),o.features.has("texture-compression-astc")&&l.push("texture-compression-astc"),console.log("[adapter]",o.info??"(unknown)"),console.log("[adapter] features:",Array.from(o.features)),console.log("[adapter] BC7:",o.features.has("texture-compression-bc")),console.log("[adapter] ASTC:",o.features.has("texture-compression-astc")),console.log("[adapter] limits:",{maxStorageBuffersPerShaderStage:o.limits.maxStorageBuffersPerShaderStage,maxComputeWorkgroupStorageSize:o.limits.maxComputeWorkgroupStorageSize,maxBufferSize:o.limits.maxBufferSize,maxStorageBufferBindingSize:o.limits.maxStorageBufferBindingSize,maxTextureDimension2D:o.limits.maxTextureDimension2D});const f=await o.requestDevice({requiredFeatures:l,requiredLimits:{maxStorageBuffersPerShaderStage:10,maxComputeWorkgroupStorageSize:o.limits.maxComputeWorkgroupStorageSize,maxBufferSize:o.limits.maxBufferSize,maxStorageBufferBindingSize:o.limits.maxStorageBufferBindingSize}}),S=document.querySelector("#webgpu-canvas");Rl(S!==null);const g=S.getContext("webgpu");Kc(S,g,f,l)})();
