let PLAY_SPEED = 1.0;

const GRAPH_WIDTH = 300;
const GRAPH_HEIGHT = 300;
const GRAPH_PADDING = 25;
const GRAPH_SMOOTHING = 0.2;
const MARKER_RADIUS = 10;

const THREE = Zinc.THREE;
const surfaceUniforms = THREE.UniformsUtils.merge([{
	'ambient'  : { type: 'c', value: new THREE.Color( 0xffffff ) },
	'emissive' : { type: 'c', value: new THREE.Color( 0x000000 ) },
	'specular' : { type: 'c', value: new THREE.Color( 0x111111 ) },
	'shininess': { type: 'f', value: 30 },
	'diffuse': { type: 'c', value: new THREE.Color( 0xeecaa2 ) },
	'ambientLightColor': { type: 'c', value: new THREE.Color( 0x444444 ) },
	'directionalLightColor': { type: 'c', value: new THREE.Color( 0x888888 ) },
	'directionalLightDirection': { type: 'v3', value: new THREE.Vector3()  },
	't': { type: 'f', value: 0.0 },
	'tidalVolumeRatio': { type: 'f', value: 0.4 },
	'severity': { type: 'f', value: 0.0 },
	'opacity': { type: 'f', value: 0.5 },
    'texture': { type: 't', value: THREE.ImageUtils.loadTexture('models/lung.jpg') },
}]);

const airwaysUniforms = THREE.UniformsUtils.merge([{
    'ambient'  : { type: 'c', value: new THREE.Color( 0xffffff ) },
    'emissive' : { type: 'c', value: new THREE.Color( 0x000000 ) },
    'specular' : { type: 'c', value: new THREE.Color( 0x111111 ) },
    'shininess': { type: 'f', value: 30 },
    'ambientLightColor': { type: 'c', value: new THREE.Color( 0x444444 ) },
    'directionalLightColor': { type: 'c', value: new THREE.Color( 0x888888 ) },
    'directionalLightDirection': { type: 'v3', value: new THREE.Vector3()  },
    't': { type: 'f', value: 0.0 },
	'tidalVolumeRatio': { type: 'f', value: 0.2 },
    'asthmaSeverity': { type: 'f', value: 0.0 },
    'smokingSeverity': { type: 'f', value: 0.0 },
}]);

document.getElementById('information').addEventListener('click', function(e) {
	let articles = document.querySelectorAll('article');
	for (let i = 0; i < articles.length; i++) {
		articles[i].classList.toggle('hidden');
	}
});
