import { FileLoader, ObjectLoader } from 'zincjs/node_modules/three'; 

// Get setupModel module
import { setupModel } from './setupModel.js';

async function loadSurface() {
  const loader = new FileLoader();

  const surfaceData = await loader.loadAsync(
    '/three-assets/Lung/models/surface_1.json',
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

