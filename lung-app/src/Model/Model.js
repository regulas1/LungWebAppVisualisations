import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js';
import { createScene } from './components/scene.js';

import { createRenderer } from './systems/renderer.js';
import { createZincRenderer } from './systems/zincRenderer.js'
import { Resizer } from './systems/Resizer.js';

// These variables are module-scoped: we cannot access them
// from outside the module
let camera;
let renderer;
let zincRenderer;
let scene;

class Model {
    // 1. Create an instance of the World app
    constructor(container) {
        camera = createCamera();
        scene = createScene();
        renderer = createRenderer();
        zincRenderer = createZincRenderer()
        container.append(renderer.domElement);

        const cube = createCube();
        scene.add(cube);

        const resizer = new Resizer(container, camera, renderer, zincRenderer);
    }
    // 2. Render the scene
    render() {
        // draw a single frame
        renderer.render(scene, camera);
    }
}
  
export { Model };