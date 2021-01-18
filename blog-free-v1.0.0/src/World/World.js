import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';

import { createControls } from './systems/controls.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';

// These variables are module-scoped: we cannot access them
// from outside the module
// (using this.camera = createCamera would allow it to be accessed from main.js, which we do NOT want)
let camera;
let renderer;
let scene;

class World {
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    container.append(renderer.domElement);

    const controls = createControls(camera, renderer.domElement);

    // Cube does not need to be a module scope variable since it is only used in the constructor
    const cube = createCube();

    const light = createLights();

    scene.add(cube, light); // Add cube & light components simultaneously

    const resizer = new Resizer(container, camera, renderer);
    /*
    // .onResize calls World.render
    resizer.onResize = () => {
      this.render();
    };*/
    controls.addEventListener('change', () => {
      this.render();
    });
  }

  render() {
    // draw a single frame
    // i.e. no animation loop
    renderer.render(scene, camera);
  }
}

export { World };
