import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';

import { createRenderer } from './systems/renderer.js';
import { createZincRenderer } from './systems/zincRenderer.js'
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';

// These variables are module-scoped: we cannot access them
// from outside the module
let camera;
let renderer;
let zincRenderer;
let scene;
let loop;

class Model {
    // 1. Create an instance of the World app
    constructor(container) {
        camera = createCamera();
        renderer = createRenderer();
        zincRenderer = createZincRenderer();
        scene = createScene();
        loop = new Loop(camera, scene, renderer, zincRenderer);
        container.append(renderer.domElement);

        const cube = createCube();
        const light = createLights();

        // add cube to list of updatable objects which .tick will loop over 
        loop.updatables.push(cube);

        scene.add(cube, light);

        const resizer = new Resizer(container, camera, renderer, zincRenderer);
        /* Removed once animation loop was created
        resizer.onResize = () => {
            // call World.render
            this.render();
          };
        */
    }
    // 2. Render the scene
    render() {
        // draw a single frame
        renderer.render(scene, camera);
    }

    // start and stop methods to povide access to Loop from within main.js
    start() {
        loop.start();
    }
    stop() {
        loop.stop();
    }
}
  
export { Model };