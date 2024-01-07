"use strict";var O=function(t,v){return function(){return v||t((v={exports:{}}).exports,v),v.exports}};var M=O(function(T,L){
var u=require('@stdlib/array-base-broadcast-array/dist');function P(t,v,N){var b,j,k,y,S,A,g,l,n,o,i,e,x,s,c,f,w,z,m,q,B,C,D,E,F,d,r,a,G,H,I,J,K;if(d=v[4],n=d[1],o=d[0],!(n<=0||o<=0))for(a=u(t[0],v[0],d),G=a.data,r=a.strides,b=r[1],j=r[0],a=u(t[1],v[1],d),H=a.data,r=a.strides,k=r[1],y=r[0],a=u(t[2],v[2],d),I=a.data,r=a.strides,S=r[1],A=r[0],a=u(t[3],v[3],d),J=a.data,r=a.strides,g=r[1],l=r[0],K=t[4],s=0,f=0,z=0,q=0,e=0;e<o;e++){for(x=0,c=0,w=0,m=0,B=G[s],C=H[f],D=I[z],E=J[q],F=K[e],i=0;i<n;i++)F[i]=N(B[x],C[c],D[w],E[m]),x+=b,c+=k,w+=S,m+=g;s+=j,f+=y,z+=A,q+=l}}L.exports=P
});var Q=M();module.exports=Q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
