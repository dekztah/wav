'use strict';

angular.module('wavApp').factory('CustomTubeGeometry', function ($window) {

    var THREE = $window.THREE;

    var CustomTubeGeometry = function ( path, segments, radius, radialSegments, closed ) {

        THREE.Geometry.call( this );

        this.type = 'CustomTubeGeometry';

        this.parameters = {
            path: path,
            segments: segments,
            radius: radius,
            radialSegments: radialSegments,
            closed: closed
        };

        segments = segments || 64;
        radius = radius || 1;
        radialSegments = radialSegments || 8;
        closed = closed || false;

        var grid = [];

        var scope = this,

            tangent,
            normal,
            binormal,

            numpoints = segments + 1,

            u, v,

            cx, cy,
            pos, pos2 = new THREE.Vector3(),
            i, j,
            ip, jp,
            a, b, c, d,
            uva, uvb, uvc, uvd;

        var frames = new THREE.TubeGeometry.FrenetFrames( path, segments, closed ),
            tangents = frames.tangents,
            normals = frames.normals,
            binormals = frames.binormals;

        // proxy internals
        this.tangents = tangents;
        this.normals = normals;
        this.binormals = binormals;

        function vert( x, y, z ) {

            return scope.vertices.push( new THREE.Vector3( x, y, z ) ) - 1;

        }

        // consruct the grid
        for ( i = 0; i < numpoints; i ++ ) {

            grid[ i ] = [];

            u = i / ( numpoints - 1 );

            pos = path.getPointAt( u );
            var posRadius;
            if (i < 650 && i > 599) {
                posRadius = 1 + (i-600)*0.02;
            } else if (i > 750 && i < 801) {
                posRadius = 1 + (800-i)*0.02;
            } else if (i < 600 || i > 800){
                posRadius = 1;
            } else {
                posRadius = 2;
            }
            // var posRadius = radius[Math.floor((radius.length - 1) * u)];

            tangent = tangents[ i ];
            normal = normals[ i ];
            binormal = binormals[ i ];

            for ( j = 0; j < radialSegments; j ++ ) {

                v = j / radialSegments * 2 * Math.PI;

                cx = - posRadius * Math.cos( v ); // TODO: Hack: Negating it so it faces outside.
                cy = posRadius * Math.sin( v );

                pos2.copy( pos );
                pos2.x += cx * normal.x + cy * binormal.x;
                pos2.y += cx * normal.y + cy * binormal.y;
                pos2.z += cx * normal.z + cy * binormal.z;

                grid[ i ][ j ] = vert( pos2.x, pos2.y, pos2.z );

            }
        }


        // construct the mesh

        for ( i = 0; i < segments; i ++ ) {

            for ( j = 0; j < radialSegments; j ++ ) {

                ip = ( closed ) ? (i + 1) % segments : i + 1;
                jp = (j + 1) % radialSegments;

                a = grid[ i ][ j ];     // *** NOT NECESSARILY PLANAR ! ***
                b = grid[ ip ][ j ];
                c = grid[ ip ][ jp ];
                d = grid[ i ][ jp ];

                uva = new THREE.Vector2( i / segments, j / radialSegments );
                uvb = new THREE.Vector2( ( i + 1 ) / segments, j / radialSegments );
                uvc = new THREE.Vector2( ( i + 1 ) / segments, ( j + 1 ) / radialSegments );
                uvd = new THREE.Vector2( i / segments, ( j + 1 ) / radialSegments );

                this.faces.push( new THREE.Face3( a, b, d ) );
                this.faceVertexUvs[ 0 ].push( [ uva, uvb, uvd ] );

                this.faces.push( new THREE.Face3( b, c, d ) );
                this.faceVertexUvs[ 0 ].push( [ uvb.clone(), uvc, uvd.clone() ] );

            }
        }

        this.computeFaceNormals();
        this.computeVertexNormals();

    };

    CustomTubeGeometry.prototype = Object.create( THREE.Geometry.prototype );

    return CustomTubeGeometry;
});
