Vue JS

The Library uses Vue JS Framework which is used for the static WebApplication. The application is built at runtime from index.html (Location: public\index.html) , the individual components are located in the src\components, the src\components\base contains the individual base components such as buttons, card, etc.

Navigation:

The Navigation of the applications is located in the src\components\AppNavigation.vue, when adding a new page in the application adding the location ensures the page redirects to the new page and adds the page title to the navigation bar.

Individual Pages:

The individual pages are located in the folder : src\views, to add a new pages to the web application , adding a new page with the extension of .vue can help display the page.

Adding the 3D models in the page by adding a new model in the public\three-assets\Lung folder, this can be in gltf format or other formats.

To enable the display of the 3D model the gltfvue files must be created rather than including in the code in src\views files, this enable the page load asyncronously while loading the individual components. 

**3D models**

The models used in this application is GLTF format due to the lower size and faster load times. However the files we get are in a different format and need preprocessing and optimisation. The preprocessing is performed to improve on how the models is visualised. The optimisation of the model is performed to reduce the size of the models and perform efficiently.

Alternative models can be added such as .OBJ or .JSON. However the model must be defined in the code in ModelGLTFVue files used. 

*gltf:*

*loader.load(
	// resource URL
	'models/gltf/Lungs.gltf',
	// called when the resource is loaded
	function ( gltf ) {

		scene.add( gltf.scene );

		gltf.animations; // Array<THREE.AnimationClip>
		gltf.scene; // THREE.Group
		gltf.scenes; // Array<THREE.Group>
		gltf.cameras; // Array<THREE.Camera>
		gltf.asset; // Object

	}*

*obj:*

*const loader = new OBJLoader();

// load a resource
loader.load(
	// resource URL
	'models/lung.obj',
	// called when resource is loaded
	function ( object ) {

		scene.add( object );

	}*

*JSON:*

*const loader = new THREE.ObjectLoader();

loader.load(
	// resource URL
	"models/json/lungs.json",

	// onLoad callback
	// Here the loaded data is assumed to be an object
	function ( obj ) {
		// Add the loaded object to the scene
		scene.add( obj );
	}*

Adhere to the Vue JS Directory structure, otherwise the file would not be rendered due to incorrect address.

Blender Editing models

**Preprocessing**

The models used in this application is GLTF format due to the lower size and faster load times. However the files we get are in a different format and need preprocessing and optimisation. The preprocessing is performed to improve on how the models is visualised. The optimisation of the model is performed to reduce the size of the models and perform

The Blender software is selected to perform post-processing of the STL format to GLTF. This process is done to correct defect, errors reducing the model size.

How to correct the model using blender :

1. In blender import the STL model using File → Import
2. The data generated would need noise removal if any to remove any unnecessary structure with the model.

3.	The imported model if needed to be observed as multiple entities for the purpose of using shaders, the mesh can be separated using select and Separate function.

4. The 3D model mesh noise which is not connected to the model is selected, the noise can be deleted using the delete option. This operation is repeated for all the unconnected 3D mesh noise near the component

5.	Delete any unconnected noise using the delete function post seperate function.

Once the model is completed to an acceptable extent, to save the model select export  and export as .gltf.

Ensure that the model is under 25 MB such, this is because the higher the model size the greater the latency to load the model.

Three JS 

if you are using a new three JS file from scratch to use in Vue add the reference library to the Three JS in either as CDN or as the script file <script type="module">

import * as THREE from './resources/threejs/r132/build/three.module.js';</script>

While the three Js library asks us to use the canvas since we are not using HTML directly and using you have to use containers to hold the model, since Vue generates the object at runtime.

Set up the camera as perspective and orthogonal

add the field of view and the near and far to align as needed and the camera uses degrees rather than radians despite three js using radians, this is important to consider when adding the angles, which sometimes does not show the model. So keep note of this factor while adding the cameras.

Also the near and far shows the space the model is shown adjust these according to the visibility of the model.

When selecting the mesh model without textures we need to change the material to MeshPhongMaterial as it is the only one affected by the lights of the model.

Please do not use Mesh basic material as it does not render the model visible and shades are not visible as well.
