import { DirectionalLight, HemisphereLight } from 'zincjs/node_modules/three/src/Three.js';

function createLights() {
  // create an ambient light
  const ambientLight = new HemisphereLight(
    'white',
    'darkslategrey',
    10,
  );
  // create a directional light
  const mainLight = new DirectionalLight('white', 5);
  // move the light right, up, and towards us
  mainLight.position.set(10, 10, 10);

  return {mainLight, ambientLight };
}

export { createLights };
