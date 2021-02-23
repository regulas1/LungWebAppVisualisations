class newScene {
    constructor(zincRenderer) {

        const scenes = {};
        const materials = {};

        let name = JSON.stringify(data).hashCode();
        const scene = zincRenderer.createScene(name);

        if (name in scenes) {
            setScene(name, scenes[name], materials[name]);
            return;
        }

        const setScene = function (name, scene, material) {
            zincRenderer.setCurrentScene(scene);
            //currentUniforms = material.uniforms;
        };

        let json = JSON.parse(text);
        let object = (new THREE.JSONLoader()).parse(json, 'path');
        object.geometry.morphColors = json.morphColors;

        let bufferGeometry = toBufferGeometry(object.geometry);
        scene.addZincGeometry(bufferGeometry, 10001, undefined, undefined, false, false, true, undefined, material);
        n--;
        if (n == 0) {
            scenes[name] = scene;
            materials[name] = material;
            setScene(name, scene, material);
            stopLoading();
        }
      }
  }
  
  export { newScene };

