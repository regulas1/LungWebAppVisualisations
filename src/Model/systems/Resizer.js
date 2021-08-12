const setSize = (container, camera, renderer) => {
    // Set the camera's aspect ratio
    camera.aspect = container.clientWidth / container.clientHeight;
    // update the camera's frustum
    camera.updateProjectionMatrix();


    // update the size of the renderer AND the canvas
    renderer.setSize(container.clientWidth, container.clientHeight);

    // set the pixel ratio (for mobile devices)
    renderer.setPixelRatio(window.devicePixelRatio);
};

/*** A class constructor (hence a capital 'R') ***/
class Resizer {
    constructor(container, camera, renderer) {

        // set initial size on load
        setSize(container, camera, renderer);

        window.addEventListener('resize', () => {
            // call to set the size again if a resize occurs
            setSize(container, camera, renderer);
            
            // empty method that can be customised from outside of Resizer.js to perform any actions when Resize event occurs
            this.onResize();
        });
    }
    onResize() {}
  }
  
  export { Resizer };
  