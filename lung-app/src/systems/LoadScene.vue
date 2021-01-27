<template>
</template>

<script>
import { Zinc, zincRenderer, THREE } from 'zincjs'

const vs = '@/assets/shaders/surface.vs';
const fs = '@/assets/shaders/surface.fs';
const view = 'assets/models/surface_view.json';
const models = [
                'assets/models/surface_1.json',
            ];
const data = [vs, fs, view, models];
const uniforms = surfaceUniforms;

export default {
    name: 'LoadScene',
    data: function() {
        return {
            material: null,
            name: null,
        }
    },
    computed: {
        startLoading() {
            const scene = zincRenderer.createScee(name);
        }
    },
};
</script>


loadScene(data, uniforms) {
          let name = JSON.stringify(data).hashCode();
          if (name in scenes) {
              setScene(name, scenes[name], materials[name]);
              return;
          };
      
          startLoading();
          const scene = zincRenderer.createScene(name);
          Zinc.loadExternalFiles([data.vs, data.fs], function (shaderText) {
              scene.loadViewURL(data.view);
      
             const material = new THREE.ShaderMaterial({
                vertexShader: shaderText[0],
                fragmentShader: shaderText[1],
                uniforms: uniforms,
                onBeforeCompile: function(){}, // fix bug in ThreeJS
                side: THREE.DoubleSide,
                transparent: true,
                //depthWrite: false,
             });*/

            //loadModels(name, scene, data, material);
          });
        }