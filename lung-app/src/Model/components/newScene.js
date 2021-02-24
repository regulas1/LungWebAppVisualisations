import { createZincRenderer } from '../systems/zincRenderer.js'

function setScene(name, scene, material) {
    const zincRenderer = createZincRenderer();
    if (!zincRenderer) {
        console.error('Zinc not loaded');
        return;
    }

    zincRenderer.setCurrentScene(scene);
    let currentUniforms = material.uniforms;
}

async function loadScene(data, uniforms) {
    //let currentUniforms = undefined; // shaded out when moved setScene function out of loadScene()

    const scenes = {};
    const materials = {};

    let name = JSON.stringify(data).hashCode();
    if (name in scenes) {
		setScene(name, scenes[name], materials[name]);
		return;
	}
  
    console.log('Render!');

    //return { loadedModel }
}
  
export { loadScene };

