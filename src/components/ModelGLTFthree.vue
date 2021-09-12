<template>
  <div id="scene-container" ref="sceneContainer">
    <!--If model is not displayed for some reason, try inserting some text here-->
  </div>
</template>

<script>
import * as THREE from "zincjs/node_modules/three/src/Three.js";
//import Zinc from 'zincjs'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Stats from "stats.js";

import surface from "../../public/three-assets/shaders/surface.js";

export default {
  name: "ModelGltf",
  data() {
    return {
      container: null,
      scene: null,
      camera: null,
      controls: null,
      renderer: null,
      stats: null,
      material: null,
      surface
    };
  },
  methods: {
    init(material) {
      // set container
      this.container = this.$refs.sceneContainer;
      // add stats
      this.stats = new Stats();
      this.container.appendChild(this.stats.dom); // Displays  progress stats box
      // add camera
      const fov = 45; // Field of view
      const aspect = 2; // this.container.clientWidth / this.container.clientHeight
      const near = 0.01; // the near clipping plane
      const far = 1000; // the far clipping plane
      const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
      camera.position.set(0, -500, 50);
      this.camera = camera;
      // create scene
      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color("#212121");
      // add lights
      // const ambientLight = new THREE.AmbientLight(0x0000ff, 8);
      // const mainLight = new THREE.PointLight(0x0000ff, 5);
      // mainLight.position.set(10, 10, 10);
      // this.scene.add(ambientLight, mainLight);
      //LIGHTS
      var light = new THREE.AmbientLight(0xdd8a8a, 2);
      this.scene.add(light);

      var light2 = new THREE.PointLight(0x0000ff, 5);
      this.scene.add(light2);
      this.controls = new OrbitControls(this.camera, this.container);
      // create renderer
      this.renderer = new THREE.WebGLRenderer({ antialias: true });
      this.renderer.setSize(
        this.container.clientWidth,
        this.container.clientHeight
      );
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.gammaFactor = 2.2;
      this.renderer.outputEncoding = THREE.sRGBEncoding;
      this.renderer.physicallyCorrectLights = true;
      this.container.appendChild(this.renderer.domElement);
      // set aspect ratio to match the new browser window aspect ratio
      this.camera.aspect =
        this.container.clientWidth / this.container.clientHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(
        this.container.clientWidth,
        this.container.clientHeight
      );
      const loader = new GLTFLoader();
      /*loader.load( 
        '/three-assets/Lung/smoker_and_asthmatic_flow_1.glb',
        gltf => {
          this.scene.add(gltf.scene)
        },
        undefined,
        undefined
      )*/
      loader.load(
        "/three-assets/Lung/surface_1.glb",
        gltf => {
          gltf.scene.traverse(function(node) {
            if (node.isMesh) node.material = material;
          });
          this.scene.add(gltf.scene);
        },
        undefined,
        undefined
      );
      const textureloader = new THREE.TextureLoader();

      material = new THREE.MeshStandardMaterial({
        color: 0xdd8a8a, // red (can also use a CSS color string here)
        flatShading: true,
        shininess: 50,
        map: textureloader.load(
          "https://threejsfundamentals.org/threejs/resources/images/checker.png"
        )
      });
      loader.load(
        "/three-assets/Lung/airwaysblue.glb",
        gltf => {
          gltf.scene.traverse(function(node) {
            if (node.isMesh) node.material = material;
          });
          this.scene.add(gltf.scene);
        },
        undefined,
        undefined
      );
      // loader.load(
      //   "/three-assets/Lung/surface_3.glb",
      //   gltf => {
      //     gltf.scene.traverse(function(node) {
      //       if (node.isMesh) node.material = material;
      //     });
      //     this.scene.add(gltf.scene);
      //   },
      //   undefined,
      //   undefined
      // );
      // loader.load(
      //   "/three-assets/Lung/surface_4.glb",
      //   gltf => {
      //     gltf.scene.traverse(function(node) {
      //       if (node.isMesh) node.material = material;
      //     });
      //     this.scene.add(gltf.scene);
      //   },
      //   undefined,
      //   undefined
      // );
      // loader.load(
      //   "/three-assets/Lung/surface_5.glb",
      //   gltf => {
      //     gltf.scene.traverse(function(node) {
      //       if (node.isMesh) node.material = material;
      //     });
      //     this.scene.add(gltf.scene);
      //   },
      //   undefined,
      //   undefined
      // );
      // loader.load(
      //   "/three-assets/Lung/surface_6.glb",
      //   gltf => {
      //     gltf.scene.traverse(function(node) {
      //       if (node.isMesh) node.material = material;
      //     });
      //     this.scene.add(gltf.scene);
      //   },
      //   undefined,
      //   undefined
      // );
      this.renderer.setAnimationLoop(() => {
        this.render();
      });
    },
    setShader() {
      let shader = this.surface;
      let shaderObject = {
        // vertexShader: shader.vertexShader,
        // fragmentShader: shader.fragmentShader,
        //lights: true
        uniforms: shader.uniforms,
        onBeforeCompile: function() {}, // fix bug in ThreeJS
        side: THREE.DoubleSide,
        transparent: false
      };
      /*if ('uniforms' in shader) {
          // Using UniformUtils will clone the shader files uniforms,
          shaderObject.uniforms = THREE.UniformsUtils.merge([
            THREE.UniformsLib['lights'],
            shader.uniforms
          ]);
        };*/
      // add material
      const material = new THREE.ShaderMaterial(shaderObject);
      // add the original uniforms here so we can loop over them in the Controls, because other uniforms are added that we don't want controls for.
      //material.customUniforms = shader.uniforms;
      //this.scene.add(material)
      this.init(material);
    },
    resize() {
      this.renderer.setSize(
        this.container.clientWidth,
        this.container.clientHeight
      );
      this.camera.aspect =
        this.container.clientWidth / this.container.clientHeight;
      this.camera.updateProjectMatrix();
    },
    render() {
      this.renderer.render(this.scene, this.camera);
      this.stats.update();
    }
  },
  mounted() {
    this.setShader();
    window.addEventListener("resize", this.onResize);
  }
};
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
