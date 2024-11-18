/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const mn="149",Bo={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Fo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ko=0,bs=1,Ho=2,Ss=1,ws=2,nr=3,kt=0,mt=1,Ht=2,Qt=0,wi=1,Ts=2,Es=3,As=4,Go=5,Ti=100,Vo=101,Wo=102,Cs=103,Ls=104,jo=200,Xo=201,qo=202,Yo=203,Ds=204,Ps=205,Zo=206,Jo=207,Ko=208,Qo=209,$o=210,el=0,tl=1,il=2,fn=3,rl=4,nl=5,sl=6,al=7,Rs=0,ol=1,ll=2,Gt=0,cl=1,hl=2,ul=3,Is=4,dl=5,Ns=300,Ei=301,Ai=302,gn=303,_n=304,Ar=306,Cr=1e3,St=1001,Lr=1002,Qe=1003,vn=1004,Dr=1005,ft=1006,Us=1007,Ci=1008,ui=1009,pl=1010,ml=1011,zs=1012,fl=1013,di=1014,$t=1015,sr=1016,gl=1017,_l=1018,Li=1020,vl=1021,wt=1023,xl=1024,yl=1025,pi=1026,Di=1027,Ml=1028,bl=1029,Sl=1030,wl=1031,Tl=1033,xn=33776,yn=33777,Mn=33778,bn=33779,Os=35840,Bs=35841,Fs=35842,ks=35843,El=36196,Hs=37492,Gs=37496,Vs=37808,Ws=37809,js=37810,Xs=37811,qs=37812,Ys=37813,Zs=37814,Js=37815,Ks=37816,Qs=37817,$s=37818,ea=37819,ta=37820,ia=37821,Sn=36492,Al=36283,ra=36284,na=36285,sa=36286,Cl=2200,Ll=2201,Dl=2202,ar=2300,or=2301,wn=2302,Pi=2400,Ri=2401,Pr=2402,Tn=2500,Pl=2501,Rl=0,Il=1,Nl=2,mi=3e3,Fe=3001,Ul=3200,zl=3201,aa=0,Ol=1,Rt="srgb",Rr="srgb-linear",En=7680,Bl=519,An=35044,oa="300 es",Cn=1035;class ei{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const i=t.slice(0);for(let r=0,n=i.length;r<n;r++)i[r].call(this,e);e.target=null}}}const rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let la=1234567;const lr=Math.PI/180,cr=180/Math.PI;function Ct(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(rt[a&255]+rt[a>>8&255]+rt[a>>16&255]+rt[a>>24&255]+"-"+rt[e&255]+rt[e>>8&255]+"-"+rt[e>>16&15|64]+rt[e>>24&255]+"-"+rt[t&63|128]+rt[t>>8&255]+"-"+rt[t>>16&255]+rt[t>>24&255]+rt[i&255]+rt[i>>8&255]+rt[i>>16&255]+rt[i>>24&255]).toLowerCase()}function nt(a,e,t){return Math.max(e,Math.min(t,a))}function Ln(a,e){return(a%e+e)%e}function Fl(a,e,t,i,r){return i+(a-e)*(r-i)/(t-e)}function kl(a,e,t){return a!==e?(t-a)/(e-a):0}function hr(a,e,t){return(1-t)*a+t*e}function Hl(a,e,t,i){return hr(a,e,1-Math.exp(-t*i))}function Gl(a,e=1){return e-Math.abs(Ln(a,e*2)-e)}function Vl(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function Wl(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function jl(a,e){return a+Math.floor(Math.random()*(e-a+1))}function Xl(a,e){return a+Math.random()*(e-a)}function ql(a){return a*(.5-Math.random())}function Yl(a){a!==void 0&&(la=a);let e=la+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Zl(a){return a*lr}function Jl(a){return a*cr}function Dn(a){return(a&a-1)===0&&a!==0}function ca(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function Ir(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function Kl(a,e,t,i,r){const n=Math.cos,o=Math.sin,s=n(t/2),l=o(t/2),c=n((e+i)/2),h=o((e+i)/2),d=n((e-i)/2),u=o((e-i)/2),f=n((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":a.set(s*h,l*d,l*u,s*c);break;case"YZY":a.set(l*u,s*h,l*d,s*c);break;case"ZXZ":a.set(l*d,l*u,s*h,s*c);break;case"XZX":a.set(s*h,l*g,l*f,s*c);break;case"YXY":a.set(l*f,s*h,l*g,s*c);break;case"ZYZ":a.set(l*g,l*f,s*h,s*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Vt(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Oe(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}var Ql=Object.freeze({__proto__:null,DEG2RAD:lr,RAD2DEG:cr,ceilPowerOfTwo:ca,clamp:nt,damp:Hl,degToRad:Zl,denormalize:Vt,euclideanModulo:Ln,floorPowerOfTwo:Ir,generateUUID:Ct,inverseLerp:kl,isPowerOfTwo:Dn,lerp:hr,mapLinear:Fl,normalize:Oe,pingpong:Gl,radToDeg:Jl,randFloat:Xl,randFloatSpread:ql,randInt:jl,seededRandom:Yl,setQuaternionFromProperEuler:Kl,smootherstep:Wl,smoothstep:Vl});class Re{constructor(e=0,t=0){Re.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),n=this.x-e.x,o=this.y-e.y;return this.x=n*i-o*r+e.x,this.y=n*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class xt{constructor(){xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,n,o,s,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=s,h[3]=t,h[4]=n,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,n=this.elements,o=i[0],s=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],g=i[8],p=r[0],m=r[3],y=r[6],w=r[1],M=r[4],b=r[7],E=r[2],C=r[5],N=r[8];return n[0]=o*p+s*w+l*E,n[3]=o*m+s*M+l*C,n[6]=o*y+s*b+l*N,n[1]=c*p+h*w+d*E,n[4]=c*m+h*M+d*C,n[7]=c*y+h*b+d*N,n[2]=u*p+f*w+g*E,n[5]=u*m+f*M+g*C,n[8]=u*y+f*b+g*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],o=e[4],s=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*s*c-i*n*h+i*s*l+r*n*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],o=e[4],s=e[5],l=e[6],c=e[7],h=e[8],d=h*o-s*c,u=s*l-h*n,f=c*n-o*l,g=t*d+i*u+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return e[0]=d*p,e[1]=(r*c-h*i)*p,e[2]=(s*i-r*o)*p,e[3]=u*p,e[4]=(h*t-r*l)*p,e[5]=(r*n-s*t)*p,e[6]=f*p,e[7]=(i*l-c*t)*p,e[8]=(o*t-i*n)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,n,o,s){const l=Math.cos(n),c=Math.sin(n);return this.set(i*l,i*c,-i*(l*o+c*s)+o+e,-r*c,r*l,-r*(-c*o+l*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(Pn.makeScale(e,t)),this}rotate(e){return this.premultiply(Pn.makeRotation(-e)),this}translate(e,t){return this.premultiply(Pn.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Pn=new xt;function ha(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function ur(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function fi(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Nr(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}const Rn={[Rt]:{[Rr]:fi},[Rr]:{[Rt]:Nr}},lt={legacyMode:!0,get workingColorSpace(){return Rr},set workingColorSpace(a){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(a,e,t){if(this.legacyMode||e===t||!e||!t)return a;if(Rn[e]&&Rn[e][t]!==void 0){const i=Rn[e][t];return a.r=i(a.r),a.g=i(a.g),a.b=i(a.b),a}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(a,e){return this.convert(a,this.workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this.workingColorSpace)}},ua={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qe={r:0,g:0,b:0},Lt={h:0,s:0,l:0},Ur={h:0,s:0,l:0};function In(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}function zr(a,e){return e.r=a.r,e.g=a.g,e.b=a.b,e}class Pe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=lt.workingColorSpace){return this.r=e,this.g=t,this.b=i,lt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=lt.workingColorSpace){if(e=Ln(e,1),t=nt(t,0,1),i=nt(i,0,1),t===0)this.r=this.g=this.b=i;else{const n=i<=.5?i*(1+t):i+t-i*t,o=2*i-n;this.r=In(o,n,e+1/3),this.g=In(o,n,e),this.b=In(o,n,e-1/3)}return lt.toWorkingColorSpace(this,r),this}setStyle(e,t=Rt){function i(n){n!==void 0&&parseFloat(n)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let n;const o=r[1],s=r[2];switch(o){case"rgb":case"rgba":if(n=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(255,parseInt(n[1],10))/255,this.g=Math.min(255,parseInt(n[2],10))/255,this.b=Math.min(255,parseInt(n[3],10))/255,lt.toWorkingColorSpace(this,t),i(n[4]),this;if(n=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(100,parseInt(n[1],10))/100,this.g=Math.min(100,parseInt(n[2],10))/100,this.b=Math.min(100,parseInt(n[3],10))/100,lt.toWorkingColorSpace(this,t),i(n[4]),this;break;case"hsl":case"hsla":if(n=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)){const l=parseFloat(n[1])/360,c=parseFloat(n[2])/100,h=parseFloat(n[3])/100;return i(n[4]),this.setHSL(l,c,h,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const n=r[1],o=n.length;if(o===3)return this.r=parseInt(n.charAt(0)+n.charAt(0),16)/255,this.g=parseInt(n.charAt(1)+n.charAt(1),16)/255,this.b=parseInt(n.charAt(2)+n.charAt(2),16)/255,lt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(n.charAt(0)+n.charAt(1),16)/255,this.g=parseInt(n.charAt(2)+n.charAt(3),16)/255,this.b=parseInt(n.charAt(4)+n.charAt(5),16)/255,lt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Rt){const i=ua[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fi(e.r),this.g=fi(e.g),this.b=fi(e.b),this}copyLinearToSRGB(e){return this.r=Nr(e.r),this.g=Nr(e.g),this.b=Nr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return lt.fromWorkingColorSpace(zr(this,qe),e),nt(qe.r*255,0,255)<<16^nt(qe.g*255,0,255)<<8^nt(qe.b*255,0,255)<<0}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.fromWorkingColorSpace(zr(this,qe),t);const i=qe.r,r=qe.g,n=qe.b,o=Math.max(i,r,n),s=Math.min(i,r,n);let l,c;const h=(s+o)/2;if(s===o)l=0,c=0;else{const d=o-s;switch(c=h<=.5?d/(o+s):d/(2-o-s),o){case i:l=(r-n)/d+(r<n?6:0);break;case r:l=(n-i)/d+2;break;case n:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=lt.workingColorSpace){return lt.fromWorkingColorSpace(zr(this,qe),t),e.r=qe.r,e.g=qe.g,e.b=qe.b,e}getStyle(e=Rt){return lt.fromWorkingColorSpace(zr(this,qe),e),e!==Rt?`color(${e} ${qe.r} ${qe.g} ${qe.b})`:`rgb(${qe.r*255|0},${qe.g*255|0},${qe.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(Lt),Lt.h+=e,Lt.s+=t,Lt.l+=i,this.setHSL(Lt.h,Lt.s,Lt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Lt),e.getHSL(Ur);const i=hr(Lt.h,Ur.h,t),r=hr(Lt.s,Ur.s,t),n=hr(Lt.l,Ur.l,t);return this.setHSL(i,r,n),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Pe.NAMES=ua;let Ii;class da{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ii===void 0&&(Ii=ur("canvas")),Ii.width=e.width,Ii.height=e.height;const i=Ii.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ii}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ur("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),n=r.data;for(let o=0;o<n.length;o++)n[o]=fi(n[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(fi(t[i]/255)*255):t[i]=fi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class pa{constructor(e=null){this.isSource=!0,this.uuid=Ct(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let n;if(Array.isArray(r)){n=[];for(let o=0,s=r.length;o<s;o++)r[o].isDataTexture?n.push(Nn(r[o].image)):n.push(Nn(r[o]))}else n=Nn(r);i.url=n}return t||(e.images[this.uuid]=i),i}}function Nn(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?da.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $l=0;class st extends ei{constructor(e=st.DEFAULT_IMAGE,t=st.DEFAULT_MAPPING,i=St,r=St,n=ft,o=Ci,s=wt,l=ui,c=st.DEFAULT_ANISOTROPY,h=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$l++}),this.uuid=Ct(),this.name="",this.source=new pa(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=n,this.minFilter=o,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ns)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cr:e.x=e.x-Math.floor(e.x);break;case St:e.x=e.x<0?0:1;break;case Lr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cr:e.y=e.y-Math.floor(e.y);break;case St:e.y=e.y<0?0:1;break;case Lr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}st.DEFAULT_IMAGE=null,st.DEFAULT_MAPPING=Ns,st.DEFAULT_ANISOTROPY=1;class Be{constructor(e=0,t=0,i=0,r=1){Be.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,n=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*n,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*n,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*n,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*n,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,n;const o=e.elements,s=o[0],l=o[4],c=o[8],h=o[1],d=o[5],u=o[9],f=o[2],g=o[6],p=o[10];if(Math.abs(l-h)<.01&&Math.abs(c-f)<.01&&Math.abs(u-g)<.01){if(Math.abs(l+h)<.1&&Math.abs(c+f)<.1&&Math.abs(u+g)<.1&&Math.abs(s+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(s+1)/2,w=(d+1)/2,M=(p+1)/2,b=(l+h)/4,E=(c+f)/4,C=(u+g)/4;return y>w&&y>M?y<.01?(i=0,r=.707106781,n=.707106781):(i=Math.sqrt(y),r=b/i,n=E/i):w>M?w<.01?(i=.707106781,r=0,n=.707106781):(r=Math.sqrt(w),i=b/r,n=C/r):M<.01?(i=.707106781,r=.707106781,n=0):(n=Math.sqrt(M),i=E/n,r=C/n),this.set(i,r,n,t),this}let m=Math.sqrt((g-u)*(g-u)+(c-f)*(c-f)+(h-l)*(h-l));return Math.abs(m)<.001&&(m=1),this.x=(g-u)/m,this.y=(c-f)/m,this.z=(h-l)/m,this.w=Math.acos((s+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gi extends ei{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Be(0,0,e,t),this.scissorTest=!1,this.viewport=new Be(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new st(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:ft,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new pa(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ma extends st{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=St,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ec extends st{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=St,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class It{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,n,o,s){let l=i[r+0],c=i[r+1],h=i[r+2],d=i[r+3];const u=n[o+0],f=n[o+1],g=n[o+2],p=n[o+3];if(s===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(s===1){e[t+0]=u,e[t+1]=f,e[t+2]=g,e[t+3]=p;return}if(d!==p||l!==u||c!==f||h!==g){let m=1-s;const y=l*u+c*f+h*g+d*p,w=y>=0?1:-1,M=1-y*y;if(M>Number.EPSILON){const E=Math.sqrt(M),C=Math.atan2(E,y*w);m=Math.sin(m*C)/E,s=Math.sin(s*C)/E}const b=s*w;if(l=l*m+u*b,c=c*m+f*b,h=h*m+g*b,d=d*m+p*b,m===1-s){const E=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=E,c*=E,h*=E,d*=E}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,n,o){const s=i[r],l=i[r+1],c=i[r+2],h=i[r+3],d=n[o],u=n[o+1],f=n[o+2],g=n[o+3];return e[t]=s*g+h*d+l*f-c*u,e[t+1]=l*g+h*u+c*d-s*f,e[t+2]=c*g+h*f+s*u-l*d,e[t+3]=h*g-s*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,n=e._z,o=e._order,s=Math.cos,l=Math.sin,c=s(i/2),h=s(r/2),d=s(n/2),u=l(i/2),f=l(r/2),g=l(n/2);switch(o){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],n=t[8],o=t[1],s=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+s+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(n-c)*f,this._z=(o-r)*f}else if(i>s&&i>d){const f=2*Math.sqrt(1+i-s-d);this._w=(h-l)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(n+c)/f}else if(s>d){const f=2*Math.sqrt(1+s-i-d);this._w=(n-c)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-i-s);this._w=(o-r)/f,this._x=(n+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,n=e._z,o=e._w,s=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*s+r*c-n*l,this._y=r*h+o*l+n*s-i*c,this._z=n*h+o*c+i*l-r*s,this._w=o*h-i*s-r*l-n*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,n=this._z,o=this._w;let s=o*e._w+i*e._x+r*e._y+n*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=i,this._y=r,this._z=n,this;const l=1-s*s;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*n+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,s),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=o*d+this._w*u,this._x=i*d+this._x*u,this._y=r*d+this._y*u,this._z=n*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),n=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(n),i*Math.cos(n),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,i=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6]*r,this.y=n[1]*t+n[4]*i+n[7]*r,this.z=n[2]*t+n[5]*i+n[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,n=e.elements,o=1/(n[3]*t+n[7]*i+n[11]*r+n[15]);return this.x=(n[0]*t+n[4]*i+n[8]*r+n[12])*o,this.y=(n[1]*t+n[5]*i+n[9]*r+n[13])*o,this.z=(n[2]*t+n[6]*i+n[10]*r+n[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,n=e.x,o=e.y,s=e.z,l=e.w,c=l*t+o*r-s*i,h=l*i+s*t-n*r,d=l*r+n*i-o*t,u=-n*t-o*i-s*r;return this.x=c*l+u*-n+h*-s-d*-o,this.y=h*l+u*-o+d*-n-c*-s,this.z=d*l+u*-s+c*-o-h*-n,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,n=e.elements;return this.x=n[0]*t+n[4]*i+n[8]*r,this.y=n[1]*t+n[5]*i+n[9]*r,this.z=n[2]*t+n[6]*i+n[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,n=e.z,o=t.x,s=t.y,l=t.z;return this.x=r*l-n*s,this.y=n*o-i*l,this.z=i*s-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Un.copy(this).projectOnVector(e),this.sub(Un)}reflect(e){return this.sub(Un.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Un=new L,fa=new It;class Ni{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,n=-1/0,o=-1/0,s=-1/0;for(let l=0,c=e.length;l<c;l+=3){const h=e[l],d=e[l+1],u=e[l+2];h<t&&(t=h),d<i&&(i=d),u<r&&(r=u),h>n&&(n=h),d>o&&(o=d),u>s&&(s=u)}return this.min.set(t,i,r),this.max.set(n,o,s),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,n=-1/0,o=-1/0,s=-1/0;for(let l=0,c=e.count;l<c;l++){const h=e.getX(l),d=e.getY(l),u=e.getZ(l);h<t&&(t=h),d<i&&(i=d),u<r&&(r=u),h>n&&(n=h),d>o&&(o=d),u>s&&(s=u)}return this.min.set(t,i,r),this.max.set(n,o,s),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=_i.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const n=i.attributes.position;for(let o=0,s=n.count;o<s;o++)_i.fromBufferAttribute(n,o).applyMatrix4(e.matrixWorld),this.expandByPoint(_i)}else i.boundingBox===null&&i.computeBoundingBox(),zn.copy(i.boundingBox),zn.applyMatrix4(e.matrixWorld),this.union(zn);const r=e.children;for(let n=0,o=r.length;n<o;n++)this.expandByObject(r[n],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,_i),_i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(dr),Or.subVectors(this.max,dr),Ui.subVectors(e.a,dr),zi.subVectors(e.b,dr),Oi.subVectors(e.c,dr),ti.subVectors(zi,Ui),ii.subVectors(Oi,zi),vi.subVectors(Ui,Oi);let t=[0,-ti.z,ti.y,0,-ii.z,ii.y,0,-vi.z,vi.y,ti.z,0,-ti.x,ii.z,0,-ii.x,vi.z,0,-vi.x,-ti.y,ti.x,0,-ii.y,ii.x,0,-vi.y,vi.x,0];return!On(t,Ui,zi,Oi,Or)||(t=[1,0,0,0,1,0,0,0,1],!On(t,Ui,zi,Oi,Or))?!1:(Br.crossVectors(ti,ii),t=[Br.x,Br.y,Br.z],On(t,Ui,zi,Oi,Or))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return _i.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(_i).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Wt=[new L,new L,new L,new L,new L,new L,new L,new L],_i=new L,zn=new Ni,Ui=new L,zi=new L,Oi=new L,ti=new L,ii=new L,vi=new L,dr=new L,Or=new L,Br=new L,xi=new L;function On(a,e,t,i,r){for(let n=0,o=a.length-3;n<=o;n+=3){xi.fromArray(a,n);const s=r.x*Math.abs(xi.x)+r.y*Math.abs(xi.y)+r.z*Math.abs(xi.z),l=e.dot(xi),c=t.dot(xi),h=i.dot(xi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>s)return!1}return!0}const tc=new Ni,pr=new L,Bn=new L;class Bi{constructor(e=new L,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):tc.setFromPoints(e).getCenter(i);let r=0;for(let n=0,o=e.length;n<o;n++)r=Math.max(r,i.distanceToSquared(e[n]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pr.subVectors(e,this.center);const t=pr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(pr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bn.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pr.copy(e.center).add(Bn)),this.expandByPoint(pr.copy(e.center).sub(Bn))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const jt=new L,Fn=new L,Fr=new L,ri=new L,kn=new L,kr=new L,Hn=new L;class Gn{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=jt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jt.copy(this.direction).multiplyScalar(t).add(this.origin),jt.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Fn.copy(e).add(t).multiplyScalar(.5),Fr.copy(t).sub(e).normalize(),ri.copy(this.origin).sub(Fn);const n=e.distanceTo(t)*.5,o=-this.direction.dot(Fr),s=ri.dot(this.direction),l=-ri.dot(Fr),c=ri.lengthSq(),h=Math.abs(1-o*o);let d,u,f,g;if(h>0)if(d=o*l-s,u=o*s-l,g=n*h,d>=0)if(u>=-g)if(u<=g){const p=1/h;d*=p,u*=p,f=d*(d+o*u+2*s)+u*(o*d+u+2*l)+c}else u=n,d=Math.max(0,-(o*u+s)),f=-d*d+u*(u+2*l)+c;else u=-n,d=Math.max(0,-(o*u+s)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*n+s)),u=d>0?-n:Math.min(Math.max(-n,-l),n),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-n,-l),n),f=u*(u+2*l)+c):(d=Math.max(0,-(o*n+s)),u=d>0?n:Math.min(Math.max(-n,-l),n),f=-d*d+u*(u+2*l)+c);else u=o>0?-n:n,d=Math.max(0,-(o*u+s)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(d).add(this.origin),r&&r.copy(Fr).multiplyScalar(u).add(Fn),f}intersectSphere(e,t){jt.subVectors(e.center,this.origin);const i=jt.dot(this.direction),r=jt.dot(jt)-i*i,n=e.radius*e.radius;if(r>n)return null;const o=Math.sqrt(n-r),s=i-o,l=i+o;return s<0&&l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,n,o,s,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),h>=0?(n=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(n=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||n>r||((n>i||isNaN(i))&&(i=n),(o<r||isNaN(r))&&(r=o),d>=0?(s=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(s=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||s>r)||((s>i||i!==i)&&(i=s),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,jt)!==null}intersectTriangle(e,t,i,r,n){kn.subVectors(t,e),kr.subVectors(i,e),Hn.crossVectors(kn,kr);let o=this.direction.dot(Hn),s;if(o>0){if(r)return null;s=1}else if(o<0)s=-1,o=-o;else return null;ri.subVectors(this.origin,e);const l=s*this.direction.dot(kr.crossVectors(ri,kr));if(l<0)return null;const c=s*this.direction.dot(kn.cross(ri));if(c<0||l+c>o)return null;const h=-s*ri.dot(Hn);return h<0?null:this.at(h/o,n)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ce{constructor(){Ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,n,o,s,l,c,h,d,u,f,g,p,m){const y=this.elements;return y[0]=e,y[4]=t,y[8]=i,y[12]=r,y[1]=n,y[5]=o,y[9]=s,y[13]=l,y[2]=c,y[6]=h,y[10]=d,y[14]=u,y[3]=f,y[7]=g,y[11]=p,y[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ce().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Fi.setFromMatrixColumn(e,0).length(),n=1/Fi.setFromMatrixColumn(e,1).length(),o=1/Fi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*n,t[5]=i[5]*n,t[6]=i[6]*n,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,n=e.z,o=Math.cos(i),s=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(n),d=Math.sin(n);if(e.order==="XYZ"){const u=o*h,f=o*d,g=s*h,p=s*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=u-p*c,t[9]=-s*l,t[2]=p-u*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const u=l*h,f=l*d,g=c*h,p=c*d;t[0]=u+p*s,t[4]=g*s-f,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-s,t[2]=f*s-g,t[6]=p+u*s,t[10]=o*l}else if(e.order==="ZXY"){const u=l*h,f=l*d,g=c*h,p=c*d;t[0]=u-p*s,t[4]=-o*d,t[8]=g+f*s,t[1]=f+g*s,t[5]=o*h,t[9]=p-u*s,t[2]=-o*c,t[6]=s,t[10]=o*l}else if(e.order==="ZYX"){const u=o*h,f=o*d,g=s*h,p=s*d;t[0]=l*h,t[4]=g*c-f,t[8]=u*c+p,t[1]=l*d,t[5]=p*c+u,t[9]=f*c-g,t[2]=-c,t[6]=s*l,t[10]=o*l}else if(e.order==="YZX"){const u=o*l,f=o*c,g=s*l,p=s*c;t[0]=l*h,t[4]=p-u*d,t[8]=g*d+f,t[1]=d,t[5]=o*h,t[9]=-s*h,t[2]=-c*h,t[6]=f*d+g,t[10]=u-p*d}else if(e.order==="XZY"){const u=o*l,f=o*c,g=s*l,p=s*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+p,t[5]=o*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=s*h,t[10]=p*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ic,e,rc)}lookAt(e,t,i){const r=this.elements;return gt.subVectors(e,t),gt.lengthSq()===0&&(gt.z=1),gt.normalize(),ni.crossVectors(i,gt),ni.lengthSq()===0&&(Math.abs(i.z)===1?gt.x+=1e-4:gt.z+=1e-4,gt.normalize(),ni.crossVectors(i,gt)),ni.normalize(),Hr.crossVectors(gt,ni),r[0]=ni.x,r[4]=Hr.x,r[8]=gt.x,r[1]=ni.y,r[5]=Hr.y,r[9]=gt.y,r[2]=ni.z,r[6]=Hr.z,r[10]=gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,n=this.elements,o=i[0],s=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],g=i[2],p=i[6],m=i[10],y=i[14],w=i[3],M=i[7],b=i[11],E=i[15],C=r[0],N=r[4],v=r[8],T=r[12],P=r[1],X=r[5],J=r[9],U=r[13],R=r[2],G=r[6],Z=r[10],$=r[14],W=r[3],Q=r[7],q=r[11],pe=r[15];return n[0]=o*C+s*P+l*R+c*W,n[4]=o*N+s*X+l*G+c*Q,n[8]=o*v+s*J+l*Z+c*q,n[12]=o*T+s*U+l*$+c*pe,n[1]=h*C+d*P+u*R+f*W,n[5]=h*N+d*X+u*G+f*Q,n[9]=h*v+d*J+u*Z+f*q,n[13]=h*T+d*U+u*$+f*pe,n[2]=g*C+p*P+m*R+y*W,n[6]=g*N+p*X+m*G+y*Q,n[10]=g*v+p*J+m*Z+y*q,n[14]=g*T+p*U+m*$+y*pe,n[3]=w*C+M*P+b*R+E*W,n[7]=w*N+M*X+b*G+E*Q,n[11]=w*v+M*J+b*Z+E*q,n[15]=w*T+M*U+b*$+E*pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],n=e[12],o=e[1],s=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],p=e[7],m=e[11],y=e[15];return g*(+n*l*d-r*c*d-n*s*u+i*c*u+r*s*f-i*l*f)+p*(+t*l*f-t*c*u+n*o*u-r*o*f+r*c*h-n*l*h)+m*(+t*c*d-t*s*f-n*o*d+i*o*f+n*s*h-i*c*h)+y*(-r*s*h-t*l*d+t*s*u+r*o*d-i*o*u+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],o=e[4],s=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],p=e[13],m=e[14],y=e[15],w=d*m*c-p*u*c+p*l*f-s*m*f-d*l*y+s*u*y,M=g*u*c-h*m*c-g*l*f+o*m*f+h*l*y-o*u*y,b=h*p*c-g*d*c+g*s*f-o*p*f-h*s*y+o*d*y,E=g*d*l-h*p*l-g*s*u+o*p*u+h*s*m-o*d*m,C=t*w+i*M+r*b+n*E;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/C;return e[0]=w*N,e[1]=(p*u*n-d*m*n-p*r*f+i*m*f+d*r*y-i*u*y)*N,e[2]=(s*m*n-p*l*n+p*r*c-i*m*c-s*r*y+i*l*y)*N,e[3]=(d*l*n-s*u*n-d*r*c+i*u*c+s*r*f-i*l*f)*N,e[4]=M*N,e[5]=(h*m*n-g*u*n+g*r*f-t*m*f-h*r*y+t*u*y)*N,e[6]=(g*l*n-o*m*n-g*r*c+t*m*c+o*r*y-t*l*y)*N,e[7]=(o*u*n-h*l*n+h*r*c-t*u*c-o*r*f+t*l*f)*N,e[8]=b*N,e[9]=(g*d*n-h*p*n-g*i*f+t*p*f+h*i*y-t*d*y)*N,e[10]=(o*p*n-g*s*n+g*i*c-t*p*c-o*i*y+t*s*y)*N,e[11]=(h*s*n-o*d*n-h*i*c+t*d*c+o*i*f-t*s*f)*N,e[12]=E*N,e[13]=(h*p*r-g*d*r+g*i*u-t*p*u-h*i*m+t*d*m)*N,e[14]=(g*s*r-o*p*r-g*i*l+t*p*l+o*i*m-t*s*m)*N,e[15]=(o*d*r-h*s*r+h*i*l-t*d*l-o*i*u+t*s*u)*N,this}scale(e){const t=this.elements,i=e.x,r=e.y,n=e.z;return t[0]*=i,t[4]*=r,t[8]*=n,t[1]*=i,t[5]*=r,t[9]*=n,t[2]*=i,t[6]*=r,t[10]*=n,t[3]*=i,t[7]*=r,t[11]*=n,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),n=1-i,o=e.x,s=e.y,l=e.z,c=n*o,h=n*s;return this.set(c*o+i,c*s-r*l,c*l+r*s,0,c*s+r*l,h*s+i,h*l-r*o,0,c*l-r*s,h*l+r*o,n*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,n,o){return this.set(1,i,n,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,n=t._x,o=t._y,s=t._z,l=t._w,c=n+n,h=o+o,d=s+s,u=n*c,f=n*h,g=n*d,p=o*h,m=o*d,y=s*d,w=l*c,M=l*h,b=l*d,E=i.x,C=i.y,N=i.z;return r[0]=(1-(p+y))*E,r[1]=(f+b)*E,r[2]=(g-M)*E,r[3]=0,r[4]=(f-b)*C,r[5]=(1-(u+y))*C,r[6]=(m+w)*C,r[7]=0,r[8]=(g+M)*N,r[9]=(m-w)*N,r[10]=(1-(u+p))*N,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let n=Fi.set(r[0],r[1],r[2]).length();const o=Fi.set(r[4],r[5],r[6]).length(),s=Fi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(n=-n),e.x=r[12],e.y=r[13],e.z=r[14],Dt.copy(this);const l=1/n,c=1/o,h=1/s;return Dt.elements[0]*=l,Dt.elements[1]*=l,Dt.elements[2]*=l,Dt.elements[4]*=c,Dt.elements[5]*=c,Dt.elements[6]*=c,Dt.elements[8]*=h,Dt.elements[9]*=h,Dt.elements[10]*=h,t.setFromRotationMatrix(Dt),i.x=n,i.y=o,i.z=s,this}makePerspective(e,t,i,r,n,o){const s=this.elements,l=2*n/(t-e),c=2*n/(i-r),h=(t+e)/(t-e),d=(i+r)/(i-r),u=-(o+n)/(o-n),f=-2*o*n/(o-n);return s[0]=l,s[4]=0,s[8]=h,s[12]=0,s[1]=0,s[5]=c,s[9]=d,s[13]=0,s[2]=0,s[6]=0,s[10]=u,s[14]=f,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,i,r,n,o){const s=this.elements,l=1/(t-e),c=1/(i-r),h=1/(o-n),d=(t+e)*l,u=(i+r)*c,f=(o+n)*h;return s[0]=2*l,s[4]=0,s[8]=0,s[12]=-d,s[1]=0,s[5]=2*c,s[9]=0,s[13]=-u,s[2]=0,s[6]=0,s[10]=-2*h,s[14]=-f,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Fi=new L,Dt=new Ce,ic=new L(0,0,0),rc=new L(1,1,1),ni=new L,Hr=new L,gt=new L,ga=new Ce,_a=new It;class ln{constructor(e=0,t=0,i=0,r=ln.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,n=r[0],o=r[4],s=r[8],l=r[1],c=r[5],h=r[9],d=r[2],u=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(nt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,n)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(s,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,n),this._z=0);break;case"ZXY":this._x=Math.asin(nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,n));break;case"ZYX":this._y=Math.asin(-nt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,n)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,n)):(this._x=0,this._y=Math.atan2(s,f));break;case"XZY":this._z=Math.asin(-nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(s,n)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ga.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ga,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _a.setFromEuler(this),this.setFromQuaternion(_a,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ln.DEFAULT_ORDER="XYZ";class va{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let nc=0;const xa=new L,ki=new It,Xt=new Ce,Gr=new L,mr=new L,sc=new L,ac=new It,ya=new L(1,0,0),Ma=new L(0,1,0),ba=new L(0,0,1),oc={type:"added"},Sa={type:"removed"};class Ve extends ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nc++}),this.uuid=Ct(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ve.DEFAULT_UP.clone();const e=new L,t=new ln,i=new It,r=new L(1,1,1);function n(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(n),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ce},normalMatrix:{value:new xt}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=Ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new va,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ki.setFromAxisAngle(e,t),this.quaternion.multiply(ki),this}rotateOnWorldAxis(e,t){return ki.setFromAxisAngle(e,t),this.quaternion.premultiply(ki),this}rotateX(e){return this.rotateOnAxis(ya,e)}rotateY(e){return this.rotateOnAxis(Ma,e)}rotateZ(e){return this.rotateOnAxis(ba,e)}translateOnAxis(e,t){return xa.copy(e).applyQuaternion(this.quaternion),this.position.add(xa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ya,e)}translateY(e){return this.translateOnAxis(Ma,e)}translateZ(e){return this.translateOnAxis(ba,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xt.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Gr.copy(e):Gr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xt.lookAt(mr,Gr,this.up):Xt.lookAt(Gr,mr,this.up),this.quaternion.setFromRotationMatrix(Xt),r&&(Xt.extractRotation(r.matrixWorld),ki.setFromRotationMatrix(Xt),this.quaternion.premultiply(ki.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(oc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sa)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Sa)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Xt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const n=this.children[i].getObjectByProperty(e,t);if(n!==void 0)return n}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,n=this.children.length;r<n;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,e,sc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,ac,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const n=t[i];(n.matrixWorldAutoUpdate===!0||e===!0)&&n.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let n=0,o=r.length;n<o;n++){const s=r[n];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function n(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=n(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];n(e.shapes,d)}else n(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(n(e.materials,this.material[l]));r.material=s}else r.material=n(e.materials,this.material);if(this.children.length>0){r.children=[];for(let s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];r.animations.push(n(e.animations,l))}}if(t){const s=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),g=o(e.nodes);s.length>0&&(i.geometries=s),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(s){const l=[];for(const c in s){const h=s[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ve.DEFAULT_UP=new L(0,1,0),Ve.DEFAULT_MATRIX_AUTO_UPDATE=!0,Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pt=new L,qt=new L,Vn=new L,Yt=new L,Hi=new L,Gi=new L,wa=new L,Wn=new L,jn=new L,Xn=new L;class Kt{constructor(e=new L,t=new L,i=new L){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Pt.subVectors(e,t),r.cross(Pt);const n=r.lengthSq();return n>0?r.multiplyScalar(1/Math.sqrt(n)):r.set(0,0,0)}static getBarycoord(e,t,i,r,n){Pt.subVectors(r,t),qt.subVectors(i,t),Vn.subVectors(e,t);const o=Pt.dot(Pt),s=Pt.dot(qt),l=Pt.dot(Vn),c=qt.dot(qt),h=qt.dot(Vn),d=o*c-s*s;if(d===0)return n.set(-2,-1,-1);const u=1/d,f=(c*l-s*h)*u,g=(o*h-s*l)*u;return n.set(1-f-g,g,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Yt),Yt.x>=0&&Yt.y>=0&&Yt.x+Yt.y<=1}static getUV(e,t,i,r,n,o,s,l){return this.getBarycoord(e,t,i,r,Yt),l.set(0,0),l.addScaledVector(n,Yt.x),l.addScaledVector(o,Yt.y),l.addScaledVector(s,Yt.z),l}static isFrontFacing(e,t,i,r){return Pt.subVectors(i,t),qt.subVectors(e,t),Pt.cross(qt).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pt.subVectors(this.c,this.b),qt.subVectors(this.a,this.b),Pt.cross(qt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Kt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,n){return Kt.getUV(e,this.a,this.b,this.c,t,i,r,n)}containsPoint(e){return Kt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,n=this.c;let o,s;Hi.subVectors(r,i),Gi.subVectors(n,i),Wn.subVectors(e,i);const l=Hi.dot(Wn),c=Gi.dot(Wn);if(l<=0&&c<=0)return t.copy(i);jn.subVectors(e,r);const h=Hi.dot(jn),d=Gi.dot(jn);if(h>=0&&d<=h)return t.copy(r);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(Hi,o);Xn.subVectors(e,n);const f=Hi.dot(Xn),g=Gi.dot(Xn);if(g>=0&&f<=g)return t.copy(n);const p=f*c-l*g;if(p<=0&&c>=0&&g<=0)return s=c/(c-g),t.copy(i).addScaledVector(Gi,s);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return wa.subVectors(n,r),s=(d-h)/(d-h+(f-g)),t.copy(r).addScaledVector(wa,s);const y=1/(m+p+u);return o=p*y,s=u*y,t.copy(i).addScaledVector(Hi,o).addScaledVector(Gi,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let lc=0;class si extends ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lc++}),this.uuid=Ct(),this.name="",this.type="Material",this.blending=wi,this.side=kt,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Ds,this.blendDst=Ps,this.blendEquation=Ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=fn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=En,this.stencilZFail=En,this.stencilZPass=En,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==wi&&(i.blending=this.blending),this.side!==kt&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(n){const o=[];for(const s in n){const l=n[s];delete l.metadata,o.push(l)}return o}if(t){const n=r(e.textures),o=r(e.images);n.length>0&&(i.textures=n),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let n=0;n!==r;++n)i[n]=t[n].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class qn extends si{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Rs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const je=new L,Vr=new Re;class _t{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=An,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,n=this.itemSize;r<n;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Vr.fromBufferAttribute(this,t),Vr.applyMatrix3(e),this.setXY(t,Vr.x,Vr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)je.fromBufferAttribute(this,t),je.applyMatrix3(e),this.setXYZ(t,je.x,je.y,je.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)je.fromBufferAttribute(this,t),je.applyMatrix4(e),this.setXYZ(t,je.x,je.y,je.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)je.fromBufferAttribute(this,t),je.applyNormalMatrix(e),this.setXYZ(t,je.x,je.y,je.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)je.fromBufferAttribute(this,t),je.transformDirection(e),this.setXYZ(t,je.x,je.y,je.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Oe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Oe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Oe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Oe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Oe(t,this.array),i=Oe(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Oe(t,this.array),i=Oe(i,this.array),r=Oe(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,n){return e*=this.itemSize,this.normalized&&(t=Oe(t,this.array),i=Oe(i,this.array),r=Oe(r,this.array),n=Oe(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=n,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==An&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Ta extends _t{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ea extends _t{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Zt extends _t{constructor(e,t,i){super(new Float32Array(e),t,i)}}let cc=0;const Tt=new Ce,Yn=new Ve,Vi=new L,vt=new Ni,fr=new Ni,$e=new L;class zt extends ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cc++}),this.uuid=Ct(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ha(e)?Ea:Ta)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const n=new xt().getNormalMatrix(e);i.applyNormalMatrix(n),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tt.makeRotationFromQuaternion(e),this.applyMatrix4(Tt),this}rotateX(e){return Tt.makeRotationX(e),this.applyMatrix4(Tt),this}rotateY(e){return Tt.makeRotationY(e),this.applyMatrix4(Tt),this}rotateZ(e){return Tt.makeRotationZ(e),this.applyMatrix4(Tt),this}translate(e,t,i){return Tt.makeTranslation(e,t,i),this.applyMatrix4(Tt),this}scale(e,t,i){return Tt.makeScale(e,t,i),this.applyMatrix4(Tt),this}lookAt(e){return Yn.lookAt(e),Yn.updateMatrix(),this.applyMatrix4(Yn.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vi).negate(),this.translate(Vi.x,Vi.y,Vi.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const n=e[i];t.push(n.x,n.y,n.z||0)}return this.setAttribute("position",new Zt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ni);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const n=t[i];vt.setFromBufferAttribute(n),this.morphTargetsRelative?($e.addVectors(this.boundingBox.min,vt.min),this.boundingBox.expandByPoint($e),$e.addVectors(this.boundingBox.max,vt.max),this.boundingBox.expandByPoint($e)):(this.boundingBox.expandByPoint(vt.min),this.boundingBox.expandByPoint(vt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){const i=this.boundingSphere.center;if(vt.setFromBufferAttribute(e),t)for(let n=0,o=t.length;n<o;n++){const s=t[n];fr.setFromBufferAttribute(s),this.morphTargetsRelative?($e.addVectors(vt.min,fr.min),vt.expandByPoint($e),$e.addVectors(vt.max,fr.max),vt.expandByPoint($e)):(vt.expandByPoint(fr.min),vt.expandByPoint(fr.max))}vt.getCenter(i);let r=0;for(let n=0,o=e.count;n<o;n++)$e.fromBufferAttribute(e,n),r=Math.max(r,i.distanceToSquared($e));if(t)for(let n=0,o=t.length;n<o;n++){const s=t[n],l=this.morphTargetsRelative;for(let c=0,h=s.count;c<h;c++)$e.fromBufferAttribute(s,c),l&&(Vi.fromBufferAttribute(e,c),$e.add(Vi)),r=Math.max(r,i.distanceToSquared($e))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,n=t.normal.array,o=t.uv.array,s=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _t(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let P=0;P<s;P++)c[P]=new L,h[P]=new L;const d=new L,u=new L,f=new L,g=new Re,p=new Re,m=new Re,y=new L,w=new L;function M(P,X,J){d.fromArray(r,P*3),u.fromArray(r,X*3),f.fromArray(r,J*3),g.fromArray(o,P*2),p.fromArray(o,X*2),m.fromArray(o,J*2),u.sub(d),f.sub(d),p.sub(g),m.sub(g);const U=1/(p.x*m.y-m.x*p.y);isFinite(U)&&(y.copy(u).multiplyScalar(m.y).addScaledVector(f,-p.y).multiplyScalar(U),w.copy(f).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(U),c[P].add(y),c[X].add(y),c[J].add(y),h[P].add(w),h[X].add(w),h[J].add(w))}let b=this.groups;b.length===0&&(b=[{start:0,count:i.length}]);for(let P=0,X=b.length;P<X;++P){const J=b[P],U=J.start,R=J.count;for(let G=U,Z=U+R;G<Z;G+=3)M(i[G+0],i[G+1],i[G+2])}const E=new L,C=new L,N=new L,v=new L;function T(P){N.fromArray(n,P*3),v.copy(N);const X=c[P];E.copy(X),E.sub(N.multiplyScalar(N.dot(X))).normalize(),C.crossVectors(v,X);const J=C.dot(h[P])<0?-1:1;l[P*4]=E.x,l[P*4+1]=E.y,l[P*4+2]=E.z,l[P*4+3]=J}for(let P=0,X=b.length;P<X;++P){const J=b[P],U=J.start,R=J.count;for(let G=U,Z=U+R;G<Z;G+=3)T(i[G+0]),T(i[G+1]),T(i[G+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new _t(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);const r=new L,n=new L,o=new L,s=new L,l=new L,c=new L,h=new L,d=new L;if(e)for(let u=0,f=e.count;u<f;u+=3){const g=e.getX(u+0),p=e.getX(u+1),m=e.getX(u+2);r.fromBufferAttribute(t,g),n.fromBufferAttribute(t,p),o.fromBufferAttribute(t,m),h.subVectors(o,n),d.subVectors(r,n),h.cross(d),s.fromBufferAttribute(i,g),l.fromBufferAttribute(i,p),c.fromBufferAttribute(i,m),s.add(h),l.add(h),c.add(h),i.setXYZ(g,s.x,s.y,s.z),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)r.fromBufferAttribute(t,u+0),n.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,n),d.subVectors(r,n),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)$e.fromBufferAttribute(e,t),$e.normalize(),e.setXYZ(t,$e.x,$e.y,$e.z)}toNonIndexed(){function e(s,l){const c=s.array,h=s.itemSize,d=s.normalized,u=new c.constructor(l.length*h);let f=0,g=0;for(let p=0,m=l.length;p<m;p++){s.isInterleavedBufferAttribute?f=l[p]*s.data.stride+s.offset:f=l[p]*h;for(let y=0;y<h;y++)u[g++]=c[f++]}return new _t(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new zt,i=this.index.array,r=this.attributes;for(const s in r){const l=r[s],c=e(l,i);t.setAttribute(s,c)}const n=this.morphAttributes;for(const s in n){const l=[],c=n[s];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=e(u,i);l.push(f)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,l=o.length;s<l;s++){const c=o[s];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let n=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(r[l]=h,n=!0)}n&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const n=e.morphAttributes;for(const c in n){const h=[],d=n[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Aa=new Ce,Wi=new Gn,Zn=new Bi,gr=new L,_r=new L,vr=new L,Jn=new L,Wr=new L,jr=new Re,Xr=new Re,qr=new Re,Kn=new L,Yr=new L;class Et extends Ve{constructor(e=new zt,t=new qn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,n=i.length;r<n;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,n=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const s=this.morphTargetInfluences;if(n&&s){Wr.set(0,0,0);for(let l=0,c=n.length;l<c;l++){const h=s[l],d=n[l];h!==0&&(Jn.fromBufferAttribute(d,e),o?Wr.addScaledVector(Jn,h):Wr.addScaledVector(Jn.sub(t),h))}t.add(Wr)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const i=this.geometry,r=this.material,n=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Zn.copy(i.boundingSphere),Zn.applyMatrix4(n),e.ray.intersectsSphere(Zn)===!1)||(Aa.copy(n).invert(),Wi.copy(e.ray).applyMatrix4(Aa),i.boundingBox!==null&&Wi.intersectsBox(i.boundingBox)===!1))return;let o;const s=i.index,l=i.attributes.position,c=i.attributes.uv,h=i.attributes.uv2,d=i.groups,u=i.drawRange;if(s!==null)if(Array.isArray(r))for(let f=0,g=d.length;f<g;f++){const p=d[f],m=r[p.materialIndex],y=Math.max(p.start,u.start),w=Math.min(s.count,Math.min(p.start+p.count,u.start+u.count));for(let M=y,b=w;M<b;M+=3){const E=s.getX(M),C=s.getX(M+1),N=s.getX(M+2);o=Zr(this,m,e,Wi,c,h,E,C,N),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const f=Math.max(0,u.start),g=Math.min(s.count,u.start+u.count);for(let p=f,m=g;p<m;p+=3){const y=s.getX(p),w=s.getX(p+1),M=s.getX(p+2);o=Zr(this,r,e,Wi,c,h,y,w,M),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let f=0,g=d.length;f<g;f++){const p=d[f],m=r[p.materialIndex],y=Math.max(p.start,u.start),w=Math.min(l.count,Math.min(p.start+p.count,u.start+u.count));for(let M=y,b=w;M<b;M+=3){const E=M,C=M+1,N=M+2;o=Zr(this,m,e,Wi,c,h,E,C,N),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const f=Math.max(0,u.start),g=Math.min(l.count,u.start+u.count);for(let p=f,m=g;p<m;p+=3){const y=p,w=p+1,M=p+2;o=Zr(this,r,e,Wi,c,h,y,w,M),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}}}function hc(a,e,t,i,r,n,o,s){let l;if(e.side===mt?l=i.intersectTriangle(o,n,r,!0,s):l=i.intersectTriangle(r,n,o,e.side===kt,s),l===null)return null;Yr.copy(s),Yr.applyMatrix4(a.matrixWorld);const c=t.ray.origin.distanceTo(Yr);return c<t.near||c>t.far?null:{distance:c,point:Yr.clone(),object:a}}function Zr(a,e,t,i,r,n,o,s,l){a.getVertexPosition(o,gr),a.getVertexPosition(s,_r),a.getVertexPosition(l,vr);const c=hc(a,e,t,i,gr,_r,vr,Kn);if(c){r&&(jr.fromBufferAttribute(r,o),Xr.fromBufferAttribute(r,s),qr.fromBufferAttribute(r,l),c.uv=Kt.getUV(Kn,gr,_r,vr,jr,Xr,qr,new Re)),n&&(jr.fromBufferAttribute(n,o),Xr.fromBufferAttribute(n,s),qr.fromBufferAttribute(n,l),c.uv2=Kt.getUV(Kn,gr,_r,vr,jr,Xr,qr,new Re));const h={a:o,b:s,c:l,normal:new L,materialIndex:0};Kt.getNormal(gr,_r,vr,h.normal),c.face=h}return c}class ir extends zt{constructor(e=1,t=1,i=1,r=1,n=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:n,depthSegments:o};const s=this;r=Math.floor(r),n=Math.floor(n),o=Math.floor(o);const l=[],c=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,i,t,e,o,n,0),g("z","y","x",1,-1,i,t,-e,o,n,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,n,4),g("x","y","z",-1,-1,e,t,-i,r,n,5),this.setIndex(l),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(h,3)),this.setAttribute("uv",new Zt(d,2));function g(p,m,y,w,M,b,E,C,N,v,T){const P=b/N,X=E/v,J=b/2,U=E/2,R=C/2,G=N+1,Z=v+1;let $=0,W=0;const Q=new L;for(let q=0;q<Z;q++){const pe=q*X-U;for(let z=0;z<G;z++){const j=z*P-J;Q[p]=j*w,Q[m]=pe*M,Q[y]=R,c.push(Q.x,Q.y,Q.z),Q[p]=0,Q[m]=0,Q[y]=C>0?1:-1,h.push(Q.x,Q.y,Q.z),d.push(z/N),d.push(1-q/v),$+=1}}for(let q=0;q<v;q++)for(let pe=0;pe<N;pe++){const z=u+pe+G*q,j=u+pe+G*(q+1),ie=u+(pe+1)+G*(q+1),oe=u+(pe+1)+G*q;l.push(z,j,oe),l.push(j,ie,oe),W+=6}s.addGroup(f,W,T),f+=W,u+=$}}static fromJSON(e){return new ir(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ji(a){const e={};for(const t in a){e[t]={};for(const i in a[t]){const r=a[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function ct(a){const e={};for(let t=0;t<a.length;t++){const i=ji(a[t]);for(const r in i)e[r]=i[r]}return e}function uc(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function Ca(a){return a.getRenderTarget()===null&&a.outputEncoding===Fe?Rt:Rr}const dc={clone:ji,merge:ct};var pc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yi extends si{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pc,this.fragmentShader=mc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ji(e.uniforms),this.uniformsGroups=uc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const n=this.uniforms[r].value;n&&n.isTexture?t.uniforms[r]={type:"t",value:n.toJSON(e).uuid}:n&&n.isColor?t.uniforms[r]={type:"c",value:n.getHex()}:n&&n.isVector2?t.uniforms[r]={type:"v2",value:n.toArray()}:n&&n.isVector3?t.uniforms[r]={type:"v3",value:n.toArray()}:n&&n.isVector4?t.uniforms[r]={type:"v4",value:n.toArray()}:n&&n.isMatrix3?t.uniforms[r]={type:"m3",value:n.toArray()}:n&&n.isMatrix4?t.uniforms[r]={type:"m4",value:n.toArray()}:t.uniforms[r]={value:n}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class La extends Ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class ut extends La{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=cr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(lr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cr*2*Math.atan(Math.tan(lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,n,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=n,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(lr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,n=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;n+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const s=this.filmOffset;s!==0&&(n+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(n,n+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Xi=-90,qi=1;class fc extends Ve{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new ut(Xi,qi,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const n=new ut(Xi,qi,e,t);n.layers=this.layers,n.up.set(0,1,0),n.lookAt(-1,0,0),this.add(n);const o=new ut(Xi,qi,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const s=new ut(Xi,qi,e,t);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(0,-1,0),this.add(s);const l=new ut(Xi,qi,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new ut(Xi,qi,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,n,o,s,l,c]=this.children,h=e.getRenderTarget(),d=e.toneMapping,u=e.xr.enabled;e.toneMapping=Gt,e.xr.enabled=!1;const f=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,n),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,s),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=f,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(h),e.toneMapping=d,e.xr.enabled=u,i.texture.needsPMREMUpdate=!0}}class Da extends st{constructor(e,t,i,r,n,o,s,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ei,super(e,t,i,r,n,o,s,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class gc extends gi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Da(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ft}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ir(5,5,5),n=new yi({name:"CubemapFromEquirect",uniforms:ji(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:mt,blending:Qt});n.uniforms.tEquirect.value=t;const o=new Et(r,n),s=t.minFilter;return t.minFilter===Ci&&(t.minFilter=ft),new fc(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const n=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(n)}}const Qn=new L,_c=new L,vc=new xt;class Mi{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Qn.subVectors(i,t).cross(_c.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(Qn),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const n=-(e.start.dot(this.normal)+this.constant)/r;return n<0||n>1?null:t.copy(i).multiplyScalar(n).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||vc.getNormalMatrix(e),r=this.coplanarPoint(Qn).applyMatrix4(e),n=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(n),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yi=new Bi,Jr=new L;class $n{constructor(e=new Mi,t=new Mi,i=new Mi,r=new Mi,n=new Mi,o=new Mi){this.planes=[e,t,i,r,n,o]}set(e,t,i,r,n,o){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(n),s[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],n=i[1],o=i[2],s=i[3],l=i[4],c=i[5],h=i[6],d=i[7],u=i[8],f=i[9],g=i[10],p=i[11],m=i[12],y=i[13],w=i[14],M=i[15];return t[0].setComponents(s-r,d-l,p-u,M-m).normalize(),t[1].setComponents(s+r,d+l,p+u,M+m).normalize(),t[2].setComponents(s+n,d+c,p+f,M+y).normalize(),t[3].setComponents(s-n,d-c,p-f,M-y).normalize(),t[4].setComponents(s-o,d-h,p-g,M-w).normalize(),t[5].setComponents(s+o,d+h,p+g,M+w).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Yi)}intersectsSprite(e){return Yi.center.set(0,0,0),Yi.radius=.7071067811865476,Yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let n=0;n<6;n++)if(t[n].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Jr.x=r.normal.x>0?e.max.x:e.min.x,Jr.y=r.normal.y>0?e.max.y:e.min.y,Jr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Jr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Pa(){let a=null,e=!1,t=null,i=null;function r(n,o){t(n,o),i=a.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=a.requestAnimationFrame(r),e=!0)},stop:function(){a.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(n){t=n},setContext:function(n){a=n}}}function xc(a,e){const t=e.isWebGL2,i=new WeakMap;function r(c,h){const d=c.array,u=c.usage,f=a.createBuffer();a.bindBuffer(h,f),a.bufferData(h,d,u),c.onUploadCallback();let g;if(d instanceof Float32Array)g=5126;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(d instanceof Int16Array)g=5122;else if(d instanceof Uint32Array)g=5125;else if(d instanceof Int32Array)g=5124;else if(d instanceof Int8Array)g=5120;else if(d instanceof Uint8Array)g=5121;else if(d instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:f,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function n(c,h,d){const u=h.array,f=h.updateRange;a.bindBuffer(d,c),f.count===-1?a.bufferSubData(d,0,u):(t?a.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count):a.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(a.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const u=i.get(c);(!u||u.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d===void 0?i.set(c,r(c,h)):d.version<c.version&&(n(d.buffer,c,h),d.version=c.version)}return{get:o,remove:s,update:l}}class gs extends zt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const n=e/2,o=t/2,s=Math.floor(i),l=Math.floor(r),c=s+1,h=l+1,d=e/s,u=t/l,f=[],g=[],p=[],m=[];for(let y=0;y<h;y++){const w=y*u-o;for(let M=0;M<c;M++){const b=M*d-n;g.push(b,-w,0),p.push(0,0,1),m.push(M/s),m.push(1-y/l)}}for(let y=0;y<l;y++)for(let w=0;w<s;w++){const M=w+c*y,b=w+c*(y+1),E=w+1+c*(y+1),C=w+1+c*y;f.push(M,b,C),f.push(b,E,C)}this.setIndex(f),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(p,3)),this.setAttribute("uv",new Zt(m,2))}static fromJSON(e){return new gs(e.width,e.height,e.widthSegments,e.heightSegments)}}var yc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Mc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Sc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Tc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ec="vec3 transformed = vec3( position );",Ac=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cc=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Lc=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Dc=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Pc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Rc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ic=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Uc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Oc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Bc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Fc=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,kc=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Hc=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Gc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Wc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xc="gl_FragColor = linearToOutputTexel( gl_FragColor );",qc=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Zc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jc=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Kc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$c=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,eh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,th=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ih=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,nh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,sh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ah=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,oh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ch=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,hh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ph=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,fh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gh=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_h=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,xh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,bh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Sh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Th=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Eh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ah=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ch=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Ph=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Rh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Ih=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Nh=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Uh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Oh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Fh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,kh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Hh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Gh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,jh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kh=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Qh=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$h=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,eu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,tu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,ru=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,su=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,au=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ou=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,cu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,hu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,uu=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,du=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,pu=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,mu=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,fu=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,gu=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,_u=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xu=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,yu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,bu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Su=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,wu=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Tu=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Eu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Au=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Cu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Du=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pu=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ru=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Iu=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nu=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Uu=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ou=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Fu=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ku=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hu=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gu=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Vu=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wu=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ju=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xu=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,qu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yu=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zu=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ju=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ku=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Se={alphamap_fragment:yc,alphamap_pars_fragment:Mc,alphatest_fragment:bc,alphatest_pars_fragment:Sc,aomap_fragment:wc,aomap_pars_fragment:Tc,begin_vertex:Ec,beginnormal_vertex:Ac,bsdfs:Cc,iridescence_fragment:Lc,bumpmap_pars_fragment:Dc,clipping_planes_fragment:Pc,clipping_planes_pars_fragment:Rc,clipping_planes_pars_vertex:Ic,clipping_planes_vertex:Nc,color_fragment:Uc,color_pars_fragment:zc,color_pars_vertex:Oc,color_vertex:Bc,common:Fc,cube_uv_reflection_fragment:kc,defaultnormal_vertex:Hc,displacementmap_pars_vertex:Gc,displacementmap_vertex:Vc,emissivemap_fragment:Wc,emissivemap_pars_fragment:jc,encodings_fragment:Xc,encodings_pars_fragment:qc,envmap_fragment:Yc,envmap_common_pars_fragment:Zc,envmap_pars_fragment:Jc,envmap_pars_vertex:Kc,envmap_physical_pars_fragment:ch,envmap_vertex:Qc,fog_vertex:$c,fog_pars_vertex:eh,fog_fragment:th,fog_pars_fragment:ih,gradientmap_pars_fragment:rh,lightmap_fragment:nh,lightmap_pars_fragment:sh,lights_lambert_fragment:ah,lights_lambert_pars_fragment:oh,lights_pars_begin:lh,lights_toon_fragment:hh,lights_toon_pars_fragment:uh,lights_phong_fragment:dh,lights_phong_pars_fragment:ph,lights_physical_fragment:mh,lights_physical_pars_fragment:fh,lights_fragment_begin:gh,lights_fragment_maps:_h,lights_fragment_end:vh,logdepthbuf_fragment:xh,logdepthbuf_pars_fragment:yh,logdepthbuf_pars_vertex:Mh,logdepthbuf_vertex:bh,map_fragment:Sh,map_pars_fragment:wh,map_particle_fragment:Th,map_particle_pars_fragment:Eh,metalnessmap_fragment:Ah,metalnessmap_pars_fragment:Ch,morphcolor_vertex:Lh,morphnormal_vertex:Dh,morphtarget_pars_vertex:Ph,morphtarget_vertex:Rh,normal_fragment_begin:Ih,normal_fragment_maps:Nh,normal_pars_fragment:Uh,normal_pars_vertex:zh,normal_vertex:Oh,normalmap_pars_fragment:Bh,clearcoat_normal_fragment_begin:Fh,clearcoat_normal_fragment_maps:kh,clearcoat_pars_fragment:Hh,iridescence_pars_fragment:Gh,output_fragment:Vh,packing:Wh,premultiplied_alpha_fragment:jh,project_vertex:Xh,dithering_fragment:qh,dithering_pars_fragment:Yh,roughnessmap_fragment:Zh,roughnessmap_pars_fragment:Jh,shadowmap_pars_fragment:Kh,shadowmap_pars_vertex:Qh,shadowmap_vertex:$h,shadowmask_pars_fragment:eu,skinbase_vertex:tu,skinning_pars_vertex:iu,skinning_vertex:ru,skinnormal_vertex:nu,specularmap_fragment:su,specularmap_pars_fragment:au,tonemapping_fragment:ou,tonemapping_pars_fragment:lu,transmission_fragment:cu,transmission_pars_fragment:hu,uv_pars_fragment:uu,uv_pars_vertex:du,uv_vertex:pu,uv2_pars_fragment:mu,uv2_pars_vertex:fu,uv2_vertex:gu,worldpos_vertex:_u,background_vert:vu,background_frag:xu,backgroundCube_vert:yu,backgroundCube_frag:Mu,cube_vert:bu,cube_frag:Su,depth_vert:wu,depth_frag:Tu,distanceRGBA_vert:Eu,distanceRGBA_frag:Au,equirect_vert:Cu,equirect_frag:Lu,linedashed_vert:Du,linedashed_frag:Pu,meshbasic_vert:Ru,meshbasic_frag:Iu,meshlambert_vert:Nu,meshlambert_frag:Uu,meshmatcap_vert:zu,meshmatcap_frag:Ou,meshnormal_vert:Bu,meshnormal_frag:Fu,meshphong_vert:ku,meshphong_frag:Hu,meshphysical_vert:Gu,meshphysical_frag:Vu,meshtoon_vert:Wu,meshtoon_frag:ju,points_vert:Xu,points_frag:qu,shadow_vert:Yu,shadow_frag:Zu,sprite_vert:Ju,sprite_frag:Ku},te={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new xt},uv2Transform:{value:new xt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new xt}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new xt}}},Nt={basic:{uniforms:ct([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.fog]),vertexShader:Se.meshbasic_vert,fragmentShader:Se.meshbasic_frag},lambert:{uniforms:ct([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Se.meshlambert_vert,fragmentShader:Se.meshlambert_frag},phong:{uniforms:ct([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:Se.meshphong_vert,fragmentShader:Se.meshphong_frag},standard:{uniforms:ct([te.common,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.roughnessmap,te.metalnessmap,te.fog,te.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag},toon:{uniforms:ct([te.common,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.gradientmap,te.fog,te.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Se.meshtoon_vert,fragmentShader:Se.meshtoon_frag},matcap:{uniforms:ct([te.common,te.bumpmap,te.normalmap,te.displacementmap,te.fog,{matcap:{value:null}}]),vertexShader:Se.meshmatcap_vert,fragmentShader:Se.meshmatcap_frag},points:{uniforms:ct([te.points,te.fog]),vertexShader:Se.points_vert,fragmentShader:Se.points_frag},dashed:{uniforms:ct([te.common,te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Se.linedashed_vert,fragmentShader:Se.linedashed_frag},depth:{uniforms:ct([te.common,te.displacementmap]),vertexShader:Se.depth_vert,fragmentShader:Se.depth_frag},normal:{uniforms:ct([te.common,te.bumpmap,te.normalmap,te.displacementmap,{opacity:{value:1}}]),vertexShader:Se.meshnormal_vert,fragmentShader:Se.meshnormal_frag},sprite:{uniforms:ct([te.sprite,te.fog]),vertexShader:Se.sprite_vert,fragmentShader:Se.sprite_frag},background:{uniforms:{uvTransform:{value:new xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Se.background_vert,fragmentShader:Se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Se.backgroundCube_vert,fragmentShader:Se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Se.cube_vert,fragmentShader:Se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Se.equirect_vert,fragmentShader:Se.equirect_frag},distanceRGBA:{uniforms:ct([te.common,te.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Se.distanceRGBA_vert,fragmentShader:Se.distanceRGBA_frag},shadow:{uniforms:ct([te.lights,te.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:Se.shadow_vert,fragmentShader:Se.shadow_frag}};Nt.physical={uniforms:ct([Nt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Re(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag};const Kr={r:0,b:0,g:0};function Qu(a,e,t,i,r,n,o){const s=new Pe(0);let l=n===!0?0:1,c,h,d=null,u=0,f=null;function g(m,y){let w=!1,M=y.isScene===!0?y.background:null;M&&M.isTexture&&(M=(y.backgroundBlurriness>0?t:e).get(M));const b=a.xr,E=b.getSession&&b.getSession();E&&E.environmentBlendMode==="additive"&&(M=null),M===null?p(s,l):M&&M.isColor&&(p(M,1),w=!0),(a.autoClear||w)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),M&&(M.isCubeTexture||M.mapping===Ar)?(h===void 0&&(h=new Et(new ir(1,1,1),new yi({name:"BackgroundCubeMaterial",uniforms:ji(Nt.backgroundCube.uniforms),vertexShader:Nt.backgroundCube.vertexShader,fragmentShader:Nt.backgroundCube.fragmentShader,side:mt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,N,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.toneMapped=M.encoding!==Fe,(d!==M||u!==M.version||f!==a.toneMapping)&&(h.material.needsUpdate=!0,d=M,u=M.version,f=a.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Et(new gs(2,2),new yi({name:"BackgroundMaterial",uniforms:ji(Nt.background.uniforms),vertexShader:Nt.background.vertexShader,fragmentShader:Nt.background.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=M.encoding!==Fe,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||u!==M.version||f!==a.toneMapping)&&(c.material.needsUpdate=!0,d=M,u=M.version,f=a.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function p(m,y){m.getRGB(Kr,Ca(a)),i.buffers.color.setClear(Kr.r,Kr.g,Kr.b,y,o)}return{getClearColor:function(){return s},setClearColor:function(m,y=1){s.set(m),l=y,p(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,p(s,l)},render:g}}function $u(a,e,t,i){const r=a.getParameter(34921),n=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||n!==null,s={},l=m(null);let c=l,h=!1;function d(R,G,Z,$,W){let Q=!1;if(o){const q=p($,Z,G);c!==q&&(c=q,f(c.object)),Q=y(R,$,Z,W),Q&&w(R,$,Z,W)}else{const q=G.wireframe===!0;(c.geometry!==$.id||c.program!==Z.id||c.wireframe!==q)&&(c.geometry=$.id,c.program=Z.id,c.wireframe=q,Q=!0)}W!==null&&t.update(W,34963),(Q||h)&&(h=!1,v(R,G,Z,$),W!==null&&a.bindBuffer(34963,t.get(W).buffer))}function u(){return i.isWebGL2?a.createVertexArray():n.createVertexArrayOES()}function f(R){return i.isWebGL2?a.bindVertexArray(R):n.bindVertexArrayOES(R)}function g(R){return i.isWebGL2?a.deleteVertexArray(R):n.deleteVertexArrayOES(R)}function p(R,G,Z){const $=Z.wireframe===!0;let W=s[R.id];W===void 0&&(W={},s[R.id]=W);let Q=W[G.id];Q===void 0&&(Q={},W[G.id]=Q);let q=Q[$];return q===void 0&&(q=m(u()),Q[$]=q),q}function m(R){const G=[],Z=[],$=[];for(let W=0;W<r;W++)G[W]=0,Z[W]=0,$[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:Z,attributeDivisors:$,object:R,attributes:{},index:null}}function y(R,G,Z,$){const W=c.attributes,Q=G.attributes;let q=0;const pe=Z.getAttributes();for(const z in pe)if(pe[z].location>=0){const j=W[z];let ie=Q[z];if(ie===void 0&&(z==="instanceMatrix"&&R.instanceMatrix&&(ie=R.instanceMatrix),z==="instanceColor"&&R.instanceColor&&(ie=R.instanceColor)),j===void 0||j.attribute!==ie||ie&&j.data!==ie.data)return!0;q++}return c.attributesNum!==q||c.index!==$}function w(R,G,Z,$){const W={},Q=G.attributes;let q=0;const pe=Z.getAttributes();for(const z in pe)if(pe[z].location>=0){let j=Q[z];j===void 0&&(z==="instanceMatrix"&&R.instanceMatrix&&(j=R.instanceMatrix),z==="instanceColor"&&R.instanceColor&&(j=R.instanceColor));const ie={};ie.attribute=j,j&&j.data&&(ie.data=j.data),W[z]=ie,q++}c.attributes=W,c.attributesNum=q,c.index=$}function M(){const R=c.newAttributes;for(let G=0,Z=R.length;G<Z;G++)R[G]=0}function b(R){E(R,0)}function E(R,G){const Z=c.newAttributes,$=c.enabledAttributes,W=c.attributeDivisors;Z[R]=1,$[R]===0&&(a.enableVertexAttribArray(R),$[R]=1),W[R]!==G&&((i.isWebGL2?a:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,G),W[R]=G)}function C(){const R=c.newAttributes,G=c.enabledAttributes;for(let Z=0,$=G.length;Z<$;Z++)G[Z]!==R[Z]&&(a.disableVertexAttribArray(Z),G[Z]=0)}function N(R,G,Z,$,W,Q){i.isWebGL2===!0&&(Z===5124||Z===5125)?a.vertexAttribIPointer(R,G,Z,W,Q):a.vertexAttribPointer(R,G,Z,$,W,Q)}function v(R,G,Z,$){if(i.isWebGL2===!1&&(R.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const W=$.attributes,Q=Z.getAttributes(),q=G.defaultAttributeValues;for(const pe in Q){const z=Q[pe];if(z.location>=0){let j=W[pe];if(j===void 0&&(pe==="instanceMatrix"&&R.instanceMatrix&&(j=R.instanceMatrix),pe==="instanceColor"&&R.instanceColor&&(j=R.instanceColor)),j!==void 0){const ie=j.normalized,oe=j.itemSize,O=t.get(j);if(O===void 0)continue;const Me=O.buffer,he=O.type,ue=O.bytesPerElement;if(j.isInterleavedBufferAttribute){const ae=j.data,Ge=ae.stride,be=j.offset;if(ae.isInstancedInterleavedBuffer){for(let ve=0;ve<z.locationSize;ve++)E(z.location+ve,ae.meshPerAttribute);R.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ve=0;ve<z.locationSize;ve++)b(z.location+ve);a.bindBuffer(34962,Me);for(let ve=0;ve<z.locationSize;ve++)N(z.location+ve,oe/z.locationSize,he,ie,Ge*ue,(be+oe/z.locationSize*ve)*ue)}else{if(j.isInstancedBufferAttribute){for(let ae=0;ae<z.locationSize;ae++)E(z.location+ae,j.meshPerAttribute);R.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ae=0;ae<z.locationSize;ae++)b(z.location+ae);a.bindBuffer(34962,Me);for(let ae=0;ae<z.locationSize;ae++)N(z.location+ae,oe/z.locationSize,he,ie,oe*ue,oe/z.locationSize*ae*ue)}}else if(q!==void 0){const ie=q[pe];if(ie!==void 0)switch(ie.length){case 2:a.vertexAttrib2fv(z.location,ie);break;case 3:a.vertexAttrib3fv(z.location,ie);break;case 4:a.vertexAttrib4fv(z.location,ie);break;default:a.vertexAttrib1fv(z.location,ie)}}}}C()}function T(){J();for(const R in s){const G=s[R];for(const Z in G){const $=G[Z];for(const W in $)g($[W].object),delete $[W];delete G[Z]}delete s[R]}}function P(R){if(s[R.id]===void 0)return;const G=s[R.id];for(const Z in G){const $=G[Z];for(const W in $)g($[W].object),delete $[W];delete G[Z]}delete s[R.id]}function X(R){for(const G in s){const Z=s[G];if(Z[R.id]===void 0)continue;const $=Z[R.id];for(const W in $)g($[W].object),delete $[W];delete Z[R.id]}}function J(){U(),h=!0,c!==l&&(c=l,f(c.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:J,resetDefaultState:U,dispose:T,releaseStatesOfGeometry:P,releaseStatesOfProgram:X,initAttributes:M,enableAttribute:b,disableUnusedAttributes:C}}function ed(a,e,t,i){const r=i.isWebGL2;let n;function o(c){n=c}function s(c,h){a.drawArrays(n,c,h),t.update(h,n,1)}function l(c,h,d){if(d===0)return;let u,f;if(r)u=a,f="drawArraysInstanced";else if(u=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[f](n,c,h,d),t.update(h,n,d)}this.setMode=o,this.render=s,this.renderInstances=l}function td(a,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");i=a.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function n(N){if(N==="highp"){if(a.getShaderPrecisionFormat(35633,36338).precision>0&&a.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";N="mediump"}return N==="mediump"&&a.getShaderPrecisionFormat(35633,36337).precision>0&&a.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&a instanceof WebGL2RenderingContext;let s=t.precision!==void 0?t.precision:"highp";const l=n(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=a.getParameter(34930),u=a.getParameter(35660),f=a.getParameter(3379),g=a.getParameter(34076),p=a.getParameter(34921),m=a.getParameter(36347),y=a.getParameter(36348),w=a.getParameter(36349),M=u>0,b=o||e.has("OES_texture_float"),E=M&&b,C=o?a.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:n,precision:s,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:f,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:m,maxVaryings:y,maxFragmentUniforms:w,vertexTextures:M,floatFragmentTextures:b,floatVertexTextures:E,maxSamples:C}}function id(a){const e=this;let t=null,i=0,r=!1,n=!1;const o=new Mi,s=new xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||i!==0||r;return r=u,i=d.length,f},this.beginShadows=function(){n=!0,h(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,p=d.clipIntersection,m=d.clipShadows,y=a.get(d);if(!r||g===null||g.length===0||n&&!m)n?h(null):c();else{const w=n?0:i,M=w*4;let b=y.clippingState||null;l.value=b,b=h(g,u,M,f);for(let E=0;E!==M;++E)b[E]=t[E];y.clippingState=b,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,f,g){const p=d!==null?d.length:0;let m=null;if(p!==0){if(m=l.value,g!==!0||m===null){const y=f+p*4,w=u.matrixWorldInverse;s.getNormalMatrix(w),(m===null||m.length<y)&&(m=new Float32Array(y));for(let M=0,b=f;M!==p;++M,b+=4)o.copy(d[M]).applyMatrix4(w,s),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,m}}function rd(a){let e=new WeakMap;function t(o,s){return s===gn?o.mapping=Ei:s===_n&&(o.mapping=Ai),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const s=o.mapping;if(s===gn||s===_n)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new gc(l.height/2);return c.fromEquirectangularTexture(a,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const s=o.target;s.removeEventListener("dispose",r);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function n(){e=new WeakMap}return{get:i,dispose:n}}class es extends La{constructor(e=-1,t=1,i=1,r=-1,n=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=n,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,n,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=n,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let n=i-e,o=i+e,s=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;n+=c*this.view.offsetX,o=n+c*this.view.width,s-=h*this.view.offsetY,l=s-h*this.view.height}this.projectionMatrix.makeOrthographic(n,o,s,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Zi=4,Ra=[.125,.215,.35,.446,.526,.582],bi=20,ts=new es,Ia=new Pe;let is=null;const Si=(1+Math.sqrt(5))/2,Ji=1/Si,Na=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Si,Ji),new L(0,Si,-Ji),new L(Ji,0,Si),new L(-Ji,0,Si),new L(Si,Ji,0),new L(-Si,Ji,0)];class Ua{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){is=this._renderer.getRenderTarget(),this._setSize(256);const n=this._allocateTargets();return n.depthBuffer=!0,this._sceneToCubeUV(e,i,r,n),t>0&&this._blur(n,0,0,t),this._applyPMREM(n),this._cleanup(n),n}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ba(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Oa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(is),e.scissorTest=!1,Qr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ei||e.mapping===Ai?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),is=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ft,minFilter:ft,generateMipmaps:!1,type:sr,format:wt,encoding:mi,depthBuffer:!1},r=za(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=za(e,t,i);const{_lodMax:n}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=nd(n)),this._blurMaterial=sd(n,e,t)}return r}_compileMaterial(e){const t=new Et(this._lodPlanes[0],e);this._renderer.compile(t,ts)}_sceneToCubeUV(e,t,i,r){const n=new ut(90,1,t,i),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(Ia),l.toneMapping=Gt,l.autoClear=!1;const d=new qn({name:"PMREM.Background",side:mt,depthWrite:!1,depthTest:!1}),u=new Et(new ir,d);let f=!1;const g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,f=!0):(d.color.copy(Ia),f=!0);for(let p=0;p<6;p++){const m=p%3;m===0?(n.up.set(0,o[p],0),n.lookAt(s[p],0,0)):m===1?(n.up.set(0,0,o[p]),n.lookAt(0,s[p],0)):(n.up.set(0,o[p],0),n.lookAt(0,0,s[p]));const y=this._cubeSize;Qr(r,m*y,p>2?y:0,y,y),l.setRenderTarget(r),f&&l.render(u,n),l.render(e,n)}u.geometry.dispose(),u.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ei||e.mapping===Ai;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ba()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Oa());const n=r?this._cubemapMaterial:this._equirectMaterial,o=new Et(this._lodPlanes[0],n),s=n.uniforms;s.envMap.value=e;const l=this._cubeSize;Qr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,ts)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const n=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Na[(r-1)%Na.length];this._blur(e,r-1,r,n,o)}t.autoClear=i}_blur(e,t,i,r,n){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",n),this._halfBlur(o,e,i,i,r,"longitudinal",n)}_halfBlur(e,t,i,r,n,o,s){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Et(this._lodPlanes[r],c),u=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(n)?Math.PI/(2*f):2*Math.PI/(2*bi-1),p=n/g,m=isFinite(n)?1+Math.floor(h*p):bi;m>bi&&console.warn(`sigmaRadians, ${n}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${bi}`);const y=[];let w=0;for(let N=0;N<bi;++N){const v=N/p,T=Math.exp(-v*v/2);y.push(T),N===0?w+=T:N<m&&(w+=2*T)}for(let N=0;N<y.length;N++)y[N]=y[N]/w;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=y,u.latitudinal.value=o==="latitudinal",s&&(u.poleAxis.value=s);const{_lodMax:M}=this;u.dTheta.value=g,u.mipInt.value=M-i;const b=this._sizeLods[r],E=3*b*(r>M-Zi?r-M+Zi:0),C=4*(this._cubeSize-b);Qr(t,E,C,3*b,2*b),l.setRenderTarget(t),l.render(d,ts)}}function nd(a){const e=[],t=[],i=[];let r=a;const n=a-Zi+1+Ra.length;for(let o=0;o<n;o++){const s=Math.pow(2,r);t.push(s);let l=1/s;o>a-Zi?l=Ra[o-a+Zi-1]:o===0&&(l=0),i.push(l);const c=1/(s-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,p=3,m=2,y=1,w=new Float32Array(p*g*f),M=new Float32Array(m*g*f),b=new Float32Array(y*g*f);for(let C=0;C<f;C++){const N=C%3*2/3-1,v=C>2?0:-1,T=[N,v,0,N+2/3,v,0,N+2/3,v+1,0,N,v,0,N+2/3,v+1,0,N,v+1,0];w.set(T,p*g*C),M.set(u,m*g*C);const P=[C,C,C,C,C,C];b.set(P,y*g*C)}const E=new zt;E.setAttribute("position",new _t(w,p)),E.setAttribute("uv",new _t(M,m)),E.setAttribute("faceIndex",new _t(b,y)),e.push(E),r>Zi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function za(a,e,t){const i=new gi(a,e,t);return i.texture.mapping=Ar,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Qr(a,e,t,i,r){a.viewport.set(e,t,i,r),a.scissor.set(e,t,i,r)}function sd(a,e,t){const i=new Float32Array(bi),r=new L(0,1,0);return new yi({name:"SphericalGaussianBlur",defines:{n:bi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:rs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Qt,depthTest:!1,depthWrite:!1})}function Oa(){return new yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Qt,depthTest:!1,depthWrite:!1})}function Ba(){return new yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qt,depthTest:!1,depthWrite:!1})}function rs(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ad(a){let e=new WeakMap,t=null;function i(s){if(s&&s.isTexture){const l=s.mapping,c=l===gn||l===_n,h=l===Ei||l===Ai;if(c||h)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let d=e.get(s);return t===null&&(t=new Ua(a)),d=c?t.fromEquirectangular(s,d):t.fromCubemap(s,d),e.set(s,d),d.texture}else{if(e.has(s))return e.get(s).texture;{const d=s.image;if(c&&d&&d.height>0||h&&d&&r(d)){t===null&&(t=new Ua(a));const u=c?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,u),s.addEventListener("dispose",n),u.texture}else return null}}}return s}function r(s){let l=0;const c=6;for(let h=0;h<c;h++)s[h]!==void 0&&l++;return l===c}function n(s){const l=s.target;l.removeEventListener("dispose",n);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function od(a){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=a.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function ld(a,e,t,i){const r={},n=new WeakMap;function o(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete r[u.id];const f=n.get(u);f&&(e.remove(f),n.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function s(d,u){return r[u.id]===!0||(u.addEventListener("dispose",o),r[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const g in u)e.update(u[g],34962);const f=d.morphAttributes;for(const g in f){const p=f[g];for(let m=0,y=p.length;m<y;m++)e.update(p[m],34962)}}function c(d){const u=[],f=d.index,g=d.attributes.position;let p=0;if(f!==null){const w=f.array;p=f.version;for(let M=0,b=w.length;M<b;M+=3){const E=w[M+0],C=w[M+1],N=w[M+2];u.push(E,C,C,N,N,E)}}else{const w=g.array;p=g.version;for(let M=0,b=w.length/3-1;M<b;M+=3){const E=M+0,C=M+1,N=M+2;u.push(E,C,C,N,N,E)}}const m=new(ha(u)?Ea:Ta)(u,1);m.version=p;const y=n.get(d);y&&e.remove(y),n.set(d,m)}function h(d){const u=n.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return n.get(d)}return{get:s,update:l,getWireframeAttribute:h}}function cd(a,e,t,i){const r=i.isWebGL2;let n;function o(u){n=u}let s,l;function c(u){s=u.type,l=u.bytesPerElement}function h(u,f){a.drawElements(n,f,s,u*l),t.update(f,n,1)}function d(u,f,g){if(g===0)return;let p,m;if(r)p=a,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](n,f,s,u*l,g),t.update(f,n,g)}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=d}function hd(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(n,o,s){switch(t.calls++,o){case 4:t.triangles+=s*(n/3);break;case 1:t.lines+=s*(n/2);break;case 3:t.lines+=s*(n-1);break;case 2:t.lines+=s*n;break;case 0:t.points+=s*n;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function ud(a,e){return a[0]-e[0]}function dd(a,e){return Math.abs(e[1])-Math.abs(a[1])}function pd(a,e,t){const i={},r=new Float32Array(8),n=new WeakMap,o=new Be,s=[];for(let c=0;c<8;c++)s[c]=[c,0];function l(c,h,d,u){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,p=g!==void 0?g.length:0;let m=n.get(h);if(m===void 0||m.count!==p){let M=function(){R.dispose(),n.delete(h),h.removeEventListener("dispose",M)};m!==void 0&&m.texture.dispose();const b=h.morphAttributes.position!==void 0,E=h.morphAttributes.normal!==void 0,C=h.morphAttributes.color!==void 0,N=h.morphAttributes.position||[],v=h.morphAttributes.normal||[],T=h.morphAttributes.color||[];let P=0;b===!0&&(P=1),E===!0&&(P=2),C===!0&&(P=3);let X=h.attributes.position.count*P,J=1;X>e.maxTextureSize&&(J=Math.ceil(X/e.maxTextureSize),X=e.maxTextureSize);const U=new Float32Array(X*J*4*p),R=new ma(U,X,J,p);R.type=$t,R.needsUpdate=!0;const G=P*4;for(let Z=0;Z<p;Z++){const $=N[Z],W=v[Z],Q=T[Z],q=X*J*4*Z;for(let pe=0;pe<$.count;pe++){const z=pe*G;b===!0&&(o.fromBufferAttribute($,pe),U[q+z+0]=o.x,U[q+z+1]=o.y,U[q+z+2]=o.z,U[q+z+3]=0),E===!0&&(o.fromBufferAttribute(W,pe),U[q+z+4]=o.x,U[q+z+5]=o.y,U[q+z+6]=o.z,U[q+z+7]=0),C===!0&&(o.fromBufferAttribute(Q,pe),U[q+z+8]=o.x,U[q+z+9]=o.y,U[q+z+10]=o.z,U[q+z+11]=Q.itemSize===4?o.w:1)}}m={count:p,texture:R,size:new Re(X,J)},n.set(h,m),h.addEventListener("dispose",M)}let y=0;for(let M=0;M<f.length;M++)y+=f[M];const w=h.morphTargetsRelative?1:1-y;u.getUniforms().setValue(a,"morphTargetBaseInfluence",w),u.getUniforms().setValue(a,"morphTargetInfluences",f),u.getUniforms().setValue(a,"morphTargetsTexture",m.texture,t),u.getUniforms().setValue(a,"morphTargetsTextureSize",m.size)}else{const g=f===void 0?0:f.length;let p=i[h.id];if(p===void 0||p.length!==g){p=[];for(let b=0;b<g;b++)p[b]=[b,0];i[h.id]=p}for(let b=0;b<g;b++){const E=p[b];E[0]=b,E[1]=f[b]}p.sort(dd);for(let b=0;b<8;b++)b<g&&p[b][1]?(s[b][0]=p[b][0],s[b][1]=p[b][1]):(s[b][0]=Number.MAX_SAFE_INTEGER,s[b][1]=0);s.sort(ud);const m=h.morphAttributes.position,y=h.morphAttributes.normal;let w=0;for(let b=0;b<8;b++){const E=s[b],C=E[0],N=E[1];C!==Number.MAX_SAFE_INTEGER&&N?(m&&h.getAttribute("morphTarget"+b)!==m[C]&&h.setAttribute("morphTarget"+b,m[C]),y&&h.getAttribute("morphNormal"+b)!==y[C]&&h.setAttribute("morphNormal"+b,y[C]),r[b]=N,w+=N):(m&&h.hasAttribute("morphTarget"+b)===!0&&h.deleteAttribute("morphTarget"+b),y&&h.hasAttribute("morphNormal"+b)===!0&&h.deleteAttribute("morphNormal"+b),r[b]=0)}const M=h.morphTargetsRelative?1:1-w;u.getUniforms().setValue(a,"morphTargetBaseInfluence",M),u.getUniforms().setValue(a,"morphTargetInfluences",r)}}return{update:l}}function md(a,e,t,i){let r=new WeakMap;function n(l){const c=i.render.frame,h=l.geometry,d=e.get(l,h);return r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),d}function o(){r=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:n,dispose:o}}const Fa=new st,ka=new ma,Ha=new ec,Ga=new Da,Va=[],Wa=[],ja=new Float32Array(16),Xa=new Float32Array(9),qa=new Float32Array(4);function Ki(a,e,t){const i=a[0];if(i<=0||i>0)return a;const r=e*t;let n=Va[r];if(n===void 0&&(n=new Float32Array(r),Va[r]=n),e!==0){i.toArray(n,0);for(let o=1,s=0;o!==e;++o)s+=t,a[o].toArray(n,s)}return n}function Ye(a,e){if(a.length!==e.length)return!1;for(let t=0,i=a.length;t<i;t++)if(a[t]!==e[t])return!1;return!0}function Ze(a,e){for(let t=0,i=e.length;t<i;t++)a[t]=e[t]}function $r(a,e){let t=Wa[e];t===void 0&&(t=new Int32Array(e),Wa[e]=t);for(let i=0;i!==e;++i)t[i]=a.allocateTextureUnit();return t}function fd(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function gd(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ye(t,e))return;a.uniform2fv(this.addr,e),Ze(t,e)}}function _d(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ye(t,e))return;a.uniform3fv(this.addr,e),Ze(t,e)}}function vd(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ye(t,e))return;a.uniform4fv(this.addr,e),Ze(t,e)}}function xd(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ye(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),Ze(t,e)}else{if(Ye(t,i))return;qa.set(i),a.uniformMatrix2fv(this.addr,!1,qa),Ze(t,i)}}function yd(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ye(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),Ze(t,e)}else{if(Ye(t,i))return;Xa.set(i),a.uniformMatrix3fv(this.addr,!1,Xa),Ze(t,i)}}function Md(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ye(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),Ze(t,e)}else{if(Ye(t,i))return;ja.set(i),a.uniformMatrix4fv(this.addr,!1,ja),Ze(t,i)}}function bd(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function Sd(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ye(t,e))return;a.uniform2iv(this.addr,e),Ze(t,e)}}function wd(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ye(t,e))return;a.uniform3iv(this.addr,e),Ze(t,e)}}function Td(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ye(t,e))return;a.uniform4iv(this.addr,e),Ze(t,e)}}function Ed(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function Ad(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ye(t,e))return;a.uniform2uiv(this.addr,e),Ze(t,e)}}function Cd(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ye(t,e))return;a.uniform3uiv(this.addr,e),Ze(t,e)}}function Ld(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ye(t,e))return;a.uniform4uiv(this.addr,e),Ze(t,e)}}function Dd(a,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(a.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Fa,r)}function Pd(a,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(a.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ha,r)}function Rd(a,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(a.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Ga,r)}function Id(a,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(a.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||ka,r)}function Nd(a){switch(a){case 5126:return fd;case 35664:return gd;case 35665:return _d;case 35666:return vd;case 35674:return xd;case 35675:return yd;case 35676:return Md;case 5124:case 35670:return bd;case 35667:case 35671:return Sd;case 35668:case 35672:return wd;case 35669:case 35673:return Td;case 5125:return Ed;case 36294:return Ad;case 36295:return Cd;case 36296:return Ld;case 35678:case 36198:case 36298:case 36306:case 35682:return Dd;case 35679:case 36299:case 36307:return Pd;case 35680:case 36300:case 36308:case 36293:return Rd;case 36289:case 36303:case 36311:case 36292:return Id}}function Ud(a,e){a.uniform1fv(this.addr,e)}function zd(a,e){const t=Ki(e,this.size,2);a.uniform2fv(this.addr,t)}function Od(a,e){const t=Ki(e,this.size,3);a.uniform3fv(this.addr,t)}function Bd(a,e){const t=Ki(e,this.size,4);a.uniform4fv(this.addr,t)}function Fd(a,e){const t=Ki(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function kd(a,e){const t=Ki(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function Hd(a,e){const t=Ki(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function Gd(a,e){a.uniform1iv(this.addr,e)}function Vd(a,e){a.uniform2iv(this.addr,e)}function Wd(a,e){a.uniform3iv(this.addr,e)}function jd(a,e){a.uniform4iv(this.addr,e)}function Xd(a,e){a.uniform1uiv(this.addr,e)}function qd(a,e){a.uniform2uiv(this.addr,e)}function Yd(a,e){a.uniform3uiv(this.addr,e)}function Zd(a,e){a.uniform4uiv(this.addr,e)}function Jd(a,e,t){const i=this.cache,r=e.length,n=$r(t,r);Ye(i,n)||(a.uniform1iv(this.addr,n),Ze(i,n));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Fa,n[o])}function Kd(a,e,t){const i=this.cache,r=e.length,n=$r(t,r);Ye(i,n)||(a.uniform1iv(this.addr,n),Ze(i,n));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Ha,n[o])}function Qd(a,e,t){const i=this.cache,r=e.length,n=$r(t,r);Ye(i,n)||(a.uniform1iv(this.addr,n),Ze(i,n));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Ga,n[o])}function $d(a,e,t){const i=this.cache,r=e.length,n=$r(t,r);Ye(i,n)||(a.uniform1iv(this.addr,n),Ze(i,n));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||ka,n[o])}function ep(a){switch(a){case 5126:return Ud;case 35664:return zd;case 35665:return Od;case 35666:return Bd;case 35674:return Fd;case 35675:return kd;case 35676:return Hd;case 5124:case 35670:return Gd;case 35667:case 35671:return Vd;case 35668:case 35672:return Wd;case 35669:case 35673:return jd;case 5125:return Xd;case 36294:return qd;case 36295:return Yd;case 36296:return Zd;case 35678:case 36198:case 36298:case 36306:case 35682:return Jd;case 35679:case 36299:case 36307:return Kd;case 35680:case 36300:case 36308:case 36293:return Qd;case 36289:case 36303:case 36311:case 36292:return $d}}class tp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Nd(t.type)}}class ip{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=ep(t.type)}}class rp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let n=0,o=r.length;n!==o;++n){const s=r[n];s.setValue(e,t[s.id],i)}}}const ns=/(\w+)(\])?(\[|\.)?/g;function Ya(a,e){a.seq.push(e),a.map[e.id]=e}function np(a,e,t){const i=a.name,r=i.length;for(ns.lastIndex=0;;){const n=ns.exec(i),o=ns.lastIndex;let s=n[1];const l=n[2]==="]",c=n[3];if(l&&(s=s|0),c===void 0||c==="["&&o+2===r){Ya(t,c===void 0?new tp(s,a,e):new ip(s,a,e));break}else{let h=t.map[s];h===void 0&&(h=new rp(s),Ya(t,h)),t=h}}}class en{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const n=e.getActiveUniform(t,r),o=e.getUniformLocation(t,n.name);np(n,o,this)}}setValue(e,t,i,r){const n=this.map[t];n!==void 0&&n.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let n=0,o=t.length;n!==o;++n){const s=t[n],l=i[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,n=e.length;r!==n;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Za(a,e,t){const i=a.createShader(e);return a.shaderSource(i,t),a.compileShader(i),i}let sp=0;function ap(a,e){const t=a.split(`
`),i=[],r=Math.max(e-6,0),n=Math.min(e+6,t.length);for(let o=r;o<n;o++){const s=o+1;i.push(`${s===e?">":" "} ${s}: ${t[o]}`)}return i.join(`
`)}function op(a){switch(a){case mi:return["Linear","( value )"];case Fe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",a),["Linear","( value )"]}}function Ja(a,e,t){const i=a.getShaderParameter(e,35713),r=a.getShaderInfoLog(e).trim();if(i&&r==="")return"";const n=/ERROR: 0:(\d+)/.exec(r);if(n){const o=parseInt(n[1]);return t.toUpperCase()+`

`+r+`

`+ap(a.getShaderSource(e),o)}else return r}function lp(a,e){const t=op(e);return"vec4 "+a+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function cp(a,e){let t;switch(e){case cl:t="Linear";break;case hl:t="Reinhard";break;case ul:t="OptimizedCineon";break;case Is:t="ACESFilmic";break;case dl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function hp(a){return[a.extensionDerivatives||a.envMapCubeUVHeight||a.bumpMap||a.tangentSpaceNormalMap||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(xr).join(`
`)}function up(a){const e=[];for(const t in a){const i=a[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function dp(a,e){const t={},i=a.getProgramParameter(e,35721);for(let r=0;r<i;r++){const n=a.getActiveAttrib(e,r),o=n.name;let s=1;n.type===35674&&(s=2),n.type===35675&&(s=3),n.type===35676&&(s=4),t[o]={type:n.type,location:a.getAttribLocation(e,o),locationSize:s}}return t}function xr(a){return a!==""}function Ka(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qa(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pp=/^[ \t]*#include +<([\w\d./]+)>/gm;function ss(a){return a.replace(pp,mp)}function mp(a,e){const t=Se[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return ss(t)}const fp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $a(a){return a.replace(fp,gp)}function gp(a,e,t,i){let r="";for(let n=parseInt(e);n<parseInt(t);n++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return r}function eo(a){let e="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function _p(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===Ss?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===ws?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===nr&&(e="SHADOWMAP_TYPE_VSM"),e}function vp(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Ei:case Ai:e="ENVMAP_TYPE_CUBE";break;case Ar:e="ENVMAP_TYPE_CUBE_UV";break}return e}function xp(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Ai:e="ENVMAP_MODE_REFRACTION";break}return e}function yp(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case Rs:e="ENVMAP_BLENDING_MULTIPLY";break;case ol:e="ENVMAP_BLENDING_MIX";break;case ll:e="ENVMAP_BLENDING_ADD";break}return e}function Mp(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function bp(a,e,t,i){const r=a.getContext(),n=t.defines;let o=t.vertexShader,s=t.fragmentShader;const l=_p(t),c=vp(t),h=xp(t),d=yp(t),u=Mp(t),f=t.isWebGL2?"":hp(t),g=up(n),p=r.createProgram();let m,y,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(xr).join(`
`),m.length>0&&(m+=`
`),y=[f,g].filter(xr).join(`
`),y.length>0&&(y+=`
`)):(m=[eo(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xr).join(`
`),y=[f,eo(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gt?"#define TONE_MAPPING":"",t.toneMapping!==Gt?Se.tonemapping_pars_fragment:"",t.toneMapping!==Gt?cp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Se.encodings_pars_fragment,lp("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xr).join(`
`)),o=ss(o),o=Ka(o,t),o=Qa(o,t),s=ss(s),s=Ka(s,t),s=Qa(s,t),o=$a(o),s=$a(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,y=["#define varying in",t.glslVersion===oa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===oa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const M=w+m+o,b=w+y+s,E=Za(r,35633,M),C=Za(r,35632,b);if(r.attachShader(p,E),r.attachShader(p,C),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p),a.debug.checkShaderErrors){const T=r.getProgramInfoLog(p).trim(),P=r.getShaderInfoLog(E).trim(),X=r.getShaderInfoLog(C).trim();let J=!0,U=!0;if(r.getProgramParameter(p,35714)===!1){J=!1;const R=Ja(r,E,"vertex"),G=Ja(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,35715)+`

Program Info Log: `+T+`
`+R+`
`+G)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(P===""||X==="")&&(U=!1);U&&(this.diagnostics={runnable:J,programLog:T,vertexShader:{log:P,prefix:m},fragmentShader:{log:X,prefix:y}})}r.deleteShader(E),r.deleteShader(C);let N;this.getUniforms=function(){return N===void 0&&(N=new en(r,p)),N};let v;return this.getAttributes=function(){return v===void 0&&(v=dp(r,p)),v},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=sp++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=E,this.fragmentShader=C,this}let Sp=0;class wp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),n=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(n)===!1&&(o.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Tp(e),t.set(e,i)),i}}class Tp{constructor(e){this.id=Sp++,this.code=e,this.usedTimes=0}}function Ep(a,e,t,i,r,n,o){const s=new va,l=new wp,c=[],h=r.isWebGL2,d=r.logarithmicDepthBuffer,u=r.vertexTextures;let f=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v,T,P,X,J){const U=X.fog,R=J.geometry,G=v.isMeshStandardMaterial?X.environment:null,Z=(v.isMeshStandardMaterial?t:e).get(v.envMap||G),$=Z&&Z.mapping===Ar?Z.image.height:null,W=g[v.type];v.precision!==null&&(f=r.getMaxPrecision(v.precision),f!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));const Q=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,q=Q!==void 0?Q.length:0;let pe=0;R.morphAttributes.position!==void 0&&(pe=1),R.morphAttributes.normal!==void 0&&(pe=2),R.morphAttributes.color!==void 0&&(pe=3);let z,j,ie,oe;if(W){const ae=Nt[W];z=ae.vertexShader,j=ae.fragmentShader}else z=v.vertexShader,j=v.fragmentShader,l.update(v),ie=l.getVertexShaderID(v),oe=l.getFragmentShaderID(v);const O=a.getRenderTarget(),Me=v.alphaTest>0,he=v.clearcoat>0,ue=v.iridescence>0;return{isWebGL2:h,shaderID:W,shaderName:v.type,vertexShader:z,fragmentShader:j,defines:v.defines,customVertexShaderID:ie,customFragmentShaderID:oe,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,instancing:J.isInstancedMesh===!0,instancingColor:J.isInstancedMesh===!0&&J.instanceColor!==null,supportsVertexTextures:u,outputEncoding:O===null?a.outputEncoding:O.isXRRenderTarget===!0?O.texture.encoding:mi,map:!!v.map,matcap:!!v.matcap,envMap:!!Z,envMapMode:Z&&Z.mapping,envMapCubeUVHeight:$,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===Ol,tangentSpaceNormalMap:v.normalMapType===aa,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===Fe,clearcoat:he,clearcoatMap:he&&!!v.clearcoatMap,clearcoatRoughnessMap:he&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:he&&!!v.clearcoatNormalMap,iridescence:ue,iridescenceMap:ue&&!!v.iridescenceMap,iridescenceThicknessMap:ue&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===wi,alphaMap:!!v.alphaMap,alphaTest:Me,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!R.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(v.map||v.bumpMap||v.normalMap||v.specularMap||v.alphaMap||v.emissiveMap||v.roughnessMap||v.metalnessMap||v.clearcoatNormalMap||v.iridescenceMap||v.iridescenceThicknessMap||v.transmission>0||v.transmissionMap||v.thicknessMap||v.specularIntensityMap||v.specularColorMap||v.sheen>0||v.sheenColorMap||v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!U,useFog:v.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:d,skinning:J.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:pe,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:a.shadowMap.enabled&&P.length>0,shadowMapType:a.shadowMap.type,toneMapping:v.toneMapped?a.toneMapping:Gt,physicallyCorrectLights:a.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ht,flipSided:v.side===mt,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function m(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const P in v.defines)T.push(P),T.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(y(T,v),w(T,v),T.push(a.outputEncoding)),T.push(v.customProgramCacheKey),T.join()}function y(v,T){v.push(T.precision),v.push(T.outputEncoding),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.combine),v.push(T.vertexUvs),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function w(v,T){s.disableAll(),T.isWebGL2&&s.enable(0),T.supportsVertexTextures&&s.enable(1),T.instancing&&s.enable(2),T.instancingColor&&s.enable(3),T.map&&s.enable(4),T.matcap&&s.enable(5),T.envMap&&s.enable(6),T.lightMap&&s.enable(7),T.aoMap&&s.enable(8),T.emissiveMap&&s.enable(9),T.bumpMap&&s.enable(10),T.normalMap&&s.enable(11),T.objectSpaceNormalMap&&s.enable(12),T.tangentSpaceNormalMap&&s.enable(13),T.clearcoat&&s.enable(14),T.clearcoatMap&&s.enable(15),T.clearcoatRoughnessMap&&s.enable(16),T.clearcoatNormalMap&&s.enable(17),T.iridescence&&s.enable(18),T.iridescenceMap&&s.enable(19),T.iridescenceThicknessMap&&s.enable(20),T.displacementMap&&s.enable(21),T.specularMap&&s.enable(22),T.roughnessMap&&s.enable(23),T.metalnessMap&&s.enable(24),T.gradientMap&&s.enable(25),T.alphaMap&&s.enable(26),T.alphaTest&&s.enable(27),T.vertexColors&&s.enable(28),T.vertexAlphas&&s.enable(29),T.vertexUvs&&s.enable(30),T.vertexTangents&&s.enable(31),T.uvsVertexOnly&&s.enable(32),v.push(s.mask),s.disableAll(),T.fog&&s.enable(0),T.useFog&&s.enable(1),T.flatShading&&s.enable(2),T.logarithmicDepthBuffer&&s.enable(3),T.skinning&&s.enable(4),T.morphTargets&&s.enable(5),T.morphNormals&&s.enable(6),T.morphColors&&s.enable(7),T.premultipliedAlpha&&s.enable(8),T.shadowMapEnabled&&s.enable(9),T.physicallyCorrectLights&&s.enable(10),T.doubleSided&&s.enable(11),T.flipSided&&s.enable(12),T.useDepthPacking&&s.enable(13),T.dithering&&s.enable(14),T.specularIntensityMap&&s.enable(15),T.specularColorMap&&s.enable(16),T.transmission&&s.enable(17),T.transmissionMap&&s.enable(18),T.thicknessMap&&s.enable(19),T.sheen&&s.enable(20),T.sheenColorMap&&s.enable(21),T.sheenRoughnessMap&&s.enable(22),T.decodeVideoTexture&&s.enable(23),T.opaque&&s.enable(24),v.push(s.mask)}function M(v){const T=g[v.type];let P;if(T){const X=Nt[T];P=dc.clone(X.uniforms)}else P=v.uniforms;return P}function b(v,T){let P;for(let X=0,J=c.length;X<J;X++){const U=c[X];if(U.cacheKey===T){P=U,++P.usedTimes;break}}return P===void 0&&(P=new bp(a,T,v,n),c.push(P)),P}function E(v){if(--v.usedTimes===0){const T=c.indexOf(v);c[T]=c[c.length-1],c.pop(),v.destroy()}}function C(v){l.remove(v)}function N(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:M,acquireProgram:b,releaseProgram:E,releaseShaderCache:C,programs:c,dispose:N}}function Ap(){let a=new WeakMap;function e(n){let o=a.get(n);return o===void 0&&(o={},a.set(n,o)),o}function t(n){a.delete(n)}function i(n,o,s){a.get(n)[o]=s}function r(){a=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Cp(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function to(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function io(){const a=[];let e=0;const t=[],i=[],r=[];function n(){e=0,t.length=0,i.length=0,r.length=0}function o(d,u,f,g,p,m){let y=a[e];return y===void 0?(y={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:p,group:m},a[e]=y):(y.id=d.id,y.object=d,y.geometry=u,y.material=f,y.groupOrder=g,y.renderOrder=d.renderOrder,y.z=p,y.group=m),e++,y}function s(d,u,f,g,p,m){const y=o(d,u,f,g,p,m);f.transmission>0?i.push(y):f.transparent===!0?r.push(y):t.push(y)}function l(d,u,f,g,p,m){const y=o(d,u,f,g,p,m);f.transmission>0?i.unshift(y):f.transparent===!0?r.unshift(y):t.unshift(y)}function c(d,u){t.length>1&&t.sort(d||Cp),i.length>1&&i.sort(u||to),r.length>1&&r.sort(u||to)}function h(){for(let d=e,u=a.length;d<u;d++){const f=a[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:n,push:s,unshift:l,finish:h,sort:c}}function Lp(){let a=new WeakMap;function e(i,r){const n=a.get(i);let o;return n===void 0?(o=new io,a.set(i,[o])):r>=n.length?(o=new io,n.push(o)):o=n[r],o}function t(){a=new WeakMap}return{get:e,dispose:t}}function Dp(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Pe};break;case"SpotLight":t={position:new L,direction:new L,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new L,halfWidth:new L,halfHeight:new L};break}return a[e.id]=t,t}}}function Pp(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let Rp=0;function Ip(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function Np(a,e){const t=new Dp,i=Pp(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)r.probe.push(new L);const n=new L,o=new Ce,s=new Ce;function l(h,d){let u=0,f=0,g=0;for(let X=0;X<9;X++)r.probe[X].set(0,0,0);let p=0,m=0,y=0,w=0,M=0,b=0,E=0,C=0,N=0,v=0;h.sort(Ip);const T=d!==!0?Math.PI:1;for(let X=0,J=h.length;X<J;X++){const U=h[X],R=U.color,G=U.intensity,Z=U.distance,$=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)u+=R.r*G*T,f+=R.g*G*T,g+=R.b*G*T;else if(U.isLightProbe)for(let W=0;W<9;W++)r.probe[W].addScaledVector(U.sh.coefficients[W],G);else if(U.isDirectionalLight){const W=t.get(U);if(W.color.copy(U.color).multiplyScalar(U.intensity*T),U.castShadow){const Q=U.shadow,q=i.get(U);q.shadowBias=Q.bias,q.shadowNormalBias=Q.normalBias,q.shadowRadius=Q.radius,q.shadowMapSize=Q.mapSize,r.directionalShadow[p]=q,r.directionalShadowMap[p]=$,r.directionalShadowMatrix[p]=U.shadow.matrix,b++}r.directional[p]=W,p++}else if(U.isSpotLight){const W=t.get(U);W.position.setFromMatrixPosition(U.matrixWorld),W.color.copy(R).multiplyScalar(G*T),W.distance=Z,W.coneCos=Math.cos(U.angle),W.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),W.decay=U.decay,r.spot[y]=W;const Q=U.shadow;if(U.map&&(r.spotLightMap[N]=U.map,N++,Q.updateMatrices(U),U.castShadow&&v++),r.spotLightMatrix[y]=Q.matrix,U.castShadow){const q=i.get(U);q.shadowBias=Q.bias,q.shadowNormalBias=Q.normalBias,q.shadowRadius=Q.radius,q.shadowMapSize=Q.mapSize,r.spotShadow[y]=q,r.spotShadowMap[y]=$,C++}y++}else if(U.isRectAreaLight){const W=t.get(U);W.color.copy(R).multiplyScalar(G),W.halfWidth.set(U.width*.5,0,0),W.halfHeight.set(0,U.height*.5,0),r.rectArea[w]=W,w++}else if(U.isPointLight){const W=t.get(U);if(W.color.copy(U.color).multiplyScalar(U.intensity*T),W.distance=U.distance,W.decay=U.decay,U.castShadow){const Q=U.shadow,q=i.get(U);q.shadowBias=Q.bias,q.shadowNormalBias=Q.normalBias,q.shadowRadius=Q.radius,q.shadowMapSize=Q.mapSize,q.shadowCameraNear=Q.camera.near,q.shadowCameraFar=Q.camera.far,r.pointShadow[m]=q,r.pointShadowMap[m]=$,r.pointShadowMatrix[m]=U.shadow.matrix,E++}r.point[m]=W,m++}else if(U.isHemisphereLight){const W=t.get(U);W.skyColor.copy(U.color).multiplyScalar(G*T),W.groundColor.copy(U.groundColor).multiplyScalar(G*T),r.hemi[M]=W,M++}}w>0&&(e.isWebGL2||a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=te.LTC_FLOAT_1,r.rectAreaLTC2=te.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=te.LTC_HALF_1,r.rectAreaLTC2=te.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=u,r.ambient[1]=f,r.ambient[2]=g;const P=r.hash;(P.directionalLength!==p||P.pointLength!==m||P.spotLength!==y||P.rectAreaLength!==w||P.hemiLength!==M||P.numDirectionalShadows!==b||P.numPointShadows!==E||P.numSpotShadows!==C||P.numSpotMaps!==N)&&(r.directional.length=p,r.spot.length=y,r.rectArea.length=w,r.point.length=m,r.hemi.length=M,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=E,r.pointShadowMap.length=E,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=E,r.spotLightMatrix.length=C+N-v,r.spotLightMap.length=N,r.numSpotLightShadowsWithMaps=v,P.directionalLength=p,P.pointLength=m,P.spotLength=y,P.rectAreaLength=w,P.hemiLength=M,P.numDirectionalShadows=b,P.numPointShadows=E,P.numSpotShadows=C,P.numSpotMaps=N,r.version=Rp++)}function c(h,d){let u=0,f=0,g=0,p=0,m=0;const y=d.matrixWorldInverse;for(let w=0,M=h.length;w<M;w++){const b=h[w];if(b.isDirectionalLight){const E=r.directional[u];E.direction.setFromMatrixPosition(b.matrixWorld),n.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(n),E.direction.transformDirection(y),u++}else if(b.isSpotLight){const E=r.spot[g];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(y),E.direction.setFromMatrixPosition(b.matrixWorld),n.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(n),E.direction.transformDirection(y),g++}else if(b.isRectAreaLight){const E=r.rectArea[p];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(y),s.identity(),o.copy(b.matrixWorld),o.premultiply(y),s.extractRotation(o),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(s),E.halfHeight.applyMatrix4(s),p++}else if(b.isPointLight){const E=r.point[f];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(y),f++}else if(b.isHemisphereLight){const E=r.hemi[m];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(y),m++}}}return{setup:l,setupView:c,state:r}}function ro(a,e){const t=new Np(a,e),i=[],r=[];function n(){i.length=0,r.length=0}function o(h){i.push(h)}function s(h){r.push(h)}function l(h){t.setup(i,h)}function c(h){t.setupView(i,h)}return{init:n,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:s}}function Up(a,e){let t=new WeakMap;function i(n,o=0){const s=t.get(n);let l;return s===void 0?(l=new ro(a,e),t.set(n,[l])):o>=s.length?(l=new ro(a,e),s.push(l)):l=s[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class zp extends si{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ul,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Op extends si{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new L,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Bp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function kp(a,e,t){let i=new $n;const r=new Re,n=new Re,o=new Be,s=new zp({depthPacking:zl}),l=new Op,c={},h=t.maxTextureSize,d={[kt]:mt,[mt]:kt,[Ht]:Ht},u=new yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:Bp,fragmentShader:Fp}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new zt;g.setAttribute("position",new _t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Et(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ss,this.render=function(b,E,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const N=a.getRenderTarget(),v=a.getActiveCubeFace(),T=a.getActiveMipmapLevel(),P=a.state;P.setBlending(Qt),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);for(let X=0,J=b.length;X<J;X++){const U=b[X],R=U.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",U,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;r.copy(R.mapSize);const G=R.getFrameExtents();if(r.multiply(G),n.copy(R.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(n.x=Math.floor(h/G.x),r.x=n.x*G.x,R.mapSize.x=n.x),r.y>h&&(n.y=Math.floor(h/G.y),r.y=n.y*G.y,R.mapSize.y=n.y)),R.map===null){const $=this.type!==nr?{minFilter:Qe,magFilter:Qe}:{};R.map=new gi(r.x,r.y,$),R.map.texture.name=U.name+".shadowMap",R.camera.updateProjectionMatrix()}a.setRenderTarget(R.map),a.clear();const Z=R.getViewportCount();for(let $=0;$<Z;$++){const W=R.getViewport($);o.set(n.x*W.x,n.y*W.y,n.x*W.z,n.y*W.w),P.viewport(o),R.updateMatrices(U,$),i=R.getFrustum(),M(E,C,R.camera,U,this.type)}R.isPointLightShadow!==!0&&this.type===nr&&y(R,C),R.needsUpdate=!1}m.needsUpdate=!1,a.setRenderTarget(N,v,T)};function y(b,E){const C=e.update(p);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new gi(r.x,r.y)),u.uniforms.shadow_pass.value=b.map.texture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,a.setRenderTarget(b.mapPass),a.clear(),a.renderBufferDirect(E,null,C,u,p,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,a.setRenderTarget(b.map),a.clear(),a.renderBufferDirect(E,null,C,f,p,null)}function w(b,E,C,N,v,T){let P=null;const X=C.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(X!==void 0)P=X;else if(P=C.isPointLight===!0?l:s,a.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const J=P.uuid,U=E.uuid;let R=c[J];R===void 0&&(R={},c[J]=R);let G=R[U];G===void 0&&(G=P.clone(),R[U]=G),P=G}return P.visible=E.visible,P.wireframe=E.wireframe,T===nr?P.side=E.shadowSide!==null?E.shadowSide:E.side:P.side=E.shadowSide!==null?E.shadowSide:d[E.side],P.alphaMap=E.alphaMap,P.alphaTest=E.alphaTest,P.map=E.map,P.clipShadows=E.clipShadows,P.clippingPlanes=E.clippingPlanes,P.clipIntersection=E.clipIntersection,P.displacementMap=E.displacementMap,P.displacementScale=E.displacementScale,P.displacementBias=E.displacementBias,P.wireframeLinewidth=E.wireframeLinewidth,P.linewidth=E.linewidth,C.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(C.matrixWorld),P.nearDistance=N,P.farDistance=v),P}function M(b,E,C,N,v){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&v===nr)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,b.matrixWorld);const P=e.update(b),X=b.material;if(Array.isArray(X)){const J=P.groups;for(let U=0,R=J.length;U<R;U++){const G=J[U],Z=X[G.materialIndex];if(Z&&Z.visible){const $=w(b,Z,N,C.near,C.far,v);a.renderBufferDirect(C,null,P,$,b,G)}}}else if(X.visible){const J=w(b,X,N,C.near,C.far,v);a.renderBufferDirect(C,null,P,J,b,null)}}const T=b.children;for(let P=0,X=T.length;P<X;P++)M(T[P],E,C,N,v)}}function Hp(a,e,t){const i=t.isWebGL2;function r(){let A=!1;const F=new Be;let Y=null;const re=new Be(0,0,0,0);return{setMask:function(ge){Y!==ge&&!A&&(a.colorMask(ge,ge,ge,ge),Y=ge)},setLocked:function(ge){A=ge},setClear:function(ge,Ie,Ke,tt,oi){oi===!0&&(ge*=tt,Ie*=tt,Ke*=tt),F.set(ge,Ie,Ke,tt),re.equals(F)===!1&&(a.clearColor(ge,Ie,Ke,tt),re.copy(F))},reset:function(){A=!1,Y=null,re.set(-1,0,0,0)}}}function n(){let A=!1,F=null,Y=null,re=null;return{setTest:function(ge){ge?Me(2929):he(2929)},setMask:function(ge){F!==ge&&!A&&(a.depthMask(ge),F=ge)},setFunc:function(ge){if(Y!==ge){switch(ge){case el:a.depthFunc(512);break;case tl:a.depthFunc(519);break;case il:a.depthFunc(513);break;case fn:a.depthFunc(515);break;case rl:a.depthFunc(514);break;case nl:a.depthFunc(518);break;case sl:a.depthFunc(516);break;case al:a.depthFunc(517);break;default:a.depthFunc(515)}Y=ge}},setLocked:function(ge){A=ge},setClear:function(ge){re!==ge&&(a.clearDepth(ge),re=ge)},reset:function(){A=!1,F=null,Y=null,re=null}}}function o(){let A=!1,F=null,Y=null,re=null,ge=null,Ie=null,Ke=null,tt=null,oi=null;return{setTest:function(He){A||(He?Me(2960):he(2960))},setMask:function(He){F!==He&&!A&&(a.stencilMask(He),F=He)},setFunc:function(He,Bt,bt){(Y!==He||re!==Bt||ge!==bt)&&(a.stencilFunc(He,Bt,bt),Y=He,re=Bt,ge=bt)},setOp:function(He,Bt,bt){(Ie!==He||Ke!==Bt||tt!==bt)&&(a.stencilOp(He,Bt,bt),Ie=He,Ke=Bt,tt=bt)},setLocked:function(He){A=He},setClear:function(He){oi!==He&&(a.clearStencil(He),oi=He)},reset:function(){A=!1,F=null,Y=null,re=null,ge=null,Ie=null,Ke=null,tt=null,oi=null}}}const s=new r,l=new n,c=new o,h=new WeakMap,d=new WeakMap;let u={},f={},g=new WeakMap,p=[],m=null,y=!1,w=null,M=null,b=null,E=null,C=null,N=null,v=null,T=!1,P=null,X=null,J=null,U=null,R=null;const G=a.getParameter(35661);let Z=!1,$=0;const W=a.getParameter(7938);W.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(W)[1]),Z=$>=1):W.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),Z=$>=2);let Q=null,q={};const pe=a.getParameter(3088),z=a.getParameter(2978),j=new Be().fromArray(pe),ie=new Be().fromArray(z);function oe(A,F,Y){const re=new Uint8Array(4),ge=a.createTexture();a.bindTexture(A,ge),a.texParameteri(A,10241,9728),a.texParameteri(A,10240,9728);for(let Ie=0;Ie<Y;Ie++)a.texImage2D(F+Ie,0,6408,1,1,0,6408,5121,re);return ge}const O={};O[3553]=oe(3553,3553,1),O[34067]=oe(34067,34069,6),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Me(2929),l.setFunc(fn),et(!1),Mt(bs),Me(2884),at(Qt);function Me(A){u[A]!==!0&&(a.enable(A),u[A]=!0)}function he(A){u[A]!==!1&&(a.disable(A),u[A]=!1)}function ue(A,F){return f[A]!==F?(a.bindFramebuffer(A,F),f[A]=F,i&&(A===36009&&(f[36160]=F),A===36160&&(f[36009]=F)),!0):!1}function ae(A,F){let Y=p,re=!1;if(A)if(Y=g.get(F),Y===void 0&&(Y=[],g.set(F,Y)),A.isWebGLMultipleRenderTargets){const ge=A.texture;if(Y.length!==ge.length||Y[0]!==36064){for(let Ie=0,Ke=ge.length;Ie<Ke;Ie++)Y[Ie]=36064+Ie;Y.length=ge.length,re=!0}}else Y[0]!==36064&&(Y[0]=36064,re=!0);else Y[0]!==1029&&(Y[0]=1029,re=!0);re&&(t.isWebGL2?a.drawBuffers(Y):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Y))}function Ge(A){return m!==A?(a.useProgram(A),m=A,!0):!1}const be={[Ti]:32774,[Vo]:32778,[Wo]:32779};if(i)be[Cs]=32775,be[Ls]=32776;else{const A=e.get("EXT_blend_minmax");A!==null&&(be[Cs]=A.MIN_EXT,be[Ls]=A.MAX_EXT)}const ve={[jo]:0,[Xo]:1,[qo]:768,[Ds]:770,[$o]:776,[Ko]:774,[Zo]:772,[Yo]:769,[Ps]:771,[Qo]:775,[Jo]:773};function at(A,F,Y,re,ge,Ie,Ke,tt){if(A===Qt){y===!0&&(he(3042),y=!1);return}if(y===!1&&(Me(3042),y=!0),A!==Go){if(A!==w||tt!==T){if((M!==Ti||C!==Ti)&&(a.blendEquation(32774),M=Ti,C=Ti),tt)switch(A){case wi:a.blendFuncSeparate(1,771,1,771);break;case Ts:a.blendFunc(1,1);break;case Es:a.blendFuncSeparate(0,769,0,1);break;case As:a.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case wi:a.blendFuncSeparate(770,771,1,771);break;case Ts:a.blendFunc(770,1);break;case Es:a.blendFuncSeparate(0,769,0,1);break;case As:a.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}b=null,E=null,N=null,v=null,w=A,T=tt}return}ge=ge||F,Ie=Ie||Y,Ke=Ke||re,(F!==M||ge!==C)&&(a.blendEquationSeparate(be[F],be[ge]),M=F,C=ge),(Y!==b||re!==E||Ie!==N||Ke!==v)&&(a.blendFuncSeparate(ve[Y],ve[re],ve[Ie],ve[Ke]),b=Y,E=re,N=Ie,v=Ke),w=A,T=!1}function yt(A,F){A.side===Ht?he(2884):Me(2884);let Y=A.side===mt;F&&(Y=!Y),et(Y),A.blending===wi&&A.transparent===!1?at(Qt):at(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.premultipliedAlpha),l.setFunc(A.depthFunc),l.setTest(A.depthTest),l.setMask(A.depthWrite),s.setMask(A.colorWrite);const re=A.stencilWrite;c.setTest(re),re&&(c.setMask(A.stencilWriteMask),c.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),c.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),Ue(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?Me(32926):he(32926)}function et(A){P!==A&&(A?a.frontFace(2304):a.frontFace(2305),P=A)}function Mt(A){A!==ko?(Me(2884),A!==X&&(A===bs?a.cullFace(1029):A===Ho?a.cullFace(1028):a.cullFace(1032))):he(2884),X=A}function Xe(A){A!==J&&(Z&&a.lineWidth(A),J=A)}function Ue(A,F,Y){A?(Me(32823),(U!==F||R!==Y)&&(a.polygonOffset(F,Y),U=F,R=Y)):he(32823)}function Ot(A){A?Me(3089):he(3089)}function At(A){A===void 0&&(A=33984+G-1),Q!==A&&(a.activeTexture(A),Q=A)}function S(A,F,Y){Y===void 0&&(Q===null?Y=33984+G-1:Y=Q);let re=q[Y];re===void 0&&(re={type:void 0,texture:void 0},q[Y]=re),(re.type!==A||re.texture!==F)&&(Q!==Y&&(a.activeTexture(Y),Q=Y),a.bindTexture(A,F||O[A]),re.type=A,re.texture=F)}function _(){const A=q[Q];A!==void 0&&A.type!==void 0&&(a.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function B(){try{a.compressedTexImage2D.apply(a,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function K(){try{a.compressedTexImage3D.apply(a,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ee(){try{a.texSubImage2D.apply(a,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ne(){try{a.texSubImage3D.apply(a,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function xe(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function se(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function V(){try{a.texStorage2D.apply(a,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function fe(){try{a.texStorage3D.apply(a,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function _e(){try{a.texImage2D.apply(a,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ce(){try{a.texImage3D.apply(a,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function me(A){j.equals(A)===!1&&(a.scissor(A.x,A.y,A.z,A.w),j.copy(A))}function de(A){ie.equals(A)===!1&&(a.viewport(A.x,A.y,A.z,A.w),ie.copy(A))}function Le(A,F){let Y=d.get(F);Y===void 0&&(Y=new WeakMap,d.set(F,Y));let re=Y.get(A);re===void 0&&(re=a.getUniformBlockIndex(F,A.name),Y.set(A,re))}function ke(A,F){const Y=d.get(F).get(A);h.get(F)!==Y&&(a.uniformBlockBinding(F,Y,A.__bindingPointIndex),h.set(F,Y))}function Je(){a.disable(3042),a.disable(2884),a.disable(2929),a.disable(32823),a.disable(3089),a.disable(2960),a.disable(32926),a.blendEquation(32774),a.blendFunc(1,0),a.blendFuncSeparate(1,0,1,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(513),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(519,0,4294967295),a.stencilOp(7680,7680,7680),a.clearStencil(0),a.cullFace(1029),a.frontFace(2305),a.polygonOffset(0,0),a.activeTexture(33984),a.bindFramebuffer(36160,null),i===!0&&(a.bindFramebuffer(36009,null),a.bindFramebuffer(36008,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),u={},Q=null,q={},f={},g=new WeakMap,p=[],m=null,y=!1,w=null,M=null,b=null,E=null,C=null,N=null,v=null,T=!1,P=null,X=null,J=null,U=null,R=null,j.set(0,0,a.canvas.width,a.canvas.height),ie.set(0,0,a.canvas.width,a.canvas.height),s.reset(),l.reset(),c.reset()}return{buffers:{color:s,depth:l,stencil:c},enable:Me,disable:he,bindFramebuffer:ue,drawBuffers:ae,useProgram:Ge,setBlending:at,setMaterial:yt,setFlipSided:et,setCullFace:Mt,setLineWidth:Xe,setPolygonOffset:Ue,setScissorTest:Ot,activeTexture:At,bindTexture:S,unbindTexture:_,compressedTexImage2D:B,compressedTexImage3D:K,texImage2D:_e,texImage3D:ce,updateUBOMapping:Le,uniformBlockBinding:ke,texStorage2D:V,texStorage3D:fe,texSubImage2D:ee,texSubImage3D:ne,compressedTexSubImage2D:xe,compressedTexSubImage3D:se,scissor:me,viewport:de,reset:Je}}function Gp(a,e,t,i,r,n,o){const s=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,h=r.maxTextureSize,d=r.maxSamples,u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const m=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(S,_){return y?new OffscreenCanvas(S,_):ur("canvas")}function M(S,_,B,K){let ee=1;if((S.width>K||S.height>K)&&(ee=K/Math.max(S.width,S.height)),ee<1||_===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){const ne=_?Ir:Math.floor,xe=ne(ee*S.width),se=ne(ee*S.height);p===void 0&&(p=w(xe,se));const V=B?w(xe,se):p;return V.width=xe,V.height=se,V.getContext("2d").drawImage(S,0,0,xe,se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+xe+"x"+se+")."),V}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function b(S){return Dn(S.width)&&Dn(S.height)}function E(S){return s?!1:S.wrapS!==St||S.wrapT!==St||S.minFilter!==Qe&&S.minFilter!==ft}function C(S,_){return S.generateMipmaps&&_&&S.minFilter!==Qe&&S.minFilter!==ft}function N(S){a.generateMipmap(S)}function v(S,_,B,K,ee=!1){if(s===!1)return _;if(S!==null){if(a[S]!==void 0)return a[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let ne=_;return _===6403&&(B===5126&&(ne=33326),B===5131&&(ne=33325),B===5121&&(ne=33321)),_===33319&&(B===5126&&(ne=33328),B===5131&&(ne=33327),B===5121&&(ne=33323)),_===6408&&(B===5126&&(ne=34836),B===5131&&(ne=34842),B===5121&&(ne=K===Fe&&ee===!1?35907:32856),B===32819&&(ne=32854),B===32820&&(ne=32855)),(ne===33325||ne===33326||ne===33327||ne===33328||ne===34842||ne===34836)&&e.get("EXT_color_buffer_float"),ne}function T(S,_,B){return C(S,B)===!0||S.isFramebufferTexture&&S.minFilter!==Qe&&S.minFilter!==ft?Math.log2(Math.max(_.width,_.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?_.mipmaps.length:1}function P(S){return S===Qe||S===vn||S===Dr?9728:9729}function X(S){const _=S.target;_.removeEventListener("dispose",X),U(_),_.isVideoTexture&&g.delete(_)}function J(S){const _=S.target;_.removeEventListener("dispose",J),G(_)}function U(S){const _=i.get(S);if(_.__webglInit===void 0)return;const B=S.source,K=m.get(B);if(K){const ee=K[_.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&R(S),Object.keys(K).length===0&&m.delete(B)}i.remove(S)}function R(S){const _=i.get(S);a.deleteTexture(_.__webglTexture);const B=S.source,K=m.get(B);delete K[_.__cacheKey],o.memory.textures--}function G(S){const _=S.texture,B=i.get(S),K=i.get(_);if(K.__webglTexture!==void 0&&(a.deleteTexture(K.__webglTexture),o.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++)a.deleteFramebuffer(B.__webglFramebuffer[ee]),B.__webglDepthbuffer&&a.deleteRenderbuffer(B.__webglDepthbuffer[ee]);else{if(a.deleteFramebuffer(B.__webglFramebuffer),B.__webglDepthbuffer&&a.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&a.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let ee=0;ee<B.__webglColorRenderbuffer.length;ee++)B.__webglColorRenderbuffer[ee]&&a.deleteRenderbuffer(B.__webglColorRenderbuffer[ee]);B.__webglDepthRenderbuffer&&a.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let ee=0,ne=_.length;ee<ne;ee++){const xe=i.get(_[ee]);xe.__webglTexture&&(a.deleteTexture(xe.__webglTexture),o.memory.textures--),i.remove(_[ee])}i.remove(_),i.remove(S)}let Z=0;function $(){Z=0}function W(){const S=Z;return S>=l&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+l),Z+=1,S}function Q(S){const _=[];return _.push(S.wrapS),_.push(S.wrapT),_.push(S.wrapR||0),_.push(S.magFilter),_.push(S.minFilter),_.push(S.anisotropy),_.push(S.internalFormat),_.push(S.format),_.push(S.type),_.push(S.generateMipmaps),_.push(S.premultiplyAlpha),_.push(S.flipY),_.push(S.unpackAlignment),_.push(S.encoding),_.join()}function q(S,_){const B=i.get(S);if(S.isVideoTexture&&Ot(S),S.isRenderTargetTexture===!1&&S.version>0&&B.__version!==S.version){const K=S.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{he(B,S,_);return}}t.bindTexture(3553,B.__webglTexture,33984+_)}function pe(S,_){const B=i.get(S);if(S.version>0&&B.__version!==S.version){he(B,S,_);return}t.bindTexture(35866,B.__webglTexture,33984+_)}function z(S,_){const B=i.get(S);if(S.version>0&&B.__version!==S.version){he(B,S,_);return}t.bindTexture(32879,B.__webglTexture,33984+_)}function j(S,_){const B=i.get(S);if(S.version>0&&B.__version!==S.version){ue(B,S,_);return}t.bindTexture(34067,B.__webglTexture,33984+_)}const ie={[Cr]:10497,[St]:33071,[Lr]:33648},oe={[Qe]:9728,[vn]:9984,[Dr]:9986,[ft]:9729,[Us]:9985,[Ci]:9987};function O(S,_,B){if(B?(a.texParameteri(S,10242,ie[_.wrapS]),a.texParameteri(S,10243,ie[_.wrapT]),(S===32879||S===35866)&&a.texParameteri(S,32882,ie[_.wrapR]),a.texParameteri(S,10240,oe[_.magFilter]),a.texParameteri(S,10241,oe[_.minFilter])):(a.texParameteri(S,10242,33071),a.texParameteri(S,10243,33071),(S===32879||S===35866)&&a.texParameteri(S,32882,33071),(_.wrapS!==St||_.wrapT!==St)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(S,10240,P(_.magFilter)),a.texParameteri(S,10241,P(_.minFilter)),_.minFilter!==Qe&&_.minFilter!==ft&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const K=e.get("EXT_texture_filter_anisotropic");if(_.magFilter===Qe||_.minFilter!==Dr&&_.minFilter!==Ci||_.type===$t&&e.has("OES_texture_float_linear")===!1||s===!1&&_.type===sr&&e.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||i.get(_).__currentAnisotropy)&&(a.texParameterf(S,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy)}}function Me(S,_){let B=!1;S.__webglInit===void 0&&(S.__webglInit=!0,_.addEventListener("dispose",X));const K=_.source;let ee=m.get(K);ee===void 0&&(ee={},m.set(K,ee));const ne=Q(_);if(ne!==S.__cacheKey){ee[ne]===void 0&&(ee[ne]={texture:a.createTexture(),usedTimes:0},o.memory.textures++,B=!0),ee[ne].usedTimes++;const xe=ee[S.__cacheKey];xe!==void 0&&(ee[S.__cacheKey].usedTimes--,xe.usedTimes===0&&R(_)),S.__cacheKey=ne,S.__webglTexture=ee[ne].texture}return B}function he(S,_,B){let K=3553;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(K=35866),_.isData3DTexture&&(K=32879);const ee=Me(S,_),ne=_.source;t.bindTexture(K,S.__webglTexture,33984+B);const xe=i.get(ne);if(ne.version!==xe.__version||ee===!0){t.activeTexture(33984+B),a.pixelStorei(37440,_.flipY),a.pixelStorei(37441,_.premultiplyAlpha),a.pixelStorei(3317,_.unpackAlignment),a.pixelStorei(37443,0);const se=E(_)&&b(_.image)===!1;let V=M(_.image,se,!1,h);V=At(_,V);const fe=b(V)||s,_e=n.convert(_.format,_.encoding);let ce=n.convert(_.type),me=v(_.internalFormat,_e,ce,_.encoding,_.isVideoTexture);O(K,_,fe);let de;const Le=_.mipmaps,ke=s&&_.isVideoTexture!==!0,Je=xe.__version===void 0||ee===!0,A=T(_,V,fe);if(_.isDepthTexture)me=6402,s?_.type===$t?me=36012:_.type===di?me=33190:_.type===Li?me=35056:me=33189:_.type===$t&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===pi&&me===6402&&_.type!==zs&&_.type!==di&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=di,ce=n.convert(_.type)),_.format===Di&&me===6402&&(me=34041,_.type!==Li&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=Li,ce=n.convert(_.type))),Je&&(ke?t.texStorage2D(3553,1,me,V.width,V.height):t.texImage2D(3553,0,me,V.width,V.height,0,_e,ce,null));else if(_.isDataTexture)if(Le.length>0&&fe){ke&&Je&&t.texStorage2D(3553,A,me,Le[0].width,Le[0].height);for(let F=0,Y=Le.length;F<Y;F++)de=Le[F],ke?t.texSubImage2D(3553,F,0,0,de.width,de.height,_e,ce,de.data):t.texImage2D(3553,F,me,de.width,de.height,0,_e,ce,de.data);_.generateMipmaps=!1}else ke?(Je&&t.texStorage2D(3553,A,me,V.width,V.height),t.texSubImage2D(3553,0,0,0,V.width,V.height,_e,ce,V.data)):t.texImage2D(3553,0,me,V.width,V.height,0,_e,ce,V.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){ke&&Je&&t.texStorage3D(35866,A,me,Le[0].width,Le[0].height,V.depth);for(let F=0,Y=Le.length;F<Y;F++)de=Le[F],_.format!==wt?_e!==null?ke?t.compressedTexSubImage3D(35866,F,0,0,0,de.width,de.height,V.depth,_e,de.data,0,0):t.compressedTexImage3D(35866,F,me,de.width,de.height,V.depth,0,de.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?t.texSubImage3D(35866,F,0,0,0,de.width,de.height,V.depth,_e,ce,de.data):t.texImage3D(35866,F,me,de.width,de.height,V.depth,0,_e,ce,de.data)}else{ke&&Je&&t.texStorage2D(3553,A,me,Le[0].width,Le[0].height);for(let F=0,Y=Le.length;F<Y;F++)de=Le[F],_.format!==wt?_e!==null?ke?t.compressedTexSubImage2D(3553,F,0,0,de.width,de.height,_e,de.data):t.compressedTexImage2D(3553,F,me,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?t.texSubImage2D(3553,F,0,0,de.width,de.height,_e,ce,de.data):t.texImage2D(3553,F,me,de.width,de.height,0,_e,ce,de.data)}else if(_.isDataArrayTexture)ke?(Je&&t.texStorage3D(35866,A,me,V.width,V.height,V.depth),t.texSubImage3D(35866,0,0,0,0,V.width,V.height,V.depth,_e,ce,V.data)):t.texImage3D(35866,0,me,V.width,V.height,V.depth,0,_e,ce,V.data);else if(_.isData3DTexture)ke?(Je&&t.texStorage3D(32879,A,me,V.width,V.height,V.depth),t.texSubImage3D(32879,0,0,0,0,V.width,V.height,V.depth,_e,ce,V.data)):t.texImage3D(32879,0,me,V.width,V.height,V.depth,0,_e,ce,V.data);else if(_.isFramebufferTexture){if(Je)if(ke)t.texStorage2D(3553,A,me,V.width,V.height);else{let F=V.width,Y=V.height;for(let re=0;re<A;re++)t.texImage2D(3553,re,me,F,Y,0,_e,ce,null),F>>=1,Y>>=1}}else if(Le.length>0&&fe){ke&&Je&&t.texStorage2D(3553,A,me,Le[0].width,Le[0].height);for(let F=0,Y=Le.length;F<Y;F++)de=Le[F],ke?t.texSubImage2D(3553,F,0,0,_e,ce,de):t.texImage2D(3553,F,me,_e,ce,de);_.generateMipmaps=!1}else ke?(Je&&t.texStorage2D(3553,A,me,V.width,V.height),t.texSubImage2D(3553,0,0,0,_e,ce,V)):t.texImage2D(3553,0,me,_e,ce,V);C(_,fe)&&N(K),xe.__version=ne.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function ue(S,_,B){if(_.image.length!==6)return;const K=Me(S,_),ee=_.source;t.bindTexture(34067,S.__webglTexture,33984+B);const ne=i.get(ee);if(ee.version!==ne.__version||K===!0){t.activeTexture(33984+B),a.pixelStorei(37440,_.flipY),a.pixelStorei(37441,_.premultiplyAlpha),a.pixelStorei(3317,_.unpackAlignment),a.pixelStorei(37443,0);const xe=_.isCompressedTexture||_.image[0].isCompressedTexture,se=_.image[0]&&_.image[0].isDataTexture,V=[];for(let F=0;F<6;F++)!xe&&!se?V[F]=M(_.image[F],!1,!0,c):V[F]=se?_.image[F].image:_.image[F],V[F]=At(_,V[F]);const fe=V[0],_e=b(fe)||s,ce=n.convert(_.format,_.encoding),me=n.convert(_.type),de=v(_.internalFormat,ce,me,_.encoding),Le=s&&_.isVideoTexture!==!0,ke=ne.__version===void 0||K===!0;let Je=T(_,fe,_e);O(34067,_,_e);let A;if(xe){Le&&ke&&t.texStorage2D(34067,Je,de,fe.width,fe.height);for(let F=0;F<6;F++){A=V[F].mipmaps;for(let Y=0;Y<A.length;Y++){const re=A[Y];_.format!==wt?ce!==null?Le?t.compressedTexSubImage2D(34069+F,Y,0,0,re.width,re.height,ce,re.data):t.compressedTexImage2D(34069+F,Y,de,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?t.texSubImage2D(34069+F,Y,0,0,re.width,re.height,ce,me,re.data):t.texImage2D(34069+F,Y,de,re.width,re.height,0,ce,me,re.data)}}}else{A=_.mipmaps,Le&&ke&&(A.length>0&&Je++,t.texStorage2D(34067,Je,de,V[0].width,V[0].height));for(let F=0;F<6;F++)if(se){Le?t.texSubImage2D(34069+F,0,0,0,V[F].width,V[F].height,ce,me,V[F].data):t.texImage2D(34069+F,0,de,V[F].width,V[F].height,0,ce,me,V[F].data);for(let Y=0;Y<A.length;Y++){const re=A[Y].image[F].image;Le?t.texSubImage2D(34069+F,Y+1,0,0,re.width,re.height,ce,me,re.data):t.texImage2D(34069+F,Y+1,de,re.width,re.height,0,ce,me,re.data)}}else{Le?t.texSubImage2D(34069+F,0,0,0,ce,me,V[F]):t.texImage2D(34069+F,0,de,ce,me,V[F]);for(let Y=0;Y<A.length;Y++){const re=A[Y];Le?t.texSubImage2D(34069+F,Y+1,0,0,ce,me,re.image[F]):t.texImage2D(34069+F,Y+1,de,ce,me,re.image[F])}}}C(_,_e)&&N(34067),ne.__version=ee.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function ae(S,_,B,K,ee){const ne=n.convert(B.format,B.encoding),xe=n.convert(B.type),se=v(B.internalFormat,ne,xe,B.encoding);i.get(_).__hasExternalTextures||(ee===32879||ee===35866?t.texImage3D(ee,0,se,_.width,_.height,_.depth,0,ne,xe,null):t.texImage2D(ee,0,se,_.width,_.height,0,ne,xe,null)),t.bindFramebuffer(36160,S),Ue(_)?u.framebufferTexture2DMultisampleEXT(36160,K,ee,i.get(B).__webglTexture,0,Xe(_)):(ee===3553||ee>=34069&&ee<=34074)&&a.framebufferTexture2D(36160,K,ee,i.get(B).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ge(S,_,B){if(a.bindRenderbuffer(36161,S),_.depthBuffer&&!_.stencilBuffer){let K=33189;if(B||Ue(_)){const ee=_.depthTexture;ee&&ee.isDepthTexture&&(ee.type===$t?K=36012:ee.type===di&&(K=33190));const ne=Xe(_);Ue(_)?u.renderbufferStorageMultisampleEXT(36161,ne,K,_.width,_.height):a.renderbufferStorageMultisample(36161,ne,K,_.width,_.height)}else a.renderbufferStorage(36161,K,_.width,_.height);a.framebufferRenderbuffer(36160,36096,36161,S)}else if(_.depthBuffer&&_.stencilBuffer){const K=Xe(_);B&&Ue(_)===!1?a.renderbufferStorageMultisample(36161,K,35056,_.width,_.height):Ue(_)?u.renderbufferStorageMultisampleEXT(36161,K,35056,_.width,_.height):a.renderbufferStorage(36161,34041,_.width,_.height),a.framebufferRenderbuffer(36160,33306,36161,S)}else{const K=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let ee=0;ee<K.length;ee++){const ne=K[ee],xe=n.convert(ne.format,ne.encoding),se=n.convert(ne.type),V=v(ne.internalFormat,xe,se,ne.encoding),fe=Xe(_);B&&Ue(_)===!1?a.renderbufferStorageMultisample(36161,fe,V,_.width,_.height):Ue(_)?u.renderbufferStorageMultisampleEXT(36161,fe,V,_.width,_.height):a.renderbufferStorage(36161,V,_.width,_.height)}}a.bindRenderbuffer(36161,null)}function be(S,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,S),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),q(_.depthTexture,0);const B=i.get(_.depthTexture).__webglTexture,K=Xe(_);if(_.depthTexture.format===pi)Ue(_)?u.framebufferTexture2DMultisampleEXT(36160,36096,3553,B,0,K):a.framebufferTexture2D(36160,36096,3553,B,0);else if(_.depthTexture.format===Di)Ue(_)?u.framebufferTexture2DMultisampleEXT(36160,33306,3553,B,0,K):a.framebufferTexture2D(36160,33306,3553,B,0);else throw new Error("Unknown depthTexture format")}function ve(S){const _=i.get(S),B=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!_.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");be(_.__webglFramebuffer,S)}else if(B){_.__webglDepthbuffer=[];for(let K=0;K<6;K++)t.bindFramebuffer(36160,_.__webglFramebuffer[K]),_.__webglDepthbuffer[K]=a.createRenderbuffer(),Ge(_.__webglDepthbuffer[K],S,!1)}else t.bindFramebuffer(36160,_.__webglFramebuffer),_.__webglDepthbuffer=a.createRenderbuffer(),Ge(_.__webglDepthbuffer,S,!1);t.bindFramebuffer(36160,null)}function at(S,_,B){const K=i.get(S);_!==void 0&&ae(K.__webglFramebuffer,S,S.texture,36064,3553),B!==void 0&&ve(S)}function yt(S){const _=S.texture,B=i.get(S),K=i.get(_);S.addEventListener("dispose",J),S.isWebGLMultipleRenderTargets!==!0&&(K.__webglTexture===void 0&&(K.__webglTexture=a.createTexture()),K.__version=_.version,o.memory.textures++);const ee=S.isWebGLCubeRenderTarget===!0,ne=S.isWebGLMultipleRenderTargets===!0,xe=b(S)||s;if(ee){B.__webglFramebuffer=[];for(let se=0;se<6;se++)B.__webglFramebuffer[se]=a.createFramebuffer()}else{if(B.__webglFramebuffer=a.createFramebuffer(),ne)if(r.drawBuffers){const se=S.texture;for(let V=0,fe=se.length;V<fe;V++){const _e=i.get(se[V]);_e.__webglTexture===void 0&&(_e.__webglTexture=a.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&S.samples>0&&Ue(S)===!1){const se=ne?_:[_];B.__webglMultisampledFramebuffer=a.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,B.__webglMultisampledFramebuffer);for(let V=0;V<se.length;V++){const fe=se[V];B.__webglColorRenderbuffer[V]=a.createRenderbuffer(),a.bindRenderbuffer(36161,B.__webglColorRenderbuffer[V]);const _e=n.convert(fe.format,fe.encoding),ce=n.convert(fe.type),me=v(fe.internalFormat,_e,ce,fe.encoding,S.isXRRenderTarget===!0),de=Xe(S);a.renderbufferStorageMultisample(36161,de,me,S.width,S.height),a.framebufferRenderbuffer(36160,36064+V,36161,B.__webglColorRenderbuffer[V])}a.bindRenderbuffer(36161,null),S.depthBuffer&&(B.__webglDepthRenderbuffer=a.createRenderbuffer(),Ge(B.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(36160,null)}}if(ee){t.bindTexture(34067,K.__webglTexture),O(34067,_,xe);for(let se=0;se<6;se++)ae(B.__webglFramebuffer[se],S,_,36064,34069+se);C(_,xe)&&N(34067),t.unbindTexture()}else if(ne){const se=S.texture;for(let V=0,fe=se.length;V<fe;V++){const _e=se[V],ce=i.get(_e);t.bindTexture(3553,ce.__webglTexture),O(3553,_e,xe),ae(B.__webglFramebuffer,S,_e,36064+V,3553),C(_e,xe)&&N(3553)}t.unbindTexture()}else{let se=3553;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(s?se=S.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(se,K.__webglTexture),O(se,_,xe),ae(B.__webglFramebuffer,S,_,36064,se),C(_,xe)&&N(se),t.unbindTexture()}S.depthBuffer&&ve(S)}function et(S){const _=b(S)||s,B=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let K=0,ee=B.length;K<ee;K++){const ne=B[K];if(C(ne,_)){const xe=S.isWebGLCubeRenderTarget?34067:3553,se=i.get(ne).__webglTexture;t.bindTexture(xe,se),N(xe),t.unbindTexture()}}}function Mt(S){if(s&&S.samples>0&&Ue(S)===!1){const _=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],B=S.width,K=S.height;let ee=16384;const ne=[],xe=S.stencilBuffer?33306:36096,se=i.get(S),V=S.isWebGLMultipleRenderTargets===!0;if(V)for(let fe=0;fe<_.length;fe++)t.bindFramebuffer(36160,se.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+fe,36161,null),t.bindFramebuffer(36160,se.__webglFramebuffer),a.framebufferTexture2D(36009,36064+fe,3553,null,0);t.bindFramebuffer(36008,se.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,se.__webglFramebuffer);for(let fe=0;fe<_.length;fe++){ne.push(36064+fe),S.depthBuffer&&ne.push(xe);const _e=se.__ignoreDepthValues!==void 0?se.__ignoreDepthValues:!1;if(_e===!1&&(S.depthBuffer&&(ee|=256),S.stencilBuffer&&(ee|=1024)),V&&a.framebufferRenderbuffer(36008,36064,36161,se.__webglColorRenderbuffer[fe]),_e===!0&&(a.invalidateFramebuffer(36008,[xe]),a.invalidateFramebuffer(36009,[xe])),V){const ce=i.get(_[fe]).__webglTexture;a.framebufferTexture2D(36009,36064,3553,ce,0)}a.blitFramebuffer(0,0,B,K,0,0,B,K,ee,9728),f&&a.invalidateFramebuffer(36008,ne)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),V)for(let fe=0;fe<_.length;fe++){t.bindFramebuffer(36160,se.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+fe,36161,se.__webglColorRenderbuffer[fe]);const _e=i.get(_[fe]).__webglTexture;t.bindFramebuffer(36160,se.__webglFramebuffer),a.framebufferTexture2D(36009,36064+fe,3553,_e,0)}t.bindFramebuffer(36009,se.__webglMultisampledFramebuffer)}}function Xe(S){return Math.min(d,S.samples)}function Ue(S){const _=i.get(S);return s&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Ot(S){const _=o.render.frame;g.get(S)!==_&&(g.set(S,_),S.update())}function At(S,_){const B=S.encoding,K=S.format,ee=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===Cn||B!==mi&&(B===Fe?s===!1?e.has("EXT_sRGB")===!0&&K===wt?(S.format=Cn,S.minFilter=ft,S.generateMipmaps=!1):_=da.sRGBToLinear(_):(K!==wt||ee!==ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",B)),_}this.allocateTextureUnit=W,this.resetTextureUnits=$,this.setTexture2D=q,this.setTexture2DArray=pe,this.setTexture3D=z,this.setTextureCube=j,this.rebindTextures=at,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=Ue}function Vp(a,e,t){const i=t.isWebGL2;function r(n,o=null){let s;if(n===ui)return 5121;if(n===gl)return 32819;if(n===_l)return 32820;if(n===pl)return 5120;if(n===ml)return 5122;if(n===zs)return 5123;if(n===fl)return 5124;if(n===di)return 5125;if(n===$t)return 5126;if(n===sr)return i?5131:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(n===vl)return 6406;if(n===wt)return 6408;if(n===xl)return 6409;if(n===yl)return 6410;if(n===pi)return 6402;if(n===Di)return 34041;if(n===Cn)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(n===Ml)return 6403;if(n===bl)return 36244;if(n===Sl)return 33319;if(n===wl)return 33320;if(n===Tl)return 36249;if(n===xn||n===yn||n===Mn||n===bn)if(o===Fe)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===xn)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===yn)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Mn)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===bn)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===xn)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===yn)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Mn)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===bn)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Os||n===Bs||n===Fs||n===ks)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Os)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Bs)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fs)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ks)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===El)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===Hs||n===Gs)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Hs)return o===Fe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Gs)return o===Fe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Vs||n===Ws||n===js||n===Xs||n===qs||n===Ys||n===Zs||n===Js||n===Ks||n===Qs||n===$s||n===ea||n===ta||n===ia)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Vs)return o===Fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ws)return o===Fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===js)return o===Fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Xs)return o===Fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===qs)return o===Fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ys)return o===Fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Zs)return o===Fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Js)return o===Fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ks)return o===Fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Qs)return o===Fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$s)return o===Fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ea)return o===Fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ta)return o===Fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ia)return o===Fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Sn)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Sn)return o===Fe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(n===Al||n===ra||n===na||n===sa)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Sn)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ra)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===na)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===sa)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Li?i?34042:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):a[n]!==void 0?a[n]:null}return{convert:r}}class Wp extends ut{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class yr extends Ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jp={type:"move"};class as{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,n=null,o=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const p of e.hand.values()){const m=t.getJointPose(p,i),y=this._getHandJoint(c,p);m!==null&&(y.matrix.fromArray(m.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.jointRadius=m.radius),y.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(n=t.getPose(e.gripSpace,i),n!==null&&(l.matrix.fromArray(n.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),n.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(n.linearVelocity)):l.hasLinearVelocity=!1,n.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(n.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&n!==null&&(r=n),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(jp)))}return s!==null&&(s.visible=r!==null),l!==null&&(l.visible=n!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new yr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Xp extends st{constructor(e,t,i,r,n,o,s,l,c,h){if(h=h!==void 0?h:pi,h!==pi&&h!==Di)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===pi&&(i=di),i===void 0&&h===Di&&(i=Li),super(null,r,n,o,s,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:Qe,this.minFilter=l!==void 0?l:Qe,this.flipY=!1,this.generateMipmaps=!1}}class qp extends ei{constructor(e,t){super();const i=this;let r=null,n=1,o=null,s="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null;const p=t.getContextAttributes();let m=null,y=null;const w=[],M=[],b=new Set,E=new Map,C=new ut;C.layers.enable(1),C.viewport=new Be;const N=new ut;N.layers.enable(2),N.viewport=new Be;const v=[C,N],T=new Wp;T.layers.enable(1),T.layers.enable(2);let P=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let j=w[z];return j===void 0&&(j=new as,w[z]=j),j.getTargetRaySpace()},this.getControllerGrip=function(z){let j=w[z];return j===void 0&&(j=new as,w[z]=j),j.getGripSpace()},this.getHand=function(z){let j=w[z];return j===void 0&&(j=new as,w[z]=j),j.getHandSpace()};function J(z){const j=M.indexOf(z.inputSource);if(j===-1)return;const ie=w[j];ie!==void 0&&ie.dispatchEvent({type:z.type,data:z.inputSource})}function U(){r.removeEventListener("select",J),r.removeEventListener("selectstart",J),r.removeEventListener("selectend",J),r.removeEventListener("squeeze",J),r.removeEventListener("squeezestart",J),r.removeEventListener("squeezeend",J),r.removeEventListener("end",U),r.removeEventListener("inputsourceschange",R);for(let z=0;z<w.length;z++){const j=M[z];j!==null&&(M[z]=null,w[z].disconnect(j))}P=null,X=null,e.setRenderTarget(m),f=null,u=null,d=null,r=null,y=null,pe.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){n=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){s=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(z){if(r=z,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",J),r.addEventListener("selectstart",J),r.addEventListener("selectend",J),r.addEventListener("squeeze",J),r.addEventListener("squeezestart",J),r.addEventListener("squeezeend",J),r.addEventListener("end",U),r.addEventListener("inputsourceschange",R),p.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const j={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:p.alpha,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:n};f=new XRWebGLLayer(r,t,j),r.updateRenderState({baseLayer:f}),y=new gi(f.framebufferWidth,f.framebufferHeight,{format:wt,type:ui,encoding:e.outputEncoding,stencilBuffer:p.stencil})}else{let j=null,ie=null,oe=null;p.depth&&(oe=p.stencil?35056:33190,j=p.stencil?Di:pi,ie=p.stencil?Li:di);const O={colorFormat:32856,depthFormat:oe,scaleFactor:n};d=new XRWebGLBinding(r,t),u=d.createProjectionLayer(O),r.updateRenderState({layers:[u]}),y=new gi(u.textureWidth,u.textureHeight,{format:wt,type:ui,depthTexture:new Xp(u.textureWidth,u.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:p.stencil,encoding:e.outputEncoding,samples:p.antialias?4:0});const Me=e.properties.get(y);Me.__ignoreDepthValues=u.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(s),pe.setContext(r),pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function R(z){for(let j=0;j<z.removed.length;j++){const ie=z.removed[j],oe=M.indexOf(ie);oe>=0&&(M[oe]=null,w[oe].disconnect(ie))}for(let j=0;j<z.added.length;j++){const ie=z.added[j];let oe=M.indexOf(ie);if(oe===-1){for(let Me=0;Me<w.length;Me++)if(Me>=M.length){M.push(ie),oe=Me;break}else if(M[Me]===null){M[Me]=ie,oe=Me;break}if(oe===-1)break}const O=w[oe];O&&O.connect(ie)}}const G=new L,Z=new L;function $(z,j,ie){G.setFromMatrixPosition(j.matrixWorld),Z.setFromMatrixPosition(ie.matrixWorld);const oe=G.distanceTo(Z),O=j.projectionMatrix.elements,Me=ie.projectionMatrix.elements,he=O[14]/(O[10]-1),ue=O[14]/(O[10]+1),ae=(O[9]+1)/O[5],Ge=(O[9]-1)/O[5],be=(O[8]-1)/O[0],ve=(Me[8]+1)/Me[0],at=he*be,yt=he*ve,et=oe/(-be+ve),Mt=et*-be;j.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Mt),z.translateZ(et),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const Xe=he+et,Ue=ue+et,Ot=at-Mt,At=yt+(oe-Mt),S=ae*ue/Ue*Xe,_=Ge*ue/Ue*Xe;z.projectionMatrix.makePerspective(Ot,At,S,_,Xe,Ue)}function W(z,j){j===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(j.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(r===null)return;T.near=N.near=C.near=z.near,T.far=N.far=C.far=z.far,(P!==T.near||X!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),P=T.near,X=T.far);const j=z.parent,ie=T.cameras;W(T,j);for(let O=0;O<ie.length;O++)W(ie[O],j);T.matrixWorld.decompose(T.position,T.quaternion,T.scale),z.matrix.copy(T.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale);const oe=z.children;for(let O=0,Me=oe.length;O<Me;O++)oe[O].updateMatrixWorld(!0);ie.length===2?$(T,C,N):T.projectionMatrix.copy(C.projectionMatrix)},this.getCamera=function(){return T},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(z){l=z,u!==null&&(u.fixedFoveation=z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=z)},this.getPlanes=function(){return b};let Q=null;function q(z,j){if(h=j.getViewerPose(c||o),g=j,h!==null){const ie=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let oe=!1;ie.length!==T.cameras.length&&(T.cameras.length=0,oe=!0);for(let O=0;O<ie.length;O++){const Me=ie[O];let he=null;if(f!==null)he=f.getViewport(Me);else{const ae=d.getViewSubImage(u,Me);he=ae.viewport,O===0&&(e.setRenderTargetTextures(y,ae.colorTexture,u.ignoreDepthValues?void 0:ae.depthStencilTexture),e.setRenderTarget(y))}let ue=v[O];ue===void 0&&(ue=new ut,ue.layers.enable(O),ue.viewport=new Be,v[O]=ue),ue.matrix.fromArray(Me.transform.matrix),ue.projectionMatrix.fromArray(Me.projectionMatrix),ue.viewport.set(he.x,he.y,he.width,he.height),O===0&&T.matrix.copy(ue.matrix),oe===!0&&T.cameras.push(ue)}}for(let ie=0;ie<w.length;ie++){const oe=M[ie],O=w[ie];oe!==null&&O!==void 0&&O.update(oe,j,c||o)}if(Q&&Q(z,j),j.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:j.detectedPlanes});let ie=null;for(const oe of b)j.detectedPlanes.has(oe)||(ie===null&&(ie=[]),ie.push(oe));if(ie!==null)for(const oe of ie)b.delete(oe),E.delete(oe),i.dispatchEvent({type:"planeremoved",data:oe});for(const oe of j.detectedPlanes)if(!b.has(oe))b.add(oe),E.set(oe,j.lastChangedTime),i.dispatchEvent({type:"planeadded",data:oe});else{const O=E.get(oe);oe.lastChangedTime>O&&(E.set(oe,oe.lastChangedTime),i.dispatchEvent({type:"planechanged",data:oe}))}}g=null}const pe=new Pa;pe.setAnimationLoop(q),this.setAnimationLoop=function(z){Q=z},this.dispose=function(){}}}function Yp(a,e){function t(p,m){m.color.getRGB(p.fogColor.value,Ca(a)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,y,w,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),h(p,m)):m.isMeshPhongMaterial?(r(p,m),c(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&u(p,m,M)):m.isMeshMatcapMaterial?(r(p,m),f(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),g(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(n(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?s(p,m,y,w):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===mt&&(p.bumpScale.value*=-1)),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===mt&&p.normalScale.value.negate()),m.specularMap&&(p.specularMap.value=m.specularMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=e.get(m).envMap;if(y&&(p.envMap.value=y,p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const b=a.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*b}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity);let w;m.map?w=m.map:m.specularMap?w=m.specularMap:m.displacementMap?w=m.displacementMap:m.normalMap?w=m.normalMap:m.bumpMap?w=m.bumpMap:m.roughnessMap?w=m.roughnessMap:m.metalnessMap?w=m.metalnessMap:m.alphaMap?w=m.alphaMap:m.emissiveMap?w=m.emissiveMap:m.clearcoatMap?w=m.clearcoatMap:m.clearcoatNormalMap?w=m.clearcoatNormalMap:m.clearcoatRoughnessMap?w=m.clearcoatRoughnessMap:m.iridescenceMap?w=m.iridescenceMap:m.iridescenceThicknessMap?w=m.iridescenceThicknessMap:m.specularIntensityMap?w=m.specularIntensityMap:m.specularColorMap?w=m.specularColorMap:m.transmissionMap?w=m.transmissionMap:m.thicknessMap?w=m.thicknessMap:m.sheenColorMap?w=m.sheenColorMap:m.sheenRoughnessMap&&(w=m.sheenRoughnessMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),p.uvTransform.value.copy(w.matrix));let M;m.aoMap?M=m.aoMap:m.lightMap&&(M=m.lightMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),p.uv2Transform.value.copy(M.matrix))}function n(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function s(p,m,y,w){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=w*.5,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let M;m.map?M=m.map:m.alphaMap&&(M=m.alphaMap),M!==void 0&&(M.matrixAutoUpdate===!0&&M.updateMatrix(),p.uvTransform.value.copy(M.matrix))}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let y;m.map?y=m.map:m.alphaMap&&(y=m.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uvTransform.value.copy(y.matrix))}function c(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.roughness.value=m.roughness,p.metalness.value=m.metalness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function u(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),p.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===mt&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap)}function f(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){p.referencePosition.value.copy(m.referencePosition),p.nearDistance.value=m.nearDistance,p.farDistance.value=m.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function Zp(a,e,t,i){let r={},n={},o=[];const s=t.isWebGL2?a.getParameter(35375):0;function l(w,M){const b=M.program;i.uniformBlockBinding(w,b)}function c(w,M){let b=r[w.id];b===void 0&&(g(w),b=h(w),r[w.id]=b,w.addEventListener("dispose",m));const E=M.program;i.updateUBOMapping(w,E);const C=e.render.frame;n[w.id]!==C&&(u(w),n[w.id]=C)}function h(w){const M=d();w.__bindingPointIndex=M;const b=a.createBuffer(),E=w.__size,C=w.usage;return a.bindBuffer(35345,b),a.bufferData(35345,E,C),a.bindBuffer(35345,null),a.bindBufferBase(35345,M,b),b}function d(){for(let w=0;w<s;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(w){const M=r[w.id],b=w.uniforms,E=w.__cache;a.bindBuffer(35345,M);for(let C=0,N=b.length;C<N;C++){const v=b[C];if(f(v,C,E)===!0){const T=v.__offset,P=Array.isArray(v.value)?v.value:[v.value];let X=0;for(let J=0;J<P.length;J++){const U=P[J],R=p(U);typeof U=="number"?(v.__data[0]=U,a.bufferSubData(35345,T+X,v.__data)):U.isMatrix3?(v.__data[0]=U.elements[0],v.__data[1]=U.elements[1],v.__data[2]=U.elements[2],v.__data[3]=U.elements[0],v.__data[4]=U.elements[3],v.__data[5]=U.elements[4],v.__data[6]=U.elements[5],v.__data[7]=U.elements[0],v.__data[8]=U.elements[6],v.__data[9]=U.elements[7],v.__data[10]=U.elements[8],v.__data[11]=U.elements[0]):(U.toArray(v.__data,X),X+=R.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(35345,T,v.__data)}}a.bindBuffer(35345,null)}function f(w,M,b){const E=w.value;if(b[M]===void 0){if(typeof E=="number")b[M]=E;else{const C=Array.isArray(E)?E:[E],N=[];for(let v=0;v<C.length;v++)N.push(C[v].clone());b[M]=N}return!0}else if(typeof E=="number"){if(b[M]!==E)return b[M]=E,!0}else{const C=Array.isArray(b[M])?b[M]:[b[M]],N=Array.isArray(E)?E:[E];for(let v=0;v<C.length;v++){const T=C[v];if(T.equals(N[v])===!1)return T.copy(N[v]),!0}}return!1}function g(w){const M=w.uniforms;let b=0;const E=16;let C=0;for(let N=0,v=M.length;N<v;N++){const T=M[N],P={boundary:0,storage:0},X=Array.isArray(T.value)?T.value:[T.value];for(let J=0,U=X.length;J<U;J++){const R=X[J],G=p(R);P.boundary+=G.boundary,P.storage+=G.storage}if(T.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=b,N>0){C=b%E;const J=E-C;C!==0&&J-P.boundary<0&&(b+=E-C,T.__offset=b)}b+=P.storage}return C=b%E,C>0&&(b+=E-C),w.__size=b,w.__cache={},this}function p(w){const M={boundary:0,storage:0};return typeof w=="number"?(M.boundary=4,M.storage=4):w.isVector2?(M.boundary=8,M.storage=8):w.isVector3||w.isColor?(M.boundary=16,M.storage=12):w.isVector4?(M.boundary=16,M.storage=16):w.isMatrix3?(M.boundary=48,M.storage=48):w.isMatrix4?(M.boundary=64,M.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),M}function m(w){const M=w.target;M.removeEventListener("dispose",m);const b=o.indexOf(M.__bindingPointIndex);o.splice(b,1),a.deleteBuffer(r[M.id]),delete r[M.id],delete n[M.id]}function y(){for(const w in r)a.deleteBuffer(r[w]);o=[],r={},n={}}return{bind:l,update:c,dispose:y}}function Jp(){const a=ur("canvas");return a.style.display="block",a}function no(a={}){this.isWebGLRenderer=!0;const e=a.canvas!==void 0?a.canvas:Jp(),t=a.context!==void 0?a.context:null,i=a.depth!==void 0?a.depth:!0,r=a.stencil!==void 0?a.stencil:!0,n=a.antialias!==void 0?a.antialias:!1,o=a.premultipliedAlpha!==void 0?a.premultipliedAlpha:!0,s=a.preserveDrawingBuffer!==void 0?a.preserveDrawingBuffer:!1,l=a.powerPreference!==void 0?a.powerPreference:"default",c=a.failIfMajorPerformanceCaveat!==void 0?a.failIfMajorPerformanceCaveat:!1;let h;t!==null?h=t.getContextAttributes().alpha:h=a.alpha!==void 0?a.alpha:!1;let d=null,u=null;const f=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=mi,this.physicallyCorrectLights=!1,this.toneMapping=Gt,this.toneMappingExposure=1;const p=this;let m=!1,y=0,w=0,M=null,b=-1,E=null;const C=new Be,N=new Be;let v=null,T=e.width,P=e.height,X=1,J=null,U=null;const R=new Be(0,0,T,P),G=new Be(0,0,T,P);let Z=!1;const $=new $n;let W=!1,Q=!1,q=null;const pe=new Ce,z=new Re,j=new L,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function oe(){return M===null?X:1}let O=t;function Me(x,I){for(let k=0;k<x.length;k++){const D=x[k],H=e.getContext(D,I);if(H!==null)return H}return null}try{const x={alpha:!0,depth:i,stencil:r,antialias:n,premultipliedAlpha:o,preserveDrawingBuffer:s,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${mn}`),e.addEventListener("webglcontextlost",me,!1),e.addEventListener("webglcontextrestored",de,!1),e.addEventListener("webglcontextcreationerror",Le,!1),O===null){const I=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&I.shift(),O=Me(I,x),O===null)throw Me(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let he,ue,ae,Ge,be,ve,at,yt,et,Mt,Xe,Ue,Ot,At,S,_,B,K,ee,ne,xe,se,V,fe;function _e(){he=new od(O),ue=new td(O,he,a),he.init(ue),se=new Vp(O,he,ue),ae=new Hp(O,he,ue),Ge=new hd,be=new Ap,ve=new Gp(O,he,ae,be,ue,se,Ge),at=new rd(p),yt=new ad(p),et=new xc(O,ue),V=new $u(O,he,et,ue),Mt=new ld(O,et,Ge,V),Xe=new md(O,Mt,et,Ge),ee=new pd(O,ue,ve),_=new id(be),Ue=new Ep(p,at,yt,he,ue,V,_),Ot=new Yp(p,be),At=new Lp,S=new Up(he,ue),K=new Qu(p,at,yt,ae,Xe,h,o),B=new kp(p,Xe,ue),fe=new Zp(O,Ge,ue,ae),ne=new ed(O,he,Ge,ue),xe=new cd(O,he,Ge,ue),Ge.programs=Ue.programs,p.capabilities=ue,p.extensions=he,p.properties=be,p.renderLists=At,p.shadowMap=B,p.state=ae,p.info=Ge}_e();const ce=new qp(p,O);this.xr=ce,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const x=he.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=he.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(x){x!==void 0&&(X=x,this.setSize(T,P,!1))},this.getSize=function(x){return x.set(T,P)},this.setSize=function(x,I,k){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=x,P=I,e.width=Math.floor(x*X),e.height=Math.floor(I*X),k!==!1&&(e.style.width=x+"px",e.style.height=I+"px"),this.setViewport(0,0,x,I)},this.getDrawingBufferSize=function(x){return x.set(T*X,P*X).floor()},this.setDrawingBufferSize=function(x,I,k){T=x,P=I,X=k,e.width=Math.floor(x*k),e.height=Math.floor(I*k),this.setViewport(0,0,x,I)},this.getCurrentViewport=function(x){return x.copy(C)},this.getViewport=function(x){return x.copy(R)},this.setViewport=function(x,I,k,D){x.isVector4?R.set(x.x,x.y,x.z,x.w):R.set(x,I,k,D),ae.viewport(C.copy(R).multiplyScalar(X).floor())},this.getScissor=function(x){return x.copy(G)},this.setScissor=function(x,I,k,D){x.isVector4?G.set(x.x,x.y,x.z,x.w):G.set(x,I,k,D),ae.scissor(N.copy(G).multiplyScalar(X).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(x){ae.setScissorTest(Z=x)},this.setOpaqueSort=function(x){J=x},this.setTransparentSort=function(x){U=x},this.getClearColor=function(x){return x.copy(K.getClearColor())},this.setClearColor=function(){K.setClearColor.apply(K,arguments)},this.getClearAlpha=function(){return K.getClearAlpha()},this.setClearAlpha=function(){K.setClearAlpha.apply(K,arguments)},this.clear=function(x=!0,I=!0,k=!0){let D=0;x&&(D|=16384),I&&(D|=256),k&&(D|=1024),O.clear(D)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",me,!1),e.removeEventListener("webglcontextrestored",de,!1),e.removeEventListener("webglcontextcreationerror",Le,!1),At.dispose(),S.dispose(),be.dispose(),at.dispose(),yt.dispose(),Xe.dispose(),V.dispose(),fe.dispose(),Ue.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",re),ce.removeEventListener("sessionend",ge),q&&(q.dispose(),q=null),Ie.stop()};function me(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const x=Ge.autoReset,I=B.enabled,k=B.autoUpdate,D=B.needsUpdate,H=B.type;_e(),Ge.autoReset=x,B.enabled=I,B.autoUpdate=k,B.needsUpdate=D,B.type=H}function Le(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function ke(x){const I=x.target;I.removeEventListener("dispose",ke),Je(I)}function Je(x){A(x),be.remove(x)}function A(x){const I=be.get(x).programs;I!==void 0&&(I.forEach(function(k){Ue.releaseProgram(k)}),x.isShaderMaterial&&Ue.releaseShaderCache(x))}this.renderBufferDirect=function(x,I,k,D,H,le){I===null&&(I=ie);const ye=H.isMesh&&H.matrixWorld.determinant()<0,we=No(x,I,k,D,H);ae.setMaterial(D,ye);let Te=k.index,ze=1;D.wireframe===!0&&(Te=Mt.getWireframeAttribute(k),ze=2);const De=k.drawRange,Ee=k.attributes.position;let it=De.start*ze,dt=(De.start+De.count)*ze;le!==null&&(it=Math.max(it,le.start*ze),dt=Math.min(dt,(le.start+le.count)*ze)),Te!==null?(it=Math.max(it,0),dt=Math.min(dt,Te.count)):Ee!=null&&(it=Math.max(it,0),dt=Math.min(dt,Ee.count));const Ft=dt-it;if(Ft<0||Ft===1/0)return;V.setup(H,D,we,k,Te);let li,We=ne;if(Te!==null&&(li=et.get(Te),We=xe,We.setIndex(li)),H.isMesh)D.wireframe===!0?(ae.setLineWidth(D.wireframeLinewidth*oe()),We.setMode(1)):We.setMode(4);else if(H.isLine){let Ae=D.linewidth;Ae===void 0&&(Ae=1),ae.setLineWidth(Ae*oe()),H.isLineSegments?We.setMode(1):H.isLineLoop?We.setMode(2):We.setMode(3)}else H.isPoints?We.setMode(0):H.isSprite&&We.setMode(4);if(H.isInstancedMesh)We.renderInstances(it,Ft,H.count);else if(k.isInstancedBufferGeometry){const Ae=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,cn=Math.min(k.instanceCount,Ae);We.renderInstances(it,Ft,cn)}else We.render(it,Ft)},this.compile=function(x,I){function k(D,H,le){D.transparent===!0&&D.side===Ht&&D.forceSinglePass===!1?(D.side=mt,D.needsUpdate=!0,bt(D,H,le),D.side=kt,D.needsUpdate=!0,bt(D,H,le),D.side=Ht):bt(D,H,le)}u=S.get(x),u.init(),g.push(u),x.traverseVisible(function(D){D.isLight&&D.layers.test(I.layers)&&(u.pushLight(D),D.castShadow&&u.pushShadow(D))}),u.setupLights(p.physicallyCorrectLights),x.traverse(function(D){const H=D.material;if(H)if(Array.isArray(H))for(let le=0;le<H.length;le++){const ye=H[le];k(ye,x,D)}else k(H,x,D)}),g.pop(),u=null};let F=null;function Y(x){F&&F(x)}function re(){Ie.stop()}function ge(){Ie.start()}const Ie=new Pa;Ie.setAnimationLoop(Y),typeof self<"u"&&Ie.setContext(self),this.setAnimationLoop=function(x){F=x,ce.setAnimationLoop(x),x===null?Ie.stop():Ie.start()},ce.addEventListener("sessionstart",re),ce.addEventListener("sessionend",ge),this.render=function(x,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(I),I=ce.getCamera()),x.isScene===!0&&x.onBeforeRender(p,x,I,M),u=S.get(x,g.length),u.init(),g.push(u),pe.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),$.setFromProjectionMatrix(pe),Q=this.localClippingEnabled,W=_.init(this.clippingPlanes,Q),d=At.get(x,f.length),d.init(),f.push(d),Ke(x,I,0,p.sortObjects),d.finish(),p.sortObjects===!0&&d.sort(J,U),W===!0&&_.beginShadows();const k=u.state.shadowsArray;if(B.render(k,x,I),W===!0&&_.endShadows(),this.info.autoReset===!0&&this.info.reset(),K.render(d,x),u.setupLights(p.physicallyCorrectLights),I.isArrayCamera){const D=I.cameras;for(let H=0,le=D.length;H<le;H++){const ye=D[H];tt(d,x,ye,ye.viewport)}}else tt(d,x,I);M!==null&&(ve.updateMultisampleRenderTarget(M),ve.updateRenderTargetMipmap(M)),x.isScene===!0&&x.onAfterRender(p,x,I),V.resetDefaultState(),b=-1,E=null,g.pop(),g.length>0?u=g[g.length-1]:u=null,f.pop(),f.length>0?d=f[f.length-1]:d=null};function Ke(x,I,k,D){if(x.visible===!1)return;if(x.layers.test(I.layers)){if(x.isGroup)k=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(I);else if(x.isLight)u.pushLight(x),x.castShadow&&u.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||$.intersectsSprite(x)){D&&j.setFromMatrixPosition(x.matrixWorld).applyMatrix4(pe);const le=Xe.update(x),ye=x.material;ye.visible&&d.push(x,le,ye,k,j.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(x.isSkinnedMesh&&x.skeleton.frame!==Ge.render.frame&&(x.skeleton.update(),x.skeleton.frame=Ge.render.frame),!x.frustumCulled||$.intersectsObject(x))){D&&j.setFromMatrixPosition(x.matrixWorld).applyMatrix4(pe);const le=Xe.update(x),ye=x.material;if(Array.isArray(ye)){const we=le.groups;for(let Te=0,ze=we.length;Te<ze;Te++){const De=we[Te],Ee=ye[De.materialIndex];Ee&&Ee.visible&&d.push(x,le,Ee,k,j.z,De)}}else ye.visible&&d.push(x,le,ye,k,j.z,null)}}const H=x.children;for(let le=0,ye=H.length;le<ye;le++)Ke(H[le],I,k,D)}function tt(x,I,k,D){const H=x.opaque,le=x.transmissive,ye=x.transparent;u.setupLightsView(k),W===!0&&_.setGlobalState(p.clippingPlanes,k),le.length>0&&oi(H,I,k),D&&ae.viewport(C.copy(D)),H.length>0&&He(H,I,k),le.length>0&&He(le,I,k),ye.length>0&&He(ye,I,k),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function oi(x,I,k){const D=ue.isWebGL2;q===null&&(q=new gi(1,1,{generateMipmaps:!0,type:he.has("EXT_color_buffer_half_float")?sr:ui,minFilter:Ci,samples:D&&n===!0?4:0})),p.getDrawingBufferSize(z),D?q.setSize(z.x,z.y):q.setSize(Ir(z.x),Ir(z.y));const H=p.getRenderTarget();p.setRenderTarget(q),p.clear();const le=p.toneMapping;p.toneMapping=Gt,He(x,I,k),p.toneMapping=le,ve.updateMultisampleRenderTarget(q),ve.updateRenderTargetMipmap(q),p.setRenderTarget(H)}function He(x,I,k){const D=I.isScene===!0?I.overrideMaterial:null;for(let H=0,le=x.length;H<le;H++){const ye=x[H],we=ye.object,Te=ye.geometry,ze=D===null?ye.material:D,De=ye.group;we.layers.test(k.layers)&&Bt(we,I,k,Te,ze,De)}}function Bt(x,I,k,D,H,le){x.onBeforeRender(p,I,k,D,H,le),x.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),H.onBeforeRender(p,I,k,D,x,le),H.transparent===!0&&H.side===Ht&&H.forceSinglePass===!1?(H.side=mt,H.needsUpdate=!0,p.renderBufferDirect(k,I,D,H,x,le),H.side=kt,H.needsUpdate=!0,p.renderBufferDirect(k,I,D,H,x,le),H.side=Ht):p.renderBufferDirect(k,I,D,H,x,le),x.onAfterRender(p,I,k,D,H,le)}function bt(x,I,k){I.isScene!==!0&&(I=ie);const D=be.get(x),H=u.state.lights,le=u.state.shadowsArray,ye=H.state.version,we=Ue.getParameters(x,H.state,le,I,k),Te=Ue.getProgramCacheKey(we);let ze=D.programs;D.environment=x.isMeshStandardMaterial?I.environment:null,D.fog=I.fog,D.envMap=(x.isMeshStandardMaterial?yt:at).get(x.envMap||D.environment),ze===void 0&&(x.addEventListener("dispose",ke),ze=new Map,D.programs=ze);let De=ze.get(Te);if(De!==void 0){if(D.currentProgram===De&&D.lightsStateVersion===ye)return xs(x,we),De}else we.uniforms=Ue.getUniforms(x),x.onBuild(k,we,p),x.onBeforeCompile(we,p),De=Ue.acquireProgram(we,Te),ze.set(Te,De),D.uniforms=we.uniforms;const Ee=D.uniforms;(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Ee.clippingPlanes=_.uniform),xs(x,we),D.needsLights=zo(x),D.lightsStateVersion=ye,D.needsLights&&(Ee.ambientLightColor.value=H.state.ambient,Ee.lightProbe.value=H.state.probe,Ee.directionalLights.value=H.state.directional,Ee.directionalLightShadows.value=H.state.directionalShadow,Ee.spotLights.value=H.state.spot,Ee.spotLightShadows.value=H.state.spotShadow,Ee.rectAreaLights.value=H.state.rectArea,Ee.ltc_1.value=H.state.rectAreaLTC1,Ee.ltc_2.value=H.state.rectAreaLTC2,Ee.pointLights.value=H.state.point,Ee.pointLightShadows.value=H.state.pointShadow,Ee.hemisphereLights.value=H.state.hemi,Ee.directionalShadowMap.value=H.state.directionalShadowMap,Ee.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ee.spotShadowMap.value=H.state.spotShadowMap,Ee.spotLightMatrix.value=H.state.spotLightMatrix,Ee.spotLightMap.value=H.state.spotLightMap,Ee.pointShadowMap.value=H.state.pointShadowMap,Ee.pointShadowMatrix.value=H.state.pointShadowMatrix);const it=De.getUniforms(),dt=en.seqWithValue(it.seq,Ee);return D.currentProgram=De,D.uniformsList=dt,De}function xs(x,I){const k=be.get(x);k.outputEncoding=I.outputEncoding,k.instancing=I.instancing,k.skinning=I.skinning,k.morphTargets=I.morphTargets,k.morphNormals=I.morphNormals,k.morphColors=I.morphColors,k.morphTargetsCount=I.morphTargetsCount,k.numClippingPlanes=I.numClippingPlanes,k.numIntersection=I.numClipIntersection,k.vertexAlphas=I.vertexAlphas,k.vertexTangents=I.vertexTangents,k.toneMapping=I.toneMapping}function No(x,I,k,D,H){I.isScene!==!0&&(I=ie),ve.resetTextureUnits();const le=I.fog,ye=D.isMeshStandardMaterial?I.environment:null,we=M===null?p.outputEncoding:M.isXRRenderTarget===!0?M.texture.encoding:mi,Te=(D.isMeshStandardMaterial?yt:at).get(D.envMap||ye),ze=D.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,De=!!D.normalMap&&!!k.attributes.tangent,Ee=!!k.morphAttributes.position,it=!!k.morphAttributes.normal,dt=!!k.morphAttributes.color,Ft=D.toneMapped?p.toneMapping:Gt,li=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,We=li!==void 0?li.length:0,Ae=be.get(D),cn=u.state.lights;if(W===!0&&(Q===!0||x!==E)){const pt=x===E&&D.id===b;_.setState(D,x,pt)}let hn=!1;D.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==cn.state.version||Ae.outputEncoding!==we||H.isInstancedMesh&&Ae.instancing===!1||!H.isInstancedMesh&&Ae.instancing===!0||H.isSkinnedMesh&&Ae.skinning===!1||!H.isSkinnedMesh&&Ae.skinning===!0||Ae.envMap!==Te||D.fog===!0&&Ae.fog!==le||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==_.numPlanes||Ae.numIntersection!==_.numIntersection)||Ae.vertexAlphas!==ze||Ae.vertexTangents!==De||Ae.morphTargets!==Ee||Ae.morphNormals!==it||Ae.morphColors!==dt||Ae.toneMapping!==Ft||ue.isWebGL2===!0&&Ae.morphTargetsCount!==We)&&(hn=!0):(hn=!0,Ae.__version=D.version);let ci=Ae.currentProgram;hn===!0&&(ci=bt(D,I,H));let ys=!1,rr=!1,un=!1;const ot=ci.getUniforms(),hi=Ae.uniforms;if(ae.useProgram(ci.program)&&(ys=!0,rr=!0,un=!0),D.id!==b&&(b=D.id,rr=!0),ys||E!==x){if(ot.setValue(O,"projectionMatrix",x.projectionMatrix),ue.logarithmicDepthBuffer&&ot.setValue(O,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),E!==x&&(E=x,rr=!0,un=!0),D.isShaderMaterial||D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshStandardMaterial||D.envMap){const pt=ot.map.cameraPosition;pt!==void 0&&pt.setValue(O,j.setFromMatrixPosition(x.matrixWorld))}(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial)&&ot.setValue(O,"isOrthographic",x.isOrthographicCamera===!0),(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial||D.isShadowMaterial||H.isSkinnedMesh)&&ot.setValue(O,"viewMatrix",x.matrixWorldInverse)}if(H.isSkinnedMesh){ot.setOptional(O,H,"bindMatrix"),ot.setOptional(O,H,"bindMatrixInverse");const pt=H.skeleton;pt&&(ue.floatVertexTextures?(pt.boneTexture===null&&pt.computeBoneTexture(),ot.setValue(O,"boneTexture",pt.boneTexture,ve),ot.setValue(O,"boneTextureSize",pt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const dn=k.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0&&ue.isWebGL2===!0)&&ee.update(H,k,D,ci),(rr||Ae.receiveShadow!==H.receiveShadow)&&(Ae.receiveShadow=H.receiveShadow,ot.setValue(O,"receiveShadow",H.receiveShadow)),D.isMeshGouraudMaterial&&D.envMap!==null&&(hi.envMap.value=Te,hi.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),rr&&(ot.setValue(O,"toneMappingExposure",p.toneMappingExposure),Ae.needsLights&&Uo(hi,un),le&&D.fog===!0&&Ot.refreshFogUniforms(hi,le),Ot.refreshMaterialUniforms(hi,D,X,P,q),en.upload(O,Ae.uniformsList,hi,ve)),D.isShaderMaterial&&D.uniformsNeedUpdate===!0&&(en.upload(O,Ae.uniformsList,hi,ve),D.uniformsNeedUpdate=!1),D.isSpriteMaterial&&ot.setValue(O,"center",H.center),ot.setValue(O,"modelViewMatrix",H.modelViewMatrix),ot.setValue(O,"normalMatrix",H.normalMatrix),ot.setValue(O,"modelMatrix",H.matrixWorld),D.isShaderMaterial||D.isRawShaderMaterial){const pt=D.uniformsGroups;for(let pn=0,Oo=pt.length;pn<Oo;pn++)if(ue.isWebGL2){const Ms=pt[pn];fe.update(Ms,ci),fe.bind(Ms,ci)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ci}function Uo(x,I){x.ambientLightColor.needsUpdate=I,x.lightProbe.needsUpdate=I,x.directionalLights.needsUpdate=I,x.directionalLightShadows.needsUpdate=I,x.pointLights.needsUpdate=I,x.pointLightShadows.needsUpdate=I,x.spotLights.needsUpdate=I,x.spotLightShadows.needsUpdate=I,x.rectAreaLights.needsUpdate=I,x.hemisphereLights.needsUpdate=I}function zo(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(x,I,k){be.get(x.texture).__webglTexture=I,be.get(x.depthTexture).__webglTexture=k;const D=be.get(x);D.__hasExternalTextures=!0,D.__hasExternalTextures&&(D.__autoAllocateDepthBuffer=k===void 0,D.__autoAllocateDepthBuffer||he.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),D.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(x,I){const k=be.get(x);k.__webglFramebuffer=I,k.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(x,I=0,k=0){M=x,y=I,w=k;let D=!0,H=null,le=!1,ye=!1;if(x){const we=be.get(x);we.__useDefaultFramebuffer!==void 0?(ae.bindFramebuffer(36160,null),D=!1):we.__webglFramebuffer===void 0?ve.setupRenderTarget(x):we.__hasExternalTextures&&ve.rebindTextures(x,be.get(x.texture).__webglTexture,be.get(x.depthTexture).__webglTexture);const Te=x.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(ye=!0);const ze=be.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(H=ze[I],le=!0):ue.isWebGL2&&x.samples>0&&ve.useMultisampledRTT(x)===!1?H=be.get(x).__webglMultisampledFramebuffer:H=ze,C.copy(x.viewport),N.copy(x.scissor),v=x.scissorTest}else C.copy(R).multiplyScalar(X).floor(),N.copy(G).multiplyScalar(X).floor(),v=Z;if(ae.bindFramebuffer(36160,H)&&ue.drawBuffers&&D&&ae.drawBuffers(x,H),ae.viewport(C),ae.scissor(N),ae.setScissorTest(v),le){const we=be.get(x.texture);O.framebufferTexture2D(36160,36064,34069+I,we.__webglTexture,k)}else if(ye){const we=be.get(x.texture),Te=I||0;O.framebufferTextureLayer(36160,36064,we.__webglTexture,k||0,Te)}b=-1},this.readRenderTargetPixels=function(x,I,k,D,H,le,ye){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=be.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ye!==void 0&&(we=we[ye]),we){ae.bindFramebuffer(36160,we);try{const Te=x.texture,ze=Te.format,De=Te.type;if(ze!==wt&&se.convert(ze)!==O.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ee=De===sr&&(he.has("EXT_color_buffer_half_float")||ue.isWebGL2&&he.has("EXT_color_buffer_float"));if(De!==ui&&se.convert(De)!==O.getParameter(35738)&&!(De===$t&&(ue.isWebGL2||he.has("OES_texture_float")||he.has("WEBGL_color_buffer_float")))&&!Ee){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=x.width-D&&k>=0&&k<=x.height-H&&O.readPixels(I,k,D,H,se.convert(ze),se.convert(De),le)}finally{const Te=M!==null?be.get(M).__webglFramebuffer:null;ae.bindFramebuffer(36160,Te)}}},this.copyFramebufferToTexture=function(x,I,k=0){const D=Math.pow(2,-k),H=Math.floor(I.image.width*D),le=Math.floor(I.image.height*D);ve.setTexture2D(I,0),O.copyTexSubImage2D(3553,k,0,0,x.x,x.y,H,le),ae.unbindTexture()},this.copyTextureToTexture=function(x,I,k,D=0){const H=I.image.width,le=I.image.height,ye=se.convert(k.format),we=se.convert(k.type);ve.setTexture2D(k,0),O.pixelStorei(37440,k.flipY),O.pixelStorei(37441,k.premultiplyAlpha),O.pixelStorei(3317,k.unpackAlignment),I.isDataTexture?O.texSubImage2D(3553,D,x.x,x.y,H,le,ye,we,I.image.data):I.isCompressedTexture?O.compressedTexSubImage2D(3553,D,x.x,x.y,I.mipmaps[0].width,I.mipmaps[0].height,ye,I.mipmaps[0].data):O.texSubImage2D(3553,D,x.x,x.y,ye,we,I.image),D===0&&k.generateMipmaps&&O.generateMipmap(3553),ae.unbindTexture()},this.copyTextureToTexture3D=function(x,I,k,D,H=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const le=x.max.x-x.min.x+1,ye=x.max.y-x.min.y+1,we=x.max.z-x.min.z+1,Te=se.convert(D.format),ze=se.convert(D.type);let De;if(D.isData3DTexture)ve.setTexture3D(D,0),De=32879;else if(D.isDataArrayTexture)ve.setTexture2DArray(D,0),De=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(37440,D.flipY),O.pixelStorei(37441,D.premultiplyAlpha),O.pixelStorei(3317,D.unpackAlignment);const Ee=O.getParameter(3314),it=O.getParameter(32878),dt=O.getParameter(3316),Ft=O.getParameter(3315),li=O.getParameter(32877),We=k.isCompressedTexture?k.mipmaps[0]:k.image;O.pixelStorei(3314,We.width),O.pixelStorei(32878,We.height),O.pixelStorei(3316,x.min.x),O.pixelStorei(3315,x.min.y),O.pixelStorei(32877,x.min.z),k.isDataTexture||k.isData3DTexture?O.texSubImage3D(De,H,I.x,I.y,I.z,le,ye,we,Te,ze,We.data):k.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(De,H,I.x,I.y,I.z,le,ye,we,Te,We.data)):O.texSubImage3D(De,H,I.x,I.y,I.z,le,ye,we,Te,ze,We),O.pixelStorei(3314,Ee),O.pixelStorei(32878,it),O.pixelStorei(3316,dt),O.pixelStorei(3315,Ft),O.pixelStorei(32877,li),H===0&&D.generateMipmaps&&O.generateMipmap(De),ae.unbindTexture()},this.initTexture=function(x){x.isCubeTexture?ve.setTextureCube(x,0):x.isData3DTexture?ve.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?ve.setTexture2DArray(x,0):ve.setTexture2D(x,0),ae.unbindTexture()},this.resetState=function(){y=0,w=0,M=null,ae.reset(),V.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Kp extends no{}Kp.prototype.isWebGL1Renderer=!0;class Qp extends Ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class $p{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=An,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Ct()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,n=this.stride;r<n;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ct()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ct()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ht=new L;class _s{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}setX(e,t){return this.normalized&&(t=Oe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Oe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Oe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Oe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Vt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Vt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Vt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Vt(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Oe(t,this.array),i=Oe(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Oe(t,this.array),i=Oe(i,this.array),r=Oe(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Oe(t,this.array),i=Oe(i,this.array),r=Oe(r,this.array),n=Oe(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=n,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)t.push(this.data.array[r+n])}return new _t(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new _s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)t.push(this.data.array[r+n])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const so=new L,ao=new Be,oo=new Be,em=new L,lo=new Ce;class tm extends Et{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Ce,this.bindMatrixInverse=new Ce}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Be,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const n=1/e.manhattanLength();n!==1/0?e.multiplyScalar(n):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const i=this.skeleton,r=this.geometry;ao.fromBufferAttribute(r.attributes.skinIndex,e),oo.fromBufferAttribute(r.attributes.skinWeight,e),so.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let n=0;n<4;n++){const o=oo.getComponent(n);if(o!==0){const s=ao.getComponent(n);lo.multiplyMatrices(i.bones[s].matrixWorld,i.boneInverses[s]),t.addScaledVector(em.copy(so).applyMatrix4(lo),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class co extends Ve{constructor(){super(),this.isBone=!0,this.type="Bone"}}class im extends st{constructor(e=null,t=1,i=1,r,n,o,s,l,c=Qe,h=Qe,d,u){super(null,o,s,l,c,h,r,n,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ho=new Ce,rm=new Ce;class vs{constructor(e=[],t=[]){this.uuid=Ct(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new Ce)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Ce;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let n=0,o=e.length;n<o;n++){const s=e[n]?e[n].matrixWorld:rm;ho.multiplyMatrices(s,t[n]),ho.toArray(i,n*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new vs(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=ca(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new im(t,e,e,wt,$t);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const n=e.bones[i];let o=t[n];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",n),o=new co),this.bones.push(o),this.boneInverses.push(new Ce().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,n=t.length;r<n;r++){const o=t[r];e.bones.push(o.uuid);const s=i[r];e.boneInverses.push(s.toArray())}return e}}class uo extends _t{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const po=new Ce,mo=new Ce,tn=[],nm=new Ce,Mr=new Et;class sm extends Et{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new uo(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.frustumCulled=!1;for(let r=0;r<i;r++)this.setMatrixAt(r,nm)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Mr.geometry=this.geometry,Mr.material=this.material,Mr.material!==void 0)for(let n=0;n<r;n++){this.getMatrixAt(n,po),mo.multiplyMatrices(i,po),Mr.matrixWorld=mo,Mr.raycast(e,tn);for(let o=0,s=tn.length;o<s;o++){const l=tn[o];l.instanceId=n,l.object=this,t.push(l)}tn.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new uo(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class fo extends si{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pe(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const go=new L,_o=new L,vo=new Ce,os=new Gn,rn=new Bi;class ls extends Ve{constructor(e=new zt,t=new fo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,n=t.count;r<n;r++)go.fromBufferAttribute(t,r-1),_o.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=go.distanceTo(_o);e.setAttribute("lineDistance",new Zt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,n=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),rn.copy(i.boundingSphere),rn.applyMatrix4(r),rn.radius+=n,e.ray.intersectsSphere(rn)===!1)return;vo.copy(r).invert(),os.copy(e.ray).applyMatrix4(vo);const s=n/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,c=new L,h=new L,d=new L,u=new L,f=this.isLineSegments?2:1,g=i.index,p=i.attributes.position;if(g!==null){const m=Math.max(0,o.start),y=Math.min(g.count,o.start+o.count);for(let w=m,M=y-1;w<M;w+=f){const b=g.getX(w),E=g.getX(w+1);if(c.fromBufferAttribute(p,b),h.fromBufferAttribute(p,E),os.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(u);C<e.near||C>e.far||t.push({distance:C,point:d.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,o.start),y=Math.min(p.count,o.start+o.count);for(let w=m,M=y-1;w<M;w+=f){if(c.fromBufferAttribute(p,w),h.fromBufferAttribute(p,w+1),os.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(u);b<e.near||b>e.far||t.push({distance:b,point:d.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,n=i.length;r<n;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const xo=new L,yo=new L;class am extends ls{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,n=t.count;r<n;r+=2)xo.fromBufferAttribute(t,r),yo.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+xo.distanceTo(yo);e.setAttribute("lineDistance",new Zt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class om extends ls{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Mo extends si{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const bo=new Ce,cs=new Gn,nn=new Bi,sn=new L;class lm extends Ve{constructor(e=new zt,t=new Mo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,n=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),nn.copy(i.boundingSphere),nn.applyMatrix4(r),nn.radius+=n,e.ray.intersectsSphere(nn)===!1)return;bo.copy(r).invert(),cs.copy(e.ray).applyMatrix4(bo);const s=n/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),u=Math.min(c.count,o.start+o.count);for(let f=d,g=u;f<g;f++){const p=c.getX(f);sn.fromBufferAttribute(h,p),So(sn,p,l,r,e,t,this)}}else{const d=Math.max(0,o.start),u=Math.min(h.count,o.start+o.count);for(let f=d,g=u;f<g;f++)sn.fromBufferAttribute(h,f),So(sn,f,l,r,e,t,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,n=i.length;r<n;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function So(a,e,t,i,r,n,o){const s=cs.distanceSqToPoint(a);if(s<t){const l=new L;cs.closestPointToPoint(a,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;n.push({distance:c,distanceToRay:Math.sqrt(s),point:l,index:e,face:null,object:o})}}class wo extends si{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=aa,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class cm extends wo{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return nt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pe(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function ai(a,e,t){return To(a)?new a.constructor(a.subarray(e,t!==void 0?t:a.length)):a.slice(e,t)}function an(a,e,t){return!a||!t&&a.constructor===e?a:typeof e.BYTES_PER_ELEMENT=="number"?new e(a):Array.prototype.slice.call(a)}function To(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)}function hm(a){function e(r,n){return a[r]-a[n]}const t=a.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function Eo(a,e,t){const i=a.length,r=new a.constructor(i);for(let n=0,o=0;o!==i;++n){const s=t[n]*e;for(let l=0;l!==e;++l)r[o++]=a[s+l]}return r}function Ao(a,e,t,i){let r=1,n=a[0];for(;n!==void 0&&n[i]===void 0;)n=a[r++];if(n===void 0)return;let o=n[i];if(o!==void 0)if(Array.isArray(o))do o=n[i],o!==void 0&&(e.push(n.time),t.push.apply(t,o)),n=a[r++];while(n!==void 0);else if(o.toArray!==void 0)do o=n[i],o!==void 0&&(e.push(n.time),o.toArray(t,t.length)),n=a[r++];while(n!==void 0);else do o=n[i],o!==void 0&&(e.push(n.time),t.push(o)),n=a[r++];while(n!==void 0)}class br{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],n=t[i-1];e:{t:{let o;i:{r:if(!(e<r)){for(let s=i+2;;){if(r===void 0){if(e<n)break r;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===s)break;if(n=r,r=t[++i],e<r)break t}o=t.length;break i}if(!(e>=n)){const s=t[1];e<s&&(i=2,n=s);for(let l=i-2;;){if(n===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=n,n=t[--i-1],e>=n)break t}o=i,i=0;break i}break e}for(;i<o;){const s=i+o>>>1;e<t[s]?o=s:i=s+1}if(r=t[i],n=t[i-1],n===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,n,r)}return this.interpolate_(i,n,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,n=e*r;for(let o=0;o!==r;++o)t[o]=i[n+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class um extends br{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pi,endingEnd:Pi}}intervalChanged_(e,t,i){const r=this.parameterPositions;let n=e-2,o=e+1,s=r[n],l=r[o];if(s===void 0)switch(this.getSettings_().endingStart){case Ri:n=e,s=2*t-i;break;case Pr:n=r.length-2,s=t+r[n]-r[n+1];break;default:n=e,s=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Ri:o=e,l=2*i-t;break;case Pr:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}const c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-s),this._weightNext=c/(l-i),this._offsetPrev=n*h,this._offsetNext=o*h}interpolate_(e,t,i,r){const n=this.resultBuffer,o=this.sampleValues,s=this.valueSize,l=e*s,c=l-s,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(i-t)/(r-t),p=g*g,m=p*g,y=-u*m+2*u*p-u*g,w=(1+u)*m+(-1.5-2*u)*p+(-.5+u)*g+1,M=(-1-f)*m+(1.5+f)*p+.5*g,b=f*m-f*p;for(let E=0;E!==s;++E)n[E]=y*o[h+E]+w*o[c+E]+M*o[l+E]+b*o[d+E];return n}}class Co extends br{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const n=this.resultBuffer,o=this.sampleValues,s=this.valueSize,l=e*s,c=l-s,h=(i-t)/(r-t),d=1-h;for(let u=0;u!==s;++u)n[u]=o[c+u]*d+o[l+u]*h;return n}}class dm extends br{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ut{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=an(t,this.TimeBufferType),this.values=an(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:an(e.times,Array),values:an(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new dm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Co(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new um(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ar:t=this.InterpolantFactoryMethodDiscrete;break;case or:t=this.InterpolantFactoryMethodLinear;break;case wn:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ar;case this.InterpolantFactoryMethodLinear:return or;case this.InterpolantFactoryMethodSmooth:return wn}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let n=0,o=r-1;for(;n!==r&&i[n]<e;)++n;for(;o!==-1&&i[o]>t;)--o;if(++o,n!==0||o!==r){n>=o&&(o=Math.max(o,1),n=o-1);const s=this.getValueSize();this.times=ai(i,n,o),this.values=ai(this.values,n*s,o*s)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,n=i.length;n===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let s=0;s!==n;s++){const l=i[s];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,s,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,s,l,o),e=!1;break}o=l}if(r!==void 0&&To(r))for(let s=0,l=r.length;s!==l;++s){const c=r[s];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,s,c),e=!1;break}}return e}optimize(){const e=ai(this.times),t=ai(this.values),i=this.getValueSize(),r=this.getInterpolation()===wn,n=e.length-1;let o=1;for(let s=1;s<n;++s){let l=!1;const c=e[s],h=e[s+1];if(c!==h&&(s!==1||c!==e[0]))if(r)l=!0;else{const d=s*i,u=d-i,f=d+i;for(let g=0;g!==i;++g){const p=t[d+g];if(p!==t[u+g]||p!==t[f+g]){l=!0;break}}}if(l){if(s!==o){e[o]=e[s];const d=s*i,u=o*i;for(let f=0;f!==i;++f)t[u+f]=t[d+f]}++o}}if(n>0){e[o]=e[n];for(let s=n*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[s+c];++o}return o!==e.length?(this.times=ai(e,0,o),this.values=ai(t,0,o*i)):(this.times=e,this.values=t),this}clone(){const e=ai(this.times,0),t=ai(this.values,0),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}Ut.prototype.TimeBufferType=Float32Array,Ut.prototype.ValueBufferType=Float32Array,Ut.prototype.DefaultInterpolation=or;class Qi extends Ut{}Qi.prototype.ValueTypeName="bool",Qi.prototype.ValueBufferType=Array,Qi.prototype.DefaultInterpolation=ar,Qi.prototype.InterpolantFactoryMethodLinear=void 0,Qi.prototype.InterpolantFactoryMethodSmooth=void 0;class Lo extends Ut{}Lo.prototype.ValueTypeName="color";class Sr extends Ut{}Sr.prototype.ValueTypeName="number";class pm extends br{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const n=this.resultBuffer,o=this.sampleValues,s=this.valueSize,l=(i-t)/(r-t);let c=e*s;for(let h=c+s;c!==h;c+=4)It.slerpFlat(n,0,o,c-s,o,c,l);return n}}class $i extends Ut{InterpolantFactoryMethodLinear(e){return new pm(this.times,this.values,this.getValueSize(),e)}}$i.prototype.ValueTypeName="quaternion",$i.prototype.DefaultInterpolation=or,$i.prototype.InterpolantFactoryMethodSmooth=void 0;class er extends Ut{}er.prototype.ValueTypeName="string",er.prototype.ValueBufferType=Array,er.prototype.DefaultInterpolation=ar,er.prototype.InterpolantFactoryMethodLinear=void 0,er.prototype.InterpolantFactoryMethodSmooth=void 0;class wr extends Ut{}wr.prototype.ValueTypeName="vector";class hs{constructor(e,t=-1,i,r=Tn){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=Ct(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,s=i.length;o!==s;++o)t.push(fm(i[o]).scale(r));const n=new this(e.name,e.duration,t,e.blendMode);return n.uuid=e.uuid,n}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let n=0,o=i.length;n!==o;++n)t.push(Ut.toJSON(i[n]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const n=t.length,o=[];for(let s=0;s<n;s++){let l=[],c=[];l.push((s+n-1)%n,s,(s+1)%n),c.push(0,1,0);const h=hm(l);l=Eo(l,1,h),c=Eo(c,1,h),!r&&l[0]===0&&(l.push(n),c.push(c[0])),o.push(new Sr(".morphTargetInfluences["+t[s].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},n=/^([\w-]*?)([\d]+)$/;for(let s=0,l=e.length;s<l;s++){const c=e[s],h=c.name.match(n);if(h&&h.length>1){const d=h[1];let u=r[d];u||(r[d]=u=[]),u.push(c)}}const o=[];for(const s in r)o.push(this.CreateFromMorphTargetSequence(s,r[s],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(h,d,u,f,g){if(u.length!==0){const p=[],m=[];Ao(u,p,m,f),p.length!==0&&g.push(new h(d,p,m))}},r=[],n=e.name||"default",o=e.fps||30,s=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const u={};let f;for(f=0;f<d.length;f++)if(d[f].morphTargets)for(let g=0;g<d[f].morphTargets.length;g++)u[d[f].morphTargets[g]]=-1;for(const g in u){const p=[],m=[];for(let y=0;y!==d[f].morphTargets.length;++y){const w=d[f];p.push(w.time),m.push(w.morphTarget===g?1:0)}r.push(new Sr(".morphTargetInfluence["+g+"]",p,m))}l=u.length*o}else{const u=".bones["+t[h].name+"]";i(wr,u+".position",d,"pos",r),i($i,u+".quaternion",d,"rot",r),i(wr,u+".scale",d,"scl",r)}}return r.length===0?null:new this(n,l,r,s)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const n=this.tracks[i];t=Math.max(t,n.times[n.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function mm(a){switch(a.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Sr;case"vector":case"vector2":case"vector3":case"vector4":return wr;case"color":return Lo;case"quaternion":return $i;case"bool":case"boolean":return Qi;case"string":return er}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+a)}function fm(a){if(a.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=mm(a.type);if(a.times===void 0){const t=[],i=[];Ao(a.keys,t,i,"value"),a.times=t,a.values=i}return e.parse!==void 0?e.parse(a):new e(a.name,a.times,a.values,a.interpolation)}const tr={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class gm{constructor(e,t,i){const r=this;let n=!1,o=0,s=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){s++,n===!1&&r.onStart!==void 0&&r.onStart(h,o,s),n=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,s),o===s&&(n=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const _m=new gm;class Tr{constructor(e){this.manager=e!==void 0?e:_m,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,n){i.load(e,r,t,n)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Jt={};class vm extends Error{constructor(e,t){super(e),this.response=t}}class xm extends Tr{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const n=tr.get(e);if(n!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(n),this.manager.itemEnd(e)},0),n;if(Jt[e]!==void 0){Jt[e].push({onLoad:t,onProgress:i,onError:r});return}Jt[e]=[],Jt[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),s=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Jt[e],d=c.body.getReader(),u=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=u?parseInt(u):0,g=f!==0;let p=0;const m=new ReadableStream({start(y){w();function w(){d.read().then(({done:M,value:b})=>{if(M)y.close();else{p+=b.byteLength;const E=new ProgressEvent("progress",{lengthComputable:g,loaded:p,total:f});for(let C=0,N=h.length;C<N;C++){const v=h[C];v.onProgress&&v.onProgress(E)}y.enqueue(b),w()}})}}});return new Response(m)}else throw new vm(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,s));case"json":return c.json();default:if(s===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(s),d=h&&h[1]?h[1].toLowerCase():void 0,u=new TextDecoder(d);return c.arrayBuffer().then(f=>u.decode(f))}}}).then(c=>{tr.add(e,c);const h=Jt[e];delete Jt[e];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=Jt[e];if(h===void 0)throw this.manager.itemError(e),c;delete Jt[e];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class ym extends Tr{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const n=this,o=tr.get(e);if(o!==void 0)return n.manager.itemStart(e),setTimeout(function(){t&&t(o),n.manager.itemEnd(e)},0),o;const s=ur("img");function l(){h(),tr.add(e,this),t&&t(this),n.manager.itemEnd(e)}function c(d){h(),r&&r(d),n.manager.itemError(e),n.manager.itemEnd(e)}function h(){s.removeEventListener("load",l,!1),s.removeEventListener("error",c,!1)}return s.addEventListener("load",l,!1),s.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),n.manager.itemStart(e),s.src=e,s}}class Mm extends Tr{constructor(e){super(e)}load(e,t,i,r){const n=new st,o=new ym(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(s){n.image=s,n.needsUpdate=!0,t!==void 0&&t(n)},i,r),n}}class on extends Ve{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const us=new Ce,Do=new L,Po=new L;class ds{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $n,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new Be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Do.setFromMatrixPosition(e.matrixWorld),t.position.copy(Do),Po.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Po),t.updateMatrixWorld(),us.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(us),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(us)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class bm extends ds{constructor(){super(new ut(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=cr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,n=e.distance||t.far;(i!==t.fov||r!==t.aspect||n!==t.far)&&(t.fov=i,t.aspect=r,t.far=n,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Sm extends on{constructor(e,t,i=0,r=Math.PI/3,n=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.target=new Ve,this.distance=i,this.angle=r,this.penumbra=n,this.decay=o,this.map=null,this.shadow=new bm}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Ro=new Ce,Er=new L,ps=new L;class wm extends ds{constructor(){super(new ut(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Re(4,2),this._viewportCount=6,this._viewports=[new Be(2,1,1,1),new Be(0,1,1,1),new Be(3,1,1,1),new Be(1,1,1,1),new Be(3,0,1,1),new Be(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,n=e.distance||i.far;n!==i.far&&(i.far=n,i.updateProjectionMatrix()),Er.setFromMatrixPosition(e.matrixWorld),i.position.copy(Er),ps.copy(i.position),ps.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(ps),i.updateMatrixWorld(),r.makeTranslation(-Er.x,-Er.y,-Er.z),Ro.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ro)}}class Tm extends on{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new wm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Em extends ds{constructor(){super(new es(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Am extends on{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.target=new Ve,this.shadow=new Em}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Cm extends on{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Lm{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Dm extends Tr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const n=this,o=tr.get(e);if(o!==void 0)return n.manager.itemStart(e),setTimeout(function(){t&&t(o),n.manager.itemEnd(e)},0),o;const s={};s.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",s.headers=this.requestHeader,fetch(e,s).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(n.options,{colorSpaceConversion:"none"}))}).then(function(l){tr.add(e,l),t&&t(l),n.manager.itemEnd(e)}).catch(function(l){r&&r(l),n.manager.itemError(e),n.manager.itemEnd(e)}),n.manager.itemStart(e)}}class Pm{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Io(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Io();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Io(){return(typeof performance>"u"?Date:performance).now()}class Rm{constructor(e,t,i){this.binding=e,this.valueSize=i;let r,n,o;switch(t){case"quaternion":r=this._slerp,n=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":r=this._select,n=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:r=this._lerp,n=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=n,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const i=this.buffer,r=this.valueSize,n=e*r+r;let o=this.cumulativeWeight;if(o===0){for(let s=0;s!==r;++s)i[n+s]=i[s];o=t}else{o+=t;const s=t/o;this._mixBufferRegion(i,n,0,s,r)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,i=this.valueSize,r=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,i=this.buffer,r=e*t+t,n=this.cumulativeWeight,o=this.cumulativeWeightAdditive,s=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,n<1){const l=t*this._origIndex;this._mixBufferRegion(i,r,l,1-n,t)}o>0&&this._mixBufferRegionAdditive(i,r,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){s.setValue(i,r);break}}saveOriginalState(){const e=this.binding,t=this.buffer,i=this.valueSize,r=i*this._origIndex;e.getValue(t,r);for(let n=i,o=r;n!==o;++n)t[n]=t[r+n%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,r,n){if(r>=.5)for(let o=0;o!==n;++o)e[t+o]=e[i+o]}_slerp(e,t,i,r){It.slerpFlat(e,t,e,t,e,i,r)}_slerpAdditive(e,t,i,r,n){const o=this._workIndex*n;It.multiplyQuaternionsFlat(e,o,e,t,e,i),It.slerpFlat(e,t,e,t,e,o,r)}_lerp(e,t,i,r,n){const o=1-r;for(let s=0;s!==n;++s){const l=t+s;e[l]=e[l]*o+e[i+s]*r}}_lerpAdditive(e,t,i,r,n){for(let o=0;o!==n;++o){const s=t+o;e[s]=e[s]+e[i+o]*r}}}const ms="\\[\\]\\.:\\/",Im=new RegExp("["+ms+"]","g"),fs="[^"+ms+"]",Nm="[^"+ms.replace("\\.","")+"]",Um=/((?:WC+[\/:])*)/.source.replace("WC",fs),zm=/(WCOD+)?/.source.replace("WCOD",Nm),Om=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fs),Bm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fs),Fm=new RegExp("^"+Um+zm+Om+Bm+"$"),km=["material","materials","bones","map"];class Hm{constructor(e,t,i){const r=i||Ne.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,n=i.length;r!==n;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Ne{constructor(e,t,i){this.path=t,this.parsedPath=i||Ne.parseTrackName(t),this.node=Ne.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Ne.Composite(e,t,i):new Ne(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Im,"")}static parseTrackName(e){const t=Fm.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const n=i.nodeName.substring(r+1);km.indexOf(n)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=n)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(n){for(let o=0;o<n.length;o++){const s=n[o];if(s.name===t||s.uuid===t)return s;const l=i(s.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,n=i.length;r!==n;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,n=i.length;r!==n;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,n=i.length;r!==n;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,n=i.length;r!==n;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let n=t.propertyIndex;if(e||(e=Ne.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let s=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?s=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(n!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[n]!==void 0&&(n=e.morphTargetDictionary[n])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=n}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ne.Composite=Hm,Ne.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Ne.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Ne.prototype.GetterByBindingType=[Ne.prototype._getValue_direct,Ne.prototype._getValue_array,Ne.prototype._getValue_arrayElement,Ne.prototype._getValue_toArray],Ne.prototype.SetterByBindingTypeAndVersioning=[[Ne.prototype._setValue_direct,Ne.prototype._setValue_direct_setNeedsUpdate,Ne.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_array,Ne.prototype._setValue_array_setNeedsUpdate,Ne.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_arrayElement,Ne.prototype._setValue_arrayElement_setNeedsUpdate,Ne.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_fromArray,Ne.prototype._setValue_fromArray_setNeedsUpdate,Ne.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Gm{constructor(e,t,i=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=r;const n=t.tracks,o=n.length,s=new Array(o),l={endingStart:Pi,endingEnd:Pi};for(let c=0;c!==o;++c){const h=n[c].createInterpolant(null);s[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=s,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Ll,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){const r=this._clip.duration,n=e._clip.duration,o=n/r,s=r/n;e.warp(1,o,t),this.warp(s,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const r=this._mixer,n=r.time,o=this.timeScale;let s=this._timeScaleInterpolant;s===null&&(s=r._lendControlInterpolant(),this._timeScaleInterpolant=s);const l=s.parameterPositions,c=s.sampleValues;return l[0]=n,l[1]=n+i,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,r){if(!this.enabled){this._updateWeight(e);return}const n=this._startTime;if(n!==null){const l=(e-n)*i;l<0||i===0?t=0:(this._startTime=null,t=i*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),s=this._updateWeight(e);if(s>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Pl:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(o),c[h].accumulateAdditive(s);break;case Tn:default:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(o),c[h].accumulate(r,s)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const r=i.evaluate(e)[0];t*=r,e>i.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const r=i.evaluate(e)[0];t*=r,e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let r=this.time+e,n=this._loopCount;const o=i===Dl;if(e===0)return n===-1?r:o&&(n&1)===1?t-r:r;if(i===Cl){n===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(n===-1&&(e>=0?(n=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),r>=t||r<0){const s=Math.floor(r/t);r-=t*s,n+=Math.abs(s);const l=this.repetitions-n;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=n,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:s})}}else this.time=r;if(o&&(n&1)===1)return t-r}return r}_setEndings(e,t,i){const r=this._interpolantSettings;i?(r.endingStart=Ri,r.endingEnd=Ri):(e?r.endingStart=this.zeroSlopeAtStart?Ri:Pi:r.endingStart=Pr,t?r.endingEnd=this.zeroSlopeAtEnd?Ri:Pi:r.endingEnd=Pr)}_scheduleFading(e,t,i){const r=this._mixer,n=r.time;let o=this._weightInterpolant;o===null&&(o=r._lendControlInterpolant(),this._weightInterpolant=o);const s=o.parameterPositions,l=o.sampleValues;return s[0]=n,l[0]=t,s[1]=n+e,l[1]=i,this}}const Vm=new Float32Array(1);class Wm extends ei{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const i=e._localRoot||this._root,r=e._clip.tracks,n=r.length,o=e._propertyBindings,s=e._interpolants,l=i.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let d=0;d!==n;++d){const u=r[d],f=u.name;let g=h[f];if(g!==void 0)++g.referenceCount,o[d]=g;else{if(g=o[d],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,f));continue}const p=t&&t._propertyBindings[d].binding.parsedPath;g=new Rm(Ne.create(i,f,p),u.ValueTypeName,u.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,f),o[d]=g}s[d].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const i=(e._localRoot||this._root).uuid,r=e._clip.uuid,n=this._actionsByClip[r];this._bindAction(e,n&&n.knownActions[0]),this._addInactiveAction(e,r,i)}const t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){const n=t[i];n.useCount++===0&&(this._lendBinding(n),n.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){const n=t[i];--n.useCount===0&&(n.restoreOriginalState(),this._takeBackBinding(n))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){const r=this._actions,n=this._actionsByClip;let o=n[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,n[t]=o;else{const s=o.knownActions;e._byClipCacheIndex=s.length,s.push(e)}e._cacheIndex=r.length,r.push(e),o.actionByRoot[i]=e}_removeInactiveAction(e){const t=this._actions,i=t[t.length-1],r=e._cacheIndex;i._cacheIndex=r,t[r]=i,t.pop(),e._cacheIndex=null;const n=e._clip.uuid,o=this._actionsByClip,s=o[n],l=s.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const d=s.actionByRoot,u=(e._localRoot||this._root).uuid;delete d[u],l.length===0&&delete o[n],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){const n=t[i];--n.referenceCount===0&&this._removeInactiveBinding(n)}}_lendAction(e){const t=this._actions,i=e._cacheIndex,r=this._nActiveActions++,n=t[r];e._cacheIndex=r,t[r]=e,n._cacheIndex=i,t[i]=n}_takeBackAction(e){const t=this._actions,i=e._cacheIndex,r=--this._nActiveActions,n=t[r];e._cacheIndex=r,t[r]=e,n._cacheIndex=i,t[i]=n}_addInactiveBinding(e,t,i){const r=this._bindingsByRootAndName,n=this._bindings;let o=r[t];o===void 0&&(o={},r[t]=o),o[i]=e,e._cacheIndex=n.length,n.push(e)}_removeInactiveBinding(e){const t=this._bindings,i=e.binding,r=i.rootNode.uuid,n=i.path,o=this._bindingsByRootAndName,s=o[r],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete s[n],Object.keys(s).length===0&&delete o[r]}_lendBinding(e){const t=this._bindings,i=e._cacheIndex,r=this._nActiveBindings++,n=t[r];e._cacheIndex=r,t[r]=e,n._cacheIndex=i,t[i]=n}_takeBackBinding(e){const t=this._bindings,i=e._cacheIndex,r=--this._nActiveBindings,n=t[r];e._cacheIndex=r,t[r]=e,n._cacheIndex=i,t[i]=n}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let i=e[t];return i===void 0&&(i=new Co(new Float32Array(2),new Float32Array(2),1,Vm),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){const t=this._controlInterpolants,i=e.__cacheIndex,r=--this._nActiveControlInterpolants,n=t[r];e.__cacheIndex=r,t[r]=e,n.__cacheIndex=i,t[i]=n}clipAction(e,t,i){const r=t||this._root,n=r.uuid;let o=typeof e=="string"?hs.findByName(r,e):e;const s=o!==null?o.uuid:e,l=this._actionsByClip[s];let c=null;if(i===void 0&&(o!==null?i=o.blendMode:i=Tn),l!==void 0){const d=l.actionByRoot[n];if(d!==void 0&&d.blendMode===i)return d;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const h=new Gm(this,o,t,i);return this._bindAction(h,c),this._addInactiveAction(h,s,n),h}existingAction(e,t){const i=t||this._root,r=i.uuid,n=typeof e=="string"?hs.findByName(i,e):e,o=n?n.uuid:e,s=this._actionsByClip[o];return s!==void 0&&s.actionByRoot[r]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;const t=this._actions,i=this._nActiveActions,r=this.time+=e,n=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(r,e,n,o);const s=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)s[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,i=e.uuid,r=this._actionsByClip,n=r[i];if(n!==void 0){const o=n.knownActions;for(let s=0,l=o.length;s!==l;++s){const c=o[s];this._deactivateAction(c);const h=c._cacheIndex,d=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=h,t[h]=d,t.pop(),this._removeInactiveBindingsForAction(c)}delete r[i]}}uncacheRoot(e){const t=e.uuid,i=this._actionsByClip;for(const o in i){const s=i[o].actionByRoot,l=s[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const r=this._bindingsByRootAndName,n=r[t];if(n!==void 0)for(const o in n){const s=n[o];s.restoreOriginalState(),this._removeInactiveBinding(s)}}uncacheAction(e,t){const i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}class jm{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(nt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mn}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mn);export{es as $,Is as A,ir as B,Pm as C,Am as D,ei as E,xm as F,Ht as G,Ne as H,sm as I,zt as J,tm as K,Tr as L,Bo as M,am as N,Ve as O,ut as P,It as Q,Cr as R,jm as S,Fo as T,ls as U,L as V,no as W,om as X,lm as Y,yr as Z,Ql as _,Re as a,vs as a0,or as a1,hs as a2,co as a3,Qe as a4,vn as a5,Us as a6,Dr as a7,St as a8,Lr as a9,ar as aa,kt as ab,_s as ac,st as ad,wr as ae,$i as af,Sr as ag,Ni as ah,Bi as ai,br as aj,Qp as ak,ws as b,Ce as c,Cm as d,wo as e,Et as f,Wm as g,Rl as h,Nl as i,Il as j,Lm as k,Pe as l,Sm as m,Tm as n,qn as o,cm as p,Mm as q,Dm as r,Fe as s,_t as t,$p as u,ft as v,Ci as w,Mo as x,si as y,fo as z};
