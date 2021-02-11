<template>
  <div id="home">
    <banner />
  
    <div class="model-preview">
      <model-gltf />
      <!--<model-json />-->
    </div>
    
    <subscribe />

   
  </div>
</template>

<script>
import ModelGltf from '@/components/ModelGLTF.vue'
//import ModelJson from '@/components/ModelJSON.vue';

  export default {
    name: 'Home',

    components: {
      //Articles: () => import('@/components/home/Articles'), // Corresponds to dimensions of main image on Homepage
      Banner: () => import('@/components/home/Banner'),
      Subscribe: () => import('@/components/home/Subscribe'),
      //ModelJson,
      ModelGltf,
    },
  }
</script>

<style scoped>

</style>
