import { Color, UniformsUtils, Vector3, ShaderMaterial, DoubleSide } from 'zincjs/node_modules/three/src/Three.js';
import { createZincRenderer } from '../systems/zincRenderer.js';
import { Zinc } from 'zincjs'

let zincRenderer = createZincRenderer();

//let currentUniforms = undefined;
const scenes = {};
const materials = {};

String.prototype.hashCode = function() {
	var hash = 0, i, chr;
	if (this.length === 0) return hash;
	for (i = 0; i < this.length; i++) {
		chr   = this.charCodeAt(i);
		hash  = ((hash << 5) - hash) + chr;
		hash |= 0; // Convert to 32bit integer
	}
	return hash;
};

function setScene(name, scene, material) {
    zincRenderer.setCurrentScene(scene);
	//currentUniforms = material.uniforms;

    const surfaceUniforms = UniformsUtils.merge([{
        'ambient'  : { type: 'c', value: new Color( 0xffffff ) },
        'emissive' : { type: 'c', value: new Color( 0x000000 ) },
        'specular' : { type: 'c', value: new Color( 0x111111 ) },
        'shininess': { type: 'f', value: 30 },
        'diffuse': { type: 'c', value: new Color( 0xeecaa2 ) },
        'ambientLightColor': { type: 'c', value: new Color( 0x444444 ) },
        'directionalLightColor': { type: 'c', value: new Color( 0x888888 ) },
        'directionalLightDirection': { type: 'v3', value: new Vector3()  },
        't': { type: 'f', value: 0.0 },
        'tidalVolumeRatio': { type: 'f', value: 0.4 },
        'severity': { type: 'f', value: 0.0 },
        'opacity': { type: 'f', value: 1.0 },
    }]);

    const surfaceData = loadScene({
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
    console.log(surfaceData);

    return surfaceData;
}
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

        console.log(name, scene, data, material);
	});
};

export { setScene };