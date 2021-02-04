<!-- *************************************************************************
	TEMPLATE
	************************************************************************ -->
<template>
  <div style="width: 100%; height: 100%; margin: 0; border: 0; padding: 0;">
    <canvas v-if="supportWebGL" ref="canvas" style="width: 100%; height: 100%;"></canvas>
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
import {
  Vector3,
  Color,
  Scene,
  JSONLoader,
  FileLoader,
  ShaderMaterial,
} from 'three';
import {
	Renderer,
} from 'zincjs'

const supportWebGL = (() => {
  try {
    const canvas = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
  } catch (e) {
    return false;
  }
})();

const DEFAULT_GL_OPTIONS = {
  antialias: true,
  alpha: true,
};

export default {
	data() {
		return {
		suportWebGL,
		size: {
			width: this.width,
			height: this.height,
		},
		mouse: new Vector2(),
		scene: new Scene(),
		zincRenderer: null,
		allLights: [],
		clock: typeof performance === 'undefined' ? Date : performance,
		reqId: null, // requestAnimationFrame id
		};
	},
	methods: {
		resize() {
			const h = window.innerHeight;
			const minHeight = window.innerWidth / MIN_RATIO;
			if (h < minHeight) {
				const scale = h / minHeight;
				document.body.style.transform = 'scale(' + scale + ',' + scale + ')';
				document.body.style.height = (100/scale).toString() + '%';
				document.body.style.top = ((100-100/scale)/2).toString() + '%';
			} else if (document.body.style.transform != '') {
				document.body.style.transform = '';
				document.body.style.height = '';
				document.body.style.top = '';
			}
		},
		onResize() {
		if (this.width === undefined || this.height === undefined) {
				this.$nextTick(() => {
				this.size = {
					width: this.$el.offsetWidth,
					height: this.$el.offsetHeight,
					};
				});
			}
		},
		onMouseDown() {
			const links = document.querySelectorAll('a, .clickable');
			for (let i = 0; i < links.length; i++) {
				links[i].style.pointerEvents = 'none';
    }
		}
	}
  }
		}
	}
</script>

<!-- *************************************************************************
	STYLE
	************************************************************************ -->
<style scoped>
</style>