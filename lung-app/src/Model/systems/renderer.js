import { WebGLRenderer } from 'zincjs/node_modules/three/src/Three.js';

function createRenderer() {
  const renderer = new WebGLRenderer();

  return renderer;
}

export { createRenderer };
