import { DirectionalLight } from 'zincjs/node_modules/three/src/Three.js';


/* Only pass through when currentUniforms has gone through pre-rendering */
function createLights(light) {
    currentUniforms['directionalLightDirection'].value.set(light.position.x, light.position.y, light.position.z);

    return { currentUniforms };
}

export { createLights };