var Bc=Object.defineProperty;var Ac=(i,s,o)=>s in i?Bc(i,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):i[s]=o;var T=(i,s,o)=>(Ac(i,typeof s!="symbol"?s+"":s,o),o);(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))p(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const P of f.addedNodes)P.tagName==="LINK"&&P.rel==="modulepreload"&&p(P)}).observe(document,{childList:!0,subtree:!0});function o(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function p(u){if(u.ep)return;u.ep=!0;const f=o(u);fetch(u.href,f)}})();function Rc(i,s){return class extends i{constructor(...o){super(...o),s(this)}}}const Dc=Rc(Array,i=>i.fill(0));let Ne=1e-6;function Uc(i){function s(C=0,D=0){const M=new i(2);return C!==void 0&&(M[0]=C,D!==void 0&&(M[1]=D)),M}const o=s;function p(C,D,M){const a=M??new i(2);return a[0]=C,a[1]=D,a}function u(C,D){const M=D??new i(2);return M[0]=Math.ceil(C[0]),M[1]=Math.ceil(C[1]),M}function f(C,D){const M=D??new i(2);return M[0]=Math.floor(C[0]),M[1]=Math.floor(C[1]),M}function P(C,D){const M=D??new i(2);return M[0]=Math.round(C[0]),M[1]=Math.round(C[1]),M}function y(C,D=0,M=1,a){const v=a??new i(2);return v[0]=Math.min(M,Math.max(D,C[0])),v[1]=Math.min(M,Math.max(D,C[1])),v}function k(C,D,M){const a=M??new i(2);return a[0]=C[0]+D[0],a[1]=C[1]+D[1],a}function B(C,D,M,a){const v=a??new i(2);return v[0]=C[0]+D[0]*M,v[1]=C[1]+D[1]*M,v}function F(C,D){const M=C[0],a=C[1],v=D[0],d=D[1],m=Math.sqrt(M*M+a*a),c=Math.sqrt(v*v+d*d),b=m*c,E=b&&we(C,D)/b;return Math.acos(E)}function z(C,D,M){const a=M??new i(2);return a[0]=C[0]-D[0],a[1]=C[1]-D[1],a}const $=z;function q(C,D){return Math.abs(C[0]-D[0])<Ne&&Math.abs(C[1]-D[1])<Ne}function H(C,D){return C[0]===D[0]&&C[1]===D[1]}function L(C,D,M,a){const v=a??new i(2);return v[0]=C[0]+M*(D[0]-C[0]),v[1]=C[1]+M*(D[1]-C[1]),v}function V(C,D,M,a){const v=a??new i(2);return v[0]=C[0]+M[0]*(D[0]-C[0]),v[1]=C[1]+M[1]*(D[1]-C[1]),v}function J(C,D,M){const a=M??new i(2);return a[0]=Math.max(C[0],D[0]),a[1]=Math.max(C[1],D[1]),a}function G(C,D,M){const a=M??new i(2);return a[0]=Math.min(C[0],D[0]),a[1]=Math.min(C[1],D[1]),a}function Y(C,D,M){const a=M??new i(2);return a[0]=C[0]*D,a[1]=C[1]*D,a}const N=Y;function re(C,D,M){const a=M??new i(2);return a[0]=C[0]/D,a[1]=C[1]/D,a}function ue(C,D){const M=D??new i(2);return M[0]=1/C[0],M[1]=1/C[1],M}const de=ue;function ce(C,D,M){const a=M??new i(3),v=C[0]*D[1]-C[1]*D[0];return a[0]=0,a[1]=0,a[2]=v,a}function we(C,D){return C[0]*D[0]+C[1]*D[1]}function Se(C){const D=C[0],M=C[1];return Math.sqrt(D*D+M*M)}const Me=Se;function Ee(C){const D=C[0],M=C[1];return D*D+M*M}const le=Ee;function j(C,D){const M=C[0]-D[0],a=C[1]-D[1];return Math.sqrt(M*M+a*a)}const be=j;function me(C,D){const M=C[0]-D[0],a=C[1]-D[1];return M*M+a*a}const pe=me;function he(C,D){const M=D??new i(2),a=C[0],v=C[1],d=Math.sqrt(a*a+v*v);return d>1e-5?(M[0]=a/d,M[1]=v/d):(M[0]=0,M[1]=0),M}function ae(C,D){const M=D??new i(2);return M[0]=-C[0],M[1]=-C[1],M}function oe(C,D){const M=D??new i(2);return M[0]=C[0],M[1]=C[1],M}const Le=oe;function Te(C,D,M){const a=M??new i(2);return a[0]=C[0]*D[0],a[1]=C[1]*D[1],a}const Ie=Te;function ge(C,D,M){const a=M??new i(2);return a[0]=C[0]/D[0],a[1]=C[1]/D[1],a}const Ae=ge;function Q(C=1,D){const M=D??new i(2),a=Math.random()*2*Math.PI;return M[0]=Math.cos(a)*C,M[1]=Math.sin(a)*C,M}function A(C){const D=C??new i(2);return D[0]=0,D[1]=0,D}function I(C,D,M){const a=M??new i(2),v=C[0],d=C[1];return a[0]=v*D[0]+d*D[4]+D[12],a[1]=v*D[1]+d*D[5]+D[13],a}function w(C,D,M){const a=M??new i(2),v=C[0],d=C[1];return a[0]=D[0]*v+D[4]*d+D[8],a[1]=D[1]*v+D[5]*d+D[9],a}function l(C,D,M,a){const v=a??new i(2),d=C[0]-D[0],m=C[1]-D[1],c=Math.sin(M),b=Math.cos(M);return v[0]=d*b-m*c+D[0],v[1]=d*c+m*b+D[1],v}function g(C,D,M){const a=M??new i(2);return he(C,a),Y(a,D,a)}function _(C,D,M){const a=M??new i(2);return Se(C)>D?g(C,D,a):oe(C,a)}function x(C,D,M){const a=M??new i(2);return L(C,D,.5,a)}return{create:s,fromValues:o,set:p,ceil:u,floor:f,round:P,clamp:y,add:k,addScaled:B,angle:F,subtract:z,sub:$,equalsApproximately:q,equals:H,lerp:L,lerpV:V,max:J,min:G,mulScalar:Y,scale:N,divScalar:re,inverse:ue,invert:de,cross:ce,dot:we,length:Se,len:Me,lengthSq:Ee,lenSq:le,distance:j,dist:be,distanceSq:me,distSq:pe,normalize:he,negate:ae,copy:oe,clone:Le,multiply:Te,mul:Ie,divide:ge,div:Ae,random:Q,zero:A,transformMat4:I,transformMat3:w,rotate:l,setLength:g,truncate:_,midpoint:x}}const sa=new Map;function Fa(i){let s=sa.get(i);return s||(s=Uc(i),sa.set(i,s)),s}function Lc(i){function s(c,b,E){const S=new i(3);return c!==void 0&&(S[0]=c,b!==void 0&&(S[1]=b,E!==void 0&&(S[2]=E))),S}const o=s;function p(c,b,E,S){const O=S??new i(3);return O[0]=c,O[1]=b,O[2]=E,O}function u(c,b){const E=b??new i(3);return E[0]=Math.ceil(c[0]),E[1]=Math.ceil(c[1]),E[2]=Math.ceil(c[2]),E}function f(c,b){const E=b??new i(3);return E[0]=Math.floor(c[0]),E[1]=Math.floor(c[1]),E[2]=Math.floor(c[2]),E}function P(c,b){const E=b??new i(3);return E[0]=Math.round(c[0]),E[1]=Math.round(c[1]),E[2]=Math.round(c[2]),E}function y(c,b=0,E=1,S){const O=S??new i(3);return O[0]=Math.min(E,Math.max(b,c[0])),O[1]=Math.min(E,Math.max(b,c[1])),O[2]=Math.min(E,Math.max(b,c[2])),O}function k(c,b,E){const S=E??new i(3);return S[0]=c[0]+b[0],S[1]=c[1]+b[1],S[2]=c[2]+b[2],S}function B(c,b,E,S){const O=S??new i(3);return O[0]=c[0]+b[0]*E,O[1]=c[1]+b[1]*E,O[2]=c[2]+b[2]*E,O}function F(c,b){const E=c[0],S=c[1],O=c[2],X=b[0],W=b[1],se=b[2],te=Math.sqrt(E*E+S*S+O*O),ne=Math.sqrt(X*X+W*W+se*se),_e=te*ne,Ce=_e&&we(c,b)/_e;return Math.acos(Ce)}function z(c,b,E){const S=E??new i(3);return S[0]=c[0]-b[0],S[1]=c[1]-b[1],S[2]=c[2]-b[2],S}const $=z;function q(c,b){return Math.abs(c[0]-b[0])<Ne&&Math.abs(c[1]-b[1])<Ne&&Math.abs(c[2]-b[2])<Ne}function H(c,b){return c[0]===b[0]&&c[1]===b[1]&&c[2]===b[2]}function L(c,b,E,S){const O=S??new i(3);return O[0]=c[0]+E*(b[0]-c[0]),O[1]=c[1]+E*(b[1]-c[1]),O[2]=c[2]+E*(b[2]-c[2]),O}function V(c,b,E,S){const O=S??new i(3);return O[0]=c[0]+E[0]*(b[0]-c[0]),O[1]=c[1]+E[1]*(b[1]-c[1]),O[2]=c[2]+E[2]*(b[2]-c[2]),O}function J(c,b,E){const S=E??new i(3);return S[0]=Math.max(c[0],b[0]),S[1]=Math.max(c[1],b[1]),S[2]=Math.max(c[2],b[2]),S}function G(c,b,E){const S=E??new i(3);return S[0]=Math.min(c[0],b[0]),S[1]=Math.min(c[1],b[1]),S[2]=Math.min(c[2],b[2]),S}function Y(c,b,E){const S=E??new i(3);return S[0]=c[0]*b,S[1]=c[1]*b,S[2]=c[2]*b,S}const N=Y;function re(c,b,E){const S=E??new i(3);return S[0]=c[0]/b,S[1]=c[1]/b,S[2]=c[2]/b,S}function ue(c,b){const E=b??new i(3);return E[0]=1/c[0],E[1]=1/c[1],E[2]=1/c[2],E}const de=ue;function ce(c,b,E){const S=E??new i(3),O=c[2]*b[0]-c[0]*b[2],X=c[0]*b[1]-c[1]*b[0];return S[0]=c[1]*b[2]-c[2]*b[1],S[1]=O,S[2]=X,S}function we(c,b){return c[0]*b[0]+c[1]*b[1]+c[2]*b[2]}function Se(c){const b=c[0],E=c[1],S=c[2];return Math.sqrt(b*b+E*E+S*S)}const Me=Se;function Ee(c){const b=c[0],E=c[1],S=c[2];return b*b+E*E+S*S}const le=Ee;function j(c,b){const E=c[0]-b[0],S=c[1]-b[1],O=c[2]-b[2];return Math.sqrt(E*E+S*S+O*O)}const be=j;function me(c,b){const E=c[0]-b[0],S=c[1]-b[1],O=c[2]-b[2];return E*E+S*S+O*O}const pe=me;function he(c,b){const E=b??new i(3),S=c[0],O=c[1],X=c[2],W=Math.sqrt(S*S+O*O+X*X);return W>1e-5?(E[0]=S/W,E[1]=O/W,E[2]=X/W):(E[0]=0,E[1]=0,E[2]=0),E}function ae(c,b){const E=b??new i(3);return E[0]=-c[0],E[1]=-c[1],E[2]=-c[2],E}function oe(c,b){const E=b??new i(3);return E[0]=c[0],E[1]=c[1],E[2]=c[2],E}const Le=oe;function Te(c,b,E){const S=E??new i(3);return S[0]=c[0]*b[0],S[1]=c[1]*b[1],S[2]=c[2]*b[2],S}const Ie=Te;function ge(c,b,E){const S=E??new i(3);return S[0]=c[0]/b[0],S[1]=c[1]/b[1],S[2]=c[2]/b[2],S}const Ae=ge;function Q(c=1,b){const E=b??new i(3),S=Math.random()*2*Math.PI,O=Math.random()*2-1,X=Math.sqrt(1-O*O)*c;return E[0]=Math.cos(S)*X,E[1]=Math.sin(S)*X,E[2]=O*c,E}function A(c){const b=c??new i(3);return b[0]=0,b[1]=0,b[2]=0,b}function I(c,b,E){const S=E??new i(3),O=c[0],X=c[1],W=c[2],se=b[3]*O+b[7]*X+b[11]*W+b[15]||1;return S[0]=(b[0]*O+b[4]*X+b[8]*W+b[12])/se,S[1]=(b[1]*O+b[5]*X+b[9]*W+b[13])/se,S[2]=(b[2]*O+b[6]*X+b[10]*W+b[14])/se,S}function w(c,b,E){const S=E??new i(3),O=c[0],X=c[1],W=c[2];return S[0]=O*b[0*4+0]+X*b[1*4+0]+W*b[2*4+0],S[1]=O*b[0*4+1]+X*b[1*4+1]+W*b[2*4+1],S[2]=O*b[0*4+2]+X*b[1*4+2]+W*b[2*4+2],S}function l(c,b,E){const S=E??new i(3),O=c[0],X=c[1],W=c[2];return S[0]=O*b[0]+X*b[4]+W*b[8],S[1]=O*b[1]+X*b[5]+W*b[9],S[2]=O*b[2]+X*b[6]+W*b[10],S}function g(c,b,E){const S=E??new i(3),O=b[0],X=b[1],W=b[2],se=b[3]*2,te=c[0],ne=c[1],_e=c[2],Ce=X*_e-W*ne,ke=W*te-O*_e,xe=O*ne-X*te;return S[0]=te+Ce*se+(X*xe-W*ke)*2,S[1]=ne+ke*se+(W*Ce-O*xe)*2,S[2]=_e+xe*se+(O*ke-X*Ce)*2,S}function _(c,b){const E=b??new i(3);return E[0]=c[12],E[1]=c[13],E[2]=c[14],E}function x(c,b,E){const S=E??new i(3),O=b*4;return S[0]=c[O+0],S[1]=c[O+1],S[2]=c[O+2],S}function C(c,b){const E=b??new i(3),S=c[0],O=c[1],X=c[2],W=c[4],se=c[5],te=c[6],ne=c[8],_e=c[9],Ce=c[10];return E[0]=Math.sqrt(S*S+O*O+X*X),E[1]=Math.sqrt(W*W+se*se+te*te),E[2]=Math.sqrt(ne*ne+_e*_e+Ce*Ce),E}function D(c,b,E,S){const O=S??new i(3),X=[],W=[];return X[0]=c[0]-b[0],X[1]=c[1]-b[1],X[2]=c[2]-b[2],W[0]=X[0],W[1]=X[1]*Math.cos(E)-X[2]*Math.sin(E),W[2]=X[1]*Math.sin(E)+X[2]*Math.cos(E),O[0]=W[0]+b[0],O[1]=W[1]+b[1],O[2]=W[2]+b[2],O}function M(c,b,E,S){const O=S??new i(3),X=[],W=[];return X[0]=c[0]-b[0],X[1]=c[1]-b[1],X[2]=c[2]-b[2],W[0]=X[2]*Math.sin(E)+X[0]*Math.cos(E),W[1]=X[1],W[2]=X[2]*Math.cos(E)-X[0]*Math.sin(E),O[0]=W[0]+b[0],O[1]=W[1]+b[1],O[2]=W[2]+b[2],O}function a(c,b,E,S){const O=S??new i(3),X=[],W=[];return X[0]=c[0]-b[0],X[1]=c[1]-b[1],X[2]=c[2]-b[2],W[0]=X[0]*Math.cos(E)-X[1]*Math.sin(E),W[1]=X[0]*Math.sin(E)+X[1]*Math.cos(E),W[2]=X[2],O[0]=W[0]+b[0],O[1]=W[1]+b[1],O[2]=W[2]+b[2],O}function v(c,b,E){const S=E??new i(3);return he(c,S),Y(S,b,S)}function d(c,b,E){const S=E??new i(3);return Se(c)>b?v(c,b,S):oe(c,S)}function m(c,b,E){const S=E??new i(3);return L(c,b,.5,S)}return{create:s,fromValues:o,set:p,ceil:u,floor:f,round:P,clamp:y,add:k,addScaled:B,angle:F,subtract:z,sub:$,equalsApproximately:q,equals:H,lerp:L,lerpV:V,max:J,min:G,mulScalar:Y,scale:N,divScalar:re,inverse:ue,invert:de,cross:ce,dot:we,length:Se,len:Me,lengthSq:Ee,lenSq:le,distance:j,dist:be,distanceSq:me,distSq:pe,normalize:he,negate:ae,copy:oe,clone:Le,multiply:Te,mul:Ie,divide:ge,div:Ae,random:Q,zero:A,transformMat4:I,transformMat4Upper3x3:w,transformMat3:l,transformQuat:g,getTranslation:_,getAxis:x,getScaling:C,rotateX:D,rotateY:M,rotateZ:a,setLength:v,truncate:d,midpoint:m}}const ra=new Map;function sr(i){let s=ra.get(i);return s||(s=Lc(i),ra.set(i,s)),s}function zc(i){const s=Fa(i),o=sr(i);function p(l,g,_,x,C,D,M,a,v){const d=new i(12);return d[3]=0,d[7]=0,d[11]=0,l!==void 0&&(d[0]=l,g!==void 0&&(d[1]=g,_!==void 0&&(d[2]=_,x!==void 0&&(d[4]=x,C!==void 0&&(d[5]=C,D!==void 0&&(d[6]=D,M!==void 0&&(d[8]=M,a!==void 0&&(d[9]=a,v!==void 0&&(d[10]=v))))))))),d}function u(l,g,_,x,C,D,M,a,v,d){const m=d??new i(12);return m[0]=l,m[1]=g,m[2]=_,m[3]=0,m[4]=x,m[5]=C,m[6]=D,m[7]=0,m[8]=M,m[9]=a,m[10]=v,m[11]=0,m}function f(l,g){const _=g??new i(12);return _[0]=l[0],_[1]=l[1],_[2]=l[2],_[3]=0,_[4]=l[4],_[5]=l[5],_[6]=l[6],_[7]=0,_[8]=l[8],_[9]=l[9],_[10]=l[10],_[11]=0,_}function P(l,g){const _=g??new i(12),x=l[0],C=l[1],D=l[2],M=l[3],a=x+x,v=C+C,d=D+D,m=x*a,c=C*a,b=C*v,E=D*a,S=D*v,O=D*d,X=M*a,W=M*v,se=M*d;return _[0]=1-b-O,_[1]=c+se,_[2]=E-W,_[3]=0,_[4]=c-se,_[5]=1-m-O,_[6]=S+X,_[7]=0,_[8]=E+W,_[9]=S-X,_[10]=1-m-b,_[11]=0,_}function y(l,g){const _=g??new i(12);return _[0]=-l[0],_[1]=-l[1],_[2]=-l[2],_[4]=-l[4],_[5]=-l[5],_[6]=-l[6],_[8]=-l[8],_[9]=-l[9],_[10]=-l[10],_}function k(l,g,_){const x=_??new i(12);return x[0]=l[0]*g,x[1]=l[1]*g,x[2]=l[2]*g,x[4]=l[4]*g,x[5]=l[5]*g,x[6]=l[6]*g,x[8]=l[8]*g,x[9]=l[9]*g,x[10]=l[10]*g,x}const B=k;function F(l,g,_){const x=_??new i(12);return x[0]=l[0]+g[0],x[1]=l[1]+g[1],x[2]=l[2]+g[2],x[4]=l[4]+g[4],x[5]=l[5]+g[5],x[6]=l[6]+g[6],x[8]=l[8]+g[8],x[9]=l[9]+g[9],x[10]=l[10]+g[10],x}function z(l,g){const _=g??new i(12);return _[0]=l[0],_[1]=l[1],_[2]=l[2],_[4]=l[4],_[5]=l[5],_[6]=l[6],_[8]=l[8],_[9]=l[9],_[10]=l[10],_}const $=z;function q(l,g){return Math.abs(l[0]-g[0])<Ne&&Math.abs(l[1]-g[1])<Ne&&Math.abs(l[2]-g[2])<Ne&&Math.abs(l[4]-g[4])<Ne&&Math.abs(l[5]-g[5])<Ne&&Math.abs(l[6]-g[6])<Ne&&Math.abs(l[8]-g[8])<Ne&&Math.abs(l[9]-g[9])<Ne&&Math.abs(l[10]-g[10])<Ne}function H(l,g){return l[0]===g[0]&&l[1]===g[1]&&l[2]===g[2]&&l[4]===g[4]&&l[5]===g[5]&&l[6]===g[6]&&l[8]===g[8]&&l[9]===g[9]&&l[10]===g[10]}function L(l){const g=l??new i(12);return g[0]=1,g[1]=0,g[2]=0,g[4]=0,g[5]=1,g[6]=0,g[8]=0,g[9]=0,g[10]=1,g}function V(l,g){const _=g??new i(12);if(_===l){let b;return b=l[1],l[1]=l[4],l[4]=b,b=l[2],l[2]=l[8],l[8]=b,b=l[6],l[6]=l[9],l[9]=b,_}const x=l[0*4+0],C=l[0*4+1],D=l[0*4+2],M=l[1*4+0],a=l[1*4+1],v=l[1*4+2],d=l[2*4+0],m=l[2*4+1],c=l[2*4+2];return _[0]=x,_[1]=M,_[2]=d,_[4]=C,_[5]=a,_[6]=m,_[8]=D,_[9]=v,_[10]=c,_}function J(l,g){const _=g??new i(12),x=l[0*4+0],C=l[0*4+1],D=l[0*4+2],M=l[1*4+0],a=l[1*4+1],v=l[1*4+2],d=l[2*4+0],m=l[2*4+1],c=l[2*4+2],b=c*a-v*m,E=-c*M+v*d,S=m*M-a*d,O=1/(x*b+C*E+D*S);return _[0]=b*O,_[1]=(-c*C+D*m)*O,_[2]=(v*C-D*a)*O,_[4]=E*O,_[5]=(c*x-D*d)*O,_[6]=(-v*x+D*M)*O,_[8]=S*O,_[9]=(-m*x+C*d)*O,_[10]=(a*x-C*M)*O,_}function G(l){const g=l[0],_=l[0*4+1],x=l[0*4+2],C=l[1*4+0],D=l[1*4+1],M=l[1*4+2],a=l[2*4+0],v=l[2*4+1],d=l[2*4+2];return g*(D*d-v*M)-C*(_*d-v*x)+a*(_*M-D*x)}const Y=J;function N(l,g,_){const x=_??new i(12),C=l[0],D=l[1],M=l[2],a=l[4+0],v=l[4+1],d=l[4+2],m=l[8+0],c=l[8+1],b=l[8+2],E=g[0],S=g[1],O=g[2],X=g[4+0],W=g[4+1],se=g[4+2],te=g[8+0],ne=g[8+1],_e=g[8+2];return x[0]=C*E+a*S+m*O,x[1]=D*E+v*S+c*O,x[2]=M*E+d*S+b*O,x[4]=C*X+a*W+m*se,x[5]=D*X+v*W+c*se,x[6]=M*X+d*W+b*se,x[8]=C*te+a*ne+m*_e,x[9]=D*te+v*ne+c*_e,x[10]=M*te+d*ne+b*_e,x}const re=N;function ue(l,g,_){const x=_??L();return l!==x&&(x[0]=l[0],x[1]=l[1],x[2]=l[2],x[4]=l[4],x[5]=l[5],x[6]=l[6]),x[8]=g[0],x[9]=g[1],x[10]=1,x}function de(l,g){const _=g??s.create();return _[0]=l[8],_[1]=l[9],_}function ce(l,g,_){const x=_??s.create(),C=g*4;return x[0]=l[C+0],x[1]=l[C+1],x}function we(l,g,_,x){const C=x===l?l:z(l,x),D=_*4;return C[D+0]=g[0],C[D+1]=g[1],C}function Se(l,g){const _=g??s.create(),x=l[0],C=l[1],D=l[4],M=l[5];return _[0]=Math.sqrt(x*x+C*C),_[1]=Math.sqrt(D*D+M*M),_}function Me(l,g){const _=g??o.create(),x=l[0],C=l[1],D=l[2],M=l[4],a=l[5],v=l[6],d=l[8],m=l[9],c=l[10];return _[0]=Math.sqrt(x*x+C*C+D*D),_[1]=Math.sqrt(M*M+a*a+v*v),_[2]=Math.sqrt(d*d+m*m+c*c),_}function Ee(l,g){const _=g??new i(12);return _[0]=1,_[1]=0,_[2]=0,_[4]=0,_[5]=1,_[6]=0,_[8]=l[0],_[9]=l[1],_[10]=1,_}function le(l,g,_){const x=_??new i(12),C=g[0],D=g[1],M=l[0],a=l[1],v=l[2],d=l[1*4+0],m=l[1*4+1],c=l[1*4+2],b=l[2*4+0],E=l[2*4+1],S=l[2*4+2];return l!==x&&(x[0]=M,x[1]=a,x[2]=v,x[4]=d,x[5]=m,x[6]=c),x[8]=M*C+d*D+b,x[9]=a*C+m*D+E,x[10]=v*C+c*D+S,x}function j(l,g){const _=g??new i(12),x=Math.cos(l),C=Math.sin(l);return _[0]=x,_[1]=C,_[2]=0,_[4]=-C,_[5]=x,_[6]=0,_[8]=0,_[9]=0,_[10]=1,_}function be(l,g,_){const x=_??new i(12),C=l[0*4+0],D=l[0*4+1],M=l[0*4+2],a=l[1*4+0],v=l[1*4+1],d=l[1*4+2],m=Math.cos(g),c=Math.sin(g);return x[0]=m*C+c*a,x[1]=m*D+c*v,x[2]=m*M+c*d,x[4]=m*a-c*C,x[5]=m*v-c*D,x[6]=m*d-c*M,l!==x&&(x[8]=l[8],x[9]=l[9],x[10]=l[10]),x}function me(l,g){const _=g??new i(12),x=Math.cos(l),C=Math.sin(l);return _[0]=1,_[1]=0,_[2]=0,_[4]=0,_[5]=x,_[6]=C,_[8]=0,_[9]=-C,_[10]=x,_}function pe(l,g,_){const x=_??new i(12),C=l[4],D=l[5],M=l[6],a=l[8],v=l[9],d=l[10],m=Math.cos(g),c=Math.sin(g);return x[4]=m*C+c*a,x[5]=m*D+c*v,x[6]=m*M+c*d,x[8]=m*a-c*C,x[9]=m*v-c*D,x[10]=m*d-c*M,l!==x&&(x[0]=l[0],x[1]=l[1],x[2]=l[2]),x}function he(l,g){const _=g??new i(12),x=Math.cos(l),C=Math.sin(l);return _[0]=x,_[1]=0,_[2]=-C,_[4]=0,_[5]=1,_[6]=0,_[8]=C,_[9]=0,_[10]=x,_}function ae(l,g,_){const x=_??new i(12),C=l[0*4+0],D=l[0*4+1],M=l[0*4+2],a=l[2*4+0],v=l[2*4+1],d=l[2*4+2],m=Math.cos(g),c=Math.sin(g);return x[0]=m*C-c*a,x[1]=m*D-c*v,x[2]=m*M-c*d,x[8]=m*a+c*C,x[9]=m*v+c*D,x[10]=m*d+c*M,l!==x&&(x[4]=l[4],x[5]=l[5],x[6]=l[6]),x}const oe=j,Le=be;function Te(l,g){const _=g??new i(12);return _[0]=l[0],_[1]=0,_[2]=0,_[4]=0,_[5]=l[1],_[6]=0,_[8]=0,_[9]=0,_[10]=1,_}function Ie(l,g,_){const x=_??new i(12),C=g[0],D=g[1];return x[0]=C*l[0*4+0],x[1]=C*l[0*4+1],x[2]=C*l[0*4+2],x[4]=D*l[1*4+0],x[5]=D*l[1*4+1],x[6]=D*l[1*4+2],l!==x&&(x[8]=l[8],x[9]=l[9],x[10]=l[10]),x}function ge(l,g){const _=g??new i(12);return _[0]=l[0],_[1]=0,_[2]=0,_[4]=0,_[5]=l[1],_[6]=0,_[8]=0,_[9]=0,_[10]=l[2],_}function Ae(l,g,_){const x=_??new i(12),C=g[0],D=g[1],M=g[2];return x[0]=C*l[0*4+0],x[1]=C*l[0*4+1],x[2]=C*l[0*4+2],x[4]=D*l[1*4+0],x[5]=D*l[1*4+1],x[6]=D*l[1*4+2],x[8]=M*l[2*4+0],x[9]=M*l[2*4+1],x[10]=M*l[2*4+2],x}function Q(l,g){const _=g??new i(12);return _[0]=l,_[1]=0,_[2]=0,_[4]=0,_[5]=l,_[6]=0,_[8]=0,_[9]=0,_[10]=1,_}function A(l,g,_){const x=_??new i(12);return x[0]=g*l[0*4+0],x[1]=g*l[0*4+1],x[2]=g*l[0*4+2],x[4]=g*l[1*4+0],x[5]=g*l[1*4+1],x[6]=g*l[1*4+2],l!==x&&(x[8]=l[8],x[9]=l[9],x[10]=l[10]),x}function I(l,g){const _=g??new i(12);return _[0]=l,_[1]=0,_[2]=0,_[4]=0,_[5]=l,_[6]=0,_[8]=0,_[9]=0,_[10]=l,_}function w(l,g,_){const x=_??new i(12);return x[0]=g*l[0*4+0],x[1]=g*l[0*4+1],x[2]=g*l[0*4+2],x[4]=g*l[1*4+0],x[5]=g*l[1*4+1],x[6]=g*l[1*4+2],x[8]=g*l[2*4+0],x[9]=g*l[2*4+1],x[10]=g*l[2*4+2],x}return{add:F,clone:$,copy:z,create:p,determinant:G,equals:H,equalsApproximately:q,fromMat4:f,fromQuat:P,get3DScaling:Me,getAxis:ce,getScaling:Se,getTranslation:de,identity:L,inverse:J,invert:Y,mul:re,mulScalar:B,multiply:N,multiplyScalar:k,negate:y,rotate:be,rotateX:pe,rotateY:ae,rotateZ:Le,rotation:j,rotationX:me,rotationY:he,rotationZ:oe,scale:Ie,scale3D:Ae,scaling:Te,scaling3D:ge,set:u,setAxis:we,setTranslation:ue,translate:le,translation:Ee,transpose:V,uniformScale:A,uniformScale3D:w,uniformScaling:Q,uniformScaling3D:I}}const ia=new Map;function Ic(i){let s=ia.get(i);return s||(s=zc(i),ia.set(i,s)),s}function Gc(i){const s=sr(i);function o(a,v,d,m,c,b,E,S,O,X,W,se,te,ne,_e,Ce){const ke=new i(16);return a!==void 0&&(ke[0]=a,v!==void 0&&(ke[1]=v,d!==void 0&&(ke[2]=d,m!==void 0&&(ke[3]=m,c!==void 0&&(ke[4]=c,b!==void 0&&(ke[5]=b,E!==void 0&&(ke[6]=E,S!==void 0&&(ke[7]=S,O!==void 0&&(ke[8]=O,X!==void 0&&(ke[9]=X,W!==void 0&&(ke[10]=W,se!==void 0&&(ke[11]=se,te!==void 0&&(ke[12]=te,ne!==void 0&&(ke[13]=ne,_e!==void 0&&(ke[14]=_e,Ce!==void 0&&(ke[15]=Ce)))))))))))))))),ke}function p(a,v,d,m,c,b,E,S,O,X,W,se,te,ne,_e,Ce,ke){const xe=ke??new i(16);return xe[0]=a,xe[1]=v,xe[2]=d,xe[3]=m,xe[4]=c,xe[5]=b,xe[6]=E,xe[7]=S,xe[8]=O,xe[9]=X,xe[10]=W,xe[11]=se,xe[12]=te,xe[13]=ne,xe[14]=_e,xe[15]=Ce,xe}function u(a,v){const d=v??new i(16);return d[0]=a[0],d[1]=a[1],d[2]=a[2],d[3]=0,d[4]=a[4],d[5]=a[5],d[6]=a[6],d[7]=0,d[8]=a[8],d[9]=a[9],d[10]=a[10],d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function f(a,v){const d=v??new i(16),m=a[0],c=a[1],b=a[2],E=a[3],S=m+m,O=c+c,X=b+b,W=m*S,se=c*S,te=c*O,ne=b*S,_e=b*O,Ce=b*X,ke=E*S,xe=E*O,Ve=E*X;return d[0]=1-te-Ce,d[1]=se+Ve,d[2]=ne-xe,d[3]=0,d[4]=se-Ve,d[5]=1-W-Ce,d[6]=_e+ke,d[7]=0,d[8]=ne+xe,d[9]=_e-ke,d[10]=1-W-te,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function P(a,v){const d=v??new i(16);return d[0]=-a[0],d[1]=-a[1],d[2]=-a[2],d[3]=-a[3],d[4]=-a[4],d[5]=-a[5],d[6]=-a[6],d[7]=-a[7],d[8]=-a[8],d[9]=-a[9],d[10]=-a[10],d[11]=-a[11],d[12]=-a[12],d[13]=-a[13],d[14]=-a[14],d[15]=-a[15],d}function y(a,v,d){const m=d??new i(16);return m[0]=a[0]+v[0],m[1]=a[1]+v[1],m[2]=a[2]+v[2],m[3]=a[3]+v[3],m[4]=a[4]+v[4],m[5]=a[5]+v[5],m[6]=a[6]+v[6],m[7]=a[7]+v[7],m[8]=a[8]+v[8],m[9]=a[9]+v[9],m[10]=a[10]+v[10],m[11]=a[11]+v[11],m[12]=a[12]+v[12],m[13]=a[13]+v[13],m[14]=a[14]+v[14],m[15]=a[15]+v[15],m}function k(a,v,d){const m=d??new i(16);return m[0]=a[0]*v,m[1]=a[1]*v,m[2]=a[2]*v,m[3]=a[3]*v,m[4]=a[4]*v,m[5]=a[5]*v,m[6]=a[6]*v,m[7]=a[7]*v,m[8]=a[8]*v,m[9]=a[9]*v,m[10]=a[10]*v,m[11]=a[11]*v,m[12]=a[12]*v,m[13]=a[13]*v,m[14]=a[14]*v,m[15]=a[15]*v,m}const B=k;function F(a,v){const d=v??new i(16);return d[0]=a[0],d[1]=a[1],d[2]=a[2],d[3]=a[3],d[4]=a[4],d[5]=a[5],d[6]=a[6],d[7]=a[7],d[8]=a[8],d[9]=a[9],d[10]=a[10],d[11]=a[11],d[12]=a[12],d[13]=a[13],d[14]=a[14],d[15]=a[15],d}const z=F;function $(a,v){return Math.abs(a[0]-v[0])<Ne&&Math.abs(a[1]-v[1])<Ne&&Math.abs(a[2]-v[2])<Ne&&Math.abs(a[3]-v[3])<Ne&&Math.abs(a[4]-v[4])<Ne&&Math.abs(a[5]-v[5])<Ne&&Math.abs(a[6]-v[6])<Ne&&Math.abs(a[7]-v[7])<Ne&&Math.abs(a[8]-v[8])<Ne&&Math.abs(a[9]-v[9])<Ne&&Math.abs(a[10]-v[10])<Ne&&Math.abs(a[11]-v[11])<Ne&&Math.abs(a[12]-v[12])<Ne&&Math.abs(a[13]-v[13])<Ne&&Math.abs(a[14]-v[14])<Ne&&Math.abs(a[15]-v[15])<Ne}function q(a,v){return a[0]===v[0]&&a[1]===v[1]&&a[2]===v[2]&&a[3]===v[3]&&a[4]===v[4]&&a[5]===v[5]&&a[6]===v[6]&&a[7]===v[7]&&a[8]===v[8]&&a[9]===v[9]&&a[10]===v[10]&&a[11]===v[11]&&a[12]===v[12]&&a[13]===v[13]&&a[14]===v[14]&&a[15]===v[15]}function H(a){const v=a??new i(16);return v[0]=1,v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=1,v[6]=0,v[7]=0,v[8]=0,v[9]=0,v[10]=1,v[11]=0,v[12]=0,v[13]=0,v[14]=0,v[15]=1,v}function L(a,v){const d=v??new i(16);if(d===a){let Fe;return Fe=a[1],a[1]=a[4],a[4]=Fe,Fe=a[2],a[2]=a[8],a[8]=Fe,Fe=a[3],a[3]=a[12],a[12]=Fe,Fe=a[6],a[6]=a[9],a[9]=Fe,Fe=a[7],a[7]=a[13],a[13]=Fe,Fe=a[11],a[11]=a[14],a[14]=Fe,d}const m=a[0*4+0],c=a[0*4+1],b=a[0*4+2],E=a[0*4+3],S=a[1*4+0],O=a[1*4+1],X=a[1*4+2],W=a[1*4+3],se=a[2*4+0],te=a[2*4+1],ne=a[2*4+2],_e=a[2*4+3],Ce=a[3*4+0],ke=a[3*4+1],xe=a[3*4+2],Ve=a[3*4+3];return d[0]=m,d[1]=S,d[2]=se,d[3]=Ce,d[4]=c,d[5]=O,d[6]=te,d[7]=ke,d[8]=b,d[9]=X,d[10]=ne,d[11]=xe,d[12]=E,d[13]=W,d[14]=_e,d[15]=Ve,d}function V(a,v){const d=v??new i(16),m=a[0*4+0],c=a[0*4+1],b=a[0*4+2],E=a[0*4+3],S=a[1*4+0],O=a[1*4+1],X=a[1*4+2],W=a[1*4+3],se=a[2*4+0],te=a[2*4+1],ne=a[2*4+2],_e=a[2*4+3],Ce=a[3*4+0],ke=a[3*4+1],xe=a[3*4+2],Ve=a[3*4+3],Fe=ne*Ve,Je=xe*_e,ot=X*Ve,Qe=xe*W,st=X*_e,rt=ne*W,je=b*Ve,et=xe*E,Ze=b*_e,dt=ne*E,qe=b*W,$e=X*E,He=se*ke,tt=Ce*te,at=S*ke,bt=Ce*O,lt=S*te,kt=se*O,Pt=m*ke,Dt=Ce*c,ut=m*te,pt=se*c,Ot=m*O,St=S*c,Wt=Fe*O+Qe*te+st*ke-(Je*O+ot*te+rt*ke),Lt=Je*c+je*te+dt*ke-(Fe*c+et*te+Ze*ke),Kt=ot*c+et*O+qe*ke-(Qe*c+je*O+$e*ke),jt=rt*c+Ze*O+$e*te-(st*c+dt*O+qe*te),it=1/(m*Wt+S*Lt+se*Kt+Ce*jt);return d[0]=it*Wt,d[1]=it*Lt,d[2]=it*Kt,d[3]=it*jt,d[4]=it*(Je*S+ot*se+rt*Ce-(Fe*S+Qe*se+st*Ce)),d[5]=it*(Fe*m+et*se+Ze*Ce-(Je*m+je*se+dt*Ce)),d[6]=it*(Qe*m+je*S+$e*Ce-(ot*m+et*S+qe*Ce)),d[7]=it*(st*m+dt*S+qe*se-(rt*m+Ze*S+$e*se)),d[8]=it*(He*W+bt*_e+lt*Ve-(tt*W+at*_e+kt*Ve)),d[9]=it*(tt*E+Pt*_e+pt*Ve-(He*E+Dt*_e+ut*Ve)),d[10]=it*(at*E+Dt*W+Ot*Ve-(bt*E+Pt*W+St*Ve)),d[11]=it*(kt*E+ut*W+St*_e-(lt*E+pt*W+Ot*_e)),d[12]=it*(at*ne+kt*xe+tt*X-(lt*xe+He*X+bt*ne)),d[13]=it*(ut*xe+He*b+Dt*ne-(Pt*ne+pt*xe+tt*b)),d[14]=it*(Pt*X+St*xe+bt*b-(Ot*xe+at*b+Dt*X)),d[15]=it*(Ot*ne+lt*b+pt*X-(ut*X+St*ne+kt*b)),d}function J(a){const v=a[0],d=a[0*4+1],m=a[0*4+2],c=a[0*4+3],b=a[1*4+0],E=a[1*4+1],S=a[1*4+2],O=a[1*4+3],X=a[2*4+0],W=a[2*4+1],se=a[2*4+2],te=a[2*4+3],ne=a[3*4+0],_e=a[3*4+1],Ce=a[3*4+2],ke=a[3*4+3],xe=se*ke,Ve=Ce*te,Fe=S*ke,Je=Ce*O,ot=S*te,Qe=se*O,st=m*ke,rt=Ce*c,je=m*te,et=se*c,Ze=m*O,dt=S*c,qe=xe*E+Je*W+ot*_e-(Ve*E+Fe*W+Qe*_e),$e=Ve*d+st*W+et*_e-(xe*d+rt*W+je*_e),He=Fe*d+rt*E+Ze*_e-(Je*d+st*E+dt*_e),tt=Qe*d+je*E+dt*W-(ot*d+et*E+Ze*W);return v*qe+b*$e+X*He+ne*tt}const G=V;function Y(a,v,d){const m=d??new i(16),c=a[0],b=a[1],E=a[2],S=a[3],O=a[4+0],X=a[4+1],W=a[4+2],se=a[4+3],te=a[8+0],ne=a[8+1],_e=a[8+2],Ce=a[8+3],ke=a[12+0],xe=a[12+1],Ve=a[12+2],Fe=a[12+3],Je=v[0],ot=v[1],Qe=v[2],st=v[3],rt=v[4+0],je=v[4+1],et=v[4+2],Ze=v[4+3],dt=v[8+0],qe=v[8+1],$e=v[8+2],He=v[8+3],tt=v[12+0],at=v[12+1],bt=v[12+2],lt=v[12+3];return m[0]=c*Je+O*ot+te*Qe+ke*st,m[1]=b*Je+X*ot+ne*Qe+xe*st,m[2]=E*Je+W*ot+_e*Qe+Ve*st,m[3]=S*Je+se*ot+Ce*Qe+Fe*st,m[4]=c*rt+O*je+te*et+ke*Ze,m[5]=b*rt+X*je+ne*et+xe*Ze,m[6]=E*rt+W*je+_e*et+Ve*Ze,m[7]=S*rt+se*je+Ce*et+Fe*Ze,m[8]=c*dt+O*qe+te*$e+ke*He,m[9]=b*dt+X*qe+ne*$e+xe*He,m[10]=E*dt+W*qe+_e*$e+Ve*He,m[11]=S*dt+se*qe+Ce*$e+Fe*He,m[12]=c*tt+O*at+te*bt+ke*lt,m[13]=b*tt+X*at+ne*bt+xe*lt,m[14]=E*tt+W*at+_e*bt+Ve*lt,m[15]=S*tt+se*at+Ce*bt+Fe*lt,m}const N=Y;function re(a,v,d){const m=d??H();return a!==m&&(m[0]=a[0],m[1]=a[1],m[2]=a[2],m[3]=a[3],m[4]=a[4],m[5]=a[5],m[6]=a[6],m[7]=a[7],m[8]=a[8],m[9]=a[9],m[10]=a[10],m[11]=a[11]),m[12]=v[0],m[13]=v[1],m[14]=v[2],m[15]=1,m}function ue(a,v){const d=v??s.create();return d[0]=a[12],d[1]=a[13],d[2]=a[14],d}function de(a,v,d){const m=d??s.create(),c=v*4;return m[0]=a[c+0],m[1]=a[c+1],m[2]=a[c+2],m}function ce(a,v,d,m){const c=m===a?m:F(a,m),b=d*4;return c[b+0]=v[0],c[b+1]=v[1],c[b+2]=v[2],c}function we(a,v){const d=v??s.create(),m=a[0],c=a[1],b=a[2],E=a[4],S=a[5],O=a[6],X=a[8],W=a[9],se=a[10];return d[0]=Math.sqrt(m*m+c*c+b*b),d[1]=Math.sqrt(E*E+S*S+O*O),d[2]=Math.sqrt(X*X+W*W+se*se),d}function Se(a,v,d,m,c){const b=c??new i(16),E=Math.tan(Math.PI*.5-.5*a);if(b[0]=E/v,b[1]=0,b[2]=0,b[3]=0,b[4]=0,b[5]=E,b[6]=0,b[7]=0,b[8]=0,b[9]=0,b[11]=-1,b[12]=0,b[13]=0,b[15]=0,Number.isFinite(m)){const S=1/(d-m);b[10]=m*S,b[14]=m*d*S}else b[10]=-1,b[14]=-d;return b}function Me(a,v,d,m=1/0,c){const b=c??new i(16),E=1/Math.tan(a*.5);if(b[0]=E/v,b[1]=0,b[2]=0,b[3]=0,b[4]=0,b[5]=E,b[6]=0,b[7]=0,b[8]=0,b[9]=0,b[11]=-1,b[12]=0,b[13]=0,b[15]=0,m===1/0)b[10]=0,b[14]=d;else{const S=1/(m-d);b[10]=d*S,b[14]=m*d*S}return b}function Ee(a,v,d,m,c,b,E){const S=E??new i(16);return S[0]=2/(v-a),S[1]=0,S[2]=0,S[3]=0,S[4]=0,S[5]=2/(m-d),S[6]=0,S[7]=0,S[8]=0,S[9]=0,S[10]=1/(c-b),S[11]=0,S[12]=(v+a)/(a-v),S[13]=(m+d)/(d-m),S[14]=c/(c-b),S[15]=1,S}function le(a,v,d,m,c,b,E){const S=E??new i(16),O=v-a,X=m-d,W=c-b;return S[0]=2*c/O,S[1]=0,S[2]=0,S[3]=0,S[4]=0,S[5]=2*c/X,S[6]=0,S[7]=0,S[8]=(a+v)/O,S[9]=(m+d)/X,S[10]=b/W,S[11]=-1,S[12]=0,S[13]=0,S[14]=c*b/W,S[15]=0,S}function j(a,v,d,m,c,b=1/0,E){const S=E??new i(16),O=v-a,X=m-d;if(S[0]=2*c/O,S[1]=0,S[2]=0,S[3]=0,S[4]=0,S[5]=2*c/X,S[6]=0,S[7]=0,S[8]=(a+v)/O,S[9]=(m+d)/X,S[11]=-1,S[12]=0,S[13]=0,S[15]=0,b===1/0)S[10]=0,S[14]=c;else{const W=1/(b-c);S[10]=c*W,S[14]=b*c*W}return S}const be=s.create(),me=s.create(),pe=s.create();function he(a,v,d,m){const c=m??new i(16);return s.normalize(s.subtract(v,a,pe),pe),s.normalize(s.cross(d,pe,be),be),s.normalize(s.cross(pe,be,me),me),c[0]=be[0],c[1]=be[1],c[2]=be[2],c[3]=0,c[4]=me[0],c[5]=me[1],c[6]=me[2],c[7]=0,c[8]=pe[0],c[9]=pe[1],c[10]=pe[2],c[11]=0,c[12]=a[0],c[13]=a[1],c[14]=a[2],c[15]=1,c}function ae(a,v,d,m){const c=m??new i(16);return s.normalize(s.subtract(a,v,pe),pe),s.normalize(s.cross(d,pe,be),be),s.normalize(s.cross(pe,be,me),me),c[0]=be[0],c[1]=be[1],c[2]=be[2],c[3]=0,c[4]=me[0],c[5]=me[1],c[6]=me[2],c[7]=0,c[8]=pe[0],c[9]=pe[1],c[10]=pe[2],c[11]=0,c[12]=a[0],c[13]=a[1],c[14]=a[2],c[15]=1,c}function oe(a,v,d,m){const c=m??new i(16);return s.normalize(s.subtract(a,v,pe),pe),s.normalize(s.cross(d,pe,be),be),s.normalize(s.cross(pe,be,me),me),c[0]=be[0],c[1]=me[0],c[2]=pe[0],c[3]=0,c[4]=be[1],c[5]=me[1],c[6]=pe[1],c[7]=0,c[8]=be[2],c[9]=me[2],c[10]=pe[2],c[11]=0,c[12]=-(be[0]*a[0]+be[1]*a[1]+be[2]*a[2]),c[13]=-(me[0]*a[0]+me[1]*a[1]+me[2]*a[2]),c[14]=-(pe[0]*a[0]+pe[1]*a[1]+pe[2]*a[2]),c[15]=1,c}function Le(a,v){const d=v??new i(16);return d[0]=1,d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=1,d[6]=0,d[7]=0,d[8]=0,d[9]=0,d[10]=1,d[11]=0,d[12]=a[0],d[13]=a[1],d[14]=a[2],d[15]=1,d}function Te(a,v,d){const m=d??new i(16),c=v[0],b=v[1],E=v[2],S=a[0],O=a[1],X=a[2],W=a[3],se=a[1*4+0],te=a[1*4+1],ne=a[1*4+2],_e=a[1*4+3],Ce=a[2*4+0],ke=a[2*4+1],xe=a[2*4+2],Ve=a[2*4+3],Fe=a[3*4+0],Je=a[3*4+1],ot=a[3*4+2],Qe=a[3*4+3];return a!==m&&(m[0]=S,m[1]=O,m[2]=X,m[3]=W,m[4]=se,m[5]=te,m[6]=ne,m[7]=_e,m[8]=Ce,m[9]=ke,m[10]=xe,m[11]=Ve),m[12]=S*c+se*b+Ce*E+Fe,m[13]=O*c+te*b+ke*E+Je,m[14]=X*c+ne*b+xe*E+ot,m[15]=W*c+_e*b+Ve*E+Qe,m}function Ie(a,v){const d=v??new i(16),m=Math.cos(a),c=Math.sin(a);return d[0]=1,d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=m,d[6]=c,d[7]=0,d[8]=0,d[9]=-c,d[10]=m,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function ge(a,v,d){const m=d??new i(16),c=a[4],b=a[5],E=a[6],S=a[7],O=a[8],X=a[9],W=a[10],se=a[11],te=Math.cos(v),ne=Math.sin(v);return m[4]=te*c+ne*O,m[5]=te*b+ne*X,m[6]=te*E+ne*W,m[7]=te*S+ne*se,m[8]=te*O-ne*c,m[9]=te*X-ne*b,m[10]=te*W-ne*E,m[11]=te*se-ne*S,a!==m&&(m[0]=a[0],m[1]=a[1],m[2]=a[2],m[3]=a[3],m[12]=a[12],m[13]=a[13],m[14]=a[14],m[15]=a[15]),m}function Ae(a,v){const d=v??new i(16),m=Math.cos(a),c=Math.sin(a);return d[0]=m,d[1]=0,d[2]=-c,d[3]=0,d[4]=0,d[5]=1,d[6]=0,d[7]=0,d[8]=c,d[9]=0,d[10]=m,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function Q(a,v,d){const m=d??new i(16),c=a[0*4+0],b=a[0*4+1],E=a[0*4+2],S=a[0*4+3],O=a[2*4+0],X=a[2*4+1],W=a[2*4+2],se=a[2*4+3],te=Math.cos(v),ne=Math.sin(v);return m[0]=te*c-ne*O,m[1]=te*b-ne*X,m[2]=te*E-ne*W,m[3]=te*S-ne*se,m[8]=te*O+ne*c,m[9]=te*X+ne*b,m[10]=te*W+ne*E,m[11]=te*se+ne*S,a!==m&&(m[4]=a[4],m[5]=a[5],m[6]=a[6],m[7]=a[7],m[12]=a[12],m[13]=a[13],m[14]=a[14],m[15]=a[15]),m}function A(a,v){const d=v??new i(16),m=Math.cos(a),c=Math.sin(a);return d[0]=m,d[1]=c,d[2]=0,d[3]=0,d[4]=-c,d[5]=m,d[6]=0,d[7]=0,d[8]=0,d[9]=0,d[10]=1,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function I(a,v,d){const m=d??new i(16),c=a[0*4+0],b=a[0*4+1],E=a[0*4+2],S=a[0*4+3],O=a[1*4+0],X=a[1*4+1],W=a[1*4+2],se=a[1*4+3],te=Math.cos(v),ne=Math.sin(v);return m[0]=te*c+ne*O,m[1]=te*b+ne*X,m[2]=te*E+ne*W,m[3]=te*S+ne*se,m[4]=te*O-ne*c,m[5]=te*X-ne*b,m[6]=te*W-ne*E,m[7]=te*se-ne*S,a!==m&&(m[8]=a[8],m[9]=a[9],m[10]=a[10],m[11]=a[11],m[12]=a[12],m[13]=a[13],m[14]=a[14],m[15]=a[15]),m}function w(a,v,d){const m=d??new i(16);let c=a[0],b=a[1],E=a[2];const S=Math.sqrt(c*c+b*b+E*E);c/=S,b/=S,E/=S;const O=c*c,X=b*b,W=E*E,se=Math.cos(v),te=Math.sin(v),ne=1-se;return m[0]=O+(1-O)*se,m[1]=c*b*ne+E*te,m[2]=c*E*ne-b*te,m[3]=0,m[4]=c*b*ne-E*te,m[5]=X+(1-X)*se,m[6]=b*E*ne+c*te,m[7]=0,m[8]=c*E*ne+b*te,m[9]=b*E*ne-c*te,m[10]=W+(1-W)*se,m[11]=0,m[12]=0,m[13]=0,m[14]=0,m[15]=1,m}const l=w;function g(a,v,d,m){const c=m??new i(16);let b=v[0],E=v[1],S=v[2];const O=Math.sqrt(b*b+E*E+S*S);b/=O,E/=O,S/=O;const X=b*b,W=E*E,se=S*S,te=Math.cos(d),ne=Math.sin(d),_e=1-te,Ce=X+(1-X)*te,ke=b*E*_e+S*ne,xe=b*S*_e-E*ne,Ve=b*E*_e-S*ne,Fe=W+(1-W)*te,Je=E*S*_e+b*ne,ot=b*S*_e+E*ne,Qe=E*S*_e-b*ne,st=se+(1-se)*te,rt=a[0],je=a[1],et=a[2],Ze=a[3],dt=a[4],qe=a[5],$e=a[6],He=a[7],tt=a[8],at=a[9],bt=a[10],lt=a[11];return c[0]=Ce*rt+ke*dt+xe*tt,c[1]=Ce*je+ke*qe+xe*at,c[2]=Ce*et+ke*$e+xe*bt,c[3]=Ce*Ze+ke*He+xe*lt,c[4]=Ve*rt+Fe*dt+Je*tt,c[5]=Ve*je+Fe*qe+Je*at,c[6]=Ve*et+Fe*$e+Je*bt,c[7]=Ve*Ze+Fe*He+Je*lt,c[8]=ot*rt+Qe*dt+st*tt,c[9]=ot*je+Qe*qe+st*at,c[10]=ot*et+Qe*$e+st*bt,c[11]=ot*Ze+Qe*He+st*lt,a!==c&&(c[12]=a[12],c[13]=a[13],c[14]=a[14],c[15]=a[15]),c}const _=g;function x(a,v){const d=v??new i(16);return d[0]=a[0],d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=a[1],d[6]=0,d[7]=0,d[8]=0,d[9]=0,d[10]=a[2],d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function C(a,v,d){const m=d??new i(16),c=v[0],b=v[1],E=v[2];return m[0]=c*a[0*4+0],m[1]=c*a[0*4+1],m[2]=c*a[0*4+2],m[3]=c*a[0*4+3],m[4]=b*a[1*4+0],m[5]=b*a[1*4+1],m[6]=b*a[1*4+2],m[7]=b*a[1*4+3],m[8]=E*a[2*4+0],m[9]=E*a[2*4+1],m[10]=E*a[2*4+2],m[11]=E*a[2*4+3],a!==m&&(m[12]=a[12],m[13]=a[13],m[14]=a[14],m[15]=a[15]),m}function D(a,v){const d=v??new i(16);return d[0]=a,d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=a,d[6]=0,d[7]=0,d[8]=0,d[9]=0,d[10]=a,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function M(a,v,d){const m=d??new i(16);return m[0]=v*a[0*4+0],m[1]=v*a[0*4+1],m[2]=v*a[0*4+2],m[3]=v*a[0*4+3],m[4]=v*a[1*4+0],m[5]=v*a[1*4+1],m[6]=v*a[1*4+2],m[7]=v*a[1*4+3],m[8]=v*a[2*4+0],m[9]=v*a[2*4+1],m[10]=v*a[2*4+2],m[11]=v*a[2*4+3],a!==m&&(m[12]=a[12],m[13]=a[13],m[14]=a[14],m[15]=a[15]),m}return{add:y,aim:he,axisRotate:g,axisRotation:w,cameraAim:ae,clone:z,copy:F,create:o,determinant:J,equals:q,equalsApproximately:$,fromMat3:u,fromQuat:f,frustum:le,frustumReverseZ:j,getAxis:de,getScaling:we,getTranslation:ue,identity:H,inverse:V,invert:G,lookAt:oe,mul:N,mulScalar:B,multiply:Y,multiplyScalar:k,negate:P,ortho:Ee,perspective:Se,perspectiveReverseZ:Me,rotate:_,rotateX:ge,rotateY:Q,rotateZ:I,rotation:l,rotationX:Ie,rotationY:Ae,rotationZ:A,scale:C,scaling:x,set:p,setAxis:ce,setTranslation:re,translate:Te,translation:Le,transpose:L,uniformScale:M,uniformScaling:D}}const aa=new Map;function Fc(i){let s=aa.get(i);return s||(s=Gc(i),aa.set(i,s)),s}function Oc(i){const s=sr(i);function o(A,I,w,l){const g=new i(4);return A!==void 0&&(g[0]=A,I!==void 0&&(g[1]=I,w!==void 0&&(g[2]=w,l!==void 0&&(g[3]=l)))),g}const p=o;function u(A,I,w,l,g){const _=g??new i(4);return _[0]=A,_[1]=I,_[2]=w,_[3]=l,_}function f(A,I,w){const l=w??new i(4),g=I*.5,_=Math.sin(g);return l[0]=_*A[0],l[1]=_*A[1],l[2]=_*A[2],l[3]=Math.cos(g),l}function P(A,I){const w=I??s.create(3),l=Math.acos(A[3])*2,g=Math.sin(l*.5);return g>Ne?(w[0]=A[0]/g,w[1]=A[1]/g,w[2]=A[2]/g):(w[0]=1,w[1]=0,w[2]=0),{angle:l,axis:w}}function y(A,I){const w=Se(A,I);return Math.acos(2*w*w-1)}function k(A,I,w){const l=w??new i(4),g=A[0],_=A[1],x=A[2],C=A[3],D=I[0],M=I[1],a=I[2],v=I[3];return l[0]=g*v+C*D+_*a-x*M,l[1]=_*v+C*M+x*D-g*a,l[2]=x*v+C*a+g*M-_*D,l[3]=C*v-g*D-_*M-x*a,l}const B=k;function F(A,I,w){const l=w??new i(4),g=I*.5,_=A[0],x=A[1],C=A[2],D=A[3],M=Math.sin(g),a=Math.cos(g);return l[0]=_*a+D*M,l[1]=x*a+C*M,l[2]=C*a-x*M,l[3]=D*a-_*M,l}function z(A,I,w){const l=w??new i(4),g=I*.5,_=A[0],x=A[1],C=A[2],D=A[3],M=Math.sin(g),a=Math.cos(g);return l[0]=_*a-C*M,l[1]=x*a+D*M,l[2]=C*a+_*M,l[3]=D*a-x*M,l}function $(A,I,w){const l=w??new i(4),g=I*.5,_=A[0],x=A[1],C=A[2],D=A[3],M=Math.sin(g),a=Math.cos(g);return l[0]=_*a+x*M,l[1]=x*a-_*M,l[2]=C*a+D*M,l[3]=D*a-C*M,l}function q(A,I,w,l){const g=l??new i(4),_=A[0],x=A[1],C=A[2],D=A[3];let M=I[0],a=I[1],v=I[2],d=I[3],m=_*M+x*a+C*v+D*d;m<0&&(m=-m,M=-M,a=-a,v=-v,d=-d);let c,b;if(1-m>Ne){const E=Math.acos(m),S=Math.sin(E);c=Math.sin((1-w)*E)/S,b=Math.sin(w*E)/S}else c=1-w,b=w;return g[0]=c*_+b*M,g[1]=c*x+b*a,g[2]=c*C+b*v,g[3]=c*D+b*d,g}function H(A,I){const w=I??new i(4),l=A[0],g=A[1],_=A[2],x=A[3],C=l*l+g*g+_*_+x*x,D=C?1/C:0;return w[0]=-l*D,w[1]=-g*D,w[2]=-_*D,w[3]=x*D,w}function L(A,I){const w=I??new i(4);return w[0]=-A[0],w[1]=-A[1],w[2]=-A[2],w[3]=A[3],w}function V(A,I){const w=I??new i(4),l=A[0]+A[5]+A[10];if(l>0){const g=Math.sqrt(l+1);w[3]=.5*g;const _=.5/g;w[0]=(A[6]-A[9])*_,w[1]=(A[8]-A[2])*_,w[2]=(A[1]-A[4])*_}else{let g=0;A[5]>A[0]&&(g=1),A[10]>A[g*4+g]&&(g=2);const _=(g+1)%3,x=(g+2)%3,C=Math.sqrt(A[g*4+g]-A[_*4+_]-A[x*4+x]+1);w[g]=.5*C;const D=.5/C;w[3]=(A[_*4+x]-A[x*4+_])*D,w[_]=(A[_*4+g]+A[g*4+_])*D,w[x]=(A[x*4+g]+A[g*4+x])*D}return w}function J(A,I,w,l,g){const _=g??new i(4),x=A*.5,C=I*.5,D=w*.5,M=Math.sin(x),a=Math.cos(x),v=Math.sin(C),d=Math.cos(C),m=Math.sin(D),c=Math.cos(D);switch(l){case"xyz":_[0]=M*d*c+a*v*m,_[1]=a*v*c-M*d*m,_[2]=a*d*m+M*v*c,_[3]=a*d*c-M*v*m;break;case"xzy":_[0]=M*d*c-a*v*m,_[1]=a*v*c-M*d*m,_[2]=a*d*m+M*v*c,_[3]=a*d*c+M*v*m;break;case"yxz":_[0]=M*d*c+a*v*m,_[1]=a*v*c-M*d*m,_[2]=a*d*m-M*v*c,_[3]=a*d*c+M*v*m;break;case"yzx":_[0]=M*d*c+a*v*m,_[1]=a*v*c+M*d*m,_[2]=a*d*m-M*v*c,_[3]=a*d*c-M*v*m;break;case"zxy":_[0]=M*d*c-a*v*m,_[1]=a*v*c+M*d*m,_[2]=a*d*m+M*v*c,_[3]=a*d*c-M*v*m;break;case"zyx":_[0]=M*d*c-a*v*m,_[1]=a*v*c+M*d*m,_[2]=a*d*m-M*v*c,_[3]=a*d*c+M*v*m;break;default:throw new Error(`Unknown rotation order: ${l}`)}return _}function G(A,I){const w=I??new i(4);return w[0]=A[0],w[1]=A[1],w[2]=A[2],w[3]=A[3],w}const Y=G;function N(A,I,w){const l=w??new i(4);return l[0]=A[0]+I[0],l[1]=A[1]+I[1],l[2]=A[2]+I[2],l[3]=A[3]+I[3],l}function re(A,I,w){const l=w??new i(4);return l[0]=A[0]-I[0],l[1]=A[1]-I[1],l[2]=A[2]-I[2],l[3]=A[3]-I[3],l}const ue=re;function de(A,I,w){const l=w??new i(4);return l[0]=A[0]*I,l[1]=A[1]*I,l[2]=A[2]*I,l[3]=A[3]*I,l}const ce=de;function we(A,I,w){const l=w??new i(4);return l[0]=A[0]/I,l[1]=A[1]/I,l[2]=A[2]/I,l[3]=A[3]/I,l}function Se(A,I){return A[0]*I[0]+A[1]*I[1]+A[2]*I[2]+A[3]*I[3]}function Me(A,I,w,l){const g=l??new i(4);return g[0]=A[0]+w*(I[0]-A[0]),g[1]=A[1]+w*(I[1]-A[1]),g[2]=A[2]+w*(I[2]-A[2]),g[3]=A[3]+w*(I[3]-A[3]),g}function Ee(A){const I=A[0],w=A[1],l=A[2],g=A[3];return Math.sqrt(I*I+w*w+l*l+g*g)}const le=Ee;function j(A){const I=A[0],w=A[1],l=A[2],g=A[3];return I*I+w*w+l*l+g*g}const be=j;function me(A,I){const w=I??new i(4),l=A[0],g=A[1],_=A[2],x=A[3],C=Math.sqrt(l*l+g*g+_*_+x*x);return C>1e-5?(w[0]=l/C,w[1]=g/C,w[2]=_/C,w[3]=x/C):(w[0]=0,w[1]=0,w[2]=0,w[3]=1),w}function pe(A,I){return Math.abs(A[0]-I[0])<Ne&&Math.abs(A[1]-I[1])<Ne&&Math.abs(A[2]-I[2])<Ne&&Math.abs(A[3]-I[3])<Ne}function he(A,I){return A[0]===I[0]&&A[1]===I[1]&&A[2]===I[2]&&A[3]===I[3]}function ae(A){const I=A??new i(4);return I[0]=0,I[1]=0,I[2]=0,I[3]=1,I}const oe=s.create(),Le=s.create(),Te=s.create();function Ie(A,I,w){const l=w??new i(4),g=s.dot(A,I);return g<-.999999?(s.cross(Le,A,oe),s.len(oe)<1e-6&&s.cross(Te,A,oe),s.normalize(oe,oe),f(oe,Math.PI,l),l):g>.999999?(l[0]=0,l[1]=0,l[2]=0,l[3]=1,l):(s.cross(A,I,oe),l[0]=oe[0],l[1]=oe[1],l[2]=oe[2],l[3]=1+g,me(l,l))}const ge=new i(4),Ae=new i(4);function Q(A,I,w,l,g,_){const x=_??new i(4);return q(A,l,g,ge),q(I,w,g,Ae),q(ge,Ae,2*g*(1-g),x),x}return{create:o,fromValues:p,set:u,fromAxisAngle:f,toAxisAngle:P,angle:y,multiply:k,mul:B,rotateX:F,rotateY:z,rotateZ:$,slerp:q,inverse:H,conjugate:L,fromMat:V,fromEuler:J,copy:G,clone:Y,add:N,subtract:re,sub:ue,mulScalar:de,scale:ce,divScalar:we,dot:Se,lerp:Me,length:Ee,len:le,lengthSq:j,lenSq:be,normalize:me,equalsApproximately:pe,equals:he,identity:ae,rotationTo:Ie,sqlerp:Q}}const oa=new Map;function Vc(i){let s=oa.get(i);return s||(s=Oc(i),oa.set(i,s)),s}function $c(i){function s(w,l,g,_){const x=new i(4);return w!==void 0&&(x[0]=w,l!==void 0&&(x[1]=l,g!==void 0&&(x[2]=g,_!==void 0&&(x[3]=_)))),x}const o=s;function p(w,l,g,_,x){const C=x??new i(4);return C[0]=w,C[1]=l,C[2]=g,C[3]=_,C}function u(w,l){const g=l??new i(4);return g[0]=Math.ceil(w[0]),g[1]=Math.ceil(w[1]),g[2]=Math.ceil(w[2]),g[3]=Math.ceil(w[3]),g}function f(w,l){const g=l??new i(4);return g[0]=Math.floor(w[0]),g[1]=Math.floor(w[1]),g[2]=Math.floor(w[2]),g[3]=Math.floor(w[3]),g}function P(w,l){const g=l??new i(4);return g[0]=Math.round(w[0]),g[1]=Math.round(w[1]),g[2]=Math.round(w[2]),g[3]=Math.round(w[3]),g}function y(w,l=0,g=1,_){const x=_??new i(4);return x[0]=Math.min(g,Math.max(l,w[0])),x[1]=Math.min(g,Math.max(l,w[1])),x[2]=Math.min(g,Math.max(l,w[2])),x[3]=Math.min(g,Math.max(l,w[3])),x}function k(w,l,g){const _=g??new i(4);return _[0]=w[0]+l[0],_[1]=w[1]+l[1],_[2]=w[2]+l[2],_[3]=w[3]+l[3],_}function B(w,l,g,_){const x=_??new i(4);return x[0]=w[0]+l[0]*g,x[1]=w[1]+l[1]*g,x[2]=w[2]+l[2]*g,x[3]=w[3]+l[3]*g,x}function F(w,l,g){const _=g??new i(4);return _[0]=w[0]-l[0],_[1]=w[1]-l[1],_[2]=w[2]-l[2],_[3]=w[3]-l[3],_}const z=F;function $(w,l){return Math.abs(w[0]-l[0])<Ne&&Math.abs(w[1]-l[1])<Ne&&Math.abs(w[2]-l[2])<Ne&&Math.abs(w[3]-l[3])<Ne}function q(w,l){return w[0]===l[0]&&w[1]===l[1]&&w[2]===l[2]&&w[3]===l[3]}function H(w,l,g,_){const x=_??new i(4);return x[0]=w[0]+g*(l[0]-w[0]),x[1]=w[1]+g*(l[1]-w[1]),x[2]=w[2]+g*(l[2]-w[2]),x[3]=w[3]+g*(l[3]-w[3]),x}function L(w,l,g,_){const x=_??new i(4);return x[0]=w[0]+g[0]*(l[0]-w[0]),x[1]=w[1]+g[1]*(l[1]-w[1]),x[2]=w[2]+g[2]*(l[2]-w[2]),x[3]=w[3]+g[3]*(l[3]-w[3]),x}function V(w,l,g){const _=g??new i(4);return _[0]=Math.max(w[0],l[0]),_[1]=Math.max(w[1],l[1]),_[2]=Math.max(w[2],l[2]),_[3]=Math.max(w[3],l[3]),_}function J(w,l,g){const _=g??new i(4);return _[0]=Math.min(w[0],l[0]),_[1]=Math.min(w[1],l[1]),_[2]=Math.min(w[2],l[2]),_[3]=Math.min(w[3],l[3]),_}function G(w,l,g){const _=g??new i(4);return _[0]=w[0]*l,_[1]=w[1]*l,_[2]=w[2]*l,_[3]=w[3]*l,_}const Y=G;function N(w,l,g){const _=g??new i(4);return _[0]=w[0]/l,_[1]=w[1]/l,_[2]=w[2]/l,_[3]=w[3]/l,_}function re(w,l){const g=l??new i(4);return g[0]=1/w[0],g[1]=1/w[1],g[2]=1/w[2],g[3]=1/w[3],g}const ue=re;function de(w,l){return w[0]*l[0]+w[1]*l[1]+w[2]*l[2]+w[3]*l[3]}function ce(w){const l=w[0],g=w[1],_=w[2],x=w[3];return Math.sqrt(l*l+g*g+_*_+x*x)}const we=ce;function Se(w){const l=w[0],g=w[1],_=w[2],x=w[3];return l*l+g*g+_*_+x*x}const Me=Se;function Ee(w,l){const g=w[0]-l[0],_=w[1]-l[1],x=w[2]-l[2],C=w[3]-l[3];return Math.sqrt(g*g+_*_+x*x+C*C)}const le=Ee;function j(w,l){const g=w[0]-l[0],_=w[1]-l[1],x=w[2]-l[2],C=w[3]-l[3];return g*g+_*_+x*x+C*C}const be=j;function me(w,l){const g=l??new i(4),_=w[0],x=w[1],C=w[2],D=w[3],M=Math.sqrt(_*_+x*x+C*C+D*D);return M>1e-5?(g[0]=_/M,g[1]=x/M,g[2]=C/M,g[3]=D/M):(g[0]=0,g[1]=0,g[2]=0,g[3]=0),g}function pe(w,l){const g=l??new i(4);return g[0]=-w[0],g[1]=-w[1],g[2]=-w[2],g[3]=-w[3],g}function he(w,l){const g=l??new i(4);return g[0]=w[0],g[1]=w[1],g[2]=w[2],g[3]=w[3],g}const ae=he;function oe(w,l,g){const _=g??new i(4);return _[0]=w[0]*l[0],_[1]=w[1]*l[1],_[2]=w[2]*l[2],_[3]=w[3]*l[3],_}const Le=oe;function Te(w,l,g){const _=g??new i(4);return _[0]=w[0]/l[0],_[1]=w[1]/l[1],_[2]=w[2]/l[2],_[3]=w[3]/l[3],_}const Ie=Te;function ge(w){const l=w??new i(4);return l[0]=0,l[1]=0,l[2]=0,l[3]=0,l}function Ae(w,l,g){const _=g??new i(4),x=w[0],C=w[1],D=w[2],M=w[3];return _[0]=l[0]*x+l[4]*C+l[8]*D+l[12]*M,_[1]=l[1]*x+l[5]*C+l[9]*D+l[13]*M,_[2]=l[2]*x+l[6]*C+l[10]*D+l[14]*M,_[3]=l[3]*x+l[7]*C+l[11]*D+l[15]*M,_}function Q(w,l,g){const _=g??new i(4);return me(w,_),G(_,l,_)}function A(w,l,g){const _=g??new i(4);return ce(w)>l?Q(w,l,_):he(w,_)}function I(w,l,g){const _=g??new i(4);return H(w,l,.5,_)}return{create:s,fromValues:o,set:p,ceil:u,floor:f,round:P,clamp:y,add:k,addScaled:B,subtract:F,sub:z,equalsApproximately:$,equals:q,lerp:H,lerpV:L,max:V,min:J,mulScalar:G,scale:Y,divScalar:N,inverse:re,invert:ue,dot:de,length:ce,len:we,lengthSq:Se,lenSq:Me,distance:Ee,dist:le,distanceSq:j,distSq:be,normalize:me,negate:pe,copy:he,clone:ae,multiply:oe,mul:Le,divide:Te,div:Ie,zero:ge,transformMat4:Ae,setLength:Q,truncate:A,midpoint:I}}const la=new Map;function Nc(i){let s=la.get(i);return s||(s=$c(i),la.set(i,s)),s}function ni(i,s,o,p,u,f){return{mat3:Ic(i),mat4:Fc(s),quat:Vc(o),vec2:Fa(p),vec3:sr(u),vec4:Nc(f)}}const{mat3:Mt,mat4:wt,quat:ft,vec2:ca,vec3:Z,vec4:kd}=ni(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);ni(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);ni(Dc,Array,Array,Array,Array,Array);const qc=(()=>{try{return new URLSearchParams(window.location.search).get("render")==="always"}catch{return!1}})(),Wc=1e3;class Oa{constructor(){T(this,"pos",new Float32Array(3));T(this,"rot",new Float32Array(16));T(this,"fov",NaN);T(this,"w",0);T(this,"h",0);T(this,"extra","");T(this,"requested",!0);T(this,"lastDraw",-1/0);T(this,"frames",0)}request(){this.requested=!0}needFrame(s,o,p,u,f,P=""){let y=qc||this.requested||f||this.frames<3||s-this.lastDraw>=Wc;const k=o.position,B=o.rotation,F=o.getFovY();if(!y)if(p!==this.w||u!==this.h||F!==this.fov||P!==this.extra)y=!0;else{for(let z=0;z<3&&!y;z++)k[z]!==this.pos[z]&&(y=!0);for(let z=0;z<16&&!y;z++)B[z]!==this.rot[z]&&(y=!0)}if(!y)return!1;for(let z=0;z<3;z++)this.pos[z]=k[z];for(let z=0;z<16;z++)this.rot[z]=B[z];return this.fov=F,this.w=p,this.h=u,this.extra=P,this.requested=!1,this.lastDraw=s,this.frames++,!0}idleMs(s){return s-this.lastDraw}}const zr="halloumi.gpuLossReload",Kc=6e4,Ts=(()=>{try{return new URLSearchParams(window.location.search).get("lowmem")==="1"}catch{return!1}})(),jc=/insufficient memory|out ?of ?memory|OutOfMemory|kIOGPUCommandBufferCallbackErrorOutOfMemory/i;let ua=!1;function Vs(i,s){const o=document.createElement("div");Object.assign(o.style,{position:"fixed",inset:"0",display:"flex",flexDirection:"column",gap:"14px",alignItems:"center",justifyContent:"center",zIndex:"10000",color:"#eee",background:"rgba(10,10,10,0.92)",font:"15px system-ui, sans-serif",padding:"24px",textAlign:"center"});const p=document.createElement("div");if(p.textContent=i,o.appendChild(p),s){const u=document.createElement("button");u.textContent="Reload",Object.assign(u.style,{font:"600 14px system-ui, sans-serif",padding:"8px 18px",borderRadius:"6px",border:"1px solid #f0b060",background:"#222",color:"#f0b060",cursor:"pointer"}),u.onclick=()=>window.location.reload(),o.appendChild(u)}document.body.appendChild(o)}function Va(i,s){if(ua)return;ua=!0,console.error(`[gpu-loss] ${i} lost: ${s}`);let o=0;try{o=parseInt(sessionStorage.getItem(zr)??"0",10)||0}catch{}const p=Date.now(),u=jc.test(s);if(u&&!Ts){try{sessionStorage.setItem(zr,String(p))}catch{}const f=new URL(window.location.href);f.searchParams.set("lowmem","1"),Vs("The GPU ran out of memory — reloading the viewer in low-memory mode…",!1),setTimeout(()=>window.location.replace(f.toString()),400)}else if(p-o>Kc){try{sessionStorage.setItem(zr,String(p))}catch{}Vs("The GPU device was lost — reloading the viewer…",!1),setTimeout(()=>window.location.reload(),400)}else Vs(u?'The GPU ran out of memory again, even in low-memory mode. This Mac shares its RAM with the GPU: close other tabs / apps (or end Chrome’s "GPU Process" in its Task Manager) and reload.':`The GPU device was lost again (${i}: ${s}). Reload to try once more.`,!0)}function Hc(i){i.lost.then(o=>{o.reason!=="destroyed"&&Va("webgpu",`${o.reason}: ${o.message}`)});let s=0;i.addEventListener("uncapturederror",o=>{var p;s++<5&&console.error("[webgpu] uncaptured error:",((p=o==null?void 0:o.error)==null?void 0:p.message)??o)})}function da(i){i.addEventListener("webglcontextlost",s=>{s.preventDefault(),!$a&&Va("webgl","webglcontextlost")},!1)}let $a=!1;function Ir(i){window.addEventListener("pagehide",()=>{$a=!0;try{i()}catch(s){console.warn("[gpu-loss] release on pagehide failed:",s)}}),window.addEventListener("pageshow",s=>{s.persisted&&location.reload()})}const pa=document.querySelector("#log");let Rt=null,Fn=null;function Na(){if(Rt)return Rt;Rt=document.createElement("div"),Rt.className="ply-spinner-overlay";const i=document.createElement("div");return i.className="ply-spinner",Rt.appendChild(i),Fn=document.createElement("div"),Fn.className="ply-spinner-label",Rt.appendChild(Fn),Rt.style.display="none",document.body.appendChild(Rt),Rt}function rs(i){Na(),Fn&&i&&(Fn.textContent=i),Rt&&(Rt.style.opacity="1",Rt.style.display="flex")}function Ct(i){Na(),Fn&&(Fn.textContent=i)}function Jt(){if(!Rt)return;const i=Rt;i.style.opacity="0",setTimeout(()=>{i.style.opacity==="0"&&(i.style.display="none")},220)}function qa(i,s){if(!pa)return;const o=document.createElement("p");o.innerText=i,s&&Object.assign(o.style,s),pa.appendChild(o)}async function mt(i){console.log(i),qa(i)}async function Yc(i){console.error(i),qa(i,{color:"red",backgroundColor:"rgba(255, 0, 0, 0.1)"})}let Wa;function Ka(){Wa=performance.now()}function ha(i){const s=performance.now()-Wa;mt(`⏱️ ${i} Time: ${s.toFixed(0)} ms`)}function Zc(i,s){if(!i)throw new Error(s&&(typeof s=="string"?s:s()))}function ns(i){return i+3&-4}const Xc=2,Jc=3,Qc=5,eu=6,Es=7,Ws=8,Cs=9,Ms=10,tu=11,nu=12,su=13,ru=14;function On(i){const s=new TextDecoder("ascii"),o=s.decode(new Uint8Array(i,0,4));if(o!=="NAT2")throw new Error(`NAT2 bad magic: '${o}'`);if(i.byteLength<4+64)throw new Error(`NAT2 truncated (${i.byteLength} bytes < 4 + 64)`);const p=new DataView(i),u=4,f=p.getUint32(u+0,!0),P=p.getUint32(u+4,!0),y=p.getUint32(u+8,!0),k=p.getUint32(u+12,!0),B=p.getUint32(u+16,!0),F=p.getFloat32(u+20,!0),z=p.getUint32(u+24,!0),$=p.getUint32(u+28,!0),q=$===su||$===ru,H=q?$-2:$,L=p.getFloat32(u+32,!0),V=p.getFloat32(u+36,!0),J=p.getFloat32(u+40,!0),G=p.getUint32(u+44,!0),Y=p.getFloat32(u+48,!0),N=p.getFloat32(u+52,!0),re=p.getUint32(u+56,!0),ue=p.getUint32(u+60,!0),de=H===Cs||H===Ms,ce=de?ue:0,we=de?0:ue&255,Se=de?0:ue>>8&255,Me=we>0?we:1;if(H===Qc||H===eu)throw new Error(`NAT2: paired-RVQ format=${H} is retired 2026-07-23; re-bake with typeD (--bc7-codebook)`);const Ee=H===Cs||H===Ms;if(H!==Xc&&H!==Jc&&H!==tu&&H!==nu&&H!==Es&&H!==Ws&&!Ee)throw new Error(`NAT2: Halloumi-WS supports BC7 (2), ASTC 4x4 (3), BC7-codebook (7), ASTC-codebook (8), probe-BC7 (9) or probe-ASTC (10); got format=${H}`);if(f%4!==0||G%4!==0)throw new Error(`NAT2 block-format dims must be 4-aligned: width=${f} layer_h=${G}`);let le=u+64;const j=(re+1)*4,be=new Uint32Array(i.slice(le,le+j));le+=j;let me;if(Me>1){const Q=(Me+1)*4;if(le+Q>i.byteLength)throw new Error(`NAT2 truncated at column_cuts (need ${Q} from ${le})`);me=new Uint32Array(i.slice(le,le+Q)),le+=Q}else me=new Uint32Array([0,f]);let pe=0;for(let Q=0;Q<Me;Q++){const A=me[Q+1]-me[Q];A>pe&&(pe=A)}if(Ee){const Q=ce&2?21:ce&1?7:6,A=B*Q*4;if(le+A>i.byteLength)throw new Error(`NAT2 truncated at probes: need ${A} more bytes from offset ${le}, have ${i.byteLength-le}`);const I=new Float32Array(i.slice(le,le+A));le+=A;const w=Math.max(1,ce>>8&255),l=[];let g=0;for(let M=0,a=f,v=G;M<w;M++,a>>=1,v>>=1){const d=Math.max(1,a>>2)*Math.max(1,v>>2)*16;l.push(d),g+=d}const _=i.byteLength-le;if(_<g)throw new Error(`NAT2 probe atlas truncated: need ${g} bytes for ${f}x${G} x${w} mips, have ${_}`);const x=[];let C=le;for(const M of l)x.push(new Uint8Array(i.slice(C,C+M))),C+=M;const D=x[0];return{width:f,height:P,channels:y,kernel_type:k,num_rects:B,uv_extent:F,sb_number:z,format:H,sh_bias:L,res_bias:V,compact_mult:J,layer_h:G,atlas_scale:Y,atlas_offset:N,n_layers:re,n_cols:Me,layer_cuts:be,column_cuts:me,slice_width:pe,rects_expanded:I,atlas_bytes:D,mip_bytes:x,probe_mode:ce&2?3:ce&1?2:1}}const he=B*4*4;if(le+he>i.byteLength)throw new Error(`NAT2 truncated at rects: need ${he} more bytes from offset ${le}, have ${i.byteLength-le}`);const ae=new Float32Array(i.slice(le,le+he));le+=he;const oe=new Float32Array(B*5);for(let Q=0;Q<B;Q++){const A=ae[Q*4+0],I=ae[Q*4+1],w=ae[Q*4+2],l=ae[Q*4+3];let g=0;for(let M=1;M<=re&&be[M]<=I;M++)g=M;let _=0;for(let M=1;M<=Me&&me[M]<=A;M++)_=M;const x=I-be[g],C=A-me[_],D=_*re+g;oe[Q*5+0]=C,oe[Q*5+1]=x,oe[Q*5+2]=w,oe[Q*5+3]=l,oe[Q*5+4]=D}let Le,Te;const Ie=Me,Ae=f/4*16;if(H===Es||H===Ws||q){if(le+24>i.byteLength)throw new Error("NAT2 truncated at typeD sub-header");const Q=H===Es||q?"BCCB":"ACCB",A=s.decode(new Uint8Array(i,le,4));if(A!==Q)throw new Error(`NAT2 typeD bad sub-magic: expected '${Q}' got '${A}'`);const I=p.getUint32(le+4,!0),w=p.getUint32(le+8,!0),l=p.getUint32(le+12,!0),g=p.getUint32(le+16,!0),_=p.getUint32(le+20,!0);if(I!==1)throw new Error(`NAT2 BCCB unsupported version ${I}`);if(l!==P/4||g!==f/4||_!==l*g)throw new Error(`NAT2 BCCB block grid mismatch: header ${f}×${P}, sub-header ${g}×${l} (${_} blocks)`);le+=24;const x=w*16;if(le+x>i.byteLength)throw new Error(`NAT2 BCCB truncated at codebook (need ${x}, have ${i.byteLength-le})`);const C=new Uint8Array(i,le,x);le+=x;const D=_*2;if(le+D>i.byteLength)throw new Error(`NAT2 BCCB truncated at indices (need ${D}, have ${i.byteLength-le})`);const M=new Uint16Array(i.slice(le,le+D));le+=D;const a=new Uint8Array(_*16);for(let v=0;v<_;v++){const d=M[v]*16;a.set(C.subarray(d,d+16),v*16)}if(Le=a,Se>1){Te=[a];for(let v=1;v<Se;v++){if(le+24>i.byteLength)throw new Error(`NAT2 truncated at mip ${v} sub-header`);const d=s.decode(new Uint8Array(i,le,4));if(d!==Q)throw new Error(`NAT2 mip ${v}: bad sub-magic '${d}'`);const m=p.getUint32(le+8,!0),c=p.getUint32(le+16,!0),b=p.getUint32(le+20,!0);if(c!==v)throw new Error(`NAT2 mip section order: expected level ${v}, got ${c}`);le+=24;let E=0;for(let W=0;W<Ie;W++)for(let se=0;se<re;se++){const te=Wr(v,me[W+1]-me[W],be[se+1]-be[se],pe,G);E+=(te.cw>>2)*(te.ch>>2)}if(E!==b)throw new Error(`NAT2 mip ${v}: ${b} blocks, loader expects ${E}`);if(le+m*16+b*2>i.byteLength)throw new Error(`NAT2 truncated in mip ${v}`);const S=new Uint8Array(i,le,m*16);le+=m*16;const O=new Uint16Array(i.slice(le,le+b*2));le+=b*2;const X=new Uint8Array(b*16);for(let W=0;W<b;W++){const se=O[W]*16;X.set(S.subarray(se,se+16),W*16)}Te.push(X)}}}else{let Q=0;for(let A=0;A<re;A++){const I=be[A+1]-be[A];if(I%4!==0)throw new Error(`NAT2 BC7 layer ${A} rows ${I} not 4-aligned`);Q+=I/4*Ae}if(le+Q>i.byteLength)throw new Error(`NAT2 truncated at atlas payload: need ${Q} more bytes from offset ${le}, have ${i.byteLength-le}`);if(Le=new Uint8Array(i.slice(le,le+Q)),le+=Q,Se>1&&!de){Te=[Le];for(let A=1;A<Se;A++){let I=0;for(let w=0;w<Me;w++)for(let l=0;l<re;l++){const g=Wr(A,me[w+1]-me[w],be[l+1]-be[l],pe,G);I+=g.cw/4*(g.ch/4)*16}if(le+I>i.byteLength)throw new Error(`NAT2 raw mip ${A}: truncated (need ${I} B)`);Te.push(new Uint8Array(i.slice(le,le+I))),le+=I}}}return{width:f,height:P,channels:y,kernel_type:k,num_rects:B,uv_extent:F,sb_number:z,format:H,sh_bias:L,res_bias:V,compact_mult:J,layer_h:G,atlas_scale:Y,atlas_offset:N,n_layers:re,n_cols:Me,layer_cuts:be,column_cuts:me,slice_width:pe,rects_expanded:oe,atlas_bytes:Le,...Te?{mip_bytes:Te}:{}}}function Wr(i,s,o,p,u){const f=y=>y+3>>2<<2,P=1<<i;return{cw:Math.min(f(Math.max(1,p>>i)),f(Math.ceil(s/P))),ch:Math.min(f(Math.max(1,u>>i)),f(Math.ceil(o/P)))}}const iu=32;async function Kr(i,s,o){if(s.format===5||s.format===6)throw new Error(`paired-RVQ format=${s.format} is retired; re-bake with typeD (--bc7-codebook)`);let p,u,f,P,y;if(s.format===2||s.format===Es||s.format===Cs){if(!i.features.has("texture-compression-bc"))return mt(`⚠️  bundle is BC7 (format=${s.format}) but texture-compression-bc not supported — atlas disabled`),null;y=s.format===Cs?"BC7 atlas (proberes: shared probe texture)":s.format===Es?"BC7 atlas (typeD: codebook gather)":"BC7 atlas",{texture:p,view:u,sampler:f,samplerAniso:P}=await jr(i,s,"bc7-rgba-unorm",y)}else if(s.format===3||s.format===Ws||s.format===Ms){if(!i.features.has("texture-compression-astc"))return mt(`⚠️  bundle is ASTC 4x4 (format=${s.format}) but texture-compression-astc not supported — atlas disabled`),null;y=s.format===Ms?"ASTC 4x4 atlas (proberes: shared probe texture)":s.format===Ws?"ASTC 4x4 atlas (typeD-ASTC: codebook gather)":"ASTC 4x4 atlas",{texture:p,view:u,sampler:f,samplerAniso:P}=await jr(i,s,"astc-4x4-unorm",y)}else return mt(`⚠️  unsupported atlas format ${s.format} — atlas disabled`),null;const{rects_expanded:k}=s,B=i.createBuffer({label:"atlas rects (5-stride)",size:ns(k.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});i.queue.writeBuffer(B,0,k);const F=i.createBuffer({label:"tex_params",size:48,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return qs(i,F,s,o),{texture:p,view:u,sampler:f,samplerAniso:P,rectsBuffer:B,texParamsBuffer:F,meta:s}}async function au(i,s,o){if(s.format!==11&&s.format!==12)return mt(`⚠️  ?slope= file has format ${s.format}, expected 11 (BC5) or 12 (P)`),null;if(!i.features.has("texture-compression-bc"))return mt("⚠️  slope sidecar needs texture-compression-bc — disabled"),null;if(o&&(o.width!==s.width||o.layer_h!==s.layer_h||o.n_layers!==s.n_layers||o.n_cols!==s.n_cols||o.num_rects!==s.num_rects))return mt(`⚠️  slope sidecar layout ${s.width}x${s.layer_h}x${s.n_layers} does not match the atlas ${o.width}x${o.layer_h}x${o.n_layers} — disabled`),null;const p=s.atlas_bytes.byteLength/1048576,{view:u}=await jr(i,s,s.format===11?"bc5-rg-unorm":"bc7-rgba-unorm",s.format===11?"slope BC5":"slope P (BC7 alpha)");return{view:u,kind:s.format===11?"bc5":"p",scaleU:s.atlas_scale,offU:s.atlas_offset,scaleV:s.sh_bias,offV:s.res_bias,mb:p}}const fa=48*1048576;async function jr(i,s,o,p){let u=0;const f=async()=>{i.queue.submit([]),await i.queue.onSubmittedWorkDone(),u=0},P=async Ee=>{u+=Ee,u>=fa&&await f()},{width:y,layer_h:k,n_layers:B,n_cols:F,layer_cuts:z,column_cuts:$,slice_width:q,atlas_bytes:H}=s,V=y/4*16,J=i.limits.maxTextureDimension2D;if(k>J||q>J)throw new Error(`⚠️  atlas slice dims ${q}x${k} exceed maxTextureDimension2D=${J}. Re-bake with smaller LAYER_H or pack with column-aware atlas widths.`);const G=F*B;if(G>i.limits.maxTextureArrayLayers)throw new Error(`⚠️  ${F} cols × ${B} layers = ${G} slices > maxTextureArrayLayers=${i.limits.maxTextureArrayLayers}.`);const Y=s.mip_bytes??[H],N=Ts?Y.slice(0,1):Y,re=N.length;Ts&&Y.length>1&&console.log(`[atlas] lowmem: skipping ${Y.length-1} mip level(s)`);const ue=i.createTexture({label:p,size:{width:q,height:k,depthOrArrayLayers:G},mipLevelCount:re,sampleCount:1,dimension:"2d",format:o,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});for(let Ee=0;Ee<F;Ee++){const le=$[Ee]/4,j=($[Ee+1]-$[Ee])/4;for(let be=0;be<B;be++){const me=z[be]/4,pe=(z[be+1]-z[be])/4,he=Ee*B+be,ae=me*V+le*16;i.queue.writeTexture({texture:ue,mipLevel:0,origin:{x:0,y:0,z:he},aspect:"all"},H,{offset:ae,bytesPerRow:V,rowsPerImage:pe},{width:j*4,height:pe*4,depthOrArrayLayers:1}),await P(j*pe*16)}}const de=s.format===Cs||s.format===Ms;for(let Ee=1;Ee<re&&!de;Ee++){let le=0;for(let j=0;j<F;j++)for(let be=0;be<B;be++){const{cw:me,ch:pe}=Wr(Ee,$[j+1]-$[j],z[be+1]-z[be],q,k);i.queue.writeTexture({texture:ue,mipLevel:Ee,origin:{x:0,y:0,z:j*B+be},aspect:"all"},N[Ee],{offset:le,bytesPerRow:(me>>2)*16,rowsPerImage:pe>>2},{width:me,height:pe,depthOrArrayLayers:1}),le+=(me>>2)*(pe>>2)*16,await P((me>>2)*(pe>>2)*16)}}for(let Ee=1;Ee<re&&de;Ee++){const le=Math.max(1,q>>Ee),j=Math.max(1,k>>Ee);i.queue.writeTexture({texture:ue,mipLevel:Ee,origin:{x:0,y:0,z:0},aspect:"all"},N[Ee],{offset:0,bytesPerRow:Math.max(1,le>>2)*16,rowsPerImage:Math.max(1,j>>2)},{width:le,height:j,depthOrArrayLayers:1}),await P(N[Ee].byteLength)}re>1&&console.log(`[atlas] ${re} mip levels uploaded (${de?"trilinear":"per-surfel integer level"})`),await f();const ce=Y.reduce((Ee,le)=>Ee+le.byteLength,0)/1048576;s.atlas_bytes=new Uint8Array(0),s.mip_bytes&&(s.mip_bytes=Y.map(()=>new Uint8Array(0))),console.log(`[atlas] ${p}: ${ce.toFixed(0)} MB uploaded in ≤${fa/1048576} MB chunks; CPU copy released`);const we=ue.createView({label:`${p} view`,dimension:"2d-array"}),Se=i.createSampler({label:`${p} sampler`,addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge",magFilter:"linear",minFilter:"linear",mipmapFilter:re>1&&de?"linear":"nearest"}),Me=i.createSampler({label:`${p} sampler (aniso 16x)`,addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge",magFilter:"linear",minFilter:"linear",mipmapFilter:"linear",maxAnisotropy:16});return{texture:ue,view:we,sampler:Se,samplerAniso:Me}}function qs(i,s,o,p,u=1){var B;const f=new ArrayBuffer(32),P=new Uint32Array(f),y=new Float32Array(f);P[0]=p?1:0,y[1]=o.atlas_scale,y[2]=o.atlas_offset,y[3]=o.res_bias,P[4]=o.probe_mode?o.probe_mode|0:0,P[5]=o.width|0;const k=(((B=o.mip_bytes)==null?void 0:B.length)??1)>1;P[6]=u===2?2:k&&u!==0?1:0,y[7]=o.uv_extent,i.queue.writeBuffer(s,0,f)}async function Ks(i,s){mt(`loading ply file from File... : ${i.name}`),rs("downloading PLY...");const o=await i.arrayBuffer();try{return await Ha(o,s)}finally{Jt()}}async function ou(i,s){mt(`loading ply file from URL... : ${i}`),rs("downloading PLY...");try{Ka();const o=new URL(i,self.location.href).href;return await Ha({url:o},s)}finally{Jt()}}function ja(i){return new Promise((s,o)=>{const p=new Worker(new URL(""+new URL("ply-worker-70df72a6.js",import.meta.url).href,self.location),{type:"module"});p.onmessage=u=>{const f=u.data;if((f==null?void 0:f.type)==="error"){Yc(`PLY worker error: ${f.message??"unknown error"}`),p.terminate(),o(new Error(f.message??"Worker error"));return}else if((f==null?void 0:f.type)==="download_progress"){const P=f.totalBytes,y=f.loadedBytes/(1024*1024),k=P?P/(1024*1024):void 0,B=(f.speedBps??0)/(1024*1024),F=P?Math.min(99,Math.floor(f.loadedBytes/P*100)):void 0,z=k?`total ${k.toFixed(1)} MB`:"total -- MB",$=k&&F!==void 0?`${y.toFixed(1)} MB downloaded (${F}%)`:`${y.toFixed(1)} MB downloaded`,q=`${B.toFixed(2)} MB/s`;Ct(`downloading PLY ...
${z}, ${$}
${q}`);return}else if((f==null?void 0:f.type)==="fetched"){mt(`💾 Fetched (${f.byteLength} bytes)`),ha("Download"),Ct("parsing PLY..."),Ka();return}else if((f==null?void 0:f.type)==="parse_progress"){const P=f.total??0,y=f.read??0,k=P>0?Math.floor(y/P*100):0;Ct(`parsing PLY ...
${y}/${P} surfels (${k}%)`);return}else(f==null?void 0:f.type)==="done"&&(p.terminate(),ha("Parse"),s(f))},p.onerror=u=>{p.terminate(),o(u)},i instanceof ArrayBuffer?(Ct("parsing PLY..."),p.postMessage({type:"start",plyBuffer:i},[i])):p.postMessage({type:"start_url",url:i.url})})}async function _a(i){var o,p,u,f,P,y,k,B,F,z,$,q;const s=await ja(await i.arrayBuffer());return{num_points:s.num_points,K:s.K,feature_mode:s.feature_mode??0,sh_bias:s.sh_bias,kernel_type:s.kernel_type,surfel_data:new Float32Array(s.surfelBuffer),sv_params:new Float32Array(s.svParamsBuffer),bbox:s.bbox??{min:[-1,-1,-1],max:[1,1,1]},centroid:s.centroid??[((((p=(o=s.bbox)==null?void 0:o.min)==null?void 0:p[0])??-1)+(((f=(u=s.bbox)==null?void 0:u.max)==null?void 0:f[0])??1))/2,((((y=(P=s.bbox)==null?void 0:P.min)==null?void 0:y[1])??-1)+(((B=(k=s.bbox)==null?void 0:k.max)==null?void 0:B[1])??1))/2,((((z=(F=s.bbox)==null?void 0:F.min)==null?void 0:z[2])??-1)+(((q=($=s.bbox)==null?void 0:$.max)==null?void 0:q[2])??1))/2]}}async function Ha(i,s){var H,L,V,J,G,Y,N,re,ue,de,ce,we;const o=await ja(i),p=o.num_points,u=o.K,f=o.feature_mode??0,P=o.sh_bias,y=o.kernel_type,k=o.surfelBuffer,B=o.svParamsBuffer,F=f===2?"NASG":f===1?"SB":"SV";mt(`🪐 Total surfels: ${p}, mode=${F}, K=${u}, sh_bias=${P}, kernel_type=${y}`);const z=s.createBuffer({label:"surfel input buffer",size:ns(p*iu),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});s.queue.writeBuffer(z,0,k);const $=B.byteLength>0?B.byteLength:16,q=s.createBuffer({label:`color_params buffer (${F})`,size:ns($),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});return B.byteLength>0&&s.queue.writeBuffer(q,0,B),{num_points:p,K:u,feature_mode:f,sh_bias:P,kernel_type:y,surfel_buffer:z,surfel_data:new Float32Array(k),sv_params_buffer:q,bbox:o.bbox??{min:[-1,-1,-1],max:[1,1,1]},centroid:o.centroid??[((((L=(H=o.bbox)==null?void 0:H.min)==null?void 0:L[0])??-1)+(((J=(V=o.bbox)==null?void 0:V.max)==null?void 0:J[0])??1))/2,((((Y=(G=o.bbox)==null?void 0:G.min)==null?void 0:Y[1])??-1)+(((re=(N=o.bbox)==null?void 0:N.max)==null?void 0:re[1])??1))/2,((((de=(ue=o.bbox)==null?void 0:ue.min)==null?void 0:de[2])??-1)+(((we=(ce=o.bbox)==null?void 0:ce.max)==null?void 0:we[2])??1))/2]}}const js="halloumi-bundles-v1",ma=8,va="x-halloumi-cached-at",Ya="x-halloumi-etag",rr="x-halloumi-length";function lu(i){try{const s=new URL(i,window.location.href);return s.hash="",s.toString()}catch{return i}}function Za(){try{const i=new URLSearchParams(window.location.search);return{nocache:i.get("nocache")==="1",clearcache:i.get("clearcache")==="1",keepcache:i.get("keepcache")==="1"}}catch{return{nocache:!1,clearcache:!1,keepcache:!1}}}const ba="halloumi-bundles-session";function cu(){try{return sessionStorage.getItem(ba)?!1:(sessionStorage.setItem(ba,String(Date.now())),!0)}catch{return!1}}async function si(){if(typeof caches>"u")return null;try{return await caches.open(js)}catch{return null}}let ga=!1;function uu(){var i;ga||!((i=navigator.storage)!=null&&i.persist)||(ga=!0,navigator.storage.persist().then(s=>console.log(`[cache] persistent storage ${s?"granted":"not granted"}`)).catch(()=>{}))}let $s=null;function du(){return $s||($s=(async()=>{const i=Za();if(i.clearcache)try{await caches.delete(js),console.log("[cache] cleared (?clearcache=1)")}catch{}else if(!i.keepcache&&cu())try{const s=await si(),o=s?(await s.keys()).length:0;o>0&&(await caches.delete(js),console.log(`[cache] new tab: dropped ${o} file(s) left by a closed tab (?keepcache=1 to keep)`))}catch{}Hs()})(),$s)}async function wa(){const i=await si();if(!i)return{files:0,bytes:0};let s=0;const o=await i.keys();for(const p of o){const u=await i.match(p);s+=parseInt((u==null?void 0:u.headers.get(rr))??"0",10)||0}return{files:o.length,bytes:s}}async function pu(){try{await caches.delete(js)}catch{}Hs()}const Hr=new Set;function Hs(){for(const i of Hr)try{i()}catch{}}function hu(i){return Hr.add(i),()=>Hr.delete(i)}function Xa(i){const s=i.addButton({title:"🗑 Clear cache",hidden:!0});let o=!1;const p=f=>f===1?"":"s",u=async()=>{const{files:f,bytes:P}=await wa();s.hidden=f===0,f>0&&(s.title=`🗑 Clear cache (${f} file${p(f)}, ${xa(P)})`)};s.on("click",async()=>{if(o)return;const{files:f,bytes:P}=await wa();if(f===0){u();return}const y=`Delete ${f} cached bundle file${p(f)} (${xa(P)}) from this device?

The current scene stays loaded; the next page load will download it again.`;if(confirm(y)){o=!0,s.title="🗑 Clearing…";try{await pu()}finally{o=!1}await u(),console.log("[cache] cleared by user")}}),hu(()=>void u()),u()}function xa(i){return i>=1024*1048576?`${(i/(1024*1048576)).toFixed(2)} GB`:`${(i/1048576).toFixed(0)} MB`}function fu(i){return new Promise(s=>setTimeout(s,i))}function _u(){return typeof document>"u"||document.visibilityState!=="hidden"?Promise.resolve():new Promise(i=>{const s=()=>{document.visibilityState!=="hidden"&&(document.removeEventListener("visibilitychange",s),i())};document.addEventListener("visibilitychange",s)})}async function mu(i,s){var $;const o=[];let p=0,u,f=null,P=null,y=performance.now(),k=0,B=null;for(let q=0;q<ma;q++){q>0&&(document.visibilityState==="hidden"?await _u():await fu(Math.min(8e3,1e3*2**(q-1))));try{const H={};p>0&&(H.Range=`bytes=${p}-`,f?H["If-Range"]=f:P&&(H["If-Range"]=P));const L=await fetch(i,{headers:H,cache:"no-store"});if(L.status===416&&u!==void 0&&p>=u)break;if(!L.ok)throw new Error(`fetch failed: ${L.status} ${L.statusText}`);if(p>0&&L.status!==206&&(o.length=0,p=0,k=0),p===0){f=L.headers.get("etag"),P=L.headers.get("last-modified");const J=L.headers.get("content-length");u=J&&parseInt(J,10)||void 0}else{const J=L.headers.get("content-range"),G=J&&/\/(\d+)$/.exec(J);G&&(u=parseInt(G[1],10))}const V=($=L.body)==null?void 0:$.getReader();if(V)for(;;){const{done:J,value:G}=await V.read();if(J)break;o.push(G),p+=G.byteLength;const Y=performance.now();Y-y>=150&&s&&(s(p,u,(p-k)/((Y-y)/1e3),"network"),y=Y,k=p)}else{const J=await L.arrayBuffer();o.push(new Uint8Array(J)),p+=J.byteLength}if(u!==void 0&&p<u)throw new Error(`short read: ${p} of ${u} bytes`);B=null;break}catch(H){B=H,console.warn(`[cache] download attempt ${q+1}/${ma} failed at ${(p/2**20).toFixed(1)} MB:`,H),s&&s(p,u,0,"network")}}if(B)throw B;const F=new Uint8Array(p);let z=0;for(const q of o)F.set(q,z),z+=q.byteLength;return s&&s(p,u??p,0,"network"),{buf:F.buffer,etag:f,lastModified:P}}async function vu(i,s,o){let p=!0;const u=()=>new Response(p?(p=!1,o.buf):o.buf.slice(0),{headers:{"content-type":"application/octet-stream","content-length":String(o.buf.byteLength),[rr]:String(o.buf.byteLength),[va]:String(Date.now()),[Ya]:o.etag??"",...o.lastModified?{"last-modified":o.lastModified}:{}}});for(let f=0;f<4;f++)try{return await i.put(s,u()),Hs(),!0}catch(P){const y=await i.keys();if(y.length===0)return console.warn("[cache] not cached:",P),!1;const k=[];for(const F of y){const z=await i.match(F);k.push({k:F,t:parseInt((z==null?void 0:z.headers.get(va))??"0",10)||0})}k.sort((F,z)=>F.t-z.t);const B=k[0].k;await i.delete(B),Hs(),console.warn(`[cache] quota: evicted ${B.url}`)}return!1}function bu(i,s,o,p){const u=new AbortController,f=setTimeout(()=>u.abort(),15e3);fetch(s,{headers:{Range:"bytes=0-0"},cache:"no-store",signal:u.signal}).then(async P=>{var H,L;if(!P.ok)return;(H=P.body)==null||H.cancel().catch(()=>{});const y=P.headers.get("etag"),k=P.headers.get("content-range"),B=P.status===206?((L=/\/(\d+)$/.exec(k??""))==null?void 0:L[1])??null:P.headers.get("content-length"),F=o.headers.get(Ya)||null,z=o.headers.get(rr),$=B!==null&&z!==null&&parseInt(B,10)!==parseInt(z,10);($||!!(y&&F)&&y!==F)&&(await i.delete(s),console.info(`[cache] ${s} changed on the server (${$?"size":"etag"}); evicted — reload to fetch the new version`),p==null||p())}).catch(()=>{}).finally(()=>clearTimeout(f))}async function Ja(i,s,o={}){await du();const{nocache:p}=Za(),u=lu(i),f=p?null:await si();if(f)try{const y=await f.match(u);if(y){const k=parseInt(y.headers.get(rr)??y.headers.get("content-length")??"0",10)||void 0;s&&s(0,k,0,"cache");const B=await y.arrayBuffer();return s&&s(B.byteLength,B.byteLength,0,"cache"),console.log(`[cache] hit ${(B.byteLength/2**20).toFixed(1)} MB ${u}`),bu(f,u,y,o.onStale),B}}catch(y){console.warn("[cache] lookup failed:",y)}const P=await mu(i,s);return f&&(uu(),vu(f,u,P).then(y=>{y&&console.log(`[cache] stored ${(P.buf.byteLength/2**20).toFixed(1)} MB ${u}`)}).catch(y=>console.warn("[cache] store failed:",y))),P.buf}const Ys="BITYMI01",gu=0,wu=1,xu=2,yu=3,Pu=4,Su=5;function ri(i){const s=new Uint8Array(i),o=new TextDecoder().decode(s.subarray(0,8));if(o!==Ys)throw new Error(`Not a BITYMI bundle (bad magic '${o}')`);const p=new DataView(i),u=p.getUint32(8,!0),f=12,P=20;let y=null,k=null,B=null;for(let F=0;F<u;F++){const z=f+F*P,$=p.getUint32(z+0,!0),q=Number(p.getBigUint64(z+4,!0)),H=Number(p.getBigUint64(z+12,!0)),L=s.slice(q,q+H).buffer;$===gu||$===wu||$===Su?y=L:$===xu?k=L:($===yu||$===Pu)&&(B=L)}if(y===null)throw new Error("BITYMI bundle has no point cloud chunk");return{pcBuffer:y,camerasBuffer:k,atlasBuffer:B}}async function ss(i,s){const o=await Ja(i,s);return o.byteLength>=8&&new TextDecoder().decode(new Uint8Array(o,0,8))===Ys?{bundle:ri(o),rawPly:null}:{bundle:null,rawPly:o}}var Eu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Yr={exports:{}};/*! Tweakpane 3.1.10 (c) 2016 cocopon, licensed under the MIT license. */(function(i,s){(function(o,p){p(s)})(Eu,function(o){class p{constructor(e){const[t,r]=e.split("-"),h=t.split(".");this.major=parseInt(h[0],10),this.minor=parseInt(h[1],10),this.patch=parseInt(h[2],10),this.prerelease=r??null}toString(){const e=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[e,this.prerelease].join("-"):e}}class u{constructor(e){this.controller_=e}get element(){return this.controller_.view.element}get disabled(){return this.controller_.viewProps.get("disabled")}set disabled(e){this.controller_.viewProps.set("disabled",e)}get hidden(){return this.controller_.viewProps.get("hidden")}set hidden(e){this.controller_.viewProps.set("hidden",e)}dispose(){this.controller_.viewProps.set("disposed",!0)}}class f{constructor(e){this.target=e}}class P extends f{constructor(e,t,r,h){super(e),this.value=t,this.presetKey=r,this.last=h??!0}}class y extends f{constructor(e,t,r){super(e),this.value=t,this.presetKey=r}}class k extends f{constructor(e,t){super(e),this.expanded=t}}class B extends f{constructor(e,t){super(e),this.index=t}}function F(n){return n}function z(n){return n==null}function $(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0}function q(n,e){let t=n;do{const r=Object.getOwnPropertyDescriptor(t,e);if(r&&(r.set!==void 0||r.writable===!0))return!0;t=Object.getPrototypeOf(t)}while(t!==null);return!1}const H={alreadydisposed:()=>"View has been already disposed",invalidparams:n=>`Invalid parameters for '${n.name}'`,nomatchingcontroller:n=>`No matching controller for '${n.key}'`,nomatchingview:n=>`No matching view for '${JSON.stringify(n.params)}'`,notbindable:()=>"Value is not bindable",propertynotfound:n=>`Property '${n.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class L{static alreadyDisposed(){return new L({type:"alreadydisposed"})}static notBindable(){return new L({type:"notbindable"})}static propertyNotFound(e){return new L({type:"propertynotfound",context:{name:e}})}static shouldNeverHappen(){return new L({type:"shouldneverhappen"})}constructor(e){var t;this.message=(t=H[e.type](e.context))!==null&&t!==void 0?t:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=e.type}}class V{constructor(e,t,r){this.obj_=e,this.key_=t,this.presetKey_=r??t}static isBindable(e){return!(e===null||typeof e!="object"&&typeof e!="function")}get key(){return this.key_}get presetKey(){return this.presetKey_}read(){return this.obj_[this.key_]}write(e){this.obj_[this.key_]=e}writeProperty(e,t){const r=this.read();if(!V.isBindable(r))throw L.notBindable();if(!(e in r))throw L.propertyNotFound(e);r[e]=t}}class J extends u{get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get title(){var e;return(e=this.controller_.valueController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.valueController.props.set("title",e)}on(e,t){const r=t.bind(this);return this.controller_.valueController.emitter.on(e,()=>{r(new f(this))}),this}}class G{constructor(){this.observers_={}}on(e,t){let r=this.observers_[e];return r||(r=this.observers_[e]=[]),r.push({handler:t}),this}off(e,t){const r=this.observers_[e];return r&&(this.observers_[e]=r.filter(h=>h.handler!==t)),this}emit(e,t){const r=this.observers_[e];r&&r.forEach(h=>{h.handler(t)})}}const Y="tp";function N(n){return(t,r)=>[Y,"-",n,"v",t?`_${t}`:"",r?`-${r}`:""].join("")}function re(n,e){return t=>e(n(t))}function ue(n){return n.rawValue}function de(n,e){n.emitter.on("change",re(ue,e)),e(n.rawValue)}function ce(n,e,t){de(n.value(e),t)}function we(n,e,t){t?n.classList.add(e):n.classList.remove(e)}function Se(n,e){return t=>{we(n,e,t)}}function Me(n,e){de(n,t=>{e.textContent=t??""})}const Ee=N("btn");class le{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Ee()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("button");r.classList.add(Ee("b")),t.viewProps.bindDisabled(r),this.element.appendChild(r),this.buttonElement=r;const h=e.createElement("div");h.classList.add(Ee("t")),Me(t.props.value("title"),h),this.buttonElement.appendChild(h)}}class j{constructor(e,t){this.emitter=new G,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new le(e,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class be{constructor(e,t){var r;this.constraint_=t==null?void 0:t.constraint,this.equals_=(r=t==null?void 0:t.equals)!==null&&r!==void 0?r:(h,U)=>h===U,this.emitter=new G,this.rawValue_=e}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const r=t??{forceEmit:!1,last:!0},h=this.constraint_?this.constraint_.constrain(e):e,U=this.rawValue_;this.equals_(U,h)&&!r.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=h,this.emitter.emit("change",{options:r,previousRawValue:U,rawValue:h,sender:this}))}}class me{constructor(e){this.emitter=new G,this.value_=e}get rawValue(){return this.value_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const r=t??{forceEmit:!1,last:!0},h=this.value_;h===e&&!r.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=e,this.emitter.emit("change",{options:r,previousRawValue:h,rawValue:this.value_,sender:this}))}}function pe(n,e){const t=e==null?void 0:e.constraint,r=e==null?void 0:e.equals;return!t&&!r?new me(n):new be(n,e)}class he{constructor(e){this.emitter=new G,this.valMap_=e;for(const t in this.valMap_)this.valMap_[t].emitter.on("change",()=>{this.emitter.emit("change",{key:t,sender:this})})}static createCore(e){return Object.keys(e).reduce((r,h)=>Object.assign(r,{[h]:pe(e[h])}),{})}static fromObject(e){const t=this.createCore(e);return new he(t)}get(e){return this.valMap_[e].rawValue}set(e,t){this.valMap_[e].rawValue=t}value(e){return this.valMap_[e]}}function ae(n,e){const r=Object.keys(e).reduce((h,U)=>{if(h===void 0)return;const K=e[U],fe=K(n[U]);return fe.succeeded?Object.assign(Object.assign({},h),{[U]:fe.value}):void 0},{});return r}function oe(n,e){return n.reduce((t,r)=>{if(t===void 0)return;const h=e(r);if(!(!h.succeeded||h.value===void 0))return[...t,h.value]},[])}function Le(n){return n===null?!1:typeof n=="object"}function Te(n){return e=>t=>{if(!e&&t===void 0)return{succeeded:!1,value:void 0};if(e&&t===void 0)return{succeeded:!0,value:void 0};const r=n(t);return r!==void 0?{succeeded:!0,value:r}:{succeeded:!1,value:void 0}}}function Ie(n){return{custom:e=>Te(e)(n),boolean:Te(e=>typeof e=="boolean"?e:void 0)(n),number:Te(e=>typeof e=="number"?e:void 0)(n),string:Te(e=>typeof e=="string"?e:void 0)(n),function:Te(e=>typeof e=="function"?e:void 0)(n),constant:e=>Te(t=>t===e?e:void 0)(n),raw:Te(e=>e)(n),object:e=>Te(t=>{if(Le(t))return ae(t,e)})(n),array:e=>Te(t=>{if(Array.isArray(t))return oe(t,e)})(n)}}const ge={optional:Ie(!0),required:Ie(!1)};function Ae(n,e){const t=ge.required.object(e)(n);return t.succeeded?t.value:void 0}function Q(n){console.warn([`Missing '${n.key}' of ${n.target} in ${n.place}.`,"Please rebuild plugins with the latest core package."].join(" "))}function A(n){return n&&n.parentElement&&n.parentElement.removeChild(n),null}class I{constructor(e){this.value_=e}static create(e){return[new I(e),(t,r)=>{e.setRawValue(t,r)}]}get emitter(){return this.value_.emitter}get rawValue(){return this.value_.rawValue}}const w=N("");function l(n,e){return Se(n,w(void 0,e))}class g extends he{constructor(e){var t;super(e),this.onDisabledChange_=this.onDisabledChange_.bind(this),this.onParentChange_=this.onParentChange_.bind(this),this.onParentGlobalDisabledChange_=this.onParentGlobalDisabledChange_.bind(this),[this.globalDisabled_,this.setGlobalDisabled_]=I.create(pe(this.getGlobalDisabled_())),this.value("disabled").emitter.on("change",this.onDisabledChange_),this.value("parent").emitter.on("change",this.onParentChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_)}static create(e){var t,r,h;const U=e??{};return new g(he.createCore({disabled:(t=U.disabled)!==null&&t!==void 0?t:!1,disposed:!1,hidden:(r=U.hidden)!==null&&r!==void 0?r:!1,parent:(h=U.parent)!==null&&h!==void 0?h:null}))}get globalDisabled(){return this.globalDisabled_}bindClassModifiers(e){de(this.globalDisabled_,l(e,"disabled")),ce(this,"hidden",l(e,"hidden"))}bindDisabled(e){de(this.globalDisabled_,t=>{e.disabled=t})}bindTabIndex(e){de(this.globalDisabled_,t=>{e.tabIndex=t?-1:0})}handleDispose(e){this.value("disposed").emitter.on("change",t=>{t&&e()})}getGlobalDisabled_(){const e=this.get("parent");return(e?e.globalDisabled.rawValue:!1)||this.get("disabled")}updateGlobalDisabled_(){this.setGlobalDisabled_(this.getGlobalDisabled_())}onDisabledChange_(){this.updateGlobalDisabled_()}onParentGlobalDisabledChange_(){this.updateGlobalDisabled_()}onParentChange_(e){var t;const r=e.previousRawValue;r==null||r.globalDisabled.emitter.off("change",this.onParentGlobalDisabledChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_),this.updateGlobalDisabled_()}}function _(){return["veryfirst","first","last","verylast"]}const x=N(""),C={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class D{constructor(e){this.parent_=null,this.blade=e.blade,this.view=e.view,this.viewProps=e.viewProps;const t=this.view.element;this.blade.value("positions").emitter.on("change",()=>{_().forEach(r=>{t.classList.remove(x(void 0,C[r]))}),this.blade.get("positions").forEach(r=>{t.classList.add(x(void 0,C[r]))})}),this.viewProps.handleDispose(()=>{A(t)})}get parent(){return this.parent_}set parent(e){if(this.parent_=e,!("parent"in this.viewProps.valMap_)){Q({key:"parent",target:g.name,place:"BladeController.parent"});return}this.viewProps.set("parent",this.parent_?this.parent_.viewProps:null)}}const M="http://www.w3.org/2000/svg";function a(n){n.offsetHeight}function v(n,e){const t=n.style.transition;n.style.transition="none",e(),n.style.transition=t}function d(n){return n.ontouchstart!==void 0}function m(){return globalThis}function c(){return m().document}function b(n){const e=n.ownerDocument.defaultView;return e&&"document"in e?n.getContext("2d",{willReadFrequently:!0}):null}const E={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function S(n,e){const t=n.createElementNS(M,"svg");return t.innerHTML=E[e],t}function O(n,e,t){n.insertBefore(e,n.children[t])}function X(n){n.parentElement&&n.parentElement.removeChild(n)}function W(n){for(;n.children.length>0;)n.removeChild(n.children[0])}function se(n){for(;n.childNodes.length>0;)n.removeChild(n.childNodes[0])}function te(n){return n.relatedTarget?n.relatedTarget:"explicitOriginalTarget"in n?n.explicitOriginalTarget:null}const ne=N("lbl");function _e(n,e){const t=n.createDocumentFragment();return e.split(`
`).map(h=>n.createTextNode(h)).forEach((h,U)=>{U>0&&t.appendChild(n.createElement("br")),t.appendChild(h)}),t}class Ce{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(ne()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("div");r.classList.add(ne("l")),ce(t.props,"label",U=>{z(U)?this.element.classList.add(ne(void 0,"nol")):(this.element.classList.remove(ne(void 0,"nol")),se(r),r.appendChild(_e(e,U)))}),this.element.appendChild(r),this.labelElement=r;const h=e.createElement("div");h.classList.add(ne("v")),this.element.appendChild(h),this.valueElement=h}}class ke extends D{constructor(e,t){const r=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{view:new Ce(e,{props:t.props,viewProps:r}),viewProps:r})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}const xe={id:"button",type:"blade",accept(n){const e=ge,t=Ae(n,{title:e.required.string,view:e.required.constant("button"),label:e.optional.string});return t?{params:t}:null},controller(n){return new ke(n.document,{blade:n.blade,props:he.fromObject({label:n.params.label}),valueController:new j(n.document,{props:he.fromObject({title:n.params.title}),viewProps:n.viewProps})})},api(n){return!(n.controller instanceof ke)||!(n.controller.valueController instanceof j)?null:new J(n.controller)}};class Ve extends D{constructor(e){super(e),this.value=e.value}}function Fe(){return new he({positions:pe([],{equals:$})})}class Je extends he{constructor(e){super(e)}static create(e){const t={completed:!0,expanded:e,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},r=he.createCore(t);return new Je(r)}get styleExpanded(){var e;return(e=this.get("temporaryExpanded"))!==null&&e!==void 0?e:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const e=this.get("expandedHeight");return this.get("shouldFixHeight")&&!z(e)?`${e}px`:"auto"}bindExpandedClass(e,t){const r=()=>{this.styleExpanded?e.classList.add(t):e.classList.remove(t)};ce(this,"expanded",r),ce(this,"temporaryExpanded",r)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function ot(n,e){let t=0;return v(e,()=>{n.set("expandedHeight",null),n.set("temporaryExpanded",!0),a(e),t=e.clientHeight,n.set("temporaryExpanded",null),a(e)}),t}function Qe(n,e){e.style.height=n.styleHeight}function st(n,e){n.value("expanded").emitter.on("beforechange",()=>{if(n.set("completed",!1),z(n.get("expandedHeight"))){const t=ot(n,e);t>0&&n.set("expandedHeight",t)}n.set("shouldFixHeight",!0),a(e)}),n.emitter.on("change",()=>{Qe(n,e)}),Qe(n,e),e.addEventListener("transitionend",t=>{t.propertyName==="height"&&n.cleanUpTransition()})}class rt extends u{constructor(e,t){super(e),this.rackApi_=t}}function je(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"button"}))}function et(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"folder"}))}function Ze(n,e){const t=e??{};return n.addBlade(Object.assign(Object.assign({},t),{view:"separator"}))}function dt(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"tab"}))}class qe{constructor(e){this.emitter=new G,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=e}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(e){for(const t of this.allItems())if(e(t))return t;return null}includes(e){return this.cache_.has(e)}add(e,t){if(this.includes(e))throw L.shouldNeverHappen();const r=t!==void 0?t:this.items_.length;this.items_.splice(r,0,e),this.cache_.add(e);const h=this.extract_(e);h&&(h.emitter.on("add",this.onSubListAdd_),h.emitter.on("remove",this.onSubListRemove_),h.allItems().forEach(U=>{this.cache_.add(U)})),this.emitter.emit("add",{index:r,item:e,root:this,target:this})}remove(e){const t=this.items_.indexOf(e);if(t<0)return;this.items_.splice(t,1),this.cache_.delete(e);const r=this.extract_(e);r&&(r.emitter.off("add",this.onSubListAdd_),r.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:t,item:e,root:this,target:this})}onSubListAdd_(e){this.cache_.add(e.item),this.emitter.emit("add",{index:e.index,item:e.item,root:this,target:e.target})}onSubListRemove_(e){this.cache_.delete(e.item),this.emitter.emit("remove",{index:e.index,item:e.item,root:this,target:e.target})}}class $e extends u{constructor(e){super(e),this.onBindingChange_=this.onBindingChange_.bind(this),this.emitter_=new G,this.controller_.binding.emitter.on("change",this.onBindingChange_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const r=t.bind(this);return this.emitter_.on(e,h=>{r(h.event)}),this}refresh(){this.controller_.binding.read()}onBindingChange_(e){const t=e.sender.target.read();this.emitter_.emit("change",{event:new P(this,t,this.controller_.binding.target.presetKey,e.options.last)})}}class He extends ke{constructor(e,t){super(e,t),this.binding=t.binding}}class tt extends u{constructor(e){super(e),this.onBindingUpdate_=this.onBindingUpdate_.bind(this),this.emitter_=new G,this.controller_.binding.emitter.on("update",this.onBindingUpdate_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const r=t.bind(this);return this.emitter_.on(e,h=>{r(h.event)}),this}refresh(){this.controller_.binding.read()}onBindingUpdate_(e){const t=e.sender.target.read();this.emitter_.emit("update",{event:new y(this,t,this.controller_.binding.target.presetKey)})}}class at extends ke{constructor(e,t){super(e,t),this.binding=t.binding,this.viewProps.bindDisabled(this.binding.ticker),this.viewProps.handleDispose(()=>{this.binding.dispose()})}}function bt(n){return n instanceof Pt?n.apiSet_:n instanceof rt?n.rackApi_.apiSet_:null}function lt(n,e){const t=n.find(r=>r.controller_===e);if(!t)throw L.shouldNeverHappen();return t}function kt(n,e,t){if(!V.isBindable(n))throw L.notBindable();return new V(n,e,t)}class Pt extends u{constructor(e,t){super(e),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.onRackInputChange_=this.onRackInputChange_.bind(this),this.onRackMonitorUpdate_=this.onRackMonitorUpdate_.bind(this),this.emitter_=new G,this.apiSet_=new qe(bt),this.pool_=t;const r=this.controller_.rack;r.emitter.on("add",this.onRackAdd_),r.emitter.on("remove",this.onRackRemove_),r.emitter.on("inputchange",this.onRackInputChange_),r.emitter.on("monitorupdate",this.onRackMonitorUpdate_),r.children.forEach(h=>{this.setUpApi_(h)})}get children(){return this.controller_.rack.children.map(e=>lt(this.apiSet_,e))}addInput(e,t,r){const h=r??{},U=this.controller_.view.element.ownerDocument,K=this.pool_.createInput(U,kt(e,t,h.presetKey),h),fe=new $e(K);return this.add(fe,h.index)}addMonitor(e,t,r){const h=r??{},U=this.controller_.view.element.ownerDocument,K=this.pool_.createMonitor(U,kt(e,t),h),fe=new tt(K);return this.add(fe,h.index)}addFolder(e){return et(this,e)}addButton(e){return je(this,e)}addSeparator(e){return Ze(this,e)}addTab(e){return dt(this,e)}add(e,t){this.controller_.rack.add(e.controller_,t);const r=this.apiSet_.find(h=>h.controller_===e.controller_);return r&&this.apiSet_.remove(r),this.apiSet_.add(e),e}remove(e){this.controller_.rack.remove(e.controller_)}addBlade(e){const t=this.controller_.view.element.ownerDocument,r=this.pool_.createBlade(t,e),h=this.pool_.createBladeApi(r);return this.add(h,e.index)}on(e,t){const r=t.bind(this);return this.emitter_.on(e,h=>{r(h.event)}),this}setUpApi_(e){this.apiSet_.find(r=>r.controller_===e)||this.apiSet_.add(this.pool_.createBladeApi(e))}onRackAdd_(e){this.setUpApi_(e.bladeController)}onRackRemove_(e){if(e.isRoot){const t=lt(this.apiSet_,e.bladeController);this.apiSet_.remove(t)}}onRackInputChange_(e){const t=e.bladeController;if(t instanceof He){const r=lt(this.apiSet_,t),h=t.binding;this.emitter_.emit("change",{event:new P(r,h.target.read(),h.target.presetKey,e.options.last)})}else if(t instanceof Ve){const r=lt(this.apiSet_,t);this.emitter_.emit("change",{event:new P(r,t.value.rawValue,void 0,e.options.last)})}}onRackMonitorUpdate_(e){if(!(e.bladeController instanceof at))throw L.shouldNeverHappen();const t=lt(this.apiSet_,e.bladeController),r=e.bladeController.binding;this.emitter_.emit("update",{event:new y(t,r.target.read(),r.target.presetKey)})}}class Dt extends rt{constructor(e,t){super(e,new Pt(e.rackController,t)),this.emitter_=new G,this.controller_.foldable.value("expanded").emitter.on("change",r=>{this.emitter_.emit("fold",{event:new k(this,r.sender.rawValue)})}),this.rackApi_.on("change",r=>{this.emitter_.emit("change",{event:r})}),this.rackApi_.on("update",r=>{this.emitter_.emit("update",{event:r})})}get expanded(){return this.controller_.foldable.get("expanded")}set expanded(e){this.controller_.foldable.set("expanded",e)}get title(){return this.controller_.props.get("title")}set title(e){this.controller_.props.set("title",e)}get children(){return this.rackApi_.children}addInput(e,t,r){return this.rackApi_.addInput(e,t,r)}addMonitor(e,t,r){return this.rackApi_.addMonitor(e,t,r)}addFolder(e){return this.rackApi_.addFolder(e)}addButton(e){return this.rackApi_.addButton(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){return this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addBlade(e){return this.rackApi_.addBlade(e)}on(e,t){const r=t.bind(this);return this.emitter_.on(e,h=>{r(h.event)}),this}}class ut extends D{constructor(e){super({blade:e.blade,view:e.view,viewProps:e.rackController.viewProps}),this.rackController=e.rackController}}class pt{constructor(e,t){const r=N(t.viewName);this.element=e.createElement("div"),this.element.classList.add(r()),t.viewProps.bindClassModifiers(this.element)}}function Ot(n,e){for(let t=0;t<n.length;t++){const r=n[t];if(r instanceof He&&r.binding===e)return r}return null}function St(n,e){for(let t=0;t<n.length;t++){const r=n[t];if(r instanceof at&&r.binding===e)return r}return null}function Wt(n,e){for(let t=0;t<n.length;t++){const r=n[t];if(r instanceof Ve&&r.value===e)return r}return null}function Lt(n){return n instanceof it?n.rack:n instanceof ut?n.rackController.rack:null}function Kt(n){const e=Lt(n);return e?e.bcSet_:null}class jt{constructor(e){var t,r;this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildInputChange_=this.onChildInputChange_.bind(this),this.onChildMonitorUpdate_=this.onChildMonitorUpdate_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onDescendantLayout_=this.onDescendantLayout_.bind(this),this.onDescendantInputChange_=this.onDescendantInputChange_.bind(this),this.onDescendantMonitorUpdate_=this.onDescendantMonitorUpdate_.bind(this),this.emitter=new G,this.blade_=(t=e.blade)!==null&&t!==void 0?t:null,(r=this.blade_)===null||r===void 0||r.value("positions").emitter.on("change",this.onBladePositionsChange_),this.viewProps=e.viewProps,this.bcSet_=new qe(Kt),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(e,t){var r;(r=e.parent)===null||r===void 0||r.remove(e),q(e,"parent")?e.parent=this:(e.parent_=this,Q({key:"parent",target:"BladeController",place:"BladeRack.add"})),this.bcSet_.add(e,t)}remove(e){q(e,"parent")?e.parent=null:(e.parent_=null,Q({key:"parent",target:"BladeController",place:"BladeRack.remove"})),this.bcSet_.remove(e)}find(e){return this.bcSet_.allItems().filter(t=>t instanceof e)}onSetAdd_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("add",{bladeController:e.item,index:e.index,isRoot:t,sender:this}),!t)return;const r=e.item;if(r.viewProps.emitter.on("change",this.onChildViewPropsChange_),r.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),r.viewProps.handleDispose(this.onChildDispose_),r instanceof He)r.binding.emitter.on("change",this.onChildInputChange_);else if(r instanceof at)r.binding.emitter.on("update",this.onChildMonitorUpdate_);else if(r instanceof Ve)r.value.emitter.on("change",this.onChildValueChange_);else{const h=Lt(r);if(h){const U=h.emitter;U.on("layout",this.onDescendantLayout_),U.on("inputchange",this.onDescendantInputChange_),U.on("monitorupdate",this.onDescendantMonitorUpdate_)}}}onSetRemove_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("remove",{bladeController:e.item,isRoot:t,sender:this}),!t)return;const r=e.item;if(r instanceof He)r.binding.emitter.off("change",this.onChildInputChange_);else if(r instanceof at)r.binding.emitter.off("update",this.onChildMonitorUpdate_);else if(r instanceof Ve)r.value.emitter.off("change",this.onChildValueChange_);else{const h=Lt(r);if(h){const U=h.emitter;U.off("layout",this.onDescendantLayout_),U.off("inputchange",this.onDescendantInputChange_),U.off("monitorupdate",this.onDescendantMonitorUpdate_)}}}updatePositions_(){const e=this.bcSet_.items.filter(h=>!h.viewProps.get("hidden")),t=e[0],r=e[e.length-1];this.bcSet_.items.forEach(h=>{const U=[];h===t&&(U.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&U.push("veryfirst")),h===r&&(U.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&U.push("verylast")),h.blade.set("positions",U)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(t=>t.viewProps.get("disposed")).forEach(t=>{this.bcSet_.remove(t)})}onChildInputChange_(e){const t=Ot(this.find(He),e.sender);if(!t)throw L.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onChildMonitorUpdate_(e){const t=St(this.find(at),e.sender);if(!t)throw L.alreadyDisposed();this.emitter.emit("monitorupdate",{bladeController:t,sender:this})}onChildValueChange_(e){const t=Wt(this.find(Ve),e.sender);if(!t)throw L.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onDescendantLayout_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onDescendantInputChange_(e){this.emitter.emit("inputchange",{bladeController:e.bladeController,options:e.options,sender:this})}onDescendantMonitorUpdate_(e){this.emitter.emit("monitorupdate",{bladeController:e.bladeController,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class it extends D{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new pt(e,{viewName:"brk",viewProps:t.viewProps})})),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const r=new jt({blade:t.root?void 0:t.blade,viewProps:t.viewProps});r.emitter.on("add",this.onRackAdd_),r.emitter.on("remove",this.onRackRemove_),this.rack=r,this.viewProps.handleDispose(()=>{for(let h=this.rack.children.length-1;h>=0;h--)this.rack.children[h].viewProps.set("disposed",!0)})}onRackAdd_(e){e.isRoot&&O(this.view.element,e.bladeController.view.element,e.index)}onRackRemove_(e){e.isRoot&&X(e.bladeController.view.element)}}const Vt=N("cnt");class Bt{constructor(e,t){var r;this.className_=N((r=t.viewName)!==null&&r!==void 0?r:"fld"),this.element=e.createElement("div"),this.element.classList.add(this.className_(),Vt()),t.viewProps.bindClassModifiers(this.element),this.foldable_=t.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),ce(this.foldable_,"completed",Se(this.element,this.className_(void 0,"cpl")));const h=e.createElement("button");h.classList.add(this.className_("b")),ce(t.props,"title",Ge=>{z(Ge)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),t.viewProps.bindDisabled(h),this.element.appendChild(h),this.buttonElement=h;const U=e.createElement("div");U.classList.add(this.className_("i")),this.element.appendChild(U);const K=e.createElement("div");K.classList.add(this.className_("t")),Me(t.props.value("title"),K),this.buttonElement.appendChild(K),this.titleElement=K;const fe=e.createElement("div");fe.classList.add(this.className_("m")),this.buttonElement.appendChild(fe);const ze=t.containerElement;ze.classList.add(this.className_("c")),this.element.appendChild(ze),this.containerElement=ze}}class $t extends ut{constructor(e,t){var r;const h=Je.create((r=t.expanded)!==null&&r!==void 0?r:!0),U=new it(e,{blade:t.blade,root:t.root,viewProps:t.viewProps});super(Object.assign(Object.assign({},t),{rackController:U,view:new Bt(e,{containerElement:U.view.element,foldable:h,props:t.props,viewName:t.root?"rot":void 0,viewProps:t.viewProps})})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=t.props,this.foldable=h,st(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const Sn={id:"folder",type:"blade",accept(n){const e=ge,t=Ae(n,{title:e.required.string,view:e.required.constant("folder"),expanded:e.optional.boolean});return t?{params:t}:null},controller(n){return new $t(n.document,{blade:n.blade,expanded:n.params.expanded,props:he.fromObject({title:n.params.title}),viewProps:n.viewProps})},api(n){return n.controller instanceof $t?new Dt(n.controller,n.pool):null}};class zt extends Ve{constructor(e,t){const r=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{value:t.valueController.value,view:new Ce(e,{props:t.props,viewProps:r}),viewProps:r})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}class Qt extends u{}const Ht=N("spr");class is{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Ht()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("hr");r.classList.add(Ht("r")),this.element.appendChild(r)}}class Ut extends D{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new is(e,{viewProps:t.viewProps})}))}}const Vn={id:"separator",type:"blade",accept(n){const t=Ae(n,{view:ge.required.constant("separator")});return t?{params:t}:null},controller(n){return new Ut(n.document,{blade:n.blade,viewProps:n.viewProps})},api(n){return n.controller instanceof Ut?new Qt(n.controller):null}},En=N("tbi");class as{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(En()),t.viewProps.bindClassModifiers(this.element),ce(t.props,"selected",U=>{U?this.element.classList.add(En(void 0,"sel")):this.element.classList.remove(En(void 0,"sel"))});const r=e.createElement("button");r.classList.add(En("b")),t.viewProps.bindDisabled(r),this.element.appendChild(r),this.buttonElement=r;const h=e.createElement("div");h.classList.add(En("t")),Me(t.props.value("title"),h),this.buttonElement.appendChild(h),this.titleElement=h}}class $n{constructor(e,t){this.emitter=new G,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new as(e,{props:t.props,viewProps:t.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class un{constructor(e,t){this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new $n(e,{props:t.itemProps,viewProps:g.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.cc_=new it(e,{blade:Fe(),viewProps:g.create()}),this.props=t.props,ce(this.props,"selected",r=>{this.itemController.props.set("selected",r),this.contentController.viewProps.set("hidden",!r)})}get itemController(){return this.ic_}get contentController(){return this.cc_}onItemClick_(){this.props.set("selected",!0)}}class en{constructor(e,t){this.controller_=e,this.rackApi_=t}get title(){var e;return(e=this.controller_.itemController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.itemController.props.set("title",e)}get selected(){return this.controller_.props.get("selected")}set selected(e){this.controller_.props.set("selected",e)}get children(){return this.rackApi_.children}addButton(e){return this.rackApi_.addButton(e)}addFolder(e){return this.rackApi_.addFolder(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addInput(e,t,r){return this.rackApi_.addInput(e,t,r)}addMonitor(e,t,r){return this.rackApi_.addMonitor(e,t,r)}addBlade(e){return this.rackApi_.addBlade(e)}}class Bs extends rt{constructor(e,t){super(e,new Pt(e.rackController,t)),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.onSelect_=this.onSelect_.bind(this),this.emitter_=new G,this.pageApiMap_=new Map,this.rackApi_.on("change",r=>{this.emitter_.emit("change",{event:r})}),this.rackApi_.on("update",r=>{this.emitter_.emit("update",{event:r})}),this.controller_.tab.selectedIndex.emitter.on("change",this.onSelect_),this.controller_.pageSet.emitter.on("add",this.onPageAdd_),this.controller_.pageSet.emitter.on("remove",this.onPageRemove_),this.controller_.pageSet.items.forEach(r=>{this.setUpPageApi_(r)})}get pages(){return this.controller_.pageSet.items.map(e=>{const t=this.pageApiMap_.get(e);if(!t)throw L.shouldNeverHappen();return t})}addPage(e){const t=this.controller_.view.element.ownerDocument,r=new un(t,{itemProps:he.fromObject({selected:!1,title:e.title}),props:he.fromObject({selected:!1})});this.controller_.add(r,e.index);const h=this.pageApiMap_.get(r);if(!h)throw L.shouldNeverHappen();return h}removePage(e){this.controller_.remove(e)}on(e,t){const r=t.bind(this);return this.emitter_.on(e,h=>{r(h.event)}),this}setUpPageApi_(e){const t=this.rackApi_.apiSet_.find(h=>h.controller_===e.contentController);if(!t)throw L.shouldNeverHappen();const r=new en(e,t);this.pageApiMap_.set(e,r)}onPageAdd_(e){this.setUpPageApi_(e.item)}onPageRemove_(e){if(!this.pageApiMap_.get(e.item))throw L.shouldNeverHappen();this.pageApiMap_.delete(e.item)}onSelect_(e){this.emitter_.emit("select",{event:new B(this,e.rawValue)})}}const dn=-1;class ir{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=pe(!0),this.selectedIndex=pe(dn),this.items_=[]}add(e,t){const r=t??this.items_.length;this.items_.splice(r,0,e),e.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(e){const t=this.items_.indexOf(e);t<0||(this.items_.splice(t,1),e.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=dn,this.empty.rawValue=!0;return}const e=this.items_.findIndex(t=>t.rawValue);e<0?(this.items_.forEach((t,r)=>{t.rawValue=r===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((t,r)=>{t.rawValue=r===e}),this.selectedIndex.rawValue=e),this.empty.rawValue=!1}onItemSelectedChange_(e){if(e.rawValue){const t=this.items_.findIndex(r=>r===e.sender);this.items_.forEach((r,h)=>{r.rawValue=h===t}),this.selectedIndex.rawValue=t}else this.keepSelection_()}}const pn=N("tab");class ar{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(pn(),Vt()),t.viewProps.bindClassModifiers(this.element),de(t.empty,Se(this.element,pn(void 0,"nop")));const r=e.createElement("div");r.classList.add(pn("t")),this.element.appendChild(r),this.itemsElement=r;const h=e.createElement("div");h.classList.add(pn("i")),this.element.appendChild(h);const U=t.contentsElement;U.classList.add(pn("c")),this.element.appendChild(U),this.contentsElement=U}}class os extends ut{constructor(e,t){const r=new it(e,{blade:t.blade,viewProps:t.viewProps}),h=new ir;super({blade:t.blade,rackController:r,view:new ar(e,{contentsElement:r.view.element,empty:h.empty,viewProps:t.viewProps})}),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.pageSet_=new qe(()=>null),this.pageSet_.emitter.on("add",this.onPageAdd_),this.pageSet_.emitter.on("remove",this.onPageRemove_),this.tab=h}get pageSet(){return this.pageSet_}add(e,t){this.pageSet_.add(e,t)}remove(e){this.pageSet_.remove(this.pageSet_.items[e])}onPageAdd_(e){const t=e.item;O(this.view.itemsElement,t.itemController.view.element,e.index),t.itemController.viewProps.set("parent",this.viewProps),this.rackController.rack.add(t.contentController,e.index),this.tab.add(t.props.value("selected"))}onPageRemove_(e){const t=e.item;X(t.itemController.view.element),t.itemController.viewProps.set("parent",null),this.rackController.rack.remove(t.contentController),this.tab.remove(t.props.value("selected"))}}const kn={id:"tab",type:"blade",accept(n){const e=ge,t=Ae(n,{pages:e.required.array(e.required.object({title:e.required.string})),view:e.required.constant("tab")});return!t||t.pages.length===0?null:{params:t}},controller(n){const e=new os(n.document,{blade:n.blade,viewProps:n.viewProps});return n.params.pages.forEach(t=>{const r=new un(n.document,{itemProps:he.fromObject({selected:!1,title:t.title}),props:he.fromObject({selected:!1})});e.add(r)}),e},api(n){return n.controller instanceof os?new Bs(n.controller,n.pool):null}};function ls(n,e){const t=n.accept(e.params);if(!t)return null;const r=ge.optional.boolean(e.params.disabled).value,h=ge.optional.boolean(e.params.hidden).value;return n.controller({blade:Fe(),document:e.document,params:Object.assign(Object.assign({},t.params),{disabled:r,hidden:h}),viewProps:g.create({disabled:r,hidden:h})})}class As{constructor(){this.disabled=!1,this.emitter=new G}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class or{constructor(e,t){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=e,this.emitter=new G,this.interval_=t,this.setTimer_()}get disabled(){return this.disabled_}set disabled(e){this.disabled_=e,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const e=this.doc_.defaultView;e&&e.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const e=this.doc_.defaultView;e&&(this.timerId_=e.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class hn{constructor(e){this.onValueChange_=this.onValueChange_.bind(this),this.reader=e.reader,this.writer=e.writer,this.emitter=new G,this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.target=e.target,this.read()}read(){const e=this.target.read();e!==void 0&&(this.value.rawValue=this.reader(e))}write_(e){this.writer(this.target,e)}onValueChange_(e){this.write_(e.rawValue),this.emitter.emit("change",{options:e.options,rawValue:e.rawValue,sender:this})}}function cs(n,e){for(;n.length<e;)n.push(void 0)}function lr(n){const e=[];return cs(e,n),pe(e)}function cr(n){const e=n.indexOf(void 0);return e<0?n:n.slice(0,e)}function ur(n,e){const t=[...cr(n),e];return t.length>n.length?t.splice(0,t.length-n.length):cs(t,n.length),t}class xt{constructor(e){this.onTick_=this.onTick_.bind(this),this.reader_=e.reader,this.target=e.target,this.emitter=new G,this.value=e.value,this.ticker=e.ticker,this.ticker.emitter.on("tick",this.onTick_),this.read()}dispose(){this.ticker.dispose()}read(){const e=this.target.read();if(e===void 0)return;const t=this.value.rawValue,r=this.reader_(e);this.value.rawValue=ur(t,r),this.emitter.emit("update",{rawValue:r,sender:this})}onTick_(e){this.read()}}class Tn{constructor(e){this.constraints=e}constrain(e){return this.constraints.reduce((t,r)=>r.constrain(t),e)}}function Nt(n,e){if(n instanceof e)return n;if(n instanceof Tn){const t=n.constraints.reduce((r,h)=>r||(h instanceof e?h:null),null);if(t)return t}return null}class fn{constructor(e){this.values=he.fromObject({max:e.max,min:e.min})}constrain(e){const t=this.values.get("max"),r=this.values.get("min");return Math.min(Math.max(e,r),t)}}class Cn{constructor(e){this.values=he.fromObject({options:e})}get options(){return this.values.get("options")}constrain(e){const t=this.values.get("options");return t.length===0||t.filter(h=>h.value===e).length>0?e:t[0].value}}class us{constructor(e){this.values=he.fromObject({max:e.max,min:e.min})}get maxValue(){return this.values.get("max")}get minValue(){return this.values.get("min")}constrain(e){const t=this.values.get("max"),r=this.values.get("min");let h=e;return z(r)||(h=Math.max(h,r)),z(t)||(h=Math.min(h,t)),h}}class _n{constructor(e,t=0){this.step=e,this.origin=t}constrain(e){const t=this.origin%this.step,r=Math.round((e-t)/this.step);return t+r*this.step}}const Nn=N("lst");class Rs{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.props_=t.props,this.element=e.createElement("div"),this.element.classList.add(Nn()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("select");r.classList.add(Nn("s")),t.viewProps.bindDisabled(r),this.element.appendChild(r),this.selectElement=r;const h=e.createElement("div");h.classList.add(Nn("m")),h.appendChild(S(e,"dropdown")),this.element.appendChild(h),t.value.emitter.on("change",this.onValueChange_),this.value_=t.value,ce(this.props_,"options",U=>{W(this.selectElement),U.forEach(K=>{const fe=e.createElement("option");fe.textContent=K.text,this.selectElement.appendChild(fe)}),this.update_()})}update_(){const e=this.props_.get("options").map(t=>t.value);this.selectElement.selectedIndex=e.indexOf(this.value_.rawValue)}onValueChange_(){this.update_()}}class tn{constructor(e,t){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new Rs(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(e){const t=e.currentTarget;this.value.rawValue=this.props.get("options")[t.selectedIndex].value}}const ds=N("pop");class ps{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(ds()),t.viewProps.bindClassModifiers(this.element),de(t.shows,Se(this.element,ds(void 0,"v")))}}class hs{constructor(e,t){this.shows=pe(!1),this.viewProps=t.viewProps,this.view=new ps(e,{shows:this.shows,viewProps:this.viewProps})}}const Mn=N("txt");class dr{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Mn()),t.viewProps.bindClassModifiers(this.element),this.props_=t.props,this.props_.emitter.on("change",this.onChange_);const r=e.createElement("input");r.classList.add(Mn("i")),r.type="text",t.viewProps.bindDisabled(r),this.element.appendChild(r),this.inputElement=r,t.value.emitter.on("change",this.onChange_),this.value_=t.value,this.refresh()}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value_.rawValue)}onChange_(){this.refresh()}}class qt{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=t.parser,this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new dr(e,{props:t.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const r=e.currentTarget.value,h=this.parser_(r);z(h)||(this.value.rawValue=h),this.view.refresh()}}function pr(n){return String(n)}function R(n){return n==="false"?!1:!!n}function ee(n){return pr(n)}class ie{constructor(e){this.text=e}evaluate(){return Number(this.text)}toString(){return this.text}}const ve={"**":(n,e)=>Math.pow(n,e),"*":(n,e)=>n*e,"/":(n,e)=>n/e,"%":(n,e)=>n%e,"+":(n,e)=>n+e,"-":(n,e)=>n-e,"<<":(n,e)=>n<<e,">>":(n,e)=>n>>e,">>>":(n,e)=>n>>>e,"&":(n,e)=>n&e,"^":(n,e)=>n^e,"|":(n,e)=>n|e};class ye{constructor(e,t,r){this.left=t,this.operator=e,this.right=r}evaluate(){const e=ve[this.operator];if(!e)throw new Error(`unexpected binary operator: '${this.operator}`);return e(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const Pe={"+":n=>n,"-":n=>-n,"~":n=>~n};class Be{constructor(e,t){this.operator=e,this.expression=t}evaluate(){const e=Pe[this.operator];if(!e)throw new Error(`unexpected unary operator: '${this.operator}`);return e(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function Re(n){return(e,t)=>{for(let r=0;r<n.length;r++){const h=n[r](e,t);if(h!=="")return h}return""}}function Ue(n,e){var t;const r=n.substr(e).match(/^\s+/);return(t=r&&r[0])!==null&&t!==void 0?t:""}function Oe(n,e){const t=n.substr(e,1);return t.match(/^[1-9]$/)?t:""}function ct(n,e){var t;const r=n.substr(e).match(/^[0-9]+/);return(t=r&&r[0])!==null&&t!==void 0?t:""}function De(n,e){const t=ct(n,e);if(t!=="")return t;const r=n.substr(e,1);if(e+=1,r!=="-"&&r!=="+")return"";const h=ct(n,e);return h===""?"":r+h}function Ke(n,e){const t=n.substr(e,1);if(e+=1,t.toLowerCase()!=="e")return"";const r=De(n,e);return r===""?"":t+r}function vt(n,e){const t=n.substr(e,1);if(t==="0")return t;const r=Oe(n,e);return e+=r.length,r===""?"":r+ct(n,e)}function Ye(n,e){const t=vt(n,e);if(e+=t.length,t==="")return"";const r=n.substr(e,1);if(e+=r.length,r!==".")return"";const h=ct(n,e);return e+=h.length,t+r+h+Ke(n,e)}function It(n,e){const t=n.substr(e,1);if(e+=t.length,t!==".")return"";const r=ct(n,e);return e+=r.length,r===""?"":t+r+Ke(n,e)}function gt(n,e){const t=vt(n,e);return e+=t.length,t===""?"":t+Ke(n,e)}const mn=Re([Ye,It,gt]);function Yt(n,e){var t;const r=n.substr(e).match(/^[01]+/);return(t=r&&r[0])!==null&&t!==void 0?t:""}function qn(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0b")return"";const r=Yt(n,e);return r===""?"":t+r}function Zt(n,e){var t;const r=n.substr(e).match(/^[0-7]+/);return(t=r&&r[0])!==null&&t!==void 0?t:""}function Tt(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0o")return"";const r=Zt(n,e);return r===""?"":t+r}function Bn(n,e){var t;const r=n.substr(e).match(/^[0-9a-f]+/i);return(t=r&&r[0])!==null&&t!==void 0?t:""}function Wn(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0x")return"";const r=Bn(n,e);return r===""?"":t+r}const nn=Re([qn,Tt,Wn]),Kn=Re([nn,mn]);function jn(n,e){const t=Kn(n,e);return e+=t.length,t===""?null:{evaluable:new ie(t),cursor:e}}function hr(n,e){const t=n.substr(e,1);if(e+=t.length,t!=="(")return null;const r=li(n,e);if(!r)return null;e=r.cursor,e+=Ue(n,e).length;const h=n.substr(e,1);return e+=h.length,h!==")"?null:{evaluable:r.evaluable,cursor:e}}function fs(n,e){var t;return(t=jn(n,e))!==null&&t!==void 0?t:hr(n,e)}function oi(n,e){const t=fs(n,e);if(t)return t;const r=n.substr(e,1);if(e+=r.length,r!=="+"&&r!=="-"&&r!=="~")return null;const h=oi(n,e);return h?(e=h.cursor,{cursor:e,evaluable:new Be(r,h.evaluable)}):null}function po(n,e,t){t+=Ue(e,t).length;const r=n.filter(h=>e.startsWith(h,t))[0];return r?(t+=r.length,t+=Ue(e,t).length,{cursor:t,operator:r}):null}function ho(n,e){return(t,r)=>{const h=n(t,r);if(!h)return null;r=h.cursor;let U=h.evaluable;for(;;){const K=po(e,t,r);if(!K)break;r=K.cursor;const fe=n(t,r);if(!fe)return null;r=fe.cursor,U=new ye(K.operator,U,fe.evaluable)}return U?{cursor:r,evaluable:U}:null}}const fo=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((n,e)=>ho(n,e),oi);function li(n,e){return e+=Ue(n,e).length,fo(n,e)}function _o(n){const e=li(n,0);return!e||e.cursor+Ue(n,e.cursor).length!==n.length?null:e.evaluable}function sn(n){var e;const t=_o(n);return(e=t==null?void 0:t.evaluate())!==null&&e!==void 0?e:null}function ci(n){if(typeof n=="number")return n;if(typeof n=="string"){const e=sn(n);if(!z(e))return e}return 0}function mo(n){return String(n)}function Et(n){return e=>e.toFixed(Math.max(Math.min(n,20),0))}const vo=Et(0);function Ds(n){return vo(n)+"%"}function ui(n){return String(n)}function fr(n){return n}function _s({primary:n,secondary:e,forward:t,backward:r}){let h=!1;function U(K){h||(h=!0,K(),h=!1)}n.emitter.on("change",K=>{U(()=>{e.setRawValue(t(n,e),K.options)})}),e.emitter.on("change",K=>{U(()=>{n.setRawValue(r(n,e),K.options)}),U(()=>{e.setRawValue(t(n,e),K.options)})}),U(()=>{e.setRawValue(t(n,e),{forceEmit:!1,last:!0})})}function At(n,e){const t=n*(e.altKey?.1:1)*(e.shiftKey?10:1);return e.upKey?+t:e.downKey?-t:0}function ms(n){return{altKey:n.altKey,downKey:n.key==="ArrowDown",shiftKey:n.shiftKey,upKey:n.key==="ArrowUp"}}function rn(n){return{altKey:n.altKey,downKey:n.key==="ArrowLeft",shiftKey:n.shiftKey,upKey:n.key==="ArrowRight"}}function bo(n){return n==="ArrowUp"||n==="ArrowDown"}function di(n){return bo(n)||n==="ArrowLeft"||n==="ArrowRight"}function _r(n,e){var t,r;const h=e.ownerDocument.defaultView,U=e.getBoundingClientRect();return{x:n.pageX-(((t=h&&h.scrollX)!==null&&t!==void 0?t:0)+U.left),y:n.pageY-(((r=h&&h.scrollY)!==null&&r!==void 0?r:0)+U.top)}}class An{constructor(e){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=e,this.emitter=new G,e.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),e.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),e.addEventListener("touchend",this.onTouchEnd_),e.addEventListener("mousedown",this.onMouseDown_)}computePosition_(e){const t=this.elem_.getBoundingClientRect();return{bounds:{width:t.width,height:t.height},point:e?{x:e.x,y:e.y}:null}}onMouseDown_(e){var t;e.preventDefault(),(t=e.currentTarget)===null||t===void 0||t.focus();const r=this.elem_.ownerDocument;r.addEventListener("mousemove",this.onDocumentMouseMove_),r.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(_r(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseMove_(e){this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(_r(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseUp_(e){const t=this.elem_.ownerDocument;t.removeEventListener("mousemove",this.onDocumentMouseMove_),t.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(_r(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onTouchStart_(e){e.preventDefault();const t=e.targetTouches.item(0),r=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-r.left,y:t.clientY-r.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchMove_(e){const t=e.targetTouches.item(0),r=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-r.left,y:t.clientY-r.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchEnd_(e){var t;const r=(t=e.targetTouches.item(0))!==null&&t!==void 0?t:this.lastTouch_,h=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(r?{x:r.clientX-h.left,y:r.clientY-h.top}:void 0),sender:this,shiftKey:e.shiftKey})}}function ht(n,e,t,r,h){const U=(n-e)/(t-e);return r+U*(h-r)}function pi(n){return String(n.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function yt(n,e,t){return Math.min(Math.max(n,e),t)}function hi(n,e){return(n%e+e)%e}const Gt=N("txt");class go{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(Gt(),Gt(void 0,"num")),t.arrayPosition&&this.element.classList.add(Gt(void 0,t.arrayPosition)),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("input");r.classList.add(Gt("i")),r.type="text",t.viewProps.bindDisabled(r),this.element.appendChild(r),this.inputElement=r,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=t.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(Gt()),this.inputElement.classList.add(Gt("i"));const h=e.createElement("div");h.classList.add(Gt("k")),this.element.appendChild(h),this.knobElement=h;const U=e.createElementNS(M,"svg");U.classList.add(Gt("g")),this.knobElement.appendChild(U);const K=e.createElementNS(M,"path");K.classList.add(Gt("gb")),U.appendChild(K),this.guideBodyElem_=K;const fe=e.createElementNS(M,"path");fe.classList.add(Gt("gh")),U.appendChild(fe),this.guideHeadElem_=fe;const ze=e.createElement("div");ze.classList.add(N("tt")()),this.knobElement.appendChild(ze),this.tooltipElem_=ze,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.refresh()}onDraggingChange_(e){if(e.rawValue===null){this.element.classList.remove(Gt(void 0,"drg"));return}this.element.classList.add(Gt(void 0,"drg"));const t=e.rawValue/this.props_.get("draggingScale"),r=t+(t>0?-1:t<0?1:0),h=yt(-r,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${r+h},0 L${r},4 L${r+h},8`,`M ${t},-1 L${t},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${t},4`);const U=this.props_.get("formatter");this.tooltipElem_.textContent=U(this.value.rawValue),this.tooltipElem_.style.left=`${t}px`}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value.rawValue)}onChange_(){this.refresh()}}class vs{constructor(e,t){var r;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.parser_=t.parser,this.props=t.props,this.sliderProps_=(r=t.sliderProps)!==null&&r!==void 0?r:null,this.value=t.value,this.viewProps=t.viewProps,this.dragging_=pe(null),this.view=new go(e,{arrayPosition:t.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const h=new An(this.view.knobElement);h.emitter.on("down",this.onPointerDown_),h.emitter.on("move",this.onPointerMove_),h.emitter.on("up",this.onPointerUp_)}constrainValue_(e){var t,r;const h=(t=this.sliderProps_)===null||t===void 0?void 0:t.get("minValue"),U=(r=this.sliderProps_)===null||r===void 0?void 0:r.get("maxValue");let K=e;return h!==void 0&&(K=Math.max(K,h)),U!==void 0&&(K=Math.min(K,U)),K}onInputChange_(e){const r=e.currentTarget.value,h=this.parser_(r);z(h)||(this.value.rawValue=this.constrainValue_(h)),this.view.refresh()}onInputKeyDown_(e){const t=At(this.baseStep_,ms(e));t!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+t),{forceEmit:!1,last:!1})}onInputKeyUp_(e){At(this.baseStep_,ms(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(e){if(!e.point)return null;const t=e.point.x-e.bounds.width/2;return this.constrainValue_(this.originRawValue_+t*this.props.get("draggingScale"))}onPointerMove_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const mr=N("sld");class wo{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(mr()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("div");r.classList.add(mr("t")),t.viewProps.bindTabIndex(r),this.element.appendChild(r),this.trackElement=r;const h=e.createElement("div");h.classList.add(mr("k")),this.trackElement.appendChild(h),this.knobElement=h,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.update_()}update_(){const e=yt(ht(this.value.rawValue,this.props_.get("minValue"),this.props_.get("maxValue"),0,100),0,100);this.knobElement.style.width=`${e}%`}onChange_(){this.update_()}}class xo{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.value=t.value,this.viewProps=t.viewProps,this.props=t.props,this.view=new wo(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new An(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){e.point&&this.value.setRawValue(ht(yt(e.point.x,0,e.bounds.width),0,e.bounds.width,this.props.get("minValue"),this.props.get("maxValue")),t)}onPointerDownOrMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=At(this.baseStep_,rn(e));t!==0&&this.value.setRawValue(this.value.rawValue+t,{forceEmit:!1,last:!1})}onKeyUp_(e){At(this.baseStep_,rn(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const vr=N("sldtxt");class yo{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(vr());const r=e.createElement("div");r.classList.add(vr("s")),this.sliderView_=t.sliderView,r.appendChild(this.sliderView_.element),this.element.appendChild(r);const h=e.createElement("div");h.classList.add(vr("t")),this.textView_=t.textView,h.appendChild(this.textView_.element),this.element.appendChild(h)}}class br{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.sliderC_=new xo(e,{baseStep:t.baseStep,props:t.sliderProps,value:t.value,viewProps:this.viewProps}),this.textC_=new vs(e,{baseStep:t.baseStep,parser:t.parser,props:t.textProps,sliderProps:t.sliderProps,value:t.value,viewProps:t.viewProps}),this.view=new yo(e,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}}function bs(n,e){n.write(e)}function Us(n){const e=ge;if(Array.isArray(n))return e.required.array(e.required.object({text:e.required.string,value:e.required.raw}))(n).value;if(typeof n=="object")return e.required.raw(n).value}function fi(n){if(n==="inline"||n==="popup")return n}function vn(n){const e=ge;return e.required.object({max:e.optional.number,min:e.optional.number,step:e.optional.number})(n).value}function _i(n){if(Array.isArray(n))return n;const e=[];return Object.keys(n).forEach(t=>{e.push({text:t,value:n[t]})}),e}function gr(n){return z(n)?null:new Cn(_i(n))}function Po(n){const e=n?Nt(n,_n):null;return e?e.step:null}function Ls(n,e){const t=n&&Nt(n,_n);return t?pi(t.step):Math.max(pi(e),2)}function Hn(n){const e=Po(n);return e??1}function Yn(n,e){var t;const r=n&&Nt(n,_n),h=Math.abs((t=r==null?void 0:r.step)!==null&&t!==void 0?t:e);return h===0?.1:Math.pow(10,Math.floor(Math.log10(h))-1)}const zs=N("ckb");class So{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(zs()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("label");r.classList.add(zs("l")),this.element.appendChild(r);const h=e.createElement("input");h.classList.add(zs("i")),h.type="checkbox",r.appendChild(h),this.inputElement=h,t.viewProps.bindDisabled(this.inputElement);const U=e.createElement("div");U.classList.add(zs("w")),r.appendChild(U);const K=S(e,"check");U.appendChild(K),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class Eo{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new So(e,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const t=e.currentTarget;this.value.rawValue=t.checked}}function ko(n){const e=[],t=gr(n.options);return t&&e.push(t),new Tn(e)}const To={id:"input-bool",type:"input",accept:(n,e)=>{if(typeof n!="boolean")return null;const r=Ae(e,{options:ge.optional.custom(Us)});return r?{initialValue:n,params:r}:null},binding:{reader:n=>R,constraint:n=>ko(n.params),writer:n=>bs},controller:n=>{const e=n.document,t=n.value,r=n.constraint,h=r&&Nt(r,Cn);return h?new tn(e,{props:new he({options:h.values.value("options")}),value:t,viewProps:n.viewProps}):new Eo(e,{value:t,viewProps:n.viewProps})}},Rn=N("col");class Co{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Rn()),t.foldable.bindExpandedClass(this.element,Rn(void 0,"expanded")),ce(t.foldable,"completed",Se(this.element,Rn(void 0,"cpl")));const r=e.createElement("div");r.classList.add(Rn("h")),this.element.appendChild(r);const h=e.createElement("div");h.classList.add(Rn("s")),r.appendChild(h),this.swatchElement=h;const U=e.createElement("div");if(U.classList.add(Rn("t")),r.appendChild(U),this.textElement=U,t.pickerLayout==="inline"){const K=e.createElement("div");K.classList.add(Rn("p")),this.element.appendChild(K),this.pickerElement=K}else this.pickerElement=null}}function Mo(n,e,t){const r=yt(n/255,0,1),h=yt(e/255,0,1),U=yt(t/255,0,1),K=Math.max(r,h,U),fe=Math.min(r,h,U),ze=K-fe;let Ge=0,Xe=0;const nt=(fe+K)/2;return ze!==0&&(Xe=ze/(1-Math.abs(K+fe-1)),r===K?Ge=(h-U)/ze:h===K?Ge=2+(U-r)/ze:Ge=4+(r-h)/ze,Ge=Ge/6+(Ge<0?1:0)),[Ge*360,Xe*100,nt*100]}function Bo(n,e,t){const r=(n%360+360)%360,h=yt(e/100,0,1),U=yt(t/100,0,1),K=(1-Math.abs(2*U-1))*h,fe=K*(1-Math.abs(r/60%2-1)),ze=U-K/2;let Ge,Xe,nt;return r>=0&&r<60?[Ge,Xe,nt]=[K,fe,0]:r>=60&&r<120?[Ge,Xe,nt]=[fe,K,0]:r>=120&&r<180?[Ge,Xe,nt]=[0,K,fe]:r>=180&&r<240?[Ge,Xe,nt]=[0,fe,K]:r>=240&&r<300?[Ge,Xe,nt]=[fe,0,K]:[Ge,Xe,nt]=[K,0,fe],[(Ge+ze)*255,(Xe+ze)*255,(nt+ze)*255]}function Ao(n,e,t){const r=yt(n/255,0,1),h=yt(e/255,0,1),U=yt(t/255,0,1),K=Math.max(r,h,U),fe=Math.min(r,h,U),ze=K-fe;let Ge;ze===0?Ge=0:K===r?Ge=60*(((h-U)/ze%6+6)%6):K===h?Ge=60*((U-r)/ze+2):Ge=60*((r-h)/ze+4);const Xe=K===0?0:ze/K,nt=K;return[Ge,Xe*100,nt*100]}function mi(n,e,t){const r=hi(n,360),h=yt(e/100,0,1),U=yt(t/100,0,1),K=U*h,fe=K*(1-Math.abs(r/60%2-1)),ze=U-K;let Ge,Xe,nt;return r>=0&&r<60?[Ge,Xe,nt]=[K,fe,0]:r>=60&&r<120?[Ge,Xe,nt]=[fe,K,0]:r>=120&&r<180?[Ge,Xe,nt]=[0,K,fe]:r>=180&&r<240?[Ge,Xe,nt]=[0,fe,K]:r>=240&&r<300?[Ge,Xe,nt]=[fe,0,K]:[Ge,Xe,nt]=[K,0,fe],[(Ge+ze)*255,(Xe+ze)*255,(nt+ze)*255]}function Ro(n,e,t){const r=t+e*(100-Math.abs(2*t-100))/200;return[n,r!==0?e*(100-Math.abs(2*t-100))/r:0,t+e*(100-Math.abs(2*t-100))/(2*100)]}function Do(n,e,t){const r=100-Math.abs(t*(200-e)/100-100);return[n,r!==0?e*t/r:0,t*(200-e)/(2*100)]}function Dn(n){return[n[0],n[1],n[2]]}function vi(n,e){return[n[0],n[1],n[2],e]}const Uo={hsl:{hsl:(n,e,t)=>[n,e,t],hsv:Ro,rgb:Bo},hsv:{hsl:Do,hsv:(n,e,t)=>[n,e,t],rgb:mi},rgb:{hsl:Mo,hsv:Ao,rgb:(n,e,t)=>[n,e,t]}};function Is(n,e){return[e==="float"?1:n==="rgb"?255:360,e==="float"?1:n==="rgb"?255:100,e==="float"?1:n==="rgb"?255:100]}function Lo(n,e){return n===e?e:hi(n,e)}function zo(n,e,t){var r;const h=Is(e,t);return[e==="rgb"?yt(n[0],0,h[0]):Lo(n[0],h[0]),yt(n[1],0,h[1]),yt(n[2],0,h[2]),yt((r=n[3])!==null&&r!==void 0?r:1,0,1)]}function bi(n,e,t,r){const h=Is(e,t),U=Is(e,r);return n.map((K,fe)=>K/h[fe]*U[fe])}function Io(n,e,t){const r=bi(n,e.mode,e.type,"int"),h=Uo[e.mode][t.mode](...r);return bi(h,t.mode,"int",t.type)}function Gs(n,e){return typeof n!="object"||z(n)?!1:e in n&&typeof n[e]=="number"}class We{static black(e="int"){return new We([0,0,0],"rgb",e)}static fromObject(e,t="int"){const r="a"in e?[e.r,e.g,e.b,e.a]:[e.r,e.g,e.b];return new We(r,"rgb",t)}static toRgbaObject(e,t="int"){return e.toRgbaObject(t)}static isRgbColorObject(e){return Gs(e,"r")&&Gs(e,"g")&&Gs(e,"b")}static isRgbaColorObject(e){return this.isRgbColorObject(e)&&Gs(e,"a")}static isColorObject(e){return this.isRgbColorObject(e)}static equals(e,t){if(e.mode!==t.mode)return!1;const r=e.comps_,h=t.comps_;for(let U=0;U<r.length;U++)if(r[U]!==h[U])return!1;return!0}constructor(e,t,r="int"){this.mode=t,this.type=r,this.comps_=zo(e,t,r)}getComponents(e,t="int"){return vi(Io(Dn(this.comps_),{mode:this.mode,type:this.type},{mode:e??this.mode,type:t}),this.comps_[3])}toRgbaObject(e="int"){const t=this.getComponents("rgb",e);return{r:t[0],g:t[1],b:t[2],a:t[3]}}}const bn=N("colp");class Go{constructor(e,t){this.alphaViews_=null,this.element=e.createElement("div"),this.element.classList.add(bn()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("div");r.classList.add(bn("hsv"));const h=e.createElement("div");h.classList.add(bn("sv")),this.svPaletteView_=t.svPaletteView,h.appendChild(this.svPaletteView_.element),r.appendChild(h);const U=e.createElement("div");U.classList.add(bn("h")),this.hPaletteView_=t.hPaletteView,U.appendChild(this.hPaletteView_.element),r.appendChild(U),this.element.appendChild(r);const K=e.createElement("div");if(K.classList.add(bn("rgb")),this.textView_=t.textView,K.appendChild(this.textView_.element),this.element.appendChild(K),t.alphaViews){this.alphaViews_={palette:t.alphaViews.palette,text:t.alphaViews.text};const fe=e.createElement("div");fe.classList.add(bn("a"));const ze=e.createElement("div");ze.classList.add(bn("ap")),ze.appendChild(this.alphaViews_.palette.element),fe.appendChild(ze);const Ge=e.createElement("div");Ge.classList.add(bn("at")),Ge.appendChild(this.alphaViews_.text.element),fe.appendChild(Ge),this.element.appendChild(fe)}}get allFocusableElements(){const e=[this.svPaletteView_.element,this.hPaletteView_.element,this.textView_.modeSelectElement,...this.textView_.textViews.map(t=>t.inputElement)];return this.alphaViews_&&e.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),e}}function Fo(n){return n==="int"?"int":n==="float"?"float":void 0}function wr(n){const e=ge;return Ae(n,{alpha:e.optional.boolean,color:e.optional.object({alpha:e.optional.boolean,type:e.optional.custom(Fo)}),expanded:e.optional.boolean,picker:e.optional.custom(fi)})}function Un(n){return n?.1:1}function Ln(n){var e;return(e=n.color)===null||e===void 0?void 0:e.type}function Oo(n,e){return n.alpha===e.alpha&&n.mode===e.mode&&n.notation===e.notation&&n.type===e.type}function Ft(n,e){const t=n.match(/^(.+)%$/);return Math.min(t?parseFloat(t[1])*.01*e:parseFloat(n),e)}const Vo={deg:n=>n,grad:n=>n*360/400,rad:n=>n*360/(2*Math.PI),turn:n=>n*360};function gi(n){const e=n.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!e)return parseFloat(n);const t=parseFloat(e[1]),r=e[2];return Vo[r](t)}function wi(n){const e=n.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[Ft(e[1],255),Ft(e[2],255),Ft(e[3],255)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function xi(n){return e=>{const t=wi(e);return t?new We(t,"rgb",n):null}}function yi(n){const e=n.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[Ft(e[1],255),Ft(e[2],255),Ft(e[3],255),Ft(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function Pi(n){return e=>{const t=yi(e);return t?new We(t,"rgb",n):null}}function Si(n){const e=n.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[gi(e[1]),Ft(e[2],100),Ft(e[3],100)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function Ei(n){return e=>{const t=Si(e);return t?new We(t,"hsl",n):null}}function ki(n){const e=n.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[gi(e[1]),Ft(e[2],100),Ft(e[3],100),Ft(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function Ti(n){return e=>{const t=ki(e);return t?new We(t,"hsl",n):null}}function Ci(n){const e=n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)];const t=n.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:null}function $o(n){const e=Ci(n);return e?new We(e,"rgb","int"):null}function Mi(n){const e=n.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16),ht(parseInt(e[4]+e[4],16),0,255,0,1)];const t=n.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16),ht(parseInt(t[4],16),0,255,0,1)]:null}function No(n){const e=Mi(n);return e?new We(e,"rgb","int"):null}function Bi(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function Ai(n){return e=>{const t=Bi(e);return t?new We(t,"rgb",n):null}}function Ri(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3]),parseFloat(e[4])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function Di(n){return e=>{const t=Ri(e);return t?new We(t,"rgb",n):null}}const qo=[{parser:Ci,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:Mi,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:wi,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:yi,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:Si,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:ki,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:Bi,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:Ri,result:{alpha:!0,mode:"rgb",notation:"object"}}];function Wo(n){return qo.reduce((e,{parser:t,result:r})=>e||(t(n)?r:null),null)}function xr(n,e="int"){const t=Wo(n);return t?t.notation==="hex"&&e!=="float"?Object.assign(Object.assign({},t),{type:"int"}):t.notation==="func"?Object.assign(Object.assign({},t),{type:e}):null:null}const Ui={int:[$o,No,xi("int"),Pi("int"),Ei("int"),Ti("int"),Ai("int"),Di("int")],float:[xi("float"),Pi("float"),Ei("float"),Ti("float"),Ai("float"),Di("float")]};function Ko(n){const e=Ui[n];return t=>{if(typeof t!="string")return We.black(n);const r=e.reduce((h,U)=>h||U(t),null);return r??We.black(n)}}function yr(n){const e=Ui[n];return t=>e.reduce((r,h)=>r||h(t),null)}function Li(n){const e=yt(Math.floor(n),0,255).toString(16);return e.length===1?`0${e}`:e}function zi(n,e="#"){const t=Dn(n.getComponents("rgb")).map(Li).join("");return`${e}${t}`}function Pr(n,e="#"){const t=n.getComponents("rgb"),r=[t[0],t[1],t[2],t[3]*255].map(Li).join("");return`${e}${r}`}function Ii(n,e){const t=Et(e==="float"?2:0);return`rgb(${Dn(n.getComponents("rgb",e)).map(h=>t(h)).join(", ")})`}function jo(n){return e=>Ii(e,n)}function Fs(n,e){const t=Et(2),r=Et(e==="float"?2:0);return`rgba(${n.getComponents("rgb",e).map((U,K)=>(K===3?t:r)(U)).join(", ")})`}function Ho(n){return e=>Fs(e,n)}function Yo(n){const e=[Et(0),Ds,Ds];return`hsl(${Dn(n.getComponents("hsl")).map((r,h)=>e[h](r)).join(", ")})`}function Zo(n){const e=[Et(0),Ds,Ds,Et(2)];return`hsla(${n.getComponents("hsl").map((r,h)=>e[h](r)).join(", ")})`}function Gi(n,e){const t=Et(e==="float"?2:0),r=["r","g","b"];return`{${Dn(n.getComponents("rgb",e)).map((U,K)=>`${r[K]}: ${t(U)}`).join(", ")}}`}function Xo(n){return e=>Gi(e,n)}function Fi(n,e){const t=Et(2),r=Et(e==="float"?2:0),h=["r","g","b","a"];return`{${n.getComponents("rgb",e).map((K,fe)=>{const ze=fe===3?t:r;return`${h[fe]}: ${ze(K)}`}).join(", ")}}`}function Jo(n){return e=>Fi(e,n)}const Qo=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:zi},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:Pr},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:Yo},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:Zo},...["int","float"].reduce((n,e)=>[...n,{format:{alpha:!1,mode:"rgb",notation:"func",type:e},stringifier:jo(e)},{format:{alpha:!0,mode:"rgb",notation:"func",type:e},stringifier:Ho(e)},{format:{alpha:!1,mode:"rgb",notation:"object",type:e},stringifier:Xo(e)},{format:{alpha:!0,mode:"rgb",notation:"object",type:e},stringifier:Jo(e)}],[])];function Sr(n){return Qo.reduce((e,t)=>e||(Oo(t.format,n)?t.stringifier:null),null)}const gs=N("apl");class el{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(gs()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const r=e.createElement("div");r.classList.add(gs("b")),this.element.appendChild(r);const h=e.createElement("div");h.classList.add(gs("c")),r.appendChild(h),this.colorElem_=h;const U=e.createElement("div");U.classList.add(gs("m")),this.element.appendChild(U),this.markerElem_=U;const K=e.createElement("div");K.classList.add(gs("p")),this.markerElem_.appendChild(K),this.previewElem_=K,this.update_()}update_(){const e=this.value.rawValue,t=e.getComponents("rgb"),r=new We([t[0],t[1],t[2],0],"rgb"),h=new We([t[0],t[1],t[2],255],"rgb"),U=["to right",Fs(r),Fs(h)];this.colorElem_.style.background=`linear-gradient(${U.join(",")})`,this.previewElem_.style.backgroundColor=Fs(e);const K=ht(t[3],0,1,0,100);this.markerElem_.style.left=`${K}%`}onValueChange_(){this.update_()}}class tl{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new el(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new An(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const r=e.point.x/e.bounds.width,h=this.value.rawValue,[U,K,fe]=h.getComponents("hsv");this.value.setRawValue(new We([U,K,fe,r],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=At(Un(!0),rn(e));if(t===0)return;const r=this.value.rawValue,[h,U,K,fe]=r.getComponents("hsv");this.value.setRawValue(new We([h,U,K,fe+t],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){At(Un(!0),rn(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Zn=N("coltxt");function nl(n){const e=n.createElement("select"),t=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"}];return e.appendChild(t.reduce((r,h)=>{const U=n.createElement("option");return U.textContent=h.text,U.value=h.value,r.appendChild(U),r},n.createDocumentFragment())),e}class sl{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Zn()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("div");r.classList.add(Zn("m")),this.modeElem_=nl(e),this.modeElem_.classList.add(Zn("ms")),r.appendChild(this.modeSelectElement),t.viewProps.bindDisabled(this.modeElem_);const h=e.createElement("div");h.classList.add(Zn("mm")),h.appendChild(S(e,"dropdown")),r.appendChild(h),this.element.appendChild(r);const U=e.createElement("div");U.classList.add(Zn("w")),this.element.appendChild(U),this.textsElem_=U,this.textViews_=t.textViews,this.applyTextViews_(),de(t.colorMode,K=>{this.modeElem_.value=K})}get modeSelectElement(){return this.modeElem_}get textViews(){return this.textViews_}set textViews(e){this.textViews_=e,this.applyTextViews_()}applyTextViews_(){W(this.textsElem_);const e=this.element.ownerDocument;this.textViews_.forEach(t=>{const r=e.createElement("div");r.classList.add(Zn("c")),r.appendChild(t.element),this.textsElem_.appendChild(r)})}}function rl(n){return Et(n==="float"?2:0)}function il(n,e,t){const r=Is(n,e)[t];return new fn({min:0,max:r})}function Er(n,e,t){return new vs(n,{arrayPosition:t===0?"fst":t===3-1?"lst":"mid",baseStep:Un(!1),parser:e.parser,props:he.fromObject({draggingScale:e.colorType==="float"?.01:1,formatter:rl(e.colorType)}),value:pe(0,{constraint:il(e.colorMode,e.colorType,t)}),viewProps:e.viewProps})}class al{constructor(e,t){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=t.colorType,this.parser_=t.parser,this.value=t.value,this.viewProps=t.viewProps,this.colorMode=pe(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(e),this.view=new sl(e,{colorMode:this.colorMode,textViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view],viewProps:this.viewProps}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(e){const t={colorMode:this.colorMode.rawValue,colorType:this.colorType_,parser:this.parser_,viewProps:this.viewProps},r=[Er(e,t,0),Er(e,t,1),Er(e,t,2)];return r.forEach((h,U)=>{_s({primary:this.value,secondary:h.value,forward:K=>K.rawValue.getComponents(this.colorMode.rawValue,this.colorType_)[U],backward:(K,fe)=>{const ze=this.colorMode.rawValue,Ge=K.rawValue.getComponents(ze,this.colorType_);return Ge[U]=fe.rawValue,new We(vi(Dn(Ge),Ge[3]),ze,this.colorType_)}})}),r}onModeSelectChange_(e){const t=e.currentTarget;this.colorMode.rawValue=t.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.textViews=[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}}const kr=N("hpl");class ol{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(kr()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const r=e.createElement("div");r.classList.add(kr("c")),this.element.appendChild(r);const h=e.createElement("div");h.classList.add(kr("m")),this.element.appendChild(h),this.markerElem_=h,this.update_()}update_(){const e=this.value.rawValue,[t]=e.getComponents("hsv");this.markerElem_.style.backgroundColor=Ii(new We([t,100,100],"hsv"));const r=ht(t,0,360,0,100);this.markerElem_.style.left=`${r}%`}onValueChange_(){this.update_()}}class ll{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new ol(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new An(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const r=ht(yt(e.point.x,0,e.bounds.width),0,e.bounds.width,0,360),h=this.value.rawValue,[,U,K,fe]=h.getComponents("hsv");this.value.setRawValue(new We([r,U,K,fe],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=At(Un(!1),rn(e));if(t===0)return;const r=this.value.rawValue,[h,U,K,fe]=r.getComponents("hsv");this.value.setRawValue(new We([h+t,U,K,fe],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){At(Un(!1),rn(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Tr=N("svp"),Oi=64;class cl{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(Tr()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const r=e.createElement("canvas");r.height=Oi,r.width=Oi,r.classList.add(Tr("c")),this.element.appendChild(r),this.canvasElement=r;const h=e.createElement("div");h.classList.add(Tr("m")),this.element.appendChild(h),this.markerElem_=h,this.update_()}update_(){const e=b(this.canvasElement);if(!e)return;const r=this.value.rawValue.getComponents("hsv"),h=this.canvasElement.width,U=this.canvasElement.height,K=e.getImageData(0,0,h,U),fe=K.data;for(let Xe=0;Xe<U;Xe++)for(let nt=0;nt<h;nt++){const zn=ht(nt,0,h,0,100),xs=ht(Xe,0,U,100,0),ys=mi(r[0],zn,xs),Os=(Xe*h+nt)*4;fe[Os]=ys[0],fe[Os+1]=ys[1],fe[Os+2]=ys[2],fe[Os+3]=255}e.putImageData(K,0,0);const ze=ht(r[1],0,100,0,100);this.markerElem_.style.left=`${ze}%`;const Ge=ht(r[2],0,100,100,0);this.markerElem_.style.top=`${Ge}%`}onValueChange_(){this.update_()}}class ul{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new cl(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new An(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const r=ht(e.point.x,0,e.bounds.width,0,100),h=ht(e.point.y,0,e.bounds.height,100,0),[U,,,K]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new We([U,r,h,K],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){di(e.key)&&e.preventDefault();const[t,r,h,U]=this.value.rawValue.getComponents("hsv"),K=Un(!1),fe=At(K,rn(e)),ze=At(K,ms(e));fe===0&&ze===0||this.value.setRawValue(new We([t,r+fe,h+ze,U],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){const t=Un(!1),r=At(t,rn(e)),h=At(t,ms(e));r===0&&h===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class dl{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.hPaletteC_=new ll(e,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new ul(e,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=t.supportsAlpha?{palette:new tl(e,{value:this.value,viewProps:this.viewProps}),text:new vs(e,{parser:sn,baseStep:.1,props:he.fromObject({draggingScale:.01,formatter:Et(2)}),value:pe(0,{constraint:new fn({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&_s({primary:this.value,secondary:this.alphaIcs_.text.value,forward:r=>r.rawValue.getComponents()[3],backward:(r,h)=>{const U=r.rawValue.getComponents();return U[3]=h.rawValue,new We(U,r.rawValue.mode)}}),this.textC_=new al(e,{colorType:t.colorType,parser:sn,value:this.value,viewProps:this.viewProps}),this.view=new Go(e,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:t.supportsAlpha,svPaletteView:this.svPaletteC_.view,textView:this.textC_.view,viewProps:this.viewProps})}get textController(){return this.textC_}}const Cr=N("colsw");class pl{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.element=e.createElement("div"),this.element.classList.add(Cr()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("div");r.classList.add(Cr("sw")),this.element.appendChild(r),this.swatchElem_=r;const h=e.createElement("button");h.classList.add(Cr("b")),t.viewProps.bindDisabled(h),this.element.appendChild(h),this.buttonElement=h,this.update_()}update_(){const e=this.value.rawValue;this.swatchElem_.style.backgroundColor=Pr(e)}onValueChange_(){this.update_()}}class hl{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new pl(e,{value:this.value,viewProps:this.viewProps})}}class Mr{constructor(e,t){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=Je.create(t.expanded),this.swatchC_=new hl(e,{value:this.value,viewProps:this.viewProps});const r=this.swatchC_.view.buttonElement;r.addEventListener("blur",this.onButtonBlur_),r.addEventListener("click",this.onButtonClick_),this.textC_=new qt(e,{parser:t.parser,props:he.fromObject({formatter:t.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new Co(e,{foldable:this.foldable_,pickerLayout:t.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=t.pickerLayout==="popup"?new hs(e,{viewProps:this.viewProps}):null;const h=new dl(e,{colorType:t.colorType,supportsAlpha:t.supportsAlpha,value:this.value,viewProps:this.viewProps});h.view.allFocusableElements.forEach(U=>{U.addEventListener("blur",this.onPopupChildBlur_),U.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=h,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(h.view.element),_s({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:U=>U.rawValue,backward:(U,K)=>K.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),st(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,r=e.relatedTarget;(!r||!t.contains(r))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,r=te(e);r&&t.contains(r)||r&&r===this.swatchC_.view.buttonElement&&!d(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function fl(n,e){return We.isColorObject(n)?We.fromObject(n,e):We.black(e)}function _l(n){return Dn(n.getComponents("rgb")).reduce((e,t)=>e<<8|Math.floor(t)&255,0)}function ml(n){return n.getComponents("rgb").reduce((e,t,r)=>{const h=Math.floor(r===3?t*255:t)&255;return e<<8|h},0)>>>0}function vl(n){return new We([n>>16&255,n>>8&255,n&255],"rgb")}function bl(n){return new We([n>>24&255,n>>16&255,n>>8&255,ht(n&255,0,255,0,1)],"rgb")}function gl(n){return typeof n!="number"?We.black():vl(n)}function wl(n){return typeof n!="number"?We.black():bl(n)}function xl(n){const e=Sr(n);return e?(t,r)=>{bs(t,e(r))}:null}function yl(n){const e=n?ml:_l;return(t,r)=>{bs(t,e(r))}}function Pl(n,e,t){const r=e.toRgbaObject(t);n.writeProperty("r",r.r),n.writeProperty("g",r.g),n.writeProperty("b",r.b),n.writeProperty("a",r.a)}function Sl(n,e,t){const r=e.toRgbaObject(t);n.writeProperty("r",r.r),n.writeProperty("g",r.g),n.writeProperty("b",r.b)}function El(n,e){return(t,r)=>{n?Pl(t,r,e):Sl(t,r,e)}}function Br(n){var e;return!!(n!=null&&n.alpha||!((e=n==null?void 0:n.color)===null||e===void 0)&&e.alpha)}function kl(n){return n?e=>Pr(e,"0x"):e=>zi(e,"0x")}function Tl(n){return"color"in n||"view"in n&&n.view==="color"}const Cl={id:"input-color-number",type:"input",accept:(n,e)=>{if(typeof n!="number"||!Tl(e))return null;const t=wr(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>Br(n.params)?wl:gl,equals:We.equals,writer:n=>yl(Br(n.params))},controller:n=>{const e=Br(n.params),t="expanded"in n.params?n.params.expanded:void 0,r="picker"in n.params?n.params.picker:void 0;return new Mr(n.document,{colorType:"int",expanded:t??!1,formatter:kl(e),parser:yr("int"),pickerLayout:r??"popup",supportsAlpha:e,value:n.value,viewProps:n.viewProps})}};function Ml(n){return We.isRgbaColorObject(n)}function Bl(n){return e=>fl(e,n)}function Al(n,e){return t=>n?Fi(t,e):Gi(t,e)}const Rl={id:"input-color-object",type:"input",accept:(n,e)=>{if(!We.isColorObject(n))return null;const t=wr(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>Bl(Ln(n.params)),equals:We.equals,writer:n=>El(Ml(n.initialValue),Ln(n.params))},controller:n=>{var e;const t=We.isRgbaColorObject(n.initialValue),r="expanded"in n.params?n.params.expanded:void 0,h="picker"in n.params?n.params.picker:void 0,U=(e=Ln(n.params))!==null&&e!==void 0?e:"int";return new Mr(n.document,{colorType:U,expanded:r??!1,formatter:Al(t,U),parser:yr(U),pickerLayout:h??"popup",supportsAlpha:t,value:n.value,viewProps:n.viewProps})}},Dl={id:"input-color-string",type:"input",accept:(n,e)=>{if(typeof n!="string"||"view"in e&&e.view==="text")return null;const t=xr(n,Ln(e));if(!t||!Sr(t))return null;const h=wr(e);return h?{initialValue:n,params:h}:null},binding:{reader:n=>{var e;return Ko((e=Ln(n.params))!==null&&e!==void 0?e:"int")},equals:We.equals,writer:n=>{const e=xr(n.initialValue,Ln(n.params));if(!e)throw L.shouldNeverHappen();const t=xl(e);if(!t)throw L.notBindable();return t}},controller:n=>{const e=xr(n.initialValue,Ln(n.params));if(!e)throw L.shouldNeverHappen();const t=Sr(e);if(!t)throw L.shouldNeverHappen();const r="expanded"in n.params?n.params.expanded:void 0,h="picker"in n.params?n.params.picker:void 0;return new Mr(n.document,{colorType:e.type,expanded:r??!1,formatter:t,parser:yr(e.type),pickerLayout:h??"popup",supportsAlpha:e.alpha,value:n.value,viewProps:n.viewProps})}};class gn{constructor(e){this.components=e.components,this.asm_=e.assembly}constrain(e){const t=this.asm_.toComponents(e).map((r,h)=>{var U,K;return(K=(U=this.components[h])===null||U===void 0?void 0:U.constrain(r))!==null&&K!==void 0?K:r});return this.asm_.fromComponents(t)}}const Vi=N("pndtxt");class Ul{constructor(e,t){this.textViews=t.textViews,this.element=e.createElement("div"),this.element.classList.add(Vi()),this.textViews.forEach(r=>{const h=e.createElement("div");h.classList.add(Vi("a")),h.appendChild(r.element),this.element.appendChild(h)})}}function Ll(n,e,t){return new vs(n,{arrayPosition:t===0?"fst":t===e.axes.length-1?"lst":"mid",baseStep:e.axes[t].baseStep,parser:e.parser,props:e.axes[t].textProps,value:pe(0,{constraint:e.axes[t].constraint}),viewProps:e.viewProps})}class Ar{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.acs_=t.axes.map((r,h)=>Ll(e,t,h)),this.acs_.forEach((r,h)=>{_s({primary:this.value,secondary:r.value,forward:U=>t.assembly.toComponents(U.rawValue)[h],backward:(U,K)=>{const fe=t.assembly.toComponents(U.rawValue);return fe[h]=K.rawValue,t.assembly.fromComponents(fe)}})}),this.view=new Ul(e,{textViews:this.acs_.map(r=>r.view)})}}function $i(n,e){return"step"in n&&!z(n.step)?new _n(n.step,e):null}function Ni(n){return!z(n.max)&&!z(n.min)?new fn({max:n.max,min:n.min}):!z(n.max)||!z(n.min)?new us({max:n.max,min:n.min}):null}function zl(n){const e=Nt(n,fn);if(e)return[e.values.get("min"),e.values.get("max")];const t=Nt(n,us);return t?[t.minValue,t.maxValue]:[void 0,void 0]}function Il(n,e){const t=[],r=$i(n,e);r&&t.push(r);const h=Ni(n);h&&t.push(h);const U=gr(n.options);return U&&t.push(U),new Tn(t)}const Gl={id:"input-number",type:"input",accept:(n,e)=>{if(typeof n!="number")return null;const t=ge,r=Ae(e,{format:t.optional.function,max:t.optional.number,min:t.optional.number,options:t.optional.custom(Us),step:t.optional.number});return r?{initialValue:n,params:r}:null},binding:{reader:n=>ci,constraint:n=>Il(n.params,n.initialValue),writer:n=>bs},controller:n=>{var e;const t=n.value,r=n.constraint,h=r&&Nt(r,Cn);if(h)return new tn(n.document,{props:new he({options:h.values.value("options")}),value:t,viewProps:n.viewProps});const U=(e="format"in n.params?n.params.format:void 0)!==null&&e!==void 0?e:Et(Ls(r,t.rawValue)),K=r&&Nt(r,fn);return K?new br(n.document,{baseStep:Hn(r),parser:sn,sliderProps:new he({maxValue:K.values.value("max"),minValue:K.values.value("min")}),textProps:he.fromObject({draggingScale:Yn(r,t.rawValue),formatter:U}),value:t,viewProps:n.viewProps}):new vs(n.document,{baseStep:Hn(r),parser:sn,props:he.fromObject({draggingScale:Yn(r,t.rawValue),formatter:U}),value:t,viewProps:n.viewProps})}};class wn{constructor(e=0,t=0){this.x=e,this.y=t}getComponents(){return[this.x,this.y]}static isObject(e){if(z(e))return!1;const t=e.x,r=e.y;return!(typeof t!="number"||typeof r!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y}toObject(){return{x:this.x,y:this.y}}}const qi={toComponents:n=>n.getComponents(),fromComponents:n=>new wn(...n)},Xn=N("p2d");class Fl{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Xn()),t.viewProps.bindClassModifiers(this.element),de(t.expanded,Se(this.element,Xn(void 0,"expanded")));const r=e.createElement("div");r.classList.add(Xn("h")),this.element.appendChild(r);const h=e.createElement("button");h.classList.add(Xn("b")),h.appendChild(S(e,"p2dpad")),t.viewProps.bindDisabled(h),r.appendChild(h),this.buttonElement=h;const U=e.createElement("div");if(U.classList.add(Xn("t")),r.appendChild(U),this.textElement=U,t.pickerLayout==="inline"){const K=e.createElement("div");K.classList.add(Xn("p")),this.element.appendChild(K),this.pickerElement=K}else this.pickerElement=null}}const xn=N("p2dp");class Ol{constructor(e,t){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.invertsY_=t.invertsY,this.maxValue_=t.maxValue,this.element=e.createElement("div"),this.element.classList.add(xn()),t.layout==="popup"&&this.element.classList.add(xn(void 0,"p")),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("div");r.classList.add(xn("p")),t.viewProps.bindTabIndex(r),this.element.appendChild(r),this.padElement=r;const h=e.createElementNS(M,"svg");h.classList.add(xn("g")),this.padElement.appendChild(h),this.svgElem_=h;const U=e.createElementNS(M,"line");U.classList.add(xn("ax")),U.setAttributeNS(null,"x1","0"),U.setAttributeNS(null,"y1","50%"),U.setAttributeNS(null,"x2","100%"),U.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(U);const K=e.createElementNS(M,"line");K.classList.add(xn("ax")),K.setAttributeNS(null,"x1","50%"),K.setAttributeNS(null,"y1","0"),K.setAttributeNS(null,"x2","50%"),K.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(K);const fe=e.createElementNS(M,"line");fe.classList.add(xn("l")),fe.setAttributeNS(null,"x1","50%"),fe.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(fe),this.lineElem_=fe;const ze=e.createElement("div");ze.classList.add(xn("m")),this.padElement.appendChild(ze),this.markerElem_=ze,t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[e,t]=this.value.rawValue.getComponents(),r=this.maxValue_,h=ht(e,-r,+r,0,100),U=ht(t,-r,+r,0,100),K=this.invertsY_?100-U:U;this.lineElem_.setAttributeNS(null,"x2",`${h}%`),this.lineElem_.setAttributeNS(null,"y2",`${K}%`),this.markerElem_.style.left=`${h}%`,this.markerElem_.style.top=`${K}%`}onValueChange_(){this.update_()}onFoldableChange_(){this.update_()}}function Wi(n,e,t){return[At(e[0],rn(n)),At(e[1],ms(n))*(t?1:-1)]}class Vl{constructor(e,t){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.baseSteps_=t.baseSteps,this.maxValue_=t.maxValue,this.invertsY_=t.invertsY,this.view=new Ol(e,{invertsY:this.invertsY_,layout:t.layout,maxValue:this.maxValue_,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new An(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const r=this.maxValue_,h=ht(e.point.x,0,e.bounds.width,-r,+r),U=ht(this.invertsY_?e.bounds.height-e.point.y:e.point.y,0,e.bounds.height,-r,+r);this.value.setRawValue(new wn(h,U),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onPadKeyDown_(e){di(e.key)&&e.preventDefault();const[t,r]=Wi(e,this.baseSteps_,this.invertsY_);t===0&&r===0||this.value.setRawValue(new wn(this.value.rawValue.x+t,this.value.rawValue.y+r),{forceEmit:!1,last:!1})}onPadKeyUp_(e){const[t,r]=Wi(e,this.baseSteps_,this.invertsY_);t===0&&r===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class $l{constructor(e,t){var r,h;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=Je.create(t.expanded),this.popC_=t.pickerLayout==="popup"?new hs(e,{viewProps:this.viewProps}):null;const U=new Vl(e,{baseSteps:[t.axes[0].baseStep,t.axes[1].baseStep],invertsY:t.invertsY,layout:t.pickerLayout,maxValue:t.maxValue,value:this.value,viewProps:this.viewProps});U.view.allFocusableElements.forEach(K=>{K.addEventListener("blur",this.onPopupChildBlur_),K.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=U,this.textC_=new Ar(e,{assembly:qi,axes:t.axes,parser:t.parser,value:this.value,viewProps:this.viewProps}),this.view=new Fl(e,{expanded:this.foldable_.value("expanded"),pickerLayout:t.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(r=this.view.buttonElement)===null||r===void 0||r.addEventListener("blur",this.onPadButtonBlur_),(h=this.view.buttonElement)===null||h===void 0||h.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),_s({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:K=>K.rawValue,backward:(K,fe)=>fe.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),st(this.foldable_,this.view.pickerElement))}onPadButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,r=e.relatedTarget;(!r||!t.contains(r))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,r=te(e);r&&t.contains(r)||r&&r===this.view.buttonElement&&!d(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.view.buttonElement.focus()}}class Jn{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}getComponents(){return[this.x,this.y,this.z]}static isObject(e){if(z(e))return!1;const t=e.x,r=e.y,h=e.z;return!(typeof t!="number"||typeof r!="number"||typeof h!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const Ki={toComponents:n=>n.getComponents(),fromComponents:n=>new Jn(...n)};function Nl(n){return Jn.isObject(n)?new Jn(n.x,n.y,n.z):new Jn}function ql(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z)}function Wl(n,e){return new gn({assembly:Ki,components:[an("x"in n?n.x:void 0,e.x),an("y"in n?n.y:void 0,e.y),an("z"in n?n.z:void 0,e.z)]})}function Rr(n,e){return{baseStep:Hn(e),constraint:e,textProps:he.fromObject({draggingScale:Yn(e,n),formatter:Et(Ls(e,n))})}}const Kl={id:"input-point3d",type:"input",accept:(n,e)=>{if(!Jn.isObject(n))return null;const t=ge,r=Ae(e,{x:t.optional.custom(vn),y:t.optional.custom(vn),z:t.optional.custom(vn)});return r?{initialValue:n,params:r}:null},binding:{reader:n=>Nl,constraint:n=>Wl(n.params,n.initialValue),equals:Jn.equals,writer:n=>ql},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof gn))throw L.shouldNeverHappen();return new Ar(n.document,{assembly:Ki,axes:[Rr(e.rawValue.x,t.components[0]),Rr(e.rawValue.y,t.components[1]),Rr(e.rawValue.z,t.components[2])],parser:sn,value:e,viewProps:n.viewProps})}};class Qn{constructor(e=0,t=0,r=0,h=0){this.x=e,this.y=t,this.z=r,this.w=h}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(e){if(z(e))return!1;const t=e.x,r=e.y,h=e.z,U=e.w;return!(typeof t!="number"||typeof r!="number"||typeof h!="number"||typeof U!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z&&e.w===t.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const ji={toComponents:n=>n.getComponents(),fromComponents:n=>new Qn(...n)};function jl(n){return Qn.isObject(n)?new Qn(n.x,n.y,n.z,n.w):new Qn}function Hl(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z),n.writeProperty("w",e.w)}function Yl(n,e){return new gn({assembly:ji,components:[an("x"in n?n.x:void 0,e.x),an("y"in n?n.y:void 0,e.y),an("z"in n?n.z:void 0,e.z),an("w"in n?n.w:void 0,e.w)]})}function Zl(n,e){return{baseStep:Hn(e),constraint:e,textProps:he.fromObject({draggingScale:Yn(e,n),formatter:Et(Ls(e,n))})}}const Xl={id:"input-point4d",type:"input",accept:(n,e)=>{if(!Qn.isObject(n))return null;const t=ge,r=Ae(e,{x:t.optional.custom(vn),y:t.optional.custom(vn),z:t.optional.custom(vn),w:t.optional.custom(vn)});return r?{initialValue:n,params:r}:null},binding:{reader:n=>jl,constraint:n=>Yl(n.params,n.initialValue),equals:Qn.equals,writer:n=>Hl},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof gn))throw L.shouldNeverHappen();return new Ar(n.document,{assembly:ji,axes:e.rawValue.getComponents().map((r,h)=>Zl(r,t.components[h])),parser:sn,value:e,viewProps:n.viewProps})}};function Jl(n){const e=[],t=gr(n.options);return t&&e.push(t),new Tn(e)}const Ql={id:"input-string",type:"input",accept:(n,e)=>{if(typeof n!="string")return null;const r=Ae(e,{options:ge.optional.custom(Us)});return r?{initialValue:n,params:r}:null},binding:{reader:n=>ui,constraint:n=>Jl(n.params),writer:n=>bs},controller:n=>{const e=n.document,t=n.value,r=n.constraint,h=r&&Nt(r,Cn);return h?new tn(e,{props:new he({options:h.values.value("options")}),value:t,viewProps:n.viewProps}):new qt(e,{parser:U=>U,props:he.fromObject({formatter:fr}),value:t,viewProps:n.viewProps})}},ws={monitor:{defaultInterval:200,defaultLineCount:3}},Hi=N("mll");class ec{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(Hi()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("textarea");r.classList.add(Hi("i")),r.style.height=`calc(var(--bld-us) * ${t.lineCount})`,r.readOnly=!0,t.viewProps.bindDisabled(r),this.element.appendChild(r),this.textareaElem_=r,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.textareaElem_,t=e.scrollTop===e.scrollHeight-e.clientHeight,r=[];this.value.rawValue.forEach(h=>{h!==void 0&&r.push(this.formatter_(h))}),e.textContent=r.join(`
`),t&&(e.scrollTop=e.scrollHeight)}onValueUpdate_(){this.update_()}}class Dr{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new ec(e,{formatter:t.formatter,lineCount:t.lineCount,value:this.value,viewProps:this.viewProps})}}const Yi=N("sgl");class tc{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(Yi()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("input");r.classList.add(Yi("i")),r.readOnly=!0,r.type="text",t.viewProps.bindDisabled(r),this.element.appendChild(r),this.inputElement=r,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.value.rawValue,t=e[e.length-1];this.inputElement.value=t!==void 0?this.formatter_(t):""}onValueUpdate_(){this.update_()}}class Ur{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new tc(e,{formatter:t.formatter,value:this.value,viewProps:this.viewProps})}}const nc={id:"monitor-bool",type:"monitor",accept:(n,e)=>{if(typeof n!="boolean")return null;const r=Ae(e,{lineCount:ge.optional.number});return r?{initialValue:n,params:r}:null},binding:{reader:n=>R},controller:n=>{var e;return n.value.rawValue.length===1?new Ur(n.document,{formatter:ee,value:n.value,viewProps:n.viewProps}):new Dr(n.document,{formatter:ee,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:ws.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}},yn=N("grl");class sc{constructor(e,t){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=e.createElement("div"),this.element.classList.add(yn()),t.viewProps.bindClassModifiers(this.element),this.formatter_=t.formatter,this.props_=t.props,this.cursor_=t.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const r=e.createElementNS(M,"svg");r.classList.add(yn("g")),r.style.height=`calc(var(--bld-us) * ${t.lineCount})`,this.element.appendChild(r),this.svgElem_=r;const h=e.createElementNS(M,"polyline");this.svgElem_.appendChild(h),this.lineElem_=h;const U=e.createElement("div");U.classList.add(yn("t"),N("tt")()),this.element.appendChild(U),this.tooltipElem_=U,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const e=this.svgElem_.getBoundingClientRect(),t=this.value.rawValue.length-1,r=this.props_.get("minValue"),h=this.props_.get("maxValue"),U=[];this.value.rawValue.forEach((Xe,nt)=>{if(Xe===void 0)return;const zn=ht(nt,0,t,0,e.width),xs=ht(Xe,r,h,e.height,0);U.push([zn,xs].join(","))}),this.lineElem_.setAttributeNS(null,"points",U.join(" "));const K=this.tooltipElem_,fe=this.value.rawValue[this.cursor_.rawValue];if(fe===void 0){K.classList.remove(yn("t","a"));return}const ze=ht(this.cursor_.rawValue,0,t,0,e.width),Ge=ht(fe,r,h,e.height,0);K.style.left=`${ze}px`,K.style.top=`${Ge}px`,K.textContent=`${this.formatter_(fe)}`,K.classList.contains(yn("t","a"))||(K.classList.add(yn("t","a"),yn("t","in")),a(K),K.classList.remove(yn("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class rc{constructor(e,t){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props_=t.props,this.value=t.value,this.viewProps=t.viewProps,this.cursor_=pe(-1),this.view=new sc(e,{cursor:this.cursor_,formatter:t.formatter,lineCount:t.lineCount,props:this.props_,value:this.value,viewProps:this.viewProps}),!d(e))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const r=new An(this.view.element);r.emitter.on("down",this.onGraphPointerDown_),r.emitter.on("move",this.onGraphPointerMove_),r.emitter.on("up",this.onGraphPointerUp_)}}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(e){const t=this.view.element.getBoundingClientRect();this.cursor_.rawValue=Math.floor(ht(e.offsetX,0,t.width,0,this.value.rawValue.length))}onGraphPointerDown_(e){this.onGraphPointerMove_(e)}onGraphPointerMove_(e){if(!e.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(ht(e.data.point.x,0,e.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function Lr(n){return"format"in n&&!z(n.format)?n.format:Et(2)}function ic(n){var e;return n.value.rawValue.length===1?new Ur(n.document,{formatter:Lr(n.params),value:n.value,viewProps:n.viewProps}):new Dr(n.document,{formatter:Lr(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:ws.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}function ac(n){var e,t,r;return new rc(n.document,{formatter:Lr(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:ws.monitor.defaultLineCount,props:he.fromObject({maxValue:(t="max"in n.params?n.params.max:null)!==null&&t!==void 0?t:100,minValue:(r="min"in n.params?n.params.min:null)!==null&&r!==void 0?r:0}),value:n.value,viewProps:n.viewProps})}function Zi(n){return"view"in n&&n.view==="graph"}const oc={id:"monitor-number",type:"monitor",accept:(n,e)=>{if(typeof n!="number")return null;const t=ge,r=Ae(e,{format:t.optional.function,lineCount:t.optional.number,max:t.optional.number,min:t.optional.number,view:t.optional.string});return r?{initialValue:n,params:r}:null},binding:{defaultBufferSize:n=>Zi(n)?64:1,reader:n=>ci},controller:n=>Zi(n.params)?ac(n):ic(n)},lc={id:"monitor-string",type:"monitor",accept:(n,e)=>{if(typeof n!="string")return null;const t=ge,r=Ae(e,{lineCount:t.optional.number,multiline:t.optional.boolean});return r?{initialValue:n,params:r}:null},binding:{reader:n=>ui},controller:n=>{var e;const t=n.value;return t.rawValue.length>1||"multiline"in n.params&&n.params.multiline?new Dr(n.document,{formatter:fr,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:ws.monitor.defaultLineCount,value:t,viewProps:n.viewProps}):new Ur(n.document,{formatter:fr,value:t,viewProps:n.viewProps})}};function cc(n,e){var t;const r=n.accept(e.target.read(),e.params);if(z(r))return null;const h=ge,U={target:e.target,initialValue:r.initialValue,params:r.params},K=n.binding.reader(U),fe=n.binding.constraint?n.binding.constraint(U):void 0,ze=pe(K(r.initialValue),{constraint:fe,equals:n.binding.equals}),Ge=new hn({reader:K,target:e.target,value:ze,writer:n.binding.writer(U)}),Xe=h.optional.boolean(e.params.disabled).value,nt=h.optional.boolean(e.params.hidden).value,zn=n.controller({constraint:fe,document:e.document,initialValue:r.initialValue,params:r.params,value:Ge.value,viewProps:g.create({disabled:Xe,hidden:nt})});return new He(e.document,{binding:Ge,blade:Fe(),props:he.fromObject({label:"label"in e.params?(t=h.optional.string(e.params.label).value)!==null&&t!==void 0?t:null:e.target.key}),valueController:zn})}function uc(n,e){return e===0?new As:new or(n,e??ws.monitor.defaultInterval)}function dc(n,e){var t,r,h;const U=ge,K=n.accept(e.target.read(),e.params);if(z(K))return null;const fe={target:e.target,initialValue:K.initialValue,params:K.params},ze=n.binding.reader(fe),Ge=(r=(t=U.optional.number(e.params.bufferSize).value)!==null&&t!==void 0?t:n.binding.defaultBufferSize&&n.binding.defaultBufferSize(K.params))!==null&&r!==void 0?r:1,Xe=U.optional.number(e.params.interval).value,nt=new xt({reader:ze,target:e.target,ticker:uc(e.document,Xe),value:lr(Ge)}),zn=U.optional.boolean(e.params.disabled).value,xs=U.optional.boolean(e.params.hidden).value,ys=n.controller({document:e.document,params:K.params,value:nt.value,viewProps:g.create({disabled:zn,hidden:xs})});return new at(e.document,{binding:nt,blade:Fe(),props:he.fromObject({label:"label"in e.params?(h=U.optional.string(e.params.label).value)!==null&&h!==void 0?h:null:e.target.key}),valueController:ys})}class pc{constructor(){this.pluginsMap_={blades:[],inputs:[],monitors:[]}}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(e){e.type==="blade"?this.pluginsMap_.blades.unshift(e):e.type==="input"?this.pluginsMap_.inputs.unshift(e):e.type==="monitor"&&this.pluginsMap_.monitors.unshift(e)}createInput(e,t,r){const h=t.read();if(z(h))throw new L({context:{key:t.key},type:"nomatchingcontroller"});const U=this.pluginsMap_.inputs.reduce((K,fe)=>K??cc(fe,{document:e,target:t,params:r}),null);if(U)return U;throw new L({context:{key:t.key},type:"nomatchingcontroller"})}createMonitor(e,t,r){const h=this.pluginsMap_.monitors.reduce((U,K)=>U??dc(K,{document:e,params:r,target:t}),null);if(h)return h;throw new L({context:{key:t.key},type:"nomatchingcontroller"})}createBlade(e,t){const r=this.pluginsMap_.blades.reduce((h,U)=>h??ls(U,{document:e,params:t}),null);if(!r)throw new L({type:"nomatchingview",context:{params:t}});return r}createBladeApi(e){if(e instanceof He)return new $e(e);if(e instanceof at)return new tt(e);if(e instanceof it)return new Pt(e,this);const t=this.pluginsMap_.blades.reduce((r,h)=>r??h.api({controller:e,pool:this}),null);if(!t)throw L.shouldNeverHappen();return t}}function hc(){const n=new pc;return[gc,Kl,Xl,Ql,Gl,Dl,Rl,Cl,To,nc,lc,oc,xe,Sn,Vn,kn].forEach(e=>{n.register(e)}),n}function fc(n){return wn.isObject(n)?new wn(n.x,n.y):new wn}function _c(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y)}function an(n,e){if(!n)return;const t=[],r=$i(n,e);r&&t.push(r);const h=Ni(n);return h&&t.push(h),new Tn(t)}function mc(n,e){return new gn({assembly:qi,components:[an("x"in n?n.x:void 0,e.x),an("y"in n?n.y:void 0,e.y)]})}function Xi(n,e){const[t,r]=n?zl(n):[];if(!z(t)||!z(r))return Math.max(Math.abs(t??0),Math.abs(r??0));const h=Hn(n);return Math.max(Math.abs(h)*10,Math.abs(e)*10)}function vc(n,e){const t=e instanceof gn?e.components[0]:void 0,r=e instanceof gn?e.components[1]:void 0,h=Xi(t,n.x),U=Xi(r,n.y);return Math.max(h,U)}function Ji(n,e){return{baseStep:Hn(e),constraint:e,textProps:he.fromObject({draggingScale:Yn(e,n),formatter:Et(Ls(e,n))})}}function bc(n){if(!("y"in n))return!1;const e=n.y;return e&&"inverted"in e?!!e.inverted:!1}const gc={id:"input-point2d",type:"input",accept:(n,e)=>{if(!wn.isObject(n))return null;const t=ge,r=Ae(e,{expanded:t.optional.boolean,picker:t.optional.custom(fi),x:t.optional.custom(vn),y:t.optional.object({inverted:t.optional.boolean,max:t.optional.number,min:t.optional.number,step:t.optional.number})});return r?{initialValue:n,params:r}:null},binding:{reader:n=>fc,constraint:n=>mc(n.params,n.initialValue),equals:wn.equals,writer:n=>_c},controller:n=>{const e=n.document,t=n.value,r=n.constraint;if(!(r instanceof gn))throw L.shouldNeverHappen();const h="expanded"in n.params?n.params.expanded:void 0,U="picker"in n.params?n.params.picker:void 0;return new $l(e,{axes:[Ji(t.rawValue.x,r.components[0]),Ji(t.rawValue.y,r.components[1])],expanded:h??!1,invertsY:bc(n.params),maxValue:vc(t.rawValue,r),parser:sn,pickerLayout:U??"popup",value:t,viewProps:n.viewProps})}};class Qi extends u{constructor(e){super(e),this.emitter_=new G,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new P(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get options(){return this.controller_.valueController.props.get("options")}set options(e){this.controller_.valueController.props.set("options",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const r=t.bind(this);return this.emitter_.on(e,h=>{r(h.event)}),this}}class ea extends u{constructor(e){super(e),this.emitter_=new G,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new P(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get maxValue(){return this.controller_.valueController.sliderController.props.get("maxValue")}set maxValue(e){this.controller_.valueController.sliderController.props.set("maxValue",e)}get minValue(){return this.controller_.valueController.sliderController.props.get("minValue")}set minValue(e){this.controller_.valueController.sliderController.props.set("minValue",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const r=t.bind(this);return this.emitter_.on(e,h=>{r(h.event)}),this}}class ta extends u{constructor(e){super(e),this.emitter_=new G,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new P(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get formatter(){return this.controller_.valueController.props.get("formatter")}set formatter(e){this.controller_.valueController.props.set("formatter",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const r=t.bind(this);return this.emitter_.on(e,h=>{r(h.event)}),this}}const wc=function(){return{id:"list",type:"blade",accept(n){const e=ge,t=Ae(n,{options:e.required.custom(Us),value:e.required.raw,view:e.required.constant("list"),label:e.optional.string});return t?{params:t}:null},controller(n){const e=new Cn(_i(n.params.options)),t=pe(n.params.value,{constraint:e}),r=new tn(n.document,{props:new he({options:e.values.value("options")}),value:t,viewProps:n.viewProps});return new zt(n.document,{blade:n.blade,props:he.fromObject({label:n.params.label}),valueController:r})},api(n){return!(n.controller instanceof zt)||!(n.controller.valueController instanceof tn)?null:new Qi(n.controller)}}}();function xc(n){return n.reduce((e,t)=>Object.assign(e,{[t.presetKey]:t.read()}),{})}function yc(n,e){n.forEach(t=>{const r=e[t.target.presetKey];r!==void 0&&t.writer(t.target,t.reader(r))})}class Pc extends Dt{constructor(e,t){super(e,t)}get element(){return this.controller_.view.element}importPreset(e){const t=this.controller_.rackController.rack.find(He).map(r=>r.binding);yc(t,e),this.refresh()}exportPreset(){const e=this.controller_.rackController.rack.find(He).map(t=>t.binding.target);return xc(e)}refresh(){this.controller_.rackController.rack.find(He).forEach(e=>{e.binding.read()}),this.controller_.rackController.rack.find(at).forEach(e=>{e.binding.read()})}}class Sc extends $t{constructor(e,t){super(e,{expanded:t.expanded,blade:t.blade,props:t.props,root:!0,viewProps:t.viewProps})}}const Ec={id:"slider",type:"blade",accept(n){const e=ge,t=Ae(n,{max:e.required.number,min:e.required.number,view:e.required.constant("slider"),format:e.optional.function,label:e.optional.string,value:e.optional.number});return t?{params:t}:null},controller(n){var e,t;const r=(e=n.params.value)!==null&&e!==void 0?e:0,h=new fn({max:n.params.max,min:n.params.min}),U=new br(n.document,{baseStep:1,parser:sn,sliderProps:new he({maxValue:h.values.value("max"),minValue:h.values.value("min")}),textProps:he.fromObject({draggingScale:Yn(void 0,r),formatter:(t=n.params.format)!==null&&t!==void 0?t:mo}),value:pe(r,{constraint:h}),viewProps:n.viewProps});return new zt(n.document,{blade:n.blade,props:he.fromObject({label:n.params.label}),valueController:U})},api(n){return!(n.controller instanceof zt)||!(n.controller.valueController instanceof br)?null:new ea(n.controller)}},kc=function(){return{id:"text",type:"blade",accept(n){const e=ge,t=Ae(n,{parse:e.required.function,value:e.required.raw,view:e.required.constant("text"),format:e.optional.function,label:e.optional.string});return t?{params:t}:null},controller(n){var e;const t=new qt(n.document,{parser:n.params.parse,props:he.fromObject({formatter:(e=n.params.format)!==null&&e!==void 0?e:r=>String(r)}),value:pe(n.params.value),viewProps:n.viewProps});return new zt(n.document,{blade:n.blade,props:he.fromObject({label:n.params.label}),valueController:t})},api(n){return!(n.controller instanceof zt)||!(n.controller.valueController instanceof qt)?null:new ta(n.controller)}}}();function Tc(n){const e=n.createElement("div");return e.classList.add(N("dfw")()),n.body&&n.body.appendChild(e),e}function na(n,e,t){if(n.querySelector(`style[data-tp-style=${e}]`))return;const r=n.createElement("style");r.dataset.tpStyle=e,r.textContent=t,n.head.appendChild(r)}class Cc extends Pc{constructor(e){var t,r;const h=e??{},U=(t=h.document)!==null&&t!==void 0?t:c(),K=hc(),fe=new Sc(U,{expanded:h.expanded,blade:Fe(),props:he.fromObject({title:h.title}),viewProps:g.create()});super(fe,K),this.pool_=K,this.containerElem_=(r=h.container)!==null&&r!==void 0?r:Tc(U),this.containerElem_.appendChild(this.element),this.doc_=U,this.usesDefaultWrapper_=!h.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw L.alreadyDisposed();return this.doc_}dispose(){const e=this.containerElem_;if(!e)throw L.alreadyDisposed();if(this.usesDefaultWrapper_){const t=e.parentElement;t&&t.removeChild(e)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(e){("plugin"in e?[e.plugin]:"plugins"in e?e.plugins:[]).forEach(r=>{this.pool_.register(r),this.embedPluginStyle_(r)})}embedPluginStyle_(e){e.css&&na(this.document,`plugin-${e.id}`,e.css)}setUpDefaultPlugins_(){na(this.document,"default",'.tp-tbiv_b,.tp-coltxtv_ms,.tp-ckbv_i,.tp-rotv_b,.tp-fldv_b,.tp-mllv_i,.tp-sglv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-mllv_i,.tp-sglv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--mo-fg);height:var(--bld-us);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-mllv_i::-webkit-scrollbar,.tp-sglv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-mllv_i::-webkit-scrollbar-corner,.tp-sglv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-mllv_i::-webkit-scrollbar-thumb,.tp-sglv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-br: var(--tp-base-border-radius, 6px);--cnt-h-p: var(--tp-container-horizontal-padding, 4px);--cnt-v-p: var(--tp-container-vertical-padding, 4px);--elm-br: var(--tp-element-border-radius, 2px);--bld-s: var(--tp-blade-spacing, 4px);--bld-us: var(--tp-blade-unit-size, 20px);--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tabv_c .tp-brkv>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-v-p))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tabv_c .tp-brkv>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--bld-s)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tabv_c .tp-brkv>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tabv_c .tp-brkv>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--elm-br);border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tabv_c .tp-brkv .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--elm-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);overflow:hidden;padding-left:var(--cnt-h-p);padding-right:calc(4px + var(--bld-us) + var(--cnt-h-p));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-h-p) + (var(--bld-us) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--elm-br);cursor:pointer;display:block;height:var(--bld-us);position:relative;width:var(--bld-us)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--bld-us)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--bld-s);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--bld-s)}.tp-colpv_rgb{display:flex;margin-top:var(--bld-s);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-v-p);padding-top:calc(var(--cnt-v-p) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--elm-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--bld-us)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--elm-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--elm-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;cursor:pointer;display:block;height:var(--bld-us);left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:var(--bld-us)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--elm-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--elm-br);color:var(--lbl-fg);cursor:pointer;height:var(--bld-us);line-height:var(--bld-us);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv.tp-fldv-not .tp-fldv_b{display:none}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--bld-us)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-h-p);padding-right:var(--cnt-h-p)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding:0 4px}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--bld-us)*3);line-height:var(--bld-us);padding:0 4px;resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--bld-us);margin-right:4px;position:relative;width:var(--bld-us)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--bld-s);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-p2dpv{padding-left:calc(var(--bld-us) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:6px;box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:168px;padding:var(--cnt-v-p) var(--cnt-h-p);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--bld-us);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--elm-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--bld-us) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_c{padding-bottom:var(--cnt-v-p);padding-left:4px;padding-top:var(--cnt-v-p)}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-h-p) + 4px);padding-right:calc(var(--cnt-h-p) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);bottom:2px;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);opacity:.5;overflow:hidden;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-txtv{position:relative}.tp-txtv_i{padding:0 4px}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:-3px;position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--bld-us) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--elm-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--font-family);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--bld-us) + var(--cnt-h-p));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv.tp-rotv-not .tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}'),this.pool_.getAll().forEach(e=>{this.embedPluginStyle_(e)}),this.registerPlugin({plugins:[Ec,wc,kn,kc]})}}const Mc=new p("3.1.10");o.BladeApi=u,o.ButtonApi=J,o.FolderApi=Dt,o.InputBindingApi=$e,o.ListApi=Qi,o.MonitorBindingApi=tt,o.Pane=Cc,o.SeparatorApi=Qt,o.SliderApi=ea,o.TabApi=Bs,o.TabPageApi=en,o.TextApi=ta,o.TpChangeEvent=P,o.VERSION=Mc,Object.defineProperty(o,"__esModule",{value:!0})})})(Yr,Yr.exports);var Qa=Yr.exports;const ku=`// 2DGS preprocess — per-alive-Gauss view-dependent color eval.
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
`,Tu=`const WG_SIZE = 256u;
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
}`,Cu=`// 2DGS surfel cull pass — forked from gaussian_cull.wgsl.
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
`,Mu=`// shader implementing gpu radix sort.

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
`,Bu=`// shader implementing gpu radix sort.

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
`,Au=`// ============================================================================
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
}`,eo=32,Zr=1,Xr=2,ya=4,Pa=512,Sa=1024,Ea=2048,ka=4096,Ta=8192,Ru=0,Xt=new ArrayBuffer(eo),_t={canvas_size:new Uint32Array(Xt,0,2),accel_flags:new Uint32Array(Xt,8,1),feature_mode:new Uint32Array(Xt,12,1),gaussian_scaling:new Float32Array(Xt,16,1),sh_bias:new Float32Array(Xt,20,1),color_K:new Uint32Array(Xt,24,1),walltime:new Float32Array(Xt,28,1)};function Du(i){_t.canvas_size[0]=i.width>>>0,_t.canvas_size[1]=i.height>>>0,_t.accel_flags[0]=(i.accel_flags??Zr|Xr)>>>0,_t.feature_mode[0]=(i.feature_mode??Ru)>>>0,_t.gaussian_scaling[0]=i.gaussian_scaling??1,_t.sh_bias[0]=i.sh_bias??.5,_t.color_K[0]=(i.color_K??0)>>>0,_t.walltime[0]=i.walltime??0}function ii(i,s){i.queue.writeBuffer(s,0,Xt)}function cn(i,s,o){o&&i&&s&&ii(i,s)}function Pn(i,s,o,p,u=!0){_t.canvas_size[0]=i>>>0,_t.canvas_size[1]=s>>>0,cn(o??null,p??null,u)}function Ca(i,s,o,p=!0){_t.gaussian_scaling[0]=i,cn(s??null,o??null,p)}function Ma(i,s,o,p=!0){_t.sh_bias[0]=i,cn(s??null,o??null,p)}function Uu(i,s,o,p=!0){_t.color_K[0]=i>>>0,cn(s??null,o??null,p)}function Lu(i,s,o,p=!0){_t.feature_mode[0]=i>>>0,cn(s??null,o??null,p)}function zu(i){const s=new Float32Array(1),o=new Uint32Array(s.buffer);s[0]=i;const p=o[0],u=p>>>16&32768,f=(p>>>23&255)-127+15;return f<=0?u:f>=31?u|31744:u|f<<10|p>>>13&1023}function Ba(i,s=.3,o,p,u=!0){let f=_t.accel_flags[0]&65535&~Ta;i&&(f=f|Ta|zu(s)<<16),_t.accel_flags[0]=f>>>0,cn(o??null,p??null,u)}function es(i,s,o,p=!0){let u=_t.accel_flags[0];i.oac!==void 0&&(u=i.oac?u|Zr:u&~Zr),i.spr!==void 0&&(u=i.spr?u|Xr:u&~Xr),i.bfc!==void 0&&(u=i.bfc?u|ya:u&~ya),i.hypLegacy!==void 0&&(u=i.hypLegacy?u|Pa:u&~Pa),i.centred!==void 0&&(u=i.centred?u|ka:u&~ka),i.raysplat!==void 0&&(u=i.raysplat?u|Ea:u&~Ea),i.legacyPos!==void 0&&(u=i.legacyPos?u|Sa:u&~Sa),_t.accel_flags[0]=u>>>0,cn(s??null,o??null,p)}const Aa=16384;function Ra(i,s,o,p=!0){let u=_t.accel_flags[0];u=i?u|Aa:u&~Aa,_t.accel_flags[0]=u>>>0,cn(s??null,o??null,p)}function Iu(i,s,o,p=!0){const u=i>0?Math.max(1,Math.min(63,Math.round(i*8))):0;let f=_t.accel_flags[0];f=f&-505|u<<3,_t.accel_flags[0]=f>>>0,cn(s??null,o??null,p)}const Gu=256;function Ps(i,s){const o=[],p=[];let u=!0;for(const f of i.split(`
`)){const P=f.trim();let y;if((y=/^\/\/#if\s+(\w+)\s*$/.exec(P))!==null){const k=!!s[y[1]];p.push({parent:u,taken:k}),u=u&&k;continue}if(/^\/\/#else\s*$/.test(P)){const k=p[p.length-1];if(k===void 0)throw new Error("preprocessWGSL: #else without #if");u=k.parent&&!k.taken;continue}if(/^\/\/#endif\s*$/.test(P)){const k=p.pop();if(k===void 0)throw new Error("preprocessWGSL: #endif without #if");u=k.parent;continue}u&&o.push(f)}if(p.length!==0)throw new Error("preprocessWGSL: unterminated #if");return o.join(`
`)}const Fu=eo,Ou=8,Vu=96,$u=12,ai=8,on=1<<ai,Gn=256,Zs=32/ai,Nu=0,Gr=Zs&1;function Da(i,s){return{sort_indices_buffer:s.createBuffer({label:"ping-pong payload (indices)",size:i*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),sort_depths_buffer:s.createBuffer({label:"ping-pong keys (depths)",size:i*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})}}function qu(i,s){const o=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:7,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),p=i.createPipelineLayout({bindGroupLayouts:[o]}),u=f=>i.createComputePipeline({layout:p,compute:{module:s,entryPoint:f,constants:{WG_SIZE:Gn}}});return{l0TileScan:u("prefix_l0_tile_scan"),l1TileScanOnL0:u("prefix_l1_tile_scan_on_l0_sums"),l1ScanSums:u("prefix_scan_l1_sums"),addL1ToL0:u("prefix_add_l1_to_l0_offsets"),addL0ToElems:u("prefix_add_l0_to_elements"),computeDigitBase:u("compute_digit_base"),prefixBindGroupLayout:o}}function Wu(i,s,o){const p=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),u=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]}),f=i.createPipelineLayout({bindGroupLayouts:[p]}),P=i.createPipelineLayout({bindGroupLayouts:[u]}),y=[];for(let k=0;k<Zs;k++){const B={PASS_ID:k+Nu,RS_RADIX_LOG2:ai,RS_RADIX_SIZE:on};y.push({localHistogram:i.createComputePipeline({layout:f,compute:{module:s,entryPoint:"local_histogram_pass",constants:B}}),scatterElements:i.createComputePipeline({layout:P,compute:{module:o,entryPoint:"scatter_elements",constants:B}})})}return{passes:y,localHistogramBindGroupLayout:p,scatterBindGroupLayout:u}}function Ku(i){const s=i.createShaderModule({label:"local histogram",code:Bu}),o=i.createShaderModule({label:"scatter",code:Mu}),p=i.createShaderModule({label:"blelloch prefix",code:Au}),u=qu(i,p),f=Wu(i,s,o);return{localHistogramBindGroupLayout:f.localHistogramBindGroupLayout,scatterBindGroupLayout:f.scatterBindGroupLayout,passes:f.passes,hierarchicalBlelloch:u}}function Ua(i){const s=i.createTexture({label:"atlas stub (4x4x1 zero RGBA8)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),o=s.createView({dimension:"2d-array"}),p=i.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge"}),u=i.createBuffer({label:"atlas rects stub (5 zero floats)",size:4*5,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),f=i.createBuffer({label:"tex_params stub (atlas_enabled=0)",size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});i.queue.writeBuffer(f,0,new ArrayBuffer(32));const P={width:0,height:0,channels:0,kernel_type:0,num_rects:0,uv_extent:0,sb_number:0,format:4294967295,sh_bias:0,res_bias:0,compact_mult:0,layer_h:0,atlas_scale:0,atlas_offset:0,n_layers:0,n_cols:1,layer_cuts:new Uint32Array,column_cuts:new Uint32Array([0,0]),slice_width:0,rects_expanded:new Float32Array,atlas_bytes:new Uint8Array};return{texture:s,view:o,sampler:p,rectsBuffer:u,texParamsBuffer:f,meta:P}}const ts=class ts{constructor(s,o,p,u,f,P=null,y={}){T(this,"device");T(this,"pc");T(this,"presentationFormat");T(this,"camera_buffer");T(this,"render_settings_buffer");T(this,"draw_indirect_buffer");T(this,"splat_2d_buffer");T(this,"querySet");T(this,"resolveBuffer");T(this,"resultBuffer");T(this,"queriesPerFrame",Ou);T(this,"queryCapacityFrames",200);T(this,"sort_prefixBindGroup");T(this,"sort_pipelines");T(this,"sort_localHistogramBindGroups");T(this,"sort_scatterBindGroups");T(this,"lastFrame",0);T(this,"frameCount",0);T(this,"preprocessPipeline");T(this,"cullPipeline");T(this,"renderPipeline");T(this,"indirectPipeline");T(this,"renderShaderModule");T(this,"betaKernel",1);T(this,"fetchById");T(this,"octBound");T(this,"acc16");T(this,"accTexture",null);T(this,"accView",null);T(this,"accW",0);T(this,"accH",0);T(this,"legacyRenderPipeline",null);T(this,"varyingsPipeline",null);T(this,"msaa",!1);T(this,"msaaTexture",null);T(this,"msaaView",null);T(this,"msaaW",0);T(this,"msaaH",0);T(this,"msaaPipelines",new Map);T(this,"mkVariant",null);T(this,"slopeTarget",null);T(this,"viewport",null);T(this,"slopeSource",0);T(this,"slopePipelines",new Map);T(this,"rendererBgls",[]);T(this,"betaKernelConst",1);T(this,"slopeBgl",null);T(this,"slopeBg",null);T(this,"slopeDummy",null);T(this,"legacyRenderer",!1);T(this,"accResolvePipeline",null);T(this,"accResolveBgl",null);T(this,"accResolveBindGroup",null);T(this,"twoPass",!1);T(this,"twoPassThresh",.5);T(this,"twoPassParamsBuffer",null);T(this,"twoPassBgl",null);T(this,"twoPassBg",null);T(this,"twoPassSplatsBgl",null);T(this,"twoPassSplatsBg",null);T(this,"twoPassModules",new Map);T(this,"twoPassPipelines",new Map);T(this,"twoPassDepth",null);T(this,"twoPassDepthView",null);T(this,"twoPassW",0);T(this,"twoPassH",0);T(this,"overdrawMode",0);T(this,"overdrawMax",48);T(this,"ovTexture",null);T(this,"ovView",null);T(this,"ovW",0);T(this,"ovH",0);T(this,"ovParamsBuffer",null);T(this,"ovResolvePipeline",null);T(this,"ovResolveBgl",null);T(this,"ovResolveBg",null);T(this,"ovStatsPipeline",null);T(this,"ovStatsBgl",null);T(this,"ovStatsBg",null);T(this,"ovStatsBuffer",null);T(this,"ovReadback",null);T(this,"ovReadState","idle");T(this,"ovLastStats",null);T(this,"ovPipelines",new Map);T(this,"renderSettingsBgl");T(this,"preprocessBgl2");T(this,"renderSplatsBgl");T(this,"atlasBgl");T(this,"sort_info_buffer");T(this,"sort_ping_pong");T(this,"crsBg");T(this,"gsBg");T(this,"cullBg2");T(this,"preprocessBg1");T(this,"renderSplatsBindGroup");T(this,"renderSettingsBindGroup");T(this,"atlasBindGroup");T(this,"indirectBindGroup");T(this,"sh_solvers_buffer");T(this,"bfcParamsBuffer");T(this,"bfcBindGroupLayout");T(this,"bfcBindGroup");T(this,"staticSortKeys",null);T(this,"wideFrustum",!1);T(this,"staticKeysBuffer",null);T(this,"bgColor",[0,0,0,0]);T(this,"showPerfDialogNext",!1);T(this,"requestReorderNextFrame",!1);T(this,"reorderInFlight",!1);T(this,"downloadOnceNextRead",!1);T(this,"downloadOnceFileName","fps_metrics");T(this,"allFrameTimes",[]);T(this,"lastStageBreakdownMs",null);T(this,"timeQueryEnabled");T(this,"atlas");T(this,"atlasParamsBuffer");T(this,"_atlasEnabled",!0);T(this,"mipLodBias",1);T(this,"_mipMode",1);T(this,"preFrame",null);this.fetchById=y.fetchById??!0,this.staticSortKeys=y.staticSortKeys??null,this.wideFrustum=y.wideFrustum??!1,this.octBound=y.octBound??!1,this.acc16=y.acc16??!1,mt(`[render_2dgs] variants: fetch_by_id=${this.fetchById} oct_bound=${this.octBound} acc16=${this.acc16}`);const k=f.includes("timestamp-query");this.timeQueryEnabled=k,k&&mt("⏰ using timestamp-query"),this.pc=s,this.device=o,this.presentationFormat=p,this.camera_buffer=u,this.atlas=P??Ua(o),this.atlasParamsBuffer=o.createBuffer({label:"atlas_params UBO",size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.writeAtlasParams(),o.addEventListener("uncapturederror",Te=>{console.error("A WebGPU error was not captured:",Te.error)}),this._setupTimestampQueries(),this._setupBuffers();const B=(Math.floor((this.pc.num_points+Gn-1)/Gn)+1)*Gn,F=Math.ceil(B/Gn);console.log(`keys count adjusted: ${B}`),console.log(`key size: ${this.pc.num_points}`);const z=o.createBuffer({label:"sort info",size:16*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT});this.sort_pipelines=Ku(o);const $=[Da(B,o),Da(B,o)],q=o.createBuffer({label:"workgroup histograms",size:F*on*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),H=o.createBuffer({label:"workgroup prefixes",size:F*on*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),L=o.createBuffer({label:"digit base",size:on*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),V=Math.ceil(F/Gn),J=Math.ceil(V/Gn),G=o.createBuffer({label:"prefix l0 sums",size:V*on*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),Y=o.createBuffer({label:"prefix l0 offsets",size:V*on*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),N=o.createBuffer({label:"prefix l1 sums",size:J*on*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),re=o.createBuffer({label:"prefix l1 offsets",size:J*on*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});this.sort_prefixBindGroup=o.createBindGroup({label:"prefix 2L bind group",layout:this.sort_pipelines.hierarchicalBlelloch.prefixBindGroupLayout,entries:[{binding:0,resource:{buffer:z}},{binding:1,resource:{buffer:q}},{binding:2,resource:{buffer:H}},{binding:3,resource:{buffer:G}},{binding:4,resource:{buffer:Y}},{binding:5,resource:{buffer:N}},{binding:6,resource:{buffer:re}},{binding:7,resource:{buffer:L}}]}),this.sort_localHistogramBindGroups=[o.createBindGroup({label:"localHistogram src=0",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:z}},{binding:1,resource:{buffer:$[0].sort_depths_buffer}},{binding:2,resource:{buffer:q}}]}),o.createBindGroup({label:"localHistogram src=1",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:z}},{binding:1,resource:{buffer:$[1].sort_depths_buffer}},{binding:2,resource:{buffer:q}}]})],this.sort_scatterBindGroups=[o.createBindGroup({label:"scatter 0->1",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:z}},{binding:1,resource:{buffer:L}},{binding:2,resource:{buffer:$[0].sort_depths_buffer}},{binding:3,resource:{buffer:$[1].sort_depths_buffer}},{binding:4,resource:{buffer:$[0].sort_indices_buffer}},{binding:5,resource:{buffer:$[1].sort_indices_buffer}},{binding:6,resource:{buffer:H}}]}),o.createBindGroup({label:"scatter 1->0",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:z}},{binding:1,resource:{buffer:L}},{binding:2,resource:{buffer:$[1].sort_depths_buffer}},{binding:3,resource:{buffer:$[0].sort_depths_buffer}},{binding:4,resource:{buffer:$[1].sort_indices_buffer}},{binding:5,resource:{buffer:$[0].sort_indices_buffer}},{binding:6,resource:{buffer:H}}]})],this.sort_info_buffer=z,this.sort_ping_pong=$;const ue=this.device.createBindGroupLayout({label:"camera + renderSettings",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),de=this.device.createBindGroupLayout({label:"gaussians + splats",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),ce=this.device.createBindGroupLayout({label:"cullBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),we=this.device.createBindGroupLayout({label:"preprocessBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]});this.crsBg=this.device.createBindGroup({label:"camera + renderSettings",layout:ue,entries:[{binding:0,resource:{buffer:this.camera_buffer}},{binding:1,resource:{buffer:this.render_settings_buffer}}]}),this.gsBg=this.device.createBindGroup({label:"surfels + splats",layout:de,entries:[{binding:0,resource:{buffer:this.pc.surfel_buffer}},{binding:1,resource:{buffer:this.splat_2d_buffer}}]}),this.cullBg2=this.device.createBindGroup({label:"cullBg2",layout:ce,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[0].sort_depths_buffer}},{binding:2,resource:{buffer:this.sort_ping_pong[0].sort_indices_buffer}},{binding:3,resource:{buffer:this.sh_solvers_buffer}}]}),this.preprocessBgl2=we,this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:we,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}},{binding:4,resource:{buffer:this.atlas.rectsBuffer}},{binding:5,resource:{buffer:this.atlasParamsBuffer}},{binding:6,resource:{buffer:this.pc.surfel_buffer}}]});const Se=this.device.createShaderModule({code:Tu});this.indirectPipeline=this.device.createComputePipeline({label:"indirect dispatch calc",layout:"auto",compute:{module:Se,entryPoint:"write_dispatch_triples",constants:{RS_RADIX_SIZE:256}}}),this.indirectBindGroup=this.device.createBindGroup({label:"indirect dispatch bind group",layout:this.indirectPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.draw_indirect_buffer}}]}),this.bfcParamsBuffer=this.device.createBuffer({label:"bfc params (uniform, 16 B)",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([2,0,0,0]));const Me=[{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}],Ee=[{binding:1,resource:{buffer:this.bfcParamsBuffer}}];if(this.staticSortKeys){if(this.staticSortKeys.length!==this.pc.num_points)throw new Error(`staticSortKeys has ${this.staticSortKeys.length} entries, expected ${this.pc.num_points}`);this.staticKeysBuffer=this.device.createBuffer({label:"static sort keys",size:ns(this.staticSortKeys.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.staticKeysBuffer,0,this.staticSortKeys),Me.push({binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}),Ee.push({binding:2,resource:{buffer:this.staticKeysBuffer}})}this.bfcBindGroupLayout=this.device.createBindGroupLayout({label:"bfc params (cull group 3)",entries:Me}),this.bfcBindGroup=this.device.createBindGroup({label:"bfc params bind",layout:this.bfcBindGroupLayout,entries:Ee});const le=this.device.createShaderModule({code:Ps(Cu,{STATIC_KEYS:this.staticSortKeys!==null,WIDE_FRUSTUM:this.wideFrustum})});this.cullPipeline=this.device.createComputePipeline({label:"surfel_cull",layout:this.device.createPipelineLayout({bindGroupLayouts:[ue,de,ce,this.bfcBindGroupLayout]}),compute:{module:le,entryPoint:"surfel_cull"}});const j=this.device.createShaderModule({code:ku});this.preprocessPipeline=this.device.createComputePipeline({label:"preprocess_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[ue,we]}),compute:{module:j,entryPoint:"preprocess"}});const be=this.device.createShaderModule({label:"render_2dgs",code:Ps(Ns,{FETCH_BY_ID:this.fetchById,OCT:this.octBound})});be.getCompilationInfo().then(Te=>{Te.messages.length>0?(console.group("[render_2dgs.wgsl] compilation messages"),Te.messages.forEach(Ie=>{(Ie.type==="error"?console.error:Ie.type==="warning"?console.warn:console.log)(`${Ie.type} (line ${Ie.lineNum}:${Ie.linePos}): ${Ie.message}`)}),console.groupEnd()):console.log("[render_2dgs.wgsl] compiled clean")});const me=this.device.createBindGroupLayout({label:"render_settings (vertex+fragment)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),pe=this.fetchById?GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT:GPUShaderStage.VERTEX,he=this.device.createBindGroupLayout({label:"splats_2d + indices (vertex)",entries:[{binding:0,visibility:pe,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),ae=this.device.createBindGroupLayout({label:"atlas (fragment)",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array",multisampled:!1}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]}),oe=this.atlas.meta.format!==4294967295&&this.atlas.meta.kernel_type===0?0:1;this.device.pushErrorScope("validation"),this.renderPipeline=this.device.createRenderPipeline({label:"render_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[me,he,ae]}),vertex:{module:be,entryPoint:"vs_main"},fragment:{module:be,entryPoint:"fs_main",constants:{BETA_KERNEL:oe},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}});const Le=(Te,Ie,ge,Ae=1)=>{const Q=this.device.createShaderModule({label:`render_2dgs (${Te})`,code:Ps(Ns,{FETCH_BY_ID:Ie,OCT:ge})});return this.device.createRenderPipeline({label:`render_2dgs_${Te}`,multisample:{count:Ae},layout:this.device.createPipelineLayout({bindGroupLayouts:[me,he,ae]}),vertex:{module:Q,entryPoint:"vs_main"},fragment:{module:Q,entryPoint:"fs_main",constants:{BETA_KERNEL:oe},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}})};this.rendererBgls=[me,he,ae],this.betaKernelConst=oe,this.varyingsPipeline=Le("varyings",!1,this.octBound),this.legacyRenderPipeline=this.octBound?Le("legacy",!1,!1):this.varyingsPipeline,this.mkVariant=Le,this.device.popErrorScope().then(Te=>{Te?console.error("[render_2dgs] pipeline create validation error:",Te.message):console.log("[render_2dgs] pipeline created OK")}),this.renderSettingsBindGroup=this.device.createBindGroup({label:"render_settings (vertex)",layout:me,entries:[{binding:0,resource:{buffer:this.render_settings_buffer}}]}),this.renderSplatsBindGroup=this.device.createBindGroup({label:"splats_2d + indices (vertex)",layout:he,entries:[{binding:0,resource:{buffer:this.splat_2d_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[Gr].sort_indices_buffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:ae,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:this.atlasSampler()},{binding:2,resource:{buffer:this.atlas.texParamsBuffer}},{binding:3,resource:{buffer:this.atlas.rectsBuffer}}]}),this.renderShaderModule=be,this.betaKernel=oe,this.renderSettingsBgl=me,this.renderSplatsBgl=he,this.atlasBgl=ae}get totalQueryCount(){return this.queriesPerFrame*this.queryCapacityFrames}get resolvesIntoTarget(){return this.msaa||this.acc16||this.overdrawMode!==0}setSlopeAtlas(s,o){this.slopeBgl||(this.slopeBgl=this.device.createBindGroupLayout({label:"slope sidecar",entries:[{binding:6,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array"}},{binding:7,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]})),s||(this.slopeDummy??(this.slopeDummy=this.device.createTexture({size:[1,1,1],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING})),s=this.slopeDummy.createView({dimension:"2d-array"}));const p=this.device.createBuffer({label:"slope params",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});this.device.queue.writeBuffer(p,0,new Float32Array(o)),this.slopeBg=this.device.createBindGroup({layout:this.slopeBgl,entries:[{binding:6,resource:s},{binding:7,resource:{buffer:p}}]})}slopePipelineFor(s,o){this.slopeBg||this.setSlopeAtlas(null,[0,0,0,0]);const p=`${s?1:0}${o?1:0}${this.slopeSource}`;let u=this.slopePipelines.get(p);if(!u){const f=this.device.createShaderModule({label:`render_2dgs slope (${p})`,code:Ps(Ns,{FETCH_BY_ID:s,OCT:o})}),P={color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}};u=this.device.createRenderPipeline({label:`render_2dgs_slope_${p}`,layout:this.device.createPipelineLayout({bindGroupLayouts:[...this.rendererBgls,this.slopeBgl]}),vertex:{module:f,entryPoint:"vs_main"},fragment:{module:f,entryPoint:"fs_slope",constants:{BETA_KERNEL:this.betaKernelConst,SLOPE_SRC:this.slopeSource},targets:[{format:this.presentationFormat,blend:P},{format:"rgba16float",blend:P}]},primitive:{topology:"triangle-strip",cullMode:"none"}}),this.slopePipelines.set(p,u)}return u}setBfcParams(s,o){this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([s,o[0],o[1],o[2]]))}get texParamsBuffer(){return this.atlas.texParamsBuffer}get hasAtlas(){return this.atlas.meta.format!==4294967295}writeAtlasParams(){var u;const s=new ArrayBuffer(32),o=new Uint32Array(s),p=new Float32Array(s);o[0]=(this.atlas.meta.slice_width||this.atlas.meta.width)|0,o[1]=this.atlas.meta.layer_h|0,p[2]=this.atlas.meta.uv_extent||0,o[3]=this.atlas.meta.probe_mode|0||0,o[4]=this._mipMode!==0?Math.max(1,((u=this.atlas.meta.mip_bytes)==null?void 0:u.length)??1):1,p[5]=this.mipLodBias,o[6]=this._mipMode===2?1:0,this.device.queue.writeBuffer(this.atlasParamsBuffer,0,s)}setMsaa(s){s!==this.msaa&&(this.msaa=s,mt(`[render_2dgs] MSAA 4x: ${s?"ON":"OFF"}`))}get isMsaa(){return this.msaa}msaaPipelineFor(s,o){const p=`${s?"byid":"var"}_${o?"oct":"quad"}`;let u=this.msaaPipelines.get(p);return u||(u=this.mkVariant(`msaa4_${p}`,s,o,4),this.msaaPipelines.set(p,u)),u}ensureMsaaResources(s,o){var p;this.msaaTexture!==null&&this.msaaW===s&&this.msaaH===o||((p=this.msaaTexture)==null||p.destroy(),this.msaaTexture=this.device.createTexture({label:"msaa4 colour",size:{width:s,height:o},sampleCount:4,format:this.presentationFormat,usage:GPUTextureUsage.RENDER_ATTACHMENT}),this.msaaView=this.msaaTexture.createView(),this.msaaW=s,this.msaaH=o)}setTwoPass(s){s!==this.twoPass&&(this.twoPass=s,mt(`[render_2dgs] two-pass layer path: ${s?"ON":"OFF"} (thresh ${this.twoPassThresh.toFixed(2)})`))}get isTwoPass(){return this.twoPass}setOpaqueThresh(s){this.twoPassThresh=Math.min(.999,Math.max(.001,s)),this.writeTwoPassParams()}get opaqueThresh(){return this.twoPassThresh}writeTwoPassParams(){this.twoPassParamsBuffer!==null&&this.device.queue.writeBuffer(this.twoPassParamsBuffer,0,new Float32Array([this.twoPassThresh,0,0,0]))}ensureSplatsVF(){this.twoPassSplatsBg===null&&(this.twoPassSplatsBgl=this.device.createBindGroupLayout({label:"splats_2d + indices (vertex+fragment)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),this.twoPassSplatsBg=this.device.createBindGroup({label:"splats_2d + indices (vertex+fragment)",layout:this.twoPassSplatsBgl,entries:[{binding:0,resource:{buffer:this.splat_2d_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[Gr].sort_indices_buffer}}]}))}ensureTwoPassResources(s,o){var p;this.ensureSplatsVF(),this.twoPassParamsBuffer===null&&(this.twoPassParamsBuffer=this.device.createBuffer({label:"twopass params",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.writeTwoPassParams(),this.twoPassBgl=this.device.createBindGroupLayout({label:"twopass (camera + params)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),this.twoPassBg=this.device.createBindGroup({label:"twopass (camera + params)",layout:this.twoPassBgl,entries:[{binding:0,resource:{buffer:this.camera_buffer}},{binding:1,resource:{buffer:this.twoPassParamsBuffer}}]})),!(this.twoPassDepth!==null&&this.twoPassW===s&&this.twoPassH===o)&&((p=this.twoPassDepth)==null||p.destroy(),this.twoPassDepth=this.device.createTexture({label:"twopass layer depth",size:{width:Math.max(1,s),height:Math.max(1,o),depthOrArrayLayers:1},format:"depth32float",usage:GPUTextureUsage.RENDER_ATTACHMENT}),this.twoPassDepthView=this.twoPassDepth.createView(),this.twoPassW=s,this.twoPassH=o)}renderModuleFor(s,o,p){const u=`${s?"byid":"vary"}_${o?"oct":"quad"}_${p?"hwz":"z0"}`,f=this.twoPassModules.get(u);if(f!==void 0)return f;const P=this.device.createShaderModule({label:`render_2dgs (${u})`,code:Ps(Ns,{FETCH_BY_ID:s,OCT:o,HW_DEPTH:p})});return P.getCompilationInfo().then(y=>{for(const k of y.messages)k.type==="error"&&console.error(`[render_2dgs ${u}] (line ${k.lineNum}:${k.linePos}): ${k.message}`)}),this.twoPassModules.set(u,P),P}twoPassPipelinesFor(s,o){const p=`${s?"byid":"vary"}_${o?"oct":"quad"}`,u=this.twoPassPipelines.get(p);if(u!==void 0)return u;const f=this.renderModuleFor(s,o,!0),P=this.device.createPipelineLayout({bindGroupLayouts:[this.renderSettingsBgl,this.twoPassSplatsBgl,this.atlasBgl,this.twoPassBgl]});this.device.pushErrorScope("validation");const y=this.device.createRenderPipeline({label:`render_2dgs_opaque_${p}`,layout:P,vertex:{module:f,entryPoint:"vs_main"},fragment:{module:f,entryPoint:"fs_opaque",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:this.presentationFormat}]},depthStencil:{format:"depth32float",depthWriteEnabled:!0,depthCompare:"less"},primitive:{topology:"triangle-strip",cullMode:"none"}}),k=this.device.createRenderPipeline({label:`render_2dgs_front_${p}`,layout:P,vertex:{module:f,entryPoint:"vs_main"},fragment:{module:f,entryPoint:"fs_front",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:this.presentationFormat,blend:ts.BLEND_OVER}]},depthStencil:{format:"depth32float",depthWriteEnabled:!1,depthCompare:"less"},primitive:{topology:"triangle-strip",cullMode:"none"}});this.device.popErrorScope().then(F=>{F?console.error(`[render_2dgs twopass ${p}] pipeline validation error:`,F.message):console.log(`[render_2dgs twopass ${p}] pipelines created OK`)});const B={opaque:y,front:k};return this.twoPassPipelines.set(p,B),B}setOverdrawMode(s){s!==this.overdrawMode&&(this.overdrawMode=s,this.ovLastStats=null,mt(`[render_2dgs] overdraw view: ${["off","shaded fragments","rasterised fragments"][s]}`))}get overdrawModeValue(){return this.overdrawMode}setOverdrawMax(s){this.overdrawMax=Math.max(1,s),this.ovParamsBuffer&&this.device.queue.writeBuffer(this.ovParamsBuffer,0,new Float32Array([this.overdrawMax,0,0,0]))}ensureOverdrawResources(s,o){var p;if(this.ensureSplatsVF(),this.ovResolvePipeline===null){this.ovParamsBuffer=this.device.createBuffer({label:"overdraw params",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.ovParamsBuffer,0,new Float32Array([this.overdrawMax,0,0,0]));const u=`
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
}`,f=this.device.createShaderModule({label:"overdraw_resolve",code:u});this.ovResolveBgl=this.device.createBindGroupLayout({label:"overdraw resolve",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),this.ovResolvePipeline=this.device.createRenderPipeline({label:"overdraw_resolve",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.ovResolveBgl]}),vertex:{module:f,entryPoint:"vs_main"},fragment:{module:f,entryPoint:"fs_main",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list"}});const P=`
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
}`,y=this.device.createShaderModule({label:"overdraw_stats",code:P});this.ovStatsBgl=this.device.createBindGroupLayout({label:"overdraw stats",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:"unfilterable-float"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),this.ovStatsPipeline=this.device.createComputePipeline({label:"overdraw_stats",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.ovStatsBgl]}),compute:{module:y,entryPoint:"main"}}),this.ovStatsBuffer=this.device.createBuffer({label:"overdraw stats",size:16,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.ovReadback=this.device.createBuffer({label:"overdraw stats readback",size:16,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}this.ovTexture!==null&&this.ovW===s&&this.ovH===o||((p=this.ovTexture)==null||p.destroy(),this.ovTexture=this.device.createTexture({label:"overdraw counts",size:{width:Math.max(1,s),height:Math.max(1,o),depthOrArrayLayers:1},format:"r16float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.ovView=this.ovTexture.createView(),this.ovResolveBg=this.device.createBindGroup({label:"overdraw resolve",layout:this.ovResolveBgl,entries:[{binding:0,resource:this.ovView},{binding:1,resource:{buffer:this.ovParamsBuffer}}]}),this.ovStatsBg=this.device.createBindGroup({label:"overdraw stats",layout:this.ovStatsBgl,entries:[{binding:0,resource:this.ovView},{binding:1,resource:{buffer:this.ovStatsBuffer}}]}),this.ovW=s,this.ovH=o)}ovPipelineFor(s,o,p){const u=`${s}_${o?"byid":"vary"}_${p?"oct":"quad"}`,f=this.ovPipelines.get(u);if(f!==void 0)return f;const P=s.startsWith("tp_"),y=this.renderModuleFor(o,p,P),k=this.device.createPipelineLayout({bindGroupLayouts:P?[this.renderSettingsBgl,this.twoPassSplatsBgl,this.atlasBgl,this.twoPassBgl]:[this.renderSettingsBgl,this.twoPassSplatsBgl,this.atlasBgl]}),B={single_raster:"fs_count_raster",single_shaded:"fs_count_shaded",tp_raster:"fs_count_raster",tp_opaque:"fs_count_opaque",tp_front:"fs_count_front"}[s];let F;s==="tp_raster"?F={format:"depth32float",depthWriteEnabled:!1,depthCompare:"always"}:s==="tp_opaque"?F={format:"depth32float",depthWriteEnabled:!0,depthCompare:"less"}:s==="tp_front"&&(F={format:"depth32float",depthWriteEnabled:!1,depthCompare:"less"}),this.device.pushErrorScope("validation");const z=this.device.createRenderPipeline({label:`render_2dgs_${u}`,layout:k,vertex:{module:y,entryPoint:"vs_main"},fragment:{module:y,entryPoint:B,constants:{BETA_KERNEL:this.betaKernel},targets:[{format:"r16float",blend:ts.BLEND_ADD}]},depthStencil:F,primitive:{topology:"triangle-strip",cullMode:"none"}});return this.device.popErrorScope().then($=>{$&&console.error(`[render_2dgs overdraw ${u}] pipeline validation error:`,$.message)}),this.ovPipelines.set(u,z),z}async readOverdrawStats(){if(this.ovReadState!=="copied"||this.ovReadback===null)return this.ovLastStats;this.ovReadState="mapping";try{await this.ovReadback.mapAsync(GPUMapMode.READ);const s=new Uint32Array(this.ovReadback.getMappedRange().slice(0));this.ovReadback.unmap();const o=Math.max(1,this.ovW*this.ovH);this.ovLastStats={mean:s[0]/o,meanCovered:s[2]>0?s[0]/s[2]:0,max:s[1],coveredFrac:s[2]/o}}finally{this.ovReadState="idle"}return this.ovLastStats}ensureAccResources(s,o){var p;if(this.accResolvePipeline===null){const u=`
@group(0) @binding(0) var src : texture_2d<f32>;
@vertex fn vs_main(@builtin(vertex_index) vid : u32) -> @builtin(position) vec4<f32> {
    const pos = array(vec2<f32>(-1.0, -1.0), vec2<f32>(3.0, -1.0), vec2<f32>(-1.0, 3.0));
    return vec4<f32>(pos[vid], 0.0, 1.0);
}
@fragment fn fs_main(@builtin(position) p : vec4<f32>) -> @location(0) vec4<f32> {
    let dims = vec2<i32>(textureDimensions(src));
    let q = clamp(vec2<i32>(floor(p.xy)), vec2<i32>(0), dims - vec2<i32>(1));
    return textureLoad(src, q, 0);
}`,f=this.device.createShaderModule({label:"acc16_resolve",code:u});this.accResolveBgl=this.device.createBindGroupLayout({label:"acc16_resolve src",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}}]}),this.accResolvePipeline=this.device.createRenderPipeline({label:"acc16_resolve",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.accResolveBgl]}),vertex:{module:f,entryPoint:"vs_main"},fragment:{module:f,entryPoint:"fs_main",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list"}})}this.accTexture!==null&&this.accW===s&&this.accH===o||((p=this.accTexture)==null||p.destroy(),this.accTexture=this.device.createTexture({label:"acc16 target",size:{width:Math.max(1,s),height:Math.max(1,o),depthOrArrayLayers:1},format:"rgba16float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.accView=this.accTexture.createView(),this.accResolveBindGroup=this.device.createBindGroup({label:"acc16_resolve bind",layout:this.accResolveBgl,entries:[{binding:0,resource:this.accView}]}),this.accW=s,this.accH=o)}setAtlas(s){this.atlas=s??Ua(this.device),this.writeAtlasParams(),this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:this.preprocessBgl2,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}},{binding:4,resource:{buffer:this.atlas.rectsBuffer}},{binding:5,resource:{buffer:this.atlasParamsBuffer}},{binding:6,resource:{buffer:this.pc.surfel_buffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:this.atlasBgl,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:this.atlasSampler()},{binding:2,resource:{buffer:this.atlas.texParamsBuffer}},{binding:3,resource:{buffer:this.atlas.rectsBuffer}}]}),this.atlas.meta.format!==4294967295&&qs(this.device,this.atlas.texParamsBuffer,this.atlas.meta,this._atlasEnabled,this._mipMode)}setAtlasEnabled(s){this.atlas.meta.format!==4294967295&&(this._atlasEnabled=s,qs(this.device,this.atlas.texParamsBuffer,this.atlas.meta,s,this._mipMode))}setMipLodBias(s){this.mipLodBias=s,this.writeAtlasParams()}setFetchById(s){s!==this.fetchById&&(this.fetchById=s,mt(`[render_2dgs] fragment inputs: ${s?"fetch-by-id (storage re-read)":"13 flat varyings"}`))}get isFetchById(){return this.fetchById}setLegacyRenderer(s){if(s===this.legacyRenderer)return;this.legacyRenderer=s,es({legacyPos:s,hypLegacy:s},this.device,this.render_settings_buffer);const o=!s&&this.octBound?8:4;this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([o])),mt(`[render_2dgs] renderer: ${s?"LEGACY (varyings, quad, f16 centres)":"current"}`)}get isLegacyRenderer(){return this.legacyRenderer}atlasSampler(){return this._mipMode===2&&this.atlas.samplerAniso?this.atlas.samplerAniso:this.atlas.sampler}setMipMode(s){if(this.atlas.meta.format===4294967295)return;const o=this._mipMode;this._mipMode=typeof s=="boolean"?s?1:0:s,o===2!=(this._mipMode===2)&&this.atlasBgl&&(this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:this.atlasBgl,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:this.atlasSampler()},{binding:2,resource:{buffer:this.atlas.texParamsBuffer}},{binding:3,resource:{buffer:this.atlas.rectsBuffer}}]})),this.writeAtlasParams(),qs(this.device,this.atlas.texParamsBuffer,this.atlas.meta,this._atlasEnabled,this._mipMode)}get hasMips(){var s;return(((s=this.atlas.meta.mip_bytes)==null?void 0:s.length)??1)>1}async debugReadSortedIndices(s=30){const o=Math.max(0,Math.min(s,this.pc.num_points)),p=o*Uint32Array.BYTES_PER_ELEMENT;if(p===0){console.log("[DEBUG] No indices to read.");return}const u=this.device.createBuffer({size:p,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),f=this.device.createCommandEncoder();f.copyBufferToBuffer(this.sort_ping_pong[Gr].sort_indices_buffer,0,u,0,p),this.device.queue.submit([f.finish()]),await u.mapAsync(GPUMapMode.READ);const P=new Uint32Array(u.getMappedRange());console.log("[DEBUG] Sorted indices (first",o,"):",Array.from(P)),u.unmap()}writeSortKeys(s){if(!this.staticKeysBuffer)throw new Error("writeSortKeys: renderer built without staticSortKeys");this.device.queue.writeBuffer(this.staticKeysBuffer,0,s)}frame(s,o,p=!0){this.preFrame&&this.preFrame();const f=(this.lastFrame+this.frameCount)%this.queryCapacityFrames*this.queriesPerFrame,P=p&&this.timeQueryEnabled;{s.clearBuffer(this.sort_info_buffer,0,4);const y={label:"cull"};P&&(y.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:f+0,endOfPassWriteIndex:f+1});const k=s.beginComputePass(y);k.setPipeline(this.cullPipeline),k.setBindGroup(0,this.crsBg),k.setBindGroup(1,this.gsBg),k.setBindGroup(2,this.cullBg2),k.setBindGroup(3,this.bfcBindGroup);const B=Math.ceil(this.pc.num_points/Gu);k.dispatchWorkgroups(B,1,1),k.end()}{const y=s.beginComputePass({label:"calculate indirect dispatch"});y.setPipeline(this.indirectPipeline),y.setBindGroup(0,this.indirectBindGroup),y.dispatchWorkgroups(1,1,1),y.end()}{const y={label:"preprocess"};P&&(y.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:f+2,endOfPassWriteIndex:f+3});const k=s.beginComputePass(y);k.setPipeline(this.preprocessPipeline),k.setBindGroup(0,this.crsBg),k.setBindGroup(1,this.preprocessBg1),k.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),k.end()}for(let y=0;y<Zs;y++){const k=y&1,B=this.sort_pipelines.passes[y],F=this.sort_localHistogramBindGroups[k],z=this.sort_scatterBindGroups[k];{const $={label:`upsweep_round${y}`};P&&y==0&&($.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:f+4});const q=s.beginComputePass($);q.setPipeline(B.localHistogram),q.setBindGroup(0,F),q.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),q.end()}{const $=s.beginComputePass({label:`prefix_round${y} - l0TileScan`});$.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l0TileScan),$.setBindGroup(0,this.sort_prefixBindGroup),$.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),$.end()}{const $=s.beginComputePass({label:`prefix_round${y} - l1TileScanOnL0`});$.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1TileScanOnL0),$.setBindGroup(0,this.sort_prefixBindGroup),$.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),$.end()}{const $=s.beginComputePass({label:`prefix_round${y} - l1ScanSums`});$.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1ScanSums),$.setBindGroup(0,this.sort_prefixBindGroup),$.dispatchWorkgroups(1,on,1),$.end()}{const $=s.beginComputePass({label:`prefix_round${y} - addL1ToL0`});$.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL1ToL0),$.setBindGroup(0,this.sort_prefixBindGroup),$.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),$.end()}{const $=s.beginComputePass({label:`prefix_round${y} - addL0ToElems`});$.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL0ToElems),$.setBindGroup(0,this.sort_prefixBindGroup),$.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),$.end()}{const $=s.beginComputePass({label:`prefix_round${y} - computeDigitBase`});$.setPipeline(this.sort_pipelines.hierarchicalBlelloch.computeDigitBase),$.setBindGroup(0,this.sort_prefixBindGroup),$.dispatchWorkgroups(1,1,1),$.end()}{const $={label:`scatter_round${y}`};P&&y==Zs-1&&($.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:f+5});const q=s.beginComputePass($);q.setPipeline(B.scatterElements),q.setBindGroup(0,z),q.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),q.end()}}{const y=_t.canvas_size[0],k=_t.canvas_size[1],B=this.overdrawMode!==0;let F=o;B?(this.ensureOverdrawResources(y,k),F=this.ovView):this.acc16&&(this.ensureAccResources(y,k),F=this.accView);const z=B?{r:0,g:0,b:0,a:0}:this.bgColor,$=B||this.acc16,q=this.fetchById&&!this.legacyRenderer,H=this.octBound&&!this.legacyRenderer;if(this.twoPass){this.ensureTwoPassResources(y,k);let L,V;if(B)this.overdrawMode===1?(L=this.ovPipelineFor("tp_opaque",q,H),V=this.ovPipelineFor("tp_front",q,H)):L=V=this.ovPipelineFor("tp_raster",q,H);else{const re=this.twoPassPipelinesFor(q,H);L=re.opaque,V=re.front}const J={label:"render_opaque_layer",colorAttachments:[{view:F,loadOp:"clear",storeOp:"store",clearValue:z}],depthStencilAttachment:{view:this.twoPassDepthView,depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}};P&&(J.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:f+6});const G=s.beginRenderPass(J);G.setPipeline(L),G.setBindGroup(0,this.renderSettingsBindGroup),G.setBindGroup(1,this.twoPassSplatsBg),G.setBindGroup(2,this.atlasBindGroup),G.setBindGroup(3,this.twoPassBg),G.drawIndirect(this.draw_indirect_buffer,0),G.end();const Y={label:"render_front",colorAttachments:[{view:F,loadOp:"load",storeOp:"store"}],depthStencilAttachment:{view:this.twoPassDepthView,depthReadOnly:!0}};P&&!$&&(Y.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:f+7});const N=s.beginRenderPass(Y);N.setPipeline(V),N.setBindGroup(0,this.renderSettingsBindGroup),N.setBindGroup(1,this.twoPassSplatsBg),N.setBindGroup(2,this.atlasBindGroup),N.setBindGroup(3,this.twoPassBg),N.drawIndirect(this.draw_indirect_buffer,0),N.end()}else{const L=this.msaa&&!B&&!this.acc16;L&&this.ensureMsaaResources(y,k);const V=this.slopeTarget!==null&&!L&&!B&&!this.acc16&&!this.legacyRenderer,J=[L?{view:this.msaaView,resolveTarget:F,loadOp:"clear",storeOp:"discard",clearValue:z}:{view:F,loadOp:"clear",storeOp:"store",clearValue:z}];V&&J.push({view:this.slopeTarget,loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:0}});const G={label:"render",colorAttachments:J};P&&(G.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:f+6,...$?{}:{endOfPassWriteIndex:f+7}});const Y=s.beginRenderPass(G);B?(Y.setPipeline(this.ovPipelineFor(this.overdrawMode===1?"single_shaded":"single_raster",q,H)),Y.setBindGroup(1,this.twoPassSplatsBg)):V?(Y.setPipeline(this.slopePipelineFor(this.fetchById,H)),Y.setBindGroup(1,this.renderSplatsBindGroup),Y.setBindGroup(3,this.slopeBg)):(Y.setPipeline(L?this.msaaPipelineFor(q,H):this.legacyRenderer?this.legacyRenderPipeline:this.fetchById?this.renderPipeline:this.varyingsPipeline),Y.setBindGroup(1,this.renderSplatsBindGroup)),this.viewport!==null&&!L&&(Y.setViewport(0,0,this.viewport[0],this.viewport[1],0,1),Y.setScissorRect(0,0,this.viewport[0],this.viewport[1])),Y.setBindGroup(0,this.renderSettingsBindGroup),Y.setBindGroup(2,this.atlasBindGroup),Y.drawIndirect(this.draw_indirect_buffer,0),Y.end()}if(B){s.clearBuffer(this.ovStatsBuffer,0,16);const L=s.beginComputePass({label:"overdraw_stats"});L.setPipeline(this.ovStatsPipeline),L.setBindGroup(0,this.ovStatsBg),L.dispatchWorkgroups(Math.ceil(y/16),Math.ceil(k/16),1),L.end();const V={label:"overdraw_resolve",colorAttachments:[{view:o,loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:1}}]};P&&(V.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:f+7});const J=s.beginRenderPass(V);J.setPipeline(this.ovResolvePipeline),J.setBindGroup(0,this.ovResolveBg),J.draw(3),J.end(),this.ovReadState==="idle"&&(s.copyBufferToBuffer(this.ovStatsBuffer,0,this.ovReadback,0,16),this.ovReadState="copied")}else if(this.acc16){const L={label:"acc16_resolve",colorAttachments:[{view:o,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};P&&(L.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:f+7});const V=s.beginRenderPass(L);V.setPipeline(this.accResolvePipeline),V.setBindGroup(0,this.accResolveBindGroup),V.draw(3),V.end()}}this.frameCount++}async readPerfMetrics(s){const o=(s==null?void 0:s.silent)??!1;if(this.frameCount<=0)return;const p=this.device.createCommandEncoder({label:"timestamp resolve encoder"});p.resolveQuerySet(this.querySet,0,this.totalQueryCount,this.resolveBuffer,0),p.copyBufferToBuffer(this.resolveBuffer,0,this.resultBuffer,0,this.totalQueryCount*8),this.device.queue.submit([p.finish()]),await this.device.queue.onSubmittedWorkDone();const u=[["Total",7,0],["Culling",1,0],["Preprocess",3,2],["Sort",5,4],["Render",7,6]];await this.resultBuffer.mapAsync(GPUMapMode.READ);const f=new BigInt64Array(this.resultBuffer.getMappedRange()),P=Math.min(this.frameCount,this.queryCapacityFrames),y=(this.lastFrame+this.frameCount-P)%this.queryCapacityFrames,k=Array.from({length:u.length},()=>[]);let B=0;for(let J=0;J<P;J++){const G=(y+J)%this.queryCapacityFrames,Y=G*this.queriesPerFrame;let N=!0;for(let re=0;re<u.length;re++){const[ue,de,ce]=u[re];if(f[Y+ce]===0n||f[Y+de]===0n||f[Y+de]<f[Y+ce]){N=!1;break}}if(!N){!o&&G%60===0&&console.debug("[timestamp] frame slot",G,"contains unwritten (0) timestamps, skipped in stats");continue}B++;for(let re=0;re<u.length;re++){const[ue,de,ce]=u[re],we=Number(f[Y+ce]),Se=Number(f[Y+de]);k[re].push((Se-we)/1e6)}}if(B===0){this.resultBuffer.unmap(),o||console.warn("[timestamp] No complete frames available (some timestamps are 0). It may be the first frame or the GPU is still filling.");return}this.allFrameTimes.push(...k[0]);const F=[];let z=0,$=0,q=0;for(let J=0;J<u.length;J++){const G=u[J][0],Y=k[J];let N=0;if(G==="Total"){const re=this.allFrameTimes;N=re.reduce((ce,we)=>ce+we,0)/re.length;const ue=[...re].sort((ce,we)=>ce-we);z=ue[Math.floor(ue.length*.99)]||0;const de=re.reduce((ce,we)=>ce+Math.pow(we-N,2),0)/re.length;$=Math.sqrt(de),q=N}else N=Y.reduce((re,ue)=>re+ue,0)/Y.length;F.push([G,N])}this.lastFrame+=this.frameCount,this.frameCount=0;const H=Object.fromEntries(F);this.lastStageBreakdownMs={cull:H.Culling??0,preprocess:H.Preprocess??0,sort:H.Sort??0,render:H.Render??0,total:H.Total??0};const V=`[TIMESTAMP - ${this.constructor.name}]
`+F.map(([J,G])=>`${J}: ${G.toFixed(3)}ms`).join(`
`)+`
Total P99: ${z.toFixed(3)}ms
Total STD: ${$.toFixed(3)}ms
Total AVG: ${q.toFixed(3)}ms
Stats computed over ${this.allFrameTimes.length} frames (cumulative)
${this.lastFrame} frames rendered since start`;if(o||(console.log(V),console.log("All Frame Times (Total, ms):",JSON.stringify(this.allFrameTimes))),this.downloadOnceNextRead){this.downloadOnceNextRead=!1;const J=`Stage,ms
`,G=F.map(([re,ue])=>`${re},${ue.toFixed(3)}`).join(`
`),Y="data:text/csv;charset=utf-8,"+encodeURIComponent(J+G),N=document.createElement("a");N.href=Y,N.download=`${this.downloadOnceFileName}.csv`,document.body.appendChild(N),N.click(),N.remove()}if(this.showPerfDialogNext){this.showPerfDialogNext=!1;try{alert(V)}catch{console.warn("Unable to show dialog; metrics printed to console.")}}this.resultBuffer.unmap()}_setupTimestampQueries(){this.querySet=this.device.createQuerySet({type:"timestamp",count:this.totalQueryCount});const s=this.totalQueryCount*8;this.resolveBuffer=this.device.createBuffer({size:s,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),this.resultBuffer=this.device.createBuffer({size:s,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}_setupBuffers(){this.render_settings_buffer=this.device.createBuffer({label:"render settings",size:Fu,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const s=document.querySelector("canvas"),o=s?s.width:1,p=s?s.height:1;Du({width:o,height:p,sh_bias:this.pc.sh_bias,color_K:this.pc.K,feature_mode:this.pc.feature_mode}),ii(this.device,this.render_settings_buffer),this.splat_2d_buffer=this.device.createBuffer({label:"splats_2d (Splat2DGS)",size:ns(this.pc.num_points*Vu),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.draw_indirect_buffer=this.device.createBuffer({label:"draw indirect",size:4*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT}),this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([this.octBound?8:4,0,0,0])),this.sh_solvers_buffer=this.device.createBuffer({label:"sh_solvers",size:ns(this.pc.num_points*$u),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST})}requestPerfDialog(){this.showPerfDialogNext=!0}requestDownloadMetrics(s){if(s&&s.trim().length>0){const o=s.trim().replace(/[^a-zA-Z0-9_\-]/g,"_");this.downloadOnceFileName=o.length>0?o:this.downloadOnceFileName}else{const o=new Date,p=`${o.getFullYear()}${String(o.getMonth()+1).padStart(2,"0")}${String(o.getDate()).padStart(2,"0")}_${String(o.getHours()).padStart(2,"0")}${String(o.getMinutes()).padStart(2,"0")}${String(o.getSeconds()).padStart(2,"0")}`;this.downloadOnceFileName=`fps_metrics_${p}`}this.downloadOnceNextRead=!0}requestReorder(){}async maybeReorderAfterSubmit(){}};T(ts,"BLEND_OVER",{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}),T(ts,"BLEND_ADD",{color:{operation:"add",srcFactor:"one",dstFactor:"one"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one"}});let Xs=ts;class ju{constructor(s){T(this,"nSurfels");T(this,"nNodes");T(this,"planes");T(this,"front");T(this,"back");T(this,"copOff");T(this,"cop");T(this,"missing");T(this,"stackNode");T(this,"stackPhase");T(this,"keys");T(this,"lastMs",0);T(this,"lastEye",[NaN,NaN,NaN]);const o=new DataView(s),p=String.fromCharCode(o.getUint8(0),o.getUint8(1),o.getUint8(2),o.getUint8(3));if(p!=="BSP1")throw new Error(`not a BSP1 file (magic ${p})`);this.nSurfels=o.getUint32(4,!0),this.nNodes=o.getUint32(8,!0);const u=o.getUint32(12,!0),f=o.getUint32(16,!0);let P=20;const y=this.nNodes;if(this.planes=new Float32Array(s.slice(P,P+y*16)),P+=y*16,this.front=new Int32Array(s.slice(P,P+y*4)),P+=y*4,this.back=new Int32Array(s.slice(P,P+y*4)),P+=y*4,this.copOff=new Uint32Array(s.slice(P,P+(y+1)*4)),P+=(y+1)*4,this.cop=new Uint32Array(s.slice(P,P+u*4)),P+=u*4,this.missing=new Uint32Array(s.slice(P,P+f*4)),P+=f*4,P!==s.byteLength)throw new Error(`BSP1 size mismatch: parsed ${P} of ${s.byteLength} bytes`);this.keys=new Float32Array(this.nSurfels),this.stackNode=new Int32Array(2*y+2),this.stackPhase=new Uint8Array(2*y+2)}computeKeys(s){const o=s[0],p=s[1],u=s[2];if(o===this.lastEye[0]&&p===this.lastEye[1]&&u===this.lastEye[2])return!1;this.lastEye=[o,p,u];const f=performance.now(),P=this.planes,y=this.front,k=this.back,B=this.copOff,F=this.cop,z=this.keys;let $=1;for(let V=0;V<this.missing.length;V++)z[this.missing[V]]=$++;const q=this.stackNode,H=this.stackPhase;let L=0;for(q[0]=0,H[0]=0,L=1;L>0;){L--;const V=q[L],J=H[L],G=P[4*V],Y=P[4*V+1],N=P[4*V+2];if(G===0&&Y===0&&N===0){for(let ce=B[V];ce<B[V+1];ce++)z[F[ce]]=$++;continue}const re=G*o+Y*p+N*u-P[4*V+3]>=0,ue=re?y[V]:k[V],de=re?k[V]:y[V];if(J===0)q[L]=V,H[L]=1,L++,de>=0&&(q[L]=de,H[L]=0,L++);else{for(let ce=B[V];ce<B[V+1];ce++)z[F[ce]]=$++;ue>=0&&(q[L]=ue,H[L]=0,L++)}}return this.lastMs=performance.now()-f,!0}invalidate(){this.lastEye=[NaN,NaN,NaN]}}async function Hu(i){const s=await fetch(i);if(!s.ok)throw new Error(`BSP fetch ${i}: HTTP ${s.status}`);return new ju(await s.arrayBuffer())}function Yu(i,s){return 2*Math.atan(s/(2*i))}function Zu(i,s,o,p){const u=Math.tan(p/2),f=Math.tan(o/2),P=u*i,y=-P,k=f*i,B=-k,F=wt.create();return F[0]=2*i/(k-B),F[5]=-2*i/(P-y),F[2]=(k+B)/(k-B),F[6]=(P+y)/(P-y),F[14]=1,F[10]=s/(s-i),F[11]=-(s*i)/(s-i),wt.transpose(F,F),F}async function Jr(i){mt(`loading scene camera file... : ${i}`);const o=await(await fetch(i)).json();return mt(`loaded cameras count: ${o.length}`),o.map(p=>{const u=Z.clone(p.position),f=Mt.create(...p.rotation.flat()),P=f[0],y=f[4],k=f[8],B=f[1],F=f[5],z=f[9],$=f[2],q=f[6],H=f[10];P*(F*H-z*q)-y*(B*H-z*$)+k*(B*q-F*$)<0&&(f[1]=-f[1],f[5]=-f[5],f[9]=-f[9]);const V=wt.fromMat3(f);return{position:u,rotation:V,img_name:p.img_name,id:p.id}})}const Xu=4*2,Ju=4*16,to=4*Ju+2*Xu;function Qu(i){return i.createBuffer({label:"camera uniform",size:to,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}const In=new Float32Array(to/Float32Array.BYTES_PER_ELEMENT),nr=class nr{constructor(s,o){T(this,"_renderSize",null);T(this,"_refSize",null);T(this,"uniform_buffer");T(this,"position",Z.create());T(this,"rotation",wt.create());T(this,"zfar",100);T(this,"fovY",45/180*Math.PI);T(this,"fovX");T(this,"focalRatioX",1);T(this,"focal",ca.create());T(this,"viewport",ca.create());T(this,"view_matrix",wt.identity());T(this,"view_inv_matrix",wt.identity());T(this,"proj_matrix",wt.identity());T(this,"proj_inv_matrix",wt.identity());T(this,"_negPos",Z.create());T(this,"look",Z.create(0,0,1));T(this,"up",Z.create(0,1,0));T(this,"right",Z.create(1,0,0));this.canvas=s,this.device=o,this.uniform_buffer=o?Qu(o):null,this.on_update_canvas()}getFovY(){return this.fovY}setRenderSize(s,o,p,u){this._renderSize=[s,o],this._refSize=p&&u?[p,u]:null,this.on_update_canvas()}clearRenderSize(){this._renderSize=null,this._refSize=null,this.on_update_canvas()}getRenderSize(){return this._renderSize}on_update_canvas(){const s=this._renderSize?this._renderSize[0]:this.canvas.width,o=this._renderSize?this._renderSize[1]:this.canvas.height;if(this._refSize){const[p,u]=this._refSize,f=.5*u/Math.tan(this.fovY*.5);this.focal[0]=f*this.focalRatioX*(s/p),this.focal[1]=f*(o/u)}else{const p=.5*o/Math.tan(this.fovY*.5);this.focal[0]=p*this.focalRatioX,this.focal[1]=p}this.fovX=Yu(this.focal[0],s),this.viewport[0]=s,this.viewport[1]=o,this.proj_matrix=Zu(.01,this.zfar,this.fovX,this.fovY),wt.inverse(this.proj_matrix,this.proj_inv_matrix),this.update_buffer()}update_buffer(){this._negPos[0]=-this.position[0],this._negPos[1]=-this.position[1],this._negPos[2]=-this.position[2],wt.copy(this.rotation,this.view_matrix),wt.translate(this.view_matrix,this._negPos,this.view_matrix),wt.inverse(this.view_matrix,this.view_inv_matrix),Z.transformMat4Upper3x3(nr.Z_AXIS,this.view_inv_matrix,this.look),Z.normalize(this.look,this.look),Z.cross(this.up,this.look,this.right),Z.normalize(this.right,this.right);let s=0;In.set(this.view_matrix,s),s+=16,In.set(this.view_inv_matrix,s),s+=16,In.set(this.proj_matrix,s),s+=16,In.set(this.proj_inv_matrix,s),s+=16,In.set(this.viewport,s),s+=2,In.set(this.focal,s),s+=2,this.device&&this.device.queue.writeBuffer(this.uniform_buffer,0,In)}set_preset(s){Z.copy(s.position,this.position),wt.copy(s.rotation,this.rotation),this.update_buffer()}setFov(s){this.fovY=s,this.on_update_canvas()}setFocalRatio(s){this.focalRatioX=s,this.on_update_canvas()}getFov(){return this.fovY}};T(nr,"Z_AXIS",Z.create(0,0,1));let Js=nr;const ed={bilinear:0,bicubic:1,hermite:2,texture:3,bc5:4,p:4,spline:5},no={texture:0,p:1,bc5:2,spline:2},td=.7,nd=`
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
}`;class sd{constructor(s,o,p,u,f=!1){T(this,"pipeline");T(this,"uni");T(this,"bgCache",new Map);T(this,"lowTex",null);T(this,"lowView",null);T(this,"lowSize",[0,0]);T(this,"allocSize",[0,0]);T(this,"last","");T(this,"slopeTex",null);T(this,"slopeView",null);T(this,"dummySlope");T(this,"splineTex");T(this,"splineSampler");T(this,"splineKernel",null);T(this,"scale");this.device=s,this.format=o,this.mode=p,this.exact=f,this.scale=u;const P=s.createShaderModule({label:"upscaler",code:nd});this.pipeline=s.createRenderPipeline({label:"upscaler",layout:"auto",vertex:{module:P,entryPoint:"vs"},fragment:{module:P,entryPoint:"fs",targets:[{format:o}]},primitive:{topology:"triangle-list"}}),this.uni=s.createBuffer({size:48,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.dummySlope=s.createTexture({size:[1,1],format:"rgba16float",usage:GPUTextureUsage.TEXTURE_BINDING}),this.splineTex=s.createTexture({size:[1,1,1],dimension:"3d",format:"rgba16float",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),this.splineSampler=s.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge"})}get slopeTarget(){return this.slopeView}setSplineKernel(s){if(s===this.splineKernel)return;if(this.splineKernel=s,this.bgCache.clear(),this.last="",this.splineTex.destroy(),!s){this.splineTex=this.device.createTexture({size:[1,1,1],dimension:"3d",format:"rgba16float",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});return}const[o,p,u]=s.K,f=o*p*u,P=new Uint16Array(f*4);for(let y=0;y<f;y++)P[4*y]=Fr(s.w[3*y]),P[4*y+1]=Fr(s.w[3*y+1]),P[4*y+2]=Fr(s.w[3*y+2]),P[4*y+3]=15360;this.splineTex=this.device.createTexture({size:[o,p,u],dimension:"3d",format:"rgba16float",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),this.device.queue.writeTexture({texture:this.splineTex},P,{bytesPerRow:o*8,rowsPerImage:p},[o,p,u])}lowTarget(s,o){var y,k;const p=Math.max(1,Math.min(s,Math.round(s*this.scale))),u=Math.max(1,Math.min(o,Math.round(o*this.scale))),f=this.exact?p:s,P=this.exact?u:o;return(!this.lowTex||this.allocSize[0]!==f||this.allocSize[1]!==P)&&((y=this.lowTex)==null||y.destroy(),this.bgCache.clear(),this.lowTex=this.device.createTexture({size:[f,P],format:this.format,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.lowView=this.lowTex.createView(),this.allocSize=[f,P],(k=this.slopeTex)==null||k.destroy(),this.slopeTex=null,this.slopeView=null,no[this.mode]!==void 0&&(this.slopeTex=this.device.createTexture({size:[f,P],format:"rgba16float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.slopeView=this.slopeTex.createView())),this.lowSize=[p,u],{view:this.lowView,w:p,h:u}}pass(s,o,p,u){var F,z,$,q;const[f,P]=this.lowSize,y=`${f},${P},${p},${u}`;if(y!==this.last){const H=new Uint32Array([f,P,p,u,ed[this.mode],0,0,0,0,0,0,0]),L=new Float32Array(H.buffer);L[5]=td,L[6]=((F=this.splineKernel)==null?void 0:F.T)??.25,L[8]=((z=this.splineKernel)==null?void 0:z.K[0])??1,L[9]=(($=this.splineKernel)==null?void 0:$.K[1])??1,L[10]=((q=this.splineKernel)==null?void 0:q.K[2])??1,L[11]=0,this.device.queue.writeBuffer(this.uni,0,H),this.last=y}let k=this.bgCache.get(this.lowView);k||(k=this.device.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:this.lowView},{binding:1,resource:{buffer:this.uni}},{binding:2,resource:this.slopeView??this.dummySlope.createView()},{binding:3,resource:this.splineTex.createView({dimension:"3d"})},{binding:4,resource:this.splineSampler}]}),this.bgCache.set(this.lowView,k));const B=s.beginRenderPass({colorAttachments:[{view:o,loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:1}}]});B.setPipeline(this.pipeline),B.setBindGroup(0,k),B.draw(3),B.end()}destroy(){var s,o;(s=this.lowTex)==null||s.destroy(),(o=this.slopeTex)==null||o.destroy(),this.dummySlope.destroy(),this.splineTex.destroy(),this.uni.destroy()}}function Fr(i){const s=new Float32Array([i]),o=new Uint32Array(s.buffer)[0],p=o>>>16&32768;let u=(o>>>23&255)-127+15,f=o&8388607;if((o>>>23&255)===255)return p|31744|(f?512:0);if(u>=31)return p|31744;if(u<=0){if(u<-10)return p;f|=8388608;const k=14-u;let B=f>>k;const F=f&(1<<k)-1,z=1<<k-1;return(F>z||F===z&&B&1)&&B++,p|B}let P=p|u<<10|f>>13;const y=f&8191;return(y>4096||y===4096&&P&1)&&P++,P}const Ss=64,Or=-7,rd=5;function Vr(i){const s=i&32768?-1:1,o=i>>10&31,p=i&1023;return o===0?s*p*2**-24:o===31?p?NaN:s*(1/0):s*(1+p/1024)*2**(o-15)}class id{constructor(s,o,p,u={}){T(this,"n");T(this,"texelMode");T(this,"px");T(this,"py");T(this,"pz");T(this,"tpu");T(this,"op");T(this,"ext2s");T(this,"hist",new Float64Array(Ss));T(this,"cur",1);T(this,"agree",0);T(this,"tau");T(this,"pct");T(this,"levels");T(this,"upHold");T(this,"minPx");T(this,"continuous");T(this,"fMax");T(this,"rateUp");T(this,"rateDown");T(this,"deadband");T(this,"minF");this.tau=u.tau??1,this.pct=u.pct??.5,this.upHold=u.upHold??12,this.minPx=u.minPx??6,this.levels=(u.levels??[1,2,4]).slice().sort((J,G)=>J-G),this.continuous=u.continuous??!0,this.fMax=this.levels[this.levels.length-1],this.rateUp=u.rateUp??.03,this.rateDown=u.rateDown??.1,this.deadband=u.deadband??.06,this.minF=Math.max(1,u.minF??1.3);const f=Math.min(u.sample??4096,o),P=new Uint32Array(s.buffer,s.byteOffset,o*8),y=p?p.uv_extent:3,k=!!p&&!p.probe_mode&&p.num_rects===o&&p.rects_expanded.length>=o*4,B=k?Math.round(p.rects_expanded.length/o):0;this.texelMode=k;const F=[],z=[],$=[],q=[],H=[],L=[],V=o/f;for(let J=0;J<f;J++){const G=Math.min(o-1,Math.floor(J*V)),Y=Vr(P[G*8+3]&65535);if(!(Y>.02))continue;const N=Vr(P[G*8+4]&65535),re=Vr(P[G*8+4]>>>16),ue=Math.sqrt(Math.max(1e-12,N*re));let de;if(k){const ce=p.rects_expanded[G*B+2],we=p.rects_expanded[G*B+3];if(!(ce>0&&we>0))continue;de=Math.sqrt(ce*we)/(2*y*ue)}else de=1/(2*y*ue);F.push(s[G*8]),z.push(s[G*8+1]),$.push(s[G*8+2]),q.push(de),H.push(Y),L.push(2*y*ue)}this.n=F.length,this.px=Float32Array.from(F),this.py=Float32Array.from(z),this.pz=Float32Array.from($),this.tpu=Float32Array.from(q),this.op=Float32Array.from(H),this.ext2s=Float32Array.from(L)}get factor(){return this.cur}reset(){this.cur=1,this.agree=0}choose(s,o,p){const u=s.rotation,f=s.position[0],P=s.position[1],y=s.position[2],k=s.getFovY(),B=Math.tan(k*.5),F=B*o/p,z=.5*p/B,$=this.hist;$.fill(0);let q=0,H=0;const L=Ss/(rd-Or);for(let G=0;G<this.n;G++){const Y=this.px[G]-f,N=this.py[G]-P,re=this.pz[G]-y,ue=u[2]*Y+u[6]*N+u[10]*re;if(!(ue>.05))continue;const de=u[0]*Y+u[4]*N+u[8]*re,ce=u[1]*Y+u[5]*N+u[9]*re;if(Math.abs(de)>1.15*ue*F||Math.abs(ce)>1.15*ue*B)continue;const we=this.ext2s[G]*z/ue,Se=this.texelMode?this.tpu[G]*ue/z:this.minPx/we,Me=this.op[G]*Math.min(we*we,4096);let Ee=Math.floor((Math.log2(Math.max(Se,1e-9))-Or)*L);Ee=Ee<0?0:Ee>=Ss?Ss-1:Ee,$[Ee]+=Me,q+=Me,H++}let V=1/0;if(q>0){let G=0;for(let Y=0;Y<Ss;Y++)if(G+=$[Y],G>=this.pct*q){V=2**(Or+(Y+.5)/L);break}}if(this.continuous){let G=V>0?Math.min(this.fMax,Math.max(1,this.tau/V)):1;G<(this.cur===1?this.minF:this.minF/1.13)?G=1:this.cur===1&&(this.cur=this.minF/1.13);const Y=Math.log2(G)-Math.log2(this.cur);if(Math.abs(Y)>Math.log2(1+this.deadband)||G===1||G===this.fMax){const N=Y>0?Math.min(Y,this.rateUp):Math.max(Y,-this.rateDown);this.cur=Math.abs(Y)<=Math.abs(N)?G:2**(Math.log2(this.cur)+N)}return(this.cur<this.minF/1.13-1e-6||this.cur<1.02)&&(this.cur=1),{f:this.cur,q:V,visible:H,texelMode:this.texelMode}}let J=1;for(const G of this.levels)G*V<=this.tau&&(J=G);return J<this.cur?(this.cur=J,this.agree=0):J>this.cur?++this.agree>=this.upHold&&(this.cur=J,this.agree=0):this.agree=0,{f:this.cur,q:V,visible:H,texelMode:this.texelMode}}}const ad=Z.create(1,0,0),od=Z.create(0,1,0),ld=Z.create(0,0,1);function cd(i,s){const o=i[0],p=i[4],u=i[8],f=i[1],P=i[5],y=i[9],k=i[2],B=i[6],F=i[10],z=o+P+F;let $,q,H,L;if(z>0){const V=.5/Math.sqrt(z+1);$=.25/V,q=(B-y)*V,H=(u-k)*V,L=(f-p)*V}else if(o>P&&o>F){const V=2*Math.sqrt(1+o-P-F);$=(B-y)/V,q=.25*V,H=(p+f)/V,L=(u+k)/V}else if(P>F){const V=2*Math.sqrt(1+P-o-F);$=(u-k)/V,q=(p+f)/V,H=.25*V,L=(y+B)/V}else{const V=2*Math.sqrt(1+F-o-P);$=(f-p)/V,q=(u+k)/V,H=(y+B)/V,L=.25*V}return s[0]=q,s[1]=H,s[2]=L,s[3]=$,s}class so{constructor(s){T(this,"element");T(this,"enabled",!0);T(this,"center",Z.create(0,0,0));T(this,"up",Z.create(0,1,0));T(this,"rotation",[0,0]);T(this,"shift",[0,0]);T(this,"scroll",0);T(this,"speed",.1);T(this,"sensitivity",.08);T(this,"leftPressed",!1);T(this,"rightPressed",!1);T(this,"leftDragPans",!1);T(this,"lastX",0);T(this,"lastY",0);T(this,"touches",new Map);T(this,"lastTouchCenter",null);T(this,"lastPinchDistance",null);T(this,"lastTwoFingerAngle",null);T(this,"lastTouchCount",0);T(this,"roll",0);T(this,"_dir",Z.create());T(this,"_right",Z.create());T(this,"_upCam",Z.create());T(this,"_scratch",Z.create());T(this,"_qY",ft.create());T(this,"_qX",ft.create());T(this,"_qRot",ft.create());T(this,"_qZ",ft.create());T(this,"_qLocal",ft.create());T(this,"_qWorldToCam",ft.create());T(this,"_scratchMat3",Mt.create());T(this,"bboxMin",null);T(this,"bboxMax",null);T(this,"anchor",Z.create(0,0,0));T(this,"downCallback",s=>{var o,p,u,f;if(this.enabled){if(s.pointerType==="touch"){this.touches.set(s.pointerId,{x:s.pageX,y:s.pageY}),this.handleTouchGestures(),(p=(o=s.target)==null?void 0:o.setPointerCapture)==null||p.call(o,s.pointerId),s.preventDefault();return}s.isPrimary&&(s.button===0?(this.leftPressed=!0,this.leftDragPans=s.shiftKey):s.button===2?this.rightPressed=!0:this.rightPressed=!0,this.lastX=s.pageX,this.lastY=s.pageY,(f=(u=s.target)==null?void 0:u.setPointerCapture)==null||f.call(u,s.pointerId),s.preventDefault())}});T(this,"moveCallback",s=>{if(!this.enabled)return;if(s.pointerType==="touch"){if(!this.touches.has(s.pointerId))return;this.touches.set(s.pointerId,{x:s.pageX,y:s.pageY}),this.handleTouchGestures(),s.preventDefault();return}if(!s.isPrimary||!this.leftPressed&&!this.rightPressed)return;s.preventDefault();const o=s.pageX-this.lastX,p=s.pageY-this.lastY;this.lastX=s.pageX,this.lastY=s.pageY,this.leftPressed&&!this.leftDragPans?(this.rotation[0]+=o,this.rotation[1]-=p):(this.rightPressed||this.leftPressed&&this.leftDragPans)&&(this.shift[1]-=o,this.shift[0]+=p)});T(this,"upCallback",s=>{var o,p,u,f;if(s.pointerType==="touch"){this.touches.delete(s.pointerId),this.handleTouchGestures(),(p=(o=s.target)==null?void 0:o.releasePointerCapture)==null||p.call(o,s.pointerId),s.preventDefault();return}s.button===0?this.leftPressed=!1:s.button===2?this.rightPressed=!1:this.rightPressed=!1,(f=(u=s.target)==null?void 0:u.releasePointerCapture)==null||f.call(u,s.pointerId),s.preventDefault()});T(this,"wheelCallback",s=>{if(!this.enabled||(s.preventDefault(),this.rightPressed))return;let o=s.deltaY;s.deltaMode===1?o*=16:s.deltaMode===2&&(o*=100),this.scroll+=o*.01});this.camera=s,this.registerElement(s.canvas)}get sceneRadius(){if(!this.bboxMin||!this.bboxMax)return null;const s=this.bboxMax[0]-this.bboxMin[0],o=this.bboxMax[1]-this.bboxMin[1],p=this.bboxMax[2]-this.bboxMin[2],u=.5*Math.sqrt(s*s+o*o+p*p);return u>1e-6?u:null}addRoll(s){this.roll+=s}registerElement(s){this.element&&this.element!==s&&(this.element.removeEventListener("pointerdown",this.downCallback),this.element.removeEventListener("pointermove",this.moveCallback),this.element.removeEventListener("pointerup",this.upCallback),this.element.removeEventListener("wheel",this.wheelCallback)),this.element=s,this.element.addEventListener("pointerdown",this.downCallback),this.element.addEventListener("pointermove",this.moveCallback),this.element.addEventListener("pointerup",this.upCallback),this.element.addEventListener("wheel",this.wheelCallback,{passive:!1}),this.element.addEventListener("contextmenu",o=>o.preventDefault())}setCenter(s){Z.copy(s,this.center),Z.copy(s,this.anchor)}setOrbitPivot(s){Z.set(s[0],s[1],s[2],this.center),this._reorientCameraToCenter()}setOrbitDepth(s){if(!isFinite(s)||s<.001)return;const o=this.camera.rotation;Z.set(o[2],o[6],o[10],this._dir),Z.normalize(this._dir,this._dir),Z.scale(this._dir,s,this._dir),Z.add(this.camera.position,this._dir,this.center)}_reorientCameraToCenter(){const s=this.camera;if(Z.subtract(this.center,s.position,this._scratch),Z.length(this._scratch)<1e-6)return;Z.normalize(this._scratch,this._scratch),Z.cross(this.up,this._scratch,this._right),Z.length(this._right)<1e-6&&Z.set(1,0,0,this._right),Z.normalize(this._right,this._right),Z.cross(this._scratch,this._right,this._upCam),Z.normalize(this._upCam,this._upCam);const o=s.rotation;o[0]=this._right[0],o[1]=this._upCam[0],o[2]=this._scratch[0],o[3]=0,o[4]=this._right[1],o[5]=this._upCam[1],o[6]=this._scratch[1],o[7]=0,o[8]=this._right[2],o[9]=this._upCam[2],o[10]=this._scratch[2],o[11]=0,o[12]=0,o[13]=0,o[14]=0,o[15]=1,s.update_buffer()}setBbox(s,o){this.bboxMin=Z.create(s[0],s[1],s[2]),this.bboxMax=Z.create(o[0],o[1],o[2]);const p=(s[0]+o[0])*.5,u=(s[1]+o[1])*.5,f=(s[2]+o[2])*.5;Z.set(p,u,f,this.center),Z.set(p,u,f,this.anchor)}resetToCamera(){const s=this.camera.rotation;Z.set(s[2],s[6],s[10],this._dir),Z.normalize(this._dir,this._dir);let o=null;if(this.bboxMin&&this.bboxMax){let p=-1/0,u=1/0,f=!1;for(let P=0;P<3;P++){const y=this._dir[P],k=this.bboxMin[P]-this.camera.position[P],B=this.bboxMax[P]-this.camera.position[P];if(Math.abs(y)>1e-8){const F=k/y,z=B/y;p=Math.max(p,Math.min(F,z)),u=Math.min(u,Math.max(F,z))}else if(k>0||B<0){f=!0;break}}!f&&p<=u&&u>0&&(o=(Math.max(p,0)+u)*.5)}if(o===null||!isFinite(o)||o<.001){Z.subtract(this.anchor,this.camera.position,this._scratch);const p=Z.dot(this._scratch,this._dir);o=p>.001?p:Z.length(this._scratch)}o=Math.max(.1,o),Z.scale(this._dir,o,this._dir),Z.add(this.camera.position,this._dir,this.center)}handleTouchGestures(){const s=this.touches.size;if(s!==this.lastTouchCount&&(this.lastTouchCenter=null,this.lastPinchDistance=null,this.lastTwoFingerAngle=null),this.lastTouchCount=s,s===1){const o=this.touches.values().next().value;if(this.lastTouchCenter){const p=o.x-this.lastTouchCenter[0],u=o.y-this.lastTouchCenter[1];this.rotation[0]+=p*.3,this.rotation[1]-=u*.3}this.lastTouchCenter=[o.x,o.y]}else if(s===2){const o=Array.from(this.touches.values()),p=(o[0].x+o[1].x)*.5,u=(o[0].y+o[1].y)*.5,f=o[1].x-o[0].x,P=o[1].y-o[0].y,y=Math.hypot(f,P),k=Math.atan2(P,f);if(this.lastTouchCenter!==null&&this.lastPinchDistance!==null&&this.lastTwoFingerAngle!==null){const B=p-this.lastTouchCenter[0],F=u-this.lastTouchCenter[1],z=Math.hypot(B,F),$=Math.abs(y-this.lastPinchDistance);let q=k-this.lastTwoFingerAngle;q>Math.PI&&(q-=2*Math.PI),q<-Math.PI&&(q+=2*Math.PI),z>.5&&(this.shift[1]-=B,this.shift[0]+=F),$>1&&this.lastPinchDistance>.001&&(this.scroll+=-Math.log(y/this.lastPinchDistance)*10),Math.abs(q)>.0087&&(this.roll+=q)}this.lastTouchCenter=[p,u],this.lastPinchDistance=y,this.lastTwoFingerAngle=k}}update(s){if(!this.enabled||Math.abs(this.rotation[0])<1e-4&&Math.abs(this.rotation[1])<1e-4&&Math.abs(this.shift[0])<1e-4&&Math.abs(this.shift[1])<1e-4&&Math.abs(this.scroll)<1e-4&&Math.abs(this.roll)<1e-4)return;const o=this.camera;{const V=o.rotation;this.up[0]=V[1],this.up[1]=V[5],this.up[2]=V[9],Z.length(this.up)>1e-6?Z.normalize(this.up,this.up):Z.set(0,1,0,this.up)}let p=0,u=!1;Math.abs(this.roll)>1e-4&&(p=this.roll,this.roll=0,u=!0),Z.subtract(o.position,this.center,this._dir);let f=Z.length(this._dir);f<1e-6&&(f=1e-6);const P=Math.exp(Math.log(f)+this.scroll*s*10*this.speed);Z.scale(this._dir,P/f,this._dir),f=P;const y=o.rotation;this._right[0]=y[0],this._right[1]=y[4],this._right[2]=y[8],Z.normalize(this._right,this._right),Z.length(this._right)<1e-6&&Z.set(1,0,0,this._right);const k=Z.create(y[1],y[5],y[9]);Z.normalize(k,k),Z.length(k)<1e-6&&Z.set(0,1,0,k);const B=s*this.speed*.1*f,F=this.shift[1]*B,z=-this.shift[0]*B;Z.scale(this._right,F,this._scratch),Z.add(this.center,this._scratch,this.center),Z.add(o.position,this._scratch,o.position),Z.scale(k,z,this._scratch),Z.add(this.center,this._scratch,this.center),Z.add(o.position,this._scratch,o.position);const $=this.rotation[0]*s*this.sensitivity,q=this.rotation[1]*s*this.sensitivity;if(Math.abs($)>1e-5||Math.abs(q)>1e-5||u){const V=o.rotation;cd(V,this._qWorldToCam),ft.fromAxisAngle(ad,-q,this._qX),ft.fromAxisAngle(od,-$,this._qY),ft.multiply(this._qX,this._qY,this._qLocal),u&&(ft.fromAxisAngle(ld,1*p,this._qZ),ft.multiply(this._qZ,this._qLocal,this._qLocal)),ft.normalize(this._qLocal,this._qLocal),ft.multiply(this._qLocal,this._qWorldToCam,this._qWorldToCam),ft.normalize(this._qWorldToCam,this._qWorldToCam),Mt.fromQuat(this._qWorldToCam,this._scratchMat3),wt.fromMat3(this._scratchMat3,o.rotation);const J=o.rotation,G=J[2],Y=J[6],N=J[10];o.position[0]=this.center[0]-G*f,o.position[1]=this.center[1]-Y*f,o.position[2]=this.center[2]-N*f,this.up[0]=J[1],this.up[1]=J[5],this.up[2]=J[9],Z.normalize(this.up,this.up)}else Z.add(this.center,this._dir,o.position);o.update_buffer();const L=Math.pow(.8,s*60);this.rotation[0]*=L,Math.abs(this.rotation[0])<1e-4&&(this.rotation[0]=0),this.rotation[1]*=L,Math.abs(this.rotation[1])<1e-4&&(this.rotation[1]=0),this.shift[0]*=L,Math.abs(this.shift[0])<1e-4&&(this.shift[0]=0),this.shift[1]*=L,Math.abs(this.shift[1])<1e-4&&(this.shift[1]=0),this.scroll*=L,Math.abs(this.scroll)<1e-4&&(this.scroll=0)}}function ro(i){const s=Z.create();for(const o of i)Z.add(s,o,s);return Z.scale(s,1/Math.max(i.length,1),s)}function io(i,s){const o=Mt.create();Mt.inverse(i,o);const p=Z.create();return p[0]=o[0]*s[0]+o[4]*s[1]+o[8]*s[2],p[1]=o[1]*s[0]+o[5]*s[1]+o[9]*s[2],p[2]=o[2]*s[0]+o[6]*s[1]+o[10]*s[2],p}function ud(i){const s=i.slice(),o=[1,0,0,0,1,0,0,0,1],p=(k,B)=>s[k*3+B],u=(k,B,F)=>{s[k*3+B]=F},f=(k,B)=>o[k*3+B],P=(k,B,F)=>{o[k*3+B]=F};for(let k=0;k<30;k++){let B=0,F=1,z=Math.abs(p(0,1));if(Math.abs(p(0,2))>z&&(B=0,F=2,z=Math.abs(p(0,2))),Math.abs(p(1,2))>z&&(B=1,F=2,z=Math.abs(p(1,2))),z<1e-12)break;const $=p(B,B),q=p(F,F),H=p(B,F);let L;Math.abs($-q)<1e-30?L=Math.PI/4*Math.sign(H):L=.5*Math.atan2(2*H,$-q);const V=Math.cos(L),J=Math.sin(L);for(let G=0;G<3;G++){const Y=p(G,B),N=p(G,F);u(G,B,V*Y+J*N),u(G,F,-J*Y+V*N)}for(let G=0;G<3;G++){const Y=p(B,G),N=p(F,G);u(B,G,V*Y+J*N),u(F,G,-J*Y+V*N)}for(let G=0;G<3;G++){const Y=f(G,B),N=f(G,F);P(G,B,V*Y+J*N),P(G,F,-J*Y+V*N)}}const y=[];for(let k=0;k<3;k++)y.push({val:p(k,k),vec:Z.create(f(0,k),f(1,k),f(2,k))});return y.sort((k,B)=>B.val-k.val),{vals:[y[0].val,y[1].val,y[2].val],vecs:[y[0].vec,y[1].vec,y[2].vec]}}function dd(i,s){const o=ro(i);let p=0,u=0,f=0,P=0,y=0,k=0;for(const H of i){const L=H[0]-o[0],V=H[1]-o[1],J=H[2]-o[2];p+=L*L,u+=L*V,f+=L*J,P+=V*V,y+=V*J,k+=J*J}const B=[p,u,f,u,P,y,f,y,k],{vecs:F}=ud(B);let z=F[0],$=F[1],q=F[2];return Z.dot(q,s)<0&&(Z.scale(q,-1,q),Z.scale($,-1,$)),{centroid:o,normal:q,u:z,v:$}}function pd(i){let s=0,o=0,p=0,u=0,f=0,P=0,y=0,k=0,B=0;for(const[V,J]of i){const G=-2*V,Y=-2*J,N=1,re=-(V*V+J*J);s+=G*G,o+=G*Y,p+=G*N,u+=Y*Y,f+=Y*N,P+=N*N,y+=G*re,k+=Y*re,B+=N*re}const F=Mt.create(s,o,p,o,u,f,p,f,P),z=io(F,Z.create(y,k,B)),$=z[0],q=z[1],H=z[2],L=$*$+q*q-H;return{center:[$,q],radius:Math.sqrt(Math.max(L,1e-12))}}function hd(i,s){let o=0,p=0,u=0,f=0,P=0,y=0,k=0,B=0,F=0;for(let $=0;$<i.length;$++){const q=i[$],H=Z.normalize(s[$],Z.create()),L=1-H[0]*H[0],V=-H[0]*H[1],J=-H[0]*H[2],G=1-H[1]*H[1],Y=-H[1]*H[2],N=1-H[2]*H[2];o+=L,p+=V,u+=J,f+=G,P+=Y,y+=N,k+=L*q[0]+V*q[1]+J*q[2],B+=V*q[0]+G*q[1]+Y*q[2],F+=J*q[0]+Y*q[1]+N*q[2]}const z=Mt.create(o,p,u,p,f,P,u,P,y);return io(z,Z.create(k,B,F))}function ao(i,s={}){if(i.length===0)return null;const o=s.tiltDownDeg??8,p=s.radiusScale??1,u=s.alignFirst??!0,f=(s.direction??"ccw")==="ccw"?1:-1,P=i.map(ce=>Z.clone(ce.position)),y=i.map(ce=>{const we=ce.rotation;return Z.create(we[8],we[9],we[10])}),k=i.map(ce=>{const we=ce.rotation;return Z.create(we[4],we[5],we[6])}),B=ro(k),F=Z.normalize(Z.scale(B,-1,Z.create())),{centroid:z,normal:$,u:q,v:H}=dd(P,F),L=P.map(ce=>{const we=Z.sub(ce,z,Z.create());return[Z.dot(we,q),Z.dot(we,H)]}),{center:V,radius:J}=pd(L),G=J*p,Y=Z.add(z,Z.add(Z.scale(q,V[0],Z.create()),Z.scale(H,V[1],Z.create()),Z.create()),Z.create()),N=hd(P,y),re=G*Math.tan(o*Math.PI/180),ue=Z.sub(N,Z.scale($,re,Z.create()),Z.create());let de=0;if(u){const ce=Z.sub(P[0],Y,Z.create());de=Math.atan2(Z.dot(ce,H),Z.dot(ce,q))/(2*Math.PI)%1,de<0&&(de+=1)}return console.log(`[orbit] fit ${i.length} train cams: radius=${G.toFixed(2)}, tilt=${o}°, normal=[${$[0].toFixed(2)}, ${$[1].toFixed(2)}, ${$[2].toFixed(2)}], startPhase=${de.toFixed(3)}`),{center:Y,radius:G,normal:$,u:q,v:H,lookAt:ue,startPhase:de,direction:f}}function oo(i,s){const o=(i.startPhase+s*i.direction)*2*Math.PI,p=Math.cos(o),u=Math.sin(o),f=Z.add(i.center,Z.add(Z.scale(i.u,i.radius*p,Z.create()),Z.scale(i.v,i.radius*u,Z.create()),Z.create()),Z.create()),P=Z.normalize(Z.sub(i.lookAt,f,Z.create())),y=Z.cross(P,i.normal,Z.create());Z.length(y)<1e-6&&Z.copy(i.u,y),Z.normalize(y,y);const k=Z.cross(P,y,Z.create());Z.normalize(k,k);const B=wt.create();return B[0]=y[0],B[1]=k[0],B[2]=P[0],B[3]=0,B[4]=y[1],B[5]=k[1],B[6]=P[1],B[7]=0,B[8]=y[2],B[9]=k[2],B[10]=P[2],B[11]=0,B[12]=0,B[13]=0,B[14]=0,B[15]=1,{position:f,rotation:B,img_name:`orbit_${(s*1e3).toFixed(0)}`,id:0}}function fd(i,s={}){const o=ao(i,s);if(!o)return[];const p=s.numViews??120;return Array.from({length:p},(u,f)=>({...oo(o,f/p),img_name:`circle_${f.toString().padStart(4,"0")}`,id:f}))}const lo="halloumi.renderer";function _d(){const i=new URLSearchParams(window.location.search).get("renderer"),s=i==="webgl"||i==="webgpu"?i:null;let o=null;try{const p=localStorage.getItem(lo);(p==="webgl"||p==="webgpu")&&(o=p)}catch{}return{forced:s,stored:o}}function Qr(i){try{localStorage.setItem(lo,i)}catch{}const s=new URLSearchParams(window.location.search);s.set("renderer",i),window.location.search=s.toString()}function La(i){return i==="bilinear"||i==="bicubic"||i==="hermite"||i==="texture"||i==="bc5"||i==="p"||i==="spline"?i:"off"}function ln(i){const s=(i&32768)>>15,o=(i&31744)>>10,p=i&1023;return o===0?(s?-1:1)*Math.pow(2,-14)*(p/1024):o===31?p?NaN:s?-1/0:1/0:(s?-1:1)*Math.pow(2,o-15)*(1+p/1024)}function ei(i,s,o,p,u,f,P,y,k,B=.5){const F=k?k.length:P.length/8,z=[],$=[];for(let L=0;L<F;L++){const J=(k?k[L]:L)*8,G=P[J]-i,Y=P[J+1]-s,N=P[J+2]-o,re=G*p+Y*u+N*f;if(re<=0||!(y[J+7]>>>16&1))continue;const ue=y[J+4],de=ln(ue&65535),ce=ln(ue>>>16&65535),we=3*Math.max(de,ce),Se=G-re*p,Me=Y-re*u,Ee=N-re*f;if(Se*Se+Me*Me+Ee*Ee>we*we)continue;const le=ln(y[J+3]&65535);if(le<1/255)continue;const j=y[J+5],be=y[J+6];let me=ln(j&65535),pe=ln(j>>>16&65535),he=ln(be&65535),ae=ln(be>>>16&65535);const oe=Math.hypot(me,pe,he,ae)||1;me/=oe,pe/=oe,he/=oe,ae/=oe;const Le=1-2*(he*he+ae*ae),Te=2*(pe*he+me*ae),Ie=2*(pe*ae-me*he),ge=2*(pe*he-me*ae),Ae=1-2*(pe*pe+ae*ae),Q=2*(he*ae+me*pe),A=2*(pe*ae+me*he),I=2*(he*ae-me*pe),w=1-2*(pe*pe+he*he),l=p*A+u*I+f*w;if(Math.abs(l)<1e-6)continue;const g=(G*A+Y*I+N*w)/l;if(!(g>0))continue;const _=g*p-G,x=g*u-Y,C=g*f-N,D=(_*Le+x*Te+C*Ie)/(de||1e-6),M=(_*ge+x*Ae+C*Q)/(ce||1e-6),a=D*D+M*M;if(a>9)continue;const v=Math.min(.99,le*Math.exp(-.5*a));v<1/255||(z.push(g),$.push(v))}if(z.length===0)return null;const q=z.map((L,V)=>V).sort((L,V)=>z[L]-z[V]);let H=1;for(const L of q)if(H*=1-$[L],H<B)return z[L];return null}function Qs(i,s,o){const p=(i-o.viewport[0]*.5)/o.focal[0],u=-((s-o.viewport[1]*.5)/o.focal[1]),f=o.rotation;let P=p*f[0]+u*f[1]+f[2],y=p*f[4]+u*f[5]+f[6],k=p*f[8]+u*f[9]+f[10];const B=Math.hypot(P,y,k)||1;return[P/B,y/B,k/B]}function ti(i,s,o,p,u,f){const[P,y,k]=Qs(i,s,p),B=p.position[0],F=p.position[1],z=p.position[2],$=new Uint32Array(u.buffer,u.byteOffset,u.length);let q=ei(B,F,z,P,y,k,u,$,null,.5);return q===null&&(q=ei(B,F,z,P,y,k,u,$,null,.8)),q===null?null:[B+q*P,F+q*y,z+q*k]}function co(i,s){const o=i.viewport[0],p=i.viewport[1],u=new Uint32Array(s.buffer,s.byteOffset,s.length),f=i.position[0],P=i.position[1],y=i.position[2],[k,B,F]=Qs(o*.5,p*.5,i),z=.06*Math.max(o,p),$=(z+2)/i.focal[0],q=s.length/8,H=[];for(let G=0;G<q;G++){const Y=G*8,N=s[Y]-f,re=s[Y+1]-P,ue=s[Y+2]-y,de=N*k+re*B+ue*F;if(de<=0)continue;const ce=u[Y+4],we=3*Math.max(ln(ce&65535),ln(ce>>>16&65535)),Se=N-de*k,Me=re-de*B,Ee=ue-de*F,le=de*$+we;Se*Se+Me*Me+Ee*Ee<=le*le&&H.push(G)}if(H.length===0)return null;const L=Int32Array.from(H),V=[],J=5;for(let G=0;G<J;G++)for(let Y=0;Y<J;Y++){const N=o*.5+(Y-(J-1)/2)/((J-1)/2)*z,re=p*.5+(G-(J-1)/2)/((J-1)/2)*z,[ue,de,ce]=Qs(N,re,i),we=ei(f,P,y,ue,de,ce,s,u,L,.5);we!==null&&V.push(we*(ue*k+de*B+ce*F))}return V.length<3?null:(V.sort((G,Y)=>G-Y),V[V.length>>1])}function md(i){return new Promise(s=>{const o=document.createElement("input");o.type="file",o.accept=i,o.style.display="none",o.onchange=()=>{var p;return s(((p=o.files)==null?void 0:p[0])??null)},document.body.appendChild(o),o.click(),setTimeout(()=>document.body.removeChild(o),1e3)})}function vd(i,s,o){const p=document.getElementById("ui-panel-container"),u=document.getElementById("load-button"),f=document.getElementById("quick-links");u&&(u.onclick=async()=>{const B=await md(".ply,.bitymi");if(B)if(p&&(p.style.display="none"),B.name.toLowerCase().endsWith(".bitymi")){const F=await B.arrayBuffer(),{pcBuffer:z}=ri(F),$=new File([z],B.name.replace(/\.bitymi$/i,".ply"),{type:"application/octet-stream"}),q=await Ks($,i);s(q)}else{const F=await Ks(B,i);s(F)}}),f&&(f.innerHTML="");const P=new URLSearchParams(window.location.search),y=P.get("bundle")??P.get("model_url"),k=P.get("camera_url");y&&(p&&(p.style.display="none"),o(y,k))}async function bd(i,s,o){const{bundle:p}=await ss(i,(P,y)=>o(`downloading B ... ${(P/1048576).toFixed(1)}${y?` / ${(y/1048576).toFixed(1)}`:""} MB`));if(!p)throw new Error("bundle_b must be a .bitymi bundle");o("parsing B ...");const u=await Ks(new File([p.pcBuffer],"bundle_b.ply",{type:"application/octet-stream"}),s);let f=null;if(p.atlasBuffer){o("uploading B atlas ...");try{f=await Kr(s,On(p.atlasBuffer),!0)}catch(P){console.warn("[A/B] B atlas failed:",P)}}return{pc:u,atlas:f}}function $r(i){const s=new Uint32Array(i.surfel_data.buffer,i.surfel_data.byteOffset,i.num_points*8);for(let o=0;o<i.num_points;o++){const p=s[o*8+7];if(!(p>>>16&1)||(p>>>17&1)===1)return!0}return!1}async function gd(i,s,o,p){const u=new Js(i,o),f=new so(u);let P=!1;i.addEventListener("pointerdown",()=>{P=!0}),window.addEventListener("pointerup",()=>{P=!1});const y=typeof window<"u"&&window.parent!==window,k={pos:new Float32Array(3),rot:new Float32Array(16)};if(y){window.addEventListener("message",Q=>{const A=Q.data;if(!(!A||A.type!=="halloumi_sync_pose")&&!(!Array.isArray(A.position)||A.position.length!==3)&&!(!Array.isArray(A.rotation)||A.rotation.length!==16)){for(let I=0;I<3;I++)u.position[I]=A.position[I];for(let I=0;I<16;I++)u.rotation[I]=A.rotation[I];u.update_buffer(),f.resetToCamera();for(let I=0;I<3;I++)k.pos[I]=u.position[I];for(let I=0;I<16;I++)k.rot[I]=u.rotation[I]}});try{window.parent.postMessage({type:"halloumi_sync_ready"},"*")}catch{}}const B=()=>{if(!y)return;const Q=u.position,A=u.rotation;let I=!1;for(let w=0;w<3;w++)if(Math.abs(Q[w]-k.pos[w])>1e-6){I=!0;break}if(!I){for(let w=0;w<16;w++)if(Math.abs(A[w]-k.rot[w])>1e-6){I=!0;break}}if(I){for(let w=0;w<3;w++)k.pos[w]=Q[w];for(let w=0;w<16;w++)k.rot[w]=A[w];try{window.parent.postMessage({type:"halloumi_camera_state",position:[Q[0],Q[1],Q[2]],rotation:Array.from(A)},"*")}catch{}}},F="rgba8unorm";s.configure({device:o,format:F,alphaMode:"opaque",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING});let z=null,$=null,q=null,H=[0,0,0,0];const L=()=>{u.on_update_canvas(),z!==null&&Pn(i.width,i.height,o,z.render_settings_buffer),$!==null&&$()};new ResizeObserver(()=>{const Q=Math.max(.25,j.render_scale),A=Math.max(1,Math.ceil(Q*i.clientWidth)),I=Math.max(1,Math.ceil(Q*i.clientHeight));i.width===A&&i.height===I||(i.width=A,i.height=I,L())}).observe(i);let J=0,G=0;const Y=()=>{(i.width!==J||i.height!==G)&&(J=i.width,G=i.height,L())},N=new URLSearchParams(window.location.search);let ue=N.get("animation")==="1";f.enabled=!ue;const de=N.get("camera_url"),ce=N.get("bfc"),we=ce==="1"||ce==="true",Se=N.get("bfc_cos"),Me=Se!==null?Number(Se):NaN,Ee=Number.isFinite(Me)?Me:2,le=Math.max(1,window.devicePixelRatio||1),j={msaa:!1,bsp_order:new URLSearchParams(window.location.search).get("bsp_order")!=="0",gaussian_scaling:1,sh_bias:.5,animate:ue,animateMode:"presets",bg:{r:0,g:0,b:0,a:0},atlas_enabled:!1,mips:(new URLSearchParams(window.location.search).get("mip")??"1")!=="0",bfc:we,bfc_cos:Ee,legacy_renderer:!1,surfel_math:"conic",hyp_legacy:!1,mip2d:!1,mip2d_k:.3,fetch_by_id:!0,two_pass:!1,opaque_thresh:.5,overdraw:"off",overdraw_max:48,render_scale:1,upscale:["1","true"].includes(new URLSearchParams(location.search).get("upon")??"")?La(new URLSearchParams(location.search).get("up")):"off",upscale_factor:(Q=>Q>0&&Q<1?Math.max(1.05,Math.min(8,1/Q)):2)(parseFloat(new URLSearchParams(location.search).get("rs")??"1")),upscale_auto:new URLSearchParams(location.search).get("rs")==="auto",adapt_heat:["1","true"].includes(new URLSearchParams(location.search).get("adapt_heat")??""),adapt_tau:(Q=>Q>0?Q:1)(parseFloat(new URLSearchParams(location.search).get("adapt_tpp")??"1")),slope_mip:["1","true"].includes(new URLSearchParams(location.search).get("slope_mip")??"")},be=new Qa.Pane({title:"Config",expanded:!0}),me={stats:"— loading —"};be.addMonitor(me,"stats",{label:"Stats",interval:200,multiline:!0,lineCount:2});let pe=null;const he=be.addInput(j,"atlas_enabled",{label:"Texture"}).on("change",Q=>pe==null?void 0:pe(Q.value));let ae=null;const oe=be.addFolder({title:"⚙ Advanced options",expanded:!1}),Le=new Oa;be.on("change",()=>Le.request()),window.__halloumiRedraw=()=>Le.request();const Te={on:j.upscale!=="off"},Ie=oe.addInput(Te,"on",{label:"Upscaling (2×)"}).on("change",Q=>ae==null?void 0:ae(Q.value));oe.addInput(j,"animate",{label:"Animate"}).on("change",Q=>{const A=ue;ue=Q.value,f.enabled=!Q.value,!A&&ue&&ge.value&&ge.value.onAnimateStart(),A&&!ue&&ge.value&&ge.value.onAnimateStop()}),oe.addInput(j,"animateMode",{label:"Anim path",options:{"Training views":"presets","Circle orbit":"circle"}});const ge={value:null};vd(o,Q=>Ae(Q,[],null),async(Q,A)=>{let I=A??de,w,l=null;const g=Q.toLowerCase();if(g.endsWith(".bitymi")||g.includes(".bitymi?")){rs("downloading bundle ...");try{const{bundle:M}=await ss(Q,(v,d,m,c)=>{if(c==="cache"){Ct(`loading cached bundle ...
${(v/1048576).toFixed(1)}${d?` / ${(d/1048576).toFixed(1)}`:""} MB on this device`);return}const b=v/(1024*1024),E=d?d/(1024*1024):void 0,S=m/(1024*1024),O=d?Math.min(99,Math.floor(v/d*100)):void 0,X=E?`total ${E.toFixed(1)} MB`:"total -- MB",W=E&&O!==void 0?`${b.toFixed(1)} MB downloaded (${O}%)`:`${b.toFixed(1)} MB downloaded`,se=`${S.toFixed(2)} MB/s`;Ct(`downloading bundle ...
${X}, ${W}
${se}`)});if(!M)throw new Error("Expected a .bitymi bundle");Ct("parsing PLY ...");const a=new File([M.pcBuffer],"bundle.ply",{type:"application/octet-stream"});if(w=await Ks(a,o),!I&&M.camerasBuffer&&(I=URL.createObjectURL(new Blob([M.camerasBuffer],{type:"application/json"}))),M.atlasBuffer){const v=M.atlasBuffer.byteLength/1048576;Ct(`uploading atlas ...
${v.toFixed(1)} MB BC7`);try{const d=On(M.atlasBuffer);l=await Kr(o,d,!0)}catch(d){console.warn("[atlas] failed to parse/upload atlas:",d)}}}catch(M){throw Jt(),M}}else w=await ou(Q,o);let _=null,x="";const C=N.get("atlas2");if(C)try{const{bundle:M}=await ss(C,(a,v)=>{Ct(`downloading second atlas ...
${(a/1048576).toFixed(1)}${v?` / ${(v/1048576).toFixed(1)}`:""} MB`)});if(!(M!=null&&M.atlasBuffer))throw new Error("second bundle has no atlas chunk");Ct("uploading second atlas ..."),_=await Kr(o,On(M.atlasBuffer),!0),_||(x="second atlas: format unsupported on this device")}catch(M){console.warn("[atlas2] failed:",M),x=`second atlas failed: ${M}`}const D=I?await Jr(I):[];D.length>0&&u.set_preset(D[0]),Ae(w,D,l,_,x)});function Ae(Q,A=[],I=null,w=null,l=""){const g=[(Q.bbox.min[0]+Q.bbox.max[0])/2,(Q.bbox.min[1]+Q.bbox.max[1])/2,(Q.bbox.min[2]+Q.bbox.max[2])/2];f.setBbox(Q.bbox.min,Q.bbox.max),.5*Math.sqrt((Q.bbox.max[0]-Q.bbox.min[0])**2+(Q.bbox.max[1]-Q.bbox.min[1])**2+(Q.bbox.max[2]-Q.bbox.min[2])**2);function _(R,ee){const ie=ti(R,ee,i,u,Q.surfel_data);ie&&(f.setOrbitPivot(ie),console.log(`[pick] orbit pivot → (${ie[0].toFixed(3)}, ${ie[1].toFixed(3)}, ${ie[2].toFixed(3)})`))}function x(){const R=co(u,Q.surfel_data);if(R!==null&&R>.001){f.setOrbitDepth(R);return}const ee=u.rotation,ie=ee[2],ve=ee[6],ye=ee[10],Pe=(Q.centroid[0]-u.position[0])*ie+(Q.centroid[1]-u.position[1])*ve+(Q.centroid[2]-u.position[2])*ye;Pe>.001&&f.setOrbitDepth(Pe)}if(A.length===0){const R=Q.bbox.max[0]-Q.bbox.min[0],ee=Q.bbox.max[1]-Q.bbox.min[1],ie=Q.bbox.max[2]-Q.bbox.min[2],ye=.5*Math.sqrt(R*R+ee*ee+ie*ie)*.5;Z.set(g[0]-ye,g[1]-ye,g[2]-ye,u.position);const Pe=Z.create(ye,ye,ye);Z.normalize(Pe,Pe);const Be=Z.create(0,1,0),Re=Z.create();Z.cross(Be,Pe,Re),Z.normalize(Re,Re);const Ue=Z.create();Z.cross(Pe,Re,Ue);const Oe=Mt.create(Re[0],Ue[0],Pe[0],Re[1],Ue[1],Pe[1],Re[2],Ue[2],Pe[2]);wt.fromMat3(Oe,u.rotation),u.update_buffer()}f.setCenter(Z.create(Q.centroid[0],Q.centroid[1],Q.centroid[2]));const C=/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&/Mac/i.test(navigator.platform),D="halloumi.fetch_by_id";let M=null;try{const R=localStorage.getItem(D);(R==="0"||R==="1")&&(M=R==="1")}catch{}const a=N.get("byid"),v={fetchById:a!==null?a==="1":M!==null?M:!C,octBound:N.get("oct")==="1",acc16:N.get("acc16")==="1",staticSortKeys:null},d=N.get("bsp");let m=null;d&&(v.staticSortKeys=new Float32Array(Q.num_points),m=Hu(d).then(R=>{if(R.nSurfels!==Q.num_points)throw new Error(`BSP has ${R.nSurfels} surfels, scene has ${Q.num_points}`);return console.log(`[bsp] loaded ${d}: ${R.nNodes} nodes over ${R.nSurfels} surfels`),R}));let c=new Xs(Q,o,F,u.uniform_buffer,p,I,v);const b=N.get("surfel_math");j.surfel_math=b==="raysplat"||b==="centred"?b:N.get("raysplat")==="1"?"raysplat":"conic",j.hyp_legacy=N.get("hyp_legacy")==="1",j.mip2d=N.get("mip2d")==="1";{const R=parseFloat(N.get("mip2d_k")??"");Number.isFinite(R)&&R>0&&(j.mip2d_k=R)}Ba(j.mip2d,j.mip2d_k,o,c.render_settings_buffer),es({hypLegacy:j.hyp_legacy,raysplat:j.surfel_math==="raysplat",centred:j.surfel_math==="centred"},o,c.render_settings_buffer),j.legacy_renderer=N.get("legacy")==="1",j.legacy_renderer&&c.setLegacyRenderer(!0),j.two_pass=N.get("twopass")==="1"&&!Ts;{const R=parseFloat(N.get("opaque_t")??"");Number.isFinite(R)&&(j.opaque_thresh=Math.min(.99,Math.max(.01,R)))}c.setOpaqueThresh(j.opaque_thresh),j.two_pass&&c.setTwoPass(!0);{const R=N.get("overdraw");(R==="shaded"||R==="raster"||R==="1")&&(j.overdraw=R==="raster"?"raster":"shaded");const ee=parseInt(N.get("overdraw_max")??"",10);Number.isFinite(ee)&&ee>0&&(j.overdraw_max=ee)}c.setOverdrawMax(j.overdraw_max),j.overdraw!=="off"&&c.setOverdrawMode(j.overdraw==="raster"?2:1),j.fetch_by_id=v.fetchById,console.log(`[render_2dgs] fetch_by_id=${v.fetchById} (source: ${a!==null?"?byid":M!==null?"remembered":`handheld=${C}`})`),z=c,Pn(i.width,i.height,o,c.render_settings_buffer),j.atlas_enabled=I!==null;{const R=Q.surfel_data,ee=R.length/8;let ie=0,ve=0,ye=0;for(let Be=0;Be<ee;Be++)ie+=R[Be*8],ve+=R[Be*8+1],ye+=R[Be*8+2];const Pe=ee>0?[ie/ee,ve/ee,ye/ee]:[0,0,0];c.setBfcParams(j.bfc_cos,Pe),es({bfc:j.bfc},o,c.render_settings_buffer),console.log(`[bfc] flag=${j.bfc} cos=${j.bfc_cos} centroid=(${Pe[0].toFixed(3)}, ${Pe[1].toFixed(3)}, ${Pe[2].toFixed(3)})`)}let E=!1;const S=(()=>{if(I!==null)return`${I.meta.format===2?"BC7":I.meta.format===3?"ASTC 4×4":I.meta.format===7?"BC7 codebook gather (typeD)":`format=${I.meta.format}`} ${I.meta.width}×${I.meta.height}, ${I.meta.n_layers} layers`;const R=o.features.has("texture-compression-bc"),ee=o.features.has("texture-compression-astc");return`no atlas in bundle (GPU supports: ${(R?["BC7"]:[]).concat(ee?["ASTC"]:[]).join("+")||"none"})`})();console.log("[atlas]",S),Ma(Q.sh_bias,o,c.render_settings_buffer),Ca(j.gaussian_scaling,o,c.render_settings_buffer),j.sh_bias=Q.sh_bias;let O=Q.num_points.toLocaleString();me.stats=`${O} surfels · -- fps`;const X=.4,W=3,se=.3;let te=null,ne=0,_e=0;const Ce=ft.create(),ke=Mt.create();let xe=A.length>0?0:-1;const Ve={view:A.length>0?`${xe+1} / ${A.length}: ${A[xe].img_name??xe}`:"— no presets —"},Fe=document.createElement("span");function Je(R){const ee=Mt.create(R[0],R[1],R[2],R[4],R[5],R[6],R[8],R[9],R[10]);return ft.fromMat(ee)}function ot(R,ee){te={fromPos:Z.clone(u.position),toPos:Z.clone(R.position),fromQuat:ft.normalize(Je(u.rotation)),toQuat:ft.normalize(Je(R.rotation)),target:R,t:0,duration:Math.max(.01,ee)}}const Qe=(R,ee=!0)=>{if(A.length===0)return;xe=(R%A.length+A.length)%A.length;const ie=A[xe];ee?ot(ie,X):(u.set_preset(ie),f.resetToCamera(),x()),Ve.view=`${xe+1} / ${A.length}: ${A[xe].img_name??xe}`,Fe.textContent=Ve.view};if(A.length>0){const R=oe.addSeparator(),ee=document.createElement("div");ee.style.cssText="display:flex;gap:4px;align-items:center;padding:3px 6px;";const ie=(ye,Pe,Be)=>{const Re=document.createElement("button");return Re.className="tp-btnv_b",Re.textContent=ye,Re.title=Pe,Re.style.cssText="flex:0 0 34px;height:24px;padding:0;",Re.addEventListener("click",Be),Re};Fe.textContent=Ve.view,Fe.style.cssText="flex:1 1 auto;font-size:11px;text-align:center;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;opacity:.85;",ee.appendChild(ie("◀","previous view (←)",()=>Qe(xe-1))),ee.appendChild(Fe),ee.appendChild(ie("▶","next view (→)",()=>Qe(xe+1))),(R.element.parentElement??oe.element.querySelector(".tp-fldv_c")??oe.element).insertBefore(ee,R.element),R.dispose()}const st=A.length>0?ao(A,{tiltDownDeg:15,alignFirst:!0}):null,rt=st?fd(A,{numViews:120,tiltDownDeg:15,alignFirst:!0}):[];let je=0;const et=12;ge.value={onAnimateStart:()=>{je=0},onAnimateStop:()=>{f.resetToCamera(),x()}};const Ze=R=>{const ee=Math.max(.25,R),ie=Math.max(1,Math.ceil(ee*i.clientWidth)),ve=Math.max(1,Math.ceil(ee*i.clientHeight));(i.width!==ie||i.height!==ve)&&(i.width=ie,i.height=ve,L())},dt=oe.addInput(j,"render_scale",{label:"Render scale",min:.25,max:le,step:.25}).on("change",R=>Ze(R.value)),qe=new URLSearchParams(location.search),$e={};for(const R of["bc5","p"]){const ee=qe.get(`slope_${R}`),ie=qe.get(`slope_${R}_4x`);ee&&($e[`${R}2`]=ee),(ie||ee)&&($e[`${R}4`]=ie??ee)}const He={},tt={slope:""},at=(R,ee)=>{const ie=`${R}${ee>=2.83?4:2}`;if($e[ie]===$e[`${R}2`]&&ie!==`${R}2`)return at(R,2);const ve=He[ie],ye=`${R.toUpperCase()} ${ee>=2.83?4:2}x`;return ve&&ve!=="loading"&&ve!=="failed"?ve:(ve===void 0&&$e[ie]&&(He[ie]="loading",tt.slope=`${ye}: downloading…`,(async()=>{try{const Pe=await Ja($e[ie],(Re,Ue,Oe,ct)=>{tt.slope=`${ye}: ${ct==="cache"?"cached ":""}${(Re/1048576).toFixed(0)}${Ue?` / ${(Ue/1048576).toFixed(0)}`:""} MB`}),Be=await au(o,On(Pe),I?I.meta:null);if(!Be)throw new Error("unsupported on this device or layout mismatch (see console)");He[ie]=Be,tt.slope=`${ye}: ready (${Be.mb.toFixed(0)} MB on GPU)`,Le.request()}catch(Pe){console.warn(`[slope ${ye}]`,Pe),He[ie]="failed",tt.slope=`${ye}: failed — ${Pe}`}})()),null)};let bt=null;const lt=qe.get("spline");let kt=null;lt&&$e.bc52&&fetch(lt).then(R=>R.json()).then(R=>{kt={K:R.K,R:R.R,T:R.T,w:Float32Array.from(R.w)},console.log("[spline] kernel",R.K,"T",R.T,R.tag??"")}).catch(R=>console.warn("[spline] kernel load failed",R));const Pt={off:"off",bilinear:"bilinear",bicubic:"bicubic",hermite:"hermite","texture-aware (green)":"texture"};$e.bc52&&(Pt["texture BC5 (finetuned)"]="bc5"),$e.p2&&(Pt["texture P (finetuned)"]="p"),$e.bc52&&lt&&(Pt["texture BC5 + learned spline kernel"]="spline");const Dt=oe.addInput(j,"upscale",{label:"Upscale",options:Pt}).on("change",()=>{j.upscale==="off"&&(L(),Ot()),Te.on=j.upscale!=="off",Ie.refresh()}),ut=La(qe.get("up")),pt=ut!=="off"&&!((ut==="bc5"||ut==="p")&&!$e[`${ut}2`])&&!(ut==="spline"&&!($e.bc52&&lt))?ut:$e.bc52?"bc5":"hermite";Ie.label=pt==="bc5"||pt==="p"||pt==="spline"?"Upscaling (texture-aware 2×)":`Upscaling (${pt==="hermite"?"Hermite":pt} 2×)`;const Ot=()=>{j.render_scale!==1&&(j.render_scale=1,dt.refresh(),Ze(1))};ae=R=>{R?(j.upscale=pt,j.upscale_factor=2):(j.upscale="off",L()),Ot(),Dt.refresh()},($e.bc52||$e.p2)&&oe.addMonitor(tt,"slope",{label:"Slope data",interval:300}),oe.addInput(j,"upscale_factor",{label:"Upscale factor (render at 1/f)",min:1.05,max:4,step:.05});const St=new id(Q.surfel_data,Q.num_points,I?I.meta:null,{tau:j.adapt_tau,pct:parseFloat(qe.get("adapt_pct")??"0.5"),levels:(qe.get("adapt_levels")??"1,2,4").split(",").map(Number).filter(R=>R>=1),continuous:!["0","false"].includes(qe.get("adapt_cont")??""),rateUp:parseFloat(qe.get("adapt_rate")??"0.03"),rateDown:parseFloat(qe.get("adapt_rate_down")??"0.1"),minF:parseFloat(qe.get("adapt_min")??"1.3"),upHold:parseInt(qe.get("adapt_hold")??"12"),minPx:parseFloat(qe.get("adapt_px")??"6")});j.upscale_auto&&j.upscale==="off"&&["1","true"].includes(qe.get("upon")??"")&&(j.upscale=pt);const Wt={adapt:St.texelMode?"texel mode":"no atlas rects: surfel-width mode"};oe.addInput(j,"upscale_auto",{label:"Adaptive factor"}).on("change",()=>St.reset()),oe.addInput(St,"continuous",{label:"Adaptive: continuous factor"}).on("change",()=>St.reset()),oe.addMonitor(Wt,"adapt",{label:"Adaptive",interval:250}),oe.addInput(j,"slope_mip",{label:"Slope mip-matched"}).on("change",()=>Ra(j.slope_mip,o,c.render_settings_buffer)),j.slope_mip&&Ra(!0,o,c.render_settings_buffer);const Lt=()=>Iu(j.adapt_heat?St.tau:0,o,c.render_settings_buffer);oe.addInput(j,"adapt_heat",{label:"Adaptive heatmap (red 1x · yellow 2x · green 4x)"}).on("change",Lt),oe.addInput(j,"adapt_tau",{label:"Adaptive bias (texels/px)",min:.25,max:4,step:.05}).on("change",R=>{St.tau=R.value,St.reset(),Lt()}),j.adapt_heat&&Lt(),oe.addInput(j,"bfc",{label:j.bfc_cos<1.5?`Backface cull (cos ${j.bfc_cos})`:"Backface cull"}).on("change",()=>{es({bfc:j.bfc},o,c.render_settings_buffer)});const Kt={res:""},jt=()=>{const R=i.width*i.height/1e6;Kt.res=`${i.width}×${i.height}  (${R.toFixed(2)} MP)
CSS ${i.clientWidth}×${i.clientHeight} · DPR ${le.toFixed(2)} · native ${Math.round(i.clientWidth*le)}×${Math.round(i.clientHeight*le)}`};jt(),$=jt,oe.addMonitor(Kt,"res",{label:"Resolution",interval:250,multiline:!0,lineCount:2}),oe.addInput(j,"gaussian_scaling",{label:"Surfel scale",min:0,max:1}).on("change",R=>Ca(R.value,o,c.render_settings_buffer)),oe.addInput(j,"sh_bias",{label:"SH bias",min:0,max:2,step:.01}).on("change",R=>Ma(R.value,o,c.render_settings_buffer)),oe.addInput(j,"bg",{label:"Background",color:{type:"float",alpha:!0}}).on("change",R=>{c.bgColor=[R.value.r,R.value.g,R.value.b,R.value.a]});const it=R=>R===null?"":R.meta.format===3||R.meta.format===8||R.meta.format===10?" (ASTC)":" (BC7)";let Vt=it(I);const Bt=document.createElement("button");Bt.style.cssText="position:fixed;top:8px;right:276px;z-index:1000;height:28px;padding:0 10px;border-radius:6px;border:1px solid #444;background:#1c1c1ccc;color:#eee;font:600 12px/1 system-ui,sans-serif;cursor:pointer;backdrop-filter:blur(4px);";const $t=()=>{Bt.textContent=`Texture${Vt}: ${j.atlas_enabled?"ON":"OFF"}`,Bt.style.borderColor=j.atlas_enabled?"#f0b060":"#444",Bt.style.color=j.atlas_enabled?"#f0b060":"#bbb"},Sn=()=>{j.atlas_enabled=!j.atlas_enabled,c.setAtlasEnabled(j.atlas_enabled),he.refresh(),$t()};he.label=`Texture${Vt}`,pe=R=>{c.setAtlasEnabled(R),$t(),Le.request()},he.refresh(),Bt.title="toggle the baked texture (T)",Bt.addEventListener("click",Sn),I&&document.body.appendChild(Bt),$t();const zt=N.get("bundle_b");let Qt=()=>{};if({}.VITE_MIP2D_UI==="1"&&($r(Q)||zt)){const R=document.createElement("button");R.style.cssText=Bt.style.cssText.replace("top:8px","top:42px"),R.title="Mip-Splatting 2D Mip filter on the 3D kernels (normalises the screen-space dilation; helps when zoomed out)";let ee=null;const ie=()=>{R.textContent=`Mip 2D filter: ${j.mip2d?"ON":"OFF"}`,R.style.borderColor=j.mip2d?"#f0b060":"#444",R.style.color=j.mip2d?"#f0b060":"#bbb";try{const ye=new URL(window.location.href);j.mip2d?ye.searchParams.set("mip2d","1"):ye.searchParams.delete("mip2d"),history.replaceState(history.state,"",ye.toString())}catch{}},ve=()=>{Ba(j.mip2d,j.mip2d_k,o,c.render_settings_buffer),ee==null||ee.refresh(),ie()};R.addEventListener("click",()=>{j.mip2d=!j.mip2d,ve()}),ee=oe.addInput(j,"mip2d",{label:"Mip 2D filter"}).on("change",()=>ve()),document.body.appendChild(R),ie(),Qt=()=>{const ye=$r(Q);R.style.display=ye?"":"none",ee&&(ee.hidden=!ye)},Qt(),window.__halloumiMip2D={get on(){return j.mip2d},toggle:()=>R.click()}}let Ht=()=>{};if(zt){const R=N.get("label_a")??"A",ee=N.get("label_b")??"B",ie={a:{pc:Q,atlas:I,renderer:c},b:null};let ve="a",ye=null;const Pe=document.createElement("button");Pe.style.cssText=Bt.style.cssText.replace("top:8px","top:76px"),Pe.title=`switch between the two bakes of this scene (B key): ${R} / ${ee}`;const Be=(De="")=>{Pe.textContent=De||`Scene: ${ve==="a"?R:ee}  ⇄`,Pe.style.borderColor=ve==="b"?"#60b0f0":"#f0b060",Pe.style.color=ve==="b"?"#60b0f0":"#f0b060";try{const Ke=new URL(window.location.href);ve==="b"?Ke.searchParams.set("side","b"):Ke.searchParams.delete("side"),history.replaceState(history.state,"",Ke.toString())}catch{}},Re=()=>ie.b?Promise.resolve(ie.b):(ye||(ye=bd(zt,o,De=>{ve==="a"&&Be(De)}).then(De=>(ie.b={pc:De.pc,atlas:De.atlas,renderer:null},Be(),ie.b))),ye),Ue=De=>{const Ke=Xt.slice(0);De.renderer=new Xs(De.pc,o,F,u.uniform_buffer,p,De.atlas,De===ie.a?v:{...v,staticSortKeys:null}),new Uint8Array(Xt).set(new Uint8Array(Ke))},Oe=De=>{const Ke=ie[De];Ke.renderer||Ue(Ke);const vt=c,Ye=Ke.renderer;Ye.bgColor=[...vt.bgColor],Ye.setAtlasEnabled(j.atlas_enabled&&Ke.atlas!==null),Ye.setLegacyRenderer(j.legacy_renderer),Ye.setOpaqueThresh(j.opaque_thresh),Ye.setTwoPass(j.two_pass),Ye.setOverdrawMax(j.overdraw_max),Ye.setOverdrawMode(j.overdraw==="off"?0:j.overdraw==="raster"?2:1),Ye.setMsaa(j.msaa),Ye.setFetchById(j.fetch_by_id);{const It=Ke.pc.surfel_data,gt=It.length/8;let mn=0,Yt=0,qn=0;for(let Zt=0;Zt<gt;Zt++)mn+=It[Zt*8],Yt+=It[Zt*8+1],qn+=It[Zt*8+2];Ye.setBfcParams(j.bfc_cos,gt>0?[mn/gt,Yt/gt,qn/gt]:[0,0,0])}Lu(Ke.pc.feature_mode,void 0,void 0,!1),Uu(Ke.pc.K,void 0,void 0,!1),Pn(i.width,i.height,void 0,void 0,!1),ii(o,Ye.render_settings_buffer),c=Ye,z=Ye,Q=Ke.pc,I=Ke.atlas,O=Q.num_points.toLocaleString(),ve=De,Qt(),Be(),console.log(`[A/B] active = ${De} (${De==="a"?R:ee}): ${Q.num_points} surfels, feature_mode ${Q.feature_mode}, EWA rows ${$r(Q)}`)};Ht=()=>{if(ve==="a"){if(ie.b){Oe("b");return}rs(`loading ${ee} ...`),Re().then(()=>{Oe("b"),Jt()}).catch(De=>{Jt(),console.error("[A/B] B failed:",De),Be(`B failed: ${(De==null?void 0:De.message)??De}`)})}else Oe("a")},Pe.addEventListener("click",()=>Ht()),document.body.appendChild(Pe),Be(),N.get("side")==="b"?Ht():C||setTimeout(()=>{Re().then(De=>{De.renderer||Ue(De)}).catch(De=>console.warn("[A/B] preload failed:",De))},1500),window.__halloumiAB={get side(){return ve},toggle:()=>Ht(),get bReady(){var De;return!!((De=ie.b)!=null&&De.renderer)}}}if(I&&(w||l))if(w){const R={};R[`A${it(I)} · bundle`]="A",R[`B${it(w)} · atlas2`]="B";const ee={atlas:"A"};oe.addInput(ee,"atlas",{label:"Atlas source",options:R}).on("change",ie=>{const ve=ie.value==="B"?w:I;c.setAtlas(ve),Vt=it(ve),he.label=`Texture${Vt}`,$t(),console.log(`[atlas2] now sampling ${ie.value}${Vt}`)})}else{const R={note:l};oe.addMonitor(R,"note",{label:"Atlas B",multiline:!0,lineCount:2})}const is=I!==null&&(I.meta.probe_mode|0)>0;if(c.hasMips&&is)c.setMipMode(j.mips),oe.addInput(j,"mips",{label:"Mips (trilinear)"}).on("change",R=>c.setMipMode(R.value));else if(I!==null&&I.meta.format!==4294967295&&typeof c.setMipMode=="function"){const R=N.get("mipbias"),ee=c.hasMips,ie={mode:R==="aniso"||N.get("aniso")==="1"?"aniso":ee&&(R==="0"||R==="1"||R==="2")?R:"off"},ve=Pe=>{Pe==="off"?c.setMipMode(0):Pe==="aniso"?c.setMipMode(2):(c.setMipLodBias(Number(Pe)),c.setMipMode(1)),console.log(`[mips] ${Pe==="off"?"off (level 0 only)":Pe==="aniso"?"anisotropic 16x (textureSampleGrad)":`on, bias ${Pe}`}`)};ve(ie.mode);const ye={"off (level 0)":"off","anisotropic 16x":"aniso"};ee&&Object.assign(ye,{"bias 0 (full)":"0","bias 1":"1","bias 2":"2"}),oe.addInput(ie,"mode",{label:ee?"Atlas mips":"Atlas filter",options:ye}).on("change",Pe=>ve(Pe.value))}const Ut=oe.addFolder({title:"🔬 Surfel math (A/B)",expanded:!0});m&&m.then(R=>{const ee=c,ie=new Float32Array(R.nSurfels),ve={cpu:"--"};let ye=null;ee.preFrame=()=>{c===ee&&(j.bsp_order?(ye!==!0&&R.invalidate(),R.computeKeys(u.position)&&(ee.writeSortKeys(R.keys),ve.cpu=`${R.lastMs.toFixed(2)} ms / ${R.nNodes} nodes`)):ye!==!1&&ee.writeSortKeys(ie),ye=j.bsp_order)},Ut.addInput(j,"bsp_order",{label:"BSP order (vs depth sort)"}),Ut.addMonitor(ve,"cpu",{label:"BSP traversal",interval:500})}).catch(R=>console.error("[bsp] disabled:",R)),Ut.addInput(j,"surfel_math",{label:"Surfel math",options:{"Conic (default)":"conic","Ray-splat":"raysplat",Centred:"centred"}}).on("change",R=>es({raysplat:R.value==="raysplat",centred:R.value==="centred"},o,c.render_settings_buffer));const Vn=globalThis.__gpuAdapterInfo??{},En={s:`${Vn.vendor??"?"} / ${Vn.architecture??"?"}
${Vn.device||Vn.description||"?"}`};Ut.addMonitor(En,"s",{label:"GPU",multiline:!0,lineCount:2}),Ut.addInput(j,"hyp_legacy",{label:"Hyp-rect legacy"}).on("change",R=>es({hypLegacy:R.value},o,c.render_settings_buffer)),Ut.addInput(j,"two_pass",{label:"Two-pass (layer)"}).on("change",R=>c.setTwoPass(R.value)),Ut.addInput(j,"opaque_thresh",{label:"Layer α >",min:.05,max:.99,step:.01}).on("change",R=>c.setOpaqueThresh(R.value)),Ut.addInput(j,"overdraw",{label:"Overdraw view",options:{Off:"off","Shaded fragments":"shaded","Rasterized fragments":"raster"}}).on("change",R=>c.setOverdrawMode(R.value==="shaded"?1:R.value==="raster"?2:0)),Ut.addInput(j,"overdraw_max",{label:"Overdraw scale",min:4,max:256,step:1}).on("change",R=>c.setOverdrawMax(R.value));const as={s:"—"};Ut.addMonitor(as,"s",{label:"Overdraw",multiline:!0,lineCount:2}),setInterval(()=>{if(c.overdrawModeValue===0){as.s="—";return}c.readOverdrawStats().then(R=>{R&&(as.s=`mean ${R.mean.toFixed(1)} frag/px · ${R.meanCovered.toFixed(1)} on covered
max ${R.max} · covered ${(R.coveredFrac*100).toFixed(0)} % of pixels`)}).catch(R=>console.warn("[overdraw] readback failed:",R))},500),oe.addInput(j,"legacy_renderer",{label:"Legacy renderer"}).on("change",R=>c.setLegacyRenderer(R.value)),oe.addInput(j,"fetch_by_id",{label:"Fetch-by-id (frag)"}).on("change",R=>{c.setFetchById(R.value);try{localStorage.setItem("halloumi.fetch_by_id",R.value?"1":"0")}catch{}}),oe.addButton({title:"🔁 Switch to WebGL2 renderer"}).on("click",()=>Qr("webgl")),j.msaa=N.get("msaa")==="1"&&!Ts,j.msaa&&c.setMsaa(!0),oe.addInput(j,"msaa",{label:"MSAA 4×"}).on("change",R=>c.setMsaa(R.value));const $n={aspect:"canvas"},un=oe.addFolder({title:"📸 Screenshot",expanded:!1});un.addInput($n,"aspect",{label:"Aspect",options:{Canvas:"canvas","16:9":"16:9","3:2":"3:2","4:3":"4:3","1:1":"1:1","9:16":"9:16","21:9":"21:9"}});const en={s:"pick a size to capture"};un.addMonitor(en,"s",{label:"Status",interval:250,multiline:!0,lineCount:2});const Bs=[["SD",854],["HD",1280],["FHD",1920],["QHD",2560],["4K",3840],["8K",7680]];let dn=null;function ir(R){let ee;if($n.aspect==="canvas")ee=i.width/i.height;else{const[Be,Re]=$n.aspect.split(":").map(Number);ee=Be/Re}const ie=o.limits.maxTextureDimension2D;let ve,ye;if(R==="canvas"&&$n.aspect==="canvas")ve=i.width,ye=i.height;else{const Be=R==="canvas"?Math.max(i.width,i.height):R;ee>=1?(ve=Be,ye=Math.round(Be/ee)):(ye=Be,ve=Math.round(Be*ee))}const Pe=Math.min(1,ie/Math.max(ve,ye));return ve=Math.max(2,Math.round(ve*Pe)&-2),ye=Math.max(2,Math.round(ye*Pe)&-2),[ve,ye]}function pn(R,ee){const ie=URL.createObjectURL(R),ve=document.createElement("a");ve.href=ie,ve.download=ee,document.body.appendChild(ve),ve.click(),ve.remove(),setTimeout(()=>URL.revokeObjectURL(ie),1e4)}async function ar(R,ee){var Be;const ie=(R.size/1048576).toFixed(1),ve=window;if(typeof ve.showSaveFilePicker=="function")try{const Re=await ve.showSaveFilePicker({suggestedName:ee,types:[{description:"PNG image",accept:{"image/png":[".png"]}}]}),Ue=await Re.createWritable();return await Ue.write(R),await Ue.close(),`saved ${Re.name??ee} (${ie} MB) where you chose`}catch(Re){if((Re==null?void 0:Re.name)==="AbortError")return"save cancelled — use ⬇ Download last"}const ye=new File([R],ee,{type:"image/png"}),Pe=navigator;if(Pe.share&&((Be=Pe.canShare)!=null&&Be.call(Pe,{files:[ye]})))try{return await Pe.share({files:[ye],title:ee}),`shared ${ee} (${ie} MB) via share sheet`}catch(Re){if((Re==null?void 0:Re.name)==="AbortError")return"share cancelled — use ⬇ Download last"}return pn(R,ee),`downloaded ${ee} (${ie} MB) to your browser's Downloads folder`}async function os(R){if(E)return;const[ee,ie]=ir(R);en.s=`rendering ${ee}×${ie}…`;const ve=i.width,ye=i.height;u.setRenderSize(ee,ie),Pn(ee,ie,o,c.render_settings_buffer);const Pe=o.createTexture({size:[ee,ie,1],format:F,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.COPY_SRC}),Be=Math.ceil(ee*4/256)*256,Re=o.createBuffer({size:Be*ie,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),Ue=o.createCommandEncoder({label:"screenshot"});c.frame(Ue,Pe.createView(),!1),Ue.copyTextureToBuffer({texture:Pe},{buffer:Re,bytesPerRow:Be,rowsPerImage:ie},[ee,ie,1]),o.queue.submit([Ue.finish()]),u.clearRenderSize(),Pn(ve,ye,o,c.render_settings_buffer);try{await Re.mapAsync(GPUMapMode.READ);const Oe=new Uint8Array(Re.getMappedRange()),ct=new Uint8ClampedArray(ee*ie*4);for(let gt=0;gt<ie;gt++)ct.set(Oe.subarray(gt*Be,gt*Be+ee*4),gt*ee*4);for(let gt=3;gt<ct.length;gt+=4)ct[gt]=255;Re.unmap();const De=document.createElement("canvas");De.width=ee,De.height=ie,De.getContext("2d").putImageData(new ImageData(ct,ee,ie),0,0);const Ke=await new Promise((gt,mn)=>De.toBlob(Yt=>Yt?gt(Yt):mn(new Error("toBlob failed")),"image/png")),vt=(new URLSearchParams(window.location.search).get("bundle")??"halloumi").split("/").pop().replace(/\.(bitymi|ply)$/i,""),Ye=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),It=`${vt}_${ee}x${ie}_${Ye}.png`;dn={blob:Ke,name:It},en.s=await ar(Ke,It)}catch(Oe){console.error("[screenshot]",Oe),en.s=`failed: ${Oe}`}finally{Re.destroy(),Pe.destroy()}}{const R=document.createElement("div");R.style.cssText="display:flex;gap:4px;padding:4px 6px;flex-wrap:wrap;";const ee=(ve,ye,Pe)=>{const Be=document.createElement("button");Be.className="tp-btnv_b",Be.textContent=ve,Be.title=ye,Be.style.cssText="flex:1 1 auto;min-width:44px;height:26px;padding:0 6px;",Be.addEventListener("click",Pe),R.appendChild(Be)};ee("Canvas","current canvas size",()=>{os("canvas")});for(const[ve,ye]of Bs)ee(ve,`${ye} px long edge`,()=>{os(ye)});(un.element.querySelector(".tp-fldv_c")??un.element).appendChild(R)}un.addButton({title:"⬇ Download last"}).on("click",()=>{if(!dn){en.s="nothing captured yet";return}pn(dn.blob,dn.name),en.s=`downloaded ${dn.name} to your browser's Downloads folder`}),oe.addButton({title:"🎯 Reset camera"}).on("click",()=>{if(A.length>0)u.set_preset(A[0]);else{const R=Q.bbox.max[0]-Q.bbox.min[0],ee=Q.bbox.max[1]-Q.bbox.min[1],ie=Q.bbox.max[2]-Q.bbox.min[2],ye=.5*Math.sqrt(R*R+ee*ee+ie*ie)*.5;Z.set(g[0]-ye,g[1]-ye,g[2]-ye,u.position);const Pe=Z.create(ye,ye,ye);Z.normalize(Pe,Pe);const Be=Z.create();Z.cross(Z.create(0,1,0),Pe,Be),Z.normalize(Be,Be);const Re=Z.create();Z.cross(Pe,Be,Re);const Ue=Mt.create(Be[0],Re[0],Pe[0],Be[1],Re[1],Pe[1],Be[2],Re[2],Pe[2]);wt.fromMat3(Ue,u.rotation),u.update_buffer()}f.resetToCamera(),x()});const kn={result:"— click Benchmark —"},ls=oe.addMonitor(kn,"result",{label:"Bench",interval:500,multiline:!0,lineCount:4});ls.hidden=!0;const As={bicycle:{w:1237,h:822,fovY:2*Math.atan(3286/(2*4627.3))},flowers:{w:1256,h:828,fovY:2*Math.atan(3312/(2*4285.5))},garden:{w:1297,h:840,fovY:2*Math.atan(3361/(2*3852.4))},stump:{w:1245,h:825,fovY:2*Math.atan(3300/(2*4528.1))},treehill:{w:1267,h:832,fovY:2*Math.atan(3326/(2*4205.6))},bonsai:{w:1559,h:1039,fovY:2*Math.atan(2078/(2*3222.7))},counter:{w:1558,h:1038,fovY:2*Math.atan(2076/(2*3192.7))},kitchen:{w:1558,h:1039,fovY:2*Math.atan(2078/(2*3240.8))},room:{w:1557,h:1038,fovY:2*Math.atan(2075/(2*3174))}};function or(){const ee=((new URLSearchParams(window.location.search).get("bundle")??"").split("/").pop()??"").toLowerCase();for(const ie of Object.keys(As))if(ee.startsWith(ie))return ie;return null}const hn=document.createElement("div");hn.id="bench-overlay",hn.style.cssText=["position:fixed","top:50%","left:50%","transform:translate(-50%,-50%)","background:rgba(0,0,0,0.9)","color:#fff","padding:24px 32px","border-radius:8px","font-family:monospace","font-size:14px","min-width:340px","text-align:left","box-shadow:0 4px 24px rgba(0,0,0,0.6)","display:none","z-index:9999","pointer-events:none"].join(";"),document.body.appendChild(hn);function cs(R,ee,ie){const ve=Math.floor(ee/Math.max(1,ie)*100),ye=32,Pe=Math.floor(ee/Math.max(1,ie)*ye),Be="█".repeat(Pe)+"░".repeat(ye-Pe);hn.innerHTML=`<div style="margin-bottom:10px;font-weight:bold">📊 ${R}</div><div>[${Be}] ${ve}%</div><div style="margin-top:6px;font-size:11px;opacity:0.7">${ee} / ${ie} frames · offscreen · pipelined · no vsync</div>`,hn.style.display="block"}function lr(){hn.style.display="none"}async function cr(R=10,ee=200){if(E)return;if(A.length===0){kn.result="no cameras to benchmark";return}E=!0;const ie=ue,ve=j.animate,ye=new Float32Array(u.position),Pe=new Float32Array(u.rotation);ue=!1,j.animate=!1,be.refresh(),te=null,f.enabled=!1;const Be=or(),Re=Be?As[Be]:null,Ue=(Re==null?void 0:Re.w)??i.width,Oe=(Re==null?void 0:Re.h)??i.height,ct=(Re==null?void 0:Re.fovY)??u.getFov(),De=Be?`${Be} · ${Ue>=4e3/4+500?"images_4":"images_2"}`:"custom",Ke=i.width,vt=i.height,Ye=u.getFov();i.width=Ue,i.height=Oe,u.setFov(ct),Pn(Ue,Oe,o,c.render_settings_buffer);const It=o.createTexture({size:[Ue,Oe,1],format:F,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING}),gt=It.createView(),mn=()=>{const Tt=o.createCommandEncoder();c.frame(Tt,gt,!1),o.queue.submit([Tt.finish()])},Yt=()=>new Promise(Tt=>setTimeout(Tt,0)),qn=20,Zt=async(Tt,Bn)=>{let Wn=0,nn=0;for(cs(Bn,0,Tt),await Yt();nn<Tt;){const Kn=Math.min(qn,Tt-nn),jn=performance.now();for(let fs=0;fs<Kn;fs++)u.set_preset(A[(nn+fs)%A.length]),mn();await o.queue.onSubmittedWorkDone();const hr=performance.now();Wn+=hr-jn,nn+=Kn,cs(Bn,nn,Tt),await Yt()}return Wn};try{await Zt(R,"Warming up");const Bn=await Zt(ee,"Benchmarking")/ee,Wn=1e3/Bn,nn=Q.num_points??Q.surfel_data.length/8,Kn=(ct*180/Math.PI).toFixed(1),jn=`${Wn.toFixed(1)} FPS  (${Bn.toFixed(2)} ms/frame)
${Ue}×${Oe} · fovY ${Kn}° · ${De}
${nn.toLocaleString()} surfels · ${R}w+${ee}b · pipelined`+(c.hasMips?` · ${c._mipMode?`mips bias ${c.mipLodBias}`:"mips off"}`:"");kn.result=jn,ls.hidden=!1,console.log("[bench]",jn.replace(/\n/g,"  |  "))}catch(Tt){console.error("[bench] failed:",Tt),kn.result=`bench failed: ${Tt}`,ls.hidden=!1}finally{lr(),It.destroy(),i.width=Ke,i.height=vt,u.setFov(Ye),Pn(Ke,vt,o,c.render_settings_buffer),u.position.set(ye),u.rotation.set(Pe),u.update_buffer(),f.enabled=!ie,ue=ie,j.animate=ve,be.refresh(),E=!1}}oe.addButton({title:"📊 Benchmark"}).on("click",()=>cr()),Xa(oe);const ur=Math.PI/2,xt=new Set,Tn=["KeyW","KeyA","KeyS","KeyD","KeyQ","KeyE","KeyZ","KeyX","ShiftLeft","ShiftRight"],Nt=R=>{const ee=R.target;return!!ee&&(ee.tagName==="INPUT"||ee.tagName==="TEXTAREA"||ee.isContentEditable)},fn=()=>xt.has("ShiftLeft")||xt.has("ShiftRight");document.addEventListener("keyup",R=>{xt.delete(R.code)}),window.addEventListener("blur",()=>xt.clear()),document.addEventListener("visibilitychange",()=>{document.hidden&&xt.clear()});const Cn=R=>{if(xt.size===0||j.animate)return;const ee=fn()?3:1;let ie=0;xt.has("KeyX")&&(ie+=1),xt.has("KeyZ")&&(ie-=1),ie!==0&&(f.addRoll(ie*ur*ee*R),te=null);const ve=u.rotation,ye=[ve[0],ve[4],ve[8]],Pe=[ve[1],ve[5],ve[9]],Be=[ve[2],ve[6],ve[10]],Re=f.center,Oe=(f.sceneRadius??Math.max(.05,Z.distance(u.position,Re)))*.5*ee*R;let ct=0,De=0,Ke=0;if(xt.has("KeyW")&&(Ke+=1),xt.has("KeyS")&&(Ke-=1),xt.has("KeyD")&&(ct+=1),xt.has("KeyA")&&(ct-=1),xt.has("KeyE")&&(De+=1),xt.has("KeyQ")&&(De-=1),!ct&&!De&&!Ke)return;const vt=[0,0,0];for(let Ye=0;Ye<3;Ye++)vt[Ye]=(ye[Ye]*ct+Pe[Ye]*De+Be[Ye]*Ke)*Oe;for(let Ye=0;Ye<3;Ye++)u.position[Ye]+=vt[Ye],Re[Ye]+=vt[Ye];u.update_buffer(),te=null};document.addEventListener("keydown",R=>{if(Nt(R))return;const ee=R.key,ie=ee.toLowerCase();if(R.ctrlKey||R.metaKey||R.altKey){xt.clear();return}if(Tn.includes(R.code)&&!(R.shiftKey&&R.code==="KeyD")){xt.add(R.code),R.preventDefault();return}if(ie==="t"){Sn();return}if(ie==="b"){Ht();return}if(ee>="0"&&ee<="9"&&A.length>0){const ve=parseInt(ee);ve<A.length&&Qe(ve)}else ee==="ArrowLeft"||ee==="PageUp"?(Qe(xe-1),R.preventDefault()):ee==="ArrowRight"||ee==="PageDown"?(Qe(xe+1),R.preventDefault()):R.shiftKey&&ie==="d"&&c.debugReadSortedIndices(30).catch(ve=>console.error("[DEBUG] readback failed:",ve))});function us(R,ee){const ie=i.getBoundingClientRect();return[(R-ie.left)*u.viewport[0]/ie.width,(ee-ie.top)*u.viewport[1]/ie.height]}i.addEventListener("dblclick",R=>{const[ee,ie]=us(R.clientX,R.clientY);_(ee,ie)});let _n=0,Nn=0,Rs=0;i.addEventListener("pointerdown",R=>{if(R.pointerType!=="touch")return;const ee=performance.now(),ie=ee-_n,ve=R.clientX-Nn,ye=R.clientY-Rs;if(ie>0&&ie<300&&ve*ve+ye*ye<40*40){const[Pe,Be]=us(R.clientX,R.clientY);_(Pe,Be),_n=0}else _n=ee,Nn=R.clientX,Rs=R.clientY});function tn(){return P}let ds=performance.now(),ps=60,hs=Promise.resolve(),Mn=0,dr=0;function qt(){pr().catch(R=>{dr++<5&&console.error("[frame] exception (render loop kept alive):",R),requestAnimationFrame(qt)})}async function pr(){var Be,Re;const R=performance.now(),ee=Math.min((R-ds)/1e3,.1);if(ds=R,ee>0){const Ue=((Be=c.lastStageBreakdownMs)==null?void 0:Be.total)??0,Oe=Ue>.5?1e3/Ue:1/ee;Le.idleMs(R)<250&&(ps=ps*.9+Oe*.1),me.stats=`${O} surfels · ${Le.idleMs(R)>500?"idle":`${Math.round(ps)} fps`}
${i.width}×${i.height} px`}if(E){requestAnimationFrame(qt);return}if(tn()&&(te||ue)&&(te=null,f.resetToCamera(),x(),ue&&(ue=!1,j.animate=!1,be.refresh())),ue&&j.animateMode==="circle"&&st){je+=ee/et,je>=1&&(je-=1);const Ue=oo(st,je);u.set_preset(Ue),f.update(ee);const Oe=o.createCommandEncoder();c.frame(Oe,s.getCurrentTexture().createView()),o.queue.submit([Oe.finish()]),Mn++,Mn===2&&Jt(),requestAnimationFrame(qt);return}if(te){te.t+=ee/te.duration;const Ue=Math.min(1,te.t),Oe=Ue*Ue*(3-2*Ue);Z.lerp(te.fromPos,te.toPos,Oe,u.position),ft.slerp(te.fromQuat,te.toQuat,Oe,Ce),Mt.fromQuat(Ce,ke),wt.fromMat3(ke,u.rotation),u.update_buffer(),te.t>=1&&(u.set_preset(te.target),te=null,ue?A.length>0&&(ne=se):(f.resetToCamera(),x()))}else if(ue&&!tn()){const Ue=j.animateMode==="circle"&&rt.length>0,Oe=Ue?rt:A;if(Oe.length!==0){if(ne-=ee,ne<=0){const De=((Ue?_e:xe)+1)%Oe.length;Ue?_e=De:xe=De;const Ke=Ue?W/8:W;ot(Oe[De],Ke),Ue||(Ve.view=`${xe+1} / ${A.length}: ${A[xe].img_name??xe}`)}}}Cn(ee),f.update(ee),B(),Y();let ie=j.upscale_factor;if(j.upscale!=="off"&&j.upscale_auto){const Ue=St.choose(u,i.width,i.height);ie=Ue.f,Wt.adapt=`${Ue.f===1?"native":`1/${Ue.f.toFixed(2)}`} · ${Ue.texelMode?"texel/px":"q"} ${Ue.q.toFixed(2)} · ${Ue.visible} sampled`}j.adapt_heat&&(ie=1);const ve=te!==null||ue||tn()||xt.size>0;if(!Le.needFrame(R,u,i.width,i.height,ve,`${j.upscale}|${ie}|${j.render_scale}|${j.atlas_enabled}|${((Re=u.getRenderSize())==null?void 0:Re.join())??""}`)){requestAnimationFrame(qt);return}await hs;const ye=o.createCommandEncoder(),Pe=s.getCurrentTexture().createView();if(j.upscale!=="off"&&ie>1){const Ue=ie;let Oe=j.upscale;if(Oe==="spline"&&!kt&&(Oe="bc5"),Oe==="bc5"||Oe==="p"||Oe==="spline"){const vt=at(Oe==="spline"?"bc5":Oe,Ue);vt?vt!==bt&&(c.setSlopeAtlas(vt.view,[vt.scaleU,vt.offU,vt.scaleV,vt.offV]),bt=vt):Oe="hermite"}c.slopeSource=no[Oe]??0;const ct=c.resolvesIntoTarget;(!q||q.mode!==Oe||q.exact!==ct)&&(q==null||q.destroy(),q=new sd(o,F,Oe,1/Ue,ct)),q.scale=1/Ue,Oe==="spline"&&q.setSplineKernel(kt);const De=q.lowTarget(i.width,i.height);c.viewport=ct?null:[De.w,De.h];const Ke=u.getRenderSize();(!Ke||Ke[0]!==De.w||Ke[1]!==De.h||H[2]!==i.width||H[3]!==i.height)&&(u.setRenderSize(De.w,De.h,i.width,i.height),H=[De.w,De.h,i.width,i.height]),Pn(De.w,De.h,o,c.render_settings_buffer),c.slopeTarget=q.slopeTarget,c.frame(ye,De.view),c.slopeTarget=null,c.viewport=null,q.pass(ye,Pe,i.width,i.height)}else(H[0]!==0||u.getRenderSize()!==null)&&(u.clearRenderSize(),H=[0,0,0,0],L()),c.frame(ye,Pe);o.queue.submit([ye.finish()]),hs=o.queue.onSubmittedWorkDone(),Mn++,Mn===2&&Jt(),requestAnimationFrame(qt)}requestAnimationFrame(qt)}}const wd=i=>`#version 300 es
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
}`;function uo(i){return{bc7:!!i.getExtension("EXT_texture_compression_bptc"),astc:!!i.getExtension("WEBGL_compressed_texture_astc")}}function xd(i,s){const o=uo(i),p=s.format===2||s.format===7,u=s.format===3||s.format===8;let f=0;p&&o.bc7?f=36492:u&&o.astc&&(f=37808);const P=ae=>(console.warn("[gl]",ae),{tex:null,status:ae,slice_width:s.slice_width,layer_h:s.layer_h,n_slices:0,rects:s.rects_expanded});if(!f)return P(`atlas is ${p?"BC7":u?"ASTC":`format ${s.format}`}; this GPU has bc7=${o.bc7} astc=${o.astc}`);let y=i.getParameter(i.MAX_TEXTURE_SIZE);try{const ae=parseInt(new URLSearchParams(window.location.search).get("maxtex")??"",10);ae>=256&&(y=Math.min(y,ae-ae%4))}catch{}const k=i.getParameter(i.MAX_ARRAY_TEXTURE_LAYERS),{width:B,n_layers:F,n_cols:z,layer_cuts:$,column_cuts:q,atlas_bytes:H}=s,L=B/4*16,V=s.rects_expanded,J=V.length/5,G=[];let Y=0,N=0,re=0,ue=!1;const de=Array.from({length:z*F},()=>[]);let ce=0,we=0;for(let ae=0;ae<J;ae++){const oe=V[ae*5+4]|0,Le=V[ae*5+2],Te=V[ae*5+3];oe>=0&&oe<de.length&&Le>0&&(de[oe].push(ae),ce=Math.max(ce,Le),we=Math.max(we,Te))}ce=Math.ceil(ce/4)*4,we=Math.ceil(we/4)*4;const Se=(ae,oe)=>{if(ae<=y)return[0,ae];const Le=y-oe;if(Le<64)throw new Error(`atlas re-shard: tiles up to ${oe} px do not fit MAX_TEXTURE_SIZE ${y}`);const Te=Math.ceil(ae/Le),Ie=[0];for(let ge=1;ge<Te;ge++)Ie.push(Math.round(ae*ge/Te/4)*4);return Ie.push(ae),Ie},Me=(ae,oe,Le,Te)=>Math.min(ae[oe+1]-ae[oe]+Le,Te-ae[oe]);try{for(let ae=0;ae<z;ae++)for(let oe=0;oe<F;oe++){const Le=q[ae+1]-q[ae],Te=$[oe+1]-$[oe],Ie=Se(Le,ce),ge=Se(Te,we);(Ie.length>2||ge.length>2)&&(ue=!0);for(let Ae=0;Ae<Ie.length-1;Ae++)N=Math.max(N,Me(Ie,Ae,ce,Le));for(let Ae=0;Ae<ge.length-1;Ae++)re=Math.max(re,Me(ge,Ae,we,Te));G.push({c:ae,l:oe,xcuts:Ie,ycuts:ge,base:Y}),Y+=(Ie.length-1)*(ge.length-1)}}catch(ae){return P(String(ae))}if(N=Math.ceil(N/4)*4,re=Math.ceil(re/4)*4,Y>k)return P(`atlas needs ${Y} array layers, GPU allows ${k}`);const Ee=N/4*16,le=Ee*(re/4);let j;try{j=new Uint8Array(le*Y)}catch(ae){return P(`atlas staging buffer ${(le*Y/2**20).toFixed(0)} MB failed: ${ae}`)}let be=V;ue&&(be=new Float32Array(V));for(const ae of G){const oe=ae.xcuts.length-1,Le=ae.ycuts.length-1,Te=q[ae.c+1]-q[ae.c],Ie=$[ae.l+1]-$[ae.l];for(let ge=0;ge<Le;ge++)for(let Ae=0;Ae<oe;Ae++){const Q=ae.base+ge*oe+Ae,A=q[ae.c]+ae.xcuts[Ae],I=Me(ae.xcuts,Ae,ce,Te),w=$[ae.l]+ae.ycuts[ge],l=Me(ae.ycuts,ge,we,Ie),g=Q*le,_=A/4,x=I/4;for(let C=0;C<l/4;C++){const D=(w/4+C)*L+_*16;j.set(H.subarray(D,D+x*16),g+C*Ee)}}if(ue)for(const ge of de[ae.c*F+ae.l]){const Ae=V[ge*5],Q=V[ge*5+1];let A=0;for(;A<oe-1&&Ae>=ae.xcuts[A+1];)A++;let I=0;for(;I<Le-1&&Q>=ae.ycuts[I+1];)I++;be[ge*5]=Ae-ae.xcuts[A],be[ge*5+1]=Q-ae.ycuts[I],be[ge*5+4]=ae.base+I*oe+A}}const me=i.createTexture();i.activeTexture(i.TEXTURE0),i.bindTexture(i.TEXTURE_2D_ARRAY,me),i.compressedTexImage3D(i.TEXTURE_2D_ARRAY,0,f,N,re,Y,0,j),i.texParameteri(i.TEXTURE_2D_ARRAY,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D_ARRAY,i.TEXTURE_MAG_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D_ARRAY,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D_ARRAY,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE);const pe=i.getError();if(pe!==i.NO_ERROR){i.deleteTexture(me);const ae=pe===i.OUT_OF_MEMORY?"OUT_OF_MEMORY":pe===i.INVALID_VALUE?"INVALID_VALUE":`0x${pe.toString(16)}`;return P(`atlas upload failed: GL ${ae} (${N}x${re}x${Y} ${f===36492?"BC7":"ASTC"}, ${(le*Y/2**20).toFixed(0)} MB, max tex ${y})`)}const he=`${f===36492?"BC7":"ASTC"} atlas ${N}x${re}x${Y}${ue?` (re-sharded for max tex ${y})`:""}`;return{tex:me,status:he,slice_width:N,layer_h:re,n_slices:Y,rects:be}}const za=28,ks=8,yd=i=>`#version 300 es
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
        float lg[${ks}];
        float lmax = -3.4e38;
        for (int k = 0; k < ${ks}; k++) {
            if (k >= u_K) break;
            vec4 st = texelFetch(u_sv, tc(base + k), 0);
            vec3 sd = st.xyz * inversesqrt(max(dot(st.xyz, st.xyz), 1e-20)) - vd;
            lg[k] = -exp(st.w) * length(sd);
            lmax = max(lmax, lg[k]);
        }
        float ws = 0.0;
        for (int k = 0; k < ${ks}; k++) {
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
}`,Pd=`#version 300 es
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
}`;class Ia{constructor(s,o,p,u={}){T(this,"gl");T(this,"n");T(this,"K");T(this,"twLog2");T(this,"pre");T(this,"draw");T(this,"preU",{});T(this,"drawU",{});T(this,"texSurf");T(this,"texSv");T(this,"texUv");T(this,"idBuf");T(this,"recBuf");T(this,"preVao");T(this,"drawVao");T(this,"tf");T(this,"atlasTex",null);T(this,"atlasStatus","no atlas");T(this,"atlasUpload",null);T(this,"atlasOn",!1);T(this,"sd");T(this,"ok");T(this,"keyF");T(this,"keyU");T(this,"ids");T(this,"ids2");T(this,"keys2");T(this,"hist");T(this,"cnt",new Uint32Array(256));T(this,"bgColor",[0,0,0]);T(this,"scaling",1);T(this,"lastStats",{visible:0,cpuMs:0});T(this,"only",-1);T(this,"dbg",0);if(this.gl=s,o.feature_mode!==0)throw new Error("WebGL2 backend supports SV colour only (feature_mode 0)");if(o.K>ks)throw new Error(`WebGL2 backend supports K <= ${ks} SV sites (bundle has ${o.K})`);this.n=o.num_points,this.K=o.K,this.sd=o.surfel_data;const f=this.n,P=s.getParameter(s.MAX_TEXTURE_SIZE);this.twLog2=P>=4096?12:11;const y=1<<this.twLog2,k=new Uint32Array(o.surfel_data.buffer,o.surfel_data.byteOffset,f*8);for(let L=0;L<f;L++)if(k[L*8+7]>>>17&1)throw new Error("WebGL2 backend does not support --tex3d bundles (3D kernels); use WebGPU");this.ok=new Uint8Array(f);for(let L=0;L<f;L++){const V=Sd(k[L*8+3]);this.ok[L]=V>1/255&&(k[L*8+7]>>>16&1)===1?1:0}this.keyF=new Float32Array(f),this.keyU=new Uint32Array(this.keyF.buffer),this.ids=new Uint32Array(f),this.ids2=new Uint32Array(f),this.keys2=new Uint32Array(f),this.hist=new Uint32Array(256*4);const B=L=>Math.max(1,Math.ceil(f*L/y)),F=(L,V,J,G,Y)=>{const N=s.createTexture();return s.bindTexture(s.TEXTURE_2D,N),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MAG_FILTER,s.NEAREST),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),s.texImage2D(s.TEXTURE_2D,0,L,y,B(G),0,V,J,Y),N};{const L=B(2),V=new Uint32Array(y*L*4);V.set(k),this.texSurf=F(s.RGBA32UI,s.RGBA_INTEGER,s.UNSIGNED_INT,2,V)}{const L=this.K,V=B(2*L),J=new Float32Array(y*V*4),G=o.sv_params,Y=L*7;for(let N=0;N<f;N++){const re=N*Y,ue=N*2*L*4;for(let de=0;de<L;de++){J[ue+de*4]=G[re+de*3],J[ue+de*4+1]=G[re+de*3+1],J[ue+de*4+2]=G[re+de*3+2],J[ue+de*4+3]=G[re+L*6+de];const ce=ue+(L+de)*4;J[ce]=G[re+L*3+de*3],J[ce+1]=G[re+L*3+de*3+1],J[ce+2]=G[re+L*3+de*3+2]}}this.texSv=F(s.RGBA32F,s.RGBA,s.FLOAT,2*L,J)}const z=p?xd(s,p):null;z&&(this.atlasStatus=z.status),this.atlasUpload=z;{const L=B(2),V=new Float32Array(y*L*4);if(p&&z&&z.tex){const J=z.slice_width,G=z.layer_h,Y=p.uv_extent,N=z.rects;for(let re=0;re<f;re++){if(!this.ok[re])continue;const ue=N[re*5],de=N[re*5+1],ce=N[re*5+2],we=N[re*5+3],Se=re*8;V[Se]=(ue+.5*Math.max(ce,1))/J,V[Se+1]=(de+.5*Math.max(we,1))/G,V[Se+2]=ce/(2*Y)/J,V[Se+3]=we/(2*Y)/G,V[Se+4]=N[re*5+4]}}this.texUv=F(s.RGBA32F,s.RGBA,s.FLOAT,2,V)}const $=(L,V)=>{const J=s.createShader(L);if(s.shaderSource(J,V),s.compileShader(J),!s.getShaderParameter(J,s.COMPILE_STATUS))throw new Error("GLSL: "+s.getShaderInfoLog(J));return J},q=L=>{if(s.linkProgram(L),!s.getProgramParameter(L,s.LINK_STATUS))throw new Error("GLSL link: "+s.getProgramInfoLog(L))};this.pre=s.createProgram(),s.attachShader(this.pre,$(s.VERTEX_SHADER,yd(this.twLog2))),s.attachShader(this.pre,$(s.FRAGMENT_SHADER,`#version 300 es
precision mediump float;
out vec4 o;
void main(){ o = vec4(0.0); }`)),s.transformFeedbackVaryings(this.pre,["v_tu_op","v_tv_sh","v_tw_ly","v_col_dc","v_ctr_ext","v_uv","v_dp"],s.INTERLEAVED_ATTRIBS),q(this.pre);for(const L of["u_surf","u_sv","u_uv","u_R","u_t","u_eye","u_vp","u_focal","u_zfar","u_scaling","u_sh_bias","u_K"])this.preU[L]=s.getUniformLocation(this.pre,L);const H=!(p&&p.kernel_type===0)&&o.kernel_type!==0;this.draw=s.createProgram(),s.attachShader(this.draw,$(s.VERTEX_SHADER,Pd)),s.attachShader(this.draw,$(s.FRAGMENT_SHADER,wd(H))),q(this.draw);for(const L of["u_vp","u_atlas","u_atlas_on","u_tex","u_dims","u_dbg"])this.drawU[L]=s.getUniformLocation(this.draw,L);try{const L=new URLSearchParams(window.location.search);this.only=parseInt(L.get("only")??"-1",10),this.dbg=parseInt(L.get("dbg")??"0",10)|0}catch{}this.idBuf=s.createBuffer(),s.bindBuffer(s.ARRAY_BUFFER,this.idBuf),s.bufferData(s.ARRAY_BUFFER,f*4,s.DYNAMIC_DRAW),this.recBuf=s.createBuffer(),s.bindBuffer(s.ARRAY_BUFFER,this.recBuf),s.bufferData(s.ARRAY_BUFFER,f*za*4,s.STREAM_COPY),s.bindBuffer(s.ARRAY_BUFFER,null),this.preVao=s.createVertexArray(),s.bindVertexArray(this.preVao),s.bindBuffer(s.ARRAY_BUFFER,this.idBuf),s.enableVertexAttribArray(0),s.vertexAttribIPointer(0,1,s.UNSIGNED_INT,0,0),s.bindVertexArray(null),this.drawVao=s.createVertexArray(),s.bindVertexArray(this.drawVao),s.bindBuffer(s.ARRAY_BUFFER,this.recBuf);for(let L=0;L<7;L++)s.enableVertexAttribArray(L),s.vertexAttribPointer(L,4,s.FLOAT,!1,za*4,L*16),s.vertexAttribDivisor(L,1);s.bindVertexArray(null),s.bindBuffer(s.ARRAY_BUFFER,null),this.tf=s.createTransformFeedback(),s.useProgram(this.pre),s.uniform1i(this.preU.u_surf,1),s.uniform1i(this.preU.u_sv,2),s.uniform1i(this.preU.u_uv,3),s.uniform1i(this.preU.u_K,this.K),s.uniform1f(this.preU.u_sh_bias,u.shBias??o.sh_bias),s.uniform1f(this.preU.u_scaling,this.scaling),s.useProgram(this.draw),s.uniform1i(this.drawU.u_atlas,0),s.uniform1i(this.drawU.u_atlas_on,0),s.uniform4f(this.drawU.u_tex,0,0,p?p.res_bias:0,p?p.uv_extent:4),p&&z&&z.tex&&(this.atlasTex=z.tex,this.atlasOn=!0,s.uniform1i(this.drawU.u_atlas_on,1),s.uniform4f(this.drawU.u_tex,p.atlas_scale,p.atlas_offset,p.res_bias,p.uv_extent),s.uniform2f(this.drawU.u_dims,z.slice_width,z.layer_h)),s.useProgram(null)}get hasAtlas(){return this.atlasTex!==null}get atlasEnabled(){return this.atlasOn}setAtlasEnabled(s){this.atlasTex&&(this.atlasOn=s,this.gl.useProgram(this.draw),this.gl.uniform1i(this.drawU.u_atlas_on,s?1:0))}setGaussianScaling(s){this.scaling=s,this.gl.useProgram(this.pre),this.gl.uniform1f(this.preU.u_scaling,s)}setShBias(s){this.gl.useProgram(this.pre),this.gl.uniform1f(this.preU.u_sh_bias,s)}render(s){const o=this.gl,p=this.n,u=s.rotation,f=s.eye,P=this.sd,y=this.ok,k=s.width,B=s.height,F=performance.now(),z=.5*B/Math.tan(s.fovY*.5),$=-(u[0]*f[0]+u[4]*f[1]+u[8]*f[2]),q=-(u[1]*f[0]+u[5]*f[1]+u[9]*f[2]),H=-(u[2]*f[0]+u[6]*f[1]+u[10]*f[2]),L=.01,V=s.zfar??100,J=V/(V-L),G=-(V*L)/(V-L),Y=2*z/k,N=2*z/B,re=u[0],ue=u[4],de=u[8],ce=u[1],we=u[5],Se=u[9],Me=u[2],Ee=u[6],le=u[10],j=this.keyF,be=this.ids;let me=0;for(let ae=0;ae<p;ae++){if(y[ae]===0||this.only>=0&&ae!==this.only)continue;const oe=ae*8,Le=P[oe],Te=P[oe+1],Ie=P[oe+2],ge=Me*Le+Ee*Te+le*Ie+H;if(!(ge>0))continue;const Ae=J*ge+G,Q=Ae/ge;if(!(Q>0&&Q<1))continue;const A=1.2*ge,I=re*Le+ue*Te+de*Ie+$;if(Math.abs(Y*I)>A)continue;const w=ce*Le+we*Te+Se*Ie+q;Math.abs(N*w)>A||(j[me]=V-Ae,be[me]=ae,me++)}const pe=this.radixSort(me),he=performance.now()-F;return this.lastStats={visible:me,cpuMs:he},me===0?(o.viewport(0,0,k,B),o.clearColor(this.bgColor[0],this.bgColor[1],this.bgColor[2],1),o.clear(o.COLOR_BUFFER_BIT),0):(o.bindBuffer(o.ARRAY_BUFFER,this.idBuf),o.bufferSubData(o.ARRAY_BUFFER,0,pe,0,me),o.bindBuffer(o.ARRAY_BUFFER,null),o.useProgram(this.pre),o.activeTexture(o.TEXTURE1),o.bindTexture(o.TEXTURE_2D,this.texSurf),o.activeTexture(o.TEXTURE2),o.bindTexture(o.TEXTURE_2D,this.texSv),o.activeTexture(o.TEXTURE3),o.bindTexture(o.TEXTURE_2D,this.texUv),o.uniformMatrix3fv(this.preU.u_R,!1,[re,ce,Me,ue,we,Ee,de,Se,le]),o.uniform3f(this.preU.u_t,$,q,H),o.uniform3f(this.preU.u_eye,f[0],f[1],f[2]),o.uniform2f(this.preU.u_vp,k,B),o.uniform1f(this.preU.u_focal,z),o.uniform1f(this.preU.u_zfar,V),o.bindVertexArray(this.preVao),o.bindTransformFeedback(o.TRANSFORM_FEEDBACK,this.tf),o.bindBufferBase(o.TRANSFORM_FEEDBACK_BUFFER,0,this.recBuf),o.enable(o.RASTERIZER_DISCARD),o.beginTransformFeedback(o.POINTS),o.drawArrays(o.POINTS,0,me),o.endTransformFeedback(),o.disable(o.RASTERIZER_DISCARD),o.bindBufferBase(o.TRANSFORM_FEEDBACK_BUFFER,0,null),o.bindTransformFeedback(o.TRANSFORM_FEEDBACK,null),o.bindVertexArray(null),o.viewport(0,0,k,B),o.clearColor(this.bgColor[0],this.bgColor[1],this.bgColor[2],1),o.clear(o.COLOR_BUFFER_BIT),o.enable(o.BLEND),o.blendFunc(o.ONE,o.ONE_MINUS_SRC_ALPHA),o.disable(o.DEPTH_TEST),o.useProgram(this.draw),o.uniform2f(this.drawU.u_vp,k,B),o.uniform1i(this.drawU.u_dbg,this.dbg),this.atlasTex&&(o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D_ARRAY,this.atlasTex)),o.bindVertexArray(this.drawVao),o.drawArraysInstanced(o.TRIANGLE_STRIP,0,4,me),o.bindVertexArray(null),me)}radixSort(s){const o=this.keyU,p=this.hist;p.fill(0);for(let B=0;B<s;B++){const F=o[B];p[F&255]++,p[256+(F>>>8&255)]++,p[512+(F>>>16&255)]++,p[768+(F>>>24)]++}let u=o,f=this.ids,P=this.keys2,y=this.ids2;const k=this.cnt;for(let B=0;B<4;B++){const F=B*8,z=B*256;let $=!1;for(let V=0;V<256;V++)if(p[z+V]===s){$=!0;break}if($)continue;let q=0;for(let V=0;V<256;V++)k[V]=q,q+=p[z+V];for(let V=0;V<s;V++){const J=u[V],G=J>>>F&255,Y=k[G]++;P[Y]=J,y[Y]=f[V]}const H=u;u=P,P=H;const L=f;f=y,y=L}return f}}function Sd(i){const s=i&65535,o=s&32768?-1:1,p=s>>10&31,u=s&1023;return p===0?o*u*5960464477539063e-23:p===31?u?NaN:o*(1/0):o*(1+u/1024)*Math.pow(2,p-15)}const Nr=i=>i.format===2||i.format===7,qr=i=>i.format===3||i.format===8;async function Ga(i,s,o){const p=new URLSearchParams(window.location.search),u=new Js(i,null),f=new so(u),P=uo(s);mt(`[gl] WebGL2 backend · bc7=${P.bc7} astc=${P.astc} · ${s.getParameter(s.RENDERER)}`);let y=null,k=null,B=[],F=null;const z={animate:p.get("animation")==="1",atlas_enabled:!0,render_scale:1,gaussian_scaling:1,bg:{r:0,g:0,b:0}},$=new Qa.Pane({title:"Config (WebGL2)",expanded:!0}),q={stats:"— loading —"};$.addMonitor(q,"stats",{label:"Stats",interval:200,multiline:!0,lineCount:2}),$.addInput(z,"atlas_enabled",{label:"Texture"}).on("change",a=>y==null?void 0:y.setAtlasEnabled(a.value));const H=$.addFolder({title:"⚙ Advanced options",expanded:!1}),L=new Oa;$.on("change",()=>L.request()),window.__halloumiRedraw=()=>L.request();const V={s:o.gpuAvailable?"WebGL2 (WebGPU available)":"WebGL2 (no WebGPU here)"};H.addMonitor(V,"s",{label:"Renderer"}),H.addButton({title:"🔁 Switch to WebGPU",disabled:!o.gpuAvailable}).on("click",()=>Qr("webgpu"));let G=z.animate;f.enabled=!G,H.addInput(z,"animate",{label:"Animate"}).on("change",a=>{G=a.value,f.enabled=!G,G||(f.resetToCamera(),he())}),H.addInput(z,"render_scale",{label:"Render scale",min:.25,max:Math.max(1,window.devicePixelRatio||1),step:.05}).on("change",()=>ue()),H.addInput(z,"gaussian_scaling",{label:"Surfel scale",min:.1,max:2,step:.05}).on("change",a=>y==null?void 0:y.setGaussianScaling(a.value)),H.addInput(z,"bg",{label:"Background",color:{type:"float"}}).on("change",a=>{y&&(y.bgColor=[a.value.r,a.value.g,a.value.b])});const Y={s:"—"};H.addMonitor(Y,"s",{label:"Atlas"}),H.addButton({title:"🎯 Reset camera"}).on("click",()=>ae(0,!1)),Xa(H);const N=document.createElement("button");N.textContent="Texture: on",Object.assign(N.style,{position:"fixed",top:"8px",right:"270px",zIndex:"1000",padding:"4px 8px",font:"12px system-ui, sans-serif",borderRadius:"4px",border:"1px solid #666",background:"rgba(20,20,30,0.8)",color:"#eee",cursor:"pointer"}),document.body.appendChild(N);const re=()=>{z.atlas_enabled=!z.atlas_enabled,y==null||y.setAtlasEnabled(z.atlas_enabled),N.textContent=`Texture: ${z.atlas_enabled?"on":"off"}`,$.refresh()};N.addEventListener("click",re);const ue=()=>{const a=Math.max(.25,z.render_scale),v=Math.max(1,Math.ceil(a*i.clientWidth)),d=Math.max(1,Math.ceil(a*i.clientHeight));(i.width!==v||i.height!==d)&&(i.width=v,i.height=d),u.on_update_canvas()};new ResizeObserver(()=>ue()).observe(i),ue();const de=.4,ce=3,we=.3;let Se=-1,Me=null,Ee=0;const le=ft.create(),j=Mt.create(),be=a=>ft.fromMat(Mt.create(a[0],a[1],a[2],a[4],a[5],a[6],a[8],a[9],a[10])),me=(a,v)=>{Me={fromPos:Z.clone(u.position),toPos:Z.clone(a.position),fromQuat:ft.normalize(be(u.rotation)),toQuat:ft.normalize(be(a.rotation)),target:a,t:0,duration:Math.max(.01,v)}},pe=document.createElement("span"),he=()=>{if(!k)return;const a=co(u,k.surfel_data);a!==null&&f.setOrbitDepth(a)},ae=(a,v=!0)=>{if(B.length===0)return;Se=(a%B.length+B.length)%B.length;const d=B[Se];v?me(d,de):(u.set_preset(d),f.resetToCamera(),he()),pe.textContent=`${Se+1} / ${B.length}: ${B[Se].img_name??Se}`};let oe=null;const Le=()=>{if(oe||B.length===0)return;H.addSeparator(),oe=document.createElement("div"),oe.style.cssText="display:flex;gap:4px;align-items:center;padding:3px 6px;";const a=(v,d)=>{const m=document.createElement("button");return m.className="tp-btnv_b",m.textContent=v,m.style.cssText="flex:0 0 34px;height:24px;padding:0;",m.addEventListener("click",d),m};pe.style.cssText="flex:1 1 auto;font-size:11px;text-align:center;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;opacity:.85;",oe.appendChild(a("◀",()=>ae(Se-1))),oe.appendChild(pe),oe.appendChild(a("▶",()=>ae(Se+1))),H.element.appendChild(oe)};window.addEventListener("keydown",a=>{var v;((v=a.target)==null?void 0:v.tagName)!=="INPUT"&&(a.key==="ArrowLeft"||a.key==="PageUp"?ae(Se-1):a.key==="ArrowRight"||a.key==="PageDown"?ae(Se+1):a.key==="t"||a.key==="T"?re():a.key==="b"||a.key==="B"?I():a.key>="1"&&a.key<="9"&&ae(parseInt(a.key,10)-1))});let Te=0;const Ie=(a,v)=>{if(!k)return;const d=i.getBoundingClientRect(),m=ti((a-d.left)*i.width/d.width,(v-d.top)*i.height/d.height,i,u,k.surfel_data);m&&f.setOrbitPivot(m)};i.addEventListener("dblclick",a=>Ie(a.clientX,a.clientY)),i.addEventListener("pointerup",a=>{if(a.pointerType!=="touch")return;const v=performance.now();v-Te<300&&Ie(a.clientX,a.clientY),Te=v});const ge=p.get("bundle")??p.get("model_url");async function Ae(a,v){rs(`parsing ${v} ...`);try{const d=new TextDecoder().decode(new Uint8Array(a,0,8));let m=a,c=null,b=null;d===Ys&&({pcBuffer:m,camerasBuffer:c,atlasBuffer:b}=ri(a)),Ct("parsing surfels ..."),k=await _a(new File([m],v));let E=null;if(b&&p.get("notex")!=="1"){E=On(b);const O=Nr(E)&&P.bc7||qr(E)&&P.astc;let X=p.get("atlas2");if(!O&&!X&&ge){const W=ge.match(/^(.*?)(_astc)?\.bitymi(\?.*)?$/);W&&(X=W[2]?`${W[1]}.bitymi${W[3]??""}`:`${W[1]}_astc.bitymi${W[3]??""}`)}if(!O&&X){Ct("atlas format unsupported here — fetching the twin bundle ...");try{const{bundle:W}=await ss(X,(se,te)=>Ct(`downloading twin atlas ...
${(se/1048576).toFixed(1)}${te?` / ${(te/1048576).toFixed(1)}`:""} MB`));if(W!=null&&W.atlasBuffer){const se=On(W.atlasBuffer);(Nr(se)&&P.bc7||qr(se)&&P.astc)&&(E=se)}}catch(W){console.warn("[gl] atlas2 failed:",W)}}}Ct("building GPU resources ..."),F=E,y=new Ia(s,k,E),y.bgColor=[z.bg.r,z.bg.g,z.bg.b],y.setGaussianScaling(z.gaussian_scaling),y.setAtlasEnabled(z.atlas_enabled),Y.s=y.atlasStatus,mt(`[gl] max tex ${s.getParameter(s.MAX_TEXTURE_SIZE)} · layers ${s.getParameter(s.MAX_ARRAY_TEXTURE_LAYERS)} · ${y.atlasStatus}`),mt(`[gl] ${k.num_points} surfels · ${y.atlasStatus}`),B=[];const S=p.get("camera_url");if(c){const O=URL.createObjectURL(new Blob([c],{type:"application/json"}));try{B=await Jr(O)}finally{URL.revokeObjectURL(O)}}else if(S)try{B=await Jr(S)}catch(O){console.warn("[gl] camera_url failed:",O)}if(f.setBbox(k.bbox.min,k.bbox.max),B.length>0)Le(),ae(0,!1);else{const O=k.centroid,X=.5*Math.hypot(k.bbox.max[0]-k.bbox.min[0],k.bbox.max[1]-k.bbox.min[1],k.bbox.max[2]-k.bbox.min[2]),W=Z.create(O[0]-X,O[1]-X,O[2]-X),se=wt.lookAt(W,Z.create(O[0],O[1],O[2]),Z.create(0,1,0));wt.copy(se,u.rotation),u.rotation[12]=0,u.rotation[13]=0,u.rotation[14]=0,Z.copy(W,u.position),u.update_buffer(),f.resetToCamera()}}catch(d){throw Jt(),d}}const Q=document.getElementById("load-button");if(Q==null||Q.addEventListener("click",()=>{const a=document.createElement("input");a.type="file",a.accept=".ply,.bitymi",a.onchange=async()=>{var d;const v=(d=a.files)==null?void 0:d[0];v&&await Ae(await v.arrayBuffer(),v.name)},a.click()}),ge)try{rs("downloading ...");const{bundle:a,rawPly:v}=await ss(ge,(d,m,c,b)=>Ct(b==="cache"?`loading cached bundle ...
${(d/2**20).toFixed(1)}${m?` / ${(m/2**20).toFixed(1)}`:""} MB on this device`:`downloading ...
${(d/2**20).toFixed(1)}${m?` / ${(m/2**20).toFixed(1)}`:""} MB · ${(c/2**20).toFixed(1)} MB/s`));a?await A(a.pcBuffer,a.camerasBuffer,a.atlasBuffer,ge.split("/").pop()??"bundle"):v&&await Ae(v,ge.split("/").pop()??"scene.ply")}catch(a){Jt(),console.error("[gl] bundle load failed:",a),q.stats=`load failed: ${(a==null?void 0:a.message)??a}`;const v=document.createElement("div");v.textContent=`Could not load this bundle in the WebGL2 renderer: ${(a==null?void 0:a.message)??a}`,Object.assign(v.style,{position:"fixed",left:"50%",top:"40%",transform:"translate(-50%,-50%)",maxWidth:"80vw",color:"#eee",background:"rgba(20,20,20,0.92)",border:"1px solid #f0b060",borderRadius:"8px",font:"15px system-ui, sans-serif",padding:"16px 20px",textAlign:"center",zIndex:"10000"}),document.body.appendChild(v)}else q.stats="no ?bundle= — use 📂 Load";async function A(a,v,d,m){const c=new TextEncoder().encode(Ys),b=[a],E=[0];v&&(b.push(v),E.push(2)),d&&(b.push(d),E.push(3));const S=4+b.length*20,O=8+S,X=O+b.reduce((ne,_e)=>ne+_e.byteLength,0),W=new Uint8Array(X),se=new DataView(W.buffer);W.set(c,0),se.setUint32(8,b.length,!0);let te=O;b.forEach((ne,_e)=>{se.setUint32(12+_e*20,E[_e],!0),se.setBigUint64(16+_e*20,BigInt(te),!0),se.setBigUint64(24+_e*20,BigInt(ne.byteLength),!0),W.set(new Uint8Array(ne),te),te+=ne.byteLength}),await Ae(W.buffer,m)}let I=()=>{};const w=p.get("bundle_b");if(w&&y&&k){const a=p.get("label_a")??"A",v=p.get("label_b")??"B",d={a:{pc:k,renderer:y,atlas:F},b:null};let m="a",c=!1,b="";const E=document.createElement("button");Object.assign(E.style,{position:"fixed",top:"40px",right:"270px",zIndex:"1000",padding:"4px 8px",font:"12px system-ui, sans-serif",borderRadius:"4px",border:"1px solid #f0b060",background:"rgba(20,20,30,0.8)",color:"#f0b060",cursor:"pointer"});const S=(W="")=>{E.textContent=W||`Scene: ${m==="a"?a:v}  ⇄`;try{const se=new URL(window.location.href);m==="b"?se.searchParams.set("side","b"):se.searchParams.delete("side"),history.replaceState(history.state,"",se.toString())}catch{}},O=W=>{const se=document.createElement("div");Object.assign(se.style,{position:"fixed",left:"50%",top:"30%",transform:"translate(-50%,-50%)",maxWidth:"80vw",color:"#eee",background:"rgba(20,20,20,0.94)",border:"1px solid #60b0f0",borderRadius:"8px",font:"15px system-ui, sans-serif",padding:"16px 20px",textAlign:"center",zIndex:"10000"});const te=document.createElement("div");te.textContent=W,se.appendChild(te);const ne=document.createElement("div");ne.style.marginTop="12px";const _e=(Ce,ke)=>{const xe=document.createElement("button");xe.textContent=Ce,Object.assign(xe.style,{margin:"0 6px",padding:"6px 14px",font:"600 13px system-ui, sans-serif",borderRadius:"6px",border:"1px solid #666",background:"#222",color:"#eee",cursor:"pointer"}),xe.onclick=ke,ne.appendChild(xe)};o.gpuAvailable&&_e("Switch to WebGPU",()=>Qr("webgpu")),_e("OK",()=>se.remove()),se.appendChild(ne),document.body.appendChild(se)},X=W=>{const se=W==="a"?d.a:d.b;y=se.renderer,k=se.pc,F=se.atlas,y.bgColor=[z.bg.r,z.bg.g,z.bg.b],y.setGaussianScaling(z.gaussian_scaling),y.setAtlasEnabled(z.atlas_enabled),Y.s=y.atlasStatus,m=W,S(),console.log(`[gl A/B] active = ${W}: ${k.num_points} surfels`)};I=async()=>{if(!c){if(m==="b"){X("a");return}if(d.b){X("b");return}if(b){O(b);return}c=!0,S(`loading ${v} ...`);try{const{bundle:W}=await ss(w,(_e,Ce)=>S(`loading ${v} ... ${(_e/1048576).toFixed(0)}${Ce?`/${(Ce/1048576).toFixed(0)}`:""} MB`));if(!W)throw new Error("bundle_b must be a .bitymi bundle");const se=await _a(new File([W.pcBuffer],"bundle_b.ply"));let te=null;if(W.atlasBuffer&&p.get("notex")!=="1"){const _e=On(W.atlasBuffer);(Nr(_e)&&P.bc7||qr(_e)&&P.astc)&&(te=_e)}let ne;try{ne=new Ia(s,se,te)}catch(_e){throw b=/tex3d/.test(String(_e==null?void 0:_e.message))?`“${v}” is a 3D-kernel bake (--tex3d), which only the WebGPU renderer can draw. Still showing “${a}”.`:`“${v}” cannot be shown in the WebGL2 renderer: ${(_e==null?void 0:_e.message)??_e}. Still showing “${a}”.`,new Error(b)}d.b={pc:se,renderer:ne,atlas:te},X("b")}catch(W){console.error("[gl A/B] B failed:",W),b||(b=`Could not load “${v}”: ${(W==null?void 0:W.message)??W}`),S(),O(b)}finally{c=!1}}},E.addEventListener("click",()=>I()),document.body.appendChild(E),S(),p.get("side")==="b"&&I()}let l=performance.now(),g=0,_=0;const x=()=>{var a;return((a=f.isDragging)==null?void 0:a.call(f))??!1};let C=0;function D(){try{M()}catch(a){C++<5&&console.error("[gl frame] exception (render loop kept alive):",a)}requestAnimationFrame(D)}function M(){const a=performance.now(),v=Math.min((a-l)/1e3,.1);if(l=a,y&&k){if(Me){Me.t+=v/Me.duration;const b=Math.min(1,Me.t),E=b*b*(3-2*b);Z.lerp(Me.fromPos,Me.toPos,E,u.position),ft.slerp(Me.fromQuat,Me.toQuat,E,le),Mt.fromQuat(le,j),wt.fromMat3(j,u.rotation),u.update_buffer(),Me.t>=1&&(u.set_preset(Me.target),Me=null,G?Ee=we:(f.resetToCamera(),he()))}else G&&B.length>0&&(Ee-=v,Ee<=0&&(Se=(Se+1)%B.length,me(B[Se],ce),pe.textContent=`${Se+1} / ${B.length}: ${B[Se].img_name??Se}`));x()&&Me&&(Me=null),f.update(v);const d=performance.now();if(!L.needFrame(d,u,i.width,i.height,Me!==null||G||x(),`${z.atlas_enabled}`)){L.idleMs(d)>500&&(q.stats=q.stats.replace(/· \d+ fps/,"· idle"));return}const m=y.render({rotation:u.rotation,eye:u.position,fovY:u.getFovY(),width:i.width,height:i.height,zfar:u.zfar}),c=1/Math.max(v,.001);g=g===0?c:g*.9+c*.1,q.stats=`${m.toLocaleString()} / ${k.num_points.toLocaleString()} surfels · ${Math.round(g)} fps
${i.width}×${i.height} px`,_++,_===2&&Jt()}}requestAnimationFrame(D),window.__halloumiGL={stats:q,get renderer(){return y},get cameras(){return B},setPreset:ae,get atlas(){return F},pick(a,v){return k?ti(a,v,i,u,k.surfel_data):null},pickIds(a,v){if(!k)return[];const[d,m,c]=Qs(a,v,u),b=u.position[0],E=u.position[1],S=u.position[2],O=k.surfel_data,X=new Uint32Array(O.buffer,O.byteOffset,O.length),W=te=>{const ne=te>>10&31,_e=te&1023,Ce=te&32768?-1:1;return ne===0?Ce*_e*596e-10:Ce*(1+_e/1024)*Math.pow(2,ne-15)},se=[];for(let te=0;te<k.num_points;te++){const ne=te*8,_e=O[ne],Ce=O[ne+1],ke=O[ne+2],xe=W(X[ne+4]&65535),Ve=W(X[ne+4]>>>16),Fe=W(X[ne+5]&65535),Je=W(X[ne+5]>>>16),ot=W(X[ne+6]&65535),Qe=W(X[ne+6]>>>16),st=1/Math.hypot(Fe,Je,ot,Qe),rt=Fe*st,je=Je*st,et=ot*st,Ze=Qe*st,dt=[1-2*(et*et+Ze*Ze),2*(je*et+rt*Ze),2*(je*Ze-rt*et)],qe=[2*(je*et-rt*Ze),1-2*(je*je+Ze*Ze),2*(et*Ze+rt*je)],$e=[2*(je*Ze+rt*et),2*(et*Ze-rt*je),1-2*(je*je+et*et)],He=d*$e[0]+m*$e[1]+c*$e[2];if(Math.abs(He)<1e-9)continue;const tt=((_e-b)*$e[0]+(Ce-E)*$e[1]+(ke-S)*$e[2])/He;if(tt<=0)continue;const at=b+tt*d-_e,bt=E+tt*m-Ce,lt=S+tt*c-ke,kt=(at*dt[0]+bt*dt[1]+lt*dt[2])/xe,Pt=(at*qe[0]+bt*qe[1]+lt*qe[2])/Ve,Dt=kt*kt+Pt*Pt,ut=u.rotation,pt=u.position,Ot=ut[0]*(_e-pt[0])+ut[4]*(Ce-pt[1])+ut[8]*(ke-pt[2]),St=ut[1]*(_e-pt[0])+ut[5]*(Ce-pt[1])+ut[9]*(ke-pt[2]),Wt=ut[2]*(_e-pt[0])+ut[6]*(Ce-pt[1])+ut[10]*(ke-pt[2]),Lt=i.width,Kt=i.height,jt=.5*Kt/Math.tan(u.getFovY()*.5),it=jt*Ot/Wt+(Lt-1)*.5,Vt=jt*St/Wt+(Kt-1)*.5,Bt=2*((it-a)*(it-a)+(Vt-v)*(Vt-v)),$t=W(X[ne+3]&65535),Sn=W(X[ne+3]>>>16),zt=Dt>=9?0:Math.pow(Math.max(0,1-Dt/9),Sn>1e-6?Sn:1),Qt=Math.min(.99,$t*Math.max(zt,Math.exp(-.5*Bt)));if(Qt<1/255)continue;const Ht=F?Array.from(F.rects_expanded.subarray(te*5,te*5+5)):null,is=y&&y.atlasUpload?Array.from(y.atlasUpload.rects.subarray(te*5,te*5+5)):null;se.push({id:te,t:+tt.toFixed(3),u:+kt.toFixed(2),v:+Pt.toFixed(2),rho2d:+Bt.toFixed(2),alpha:+Qt.toFixed(3),opa:+$t.toFixed(2),tex:X[ne+7]>>>16&1,rect:Ht,remap:is})}return se.sort((te,ne)=>te.t-ne.t)}}}(function(){let s="dev";for(const p of Array.from(document.querySelectorAll('script[type="module"]'))){const f=p.src.match(/\/assets\/index-([0-9a-z]+)\.js$/i);if(f){s=f[1];break}}const o=document.createElement("div");o.textContent="v "+s,o.title="viewer build hash (Vite content hash of index-*.js)",Object.assign(o.style,{position:"fixed",right:"6px",bottom:"6px",font:"10px ui-monospace, SFMono-Regular, Menlo, monospace",color:"rgba(255,255,255,0.55)",background:"rgba(0,0,0,0.35)",padding:"2px 6px",borderRadius:"4px",pointerEvents:"none",zIndex:"9999",userSelect:"all"}),document.body.appendChild(o)})();function er(i){const s=document.createElement("div");Object.assign(s.style,{position:"fixed",inset:"0",display:"flex",flexDirection:"column",gap:"14px",alignItems:"center",justifyContent:"center",zIndex:"10000",color:"#eee",background:"rgba(10,10,10,0.92)",font:"15px system-ui, sans-serif",padding:"24px",textAlign:"center"});const o=document.createElement("div");o.textContent=i,s.appendChild(o);const p=document.createElement("button");p.textContent="Reload",Object.assign(p.style,{font:"600 14px system-ui, sans-serif",padding:"8px 18px",borderRadius:"6px",border:"1px solid #f0b060",background:"#222",color:"#f0b060",cursor:"pointer"}),p.onclick=()=>window.location.reload(),s.appendChild(p),document.body.appendChild(s)}let tr=!1;window.addEventListener("unhandledrejection",i=>{if(tr)return;tr=!0;const s=i.reason;er(`The viewer failed to load: ${(s==null?void 0:s.message)??s}`)});window.addEventListener("error",i=>{var s;tr||!i.error||(tr=!0,er(`The viewer hit an error: ${((s=i.error)==null?void 0:s.message)??i.message}`))});try{const i=performance.memory;console.log("[mem]",{deviceMemoryGB:navigator.deviceMemory??"?",hardwareConcurrency:navigator.hardwareConcurrency,jsHeapLimitMB:i?Math.round(i.jsHeapSizeLimit/2**20):"?",dpr:window.devicePixelRatio})}catch{}(async()=>{const i=document.querySelector("#webgpu-canvas");Zc(i!==null);const{forced:s,stored:o}=_d(),p=s??o??"webgpu";let u=null;if(navigator.gpu!==void 0)try{u=await navigator.gpu.requestAdapter({powerPreference:"high-performance"})}catch(k){console.warn("[backend] requestAdapter failed:",k)}if(p==="webgl"||u===null){const k=i.getContext("webgl2",{alpha:!1,antialias:!1,depth:!1,stencil:!1,premultipliedAlpha:!0,powerPreference:"high-performance"});if(!k){er(u===null?"This browser has neither WebGPU nor WebGL2.":"WebGL2 is not available in this browser.");return}console.log(`[backend] WebGL2 (${p==="webgl"?s?"?renderer=webgl":"remembered choice":"no WebGPU adapter"})`),da(i),Ir(()=>{var B;return(B=k.getExtension("WEBGL_lose_context"))==null?void 0:B.loseContext()}),Ga(i,k,{gpuAvailable:u!==null});return}const f=[];u.features.has("timestamp-query")&&f.push("timestamp-query"),u.features.has("texture-compression-bc")&&f.push("texture-compression-bc"),u.features.has("texture-compression-astc")&&f.push("texture-compression-astc"),console.log("[adapter]",u.info??"(unknown)");try{const k=u.info??{};globalThis.__gpuAdapterInfo={vendor:k.vendor??"?",architecture:k.architecture??"?",device:k.device??"?",description:k.description??"?",features:Array.from(u.features).join(",")}}catch{}console.log("[adapter] features:",Array.from(u.features)),console.log("[adapter] BC7:",u.features.has("texture-compression-bc")),console.log("[adapter] ASTC:",u.features.has("texture-compression-astc")),console.log("[adapter] limits:",{maxStorageBuffersPerShaderStage:u.limits.maxStorageBuffersPerShaderStage,maxComputeWorkgroupStorageSize:u.limits.maxComputeWorkgroupStorageSize,maxBufferSize:u.limits.maxBufferSize,maxStorageBufferBindingSize:u.limits.maxStorageBufferBindingSize,maxTextureDimension2D:u.limits.maxTextureDimension2D});let P;try{P=await u.requestDevice({requiredFeatures:f,requiredLimits:{maxStorageBuffersPerShaderStage:10,maxComputeWorkgroupStorageSize:u.limits.maxComputeWorkgroupStorageSize,maxBufferSize:u.limits.maxBufferSize,maxStorageBufferBindingSize:u.limits.maxStorageBufferBindingSize}})}catch(k){console.warn("[backend] requestDevice failed, falling back to WebGL2:",k);const B=i.getContext("webgl2",{alpha:!1,antialias:!1,depth:!1,stencil:!1,premultipliedAlpha:!0,powerPreference:"high-performance"});if(!B){er(`WebGPU device creation failed (${k}) and WebGL2 is not available.`);return}da(i),Ir(()=>{var F;return(F=B.getExtension("WEBGL_lose_context"))==null?void 0:F.loseContext()}),Ga(i,B,{gpuAvailable:!1});return}Hc(P),Ir(()=>P.destroy());const y=i.getContext("webgpu");gd(i,y,P,f)})();
