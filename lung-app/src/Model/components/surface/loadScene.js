import { Color, ShaderMaterial, DoubleSide } from 'zincjs/node_modules/three/src/Three.js';
import { createZincRenderer } from '../systems/zincRenderer.js';

let zincRenderer = createZincRenderer();

function loadScene(data, uniforms) {
	if (!zincRenderer) {
		console.error('zinc not loaded');
		return;
	}

	let name = JSON.stringify(data).hashCode();
	if (name in scenes) {
		setScene(name, scenes[name], materials[name]);
		return;
	}

	//startLoading();
	const scene = zincRenderer.createScene(name);
	Zinc.loadExternalFiles([data.vs, data.fs], function (shaderText) {
		scene.loadViewURL(data.view);

		scene.background = new Color( 0xff0000 ); // ADDED to try to set transparent background

		const material = new ShaderMaterial({
			vertexShader: shaderText[0],
			fragmentShader: shaderText[1],
			uniforms: uniforms,
            onBeforeCompile: function(){}, // fix bug in ThreeJS
            side: DoubleSide,
            transparent: true,
            //depthWrite: false,
		});

    return name, scene, data, material;
	});
};

export { loadScene }