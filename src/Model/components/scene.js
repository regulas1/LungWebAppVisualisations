import { Color, Scene } from 'zincjs/node_modules/three/src/Three.js';

function createScene() {
  const scene = new Scene();

  scene.background = new Color('skyblue');

  return scene;
}

export { createScene };