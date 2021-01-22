import Vue from 'vue';

import ModelGltf from './model-gltf.vue';

const components = [
  ModelGltf,
];

/* eslint-disable no-shadow */
const install = (Vue) => {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  ModelGltf,
};

export {
  install,
  ModelGltf,
};
