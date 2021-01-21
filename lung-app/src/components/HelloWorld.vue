<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>
    <div class="lungs">
    This is where the lung model goes
    <model-obj src="example/models/obj/LeePerrySmith.obj"></model-obj>
    </div>
  </div>
</template>

<!--
<script src="./lib/zinc-0.29.5.min.js"></script>;
<script src="./lib/svg-2.7.1.min.js"></script>;
<script src="./js/webgl_check.js"></script>;
-->

<script>
import { ModelObj } from 'vue-3d-model';

/*
import createScene from './js/scene.js';
import global from './js/globals.js';
import webgl from './js/webgl_check.js'; */
/*
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
}, surfaceUniforms); */

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  components: { 
    ModelObj 
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

a {
  color: #42b983;
}
</style>
