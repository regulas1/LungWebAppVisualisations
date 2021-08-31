loadScene({
    vs: 'shaders/surface.vs',
    fs: 'shaders/surface.fs',
    view: 'models/surface_view.json',
    models: [
        'models/surface_1.json',
        'models/surface_2.json',
        'models/surface_3.json',
        'models/surface_4.json',
        'models/surface_5.json',
        'models/surface_6.json',
    ],
}, surfaceUniforms);
document.getElementById('play').click();