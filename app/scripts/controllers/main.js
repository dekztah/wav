'use strict';

angular.module('wavApp').controller('MainCtrl', function ($rootScope, $window, CustomTubeGeometry, AdditiveBlendShader) {

    var THREE = $window.THREE,
        TWEEN = $window.TWEEN;

    // var screenWidth = window.innerWidth,
    //     screenHeight = window.innerHeight;

    var screenWidth = 1920,
        screenHeight = 956;

    var camera, scene, webglRenderer;

    var renderPass, filmPass, staticPass, hblurPass, vblurPass, FXAApass;
    var requestId;

    var container = document.getElementById('webGLWrapper');

    camera = new THREE.PerspectiveCamera(60, screenWidth / screenHeight, 1, 1000000);
    camera.position.x = -600;

    var center = new THREE.Vector3(0,0,0);

    scene = new THREE.Scene();

    var material2 = new THREE.MeshLambertMaterial({
        vertexColors: THREE.VertexColors,
        side:THREE.DoubleSide,
        color: 0x00ffff,
        transparent: true,
        shading: THREE.SmoothShading
    });

    var splineVectors = [];
    var periodFlag = 0;

    // magic
    for (var j = 0; j < 200; j++) {
        var x = j*7.75;
        var y = Math.sin(Math.PI*(-(j+10)/20));

        if (y === 1) {
            periodFlag += 1;
        }

        var z = Math.cos(Math.PI*(-(j+10)/20))*50;
        if (periodFlag%2 === 1) {
            // z = -z;
        }
        splineVectors.push(new THREE.Vector3(x, y * 50, z));
    }

    var spline = new THREE.SplineCurve3(splineVectors);

    var segments = 1000;
    var radiusSegments = 32;

    var text1Geometry = new CustomTubeGeometry(spline, segments, 2, radiusSegments, false);

    // text color

    var color, face, numberOfSides, vertexIndex;
    var faceIndices = [ 'a', 'b', 'c', 'd' ];
    for ( var s = 0; s <= segments; s++ ) {
        for ( var r = 0; r < radiusSegments; r++ ) {
            vertexIndex = r + s * radiusSegments;
            color = new THREE.Color( 'rgb(0,15,15)' );
            var convValue;
            if (s < 650 && s > 599) {
                convValue = Math.round((s-600)*4.8);
                color.setStyle('rgb(0,' + (convValue + 15) + ',' + (convValue + 15) + ')');
            } else if (s > 750 && s < 801) {
                convValue = Math.round((800-s)*4.8);
                color.setStyle('rgb(0,' + (convValue + 15) + ',' + (convValue + 15) + ')');
            } else if (s < 600 || s > 800){
                // uhm
            } else {
                color.setRGB(0, 1, 1);
            }
            text1Geometry.colors[vertexIndex] = color;
        }
    }
    for ( var i = 0; i < text1Geometry.faces.length; i++ ) {
        face = text1Geometry.faces[ i ];
        numberOfSides = ( face instanceof THREE.Face3 ) ? 3 : 4;
        for( var n = 0; n < numberOfSides; n++ ) {
            vertexIndex = face[ faceIndices[ n ] ];
            face.vertexColors[ n ] = text1Geometry.colors[ vertexIndex ];
        }
    }

    var oscGeometry = new THREE.Geometry();

    for (var o = 0; o < 64; o++) {
        oscGeometry.vertices.push(new THREE.Vector3( o*10, 0, 0 ));
    }

    var textMesh1 = new THREE.Mesh( text1Geometry, material2 );
    var textMesh2 = textMesh1.clone();
    var textMesh3 = textMesh1.clone();
    var textMesh4 = textMesh1.clone();

    textMesh1.position.set(-62,0,0); // W1
    textMesh2.position.set(15,0,0); // W2
    textMesh3.position.set(-1960,0,0); // A
    textMesh4.position.set(405,0,0); // V

    textMesh1.rotation.z = Math.PI;
    textMesh2.rotation.z = Math.PI;
    textMesh4.rotation.z = Math.PI;

    var group = new THREE.Object3D();

    group.add(textMesh1);
    group.add(textMesh2);
    group.add(textMesh3);
    group.add(textMesh4);

    scene.add(group);
    group.position.set(900,0,0);

    scene.add(new THREE.AmbientLight(0xffffff));

    // renderer
    webglRenderer = new THREE.WebGLRenderer();
    webglRenderer.setSize(screenWidth, screenHeight);

    container.appendChild(webglRenderer.domElement);

    // postprocessing
    var blurriness = 8.5;
    var renderTargetParameters = { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, format: THREE.RGBFormat, stencilBufer: false };

    // base layer
    var renderTarget = new THREE.WebGLRenderTarget( screenWidth, screenHeight, renderTargetParameters );
    var renderComposer = new THREE.EffectComposer( webglRenderer, renderTarget);

    renderPass = new THREE.RenderPass( scene, camera );
    var copyPass = new THREE.ShaderPass( THREE.CopyShader );

    renderComposer.addPass( renderPass );
    renderComposer.addPass( copyPass );

    // copyPass.renderToScreen = true;

    // bloom layer
    var bloomPass = new THREE.BloomPass(1.4, 12, 2.0, 512);
    var renderTargetBloom = new THREE.WebGLRenderTarget( screenWidth, screenHeight, renderTargetParameters );
    var bloomComposer = new THREE.EffectComposer( webglRenderer, renderTargetBloom);

    bloomComposer.addPass( renderPass );
    bloomComposer.addPass( bloomPass );
    bloomComposer.addPass( copyPass );

    // blend base and bloom
    var blendBaseAndBloom = new THREE.EffectComposer( webglRenderer );
    var blendBaseAndBloomPass = new THREE.ShaderPass( THREE.BlendShader );
    blendBaseAndBloomPass.uniforms.tDiffuse1.value = bloomComposer.renderTarget1;
    blendBaseAndBloomPass.uniforms.tDiffuse2.value = renderComposer.renderTarget1;
    blendBaseAndBloomPass.uniforms.mixRatio.value = 0.15;
    blendBaseAndBloom.addPass( blendBaseAndBloomPass );

    // glow layer
    hblurPass = new THREE.ShaderPass( THREE.HorizontalBlurShader );
    vblurPass = new THREE.ShaderPass( THREE.VerticalBlurShader );
    hblurPass.uniforms.h.value = blurriness/screenWidth;
    vblurPass.uniforms.v.value = blurriness/screenHeight;
    var renderTargetGlow = new THREE.WebGLRenderTarget( screenWidth/4, screenHeight/4, renderTargetParameters );
    var glowComposer = new THREE.EffectComposer( webglRenderer,renderTargetGlow);
    bloomPass = new THREE.BloomPass(3, 12, 2.0, 512);
    glowComposer.addPass( copyPass );
    glowComposer.addPass( renderPass );
    glowComposer.addPass( bloomPass );
    glowComposer.addPass( hblurPass );
    glowComposer.addPass( vblurPass );
    glowComposer.addPass( hblurPass );
    glowComposer.addPass( vblurPass );

    // blend base + bloom and glow
    var blendComposer = new THREE.EffectComposer( webglRenderer );
    var blendPass = new THREE.ShaderPass( AdditiveBlendShader );
    blendPass.uniforms.tBase.value = blendBaseAndBloom.renderTarget1;
    blendPass.uniforms.tAdd.value = glowComposer.renderTarget1;
    blendPass.uniforms.amount.value = 1;
    blendComposer.addPass( blendPass );

    filmPass = new THREE.ShaderPass( THREE.FilmShader );
    filmPass.uniforms.grayscale.value = 0;
    filmPass.uniforms.sIntensity.value = 0.8;
    filmPass.uniforms.sCount.value = 800;

    staticPass = new THREE.ShaderPass( THREE.StaticShader );
    staticPass.uniforms.amount.value = 0.1;
    staticPass.uniforms.size.value = 2.0;

    var vignettePass = new THREE.ShaderPass( THREE.VignetteShader );

    FXAApass = new THREE.ShaderPass( THREE.FXAAShader );
    FXAApass.uniforms.resolution.value.set( 1 / screenWidth, 1 / screenHeight );
    vignettePass.uniforms.darkness.value = 2.0;
    blendComposer.addPass( filmPass );
    blendComposer.addPass( staticPass );
    blendComposer.addPass( FXAApass );
    blendComposer.addPass( vignettePass );
    vignettePass.renderToScreen = true;


    var oldCamPos = [];
    // rotationTween
    new TWEEN.Tween ( group.rotation )
        .to( { x: Math.PI * 24 }, 10000)
        .easing( TWEEN.Easing.Sinusoidal.InOut )
        .start();

    // cameraPositionTween
    new TWEEN.Tween ( camera.position )
        .to( { x: 0, z: 950 }, 2000)
        .easing( TWEEN.Easing.Quadratic.InOut )
        .delay(4000)
        .onComplete(function(){
            oldCamPos = [camera.position.z];
            camera.updateProjectionMatrix();
        })
        .start();

    var oldFOV = [camera.fov];

    // cameraFovTween
    new TWEEN.Tween ( camera )
        .to( { fov: 1 }, 2000 )
        .easing( TWEEN.Easing.Cubic.In )
        .delay(7000)
        .onUpdate(function(){
            camera.position.z = oldCamPos[oldCamPos.length-1] * (Math.tan(oldFOV[oldFOV.length-1] * Math.PI/360) / Math.tan(camera.fov * Math.PI/360));
            oldFOV.push(camera.fov);
            oldCamPos.push(camera.position.z);
            camera.updateProjectionMatrix();
        })
        // .onComplete(function(){
        //     console.log(camera.position.z);
        // })
        .start();

    // filmTween
    new TWEEN.Tween ( filmPass.uniforms.sIntensity )
        .to( { value: 0 }, 1000)
        .easing( TWEEN.Easing.Cubic.InOut )
        .delay(12000)
        .start();

    // staticTween
    new TWEEN.Tween ( staticPass.uniforms.amount )
        .to( { value: 0 }, 1000 )
        .easing( TWEEN.Easing.Linear.None )
        .delay(12000)
        .onComplete(function(){
            fadeOut.start();
            staticOff.start();
            $rootScope.$apply(function(){
                $rootScope.introEnd = true;
            });

        })
        .start();

    var staticOff = new TWEEN.Tween ( staticPass.uniforms.amount )
        .to( { value: 0 }, 2000)
        .easing( TWEEN.Easing.Cubic.Out )
        .onComplete(function(){
            $window.cancelAnimationFrame(requestId);
        });

    var fadeOut = new TWEEN.Tween ( group.children[0].material )
        .to( { opacity: 0 }, 2000)
        .easing( TWEEN.Easing.Cubic.Out );

    var shaderTime = 0;

    function animate() {
        requestId = $window.requestAnimationFrame(animate);
        shaderTime += 0.1;

        // filmPass.uniforms.time.value =  shaderTime;
        staticPass.uniforms.time.value =  shaderTime;

        camera.lookAt(center);
        renderComposer.render( 0.1 );
        bloomComposer.render(0.1);
        blendBaseAndBloom.render( 0.1 );
        glowComposer.render( 0.1 );
        blendComposer.render( 0.1 );

        TWEEN.update();

    }
    animate();
    // $rootScope.introEnd = true;

    // camera.position.z = 63000; // goal
    // camera.position.x = 0;
    // camera.fov = 1;
    // camera.lookAt(center);
    // camera.updateProjectionMatrix();
    // renderComposer.render( 0.1 );
    // bloomComposer.render(0.1);
    // blendBaseAndBloom.render( 0.1 );
    // glowComposer.render( 0.1 );
    // blendComposer.render( 0.1 );

});
