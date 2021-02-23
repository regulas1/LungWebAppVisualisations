/*** A class constructor (hence a capital 'L') ***/
import { Clock } from 'zincjs/node_modules/three/src/Three.js';

// create module scoped clock istance
const clock = new Clock();

class Loop {
  constructor(camera, scene, renderer, zincRenderer) {
    this.camera = camera;
    this.scene = scene;
    this.renderer = renderer;
    this.zincRenderer = zincRenderer;
    this.updatables = [];
  }

  // create the start method
  start() {
    this.renderer.setAnimationLoop(() => {
      // tell every animated object to tick forward one frame
      this.tick();
      // render a frame
      this.renderer.render(this.scene, this.camera);
    });
  }

  // create the stop method
  stop() {
    this.renderer.setAnimationLoop(null);
  }

  // Loop.tick method called from inside animation loop to "tick over" (i.e. update) to the next 
  // frame 60 times per second
  tick() {
    // only call the getDelta function once per frame!
    // saves the results from .getDelta in variable "delta"
    const delta = clock.getDelta();
    // loop over the list and call .tick on any objects within
    // pass variable "delta" into .tick method of each animated object
    for (const object of this.updatables) {
        object.tick(delta);
      }
  }
}

export { Loop }