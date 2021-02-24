// process the raw surfaceData
// extract mesh & add animaiton
function setupModel(data) {
    // only one object in gltf.scene.children at the moment, so surfaceData must have index 0
    const model = data.scene.children[0];

    return model;
}

export { setupModel };