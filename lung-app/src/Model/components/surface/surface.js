import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// Get setupModel module
import { setupModel } from './setupModel.js';

async function loadSurface() {
  const loader = new GLTFLoader();

  const surfaceData = await loader.loadAsync('/three-assets/Lung/surface_1.glb');

  console.log('Squaaawk!', surfaceData);

  // pass (unprocessed) loaded data into imported module
  // return so it can be used in 'Model'
  const surfaceModel = setupModel(surfaceData);
  surfaceModel.position.set(0, 0, 2.5);
  return { surfaceModel }
}

export { loadSurface };
