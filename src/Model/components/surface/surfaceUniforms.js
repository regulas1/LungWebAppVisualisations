import { UniformsUtils } from 'zincjs/node_modules/three/src/Three.js';
import * as THREE from 'zincjs/node_modules/three/src/Three.js';

function createSurfaceUniforms() {
    let surfaceUniforms = undefined;
    
    surfaceUniforms = UniformsUtils.merge([{
        'ambient'  : { type: 'c', value: new THREE.Color( 0xffffff ) },
        'emissive' : { type: 'c', value: new THREE.Color( 0x000000 ) },
        'specular' : { type: 'c', value: new THREE.Color( 0x111111 ) },
        'shininess': { type: 'f', value: 30 },
        'diffuse': { type: 'c', value: new THREE.Color( 0xeecaa2 ) },
        'ambientLightColor': { type: 'c', value: new THREE.Color( 0x444444 ) },
        'directionalLightColor': { type: 'c', value: new THREE.Color( 0x888888 ) },
        'directionalLightDirection': { type: 'v3', value: new THREE.Vector3()  },
        't': { type: 'f', value: 0.0 },
        'tidalVolumeRatio': { type: 'f', value: 0.4 },
        'severity': { type: 'f', value: 0.0 },
        'opacity': { type: 'f', value: 1.0 },
    }]);
}


export { createSurfaceUniforms };