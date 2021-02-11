<!-- *************************************************************************
	TEMPLATE
	************************************************************************ -->
<template>
  <div style="width: 100%; height: 100%; margin: 0; border: 0; padding: 0;">
    <canvas v-if="suportWebGL" ref="canvas" style="width: 100%; height: 100%;"></canvas>
    <div v-else>
      <slot>
        Your browser does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br/>'
      </slot>
    </div>
  </div>
</template>

<!-- *************************************************************************
	SCRIPT
	************************************************************************ -->
<script>
//import charts from 'charts.js'
//import controls from 'controls.js'
//import globals from 'globals.js'
//import graphs from 'graphs.js'
//import main from 'main.js'
import { loadScene } from './scene.js'
//import webgl_check from 'webgl_check.js'

export default {
	data: function() {
		return {
			
		}
	}
	methods: {
		loadScene,
	}
};
</script>

<!-- *************************************************************************
	STYLE
	************************************************************************ -->
<style scoped>
</style>