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
import TestFiles from '@/components/bmj/js/test.js'

export default {
	name: 'Tester',
	components: {
		TestFiles,
	} 
};
</script>

<!-- *************************************************************************
	STYLE
	************************************************************************ -->
<style scoped>
</style>