(function(){(this||window).webpackJsonp.registerAbsMids({"esri/views/3d/webgl-engine/lib/gl-matrix":1278,"C:/Users/mlinden.LUCIDENERGY/Desktop/Web Apps/Node Dev/blank-esri-webpack-app/node_modules/arcgis-js-api/views/3d/webgl-engine/lib/gl-matrix":1278,"esri/views/3d/support/geometryUtils":1300,"C:/Users/mlinden.LUCIDENERGY/Desktop/Web Apps/Node Dev/blank-esri-webpack-app/node_modules/arcgis-js-api/views/3d/support/geometryUtils":1300,"esri/views/3d/support/geometryUtils/lineSegment":1770,"esri/views/3d/support/geometryUtils/plane":2074,"esri/views/3d/support/geometryUtils/triangle":2075})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1278:function(t,r,n){var e;void 0===(e=function(){var t={};return function(t,r){r(t,!0),r(t,!1)}(t,function(t,r){"use strict";var n={};!function(){if("undefined"!=typeof Float32Array){var t=new Float32Array(1),r=new Int32Array(t.buffer);n.invsqrt=function(n){var e=.5*n;t[0]=n,r[0]=1597463007-(r[0]>>1);var u=t[0];return u*(1.5-e*u*u)}}else n.invsqrt=function(t){return 1/Math.sqrt(t)}}();var e=Array;"undefined"!=typeof Float32Array&&(e=r?Float32Array:Array);var u={create:function(t){var r=new e(3);return t?(r[0]=t[0],r[1]=t[1],r[2]=t[2]):r[0]=r[1]=r[2]=0,r},createFrom:function(t,r,n){var u=new e(3);return u[0]=t,u[1]=r,u[2]=n,u},set:function(t,r){return r[0]=t[0],r[1]=t[1],r[2]=t[2],r},set3:function(t,r,n,e){return e[0]=t,e[1]=r,e[2]=n,e},add:function(t,r,n){return n&&t!==n?(n[0]=t[0]+r[0],n[1]=t[1]+r[1],n[2]=t[2]+r[2],n):(t[0]+=r[0],t[1]+=r[1],t[2]+=r[2],t)},subtract:function(t,r,n){return n&&t!==n?(n[0]=t[0]-r[0],n[1]=t[1]-r[1],n[2]=t[2]-r[2],n):(t[0]-=r[0],t[1]-=r[1],t[2]-=r[2],t)},multiply:function(t,r,n){return n&&t!==n?(n[0]=t[0]*r[0],n[1]=t[1]*r[1],n[2]=t[2]*r[2],n):(t[0]*=r[0],t[1]*=r[1],t[2]*=r[2],t)},max:function(t,r,n){return n[0]=Math.max(t[0],r[0]),n[1]=Math.max(t[1],r[1]),n[2]=Math.max(t[2],r[2]),n},min:function(t,r,n){return n[0]=Math.min(t[0],r[0]),n[1]=Math.min(t[1],r[1]),n[2]=Math.min(t[2],r[2]),n},negate:function(t,r){return r||(r=t),r[0]=-t[0],r[1]=-t[1],r[2]=-t[2],r},scale:function(t,r,n){return n&&t!==n?(n[0]=t[0]*r,n[1]=t[1]*r,n[2]=t[2]*r,n):(t[0]*=r,t[1]*=r,t[2]*=r,t)},normalize:function(t,r){r||(r=t);var n=t[0],e=t[1],u=t[2],c=Math.sqrt(n*n+e*e+u*u);return c?1===c?(r[0]=n,r[1]=e,r[2]=u,r):(c=1/c,r[0]=n*c,r[1]=e*c,r[2]=u*c,r):(r[0]=0,r[1]=0,r[2]=0,r)},cross:function(t,r,n){n||(n=t);var e=t[0],u=t[1],c=t[2],a=r[0],o=r[1],i=r[2];return n[0]=u*i-c*o,n[1]=c*a-e*i,n[2]=e*o-u*a,n},length:function(t){var r=t[0],n=t[1],e=t[2];return Math.sqrt(r*r+n*n+e*e)},length2:function(t){var r=t[0],n=t[1],e=t[2];return r*r+n*n+e*e},dot:function(t,r){return t[0]*r[0]+t[1]*r[1]+t[2]*r[2]},direction:function(t,r,n){n||(n=t);var e=t[0]-r[0],u=t[1]-r[1],c=t[2]-r[2],a=Math.sqrt(e*e+u*u+c*c);return a?(a=1/a,n[0]=e*a,n[1]=u*a,n[2]=c*a,n):(n[0]=0,n[1]=0,n[2]=0,n)},lerp:function(t,r,n,e){return e||(e=t),e[0]=t[0]+n*(r[0]-t[0]),e[1]=t[1]+n*(r[1]-t[1]),e[2]=t[2]+n*(r[2]-t[2]),e},dist:function(t,r){var n=r[0]-t[0],e=r[1]-t[1],u=r[2]-t[2];return Math.sqrt(n*n+e*e+u*u)},dist2:function(t,r){var n=r[0]-t[0],e=r[1]-t[1],u=r[2]-t[2];return n*n+e*e+u*u}},c=null,a=new e(4);u.unproject=function(t,r,n,e,u){u||(u=t),c||(c=l.create());var o=c,i=a;return i[0]=2*(t[0]-e[0])/e[2]-1,i[1]=2*(t[1]-e[1])/e[3]-1,i[2]=2*t[2]-1,i[3]=1,l.multiply(n,r,o),l.inverse(o)?(l.multiplyVec4(o,i),0===i[3]?null:(u[0]=i[0]/i[3],u[1]=i[1]/i[3],u[2]=i[2]/i[3],u)):null};var o=u.createFrom(1,0,0),i=u.createFrom(0,1,0),s=u.createFrom(0,0,1);u.rotationTo=function(t,r,n){n||(n=p.create());var e=u.dot(t,r),c=u.create();if(e>=1)p.set(m,n);else if(e<1e-6-1)u.cross(o,t,c),c.length<1e-6&&u.cross(i,t,c),c.length<1e-6&&u.cross(s,t,c),u.normalize(c),p.fromAxisAngle(c,Math.PI,n);else{var a=Math.sqrt(2*(1+e)),v=1/a;u.cross(t,r,c),n[0]=c[0]*v,n[1]=c[1]*v,n[2]=c[2]*v,n[3]=.5*a,p.normalize(n)}return n[3]>1?n[3]=1:n[3]<-1&&(n[3]=-1),n};var v=u.create(),f=u.create();u.project=function(t,r,n,e){e||(e=t),u.direction(r,n,v),u.subtract(t,r,f);var c=u.dot(v,f);u.scale(v,c,e),u.add(e,r,e)},u.str=function(t){return"["+t[0]+", "+t[1]+", "+t[2]+"]"};var d={create:function(t){var r=new e(9);return t?(r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r[4]=t[4],r[5]=t[5],r[6]=t[6],r[7]=t[7],r[8]=t[8]):r[0]=r[1]=r[2]=r[3]=r[4]=r[5]=r[6]=r[7]=r[8]=0,r},createFrom:function(t,r,n,u,c,a,o,i,s){var v=new e(9);return v[0]=t,v[1]=r,v[2]=n,v[3]=u,v[4]=c,v[5]=a,v[6]=o,v[7]=i,v[8]=s,v},determinant:function(t){var r=t[0],n=t[1],e=t[2],u=t[3],c=t[4],a=t[5],o=t[6],i=t[7],s=t[8];return r*(s*c-a*i)+n*(-s*u+a*o)+e*(i*u-c*o)},inverse:function(t,r){var n,e=t[0],u=t[1],c=t[2],a=t[3],o=t[4],i=t[5],s=t[6],v=t[7],f=t[8],l=f*o-i*v,p=-f*a+i*s,m=v*a-o*s,M=e*l+u*p+c*m;return M?(n=1/M,r||(r=d.create()),r[0]=l*n,r[1]=(-f*u+c*v)*n,r[2]=(i*u-c*o)*n,r[3]=p*n,r[4]=(f*e-c*s)*n,r[5]=(-i*e+c*a)*n,r[6]=m*n,r[7]=(-v*e+u*s)*n,r[8]=(o*e-u*a)*n,r):null},multiply:function(t,r,n){n||(n=t);var e=t[0],u=t[1],c=t[2],a=t[3],o=t[4],i=t[5],s=t[6],v=t[7],f=t[8],d=r[0],l=r[1],p=r[2],m=r[3],M=r[4],h=r[5],y=r[6],g=r[7],w=r[8];return n[0]=d*e+l*a+p*s,n[1]=d*u+l*o+p*v,n[2]=d*c+l*i+p*f,n[3]=m*e+M*a+h*s,n[4]=m*u+M*o+h*v,n[5]=m*c+M*i+h*f,n[6]=y*e+g*a+w*s,n[7]=y*u+g*o+w*v,n[8]=y*c+g*i+w*f,n},multiplyVec2:function(t,r,n){n||(n=r);var e=r[0],u=r[1];return n[0]=e*t[0]+u*t[3]+t[6],n[1]=e*t[1]+u*t[4]+t[7],n},multiplyVec3:function(t,r,n){n||(n=r);var e=r[0],u=r[1],c=r[2];return n[0]=e*t[0]+u*t[3]+c*t[6],n[1]=e*t[1]+u*t[4]+c*t[7],n[2]=e*t[2]+u*t[5]+c*t[8],n},set:function(t,r){return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r[4]=t[4],r[5]=t[5],r[6]=t[6],r[7]=t[7],r[8]=t[8],r},identity:function(t){return t||(t=d.create()),t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},transpose:function(t,r){if(!r||t===r){var n=t[1],e=t[2],u=t[5];return t[1]=t[3],t[2]=t[6],t[3]=n,t[5]=t[7],t[6]=e,t[7]=u,t}return r[0]=t[0],r[1]=t[3],r[2]=t[6],r[3]=t[1],r[4]=t[4],r[5]=t[7],r[6]=t[2],r[7]=t[5],r[8]=t[8],r},toMat4:function(t,r){return r||(r=l.create()),r[15]=1,r[14]=0,r[13]=0,r[12]=0,r[11]=0,r[10]=t[8],r[9]=t[7],r[8]=t[6],r[7]=0,r[6]=t[5],r[5]=t[4],r[4]=t[3],r[3]=0,r[2]=t[2],r[1]=t[1],r[0]=t[0],r},str:function(t){return"["+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+"]"}},l={create:function(t){var r=new e(16);return 4===arguments.length?(r[0]=arguments[0],r[1]=arguments[1],r[2]=arguments[2],r[3]=arguments[3],r[4]=arguments[4],r[5]=arguments[5],r[6]=arguments[6],r[7]=arguments[7],r[8]=arguments[8],r[9]=arguments[9],r[10]=arguments[10],r[11]=arguments[11],r[12]=arguments[12],r[13]=arguments[13],r[14]=arguments[14],r[15]=arguments[15]):t&&(r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r[4]=t[4],r[5]=t[5],r[6]=t[6],r[7]=t[7],r[8]=t[8],r[9]=t[9],r[10]=t[10],r[11]=t[11],r[12]=t[12],r[13]=t[13],r[14]=t[14],r[15]=t[15]),r},createFrom:function(t,r,n,u,c,a,o,i,s,v,f,d,l,p,m,M){var h=new e(16);return h[0]=t,h[1]=r,h[2]=n,h[3]=u,h[4]=c,h[5]=a,h[6]=o,h[7]=i,h[8]=s,h[9]=v,h[10]=f,h[11]=d,h[12]=l,h[13]=p,h[14]=m,h[15]=M,h},createFromMatrixRowMajor:function(t){var r=new e(16);return r[0]=t[0],r[4]=t[1],r[8]=t[2],r[12]=t[3],r[1]=t[4],r[5]=t[5],r[9]=t[6],r[13]=t[7],r[2]=t[8],r[6]=t[9],r[10]=t[10],r[14]=t[11],r[3]=t[12],r[7]=t[13],r[11]=t[14],r[15]=t[15],r},createFromMatrix:function(t){var r=new e(16);return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r[4]=t[4],r[5]=t[5],r[6]=t[6],r[7]=t[7],r[8]=t[8],r[9]=t[9],r[10]=t[10],r[11]=t[11],r[12]=t[12],r[13]=t[13],r[14]=t[14],r[15]=t[15],r},set:function(t,r){return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r[4]=t[4],r[5]=t[5],r[6]=t[6],r[7]=t[7],r[8]=t[8],r[9]=t[9],r[10]=t[10],r[11]=t[11],r[12]=t[12],r[13]=t[13],r[14]=t[14],r[15]=t[15],r},setRowMajor:function(t,r){return r[0]=t[0],r[4]=t[1],r[8]=t[2],r[12]=t[3],r[1]=t[4],r[5]=t[5],r[9]=t[6],r[13]=t[7],r[2]=t[8],r[6]=t[9],r[10]=t[10],r[14]=t[11],r[3]=t[12],r[7]=t[13],r[11]=t[14],r[15]=t[15],r},identity:function(t){return t||(t=l.create()),t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},transpose:function(t,r){if(!r||t===r){var n=t[1],e=t[2],u=t[3],c=t[6],a=t[7],o=t[11];return t[1]=t[4],t[2]=t[8],t[3]=t[12],t[4]=n,t[6]=t[9],t[7]=t[13],t[8]=e,t[9]=c,t[11]=t[14],t[12]=u,t[13]=a,t[14]=o,t}return r[0]=t[0],r[1]=t[4],r[2]=t[8],r[3]=t[12],r[4]=t[1],r[5]=t[5],r[6]=t[9],r[7]=t[13],r[8]=t[2],r[9]=t[6],r[10]=t[10],r[11]=t[14],r[12]=t[3],r[13]=t[7],r[14]=t[11],r[15]=t[15],r},determinant:function(t){var r=t[0],n=t[1],e=t[2],u=t[3],c=t[4],a=t[5],o=t[6],i=t[7],s=t[8],v=t[9],f=t[10],d=t[11],l=t[12],p=t[13],m=t[14],M=t[15];return l*v*o*u-s*p*o*u-l*a*f*u+c*p*f*u+s*a*m*u-c*v*m*u-l*v*e*i+s*p*e*i+l*n*f*i-r*p*f*i-s*n*m*i+r*v*m*i+l*a*e*d-c*p*e*d-l*n*o*d+r*p*o*d+c*n*m*d-r*a*m*d-s*a*e*M+c*v*e*M+s*n*o*M-r*v*o*M-c*n*f*M+r*a*f*M},inverse:function(t,r){r||(r=t);var n,e=t[0],u=t[1],c=t[2],a=t[3],o=t[4],i=t[5],s=t[6],v=t[7],f=t[8],d=t[9],l=t[10],p=t[11],m=t[12],M=t[13],h=t[14],y=t[15],g=e*i-u*o,w=e*s-c*o,b=e*v-a*o,q=u*s-c*i,x=u*v-a*i,A=c*v-a*s,j=f*M-d*m,F=f*h-l*m,V=f*y-p*m,P=d*h-l*M,R=d*y-p*M,_=l*y-p*h,U=g*_-w*R+b*P+q*V-x*F+A*j;return U?(n=1/U,r[0]=(i*_-s*R+v*P)*n,r[1]=(-u*_+c*R-a*P)*n,r[2]=(M*A-h*x+y*q)*n,r[3]=(-d*A+l*x-p*q)*n,r[4]=(-o*_+s*V-v*F)*n,r[5]=(e*_-c*V+a*F)*n,r[6]=(-m*A+h*b-y*w)*n,r[7]=(f*A-l*b+p*w)*n,r[8]=(o*R-i*V+v*j)*n,r[9]=(-e*R+u*V-a*j)*n,r[10]=(m*x-M*b+y*g)*n,r[11]=(-f*x+d*b-p*g)*n,r[12]=(-o*P+i*F-s*j)*n,r[13]=(e*P-u*F+c*j)*n,r[14]=(-m*q+M*w-h*g)*n,r[15]=(f*q-d*w+l*g)*n,r):null},toRotationMat:function(t,r){return r||(r=l.create()),r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r[4]=t[4],r[5]=t[5],r[6]=t[6],r[7]=t[7],r[8]=t[8],r[9]=t[9],r[10]=t[10],r[11]=t[11],r[12]=0,r[13]=0,r[14]=0,r[15]=1,r},toMat3:function(t,r){return r||(r=d.create()),r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[4],r[4]=t[5],r[5]=t[6],r[6]=t[8],r[7]=t[9],r[8]=t[10],r},toInverseMat3:function(t,r){var n,e=t[0],u=t[1],c=t[2],a=t[4],o=t[5],i=t[6],s=t[8],v=t[9],f=t[10],l=f*o-i*v,p=-f*a+i*s,m=v*a-o*s,M=e*l+u*p+c*m;return M?(n=1/M,r||(r=d.create()),r[0]=l*n,r[1]=(-f*u+c*v)*n,r[2]=(i*u-c*o)*n,r[3]=p*n,r[4]=(f*e-c*s)*n,r[5]=(-i*e+c*a)*n,r[6]=m*n,r[7]=(-v*e+u*s)*n,r[8]=(o*e-u*a)*n,r):null},multiply:function(t,r,n){n||(n=t);var e=t[0],u=t[1],c=t[2],a=t[3],o=t[4],i=t[5],s=t[6],v=t[7],f=t[8],d=t[9],l=t[10],p=t[11],m=t[12],M=t[13],h=t[14],y=t[15],g=r[0],w=r[1],b=r[2],q=r[3],x=r[4],A=r[5],j=r[6],F=r[7],V=r[8],P=r[9],R=r[10],_=r[11],U=r[12],k=r[13],O=r[14],N=r[15];return n[0]=g*e+w*o+b*f+q*m,n[1]=g*u+w*i+b*d+q*M,n[2]=g*c+w*s+b*l+q*h,n[3]=g*a+w*v+b*p+q*y,n[4]=x*e+A*o+j*f+F*m,n[5]=x*u+A*i+j*d+F*M,n[6]=x*c+A*s+j*l+F*h,n[7]=x*a+A*v+j*p+F*y,n[8]=V*e+P*o+R*f+_*m,n[9]=V*u+P*i+R*d+_*M,n[10]=V*c+P*s+R*l+_*h,n[11]=V*a+P*v+R*p+_*y,n[12]=U*e+k*o+O*f+N*m,n[13]=U*u+k*i+O*d+N*M,n[14]=U*c+k*s+O*l+N*h,n[15]=U*a+k*v+O*p+N*y,n},multiplyVec3:function(t,r,n){n||(n=r);var e=r[0],u=r[1],c=r[2];return n[0]=t[0]*e+t[4]*u+t[8]*c+t[12],n[1]=t[1]*e+t[5]*u+t[9]*c+t[13],n[2]=t[2]*e+t[6]*u+t[10]*c+t[14],n},multiplyVec4:function(t,r,n){n||(n=r);var e=r[0],u=r[1],c=r[2],a=r[3];return n[0]=t[0]*e+t[4]*u+t[8]*c+t[12]*a,n[1]=t[1]*e+t[5]*u+t[9]*c+t[13]*a,n[2]=t[2]*e+t[6]*u+t[10]*c+t[14]*a,n[3]=t[3]*e+t[7]*u+t[11]*c+t[15]*a,n},translate:function(t,r,n){var e,u,c,a,o,i,s,v,f,d,l,p,m=r[0],M=r[1],h=r[2];return n&&t!==n?(e=t[0],u=t[1],c=t[2],a=t[3],o=t[4],i=t[5],s=t[6],v=t[7],f=t[8],d=t[9],l=t[10],p=t[11],n[0]=e,n[1]=u,n[2]=c,n[3]=a,n[4]=o,n[5]=i,n[6]=s,n[7]=v,n[8]=f,n[9]=d,n[10]=l,n[11]=p,n[12]=e*m+o*M+f*h+t[12],n[13]=u*m+i*M+d*h+t[13],n[14]=c*m+s*M+l*h+t[14],n[15]=a*m+v*M+p*h+t[15],n):(t[12]=t[0]*m+t[4]*M+t[8]*h+t[12],t[13]=t[1]*m+t[5]*M+t[9]*h+t[13],t[14]=t[2]*m+t[6]*M+t[10]*h+t[14],t[15]=t[3]*m+t[7]*M+t[11]*h+t[15],t)},scale:function(t,r,n){var e=r[0],u=r[1],c=r[2];return n&&t!==n?(n[0]=t[0]*e,n[1]=t[1]*e,n[2]=t[2]*e,n[3]=t[3]*e,n[4]=t[4]*u,n[5]=t[5]*u,n[6]=t[6]*u,n[7]=t[7]*u,n[8]=t[8]*c,n[9]=t[9]*c,n[10]=t[10]*c,n[11]=t[11]*c,n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15],n):(t[0]*=e,t[1]*=e,t[2]*=e,t[3]*=e,t[4]*=u,t[5]*=u,t[6]*=u,t[7]*=u,t[8]*=c,t[9]*=c,t[10]*=c,t[11]*=c,t)},maxScale:function(t){var r=Math.sqrt(t[0]*t[0]+t[4]*t[4]+t[8]*t[8]),n=Math.sqrt(t[1]*t[1]+t[5]*t[5]+t[9]*t[9]),e=Math.sqrt(t[2]*t[2]+t[6]*t[6]+t[10]*t[10]);return Math.max(Math.max(r,n),e)},rotate:function(t,r,n,e){var u,c,a,o,i,s,v,f,d,l,p,m,M,h,y,g,w,b,q,x,A,j,F,V,P=n[0],R=n[1],_=n[2],U=Math.sqrt(P*P+R*R+_*_);return U?(1!==U&&(P*=U=1/U,R*=U,_*=U),u=Math.sin(r),a=1-(c=Math.cos(r)),o=t[0],i=t[1],s=t[2],v=t[3],f=t[4],d=t[5],l=t[6],p=t[7],m=t[8],M=t[9],h=t[10],y=t[11],g=P*P*a+c,w=R*P*a+_*u,b=_*P*a-R*u,q=P*R*a-_*u,x=R*R*a+c,A=_*R*a+P*u,j=P*_*a+R*u,F=R*_*a-P*u,V=_*_*a+c,e?t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]):e=t,e[0]=o*g+f*w+m*b,e[1]=i*g+d*w+M*b,e[2]=s*g+l*w+h*b,e[3]=v*g+p*w+y*b,e[4]=o*q+f*x+m*A,e[5]=i*q+d*x+M*A,e[6]=s*q+l*x+h*A,e[7]=v*q+p*x+y*A,e[8]=o*j+f*F+m*V,e[9]=i*j+d*F+M*V,e[10]=s*j+l*F+h*V,e[11]=v*j+p*F+y*V,e):null},rotateX:function(t,r,n){var e=Math.sin(r),u=Math.cos(r),c=t[4],a=t[5],o=t[6],i=t[7],s=t[8],v=t[9],f=t[10],d=t[11];return n?t!==n&&(n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15]):n=t,n[4]=c*u+s*e,n[5]=a*u+v*e,n[6]=o*u+f*e,n[7]=i*u+d*e,n[8]=c*-e+s*u,n[9]=a*-e+v*u,n[10]=o*-e+f*u,n[11]=i*-e+d*u,n},rotateY:function(t,r,n){var e=Math.sin(r),u=Math.cos(r),c=t[0],a=t[1],o=t[2],i=t[3],s=t[8],v=t[9],f=t[10],d=t[11];return n?t!==n&&(n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15]):n=t,n[0]=c*u+s*-e,n[1]=a*u+v*-e,n[2]=o*u+f*-e,n[3]=i*u+d*-e,n[8]=c*e+s*u,n[9]=a*e+v*u,n[10]=o*e+f*u,n[11]=i*e+d*u,n},rotateZ:function(t,r,n){var e=Math.sin(r),u=Math.cos(r),c=t[0],a=t[1],o=t[2],i=t[3],s=t[4],v=t[5],f=t[6],d=t[7];return n?t!==n&&(n[8]=t[8],n[9]=t[9],n[10]=t[10],n[11]=t[11],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15]):n=t,n[0]=c*u+s*e,n[1]=a*u+v*e,n[2]=o*u+f*e,n[3]=i*u+d*e,n[4]=c*-e+s*u,n[5]=a*-e+v*u,n[6]=o*-e+f*u,n[7]=i*-e+d*u,n},frustum:function(t,r,n,e,u,c,a){a||(a=l.create());var o=r-t,i=e-n,s=c-u;return a[0]=2*u/o,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=2*u/i,a[6]=0,a[7]=0,a[8]=(r+t)/o,a[9]=(e+n)/i,a[10]=-(c+u)/s,a[11]=-1,a[12]=0,a[13]=0,a[14]=-c*u*2/s,a[15]=0,a},perspective:function(t,r,n,e,u){var c=n*Math.tan(t*Math.PI/360),a=c*r;return l.frustum(-a,a,-c,c,n,e,u)},ortho:function(t,r,n,e,u,c,a){a||(a=l.create());var o=r-t,i=e-n,s=c-u;return a[0]=2/o,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=2/i,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=-2/s,a[11]=0,a[12]=-(t+r)/o,a[13]=-(e+n)/i,a[14]=-(c+u)/s,a[15]=1,a},lookAt:function(t,r,n,e){e||(e=l.create());var u,c,a,o,i,s,v,f,d,p,m=t[0],M=t[1],h=t[2],y=n[0],g=n[1],w=n[2],b=r[0],q=r[1],x=r[2];return m===b&&M===q&&h===x?l.identity(e):(v=m-b,f=M-q,d=h-x,u=g*(d*=p=1/Math.sqrt(v*v+f*f+d*d))-w*(f*=p),c=w*(v*=p)-y*d,a=y*f-g*v,(p=Math.sqrt(u*u+c*c+a*a))?(u*=p=1/p,c*=p,a*=p):(u=0,c=0,a=0),o=f*a-d*c,i=d*u-v*a,s=v*c-f*u,(p=Math.sqrt(o*o+i*i+s*s))?(o*=p=1/p,i*=p,s*=p):(o=0,i=0,s=0),e[0]=u,e[1]=o,e[2]=v,e[3]=0,e[4]=c,e[5]=i,e[6]=f,e[7]=0,e[8]=a,e[9]=s,e[10]=d,e[11]=0,e[12]=-(u*m+c*M+a*h),e[13]=-(o*m+i*M+s*h),e[14]=-(v*m+f*M+d*h),e[15]=1,e)},fromRotationTranslation:function(t,r,n){n||(n=l.create());var e=t[0],u=t[1],c=t[2],a=t[3],o=e+e,i=u+u,s=c+c,v=e*o,f=e*i,d=e*s,p=u*i,m=u*s,M=c*s,h=a*o,y=a*i,g=a*s;return n[0]=1-(p+M),n[1]=f+g,n[2]=d-y,n[3]=0,n[4]=f-g,n[5]=1-(v+M),n[6]=m+h,n[7]=0,n[8]=d+y,n[9]=m-h,n[10]=1-(v+p),n[11]=0,n[12]=r[0],n[13]=r[1],n[14]=r[2],n[15]=1,n},str:function(t){return"["+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+", "+t[9]+", "+t[10]+", "+t[11]+", "+t[12]+", "+t[13]+", "+t[14]+", "+t[15]+"]"}},p={create:function(t){var r=new e(4);return t?(r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3]):r[0]=r[1]=r[2]=r[3]=0,r},createFrom:function(t,r,n,u){var c=new e(4);return c[0]=t,c[1]=r,c[2]=n,c[3]=u,c},set:function(t,r){return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r},identity:function(t){return t||(t=p.create()),t[0]=0,t[1]=0,t[2]=0,t[3]=1,t}},m=p.identity();p.calculateW=function(t,r){var n=t[0],e=t[1],u=t[2];return r&&t!==r?(r[0]=n,r[1]=e,r[2]=u,r[3]=-Math.sqrt(Math.abs(1-n*n-e*e-u*u)),r):(t[3]=-Math.sqrt(Math.abs(1-n*n-e*e-u*u)),t)},p.dot=function(t,r){return t[0]*r[0]+t[1]*r[1]+t[2]*r[2]+t[3]*r[3]},p.inverse=function(t,r){var n=t[0],e=t[1],u=t[2],c=t[3],a=n*n+e*e+u*u+c*c,o=a?1/a:0;return r&&t!==r?(r[0]=-t[0]*o,r[1]=-t[1]*o,r[2]=-t[2]*o,r[3]=t[3]*o,r):(t[0]*=-o,t[1]*=-o,t[2]*=-o,t[3]*=o,t)},p.conjugate=function(t,r){return r&&t!==r?(r[0]=-t[0],r[1]=-t[1],r[2]=-t[2],r[3]=t[3],r):(t[0]*=-1,t[1]*=-1,t[2]*=-1,t)},p.length=function(t){var r=t[0],n=t[1],e=t[2],u=t[3];return Math.sqrt(r*r+n*n+e*e+u*u)},p.normalize=function(t,r){r||(r=t);var n=t[0],e=t[1],u=t[2],c=t[3],a=Math.sqrt(n*n+e*e+u*u+c*c);return 0===a?(r[0]=0,r[1]=0,r[2]=0,r[3]=0,r):(a=1/a,r[0]=n*a,r[1]=e*a,r[2]=u*a,r[3]=c*a,r)},p.add=function(t,r,n){return n&&t!==n?(n[0]=t[0]+r[0],n[1]=t[1]+r[1],n[2]=t[2]+r[2],n[3]=t[3]+r[3],n):(t[0]+=r[0],t[1]+=r[1],t[2]+=r[2],t[3]+=r[3],t)},p.multiply=function(t,r,n){n||(n=t);var e=t[0],u=t[1],c=t[2],a=t[3],o=r[0],i=r[1],s=r[2],v=r[3];return n[0]=e*v+a*o+u*s-c*i,n[1]=u*v+a*i+c*o-e*s,n[2]=c*v+a*s+e*i-u*o,n[3]=a*v-e*o-u*i-c*s,n},p.multiplyVec3=function(t,r,n){n||(n=r);var e=r[0],u=r[1],c=r[2],a=t[0],o=t[1],i=t[2],s=t[3],v=s*e+o*c-i*u,f=s*u+i*e-a*c,d=s*c+a*u-o*e,l=-a*e-o*u-i*c;return n[0]=v*s+l*-a+f*-i-d*-o,n[1]=f*s+l*-o+d*-a-v*-i,n[2]=d*s+l*-i+v*-o-f*-a,n},p.scale=function(t,r,n){return n&&t!==n?(n[0]=t[0]*r,n[1]=t[1]*r,n[2]=t[2]*r,n[3]=t[3]*r,n):(t[0]*=r,t[1]*=r,t[2]*=r,t[3]*=r,t)},p.toMat3=function(t,r){r||(r=d.create());var n=t[0],e=t[1],u=t[2],c=t[3],a=n+n,o=e+e,i=u+u,s=n*a,v=n*o,f=n*i,l=e*o,p=e*i,m=u*i,M=c*a,h=c*o,y=c*i;return r[0]=1-(l+m),r[1]=v+y,r[2]=f-h,r[3]=v-y,r[4]=1-(s+m),r[5]=p+M,r[6]=f+h,r[7]=p-M,r[8]=1-(s+l),r},p.toMat4=function(t,r){r||(r=l.create());var n=t[0],e=t[1],u=t[2],c=t[3],a=n+n,o=e+e,i=u+u,s=n*a,v=n*o,f=n*i,d=e*o,p=e*i,m=u*i,M=c*a,h=c*o,y=c*i;return r[0]=1-(d+m),r[1]=v+y,r[2]=f-h,r[3]=0,r[4]=v-y,r[5]=1-(s+m),r[6]=p+M,r[7]=0,r[8]=f+h,r[9]=p-M,r[10]=1-(s+d),r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r},p.slerp=function(t,r,n,e){e||(e=t);var u,c,a,o,i=t[0]*r[0]+t[1]*r[1]+t[2]*r[2]+t[3]*r[3];return Math.abs(i)>=1?(e!==t&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3]),e):(u=Math.acos(i),c=Math.sqrt(1-i*i),Math.abs(c)<.001?(e[0]=.5*t[0]+.5*r[0],e[1]=.5*t[1]+.5*r[1],e[2]=.5*t[2]+.5*r[2],e[3]=.5*t[3]+.5*r[3],e):(a=Math.sin((1-n)*u)/c,o=Math.sin(n*u)/c,e[0]=t[0]*a+r[0]*o,e[1]=t[1]*a+r[1]*o,e[2]=t[2]*a+r[2]*o,e[3]=t[3]*a+r[3]*o,e))},p.fromRotationMatrix=function(t,r){r||(r=p.create());var n,e=t[0]+t[4]+t[8];if(e>0)n=Math.sqrt(e+1),r[3]=.5*n,n=.5/n,r[0]=(t[7]-t[5])*n,r[1]=(t[2]-t[6])*n,r[2]=(t[3]-t[1])*n;else{var u=p.fromRotationMatrix.s_iNext=p.fromRotationMatrix.s_iNext||[1,2,0],c=0;t[4]>t[0]&&(c=1),t[8]>t[3*c+c]&&(c=2);var a=u[c],o=u[a];n=Math.sqrt(t[3*c+c]-t[3*a+a]-t[3*o+o]+1),r[c]=.5*n,n=.5/n,r[3]=(t[3*o+a]-t[3*a+o])*n,r[a]=(t[3*a+c]+t[3*c+a])*n,r[o]=(t[3*o+c]+t[3*c+o])*n}return r},d.toQuat4=p.fromRotationMatrix,function(){var t=d.create();p.fromAxes=function(r,n,e,u){return t[0]=n[0],t[3]=n[1],t[6]=n[2],t[1]=e[0],t[4]=e[1],t[7]=e[2],t[2]=r[0],t[5]=r[1],t[8]=r[2],p.fromRotationMatrix(t,u)}}(),p.identity=function(t){return t||(t=p.create()),t[0]=0,t[1]=0,t[2]=0,t[3]=1,t},p.fromAngleAxis=function(t,r,n){n||(n=p.create());var e=.5*t,u=Math.sin(e);return n[3]=Math.cos(e),n[0]=u*r[0],n[1]=u*r[1],n[2]=u*r[2],n},p.toAngleAxis=function(t,r){r||(r=t);var e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2];if(e>0){r[3]=2*Math.acos(t[3]);var u=n.invsqrt(e);r[0]=t[0]*u,r[1]=t[1]*u,r[2]=t[2]*u}else r[3]=0,r[0]=1,r[1]=0,r[2]=0;return r},p.str=function(t){return"["+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+"]"};var M={create:function(t){var r=new e(2);return t?(r[0]=t[0],r[1]=t[1]):(r[0]=0,r[1]=0),r},createFrom:function(t,r){var n=new e(2);return n[0]=t,n[1]=r,n},add:function(t,r,n){return n||(n=r),n[0]=t[0]+r[0],n[1]=t[1]+r[1],n},subtract:function(t,r,n){return n||(n=r),n[0]=t[0]-r[0],n[1]=t[1]-r[1],n},multiply:function(t,r,n){return n||(n=r),n[0]=t[0]*r[0],n[1]=t[1]*r[1],n},divide:function(t,r,n){return n||(n=r),n[0]=t[0]/r[0],n[1]=t[1]/r[1],n},scale:function(t,r,n){return n||(n=t),n[0]=t[0]*r,n[1]=t[1]*r,n},dist:function(t,r){var n=r[0]-t[0],e=r[1]-t[1];return Math.sqrt(n*n+e*e)},dist2:function(t,r){var n=r[0]-t[0],e=r[1]-t[1];return n*n+e*e},set:function(t,r){return r[0]=t[0],r[1]=t[1],r},set2:function(t,r,n){return n[0]=t,n[1]=r,n},negate:function(t,r){return r||(r=t),r[0]=-t[0],r[1]=-t[1],r},normalize:function(t,r){r||(r=t);var n=t[0]*t[0]+t[1]*t[1];return n>0?(n=Math.sqrt(n),r[0]=t[0]/n,r[1]=t[1]/n):r[0]=r[1]=0,r},cross:function(t,r,n){var e=t[0]*r[1]-t[1]*r[0];return n?(n[0]=n[1]=0,n[2]=e,n):e},length:function(t){var r=t[0],n=t[1];return Math.sqrt(r*r+n*n)},dot:function(t,r){return t[0]*r[0]+t[1]*r[1]},direction:function(t,r,n){n||(n=t);var e=t[0]-r[0],u=t[1]-r[1],c=e*e+u*u;return c?(c=1/Math.sqrt(c),n[0]=e*c,n[1]=u*c,n):(n[0]=0,n[1]=0,n[2]=0,n)},lerp:function(t,r,n,e){return e||(e=t),e[0]=t[0]+n*(r[0]-t[0]),e[1]=t[1]+n*(r[1]-t[1]),e},str:function(t){return"["+t[0]+", "+t[1]+"]"}},h={create:function(t){var r=new e(4);return t?(r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3]):r[0]=r[1]=r[2]=r[3]=0,r},createFrom:function(t,r,n,u){var c=new e(4);return c[0]=t,c[1]=r,c[2]=n,c[3]=u,c},set:function(t,r){return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r},identity:function(t){return t||(t=h.create()),t[0]=1,t[1]=0,t[2]=0,t[3]=1,t},transpose:function(t,r){if(!r||t===r){var n=t[1];return t[1]=t[2],t[2]=n,t}return r[0]=t[0],r[1]=t[2],r[2]=t[1],r[3]=t[3],r},determinant:function(t){return t[0]*t[3]-t[2]*t[1]},inverse:function(t,r){r||(r=t);var n=t[0],e=t[1],u=t[2],c=t[3],a=n*c-u*e;return a?(a=1/a,r[0]=c*a,r[1]=-e*a,r[2]=-u*a,r[3]=n*a,r):null},multiply:function(t,r,n){n||(n=t);var e=t[0],u=t[1],c=t[2],a=t[3];return n[0]=e*r[0]+u*r[2],n[1]=e*r[1]+u*r[3],n[2]=c*r[0]+a*r[2],n[3]=c*r[1]+a*r[3],n},rotate:function(t,r,n){n||(n=t);var e=t[0],u=t[1],c=t[2],a=t[3],o=Math.sin(r),i=Math.cos(r);return n[0]=e*i+u*o,n[1]=e*-o+u*i,n[2]=c*i+a*o,n[3]=c*-o+a*i,n},multiplyVec2:function(t,r,n){n||(n=r);var e=r[0],u=r[1];return n[0]=e*t[0]+u*t[1],n[1]=e*t[2]+u*t[3],n},scale:function(t,r,n){n||(n=t);var e=t[0],u=t[1],c=t[2],a=t[3],o=r[0],i=r[1];return n[0]=e*o,n[1]=u*i,n[2]=c*o,n[3]=a*i,n},str:function(t){return"["+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+"]"}},y={create:function(t){var r=new e(4);return t?(r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3]):(r[0]=0,r[1]=0,r[2]=0,r[3]=0),r},createFrom:function(t,r,n,u){var c=new e(4);return c[0]=t,c[1]=r,c[2]=n,c[3]=u,c},add:function(t,r,n){return n||(n=r),n[0]=t[0]+r[0],n[1]=t[1]+r[1],n[2]=t[2]+r[2],n[3]=t[3]+r[3],n},subtract:function(t,r,n){return n||(n=r),n[0]=t[0]-r[0],n[1]=t[1]-r[1],n[2]=t[2]-r[2],n[3]=t[3]-r[3],n},multiply:function(t,r,n){return n||(n=r),n[0]=t[0]*r[0],n[1]=t[1]*r[1],n[2]=t[2]*r[2],n[3]=t[3]*r[3],n},divide:function(t,r,n){return n||(n=r),n[0]=t[0]/r[0],n[1]=t[1]/r[1],n[2]=t[2]/r[2],n[3]=t[3]/r[3],n},scale:function(t,r,n){return n||(n=t),n[0]=t[0]*r,n[1]=t[1]*r,n[2]=t[2]*r,n[3]=t[3]*r,n},dot:function(t,r){return t[0]*r[0]+t[1]*r[1]+t[2]*r[2]+t[3]*r[3]},set:function(t,r){return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r},set4:function(t,r,n,e,u){return u[0]=t,u[1]=r,u[2]=n,u[3]=e,u},negate:function(t,r){return r||(r=t),r[0]=-t[0],r[1]=-t[1],r[2]=-t[2],r[3]=-t[3],r},lerp:function(t,r,n,e){return e||(e=t),e[0]=t[0]+n*(r[0]-t[0]),e[1]=t[1]+n*(r[1]-t[1]),e[2]=t[2]+n*(r[2]-t[2]),e[3]=t[3]+n*(r[3]-t[3]),e},str:function(t){return"["+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+"]"}},g=r?"":"d";t["glMath"+g]=n,t["vec2"+g]=M,t["vec3"+g]=u,t["vec4"+g]=y,t["mat2"+g]=h,t["mat3"+g]=d,t["mat4"+g]=l,t["quat4"+g]=p}),t}.apply(null,[]))||(t.exports=e)},1300:function(t,r,n){var e,u;e=[n.dj.c(t.i),r,n(1770),n(2074),n(2075)],void 0===(u=function(t,r,n,e,u){Object.defineProperty(r,"__esModule",{value:!0}),r.plane=e,r.triangle=u,r.lineSegment=n}.apply(null,e))||(t.exports=u)},1770:function(t,r,n){var e,u;e=[n.dj.c(t.i),r,n(40),n(63)],void 0===(u=function(t,r,n,e){function u(t,r){return void 0===t&&(t=n.vec3d.create()),void 0===r&&(r=n.vec3d.create()),{origin:t,vector:r}}Object.defineProperty(r,"__esModule",{value:!0}),r.create=u,r.fromOriginAndVector=function(t,r,e){return void 0===e&&(e=u()),n.vec3d.set(t,e.origin),n.vec3d.set(r,e.vector),e},r.distance2=function(t,r){var u=n.vec3d.subtract(r,t.origin),a=n.vec3d.dot(t.vector,u),o=n.vec3d.dot(t.vector,t.vector),i=e.clamp(a/o,0,1),s=n.vec3d.subtract(n.vec3d.scale(t.vector,i,c),u,c);return n.vec3d.dot(s,s)};var c=n.vec3d.create()}.apply(null,e))||(t.exports=u)},2074:function(t,r,n){var e,u;e=[n.dj.c(t.i),r,n(40)],void 0===(u=function(t,r,n){function e(t){return void 0===t&&(t=r.UP),[t[0],t[1],t[2],t[3]]}function u(t,r,u){return void 0===u&&(u=e()),n.vec3d.set(r,u),u[3]=-n.vec3d.dot(r,t),u}function c(t,r,c,a){return void 0===a&&(a=e()),n.vec3d.cross(r,t,i),u(c,n.vec3d.normalize(i),a)}Object.defineProperty(r,"__esModule",{value:!0}),r.create=e,r.fromValues=function(t,r,n,u,c){return void 0===c&&(c=e()),c[0]=t,c[1]=r,c[2]=n,c[3]=u,c},r.fromNormalAndOffset=function(t,r,u){return void 0===u&&(u=e()),n.vec3d.set(t,u),u[3]=r,u},r.fromPositionAndNormal=u,r.projectVector=function(t,r,e){return void 0===e&&(e=r),n.vec3d.cross(t,n.vec3d.cross(r,t,o),e)},r.distance=function(t,r){return n.vec3d.dot(t,r)+t[3]},r.fromPoints=function(t,r,u,i){return void 0===i&&(i=e()),c(n.vec3d.subtract(t,r,a),n.vec3d.subtract(u,r,o),t,i)},r.set=function(t,r){return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t},r.negate=function(t,r){return void 0===r&&(r=t),r[0]=-t[0],r[1]=-t[1],r[2]=-t[2],r[3]=-t[3],r},r.fromVectorsAndPoint=c,r.intersectRay=function(t,r,e,u){var c=n.vec3d.dot(t,e);if(0===c)return!1;var a=-(n.vec3d.dot(t,r)+t[3])/c;return n.vec3d.add(r,n.vec3d.scale(e,a,u),u),!0},r.UP=[0,0,1,0];var a=n.vec3d.create(),o=n.vec3d.create(),i=n.vec3d.create()}.apply(null,e))||(t.exports=u)},2075:function(t,r,n){var e,u;e=[n.dj.c(t.i),r,n(40),n(1770)],void 0===(u=function(t,r,n,e){function u(t,r,e){var u=n.vec2d.dist(t,r),c=n.vec2d.dist(r,e),a=n.vec2d.dist(e,t),o=(u+c+a)/2;return Math.sqrt(o*(o-u)*(o-c)*(o-a))}Object.defineProperty(r,"__esModule",{value:!0}),r.create=function(t,r,e){return void 0===t&&(t=n.vec3d.create()),void 0===r&&(r=n.vec3d.create()),void 0===e&&(e=n.vec3d.create()),{p0:t,p1:r,p2:e}},r.distance2=function(t,r){var u=t.p0,l=t.p1,p=t.p2,m=n.vec3d.subtract(l,u,c),M=n.vec3d.subtract(p,l,a),h=n.vec3d.subtract(u,p,o),y=n.vec3d.subtract(r,u,i),g=n.vec3d.subtract(r,l,s),w=n.vec3d.subtract(r,p,v),b=n.vec3d.cross(m,h),q=n.vec3d.dot(n.vec3d.cross(m,b,f),y),x=n.vec3d.dot(n.vec3d.cross(M,b,f),g),A=n.vec3d.dot(n.vec3d.cross(h,b,f),w);if(q>0&&x>0&&A>0){var j=n.vec3d.dot(b,y);return j*j/n.vec3d.dot(b,b)}var F=e.distance2(e.fromOriginAndVector(u,m,d),r),V=e.distance2(e.fromOriginAndVector(l,M,d),r),P=e.distance2(e.fromOriginAndVector(p,h,d),r);return Math.min(F,V,P)},r.areaPoints2d=u,r.area2d=function(t){return u(t.p0,t.p1,t.p2)};var c=n.vec3d.create(),a=n.vec3d.create(),o=n.vec3d.create(),i=n.vec3d.create(),s=n.vec3d.create(),v=n.vec3d.create(),f=n.vec3d.create(),d=e.create()}.apply(null,e))||(t.exports=u)}}]);