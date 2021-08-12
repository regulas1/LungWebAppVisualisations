import { FileLoader, ObjectLoader } from 'zincjs/node_modules/three'; 

// Get setupModel module
import { setupModel } from './setupModel.js';

async function loadSurface() {
  const loader = new FileLoader();

  const surfaceData = await loader.loadAsync(
    '/three-assets/Lung/surface_1.json',
    function(text) {
      console.log('This is the text: ', text)
      //let json = JSON.parse(data);
      //console.log(json)
      //let object = (new ObjectLoader().parse());
      //console.log(object)
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

