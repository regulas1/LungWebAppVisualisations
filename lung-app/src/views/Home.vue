<template>
  <div id="home">
    <!--Main images on Homepage-->
    <!--<articles>
      <banner />
    </articles>-->
    <banner />

    <model-json />

    <subscribe />

   
  </div>
</template>

<script>
import ModelJson from '@/components/ModelJSON.vue';

  export default {
    name: 'Home',

    components: {
      //Articles: () => import('@/components/home/Articles'), // Corresponds to dimensions of main image on Homepage
      Banner: () => import('@/components/home/Banner'),
      Subscribe: () => import('@/components/home/Subscribe'),
      ModelJson,
    },
  }
</script>
