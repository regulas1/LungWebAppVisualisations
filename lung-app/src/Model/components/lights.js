import { DirectionalLight } from 'zincjs/node_modules/three/src/Three.js';

function createLights() {
  // Create a directional light
  const light = new DirectionalLight('white', 8);

  // move the light right, up, and towards us
  light.position.set(10, 10, 10);

  return light;
}

export { createLights };