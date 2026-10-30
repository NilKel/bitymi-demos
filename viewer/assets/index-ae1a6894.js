var Tc=Object.defineProperty;var Cc=(i,s,o)=>s in i?Tc(i,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):i[s]=o;var B=(i,s,o)=>(Cc(i,typeof s!="symbol"?s+"":s,o),o);(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))p(c);new MutationObserver(c=>{for(const m of c)if(m.type==="childList")for(const E of m.addedNodes)E.tagName==="LINK"&&E.rel==="modulepreload"&&p(E)}).observe(document,{childList:!0,subtree:!0});function o(c){const m={};return c.integrity&&(m.integrity=c.integrity),c.referrerPolicy&&(m.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?m.credentials="include":c.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function p(c){if(c.ep)return;c.ep=!0;const m=o(c);fetch(c.href,m)}})();function Bc(i,s){return class extends i{constructor(...o){super(...o),s(this)}}}const Mc=Bc(Array,i=>i.fill(0));let $e=1e-6;function Ac(i){function s(C=0,A=0){const w=new i(2);return C!==void 0&&(w[0]=C,A!==void 0&&(w[1]=A)),w}const o=s;function p(C,A,w){const a=w??new i(2);return a[0]=C,a[1]=A,a}function c(C,A){const w=A??new i(2);return w[0]=Math.ceil(C[0]),w[1]=Math.ceil(C[1]),w}function m(C,A){const w=A??new i(2);return w[0]=Math.floor(C[0]),w[1]=Math.floor(C[1]),w}function E(C,A){const w=A??new i(2);return w[0]=Math.round(C[0]),w[1]=Math.round(C[1]),w}function P(C,A=0,w=1,a){const v=a??new i(2);return v[0]=Math.min(w,Math.max(A,C[0])),v[1]=Math.min(w,Math.max(A,C[1])),v}function k(C,A,w){const a=w??new i(2);return a[0]=C[0]+A[0],a[1]=C[1]+A[1],a}function R(C,A,w,a){const v=a??new i(2);return v[0]=C[0]+A[0]*w,v[1]=C[1]+A[1]*w,v}function G(C,A){const w=C[0],a=C[1],v=A[0],h=A[1],d=Math.sqrt(w*w+a*a),u=Math.sqrt(v*v+h*h),b=d*u,T=b&&de(C,A)/b;return Math.acos(T)}function z(C,A,w){const a=w??new i(2);return a[0]=C[0]-A[0],a[1]=C[1]-A[1],a}const V=z;function q(C,A){return Math.abs(C[0]-A[0])<$e&&Math.abs(C[1]-A[1])<$e}function Y(C,A){return C[0]===A[0]&&C[1]===A[1]}function L(C,A,w,a){const v=a??new i(2);return v[0]=C[0]+w*(A[0]-C[0]),v[1]=C[1]+w*(A[1]-C[1]),v}function F(C,A,w,a){const v=a??new i(2);return v[0]=C[0]+w[0]*(A[0]-C[0]),v[1]=C[1]+w[1]*(A[1]-C[1]),v}function H(C,A,w){const a=w??new i(2);return a[0]=Math.max(C[0],A[0]),a[1]=Math.max(C[1],A[1]),a}function I(C,A,w){const a=w??new i(2);return a[0]=Math.min(C[0],A[0]),a[1]=Math.min(C[1],A[1]),a}function Z(C,A,w){const a=w??new i(2);return a[0]=C[0]*A,a[1]=C[1]*A,a}const N=Z;function ie(C,A,w){const a=w??new i(2);return a[0]=C[0]/A,a[1]=C[1]/A,a}function fe(C,A){const w=A??new i(2);return w[0]=1/C[0],w[1]=1/C[1],w}const ae=fe;function ce(C,A,w){const a=w??new i(3),v=C[0]*A[1]-C[1]*A[0];return a[0]=0,a[1]=0,a[2]=v,a}function de(C,A){return C[0]*A[0]+C[1]*A[1]}function xe(C){const A=C[0],w=C[1];return Math.sqrt(A*A+w*w)}const Ae=xe;function Ue(C){const A=C[0],w=C[1];return A*A+w*w}const pe=Ue;function J(C,A){const w=C[0]-A[0],a=C[1]-A[1];return Math.sqrt(w*w+a*a)}const Te=J;function ge(C,A){const w=C[0]-A[0],a=C[1]-A[1];return w*w+a*a}const me=ge;function he(C,A){const w=A??new i(2),a=C[0],v=C[1],h=Math.sqrt(a*a+v*v);return h>1e-5?(w[0]=a/h,w[1]=v/h):(w[0]=0,w[1]=0),w}function oe(C,A){const w=A??new i(2);return w[0]=-C[0],w[1]=-C[1],w}function ue(C,A){const w=A??new i(2);return w[0]=C[0],w[1]=C[1],w}const ze=ue;function Ce(C,A,w){const a=w??new i(2);return a[0]=C[0]*A[0],a[1]=C[1]*A[1],a}const De=Ce;function Pe(C,A,w){const a=w??new i(2);return a[0]=C[0]/A[0],a[1]=C[1]/A[1],a}const ee=Pe;function le(C=1,A){const w=A??new i(2),a=Math.random()*2*Math.PI;return w[0]=Math.cos(a)*C,w[1]=Math.sin(a)*C,w}function M(C){const A=C??new i(2);return A[0]=0,A[1]=0,A}function W(C,A,w){const a=w??new i(2),v=C[0],h=C[1];return a[0]=v*A[0]+h*A[4]+A[12],a[1]=v*A[1]+h*A[5]+A[13],a}function S(C,A,w){const a=w??new i(2),v=C[0],h=C[1];return a[0]=A[0]*v+A[4]*h+A[8],a[1]=A[1]*v+A[5]*h+A[9],a}function l(C,A,w,a){const v=a??new i(2),h=C[0]-A[0],d=C[1]-A[1],u=Math.sin(w),b=Math.cos(w);return v[0]=h*b-d*u+A[0],v[1]=h*u+d*b+A[1],v}function g(C,A,w){const a=w??new i(2);return he(C,a),Z(a,A,a)}function _(C,A,w){const a=w??new i(2);return xe(C)>A?g(C,A,a):ue(C,a)}function x(C,A,w){const a=w??new i(2);return L(C,A,.5,a)}return{create:s,fromValues:o,set:p,ceil:c,floor:m,round:E,clamp:P,add:k,addScaled:R,angle:G,subtract:z,sub:V,equalsApproximately:q,equals:Y,lerp:L,lerpV:F,max:H,min:I,mulScalar:Z,scale:N,divScalar:ie,inverse:fe,invert:ae,cross:ce,dot:de,length:xe,len:Ae,lengthSq:Ue,lenSq:pe,distance:J,dist:Te,distanceSq:ge,distSq:me,normalize:he,negate:oe,copy:ue,clone:ze,multiply:Ce,mul:De,divide:Pe,div:ee,random:le,zero:M,transformMat4:W,transformMat3:S,rotate:l,setLength:g,truncate:_,midpoint:x}}const Qi=new Map;function za(i){let s=Qi.get(i);return s||(s=Ac(i),Qi.set(i,s)),s}function Rc(i){function s(u,b,T){const y=new i(3);return u!==void 0&&(y[0]=u,b!==void 0&&(y[1]=b,T!==void 0&&(y[2]=T))),y}const o=s;function p(u,b,T,y){const O=y??new i(3);return O[0]=u,O[1]=b,O[2]=T,O}function c(u,b){const T=b??new i(3);return T[0]=Math.ceil(u[0]),T[1]=Math.ceil(u[1]),T[2]=Math.ceil(u[2]),T}function m(u,b){const T=b??new i(3);return T[0]=Math.floor(u[0]),T[1]=Math.floor(u[1]),T[2]=Math.floor(u[2]),T}function E(u,b){const T=b??new i(3);return T[0]=Math.round(u[0]),T[1]=Math.round(u[1]),T[2]=Math.round(u[2]),T}function P(u,b=0,T=1,y){const O=y??new i(3);return O[0]=Math.min(T,Math.max(b,u[0])),O[1]=Math.min(T,Math.max(b,u[1])),O[2]=Math.min(T,Math.max(b,u[2])),O}function k(u,b,T){const y=T??new i(3);return y[0]=u[0]+b[0],y[1]=u[1]+b[1],y[2]=u[2]+b[2],y}function R(u,b,T,y){const O=y??new i(3);return O[0]=u[0]+b[0]*T,O[1]=u[1]+b[1]*T,O[2]=u[2]+b[2]*T,O}function G(u,b){const T=u[0],y=u[1],O=u[2],$=b[0],j=b[1],te=b[2],se=Math.sqrt(T*T+y*y+O*O),ne=Math.sqrt($*$+j*j+te*te),ke=se*ne,Me=ke&&de(u,b)/ke;return Math.acos(Me)}function z(u,b,T){const y=T??new i(3);return y[0]=u[0]-b[0],y[1]=u[1]-b[1],y[2]=u[2]-b[2],y}const V=z;function q(u,b){return Math.abs(u[0]-b[0])<$e&&Math.abs(u[1]-b[1])<$e&&Math.abs(u[2]-b[2])<$e}function Y(u,b){return u[0]===b[0]&&u[1]===b[1]&&u[2]===b[2]}function L(u,b,T,y){const O=y??new i(3);return O[0]=u[0]+T*(b[0]-u[0]),O[1]=u[1]+T*(b[1]-u[1]),O[2]=u[2]+T*(b[2]-u[2]),O}function F(u,b,T,y){const O=y??new i(3);return O[0]=u[0]+T[0]*(b[0]-u[0]),O[1]=u[1]+T[1]*(b[1]-u[1]),O[2]=u[2]+T[2]*(b[2]-u[2]),O}function H(u,b,T){const y=T??new i(3);return y[0]=Math.max(u[0],b[0]),y[1]=Math.max(u[1],b[1]),y[2]=Math.max(u[2],b[2]),y}function I(u,b,T){const y=T??new i(3);return y[0]=Math.min(u[0],b[0]),y[1]=Math.min(u[1],b[1]),y[2]=Math.min(u[2],b[2]),y}function Z(u,b,T){const y=T??new i(3);return y[0]=u[0]*b,y[1]=u[1]*b,y[2]=u[2]*b,y}const N=Z;function ie(u,b,T){const y=T??new i(3);return y[0]=u[0]/b,y[1]=u[1]/b,y[2]=u[2]/b,y}function fe(u,b){const T=b??new i(3);return T[0]=1/u[0],T[1]=1/u[1],T[2]=1/u[2],T}const ae=fe;function ce(u,b,T){const y=T??new i(3),O=u[2]*b[0]-u[0]*b[2],$=u[0]*b[1]-u[1]*b[0];return y[0]=u[1]*b[2]-u[2]*b[1],y[1]=O,y[2]=$,y}function de(u,b){return u[0]*b[0]+u[1]*b[1]+u[2]*b[2]}function xe(u){const b=u[0],T=u[1],y=u[2];return Math.sqrt(b*b+T*T+y*y)}const Ae=xe;function Ue(u){const b=u[0],T=u[1],y=u[2];return b*b+T*T+y*y}const pe=Ue;function J(u,b){const T=u[0]-b[0],y=u[1]-b[1],O=u[2]-b[2];return Math.sqrt(T*T+y*y+O*O)}const Te=J;function ge(u,b){const T=u[0]-b[0],y=u[1]-b[1],O=u[2]-b[2];return T*T+y*y+O*O}const me=ge;function he(u,b){const T=b??new i(3),y=u[0],O=u[1],$=u[2],j=Math.sqrt(y*y+O*O+$*$);return j>1e-5?(T[0]=y/j,T[1]=O/j,T[2]=$/j):(T[0]=0,T[1]=0,T[2]=0),T}function oe(u,b){const T=b??new i(3);return T[0]=-u[0],T[1]=-u[1],T[2]=-u[2],T}function ue(u,b){const T=b??new i(3);return T[0]=u[0],T[1]=u[1],T[2]=u[2],T}const ze=ue;function Ce(u,b,T){const y=T??new i(3);return y[0]=u[0]*b[0],y[1]=u[1]*b[1],y[2]=u[2]*b[2],y}const De=Ce;function Pe(u,b,T){const y=T??new i(3);return y[0]=u[0]/b[0],y[1]=u[1]/b[1],y[2]=u[2]/b[2],y}const ee=Pe;function le(u=1,b){const T=b??new i(3),y=Math.random()*2*Math.PI,O=Math.random()*2-1,$=Math.sqrt(1-O*O)*u;return T[0]=Math.cos(y)*$,T[1]=Math.sin(y)*$,T[2]=O*u,T}function M(u){const b=u??new i(3);return b[0]=0,b[1]=0,b[2]=0,b}function W(u,b,T){const y=T??new i(3),O=u[0],$=u[1],j=u[2],te=b[3]*O+b[7]*$+b[11]*j+b[15]||1;return y[0]=(b[0]*O+b[4]*$+b[8]*j+b[12])/te,y[1]=(b[1]*O+b[5]*$+b[9]*j+b[13])/te,y[2]=(b[2]*O+b[6]*$+b[10]*j+b[14])/te,y}function S(u,b,T){const y=T??new i(3),O=u[0],$=u[1],j=u[2];return y[0]=O*b[0*4+0]+$*b[1*4+0]+j*b[2*4+0],y[1]=O*b[0*4+1]+$*b[1*4+1]+j*b[2*4+1],y[2]=O*b[0*4+2]+$*b[1*4+2]+j*b[2*4+2],y}function l(u,b,T){const y=T??new i(3),O=u[0],$=u[1],j=u[2];return y[0]=O*b[0]+$*b[4]+j*b[8],y[1]=O*b[1]+$*b[5]+j*b[9],y[2]=O*b[2]+$*b[6]+j*b[10],y}function g(u,b,T){const y=T??new i(3),O=b[0],$=b[1],j=b[2],te=b[3]*2,se=u[0],ne=u[1],ke=u[2],Me=$*ke-j*ne,we=j*se-O*ke,Be=O*ne-$*se;return y[0]=se+Me*te+($*Be-j*we)*2,y[1]=ne+we*te+(j*Me-O*Be)*2,y[2]=ke+Be*te+(O*we-$*Me)*2,y}function _(u,b){const T=b??new i(3);return T[0]=u[12],T[1]=u[13],T[2]=u[14],T}function x(u,b,T){const y=T??new i(3),O=b*4;return y[0]=u[O+0],y[1]=u[O+1],y[2]=u[O+2],y}function C(u,b){const T=b??new i(3),y=u[0],O=u[1],$=u[2],j=u[4],te=u[5],se=u[6],ne=u[8],ke=u[9],Me=u[10];return T[0]=Math.sqrt(y*y+O*O+$*$),T[1]=Math.sqrt(j*j+te*te+se*se),T[2]=Math.sqrt(ne*ne+ke*ke+Me*Me),T}function A(u,b,T,y){const O=y??new i(3),$=[],j=[];return $[0]=u[0]-b[0],$[1]=u[1]-b[1],$[2]=u[2]-b[2],j[0]=$[0],j[1]=$[1]*Math.cos(T)-$[2]*Math.sin(T),j[2]=$[1]*Math.sin(T)+$[2]*Math.cos(T),O[0]=j[0]+b[0],O[1]=j[1]+b[1],O[2]=j[2]+b[2],O}function w(u,b,T,y){const O=y??new i(3),$=[],j=[];return $[0]=u[0]-b[0],$[1]=u[1]-b[1],$[2]=u[2]-b[2],j[0]=$[2]*Math.sin(T)+$[0]*Math.cos(T),j[1]=$[1],j[2]=$[2]*Math.cos(T)-$[0]*Math.sin(T),O[0]=j[0]+b[0],O[1]=j[1]+b[1],O[2]=j[2]+b[2],O}function a(u,b,T,y){const O=y??new i(3),$=[],j=[];return $[0]=u[0]-b[0],$[1]=u[1]-b[1],$[2]=u[2]-b[2],j[0]=$[0]*Math.cos(T)-$[1]*Math.sin(T),j[1]=$[0]*Math.sin(T)+$[1]*Math.cos(T),j[2]=$[2],O[0]=j[0]+b[0],O[1]=j[1]+b[1],O[2]=j[2]+b[2],O}function v(u,b,T){const y=T??new i(3);return he(u,y),Z(y,b,y)}function h(u,b,T){const y=T??new i(3);return xe(u)>b?v(u,b,y):ue(u,y)}function d(u,b,T){const y=T??new i(3);return L(u,b,.5,y)}return{create:s,fromValues:o,set:p,ceil:c,floor:m,round:E,clamp:P,add:k,addScaled:R,angle:G,subtract:z,sub:V,equalsApproximately:q,equals:Y,lerp:L,lerpV:F,max:H,min:I,mulScalar:Z,scale:N,divScalar:ie,inverse:fe,invert:ae,cross:ce,dot:de,length:xe,len:Ae,lengthSq:Ue,lenSq:pe,distance:J,dist:Te,distanceSq:ge,distSq:me,normalize:he,negate:oe,copy:ue,clone:ze,multiply:Ce,mul:De,divide:Pe,div:ee,random:le,zero:M,transformMat4:W,transformMat4Upper3x3:S,transformMat3:l,transformQuat:g,getTranslation:_,getAxis:x,getScaling:C,rotateX:A,rotateY:w,rotateZ:a,setLength:v,truncate:h,midpoint:d}}const ea=new Map;function sr(i){let s=ea.get(i);return s||(s=Rc(i),ea.set(i,s)),s}function Dc(i){const s=za(i),o=sr(i);function p(l,g,_,x,C,A,w,a,v){const h=new i(12);return h[3]=0,h[7]=0,h[11]=0,l!==void 0&&(h[0]=l,g!==void 0&&(h[1]=g,_!==void 0&&(h[2]=_,x!==void 0&&(h[4]=x,C!==void 0&&(h[5]=C,A!==void 0&&(h[6]=A,w!==void 0&&(h[8]=w,a!==void 0&&(h[9]=a,v!==void 0&&(h[10]=v))))))))),h}function c(l,g,_,x,C,A,w,a,v,h){const d=h??new i(12);return d[0]=l,d[1]=g,d[2]=_,d[3]=0,d[4]=x,d[5]=C,d[6]=A,d[7]=0,d[8]=w,d[9]=a,d[10]=v,d[11]=0,d}function m(l,g){const _=g??new i(12);return _[0]=l[0],_[1]=l[1],_[2]=l[2],_[3]=0,_[4]=l[4],_[5]=l[5],_[6]=l[6],_[7]=0,_[8]=l[8],_[9]=l[9],_[10]=l[10],_[11]=0,_}function E(l,g){const _=g??new i(12),x=l[0],C=l[1],A=l[2],w=l[3],a=x+x,v=C+C,h=A+A,d=x*a,u=C*a,b=C*v,T=A*a,y=A*v,O=A*h,$=w*a,j=w*v,te=w*h;return _[0]=1-b-O,_[1]=u+te,_[2]=T-j,_[3]=0,_[4]=u-te,_[5]=1-d-O,_[6]=y+$,_[7]=0,_[8]=T+j,_[9]=y-$,_[10]=1-d-b,_[11]=0,_}function P(l,g){const _=g??new i(12);return _[0]=-l[0],_[1]=-l[1],_[2]=-l[2],_[4]=-l[4],_[5]=-l[5],_[6]=-l[6],_[8]=-l[8],_[9]=-l[9],_[10]=-l[10],_}function k(l,g,_){const x=_??new i(12);return x[0]=l[0]*g,x[1]=l[1]*g,x[2]=l[2]*g,x[4]=l[4]*g,x[5]=l[5]*g,x[6]=l[6]*g,x[8]=l[8]*g,x[9]=l[9]*g,x[10]=l[10]*g,x}const R=k;function G(l,g,_){const x=_??new i(12);return x[0]=l[0]+g[0],x[1]=l[1]+g[1],x[2]=l[2]+g[2],x[4]=l[4]+g[4],x[5]=l[5]+g[5],x[6]=l[6]+g[6],x[8]=l[8]+g[8],x[9]=l[9]+g[9],x[10]=l[10]+g[10],x}function z(l,g){const _=g??new i(12);return _[0]=l[0],_[1]=l[1],_[2]=l[2],_[4]=l[4],_[5]=l[5],_[6]=l[6],_[8]=l[8],_[9]=l[9],_[10]=l[10],_}const V=z;function q(l,g){return Math.abs(l[0]-g[0])<$e&&Math.abs(l[1]-g[1])<$e&&Math.abs(l[2]-g[2])<$e&&Math.abs(l[4]-g[4])<$e&&Math.abs(l[5]-g[5])<$e&&Math.abs(l[6]-g[6])<$e&&Math.abs(l[8]-g[8])<$e&&Math.abs(l[9]-g[9])<$e&&Math.abs(l[10]-g[10])<$e}function Y(l,g){return l[0]===g[0]&&l[1]===g[1]&&l[2]===g[2]&&l[4]===g[4]&&l[5]===g[5]&&l[6]===g[6]&&l[8]===g[8]&&l[9]===g[9]&&l[10]===g[10]}function L(l){const g=l??new i(12);return g[0]=1,g[1]=0,g[2]=0,g[4]=0,g[5]=1,g[6]=0,g[8]=0,g[9]=0,g[10]=1,g}function F(l,g){const _=g??new i(12);if(_===l){let b;return b=l[1],l[1]=l[4],l[4]=b,b=l[2],l[2]=l[8],l[8]=b,b=l[6],l[6]=l[9],l[9]=b,_}const x=l[0*4+0],C=l[0*4+1],A=l[0*4+2],w=l[1*4+0],a=l[1*4+1],v=l[1*4+2],h=l[2*4+0],d=l[2*4+1],u=l[2*4+2];return _[0]=x,_[1]=w,_[2]=h,_[4]=C,_[5]=a,_[6]=d,_[8]=A,_[9]=v,_[10]=u,_}function H(l,g){const _=g??new i(12),x=l[0*4+0],C=l[0*4+1],A=l[0*4+2],w=l[1*4+0],a=l[1*4+1],v=l[1*4+2],h=l[2*4+0],d=l[2*4+1],u=l[2*4+2],b=u*a-v*d,T=-u*w+v*h,y=d*w-a*h,O=1/(x*b+C*T+A*y);return _[0]=b*O,_[1]=(-u*C+A*d)*O,_[2]=(v*C-A*a)*O,_[4]=T*O,_[5]=(u*x-A*h)*O,_[6]=(-v*x+A*w)*O,_[8]=y*O,_[9]=(-d*x+C*h)*O,_[10]=(a*x-C*w)*O,_}function I(l){const g=l[0],_=l[0*4+1],x=l[0*4+2],C=l[1*4+0],A=l[1*4+1],w=l[1*4+2],a=l[2*4+0],v=l[2*4+1],h=l[2*4+2];return g*(A*h-v*w)-C*(_*h-v*x)+a*(_*w-A*x)}const Z=H;function N(l,g,_){const x=_??new i(12),C=l[0],A=l[1],w=l[2],a=l[4+0],v=l[4+1],h=l[4+2],d=l[8+0],u=l[8+1],b=l[8+2],T=g[0],y=g[1],O=g[2],$=g[4+0],j=g[4+1],te=g[4+2],se=g[8+0],ne=g[8+1],ke=g[8+2];return x[0]=C*T+a*y+d*O,x[1]=A*T+v*y+u*O,x[2]=w*T+h*y+b*O,x[4]=C*$+a*j+d*te,x[5]=A*$+v*j+u*te,x[6]=w*$+h*j+b*te,x[8]=C*se+a*ne+d*ke,x[9]=A*se+v*ne+u*ke,x[10]=w*se+h*ne+b*ke,x}const ie=N;function fe(l,g,_){const x=_??L();return l!==x&&(x[0]=l[0],x[1]=l[1],x[2]=l[2],x[4]=l[4],x[5]=l[5],x[6]=l[6]),x[8]=g[0],x[9]=g[1],x[10]=1,x}function ae(l,g){const _=g??s.create();return _[0]=l[8],_[1]=l[9],_}function ce(l,g,_){const x=_??s.create(),C=g*4;return x[0]=l[C+0],x[1]=l[C+1],x}function de(l,g,_,x){const C=x===l?l:z(l,x),A=_*4;return C[A+0]=g[0],C[A+1]=g[1],C}function xe(l,g){const _=g??s.create(),x=l[0],C=l[1],A=l[4],w=l[5];return _[0]=Math.sqrt(x*x+C*C),_[1]=Math.sqrt(A*A+w*w),_}function Ae(l,g){const _=g??o.create(),x=l[0],C=l[1],A=l[2],w=l[4],a=l[5],v=l[6],h=l[8],d=l[9],u=l[10];return _[0]=Math.sqrt(x*x+C*C+A*A),_[1]=Math.sqrt(w*w+a*a+v*v),_[2]=Math.sqrt(h*h+d*d+u*u),_}function Ue(l,g){const _=g??new i(12);return _[0]=1,_[1]=0,_[2]=0,_[4]=0,_[5]=1,_[6]=0,_[8]=l[0],_[9]=l[1],_[10]=1,_}function pe(l,g,_){const x=_??new i(12),C=g[0],A=g[1],w=l[0],a=l[1],v=l[2],h=l[1*4+0],d=l[1*4+1],u=l[1*4+2],b=l[2*4+0],T=l[2*4+1],y=l[2*4+2];return l!==x&&(x[0]=w,x[1]=a,x[2]=v,x[4]=h,x[5]=d,x[6]=u),x[8]=w*C+h*A+b,x[9]=a*C+d*A+T,x[10]=v*C+u*A+y,x}function J(l,g){const _=g??new i(12),x=Math.cos(l),C=Math.sin(l);return _[0]=x,_[1]=C,_[2]=0,_[4]=-C,_[5]=x,_[6]=0,_[8]=0,_[9]=0,_[10]=1,_}function Te(l,g,_){const x=_??new i(12),C=l[0*4+0],A=l[0*4+1],w=l[0*4+2],a=l[1*4+0],v=l[1*4+1],h=l[1*4+2],d=Math.cos(g),u=Math.sin(g);return x[0]=d*C+u*a,x[1]=d*A+u*v,x[2]=d*w+u*h,x[4]=d*a-u*C,x[5]=d*v-u*A,x[6]=d*h-u*w,l!==x&&(x[8]=l[8],x[9]=l[9],x[10]=l[10]),x}function ge(l,g){const _=g??new i(12),x=Math.cos(l),C=Math.sin(l);return _[0]=1,_[1]=0,_[2]=0,_[4]=0,_[5]=x,_[6]=C,_[8]=0,_[9]=-C,_[10]=x,_}function me(l,g,_){const x=_??new i(12),C=l[4],A=l[5],w=l[6],a=l[8],v=l[9],h=l[10],d=Math.cos(g),u=Math.sin(g);return x[4]=d*C+u*a,x[5]=d*A+u*v,x[6]=d*w+u*h,x[8]=d*a-u*C,x[9]=d*v-u*A,x[10]=d*h-u*w,l!==x&&(x[0]=l[0],x[1]=l[1],x[2]=l[2]),x}function he(l,g){const _=g??new i(12),x=Math.cos(l),C=Math.sin(l);return _[0]=x,_[1]=0,_[2]=-C,_[4]=0,_[5]=1,_[6]=0,_[8]=C,_[9]=0,_[10]=x,_}function oe(l,g,_){const x=_??new i(12),C=l[0*4+0],A=l[0*4+1],w=l[0*4+2],a=l[2*4+0],v=l[2*4+1],h=l[2*4+2],d=Math.cos(g),u=Math.sin(g);return x[0]=d*C-u*a,x[1]=d*A-u*v,x[2]=d*w-u*h,x[8]=d*a+u*C,x[9]=d*v+u*A,x[10]=d*h+u*w,l!==x&&(x[4]=l[4],x[5]=l[5],x[6]=l[6]),x}const ue=J,ze=Te;function Ce(l,g){const _=g??new i(12);return _[0]=l[0],_[1]=0,_[2]=0,_[4]=0,_[5]=l[1],_[6]=0,_[8]=0,_[9]=0,_[10]=1,_}function De(l,g,_){const x=_??new i(12),C=g[0],A=g[1];return x[0]=C*l[0*4+0],x[1]=C*l[0*4+1],x[2]=C*l[0*4+2],x[4]=A*l[1*4+0],x[5]=A*l[1*4+1],x[6]=A*l[1*4+2],l!==x&&(x[8]=l[8],x[9]=l[9],x[10]=l[10]),x}function Pe(l,g){const _=g??new i(12);return _[0]=l[0],_[1]=0,_[2]=0,_[4]=0,_[5]=l[1],_[6]=0,_[8]=0,_[9]=0,_[10]=l[2],_}function ee(l,g,_){const x=_??new i(12),C=g[0],A=g[1],w=g[2];return x[0]=C*l[0*4+0],x[1]=C*l[0*4+1],x[2]=C*l[0*4+2],x[4]=A*l[1*4+0],x[5]=A*l[1*4+1],x[6]=A*l[1*4+2],x[8]=w*l[2*4+0],x[9]=w*l[2*4+1],x[10]=w*l[2*4+2],x}function le(l,g){const _=g??new i(12);return _[0]=l,_[1]=0,_[2]=0,_[4]=0,_[5]=l,_[6]=0,_[8]=0,_[9]=0,_[10]=1,_}function M(l,g,_){const x=_??new i(12);return x[0]=g*l[0*4+0],x[1]=g*l[0*4+1],x[2]=g*l[0*4+2],x[4]=g*l[1*4+0],x[5]=g*l[1*4+1],x[6]=g*l[1*4+2],l!==x&&(x[8]=l[8],x[9]=l[9],x[10]=l[10]),x}function W(l,g){const _=g??new i(12);return _[0]=l,_[1]=0,_[2]=0,_[4]=0,_[5]=l,_[6]=0,_[8]=0,_[9]=0,_[10]=l,_}function S(l,g,_){const x=_??new i(12);return x[0]=g*l[0*4+0],x[1]=g*l[0*4+1],x[2]=g*l[0*4+2],x[4]=g*l[1*4+0],x[5]=g*l[1*4+1],x[6]=g*l[1*4+2],x[8]=g*l[2*4+0],x[9]=g*l[2*4+1],x[10]=g*l[2*4+2],x}return{add:G,clone:V,copy:z,create:p,determinant:I,equals:Y,equalsApproximately:q,fromMat4:m,fromQuat:E,get3DScaling:Ae,getAxis:ce,getScaling:xe,getTranslation:ae,identity:L,inverse:H,invert:Z,mul:ie,mulScalar:R,multiply:N,multiplyScalar:k,negate:P,rotate:Te,rotateX:me,rotateY:oe,rotateZ:ze,rotation:J,rotationX:ge,rotationY:he,rotationZ:ue,scale:De,scale3D:ee,scaling:Ce,scaling3D:Pe,set:c,setAxis:de,setTranslation:fe,translate:pe,translation:Ue,transpose:F,uniformScale:M,uniformScale3D:S,uniformScaling:le,uniformScaling3D:W}}const ta=new Map;function Uc(i){let s=ta.get(i);return s||(s=Dc(i),ta.set(i,s)),s}function Lc(i){const s=sr(i);function o(a,v,h,d,u,b,T,y,O,$,j,te,se,ne,ke,Me){const we=new i(16);return a!==void 0&&(we[0]=a,v!==void 0&&(we[1]=v,h!==void 0&&(we[2]=h,d!==void 0&&(we[3]=d,u!==void 0&&(we[4]=u,b!==void 0&&(we[5]=b,T!==void 0&&(we[6]=T,y!==void 0&&(we[7]=y,O!==void 0&&(we[8]=O,$!==void 0&&(we[9]=$,j!==void 0&&(we[10]=j,te!==void 0&&(we[11]=te,se!==void 0&&(we[12]=se,ne!==void 0&&(we[13]=ne,ke!==void 0&&(we[14]=ke,Me!==void 0&&(we[15]=Me)))))))))))))))),we}function p(a,v,h,d,u,b,T,y,O,$,j,te,se,ne,ke,Me,we){const Be=we??new i(16);return Be[0]=a,Be[1]=v,Be[2]=h,Be[3]=d,Be[4]=u,Be[5]=b,Be[6]=T,Be[7]=y,Be[8]=O,Be[9]=$,Be[10]=j,Be[11]=te,Be[12]=se,Be[13]=ne,Be[14]=ke,Be[15]=Me,Be}function c(a,v){const h=v??new i(16);return h[0]=a[0],h[1]=a[1],h[2]=a[2],h[3]=0,h[4]=a[4],h[5]=a[5],h[6]=a[6],h[7]=0,h[8]=a[8],h[9]=a[9],h[10]=a[10],h[11]=0,h[12]=0,h[13]=0,h[14]=0,h[15]=1,h}function m(a,v){const h=v??new i(16),d=a[0],u=a[1],b=a[2],T=a[3],y=d+d,O=u+u,$=b+b,j=d*y,te=u*y,se=u*O,ne=b*y,ke=b*O,Me=b*$,we=T*y,Be=T*O,Ge=T*$;return h[0]=1-se-Me,h[1]=te+Ge,h[2]=ne-Be,h[3]=0,h[4]=te-Ge,h[5]=1-j-Me,h[6]=ke+we,h[7]=0,h[8]=ne+Be,h[9]=ke-we,h[10]=1-j-se,h[11]=0,h[12]=0,h[13]=0,h[14]=0,h[15]=1,h}function E(a,v){const h=v??new i(16);return h[0]=-a[0],h[1]=-a[1],h[2]=-a[2],h[3]=-a[3],h[4]=-a[4],h[5]=-a[5],h[6]=-a[6],h[7]=-a[7],h[8]=-a[8],h[9]=-a[9],h[10]=-a[10],h[11]=-a[11],h[12]=-a[12],h[13]=-a[13],h[14]=-a[14],h[15]=-a[15],h}function P(a,v,h){const d=h??new i(16);return d[0]=a[0]+v[0],d[1]=a[1]+v[1],d[2]=a[2]+v[2],d[3]=a[3]+v[3],d[4]=a[4]+v[4],d[5]=a[5]+v[5],d[6]=a[6]+v[6],d[7]=a[7]+v[7],d[8]=a[8]+v[8],d[9]=a[9]+v[9],d[10]=a[10]+v[10],d[11]=a[11]+v[11],d[12]=a[12]+v[12],d[13]=a[13]+v[13],d[14]=a[14]+v[14],d[15]=a[15]+v[15],d}function k(a,v,h){const d=h??new i(16);return d[0]=a[0]*v,d[1]=a[1]*v,d[2]=a[2]*v,d[3]=a[3]*v,d[4]=a[4]*v,d[5]=a[5]*v,d[6]=a[6]*v,d[7]=a[7]*v,d[8]=a[8]*v,d[9]=a[9]*v,d[10]=a[10]*v,d[11]=a[11]*v,d[12]=a[12]*v,d[13]=a[13]*v,d[14]=a[14]*v,d[15]=a[15]*v,d}const R=k;function G(a,v){const h=v??new i(16);return h[0]=a[0],h[1]=a[1],h[2]=a[2],h[3]=a[3],h[4]=a[4],h[5]=a[5],h[6]=a[6],h[7]=a[7],h[8]=a[8],h[9]=a[9],h[10]=a[10],h[11]=a[11],h[12]=a[12],h[13]=a[13],h[14]=a[14],h[15]=a[15],h}const z=G;function V(a,v){return Math.abs(a[0]-v[0])<$e&&Math.abs(a[1]-v[1])<$e&&Math.abs(a[2]-v[2])<$e&&Math.abs(a[3]-v[3])<$e&&Math.abs(a[4]-v[4])<$e&&Math.abs(a[5]-v[5])<$e&&Math.abs(a[6]-v[6])<$e&&Math.abs(a[7]-v[7])<$e&&Math.abs(a[8]-v[8])<$e&&Math.abs(a[9]-v[9])<$e&&Math.abs(a[10]-v[10])<$e&&Math.abs(a[11]-v[11])<$e&&Math.abs(a[12]-v[12])<$e&&Math.abs(a[13]-v[13])<$e&&Math.abs(a[14]-v[14])<$e&&Math.abs(a[15]-v[15])<$e}function q(a,v){return a[0]===v[0]&&a[1]===v[1]&&a[2]===v[2]&&a[3]===v[3]&&a[4]===v[4]&&a[5]===v[5]&&a[6]===v[6]&&a[7]===v[7]&&a[8]===v[8]&&a[9]===v[9]&&a[10]===v[10]&&a[11]===v[11]&&a[12]===v[12]&&a[13]===v[13]&&a[14]===v[14]&&a[15]===v[15]}function Y(a){const v=a??new i(16);return v[0]=1,v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=1,v[6]=0,v[7]=0,v[8]=0,v[9]=0,v[10]=1,v[11]=0,v[12]=0,v[13]=0,v[14]=0,v[15]=1,v}function L(a,v){const h=v??new i(16);if(h===a){let Fe;return Fe=a[1],a[1]=a[4],a[4]=Fe,Fe=a[2],a[2]=a[8],a[8]=Fe,Fe=a[3],a[3]=a[12],a[12]=Fe,Fe=a[6],a[6]=a[9],a[9]=Fe,Fe=a[7],a[7]=a[13],a[13]=Fe,Fe=a[11],a[11]=a[14],a[14]=Fe,h}const d=a[0*4+0],u=a[0*4+1],b=a[0*4+2],T=a[0*4+3],y=a[1*4+0],O=a[1*4+1],$=a[1*4+2],j=a[1*4+3],te=a[2*4+0],se=a[2*4+1],ne=a[2*4+2],ke=a[2*4+3],Me=a[3*4+0],we=a[3*4+1],Be=a[3*4+2],Ge=a[3*4+3];return h[0]=d,h[1]=y,h[2]=te,h[3]=Me,h[4]=u,h[5]=O,h[6]=se,h[7]=we,h[8]=b,h[9]=$,h[10]=ne,h[11]=Be,h[12]=T,h[13]=j,h[14]=ke,h[15]=Ge,h}function F(a,v){const h=v??new i(16),d=a[0*4+0],u=a[0*4+1],b=a[0*4+2],T=a[0*4+3],y=a[1*4+0],O=a[1*4+1],$=a[1*4+2],j=a[1*4+3],te=a[2*4+0],se=a[2*4+1],ne=a[2*4+2],ke=a[2*4+3],Me=a[3*4+0],we=a[3*4+1],Be=a[3*4+2],Ge=a[3*4+3],Fe=ne*Ge,Xe=Be*ke,st=$*Ge,Je=Be*j,Qe=$*ke,qe=ne*j,et=b*Ge,Ye=Be*T,dt=b*ke,Ke=ne*T,Oe=b*j,at=$*T,Ne=te*we,ct=Me*se,rt=y*we,_t=Me*O,ot=y*se,St=te*O,Bt=d*we,ut=Me*u,lt=d*se,Vt=te*u,yt=d*O,Ut=y*u,Nt=Fe*O+Je*se+Qe*we-(Xe*O+st*se+qe*we),Lt=Xe*u+et*se+Ke*we-(Fe*u+Ye*se+dt*we),qt=st*u+Ye*O+Oe*we-(Je*u+et*O+at*we),zt=qe*u+dt*O+at*se-(Qe*u+Ke*O+Oe*se),tt=1/(d*Nt+y*Lt+te*qt+Me*zt);return h[0]=tt*Nt,h[1]=tt*Lt,h[2]=tt*qt,h[3]=tt*zt,h[4]=tt*(Xe*y+st*te+qe*Me-(Fe*y+Je*te+Qe*Me)),h[5]=tt*(Fe*d+Ye*te+dt*Me-(Xe*d+et*te+Ke*Me)),h[6]=tt*(Je*d+et*y+at*Me-(st*d+Ye*y+Oe*Me)),h[7]=tt*(Qe*d+Ke*y+Oe*te-(qe*d+dt*y+at*te)),h[8]=tt*(Ne*j+_t*ke+ot*Ge-(ct*j+rt*ke+St*Ge)),h[9]=tt*(ct*T+Bt*ke+Vt*Ge-(Ne*T+ut*ke+lt*Ge)),h[10]=tt*(rt*T+ut*j+yt*Ge-(_t*T+Bt*j+Ut*Ge)),h[11]=tt*(St*T+lt*j+Ut*ke-(ot*T+Vt*j+yt*ke)),h[12]=tt*(rt*ne+St*Be+ct*$-(ot*Be+Ne*$+_t*ne)),h[13]=tt*(lt*Be+Ne*b+ut*ne-(Bt*ne+Vt*Be+ct*b)),h[14]=tt*(Bt*$+Ut*Be+_t*b-(yt*Be+rt*b+ut*$)),h[15]=tt*(yt*ne+ot*b+Vt*$-(lt*$+Ut*ne+St*b)),h}function H(a){const v=a[0],h=a[0*4+1],d=a[0*4+2],u=a[0*4+3],b=a[1*4+0],T=a[1*4+1],y=a[1*4+2],O=a[1*4+3],$=a[2*4+0],j=a[2*4+1],te=a[2*4+2],se=a[2*4+3],ne=a[3*4+0],ke=a[3*4+1],Me=a[3*4+2],we=a[3*4+3],Be=te*we,Ge=Me*se,Fe=y*we,Xe=Me*O,st=y*se,Je=te*O,Qe=d*we,qe=Me*u,et=d*se,Ye=te*u,dt=d*O,Ke=y*u,Oe=Be*T+Xe*j+st*ke-(Ge*T+Fe*j+Je*ke),at=Ge*h+Qe*j+Ye*ke-(Be*h+qe*j+et*ke),Ne=Fe*h+qe*T+dt*ke-(Xe*h+Qe*T+Ke*ke),ct=Je*h+et*T+Ke*j-(st*h+Ye*T+dt*j);return v*Oe+b*at+$*Ne+ne*ct}const I=F;function Z(a,v,h){const d=h??new i(16),u=a[0],b=a[1],T=a[2],y=a[3],O=a[4+0],$=a[4+1],j=a[4+2],te=a[4+3],se=a[8+0],ne=a[8+1],ke=a[8+2],Me=a[8+3],we=a[12+0],Be=a[12+1],Ge=a[12+2],Fe=a[12+3],Xe=v[0],st=v[1],Je=v[2],Qe=v[3],qe=v[4+0],et=v[4+1],Ye=v[4+2],dt=v[4+3],Ke=v[8+0],Oe=v[8+1],at=v[8+2],Ne=v[8+3],ct=v[12+0],rt=v[12+1],_t=v[12+2],ot=v[12+3];return d[0]=u*Xe+O*st+se*Je+we*Qe,d[1]=b*Xe+$*st+ne*Je+Be*Qe,d[2]=T*Xe+j*st+ke*Je+Ge*Qe,d[3]=y*Xe+te*st+Me*Je+Fe*Qe,d[4]=u*qe+O*et+se*Ye+we*dt,d[5]=b*qe+$*et+ne*Ye+Be*dt,d[6]=T*qe+j*et+ke*Ye+Ge*dt,d[7]=y*qe+te*et+Me*Ye+Fe*dt,d[8]=u*Ke+O*Oe+se*at+we*Ne,d[9]=b*Ke+$*Oe+ne*at+Be*Ne,d[10]=T*Ke+j*Oe+ke*at+Ge*Ne,d[11]=y*Ke+te*Oe+Me*at+Fe*Ne,d[12]=u*ct+O*rt+se*_t+we*ot,d[13]=b*ct+$*rt+ne*_t+Be*ot,d[14]=T*ct+j*rt+ke*_t+Ge*ot,d[15]=y*ct+te*rt+Me*_t+Fe*ot,d}const N=Z;function ie(a,v,h){const d=h??Y();return a!==d&&(d[0]=a[0],d[1]=a[1],d[2]=a[2],d[3]=a[3],d[4]=a[4],d[5]=a[5],d[6]=a[6],d[7]=a[7],d[8]=a[8],d[9]=a[9],d[10]=a[10],d[11]=a[11]),d[12]=v[0],d[13]=v[1],d[14]=v[2],d[15]=1,d}function fe(a,v){const h=v??s.create();return h[0]=a[12],h[1]=a[13],h[2]=a[14],h}function ae(a,v,h){const d=h??s.create(),u=v*4;return d[0]=a[u+0],d[1]=a[u+1],d[2]=a[u+2],d}function ce(a,v,h,d){const u=d===a?d:G(a,d),b=h*4;return u[b+0]=v[0],u[b+1]=v[1],u[b+2]=v[2],u}function de(a,v){const h=v??s.create(),d=a[0],u=a[1],b=a[2],T=a[4],y=a[5],O=a[6],$=a[8],j=a[9],te=a[10];return h[0]=Math.sqrt(d*d+u*u+b*b),h[1]=Math.sqrt(T*T+y*y+O*O),h[2]=Math.sqrt($*$+j*j+te*te),h}function xe(a,v,h,d,u){const b=u??new i(16),T=Math.tan(Math.PI*.5-.5*a);if(b[0]=T/v,b[1]=0,b[2]=0,b[3]=0,b[4]=0,b[5]=T,b[6]=0,b[7]=0,b[8]=0,b[9]=0,b[11]=-1,b[12]=0,b[13]=0,b[15]=0,Number.isFinite(d)){const y=1/(h-d);b[10]=d*y,b[14]=d*h*y}else b[10]=-1,b[14]=-h;return b}function Ae(a,v,h,d=1/0,u){const b=u??new i(16),T=1/Math.tan(a*.5);if(b[0]=T/v,b[1]=0,b[2]=0,b[3]=0,b[4]=0,b[5]=T,b[6]=0,b[7]=0,b[8]=0,b[9]=0,b[11]=-1,b[12]=0,b[13]=0,b[15]=0,d===1/0)b[10]=0,b[14]=h;else{const y=1/(d-h);b[10]=h*y,b[14]=d*h*y}return b}function Ue(a,v,h,d,u,b,T){const y=T??new i(16);return y[0]=2/(v-a),y[1]=0,y[2]=0,y[3]=0,y[4]=0,y[5]=2/(d-h),y[6]=0,y[7]=0,y[8]=0,y[9]=0,y[10]=1/(u-b),y[11]=0,y[12]=(v+a)/(a-v),y[13]=(d+h)/(h-d),y[14]=u/(u-b),y[15]=1,y}function pe(a,v,h,d,u,b,T){const y=T??new i(16),O=v-a,$=d-h,j=u-b;return y[0]=2*u/O,y[1]=0,y[2]=0,y[3]=0,y[4]=0,y[5]=2*u/$,y[6]=0,y[7]=0,y[8]=(a+v)/O,y[9]=(d+h)/$,y[10]=b/j,y[11]=-1,y[12]=0,y[13]=0,y[14]=u*b/j,y[15]=0,y}function J(a,v,h,d,u,b=1/0,T){const y=T??new i(16),O=v-a,$=d-h;if(y[0]=2*u/O,y[1]=0,y[2]=0,y[3]=0,y[4]=0,y[5]=2*u/$,y[6]=0,y[7]=0,y[8]=(a+v)/O,y[9]=(d+h)/$,y[11]=-1,y[12]=0,y[13]=0,y[15]=0,b===1/0)y[10]=0,y[14]=u;else{const j=1/(b-u);y[10]=u*j,y[14]=b*u*j}return y}const Te=s.create(),ge=s.create(),me=s.create();function he(a,v,h,d){const u=d??new i(16);return s.normalize(s.subtract(v,a,me),me),s.normalize(s.cross(h,me,Te),Te),s.normalize(s.cross(me,Te,ge),ge),u[0]=Te[0],u[1]=Te[1],u[2]=Te[2],u[3]=0,u[4]=ge[0],u[5]=ge[1],u[6]=ge[2],u[7]=0,u[8]=me[0],u[9]=me[1],u[10]=me[2],u[11]=0,u[12]=a[0],u[13]=a[1],u[14]=a[2],u[15]=1,u}function oe(a,v,h,d){const u=d??new i(16);return s.normalize(s.subtract(a,v,me),me),s.normalize(s.cross(h,me,Te),Te),s.normalize(s.cross(me,Te,ge),ge),u[0]=Te[0],u[1]=Te[1],u[2]=Te[2],u[3]=0,u[4]=ge[0],u[5]=ge[1],u[6]=ge[2],u[7]=0,u[8]=me[0],u[9]=me[1],u[10]=me[2],u[11]=0,u[12]=a[0],u[13]=a[1],u[14]=a[2],u[15]=1,u}function ue(a,v,h,d){const u=d??new i(16);return s.normalize(s.subtract(a,v,me),me),s.normalize(s.cross(h,me,Te),Te),s.normalize(s.cross(me,Te,ge),ge),u[0]=Te[0],u[1]=ge[0],u[2]=me[0],u[3]=0,u[4]=Te[1],u[5]=ge[1],u[6]=me[1],u[7]=0,u[8]=Te[2],u[9]=ge[2],u[10]=me[2],u[11]=0,u[12]=-(Te[0]*a[0]+Te[1]*a[1]+Te[2]*a[2]),u[13]=-(ge[0]*a[0]+ge[1]*a[1]+ge[2]*a[2]),u[14]=-(me[0]*a[0]+me[1]*a[1]+me[2]*a[2]),u[15]=1,u}function ze(a,v){const h=v??new i(16);return h[0]=1,h[1]=0,h[2]=0,h[3]=0,h[4]=0,h[5]=1,h[6]=0,h[7]=0,h[8]=0,h[9]=0,h[10]=1,h[11]=0,h[12]=a[0],h[13]=a[1],h[14]=a[2],h[15]=1,h}function Ce(a,v,h){const d=h??new i(16),u=v[0],b=v[1],T=v[2],y=a[0],O=a[1],$=a[2],j=a[3],te=a[1*4+0],se=a[1*4+1],ne=a[1*4+2],ke=a[1*4+3],Me=a[2*4+0],we=a[2*4+1],Be=a[2*4+2],Ge=a[2*4+3],Fe=a[3*4+0],Xe=a[3*4+1],st=a[3*4+2],Je=a[3*4+3];return a!==d&&(d[0]=y,d[1]=O,d[2]=$,d[3]=j,d[4]=te,d[5]=se,d[6]=ne,d[7]=ke,d[8]=Me,d[9]=we,d[10]=Be,d[11]=Ge),d[12]=y*u+te*b+Me*T+Fe,d[13]=O*u+se*b+we*T+Xe,d[14]=$*u+ne*b+Be*T+st,d[15]=j*u+ke*b+Ge*T+Je,d}function De(a,v){const h=v??new i(16),d=Math.cos(a),u=Math.sin(a);return h[0]=1,h[1]=0,h[2]=0,h[3]=0,h[4]=0,h[5]=d,h[6]=u,h[7]=0,h[8]=0,h[9]=-u,h[10]=d,h[11]=0,h[12]=0,h[13]=0,h[14]=0,h[15]=1,h}function Pe(a,v,h){const d=h??new i(16),u=a[4],b=a[5],T=a[6],y=a[7],O=a[8],$=a[9],j=a[10],te=a[11],se=Math.cos(v),ne=Math.sin(v);return d[4]=se*u+ne*O,d[5]=se*b+ne*$,d[6]=se*T+ne*j,d[7]=se*y+ne*te,d[8]=se*O-ne*u,d[9]=se*$-ne*b,d[10]=se*j-ne*T,d[11]=se*te-ne*y,a!==d&&(d[0]=a[0],d[1]=a[1],d[2]=a[2],d[3]=a[3],d[12]=a[12],d[13]=a[13],d[14]=a[14],d[15]=a[15]),d}function ee(a,v){const h=v??new i(16),d=Math.cos(a),u=Math.sin(a);return h[0]=d,h[1]=0,h[2]=-u,h[3]=0,h[4]=0,h[5]=1,h[6]=0,h[7]=0,h[8]=u,h[9]=0,h[10]=d,h[11]=0,h[12]=0,h[13]=0,h[14]=0,h[15]=1,h}function le(a,v,h){const d=h??new i(16),u=a[0*4+0],b=a[0*4+1],T=a[0*4+2],y=a[0*4+3],O=a[2*4+0],$=a[2*4+1],j=a[2*4+2],te=a[2*4+3],se=Math.cos(v),ne=Math.sin(v);return d[0]=se*u-ne*O,d[1]=se*b-ne*$,d[2]=se*T-ne*j,d[3]=se*y-ne*te,d[8]=se*O+ne*u,d[9]=se*$+ne*b,d[10]=se*j+ne*T,d[11]=se*te+ne*y,a!==d&&(d[4]=a[4],d[5]=a[5],d[6]=a[6],d[7]=a[7],d[12]=a[12],d[13]=a[13],d[14]=a[14],d[15]=a[15]),d}function M(a,v){const h=v??new i(16),d=Math.cos(a),u=Math.sin(a);return h[0]=d,h[1]=u,h[2]=0,h[3]=0,h[4]=-u,h[5]=d,h[6]=0,h[7]=0,h[8]=0,h[9]=0,h[10]=1,h[11]=0,h[12]=0,h[13]=0,h[14]=0,h[15]=1,h}function W(a,v,h){const d=h??new i(16),u=a[0*4+0],b=a[0*4+1],T=a[0*4+2],y=a[0*4+3],O=a[1*4+0],$=a[1*4+1],j=a[1*4+2],te=a[1*4+3],se=Math.cos(v),ne=Math.sin(v);return d[0]=se*u+ne*O,d[1]=se*b+ne*$,d[2]=se*T+ne*j,d[3]=se*y+ne*te,d[4]=se*O-ne*u,d[5]=se*$-ne*b,d[6]=se*j-ne*T,d[7]=se*te-ne*y,a!==d&&(d[8]=a[8],d[9]=a[9],d[10]=a[10],d[11]=a[11],d[12]=a[12],d[13]=a[13],d[14]=a[14],d[15]=a[15]),d}function S(a,v,h){const d=h??new i(16);let u=a[0],b=a[1],T=a[2];const y=Math.sqrt(u*u+b*b+T*T);u/=y,b/=y,T/=y;const O=u*u,$=b*b,j=T*T,te=Math.cos(v),se=Math.sin(v),ne=1-te;return d[0]=O+(1-O)*te,d[1]=u*b*ne+T*se,d[2]=u*T*ne-b*se,d[3]=0,d[4]=u*b*ne-T*se,d[5]=$+(1-$)*te,d[6]=b*T*ne+u*se,d[7]=0,d[8]=u*T*ne+b*se,d[9]=b*T*ne-u*se,d[10]=j+(1-j)*te,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}const l=S;function g(a,v,h,d){const u=d??new i(16);let b=v[0],T=v[1],y=v[2];const O=Math.sqrt(b*b+T*T+y*y);b/=O,T/=O,y/=O;const $=b*b,j=T*T,te=y*y,se=Math.cos(h),ne=Math.sin(h),ke=1-se,Me=$+(1-$)*se,we=b*T*ke+y*ne,Be=b*y*ke-T*ne,Ge=b*T*ke-y*ne,Fe=j+(1-j)*se,Xe=T*y*ke+b*ne,st=b*y*ke+T*ne,Je=T*y*ke-b*ne,Qe=te+(1-te)*se,qe=a[0],et=a[1],Ye=a[2],dt=a[3],Ke=a[4],Oe=a[5],at=a[6],Ne=a[7],ct=a[8],rt=a[9],_t=a[10],ot=a[11];return u[0]=Me*qe+we*Ke+Be*ct,u[1]=Me*et+we*Oe+Be*rt,u[2]=Me*Ye+we*at+Be*_t,u[3]=Me*dt+we*Ne+Be*ot,u[4]=Ge*qe+Fe*Ke+Xe*ct,u[5]=Ge*et+Fe*Oe+Xe*rt,u[6]=Ge*Ye+Fe*at+Xe*_t,u[7]=Ge*dt+Fe*Ne+Xe*ot,u[8]=st*qe+Je*Ke+Qe*ct,u[9]=st*et+Je*Oe+Qe*rt,u[10]=st*Ye+Je*at+Qe*_t,u[11]=st*dt+Je*Ne+Qe*ot,a!==u&&(u[12]=a[12],u[13]=a[13],u[14]=a[14],u[15]=a[15]),u}const _=g;function x(a,v){const h=v??new i(16);return h[0]=a[0],h[1]=0,h[2]=0,h[3]=0,h[4]=0,h[5]=a[1],h[6]=0,h[7]=0,h[8]=0,h[9]=0,h[10]=a[2],h[11]=0,h[12]=0,h[13]=0,h[14]=0,h[15]=1,h}function C(a,v,h){const d=h??new i(16),u=v[0],b=v[1],T=v[2];return d[0]=u*a[0*4+0],d[1]=u*a[0*4+1],d[2]=u*a[0*4+2],d[3]=u*a[0*4+3],d[4]=b*a[1*4+0],d[5]=b*a[1*4+1],d[6]=b*a[1*4+2],d[7]=b*a[1*4+3],d[8]=T*a[2*4+0],d[9]=T*a[2*4+1],d[10]=T*a[2*4+2],d[11]=T*a[2*4+3],a!==d&&(d[12]=a[12],d[13]=a[13],d[14]=a[14],d[15]=a[15]),d}function A(a,v){const h=v??new i(16);return h[0]=a,h[1]=0,h[2]=0,h[3]=0,h[4]=0,h[5]=a,h[6]=0,h[7]=0,h[8]=0,h[9]=0,h[10]=a,h[11]=0,h[12]=0,h[13]=0,h[14]=0,h[15]=1,h}function w(a,v,h){const d=h??new i(16);return d[0]=v*a[0*4+0],d[1]=v*a[0*4+1],d[2]=v*a[0*4+2],d[3]=v*a[0*4+3],d[4]=v*a[1*4+0],d[5]=v*a[1*4+1],d[6]=v*a[1*4+2],d[7]=v*a[1*4+3],d[8]=v*a[2*4+0],d[9]=v*a[2*4+1],d[10]=v*a[2*4+2],d[11]=v*a[2*4+3],a!==d&&(d[12]=a[12],d[13]=a[13],d[14]=a[14],d[15]=a[15]),d}return{add:P,aim:he,axisRotate:g,axisRotation:S,cameraAim:oe,clone:z,copy:G,create:o,determinant:H,equals:q,equalsApproximately:V,fromMat3:c,fromQuat:m,frustum:pe,frustumReverseZ:J,getAxis:ae,getScaling:de,getTranslation:fe,identity:Y,inverse:F,invert:I,lookAt:ue,mul:N,mulScalar:R,multiply:Z,multiplyScalar:k,negate:E,ortho:Ue,perspective:xe,perspectiveReverseZ:Ae,rotate:_,rotateX:Pe,rotateY:le,rotateZ:W,rotation:l,rotationX:De,rotationY:ee,rotationZ:M,scale:C,scaling:x,set:p,setAxis:ce,setTranslation:ie,translate:Ce,translation:ze,transpose:L,uniformScale:w,uniformScaling:A}}const na=new Map;function zc(i){let s=na.get(i);return s||(s=Lc(i),na.set(i,s)),s}function Ic(i){const s=sr(i);function o(M,W,S,l){const g=new i(4);return M!==void 0&&(g[0]=M,W!==void 0&&(g[1]=W,S!==void 0&&(g[2]=S,l!==void 0&&(g[3]=l)))),g}const p=o;function c(M,W,S,l,g){const _=g??new i(4);return _[0]=M,_[1]=W,_[2]=S,_[3]=l,_}function m(M,W,S){const l=S??new i(4),g=W*.5,_=Math.sin(g);return l[0]=_*M[0],l[1]=_*M[1],l[2]=_*M[2],l[3]=Math.cos(g),l}function E(M,W){const S=W??s.create(3),l=Math.acos(M[3])*2,g=Math.sin(l*.5);return g>$e?(S[0]=M[0]/g,S[1]=M[1]/g,S[2]=M[2]/g):(S[0]=1,S[1]=0,S[2]=0),{angle:l,axis:S}}function P(M,W){const S=xe(M,W);return Math.acos(2*S*S-1)}function k(M,W,S){const l=S??new i(4),g=M[0],_=M[1],x=M[2],C=M[3],A=W[0],w=W[1],a=W[2],v=W[3];return l[0]=g*v+C*A+_*a-x*w,l[1]=_*v+C*w+x*A-g*a,l[2]=x*v+C*a+g*w-_*A,l[3]=C*v-g*A-_*w-x*a,l}const R=k;function G(M,W,S){const l=S??new i(4),g=W*.5,_=M[0],x=M[1],C=M[2],A=M[3],w=Math.sin(g),a=Math.cos(g);return l[0]=_*a+A*w,l[1]=x*a+C*w,l[2]=C*a-x*w,l[3]=A*a-_*w,l}function z(M,W,S){const l=S??new i(4),g=W*.5,_=M[0],x=M[1],C=M[2],A=M[3],w=Math.sin(g),a=Math.cos(g);return l[0]=_*a-C*w,l[1]=x*a+A*w,l[2]=C*a+_*w,l[3]=A*a-x*w,l}function V(M,W,S){const l=S??new i(4),g=W*.5,_=M[0],x=M[1],C=M[2],A=M[3],w=Math.sin(g),a=Math.cos(g);return l[0]=_*a+x*w,l[1]=x*a-_*w,l[2]=C*a+A*w,l[3]=A*a-C*w,l}function q(M,W,S,l){const g=l??new i(4),_=M[0],x=M[1],C=M[2],A=M[3];let w=W[0],a=W[1],v=W[2],h=W[3],d=_*w+x*a+C*v+A*h;d<0&&(d=-d,w=-w,a=-a,v=-v,h=-h);let u,b;if(1-d>$e){const T=Math.acos(d),y=Math.sin(T);u=Math.sin((1-S)*T)/y,b=Math.sin(S*T)/y}else u=1-S,b=S;return g[0]=u*_+b*w,g[1]=u*x+b*a,g[2]=u*C+b*v,g[3]=u*A+b*h,g}function Y(M,W){const S=W??new i(4),l=M[0],g=M[1],_=M[2],x=M[3],C=l*l+g*g+_*_+x*x,A=C?1/C:0;return S[0]=-l*A,S[1]=-g*A,S[2]=-_*A,S[3]=x*A,S}function L(M,W){const S=W??new i(4);return S[0]=-M[0],S[1]=-M[1],S[2]=-M[2],S[3]=M[3],S}function F(M,W){const S=W??new i(4),l=M[0]+M[5]+M[10];if(l>0){const g=Math.sqrt(l+1);S[3]=.5*g;const _=.5/g;S[0]=(M[6]-M[9])*_,S[1]=(M[8]-M[2])*_,S[2]=(M[1]-M[4])*_}else{let g=0;M[5]>M[0]&&(g=1),M[10]>M[g*4+g]&&(g=2);const _=(g+1)%3,x=(g+2)%3,C=Math.sqrt(M[g*4+g]-M[_*4+_]-M[x*4+x]+1);S[g]=.5*C;const A=.5/C;S[3]=(M[_*4+x]-M[x*4+_])*A,S[_]=(M[_*4+g]+M[g*4+_])*A,S[x]=(M[x*4+g]+M[g*4+x])*A}return S}function H(M,W,S,l,g){const _=g??new i(4),x=M*.5,C=W*.5,A=S*.5,w=Math.sin(x),a=Math.cos(x),v=Math.sin(C),h=Math.cos(C),d=Math.sin(A),u=Math.cos(A);switch(l){case"xyz":_[0]=w*h*u+a*v*d,_[1]=a*v*u-w*h*d,_[2]=a*h*d+w*v*u,_[3]=a*h*u-w*v*d;break;case"xzy":_[0]=w*h*u-a*v*d,_[1]=a*v*u-w*h*d,_[2]=a*h*d+w*v*u,_[3]=a*h*u+w*v*d;break;case"yxz":_[0]=w*h*u+a*v*d,_[1]=a*v*u-w*h*d,_[2]=a*h*d-w*v*u,_[3]=a*h*u+w*v*d;break;case"yzx":_[0]=w*h*u+a*v*d,_[1]=a*v*u+w*h*d,_[2]=a*h*d-w*v*u,_[3]=a*h*u-w*v*d;break;case"zxy":_[0]=w*h*u-a*v*d,_[1]=a*v*u+w*h*d,_[2]=a*h*d+w*v*u,_[3]=a*h*u-w*v*d;break;case"zyx":_[0]=w*h*u-a*v*d,_[1]=a*v*u+w*h*d,_[2]=a*h*d-w*v*u,_[3]=a*h*u+w*v*d;break;default:throw new Error(`Unknown rotation order: ${l}`)}return _}function I(M,W){const S=W??new i(4);return S[0]=M[0],S[1]=M[1],S[2]=M[2],S[3]=M[3],S}const Z=I;function N(M,W,S){const l=S??new i(4);return l[0]=M[0]+W[0],l[1]=M[1]+W[1],l[2]=M[2]+W[2],l[3]=M[3]+W[3],l}function ie(M,W,S){const l=S??new i(4);return l[0]=M[0]-W[0],l[1]=M[1]-W[1],l[2]=M[2]-W[2],l[3]=M[3]-W[3],l}const fe=ie;function ae(M,W,S){const l=S??new i(4);return l[0]=M[0]*W,l[1]=M[1]*W,l[2]=M[2]*W,l[3]=M[3]*W,l}const ce=ae;function de(M,W,S){const l=S??new i(4);return l[0]=M[0]/W,l[1]=M[1]/W,l[2]=M[2]/W,l[3]=M[3]/W,l}function xe(M,W){return M[0]*W[0]+M[1]*W[1]+M[2]*W[2]+M[3]*W[3]}function Ae(M,W,S,l){const g=l??new i(4);return g[0]=M[0]+S*(W[0]-M[0]),g[1]=M[1]+S*(W[1]-M[1]),g[2]=M[2]+S*(W[2]-M[2]),g[3]=M[3]+S*(W[3]-M[3]),g}function Ue(M){const W=M[0],S=M[1],l=M[2],g=M[3];return Math.sqrt(W*W+S*S+l*l+g*g)}const pe=Ue;function J(M){const W=M[0],S=M[1],l=M[2],g=M[3];return W*W+S*S+l*l+g*g}const Te=J;function ge(M,W){const S=W??new i(4),l=M[0],g=M[1],_=M[2],x=M[3],C=Math.sqrt(l*l+g*g+_*_+x*x);return C>1e-5?(S[0]=l/C,S[1]=g/C,S[2]=_/C,S[3]=x/C):(S[0]=0,S[1]=0,S[2]=0,S[3]=1),S}function me(M,W){return Math.abs(M[0]-W[0])<$e&&Math.abs(M[1]-W[1])<$e&&Math.abs(M[2]-W[2])<$e&&Math.abs(M[3]-W[3])<$e}function he(M,W){return M[0]===W[0]&&M[1]===W[1]&&M[2]===W[2]&&M[3]===W[3]}function oe(M){const W=M??new i(4);return W[0]=0,W[1]=0,W[2]=0,W[3]=1,W}const ue=s.create(),ze=s.create(),Ce=s.create();function De(M,W,S){const l=S??new i(4),g=s.dot(M,W);return g<-.999999?(s.cross(ze,M,ue),s.len(ue)<1e-6&&s.cross(Ce,M,ue),s.normalize(ue,ue),m(ue,Math.PI,l),l):g>.999999?(l[0]=0,l[1]=0,l[2]=0,l[3]=1,l):(s.cross(M,W,ue),l[0]=ue[0],l[1]=ue[1],l[2]=ue[2],l[3]=1+g,ge(l,l))}const Pe=new i(4),ee=new i(4);function le(M,W,S,l,g,_){const x=_??new i(4);return q(M,l,g,Pe),q(W,S,g,ee),q(Pe,ee,2*g*(1-g),x),x}return{create:o,fromValues:p,set:c,fromAxisAngle:m,toAxisAngle:E,angle:P,multiply:k,mul:R,rotateX:G,rotateY:z,rotateZ:V,slerp:q,inverse:Y,conjugate:L,fromMat:F,fromEuler:H,copy:I,clone:Z,add:N,subtract:ie,sub:fe,mulScalar:ae,scale:ce,divScalar:de,dot:xe,lerp:Ae,length:Ue,len:pe,lengthSq:J,lenSq:Te,normalize:ge,equalsApproximately:me,equals:he,identity:oe,rotationTo:De,sqlerp:le}}const sa=new Map;function Gc(i){let s=sa.get(i);return s||(s=Ic(i),sa.set(i,s)),s}function Fc(i){function s(S,l,g,_){const x=new i(4);return S!==void 0&&(x[0]=S,l!==void 0&&(x[1]=l,g!==void 0&&(x[2]=g,_!==void 0&&(x[3]=_)))),x}const o=s;function p(S,l,g,_,x){const C=x??new i(4);return C[0]=S,C[1]=l,C[2]=g,C[3]=_,C}function c(S,l){const g=l??new i(4);return g[0]=Math.ceil(S[0]),g[1]=Math.ceil(S[1]),g[2]=Math.ceil(S[2]),g[3]=Math.ceil(S[3]),g}function m(S,l){const g=l??new i(4);return g[0]=Math.floor(S[0]),g[1]=Math.floor(S[1]),g[2]=Math.floor(S[2]),g[3]=Math.floor(S[3]),g}function E(S,l){const g=l??new i(4);return g[0]=Math.round(S[0]),g[1]=Math.round(S[1]),g[2]=Math.round(S[2]),g[3]=Math.round(S[3]),g}function P(S,l=0,g=1,_){const x=_??new i(4);return x[0]=Math.min(g,Math.max(l,S[0])),x[1]=Math.min(g,Math.max(l,S[1])),x[2]=Math.min(g,Math.max(l,S[2])),x[3]=Math.min(g,Math.max(l,S[3])),x}function k(S,l,g){const _=g??new i(4);return _[0]=S[0]+l[0],_[1]=S[1]+l[1],_[2]=S[2]+l[2],_[3]=S[3]+l[3],_}function R(S,l,g,_){const x=_??new i(4);return x[0]=S[0]+l[0]*g,x[1]=S[1]+l[1]*g,x[2]=S[2]+l[2]*g,x[3]=S[3]+l[3]*g,x}function G(S,l,g){const _=g??new i(4);return _[0]=S[0]-l[0],_[1]=S[1]-l[1],_[2]=S[2]-l[2],_[3]=S[3]-l[3],_}const z=G;function V(S,l){return Math.abs(S[0]-l[0])<$e&&Math.abs(S[1]-l[1])<$e&&Math.abs(S[2]-l[2])<$e&&Math.abs(S[3]-l[3])<$e}function q(S,l){return S[0]===l[0]&&S[1]===l[1]&&S[2]===l[2]&&S[3]===l[3]}function Y(S,l,g,_){const x=_??new i(4);return x[0]=S[0]+g*(l[0]-S[0]),x[1]=S[1]+g*(l[1]-S[1]),x[2]=S[2]+g*(l[2]-S[2]),x[3]=S[3]+g*(l[3]-S[3]),x}function L(S,l,g,_){const x=_??new i(4);return x[0]=S[0]+g[0]*(l[0]-S[0]),x[1]=S[1]+g[1]*(l[1]-S[1]),x[2]=S[2]+g[2]*(l[2]-S[2]),x[3]=S[3]+g[3]*(l[3]-S[3]),x}function F(S,l,g){const _=g??new i(4);return _[0]=Math.max(S[0],l[0]),_[1]=Math.max(S[1],l[1]),_[2]=Math.max(S[2],l[2]),_[3]=Math.max(S[3],l[3]),_}function H(S,l,g){const _=g??new i(4);return _[0]=Math.min(S[0],l[0]),_[1]=Math.min(S[1],l[1]),_[2]=Math.min(S[2],l[2]),_[3]=Math.min(S[3],l[3]),_}function I(S,l,g){const _=g??new i(4);return _[0]=S[0]*l,_[1]=S[1]*l,_[2]=S[2]*l,_[3]=S[3]*l,_}const Z=I;function N(S,l,g){const _=g??new i(4);return _[0]=S[0]/l,_[1]=S[1]/l,_[2]=S[2]/l,_[3]=S[3]/l,_}function ie(S,l){const g=l??new i(4);return g[0]=1/S[0],g[1]=1/S[1],g[2]=1/S[2],g[3]=1/S[3],g}const fe=ie;function ae(S,l){return S[0]*l[0]+S[1]*l[1]+S[2]*l[2]+S[3]*l[3]}function ce(S){const l=S[0],g=S[1],_=S[2],x=S[3];return Math.sqrt(l*l+g*g+_*_+x*x)}const de=ce;function xe(S){const l=S[0],g=S[1],_=S[2],x=S[3];return l*l+g*g+_*_+x*x}const Ae=xe;function Ue(S,l){const g=S[0]-l[0],_=S[1]-l[1],x=S[2]-l[2],C=S[3]-l[3];return Math.sqrt(g*g+_*_+x*x+C*C)}const pe=Ue;function J(S,l){const g=S[0]-l[0],_=S[1]-l[1],x=S[2]-l[2],C=S[3]-l[3];return g*g+_*_+x*x+C*C}const Te=J;function ge(S,l){const g=l??new i(4),_=S[0],x=S[1],C=S[2],A=S[3],w=Math.sqrt(_*_+x*x+C*C+A*A);return w>1e-5?(g[0]=_/w,g[1]=x/w,g[2]=C/w,g[3]=A/w):(g[0]=0,g[1]=0,g[2]=0,g[3]=0),g}function me(S,l){const g=l??new i(4);return g[0]=-S[0],g[1]=-S[1],g[2]=-S[2],g[3]=-S[3],g}function he(S,l){const g=l??new i(4);return g[0]=S[0],g[1]=S[1],g[2]=S[2],g[3]=S[3],g}const oe=he;function ue(S,l,g){const _=g??new i(4);return _[0]=S[0]*l[0],_[1]=S[1]*l[1],_[2]=S[2]*l[2],_[3]=S[3]*l[3],_}const ze=ue;function Ce(S,l,g){const _=g??new i(4);return _[0]=S[0]/l[0],_[1]=S[1]/l[1],_[2]=S[2]/l[2],_[3]=S[3]/l[3],_}const De=Ce;function Pe(S){const l=S??new i(4);return l[0]=0,l[1]=0,l[2]=0,l[3]=0,l}function ee(S,l,g){const _=g??new i(4),x=S[0],C=S[1],A=S[2],w=S[3];return _[0]=l[0]*x+l[4]*C+l[8]*A+l[12]*w,_[1]=l[1]*x+l[5]*C+l[9]*A+l[13]*w,_[2]=l[2]*x+l[6]*C+l[10]*A+l[14]*w,_[3]=l[3]*x+l[7]*C+l[11]*A+l[15]*w,_}function le(S,l,g){const _=g??new i(4);return ge(S,_),I(_,l,_)}function M(S,l,g){const _=g??new i(4);return ce(S)>l?le(S,l,_):he(S,_)}function W(S,l,g){const _=g??new i(4);return Y(S,l,.5,_)}return{create:s,fromValues:o,set:p,ceil:c,floor:m,round:E,clamp:P,add:k,addScaled:R,subtract:G,sub:z,equalsApproximately:V,equals:q,lerp:Y,lerpV:L,max:F,min:H,mulScalar:I,scale:Z,divScalar:N,inverse:ie,invert:fe,dot:ae,length:ce,len:de,lengthSq:xe,lenSq:Ae,distance:Ue,dist:pe,distanceSq:J,distSq:Te,normalize:ge,negate:me,copy:he,clone:oe,multiply:ue,mul:ze,divide:Ce,div:De,zero:Pe,transformMat4:ee,setLength:le,truncate:M,midpoint:W}}const ra=new Map;function Oc(i){let s=ra.get(i);return s||(s=Fc(i),ra.set(i,s)),s}function Jr(i,s,o,p,c,m){return{mat3:Uc(i),mat4:zc(s),quat:Gc(o),vec2:za(p),vec3:sr(c),vec4:Oc(m)}}const{mat3:Ct,mat4:gt,quat:ht,vec2:ia,vec3:X,vec4:wd}=Jr(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);Jr(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);Jr(Mc,Array,Array,Array,Array,Array);const aa=document.querySelector("#log");let Rt=null,Fn=null;function Ia(){if(Rt)return Rt;Rt=document.createElement("div"),Rt.className="ply-spinner-overlay";const i=document.createElement("div");return i.className="ply-spinner",Rt.appendChild(i),Fn=document.createElement("div"),Fn.className="ply-spinner-label",Rt.appendChild(Fn),Rt.style.display="none",document.body.appendChild(Rt),Rt}function ls(i){Ia(),Fn&&i&&(Fn.textContent=i),Rt&&(Rt.style.opacity="1",Rt.style.display="flex")}function Tt(i){Ia(),Fn&&(Fn.textContent=i)}function Yt(){if(!Rt)return;const i=Rt;i.style.opacity="0",setTimeout(()=>{i.style.opacity==="0"&&(i.style.display="none")},220)}function Ga(i,s){if(!aa)return;const o=document.createElement("p");o.innerText=i,s&&Object.assign(o.style,s),aa.appendChild(o)}async function vt(i){console.log(i),Ga(i)}async function Vc(i){console.error(i),Ga(i,{color:"red",backgroundColor:"rgba(255, 0, 0, 0.1)"})}let Fa;function Oa(){Fa=performance.now()}function oa(i){const s=performance.now()-Fa;vt(`⏱️ ${i} Time: ${s.toFixed(0)} ms`)}function $c(i,s){if(!i)throw new Error(s&&(typeof s=="string"?s:s()))}function as(i){return i+3&-4}const Nc=2,qc=3,Wc=5,Kc=6,ws=7,Ws=8,ys=9,Ps=10,jc=11,Hc=12,Yc=13,Zc=14;function On(i){const s=new TextDecoder("ascii"),o=s.decode(new Uint8Array(i,0,4));if(o!=="NAT2")throw new Error(`NAT2 bad magic: '${o}'`);if(i.byteLength<4+64)throw new Error(`NAT2 truncated (${i.byteLength} bytes < 4 + 64)`);const p=new DataView(i),c=4,m=p.getUint32(c+0,!0),E=p.getUint32(c+4,!0),P=p.getUint32(c+8,!0),k=p.getUint32(c+12,!0),R=p.getUint32(c+16,!0),G=p.getFloat32(c+20,!0),z=p.getUint32(c+24,!0),V=p.getUint32(c+28,!0),q=V===Yc||V===Zc,Y=q?V-2:V,L=p.getFloat32(c+32,!0),F=p.getFloat32(c+36,!0),H=p.getFloat32(c+40,!0),I=p.getUint32(c+44,!0),Z=p.getFloat32(c+48,!0),N=p.getFloat32(c+52,!0),ie=p.getUint32(c+56,!0),fe=p.getUint32(c+60,!0),ae=Y===ys||Y===Ps,ce=ae?fe:0,de=ae?0:fe&255,xe=ae?0:fe>>8&255,Ae=de>0?de:1;if(Y===Wc||Y===Kc)throw new Error(`NAT2: paired-RVQ format=${Y} is retired 2026-07-23; re-bake with typeD (--bc7-codebook)`);const Ue=Y===ys||Y===Ps;if(Y!==Nc&&Y!==qc&&Y!==jc&&Y!==Hc&&Y!==ws&&Y!==Ws&&!Ue)throw new Error(`NAT2: Halloumi-WS supports BC7 (2), ASTC 4x4 (3), BC7-codebook (7), ASTC-codebook (8), probe-BC7 (9) or probe-ASTC (10); got format=${Y}`);if(m%4!==0||I%4!==0)throw new Error(`NAT2 block-format dims must be 4-aligned: width=${m} layer_h=${I}`);let pe=c+64;const J=(ie+1)*4,Te=new Uint32Array(i.slice(pe,pe+J));pe+=J;let ge;if(Ae>1){const le=(Ae+1)*4;if(pe+le>i.byteLength)throw new Error(`NAT2 truncated at column_cuts (need ${le} from ${pe})`);ge=new Uint32Array(i.slice(pe,pe+le)),pe+=le}else ge=new Uint32Array([0,m]);let me=0;for(let le=0;le<Ae;le++){const M=ge[le+1]-ge[le];M>me&&(me=M)}if(Ue){const le=ce&2?21:ce&1?7:6,M=R*le*4;if(pe+M>i.byteLength)throw new Error(`NAT2 truncated at probes: need ${M} more bytes from offset ${pe}, have ${i.byteLength-pe}`);const W=new Float32Array(i.slice(pe,pe+M));pe+=M;const S=Math.max(1,ce>>8&255),l=[];let g=0;for(let w=0,a=m,v=I;w<S;w++,a>>=1,v>>=1){const h=Math.max(1,a>>2)*Math.max(1,v>>2)*16;l.push(h),g+=h}const _=i.byteLength-pe;if(_<g)throw new Error(`NAT2 probe atlas truncated: need ${g} bytes for ${m}x${I} x${S} mips, have ${_}`);const x=[];let C=pe;for(const w of l)x.push(new Uint8Array(i.slice(C,C+w))),C+=w;const A=x[0];return{width:m,height:E,channels:P,kernel_type:k,num_rects:R,uv_extent:G,sb_number:z,format:Y,sh_bias:L,res_bias:F,compact_mult:H,layer_h:I,atlas_scale:Z,atlas_offset:N,n_layers:ie,n_cols:Ae,layer_cuts:Te,column_cuts:ge,slice_width:me,rects_expanded:W,atlas_bytes:A,mip_bytes:x,probe_mode:ce&2?3:ce&1?2:1}}const he=R*4*4;if(pe+he>i.byteLength)throw new Error(`NAT2 truncated at rects: need ${he} more bytes from offset ${pe}, have ${i.byteLength-pe}`);const oe=new Float32Array(i.slice(pe,pe+he));pe+=he;const ue=new Float32Array(R*5);for(let le=0;le<R;le++){const M=oe[le*4+0],W=oe[le*4+1],S=oe[le*4+2],l=oe[le*4+3];let g=0;for(let w=1;w<=ie&&Te[w]<=W;w++)g=w;let _=0;for(let w=1;w<=Ae&&ge[w]<=M;w++)_=w;const x=W-Te[g],C=M-ge[_],A=_*ie+g;ue[le*5+0]=C,ue[le*5+1]=x,ue[le*5+2]=S,ue[le*5+3]=l,ue[le*5+4]=A}let ze,Ce;const De=Ae,ee=m/4*16;if(Y===ws||Y===Ws||q){if(pe+24>i.byteLength)throw new Error("NAT2 truncated at typeD sub-header");const le=Y===ws||q?"BCCB":"ACCB",M=s.decode(new Uint8Array(i,pe,4));if(M!==le)throw new Error(`NAT2 typeD bad sub-magic: expected '${le}' got '${M}'`);const W=p.getUint32(pe+4,!0),S=p.getUint32(pe+8,!0),l=p.getUint32(pe+12,!0),g=p.getUint32(pe+16,!0),_=p.getUint32(pe+20,!0);if(W!==1)throw new Error(`NAT2 BCCB unsupported version ${W}`);if(l!==E/4||g!==m/4||_!==l*g)throw new Error(`NAT2 BCCB block grid mismatch: header ${m}×${E}, sub-header ${g}×${l} (${_} blocks)`);pe+=24;const x=S*16;if(pe+x>i.byteLength)throw new Error(`NAT2 BCCB truncated at codebook (need ${x}, have ${i.byteLength-pe})`);const C=new Uint8Array(i,pe,x);pe+=x;const A=_*2;if(pe+A>i.byteLength)throw new Error(`NAT2 BCCB truncated at indices (need ${A}, have ${i.byteLength-pe})`);const w=new Uint16Array(i.slice(pe,pe+A));pe+=A;const a=new Uint8Array(_*16);for(let v=0;v<_;v++){const h=w[v]*16;a.set(C.subarray(h,h+16),v*16)}if(ze=a,xe>1){Ce=[a];for(let v=1;v<xe;v++){if(pe+24>i.byteLength)throw new Error(`NAT2 truncated at mip ${v} sub-header`);const h=s.decode(new Uint8Array(i,pe,4));if(h!==le)throw new Error(`NAT2 mip ${v}: bad sub-magic '${h}'`);const d=p.getUint32(pe+8,!0),u=p.getUint32(pe+16,!0),b=p.getUint32(pe+20,!0);if(u!==v)throw new Error(`NAT2 mip section order: expected level ${v}, got ${u}`);pe+=24;let T=0;for(let j=0;j<De;j++)for(let te=0;te<ie;te++){const se=Vr(v,ge[j+1]-ge[j],Te[te+1]-Te[te],me,I);T+=(se.cw>>2)*(se.ch>>2)}if(T!==b)throw new Error(`NAT2 mip ${v}: ${b} blocks, loader expects ${T}`);if(pe+d*16+b*2>i.byteLength)throw new Error(`NAT2 truncated in mip ${v}`);const y=new Uint8Array(i,pe,d*16);pe+=d*16;const O=new Uint16Array(i.slice(pe,pe+b*2));pe+=b*2;const $=new Uint8Array(b*16);for(let j=0;j<b;j++){const te=O[j]*16;$.set(y.subarray(te,te+16),j*16)}Ce.push($)}}}else{let le=0;for(let M=0;M<ie;M++){const W=Te[M+1]-Te[M];if(W%4!==0)throw new Error(`NAT2 BC7 layer ${M} rows ${W} not 4-aligned`);le+=W/4*ee}if(pe+le>i.byteLength)throw new Error(`NAT2 truncated at atlas payload: need ${le} more bytes from offset ${pe}, have ${i.byteLength-pe}`);if(ze=new Uint8Array(i.slice(pe,pe+le)),pe+=le,xe>1&&!ae){Ce=[ze];for(let M=1;M<xe;M++){let W=0;for(let S=0;S<Ae;S++)for(let l=0;l<ie;l++){const g=Vr(M,ge[S+1]-ge[S],Te[l+1]-Te[l],me,I);W+=g.cw/4*(g.ch/4)*16}if(pe+W>i.byteLength)throw new Error(`NAT2 raw mip ${M}: truncated (need ${W} B)`);Ce.push(new Uint8Array(i.slice(pe,pe+W))),pe+=W}}}return{width:m,height:E,channels:P,kernel_type:k,num_rects:R,uv_extent:G,sb_number:z,format:Y,sh_bias:L,res_bias:F,compact_mult:H,layer_h:I,atlas_scale:Z,atlas_offset:N,n_layers:ie,n_cols:Ae,layer_cuts:Te,column_cuts:ge,slice_width:me,rects_expanded:ue,atlas_bytes:ze,...Ce?{mip_bytes:Ce}:{}}}function Vr(i,s,o,p,c){const m=P=>P+3>>2<<2,E=1<<i;return{cw:Math.min(m(Math.max(1,p>>i)),m(Math.ceil(s/E))),ch:Math.min(m(Math.max(1,c>>i)),m(Math.ceil(o/E)))}}const Xc=32;function $r(i,s,o){if(s.format===5||s.format===6)throw new Error(`paired-RVQ format=${s.format} is retired; re-bake with typeD (--bc7-codebook)`);let p,c,m,E,P;if(s.format===2||s.format===ws||s.format===ys){if(!i.features.has("texture-compression-bc"))return vt(`⚠️  bundle is BC7 (format=${s.format}) but texture-compression-bc not supported — atlas disabled`),null;P=s.format===ys?"BC7 atlas (proberes: shared probe texture)":s.format===ws?"BC7 atlas (typeD: codebook gather)":"BC7 atlas",{texture:p,view:c,sampler:m,samplerAniso:E}=Nr(i,s,"bc7-rgba-unorm",P)}else if(s.format===3||s.format===Ws||s.format===Ps){if(!i.features.has("texture-compression-astc"))return vt(`⚠️  bundle is ASTC 4x4 (format=${s.format}) but texture-compression-astc not supported — atlas disabled`),null;P=s.format===Ps?"ASTC 4x4 atlas (proberes: shared probe texture)":s.format===Ws?"ASTC 4x4 atlas (typeD-ASTC: codebook gather)":"ASTC 4x4 atlas",{texture:p,view:c,sampler:m,samplerAniso:E}=Nr(i,s,"astc-4x4-unorm",P)}else return vt(`⚠️  unsupported atlas format ${s.format} — atlas disabled`),null;const{rects_expanded:k}=s,R=i.createBuffer({label:"atlas rects (5-stride)",size:as(k.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});i.queue.writeBuffer(R,0,k);const G=i.createBuffer({label:"tex_params",size:48,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return qs(i,G,s,o),{texture:p,view:c,sampler:m,samplerAniso:E,rectsBuffer:R,texParamsBuffer:G,meta:s}}function Jc(i,s,o){if(s.format!==11&&s.format!==12)return vt(`⚠️  ?slope= file has format ${s.format}, expected 11 (BC5) or 12 (P)`),null;if(!i.features.has("texture-compression-bc"))return vt("⚠️  slope sidecar needs texture-compression-bc — disabled"),null;if(o&&(o.width!==s.width||o.layer_h!==s.layer_h||o.n_layers!==s.n_layers||o.n_cols!==s.n_cols||o.num_rects!==s.num_rects))return vt(`⚠️  slope sidecar layout ${s.width}x${s.layer_h}x${s.n_layers} does not match the atlas ${o.width}x${o.layer_h}x${o.n_layers} — disabled`),null;const{view:p}=Nr(i,s,s.format===11?"bc5-rg-unorm":"bc7-rgba-unorm",s.format===11?"slope BC5":"slope P (BC7 alpha)");return{view:p,kind:s.format===11?"bc5":"p",scaleU:s.atlas_scale,offU:s.atlas_offset,scaleV:s.sh_bias,offV:s.res_bias,mb:s.atlas_bytes.byteLength/1048576}}function Nr(i,s,o,p){const{width:c,layer_h:m,n_layers:E,n_cols:P,layer_cuts:k,column_cuts:R,slice_width:G,atlas_bytes:z}=s,q=c/4*16,Y=i.limits.maxTextureDimension2D;if(m>Y||G>Y)throw new Error(`⚠️  atlas slice dims ${G}x${m} exceed maxTextureDimension2D=${Y}. Re-bake with smaller LAYER_H or pack with column-aware atlas widths.`);const L=P*E;if(L>i.limits.maxTextureArrayLayers)throw new Error(`⚠️  ${P} cols × ${E} layers = ${L} slices > maxTextureArrayLayers=${i.limits.maxTextureArrayLayers}.`);const F=s.mip_bytes??[z],H=F.length,I=i.createTexture({label:p,size:{width:G,height:m,depthOrArrayLayers:L},mipLevelCount:H,sampleCount:1,dimension:"2d",format:o,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});for(let ae=0;ae<P;ae++){const ce=R[ae]/4,de=(R[ae+1]-R[ae])/4;for(let xe=0;xe<E;xe++){const Ae=k[xe]/4,Ue=(k[xe+1]-k[xe])/4,pe=ae*E+xe,J=Ae*q+ce*16;i.queue.writeTexture({texture:I,mipLevel:0,origin:{x:0,y:0,z:pe},aspect:"all"},z,{offset:J,bytesPerRow:q,rowsPerImage:Ue},{width:de*4,height:Ue*4,depthOrArrayLayers:1})}}const Z=s.format===ys||s.format===Ps;for(let ae=1;ae<H&&!Z;ae++){let ce=0;for(let de=0;de<P;de++)for(let xe=0;xe<E;xe++){const{cw:Ae,ch:Ue}=Vr(ae,R[de+1]-R[de],k[xe+1]-k[xe],G,m);i.queue.writeTexture({texture:I,mipLevel:ae,origin:{x:0,y:0,z:de*E+xe},aspect:"all"},F[ae],{offset:ce,bytesPerRow:(Ae>>2)*16,rowsPerImage:Ue>>2},{width:Ae,height:Ue,depthOrArrayLayers:1}),ce+=(Ae>>2)*(Ue>>2)*16}}for(let ae=1;ae<H&&Z;ae++){const ce=Math.max(1,G>>ae),de=Math.max(1,m>>ae);i.queue.writeTexture({texture:I,mipLevel:ae,origin:{x:0,y:0,z:0},aspect:"all"},F[ae],{offset:0,bytesPerRow:Math.max(1,ce>>2)*16,rowsPerImage:Math.max(1,de>>2)},{width:ce,height:de,depthOrArrayLayers:1})}H>1&&console.log(`[atlas] ${H} mip levels uploaded (${Z?"trilinear":"per-surfel integer level"})`);const N=I.createView({label:`${p} view`,dimension:"2d-array"}),ie=i.createSampler({label:`${p} sampler`,addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge",magFilter:"linear",minFilter:"linear",mipmapFilter:H>1&&Z?"linear":"nearest"}),fe=i.createSampler({label:`${p} sampler (aniso 16x)`,addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge",magFilter:"linear",minFilter:"linear",mipmapFilter:"linear",maxAnisotropy:16});return{texture:I,view:N,sampler:ie,samplerAniso:fe}}function qs(i,s,o,p,c=1){var R;const m=new ArrayBuffer(32),E=new Uint32Array(m),P=new Float32Array(m);E[0]=p?1:0,P[1]=o.atlas_scale,P[2]=o.atlas_offset,P[3]=o.res_bias,E[4]=o.probe_mode?o.probe_mode|0:0,E[5]=o.width|0;const k=(((R=o.mip_bytes)==null?void 0:R.length)??1)>1;E[6]=c===2?2:k&&c!==0?1:0,P[7]=o.uv_extent,i.queue.writeBuffer(s,0,m)}async function Ks(i,s){vt(`loading ply file from File... : ${i.name}`),ls("downloading PLY...");const o=await i.arrayBuffer();try{return await $a(o,s)}finally{Yt()}}async function Qc(i,s){vt(`loading ply file from URL... : ${i}`),ls("downloading PLY...");try{Oa();const o=new URL(i,self.location.href).href;return await $a({url:o},s)}finally{Yt()}}function Va(i){return new Promise((s,o)=>{const p=new Worker(new URL(""+new URL("ply-worker-70df72a6.js",import.meta.url).href,self.location),{type:"module"});p.onmessage=c=>{const m=c.data;if((m==null?void 0:m.type)==="error"){Vc(`PLY worker error: ${m.message??"unknown error"}`),p.terminate(),o(new Error(m.message??"Worker error"));return}else if((m==null?void 0:m.type)==="download_progress"){const E=m.totalBytes,P=m.loadedBytes/(1024*1024),k=E?E/(1024*1024):void 0,R=(m.speedBps??0)/(1024*1024),G=E?Math.min(99,Math.floor(m.loadedBytes/E*100)):void 0,z=k?`total ${k.toFixed(1)} MB`:"total -- MB",V=k&&G!==void 0?`${P.toFixed(1)} MB downloaded (${G}%)`:`${P.toFixed(1)} MB downloaded`,q=`${R.toFixed(2)} MB/s`;Tt(`downloading PLY ...
${z}, ${V}
${q}`);return}else if((m==null?void 0:m.type)==="fetched"){vt(`💾 Fetched (${m.byteLength} bytes)`),oa("Download"),Tt("parsing PLY..."),Oa();return}else if((m==null?void 0:m.type)==="parse_progress"){const E=m.total??0,P=m.read??0,k=E>0?Math.floor(P/E*100):0;Tt(`parsing PLY ...
${P}/${E} surfels (${k}%)`);return}else(m==null?void 0:m.type)==="done"&&(p.terminate(),oa("Parse"),s(m))},p.onerror=c=>{p.terminate(),o(c)},i instanceof ArrayBuffer?(Tt("parsing PLY..."),p.postMessage({type:"start",plyBuffer:i},[i])):p.postMessage({type:"start_url",url:i.url})})}async function la(i){var o,p,c,m,E,P,k,R,G,z,V,q;const s=await Va(await i.arrayBuffer());return{num_points:s.num_points,K:s.K,feature_mode:s.feature_mode??0,sh_bias:s.sh_bias,kernel_type:s.kernel_type,surfel_data:new Float32Array(s.surfelBuffer),sv_params:new Float32Array(s.svParamsBuffer),bbox:s.bbox??{min:[-1,-1,-1],max:[1,1,1]},centroid:s.centroid??[((((p=(o=s.bbox)==null?void 0:o.min)==null?void 0:p[0])??-1)+(((m=(c=s.bbox)==null?void 0:c.max)==null?void 0:m[0])??1))/2,((((P=(E=s.bbox)==null?void 0:E.min)==null?void 0:P[1])??-1)+(((R=(k=s.bbox)==null?void 0:k.max)==null?void 0:R[1])??1))/2,((((z=(G=s.bbox)==null?void 0:G.min)==null?void 0:z[2])??-1)+(((q=(V=s.bbox)==null?void 0:V.max)==null?void 0:q[2])??1))/2]}}async function $a(i,s){var Y,L,F,H,I,Z,N,ie,fe,ae,ce,de;const o=await Va(i),p=o.num_points,c=o.K,m=o.feature_mode??0,E=o.sh_bias,P=o.kernel_type,k=o.surfelBuffer,R=o.svParamsBuffer,G=m===2?"NASG":m===1?"SB":"SV";vt(`🪐 Total surfels: ${p}, mode=${G}, K=${c}, sh_bias=${E}, kernel_type=${P}`);const z=s.createBuffer({label:"surfel input buffer",size:as(p*Xc),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});s.queue.writeBuffer(z,0,k);const V=R.byteLength>0?R.byteLength:16,q=s.createBuffer({label:`color_params buffer (${G})`,size:as(V),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});return R.byteLength>0&&s.queue.writeBuffer(q,0,R),{num_points:p,K:c,feature_mode:m,sh_bias:E,kernel_type:P,surfel_buffer:z,surfel_data:new Float32Array(k),sv_params_buffer:q,bbox:o.bbox??{min:[-1,-1,-1],max:[1,1,1]},centroid:o.centroid??[((((L=(Y=o.bbox)==null?void 0:Y.min)==null?void 0:L[0])??-1)+(((H=(F=o.bbox)==null?void 0:F.max)==null?void 0:H[0])??1))/2,((((Z=(I=o.bbox)==null?void 0:I.min)==null?void 0:Z[1])??-1)+(((ie=(N=o.bbox)==null?void 0:N.max)==null?void 0:ie[1])??1))/2,((((ae=(fe=o.bbox)==null?void 0:fe.min)==null?void 0:ae[2])??-1)+(((de=(ce=o.bbox)==null?void 0:ce.max)==null?void 0:de[2])??1))/2]}}const js="halloumi-bundles-v1",ca=8,ua="x-halloumi-cached-at",Na="x-halloumi-etag",rr="x-halloumi-length";function eu(i){try{const s=new URL(i,window.location.href);return s.hash="",s.toString()}catch{return i}}function qa(){try{const i=new URLSearchParams(window.location.search);return{nocache:i.get("nocache")==="1",clearcache:i.get("clearcache")==="1",keepcache:i.get("keepcache")==="1"}}catch{return{nocache:!1,clearcache:!1,keepcache:!1}}}const da="halloumi-bundles-session";function tu(){try{return sessionStorage.getItem(da)?!1:(sessionStorage.setItem(da,String(Date.now())),!0)}catch{return!1}}async function Qr(){if(typeof caches>"u")return null;try{return await caches.open(js)}catch{return null}}let pa=!1;function nu(){var i;pa||!((i=navigator.storage)!=null&&i.persist)||(pa=!0,navigator.storage.persist().then(s=>console.log(`[cache] persistent storage ${s?"granted":"not granted"}`)).catch(()=>{}))}let $s=null;function su(){return $s||($s=(async()=>{const i=qa();if(i.clearcache)try{await caches.delete(js),console.log("[cache] cleared (?clearcache=1)")}catch{}else if(!i.keepcache&&tu())try{const s=await Qr(),o=s?(await s.keys()).length:0;o>0&&(await caches.delete(js),console.log(`[cache] new tab: dropped ${o} file(s) left by a closed tab (?keepcache=1 to keep)`))}catch{}Hs()})(),$s)}async function ha(){const i=await Qr();if(!i)return{files:0,bytes:0};let s=0;const o=await i.keys();for(const p of o){const c=await i.match(p);s+=parseInt((c==null?void 0:c.headers.get(rr))??"0",10)||0}return{files:o.length,bytes:s}}async function ru(){try{await caches.delete(js)}catch{}Hs()}const qr=new Set;function Hs(){for(const i of qr)try{i()}catch{}}function iu(i){return qr.add(i),()=>qr.delete(i)}function Wa(i){const s=i.addButton({title:"🗑 Clear cache",hidden:!0});let o=!1;const p=m=>m===1?"":"s",c=async()=>{const{files:m,bytes:E}=await ha();s.hidden=m===0,m>0&&(s.title=`🗑 Clear cache (${m} file${p(m)}, ${fa(E)})`)};s.on("click",async()=>{if(o)return;const{files:m,bytes:E}=await ha();if(m===0){c();return}const P=`Delete ${m} cached bundle file${p(m)} (${fa(E)}) from this device?

The current scene stays loaded; the next page load will download it again.`;if(confirm(P)){o=!0,s.title="🗑 Clearing…";try{await ru()}finally{o=!1}await c(),console.log("[cache] cleared by user")}}),iu(()=>void c()),c()}function fa(i){return i>=1024*1048576?`${(i/(1024*1048576)).toFixed(2)} GB`:`${(i/1048576).toFixed(0)} MB`}function au(i){return new Promise(s=>setTimeout(s,i))}function ou(){return typeof document>"u"||document.visibilityState!=="hidden"?Promise.resolve():new Promise(i=>{const s=()=>{document.visibilityState!=="hidden"&&(document.removeEventListener("visibilitychange",s),i())};document.addEventListener("visibilitychange",s)})}async function lu(i,s){var V;const o=[];let p=0,c,m=null,E=null,P=performance.now(),k=0,R=null;for(let q=0;q<ca;q++){q>0&&(document.visibilityState==="hidden"?await ou():await au(Math.min(8e3,1e3*2**(q-1))));try{const Y={};p>0&&(Y.Range=`bytes=${p}-`,m?Y["If-Range"]=m:E&&(Y["If-Range"]=E));const L=await fetch(i,{headers:Y,cache:"no-store"});if(L.status===416&&c!==void 0&&p>=c)break;if(!L.ok)throw new Error(`fetch failed: ${L.status} ${L.statusText}`);if(p>0&&L.status!==206&&(o.length=0,p=0,k=0),p===0){m=L.headers.get("etag"),E=L.headers.get("last-modified");const H=L.headers.get("content-length");c=H&&parseInt(H,10)||void 0}else{const H=L.headers.get("content-range"),I=H&&/\/(\d+)$/.exec(H);I&&(c=parseInt(I[1],10))}const F=(V=L.body)==null?void 0:V.getReader();if(F)for(;;){const{done:H,value:I}=await F.read();if(H)break;o.push(I),p+=I.byteLength;const Z=performance.now();Z-P>=150&&s&&(s(p,c,(p-k)/((Z-P)/1e3),"network"),P=Z,k=p)}else{const H=await L.arrayBuffer();o.push(new Uint8Array(H)),p+=H.byteLength}if(c!==void 0&&p<c)throw new Error(`short read: ${p} of ${c} bytes`);R=null;break}catch(Y){R=Y,console.warn(`[cache] download attempt ${q+1}/${ca} failed at ${(p/2**20).toFixed(1)} MB:`,Y),s&&s(p,c,0,"network")}}if(R)throw R;const G=new Uint8Array(p);let z=0;for(const q of o)G.set(q,z),z+=q.byteLength;return s&&s(p,c??p,0,"network"),{buf:G.buffer,etag:m,lastModified:E}}async function cu(i,s,o){let p=!0;const c=()=>new Response(p?(p=!1,o.buf):o.buf.slice(0),{headers:{"content-type":"application/octet-stream","content-length":String(o.buf.byteLength),[rr]:String(o.buf.byteLength),[ua]:String(Date.now()),[Na]:o.etag??"",...o.lastModified?{"last-modified":o.lastModified}:{}}});for(let m=0;m<4;m++)try{return await i.put(s,c()),Hs(),!0}catch(E){const P=await i.keys();if(P.length===0)return console.warn("[cache] not cached:",E),!1;const k=[];for(const G of P){const z=await i.match(G);k.push({k:G,t:parseInt((z==null?void 0:z.headers.get(ua))??"0",10)||0})}k.sort((G,z)=>G.t-z.t);const R=k[0].k;await i.delete(R),Hs(),console.warn(`[cache] quota: evicted ${R.url}`)}return!1}function uu(i,s,o,p){const c=new AbortController,m=setTimeout(()=>c.abort(),15e3);fetch(s,{headers:{Range:"bytes=0-0"},cache:"no-store",signal:c.signal}).then(async E=>{var Y,L;if(!E.ok)return;(Y=E.body)==null||Y.cancel().catch(()=>{});const P=E.headers.get("etag"),k=E.headers.get("content-range"),R=E.status===206?((L=/\/(\d+)$/.exec(k??""))==null?void 0:L[1])??null:E.headers.get("content-length"),G=o.headers.get(Na)||null,z=o.headers.get(rr),V=R!==null&&z!==null&&parseInt(R,10)!==parseInt(z,10);(V||!!(P&&G)&&P!==G)&&(await i.delete(s),console.info(`[cache] ${s} changed on the server (${V?"size":"etag"}); evicted — reload to fetch the new version`),p==null||p())}).catch(()=>{}).finally(()=>clearTimeout(m))}async function Ka(i,s,o={}){await su();const{nocache:p}=qa(),c=eu(i),m=p?null:await Qr();if(m)try{const P=await m.match(c);if(P){const k=parseInt(P.headers.get(rr)??P.headers.get("content-length")??"0",10)||void 0;s&&s(0,k,0,"cache");const R=await P.arrayBuffer();return s&&s(R.byteLength,R.byteLength,0,"cache"),console.log(`[cache] hit ${(R.byteLength/2**20).toFixed(1)} MB ${c}`),uu(m,c,P,o.onStale),R}}catch(P){console.warn("[cache] lookup failed:",P)}const E=await lu(i,s);return m&&(nu(),cu(m,c,E).then(P=>{P&&console.log(`[cache] stored ${(E.buf.byteLength/2**20).toFixed(1)} MB ${c}`)}).catch(P=>console.warn("[cache] store failed:",P))),E.buf}const Ys="BITYMI01",du=0,pu=1,hu=2,fu=3,_u=4,mu=5;function ei(i){const s=new Uint8Array(i),o=new TextDecoder().decode(s.subarray(0,8));if(o!==Ys)throw new Error(`Not a BITYMI bundle (bad magic '${o}')`);const p=new DataView(i),c=p.getUint32(8,!0),m=12,E=20;let P=null,k=null,R=null;for(let G=0;G<c;G++){const z=m+G*E,V=p.getUint32(z+0,!0),q=Number(p.getBigUint64(z+4,!0)),Y=Number(p.getBigUint64(z+12,!0)),L=s.slice(q,q+Y).buffer;V===du||V===pu||V===mu?P=L:V===hu?k=L:(V===fu||V===_u)&&(R=L)}if(P===null)throw new Error("BITYMI bundle has no point cloud chunk");return{pcBuffer:P,camerasBuffer:k,atlasBuffer:R}}async function os(i,s){const o=await Ka(i,s);return o.byteLength>=8&&new TextDecoder().decode(new Uint8Array(o,0,8))===Ys?{bundle:ei(o),rawPly:null}:{bundle:null,rawPly:o}}var vu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Wr={exports:{}};/*! Tweakpane 3.1.10 (c) 2016 cocopon, licensed under the MIT license. */(function(i,s){(function(o,p){p(s)})(vu,function(o){class p{constructor(e){const[t,r]=e.split("-"),f=t.split(".");this.major=parseInt(f[0],10),this.minor=parseInt(f[1],10),this.patch=parseInt(f[2],10),this.prerelease=r??null}toString(){const e=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[e,this.prerelease].join("-"):e}}class c{constructor(e){this.controller_=e}get element(){return this.controller_.view.element}get disabled(){return this.controller_.viewProps.get("disabled")}set disabled(e){this.controller_.viewProps.set("disabled",e)}get hidden(){return this.controller_.viewProps.get("hidden")}set hidden(e){this.controller_.viewProps.set("hidden",e)}dispose(){this.controller_.viewProps.set("disposed",!0)}}class m{constructor(e){this.target=e}}class E extends m{constructor(e,t,r,f){super(e),this.value=t,this.presetKey=r,this.last=f??!0}}class P extends m{constructor(e,t,r){super(e),this.value=t,this.presetKey=r}}class k extends m{constructor(e,t){super(e),this.expanded=t}}class R extends m{constructor(e,t){super(e),this.index=t}}function G(n){return n}function z(n){return n==null}function V(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0}function q(n,e){let t=n;do{const r=Object.getOwnPropertyDescriptor(t,e);if(r&&(r.set!==void 0||r.writable===!0))return!0;t=Object.getPrototypeOf(t)}while(t!==null);return!1}const Y={alreadydisposed:()=>"View has been already disposed",invalidparams:n=>`Invalid parameters for '${n.name}'`,nomatchingcontroller:n=>`No matching controller for '${n.key}'`,nomatchingview:n=>`No matching view for '${JSON.stringify(n.params)}'`,notbindable:()=>"Value is not bindable",propertynotfound:n=>`Property '${n.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class L{static alreadyDisposed(){return new L({type:"alreadydisposed"})}static notBindable(){return new L({type:"notbindable"})}static propertyNotFound(e){return new L({type:"propertynotfound",context:{name:e}})}static shouldNeverHappen(){return new L({type:"shouldneverhappen"})}constructor(e){var t;this.message=(t=Y[e.type](e.context))!==null&&t!==void 0?t:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=e.type}}class F{constructor(e,t,r){this.obj_=e,this.key_=t,this.presetKey_=r??t}static isBindable(e){return!(e===null||typeof e!="object"&&typeof e!="function")}get key(){return this.key_}get presetKey(){return this.presetKey_}read(){return this.obj_[this.key_]}write(e){this.obj_[this.key_]=e}writeProperty(e,t){const r=this.read();if(!F.isBindable(r))throw L.notBindable();if(!(e in r))throw L.propertyNotFound(e);r[e]=t}}class H extends c{get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get title(){var e;return(e=this.controller_.valueController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.valueController.props.set("title",e)}on(e,t){const r=t.bind(this);return this.controller_.valueController.emitter.on(e,()=>{r(new m(this))}),this}}class I{constructor(){this.observers_={}}on(e,t){let r=this.observers_[e];return r||(r=this.observers_[e]=[]),r.push({handler:t}),this}off(e,t){const r=this.observers_[e];return r&&(this.observers_[e]=r.filter(f=>f.handler!==t)),this}emit(e,t){const r=this.observers_[e];r&&r.forEach(f=>{f.handler(t)})}}const Z="tp";function N(n){return(t,r)=>[Z,"-",n,"v",t?`_${t}`:"",r?`-${r}`:""].join("")}function ie(n,e){return t=>e(n(t))}function fe(n){return n.rawValue}function ae(n,e){n.emitter.on("change",ie(fe,e)),e(n.rawValue)}function ce(n,e,t){ae(n.value(e),t)}function de(n,e,t){t?n.classList.add(e):n.classList.remove(e)}function xe(n,e){return t=>{de(n,e,t)}}function Ae(n,e){ae(n,t=>{e.textContent=t??""})}const Ue=N("btn");class pe{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Ue()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("button");r.classList.add(Ue("b")),t.viewProps.bindDisabled(r),this.element.appendChild(r),this.buttonElement=r;const f=e.createElement("div");f.classList.add(Ue("t")),Ae(t.props.value("title"),f),this.buttonElement.appendChild(f)}}class J{constructor(e,t){this.emitter=new I,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new pe(e,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class Te{constructor(e,t){var r;this.constraint_=t==null?void 0:t.constraint,this.equals_=(r=t==null?void 0:t.equals)!==null&&r!==void 0?r:(f,U)=>f===U,this.emitter=new I,this.rawValue_=e}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const r=t??{forceEmit:!1,last:!0},f=this.constraint_?this.constraint_.constrain(e):e,U=this.rawValue_;this.equals_(U,f)&&!r.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=f,this.emitter.emit("change",{options:r,previousRawValue:U,rawValue:f,sender:this}))}}class ge{constructor(e){this.emitter=new I,this.value_=e}get rawValue(){return this.value_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const r=t??{forceEmit:!1,last:!0},f=this.value_;f===e&&!r.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=e,this.emitter.emit("change",{options:r,previousRawValue:f,rawValue:this.value_,sender:this}))}}function me(n,e){const t=e==null?void 0:e.constraint,r=e==null?void 0:e.equals;return!t&&!r?new ge(n):new Te(n,e)}class he{constructor(e){this.emitter=new I,this.valMap_=e;for(const t in this.valMap_)this.valMap_[t].emitter.on("change",()=>{this.emitter.emit("change",{key:t,sender:this})})}static createCore(e){return Object.keys(e).reduce((r,f)=>Object.assign(r,{[f]:me(e[f])}),{})}static fromObject(e){const t=this.createCore(e);return new he(t)}get(e){return this.valMap_[e].rawValue}set(e,t){this.valMap_[e].rawValue=t}value(e){return this.valMap_[e]}}function oe(n,e){const r=Object.keys(e).reduce((f,U)=>{if(f===void 0)return;const K=e[U],_e=K(n[U]);return _e.succeeded?Object.assign(Object.assign({},f),{[U]:_e.value}):void 0},{});return r}function ue(n,e){return n.reduce((t,r)=>{if(t===void 0)return;const f=e(r);if(!(!f.succeeded||f.value===void 0))return[...t,f.value]},[])}function ze(n){return n===null?!1:typeof n=="object"}function Ce(n){return e=>t=>{if(!e&&t===void 0)return{succeeded:!1,value:void 0};if(e&&t===void 0)return{succeeded:!0,value:void 0};const r=n(t);return r!==void 0?{succeeded:!0,value:r}:{succeeded:!1,value:void 0}}}function De(n){return{custom:e=>Ce(e)(n),boolean:Ce(e=>typeof e=="boolean"?e:void 0)(n),number:Ce(e=>typeof e=="number"?e:void 0)(n),string:Ce(e=>typeof e=="string"?e:void 0)(n),function:Ce(e=>typeof e=="function"?e:void 0)(n),constant:e=>Ce(t=>t===e?e:void 0)(n),raw:Ce(e=>e)(n),object:e=>Ce(t=>{if(ze(t))return oe(t,e)})(n),array:e=>Ce(t=>{if(Array.isArray(t))return ue(t,e)})(n)}}const Pe={optional:De(!0),required:De(!1)};function ee(n,e){const t=Pe.required.object(e)(n);return t.succeeded?t.value:void 0}function le(n){console.warn([`Missing '${n.key}' of ${n.target} in ${n.place}.`,"Please rebuild plugins with the latest core package."].join(" "))}function M(n){return n&&n.parentElement&&n.parentElement.removeChild(n),null}class W{constructor(e){this.value_=e}static create(e){return[new W(e),(t,r)=>{e.setRawValue(t,r)}]}get emitter(){return this.value_.emitter}get rawValue(){return this.value_.rawValue}}const S=N("");function l(n,e){return xe(n,S(void 0,e))}class g extends he{constructor(e){var t;super(e),this.onDisabledChange_=this.onDisabledChange_.bind(this),this.onParentChange_=this.onParentChange_.bind(this),this.onParentGlobalDisabledChange_=this.onParentGlobalDisabledChange_.bind(this),[this.globalDisabled_,this.setGlobalDisabled_]=W.create(me(this.getGlobalDisabled_())),this.value("disabled").emitter.on("change",this.onDisabledChange_),this.value("parent").emitter.on("change",this.onParentChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_)}static create(e){var t,r,f;const U=e??{};return new g(he.createCore({disabled:(t=U.disabled)!==null&&t!==void 0?t:!1,disposed:!1,hidden:(r=U.hidden)!==null&&r!==void 0?r:!1,parent:(f=U.parent)!==null&&f!==void 0?f:null}))}get globalDisabled(){return this.globalDisabled_}bindClassModifiers(e){ae(this.globalDisabled_,l(e,"disabled")),ce(this,"hidden",l(e,"hidden"))}bindDisabled(e){ae(this.globalDisabled_,t=>{e.disabled=t})}bindTabIndex(e){ae(this.globalDisabled_,t=>{e.tabIndex=t?-1:0})}handleDispose(e){this.value("disposed").emitter.on("change",t=>{t&&e()})}getGlobalDisabled_(){const e=this.get("parent");return(e?e.globalDisabled.rawValue:!1)||this.get("disabled")}updateGlobalDisabled_(){this.setGlobalDisabled_(this.getGlobalDisabled_())}onDisabledChange_(){this.updateGlobalDisabled_()}onParentGlobalDisabledChange_(){this.updateGlobalDisabled_()}onParentChange_(e){var t;const r=e.previousRawValue;r==null||r.globalDisabled.emitter.off("change",this.onParentGlobalDisabledChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_),this.updateGlobalDisabled_()}}function _(){return["veryfirst","first","last","verylast"]}const x=N(""),C={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class A{constructor(e){this.parent_=null,this.blade=e.blade,this.view=e.view,this.viewProps=e.viewProps;const t=this.view.element;this.blade.value("positions").emitter.on("change",()=>{_().forEach(r=>{t.classList.remove(x(void 0,C[r]))}),this.blade.get("positions").forEach(r=>{t.classList.add(x(void 0,C[r]))})}),this.viewProps.handleDispose(()=>{M(t)})}get parent(){return this.parent_}set parent(e){if(this.parent_=e,!("parent"in this.viewProps.valMap_)){le({key:"parent",target:g.name,place:"BladeController.parent"});return}this.viewProps.set("parent",this.parent_?this.parent_.viewProps:null)}}const w="http://www.w3.org/2000/svg";function a(n){n.offsetHeight}function v(n,e){const t=n.style.transition;n.style.transition="none",e(),n.style.transition=t}function h(n){return n.ontouchstart!==void 0}function d(){return globalThis}function u(){return d().document}function b(n){const e=n.ownerDocument.defaultView;return e&&"document"in e?n.getContext("2d",{willReadFrequently:!0}):null}const T={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function y(n,e){const t=n.createElementNS(w,"svg");return t.innerHTML=T[e],t}function O(n,e,t){n.insertBefore(e,n.children[t])}function $(n){n.parentElement&&n.parentElement.removeChild(n)}function j(n){for(;n.children.length>0;)n.removeChild(n.children[0])}function te(n){for(;n.childNodes.length>0;)n.removeChild(n.childNodes[0])}function se(n){return n.relatedTarget?n.relatedTarget:"explicitOriginalTarget"in n?n.explicitOriginalTarget:null}const ne=N("lbl");function ke(n,e){const t=n.createDocumentFragment();return e.split(`
`).map(f=>n.createTextNode(f)).forEach((f,U)=>{U>0&&t.appendChild(n.createElement("br")),t.appendChild(f)}),t}class Me{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(ne()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("div");r.classList.add(ne("l")),ce(t.props,"label",U=>{z(U)?this.element.classList.add(ne(void 0,"nol")):(this.element.classList.remove(ne(void 0,"nol")),te(r),r.appendChild(ke(e,U)))}),this.element.appendChild(r),this.labelElement=r;const f=e.createElement("div");f.classList.add(ne("v")),this.element.appendChild(f),this.valueElement=f}}class we extends A{constructor(e,t){const r=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{view:new Me(e,{props:t.props,viewProps:r}),viewProps:r})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}const Be={id:"button",type:"blade",accept(n){const e=Pe,t=ee(n,{title:e.required.string,view:e.required.constant("button"),label:e.optional.string});return t?{params:t}:null},controller(n){return new we(n.document,{blade:n.blade,props:he.fromObject({label:n.params.label}),valueController:new J(n.document,{props:he.fromObject({title:n.params.title}),viewProps:n.viewProps})})},api(n){return!(n.controller instanceof we)||!(n.controller.valueController instanceof J)?null:new H(n.controller)}};class Ge extends A{constructor(e){super(e),this.value=e.value}}function Fe(){return new he({positions:me([],{equals:V})})}class Xe extends he{constructor(e){super(e)}static create(e){const t={completed:!0,expanded:e,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},r=he.createCore(t);return new Xe(r)}get styleExpanded(){var e;return(e=this.get("temporaryExpanded"))!==null&&e!==void 0?e:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const e=this.get("expandedHeight");return this.get("shouldFixHeight")&&!z(e)?`${e}px`:"auto"}bindExpandedClass(e,t){const r=()=>{this.styleExpanded?e.classList.add(t):e.classList.remove(t)};ce(this,"expanded",r),ce(this,"temporaryExpanded",r)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function st(n,e){let t=0;return v(e,()=>{n.set("expandedHeight",null),n.set("temporaryExpanded",!0),a(e),t=e.clientHeight,n.set("temporaryExpanded",null),a(e)}),t}function Je(n,e){e.style.height=n.styleHeight}function Qe(n,e){n.value("expanded").emitter.on("beforechange",()=>{if(n.set("completed",!1),z(n.get("expandedHeight"))){const t=st(n,e);t>0&&n.set("expandedHeight",t)}n.set("shouldFixHeight",!0),a(e)}),n.emitter.on("change",()=>{Je(n,e)}),Je(n,e),e.addEventListener("transitionend",t=>{t.propertyName==="height"&&n.cleanUpTransition()})}class qe extends c{constructor(e,t){super(e),this.rackApi_=t}}function et(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"button"}))}function Ye(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"folder"}))}function dt(n,e){const t=e??{};return n.addBlade(Object.assign(Object.assign({},t),{view:"separator"}))}function Ke(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"tab"}))}class Oe{constructor(e){this.emitter=new I,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=e}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(e){for(const t of this.allItems())if(e(t))return t;return null}includes(e){return this.cache_.has(e)}add(e,t){if(this.includes(e))throw L.shouldNeverHappen();const r=t!==void 0?t:this.items_.length;this.items_.splice(r,0,e),this.cache_.add(e);const f=this.extract_(e);f&&(f.emitter.on("add",this.onSubListAdd_),f.emitter.on("remove",this.onSubListRemove_),f.allItems().forEach(U=>{this.cache_.add(U)})),this.emitter.emit("add",{index:r,item:e,root:this,target:this})}remove(e){const t=this.items_.indexOf(e);if(t<0)return;this.items_.splice(t,1),this.cache_.delete(e);const r=this.extract_(e);r&&(r.emitter.off("add",this.onSubListAdd_),r.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:t,item:e,root:this,target:this})}onSubListAdd_(e){this.cache_.add(e.item),this.emitter.emit("add",{index:e.index,item:e.item,root:this,target:e.target})}onSubListRemove_(e){this.cache_.delete(e.item),this.emitter.emit("remove",{index:e.index,item:e.item,root:this,target:e.target})}}class at extends c{constructor(e){super(e),this.onBindingChange_=this.onBindingChange_.bind(this),this.emitter_=new I,this.controller_.binding.emitter.on("change",this.onBindingChange_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const r=t.bind(this);return this.emitter_.on(e,f=>{r(f.event)}),this}refresh(){this.controller_.binding.read()}onBindingChange_(e){const t=e.sender.target.read();this.emitter_.emit("change",{event:new E(this,t,this.controller_.binding.target.presetKey,e.options.last)})}}class Ne extends we{constructor(e,t){super(e,t),this.binding=t.binding}}class ct extends c{constructor(e){super(e),this.onBindingUpdate_=this.onBindingUpdate_.bind(this),this.emitter_=new I,this.controller_.binding.emitter.on("update",this.onBindingUpdate_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const r=t.bind(this);return this.emitter_.on(e,f=>{r(f.event)}),this}refresh(){this.controller_.binding.read()}onBindingUpdate_(e){const t=e.sender.target.read();this.emitter_.emit("update",{event:new P(this,t,this.controller_.binding.target.presetKey)})}}class rt extends we{constructor(e,t){super(e,t),this.binding=t.binding,this.viewProps.bindDisabled(this.binding.ticker),this.viewProps.handleDispose(()=>{this.binding.dispose()})}}function _t(n){return n instanceof Bt?n.apiSet_:n instanceof qe?n.rackApi_.apiSet_:null}function ot(n,e){const t=n.find(r=>r.controller_===e);if(!t)throw L.shouldNeverHappen();return t}function St(n,e,t){if(!F.isBindable(n))throw L.notBindable();return new F(n,e,t)}class Bt extends c{constructor(e,t){super(e),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.onRackInputChange_=this.onRackInputChange_.bind(this),this.onRackMonitorUpdate_=this.onRackMonitorUpdate_.bind(this),this.emitter_=new I,this.apiSet_=new Oe(_t),this.pool_=t;const r=this.controller_.rack;r.emitter.on("add",this.onRackAdd_),r.emitter.on("remove",this.onRackRemove_),r.emitter.on("inputchange",this.onRackInputChange_),r.emitter.on("monitorupdate",this.onRackMonitorUpdate_),r.children.forEach(f=>{this.setUpApi_(f)})}get children(){return this.controller_.rack.children.map(e=>ot(this.apiSet_,e))}addInput(e,t,r){const f=r??{},U=this.controller_.view.element.ownerDocument,K=this.pool_.createInput(U,St(e,t,f.presetKey),f),_e=new at(K);return this.add(_e,f.index)}addMonitor(e,t,r){const f=r??{},U=this.controller_.view.element.ownerDocument,K=this.pool_.createMonitor(U,St(e,t),f),_e=new ct(K);return this.add(_e,f.index)}addFolder(e){return Ye(this,e)}addButton(e){return et(this,e)}addSeparator(e){return dt(this,e)}addTab(e){return Ke(this,e)}add(e,t){this.controller_.rack.add(e.controller_,t);const r=this.apiSet_.find(f=>f.controller_===e.controller_);return r&&this.apiSet_.remove(r),this.apiSet_.add(e),e}remove(e){this.controller_.rack.remove(e.controller_)}addBlade(e){const t=this.controller_.view.element.ownerDocument,r=this.pool_.createBlade(t,e),f=this.pool_.createBladeApi(r);return this.add(f,e.index)}on(e,t){const r=t.bind(this);return this.emitter_.on(e,f=>{r(f.event)}),this}setUpApi_(e){this.apiSet_.find(r=>r.controller_===e)||this.apiSet_.add(this.pool_.createBladeApi(e))}onRackAdd_(e){this.setUpApi_(e.bladeController)}onRackRemove_(e){if(e.isRoot){const t=ot(this.apiSet_,e.bladeController);this.apiSet_.remove(t)}}onRackInputChange_(e){const t=e.bladeController;if(t instanceof Ne){const r=ot(this.apiSet_,t),f=t.binding;this.emitter_.emit("change",{event:new E(r,f.target.read(),f.target.presetKey,e.options.last)})}else if(t instanceof Ge){const r=ot(this.apiSet_,t);this.emitter_.emit("change",{event:new E(r,t.value.rawValue,void 0,e.options.last)})}}onRackMonitorUpdate_(e){if(!(e.bladeController instanceof rt))throw L.shouldNeverHappen();const t=ot(this.apiSet_,e.bladeController),r=e.bladeController.binding;this.emitter_.emit("update",{event:new P(t,r.target.read(),r.target.presetKey)})}}class ut extends qe{constructor(e,t){super(e,new Bt(e.rackController,t)),this.emitter_=new I,this.controller_.foldable.value("expanded").emitter.on("change",r=>{this.emitter_.emit("fold",{event:new k(this,r.sender.rawValue)})}),this.rackApi_.on("change",r=>{this.emitter_.emit("change",{event:r})}),this.rackApi_.on("update",r=>{this.emitter_.emit("update",{event:r})})}get expanded(){return this.controller_.foldable.get("expanded")}set expanded(e){this.controller_.foldable.set("expanded",e)}get title(){return this.controller_.props.get("title")}set title(e){this.controller_.props.set("title",e)}get children(){return this.rackApi_.children}addInput(e,t,r){return this.rackApi_.addInput(e,t,r)}addMonitor(e,t,r){return this.rackApi_.addMonitor(e,t,r)}addFolder(e){return this.rackApi_.addFolder(e)}addButton(e){return this.rackApi_.addButton(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){return this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addBlade(e){return this.rackApi_.addBlade(e)}on(e,t){const r=t.bind(this);return this.emitter_.on(e,f=>{r(f.event)}),this}}class lt extends A{constructor(e){super({blade:e.blade,view:e.view,viewProps:e.rackController.viewProps}),this.rackController=e.rackController}}class Vt{constructor(e,t){const r=N(t.viewName);this.element=e.createElement("div"),this.element.classList.add(r()),t.viewProps.bindClassModifiers(this.element)}}function yt(n,e){for(let t=0;t<n.length;t++){const r=n[t];if(r instanceof Ne&&r.binding===e)return r}return null}function Ut(n,e){for(let t=0;t<n.length;t++){const r=n[t];if(r instanceof rt&&r.binding===e)return r}return null}function Nt(n,e){for(let t=0;t<n.length;t++){const r=n[t];if(r instanceof Ge&&r.value===e)return r}return null}function Lt(n){return n instanceof tt?n.rack:n instanceof lt?n.rackController.rack:null}function qt(n){const e=Lt(n);return e?e.bcSet_:null}class zt{constructor(e){var t,r;this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildInputChange_=this.onChildInputChange_.bind(this),this.onChildMonitorUpdate_=this.onChildMonitorUpdate_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onDescendantLayout_=this.onDescendantLayout_.bind(this),this.onDescendantInputChange_=this.onDescendantInputChange_.bind(this),this.onDescendantMonitorUpdate_=this.onDescendantMonitorUpdate_.bind(this),this.emitter=new I,this.blade_=(t=e.blade)!==null&&t!==void 0?t:null,(r=this.blade_)===null||r===void 0||r.value("positions").emitter.on("change",this.onBladePositionsChange_),this.viewProps=e.viewProps,this.bcSet_=new Oe(qt),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(e,t){var r;(r=e.parent)===null||r===void 0||r.remove(e),q(e,"parent")?e.parent=this:(e.parent_=this,le({key:"parent",target:"BladeController",place:"BladeRack.add"})),this.bcSet_.add(e,t)}remove(e){q(e,"parent")?e.parent=null:(e.parent_=null,le({key:"parent",target:"BladeController",place:"BladeRack.remove"})),this.bcSet_.remove(e)}find(e){return this.bcSet_.allItems().filter(t=>t instanceof e)}onSetAdd_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("add",{bladeController:e.item,index:e.index,isRoot:t,sender:this}),!t)return;const r=e.item;if(r.viewProps.emitter.on("change",this.onChildViewPropsChange_),r.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),r.viewProps.handleDispose(this.onChildDispose_),r instanceof Ne)r.binding.emitter.on("change",this.onChildInputChange_);else if(r instanceof rt)r.binding.emitter.on("update",this.onChildMonitorUpdate_);else if(r instanceof Ge)r.value.emitter.on("change",this.onChildValueChange_);else{const f=Lt(r);if(f){const U=f.emitter;U.on("layout",this.onDescendantLayout_),U.on("inputchange",this.onDescendantInputChange_),U.on("monitorupdate",this.onDescendantMonitorUpdate_)}}}onSetRemove_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("remove",{bladeController:e.item,isRoot:t,sender:this}),!t)return;const r=e.item;if(r instanceof Ne)r.binding.emitter.off("change",this.onChildInputChange_);else if(r instanceof rt)r.binding.emitter.off("update",this.onChildMonitorUpdate_);else if(r instanceof Ge)r.value.emitter.off("change",this.onChildValueChange_);else{const f=Lt(r);if(f){const U=f.emitter;U.off("layout",this.onDescendantLayout_),U.off("inputchange",this.onDescendantInputChange_),U.off("monitorupdate",this.onDescendantMonitorUpdate_)}}}updatePositions_(){const e=this.bcSet_.items.filter(f=>!f.viewProps.get("hidden")),t=e[0],r=e[e.length-1];this.bcSet_.items.forEach(f=>{const U=[];f===t&&(U.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&U.push("veryfirst")),f===r&&(U.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&U.push("verylast")),f.blade.set("positions",U)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(t=>t.viewProps.get("disposed")).forEach(t=>{this.bcSet_.remove(t)})}onChildInputChange_(e){const t=yt(this.find(Ne),e.sender);if(!t)throw L.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onChildMonitorUpdate_(e){const t=Ut(this.find(rt),e.sender);if(!t)throw L.alreadyDisposed();this.emitter.emit("monitorupdate",{bladeController:t,sender:this})}onChildValueChange_(e){const t=Nt(this.find(Ge),e.sender);if(!t)throw L.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onDescendantLayout_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onDescendantInputChange_(e){this.emitter.emit("inputchange",{bladeController:e.bladeController,options:e.options,sender:this})}onDescendantMonitorUpdate_(e){this.emitter.emit("monitorupdate",{bladeController:e.bladeController,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class tt extends A{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new Vt(e,{viewName:"brk",viewProps:t.viewProps})})),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const r=new zt({blade:t.root?void 0:t.blade,viewProps:t.viewProps});r.emitter.on("add",this.onRackAdd_),r.emitter.on("remove",this.onRackRemove_),this.rack=r,this.viewProps.handleDispose(()=>{for(let f=this.rack.children.length-1;f>=0;f--)this.rack.children[f].viewProps.set("disposed",!0)})}onRackAdd_(e){e.isRoot&&O(this.view.element,e.bladeController.view.element,e.index)}onRackRemove_(e){e.isRoot&&$(e.bladeController.view.element)}}const Et=N("cnt");class Zt{constructor(e,t){var r;this.className_=N((r=t.viewName)!==null&&r!==void 0?r:"fld"),this.element=e.createElement("div"),this.element.classList.add(this.className_(),Et()),t.viewProps.bindClassModifiers(this.element),this.foldable_=t.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),ce(this.foldable_,"completed",xe(this.element,this.className_(void 0,"cpl")));const f=e.createElement("button");f.classList.add(this.className_("b")),ce(t.props,"title",Ie=>{z(Ie)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),t.viewProps.bindDisabled(f),this.element.appendChild(f),this.buttonElement=f;const U=e.createElement("div");U.classList.add(this.className_("i")),this.element.appendChild(U);const K=e.createElement("div");K.classList.add(this.className_("t")),Ae(t.props.value("title"),K),this.buttonElement.appendChild(K),this.titleElement=K;const _e=e.createElement("div");_e.classList.add(this.className_("m")),this.buttonElement.appendChild(_e);const Le=t.containerElement;Le.classList.add(this.className_("c")),this.element.appendChild(Le),this.containerElement=Le}}class Xt extends lt{constructor(e,t){var r;const f=Xe.create((r=t.expanded)!==null&&r!==void 0?r:!0),U=new tt(e,{blade:t.blade,root:t.root,viewProps:t.viewProps});super(Object.assign(Object.assign({},t),{rackController:U,view:new Zt(e,{containerElement:U.view.element,foldable:f,props:t.props,viewName:t.root?"rot":void 0,viewProps:t.viewProps})})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=t.props,this.foldable=f,Qe(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const xn={id:"folder",type:"blade",accept(n){const e=Pe,t=ee(n,{title:e.required.string,view:e.required.constant("folder"),expanded:e.optional.boolean});return t?{params:t}:null},controller(n){return new Xt(n.document,{blade:n.blade,expanded:n.params.expanded,props:he.fromObject({title:n.params.title}),viewProps:n.viewProps})},api(n){return n.controller instanceof Xt?new ut(n.controller,n.pool):null}};class Dt extends Ge{constructor(e,t){const r=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{value:t.valueController.value,view:new Me(e,{props:t.props,viewProps:r}),viewProps:r})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}class Wt extends c{}const Vn=N("spr");class It{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Vn()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("hr");r.classList.add(Vn("r")),this.element.appendChild(r)}}class yn extends A{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new It(e,{viewProps:t.viewProps})}))}}const ir={id:"separator",type:"blade",accept(n){const t=ee(n,{view:Pe.required.constant("separator")});return t?{params:t}:null},controller(n){return new yn(n.document,{blade:n.blade,viewProps:n.viewProps})},api(n){return n.controller instanceof yn?new Wt(n.controller):null}},Jt=N("tbi");class $n{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Jt()),t.viewProps.bindClassModifiers(this.element),ce(t.props,"selected",U=>{U?this.element.classList.add(Jt(void 0,"sel")):this.element.classList.remove(Jt(void 0,"sel"))});const r=e.createElement("button");r.classList.add(Jt("b")),t.viewProps.bindDisabled(r),this.element.appendChild(r),this.buttonElement=r;const f=e.createElement("div");f.classList.add(Jt("t")),Ae(t.props.value("title"),f),this.buttonElement.appendChild(f),this.titleElement=f}}class Pn{constructor(e,t){this.emitter=new I,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new $n(e,{props:t.props,viewProps:t.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class Qt{constructor(e,t){this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new Pn(e,{props:t.itemProps,viewProps:g.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.cc_=new tt(e,{blade:Fe(),viewProps:g.create()}),this.props=t.props,ce(this.props,"selected",r=>{this.itemController.props.set("selected",r),this.contentController.viewProps.set("hidden",!r)})}get itemController(){return this.ic_}get contentController(){return this.cc_}onItemClick_(){this.props.set("selected",!0)}}class Ss{constructor(e,t){this.controller_=e,this.rackApi_=t}get title(){var e;return(e=this.controller_.itemController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.itemController.props.set("title",e)}get selected(){return this.controller_.props.get("selected")}set selected(e){this.controller_.props.set("selected",e)}get children(){return this.rackApi_.children}addButton(e){return this.rackApi_.addButton(e)}addFolder(e){return this.rackApi_.addFolder(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addInput(e,t,r){return this.rackApi_.addInput(e,t,r)}addMonitor(e,t,r){return this.rackApi_.addMonitor(e,t,r)}addBlade(e){return this.rackApi_.addBlade(e)}}class ln extends qe{constructor(e,t){super(e,new Bt(e.rackController,t)),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.onSelect_=this.onSelect_.bind(this),this.emitter_=new I,this.pageApiMap_=new Map,this.rackApi_.on("change",r=>{this.emitter_.emit("change",{event:r})}),this.rackApi_.on("update",r=>{this.emitter_.emit("update",{event:r})}),this.controller_.tab.selectedIndex.emitter.on("change",this.onSelect_),this.controller_.pageSet.emitter.on("add",this.onPageAdd_),this.controller_.pageSet.emitter.on("remove",this.onPageRemove_),this.controller_.pageSet.items.forEach(r=>{this.setUpPageApi_(r)})}get pages(){return this.controller_.pageSet.items.map(e=>{const t=this.pageApiMap_.get(e);if(!t)throw L.shouldNeverHappen();return t})}addPage(e){const t=this.controller_.view.element.ownerDocument,r=new Qt(t,{itemProps:he.fromObject({selected:!1,title:e.title}),props:he.fromObject({selected:!1})});this.controller_.add(r,e.index);const f=this.pageApiMap_.get(r);if(!f)throw L.shouldNeverHappen();return f}removePage(e){this.controller_.remove(e)}on(e,t){const r=t.bind(this);return this.emitter_.on(e,f=>{r(f.event)}),this}setUpPageApi_(e){const t=this.rackApi_.apiSet_.find(f=>f.controller_===e.contentController);if(!t)throw L.shouldNeverHappen();const r=new Ss(e,t);this.pageApiMap_.set(e,r)}onPageAdd_(e){this.setUpPageApi_(e.item)}onPageRemove_(e){if(!this.pageApiMap_.get(e.item))throw L.shouldNeverHappen();this.pageApiMap_.delete(e.item)}onSelect_(e){this.emitter_.emit("select",{event:new R(this,e.rawValue)})}}const Es=-1;class ks{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=me(!0),this.selectedIndex=me(Es),this.items_=[]}add(e,t){const r=t??this.items_.length;this.items_.splice(r,0,e),e.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(e){const t=this.items_.indexOf(e);t<0||(this.items_.splice(t,1),e.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=Es,this.empty.rawValue=!0;return}const e=this.items_.findIndex(t=>t.rawValue);e<0?(this.items_.forEach((t,r)=>{t.rawValue=r===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((t,r)=>{t.rawValue=r===e}),this.selectedIndex.rawValue=e),this.empty.rawValue=!1}onItemSelectedChange_(e){if(e.rawValue){const t=this.items_.findIndex(r=>r===e.sender);this.items_.forEach((r,f)=>{r.rawValue=f===t}),this.selectedIndex.rawValue=t}else this.keepSelection_()}}const Sn=N("tab");class Ts{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Sn(),Et()),t.viewProps.bindClassModifiers(this.element),ae(t.empty,xe(this.element,Sn(void 0,"nop")));const r=e.createElement("div");r.classList.add(Sn("t")),this.element.appendChild(r),this.itemsElement=r;const f=e.createElement("div");f.classList.add(Sn("i")),this.element.appendChild(f);const U=t.contentsElement;U.classList.add(Sn("c")),this.element.appendChild(U),this.contentsElement=U}}class En extends lt{constructor(e,t){const r=new tt(e,{blade:t.blade,viewProps:t.viewProps}),f=new ks;super({blade:t.blade,rackController:r,view:new Ts(e,{contentsElement:r.view.element,empty:f.empty,viewProps:t.viewProps})}),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.pageSet_=new Oe(()=>null),this.pageSet_.emitter.on("add",this.onPageAdd_),this.pageSet_.emitter.on("remove",this.onPageRemove_),this.tab=f}get pageSet(){return this.pageSet_}add(e,t){this.pageSet_.add(e,t)}remove(e){this.pageSet_.remove(this.pageSet_.items[e])}onPageAdd_(e){const t=e.item;O(this.view.itemsElement,t.itemController.view.element,e.index),t.itemController.viewProps.set("parent",this.viewProps),this.rackController.rack.add(t.contentController,e.index),this.tab.add(t.props.value("selected"))}onPageRemove_(e){const t=e.item;$(t.itemController.view.element),t.itemController.viewProps.set("parent",null),this.rackController.rack.remove(t.contentController),this.tab.remove(t.props.value("selected"))}}const Nn={id:"tab",type:"blade",accept(n){const e=Pe,t=ee(n,{pages:e.required.array(e.required.object({title:e.required.string})),view:e.required.constant("tab")});return!t||t.pages.length===0?null:{params:t}},controller(n){const e=new En(n.document,{blade:n.blade,viewProps:n.viewProps});return n.params.pages.forEach(t=>{const r=new Qt(n.document,{itemProps:he.fromObject({selected:!1,title:t.title}),props:he.fromObject({selected:!1})});e.add(r)}),e},api(n){return n.controller instanceof En?new ln(n.controller,n.pool):null}};function Cs(n,e){const t=n.accept(e.params);if(!t)return null;const r=Pe.optional.boolean(e.params.disabled).value,f=Pe.optional.boolean(e.params.hidden).value;return n.controller({blade:Fe(),document:e.document,params:Object.assign(Object.assign({},t.params),{disabled:r,hidden:f}),viewProps:g.create({disabled:r,hidden:f})})}class ar{constructor(){this.disabled=!1,this.emitter=new I}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class cn{constructor(e,t){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=e,this.emitter=new I,this.interval_=t,this.setTimer_()}get disabled(){return this.disabled_}set disabled(e){this.disabled_=e,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const e=this.doc_.defaultView;e&&e.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const e=this.doc_.defaultView;e&&(this.timerId_=e.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class Bs{constructor(e){this.onValueChange_=this.onValueChange_.bind(this),this.reader=e.reader,this.writer=e.writer,this.emitter=new I,this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.target=e.target,this.read()}read(){const e=this.target.read();e!==void 0&&(this.value.rawValue=this.reader(e))}write_(e){this.writer(this.target,e)}onValueChange_(e){this.write_(e.rawValue),this.emitter.emit("change",{options:e.options,rawValue:e.rawValue,sender:this})}}function Ms(n,e){for(;n.length<e;)n.push(void 0)}function or(n){const e=[];return Ms(e,n),me(e)}function lr(n){const e=n.indexOf(void 0);return e<0?n:n.slice(0,e)}function xt(n,e){const t=[...lr(n),e];return t.length>n.length?t.splice(0,t.length-n.length):Ms(t,n.length),t}class cr{constructor(e){this.onTick_=this.onTick_.bind(this),this.reader_=e.reader,this.target=e.target,this.emitter=new I,this.value=e.value,this.ticker=e.ticker,this.ticker.emitter.on("tick",this.onTick_),this.read()}dispose(){this.ticker.dispose()}read(){const e=this.target.read();if(e===void 0)return;const t=this.value.rawValue,r=this.reader_(e);this.value.rawValue=xt(t,r),this.emitter.emit("update",{rawValue:r,sender:this})}onTick_(e){this.read()}}class kn{constructor(e){this.constraints=e}constrain(e){return this.constraints.reduce((t,r)=>r.constrain(t),e)}}function $t(n,e){if(n instanceof e)return n;if(n instanceof kn){const t=n.constraints.reduce((r,f)=>r||(f instanceof e?f:null),null);if(t)return t}return null}class un{constructor(e){this.values=he.fromObject({max:e.max,min:e.min})}constrain(e){const t=this.values.get("max"),r=this.values.get("min");return Math.min(Math.max(e,r),t)}}class dn{constructor(e){this.values=he.fromObject({options:e})}get options(){return this.values.get("options")}constrain(e){const t=this.values.get("options");return t.length===0||t.filter(f=>f.value===e).length>0?e:t[0].value}}class qn{constructor(e){this.values=he.fromObject({max:e.max,min:e.min})}get maxValue(){return this.values.get("max")}get minValue(){return this.values.get("min")}constrain(e){const t=this.values.get("max"),r=this.values.get("min");let f=e;return z(r)||(f=Math.max(f,r)),z(t)||(f=Math.min(f,t)),f}}class Tn{constructor(e,t=0){this.step=e,this.origin=t}constrain(e){const t=this.origin%this.step,r=Math.round((e-t)/this.step);return t+r*this.step}}const Wn=N("lst");class As{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.props_=t.props,this.element=e.createElement("div"),this.element.classList.add(Wn()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("select");r.classList.add(Wn("s")),t.viewProps.bindDisabled(r),this.element.appendChild(r),this.selectElement=r;const f=e.createElement("div");f.classList.add(Wn("m")),f.appendChild(y(e,"dropdown")),this.element.appendChild(f),t.value.emitter.on("change",this.onValueChange_),this.value_=t.value,ce(this.props_,"options",U=>{j(this.selectElement),U.forEach(K=>{const _e=e.createElement("option");_e.textContent=K.text,this.selectElement.appendChild(_e)}),this.update_()})}update_(){const e=this.props_.get("options").map(t=>t.value);this.selectElement.selectedIndex=e.indexOf(this.value_.rawValue)}onValueChange_(){this.update_()}}class pn{constructor(e,t){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new As(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(e){const t=e.currentTarget;this.value.rawValue=this.props.get("options")[t.selectedIndex].value}}const Kn=N("pop");class Rs{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Kn()),t.viewProps.bindClassModifiers(this.element),ae(t.shows,xe(this.element,Kn(void 0,"v")))}}class Cn{constructor(e,t){this.shows=me(!1),this.viewProps=t.viewProps,this.view=new Rs(e,{shows:this.shows,viewProps:this.viewProps})}}const Ds=N("txt");class Bn{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Ds()),t.viewProps.bindClassModifiers(this.element),this.props_=t.props,this.props_.emitter.on("change",this.onChange_);const r=e.createElement("input");r.classList.add(Ds("i")),r.type="text",t.viewProps.bindDisabled(r),this.element.appendChild(r),this.inputElement=r,t.value.emitter.on("change",this.onChange_),this.value_=t.value,this.refresh()}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value_.rawValue)}onChange_(){this.refresh()}}class jn{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=t.parser,this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new Bn(e,{props:t.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const r=e.currentTarget.value,f=this.parser_(r);z(f)||(this.value.rawValue=f),this.view.refresh()}}function D(n){return String(n)}function Q(n){return n==="false"?!1:!!n}function re(n){return D(n)}class ve{constructor(e){this.text=e}evaluate(){return Number(this.text)}toString(){return this.text}}const Se={"**":(n,e)=>Math.pow(n,e),"*":(n,e)=>n*e,"/":(n,e)=>n/e,"%":(n,e)=>n%e,"+":(n,e)=>n+e,"-":(n,e)=>n-e,"<<":(n,e)=>n<<e,">>":(n,e)=>n>>e,">>>":(n,e)=>n>>>e,"&":(n,e)=>n&e,"^":(n,e)=>n^e,"|":(n,e)=>n|e};class Ee{constructor(e,t,r){this.left=t,this.operator=e,this.right=r}evaluate(){const e=Se[this.operator];if(!e)throw new Error(`unexpected binary operator: '${this.operator}`);return e(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const be={"+":n=>n,"-":n=>-n,"~":n=>~n};class ye{constructor(e,t){this.operator=e,this.expression=t}evaluate(){const e=be[this.operator];if(!e)throw new Error(`unexpected unary operator: '${this.operator}`);return e(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function je(n){return(e,t)=>{for(let r=0;r<n.length;r++){const f=n[r](e,t);if(f!=="")return f}return""}}function Ve(n,e){var t;const r=n.substr(e).match(/^\s+/);return(t=r&&r[0])!==null&&t!==void 0?t:""}function mt(n,e){const t=n.substr(e,1);return t.match(/^[1-9]$/)?t:""}function Re(n,e){var t;const r=n.substr(e).match(/^[0-9]+/);return(t=r&&r[0])!==null&&t!==void 0?t:""}function it(n,e){const t=Re(n,e);if(t!=="")return t;const r=n.substr(e,1);if(e+=1,r!=="-"&&r!=="+")return"";const f=Re(n,e);return f===""?"":r+f}function Mt(n,e){const t=n.substr(e,1);if(e+=1,t.toLowerCase()!=="e")return"";const r=it(n,e);return r===""?"":t+r}function He(n,e){const t=n.substr(e,1);if(t==="0")return t;const r=mt(n,e);return e+=r.length,r===""?"":r+Re(n,e)}function Gt(n,e){const t=He(n,e);if(e+=t.length,t==="")return"";const r=n.substr(e,1);if(e+=r.length,r!==".")return"";const f=Re(n,e);return e+=f.length,t+r+f+Mt(n,e)}function bt(n,e){const t=n.substr(e,1);if(e+=t.length,t!==".")return"";const r=Re(n,e);return e+=r.length,r===""?"":t+r+Mt(n,e)}function hn(n,e){const t=He(n,e);return e+=t.length,t===""?"":t+Mt(n,e)}const Kt=je([Gt,bt,hn]);function Hn(n,e){var t;const r=n.substr(e).match(/^[01]+/);return(t=r&&r[0])!==null&&t!==void 0?t:""}function jt(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0b")return"";const r=Hn(n,e);return r===""?"":t+r}function kt(n,e){var t;const r=n.substr(e).match(/^[0-7]+/);return(t=r&&r[0])!==null&&t!==void 0?t:""}function Mn(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0o")return"";const r=kt(n,e);return r===""?"":t+r}function Yn(n,e){var t;const r=n.substr(e).match(/^[0-9a-f]+/i);return(t=r&&r[0])!==null&&t!==void 0?t:""}function en(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0x")return"";const r=Yn(n,e);return r===""?"":t+r}const Zn=je([jt,Mn,en]),Xn=je([Zn,Kt]);function ur(n,e){const t=Xn(n,e);return e+=t.length,t===""?null:{evaluable:new ve(t),cursor:e}}function cs(n,e){const t=n.substr(e,1);if(e+=t.length,t!=="(")return null;const r=ri(n,e);if(!r)return null;e=r.cursor,e+=Ve(n,e).length;const f=n.substr(e,1);return e+=f.length,f!==")"?null:{evaluable:r.evaluable,cursor:e}}function oo(n,e){var t;return(t=ur(n,e))!==null&&t!==void 0?t:cs(n,e)}function si(n,e){const t=oo(n,e);if(t)return t;const r=n.substr(e,1);if(e+=r.length,r!=="+"&&r!=="-"&&r!=="~")return null;const f=si(n,e);return f?(e=f.cursor,{cursor:e,evaluable:new ye(r,f.evaluable)}):null}function lo(n,e,t){t+=Ve(e,t).length;const r=n.filter(f=>e.startsWith(f,t))[0];return r?(t+=r.length,t+=Ve(e,t).length,{cursor:t,operator:r}):null}function co(n,e){return(t,r)=>{const f=n(t,r);if(!f)return null;r=f.cursor;let U=f.evaluable;for(;;){const K=lo(e,t,r);if(!K)break;r=K.cursor;const _e=n(t,r);if(!_e)return null;r=_e.cursor,U=new Ee(K.operator,U,_e.evaluable)}return U?{cursor:r,evaluable:U}:null}}const uo=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((n,e)=>co(n,e),si);function ri(n,e){return e+=Ve(n,e).length,uo(n,e)}function po(n){const e=ri(n,0);return!e||e.cursor+Ve(n,e.cursor).length!==n.length?null:e.evaluable}function tn(n){var e;const t=po(n);return(e=t==null?void 0:t.evaluate())!==null&&e!==void 0?e:null}function ii(n){if(typeof n=="number")return n;if(typeof n=="string"){const e=tn(n);if(!z(e))return e}return 0}function ho(n){return String(n)}function Pt(n){return e=>e.toFixed(Math.max(Math.min(n,20),0))}const fo=Pt(0);function Us(n){return fo(n)+"%"}function ai(n){return String(n)}function dr(n){return n}function us({primary:n,secondary:e,forward:t,backward:r}){let f=!1;function U(K){f||(f=!0,K(),f=!1)}n.emitter.on("change",K=>{U(()=>{e.setRawValue(t(n,e),K.options)})}),e.emitter.on("change",K=>{U(()=>{n.setRawValue(r(n,e),K.options)}),U(()=>{e.setRawValue(t(n,e),K.options)})}),U(()=>{e.setRawValue(t(n,e),{forceEmit:!1,last:!0})})}function At(n,e){const t=n*(e.altKey?.1:1)*(e.shiftKey?10:1);return e.upKey?+t:e.downKey?-t:0}function ds(n){return{altKey:n.altKey,downKey:n.key==="ArrowDown",shiftKey:n.shiftKey,upKey:n.key==="ArrowUp"}}function nn(n){return{altKey:n.altKey,downKey:n.key==="ArrowLeft",shiftKey:n.shiftKey,upKey:n.key==="ArrowRight"}}function _o(n){return n==="ArrowUp"||n==="ArrowDown"}function oi(n){return _o(n)||n==="ArrowLeft"||n==="ArrowRight"}function pr(n,e){var t,r;const f=e.ownerDocument.defaultView,U=e.getBoundingClientRect();return{x:n.pageX-(((t=f&&f.scrollX)!==null&&t!==void 0?t:0)+U.left),y:n.pageY-(((r=f&&f.scrollY)!==null&&r!==void 0?r:0)+U.top)}}class An{constructor(e){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=e,this.emitter=new I,e.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),e.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),e.addEventListener("touchend",this.onTouchEnd_),e.addEventListener("mousedown",this.onMouseDown_)}computePosition_(e){const t=this.elem_.getBoundingClientRect();return{bounds:{width:t.width,height:t.height},point:e?{x:e.x,y:e.y}:null}}onMouseDown_(e){var t;e.preventDefault(),(t=e.currentTarget)===null||t===void 0||t.focus();const r=this.elem_.ownerDocument;r.addEventListener("mousemove",this.onDocumentMouseMove_),r.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(pr(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseMove_(e){this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(pr(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseUp_(e){const t=this.elem_.ownerDocument;t.removeEventListener("mousemove",this.onDocumentMouseMove_),t.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(pr(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onTouchStart_(e){e.preventDefault();const t=e.targetTouches.item(0),r=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-r.left,y:t.clientY-r.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchMove_(e){const t=e.targetTouches.item(0),r=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-r.left,y:t.clientY-r.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchEnd_(e){var t;const r=(t=e.targetTouches.item(0))!==null&&t!==void 0?t:this.lastTouch_,f=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(r?{x:r.clientX-f.left,y:r.clientY-f.top}:void 0),sender:this,shiftKey:e.shiftKey})}}function pt(n,e,t,r,f){const U=(n-e)/(t-e);return r+U*(f-r)}function li(n){return String(n.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function wt(n,e,t){return Math.min(Math.max(n,e),t)}function ci(n,e){return(n%e+e)%e}const Ft=N("txt");class mo{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(Ft(),Ft(void 0,"num")),t.arrayPosition&&this.element.classList.add(Ft(void 0,t.arrayPosition)),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("input");r.classList.add(Ft("i")),r.type="text",t.viewProps.bindDisabled(r),this.element.appendChild(r),this.inputElement=r,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=t.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(Ft()),this.inputElement.classList.add(Ft("i"));const f=e.createElement("div");f.classList.add(Ft("k")),this.element.appendChild(f),this.knobElement=f;const U=e.createElementNS(w,"svg");U.classList.add(Ft("g")),this.knobElement.appendChild(U);const K=e.createElementNS(w,"path");K.classList.add(Ft("gb")),U.appendChild(K),this.guideBodyElem_=K;const _e=e.createElementNS(w,"path");_e.classList.add(Ft("gh")),U.appendChild(_e),this.guideHeadElem_=_e;const Le=e.createElement("div");Le.classList.add(N("tt")()),this.knobElement.appendChild(Le),this.tooltipElem_=Le,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.refresh()}onDraggingChange_(e){if(e.rawValue===null){this.element.classList.remove(Ft(void 0,"drg"));return}this.element.classList.add(Ft(void 0,"drg"));const t=e.rawValue/this.props_.get("draggingScale"),r=t+(t>0?-1:t<0?1:0),f=wt(-r,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${r+f},0 L${r},4 L${r+f},8`,`M ${t},-1 L${t},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${t},4`);const U=this.props_.get("formatter");this.tooltipElem_.textContent=U(this.value.rawValue),this.tooltipElem_.style.left=`${t}px`}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value.rawValue)}onChange_(){this.refresh()}}class ps{constructor(e,t){var r;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.parser_=t.parser,this.props=t.props,this.sliderProps_=(r=t.sliderProps)!==null&&r!==void 0?r:null,this.value=t.value,this.viewProps=t.viewProps,this.dragging_=me(null),this.view=new mo(e,{arrayPosition:t.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const f=new An(this.view.knobElement);f.emitter.on("down",this.onPointerDown_),f.emitter.on("move",this.onPointerMove_),f.emitter.on("up",this.onPointerUp_)}constrainValue_(e){var t,r;const f=(t=this.sliderProps_)===null||t===void 0?void 0:t.get("minValue"),U=(r=this.sliderProps_)===null||r===void 0?void 0:r.get("maxValue");let K=e;return f!==void 0&&(K=Math.max(K,f)),U!==void 0&&(K=Math.min(K,U)),K}onInputChange_(e){const r=e.currentTarget.value,f=this.parser_(r);z(f)||(this.value.rawValue=this.constrainValue_(f)),this.view.refresh()}onInputKeyDown_(e){const t=At(this.baseStep_,ds(e));t!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+t),{forceEmit:!1,last:!1})}onInputKeyUp_(e){At(this.baseStep_,ds(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(e){if(!e.point)return null;const t=e.point.x-e.bounds.width/2;return this.constrainValue_(this.originRawValue_+t*this.props.get("draggingScale"))}onPointerMove_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const hr=N("sld");class vo{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(hr()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("div");r.classList.add(hr("t")),t.viewProps.bindTabIndex(r),this.element.appendChild(r),this.trackElement=r;const f=e.createElement("div");f.classList.add(hr("k")),this.trackElement.appendChild(f),this.knobElement=f,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.update_()}update_(){const e=wt(pt(this.value.rawValue,this.props_.get("minValue"),this.props_.get("maxValue"),0,100),0,100);this.knobElement.style.width=`${e}%`}onChange_(){this.update_()}}class bo{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.value=t.value,this.viewProps=t.viewProps,this.props=t.props,this.view=new vo(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new An(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){e.point&&this.value.setRawValue(pt(wt(e.point.x,0,e.bounds.width),0,e.bounds.width,this.props.get("minValue"),this.props.get("maxValue")),t)}onPointerDownOrMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=At(this.baseStep_,nn(e));t!==0&&this.value.setRawValue(this.value.rawValue+t,{forceEmit:!1,last:!1})}onKeyUp_(e){At(this.baseStep_,nn(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const fr=N("sldtxt");class go{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(fr());const r=e.createElement("div");r.classList.add(fr("s")),this.sliderView_=t.sliderView,r.appendChild(this.sliderView_.element),this.element.appendChild(r);const f=e.createElement("div");f.classList.add(fr("t")),this.textView_=t.textView,f.appendChild(this.textView_.element),this.element.appendChild(f)}}class _r{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.sliderC_=new bo(e,{baseStep:t.baseStep,props:t.sliderProps,value:t.value,viewProps:this.viewProps}),this.textC_=new ps(e,{baseStep:t.baseStep,parser:t.parser,props:t.textProps,sliderProps:t.sliderProps,value:t.value,viewProps:t.viewProps}),this.view=new go(e,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}}function hs(n,e){n.write(e)}function Ls(n){const e=Pe;if(Array.isArray(n))return e.required.array(e.required.object({text:e.required.string,value:e.required.raw}))(n).value;if(typeof n=="object")return e.required.raw(n).value}function ui(n){if(n==="inline"||n==="popup")return n}function fn(n){const e=Pe;return e.required.object({max:e.optional.number,min:e.optional.number,step:e.optional.number})(n).value}function di(n){if(Array.isArray(n))return n;const e=[];return Object.keys(n).forEach(t=>{e.push({text:t,value:n[t]})}),e}function mr(n){return z(n)?null:new dn(di(n))}function wo(n){const e=n?$t(n,Tn):null;return e?e.step:null}function zs(n,e){const t=n&&$t(n,Tn);return t?li(t.step):Math.max(li(e),2)}function Jn(n){const e=wo(n);return e??1}function Qn(n,e){var t;const r=n&&$t(n,Tn),f=Math.abs((t=r==null?void 0:r.step)!==null&&t!==void 0?t:e);return f===0?.1:Math.pow(10,Math.floor(Math.log10(f))-1)}const Is=N("ckb");class xo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Is()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("label");r.classList.add(Is("l")),this.element.appendChild(r);const f=e.createElement("input");f.classList.add(Is("i")),f.type="checkbox",r.appendChild(f),this.inputElement=f,t.viewProps.bindDisabled(this.inputElement);const U=e.createElement("div");U.classList.add(Is("w")),r.appendChild(U);const K=y(e,"check");U.appendChild(K),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class yo{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new xo(e,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const t=e.currentTarget;this.value.rawValue=t.checked}}function Po(n){const e=[],t=mr(n.options);return t&&e.push(t),new kn(e)}const So={id:"input-bool",type:"input",accept:(n,e)=>{if(typeof n!="boolean")return null;const r=ee(e,{options:Pe.optional.custom(Ls)});return r?{initialValue:n,params:r}:null},binding:{reader:n=>Q,constraint:n=>Po(n.params),writer:n=>hs},controller:n=>{const e=n.document,t=n.value,r=n.constraint,f=r&&$t(r,dn);return f?new pn(e,{props:new he({options:f.values.value("options")}),value:t,viewProps:n.viewProps}):new yo(e,{value:t,viewProps:n.viewProps})}},Rn=N("col");class Eo{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Rn()),t.foldable.bindExpandedClass(this.element,Rn(void 0,"expanded")),ce(t.foldable,"completed",xe(this.element,Rn(void 0,"cpl")));const r=e.createElement("div");r.classList.add(Rn("h")),this.element.appendChild(r);const f=e.createElement("div");f.classList.add(Rn("s")),r.appendChild(f),this.swatchElement=f;const U=e.createElement("div");if(U.classList.add(Rn("t")),r.appendChild(U),this.textElement=U,t.pickerLayout==="inline"){const K=e.createElement("div");K.classList.add(Rn("p")),this.element.appendChild(K),this.pickerElement=K}else this.pickerElement=null}}function ko(n,e,t){const r=wt(n/255,0,1),f=wt(e/255,0,1),U=wt(t/255,0,1),K=Math.max(r,f,U),_e=Math.min(r,f,U),Le=K-_e;let Ie=0,Ze=0;const nt=(_e+K)/2;return Le!==0&&(Ze=Le/(1-Math.abs(K+_e-1)),r===K?Ie=(f-U)/Le:f===K?Ie=2+(U-r)/Le:Ie=4+(r-f)/Le,Ie=Ie/6+(Ie<0?1:0)),[Ie*360,Ze*100,nt*100]}function To(n,e,t){const r=(n%360+360)%360,f=wt(e/100,0,1),U=wt(t/100,0,1),K=(1-Math.abs(2*U-1))*f,_e=K*(1-Math.abs(r/60%2-1)),Le=U-K/2;let Ie,Ze,nt;return r>=0&&r<60?[Ie,Ze,nt]=[K,_e,0]:r>=60&&r<120?[Ie,Ze,nt]=[_e,K,0]:r>=120&&r<180?[Ie,Ze,nt]=[0,K,_e]:r>=180&&r<240?[Ie,Ze,nt]=[0,_e,K]:r>=240&&r<300?[Ie,Ze,nt]=[_e,0,K]:[Ie,Ze,nt]=[K,0,_e],[(Ie+Le)*255,(Ze+Le)*255,(nt+Le)*255]}function Co(n,e,t){const r=wt(n/255,0,1),f=wt(e/255,0,1),U=wt(t/255,0,1),K=Math.max(r,f,U),_e=Math.min(r,f,U),Le=K-_e;let Ie;Le===0?Ie=0:K===r?Ie=60*(((f-U)/Le%6+6)%6):K===f?Ie=60*((U-r)/Le+2):Ie=60*((r-f)/Le+4);const Ze=K===0?0:Le/K,nt=K;return[Ie,Ze*100,nt*100]}function pi(n,e,t){const r=ci(n,360),f=wt(e/100,0,1),U=wt(t/100,0,1),K=U*f,_e=K*(1-Math.abs(r/60%2-1)),Le=U-K;let Ie,Ze,nt;return r>=0&&r<60?[Ie,Ze,nt]=[K,_e,0]:r>=60&&r<120?[Ie,Ze,nt]=[_e,K,0]:r>=120&&r<180?[Ie,Ze,nt]=[0,K,_e]:r>=180&&r<240?[Ie,Ze,nt]=[0,_e,K]:r>=240&&r<300?[Ie,Ze,nt]=[_e,0,K]:[Ie,Ze,nt]=[K,0,_e],[(Ie+Le)*255,(Ze+Le)*255,(nt+Le)*255]}function Bo(n,e,t){const r=t+e*(100-Math.abs(2*t-100))/200;return[n,r!==0?e*(100-Math.abs(2*t-100))/r:0,t+e*(100-Math.abs(2*t-100))/(2*100)]}function Mo(n,e,t){const r=100-Math.abs(t*(200-e)/100-100);return[n,r!==0?e*t/r:0,t*(200-e)/(2*100)]}function Dn(n){return[n[0],n[1],n[2]]}function hi(n,e){return[n[0],n[1],n[2],e]}const Ao={hsl:{hsl:(n,e,t)=>[n,e,t],hsv:Bo,rgb:To},hsv:{hsl:Mo,hsv:(n,e,t)=>[n,e,t],rgb:pi},rgb:{hsl:ko,hsv:Co,rgb:(n,e,t)=>[n,e,t]}};function Gs(n,e){return[e==="float"?1:n==="rgb"?255:360,e==="float"?1:n==="rgb"?255:100,e==="float"?1:n==="rgb"?255:100]}function Ro(n,e){return n===e?e:ci(n,e)}function Do(n,e,t){var r;const f=Gs(e,t);return[e==="rgb"?wt(n[0],0,f[0]):Ro(n[0],f[0]),wt(n[1],0,f[1]),wt(n[2],0,f[2]),wt((r=n[3])!==null&&r!==void 0?r:1,0,1)]}function fi(n,e,t,r){const f=Gs(e,t),U=Gs(e,r);return n.map((K,_e)=>K/f[_e]*U[_e])}function Uo(n,e,t){const r=fi(n,e.mode,e.type,"int"),f=Ao[e.mode][t.mode](...r);return fi(f,t.mode,"int",t.type)}function Fs(n,e){return typeof n!="object"||z(n)?!1:e in n&&typeof n[e]=="number"}class We{static black(e="int"){return new We([0,0,0],"rgb",e)}static fromObject(e,t="int"){const r="a"in e?[e.r,e.g,e.b,e.a]:[e.r,e.g,e.b];return new We(r,"rgb",t)}static toRgbaObject(e,t="int"){return e.toRgbaObject(t)}static isRgbColorObject(e){return Fs(e,"r")&&Fs(e,"g")&&Fs(e,"b")}static isRgbaColorObject(e){return this.isRgbColorObject(e)&&Fs(e,"a")}static isColorObject(e){return this.isRgbColorObject(e)}static equals(e,t){if(e.mode!==t.mode)return!1;const r=e.comps_,f=t.comps_;for(let U=0;U<r.length;U++)if(r[U]!==f[U])return!1;return!0}constructor(e,t,r="int"){this.mode=t,this.type=r,this.comps_=Do(e,t,r)}getComponents(e,t="int"){return hi(Uo(Dn(this.comps_),{mode:this.mode,type:this.type},{mode:e??this.mode,type:t}),this.comps_[3])}toRgbaObject(e="int"){const t=this.getComponents("rgb",e);return{r:t[0],g:t[1],b:t[2],a:t[3]}}}const _n=N("colp");class Lo{constructor(e,t){this.alphaViews_=null,this.element=e.createElement("div"),this.element.classList.add(_n()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("div");r.classList.add(_n("hsv"));const f=e.createElement("div");f.classList.add(_n("sv")),this.svPaletteView_=t.svPaletteView,f.appendChild(this.svPaletteView_.element),r.appendChild(f);const U=e.createElement("div");U.classList.add(_n("h")),this.hPaletteView_=t.hPaletteView,U.appendChild(this.hPaletteView_.element),r.appendChild(U),this.element.appendChild(r);const K=e.createElement("div");if(K.classList.add(_n("rgb")),this.textView_=t.textView,K.appendChild(this.textView_.element),this.element.appendChild(K),t.alphaViews){this.alphaViews_={palette:t.alphaViews.palette,text:t.alphaViews.text};const _e=e.createElement("div");_e.classList.add(_n("a"));const Le=e.createElement("div");Le.classList.add(_n("ap")),Le.appendChild(this.alphaViews_.palette.element),_e.appendChild(Le);const Ie=e.createElement("div");Ie.classList.add(_n("at")),Ie.appendChild(this.alphaViews_.text.element),_e.appendChild(Ie),this.element.appendChild(_e)}}get allFocusableElements(){const e=[this.svPaletteView_.element,this.hPaletteView_.element,this.textView_.modeSelectElement,...this.textView_.textViews.map(t=>t.inputElement)];return this.alphaViews_&&e.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),e}}function zo(n){return n==="int"?"int":n==="float"?"float":void 0}function vr(n){const e=Pe;return ee(n,{alpha:e.optional.boolean,color:e.optional.object({alpha:e.optional.boolean,type:e.optional.custom(zo)}),expanded:e.optional.boolean,picker:e.optional.custom(ui)})}function Un(n){return n?.1:1}function Ln(n){var e;return(e=n.color)===null||e===void 0?void 0:e.type}function Io(n,e){return n.alpha===e.alpha&&n.mode===e.mode&&n.notation===e.notation&&n.type===e.type}function Ot(n,e){const t=n.match(/^(.+)%$/);return Math.min(t?parseFloat(t[1])*.01*e:parseFloat(n),e)}const Go={deg:n=>n,grad:n=>n*360/400,rad:n=>n*360/(2*Math.PI),turn:n=>n*360};function _i(n){const e=n.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!e)return parseFloat(n);const t=parseFloat(e[1]),r=e[2];return Go[r](t)}function mi(n){const e=n.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[Ot(e[1],255),Ot(e[2],255),Ot(e[3],255)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function vi(n){return e=>{const t=mi(e);return t?new We(t,"rgb",n):null}}function bi(n){const e=n.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[Ot(e[1],255),Ot(e[2],255),Ot(e[3],255),Ot(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function gi(n){return e=>{const t=bi(e);return t?new We(t,"rgb",n):null}}function wi(n){const e=n.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[_i(e[1]),Ot(e[2],100),Ot(e[3],100)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function xi(n){return e=>{const t=wi(e);return t?new We(t,"hsl",n):null}}function yi(n){const e=n.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[_i(e[1]),Ot(e[2],100),Ot(e[3],100),Ot(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function Pi(n){return e=>{const t=yi(e);return t?new We(t,"hsl",n):null}}function Si(n){const e=n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)];const t=n.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:null}function Fo(n){const e=Si(n);return e?new We(e,"rgb","int"):null}function Ei(n){const e=n.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16),pt(parseInt(e[4]+e[4],16),0,255,0,1)];const t=n.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16),pt(parseInt(t[4],16),0,255,0,1)]:null}function Oo(n){const e=Ei(n);return e?new We(e,"rgb","int"):null}function ki(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function Ti(n){return e=>{const t=ki(e);return t?new We(t,"rgb",n):null}}function Ci(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3]),parseFloat(e[4])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function Bi(n){return e=>{const t=Ci(e);return t?new We(t,"rgb",n):null}}const Vo=[{parser:Si,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:Ei,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:mi,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:bi,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:wi,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:yi,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:ki,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:Ci,result:{alpha:!0,mode:"rgb",notation:"object"}}];function $o(n){return Vo.reduce((e,{parser:t,result:r})=>e||(t(n)?r:null),null)}function br(n,e="int"){const t=$o(n);return t?t.notation==="hex"&&e!=="float"?Object.assign(Object.assign({},t),{type:"int"}):t.notation==="func"?Object.assign(Object.assign({},t),{type:e}):null:null}const Mi={int:[Fo,Oo,vi("int"),gi("int"),xi("int"),Pi("int"),Ti("int"),Bi("int")],float:[vi("float"),gi("float"),xi("float"),Pi("float"),Ti("float"),Bi("float")]};function No(n){const e=Mi[n];return t=>{if(typeof t!="string")return We.black(n);const r=e.reduce((f,U)=>f||U(t),null);return r??We.black(n)}}function gr(n){const e=Mi[n];return t=>e.reduce((r,f)=>r||f(t),null)}function Ai(n){const e=wt(Math.floor(n),0,255).toString(16);return e.length===1?`0${e}`:e}function Ri(n,e="#"){const t=Dn(n.getComponents("rgb")).map(Ai).join("");return`${e}${t}`}function wr(n,e="#"){const t=n.getComponents("rgb"),r=[t[0],t[1],t[2],t[3]*255].map(Ai).join("");return`${e}${r}`}function Di(n,e){const t=Pt(e==="float"?2:0);return`rgb(${Dn(n.getComponents("rgb",e)).map(f=>t(f)).join(", ")})`}function qo(n){return e=>Di(e,n)}function Os(n,e){const t=Pt(2),r=Pt(e==="float"?2:0);return`rgba(${n.getComponents("rgb",e).map((U,K)=>(K===3?t:r)(U)).join(", ")})`}function Wo(n){return e=>Os(e,n)}function Ko(n){const e=[Pt(0),Us,Us];return`hsl(${Dn(n.getComponents("hsl")).map((r,f)=>e[f](r)).join(", ")})`}function jo(n){const e=[Pt(0),Us,Us,Pt(2)];return`hsla(${n.getComponents("hsl").map((r,f)=>e[f](r)).join(", ")})`}function Ui(n,e){const t=Pt(e==="float"?2:0),r=["r","g","b"];return`{${Dn(n.getComponents("rgb",e)).map((U,K)=>`${r[K]}: ${t(U)}`).join(", ")}}`}function Ho(n){return e=>Ui(e,n)}function Li(n,e){const t=Pt(2),r=Pt(e==="float"?2:0),f=["r","g","b","a"];return`{${n.getComponents("rgb",e).map((K,_e)=>{const Le=_e===3?t:r;return`${f[_e]}: ${Le(K)}`}).join(", ")}}`}function Yo(n){return e=>Li(e,n)}const Zo=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:Ri},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:wr},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:Ko},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:jo},...["int","float"].reduce((n,e)=>[...n,{format:{alpha:!1,mode:"rgb",notation:"func",type:e},stringifier:qo(e)},{format:{alpha:!0,mode:"rgb",notation:"func",type:e},stringifier:Wo(e)},{format:{alpha:!1,mode:"rgb",notation:"object",type:e},stringifier:Ho(e)},{format:{alpha:!0,mode:"rgb",notation:"object",type:e},stringifier:Yo(e)}],[])];function xr(n){return Zo.reduce((e,t)=>e||(Io(t.format,n)?t.stringifier:null),null)}const fs=N("apl");class Xo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(fs()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const r=e.createElement("div");r.classList.add(fs("b")),this.element.appendChild(r);const f=e.createElement("div");f.classList.add(fs("c")),r.appendChild(f),this.colorElem_=f;const U=e.createElement("div");U.classList.add(fs("m")),this.element.appendChild(U),this.markerElem_=U;const K=e.createElement("div");K.classList.add(fs("p")),this.markerElem_.appendChild(K),this.previewElem_=K,this.update_()}update_(){const e=this.value.rawValue,t=e.getComponents("rgb"),r=new We([t[0],t[1],t[2],0],"rgb"),f=new We([t[0],t[1],t[2],255],"rgb"),U=["to right",Os(r),Os(f)];this.colorElem_.style.background=`linear-gradient(${U.join(",")})`,this.previewElem_.style.backgroundColor=Os(e);const K=pt(t[3],0,1,0,100);this.markerElem_.style.left=`${K}%`}onValueChange_(){this.update_()}}class Jo{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Xo(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new An(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const r=e.point.x/e.bounds.width,f=this.value.rawValue,[U,K,_e]=f.getComponents("hsv");this.value.setRawValue(new We([U,K,_e,r],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=At(Un(!0),nn(e));if(t===0)return;const r=this.value.rawValue,[f,U,K,_e]=r.getComponents("hsv");this.value.setRawValue(new We([f,U,K,_e+t],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){At(Un(!0),nn(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const es=N("coltxt");function Qo(n){const e=n.createElement("select"),t=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"}];return e.appendChild(t.reduce((r,f)=>{const U=n.createElement("option");return U.textContent=f.text,U.value=f.value,r.appendChild(U),r},n.createDocumentFragment())),e}class el{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(es()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("div");r.classList.add(es("m")),this.modeElem_=Qo(e),this.modeElem_.classList.add(es("ms")),r.appendChild(this.modeSelectElement),t.viewProps.bindDisabled(this.modeElem_);const f=e.createElement("div");f.classList.add(es("mm")),f.appendChild(y(e,"dropdown")),r.appendChild(f),this.element.appendChild(r);const U=e.createElement("div");U.classList.add(es("w")),this.element.appendChild(U),this.textsElem_=U,this.textViews_=t.textViews,this.applyTextViews_(),ae(t.colorMode,K=>{this.modeElem_.value=K})}get modeSelectElement(){return this.modeElem_}get textViews(){return this.textViews_}set textViews(e){this.textViews_=e,this.applyTextViews_()}applyTextViews_(){j(this.textsElem_);const e=this.element.ownerDocument;this.textViews_.forEach(t=>{const r=e.createElement("div");r.classList.add(es("c")),r.appendChild(t.element),this.textsElem_.appendChild(r)})}}function tl(n){return Pt(n==="float"?2:0)}function nl(n,e,t){const r=Gs(n,e)[t];return new un({min:0,max:r})}function yr(n,e,t){return new ps(n,{arrayPosition:t===0?"fst":t===3-1?"lst":"mid",baseStep:Un(!1),parser:e.parser,props:he.fromObject({draggingScale:e.colorType==="float"?.01:1,formatter:tl(e.colorType)}),value:me(0,{constraint:nl(e.colorMode,e.colorType,t)}),viewProps:e.viewProps})}class sl{constructor(e,t){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=t.colorType,this.parser_=t.parser,this.value=t.value,this.viewProps=t.viewProps,this.colorMode=me(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(e),this.view=new el(e,{colorMode:this.colorMode,textViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view],viewProps:this.viewProps}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(e){const t={colorMode:this.colorMode.rawValue,colorType:this.colorType_,parser:this.parser_,viewProps:this.viewProps},r=[yr(e,t,0),yr(e,t,1),yr(e,t,2)];return r.forEach((f,U)=>{us({primary:this.value,secondary:f.value,forward:K=>K.rawValue.getComponents(this.colorMode.rawValue,this.colorType_)[U],backward:(K,_e)=>{const Le=this.colorMode.rawValue,Ie=K.rawValue.getComponents(Le,this.colorType_);return Ie[U]=_e.rawValue,new We(hi(Dn(Ie),Ie[3]),Le,this.colorType_)}})}),r}onModeSelectChange_(e){const t=e.currentTarget;this.colorMode.rawValue=t.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.textViews=[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}}const Pr=N("hpl");class rl{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(Pr()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const r=e.createElement("div");r.classList.add(Pr("c")),this.element.appendChild(r);const f=e.createElement("div");f.classList.add(Pr("m")),this.element.appendChild(f),this.markerElem_=f,this.update_()}update_(){const e=this.value.rawValue,[t]=e.getComponents("hsv");this.markerElem_.style.backgroundColor=Di(new We([t,100,100],"hsv"));const r=pt(t,0,360,0,100);this.markerElem_.style.left=`${r}%`}onValueChange_(){this.update_()}}class il{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new rl(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new An(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const r=pt(wt(e.point.x,0,e.bounds.width),0,e.bounds.width,0,360),f=this.value.rawValue,[,U,K,_e]=f.getComponents("hsv");this.value.setRawValue(new We([r,U,K,_e],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=At(Un(!1),nn(e));if(t===0)return;const r=this.value.rawValue,[f,U,K,_e]=r.getComponents("hsv");this.value.setRawValue(new We([f+t,U,K,_e],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){At(Un(!1),nn(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Sr=N("svp"),zi=64;class al{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(Sr()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const r=e.createElement("canvas");r.height=zi,r.width=zi,r.classList.add(Sr("c")),this.element.appendChild(r),this.canvasElement=r;const f=e.createElement("div");f.classList.add(Sr("m")),this.element.appendChild(f),this.markerElem_=f,this.update_()}update_(){const e=b(this.canvasElement);if(!e)return;const r=this.value.rawValue.getComponents("hsv"),f=this.canvasElement.width,U=this.canvasElement.height,K=e.getImageData(0,0,f,U),_e=K.data;for(let Ze=0;Ze<U;Ze++)for(let nt=0;nt<f;nt++){const zn=pt(nt,0,f,0,100),ms=pt(Ze,0,U,100,0),vs=pi(r[0],zn,ms),Vs=(Ze*f+nt)*4;_e[Vs]=vs[0],_e[Vs+1]=vs[1],_e[Vs+2]=vs[2],_e[Vs+3]=255}e.putImageData(K,0,0);const Le=pt(r[1],0,100,0,100);this.markerElem_.style.left=`${Le}%`;const Ie=pt(r[2],0,100,100,0);this.markerElem_.style.top=`${Ie}%`}onValueChange_(){this.update_()}}class ol{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new al(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new An(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const r=pt(e.point.x,0,e.bounds.width,0,100),f=pt(e.point.y,0,e.bounds.height,100,0),[U,,,K]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new We([U,r,f,K],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){oi(e.key)&&e.preventDefault();const[t,r,f,U]=this.value.rawValue.getComponents("hsv"),K=Un(!1),_e=At(K,nn(e)),Le=At(K,ds(e));_e===0&&Le===0||this.value.setRawValue(new We([t,r+_e,f+Le,U],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){const t=Un(!1),r=At(t,nn(e)),f=At(t,ds(e));r===0&&f===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class ll{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.hPaletteC_=new il(e,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new ol(e,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=t.supportsAlpha?{palette:new Jo(e,{value:this.value,viewProps:this.viewProps}),text:new ps(e,{parser:tn,baseStep:.1,props:he.fromObject({draggingScale:.01,formatter:Pt(2)}),value:me(0,{constraint:new un({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&us({primary:this.value,secondary:this.alphaIcs_.text.value,forward:r=>r.rawValue.getComponents()[3],backward:(r,f)=>{const U=r.rawValue.getComponents();return U[3]=f.rawValue,new We(U,r.rawValue.mode)}}),this.textC_=new sl(e,{colorType:t.colorType,parser:tn,value:this.value,viewProps:this.viewProps}),this.view=new Lo(e,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:t.supportsAlpha,svPaletteView:this.svPaletteC_.view,textView:this.textC_.view,viewProps:this.viewProps})}get textController(){return this.textC_}}const Er=N("colsw");class cl{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.element=e.createElement("div"),this.element.classList.add(Er()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("div");r.classList.add(Er("sw")),this.element.appendChild(r),this.swatchElem_=r;const f=e.createElement("button");f.classList.add(Er("b")),t.viewProps.bindDisabled(f),this.element.appendChild(f),this.buttonElement=f,this.update_()}update_(){const e=this.value.rawValue;this.swatchElem_.style.backgroundColor=wr(e)}onValueChange_(){this.update_()}}class ul{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new cl(e,{value:this.value,viewProps:this.viewProps})}}class kr{constructor(e,t){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=Xe.create(t.expanded),this.swatchC_=new ul(e,{value:this.value,viewProps:this.viewProps});const r=this.swatchC_.view.buttonElement;r.addEventListener("blur",this.onButtonBlur_),r.addEventListener("click",this.onButtonClick_),this.textC_=new jn(e,{parser:t.parser,props:he.fromObject({formatter:t.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new Eo(e,{foldable:this.foldable_,pickerLayout:t.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=t.pickerLayout==="popup"?new Cn(e,{viewProps:this.viewProps}):null;const f=new ll(e,{colorType:t.colorType,supportsAlpha:t.supportsAlpha,value:this.value,viewProps:this.viewProps});f.view.allFocusableElements.forEach(U=>{U.addEventListener("blur",this.onPopupChildBlur_),U.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=f,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(f.view.element),us({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:U=>U.rawValue,backward:(U,K)=>K.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Qe(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,r=e.relatedTarget;(!r||!t.contains(r))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,r=se(e);r&&t.contains(r)||r&&r===this.swatchC_.view.buttonElement&&!h(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function dl(n,e){return We.isColorObject(n)?We.fromObject(n,e):We.black(e)}function pl(n){return Dn(n.getComponents("rgb")).reduce((e,t)=>e<<8|Math.floor(t)&255,0)}function hl(n){return n.getComponents("rgb").reduce((e,t,r)=>{const f=Math.floor(r===3?t*255:t)&255;return e<<8|f},0)>>>0}function fl(n){return new We([n>>16&255,n>>8&255,n&255],"rgb")}function _l(n){return new We([n>>24&255,n>>16&255,n>>8&255,pt(n&255,0,255,0,1)],"rgb")}function ml(n){return typeof n!="number"?We.black():fl(n)}function vl(n){return typeof n!="number"?We.black():_l(n)}function bl(n){const e=xr(n);return e?(t,r)=>{hs(t,e(r))}:null}function gl(n){const e=n?hl:pl;return(t,r)=>{hs(t,e(r))}}function wl(n,e,t){const r=e.toRgbaObject(t);n.writeProperty("r",r.r),n.writeProperty("g",r.g),n.writeProperty("b",r.b),n.writeProperty("a",r.a)}function xl(n,e,t){const r=e.toRgbaObject(t);n.writeProperty("r",r.r),n.writeProperty("g",r.g),n.writeProperty("b",r.b)}function yl(n,e){return(t,r)=>{n?wl(t,r,e):xl(t,r,e)}}function Tr(n){var e;return!!(n!=null&&n.alpha||!((e=n==null?void 0:n.color)===null||e===void 0)&&e.alpha)}function Pl(n){return n?e=>wr(e,"0x"):e=>Ri(e,"0x")}function Sl(n){return"color"in n||"view"in n&&n.view==="color"}const El={id:"input-color-number",type:"input",accept:(n,e)=>{if(typeof n!="number"||!Sl(e))return null;const t=vr(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>Tr(n.params)?vl:ml,equals:We.equals,writer:n=>gl(Tr(n.params))},controller:n=>{const e=Tr(n.params),t="expanded"in n.params?n.params.expanded:void 0,r="picker"in n.params?n.params.picker:void 0;return new kr(n.document,{colorType:"int",expanded:t??!1,formatter:Pl(e),parser:gr("int"),pickerLayout:r??"popup",supportsAlpha:e,value:n.value,viewProps:n.viewProps})}};function kl(n){return We.isRgbaColorObject(n)}function Tl(n){return e=>dl(e,n)}function Cl(n,e){return t=>n?Li(t,e):Ui(t,e)}const Bl={id:"input-color-object",type:"input",accept:(n,e)=>{if(!We.isColorObject(n))return null;const t=vr(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>Tl(Ln(n.params)),equals:We.equals,writer:n=>yl(kl(n.initialValue),Ln(n.params))},controller:n=>{var e;const t=We.isRgbaColorObject(n.initialValue),r="expanded"in n.params?n.params.expanded:void 0,f="picker"in n.params?n.params.picker:void 0,U=(e=Ln(n.params))!==null&&e!==void 0?e:"int";return new kr(n.document,{colorType:U,expanded:r??!1,formatter:Cl(t,U),parser:gr(U),pickerLayout:f??"popup",supportsAlpha:t,value:n.value,viewProps:n.viewProps})}},Ml={id:"input-color-string",type:"input",accept:(n,e)=>{if(typeof n!="string"||"view"in e&&e.view==="text")return null;const t=br(n,Ln(e));if(!t||!xr(t))return null;const f=vr(e);return f?{initialValue:n,params:f}:null},binding:{reader:n=>{var e;return No((e=Ln(n.params))!==null&&e!==void 0?e:"int")},equals:We.equals,writer:n=>{const e=br(n.initialValue,Ln(n.params));if(!e)throw L.shouldNeverHappen();const t=bl(e);if(!t)throw L.notBindable();return t}},controller:n=>{const e=br(n.initialValue,Ln(n.params));if(!e)throw L.shouldNeverHappen();const t=xr(e);if(!t)throw L.shouldNeverHappen();const r="expanded"in n.params?n.params.expanded:void 0,f="picker"in n.params?n.params.picker:void 0;return new kr(n.document,{colorType:e.type,expanded:r??!1,formatter:t,parser:gr(e.type),pickerLayout:f??"popup",supportsAlpha:e.alpha,value:n.value,viewProps:n.viewProps})}};class mn{constructor(e){this.components=e.components,this.asm_=e.assembly}constrain(e){const t=this.asm_.toComponents(e).map((r,f)=>{var U,K;return(K=(U=this.components[f])===null||U===void 0?void 0:U.constrain(r))!==null&&K!==void 0?K:r});return this.asm_.fromComponents(t)}}const Ii=N("pndtxt");class Al{constructor(e,t){this.textViews=t.textViews,this.element=e.createElement("div"),this.element.classList.add(Ii()),this.textViews.forEach(r=>{const f=e.createElement("div");f.classList.add(Ii("a")),f.appendChild(r.element),this.element.appendChild(f)})}}function Rl(n,e,t){return new ps(n,{arrayPosition:t===0?"fst":t===e.axes.length-1?"lst":"mid",baseStep:e.axes[t].baseStep,parser:e.parser,props:e.axes[t].textProps,value:me(0,{constraint:e.axes[t].constraint}),viewProps:e.viewProps})}class Cr{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.acs_=t.axes.map((r,f)=>Rl(e,t,f)),this.acs_.forEach((r,f)=>{us({primary:this.value,secondary:r.value,forward:U=>t.assembly.toComponents(U.rawValue)[f],backward:(U,K)=>{const _e=t.assembly.toComponents(U.rawValue);return _e[f]=K.rawValue,t.assembly.fromComponents(_e)}})}),this.view=new Al(e,{textViews:this.acs_.map(r=>r.view)})}}function Gi(n,e){return"step"in n&&!z(n.step)?new Tn(n.step,e):null}function Fi(n){return!z(n.max)&&!z(n.min)?new un({max:n.max,min:n.min}):!z(n.max)||!z(n.min)?new qn({max:n.max,min:n.min}):null}function Dl(n){const e=$t(n,un);if(e)return[e.values.get("min"),e.values.get("max")];const t=$t(n,qn);return t?[t.minValue,t.maxValue]:[void 0,void 0]}function Ul(n,e){const t=[],r=Gi(n,e);r&&t.push(r);const f=Fi(n);f&&t.push(f);const U=mr(n.options);return U&&t.push(U),new kn(t)}const Ll={id:"input-number",type:"input",accept:(n,e)=>{if(typeof n!="number")return null;const t=Pe,r=ee(e,{format:t.optional.function,max:t.optional.number,min:t.optional.number,options:t.optional.custom(Ls),step:t.optional.number});return r?{initialValue:n,params:r}:null},binding:{reader:n=>ii,constraint:n=>Ul(n.params,n.initialValue),writer:n=>hs},controller:n=>{var e;const t=n.value,r=n.constraint,f=r&&$t(r,dn);if(f)return new pn(n.document,{props:new he({options:f.values.value("options")}),value:t,viewProps:n.viewProps});const U=(e="format"in n.params?n.params.format:void 0)!==null&&e!==void 0?e:Pt(zs(r,t.rawValue)),K=r&&$t(r,un);return K?new _r(n.document,{baseStep:Jn(r),parser:tn,sliderProps:new he({maxValue:K.values.value("max"),minValue:K.values.value("min")}),textProps:he.fromObject({draggingScale:Qn(r,t.rawValue),formatter:U}),value:t,viewProps:n.viewProps}):new ps(n.document,{baseStep:Jn(r),parser:tn,props:he.fromObject({draggingScale:Qn(r,t.rawValue),formatter:U}),value:t,viewProps:n.viewProps})}};class vn{constructor(e=0,t=0){this.x=e,this.y=t}getComponents(){return[this.x,this.y]}static isObject(e){if(z(e))return!1;const t=e.x,r=e.y;return!(typeof t!="number"||typeof r!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y}toObject(){return{x:this.x,y:this.y}}}const Oi={toComponents:n=>n.getComponents(),fromComponents:n=>new vn(...n)},ts=N("p2d");class zl{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(ts()),t.viewProps.bindClassModifiers(this.element),ae(t.expanded,xe(this.element,ts(void 0,"expanded")));const r=e.createElement("div");r.classList.add(ts("h")),this.element.appendChild(r);const f=e.createElement("button");f.classList.add(ts("b")),f.appendChild(y(e,"p2dpad")),t.viewProps.bindDisabled(f),r.appendChild(f),this.buttonElement=f;const U=e.createElement("div");if(U.classList.add(ts("t")),r.appendChild(U),this.textElement=U,t.pickerLayout==="inline"){const K=e.createElement("div");K.classList.add(ts("p")),this.element.appendChild(K),this.pickerElement=K}else this.pickerElement=null}}const bn=N("p2dp");class Il{constructor(e,t){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.invertsY_=t.invertsY,this.maxValue_=t.maxValue,this.element=e.createElement("div"),this.element.classList.add(bn()),t.layout==="popup"&&this.element.classList.add(bn(void 0,"p")),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("div");r.classList.add(bn("p")),t.viewProps.bindTabIndex(r),this.element.appendChild(r),this.padElement=r;const f=e.createElementNS(w,"svg");f.classList.add(bn("g")),this.padElement.appendChild(f),this.svgElem_=f;const U=e.createElementNS(w,"line");U.classList.add(bn("ax")),U.setAttributeNS(null,"x1","0"),U.setAttributeNS(null,"y1","50%"),U.setAttributeNS(null,"x2","100%"),U.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(U);const K=e.createElementNS(w,"line");K.classList.add(bn("ax")),K.setAttributeNS(null,"x1","50%"),K.setAttributeNS(null,"y1","0"),K.setAttributeNS(null,"x2","50%"),K.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(K);const _e=e.createElementNS(w,"line");_e.classList.add(bn("l")),_e.setAttributeNS(null,"x1","50%"),_e.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(_e),this.lineElem_=_e;const Le=e.createElement("div");Le.classList.add(bn("m")),this.padElement.appendChild(Le),this.markerElem_=Le,t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[e,t]=this.value.rawValue.getComponents(),r=this.maxValue_,f=pt(e,-r,+r,0,100),U=pt(t,-r,+r,0,100),K=this.invertsY_?100-U:U;this.lineElem_.setAttributeNS(null,"x2",`${f}%`),this.lineElem_.setAttributeNS(null,"y2",`${K}%`),this.markerElem_.style.left=`${f}%`,this.markerElem_.style.top=`${K}%`}onValueChange_(){this.update_()}onFoldableChange_(){this.update_()}}function Vi(n,e,t){return[At(e[0],nn(n)),At(e[1],ds(n))*(t?1:-1)]}class Gl{constructor(e,t){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.baseSteps_=t.baseSteps,this.maxValue_=t.maxValue,this.invertsY_=t.invertsY,this.view=new Il(e,{invertsY:this.invertsY_,layout:t.layout,maxValue:this.maxValue_,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new An(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const r=this.maxValue_,f=pt(e.point.x,0,e.bounds.width,-r,+r),U=pt(this.invertsY_?e.bounds.height-e.point.y:e.point.y,0,e.bounds.height,-r,+r);this.value.setRawValue(new vn(f,U),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onPadKeyDown_(e){oi(e.key)&&e.preventDefault();const[t,r]=Vi(e,this.baseSteps_,this.invertsY_);t===0&&r===0||this.value.setRawValue(new vn(this.value.rawValue.x+t,this.value.rawValue.y+r),{forceEmit:!1,last:!1})}onPadKeyUp_(e){const[t,r]=Vi(e,this.baseSteps_,this.invertsY_);t===0&&r===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class Fl{constructor(e,t){var r,f;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=Xe.create(t.expanded),this.popC_=t.pickerLayout==="popup"?new Cn(e,{viewProps:this.viewProps}):null;const U=new Gl(e,{baseSteps:[t.axes[0].baseStep,t.axes[1].baseStep],invertsY:t.invertsY,layout:t.pickerLayout,maxValue:t.maxValue,value:this.value,viewProps:this.viewProps});U.view.allFocusableElements.forEach(K=>{K.addEventListener("blur",this.onPopupChildBlur_),K.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=U,this.textC_=new Cr(e,{assembly:Oi,axes:t.axes,parser:t.parser,value:this.value,viewProps:this.viewProps}),this.view=new zl(e,{expanded:this.foldable_.value("expanded"),pickerLayout:t.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(r=this.view.buttonElement)===null||r===void 0||r.addEventListener("blur",this.onPadButtonBlur_),(f=this.view.buttonElement)===null||f===void 0||f.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),us({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:K=>K.rawValue,backward:(K,_e)=>_e.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Qe(this.foldable_,this.view.pickerElement))}onPadButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,r=e.relatedTarget;(!r||!t.contains(r))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,r=se(e);r&&t.contains(r)||r&&r===this.view.buttonElement&&!h(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.view.buttonElement.focus()}}class ns{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}getComponents(){return[this.x,this.y,this.z]}static isObject(e){if(z(e))return!1;const t=e.x,r=e.y,f=e.z;return!(typeof t!="number"||typeof r!="number"||typeof f!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const $i={toComponents:n=>n.getComponents(),fromComponents:n=>new ns(...n)};function Ol(n){return ns.isObject(n)?new ns(n.x,n.y,n.z):new ns}function Vl(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z)}function $l(n,e){return new mn({assembly:$i,components:[sn("x"in n?n.x:void 0,e.x),sn("y"in n?n.y:void 0,e.y),sn("z"in n?n.z:void 0,e.z)]})}function Br(n,e){return{baseStep:Jn(e),constraint:e,textProps:he.fromObject({draggingScale:Qn(e,n),formatter:Pt(zs(e,n))})}}const Nl={id:"input-point3d",type:"input",accept:(n,e)=>{if(!ns.isObject(n))return null;const t=Pe,r=ee(e,{x:t.optional.custom(fn),y:t.optional.custom(fn),z:t.optional.custom(fn)});return r?{initialValue:n,params:r}:null},binding:{reader:n=>Ol,constraint:n=>$l(n.params,n.initialValue),equals:ns.equals,writer:n=>Vl},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof mn))throw L.shouldNeverHappen();return new Cr(n.document,{assembly:$i,axes:[Br(e.rawValue.x,t.components[0]),Br(e.rawValue.y,t.components[1]),Br(e.rawValue.z,t.components[2])],parser:tn,value:e,viewProps:n.viewProps})}};class ss{constructor(e=0,t=0,r=0,f=0){this.x=e,this.y=t,this.z=r,this.w=f}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(e){if(z(e))return!1;const t=e.x,r=e.y,f=e.z,U=e.w;return!(typeof t!="number"||typeof r!="number"||typeof f!="number"||typeof U!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z&&e.w===t.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const Ni={toComponents:n=>n.getComponents(),fromComponents:n=>new ss(...n)};function ql(n){return ss.isObject(n)?new ss(n.x,n.y,n.z,n.w):new ss}function Wl(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z),n.writeProperty("w",e.w)}function Kl(n,e){return new mn({assembly:Ni,components:[sn("x"in n?n.x:void 0,e.x),sn("y"in n?n.y:void 0,e.y),sn("z"in n?n.z:void 0,e.z),sn("w"in n?n.w:void 0,e.w)]})}function jl(n,e){return{baseStep:Jn(e),constraint:e,textProps:he.fromObject({draggingScale:Qn(e,n),formatter:Pt(zs(e,n))})}}const Hl={id:"input-point4d",type:"input",accept:(n,e)=>{if(!ss.isObject(n))return null;const t=Pe,r=ee(e,{x:t.optional.custom(fn),y:t.optional.custom(fn),z:t.optional.custom(fn),w:t.optional.custom(fn)});return r?{initialValue:n,params:r}:null},binding:{reader:n=>ql,constraint:n=>Kl(n.params,n.initialValue),equals:ss.equals,writer:n=>Wl},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof mn))throw L.shouldNeverHappen();return new Cr(n.document,{assembly:Ni,axes:e.rawValue.getComponents().map((r,f)=>jl(r,t.components[f])),parser:tn,value:e,viewProps:n.viewProps})}};function Yl(n){const e=[],t=mr(n.options);return t&&e.push(t),new kn(e)}const Zl={id:"input-string",type:"input",accept:(n,e)=>{if(typeof n!="string")return null;const r=ee(e,{options:Pe.optional.custom(Ls)});return r?{initialValue:n,params:r}:null},binding:{reader:n=>ai,constraint:n=>Yl(n.params),writer:n=>hs},controller:n=>{const e=n.document,t=n.value,r=n.constraint,f=r&&$t(r,dn);return f?new pn(e,{props:new he({options:f.values.value("options")}),value:t,viewProps:n.viewProps}):new jn(e,{parser:U=>U,props:he.fromObject({formatter:dr}),value:t,viewProps:n.viewProps})}},_s={monitor:{defaultInterval:200,defaultLineCount:3}},qi=N("mll");class Xl{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(qi()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("textarea");r.classList.add(qi("i")),r.style.height=`calc(var(--bld-us) * ${t.lineCount})`,r.readOnly=!0,t.viewProps.bindDisabled(r),this.element.appendChild(r),this.textareaElem_=r,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.textareaElem_,t=e.scrollTop===e.scrollHeight-e.clientHeight,r=[];this.value.rawValue.forEach(f=>{f!==void 0&&r.push(this.formatter_(f))}),e.textContent=r.join(`
`),t&&(e.scrollTop=e.scrollHeight)}onValueUpdate_(){this.update_()}}class Mr{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new Xl(e,{formatter:t.formatter,lineCount:t.lineCount,value:this.value,viewProps:this.viewProps})}}const Wi=N("sgl");class Jl{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(Wi()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("input");r.classList.add(Wi("i")),r.readOnly=!0,r.type="text",t.viewProps.bindDisabled(r),this.element.appendChild(r),this.inputElement=r,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.value.rawValue,t=e[e.length-1];this.inputElement.value=t!==void 0?this.formatter_(t):""}onValueUpdate_(){this.update_()}}class Ar{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new Jl(e,{formatter:t.formatter,value:this.value,viewProps:this.viewProps})}}const Ql={id:"monitor-bool",type:"monitor",accept:(n,e)=>{if(typeof n!="boolean")return null;const r=ee(e,{lineCount:Pe.optional.number});return r?{initialValue:n,params:r}:null},binding:{reader:n=>Q},controller:n=>{var e;return n.value.rawValue.length===1?new Ar(n.document,{formatter:re,value:n.value,viewProps:n.viewProps}):new Mr(n.document,{formatter:re,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:_s.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}},gn=N("grl");class ec{constructor(e,t){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=e.createElement("div"),this.element.classList.add(gn()),t.viewProps.bindClassModifiers(this.element),this.formatter_=t.formatter,this.props_=t.props,this.cursor_=t.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const r=e.createElementNS(w,"svg");r.classList.add(gn("g")),r.style.height=`calc(var(--bld-us) * ${t.lineCount})`,this.element.appendChild(r),this.svgElem_=r;const f=e.createElementNS(w,"polyline");this.svgElem_.appendChild(f),this.lineElem_=f;const U=e.createElement("div");U.classList.add(gn("t"),N("tt")()),this.element.appendChild(U),this.tooltipElem_=U,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const e=this.svgElem_.getBoundingClientRect(),t=this.value.rawValue.length-1,r=this.props_.get("minValue"),f=this.props_.get("maxValue"),U=[];this.value.rawValue.forEach((Ze,nt)=>{if(Ze===void 0)return;const zn=pt(nt,0,t,0,e.width),ms=pt(Ze,r,f,e.height,0);U.push([zn,ms].join(","))}),this.lineElem_.setAttributeNS(null,"points",U.join(" "));const K=this.tooltipElem_,_e=this.value.rawValue[this.cursor_.rawValue];if(_e===void 0){K.classList.remove(gn("t","a"));return}const Le=pt(this.cursor_.rawValue,0,t,0,e.width),Ie=pt(_e,r,f,e.height,0);K.style.left=`${Le}px`,K.style.top=`${Ie}px`,K.textContent=`${this.formatter_(_e)}`,K.classList.contains(gn("t","a"))||(K.classList.add(gn("t","a"),gn("t","in")),a(K),K.classList.remove(gn("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class tc{constructor(e,t){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props_=t.props,this.value=t.value,this.viewProps=t.viewProps,this.cursor_=me(-1),this.view=new ec(e,{cursor:this.cursor_,formatter:t.formatter,lineCount:t.lineCount,props:this.props_,value:this.value,viewProps:this.viewProps}),!h(e))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const r=new An(this.view.element);r.emitter.on("down",this.onGraphPointerDown_),r.emitter.on("move",this.onGraphPointerMove_),r.emitter.on("up",this.onGraphPointerUp_)}}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(e){const t=this.view.element.getBoundingClientRect();this.cursor_.rawValue=Math.floor(pt(e.offsetX,0,t.width,0,this.value.rawValue.length))}onGraphPointerDown_(e){this.onGraphPointerMove_(e)}onGraphPointerMove_(e){if(!e.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(pt(e.data.point.x,0,e.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function Rr(n){return"format"in n&&!z(n.format)?n.format:Pt(2)}function nc(n){var e;return n.value.rawValue.length===1?new Ar(n.document,{formatter:Rr(n.params),value:n.value,viewProps:n.viewProps}):new Mr(n.document,{formatter:Rr(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:_s.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}function sc(n){var e,t,r;return new tc(n.document,{formatter:Rr(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:_s.monitor.defaultLineCount,props:he.fromObject({maxValue:(t="max"in n.params?n.params.max:null)!==null&&t!==void 0?t:100,minValue:(r="min"in n.params?n.params.min:null)!==null&&r!==void 0?r:0}),value:n.value,viewProps:n.viewProps})}function Ki(n){return"view"in n&&n.view==="graph"}const rc={id:"monitor-number",type:"monitor",accept:(n,e)=>{if(typeof n!="number")return null;const t=Pe,r=ee(e,{format:t.optional.function,lineCount:t.optional.number,max:t.optional.number,min:t.optional.number,view:t.optional.string});return r?{initialValue:n,params:r}:null},binding:{defaultBufferSize:n=>Ki(n)?64:1,reader:n=>ii},controller:n=>Ki(n.params)?sc(n):nc(n)},ic={id:"monitor-string",type:"monitor",accept:(n,e)=>{if(typeof n!="string")return null;const t=Pe,r=ee(e,{lineCount:t.optional.number,multiline:t.optional.boolean});return r?{initialValue:n,params:r}:null},binding:{reader:n=>ai},controller:n=>{var e;const t=n.value;return t.rawValue.length>1||"multiline"in n.params&&n.params.multiline?new Mr(n.document,{formatter:dr,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:_s.monitor.defaultLineCount,value:t,viewProps:n.viewProps}):new Ar(n.document,{formatter:dr,value:t,viewProps:n.viewProps})}};function ac(n,e){var t;const r=n.accept(e.target.read(),e.params);if(z(r))return null;const f=Pe,U={target:e.target,initialValue:r.initialValue,params:r.params},K=n.binding.reader(U),_e=n.binding.constraint?n.binding.constraint(U):void 0,Le=me(K(r.initialValue),{constraint:_e,equals:n.binding.equals}),Ie=new Bs({reader:K,target:e.target,value:Le,writer:n.binding.writer(U)}),Ze=f.optional.boolean(e.params.disabled).value,nt=f.optional.boolean(e.params.hidden).value,zn=n.controller({constraint:_e,document:e.document,initialValue:r.initialValue,params:r.params,value:Ie.value,viewProps:g.create({disabled:Ze,hidden:nt})});return new Ne(e.document,{binding:Ie,blade:Fe(),props:he.fromObject({label:"label"in e.params?(t=f.optional.string(e.params.label).value)!==null&&t!==void 0?t:null:e.target.key}),valueController:zn})}function oc(n,e){return e===0?new ar:new cn(n,e??_s.monitor.defaultInterval)}function lc(n,e){var t,r,f;const U=Pe,K=n.accept(e.target.read(),e.params);if(z(K))return null;const _e={target:e.target,initialValue:K.initialValue,params:K.params},Le=n.binding.reader(_e),Ie=(r=(t=U.optional.number(e.params.bufferSize).value)!==null&&t!==void 0?t:n.binding.defaultBufferSize&&n.binding.defaultBufferSize(K.params))!==null&&r!==void 0?r:1,Ze=U.optional.number(e.params.interval).value,nt=new cr({reader:Le,target:e.target,ticker:oc(e.document,Ze),value:or(Ie)}),zn=U.optional.boolean(e.params.disabled).value,ms=U.optional.boolean(e.params.hidden).value,vs=n.controller({document:e.document,params:K.params,value:nt.value,viewProps:g.create({disabled:zn,hidden:ms})});return new rt(e.document,{binding:nt,blade:Fe(),props:he.fromObject({label:"label"in e.params?(f=U.optional.string(e.params.label).value)!==null&&f!==void 0?f:null:e.target.key}),valueController:vs})}class cc{constructor(){this.pluginsMap_={blades:[],inputs:[],monitors:[]}}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(e){e.type==="blade"?this.pluginsMap_.blades.unshift(e):e.type==="input"?this.pluginsMap_.inputs.unshift(e):e.type==="monitor"&&this.pluginsMap_.monitors.unshift(e)}createInput(e,t,r){const f=t.read();if(z(f))throw new L({context:{key:t.key},type:"nomatchingcontroller"});const U=this.pluginsMap_.inputs.reduce((K,_e)=>K??ac(_e,{document:e,target:t,params:r}),null);if(U)return U;throw new L({context:{key:t.key},type:"nomatchingcontroller"})}createMonitor(e,t,r){const f=this.pluginsMap_.monitors.reduce((U,K)=>U??lc(K,{document:e,params:r,target:t}),null);if(f)return f;throw new L({context:{key:t.key},type:"nomatchingcontroller"})}createBlade(e,t){const r=this.pluginsMap_.blades.reduce((f,U)=>f??Cs(U,{document:e,params:t}),null);if(!r)throw new L({type:"nomatchingview",context:{params:t}});return r}createBladeApi(e){if(e instanceof Ne)return new at(e);if(e instanceof rt)return new ct(e);if(e instanceof tt)return new Bt(e,this);const t=this.pluginsMap_.blades.reduce((r,f)=>r??f.api({controller:e,pool:this}),null);if(!t)throw L.shouldNeverHappen();return t}}function uc(){const n=new cc;return[mc,Nl,Hl,Zl,Ll,Ml,Bl,El,So,Ql,ic,rc,Be,xn,ir,Nn].forEach(e=>{n.register(e)}),n}function dc(n){return vn.isObject(n)?new vn(n.x,n.y):new vn}function pc(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y)}function sn(n,e){if(!n)return;const t=[],r=Gi(n,e);r&&t.push(r);const f=Fi(n);return f&&t.push(f),new kn(t)}function hc(n,e){return new mn({assembly:Oi,components:[sn("x"in n?n.x:void 0,e.x),sn("y"in n?n.y:void 0,e.y)]})}function ji(n,e){const[t,r]=n?Dl(n):[];if(!z(t)||!z(r))return Math.max(Math.abs(t??0),Math.abs(r??0));const f=Jn(n);return Math.max(Math.abs(f)*10,Math.abs(e)*10)}function fc(n,e){const t=e instanceof mn?e.components[0]:void 0,r=e instanceof mn?e.components[1]:void 0,f=ji(t,n.x),U=ji(r,n.y);return Math.max(f,U)}function Hi(n,e){return{baseStep:Jn(e),constraint:e,textProps:he.fromObject({draggingScale:Qn(e,n),formatter:Pt(zs(e,n))})}}function _c(n){if(!("y"in n))return!1;const e=n.y;return e&&"inverted"in e?!!e.inverted:!1}const mc={id:"input-point2d",type:"input",accept:(n,e)=>{if(!vn.isObject(n))return null;const t=Pe,r=ee(e,{expanded:t.optional.boolean,picker:t.optional.custom(ui),x:t.optional.custom(fn),y:t.optional.object({inverted:t.optional.boolean,max:t.optional.number,min:t.optional.number,step:t.optional.number})});return r?{initialValue:n,params:r}:null},binding:{reader:n=>dc,constraint:n=>hc(n.params,n.initialValue),equals:vn.equals,writer:n=>pc},controller:n=>{const e=n.document,t=n.value,r=n.constraint;if(!(r instanceof mn))throw L.shouldNeverHappen();const f="expanded"in n.params?n.params.expanded:void 0,U="picker"in n.params?n.params.picker:void 0;return new Fl(e,{axes:[Hi(t.rawValue.x,r.components[0]),Hi(t.rawValue.y,r.components[1])],expanded:f??!1,invertsY:_c(n.params),maxValue:fc(t.rawValue,r),parser:tn,pickerLayout:U??"popup",value:t,viewProps:n.viewProps})}};class Yi extends c{constructor(e){super(e),this.emitter_=new I,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new E(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get options(){return this.controller_.valueController.props.get("options")}set options(e){this.controller_.valueController.props.set("options",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const r=t.bind(this);return this.emitter_.on(e,f=>{r(f.event)}),this}}class Zi extends c{constructor(e){super(e),this.emitter_=new I,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new E(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get maxValue(){return this.controller_.valueController.sliderController.props.get("maxValue")}set maxValue(e){this.controller_.valueController.sliderController.props.set("maxValue",e)}get minValue(){return this.controller_.valueController.sliderController.props.get("minValue")}set minValue(e){this.controller_.valueController.sliderController.props.set("minValue",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const r=t.bind(this);return this.emitter_.on(e,f=>{r(f.event)}),this}}class Xi extends c{constructor(e){super(e),this.emitter_=new I,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new E(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get formatter(){return this.controller_.valueController.props.get("formatter")}set formatter(e){this.controller_.valueController.props.set("formatter",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const r=t.bind(this);return this.emitter_.on(e,f=>{r(f.event)}),this}}const vc=function(){return{id:"list",type:"blade",accept(n){const e=Pe,t=ee(n,{options:e.required.custom(Ls),value:e.required.raw,view:e.required.constant("list"),label:e.optional.string});return t?{params:t}:null},controller(n){const e=new dn(di(n.params.options)),t=me(n.params.value,{constraint:e}),r=new pn(n.document,{props:new he({options:e.values.value("options")}),value:t,viewProps:n.viewProps});return new Dt(n.document,{blade:n.blade,props:he.fromObject({label:n.params.label}),valueController:r})},api(n){return!(n.controller instanceof Dt)||!(n.controller.valueController instanceof pn)?null:new Yi(n.controller)}}}();function bc(n){return n.reduce((e,t)=>Object.assign(e,{[t.presetKey]:t.read()}),{})}function gc(n,e){n.forEach(t=>{const r=e[t.target.presetKey];r!==void 0&&t.writer(t.target,t.reader(r))})}class wc extends ut{constructor(e,t){super(e,t)}get element(){return this.controller_.view.element}importPreset(e){const t=this.controller_.rackController.rack.find(Ne).map(r=>r.binding);gc(t,e),this.refresh()}exportPreset(){const e=this.controller_.rackController.rack.find(Ne).map(t=>t.binding.target);return bc(e)}refresh(){this.controller_.rackController.rack.find(Ne).forEach(e=>{e.binding.read()}),this.controller_.rackController.rack.find(rt).forEach(e=>{e.binding.read()})}}class xc extends Xt{constructor(e,t){super(e,{expanded:t.expanded,blade:t.blade,props:t.props,root:!0,viewProps:t.viewProps})}}const yc={id:"slider",type:"blade",accept(n){const e=Pe,t=ee(n,{max:e.required.number,min:e.required.number,view:e.required.constant("slider"),format:e.optional.function,label:e.optional.string,value:e.optional.number});return t?{params:t}:null},controller(n){var e,t;const r=(e=n.params.value)!==null&&e!==void 0?e:0,f=new un({max:n.params.max,min:n.params.min}),U=new _r(n.document,{baseStep:1,parser:tn,sliderProps:new he({maxValue:f.values.value("max"),minValue:f.values.value("min")}),textProps:he.fromObject({draggingScale:Qn(void 0,r),formatter:(t=n.params.format)!==null&&t!==void 0?t:ho}),value:me(r,{constraint:f}),viewProps:n.viewProps});return new Dt(n.document,{blade:n.blade,props:he.fromObject({label:n.params.label}),valueController:U})},api(n){return!(n.controller instanceof Dt)||!(n.controller.valueController instanceof _r)?null:new Zi(n.controller)}},Pc=function(){return{id:"text",type:"blade",accept(n){const e=Pe,t=ee(n,{parse:e.required.function,value:e.required.raw,view:e.required.constant("text"),format:e.optional.function,label:e.optional.string});return t?{params:t}:null},controller(n){var e;const t=new jn(n.document,{parser:n.params.parse,props:he.fromObject({formatter:(e=n.params.format)!==null&&e!==void 0?e:r=>String(r)}),value:me(n.params.value),viewProps:n.viewProps});return new Dt(n.document,{blade:n.blade,props:he.fromObject({label:n.params.label}),valueController:t})},api(n){return!(n.controller instanceof Dt)||!(n.controller.valueController instanceof jn)?null:new Xi(n.controller)}}}();function Sc(n){const e=n.createElement("div");return e.classList.add(N("dfw")()),n.body&&n.body.appendChild(e),e}function Ji(n,e,t){if(n.querySelector(`style[data-tp-style=${e}]`))return;const r=n.createElement("style");r.dataset.tpStyle=e,r.textContent=t,n.head.appendChild(r)}class Ec extends wc{constructor(e){var t,r;const f=e??{},U=(t=f.document)!==null&&t!==void 0?t:u(),K=uc(),_e=new xc(U,{expanded:f.expanded,blade:Fe(),props:he.fromObject({title:f.title}),viewProps:g.create()});super(_e,K),this.pool_=K,this.containerElem_=(r=f.container)!==null&&r!==void 0?r:Sc(U),this.containerElem_.appendChild(this.element),this.doc_=U,this.usesDefaultWrapper_=!f.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw L.alreadyDisposed();return this.doc_}dispose(){const e=this.containerElem_;if(!e)throw L.alreadyDisposed();if(this.usesDefaultWrapper_){const t=e.parentElement;t&&t.removeChild(e)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(e){("plugin"in e?[e.plugin]:"plugins"in e?e.plugins:[]).forEach(r=>{this.pool_.register(r),this.embedPluginStyle_(r)})}embedPluginStyle_(e){e.css&&Ji(this.document,`plugin-${e.id}`,e.css)}setUpDefaultPlugins_(){Ji(this.document,"default",'.tp-tbiv_b,.tp-coltxtv_ms,.tp-ckbv_i,.tp-rotv_b,.tp-fldv_b,.tp-mllv_i,.tp-sglv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-mllv_i,.tp-sglv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--mo-fg);height:var(--bld-us);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-mllv_i::-webkit-scrollbar,.tp-sglv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-mllv_i::-webkit-scrollbar-corner,.tp-sglv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-mllv_i::-webkit-scrollbar-thumb,.tp-sglv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-br: var(--tp-base-border-radius, 6px);--cnt-h-p: var(--tp-container-horizontal-padding, 4px);--cnt-v-p: var(--tp-container-vertical-padding, 4px);--elm-br: var(--tp-element-border-radius, 2px);--bld-s: var(--tp-blade-spacing, 4px);--bld-us: var(--tp-blade-unit-size, 20px);--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tabv_c .tp-brkv>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-v-p))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tabv_c .tp-brkv>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--bld-s)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tabv_c .tp-brkv>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tabv_c .tp-brkv>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--elm-br);border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tabv_c .tp-brkv .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--elm-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);overflow:hidden;padding-left:var(--cnt-h-p);padding-right:calc(4px + var(--bld-us) + var(--cnt-h-p));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-h-p) + (var(--bld-us) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--elm-br);cursor:pointer;display:block;height:var(--bld-us);position:relative;width:var(--bld-us)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--bld-us)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--bld-s);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--bld-s)}.tp-colpv_rgb{display:flex;margin-top:var(--bld-s);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-v-p);padding-top:calc(var(--cnt-v-p) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--elm-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--bld-us)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--elm-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--elm-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;cursor:pointer;display:block;height:var(--bld-us);left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:var(--bld-us)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--elm-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--elm-br);color:var(--lbl-fg);cursor:pointer;height:var(--bld-us);line-height:var(--bld-us);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv.tp-fldv-not .tp-fldv_b{display:none}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--bld-us)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-h-p);padding-right:var(--cnt-h-p)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding:0 4px}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--bld-us)*3);line-height:var(--bld-us);padding:0 4px;resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--bld-us);margin-right:4px;position:relative;width:var(--bld-us)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--bld-s);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-p2dpv{padding-left:calc(var(--bld-us) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:6px;box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:168px;padding:var(--cnt-v-p) var(--cnt-h-p);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--bld-us);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--elm-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--bld-us) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_c{padding-bottom:var(--cnt-v-p);padding-left:4px;padding-top:var(--cnt-v-p)}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-h-p) + 4px);padding-right:calc(var(--cnt-h-p) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);bottom:2px;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);opacity:.5;overflow:hidden;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-txtv{position:relative}.tp-txtv_i{padding:0 4px}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:-3px;position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--bld-us) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--elm-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--font-family);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--bld-us) + var(--cnt-h-p));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv.tp-rotv-not .tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}'),this.pool_.getAll().forEach(e=>{this.embedPluginStyle_(e)}),this.registerPlugin({plugins:[yc,vc,Nn,Pc]})}}const kc=new p("3.1.10");o.BladeApi=c,o.ButtonApi=H,o.FolderApi=ut,o.InputBindingApi=at,o.ListApi=Yi,o.MonitorBindingApi=ct,o.Pane=Ec,o.SeparatorApi=Wt,o.SliderApi=Zi,o.TabApi=ln,o.TabPageApi=Ss,o.TextApi=Xi,o.TpChangeEvent=E,o.VERSION=kc,Object.defineProperty(o,"__esModule",{value:!0})})})(Wr,Wr.exports);var ja=Wr.exports;const bu=`// 2DGS preprocess — per-alive-Gauss view-dependent color eval.
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
  // 1 = anisotropic fetch (render mip_mode 2): the per-surfel slot carries the tile's LEVEL CAP instead of a level.
  aniso         : u32,
  _p2 : u32,
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
        if (atlas_params.mip_count > 1u || atlas_params.aniso != 0u) && w_span >= 2.0 && h_span >= 2.0 {
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
            // Anisotropic mode: the hardware picks the level per pixel; hand the fragment the cap only.
            lod = select(lod, lmax, atlas_params.aniso != 0u);
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
`,Ns=`// 2DGS render — vertex+fragment.
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
    pix : vec2<f32>,   // fragment position (the anisotropic fetch re-intersects the two neighbouring pixels)
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
        return ShadeGeom(s_t, a_t, in.depth_plane.z, false, pos);
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
        return ShadeGeom(vec2<f32>(0.0), alpha_e, in.depth_plane.z, false, pos);
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

    return ShadeGeom(s, b, depth, rho3d > rho2d, pos);
}

fn shade_color(in: SplatIn, g: ShadeGeom) -> vec3<f32> {
    var color = in.color.rgb;
    let s = g.s;

    // Adaptive-upscaling heatmap (accel_flags bits 3..8 = tau in 1/8 steps, render-settings.ts setAdaptHeat).
    // Per fragment: q = atlas texels per screen pixel (area of the pixel's footprint on the tile, from the
    // ray/plane uv at the two neighbouring pixels, the same footprint the anisotropic path uses). Colour = the
    // largest render factor the ?rs=auto rule would allow here (f · q <= tau): red = native only, yellow = 1/2,
    // green = 1/4, blue = surfel without texture (SV only, no texels to lose). Alpha-blended like the colour.
    let heat = (render_settings.accel_flags >> 3u) & 63u;
    if heat != 0u {
        var col = vec3<f32>(0.25, 0.4, 1.0);
        if tex_params.atlas_enabled != 0u && (in.gauss_id & 0x80000000u) == 0u && tex_params.probe_mode == 0u
           && in.uv_scale.x != 0.0 && in.uv_scale.y != 0.0 {
            let pixf = floor(g.pix);
            let ix   = intersect_uv(in, pixf + vec2<f32>(1.0, 0.0));
            let iy   = intersect_uv(in, pixf + vec2<f32>(0.0, 1.0));
            let dsdx = select(vec2<f32>(0.0), ix.s - s, ix.ok);
            let dsdy = select(vec2<f32>(0.0), iy.s - s, iy.ok);
            let dims = vec2<f32>(textureDimensions(atlas));
            let tdx  = in.uv_scale * dsdx * dims;
            let tdy  = in.uv_scale * dsdy * dims;
            let q    = sqrt(abs(tdx.x * tdy.y - tdx.y * tdy.x));
            let tau  = f32(heat) / 8.0;
            col = vec3<f32>(1.0, 0.15, 0.1);
            if 2.0 * q <= tau { col = vec3<f32>(1.0, 0.85, 0.1); }
            if 4.0 * q <= tau { col = vec3<f32>(0.15, 0.9, 0.2); }
        }
        return col;
    }

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
        var aniso_dx = vec2<f32>(0.0);   // mip_mode 2: atlas-uv footprint handed to textureSampleGrad
        var aniso_dy = vec2<f32>(0.0);
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
        } else if tex_params.mip_mode == 2u {
            // Anisotropic filtering (mip_mode 2, ?mipbias=aniso). The pixel's footprint on the tile — the
            // ray/plane uv at the two neighbouring pixels, scaled to texels — goes to the sampler as explicit
            // gradients: the hardware picks the mip level from the SHORT axis and takes up to 16 taps along the
            // LONG one (the long axis of a grazing surfel is what shimmers under level-0 bilinear). Works on
            // bundles without a chain too (level 0, taps only). in.lod carries the tile's exact-box-filter
            // level cap in this mode (preprocess_2dgs); the footprint is shrunk so the HW level never exceeds
            // it or spans more than the tile, and the clamp range is narrowed by the footprint + the bilinear
            // reach of that level, so no tap reads a neighbouring tile. Mirrors vk_raster --aniso (splat.frag ANISO).
            let pixf = floor(g.pix);
            let ix   = intersect_uv(in, pixf + vec2<f32>(1.0, 0.0));
            let iy   = intersect_uv(in, pixf + vec2<f32>(0.0, 1.0));
            let dsdx = select(vec2<f32>(0.0), ix.s - s, ix.ok);
            let dsdy = select(vec2<f32>(0.0), iy.s - s, iy.ok);
            let dims = vec2<f32>(textureDimensions(atlas));
            var tdx  = in.uv_scale * dsdx * dims;                              // texels per pixel step
            var tdy  = in.uv_scale * dsdy * dims;
            let tile = 2.0 * abs(in.uv_scale) * tex_params.uv_extent * dims;   // tile size in texels
            let hx   = 0.5 * (abs(tdx.x) + abs(tdy.x));                        // footprint half extents
            let hy   = 0.5 * (abs(tdx.y) + abs(tdy.y));
            let pmx  = max(length(tdx), length(tdy));
            let pmn  = min(length(tdx), length(tdy));
            let lodlen = max(pmn, pmx / 16.0);                                 // what the HW derives the level from
            var sc   = min(1.0, exp2(in.lod) / max(lodlen, 1e-6));
            sc = max(0.0, min(sc, 0.5 * min((tile.x - 1.0) / max(hx, 1e-6), (tile.y - 1.0) / max(hy, 1e-6))));
            tdx *= sc; tdy *= sc;
            let mg   = (vec2<f32>(hx, hy) * sc + 0.5 * (max(lodlen * sc, 1.0) - 1.0)) / dims;
            let hw   = max(abs(in.uv_scale) * tex_params.uv_extent - 0.5 / dims - mg, vec2<f32>(0.0));
            uv = clamp(in.uv_base + s * in.uv_scale, in.uv_base - hw, in.uv_base + hw);
            aniso_dx = tdx / dims; aniso_dy = tdy / dims;
        } else {
            // Clamp to the tile's texel-centre range at the sampled level (CUDA: au ∈ [u0, u0+w−1.001]
            // before the +½), so bilinear taps never reach the neighbouring tile in the atlas.
            let lvl  = select(0.0, in.lod, tex_params.mip_mode != 0u);
            let dims = vec2<f32>(textureDimensions(atlas));
            let hw   = max(abs(in.uv_scale) * tex_params.uv_extent - 0.5 * exp2(lvl) / dims, vec2<f32>(0.0));
            uv = clamp(in.uv_base + s * in.uv_scale, in.uv_base - hw, in.uv_base + hw);
        }
        var rgba : vec4<f32>;
        if tex_params.mip_mode == 2u && tex_params.probe_mode == 0u {
            rgba = textureSampleGrad(atlas, atlas_samp, uv, layer, aniso_dx, aniso_dy);
        } else {
            let lod_eff = select(0.0, in.lod, tex_params.mip_mode != 0u);
            rgba = textureSampleLevel(atlas, atlas_samp, uv, layer, lod_eff);
        }
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
// Texture-aware upscaling (nest-splatting docs/UPSCALING_GRADIENT_AWARE.md, "green gather" mode).
// Second render target, same premultiplied back-to-front blend as the colour: (α·∂Y/∂x, α·∂Y/∂y, 0, α).
// The blend then yields Σ α_i T_i · slope_i, the image-space slope contributed by the surfel textures.
// slope_i = d(residual)/d(pixel) of the atlas at this fragment: one textureGather of the green channel
// (luminance proxy; no extra data, no bake step) gives the 2x2 texels around the sample, their bilinear
// derivative in texel units, chained with d(texel)/d(pixel) from the ray-splat at the neighbouring
// pixels. Units: residual per LOW-RES pixel, which is what the upscaler's Hermite slopes are in.
// ---------------------------------------------------------------------------
// Slope source (pipeline constant): 0 = green-channel gather of the colour atlas (no data, FD + λ·slope in the
// upscaler), 1 = P field in the alpha of a BC7 sidecar (vk_raster --grad 5), 2 = BC5 slope sidecar (dY/du, dY/dv per
// texel, vk_raster --grad 4). 1/2 are finetuned for slope-only Hermite and follow the Vulkan path exactly: uv clamped
// to the tile's texel-centre range, no magnification gate, luminance-weighted ReLU gate (in fs_slope).
override SLOPE_SRC : u32 = 0u;
@group(3) @binding(6) var                slope_tex    : texture_2d_array<f32>;
@group(3) @binding(7) var<uniform>       slope_params : vec4<f32>;   // scale_u, off_u, scale_v, off_v (P: scale_p in .x)

fn tex_slope(in: SplatIn, g: ShadeGeom, pos: vec2<f32>) -> vec2<f32> {
    if tex_params.atlas_enabled == 0u || (in.gauss_id & 0xC0000000u) != 0u || tex_params.probe_mode != 0u
       || in.uv_scale.x == 0.0 || in.uv_scale.y == 0.0 || g.lp {
        return vec2<f32>(0.0);
    }
    let pixf = floor(pos);
    let ix = intersect_uv(in, pixf + vec2<f32>(1.0, 0.0));
    let iy = intersect_uv(in, pixf + vec2<f32>(0.0, 1.0));
    if !ix.ok || !iy.ok { return vec2<f32>(0.0); }
    let dsdx = ix.s - g.s;
    let dsdy = iy.s - g.s;
    let dims = vec2<f32>(textureDimensions(atlas));
    let k    = in.uv_scale * dims;                      // texels per unit of surfel uv
    var dPu : f32; var dPv : f32;
    if SLOPE_SRC == 0u {
        let uv   = in.uv_base + g.s * in.uv_scale;
        // Only where the texture is MAGNIFIED: with more than ~1.5 texels per low-res pixel the bilinear slope of
        // the 2x2 footprint says nothing about the image (minified / grazing surfels) and overshoots.
        let tpp  = max(length(abs(k) * dsdx), length(abs(k) * dsdy));
        if tpp > 1.5 { return vec2<f32>(0.0); }
        // The gathered 2x2 footprint must stay inside this surfel's tile (else it mixes in a neighbour tile).
        let half = abs(in.uv_scale) * tex_params.uv_extent - 1.0 / dims;
        if any(abs(uv - in.uv_base) > half) { return vec2<f32>(0.0); }
        let f    = fract(uv * dims - 0.5);                 // position inside the gathered 2x2 footprint
        let g4   = textureGather(1, atlas, atlas_samp, uv, i32(in.layer));   // x (i0,j1) y (i1,j1) z (i1,j0) w (i0,j0)
        dPu = mix(g4.z - g4.w, g4.y - g4.x, f.y) * tex_params.atlas_scale;   // per texel, residual units
        dPv = mix(g4.x - g4.w, g4.y - g4.z, f.x) * tex_params.atlas_scale;
    } else {
        // Mip-matched slope (accel bit 14, ?slope_mip=1): fetch the sidecar at the surfel's colour mip level
        // (in.lod — computed by preprocess for the CURRENT render target, i.e. the low-res one under upscaling)
        // so the slope is the derivative of the texture band-limited to the render rate. Level 0 otherwise.
        let nlev = f32(textureNumLevels(slope_tex));
        var lvl  = 0.0;
        if (render_settings.accel_flags & 16384u) != 0u && tex_params.mip_mode == 1u {   // aniso (2) stores the level CAP in lod, not a level
            lvl = clamp(round(in.lod), 0.0, max(nlev - 1.0, 0.0));
        }
        let sc   = exp2(lvl);
        let dimsl = dims / sc;                               // texel grid of the sampled level
        // Same tile clamp as shade_color (CUDA / vk_raster: au in [u0, u0+w-1]) at the sampled level.
        let hw = max(abs(in.uv_scale) * tex_params.uv_extent - 0.5 * sc / dims, vec2<f32>(0.0));
        let uv = clamp(in.uv_base + g.s * in.uv_scale, in.uv_base - hw, in.uv_base + hw);
        if SLOPE_SRC == 1u {
            let f  = fract(uv * dimsl - 0.5);
            var g4 : vec4<f32>;
            if lvl == 0.0 {
                g4 = textureGather(3, slope_tex, atlas_samp, uv, i32(in.layer));
            } else {
                // textureGather is level-0 only: read the 2x2 texel centres of level \`lvl\` with point-exact
                // bilinear taps (x (i0,j1) y (i1,j1) z (i1,j0) w (i0,j0), the gather's component order).
                let c0 = (floor(uv * dimsl - 0.5) + 0.5) / dimsl;
                let du = vec2<f32>(1.0 / dimsl.x, 0.0); let dv = vec2<f32>(0.0, 1.0 / dimsl.y);
                g4 = vec4<f32>(textureSampleLevel(slope_tex, atlas_samp, c0 + dv,      i32(in.layer), lvl).a,
                               textureSampleLevel(slope_tex, atlas_samp, c0 + du + dv, i32(in.layer), lvl).a,
                               textureSampleLevel(slope_tex, atlas_samp, c0 + du,      i32(in.layer), lvl).a,
                               textureSampleLevel(slope_tex, atlas_samp, c0,           i32(in.layer), lvl).a);
            }
            // per texel OF THE SAMPLED LEVEL → per level-0 texel (k below is in level-0 texels per uv unit)
            dPu = mix(g4.z - g4.w, g4.y - g4.x, f.y) * slope_params.x / sc;
            dPv = mix(g4.x - g4.w, g4.y - g4.z, f.x) * slope_params.x / sc;
        } else {
            let t = textureSampleLevel(slope_tex, atlas_samp, uv, i32(in.layer), lvl).rg;
            dPu = t.x * slope_params.x + slope_params.y;
            dPv = t.y * slope_params.z + slope_params.w;
        }
        // Texel-rate gate (same idea as the green mode's 1.5 cut, soft): at grazing / minified fragments the
        // pixel step crosses more than a texel OF THE SAMPLED LEVEL, so the per-texel slope times that step is
        // texel noise amplified by the step length — the speckle on edge-on surfels. Full weight up to 1 texel
        // per pixel, zero from 2. (The Vulkan finetune path has no gate; magnified fragments are unchanged.)
        let tppl = max(length(abs(k) * dsdx), length(abs(k) * dsdy)) / sc;
        let gate = clamp(2.0 - tppl, 0.0, 1.0);
        dPu *= gate; dPv *= gate;
    }
    return vec2<f32>(dPu * k.x * dsdx.x + dPv * k.y * dsdx.y,
                     dPu * k.x * dsdy.x + dPv * k.y * dsdy.y);
}

struct SlopeOut {
    @location(0) c : vec4<f32>,
    @location(1) g : vec4<f32>,
};

@fragment
fn fs_slope(in: VertexOutput) -> SlopeOut {
    let sp = splat_in(in);
    let g  = shade_geom(sp, in.position.xy);
    let rgb = shade_color(sp, g);
    var sl = tex_slope(sp, g, in.position.xy);
    if SLOPE_SRC != 0u {   // channels clamped by the outer ReLU carry no slope (mode 0: rgb == 0 there)
        sl *= dot(vec3<f32>(0.299, 0.587, 0.114), select(vec3<f32>(0.0), vec3<f32>(1.0), rgb > vec3<f32>(0.0)));
    }
    return SlopeOut(vec4<f32>(rgb, 1.0) * g.a, vec4<f32>(sl, 0.0, 1.0) * g.a);
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
`,gu=`const WG_SIZE = 256u;
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
}`,wu=`// 2DGS surfel cull pass — forked from gaussian_cull.wgsl.
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
`,xu=`// shader implementing gpu radix sort.

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
`,yu=`// shader implementing gpu radix sort.

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
`,Pu=`// ============================================================================
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
}`,Ha=32,Kr=1,jr=2,_a=4,ma=512,va=1024,ba=2048,ga=4096,wa=8192,Su=0,Ht=new ArrayBuffer(Ha),ft={canvas_size:new Uint32Array(Ht,0,2),accel_flags:new Uint32Array(Ht,8,1),feature_mode:new Uint32Array(Ht,12,1),gaussian_scaling:new Float32Array(Ht,16,1),sh_bias:new Float32Array(Ht,20,1),color_K:new Uint32Array(Ht,24,1),walltime:new Float32Array(Ht,28,1)};function Eu(i){ft.canvas_size[0]=i.width>>>0,ft.canvas_size[1]=i.height>>>0,ft.accel_flags[0]=(i.accel_flags??Kr|jr)>>>0,ft.feature_mode[0]=(i.feature_mode??Su)>>>0,ft.gaussian_scaling[0]=i.gaussian_scaling??1,ft.sh_bias[0]=i.sh_bias??.5,ft.color_K[0]=(i.color_K??0)>>>0,ft.walltime[0]=i.walltime??0}function ti(i,s){i.queue.writeBuffer(s,0,Ht)}function on(i,s,o){o&&i&&s&&ti(i,s)}function wn(i,s,o,p,c=!0){ft.canvas_size[0]=i>>>0,ft.canvas_size[1]=s>>>0,on(o??null,p??null,c)}function xa(i,s,o,p=!0){ft.gaussian_scaling[0]=i,on(s??null,o??null,p)}function ya(i,s,o,p=!0){ft.sh_bias[0]=i,on(s??null,o??null,p)}function ku(i,s,o,p=!0){ft.color_K[0]=i>>>0,on(s??null,o??null,p)}function Tu(i,s,o,p=!0){ft.feature_mode[0]=i>>>0,on(s??null,o??null,p)}function Cu(i){const s=new Float32Array(1),o=new Uint32Array(s.buffer);s[0]=i;const p=o[0],c=p>>>16&32768,m=(p>>>23&255)-127+15;return m<=0?c:m>=31?c|31744:c|m<<10|p>>>13&1023}function Pa(i,s=.3,o,p,c=!0){let m=ft.accel_flags[0]&65535&~wa;i&&(m=m|wa|Cu(s)<<16),ft.accel_flags[0]=m>>>0,on(o??null,p??null,c)}function rs(i,s,o,p=!0){let c=ft.accel_flags[0];i.oac!==void 0&&(c=i.oac?c|Kr:c&~Kr),i.spr!==void 0&&(c=i.spr?c|jr:c&~jr),i.bfc!==void 0&&(c=i.bfc?c|_a:c&~_a),i.hypLegacy!==void 0&&(c=i.hypLegacy?c|ma:c&~ma),i.centred!==void 0&&(c=i.centred?c|ga:c&~ga),i.raysplat!==void 0&&(c=i.raysplat?c|ba:c&~ba),i.legacyPos!==void 0&&(c=i.legacyPos?c|va:c&~va),ft.accel_flags[0]=c>>>0,on(s??null,o??null,p)}const Sa=16384;function Ea(i,s,o,p=!0){let c=ft.accel_flags[0];c=i?c|Sa:c&~Sa,ft.accel_flags[0]=c>>>0,on(s??null,o??null,p)}function Bu(i,s,o,p=!0){const c=i>0?Math.max(1,Math.min(63,Math.round(i*8))):0;let m=ft.accel_flags[0];m=m&-505|c<<3,ft.accel_flags[0]=m>>>0,on(s??null,o??null,p)}const Mu=256;function bs(i,s){const o=[],p=[];let c=!0;for(const m of i.split(`
`)){const E=m.trim();let P;if((P=/^\/\/#if\s+(\w+)\s*$/.exec(E))!==null){const k=!!s[P[1]];p.push({parent:c,taken:k}),c=c&&k;continue}if(/^\/\/#else\s*$/.test(E)){const k=p[p.length-1];if(k===void 0)throw new Error("preprocessWGSL: #else without #if");c=k.parent&&!k.taken;continue}if(/^\/\/#endif\s*$/.test(E)){const k=p.pop();if(k===void 0)throw new Error("preprocessWGSL: #endif without #if");c=k.parent;continue}c&&o.push(m)}if(p.length!==0)throw new Error("preprocessWGSL: unterminated #if");return o.join(`
`)}const Au=Ha,Ru=8,Du=96,Uu=12,ni=8,rn=1<<ni,Gn=256,Zs=32/ni,Lu=0,Dr=Zs&1;function ka(i,s){return{sort_indices_buffer:s.createBuffer({label:"ping-pong payload (indices)",size:i*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),sort_depths_buffer:s.createBuffer({label:"ping-pong keys (depths)",size:i*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})}}function zu(i,s){const o=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:7,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),p=i.createPipelineLayout({bindGroupLayouts:[o]}),c=m=>i.createComputePipeline({layout:p,compute:{module:s,entryPoint:m,constants:{WG_SIZE:Gn}}});return{l0TileScan:c("prefix_l0_tile_scan"),l1TileScanOnL0:c("prefix_l1_tile_scan_on_l0_sums"),l1ScanSums:c("prefix_scan_l1_sums"),addL1ToL0:c("prefix_add_l1_to_l0_offsets"),addL0ToElems:c("prefix_add_l0_to_elements"),computeDigitBase:c("compute_digit_base"),prefixBindGroupLayout:o}}function Iu(i,s,o){const p=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),c=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]}),m=i.createPipelineLayout({bindGroupLayouts:[p]}),E=i.createPipelineLayout({bindGroupLayouts:[c]}),P=[];for(let k=0;k<Zs;k++){const R={PASS_ID:k+Lu,RS_RADIX_LOG2:ni,RS_RADIX_SIZE:rn};P.push({localHistogram:i.createComputePipeline({layout:m,compute:{module:s,entryPoint:"local_histogram_pass",constants:R}}),scatterElements:i.createComputePipeline({layout:E,compute:{module:o,entryPoint:"scatter_elements",constants:R}})})}return{passes:P,localHistogramBindGroupLayout:p,scatterBindGroupLayout:c}}function Gu(i){const s=i.createShaderModule({label:"local histogram",code:yu}),o=i.createShaderModule({label:"scatter",code:xu}),p=i.createShaderModule({label:"blelloch prefix",code:Pu}),c=zu(i,p),m=Iu(i,s,o);return{localHistogramBindGroupLayout:m.localHistogramBindGroupLayout,scatterBindGroupLayout:m.scatterBindGroupLayout,passes:m.passes,hierarchicalBlelloch:c}}function Ta(i){const s=i.createTexture({label:"atlas stub (4x4x1 zero RGBA8)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),o=s.createView({dimension:"2d-array"}),p=i.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge"}),c=i.createBuffer({label:"atlas rects stub (5 zero floats)",size:4*5,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),m=i.createBuffer({label:"tex_params stub (atlas_enabled=0)",size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});i.queue.writeBuffer(m,0,new ArrayBuffer(32));const E={width:0,height:0,channels:0,kernel_type:0,num_rects:0,uv_extent:0,sb_number:0,format:4294967295,sh_bias:0,res_bias:0,compact_mult:0,layer_h:0,atlas_scale:0,atlas_offset:0,n_layers:0,n_cols:1,layer_cuts:new Uint32Array,column_cuts:new Uint32Array([0,0]),slice_width:0,rects_expanded:new Float32Array,atlas_bytes:new Uint8Array};return{texture:s,view:o,sampler:p,rectsBuffer:c,texParamsBuffer:m,meta:E}}const is=class is{constructor(s,o,p,c,m,E=null,P={}){B(this,"device");B(this,"pc");B(this,"presentationFormat");B(this,"camera_buffer");B(this,"render_settings_buffer");B(this,"draw_indirect_buffer");B(this,"splat_2d_buffer");B(this,"querySet");B(this,"resolveBuffer");B(this,"resultBuffer");B(this,"queriesPerFrame",Ru);B(this,"queryCapacityFrames",200);B(this,"sort_prefixBindGroup");B(this,"sort_pipelines");B(this,"sort_localHistogramBindGroups");B(this,"sort_scatterBindGroups");B(this,"lastFrame",0);B(this,"frameCount",0);B(this,"preprocessPipeline");B(this,"cullPipeline");B(this,"renderPipeline");B(this,"indirectPipeline");B(this,"renderShaderModule");B(this,"betaKernel",1);B(this,"fetchById");B(this,"octBound");B(this,"acc16");B(this,"accTexture",null);B(this,"accView",null);B(this,"accW",0);B(this,"accH",0);B(this,"legacyRenderPipeline",null);B(this,"varyingsPipeline",null);B(this,"msaa",!1);B(this,"msaaTexture",null);B(this,"msaaView",null);B(this,"msaaW",0);B(this,"msaaH",0);B(this,"msaaPipelines",new Map);B(this,"mkVariant",null);B(this,"slopeTarget",null);B(this,"viewport",null);B(this,"slopeSource",0);B(this,"slopePipelines",new Map);B(this,"rendererBgls",[]);B(this,"betaKernelConst",1);B(this,"slopeBgl",null);B(this,"slopeBg",null);B(this,"slopeDummy",null);B(this,"legacyRenderer",!1);B(this,"accResolvePipeline",null);B(this,"accResolveBgl",null);B(this,"accResolveBindGroup",null);B(this,"twoPass",!1);B(this,"twoPassThresh",.5);B(this,"twoPassParamsBuffer",null);B(this,"twoPassBgl",null);B(this,"twoPassBg",null);B(this,"twoPassSplatsBgl",null);B(this,"twoPassSplatsBg",null);B(this,"twoPassModules",new Map);B(this,"twoPassPipelines",new Map);B(this,"twoPassDepth",null);B(this,"twoPassDepthView",null);B(this,"twoPassW",0);B(this,"twoPassH",0);B(this,"overdrawMode",0);B(this,"overdrawMax",48);B(this,"ovTexture",null);B(this,"ovView",null);B(this,"ovW",0);B(this,"ovH",0);B(this,"ovParamsBuffer",null);B(this,"ovResolvePipeline",null);B(this,"ovResolveBgl",null);B(this,"ovResolveBg",null);B(this,"ovStatsPipeline",null);B(this,"ovStatsBgl",null);B(this,"ovStatsBg",null);B(this,"ovStatsBuffer",null);B(this,"ovReadback",null);B(this,"ovReadState","idle");B(this,"ovLastStats",null);B(this,"ovPipelines",new Map);B(this,"renderSettingsBgl");B(this,"preprocessBgl2");B(this,"renderSplatsBgl");B(this,"atlasBgl");B(this,"sort_info_buffer");B(this,"sort_ping_pong");B(this,"crsBg");B(this,"gsBg");B(this,"cullBg2");B(this,"preprocessBg1");B(this,"renderSplatsBindGroup");B(this,"renderSettingsBindGroup");B(this,"atlasBindGroup");B(this,"indirectBindGroup");B(this,"sh_solvers_buffer");B(this,"bfcParamsBuffer");B(this,"bfcBindGroupLayout");B(this,"bfcBindGroup");B(this,"staticSortKeys",null);B(this,"wideFrustum",!1);B(this,"staticKeysBuffer",null);B(this,"bgColor",[0,0,0,0]);B(this,"showPerfDialogNext",!1);B(this,"requestReorderNextFrame",!1);B(this,"reorderInFlight",!1);B(this,"downloadOnceNextRead",!1);B(this,"downloadOnceFileName","fps_metrics");B(this,"allFrameTimes",[]);B(this,"lastStageBreakdownMs",null);B(this,"timeQueryEnabled");B(this,"atlas");B(this,"atlasParamsBuffer");B(this,"_atlasEnabled",!0);B(this,"mipLodBias",1);B(this,"_mipMode",1);B(this,"preFrame",null);this.fetchById=P.fetchById??!0,this.staticSortKeys=P.staticSortKeys??null,this.wideFrustum=P.wideFrustum??!1,this.octBound=P.octBound??!1,this.acc16=P.acc16??!1,vt(`[render_2dgs] variants: fetch_by_id=${this.fetchById} oct_bound=${this.octBound} acc16=${this.acc16}`);const k=m.includes("timestamp-query");this.timeQueryEnabled=k,k&&vt("⏰ using timestamp-query"),this.pc=s,this.device=o,this.presentationFormat=p,this.camera_buffer=c,this.atlas=E??Ta(o),this.atlasParamsBuffer=o.createBuffer({label:"atlas_params UBO",size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.writeAtlasParams(),o.addEventListener("uncapturederror",Ce=>{console.error("A WebGPU error was not captured:",Ce.error)}),this._setupTimestampQueries(),this._setupBuffers();const R=(Math.floor((this.pc.num_points+Gn-1)/Gn)+1)*Gn,G=Math.ceil(R/Gn);console.log(`keys count adjusted: ${R}`),console.log(`key size: ${this.pc.num_points}`);const z=o.createBuffer({label:"sort info",size:16*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT});this.sort_pipelines=Gu(o);const V=[ka(R,o),ka(R,o)],q=o.createBuffer({label:"workgroup histograms",size:G*rn*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),Y=o.createBuffer({label:"workgroup prefixes",size:G*rn*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),L=o.createBuffer({label:"digit base",size:rn*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),F=Math.ceil(G/Gn),H=Math.ceil(F/Gn),I=o.createBuffer({label:"prefix l0 sums",size:F*rn*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),Z=o.createBuffer({label:"prefix l0 offsets",size:F*rn*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),N=o.createBuffer({label:"prefix l1 sums",size:H*rn*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),ie=o.createBuffer({label:"prefix l1 offsets",size:H*rn*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});this.sort_prefixBindGroup=o.createBindGroup({label:"prefix 2L bind group",layout:this.sort_pipelines.hierarchicalBlelloch.prefixBindGroupLayout,entries:[{binding:0,resource:{buffer:z}},{binding:1,resource:{buffer:q}},{binding:2,resource:{buffer:Y}},{binding:3,resource:{buffer:I}},{binding:4,resource:{buffer:Z}},{binding:5,resource:{buffer:N}},{binding:6,resource:{buffer:ie}},{binding:7,resource:{buffer:L}}]}),this.sort_localHistogramBindGroups=[o.createBindGroup({label:"localHistogram src=0",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:z}},{binding:1,resource:{buffer:V[0].sort_depths_buffer}},{binding:2,resource:{buffer:q}}]}),o.createBindGroup({label:"localHistogram src=1",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:z}},{binding:1,resource:{buffer:V[1].sort_depths_buffer}},{binding:2,resource:{buffer:q}}]})],this.sort_scatterBindGroups=[o.createBindGroup({label:"scatter 0->1",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:z}},{binding:1,resource:{buffer:L}},{binding:2,resource:{buffer:V[0].sort_depths_buffer}},{binding:3,resource:{buffer:V[1].sort_depths_buffer}},{binding:4,resource:{buffer:V[0].sort_indices_buffer}},{binding:5,resource:{buffer:V[1].sort_indices_buffer}},{binding:6,resource:{buffer:Y}}]}),o.createBindGroup({label:"scatter 1->0",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:z}},{binding:1,resource:{buffer:L}},{binding:2,resource:{buffer:V[1].sort_depths_buffer}},{binding:3,resource:{buffer:V[0].sort_depths_buffer}},{binding:4,resource:{buffer:V[1].sort_indices_buffer}},{binding:5,resource:{buffer:V[0].sort_indices_buffer}},{binding:6,resource:{buffer:Y}}]})],this.sort_info_buffer=z,this.sort_ping_pong=V;const fe=this.device.createBindGroupLayout({label:"camera + renderSettings",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),ae=this.device.createBindGroupLayout({label:"gaussians + splats",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),ce=this.device.createBindGroupLayout({label:"cullBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),de=this.device.createBindGroupLayout({label:"preprocessBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]});this.crsBg=this.device.createBindGroup({label:"camera + renderSettings",layout:fe,entries:[{binding:0,resource:{buffer:this.camera_buffer}},{binding:1,resource:{buffer:this.render_settings_buffer}}]}),this.gsBg=this.device.createBindGroup({label:"surfels + splats",layout:ae,entries:[{binding:0,resource:{buffer:this.pc.surfel_buffer}},{binding:1,resource:{buffer:this.splat_2d_buffer}}]}),this.cullBg2=this.device.createBindGroup({label:"cullBg2",layout:ce,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[0].sort_depths_buffer}},{binding:2,resource:{buffer:this.sort_ping_pong[0].sort_indices_buffer}},{binding:3,resource:{buffer:this.sh_solvers_buffer}}]}),this.preprocessBgl2=de,this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:de,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}},{binding:4,resource:{buffer:this.atlas.rectsBuffer}},{binding:5,resource:{buffer:this.atlasParamsBuffer}},{binding:6,resource:{buffer:this.pc.surfel_buffer}}]});const xe=this.device.createShaderModule({code:gu});this.indirectPipeline=this.device.createComputePipeline({label:"indirect dispatch calc",layout:"auto",compute:{module:xe,entryPoint:"write_dispatch_triples",constants:{RS_RADIX_SIZE:256}}}),this.indirectBindGroup=this.device.createBindGroup({label:"indirect dispatch bind group",layout:this.indirectPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.draw_indirect_buffer}}]}),this.bfcParamsBuffer=this.device.createBuffer({label:"bfc params (uniform, 16 B)",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([2,0,0,0]));const Ae=[{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}],Ue=[{binding:1,resource:{buffer:this.bfcParamsBuffer}}];if(this.staticSortKeys){if(this.staticSortKeys.length!==this.pc.num_points)throw new Error(`staticSortKeys has ${this.staticSortKeys.length} entries, expected ${this.pc.num_points}`);this.staticKeysBuffer=this.device.createBuffer({label:"static sort keys",size:as(this.staticSortKeys.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.staticKeysBuffer,0,this.staticSortKeys),Ae.push({binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}),Ue.push({binding:2,resource:{buffer:this.staticKeysBuffer}})}this.bfcBindGroupLayout=this.device.createBindGroupLayout({label:"bfc params (cull group 3)",entries:Ae}),this.bfcBindGroup=this.device.createBindGroup({label:"bfc params bind",layout:this.bfcBindGroupLayout,entries:Ue});const pe=this.device.createShaderModule({code:bs(wu,{STATIC_KEYS:this.staticSortKeys!==null,WIDE_FRUSTUM:this.wideFrustum})});this.cullPipeline=this.device.createComputePipeline({label:"surfel_cull",layout:this.device.createPipelineLayout({bindGroupLayouts:[fe,ae,ce,this.bfcBindGroupLayout]}),compute:{module:pe,entryPoint:"surfel_cull"}});const J=this.device.createShaderModule({code:bu});this.preprocessPipeline=this.device.createComputePipeline({label:"preprocess_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[fe,de]}),compute:{module:J,entryPoint:"preprocess"}});const Te=this.device.createShaderModule({label:"render_2dgs",code:bs(Ns,{FETCH_BY_ID:this.fetchById,OCT:this.octBound})});Te.getCompilationInfo().then(Ce=>{Ce.messages.length>0?(console.group("[render_2dgs.wgsl] compilation messages"),Ce.messages.forEach(De=>{(De.type==="error"?console.error:De.type==="warning"?console.warn:console.log)(`${De.type} (line ${De.lineNum}:${De.linePos}): ${De.message}`)}),console.groupEnd()):console.log("[render_2dgs.wgsl] compiled clean")});const ge=this.device.createBindGroupLayout({label:"render_settings (vertex+fragment)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),me=this.fetchById?GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT:GPUShaderStage.VERTEX,he=this.device.createBindGroupLayout({label:"splats_2d + indices (vertex)",entries:[{binding:0,visibility:me,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),oe=this.device.createBindGroupLayout({label:"atlas (fragment)",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array",multisampled:!1}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]}),ue=this.atlas.meta.format!==4294967295&&this.atlas.meta.kernel_type===0?0:1;this.device.pushErrorScope("validation"),this.renderPipeline=this.device.createRenderPipeline({label:"render_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[ge,he,oe]}),vertex:{module:Te,entryPoint:"vs_main"},fragment:{module:Te,entryPoint:"fs_main",constants:{BETA_KERNEL:ue},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}});const ze=(Ce,De,Pe,ee=1)=>{const le=this.device.createShaderModule({label:`render_2dgs (${Ce})`,code:bs(Ns,{FETCH_BY_ID:De,OCT:Pe})});return this.device.createRenderPipeline({label:`render_2dgs_${Ce}`,multisample:{count:ee},layout:this.device.createPipelineLayout({bindGroupLayouts:[ge,he,oe]}),vertex:{module:le,entryPoint:"vs_main"},fragment:{module:le,entryPoint:"fs_main",constants:{BETA_KERNEL:ue},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}})};this.rendererBgls=[ge,he,oe],this.betaKernelConst=ue,this.varyingsPipeline=ze("varyings",!1,this.octBound),this.legacyRenderPipeline=this.octBound?ze("legacy",!1,!1):this.varyingsPipeline,this.mkVariant=ze,this.device.popErrorScope().then(Ce=>{Ce?console.error("[render_2dgs] pipeline create validation error:",Ce.message):console.log("[render_2dgs] pipeline created OK")}),this.renderSettingsBindGroup=this.device.createBindGroup({label:"render_settings (vertex)",layout:ge,entries:[{binding:0,resource:{buffer:this.render_settings_buffer}}]}),this.renderSplatsBindGroup=this.device.createBindGroup({label:"splats_2d + indices (vertex)",layout:he,entries:[{binding:0,resource:{buffer:this.splat_2d_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[Dr].sort_indices_buffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:oe,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:this.atlasSampler()},{binding:2,resource:{buffer:this.atlas.texParamsBuffer}},{binding:3,resource:{buffer:this.atlas.rectsBuffer}}]}),this.renderShaderModule=Te,this.betaKernel=ue,this.renderSettingsBgl=ge,this.renderSplatsBgl=he,this.atlasBgl=oe}get totalQueryCount(){return this.queriesPerFrame*this.queryCapacityFrames}get resolvesIntoTarget(){return this.msaa||this.acc16||this.overdrawMode!==0}setSlopeAtlas(s,o){this.slopeBgl||(this.slopeBgl=this.device.createBindGroupLayout({label:"slope sidecar",entries:[{binding:6,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array"}},{binding:7,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]})),s||(this.slopeDummy??(this.slopeDummy=this.device.createTexture({size:[1,1,1],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING})),s=this.slopeDummy.createView({dimension:"2d-array"}));const p=this.device.createBuffer({label:"slope params",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});this.device.queue.writeBuffer(p,0,new Float32Array(o)),this.slopeBg=this.device.createBindGroup({layout:this.slopeBgl,entries:[{binding:6,resource:s},{binding:7,resource:{buffer:p}}]})}slopePipelineFor(s,o){this.slopeBg||this.setSlopeAtlas(null,[0,0,0,0]);const p=`${s?1:0}${o?1:0}${this.slopeSource}`;let c=this.slopePipelines.get(p);if(!c){const m=this.device.createShaderModule({label:`render_2dgs slope (${p})`,code:bs(Ns,{FETCH_BY_ID:s,OCT:o})}),E={color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}};c=this.device.createRenderPipeline({label:`render_2dgs_slope_${p}`,layout:this.device.createPipelineLayout({bindGroupLayouts:[...this.rendererBgls,this.slopeBgl]}),vertex:{module:m,entryPoint:"vs_main"},fragment:{module:m,entryPoint:"fs_slope",constants:{BETA_KERNEL:this.betaKernelConst,SLOPE_SRC:this.slopeSource},targets:[{format:this.presentationFormat,blend:E},{format:"rgba16float",blend:E}]},primitive:{topology:"triangle-strip",cullMode:"none"}}),this.slopePipelines.set(p,c)}return c}setBfcParams(s,o){this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([s,o[0],o[1],o[2]]))}get texParamsBuffer(){return this.atlas.texParamsBuffer}get hasAtlas(){return this.atlas.meta.format!==4294967295}writeAtlasParams(){var c;const s=new ArrayBuffer(32),o=new Uint32Array(s),p=new Float32Array(s);o[0]=(this.atlas.meta.slice_width||this.atlas.meta.width)|0,o[1]=this.atlas.meta.layer_h|0,p[2]=this.atlas.meta.uv_extent||0,o[3]=this.atlas.meta.probe_mode|0||0,o[4]=this._mipMode!==0?Math.max(1,((c=this.atlas.meta.mip_bytes)==null?void 0:c.length)??1):1,p[5]=this.mipLodBias,o[6]=this._mipMode===2?1:0,this.device.queue.writeBuffer(this.atlasParamsBuffer,0,s)}setMsaa(s){s!==this.msaa&&(this.msaa=s,vt(`[render_2dgs] MSAA 4x: ${s?"ON":"OFF"}`))}get isMsaa(){return this.msaa}msaaPipelineFor(s,o){const p=`${s?"byid":"var"}_${o?"oct":"quad"}`;let c=this.msaaPipelines.get(p);return c||(c=this.mkVariant(`msaa4_${p}`,s,o,4),this.msaaPipelines.set(p,c)),c}ensureMsaaResources(s,o){var p;this.msaaTexture!==null&&this.msaaW===s&&this.msaaH===o||((p=this.msaaTexture)==null||p.destroy(),this.msaaTexture=this.device.createTexture({label:"msaa4 colour",size:{width:s,height:o},sampleCount:4,format:this.presentationFormat,usage:GPUTextureUsage.RENDER_ATTACHMENT}),this.msaaView=this.msaaTexture.createView(),this.msaaW=s,this.msaaH=o)}setTwoPass(s){s!==this.twoPass&&(this.twoPass=s,vt(`[render_2dgs] two-pass layer path: ${s?"ON":"OFF"} (thresh ${this.twoPassThresh.toFixed(2)})`))}get isTwoPass(){return this.twoPass}setOpaqueThresh(s){this.twoPassThresh=Math.min(.999,Math.max(.001,s)),this.writeTwoPassParams()}get opaqueThresh(){return this.twoPassThresh}writeTwoPassParams(){this.twoPassParamsBuffer!==null&&this.device.queue.writeBuffer(this.twoPassParamsBuffer,0,new Float32Array([this.twoPassThresh,0,0,0]))}ensureSplatsVF(){this.twoPassSplatsBg===null&&(this.twoPassSplatsBgl=this.device.createBindGroupLayout({label:"splats_2d + indices (vertex+fragment)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),this.twoPassSplatsBg=this.device.createBindGroup({label:"splats_2d + indices (vertex+fragment)",layout:this.twoPassSplatsBgl,entries:[{binding:0,resource:{buffer:this.splat_2d_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[Dr].sort_indices_buffer}}]}))}ensureTwoPassResources(s,o){var p;this.ensureSplatsVF(),this.twoPassParamsBuffer===null&&(this.twoPassParamsBuffer=this.device.createBuffer({label:"twopass params",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.writeTwoPassParams(),this.twoPassBgl=this.device.createBindGroupLayout({label:"twopass (camera + params)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),this.twoPassBg=this.device.createBindGroup({label:"twopass (camera + params)",layout:this.twoPassBgl,entries:[{binding:0,resource:{buffer:this.camera_buffer}},{binding:1,resource:{buffer:this.twoPassParamsBuffer}}]})),!(this.twoPassDepth!==null&&this.twoPassW===s&&this.twoPassH===o)&&((p=this.twoPassDepth)==null||p.destroy(),this.twoPassDepth=this.device.createTexture({label:"twopass layer depth",size:{width:Math.max(1,s),height:Math.max(1,o),depthOrArrayLayers:1},format:"depth32float",usage:GPUTextureUsage.RENDER_ATTACHMENT}),this.twoPassDepthView=this.twoPassDepth.createView(),this.twoPassW=s,this.twoPassH=o)}renderModuleFor(s,o,p){const c=`${s?"byid":"vary"}_${o?"oct":"quad"}_${p?"hwz":"z0"}`,m=this.twoPassModules.get(c);if(m!==void 0)return m;const E=this.device.createShaderModule({label:`render_2dgs (${c})`,code:bs(Ns,{FETCH_BY_ID:s,OCT:o,HW_DEPTH:p})});return E.getCompilationInfo().then(P=>{for(const k of P.messages)k.type==="error"&&console.error(`[render_2dgs ${c}] (line ${k.lineNum}:${k.linePos}): ${k.message}`)}),this.twoPassModules.set(c,E),E}twoPassPipelinesFor(s,o){const p=`${s?"byid":"vary"}_${o?"oct":"quad"}`,c=this.twoPassPipelines.get(p);if(c!==void 0)return c;const m=this.renderModuleFor(s,o,!0),E=this.device.createPipelineLayout({bindGroupLayouts:[this.renderSettingsBgl,this.twoPassSplatsBgl,this.atlasBgl,this.twoPassBgl]});this.device.pushErrorScope("validation");const P=this.device.createRenderPipeline({label:`render_2dgs_opaque_${p}`,layout:E,vertex:{module:m,entryPoint:"vs_main"},fragment:{module:m,entryPoint:"fs_opaque",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:this.presentationFormat}]},depthStencil:{format:"depth32float",depthWriteEnabled:!0,depthCompare:"less"},primitive:{topology:"triangle-strip",cullMode:"none"}}),k=this.device.createRenderPipeline({label:`render_2dgs_front_${p}`,layout:E,vertex:{module:m,entryPoint:"vs_main"},fragment:{module:m,entryPoint:"fs_front",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:this.presentationFormat,blend:is.BLEND_OVER}]},depthStencil:{format:"depth32float",depthWriteEnabled:!1,depthCompare:"less"},primitive:{topology:"triangle-strip",cullMode:"none"}});this.device.popErrorScope().then(G=>{G?console.error(`[render_2dgs twopass ${p}] pipeline validation error:`,G.message):console.log(`[render_2dgs twopass ${p}] pipelines created OK`)});const R={opaque:P,front:k};return this.twoPassPipelines.set(p,R),R}setOverdrawMode(s){s!==this.overdrawMode&&(this.overdrawMode=s,this.ovLastStats=null,vt(`[render_2dgs] overdraw view: ${["off","shaded fragments","rasterised fragments"][s]}`))}get overdrawModeValue(){return this.overdrawMode}setOverdrawMax(s){this.overdrawMax=Math.max(1,s),this.ovParamsBuffer&&this.device.queue.writeBuffer(this.ovParamsBuffer,0,new Float32Array([this.overdrawMax,0,0,0]))}ensureOverdrawResources(s,o){var p;if(this.ensureSplatsVF(),this.ovResolvePipeline===null){this.ovParamsBuffer=this.device.createBuffer({label:"overdraw params",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.ovParamsBuffer,0,new Float32Array([this.overdrawMax,0,0,0]));const c=`
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
}`,m=this.device.createShaderModule({label:"overdraw_resolve",code:c});this.ovResolveBgl=this.device.createBindGroupLayout({label:"overdraw resolve",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),this.ovResolvePipeline=this.device.createRenderPipeline({label:"overdraw_resolve",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.ovResolveBgl]}),vertex:{module:m,entryPoint:"vs_main"},fragment:{module:m,entryPoint:"fs_main",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list"}});const E=`
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
}`,P=this.device.createShaderModule({label:"overdraw_stats",code:E});this.ovStatsBgl=this.device.createBindGroupLayout({label:"overdraw stats",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:"unfilterable-float"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),this.ovStatsPipeline=this.device.createComputePipeline({label:"overdraw_stats",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.ovStatsBgl]}),compute:{module:P,entryPoint:"main"}}),this.ovStatsBuffer=this.device.createBuffer({label:"overdraw stats",size:16,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.ovReadback=this.device.createBuffer({label:"overdraw stats readback",size:16,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}this.ovTexture!==null&&this.ovW===s&&this.ovH===o||((p=this.ovTexture)==null||p.destroy(),this.ovTexture=this.device.createTexture({label:"overdraw counts",size:{width:Math.max(1,s),height:Math.max(1,o),depthOrArrayLayers:1},format:"r16float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.ovView=this.ovTexture.createView(),this.ovResolveBg=this.device.createBindGroup({label:"overdraw resolve",layout:this.ovResolveBgl,entries:[{binding:0,resource:this.ovView},{binding:1,resource:{buffer:this.ovParamsBuffer}}]}),this.ovStatsBg=this.device.createBindGroup({label:"overdraw stats",layout:this.ovStatsBgl,entries:[{binding:0,resource:this.ovView},{binding:1,resource:{buffer:this.ovStatsBuffer}}]}),this.ovW=s,this.ovH=o)}ovPipelineFor(s,o,p){const c=`${s}_${o?"byid":"vary"}_${p?"oct":"quad"}`,m=this.ovPipelines.get(c);if(m!==void 0)return m;const E=s.startsWith("tp_"),P=this.renderModuleFor(o,p,E),k=this.device.createPipelineLayout({bindGroupLayouts:E?[this.renderSettingsBgl,this.twoPassSplatsBgl,this.atlasBgl,this.twoPassBgl]:[this.renderSettingsBgl,this.twoPassSplatsBgl,this.atlasBgl]}),R={single_raster:"fs_count_raster",single_shaded:"fs_count_shaded",tp_raster:"fs_count_raster",tp_opaque:"fs_count_opaque",tp_front:"fs_count_front"}[s];let G;s==="tp_raster"?G={format:"depth32float",depthWriteEnabled:!1,depthCompare:"always"}:s==="tp_opaque"?G={format:"depth32float",depthWriteEnabled:!0,depthCompare:"less"}:s==="tp_front"&&(G={format:"depth32float",depthWriteEnabled:!1,depthCompare:"less"}),this.device.pushErrorScope("validation");const z=this.device.createRenderPipeline({label:`render_2dgs_${c}`,layout:k,vertex:{module:P,entryPoint:"vs_main"},fragment:{module:P,entryPoint:R,constants:{BETA_KERNEL:this.betaKernel},targets:[{format:"r16float",blend:is.BLEND_ADD}]},depthStencil:G,primitive:{topology:"triangle-strip",cullMode:"none"}});return this.device.popErrorScope().then(V=>{V&&console.error(`[render_2dgs overdraw ${c}] pipeline validation error:`,V.message)}),this.ovPipelines.set(c,z),z}async readOverdrawStats(){if(this.ovReadState!=="copied"||this.ovReadback===null)return this.ovLastStats;this.ovReadState="mapping";try{await this.ovReadback.mapAsync(GPUMapMode.READ);const s=new Uint32Array(this.ovReadback.getMappedRange().slice(0));this.ovReadback.unmap();const o=Math.max(1,this.ovW*this.ovH);this.ovLastStats={mean:s[0]/o,meanCovered:s[2]>0?s[0]/s[2]:0,max:s[1],coveredFrac:s[2]/o}}finally{this.ovReadState="idle"}return this.ovLastStats}ensureAccResources(s,o){var p;if(this.accResolvePipeline===null){const c=`
@group(0) @binding(0) var src : texture_2d<f32>;
@vertex fn vs_main(@builtin(vertex_index) vid : u32) -> @builtin(position) vec4<f32> {
    const pos = array(vec2<f32>(-1.0, -1.0), vec2<f32>(3.0, -1.0), vec2<f32>(-1.0, 3.0));
    return vec4<f32>(pos[vid], 0.0, 1.0);
}
@fragment fn fs_main(@builtin(position) p : vec4<f32>) -> @location(0) vec4<f32> {
    let dims = vec2<i32>(textureDimensions(src));
    let q = clamp(vec2<i32>(floor(p.xy)), vec2<i32>(0), dims - vec2<i32>(1));
    return textureLoad(src, q, 0);
}`,m=this.device.createShaderModule({label:"acc16_resolve",code:c});this.accResolveBgl=this.device.createBindGroupLayout({label:"acc16_resolve src",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}}]}),this.accResolvePipeline=this.device.createRenderPipeline({label:"acc16_resolve",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.accResolveBgl]}),vertex:{module:m,entryPoint:"vs_main"},fragment:{module:m,entryPoint:"fs_main",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list"}})}this.accTexture!==null&&this.accW===s&&this.accH===o||((p=this.accTexture)==null||p.destroy(),this.accTexture=this.device.createTexture({label:"acc16 target",size:{width:Math.max(1,s),height:Math.max(1,o),depthOrArrayLayers:1},format:"rgba16float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.accView=this.accTexture.createView(),this.accResolveBindGroup=this.device.createBindGroup({label:"acc16_resolve bind",layout:this.accResolveBgl,entries:[{binding:0,resource:this.accView}]}),this.accW=s,this.accH=o)}setAtlas(s){this.atlas=s??Ta(this.device),this.writeAtlasParams(),this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:this.preprocessBgl2,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}},{binding:4,resource:{buffer:this.atlas.rectsBuffer}},{binding:5,resource:{buffer:this.atlasParamsBuffer}},{binding:6,resource:{buffer:this.pc.surfel_buffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:this.atlasBgl,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:this.atlasSampler()},{binding:2,resource:{buffer:this.atlas.texParamsBuffer}},{binding:3,resource:{buffer:this.atlas.rectsBuffer}}]}),this.atlas.meta.format!==4294967295&&qs(this.device,this.atlas.texParamsBuffer,this.atlas.meta,this._atlasEnabled,this._mipMode)}setAtlasEnabled(s){this.atlas.meta.format!==4294967295&&(this._atlasEnabled=s,qs(this.device,this.atlas.texParamsBuffer,this.atlas.meta,s,this._mipMode))}setMipLodBias(s){this.mipLodBias=s,this.writeAtlasParams()}setFetchById(s){s!==this.fetchById&&(this.fetchById=s,vt(`[render_2dgs] fragment inputs: ${s?"fetch-by-id (storage re-read)":"13 flat varyings"}`))}get isFetchById(){return this.fetchById}setLegacyRenderer(s){if(s===this.legacyRenderer)return;this.legacyRenderer=s,rs({legacyPos:s,hypLegacy:s},this.device,this.render_settings_buffer);const o=!s&&this.octBound?8:4;this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([o])),vt(`[render_2dgs] renderer: ${s?"LEGACY (varyings, quad, f16 centres)":"current"}`)}get isLegacyRenderer(){return this.legacyRenderer}atlasSampler(){return this._mipMode===2&&this.atlas.samplerAniso?this.atlas.samplerAniso:this.atlas.sampler}setMipMode(s){if(this.atlas.meta.format===4294967295)return;const o=this._mipMode;this._mipMode=typeof s=="boolean"?s?1:0:s,o===2!=(this._mipMode===2)&&this.atlasBgl&&(this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:this.atlasBgl,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:this.atlasSampler()},{binding:2,resource:{buffer:this.atlas.texParamsBuffer}},{binding:3,resource:{buffer:this.atlas.rectsBuffer}}]})),this.writeAtlasParams(),qs(this.device,this.atlas.texParamsBuffer,this.atlas.meta,this._atlasEnabled,this._mipMode)}get hasMips(){var s;return(((s=this.atlas.meta.mip_bytes)==null?void 0:s.length)??1)>1}async debugReadSortedIndices(s=30){const o=Math.max(0,Math.min(s,this.pc.num_points)),p=o*Uint32Array.BYTES_PER_ELEMENT;if(p===0){console.log("[DEBUG] No indices to read.");return}const c=this.device.createBuffer({size:p,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),m=this.device.createCommandEncoder();m.copyBufferToBuffer(this.sort_ping_pong[Dr].sort_indices_buffer,0,c,0,p),this.device.queue.submit([m.finish()]),await c.mapAsync(GPUMapMode.READ);const E=new Uint32Array(c.getMappedRange());console.log("[DEBUG] Sorted indices (first",o,"):",Array.from(E)),c.unmap()}writeSortKeys(s){if(!this.staticKeysBuffer)throw new Error("writeSortKeys: renderer built without staticSortKeys");this.device.queue.writeBuffer(this.staticKeysBuffer,0,s)}frame(s,o,p=!0){this.preFrame&&this.preFrame();const m=(this.lastFrame+this.frameCount)%this.queryCapacityFrames*this.queriesPerFrame,E=p&&this.timeQueryEnabled;{s.clearBuffer(this.sort_info_buffer,0,4);const P={label:"cull"};E&&(P.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:m+0,endOfPassWriteIndex:m+1});const k=s.beginComputePass(P);k.setPipeline(this.cullPipeline),k.setBindGroup(0,this.crsBg),k.setBindGroup(1,this.gsBg),k.setBindGroup(2,this.cullBg2),k.setBindGroup(3,this.bfcBindGroup);const R=Math.ceil(this.pc.num_points/Mu);k.dispatchWorkgroups(R,1,1),k.end()}{const P=s.beginComputePass({label:"calculate indirect dispatch"});P.setPipeline(this.indirectPipeline),P.setBindGroup(0,this.indirectBindGroup),P.dispatchWorkgroups(1,1,1),P.end()}{const P={label:"preprocess"};E&&(P.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:m+2,endOfPassWriteIndex:m+3});const k=s.beginComputePass(P);k.setPipeline(this.preprocessPipeline),k.setBindGroup(0,this.crsBg),k.setBindGroup(1,this.preprocessBg1),k.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),k.end()}for(let P=0;P<Zs;P++){const k=P&1,R=this.sort_pipelines.passes[P],G=this.sort_localHistogramBindGroups[k],z=this.sort_scatterBindGroups[k];{const V={label:`upsweep_round${P}`};E&&P==0&&(V.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:m+4});const q=s.beginComputePass(V);q.setPipeline(R.localHistogram),q.setBindGroup(0,G),q.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),q.end()}{const V=s.beginComputePass({label:`prefix_round${P} - l0TileScan`});V.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l0TileScan),V.setBindGroup(0,this.sort_prefixBindGroup),V.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),V.end()}{const V=s.beginComputePass({label:`prefix_round${P} - l1TileScanOnL0`});V.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1TileScanOnL0),V.setBindGroup(0,this.sort_prefixBindGroup),V.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),V.end()}{const V=s.beginComputePass({label:`prefix_round${P} - l1ScanSums`});V.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1ScanSums),V.setBindGroup(0,this.sort_prefixBindGroup),V.dispatchWorkgroups(1,rn,1),V.end()}{const V=s.beginComputePass({label:`prefix_round${P} - addL1ToL0`});V.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL1ToL0),V.setBindGroup(0,this.sort_prefixBindGroup),V.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),V.end()}{const V=s.beginComputePass({label:`prefix_round${P} - addL0ToElems`});V.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL0ToElems),V.setBindGroup(0,this.sort_prefixBindGroup),V.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),V.end()}{const V=s.beginComputePass({label:`prefix_round${P} - computeDigitBase`});V.setPipeline(this.sort_pipelines.hierarchicalBlelloch.computeDigitBase),V.setBindGroup(0,this.sort_prefixBindGroup),V.dispatchWorkgroups(1,1,1),V.end()}{const V={label:`scatter_round${P}`};E&&P==Zs-1&&(V.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:m+5});const q=s.beginComputePass(V);q.setPipeline(R.scatterElements),q.setBindGroup(0,z),q.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),q.end()}}{const P=ft.canvas_size[0],k=ft.canvas_size[1],R=this.overdrawMode!==0;let G=o;R?(this.ensureOverdrawResources(P,k),G=this.ovView):this.acc16&&(this.ensureAccResources(P,k),G=this.accView);const z=R?{r:0,g:0,b:0,a:0}:this.bgColor,V=R||this.acc16,q=this.fetchById&&!this.legacyRenderer,Y=this.octBound&&!this.legacyRenderer;if(this.twoPass){this.ensureTwoPassResources(P,k);let L,F;if(R)this.overdrawMode===1?(L=this.ovPipelineFor("tp_opaque",q,Y),F=this.ovPipelineFor("tp_front",q,Y)):L=F=this.ovPipelineFor("tp_raster",q,Y);else{const ie=this.twoPassPipelinesFor(q,Y);L=ie.opaque,F=ie.front}const H={label:"render_opaque_layer",colorAttachments:[{view:G,loadOp:"clear",storeOp:"store",clearValue:z}],depthStencilAttachment:{view:this.twoPassDepthView,depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}};E&&(H.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:m+6});const I=s.beginRenderPass(H);I.setPipeline(L),I.setBindGroup(0,this.renderSettingsBindGroup),I.setBindGroup(1,this.twoPassSplatsBg),I.setBindGroup(2,this.atlasBindGroup),I.setBindGroup(3,this.twoPassBg),I.drawIndirect(this.draw_indirect_buffer,0),I.end();const Z={label:"render_front",colorAttachments:[{view:G,loadOp:"load",storeOp:"store"}],depthStencilAttachment:{view:this.twoPassDepthView,depthReadOnly:!0}};E&&!V&&(Z.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:m+7});const N=s.beginRenderPass(Z);N.setPipeline(F),N.setBindGroup(0,this.renderSettingsBindGroup),N.setBindGroup(1,this.twoPassSplatsBg),N.setBindGroup(2,this.atlasBindGroup),N.setBindGroup(3,this.twoPassBg),N.drawIndirect(this.draw_indirect_buffer,0),N.end()}else{const L=this.msaa&&!R&&!this.acc16;L&&this.ensureMsaaResources(P,k);const F=this.slopeTarget!==null&&!L&&!R&&!this.acc16&&!this.legacyRenderer,H=[L?{view:this.msaaView,resolveTarget:G,loadOp:"clear",storeOp:"discard",clearValue:z}:{view:G,loadOp:"clear",storeOp:"store",clearValue:z}];F&&H.push({view:this.slopeTarget,loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:0}});const I={label:"render",colorAttachments:H};E&&(I.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:m+6,...V?{}:{endOfPassWriteIndex:m+7}});const Z=s.beginRenderPass(I);R?(Z.setPipeline(this.ovPipelineFor(this.overdrawMode===1?"single_shaded":"single_raster",q,Y)),Z.setBindGroup(1,this.twoPassSplatsBg)):F?(Z.setPipeline(this.slopePipelineFor(this.fetchById,Y)),Z.setBindGroup(1,this.renderSplatsBindGroup),Z.setBindGroup(3,this.slopeBg)):(Z.setPipeline(L?this.msaaPipelineFor(q,Y):this.legacyRenderer?this.legacyRenderPipeline:this.fetchById?this.renderPipeline:this.varyingsPipeline),Z.setBindGroup(1,this.renderSplatsBindGroup)),this.viewport!==null&&!L&&(Z.setViewport(0,0,this.viewport[0],this.viewport[1],0,1),Z.setScissorRect(0,0,this.viewport[0],this.viewport[1])),Z.setBindGroup(0,this.renderSettingsBindGroup),Z.setBindGroup(2,this.atlasBindGroup),Z.drawIndirect(this.draw_indirect_buffer,0),Z.end()}if(R){s.clearBuffer(this.ovStatsBuffer,0,16);const L=s.beginComputePass({label:"overdraw_stats"});L.setPipeline(this.ovStatsPipeline),L.setBindGroup(0,this.ovStatsBg),L.dispatchWorkgroups(Math.ceil(P/16),Math.ceil(k/16),1),L.end();const F={label:"overdraw_resolve",colorAttachments:[{view:o,loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:1}}]};E&&(F.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:m+7});const H=s.beginRenderPass(F);H.setPipeline(this.ovResolvePipeline),H.setBindGroup(0,this.ovResolveBg),H.draw(3),H.end(),this.ovReadState==="idle"&&(s.copyBufferToBuffer(this.ovStatsBuffer,0,this.ovReadback,0,16),this.ovReadState="copied")}else if(this.acc16){const L={label:"acc16_resolve",colorAttachments:[{view:o,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};E&&(L.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:m+7});const F=s.beginRenderPass(L);F.setPipeline(this.accResolvePipeline),F.setBindGroup(0,this.accResolveBindGroup),F.draw(3),F.end()}}this.frameCount++}async readPerfMetrics(s){const o=(s==null?void 0:s.silent)??!1;if(this.frameCount<=0)return;const p=this.device.createCommandEncoder({label:"timestamp resolve encoder"});p.resolveQuerySet(this.querySet,0,this.totalQueryCount,this.resolveBuffer,0),p.copyBufferToBuffer(this.resolveBuffer,0,this.resultBuffer,0,this.totalQueryCount*8),this.device.queue.submit([p.finish()]),await this.device.queue.onSubmittedWorkDone();const c=[["Total",7,0],["Culling",1,0],["Preprocess",3,2],["Sort",5,4],["Render",7,6]];await this.resultBuffer.mapAsync(GPUMapMode.READ);const m=new BigInt64Array(this.resultBuffer.getMappedRange()),E=Math.min(this.frameCount,this.queryCapacityFrames),P=(this.lastFrame+this.frameCount-E)%this.queryCapacityFrames,k=Array.from({length:c.length},()=>[]);let R=0;for(let H=0;H<E;H++){const I=(P+H)%this.queryCapacityFrames,Z=I*this.queriesPerFrame;let N=!0;for(let ie=0;ie<c.length;ie++){const[fe,ae,ce]=c[ie];if(m[Z+ce]===0n||m[Z+ae]===0n||m[Z+ae]<m[Z+ce]){N=!1;break}}if(!N){!o&&I%60===0&&console.debug("[timestamp] frame slot",I,"contains unwritten (0) timestamps, skipped in stats");continue}R++;for(let ie=0;ie<c.length;ie++){const[fe,ae,ce]=c[ie],de=Number(m[Z+ce]),xe=Number(m[Z+ae]);k[ie].push((xe-de)/1e6)}}if(R===0){this.resultBuffer.unmap(),o||console.warn("[timestamp] No complete frames available (some timestamps are 0). It may be the first frame or the GPU is still filling.");return}this.allFrameTimes.push(...k[0]);const G=[];let z=0,V=0,q=0;for(let H=0;H<c.length;H++){const I=c[H][0],Z=k[H];let N=0;if(I==="Total"){const ie=this.allFrameTimes;N=ie.reduce((ce,de)=>ce+de,0)/ie.length;const fe=[...ie].sort((ce,de)=>ce-de);z=fe[Math.floor(fe.length*.99)]||0;const ae=ie.reduce((ce,de)=>ce+Math.pow(de-N,2),0)/ie.length;V=Math.sqrt(ae),q=N}else N=Z.reduce((ie,fe)=>ie+fe,0)/Z.length;G.push([I,N])}this.lastFrame+=this.frameCount,this.frameCount=0;const Y=Object.fromEntries(G);this.lastStageBreakdownMs={cull:Y.Culling??0,preprocess:Y.Preprocess??0,sort:Y.Sort??0,render:Y.Render??0,total:Y.Total??0};const F=`[TIMESTAMP - ${this.constructor.name}]
`+G.map(([H,I])=>`${H}: ${I.toFixed(3)}ms`).join(`
`)+`
Total P99: ${z.toFixed(3)}ms
Total STD: ${V.toFixed(3)}ms
Total AVG: ${q.toFixed(3)}ms
Stats computed over ${this.allFrameTimes.length} frames (cumulative)
${this.lastFrame} frames rendered since start`;if(o||(console.log(F),console.log("All Frame Times (Total, ms):",JSON.stringify(this.allFrameTimes))),this.downloadOnceNextRead){this.downloadOnceNextRead=!1;const H=`Stage,ms
`,I=G.map(([ie,fe])=>`${ie},${fe.toFixed(3)}`).join(`
`),Z="data:text/csv;charset=utf-8,"+encodeURIComponent(H+I),N=document.createElement("a");N.href=Z,N.download=`${this.downloadOnceFileName}.csv`,document.body.appendChild(N),N.click(),N.remove()}if(this.showPerfDialogNext){this.showPerfDialogNext=!1;try{alert(F)}catch{console.warn("Unable to show dialog; metrics printed to console.")}}this.resultBuffer.unmap()}_setupTimestampQueries(){this.querySet=this.device.createQuerySet({type:"timestamp",count:this.totalQueryCount});const s=this.totalQueryCount*8;this.resolveBuffer=this.device.createBuffer({size:s,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),this.resultBuffer=this.device.createBuffer({size:s,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}_setupBuffers(){this.render_settings_buffer=this.device.createBuffer({label:"render settings",size:Au,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const s=document.querySelector("canvas"),o=s?s.width:1,p=s?s.height:1;Eu({width:o,height:p,sh_bias:this.pc.sh_bias,color_K:this.pc.K,feature_mode:this.pc.feature_mode}),ti(this.device,this.render_settings_buffer),this.splat_2d_buffer=this.device.createBuffer({label:"splats_2d (Splat2DGS)",size:as(this.pc.num_points*Du),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.draw_indirect_buffer=this.device.createBuffer({label:"draw indirect",size:4*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT}),this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([this.octBound?8:4,0,0,0])),this.sh_solvers_buffer=this.device.createBuffer({label:"sh_solvers",size:as(this.pc.num_points*Uu),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST})}requestPerfDialog(){this.showPerfDialogNext=!0}requestDownloadMetrics(s){if(s&&s.trim().length>0){const o=s.trim().replace(/[^a-zA-Z0-9_\-]/g,"_");this.downloadOnceFileName=o.length>0?o:this.downloadOnceFileName}else{const o=new Date,p=`${o.getFullYear()}${String(o.getMonth()+1).padStart(2,"0")}${String(o.getDate()).padStart(2,"0")}_${String(o.getHours()).padStart(2,"0")}${String(o.getMinutes()).padStart(2,"0")}${String(o.getSeconds()).padStart(2,"0")}`;this.downloadOnceFileName=`fps_metrics_${p}`}this.downloadOnceNextRead=!0}requestReorder(){}async maybeReorderAfterSubmit(){}};B(is,"BLEND_OVER",{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}),B(is,"BLEND_ADD",{color:{operation:"add",srcFactor:"one",dstFactor:"one"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one"}});let Xs=is;class Fu{constructor(s){B(this,"nSurfels");B(this,"nNodes");B(this,"planes");B(this,"front");B(this,"back");B(this,"copOff");B(this,"cop");B(this,"missing");B(this,"stackNode");B(this,"stackPhase");B(this,"keys");B(this,"lastMs",0);B(this,"lastEye",[NaN,NaN,NaN]);const o=new DataView(s),p=String.fromCharCode(o.getUint8(0),o.getUint8(1),o.getUint8(2),o.getUint8(3));if(p!=="BSP1")throw new Error(`not a BSP1 file (magic ${p})`);this.nSurfels=o.getUint32(4,!0),this.nNodes=o.getUint32(8,!0);const c=o.getUint32(12,!0),m=o.getUint32(16,!0);let E=20;const P=this.nNodes;if(this.planes=new Float32Array(s.slice(E,E+P*16)),E+=P*16,this.front=new Int32Array(s.slice(E,E+P*4)),E+=P*4,this.back=new Int32Array(s.slice(E,E+P*4)),E+=P*4,this.copOff=new Uint32Array(s.slice(E,E+(P+1)*4)),E+=(P+1)*4,this.cop=new Uint32Array(s.slice(E,E+c*4)),E+=c*4,this.missing=new Uint32Array(s.slice(E,E+m*4)),E+=m*4,E!==s.byteLength)throw new Error(`BSP1 size mismatch: parsed ${E} of ${s.byteLength} bytes`);this.keys=new Float32Array(this.nSurfels),this.stackNode=new Int32Array(2*P+2),this.stackPhase=new Uint8Array(2*P+2)}computeKeys(s){const o=s[0],p=s[1],c=s[2];if(o===this.lastEye[0]&&p===this.lastEye[1]&&c===this.lastEye[2])return!1;this.lastEye=[o,p,c];const m=performance.now(),E=this.planes,P=this.front,k=this.back,R=this.copOff,G=this.cop,z=this.keys;let V=1;for(let F=0;F<this.missing.length;F++)z[this.missing[F]]=V++;const q=this.stackNode,Y=this.stackPhase;let L=0;for(q[0]=0,Y[0]=0,L=1;L>0;){L--;const F=q[L],H=Y[L],I=E[4*F],Z=E[4*F+1],N=E[4*F+2];if(I===0&&Z===0&&N===0){for(let ce=R[F];ce<R[F+1];ce++)z[G[ce]]=V++;continue}const ie=I*o+Z*p+N*c-E[4*F+3]>=0,fe=ie?P[F]:k[F],ae=ie?k[F]:P[F];if(H===0)q[L]=F,Y[L]=1,L++,ae>=0&&(q[L]=ae,Y[L]=0,L++);else{for(let ce=R[F];ce<R[F+1];ce++)z[G[ce]]=V++;fe>=0&&(q[L]=fe,Y[L]=0,L++)}}return this.lastMs=performance.now()-m,!0}invalidate(){this.lastEye=[NaN,NaN,NaN]}}async function Ou(i){const s=await fetch(i);if(!s.ok)throw new Error(`BSP fetch ${i}: HTTP ${s.status}`);return new Fu(await s.arrayBuffer())}function Vu(i,s){return 2*Math.atan(s/(2*i))}function $u(i,s,o,p){const c=Math.tan(p/2),m=Math.tan(o/2),E=c*i,P=-E,k=m*i,R=-k,G=gt.create();return G[0]=2*i/(k-R),G[5]=-2*i/(E-P),G[2]=(k+R)/(k-R),G[6]=(E+P)/(E-P),G[14]=1,G[10]=s/(s-i),G[11]=-(s*i)/(s-i),gt.transpose(G,G),G}async function Hr(i){vt(`loading scene camera file... : ${i}`);const o=await(await fetch(i)).json();return vt(`loaded cameras count: ${o.length}`),o.map(p=>{const c=X.clone(p.position),m=Ct.create(...p.rotation.flat()),E=m[0],P=m[4],k=m[8],R=m[1],G=m[5],z=m[9],V=m[2],q=m[6],Y=m[10];E*(G*Y-z*q)-P*(R*Y-z*V)+k*(R*q-G*V)<0&&(m[1]=-m[1],m[5]=-m[5],m[9]=-m[9]);const F=gt.fromMat3(m);return{position:c,rotation:F,img_name:p.img_name,id:p.id}})}const Nu=4*2,qu=4*16,Ya=4*qu+2*Nu;function Wu(i){return i.createBuffer({label:"camera uniform",size:Ya,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}const In=new Float32Array(Ya/Float32Array.BYTES_PER_ELEMENT),nr=class nr{constructor(s,o){B(this,"_renderSize",null);B(this,"_refSize",null);B(this,"uniform_buffer");B(this,"position",X.create());B(this,"rotation",gt.create());B(this,"zfar",100);B(this,"fovY",45/180*Math.PI);B(this,"fovX");B(this,"focalRatioX",1);B(this,"focal",ia.create());B(this,"viewport",ia.create());B(this,"view_matrix",gt.identity());B(this,"view_inv_matrix",gt.identity());B(this,"proj_matrix",gt.identity());B(this,"proj_inv_matrix",gt.identity());B(this,"_negPos",X.create());B(this,"look",X.create(0,0,1));B(this,"up",X.create(0,1,0));B(this,"right",X.create(1,0,0));this.canvas=s,this.device=o,this.uniform_buffer=o?Wu(o):null,this.on_update_canvas()}getFovY(){return this.fovY}setRenderSize(s,o,p,c){this._renderSize=[s,o],this._refSize=p&&c?[p,c]:null,this.on_update_canvas()}clearRenderSize(){this._renderSize=null,this._refSize=null,this.on_update_canvas()}getRenderSize(){return this._renderSize}on_update_canvas(){const s=this._renderSize?this._renderSize[0]:this.canvas.width,o=this._renderSize?this._renderSize[1]:this.canvas.height;if(this._refSize){const[p,c]=this._refSize,m=.5*c/Math.tan(this.fovY*.5);this.focal[0]=m*this.focalRatioX*(s/p),this.focal[1]=m*(o/c)}else{const p=.5*o/Math.tan(this.fovY*.5);this.focal[0]=p*this.focalRatioX,this.focal[1]=p}this.fovX=Vu(this.focal[0],s),this.viewport[0]=s,this.viewport[1]=o,this.proj_matrix=$u(.01,this.zfar,this.fovX,this.fovY),gt.inverse(this.proj_matrix,this.proj_inv_matrix),this.update_buffer()}update_buffer(){this._negPos[0]=-this.position[0],this._negPos[1]=-this.position[1],this._negPos[2]=-this.position[2],gt.copy(this.rotation,this.view_matrix),gt.translate(this.view_matrix,this._negPos,this.view_matrix),gt.inverse(this.view_matrix,this.view_inv_matrix),X.transformMat4Upper3x3(nr.Z_AXIS,this.view_inv_matrix,this.look),X.normalize(this.look,this.look),X.cross(this.up,this.look,this.right),X.normalize(this.right,this.right);let s=0;In.set(this.view_matrix,s),s+=16,In.set(this.view_inv_matrix,s),s+=16,In.set(this.proj_matrix,s),s+=16,In.set(this.proj_inv_matrix,s),s+=16,In.set(this.viewport,s),s+=2,In.set(this.focal,s),s+=2,this.device&&this.device.queue.writeBuffer(this.uniform_buffer,0,In)}set_preset(s){X.copy(s.position,this.position),gt.copy(s.rotation,this.rotation),this.update_buffer()}setFov(s){this.fovY=s,this.on_update_canvas()}setFocalRatio(s){this.focalRatioX=s,this.on_update_canvas()}getFov(){return this.fovY}};B(nr,"Z_AXIS",X.create(0,0,1));let Js=nr;const Ku={bilinear:0,bicubic:1,hermite:2,texture:3,bc5:4,p:4,spline:5},Za={texture:0,p:1,bc5:2,spline:2},ju=.7,Hu=`
struct P { wl: u32, hl: u32, w: u32, h: u32, mode: u32, lam: f32, T: f32, pad2: u32, K: vec4<f32> };
@group(0) @binding(0) var src: texture_2d<f32>;
@group(0) @binding(1) var<uniform> p: P;
// mode 5: learned spline kernel, control grid as a 3D texture (rgb = sample / x-Taylor / y-Taylor kernels)
@group(0) @binding(3) var spk: texture_3d<f32>;
@group(0) @binding(4) var spk_s: sampler;
// mode 3: blended texture slope from the renderer's second target, (Σ α T ∂Y/∂x, Σ α T ∂Y/∂y, 0, ·), low-res px units
@group(0) @binding(2) var slope: texture_2d<f32>;
fn ts(x: i32, y: i32) -> vec2<f32> {
    let xc = clamp(x, 0, i32(p.wl) - 1); let yc = clamp(y, 0, i32(p.hl) - 1);
    return textureLoad(slope, vec2<i32>(xc, yc), 0).rg;
}

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
    if (p.mode == 5u) {
        // SplineCNN kernel over the 2x2 cell (same conventions as spline_upscale_cuda.cu): output pixel at low-res
        // position (x, y), tap offset o = (x, y) - j, Taylor term t = gx*ox + gy*oy from the blended slope target;
        // pseudo-coordinate u = ((ox+1)/2, (oy+1)/2, clamp(t)/(2T)+0.5); knot i sits at u = i/(K-1) -> texel centre.
        let x = (f32(X) + 0.5) * (f32(p.wl) / f32(p.w)) - 0.5; let y = (f32(Y) + 0.5) * (f32(p.hl) / f32(p.h)) - 0.5;
        let ix0 = i32(floor(x)); let jy0 = i32(floor(y));
        let K3 = p.K.xyz;
        for (var b = 0; b < 2; b++) {
            for (var a = 0; a < 2; a++) {
                let jx = ix0 + a; let jy = jy0 + b;
                let ox = x - f32(jx); let oy = y - f32(jy);
                let s = ts(jx, jy);
                let tx = s.x * ox; let ty = s.y * oy; let t = tx + ty;
                let u = vec3<f32>((ox + 1.0) * 0.5, (oy + 1.0) * 0.5, clamp(t, -p.T, p.T) / (2.0 * p.T) + 0.5);
                let tc = (clamp(u, vec3<f32>(0.0), vec3<f32>(1.0)) * (K3 - 1.0) + 0.5) / K3;
                let k = textureSampleLevel(spk, spk_s, tc, 0.0).rgb;
                c += f(jx, jy) * k.r + vec3<f32>(tx) * k.g + vec3<f32>(ty) * k.b;
            }
        }
    } else if (p.mode == 0u) {
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
                if (p.mode == 4u) {   // slope sidecar alone (luminance slope -> all channels)
                    let t = ts(i, j);
                    c += f(i, j) * (Hx[a] * Hy[b]) + vec3<f32>(t.x) * (Gx[a] * Hy[b]) + vec3<f32>(t.y) * (Hx[a] * Gy[b]);
                    continue;
                }
                var sx = gx(i, j); var sy = gy(i, j);
                if (p.mode == 3u) { let t = ts(i, j) * p.lam; sx += vec3<f32>(t.x); sy += vec3<f32>(t.y); }   // luminance slope -> all channels
                c += f(i, j) * (Hx[a] * Hy[b]) + sx * (Gx[a] * Hy[b]) + sy * (Hx[a] * Gy[b]) + gxy(i, j) * (Gx[a] * Gy[b]);
            }
        }
    }
    return vec4<f32>(c, 1.0);
}`;class Yu{constructor(s,o,p,c,m=!1){B(this,"pipeline");B(this,"uni");B(this,"bgCache",new Map);B(this,"lowTex",null);B(this,"lowView",null);B(this,"lowSize",[0,0]);B(this,"allocSize",[0,0]);B(this,"last","");B(this,"slopeTex",null);B(this,"slopeView",null);B(this,"dummySlope");B(this,"splineTex");B(this,"splineSampler");B(this,"splineKernel",null);B(this,"scale");this.device=s,this.format=o,this.mode=p,this.exact=m,this.scale=c;const E=s.createShaderModule({label:"upscaler",code:Hu});this.pipeline=s.createRenderPipeline({label:"upscaler",layout:"auto",vertex:{module:E,entryPoint:"vs"},fragment:{module:E,entryPoint:"fs",targets:[{format:o}]},primitive:{topology:"triangle-list"}}),this.uni=s.createBuffer({size:48,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.dummySlope=s.createTexture({size:[1,1],format:"rgba16float",usage:GPUTextureUsage.TEXTURE_BINDING}),this.splineTex=s.createTexture({size:[1,1,1],dimension:"3d",format:"rgba16float",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),this.splineSampler=s.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge"})}get slopeTarget(){return this.slopeView}setSplineKernel(s){if(s===this.splineKernel)return;if(this.splineKernel=s,this.bgCache.clear(),this.last="",this.splineTex.destroy(),!s){this.splineTex=this.device.createTexture({size:[1,1,1],dimension:"3d",format:"rgba16float",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});return}const[o,p,c]=s.K,m=o*p*c,E=new Uint16Array(m*4);for(let P=0;P<m;P++)E[4*P]=Ur(s.w[3*P]),E[4*P+1]=Ur(s.w[3*P+1]),E[4*P+2]=Ur(s.w[3*P+2]),E[4*P+3]=15360;this.splineTex=this.device.createTexture({size:[o,p,c],dimension:"3d",format:"rgba16float",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),this.device.queue.writeTexture({texture:this.splineTex},E,{bytesPerRow:o*8,rowsPerImage:p},[o,p,c])}lowTarget(s,o){var P,k;const p=Math.max(1,Math.min(s,Math.round(s*this.scale))),c=Math.max(1,Math.min(o,Math.round(o*this.scale))),m=this.exact?p:s,E=this.exact?c:o;return(!this.lowTex||this.allocSize[0]!==m||this.allocSize[1]!==E)&&((P=this.lowTex)==null||P.destroy(),this.bgCache.clear(),this.lowTex=this.device.createTexture({size:[m,E],format:this.format,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.lowView=this.lowTex.createView(),this.allocSize=[m,E],(k=this.slopeTex)==null||k.destroy(),this.slopeTex=null,this.slopeView=null,Za[this.mode]!==void 0&&(this.slopeTex=this.device.createTexture({size:[m,E],format:"rgba16float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.slopeView=this.slopeTex.createView())),this.lowSize=[p,c],{view:this.lowView,w:p,h:c}}pass(s,o,p,c){var G,z,V,q;const[m,E]=this.lowSize,P=`${m},${E},${p},${c}`;if(P!==this.last){const Y=new Uint32Array([m,E,p,c,Ku[this.mode],0,0,0,0,0,0,0]),L=new Float32Array(Y.buffer);L[5]=ju,L[6]=((G=this.splineKernel)==null?void 0:G.T)??.25,L[8]=((z=this.splineKernel)==null?void 0:z.K[0])??1,L[9]=((V=this.splineKernel)==null?void 0:V.K[1])??1,L[10]=((q=this.splineKernel)==null?void 0:q.K[2])??1,L[11]=0,this.device.queue.writeBuffer(this.uni,0,Y),this.last=P}let k=this.bgCache.get(this.lowView);k||(k=this.device.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:this.lowView},{binding:1,resource:{buffer:this.uni}},{binding:2,resource:this.slopeView??this.dummySlope.createView()},{binding:3,resource:this.splineTex.createView({dimension:"3d"})},{binding:4,resource:this.splineSampler}]}),this.bgCache.set(this.lowView,k));const R=s.beginRenderPass({colorAttachments:[{view:o,loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:1}}]});R.setPipeline(this.pipeline),R.setBindGroup(0,k),R.draw(3),R.end()}destroy(){var s,o;(s=this.lowTex)==null||s.destroy(),(o=this.slopeTex)==null||o.destroy(),this.dummySlope.destroy(),this.splineTex.destroy(),this.uni.destroy()}}function Ur(i){const s=new Float32Array([i]),o=new Uint32Array(s.buffer)[0],p=o>>>16&32768;let c=(o>>>23&255)-127+15,m=o&8388607;if((o>>>23&255)===255)return p|31744|(m?512:0);if(c>=31)return p|31744;if(c<=0){if(c<-10)return p;m|=8388608;const k=14-c;let R=m>>k;const G=m&(1<<k)-1,z=1<<k-1;return(G>z||G===z&&R&1)&&R++,p|R}let E=p|c<<10|m>>13;const P=m&8191;return(P>4096||P===4096&&E&1)&&E++,E}const gs=64,Lr=-7,Zu=5;function zr(i){const s=i&32768?-1:1,o=i>>10&31,p=i&1023;return o===0?s*p*2**-24:o===31?p?NaN:s*(1/0):s*(1+p/1024)*2**(o-15)}class Xu{constructor(s,o,p,c={}){B(this,"n");B(this,"texelMode");B(this,"px");B(this,"py");B(this,"pz");B(this,"tpu");B(this,"op");B(this,"ext2s");B(this,"hist",new Float64Array(gs));B(this,"cur",1);B(this,"agree",0);B(this,"tau");B(this,"pct");B(this,"levels");B(this,"upHold");B(this,"minPx");B(this,"continuous");B(this,"fMax");B(this,"rateUp");B(this,"rateDown");B(this,"deadband");this.tau=c.tau??1,this.pct=c.pct??.5,this.upHold=c.upHold??12,this.minPx=c.minPx??6,this.levels=(c.levels??[1,2,4]).slice().sort((H,I)=>H-I),this.continuous=c.continuous??!0,this.fMax=this.levels[this.levels.length-1],this.rateUp=c.rateUp??.03,this.rateDown=c.rateDown??.1,this.deadband=c.deadband??.06;const m=Math.min(c.sample??4096,o),E=new Uint32Array(s.buffer,s.byteOffset,o*8),P=p?p.uv_extent:3,k=!!p&&!p.probe_mode&&p.num_rects===o&&p.rects_expanded.length>=o*4,R=k?Math.round(p.rects_expanded.length/o):0;this.texelMode=k;const G=[],z=[],V=[],q=[],Y=[],L=[],F=o/m;for(let H=0;H<m;H++){const I=Math.min(o-1,Math.floor(H*F)),Z=zr(E[I*8+3]&65535);if(!(Z>.02))continue;const N=zr(E[I*8+4]&65535),ie=zr(E[I*8+4]>>>16),fe=Math.sqrt(Math.max(1e-12,N*ie));let ae;if(k){const ce=p.rects_expanded[I*R+2],de=p.rects_expanded[I*R+3];if(!(ce>0&&de>0))continue;ae=Math.sqrt(ce*de)/(2*P*fe)}else ae=1/(2*P*fe);G.push(s[I*8]),z.push(s[I*8+1]),V.push(s[I*8+2]),q.push(ae),Y.push(Z),L.push(2*P*fe)}this.n=G.length,this.px=Float32Array.from(G),this.py=Float32Array.from(z),this.pz=Float32Array.from(V),this.tpu=Float32Array.from(q),this.op=Float32Array.from(Y),this.ext2s=Float32Array.from(L)}get factor(){return this.cur}reset(){this.cur=1,this.agree=0}choose(s,o,p){const c=s.rotation,m=s.position[0],E=s.position[1],P=s.position[2],k=s.getFovY(),R=Math.tan(k*.5),G=R*o/p,z=.5*p/R,V=this.hist;V.fill(0);let q=0,Y=0;const L=gs/(Zu-Lr);for(let I=0;I<this.n;I++){const Z=this.px[I]-m,N=this.py[I]-E,ie=this.pz[I]-P,fe=c[2]*Z+c[6]*N+c[10]*ie;if(!(fe>.05))continue;const ae=c[0]*Z+c[4]*N+c[8]*ie,ce=c[1]*Z+c[5]*N+c[9]*ie;if(Math.abs(ae)>1.15*fe*G||Math.abs(ce)>1.15*fe*R)continue;const de=this.ext2s[I]*z/fe,xe=this.texelMode?this.tpu[I]*fe/z:this.minPx/de,Ae=this.op[I]*Math.min(de*de,4096);let Ue=Math.floor((Math.log2(Math.max(xe,1e-9))-Lr)*L);Ue=Ue<0?0:Ue>=gs?gs-1:Ue,V[Ue]+=Ae,q+=Ae,Y++}let F=1/0;if(q>0){let I=0;for(let Z=0;Z<gs;Z++)if(I+=V[Z],I>=this.pct*q){F=2**(Lr+(Z+.5)/L);break}}if(this.continuous){let I=F>0?Math.min(this.fMax,Math.max(1,this.tau/F)):1;I<1.08&&(I=1);const Z=Math.log2(I)-Math.log2(this.cur);if(Math.abs(Z)>Math.log2(1+this.deadband)||I===1||I===this.fMax){const N=Z>0?Math.min(Z,this.rateUp):Math.max(Z,-this.rateDown);this.cur=Math.abs(Z)<=Math.abs(N)?I:2**(Math.log2(this.cur)+N)}return this.cur<1.02&&(this.cur=1),{f:this.cur,q:F,visible:Y,texelMode:this.texelMode}}let H=1;for(const I of this.levels)I*F<=this.tau&&(H=I);return H<this.cur?(this.cur=H,this.agree=0):H>this.cur?++this.agree>=this.upHold&&(this.cur=H,this.agree=0):this.agree=0,{f:this.cur,q:F,visible:Y,texelMode:this.texelMode}}}const Ju=X.create(1,0,0),Qu=X.create(0,1,0),ed=X.create(0,0,1);function td(i,s){const o=i[0],p=i[4],c=i[8],m=i[1],E=i[5],P=i[9],k=i[2],R=i[6],G=i[10],z=o+E+G;let V,q,Y,L;if(z>0){const F=.5/Math.sqrt(z+1);V=.25/F,q=(R-P)*F,Y=(c-k)*F,L=(m-p)*F}else if(o>E&&o>G){const F=2*Math.sqrt(1+o-E-G);V=(R-P)/F,q=.25*F,Y=(p+m)/F,L=(c+k)/F}else if(E>G){const F=2*Math.sqrt(1+E-o-G);V=(c-k)/F,q=(p+m)/F,Y=.25*F,L=(P+R)/F}else{const F=2*Math.sqrt(1+G-o-E);V=(m-p)/F,q=(c+k)/F,Y=(P+R)/F,L=.25*F}return s[0]=q,s[1]=Y,s[2]=L,s[3]=V,s}class Xa{constructor(s){B(this,"element");B(this,"enabled",!0);B(this,"center",X.create(0,0,0));B(this,"up",X.create(0,1,0));B(this,"rotation",[0,0]);B(this,"shift",[0,0]);B(this,"scroll",0);B(this,"speed",.1);B(this,"sensitivity",.08);B(this,"leftPressed",!1);B(this,"rightPressed",!1);B(this,"leftDragPans",!1);B(this,"lastX",0);B(this,"lastY",0);B(this,"touches",new Map);B(this,"lastTouchCenter",null);B(this,"lastPinchDistance",null);B(this,"lastTwoFingerAngle",null);B(this,"lastTouchCount",0);B(this,"roll",0);B(this,"_dir",X.create());B(this,"_right",X.create());B(this,"_upCam",X.create());B(this,"_scratch",X.create());B(this,"_qY",ht.create());B(this,"_qX",ht.create());B(this,"_qRot",ht.create());B(this,"_qZ",ht.create());B(this,"_qLocal",ht.create());B(this,"_qWorldToCam",ht.create());B(this,"_scratchMat3",Ct.create());B(this,"bboxMin",null);B(this,"bboxMax",null);B(this,"anchor",X.create(0,0,0));B(this,"downCallback",s=>{var o,p,c,m;if(this.enabled){if(s.pointerType==="touch"){this.touches.set(s.pointerId,{x:s.pageX,y:s.pageY}),this.handleTouchGestures(),(p=(o=s.target)==null?void 0:o.setPointerCapture)==null||p.call(o,s.pointerId),s.preventDefault();return}s.isPrimary&&(s.button===0?(this.leftPressed=!0,this.leftDragPans=s.shiftKey):s.button===2?this.rightPressed=!0:this.rightPressed=!0,this.lastX=s.pageX,this.lastY=s.pageY,(m=(c=s.target)==null?void 0:c.setPointerCapture)==null||m.call(c,s.pointerId),s.preventDefault())}});B(this,"moveCallback",s=>{if(!this.enabled)return;if(s.pointerType==="touch"){if(!this.touches.has(s.pointerId))return;this.touches.set(s.pointerId,{x:s.pageX,y:s.pageY}),this.handleTouchGestures(),s.preventDefault();return}if(!s.isPrimary||!this.leftPressed&&!this.rightPressed)return;s.preventDefault();const o=s.pageX-this.lastX,p=s.pageY-this.lastY;this.lastX=s.pageX,this.lastY=s.pageY,this.leftPressed&&!this.leftDragPans?(this.rotation[0]+=o,this.rotation[1]-=p):(this.rightPressed||this.leftPressed&&this.leftDragPans)&&(this.shift[1]-=o,this.shift[0]+=p)});B(this,"upCallback",s=>{var o,p,c,m;if(s.pointerType==="touch"){this.touches.delete(s.pointerId),this.handleTouchGestures(),(p=(o=s.target)==null?void 0:o.releasePointerCapture)==null||p.call(o,s.pointerId),s.preventDefault();return}s.button===0?this.leftPressed=!1:s.button===2?this.rightPressed=!1:this.rightPressed=!1,(m=(c=s.target)==null?void 0:c.releasePointerCapture)==null||m.call(c,s.pointerId),s.preventDefault()});B(this,"wheelCallback",s=>{if(!this.enabled||(s.preventDefault(),this.rightPressed))return;let o=s.deltaY;s.deltaMode===1?o*=16:s.deltaMode===2&&(o*=100),this.scroll+=o*.01});this.camera=s,this.registerElement(s.canvas)}get sceneRadius(){if(!this.bboxMin||!this.bboxMax)return null;const s=this.bboxMax[0]-this.bboxMin[0],o=this.bboxMax[1]-this.bboxMin[1],p=this.bboxMax[2]-this.bboxMin[2],c=.5*Math.sqrt(s*s+o*o+p*p);return c>1e-6?c:null}addRoll(s){this.roll+=s}registerElement(s){this.element&&this.element!==s&&(this.element.removeEventListener("pointerdown",this.downCallback),this.element.removeEventListener("pointermove",this.moveCallback),this.element.removeEventListener("pointerup",this.upCallback),this.element.removeEventListener("wheel",this.wheelCallback)),this.element=s,this.element.addEventListener("pointerdown",this.downCallback),this.element.addEventListener("pointermove",this.moveCallback),this.element.addEventListener("pointerup",this.upCallback),this.element.addEventListener("wheel",this.wheelCallback,{passive:!1}),this.element.addEventListener("contextmenu",o=>o.preventDefault())}setCenter(s){X.copy(s,this.center),X.copy(s,this.anchor)}setOrbitPivot(s){X.set(s[0],s[1],s[2],this.center),this._reorientCameraToCenter()}setOrbitDepth(s){if(!isFinite(s)||s<.001)return;const o=this.camera.rotation;X.set(o[2],o[6],o[10],this._dir),X.normalize(this._dir,this._dir),X.scale(this._dir,s,this._dir),X.add(this.camera.position,this._dir,this.center)}_reorientCameraToCenter(){const s=this.camera;if(X.subtract(this.center,s.position,this._scratch),X.length(this._scratch)<1e-6)return;X.normalize(this._scratch,this._scratch),X.cross(this.up,this._scratch,this._right),X.length(this._right)<1e-6&&X.set(1,0,0,this._right),X.normalize(this._right,this._right),X.cross(this._scratch,this._right,this._upCam),X.normalize(this._upCam,this._upCam);const o=s.rotation;o[0]=this._right[0],o[1]=this._upCam[0],o[2]=this._scratch[0],o[3]=0,o[4]=this._right[1],o[5]=this._upCam[1],o[6]=this._scratch[1],o[7]=0,o[8]=this._right[2],o[9]=this._upCam[2],o[10]=this._scratch[2],o[11]=0,o[12]=0,o[13]=0,o[14]=0,o[15]=1,s.update_buffer()}setBbox(s,o){this.bboxMin=X.create(s[0],s[1],s[2]),this.bboxMax=X.create(o[0],o[1],o[2]);const p=(s[0]+o[0])*.5,c=(s[1]+o[1])*.5,m=(s[2]+o[2])*.5;X.set(p,c,m,this.center),X.set(p,c,m,this.anchor)}resetToCamera(){const s=this.camera.rotation;X.set(s[2],s[6],s[10],this._dir),X.normalize(this._dir,this._dir);let o=null;if(this.bboxMin&&this.bboxMax){let p=-1/0,c=1/0,m=!1;for(let E=0;E<3;E++){const P=this._dir[E],k=this.bboxMin[E]-this.camera.position[E],R=this.bboxMax[E]-this.camera.position[E];if(Math.abs(P)>1e-8){const G=k/P,z=R/P;p=Math.max(p,Math.min(G,z)),c=Math.min(c,Math.max(G,z))}else if(k>0||R<0){m=!0;break}}!m&&p<=c&&c>0&&(o=(Math.max(p,0)+c)*.5)}if(o===null||!isFinite(o)||o<.001){X.subtract(this.anchor,this.camera.position,this._scratch);const p=X.dot(this._scratch,this._dir);o=p>.001?p:X.length(this._scratch)}o=Math.max(.1,o),X.scale(this._dir,o,this._dir),X.add(this.camera.position,this._dir,this.center)}handleTouchGestures(){const s=this.touches.size;if(s!==this.lastTouchCount&&(this.lastTouchCenter=null,this.lastPinchDistance=null,this.lastTwoFingerAngle=null),this.lastTouchCount=s,s===1){const o=this.touches.values().next().value;if(this.lastTouchCenter){const p=o.x-this.lastTouchCenter[0],c=o.y-this.lastTouchCenter[1];this.rotation[0]+=p*.3,this.rotation[1]-=c*.3}this.lastTouchCenter=[o.x,o.y]}else if(s===2){const o=Array.from(this.touches.values()),p=(o[0].x+o[1].x)*.5,c=(o[0].y+o[1].y)*.5,m=o[1].x-o[0].x,E=o[1].y-o[0].y,P=Math.hypot(m,E),k=Math.atan2(E,m);if(this.lastTouchCenter!==null&&this.lastPinchDistance!==null&&this.lastTwoFingerAngle!==null){const R=p-this.lastTouchCenter[0],G=c-this.lastTouchCenter[1],z=Math.hypot(R,G),V=Math.abs(P-this.lastPinchDistance);let q=k-this.lastTwoFingerAngle;q>Math.PI&&(q-=2*Math.PI),q<-Math.PI&&(q+=2*Math.PI),z>.5&&(this.shift[1]-=R,this.shift[0]+=G),V>1&&this.lastPinchDistance>.001&&(this.scroll+=-Math.log(P/this.lastPinchDistance)*10),Math.abs(q)>.0087&&(this.roll+=q)}this.lastTouchCenter=[p,c],this.lastPinchDistance=P,this.lastTwoFingerAngle=k}}update(s){if(!this.enabled||Math.abs(this.rotation[0])<1e-4&&Math.abs(this.rotation[1])<1e-4&&Math.abs(this.shift[0])<1e-4&&Math.abs(this.shift[1])<1e-4&&Math.abs(this.scroll)<1e-4&&Math.abs(this.roll)<1e-4)return;const o=this.camera;{const F=o.rotation;this.up[0]=F[1],this.up[1]=F[5],this.up[2]=F[9],X.length(this.up)>1e-6?X.normalize(this.up,this.up):X.set(0,1,0,this.up)}let p=0,c=!1;Math.abs(this.roll)>1e-4&&(p=this.roll,this.roll=0,c=!0),X.subtract(o.position,this.center,this._dir);let m=X.length(this._dir);m<1e-6&&(m=1e-6);const E=Math.exp(Math.log(m)+this.scroll*s*10*this.speed);X.scale(this._dir,E/m,this._dir),m=E;const P=o.rotation;this._right[0]=P[0],this._right[1]=P[4],this._right[2]=P[8],X.normalize(this._right,this._right),X.length(this._right)<1e-6&&X.set(1,0,0,this._right);const k=X.create(P[1],P[5],P[9]);X.normalize(k,k),X.length(k)<1e-6&&X.set(0,1,0,k);const R=s*this.speed*.1*m,G=this.shift[1]*R,z=-this.shift[0]*R;X.scale(this._right,G,this._scratch),X.add(this.center,this._scratch,this.center),X.add(o.position,this._scratch,o.position),X.scale(k,z,this._scratch),X.add(this.center,this._scratch,this.center),X.add(o.position,this._scratch,o.position);const V=this.rotation[0]*s*this.sensitivity,q=this.rotation[1]*s*this.sensitivity;if(Math.abs(V)>1e-5||Math.abs(q)>1e-5||c){const F=o.rotation;td(F,this._qWorldToCam),ht.fromAxisAngle(Ju,-q,this._qX),ht.fromAxisAngle(Qu,-V,this._qY),ht.multiply(this._qX,this._qY,this._qLocal),c&&(ht.fromAxisAngle(ed,1*p,this._qZ),ht.multiply(this._qZ,this._qLocal,this._qLocal)),ht.normalize(this._qLocal,this._qLocal),ht.multiply(this._qLocal,this._qWorldToCam,this._qWorldToCam),ht.normalize(this._qWorldToCam,this._qWorldToCam),Ct.fromQuat(this._qWorldToCam,this._scratchMat3),gt.fromMat3(this._scratchMat3,o.rotation);const H=o.rotation,I=H[2],Z=H[6],N=H[10];o.position[0]=this.center[0]-I*m,o.position[1]=this.center[1]-Z*m,o.position[2]=this.center[2]-N*m,this.up[0]=H[1],this.up[1]=H[5],this.up[2]=H[9],X.normalize(this.up,this.up)}else X.add(this.center,this._dir,o.position);o.update_buffer();const L=Math.pow(.8,s*60);this.rotation[0]*=L,Math.abs(this.rotation[0])<1e-4&&(this.rotation[0]=0),this.rotation[1]*=L,Math.abs(this.rotation[1])<1e-4&&(this.rotation[1]=0),this.shift[0]*=L,Math.abs(this.shift[0])<1e-4&&(this.shift[0]=0),this.shift[1]*=L,Math.abs(this.shift[1])<1e-4&&(this.shift[1]=0),this.scroll*=L,Math.abs(this.scroll)<1e-4&&(this.scroll=0)}}function Ja(i){const s=X.create();for(const o of i)X.add(s,o,s);return X.scale(s,1/Math.max(i.length,1),s)}function Qa(i,s){const o=Ct.create();Ct.inverse(i,o);const p=X.create();return p[0]=o[0]*s[0]+o[4]*s[1]+o[8]*s[2],p[1]=o[1]*s[0]+o[5]*s[1]+o[9]*s[2],p[2]=o[2]*s[0]+o[6]*s[1]+o[10]*s[2],p}function nd(i){const s=i.slice(),o=[1,0,0,0,1,0,0,0,1],p=(k,R)=>s[k*3+R],c=(k,R,G)=>{s[k*3+R]=G},m=(k,R)=>o[k*3+R],E=(k,R,G)=>{o[k*3+R]=G};for(let k=0;k<30;k++){let R=0,G=1,z=Math.abs(p(0,1));if(Math.abs(p(0,2))>z&&(R=0,G=2,z=Math.abs(p(0,2))),Math.abs(p(1,2))>z&&(R=1,G=2,z=Math.abs(p(1,2))),z<1e-12)break;const V=p(R,R),q=p(G,G),Y=p(R,G);let L;Math.abs(V-q)<1e-30?L=Math.PI/4*Math.sign(Y):L=.5*Math.atan2(2*Y,V-q);const F=Math.cos(L),H=Math.sin(L);for(let I=0;I<3;I++){const Z=p(I,R),N=p(I,G);c(I,R,F*Z+H*N),c(I,G,-H*Z+F*N)}for(let I=0;I<3;I++){const Z=p(R,I),N=p(G,I);c(R,I,F*Z+H*N),c(G,I,-H*Z+F*N)}for(let I=0;I<3;I++){const Z=m(I,R),N=m(I,G);E(I,R,F*Z+H*N),E(I,G,-H*Z+F*N)}}const P=[];for(let k=0;k<3;k++)P.push({val:p(k,k),vec:X.create(m(0,k),m(1,k),m(2,k))});return P.sort((k,R)=>R.val-k.val),{vals:[P[0].val,P[1].val,P[2].val],vecs:[P[0].vec,P[1].vec,P[2].vec]}}function sd(i,s){const o=Ja(i);let p=0,c=0,m=0,E=0,P=0,k=0;for(const Y of i){const L=Y[0]-o[0],F=Y[1]-o[1],H=Y[2]-o[2];p+=L*L,c+=L*F,m+=L*H,E+=F*F,P+=F*H,k+=H*H}const R=[p,c,m,c,E,P,m,P,k],{vecs:G}=nd(R);let z=G[0],V=G[1],q=G[2];return X.dot(q,s)<0&&(X.scale(q,-1,q),X.scale(V,-1,V)),{centroid:o,normal:q,u:z,v:V}}function rd(i){let s=0,o=0,p=0,c=0,m=0,E=0,P=0,k=0,R=0;for(const[F,H]of i){const I=-2*F,Z=-2*H,N=1,ie=-(F*F+H*H);s+=I*I,o+=I*Z,p+=I*N,c+=Z*Z,m+=Z*N,E+=N*N,P+=I*ie,k+=Z*ie,R+=N*ie}const G=Ct.create(s,o,p,o,c,m,p,m,E),z=Qa(G,X.create(P,k,R)),V=z[0],q=z[1],Y=z[2],L=V*V+q*q-Y;return{center:[V,q],radius:Math.sqrt(Math.max(L,1e-12))}}function id(i,s){let o=0,p=0,c=0,m=0,E=0,P=0,k=0,R=0,G=0;for(let V=0;V<i.length;V++){const q=i[V],Y=X.normalize(s[V],X.create()),L=1-Y[0]*Y[0],F=-Y[0]*Y[1],H=-Y[0]*Y[2],I=1-Y[1]*Y[1],Z=-Y[1]*Y[2],N=1-Y[2]*Y[2];o+=L,p+=F,c+=H,m+=I,E+=Z,P+=N,k+=L*q[0]+F*q[1]+H*q[2],R+=F*q[0]+I*q[1]+Z*q[2],G+=H*q[0]+Z*q[1]+N*q[2]}const z=Ct.create(o,p,c,p,m,E,c,E,P);return Qa(z,X.create(k,R,G))}function eo(i,s={}){if(i.length===0)return null;const o=s.tiltDownDeg??8,p=s.radiusScale??1,c=s.alignFirst??!0,m=(s.direction??"ccw")==="ccw"?1:-1,E=i.map(ce=>X.clone(ce.position)),P=i.map(ce=>{const de=ce.rotation;return X.create(de[8],de[9],de[10])}),k=i.map(ce=>{const de=ce.rotation;return X.create(de[4],de[5],de[6])}),R=Ja(k),G=X.normalize(X.scale(R,-1,X.create())),{centroid:z,normal:V,u:q,v:Y}=sd(E,G),L=E.map(ce=>{const de=X.sub(ce,z,X.create());return[X.dot(de,q),X.dot(de,Y)]}),{center:F,radius:H}=rd(L),I=H*p,Z=X.add(z,X.add(X.scale(q,F[0],X.create()),X.scale(Y,F[1],X.create()),X.create()),X.create()),N=id(E,P),ie=I*Math.tan(o*Math.PI/180),fe=X.sub(N,X.scale(V,ie,X.create()),X.create());let ae=0;if(c){const ce=X.sub(E[0],Z,X.create());ae=Math.atan2(X.dot(ce,Y),X.dot(ce,q))/(2*Math.PI)%1,ae<0&&(ae+=1)}return console.log(`[orbit] fit ${i.length} train cams: radius=${I.toFixed(2)}, tilt=${o}°, normal=[${V[0].toFixed(2)}, ${V[1].toFixed(2)}, ${V[2].toFixed(2)}], startPhase=${ae.toFixed(3)}`),{center:Z,radius:I,normal:V,u:q,v:Y,lookAt:fe,startPhase:ae,direction:m}}function to(i,s){const o=(i.startPhase+s*i.direction)*2*Math.PI,p=Math.cos(o),c=Math.sin(o),m=X.add(i.center,X.add(X.scale(i.u,i.radius*p,X.create()),X.scale(i.v,i.radius*c,X.create()),X.create()),X.create()),E=X.normalize(X.sub(i.lookAt,m,X.create())),P=X.cross(E,i.normal,X.create());X.length(P)<1e-6&&X.copy(i.u,P),X.normalize(P,P);const k=X.cross(E,P,X.create());X.normalize(k,k);const R=gt.create();return R[0]=P[0],R[1]=k[0],R[2]=E[0],R[3]=0,R[4]=P[1],R[5]=k[1],R[6]=E[1],R[7]=0,R[8]=P[2],R[9]=k[2],R[10]=E[2],R[11]=0,R[12]=0,R[13]=0,R[14]=0,R[15]=1,{position:m,rotation:R,img_name:`orbit_${(s*1e3).toFixed(0)}`,id:0}}function ad(i,s={}){const o=eo(i,s);if(!o)return[];const p=s.numViews??120;return Array.from({length:p},(c,m)=>({...to(o,m/p),img_name:`circle_${m.toString().padStart(4,"0")}`,id:m}))}const no="halloumi.renderer";function od(){const i=new URLSearchParams(window.location.search).get("renderer"),s=i==="webgl"||i==="webgpu"?i:null;let o=null;try{const p=localStorage.getItem(no);(p==="webgl"||p==="webgpu")&&(o=p)}catch{}return{forced:s,stored:o}}function Yr(i){try{localStorage.setItem(no,i)}catch{}const s=new URLSearchParams(window.location.search);s.set("renderer",i),window.location.search=s.toString()}function Ca(i){return i==="bilinear"||i==="bicubic"||i==="hermite"||i==="texture"||i==="bc5"||i==="p"||i==="spline"?i:"off"}function an(i){const s=(i&32768)>>15,o=(i&31744)>>10,p=i&1023;return o===0?(s?-1:1)*Math.pow(2,-14)*(p/1024):o===31?p?NaN:s?-1/0:1/0:(s?-1:1)*Math.pow(2,o-15)*(1+p/1024)}function Zr(i,s,o,p,c,m,E,P,k,R=.5){const G=k?k.length:E.length/8,z=[],V=[];for(let L=0;L<G;L++){const H=(k?k[L]:L)*8,I=E[H]-i,Z=E[H+1]-s,N=E[H+2]-o,ie=I*p+Z*c+N*m;if(ie<=0||!(P[H+7]>>>16&1))continue;const fe=P[H+4],ae=an(fe&65535),ce=an(fe>>>16&65535),de=3*Math.max(ae,ce),xe=I-ie*p,Ae=Z-ie*c,Ue=N-ie*m;if(xe*xe+Ae*Ae+Ue*Ue>de*de)continue;const pe=an(P[H+3]&65535);if(pe<1/255)continue;const J=P[H+5],Te=P[H+6];let ge=an(J&65535),me=an(J>>>16&65535),he=an(Te&65535),oe=an(Te>>>16&65535);const ue=Math.hypot(ge,me,he,oe)||1;ge/=ue,me/=ue,he/=ue,oe/=ue;const ze=1-2*(he*he+oe*oe),Ce=2*(me*he+ge*oe),De=2*(me*oe-ge*he),Pe=2*(me*he-ge*oe),ee=1-2*(me*me+oe*oe),le=2*(he*oe+ge*me),M=2*(me*oe+ge*he),W=2*(he*oe-ge*me),S=1-2*(me*me+he*he),l=p*M+c*W+m*S;if(Math.abs(l)<1e-6)continue;const g=(I*M+Z*W+N*S)/l;if(!(g>0))continue;const _=g*p-I,x=g*c-Z,C=g*m-N,A=(_*ze+x*Ce+C*De)/(ae||1e-6),w=(_*Pe+x*ee+C*le)/(ce||1e-6),a=A*A+w*w;if(a>9)continue;const v=Math.min(.99,pe*Math.exp(-.5*a));v<1/255||(z.push(g),V.push(v))}if(z.length===0)return null;const q=z.map((L,F)=>F).sort((L,F)=>z[L]-z[F]);let Y=1;for(const L of q)if(Y*=1-V[L],Y<R)return z[L];return null}function Qs(i,s,o){const p=(i-o.viewport[0]*.5)/o.focal[0],c=-((s-o.viewport[1]*.5)/o.focal[1]),m=o.rotation;let E=p*m[0]+c*m[1]+m[2],P=p*m[4]+c*m[5]+m[6],k=p*m[8]+c*m[9]+m[10];const R=Math.hypot(E,P,k)||1;return[E/R,P/R,k/R]}function Xr(i,s,o,p,c,m){const[E,P,k]=Qs(i,s,p),R=p.position[0],G=p.position[1],z=p.position[2],V=new Uint32Array(c.buffer,c.byteOffset,c.length);let q=Zr(R,G,z,E,P,k,c,V,null,.5);return q===null&&(q=Zr(R,G,z,E,P,k,c,V,null,.8)),q===null?null:[R+q*E,G+q*P,z+q*k]}function so(i,s){const o=i.viewport[0],p=i.viewport[1],c=new Uint32Array(s.buffer,s.byteOffset,s.length),m=i.position[0],E=i.position[1],P=i.position[2],[k,R,G]=Qs(o*.5,p*.5,i),z=.06*Math.max(o,p),V=(z+2)/i.focal[0],q=s.length/8,Y=[];for(let I=0;I<q;I++){const Z=I*8,N=s[Z]-m,ie=s[Z+1]-E,fe=s[Z+2]-P,ae=N*k+ie*R+fe*G;if(ae<=0)continue;const ce=c[Z+4],de=3*Math.max(an(ce&65535),an(ce>>>16&65535)),xe=N-ae*k,Ae=ie-ae*R,Ue=fe-ae*G,pe=ae*V+de;xe*xe+Ae*Ae+Ue*Ue<=pe*pe&&Y.push(I)}if(Y.length===0)return null;const L=Int32Array.from(Y),F=[],H=5;for(let I=0;I<H;I++)for(let Z=0;Z<H;Z++){const N=o*.5+(Z-(H-1)/2)/((H-1)/2)*z,ie=p*.5+(I-(H-1)/2)/((H-1)/2)*z,[fe,ae,ce]=Qs(N,ie,i),de=Zr(m,E,P,fe,ae,ce,s,c,L,.5);de!==null&&F.push(de*(fe*k+ae*R+ce*G))}return F.length<3?null:(F.sort((I,Z)=>I-Z),F[F.length>>1])}function ld(i){return new Promise(s=>{const o=document.createElement("input");o.type="file",o.accept=i,o.style.display="none",o.onchange=()=>{var p;return s(((p=o.files)==null?void 0:p[0])??null)},document.body.appendChild(o),o.click(),setTimeout(()=>document.body.removeChild(o),1e3)})}function cd(i,s,o){const p=document.getElementById("ui-panel-container"),c=document.getElementById("load-button"),m=document.getElementById("quick-links");c&&(c.onclick=async()=>{const R=await ld(".ply,.bitymi");if(R)if(p&&(p.style.display="none"),R.name.toLowerCase().endsWith(".bitymi")){const G=await R.arrayBuffer(),{pcBuffer:z}=ei(G),V=new File([z],R.name.replace(/\.bitymi$/i,".ply"),{type:"application/octet-stream"}),q=await Ks(V,i);s(q)}else{const G=await Ks(R,i);s(G)}}),m&&(m.innerHTML="");const E=new URLSearchParams(window.location.search),P=E.get("bundle")??E.get("model_url"),k=E.get("camera_url");P&&(p&&(p.style.display="none"),o(P,k))}async function ud(i,s,o){const{bundle:p}=await os(i,(E,P)=>o(`downloading B ... ${(E/1048576).toFixed(1)}${P?` / ${(P/1048576).toFixed(1)}`:""} MB`));if(!p)throw new Error("bundle_b must be a .bitymi bundle");o("parsing B ...");const c=await Ks(new File([p.pcBuffer],"bundle_b.ply",{type:"application/octet-stream"}),s);let m=null;if(p.atlasBuffer){o("uploading B atlas ...");try{m=$r(s,On(p.atlasBuffer),!0)}catch(E){console.warn("[A/B] B atlas failed:",E)}}return{pc:c,atlas:m}}function Ir(i){const s=new Uint32Array(i.surfel_data.buffer,i.surfel_data.byteOffset,i.num_points*8);for(let o=0;o<i.num_points;o++){const p=s[o*8+7];if(!(p>>>16&1)||(p>>>17&1)===1)return!0}return!1}async function dd(i,s,o,p){const c=new Js(i,o),m=new Xa(c);let E=!1;i.addEventListener("pointerdown",()=>{E=!0}),window.addEventListener("pointerup",()=>{E=!1});const P=typeof window<"u"&&window.parent!==window,k={pos:new Float32Array(3),rot:new Float32Array(16)};if(P){window.addEventListener("message",ee=>{const le=ee.data;if(!(!le||le.type!=="halloumi_sync_pose")&&!(!Array.isArray(le.position)||le.position.length!==3)&&!(!Array.isArray(le.rotation)||le.rotation.length!==16)){for(let M=0;M<3;M++)c.position[M]=le.position[M];for(let M=0;M<16;M++)c.rotation[M]=le.rotation[M];c.update_buffer(),m.resetToCamera();for(let M=0;M<3;M++)k.pos[M]=c.position[M];for(let M=0;M<16;M++)k.rot[M]=c.rotation[M]}});try{window.parent.postMessage({type:"halloumi_sync_ready"},"*")}catch{}}const R=()=>{if(!P)return;const ee=c.position,le=c.rotation;let M=!1;for(let W=0;W<3;W++)if(Math.abs(ee[W]-k.pos[W])>1e-6){M=!0;break}if(!M){for(let W=0;W<16;W++)if(Math.abs(le[W]-k.rot[W])>1e-6){M=!0;break}}if(M){for(let W=0;W<3;W++)k.pos[W]=ee[W];for(let W=0;W<16;W++)k.rot[W]=le[W];try{window.parent.postMessage({type:"halloumi_camera_state",position:[ee[0],ee[1],ee[2]],rotation:Array.from(le)},"*")}catch{}}},G="rgba8unorm";s.configure({device:o,format:G,alphaMode:"opaque",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING});let z=null,V=null,q=null,Y=[0,0,0,0];const L=()=>{c.on_update_canvas(),z!==null&&wn(i.width,i.height,o,z.render_settings_buffer),V!==null&&V()};new ResizeObserver(()=>{const ee=Math.max(.25,J.render_scale),le=Math.max(1,Math.ceil(ee*i.clientWidth)),M=Math.max(1,Math.ceil(ee*i.clientHeight));i.width===le&&i.height===M||(i.width=le,i.height=M,L())}).observe(i);let H=0,I=0;const Z=()=>{(i.width!==H||i.height!==I)&&(H=i.width,I=i.height,L())},N=new URLSearchParams(window.location.search);let fe=N.get("animation")==="1";m.enabled=!fe;const ae=N.get("camera_url"),ce=N.get("bfc"),de=ce==="1"||ce==="true",xe=N.get("bfc_cos"),Ae=xe!==null?Number(xe):NaN,Ue=Number.isFinite(Ae)?Ae:2,pe=Math.max(1,window.devicePixelRatio||1),J={msaa:!1,bsp_order:new URLSearchParams(window.location.search).get("bsp_order")!=="0",gaussian_scaling:1,sh_bias:.5,animate:fe,animateMode:"presets",bg:{r:0,g:0,b:0,a:0},atlas_enabled:!1,mips:(new URLSearchParams(window.location.search).get("mip")??"1")!=="0",bfc:de,bfc_cos:Ue,legacy_renderer:!1,surfel_math:"conic",hyp_legacy:!1,mip2d:!1,mip2d_k:.3,fetch_by_id:!0,two_pass:!1,opaque_thresh:.5,overdraw:"off",overdraw_max:48,render_scale:1,upscale:["1","true"].includes(new URLSearchParams(location.search).get("upon")??"")?Ca(new URLSearchParams(location.search).get("up")):"off",upscale_factor:(ee=>ee>0&&ee<1?Math.max(1.05,Math.min(8,1/ee)):2)(parseFloat(new URLSearchParams(location.search).get("rs")??"1")),upscale_auto:new URLSearchParams(location.search).get("rs")==="auto",adapt_heat:["1","true"].includes(new URLSearchParams(location.search).get("adapt_heat")??""),adapt_tau:(ee=>ee>0?ee:1)(parseFloat(new URLSearchParams(location.search).get("adapt_tpp")??"1")),slope_mip:["1","true"].includes(new URLSearchParams(location.search).get("slope_mip")??"")},Te=new ja.Pane({title:"Config",expanded:!0}),ge={stats:"— loading —"};Te.addMonitor(ge,"stats",{label:"Stats",interval:200,multiline:!0,lineCount:2});let me=null;const he=Te.addInput(J,"atlas_enabled",{label:"Texture"}).on("change",ee=>me==null?void 0:me(ee.value));let oe=null;const ue=Te.addFolder({title:"⚙ Advanced options",expanded:!1}),ze={on:J.upscale!=="off"},Ce=ue.addInput(ze,"on",{label:"Upscaling (2×)"}).on("change",ee=>oe==null?void 0:oe(ee.value));ue.addInput(J,"animate",{label:"Animate"}).on("change",ee=>{const le=fe;fe=ee.value,m.enabled=!ee.value,!le&&fe&&De.value&&De.value.onAnimateStart(),le&&!fe&&De.value&&De.value.onAnimateStop()}),ue.addInput(J,"animateMode",{label:"Anim path",options:{"Training views":"presets","Circle orbit":"circle"}});const De={value:null};cd(o,ee=>Pe(ee,[],null),async(ee,le)=>{let M=le??ae,W,S=null;const l=ee.toLowerCase();if(l.endsWith(".bitymi")||l.includes(".bitymi?")){ls("downloading bundle ...");try{const{bundle:A}=await os(ee,(a,v,h,d)=>{if(d==="cache"){Tt(`loading cached bundle ...
${(a/1048576).toFixed(1)}${v?` / ${(v/1048576).toFixed(1)}`:""} MB on this device`);return}const u=a/(1024*1024),b=v?v/(1024*1024):void 0,T=h/(1024*1024),y=v?Math.min(99,Math.floor(a/v*100)):void 0,O=b?`total ${b.toFixed(1)} MB`:"total -- MB",$=b&&y!==void 0?`${u.toFixed(1)} MB downloaded (${y}%)`:`${u.toFixed(1)} MB downloaded`,j=`${T.toFixed(2)} MB/s`;Tt(`downloading bundle ...
${O}, ${$}
${j}`)});if(!A)throw new Error("Expected a .bitymi bundle");Tt("parsing PLY ...");const w=new File([A.pcBuffer],"bundle.ply",{type:"application/octet-stream"});if(W=await Ks(w,o),!M&&A.camerasBuffer&&(M=URL.createObjectURL(new Blob([A.camerasBuffer],{type:"application/json"}))),A.atlasBuffer){const a=A.atlasBuffer.byteLength/1048576;Tt(`uploading atlas ...
${a.toFixed(1)} MB BC7`);try{const v=On(A.atlasBuffer);S=$r(o,v,!0)}catch(v){console.warn("[atlas] failed to parse/upload atlas:",v)}}}catch(A){throw Yt(),A}}else W=await Qc(ee,o);let g=null,_="";const x=N.get("atlas2");if(x)try{const{bundle:A}=await os(x,(w,a)=>{Tt(`downloading second atlas ...
${(w/1048576).toFixed(1)}${a?` / ${(a/1048576).toFixed(1)}`:""} MB`)});if(!(A!=null&&A.atlasBuffer))throw new Error("second bundle has no atlas chunk");Tt("uploading second atlas ..."),g=$r(o,On(A.atlasBuffer),!0),g||(_="second atlas: format unsupported on this device")}catch(A){console.warn("[atlas2] failed:",A),_=`second atlas failed: ${A}`}const C=M?await Hr(M):[];C.length>0&&c.set_preset(C[0]),Pe(W,C,S,g,_)});function Pe(ee,le=[],M=null,W=null,S=""){const l=[(ee.bbox.min[0]+ee.bbox.max[0])/2,(ee.bbox.min[1]+ee.bbox.max[1])/2,(ee.bbox.min[2]+ee.bbox.max[2])/2];m.setBbox(ee.bbox.min,ee.bbox.max),.5*Math.sqrt((ee.bbox.max[0]-ee.bbox.min[0])**2+(ee.bbox.max[1]-ee.bbox.min[1])**2+(ee.bbox.max[2]-ee.bbox.min[2])**2);function g(D,Q){const re=Xr(D,Q,i,c,ee.surfel_data);re&&(m.setOrbitPivot(re),console.log(`[pick] orbit pivot → (${re[0].toFixed(3)}, ${re[1].toFixed(3)}, ${re[2].toFixed(3)})`))}function _(){const D=so(c,ee.surfel_data);if(D!==null&&D>.001){m.setOrbitDepth(D);return}const Q=c.rotation,re=Q[2],ve=Q[6],Se=Q[10],Ee=(ee.centroid[0]-c.position[0])*re+(ee.centroid[1]-c.position[1])*ve+(ee.centroid[2]-c.position[2])*Se;Ee>.001&&m.setOrbitDepth(Ee)}if(le.length===0){const D=ee.bbox.max[0]-ee.bbox.min[0],Q=ee.bbox.max[1]-ee.bbox.min[1],re=ee.bbox.max[2]-ee.bbox.min[2],Se=.5*Math.sqrt(D*D+Q*Q+re*re)*.5;X.set(l[0]-Se,l[1]-Se,l[2]-Se,c.position);const Ee=X.create(Se,Se,Se);X.normalize(Ee,Ee);const be=X.create(0,1,0),ye=X.create();X.cross(be,Ee,ye),X.normalize(ye,ye);const je=X.create();X.cross(Ee,ye,je);const Ve=Ct.create(ye[0],je[0],Ee[0],ye[1],je[1],Ee[1],ye[2],je[2],Ee[2]);gt.fromMat3(Ve,c.rotation),c.update_buffer()}m.setCenter(X.create(ee.centroid[0],ee.centroid[1],ee.centroid[2]));const x=/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&/Mac/i.test(navigator.platform),C="halloumi.fetch_by_id";let A=null;try{const D=localStorage.getItem(C);(D==="0"||D==="1")&&(A=D==="1")}catch{}const w=N.get("byid"),a={fetchById:w!==null?w==="1":A!==null?A:!x,octBound:N.get("oct")==="1",acc16:N.get("acc16")==="1",staticSortKeys:null},v=N.get("bsp");let h=null;v&&(a.staticSortKeys=new Float32Array(ee.num_points),h=Ou(v).then(D=>{if(D.nSurfels!==ee.num_points)throw new Error(`BSP has ${D.nSurfels} surfels, scene has ${ee.num_points}`);return console.log(`[bsp] loaded ${v}: ${D.nNodes} nodes over ${D.nSurfels} surfels`),D}));let d=new Xs(ee,o,G,c.uniform_buffer,p,M,a);const u=N.get("surfel_math");J.surfel_math=u==="raysplat"||u==="centred"?u:N.get("raysplat")==="1"?"raysplat":"conic",J.hyp_legacy=N.get("hyp_legacy")==="1",J.mip2d=N.get("mip2d")==="1";{const D=parseFloat(N.get("mip2d_k")??"");Number.isFinite(D)&&D>0&&(J.mip2d_k=D)}Pa(J.mip2d,J.mip2d_k,o,d.render_settings_buffer),rs({hypLegacy:J.hyp_legacy,raysplat:J.surfel_math==="raysplat",centred:J.surfel_math==="centred"},o,d.render_settings_buffer),J.legacy_renderer=N.get("legacy")==="1",J.legacy_renderer&&d.setLegacyRenderer(!0),J.two_pass=N.get("twopass")==="1";{const D=parseFloat(N.get("opaque_t")??"");Number.isFinite(D)&&(J.opaque_thresh=Math.min(.99,Math.max(.01,D)))}d.setOpaqueThresh(J.opaque_thresh),J.two_pass&&d.setTwoPass(!0);{const D=N.get("overdraw");(D==="shaded"||D==="raster"||D==="1")&&(J.overdraw=D==="raster"?"raster":"shaded");const Q=parseInt(N.get("overdraw_max")??"",10);Number.isFinite(Q)&&Q>0&&(J.overdraw_max=Q)}d.setOverdrawMax(J.overdraw_max),J.overdraw!=="off"&&d.setOverdrawMode(J.overdraw==="raster"?2:1),J.fetch_by_id=a.fetchById,console.log(`[render_2dgs] fetch_by_id=${a.fetchById} (source: ${w!==null?"?byid":A!==null?"remembered":`handheld=${x}`})`),z=d,wn(i.width,i.height,o,d.render_settings_buffer),J.atlas_enabled=M!==null;{const D=ee.surfel_data,Q=D.length/8;let re=0,ve=0,Se=0;for(let be=0;be<Q;be++)re+=D[be*8],ve+=D[be*8+1],Se+=D[be*8+2];const Ee=Q>0?[re/Q,ve/Q,Se/Q]:[0,0,0];d.setBfcParams(J.bfc_cos,Ee),rs({bfc:J.bfc},o,d.render_settings_buffer),console.log(`[bfc] flag=${J.bfc} cos=${J.bfc_cos} centroid=(${Ee[0].toFixed(3)}, ${Ee[1].toFixed(3)}, ${Ee[2].toFixed(3)})`)}let b=!1;const T=(()=>{if(M!==null)return`${M.meta.format===2?"BC7":M.meta.format===3?"ASTC 4×4":M.meta.format===7?"BC7 codebook gather (typeD)":`format=${M.meta.format}`} ${M.meta.width}×${M.meta.height}, ${M.meta.n_layers} layers`;const D=o.features.has("texture-compression-bc"),Q=o.features.has("texture-compression-astc");return`no atlas in bundle (GPU supports: ${(D?["BC7"]:[]).concat(Q?["ASTC"]:[]).join("+")||"none"})`})();console.log("[atlas]",T),ya(ee.sh_bias,o,d.render_settings_buffer),xa(J.gaussian_scaling,o,d.render_settings_buffer),J.sh_bias=ee.sh_bias;let y=ee.num_points.toLocaleString();ge.stats=`${y} surfels · -- fps`;const O=.4,$=3,j=.3;let te=null,se=0,ne=0;const ke=ht.create(),Me=Ct.create();let we=le.length>0?0:-1;const Be={view:le.length>0?`${we+1} / ${le.length}: ${le[we].img_name??we}`:"— no presets —"},Ge=document.createElement("span");function Fe(D){const Q=Ct.create(D[0],D[1],D[2],D[4],D[5],D[6],D[8],D[9],D[10]);return ht.fromMat(Q)}function Xe(D,Q){te={fromPos:X.clone(c.position),toPos:X.clone(D.position),fromQuat:ht.normalize(Fe(c.rotation)),toQuat:ht.normalize(Fe(D.rotation)),target:D,t:0,duration:Math.max(.01,Q)}}const st=(D,Q=!0)=>{if(le.length===0)return;we=(D%le.length+le.length)%le.length;const re=le[we];Q?Xe(re,O):(c.set_preset(re),m.resetToCamera(),_()),Be.view=`${we+1} / ${le.length}: ${le[we].img_name??we}`,Ge.textContent=Be.view};if(le.length>0){const D=ue.addSeparator(),Q=document.createElement("div");Q.style.cssText="display:flex;gap:4px;align-items:center;padding:3px 6px;";const re=(Se,Ee,be)=>{const ye=document.createElement("button");return ye.className="tp-btnv_b",ye.textContent=Se,ye.title=Ee,ye.style.cssText="flex:0 0 34px;height:24px;padding:0;",ye.addEventListener("click",be),ye};Ge.textContent=Be.view,Ge.style.cssText="flex:1 1 auto;font-size:11px;text-align:center;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;opacity:.85;",Q.appendChild(re("◀","previous view (←)",()=>st(we-1))),Q.appendChild(Ge),Q.appendChild(re("▶","next view (→)",()=>st(we+1))),(D.element.parentElement??ue.element.querySelector(".tp-fldv_c")??ue.element).insertBefore(Q,D.element),D.dispose()}const Je=le.length>0?eo(le,{tiltDownDeg:15,alignFirst:!0}):null,Qe=Je?ad(le,{numViews:120,tiltDownDeg:15,alignFirst:!0}):[];let qe=0;const et=12;De.value={onAnimateStart:()=>{qe=0},onAnimateStop:()=>{m.resetToCamera(),_()}};const Ye=D=>{const Q=Math.max(.25,D),re=Math.max(1,Math.ceil(Q*i.clientWidth)),ve=Math.max(1,Math.ceil(Q*i.clientHeight));(i.width!==re||i.height!==ve)&&(i.width=re,i.height=ve,L())},dt=ue.addInput(J,"render_scale",{label:"Render scale",min:.25,max:pe,step:.25}).on("change",D=>Ye(D.value)),Ke=new URLSearchParams(location.search),Oe={};for(const D of["bc5","p"]){const Q=Ke.get(`slope_${D}`),re=Ke.get(`slope_${D}_4x`);Q&&(Oe[`${D}2`]=Q),(re||Q)&&(Oe[`${D}4`]=re??Q)}const at={},Ne={slope:""},ct=(D,Q)=>{const re=`${D}${Q>=2.83?4:2}`;if(Oe[re]===Oe[`${D}2`]&&re!==`${D}2`)return ct(D,2);const ve=at[re],Se=`${D.toUpperCase()} ${Q>=2.83?4:2}x`;return ve&&ve!=="loading"&&ve!=="failed"?ve:(ve===void 0&&Oe[re]&&(at[re]="loading",Ne.slope=`${Se}: downloading…`,(async()=>{try{const Ee=await Ka(Oe[re],(ye,je,Ve,mt)=>{Ne.slope=`${Se}: ${mt==="cache"?"cached ":""}${(ye/1048576).toFixed(0)}${je?` / ${(je/1048576).toFixed(0)}`:""} MB`}),be=Jc(o,On(Ee),M?M.meta:null);if(!be)throw new Error("unsupported on this device or layout mismatch (see console)");at[re]=be,Ne.slope=`${Se}: ready (${be.mb.toFixed(0)} MB on GPU)`}catch(Ee){console.warn(`[slope ${Se}]`,Ee),at[re]="failed",Ne.slope=`${Se}: failed — ${Ee}`}})()),null)};let rt=null;const _t=Ke.get("spline");let ot=null;_t&&Oe.bc52&&fetch(_t).then(D=>D.json()).then(D=>{ot={K:D.K,R:D.R,T:D.T,w:Float32Array.from(D.w)},console.log("[spline] kernel",D.K,"T",D.T,D.tag??"")}).catch(D=>console.warn("[spline] kernel load failed",D));const St={off:"off",bilinear:"bilinear",bicubic:"bicubic",hermite:"hermite","texture-aware (green)":"texture"};Oe.bc52&&(St["texture BC5 (finetuned)"]="bc5"),Oe.p2&&(St["texture P (finetuned)"]="p"),Oe.bc52&&_t&&(St["texture BC5 + learned spline kernel"]="spline");const Bt=ue.addInput(J,"upscale",{label:"Upscale",options:St}).on("change",()=>{J.upscale==="off"&&(L(),Vt()),ze.on=J.upscale!=="off",Ce.refresh()}),ut=Ca(Ke.get("up")),lt=ut!=="off"&&!((ut==="bc5"||ut==="p")&&!Oe[`${ut}2`])&&!(ut==="spline"&&!(Oe.bc52&&_t))?ut:Oe.bc52?"bc5":"hermite";Ce.label=lt==="bc5"||lt==="p"||lt==="spline"?"Upscaling (texture-aware 2×)":`Upscaling (${lt==="hermite"?"Hermite":lt} 2×)`;const Vt=()=>{J.render_scale!==1&&(J.render_scale=1,dt.refresh(),Ye(1))};oe=D=>{D?(J.upscale=lt,J.upscale_factor=2):(J.upscale="off",L()),Vt(),Bt.refresh()},(Oe.bc52||Oe.p2)&&ue.addMonitor(Ne,"slope",{label:"Slope data",interval:300}),ue.addInput(J,"upscale_factor",{label:"Upscale factor (render at 1/f)",min:1.05,max:4,step:.05});const yt=new Xu(ee.surfel_data,ee.num_points,M?M.meta:null,{tau:J.adapt_tau,pct:parseFloat(Ke.get("adapt_pct")??"0.5"),levels:(Ke.get("adapt_levels")??"1,2,4").split(",").map(Number).filter(D=>D>=1),continuous:!["0","false"].includes(Ke.get("adapt_cont")??""),rateUp:parseFloat(Ke.get("adapt_rate")??"0.03"),rateDown:parseFloat(Ke.get("adapt_rate_down")??"0.1"),upHold:parseInt(Ke.get("adapt_hold")??"12"),minPx:parseFloat(Ke.get("adapt_px")??"6")});J.upscale_auto&&J.upscale==="off"&&["1","true"].includes(Ke.get("upon")??"")&&(J.upscale=lt);const Ut={adapt:yt.texelMode?"texel mode":"no atlas rects: surfel-width mode"};ue.addInput(J,"upscale_auto",{label:"Adaptive factor"}).on("change",()=>yt.reset()),ue.addInput(yt,"continuous",{label:"Adaptive: continuous factor"}).on("change",()=>yt.reset()),ue.addMonitor(Ut,"adapt",{label:"Adaptive",interval:250}),ue.addInput(J,"slope_mip",{label:"Slope mip-matched"}).on("change",()=>Ea(J.slope_mip,o,d.render_settings_buffer)),J.slope_mip&&Ea(!0,o,d.render_settings_buffer);const Nt=()=>Bu(J.adapt_heat?yt.tau:0,o,d.render_settings_buffer);ue.addInput(J,"adapt_heat",{label:"Adaptive heatmap (red 1x · yellow 2x · green 4x)"}).on("change",Nt),ue.addInput(J,"adapt_tau",{label:"Adaptive bias (texels/px)",min:.25,max:4,step:.05}).on("change",D=>{yt.tau=D.value,yt.reset(),Nt()}),J.adapt_heat&&Nt(),ue.addInput(J,"bfc",{label:J.bfc_cos<1.5?`Backface cull (cos ${J.bfc_cos})`:"Backface cull"}).on("change",()=>{rs({bfc:J.bfc},o,d.render_settings_buffer)});const Lt={res:""},qt=()=>{const D=i.width*i.height/1e6;Lt.res=`${i.width}×${i.height}  (${D.toFixed(2)} MP)
CSS ${i.clientWidth}×${i.clientHeight} · DPR ${pe.toFixed(2)} · native ${Math.round(i.clientWidth*pe)}×${Math.round(i.clientHeight*pe)}`};qt(),V=qt,ue.addMonitor(Lt,"res",{label:"Resolution",interval:250,multiline:!0,lineCount:2}),ue.addInput(J,"gaussian_scaling",{label:"Surfel scale",min:0,max:1}).on("change",D=>xa(D.value,o,d.render_settings_buffer)),ue.addInput(J,"sh_bias",{label:"SH bias",min:0,max:2,step:.01}).on("change",D=>ya(D.value,o,d.render_settings_buffer)),ue.addInput(J,"bg",{label:"Background",color:{type:"float",alpha:!0}}).on("change",D=>{d.bgColor=[D.value.r,D.value.g,D.value.b,D.value.a]});const zt=D=>D===null?"":D.meta.format===3||D.meta.format===8||D.meta.format===10?" (ASTC)":" (BC7)";let tt=zt(M);const Et=document.createElement("button");Et.style.cssText="position:fixed;top:8px;right:276px;z-index:1000;height:28px;padding:0 10px;border-radius:6px;border:1px solid #444;background:#1c1c1ccc;color:#eee;font:600 12px/1 system-ui,sans-serif;cursor:pointer;backdrop-filter:blur(4px);";const Zt=()=>{Et.textContent=`Texture${tt}: ${J.atlas_enabled?"ON":"OFF"}`,Et.style.borderColor=J.atlas_enabled?"#f0b060":"#444",Et.style.color=J.atlas_enabled?"#f0b060":"#bbb"},Xt=()=>{J.atlas_enabled=!J.atlas_enabled,d.setAtlasEnabled(J.atlas_enabled),he.refresh(),Zt()};he.label=`Texture${tt}`,me=D=>{d.setAtlasEnabled(D),Zt()},he.refresh(),Et.title="toggle the baked texture (T)",Et.addEventListener("click",Xt),M&&document.body.appendChild(Et),Zt();const xn=N.get("bundle_b");let Dt=()=>{};if({}.VITE_MIP2D_UI==="1"&&(Ir(ee)||xn)){const D=document.createElement("button");D.style.cssText=Et.style.cssText.replace("top:8px","top:42px"),D.title="Mip-Splatting 2D Mip filter on the 3D kernels (normalises the screen-space dilation; helps when zoomed out)";let Q=null;const re=()=>{D.textContent=`Mip 2D filter: ${J.mip2d?"ON":"OFF"}`,D.style.borderColor=J.mip2d?"#f0b060":"#444",D.style.color=J.mip2d?"#f0b060":"#bbb";try{const Se=new URL(window.location.href);J.mip2d?Se.searchParams.set("mip2d","1"):Se.searchParams.delete("mip2d"),history.replaceState(history.state,"",Se.toString())}catch{}},ve=()=>{Pa(J.mip2d,J.mip2d_k,o,d.render_settings_buffer),Q==null||Q.refresh(),re()};D.addEventListener("click",()=>{J.mip2d=!J.mip2d,ve()}),Q=ue.addInput(J,"mip2d",{label:"Mip 2D filter"}).on("change",()=>ve()),document.body.appendChild(D),re(),Dt=()=>{const Se=Ir(ee);D.style.display=Se?"":"none",Q&&(Q.hidden=!Se)},Dt(),window.__halloumiMip2D={get on(){return J.mip2d},toggle:()=>D.click()}}let Wt=()=>{};if(xn){const D=N.get("label_a")??"A",Q=N.get("label_b")??"B",re={a:{pc:ee,atlas:M,renderer:d},b:null};let ve="a",Se=null;const Ee=document.createElement("button");Ee.style.cssText=Et.style.cssText.replace("top:8px","top:76px"),Ee.title=`switch between the two bakes of this scene (B key): ${D} / ${Q}`;const be=(Re="")=>{Ee.textContent=Re||`Scene: ${ve==="a"?D:Q}  ⇄`,Ee.style.borderColor=ve==="b"?"#60b0f0":"#f0b060",Ee.style.color=ve==="b"?"#60b0f0":"#f0b060";try{const it=new URL(window.location.href);ve==="b"?it.searchParams.set("side","b"):it.searchParams.delete("side"),history.replaceState(history.state,"",it.toString())}catch{}},ye=()=>re.b?Promise.resolve(re.b):(Se||(Se=ud(xn,o,Re=>{ve==="a"&&be(Re)}).then(Re=>(re.b={pc:Re.pc,atlas:Re.atlas,renderer:null},be(),re.b))),Se),je=Re=>{const it=Ht.slice(0);Re.renderer=new Xs(Re.pc,o,G,c.uniform_buffer,p,Re.atlas,Re===re.a?a:{...a,staticSortKeys:null}),new Uint8Array(Ht).set(new Uint8Array(it))},Ve=Re=>{const it=re[Re];it.renderer||je(it);const Mt=d,He=it.renderer;He.bgColor=[...Mt.bgColor],He.setAtlasEnabled(J.atlas_enabled&&it.atlas!==null),He.setLegacyRenderer(J.legacy_renderer),He.setOpaqueThresh(J.opaque_thresh),He.setTwoPass(J.two_pass),He.setOverdrawMax(J.overdraw_max),He.setOverdrawMode(J.overdraw==="off"?0:J.overdraw==="raster"?2:1),He.setMsaa(J.msaa),He.setFetchById(J.fetch_by_id);{const Gt=it.pc.surfel_data,bt=Gt.length/8;let hn=0,Kt=0,Hn=0;for(let jt=0;jt<bt;jt++)hn+=Gt[jt*8],Kt+=Gt[jt*8+1],Hn+=Gt[jt*8+2];He.setBfcParams(J.bfc_cos,bt>0?[hn/bt,Kt/bt,Hn/bt]:[0,0,0])}Tu(it.pc.feature_mode,void 0,void 0,!1),ku(it.pc.K,void 0,void 0,!1),wn(i.width,i.height,void 0,void 0,!1),ti(o,He.render_settings_buffer),d=He,z=He,ee=it.pc,M=it.atlas,y=ee.num_points.toLocaleString(),ve=Re,Dt(),be(),console.log(`[A/B] active = ${Re} (${Re==="a"?D:Q}): ${ee.num_points} surfels, feature_mode ${ee.feature_mode}, EWA rows ${Ir(ee)}`)};Wt=()=>{if(ve==="a"){if(re.b){Ve("b");return}ls(`loading ${Q} ...`),ye().then(()=>{Ve("b"),Yt()}).catch(Re=>{Yt(),console.error("[A/B] B failed:",Re),be(`B failed: ${(Re==null?void 0:Re.message)??Re}`)})}else Ve("a")},Ee.addEventListener("click",()=>Wt()),document.body.appendChild(Ee),be(),N.get("side")==="b"?Wt():x||setTimeout(()=>{ye().then(Re=>{Re.renderer||je(Re)}).catch(Re=>console.warn("[A/B] preload failed:",Re))},1500),window.__halloumiAB={get side(){return ve},toggle:()=>Wt(),get bReady(){var Re;return!!((Re=re.b)!=null&&Re.renderer)}}}if(M&&(W||S))if(W){const D={};D[`A${zt(M)} · bundle`]="A",D[`B${zt(W)} · atlas2`]="B";const Q={atlas:"A"};ue.addInput(Q,"atlas",{label:"Atlas source",options:D}).on("change",re=>{const ve=re.value==="B"?W:M;d.setAtlas(ve),tt=zt(ve),he.label=`Texture${tt}`,Zt(),console.log(`[atlas2] now sampling ${re.value}${tt}`)})}else{const D={note:S};ue.addMonitor(D,"note",{label:"Atlas B",multiline:!0,lineCount:2})}const Vn=M!==null&&(M.meta.probe_mode|0)>0;if(d.hasMips&&Vn)d.setMipMode(J.mips),ue.addInput(J,"mips",{label:"Mips (trilinear)"}).on("change",D=>d.setMipMode(D.value));else if(M!==null&&M.meta.format!==4294967295&&typeof d.setMipMode=="function"){const D=N.get("mipbias"),Q=d.hasMips,re={mode:D==="aniso"||N.get("aniso")==="1"?"aniso":Q&&(D==="0"||D==="1"||D==="2")?D:"off"},ve=Ee=>{Ee==="off"?d.setMipMode(0):Ee==="aniso"?d.setMipMode(2):(d.setMipLodBias(Number(Ee)),d.setMipMode(1)),console.log(`[mips] ${Ee==="off"?"off (level 0 only)":Ee==="aniso"?"anisotropic 16x (textureSampleGrad)":`on, bias ${Ee}`}`)};ve(re.mode);const Se={"off (level 0)":"off","anisotropic 16x":"aniso"};Q&&Object.assign(Se,{"bias 0 (full)":"0","bias 1":"1","bias 2":"2"}),ue.addInput(re,"mode",{label:Q?"Atlas mips":"Atlas filter",options:Se}).on("change",Ee=>ve(Ee.value))}const It=ue.addFolder({title:"🔬 Surfel math (A/B)",expanded:!0});h&&h.then(D=>{const Q=d,re=new Float32Array(D.nSurfels),ve={cpu:"--"};let Se=null;Q.preFrame=()=>{d===Q&&(J.bsp_order?(Se!==!0&&D.invalidate(),D.computeKeys(c.position)&&(Q.writeSortKeys(D.keys),ve.cpu=`${D.lastMs.toFixed(2)} ms / ${D.nNodes} nodes`)):Se!==!1&&Q.writeSortKeys(re),Se=J.bsp_order)},It.addInput(J,"bsp_order",{label:"BSP order (vs depth sort)"}),It.addMonitor(ve,"cpu",{label:"BSP traversal",interval:500})}).catch(D=>console.error("[bsp] disabled:",D)),It.addInput(J,"surfel_math",{label:"Surfel math",options:{"Conic (default)":"conic","Ray-splat":"raysplat",Centred:"centred"}}).on("change",D=>rs({raysplat:D.value==="raysplat",centred:D.value==="centred"},o,d.render_settings_buffer));const yn=globalThis.__gpuAdapterInfo??{},ir={s:`${yn.vendor??"?"} / ${yn.architecture??"?"}
${yn.device||yn.description||"?"}`};It.addMonitor(ir,"s",{label:"GPU",multiline:!0,lineCount:2}),It.addInput(J,"hyp_legacy",{label:"Hyp-rect legacy"}).on("change",D=>rs({hypLegacy:D.value},o,d.render_settings_buffer)),It.addInput(J,"two_pass",{label:"Two-pass (layer)"}).on("change",D=>d.setTwoPass(D.value)),It.addInput(J,"opaque_thresh",{label:"Layer α >",min:.05,max:.99,step:.01}).on("change",D=>d.setOpaqueThresh(D.value)),It.addInput(J,"overdraw",{label:"Overdraw view",options:{Off:"off","Shaded fragments":"shaded","Rasterized fragments":"raster"}}).on("change",D=>d.setOverdrawMode(D.value==="shaded"?1:D.value==="raster"?2:0)),It.addInput(J,"overdraw_max",{label:"Overdraw scale",min:4,max:256,step:1}).on("change",D=>d.setOverdrawMax(D.value));const Jt={s:"—"};It.addMonitor(Jt,"s",{label:"Overdraw",multiline:!0,lineCount:2}),setInterval(()=>{if(d.overdrawModeValue===0){Jt.s="—";return}d.readOverdrawStats().then(D=>{D&&(Jt.s=`mean ${D.mean.toFixed(1)} frag/px · ${D.meanCovered.toFixed(1)} on covered
max ${D.max} · covered ${(D.coveredFrac*100).toFixed(0)} % of pixels`)}).catch(D=>console.warn("[overdraw] readback failed:",D))},500),ue.addInput(J,"legacy_renderer",{label:"Legacy renderer"}).on("change",D=>d.setLegacyRenderer(D.value)),ue.addInput(J,"fetch_by_id",{label:"Fetch-by-id (frag)"}).on("change",D=>{d.setFetchById(D.value);try{localStorage.setItem("halloumi.fetch_by_id",D.value?"1":"0")}catch{}}),ue.addButton({title:"🔁 Switch to WebGL2 renderer"}).on("click",()=>Yr("webgl")),J.msaa=N.get("msaa")==="1",J.msaa&&d.setMsaa(!0),ue.addInput(J,"msaa",{label:"MSAA 4×"}).on("change",D=>d.setMsaa(D.value));const $n={aspect:"canvas"},Pn=ue.addFolder({title:"📸 Screenshot",expanded:!1});Pn.addInput($n,"aspect",{label:"Aspect",options:{Canvas:"canvas","16:9":"16:9","3:2":"3:2","4:3":"4:3","1:1":"1:1","9:16":"9:16","21:9":"21:9"}});const Qt={s:"pick a size to capture"};Pn.addMonitor(Qt,"s",{label:"Status",interval:250,multiline:!0,lineCount:2});const Ss=[["SD",854],["HD",1280],["FHD",1920],["QHD",2560],["4K",3840],["8K",7680]];let ln=null;function Es(D){let Q;if($n.aspect==="canvas")Q=i.width/i.height;else{const[be,ye]=$n.aspect.split(":").map(Number);Q=be/ye}const re=o.limits.maxTextureDimension2D;let ve,Se;if(D==="canvas"&&$n.aspect==="canvas")ve=i.width,Se=i.height;else{const be=D==="canvas"?Math.max(i.width,i.height):D;Q>=1?(ve=be,Se=Math.round(be/Q)):(Se=be,ve=Math.round(be*Q))}const Ee=Math.min(1,re/Math.max(ve,Se));return ve=Math.max(2,Math.round(ve*Ee)&-2),Se=Math.max(2,Math.round(Se*Ee)&-2),[ve,Se]}function ks(D,Q){const re=URL.createObjectURL(D),ve=document.createElement("a");ve.href=re,ve.download=Q,document.body.appendChild(ve),ve.click(),ve.remove(),setTimeout(()=>URL.revokeObjectURL(re),1e4)}async function Sn(D,Q){var be;const re=(D.size/1048576).toFixed(1),ve=window;if(typeof ve.showSaveFilePicker=="function")try{const ye=await ve.showSaveFilePicker({suggestedName:Q,types:[{description:"PNG image",accept:{"image/png":[".png"]}}]}),je=await ye.createWritable();return await je.write(D),await je.close(),`saved ${ye.name??Q} (${re} MB) where you chose`}catch(ye){if((ye==null?void 0:ye.name)==="AbortError")return"save cancelled — use ⬇ Download last"}const Se=new File([D],Q,{type:"image/png"}),Ee=navigator;if(Ee.share&&((be=Ee.canShare)!=null&&be.call(Ee,{files:[Se]})))try{return await Ee.share({files:[Se],title:Q}),`shared ${Q} (${re} MB) via share sheet`}catch(ye){if((ye==null?void 0:ye.name)==="AbortError")return"share cancelled — use ⬇ Download last"}return ks(D,Q),`downloaded ${Q} (${re} MB) to your browser's Downloads folder`}async function Ts(D){if(b)return;const[Q,re]=Es(D);Qt.s=`rendering ${Q}×${re}…`;const ve=i.width,Se=i.height;c.setRenderSize(Q,re),wn(Q,re,o,d.render_settings_buffer);const Ee=o.createTexture({size:[Q,re,1],format:G,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.COPY_SRC}),be=Math.ceil(Q*4/256)*256,ye=o.createBuffer({size:be*re,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),je=o.createCommandEncoder({label:"screenshot"});d.frame(je,Ee.createView(),!1),je.copyTextureToBuffer({texture:Ee},{buffer:ye,bytesPerRow:be,rowsPerImage:re},[Q,re,1]),o.queue.submit([je.finish()]),c.clearRenderSize(),wn(ve,Se,o,d.render_settings_buffer);try{await ye.mapAsync(GPUMapMode.READ);const Ve=new Uint8Array(ye.getMappedRange()),mt=new Uint8ClampedArray(Q*re*4);for(let bt=0;bt<re;bt++)mt.set(Ve.subarray(bt*be,bt*be+Q*4),bt*Q*4);for(let bt=3;bt<mt.length;bt+=4)mt[bt]=255;ye.unmap();const Re=document.createElement("canvas");Re.width=Q,Re.height=re,Re.getContext("2d").putImageData(new ImageData(mt,Q,re),0,0);const it=await new Promise((bt,hn)=>Re.toBlob(Kt=>Kt?bt(Kt):hn(new Error("toBlob failed")),"image/png")),Mt=(new URLSearchParams(window.location.search).get("bundle")??"halloumi").split("/").pop().replace(/\.(bitymi|ply)$/i,""),He=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),Gt=`${Mt}_${Q}x${re}_${He}.png`;ln={blob:it,name:Gt},Qt.s=await Sn(it,Gt)}catch(Ve){console.error("[screenshot]",Ve),Qt.s=`failed: ${Ve}`}finally{ye.destroy(),Ee.destroy()}}{const D=document.createElement("div");D.style.cssText="display:flex;gap:4px;padding:4px 6px;flex-wrap:wrap;";const Q=(ve,Se,Ee)=>{const be=document.createElement("button");be.className="tp-btnv_b",be.textContent=ve,be.title=Se,be.style.cssText="flex:1 1 auto;min-width:44px;height:26px;padding:0 6px;",be.addEventListener("click",Ee),D.appendChild(be)};Q("Canvas","current canvas size",()=>{Ts("canvas")});for(const[ve,Se]of Ss)Q(ve,`${Se} px long edge`,()=>{Ts(Se)});(Pn.element.querySelector(".tp-fldv_c")??Pn.element).appendChild(D)}Pn.addButton({title:"⬇ Download last"}).on("click",()=>{if(!ln){Qt.s="nothing captured yet";return}ks(ln.blob,ln.name),Qt.s=`downloaded ${ln.name} to your browser's Downloads folder`}),ue.addButton({title:"🎯 Reset camera"}).on("click",()=>{if(le.length>0)c.set_preset(le[0]);else{const D=ee.bbox.max[0]-ee.bbox.min[0],Q=ee.bbox.max[1]-ee.bbox.min[1],re=ee.bbox.max[2]-ee.bbox.min[2],Se=.5*Math.sqrt(D*D+Q*Q+re*re)*.5;X.set(l[0]-Se,l[1]-Se,l[2]-Se,c.position);const Ee=X.create(Se,Se,Se);X.normalize(Ee,Ee);const be=X.create();X.cross(X.create(0,1,0),Ee,be),X.normalize(be,be);const ye=X.create();X.cross(Ee,be,ye);const je=Ct.create(be[0],ye[0],Ee[0],be[1],ye[1],Ee[1],be[2],ye[2],Ee[2]);gt.fromMat3(je,c.rotation),c.update_buffer()}m.resetToCamera(),_()});const En={result:"— click Benchmark —"},Nn=ue.addMonitor(En,"result",{label:"Bench",interval:500,multiline:!0,lineCount:4});Nn.hidden=!0;const Cs={bicycle:{w:1237,h:822,fovY:2*Math.atan(3286/(2*4627.3))},flowers:{w:1256,h:828,fovY:2*Math.atan(3312/(2*4285.5))},garden:{w:1297,h:840,fovY:2*Math.atan(3361/(2*3852.4))},stump:{w:1245,h:825,fovY:2*Math.atan(3300/(2*4528.1))},treehill:{w:1267,h:832,fovY:2*Math.atan(3326/(2*4205.6))},bonsai:{w:1559,h:1039,fovY:2*Math.atan(2078/(2*3222.7))},counter:{w:1558,h:1038,fovY:2*Math.atan(2076/(2*3192.7))},kitchen:{w:1558,h:1039,fovY:2*Math.atan(2078/(2*3240.8))},room:{w:1557,h:1038,fovY:2*Math.atan(2075/(2*3174))}};function ar(){const Q=((new URLSearchParams(window.location.search).get("bundle")??"").split("/").pop()??"").toLowerCase();for(const re of Object.keys(Cs))if(Q.startsWith(re))return re;return null}const cn=document.createElement("div");cn.id="bench-overlay",cn.style.cssText=["position:fixed","top:50%","left:50%","transform:translate(-50%,-50%)","background:rgba(0,0,0,0.9)","color:#fff","padding:24px 32px","border-radius:8px","font-family:monospace","font-size:14px","min-width:340px","text-align:left","box-shadow:0 4px 24px rgba(0,0,0,0.6)","display:none","z-index:9999","pointer-events:none"].join(";"),document.body.appendChild(cn);function Bs(D,Q,re){const ve=Math.floor(Q/Math.max(1,re)*100),Se=32,Ee=Math.floor(Q/Math.max(1,re)*Se),be="█".repeat(Ee)+"░".repeat(Se-Ee);cn.innerHTML=`<div style="margin-bottom:10px;font-weight:bold">📊 ${D}</div><div>[${be}] ${ve}%</div><div style="margin-top:6px;font-size:11px;opacity:0.7">${Q} / ${re} frames · offscreen · pipelined · no vsync</div>`,cn.style.display="block"}function Ms(){cn.style.display="none"}async function or(D=10,Q=200){if(b)return;if(le.length===0){En.result="no cameras to benchmark";return}b=!0;const re=fe,ve=J.animate,Se=new Float32Array(c.position),Ee=new Float32Array(c.rotation);fe=!1,J.animate=!1,Te.refresh(),te=null,m.enabled=!1;const be=ar(),ye=be?Cs[be]:null,je=(ye==null?void 0:ye.w)??i.width,Ve=(ye==null?void 0:ye.h)??i.height,mt=(ye==null?void 0:ye.fovY)??c.getFov(),Re=be?`${be} · ${je>=4e3/4+500?"images_4":"images_2"}`:"custom",it=i.width,Mt=i.height,He=c.getFov();i.width=je,i.height=Ve,c.setFov(mt),wn(je,Ve,o,d.render_settings_buffer);const Gt=o.createTexture({size:[je,Ve,1],format:G,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING}),bt=Gt.createView(),hn=()=>{const kt=o.createCommandEncoder();d.frame(kt,bt,!1),o.queue.submit([kt.finish()])},Kt=()=>new Promise(kt=>setTimeout(kt,0)),Hn=20,jt=async(kt,Mn)=>{let Yn=0,en=0;for(Bs(Mn,0,kt),await Kt();en<kt;){const Zn=Math.min(Hn,kt-en),Xn=performance.now();for(let cs=0;cs<Zn;cs++)c.set_preset(le[(en+cs)%le.length]),hn();await o.queue.onSubmittedWorkDone();const ur=performance.now();Yn+=ur-Xn,en+=Zn,Bs(Mn,en,kt),await Kt()}return Yn};try{await jt(D,"Warming up");const Mn=await jt(Q,"Benchmarking")/Q,Yn=1e3/Mn,en=ee.num_points??ee.surfel_data.length/8,Zn=(mt*180/Math.PI).toFixed(1),Xn=`${Yn.toFixed(1)} FPS  (${Mn.toFixed(2)} ms/frame)
${je}×${Ve} · fovY ${Zn}° · ${Re}
${en.toLocaleString()} surfels · ${D}w+${Q}b · pipelined`+(d.hasMips?` · ${d._mipMode?`mips bias ${d.mipLodBias}`:"mips off"}`:"");En.result=Xn,Nn.hidden=!1,console.log("[bench]",Xn.replace(/\n/g,"  |  "))}catch(kt){console.error("[bench] failed:",kt),En.result=`bench failed: ${kt}`,Nn.hidden=!1}finally{Ms(),Gt.destroy(),i.width=it,i.height=Mt,c.setFov(He),wn(it,Mt,o,d.render_settings_buffer),c.position.set(Se),c.rotation.set(Ee),c.update_buffer(),m.enabled=!re,fe=re,J.animate=ve,Te.refresh(),b=!1}}ue.addButton({title:"📊 Benchmark"}).on("click",()=>or()),Wa(ue);const lr=Math.PI/2,xt=new Set,cr=["KeyW","KeyA","KeyS","KeyD","KeyQ","KeyE","KeyZ","KeyX","ShiftLeft","ShiftRight"],kn=D=>{const Q=D.target;return!!Q&&(Q.tagName==="INPUT"||Q.tagName==="TEXTAREA"||Q.isContentEditable)},$t=()=>xt.has("ShiftLeft")||xt.has("ShiftRight");document.addEventListener("keyup",D=>{xt.delete(D.code)}),window.addEventListener("blur",()=>xt.clear()),document.addEventListener("visibilitychange",()=>{document.hidden&&xt.clear()});const un=D=>{if(xt.size===0||J.animate)return;const Q=$t()?3:1;let re=0;xt.has("KeyX")&&(re+=1),xt.has("KeyZ")&&(re-=1),re!==0&&(m.addRoll(re*lr*Q*D),te=null);const ve=c.rotation,Se=[ve[0],ve[4],ve[8]],Ee=[ve[1],ve[5],ve[9]],be=[ve[2],ve[6],ve[10]],ye=m.center,Ve=(m.sceneRadius??Math.max(.05,X.distance(c.position,ye)))*.5*Q*D;let mt=0,Re=0,it=0;if(xt.has("KeyW")&&(it+=1),xt.has("KeyS")&&(it-=1),xt.has("KeyD")&&(mt+=1),xt.has("KeyA")&&(mt-=1),xt.has("KeyE")&&(Re+=1),xt.has("KeyQ")&&(Re-=1),!mt&&!Re&&!it)return;const Mt=[0,0,0];for(let He=0;He<3;He++)Mt[He]=(Se[He]*mt+Ee[He]*Re+be[He]*it)*Ve;for(let He=0;He<3;He++)c.position[He]+=Mt[He],ye[He]+=Mt[He];c.update_buffer(),te=null};document.addEventListener("keydown",D=>{if(kn(D))return;const Q=D.key,re=Q.toLowerCase();if(D.ctrlKey||D.metaKey||D.altKey){xt.clear();return}if(cr.includes(D.code)&&!(D.shiftKey&&D.code==="KeyD")){xt.add(D.code),D.preventDefault();return}if(re==="t"){Xt();return}if(re==="b"){Wt();return}if(Q>="0"&&Q<="9"&&le.length>0){const ve=parseInt(Q);ve<le.length&&st(ve)}else Q==="ArrowLeft"||Q==="PageUp"?(st(we-1),D.preventDefault()):Q==="ArrowRight"||Q==="PageDown"?(st(we+1),D.preventDefault()):D.shiftKey&&re==="d"&&d.debugReadSortedIndices(30).catch(ve=>console.error("[DEBUG] readback failed:",ve))});function dn(D,Q){const re=i.getBoundingClientRect();return[(D-re.left)*c.viewport[0]/re.width,(Q-re.top)*c.viewport[1]/re.height]}i.addEventListener("dblclick",D=>{const[Q,re]=dn(D.clientX,D.clientY);g(Q,re)});let qn=0,Tn=0,Wn=0;i.addEventListener("pointerdown",D=>{if(D.pointerType!=="touch")return;const Q=performance.now(),re=Q-qn,ve=D.clientX-Tn,Se=D.clientY-Wn;if(re>0&&re<300&&ve*ve+Se*Se<40*40){const[Ee,be]=dn(D.clientX,D.clientY);g(Ee,be),qn=0}else qn=Q,Tn=D.clientX,Wn=D.clientY});function As(){return E}let pn=performance.now(),Kn=60,Rs=Promise.resolve(),Cn=0,Ds=0;function Bn(){jn().catch(D=>{Ds++<5&&console.error("[frame] exception (render loop kept alive):",D),requestAnimationFrame(Bn)})}async function jn(){var Ee;const D=performance.now(),Q=Math.min((D-pn)/1e3,.1);if(pn=D,Q>0){const be=((Ee=d.lastStageBreakdownMs)==null?void 0:Ee.total)??0,ye=be>.5?1e3/be:1/Q;Kn=Kn*.9+ye*.1,ge.stats=`${y} surfels · ${Math.round(Kn)} fps
${i.width}×${i.height} px`}if(b){requestAnimationFrame(Bn);return}if(As()&&(te||fe)&&(te=null,m.resetToCamera(),_(),fe&&(fe=!1,J.animate=!1,Te.refresh())),fe&&J.animateMode==="circle"&&Je){qe+=Q/et,qe>=1&&(qe-=1);const be=to(Je,qe);c.set_preset(be),m.update(Q);const ye=o.createCommandEncoder();d.frame(ye,s.getCurrentTexture().createView()),o.queue.submit([ye.finish()]),Cn++,Cn===2&&Yt(),requestAnimationFrame(Bn);return}if(te){te.t+=Q/te.duration;const be=Math.min(1,te.t),ye=be*be*(3-2*be);X.lerp(te.fromPos,te.toPos,ye,c.position),ht.slerp(te.fromQuat,te.toQuat,ye,ke),Ct.fromQuat(ke,Me),gt.fromMat3(Me,c.rotation),c.update_buffer(),te.t>=1&&(c.set_preset(te.target),te=null,fe?le.length>0&&(se=j):(m.resetToCamera(),_()))}else if(fe&&!As()){const be=J.animateMode==="circle"&&Qe.length>0,ye=be?Qe:le;if(ye.length!==0){if(se-=Q,se<=0){const Ve=((be?ne:we)+1)%ye.length;be?ne=Ve:we=Ve;const mt=be?$/8:$;Xe(ye[Ve],mt),be||(Be.view=`${we+1} / ${le.length}: ${le[we].img_name??we}`)}}}un(Q),m.update(Q),R(),Z(),await Rs;const re=o.createCommandEncoder(),ve=s.getCurrentTexture().createView();let Se=J.upscale_factor;if(J.upscale!=="off"&&J.upscale_auto){const be=yt.choose(c,i.width,i.height);Se=be.f,Ut.adapt=`${be.f===1?"native":`1/${be.f.toFixed(2)}`} · ${be.texelMode?"texel/px":"q"} ${be.q.toFixed(2)} · ${be.visible} sampled`}if(J.adapt_heat&&(Se=1),J.upscale!=="off"&&Se>1){const be=Se;let ye=J.upscale;if(ye==="spline"&&!ot&&(ye="bc5"),ye==="bc5"||ye==="p"||ye==="spline"){const Re=ct(ye==="spline"?"bc5":ye,be);Re?Re!==rt&&(d.setSlopeAtlas(Re.view,[Re.scaleU,Re.offU,Re.scaleV,Re.offV]),rt=Re):ye="hermite"}d.slopeSource=Za[ye]??0;const je=d.resolvesIntoTarget;(!q||q.mode!==ye||q.exact!==je)&&(q==null||q.destroy(),q=new Yu(o,G,ye,1/be,je)),q.scale=1/be,ye==="spline"&&q.setSplineKernel(ot);const Ve=q.lowTarget(i.width,i.height);d.viewport=je?null:[Ve.w,Ve.h];const mt=c.getRenderSize();(!mt||mt[0]!==Ve.w||mt[1]!==Ve.h||Y[2]!==i.width||Y[3]!==i.height)&&(c.setRenderSize(Ve.w,Ve.h,i.width,i.height),Y=[Ve.w,Ve.h,i.width,i.height]),wn(Ve.w,Ve.h,o,d.render_settings_buffer),d.slopeTarget=q.slopeTarget,d.frame(re,Ve.view),d.slopeTarget=null,d.viewport=null,q.pass(re,ve,i.width,i.height)}else(Y[0]!==0||c.getRenderSize()!==null)&&(c.clearRenderSize(),Y=[0,0,0,0],L()),d.frame(re,ve);o.queue.submit([re.finish()]),Rs=o.queue.onSubmittedWorkDone(),Cn++,Cn===2&&Yt(),requestAnimationFrame(Bn)}requestAnimationFrame(Bn)}}const pd=i=>`#version 300 es
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
${i?`    if (rho3d >= K_BETA_SQ + 1e-6) discard;
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
}`;function ro(i){return{bc7:!!i.getExtension("EXT_texture_compression_bptc"),astc:!!i.getExtension("WEBGL_compressed_texture_astc")}}function hd(i,s){const o=ro(i),p=s.format===2||s.format===7,c=s.format===3||s.format===8;let m=0;p&&o.bc7?m=36492:c&&o.astc&&(m=37808);const E=oe=>(console.warn("[gl]",oe),{tex:null,status:oe,slice_width:s.slice_width,layer_h:s.layer_h,n_slices:0,rects:s.rects_expanded});if(!m)return E(`atlas is ${p?"BC7":c?"ASTC":`format ${s.format}`}; this GPU has bc7=${o.bc7} astc=${o.astc}`);let P=i.getParameter(i.MAX_TEXTURE_SIZE);try{const oe=parseInt(new URLSearchParams(window.location.search).get("maxtex")??"",10);oe>=256&&(P=Math.min(P,oe-oe%4))}catch{}const k=i.getParameter(i.MAX_ARRAY_TEXTURE_LAYERS),{width:R,n_layers:G,n_cols:z,layer_cuts:V,column_cuts:q,atlas_bytes:Y}=s,L=R/4*16,F=s.rects_expanded,H=F.length/5,I=[];let Z=0,N=0,ie=0,fe=!1;const ae=Array.from({length:z*G},()=>[]);let ce=0,de=0;for(let oe=0;oe<H;oe++){const ue=F[oe*5+4]|0,ze=F[oe*5+2],Ce=F[oe*5+3];ue>=0&&ue<ae.length&&ze>0&&(ae[ue].push(oe),ce=Math.max(ce,ze),de=Math.max(de,Ce))}ce=Math.ceil(ce/4)*4,de=Math.ceil(de/4)*4;const xe=(oe,ue)=>{if(oe<=P)return[0,oe];const ze=P-ue;if(ze<64)throw new Error(`atlas re-shard: tiles up to ${ue} px do not fit MAX_TEXTURE_SIZE ${P}`);const Ce=Math.ceil(oe/ze),De=[0];for(let Pe=1;Pe<Ce;Pe++)De.push(Math.round(oe*Pe/Ce/4)*4);return De.push(oe),De},Ae=(oe,ue,ze,Ce)=>Math.min(oe[ue+1]-oe[ue]+ze,Ce-oe[ue]);try{for(let oe=0;oe<z;oe++)for(let ue=0;ue<G;ue++){const ze=q[oe+1]-q[oe],Ce=V[ue+1]-V[ue],De=xe(ze,ce),Pe=xe(Ce,de);(De.length>2||Pe.length>2)&&(fe=!0);for(let ee=0;ee<De.length-1;ee++)N=Math.max(N,Ae(De,ee,ce,ze));for(let ee=0;ee<Pe.length-1;ee++)ie=Math.max(ie,Ae(Pe,ee,de,Ce));I.push({c:oe,l:ue,xcuts:De,ycuts:Pe,base:Z}),Z+=(De.length-1)*(Pe.length-1)}}catch(oe){return E(String(oe))}if(N=Math.ceil(N/4)*4,ie=Math.ceil(ie/4)*4,Z>k)return E(`atlas needs ${Z} array layers, GPU allows ${k}`);const Ue=N/4*16,pe=Ue*(ie/4);let J;try{J=new Uint8Array(pe*Z)}catch(oe){return E(`atlas staging buffer ${(pe*Z/2**20).toFixed(0)} MB failed: ${oe}`)}let Te=F;fe&&(Te=new Float32Array(F));for(const oe of I){const ue=oe.xcuts.length-1,ze=oe.ycuts.length-1,Ce=q[oe.c+1]-q[oe.c],De=V[oe.l+1]-V[oe.l];for(let Pe=0;Pe<ze;Pe++)for(let ee=0;ee<ue;ee++){const le=oe.base+Pe*ue+ee,M=q[oe.c]+oe.xcuts[ee],W=Ae(oe.xcuts,ee,ce,Ce),S=V[oe.l]+oe.ycuts[Pe],l=Ae(oe.ycuts,Pe,de,De),g=le*pe,_=M/4,x=W/4;for(let C=0;C<l/4;C++){const A=(S/4+C)*L+_*16;J.set(Y.subarray(A,A+x*16),g+C*Ue)}}if(fe)for(const Pe of ae[oe.c*G+oe.l]){const ee=F[Pe*5],le=F[Pe*5+1];let M=0;for(;M<ue-1&&ee>=oe.xcuts[M+1];)M++;let W=0;for(;W<ze-1&&le>=oe.ycuts[W+1];)W++;Te[Pe*5]=ee-oe.xcuts[M],Te[Pe*5+1]=le-oe.ycuts[W],Te[Pe*5+4]=oe.base+W*ue+M}}const ge=i.createTexture();i.activeTexture(i.TEXTURE0),i.bindTexture(i.TEXTURE_2D_ARRAY,ge),i.compressedTexImage3D(i.TEXTURE_2D_ARRAY,0,m,N,ie,Z,0,J),i.texParameteri(i.TEXTURE_2D_ARRAY,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D_ARRAY,i.TEXTURE_MAG_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D_ARRAY,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D_ARRAY,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE);const me=i.getError();if(me!==i.NO_ERROR){i.deleteTexture(ge);const oe=me===i.OUT_OF_MEMORY?"OUT_OF_MEMORY":me===i.INVALID_VALUE?"INVALID_VALUE":`0x${me.toString(16)}`;return E(`atlas upload failed: GL ${oe} (${N}x${ie}x${Z} ${m===36492?"BC7":"ASTC"}, ${(pe*Z/2**20).toFixed(0)} MB, max tex ${P})`)}const he=`${m===36492?"BC7":"ASTC"} atlas ${N}x${ie}x${Z}${fe?` (re-sharded for max tex ${P})`:""}`;return{tex:ge,status:he,slice_width:N,layer_h:ie,n_slices:Z,rects:Te}}const Ba=28,xs=8,fd=i=>`#version 300 es
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

ivec2 tc(int l) { return ivec2(l & ${(1<<i)-1}, l >> ${i}); }
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
        float lg[${xs}];
        float lmax = -3.4e38;
        for (int k = 0; k < ${xs}; k++) {
            if (k >= u_K) break;
            vec4 st = texelFetch(u_sv, tc(base + k), 0);
            vec3 sd = st.xyz * inversesqrt(max(dot(st.xyz, st.xyz), 1e-20)) - vd;
            lg[k] = -exp(st.w) * length(sd);
            lmax = max(lmax, lg[k]);
        }
        float ws = 0.0;
        for (int k = 0; k < ${xs}; k++) {
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
}`,_d=`#version 300 es
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
}`;class Ma{constructor(s,o,p,c={}){B(this,"gl");B(this,"n");B(this,"K");B(this,"twLog2");B(this,"pre");B(this,"draw");B(this,"preU",{});B(this,"drawU",{});B(this,"texSurf");B(this,"texSv");B(this,"texUv");B(this,"idBuf");B(this,"recBuf");B(this,"preVao");B(this,"drawVao");B(this,"tf");B(this,"atlasTex",null);B(this,"atlasStatus","no atlas");B(this,"atlasUpload",null);B(this,"atlasOn",!1);B(this,"sd");B(this,"ok");B(this,"keyF");B(this,"keyU");B(this,"ids");B(this,"ids2");B(this,"keys2");B(this,"hist");B(this,"cnt",new Uint32Array(256));B(this,"bgColor",[0,0,0]);B(this,"scaling",1);B(this,"lastStats",{visible:0,cpuMs:0});B(this,"only",-1);B(this,"dbg",0);if(this.gl=s,o.feature_mode!==0)throw new Error("WebGL2 backend supports SV colour only (feature_mode 0)");if(o.K>xs)throw new Error(`WebGL2 backend supports K <= ${xs} SV sites (bundle has ${o.K})`);this.n=o.num_points,this.K=o.K,this.sd=o.surfel_data;const m=this.n,E=s.getParameter(s.MAX_TEXTURE_SIZE);this.twLog2=E>=4096?12:11;const P=1<<this.twLog2,k=new Uint32Array(o.surfel_data.buffer,o.surfel_data.byteOffset,m*8);for(let L=0;L<m;L++)if(k[L*8+7]>>>17&1)throw new Error("WebGL2 backend does not support --tex3d bundles (3D kernels); use WebGPU");this.ok=new Uint8Array(m);for(let L=0;L<m;L++){const F=md(k[L*8+3]);this.ok[L]=F>1/255&&(k[L*8+7]>>>16&1)===1?1:0}this.keyF=new Float32Array(m),this.keyU=new Uint32Array(this.keyF.buffer),this.ids=new Uint32Array(m),this.ids2=new Uint32Array(m),this.keys2=new Uint32Array(m),this.hist=new Uint32Array(256*4);const R=L=>Math.max(1,Math.ceil(m*L/P)),G=(L,F,H,I,Z)=>{const N=s.createTexture();return s.bindTexture(s.TEXTURE_2D,N),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MAG_FILTER,s.NEAREST),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),s.texImage2D(s.TEXTURE_2D,0,L,P,R(I),0,F,H,Z),N};{const L=R(2),F=new Uint32Array(P*L*4);F.set(k),this.texSurf=G(s.RGBA32UI,s.RGBA_INTEGER,s.UNSIGNED_INT,2,F)}{const L=this.K,F=R(2*L),H=new Float32Array(P*F*4),I=o.sv_params,Z=L*7;for(let N=0;N<m;N++){const ie=N*Z,fe=N*2*L*4;for(let ae=0;ae<L;ae++){H[fe+ae*4]=I[ie+ae*3],H[fe+ae*4+1]=I[ie+ae*3+1],H[fe+ae*4+2]=I[ie+ae*3+2],H[fe+ae*4+3]=I[ie+L*6+ae];const ce=fe+(L+ae)*4;H[ce]=I[ie+L*3+ae*3],H[ce+1]=I[ie+L*3+ae*3+1],H[ce+2]=I[ie+L*3+ae*3+2]}}this.texSv=G(s.RGBA32F,s.RGBA,s.FLOAT,2*L,H)}const z=p?hd(s,p):null;z&&(this.atlasStatus=z.status),this.atlasUpload=z;{const L=R(2),F=new Float32Array(P*L*4);if(p&&z&&z.tex){const H=z.slice_width,I=z.layer_h,Z=p.uv_extent,N=z.rects;for(let ie=0;ie<m;ie++){if(!this.ok[ie])continue;const fe=N[ie*5],ae=N[ie*5+1],ce=N[ie*5+2],de=N[ie*5+3],xe=ie*8;F[xe]=(fe+.5*Math.max(ce,1))/H,F[xe+1]=(ae+.5*Math.max(de,1))/I,F[xe+2]=ce/(2*Z)/H,F[xe+3]=de/(2*Z)/I,F[xe+4]=N[ie*5+4]}}this.texUv=G(s.RGBA32F,s.RGBA,s.FLOAT,2,F)}const V=(L,F)=>{const H=s.createShader(L);if(s.shaderSource(H,F),s.compileShader(H),!s.getShaderParameter(H,s.COMPILE_STATUS))throw new Error("GLSL: "+s.getShaderInfoLog(H));return H},q=L=>{if(s.linkProgram(L),!s.getProgramParameter(L,s.LINK_STATUS))throw new Error("GLSL link: "+s.getProgramInfoLog(L))};this.pre=s.createProgram(),s.attachShader(this.pre,V(s.VERTEX_SHADER,fd(this.twLog2))),s.attachShader(this.pre,V(s.FRAGMENT_SHADER,`#version 300 es
precision mediump float;
out vec4 o;
void main(){ o = vec4(0.0); }`)),s.transformFeedbackVaryings(this.pre,["v_tu_op","v_tv_sh","v_tw_ly","v_col_dc","v_ctr_ext","v_uv","v_dp"],s.INTERLEAVED_ATTRIBS),q(this.pre);for(const L of["u_surf","u_sv","u_uv","u_R","u_t","u_eye","u_vp","u_focal","u_zfar","u_scaling","u_sh_bias","u_K"])this.preU[L]=s.getUniformLocation(this.pre,L);const Y=!(p&&p.kernel_type===0)&&o.kernel_type!==0;this.draw=s.createProgram(),s.attachShader(this.draw,V(s.VERTEX_SHADER,_d)),s.attachShader(this.draw,V(s.FRAGMENT_SHADER,pd(Y))),q(this.draw);for(const L of["u_vp","u_atlas","u_atlas_on","u_tex","u_dims","u_dbg"])this.drawU[L]=s.getUniformLocation(this.draw,L);try{const L=new URLSearchParams(window.location.search);this.only=parseInt(L.get("only")??"-1",10),this.dbg=parseInt(L.get("dbg")??"0",10)|0}catch{}this.idBuf=s.createBuffer(),s.bindBuffer(s.ARRAY_BUFFER,this.idBuf),s.bufferData(s.ARRAY_BUFFER,m*4,s.DYNAMIC_DRAW),this.recBuf=s.createBuffer(),s.bindBuffer(s.ARRAY_BUFFER,this.recBuf),s.bufferData(s.ARRAY_BUFFER,m*Ba*4,s.STREAM_COPY),s.bindBuffer(s.ARRAY_BUFFER,null),this.preVao=s.createVertexArray(),s.bindVertexArray(this.preVao),s.bindBuffer(s.ARRAY_BUFFER,this.idBuf),s.enableVertexAttribArray(0),s.vertexAttribIPointer(0,1,s.UNSIGNED_INT,0,0),s.bindVertexArray(null),this.drawVao=s.createVertexArray(),s.bindVertexArray(this.drawVao),s.bindBuffer(s.ARRAY_BUFFER,this.recBuf);for(let L=0;L<7;L++)s.enableVertexAttribArray(L),s.vertexAttribPointer(L,4,s.FLOAT,!1,Ba*4,L*16),s.vertexAttribDivisor(L,1);s.bindVertexArray(null),s.bindBuffer(s.ARRAY_BUFFER,null),this.tf=s.createTransformFeedback(),s.useProgram(this.pre),s.uniform1i(this.preU.u_surf,1),s.uniform1i(this.preU.u_sv,2),s.uniform1i(this.preU.u_uv,3),s.uniform1i(this.preU.u_K,this.K),s.uniform1f(this.preU.u_sh_bias,c.shBias??o.sh_bias),s.uniform1f(this.preU.u_scaling,this.scaling),s.useProgram(this.draw),s.uniform1i(this.drawU.u_atlas,0),s.uniform1i(this.drawU.u_atlas_on,0),s.uniform4f(this.drawU.u_tex,0,0,p?p.res_bias:0,p?p.uv_extent:4),p&&z&&z.tex&&(this.atlasTex=z.tex,this.atlasOn=!0,s.uniform1i(this.drawU.u_atlas_on,1),s.uniform4f(this.drawU.u_tex,p.atlas_scale,p.atlas_offset,p.res_bias,p.uv_extent),s.uniform2f(this.drawU.u_dims,z.slice_width,z.layer_h)),s.useProgram(null)}get hasAtlas(){return this.atlasTex!==null}get atlasEnabled(){return this.atlasOn}setAtlasEnabled(s){this.atlasTex&&(this.atlasOn=s,this.gl.useProgram(this.draw),this.gl.uniform1i(this.drawU.u_atlas_on,s?1:0))}setGaussianScaling(s){this.scaling=s,this.gl.useProgram(this.pre),this.gl.uniform1f(this.preU.u_scaling,s)}setShBias(s){this.gl.useProgram(this.pre),this.gl.uniform1f(this.preU.u_sh_bias,s)}render(s){const o=this.gl,p=this.n,c=s.rotation,m=s.eye,E=this.sd,P=this.ok,k=s.width,R=s.height,G=performance.now(),z=.5*R/Math.tan(s.fovY*.5),V=-(c[0]*m[0]+c[4]*m[1]+c[8]*m[2]),q=-(c[1]*m[0]+c[5]*m[1]+c[9]*m[2]),Y=-(c[2]*m[0]+c[6]*m[1]+c[10]*m[2]),L=.01,F=s.zfar??100,H=F/(F-L),I=-(F*L)/(F-L),Z=2*z/k,N=2*z/R,ie=c[0],fe=c[4],ae=c[8],ce=c[1],de=c[5],xe=c[9],Ae=c[2],Ue=c[6],pe=c[10],J=this.keyF,Te=this.ids;let ge=0;for(let oe=0;oe<p;oe++){if(P[oe]===0||this.only>=0&&oe!==this.only)continue;const ue=oe*8,ze=E[ue],Ce=E[ue+1],De=E[ue+2],Pe=Ae*ze+Ue*Ce+pe*De+Y;if(!(Pe>0))continue;const ee=H*Pe+I,le=ee/Pe;if(!(le>0&&le<1))continue;const M=1.2*Pe,W=ie*ze+fe*Ce+ae*De+V;if(Math.abs(Z*W)>M)continue;const S=ce*ze+de*Ce+xe*De+q;Math.abs(N*S)>M||(J[ge]=F-ee,Te[ge]=oe,ge++)}const me=this.radixSort(ge),he=performance.now()-G;return this.lastStats={visible:ge,cpuMs:he},ge===0?(o.viewport(0,0,k,R),o.clearColor(this.bgColor[0],this.bgColor[1],this.bgColor[2],1),o.clear(o.COLOR_BUFFER_BIT),0):(o.bindBuffer(o.ARRAY_BUFFER,this.idBuf),o.bufferSubData(o.ARRAY_BUFFER,0,me,0,ge),o.bindBuffer(o.ARRAY_BUFFER,null),o.useProgram(this.pre),o.activeTexture(o.TEXTURE1),o.bindTexture(o.TEXTURE_2D,this.texSurf),o.activeTexture(o.TEXTURE2),o.bindTexture(o.TEXTURE_2D,this.texSv),o.activeTexture(o.TEXTURE3),o.bindTexture(o.TEXTURE_2D,this.texUv),o.uniformMatrix3fv(this.preU.u_R,!1,[ie,ce,Ae,fe,de,Ue,ae,xe,pe]),o.uniform3f(this.preU.u_t,V,q,Y),o.uniform3f(this.preU.u_eye,m[0],m[1],m[2]),o.uniform2f(this.preU.u_vp,k,R),o.uniform1f(this.preU.u_focal,z),o.uniform1f(this.preU.u_zfar,F),o.bindVertexArray(this.preVao),o.bindTransformFeedback(o.TRANSFORM_FEEDBACK,this.tf),o.bindBufferBase(o.TRANSFORM_FEEDBACK_BUFFER,0,this.recBuf),o.enable(o.RASTERIZER_DISCARD),o.beginTransformFeedback(o.POINTS),o.drawArrays(o.POINTS,0,ge),o.endTransformFeedback(),o.disable(o.RASTERIZER_DISCARD),o.bindBufferBase(o.TRANSFORM_FEEDBACK_BUFFER,0,null),o.bindTransformFeedback(o.TRANSFORM_FEEDBACK,null),o.bindVertexArray(null),o.viewport(0,0,k,R),o.clearColor(this.bgColor[0],this.bgColor[1],this.bgColor[2],1),o.clear(o.COLOR_BUFFER_BIT),o.enable(o.BLEND),o.blendFunc(o.ONE,o.ONE_MINUS_SRC_ALPHA),o.disable(o.DEPTH_TEST),o.useProgram(this.draw),o.uniform2f(this.drawU.u_vp,k,R),o.uniform1i(this.drawU.u_dbg,this.dbg),this.atlasTex&&(o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D_ARRAY,this.atlasTex)),o.bindVertexArray(this.drawVao),o.drawArraysInstanced(o.TRIANGLE_STRIP,0,4,ge),o.bindVertexArray(null),ge)}radixSort(s){const o=this.keyU,p=this.hist;p.fill(0);for(let R=0;R<s;R++){const G=o[R];p[G&255]++,p[256+(G>>>8&255)]++,p[512+(G>>>16&255)]++,p[768+(G>>>24)]++}let c=o,m=this.ids,E=this.keys2,P=this.ids2;const k=this.cnt;for(let R=0;R<4;R++){const G=R*8,z=R*256;let V=!1;for(let F=0;F<256;F++)if(p[z+F]===s){V=!0;break}if(V)continue;let q=0;for(let F=0;F<256;F++)k[F]=q,q+=p[z+F];for(let F=0;F<s;F++){const H=c[F],I=H>>>G&255,Z=k[I]++;E[Z]=H,P[Z]=m[F]}const Y=c;c=E,E=Y;const L=m;m=P,P=L}return m}}function md(i){const s=i&65535,o=s&32768?-1:1,p=s>>10&31,c=s&1023;return p===0?o*c*5960464477539063e-23:p===31?c?NaN:o*(1/0):o*(1+c/1024)*Math.pow(2,p-15)}const Gr=i=>i.format===2||i.format===7,Fr=i=>i.format===3||i.format===8;async function Aa(i,s,o){const p=new URLSearchParams(window.location.search),c=new Js(i,null),m=new Xa(c),E=ro(s);vt(`[gl] WebGL2 backend · bc7=${E.bc7} astc=${E.astc} · ${s.getParameter(s.RENDERER)}`);let P=null,k=null,R=[],G=null;const z={animate:p.get("animation")==="1",atlas_enabled:!0,render_scale:1,gaussian_scaling:1,bg:{r:0,g:0,b:0}},V=new ja.Pane({title:"Config (WebGL2)",expanded:!0}),q={stats:"— loading —"};V.addMonitor(q,"stats",{label:"Stats",interval:200,multiline:!0,lineCount:2}),V.addInput(z,"atlas_enabled",{label:"Texture"}).on("change",w=>P==null?void 0:P.setAtlasEnabled(w.value));const Y=V.addFolder({title:"⚙ Advanced options",expanded:!1}),L={s:o.gpuAvailable?"WebGL2 (WebGPU available)":"WebGL2 (no WebGPU here)"};Y.addMonitor(L,"s",{label:"Renderer"}),Y.addButton({title:"🔁 Switch to WebGPU",disabled:!o.gpuAvailable}).on("click",()=>Yr("webgpu"));let H=z.animate;m.enabled=!H,Y.addInput(z,"animate",{label:"Animate"}).on("change",w=>{H=w.value,m.enabled=!H,H||(m.resetToCamera(),me())}),Y.addInput(z,"render_scale",{label:"Render scale",min:.25,max:Math.max(1,window.devicePixelRatio||1),step:.05}).on("change",()=>ie()),Y.addInput(z,"gaussian_scaling",{label:"Surfel scale",min:.1,max:2,step:.05}).on("change",w=>P==null?void 0:P.setGaussianScaling(w.value)),Y.addInput(z,"bg",{label:"Background",color:{type:"float"}}).on("change",w=>{P&&(P.bgColor=[w.value.r,w.value.g,w.value.b])});const I={s:"—"};Y.addMonitor(I,"s",{label:"Atlas"}),Y.addButton({title:"🎯 Reset camera"}).on("click",()=>he(0,!1)),Wa(Y);const Z=document.createElement("button");Z.textContent="Texture: on",Object.assign(Z.style,{position:"fixed",top:"8px",right:"270px",zIndex:"1000",padding:"4px 8px",font:"12px system-ui, sans-serif",borderRadius:"4px",border:"1px solid #666",background:"rgba(20,20,30,0.8)",color:"#eee",cursor:"pointer"}),document.body.appendChild(Z);const N=()=>{z.atlas_enabled=!z.atlas_enabled,P==null||P.setAtlasEnabled(z.atlas_enabled),Z.textContent=`Texture: ${z.atlas_enabled?"on":"off"}`,V.refresh()};Z.addEventListener("click",N);const ie=()=>{const w=Math.max(.25,z.render_scale),a=Math.max(1,Math.ceil(w*i.clientWidth)),v=Math.max(1,Math.ceil(w*i.clientHeight));(i.width!==a||i.height!==v)&&(i.width=a,i.height=v),c.on_update_canvas()};new ResizeObserver(()=>ie()).observe(i),ie();const fe=.4,ae=3,ce=.3;let de=-1,xe=null,Ae=0;const Ue=ht.create(),pe=Ct.create(),J=w=>ht.fromMat(Ct.create(w[0],w[1],w[2],w[4],w[5],w[6],w[8],w[9],w[10])),Te=(w,a)=>{xe={fromPos:X.clone(c.position),toPos:X.clone(w.position),fromQuat:ht.normalize(J(c.rotation)),toQuat:ht.normalize(J(w.rotation)),target:w,t:0,duration:Math.max(.01,a)}},ge=document.createElement("span"),me=()=>{if(!k)return;const w=so(c,k.surfel_data);w!==null&&m.setOrbitDepth(w)},he=(w,a=!0)=>{if(R.length===0)return;de=(w%R.length+R.length)%R.length;const v=R[de];a?Te(v,fe):(c.set_preset(v),m.resetToCamera(),me()),ge.textContent=`${de+1} / ${R.length}: ${R[de].img_name??de}`};let oe=null;const ue=()=>{if(oe||R.length===0)return;Y.addSeparator(),oe=document.createElement("div"),oe.style.cssText="display:flex;gap:4px;align-items:center;padding:3px 6px;";const w=(a,v)=>{const h=document.createElement("button");return h.className="tp-btnv_b",h.textContent=a,h.style.cssText="flex:0 0 34px;height:24px;padding:0;",h.addEventListener("click",v),h};ge.style.cssText="flex:1 1 auto;font-size:11px;text-align:center;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;opacity:.85;",oe.appendChild(w("◀",()=>he(de-1))),oe.appendChild(ge),oe.appendChild(w("▶",()=>he(de+1))),Y.element.appendChild(oe)};window.addEventListener("keydown",w=>{var a;((a=w.target)==null?void 0:a.tagName)!=="INPUT"&&(w.key==="ArrowLeft"||w.key==="PageUp"?he(de-1):w.key==="ArrowRight"||w.key==="PageDown"?he(de+1):w.key==="t"||w.key==="T"?N():w.key==="b"||w.key==="B"?M():w.key>="1"&&w.key<="9"&&he(parseInt(w.key,10)-1))});let ze=0;const Ce=(w,a)=>{if(!k)return;const v=i.getBoundingClientRect(),h=Xr((w-v.left)*i.width/v.width,(a-v.top)*i.height/v.height,i,c,k.surfel_data);h&&m.setOrbitPivot(h)};i.addEventListener("dblclick",w=>Ce(w.clientX,w.clientY)),i.addEventListener("pointerup",w=>{if(w.pointerType!=="touch")return;const a=performance.now();a-ze<300&&Ce(w.clientX,w.clientY),ze=a});const De=p.get("bundle")??p.get("model_url");async function Pe(w,a){ls(`parsing ${a} ...`);try{const v=new TextDecoder().decode(new Uint8Array(w,0,8));let h=w,d=null,u=null;v===Ys&&({pcBuffer:h,camerasBuffer:d,atlasBuffer:u}=ei(w)),Tt("parsing surfels ..."),k=await la(new File([h],a));let b=null;if(u&&p.get("notex")!=="1"){b=On(u);const y=Gr(b)&&E.bc7||Fr(b)&&E.astc;let O=p.get("atlas2");if(!y&&!O&&De){const $=De.match(/^(.*?)(_astc)?\.bitymi(\?.*)?$/);$&&(O=$[2]?`${$[1]}.bitymi${$[3]??""}`:`${$[1]}_astc.bitymi${$[3]??""}`)}if(!y&&O){Tt("atlas format unsupported here — fetching the twin bundle ...");try{const{bundle:$}=await os(O,(j,te)=>Tt(`downloading twin atlas ...
${(j/1048576).toFixed(1)}${te?` / ${(te/1048576).toFixed(1)}`:""} MB`));if($!=null&&$.atlasBuffer){const j=On($.atlasBuffer);(Gr(j)&&E.bc7||Fr(j)&&E.astc)&&(b=j)}}catch($){console.warn("[gl] atlas2 failed:",$)}}}Tt("building GPU resources ..."),G=b,P=new Ma(s,k,b),P.bgColor=[z.bg.r,z.bg.g,z.bg.b],P.setGaussianScaling(z.gaussian_scaling),P.setAtlasEnabled(z.atlas_enabled),I.s=P.atlasStatus,vt(`[gl] max tex ${s.getParameter(s.MAX_TEXTURE_SIZE)} · layers ${s.getParameter(s.MAX_ARRAY_TEXTURE_LAYERS)} · ${P.atlasStatus}`),vt(`[gl] ${k.num_points} surfels · ${P.atlasStatus}`),R=[];const T=p.get("camera_url");if(d){const y=URL.createObjectURL(new Blob([d],{type:"application/json"}));try{R=await Hr(y)}finally{URL.revokeObjectURL(y)}}else if(T)try{R=await Hr(T)}catch(y){console.warn("[gl] camera_url failed:",y)}if(m.setBbox(k.bbox.min,k.bbox.max),R.length>0)ue(),he(0,!1);else{const y=k.centroid,O=.5*Math.hypot(k.bbox.max[0]-k.bbox.min[0],k.bbox.max[1]-k.bbox.min[1],k.bbox.max[2]-k.bbox.min[2]),$=X.create(y[0]-O,y[1]-O,y[2]-O),j=gt.lookAt($,X.create(y[0],y[1],y[2]),X.create(0,1,0));gt.copy(j,c.rotation),c.rotation[12]=0,c.rotation[13]=0,c.rotation[14]=0,X.copy($,c.position),c.update_buffer(),m.resetToCamera()}}catch(v){throw Yt(),v}}const ee=document.getElementById("load-button");if(ee==null||ee.addEventListener("click",()=>{const w=document.createElement("input");w.type="file",w.accept=".ply,.bitymi",w.onchange=async()=>{var v;const a=(v=w.files)==null?void 0:v[0];a&&await Pe(await a.arrayBuffer(),a.name)},w.click()}),De)try{ls("downloading ...");const{bundle:w,rawPly:a}=await os(De,(v,h,d,u)=>Tt(u==="cache"?`loading cached bundle ...
${(v/2**20).toFixed(1)}${h?` / ${(h/2**20).toFixed(1)}`:""} MB on this device`:`downloading ...
${(v/2**20).toFixed(1)}${h?` / ${(h/2**20).toFixed(1)}`:""} MB · ${(d/2**20).toFixed(1)} MB/s`));w?await le(w.pcBuffer,w.camerasBuffer,w.atlasBuffer,De.split("/").pop()??"bundle"):a&&await Pe(a,De.split("/").pop()??"scene.ply")}catch(w){Yt(),console.error("[gl] bundle load failed:",w),q.stats=`load failed: ${(w==null?void 0:w.message)??w}`;const a=document.createElement("div");a.textContent=`Could not load this bundle in the WebGL2 renderer: ${(w==null?void 0:w.message)??w}`,Object.assign(a.style,{position:"fixed",left:"50%",top:"40%",transform:"translate(-50%,-50%)",maxWidth:"80vw",color:"#eee",background:"rgba(20,20,20,0.92)",border:"1px solid #f0b060",borderRadius:"8px",font:"15px system-ui, sans-serif",padding:"16px 20px",textAlign:"center",zIndex:"10000"}),document.body.appendChild(a)}else q.stats="no ?bundle= — use 📂 Load";async function le(w,a,v,h){const d=new TextEncoder().encode(Ys),u=[w],b=[0];a&&(u.push(a),b.push(2)),v&&(u.push(v),b.push(3));const T=4+u.length*20,y=8+T,O=y+u.reduce((se,ne)=>se+ne.byteLength,0),$=new Uint8Array(O),j=new DataView($.buffer);$.set(d,0),j.setUint32(8,u.length,!0);let te=y;u.forEach((se,ne)=>{j.setUint32(12+ne*20,b[ne],!0),j.setBigUint64(16+ne*20,BigInt(te),!0),j.setBigUint64(24+ne*20,BigInt(se.byteLength),!0),$.set(new Uint8Array(se),te),te+=se.byteLength}),await Pe($.buffer,h)}let M=()=>{};const W=p.get("bundle_b");if(W&&P&&k){const w=p.get("label_a")??"A",a=p.get("label_b")??"B",v={a:{pc:k,renderer:P,atlas:G},b:null};let h="a",d=!1,u="";const b=document.createElement("button");Object.assign(b.style,{position:"fixed",top:"40px",right:"270px",zIndex:"1000",padding:"4px 8px",font:"12px system-ui, sans-serif",borderRadius:"4px",border:"1px solid #f0b060",background:"rgba(20,20,30,0.8)",color:"#f0b060",cursor:"pointer"});const T=($="")=>{b.textContent=$||`Scene: ${h==="a"?w:a}  ⇄`;try{const j=new URL(window.location.href);h==="b"?j.searchParams.set("side","b"):j.searchParams.delete("side"),history.replaceState(history.state,"",j.toString())}catch{}},y=$=>{const j=document.createElement("div");Object.assign(j.style,{position:"fixed",left:"50%",top:"30%",transform:"translate(-50%,-50%)",maxWidth:"80vw",color:"#eee",background:"rgba(20,20,20,0.94)",border:"1px solid #60b0f0",borderRadius:"8px",font:"15px system-ui, sans-serif",padding:"16px 20px",textAlign:"center",zIndex:"10000"});const te=document.createElement("div");te.textContent=$,j.appendChild(te);const se=document.createElement("div");se.style.marginTop="12px";const ne=(ke,Me)=>{const we=document.createElement("button");we.textContent=ke,Object.assign(we.style,{margin:"0 6px",padding:"6px 14px",font:"600 13px system-ui, sans-serif",borderRadius:"6px",border:"1px solid #666",background:"#222",color:"#eee",cursor:"pointer"}),we.onclick=Me,se.appendChild(we)};o.gpuAvailable&&ne("Switch to WebGPU",()=>Yr("webgpu")),ne("OK",()=>j.remove()),j.appendChild(se),document.body.appendChild(j)},O=$=>{const j=$==="a"?v.a:v.b;P=j.renderer,k=j.pc,G=j.atlas,P.bgColor=[z.bg.r,z.bg.g,z.bg.b],P.setGaussianScaling(z.gaussian_scaling),P.setAtlasEnabled(z.atlas_enabled),I.s=P.atlasStatus,h=$,T(),console.log(`[gl A/B] active = ${$}: ${k.num_points} surfels`)};M=async()=>{if(!d){if(h==="b"){O("a");return}if(v.b){O("b");return}if(u){y(u);return}d=!0,T(`loading ${a} ...`);try{const{bundle:$}=await os(W,(ne,ke)=>T(`loading ${a} ... ${(ne/1048576).toFixed(0)}${ke?`/${(ke/1048576).toFixed(0)}`:""} MB`));if(!$)throw new Error("bundle_b must be a .bitymi bundle");const j=await la(new File([$.pcBuffer],"bundle_b.ply"));let te=null;if($.atlasBuffer&&p.get("notex")!=="1"){const ne=On($.atlasBuffer);(Gr(ne)&&E.bc7||Fr(ne)&&E.astc)&&(te=ne)}let se;try{se=new Ma(s,j,te)}catch(ne){throw u=/tex3d/.test(String(ne==null?void 0:ne.message))?`“${a}” is a 3D-kernel bake (--tex3d), which only the WebGPU renderer can draw. Still showing “${w}”.`:`“${a}” cannot be shown in the WebGL2 renderer: ${(ne==null?void 0:ne.message)??ne}. Still showing “${w}”.`,new Error(u)}v.b={pc:j,renderer:se,atlas:te},O("b")}catch($){console.error("[gl A/B] B failed:",$),u||(u=`Could not load “${a}”: ${($==null?void 0:$.message)??$}`),T(),y(u)}finally{d=!1}}},b.addEventListener("click",()=>M()),document.body.appendChild(b),T(),p.get("side")==="b"&&M()}let S=performance.now(),l=0,g=0;const _=()=>{var w;return((w=m.isDragging)==null?void 0:w.call(m))??!1};let x=0;function C(){try{A()}catch(w){x++<5&&console.error("[gl frame] exception (render loop kept alive):",w)}requestAnimationFrame(C)}function A(){const w=performance.now(),a=Math.min((w-S)/1e3,.1);if(S=w,P&&k){if(xe){xe.t+=a/xe.duration;const d=Math.min(1,xe.t),u=d*d*(3-2*d);X.lerp(xe.fromPos,xe.toPos,u,c.position),ht.slerp(xe.fromQuat,xe.toQuat,u,Ue),Ct.fromQuat(Ue,pe),gt.fromMat3(pe,c.rotation),c.update_buffer(),xe.t>=1&&(c.set_preset(xe.target),xe=null,H?Ae=ce:(m.resetToCamera(),me()))}else H&&R.length>0&&(Ae-=a,Ae<=0&&(de=(de+1)%R.length,Te(R[de],ae),ge.textContent=`${de+1} / ${R.length}: ${R[de].img_name??de}`));_()&&xe&&(xe=null),m.update(a);const v=P.render({rotation:c.rotation,eye:c.position,fovY:c.getFovY(),width:i.width,height:i.height,zfar:c.zfar}),h=1/Math.max(a,.001);l=l===0?h:l*.9+h*.1,q.stats=`${v.toLocaleString()} / ${k.num_points.toLocaleString()} surfels · ${Math.round(l)} fps
${i.width}×${i.height} px`,g++,g===2&&Yt()}}requestAnimationFrame(C),window.__halloumiGL={stats:q,get renderer(){return P},get cameras(){return R},setPreset:he,get atlas(){return G},pick(w,a){return k?Xr(w,a,i,c,k.surfel_data):null},pickIds(w,a){if(!k)return[];const[v,h,d]=Qs(w,a,c),u=c.position[0],b=c.position[1],T=c.position[2],y=k.surfel_data,O=new Uint32Array(y.buffer,y.byteOffset,y.length),$=te=>{const se=te>>10&31,ne=te&1023,ke=te&32768?-1:1;return se===0?ke*ne*596e-10:ke*(1+ne/1024)*Math.pow(2,se-15)},j=[];for(let te=0;te<k.num_points;te++){const se=te*8,ne=y[se],ke=y[se+1],Me=y[se+2],we=$(O[se+4]&65535),Be=$(O[se+4]>>>16),Ge=$(O[se+5]&65535),Fe=$(O[se+5]>>>16),Xe=$(O[se+6]&65535),st=$(O[se+6]>>>16),Je=1/Math.hypot(Ge,Fe,Xe,st),Qe=Ge*Je,qe=Fe*Je,et=Xe*Je,Ye=st*Je,dt=[1-2*(et*et+Ye*Ye),2*(qe*et+Qe*Ye),2*(qe*Ye-Qe*et)],Ke=[2*(qe*et-Qe*Ye),1-2*(qe*qe+Ye*Ye),2*(et*Ye+Qe*qe)],Oe=[2*(qe*Ye+Qe*et),2*(et*Ye-Qe*qe),1-2*(qe*qe+et*et)],at=v*Oe[0]+h*Oe[1]+d*Oe[2];if(Math.abs(at)<1e-9)continue;const Ne=((ne-u)*Oe[0]+(ke-b)*Oe[1]+(Me-T)*Oe[2])/at;if(Ne<=0)continue;const ct=u+Ne*v-ne,rt=b+Ne*h-ke,_t=T+Ne*d-Me,ot=(ct*dt[0]+rt*dt[1]+_t*dt[2])/we,St=(ct*Ke[0]+rt*Ke[1]+_t*Ke[2])/Be,Bt=ot*ot+St*St,ut=c.rotation,lt=c.position,Vt=ut[0]*(ne-lt[0])+ut[4]*(ke-lt[1])+ut[8]*(Me-lt[2]),yt=ut[1]*(ne-lt[0])+ut[5]*(ke-lt[1])+ut[9]*(Me-lt[2]),Ut=ut[2]*(ne-lt[0])+ut[6]*(ke-lt[1])+ut[10]*(Me-lt[2]),Nt=i.width,Lt=i.height,qt=.5*Lt/Math.tan(c.getFovY()*.5),zt=qt*Vt/Ut+(Nt-1)*.5,tt=qt*yt/Ut+(Lt-1)*.5,Et=2*((zt-w)*(zt-w)+(tt-a)*(tt-a)),Zt=$(O[se+3]&65535),Xt=$(O[se+3]>>>16),xn=Bt>=9?0:Math.pow(Math.max(0,1-Bt/9),Xt>1e-6?Xt:1),Dt=Math.min(.99,Zt*Math.max(xn,Math.exp(-.5*Et)));if(Dt<1/255)continue;const Wt=G?Array.from(G.rects_expanded.subarray(te*5,te*5+5)):null,Vn=P&&P.atlasUpload?Array.from(P.atlasUpload.rects.subarray(te*5,te*5+5)):null;j.push({id:te,t:+Ne.toFixed(3),u:+ot.toFixed(2),v:+St.toFixed(2),rho2d:+Et.toFixed(2),alpha:+Dt.toFixed(3),opa:+Zt.toFixed(2),tex:O[se+7]>>>16&1,rect:Wt,remap:Vn})}return j.sort((te,se)=>te.t-se.t)}}}const Ra="halloumi.gpuLossReload",vd=6e4;let Da=!1;function Ua(i,s){const o=document.createElement("div");Object.assign(o.style,{position:"fixed",inset:"0",display:"flex",flexDirection:"column",gap:"14px",alignItems:"center",justifyContent:"center",zIndex:"10000",color:"#eee",background:"rgba(10,10,10,0.92)",font:"15px system-ui, sans-serif",padding:"24px",textAlign:"center"});const p=document.createElement("div");if(p.textContent=i,o.appendChild(p),s){const c=document.createElement("button");c.textContent="Reload",Object.assign(c.style,{font:"600 14px system-ui, sans-serif",padding:"8px 18px",borderRadius:"6px",border:"1px solid #f0b060",background:"#222",color:"#f0b060",cursor:"pointer"}),c.onclick=()=>window.location.reload(),o.appendChild(c)}document.body.appendChild(o)}function io(i,s){if(Da)return;Da=!0,console.error(`[gpu-loss] ${i} lost: ${s}`);let o=0;try{o=parseInt(sessionStorage.getItem(Ra)??"0",10)||0}catch{}const p=Date.now();if(p-o>vd){try{sessionStorage.setItem(Ra,String(p))}catch{}Ua("The GPU device was lost — reloading the viewer…",!1),setTimeout(()=>window.location.reload(),400)}else Ua(`The GPU device was lost again (${i}: ${s}). Reload to try once more.`,!0)}function bd(i){i.lost.then(o=>{o.reason!=="destroyed"&&io("webgpu",`${o.reason}: ${o.message}`)});let s=0;i.addEventListener("uncapturederror",o=>{var p;s++<5&&console.error("[webgpu] uncaptured error:",((p=o==null?void 0:o.error)==null?void 0:p.message)??o)})}function La(i){i.addEventListener("webglcontextlost",s=>{s.preventDefault(),!ao&&io("webgl","webglcontextlost")},!1)}let ao=!1;function Or(i){window.addEventListener("pagehide",()=>{ao=!0;try{i()}catch(s){console.warn("[gpu-loss] release on pagehide failed:",s)}}),window.addEventListener("pageshow",s=>{s.persisted&&location.reload()})}(function(){let s="dev";for(const p of Array.from(document.querySelectorAll('script[type="module"]'))){const m=p.src.match(/\/assets\/index-([0-9a-z]+)\.js$/i);if(m){s=m[1];break}}const o=document.createElement("div");o.textContent="v "+s,o.title="viewer build hash (Vite content hash of index-*.js)",Object.assign(o.style,{position:"fixed",right:"6px",bottom:"6px",font:"10px ui-monospace, SFMono-Regular, Menlo, monospace",color:"rgba(255,255,255,0.55)",background:"rgba(0,0,0,0.35)",padding:"2px 6px",borderRadius:"4px",pointerEvents:"none",zIndex:"9999",userSelect:"all"}),document.body.appendChild(o)})();function er(i){const s=document.createElement("div");Object.assign(s.style,{position:"fixed",inset:"0",display:"flex",flexDirection:"column",gap:"14px",alignItems:"center",justifyContent:"center",zIndex:"10000",color:"#eee",background:"rgba(10,10,10,0.92)",font:"15px system-ui, sans-serif",padding:"24px",textAlign:"center"});const o=document.createElement("div");o.textContent=i,s.appendChild(o);const p=document.createElement("button");p.textContent="Reload",Object.assign(p.style,{font:"600 14px system-ui, sans-serif",padding:"8px 18px",borderRadius:"6px",border:"1px solid #f0b060",background:"#222",color:"#f0b060",cursor:"pointer"}),p.onclick=()=>window.location.reload(),s.appendChild(p),document.body.appendChild(s)}let tr=!1;window.addEventListener("unhandledrejection",i=>{if(tr)return;tr=!0;const s=i.reason;er(`The viewer failed to load: ${(s==null?void 0:s.message)??s}`)});window.addEventListener("error",i=>{var s;tr||!i.error||(tr=!0,er(`The viewer hit an error: ${((s=i.error)==null?void 0:s.message)??i.message}`))});try{const i=performance.memory;console.log("[mem]",{deviceMemoryGB:navigator.deviceMemory??"?",hardwareConcurrency:navigator.hardwareConcurrency,jsHeapLimitMB:i?Math.round(i.jsHeapSizeLimit/2**20):"?",dpr:window.devicePixelRatio})}catch{}(async()=>{const i=document.querySelector("#webgpu-canvas");$c(i!==null);const{forced:s,stored:o}=od(),p=s??o??"webgpu";let c=null;if(navigator.gpu!==void 0)try{c=await navigator.gpu.requestAdapter({powerPreference:"high-performance"})}catch(k){console.warn("[backend] requestAdapter failed:",k)}if(p==="webgl"||c===null){const k=i.getContext("webgl2",{alpha:!1,antialias:!1,depth:!1,stencil:!1,premultipliedAlpha:!0,powerPreference:"high-performance"});if(!k){er(c===null?"This browser has neither WebGPU nor WebGL2.":"WebGL2 is not available in this browser.");return}console.log(`[backend] WebGL2 (${p==="webgl"?s?"?renderer=webgl":"remembered choice":"no WebGPU adapter"})`),La(i),Or(()=>{var R;return(R=k.getExtension("WEBGL_lose_context"))==null?void 0:R.loseContext()}),Aa(i,k,{gpuAvailable:c!==null});return}const m=[];c.features.has("timestamp-query")&&m.push("timestamp-query"),c.features.has("texture-compression-bc")&&m.push("texture-compression-bc"),c.features.has("texture-compression-astc")&&m.push("texture-compression-astc"),console.log("[adapter]",c.info??"(unknown)");try{const k=c.info??{};globalThis.__gpuAdapterInfo={vendor:k.vendor??"?",architecture:k.architecture??"?",device:k.device??"?",description:k.description??"?",features:Array.from(c.features).join(",")}}catch{}console.log("[adapter] features:",Array.from(c.features)),console.log("[adapter] BC7:",c.features.has("texture-compression-bc")),console.log("[adapter] ASTC:",c.features.has("texture-compression-astc")),console.log("[adapter] limits:",{maxStorageBuffersPerShaderStage:c.limits.maxStorageBuffersPerShaderStage,maxComputeWorkgroupStorageSize:c.limits.maxComputeWorkgroupStorageSize,maxBufferSize:c.limits.maxBufferSize,maxStorageBufferBindingSize:c.limits.maxStorageBufferBindingSize,maxTextureDimension2D:c.limits.maxTextureDimension2D});let E;try{E=await c.requestDevice({requiredFeatures:m,requiredLimits:{maxStorageBuffersPerShaderStage:10,maxComputeWorkgroupStorageSize:c.limits.maxComputeWorkgroupStorageSize,maxBufferSize:c.limits.maxBufferSize,maxStorageBufferBindingSize:c.limits.maxStorageBufferBindingSize}})}catch(k){console.warn("[backend] requestDevice failed, falling back to WebGL2:",k);const R=i.getContext("webgl2",{alpha:!1,antialias:!1,depth:!1,stencil:!1,premultipliedAlpha:!0,powerPreference:"high-performance"});if(!R){er(`WebGPU device creation failed (${k}) and WebGL2 is not available.`);return}La(i),Or(()=>{var G;return(G=R.getExtension("WEBGL_lose_context"))==null?void 0:G.loseContext()}),Aa(i,R,{gpuAvailable:!1});return}bd(E),Or(()=>E.destroy());const P=i.getContext("webgpu");dd(i,P,E,m)})();
