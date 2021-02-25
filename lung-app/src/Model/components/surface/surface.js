import { FileLoader, ObjectLoader } from 'zincjs/node_modules/three'; 
import { GLTFLoader } from 'zincjs/node_modules/three/examples/jsm/loaders/GLTFLoader.js'

// Get setupModel module
import { setupModel } from './setupModel.js';

async function loadSurface() {
  const loader = new GLTFLoader();

  const [surface_1, surface_2, surface_3, surface_4, surface_5, surface_6] = await Promise.all([
    loader.loadAsync('/three-assets/Lung/surface_1.glb'),
    loader.loadAsync('/three-assets/Lung/surface_2.glb'),
    loader.loadAsync('/three-assets/Lung/surface_3.glb'),
    loader.loadAsync('/three-assets/Lung/surface_4.glb'),
    loader.loadAsync('/three-assets/Lung/surface_5.glb'),
    loader.loadAsync('/three-assets/Lung/surface_6.glb'),
  ],
  function(text) {
    console.log('This is the text: ', text);
    //let json = JSON.parse(data);
    //console.log(json)
    //let object = (new ObjectLoader().parse());
    //console.log(object)
  },
  function (err) {
    console.error('Could not load model: ', err);
  },
  );

  /*
  const surfaceData = await loader.loadAsync(
    '/three-assets/Lung/surface_1.glb',
    function(text) {
      console.log('This is the text: ', text);
      //let json = JSON.parse(data);
      //console.log(json)
      //let object = (new ObjectLoader().parse());
      //console.log(object)
    },
    function (err) {
      console.error('Could not load model: ', err);
    },
  );
  */
  console.log('Squaaawk!', surface_1);

  const surfaceModel_1 = setupModel(surface_1);
  surfaceModel_1.position.set(0, 0, 2.5);
  const surfaceModel_2 = setupModel(surface_2);
  surfaceModel_2.position.set(0, 0, 2.5);
  const surfaceModel_3 = setupModel(surface_3);
  surfaceModel_3.position.set(0, 0, 2.5);
  const surfaceModel_4 = setupModel(surface_4);
  surfaceModel_4.position.set(0, 0, 2.5);
  const surfaceModel_5 = setupModel(surface_5);
  surfaceModel_5.position.set(0, 0, 2.5);
  const surfaceModel_6 = setupModel(surface_6);
  surfaceModel_6.position.set(0, 0, 2.5);

  // pass (unprocessed) loaded data into imported module
  // return so it can be used in 'Model'
  //const surfaceModel = setupModel(surfaceData);
  //surfaceModel.position.set(0, 0, 2.5);
  return { 
    surfaceModel_1,
    surfaceModel_2,
    surfaceModel_3,
    surfaceModel_4,
    surfaceModel_5,
    surfaceModel_6,
   }
}

export { loadSurface };

