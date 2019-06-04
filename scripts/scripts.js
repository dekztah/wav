"use strict";angular.module("wavApp",["ngAnimate"]),angular.module("wavApp").factory("CustomTubeGeometry",["$window",function(a){var b=a.THREE,c=function(a,c,d,e,f){function g(a,c,d){return C.vertices.push(new b.Vector3(a,c,d))-1}b.Geometry.call(this),this.type="CustomTubeGeometry",this.parameters={path:a,segments:c,radius:d,radialSegments:e,closed:f},c=c||64,d=d||1,e=e||8,f=f||!1;var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B=[],C=this,D=c+1,E=new b.Vector3,F=new b.TubeGeometry.FrenetFrames(a,c,f),G=F.tangents,H=F.normals,I=F.binormals;for(this.tangents=G,this.normals=H,this.binormals=I,p=0;D>p;p++){B[p]=[],k=p/(D-1),o=a.getPointAt(k);var J;for(J=650>p&&p>599?1+.02*(p-600):p>750&&801>p?1+.02*(800-p):600>p||p>800?1:2,h=G[p],i=H[p],j=I[p],q=0;e>q;q++)l=q/e*2*Math.PI,m=-J*Math.cos(l),n=J*Math.sin(l),E.copy(o),E.x+=m*i.x+n*j.x,E.y+=m*i.y+n*j.y,E.z+=m*i.z+n*j.z,B[p][q]=g(E.x,E.y,E.z)}for(p=0;c>p;p++)for(q=0;e>q;q++)r=f?(p+1)%c:p+1,s=(q+1)%e,t=B[p][q],u=B[r][q],v=B[r][s],w=B[p][s],x=new b.Vector2(p/c,q/e),y=new b.Vector2((p+1)/c,q/e),z=new b.Vector2((p+1)/c,(q+1)/e),A=new b.Vector2(p/c,(q+1)/e),this.faces.push(new b.Face3(t,u,w)),this.faceVertexUvs[0].push([x,y,A]),this.faces.push(new b.Face3(u,v,w)),this.faceVertexUvs[0].push([y.clone(),z,A.clone()]);this.computeFaceNormals(),this.computeVertexNormals()};return c.prototype=Object.create(b.Geometry.prototype),c}]),angular.module("wavApp").factory("AdditiveBlendShader",["$window",function(a){var b={uniforms:{tBase:{type:"t",value:null},tAdd:{type:"t",value:null},amount:{type:"f",value:1}},vertexShader:["varying vec2 vUv;","void main() {","vUv = uv;","gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join("\n"),fragmentShader:["uniform sampler2D tBase;","uniform sampler2D tAdd;","uniform float amount;","varying vec2 vUv;","void main() {","vec4 texel1 = texture2D( tBase, vUv );","vec4 texel2 = texture2D( tAdd, vUv );","gl_FragColor = texel1 + texel2 * amount;","}"].join("\n")};return b}]),angular.module("wavApp").controller("MainCtrl",["$rootScope","$window","CustomTubeGeometry","AdditiveBlendShader",function(a,b,c,d){function e(){o=b.requestAnimationFrame(e),oa+=.1,k.uniforms.time.value=oa,f.lookAt(u),$.render(.1),ca.render(.1),da.render(.1),ga.render(.1),ha.render(.1),q.update()}var f,g,h,i,j,k,l,m,n,o,p=b.THREE,q=b.TWEEN,r=1920,s=956,t=document.getElementById("webGLWrapper");f=new p.PerspectiveCamera(60,r/s,1,1e6),f.position.x=-600;var u=new p.Vector3(0,0,0);g=new p.Scene;for(var v=new p.MeshLambertMaterial({vertexColors:p.VertexColors,side:p.DoubleSide,color:65535,transparent:!0,shading:p.SmoothShading}),w=[],x=0,y=0;200>y;y++){var z=7.75*y,A=Math.sin(Math.PI*(-(y+10)/20));1===A&&(x+=1);var B=50*Math.cos(Math.PI*(-(y+10)/20));w.push(new p.Vector3(z,50*A,B))}for(var C,D,E,F,G=new p.SplineCurve3(w),H=1e3,I=32,J=new c(G,H,2,I,!1),K=["a","b","c","d"],L=0;H>=L;L++)for(var M=0;I>M;M++){F=M+L*I,C=new p.Color("rgb(0,15,15)");var N;650>L&&L>599?(N=Math.round(4.8*(L-600)),C.setStyle("rgb(0,"+(N+15)+","+(N+15)+")")):L>750&&801>L?(N=Math.round(4.8*(800-L)),C.setStyle("rgb(0,"+(N+15)+","+(N+15)+")")):600>L||L>800||C.setRGB(0,1,1),J.colors[F]=C}for(var O=0;O<J.faces.length;O++){D=J.faces[O],E=D instanceof p.Face3?3:4;for(var P=0;E>P;P++)F=D[K[P]],D.vertexColors[P]=J.colors[F]}for(var Q=new p.Geometry,R=0;64>R;R++)Q.vertices.push(new p.Vector3(10*R,0,0));var S=new p.Mesh(J,v),T=S.clone(),U=S.clone(),V=S.clone();S.position.set(-62,0,0),T.position.set(15,0,0),U.position.set(-1960,0,0),V.position.set(405,0,0),S.rotation.z=Math.PI,T.rotation.z=Math.PI,V.rotation.z=Math.PI;var W=new p.Object3D;W.add(S),W.add(T),W.add(U),W.add(V),g.add(W),W.position.set(900,0,0),g.add(new p.AmbientLight(16777215)),h=new p.WebGLRenderer,h.setSize(r,s),t.appendChild(h.domElement);var X=8.5,Y={minFilter:p.LinearFilter,magFilter:p.LinearFilter,format:p.RGBFormat,stencilBufer:!1},Z=new p.WebGLRenderTarget(r,s,Y),$=new p.EffectComposer(h,Z);i=new p.RenderPass(g,f);var _=new p.ShaderPass(p.CopyShader);$.addPass(i),$.addPass(_);var aa=new p.BloomPass(1.4,12,2,512),ba=new p.WebGLRenderTarget(r,s,Y),ca=new p.EffectComposer(h,ba);ca.addPass(i),ca.addPass(aa),ca.addPass(_);var da=new p.EffectComposer(h),ea=new p.ShaderPass(p.BlendShader);ea.uniforms.tDiffuse1.value=ca.renderTarget1,ea.uniforms.tDiffuse2.value=$.renderTarget1,ea.uniforms.mixRatio.value=.15,da.addPass(ea),l=new p.ShaderPass(p.HorizontalBlurShader),m=new p.ShaderPass(p.VerticalBlurShader),l.uniforms.h.value=X/r,m.uniforms.v.value=X/s;var fa=new p.WebGLRenderTarget(r/4,s/4,Y),ga=new p.EffectComposer(h,fa);aa=new p.BloomPass(3,12,2,512),ga.addPass(_),ga.addPass(i),ga.addPass(aa),ga.addPass(l),ga.addPass(m),ga.addPass(l),ga.addPass(m);var ha=new p.EffectComposer(h),ia=new p.ShaderPass(d);ia.uniforms.tBase.value=da.renderTarget1,ia.uniforms.tAdd.value=ga.renderTarget1,ia.uniforms.amount.value=1,ha.addPass(ia),j=new p.ShaderPass(p.FilmShader),j.uniforms.grayscale.value=0,j.uniforms.sIntensity.value=.8,j.uniforms.sCount.value=800,k=new p.ShaderPass(p.StaticShader),k.uniforms.amount.value=.1,k.uniforms.size.value=2;var ja=new p.ShaderPass(p.VignetteShader);n=new p.ShaderPass(p.FXAAShader),n.uniforms.resolution.value.set(1/r,1/s),ja.uniforms.darkness.value=2,ha.addPass(j),ha.addPass(k),ha.addPass(n),ha.addPass(ja),ja.renderToScreen=!0;var ka=[];new q.Tween(W.rotation).to({x:24*Math.PI},1e4).easing(q.Easing.Sinusoidal.InOut).start(),new q.Tween(f.position).to({x:0,z:950},2e3).easing(q.Easing.Quadratic.InOut).delay(4e3).onComplete(function(){ka=[f.position.z],f.updateProjectionMatrix()}).start();var la=[f.fov];new q.Tween(f).to({fov:1},2e3).easing(q.Easing.Cubic.In).delay(7e3).onUpdate(function(){f.position.z=ka[ka.length-1]*(Math.tan(la[la.length-1]*Math.PI/360)/Math.tan(f.fov*Math.PI/360)),la.push(f.fov),ka.push(f.position.z),f.updateProjectionMatrix()}).start(),new q.Tween(j.uniforms.sIntensity).to({value:0},1e3).easing(q.Easing.Cubic.InOut).delay(12e3).start(),new q.Tween(k.uniforms.amount).to({value:0},1e3).easing(q.Easing.Linear.None).delay(12e3).onComplete(function(){na.start(),ma.start(),a.$apply(function(){a.introEnd=!0})}).start();var ma=new q.Tween(k.uniforms.amount).to({value:0},2e3).easing(q.Easing.Cubic.Out).onComplete(function(){b.cancelAnimationFrame(o)}),na=new q.Tween(W.children[0].material).to({opacity:0},2e3).easing(q.Easing.Cubic.Out),oa=0;e()}]);