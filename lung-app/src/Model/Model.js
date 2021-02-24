//import { loadSurface } from './components/surface/surface.js';
//import { createSurfaceUniforms } from './components/surface/surfaceUniforms.js';
import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';
//import { loadScene } from './components/newScene.js'

import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';
import { createControls } from './systems/controls.js';

// These variables are module-scoped: we cannot access them
// from outside the module
let camera;
let renderer;
let scene;
let loop;
//let surfaceUniforms = createSurfaceUniforms();

class Model {
    // 1. Create an instance of the World app
    constructor(container) {
        camera = createCamera();
        renderer = createRenderer();
        scene = createScene();
        loop = new Loop(camera, scene, renderer);
        container.append(renderer.domElement);

        const controls = createControls(camera, renderer.domElement);

        const cube = createCube();
        const { ambientLight, mainLight } = createLights();

        // add controls to list of updatable objects which .tick will loop over 
        loop.updatables.push(controls, cube);

        scene.add(ambientLight, mainLight, cube);

        const resizer = new Resizer(container, camera, renderer);
        /* Removed once animation loop was created
        resizer.onResize = () => {
            // call World.render
            this.render();
          };
        */
    }

    /*async init() {
        const { surface } = await loadScene({
            vs: 'shaders/surface.vs',
            fs: 'shaders/surface.fs',
            view: 'models/surface_view.json',
            models: [
                'models/surface_1.json',
                'models/surface_2.json',
                'models/surface_3.json',
                'models/surface_4.json',
                'models/surface_5.json',
                'models/surface_6.json',
            ],
        }, surfaceUniforms);

        scene.add(surface);
    }*/

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