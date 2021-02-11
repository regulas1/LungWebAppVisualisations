<template>
  <div id="import-model">
  </div>
</template>

<script>
  import * as THREE from 'three'
  import * as Stats from 'stats.js'
  // import * as dat from 'dat.gui'
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

  export default {
    name: 'ImportModel',
    data() {
      return {}
    },
    created() {
      this.init()
    },
    methods: {
      //initialization
      init() {
        // Create Scene
        let scene = new THREE.Scene()

        // Create a camera - vision, aspect ratio, near and far clipping plane
        let camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 200)
        camera.position.set(0, 0, 15)

        // Create Renderer - to set the display window size
        let renderer = new THREE.WebGLRenderer()
        renderer.setSize(window.innerWidth, window.innerHeight)
        document.body.appendChild(renderer.domElement)

        // Create a performance test
        let stats = new Stats()
        stats.showPanel(0) // 0: fps, 1: ms, 2: mb, 3+: custom
        document.body.appendChild(stats.dom)

        // Create a camera control
        let control = new OrbitControls(camera, renderer.domElement)
        control.enableDamping = true
        control.dampingFactor = 0.25
        control.enableZoom = false

        this.importGLTF(scene, camera, renderer, stats, control)
        // this.importJSON(scene, camera, renderer, stats, control)

        // Import my own lung model
        const loader = new GLTFLoader();
        loader.load(
            'public/static/glTF/Duck.gltf',
            function ( gltf ) {

                scene.add( gltf.scene );

                gltf.animations; // Array<THREE.AnimationClip>
                gltf.scene; // THREE.Group
                gltf.scenes; // Array<THREE.Group>
                gltf.cameras; // Array<THREE.Camera>
                gltf.asset; // Object

            },
            function ( xhr ) {

                console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

            },
        );
      },
      // Import GLTF format model
      /*importGLTF(scene, camera, renderer, stats, control) {
        // set the camera position
        camera.position.z = 130
        camera.position.y = 80

        // Create GLTF loader
        let loader = new GLTFLoader()

        // debugger
        loader.load('models/gltf/scene.gltf', gltf => {
          // Zoom
          gltf.scene.scale.set(.1, .1, .1)

          // processing load model is black problem
          gltf.scene.traverse(child => {
            if (child.isMesh) {
              child.material.emissive = child.material.color
              child.material.emissiveMap = child.material.map
            }
          })

          scene.add(gltf.scene)
        }, xhr => {
          // called while loading is progressing
          console.log(`${( xhr.loaded / xhr.total * 100 )}% loaded`);
        }, error => {
          // called when loading has errors
          console.error('An error happened', error);
        })

        let animate = () => {
          // call the function cycle
          requestAnimationFrame(animate)

          // update performance plug-in
          stats.update()

          // Update the camera controls
          control.update()

          // Render interface
          renderer.render(scene, camera)
        }
        animate()
      },*/
      // Import JSON format model
      /*
      importJSON(scene, camera, renderer, stats, control) {
        // set the camera position
        camera.position.z = 130
        camera.position.y = 80

        let loader = new THREE.ObjectLoader()

        loader.load('models/json/file.json', group => {
          // processing load model is black problem
          group.traverse(child => {
            if (child.isMesh) {
              child.material.emissive = child.material.color
              child.material.emissiveMap = child.material.map
            }
          })

          scene.add(group)
        }, xhr => {
          // called while loading is progressing
          console.log(`${( xhr.loaded / xhr.total * 100 )}% loaded`);
        }, error => {
          // called when loading has errors
          console.error('An error happened', error);
        })

        let animate = () => {
          // call the function cycle
          requestAnimationFrame(animate)

          // update performance plug-in
          stats.update()

          // Update the camera controls
          control.update()

          // Render interface
          renderer.render(scene, camera)
        }
        animate()
      }*/
    }
  }
</script>

<style scoped>
</style>