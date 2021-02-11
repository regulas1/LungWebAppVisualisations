<template>
  <div id="canvas"></div>
</template>

<style >
#canvas {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>


<script>
import * as THREE from "three";

export default {
  mounted: function() {
    this.canvas();
  },
  methods: {
    canvas() {
      var container;
      var camera, scene, renderer;
      var geometry, material, mesh;
      var loader = new THREE.GLTFLoader();

      init();
      animate();

      function init() {
        camera = new THREE.PerspectiveCamera(
          70,
          window.innerWidth / window.innerHeight,
          0.01,
          10
        );
        camera.position.z = 1;

        scene = new THREE.Scene();

        loader.load("/duck.gltf", function(gltf) {
          scene.add(gltf.scene);
        });

        container = document.getElementById("canvas");
        document.body.appendChild(container);

        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        container.appendChild(renderer.domElement);
      }

      function animate() {
        requestAnimationFrame(animate);

        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.02;

        renderer.render(scene, camera);
      }
    }
  }
};
</script>

