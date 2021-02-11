<template>
  <div id="scene-container" ref="sceneContainer">
    <canvas />
  </div>
</template>

<script>
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import Stats from 'stats.js'

export default {
  name: 'ModelGltf',
  data () {
    return {
      container: null,
      scene: null,
      camera: null,
      controls: null,
      renderer: null,
      stats: null
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
      const near = 0.01 // the near clipping plane
      const far = 1000 // the far clipping plane
      const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
      camera.position.set(0, 5, 10)
      this.camera = camera
      // create scene
      this.scene = new THREE.Scene()
      this.scene.background = new THREE.Color('skyblue')
      // add lights
      const ambientLight = new THREE.HemisphereLight(
        0xffffff, // bright sky color
        0x222222, // dim ground color
        1 // intensity
      )
      const mainLight = new THREE.DirectionalLight(0xffffff, 4.0)
      mainLight.position.set(10, 10, 10)
      this.scene.add(ambientLight, mainLight)
      // add controls
      this.controls = new OrbitControls(this.camera, this.container)
      // create renderer
      this.renderer = new THREE.WebGLRenderer({ canvas: document.querySelector("canvas") })
      /*this.renderer.setSize(this.container.clientWidth, this.container.clientHeight)
      this.renderer.setPixelRatio(window.devicePixelRatio)
      this.renderer.gammaFactor = 2.2
      this.renderer.outputEncoding = THREE.sRGBEncoding
      this.renderer.physicallyCorrectLights = true
      this.container.appendChild(this.renderer.domElement)*/
      // set aspect ratio to match the new browser window aspect ratio
      //this.camera.aspect = this.container.clientWidth / this.container.clientHeight
      //this.camera.updateProjectionMatrix()
      //this.renderer.setSize(this.container.clientWidth, this.container.clientHeight)
      const loader = new GLTFLoader()
      loader.load(
        '/three-assets/RobotExpressive.glb',
        gltf => {
          this.scene.add(gltf.scene)
        },
        undefined,
        undefined
      )
      this.renderer.setAnimationLoop(() => {
        this.render()
      })
    },
    resizeCanvasToDisplaySize () {
      const canvas = this.renderer.domElement;
      const width = this.canvas.clientWidth;
      const height = this.canvas.clientHeight;

      if (canvas.width !== width || canvas.height !== height) {
        // Mustust pass false here or three.js will fight browser
        this.renderer.setSize(width, height, false);
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
      }
    },
    render () {
      this.resizeCanvasToDisplaySize()
      this.renderer.render(this.scene, this.camera)
      this.stats.update()

    }
  },
  mounted () {
    this.init()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.scene-container {
  height: "50%"
}
</style>