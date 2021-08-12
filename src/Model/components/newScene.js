import { createZincRenderer } from '../systems/zincRenderer.js';
import { FileLoader, JSONLoader, Color, ShaderMaterial, BufferGeometry, BufferAttribute, DoubleSide } from 'zincjs/node_modules/three/src/Three.js';
import { loadExternalFiles } from 'zincjs';

const zincRenderer = createZincRenderer();

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
    if (!zincRenderer) {
        console.error('Zinc not loaded');
        return;
    }

    zincRenderer.setCurrentScene(scene);
    let currentUniforms = material.uniforms;
}

async function loadScene(data, uniforms) {
    //let currentUniforms = undefined; // shaded out when moved setScene function out of loadScene()
    const loader = new FileLoader();

    let name = JSON.stringify(data).hashCode();
    if (name in scenes) {
		setScene(name, scenes[name], materials[name]);
		return;
	}

    console.log('Render!');  

    const scene = zincRenderer.createScene(name);
    loadExternalFiles([data.vs, data.fs], function (shaderText) {
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

    loadModels(name, scene, data, material);
    });
};

async function loadModels(name, scene, data, material) {
    let loadedSizes = [];
    let totalSize = 0;
    for (let i = 0; i < data.models.length; i++) {
        loadedSizes.push(0);
        
        let gzreq = new XMLHttpRequest();
        gzreq.open('HEAD', data.models[i] + '.gz', false);
        gzreq.send();
        if (gzreq.status === 200) {
            data.models[i] += '.gz';
            totalSize += parseInt(gzreq.getResponseHeader('content-length'));
        } else {
            let req = new XMLHttpRequest();
            req.open('HEAD', data.models[i], false);
            req.send();
            if (req.status !== 200) {
                return;
            }
            totalSize += parseInt(req.getResponseHeader('content-length'));
        }
    }
    const updateLoader = function(i, loaded) {
        loadedSizes[i] = loaded;

        let loadedSize = 0;
        for (let i = 0; i < data.models.length; i++) {
            loadedSize += loadedSizes[i];
        }
        //setLoadingText((loadedSize / totalSize * 100).toFixed(0) + '%');
    };
    let n = 0;
    for (let i = 0; i < data.models.length; i++) {
        n++;
        let useCompressed = data.models[i].endsWith('.gz');
        let loader = new FileLoader();
        await loader.loadAsync(data.models[i],
            function (text) {
                /*if (useCompressed) {
                    let gzbuf = new Uint8Array(text);
                    let buf = pako.ungzip(gzbuf);
                    text = (new TextDecoder('utf-8')).decode(buf);
                }*/
                
                let json = JSON.parse(text);
                let object = (new JSONLoader()).parse(json, 'path');
                object.geometry.morphColors = json.morphColors;

                let bufferGeometry = toBufferGeometry(object.geometry);
                scene.addZincGeometry(bufferGeometry, 10001, undefined, undefined, false, false, true, undefined, material);
                n--;
                if (n == 0) {
                    scenes[name] = scene;
                    materials[name] = material;
                    setScene(name, scene, material);
                    //stopLoading();
                }
            }, function (xhr) {
                updateLoader(i, xhr.loaded);
            },
            function (err) {
                console.error('Could not load model: ', err);
                //showError('Could not load model files.');
                //stopLoading();
            }
        );
    }
};

function toBufferGeometry(geometry) {
	let arrayLength = geometry.faces.length * 3 * 3;
	let positions = new Float32Array(arrayLength);
	let normals = new Float32Array(arrayLength);

	let colors0 = new Float32Array(arrayLength);
	let colors1 = new Float32Array(arrayLength);
	let colors2 = new Float32Array(arrayLength);

	let hasColors = !!geometry.morphColors;

	geometry.faces.forEach(function (face, index) {
		positions[index*9 + 0] = geometry.vertices[face.a].x;
		positions[index*9 + 1] = geometry.vertices[face.a].y;
		positions[index*9 + 2] = geometry.vertices[face.a].z;
		positions[index*9 + 3] = geometry.vertices[face.b].x;
		positions[index*9 + 4] = geometry.vertices[face.b].y;
		positions[index*9 + 5] = geometry.vertices[face.b].z;
		positions[index*9 + 6] = geometry.vertices[face.c].x;
		positions[index*9 + 7] = geometry.vertices[face.c].y;
		positions[index*9 + 8] = geometry.vertices[face.c].z;

		normals[index*9 + 0] = face.vertexNormals[0].x;
		normals[index*9 + 1] = face.vertexNormals[0].y;
		normals[index*9 + 2] = face.vertexNormals[0].z;
		normals[index*9 + 3] = face.vertexNormals[1].x;
		normals[index*9 + 4] = face.vertexNormals[1].y;
		normals[index*9 + 5] = face.vertexNormals[1].z;
		normals[index*9 + 6] = face.vertexNormals[2].x;
		normals[index*9 + 7] = face.vertexNormals[2].y;
		normals[index*9 + 8] = face.vertexNormals[2].z;

		if (hasColors) {
			let cis = [face.a, face.b, face.c];
			for (let i = 0; i < 3; i++) {
				let ci = cis[i];
				let color0 = new Color(geometry.morphColors[0].colors[ci]);
				let color1 = new Color(geometry.morphColors[1].colors[ci]);
				let color2 = new Color(geometry.morphColors[2].colors[ci]);

				colors0[index*9 + i*3 + 0] = color0.r;
				colors0[index*9 + i*3 + 1] = color0.g;
				colors0[index*9 + i*3 + 2] = color0.b;
				colors1[index*9 + i*3 + 0] = color1.r;
				colors1[index*9 + i*3 + 1] = color1.g;
				colors1[index*9 + i*3 + 2] = color1.b;
				colors2[index*9 + i*3 + 0] = color2.r;
				colors2[index*9 + i*3 + 1] = color2.g;
				colors2[index*9 + i*3 + 2] = color2.b;
			}
		}
	});

	let bufferGeometry = new BufferGeometry();
	bufferGeometry.addAttribute('position', new BufferAttribute(positions, 3));
	bufferGeometry.addAttribute('normal', new BufferAttribute(normals, 3));
	if (hasColors) {
		bufferGeometry.addAttribute('color0', new BufferAttribute(colors0, 3));
		bufferGeometry.addAttribute('color1', new BufferAttribute(colors1, 3));
		bufferGeometry.addAttribute('color2', new BufferAttribute(colors2, 3));
	}
	return bufferGeometry;
}
    //return { loadedModel }
  
export { loadScene };

