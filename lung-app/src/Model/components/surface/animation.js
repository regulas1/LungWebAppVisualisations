import { updateFrame, animate } from 'zincjs';
import { createZincRenderer } from '../systems/zincRenderer.js';
import { createLights } from '../lights.js'

let zincRenderer = createZincRenderer();

let playing = false;
let sceneStartDate = new Date().getTime();
let scenePauseDate = new Date().getTime();
let currentUniforms = undefined;

function updateFrame(zincRenderer) {
	return function () {
		if (!currentUniforms) {
			return;
		}

        let light = zincRenderer.getCurrentScene().directionalLight;
        currentUniforms = createLights(light);

		let sceneTime = 0.0;
		if (playing) {
			sceneTime = (new Date().getTime() - sceneStartDate) / 1000.0;
		} else {
			sceneTime = (scenePauseDate - sceneStartDate) / 1000.0;
		}
		sceneTime *= PLAY_SPEED;

		updateMarkers((sceneTime % 10.0) / 10.0);

		let t = (sceneTime % 5.0) / 2.5;
		if (t <= 1.0) {
			t = Math.sin(t*Math.PI/2.0)
		} else {
			t = 1.0-Math.sin((t-1.0)*Math.PI/2.0)
		}
		currentUniforms['t'].value = t;
	};
}

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

zincRenderer.initialiseVisualisation({antialias: false});
//zincRenderer.getThreeJSRenderer().setClearColor(0xffffff, 0);
//if (window.innerWidth > 2000 || window.innerHeight > 2000) {
//  zincRenderer.getThreeJSRenderer().setPixelRatio(0.5);
//} else {
    zincRenderer.getThreeJSRenderer().setPixelRatio(1.0);
//}
zincRenderer.addPreRenderCallbackFunction(updateFrame(zincRenderer));
zincRenderer.animate();

