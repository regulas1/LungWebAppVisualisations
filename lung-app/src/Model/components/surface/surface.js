import { FileLoader, ObjectLoader } from 'zincjs/node_modules/three'; 

// Get setupModel module
import { setupModel } from './setupModel.js';

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

async function loadSurface() {
  const loader = new FileLoader();

  //let data = JSON.stringify('/three-assets/Lung/surface_1.json').hashCode();

  const surfaceData = await loader.loadAsync(
    '/three-assets/Lung/surface_1.json',
    function (text) { 
      let json = JSON.parse(text);
      let object = (new ObjectLoader()).parse(json, 'path');
      object.geometry.morphColors = json.morphColors;
    },
    function (err) {
      console.error('Could not load model: ', err);
    },
  );

  console.log('Squaaawk!', surfaceData);

  // pass (unprocessed) loaded data into imported module
  // return so it can be used in 'Model'
  const surfaceModel = setupModel(surfaceData);
  surfaceModel.position.set(0, 0, 2.5);
  return { surfaceModel }
}

export { loadSurface };

