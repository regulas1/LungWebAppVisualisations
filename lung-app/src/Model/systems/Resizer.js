class Resizer {
    constructor(container, camera, renderer, zincRenderer) {
        // Set the camera's aspect ratio
        camera.aspect = container.clientWidth / container.clientHeight;
    
        // update the camera's frustum
        camera.updateProjectionMatrix();
    
        if (!zincRenderer) {
            console.error('zinc not loaded');
            return;
        } else {
            // update the size of the renderer AND the canvas
            renderer.setSize(container.clientWidth, container.clientHeight);

            // set the pixel ratio (for mobile devices)
            renderer.setPixelRatio(1.0);
        }

      }
  }
  
  export { Resizer };