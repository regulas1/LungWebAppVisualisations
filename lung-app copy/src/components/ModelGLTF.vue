<template>
  <div id="scene-container" ref="sceneContainer">
     <!--If model is not displayed for some reason, try inserting some text here-->
  </div>
</template>

<script>
import * as THREE from 'zincjs/node_modules/three/src/Three.js'
//import Zinc from 'zincjs'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import Stats from 'stats.js'

/* **********************************************************************************
Change between airways and surface
********************************************************************************** */
//import surface from '../../public/three-assets/shaders/surface.js'

export default {
  name: 'ModelGltf',
  data () {
    return {
      container: null,
      scene: null,
      camera: null,
      controls: null,
      renderer: null,
      stats: null,
      //material: null,
      //surface,
    }
  },

  methods: {
    init () {
      // set container
      this.container = this.$refs.sceneContainer
      // add stats
      this.stats = new Stats()
      this.container.appendChild(this.stats.dom) // Displays  progress stats box
      // add camera
      const fov = 45 // Field of view
      const aspect = 2 // this.container.clientWidth / this.container.clientHeight
      const near = 0.0001 // the near clipping plane
      const far = 100000 // the far clipping plane
      const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
      camera.position.set(0, 5, 10)
      this.camera = camera
      // create scene
      this.scene = new THREE.Scene()
      this.scene.background = new THREE.Color('#212121')
      // add lights
      const ambientLight = new THREE.HemisphereLight(
        0xffffff, // bright sky color
        0x222222, // dim ground color
        1 // intensity
      )
      const mainLight = new THREE.DirectionalLight(0xffffff, 4.0)
      mainLight.position.set(10, 10, 10)
      this.scene.add(ambientLight, mainLight)
      this.controls = new OrbitControls(this.camera, this.container)
      // create renderer
      this.renderer = new THREE.WebGLRenderer({ antialias: true })
      this.renderer.setSize(this.container.clientWidth, this.container.clientHeight)
      this.renderer.setPixelRatio(window.devicePixelRatio)
      this.renderer.gammaFactor = 2.2
      this.renderer.outputEncoding = THREE.sRGBEncoding
      this.renderer.physicallyCorrectLights = true
      this.container.appendChild(this.renderer.domElement)
      // set aspect ratio to match the new browser window aspect ratio
      this.camera.aspect = this.container.clientWidth / this.container.clientHeight
      this.camera.updateProjectionMatrix()
      this.renderer.setSize(this.container.clientWidth, this.container.clientHeight)
      
      const loader = new GLTFLoader()

      loader.load(
        '/three-assets/notre_dame_cathedral__work_in_progress/scene.gltf',
        gltf => {
          this.scene.add(gltf.scene);
          gltf.animations;
        },
        undefined,
        undefined
      )
      this.renderer.setAnimationLoop(() => {
        this.render()
      })
    },
    animate: function() {
    },
    render () {
      this.renderer.render(this.scene, this.camera)
      this.stats.update()
    },
  },
  mounted () {
    this.init()
    this.animate()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  margin: 0;
  overflow: hidden;
}

#scene-container {
  position: absolute;
  width: 42%; /* Approx 5/12 (5 cols / 12 cols) */
  height: 100%;
}
</style>