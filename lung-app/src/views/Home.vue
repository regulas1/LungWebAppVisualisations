<template>
  <div id="home">
    <!--Main images on Homepage-->
    <!--<articles>
      <banner />
    </articles>-->
    <banner />

    <lung-model />

    <subscribe />

   
  </div>
</template>

<script>
import LungModel from '../components/Test.vue'

  export default {
    name: 'Home',

    components: {
      //Articles: () => import('@/components/home/Articles'), // Corresponds to dimensions of main image on Homepage
      Banner: () => import('@/components/home/Banner'),
      Subscribe: () => import('@/components/home/Subscribe'),
      LungModel,
    },
  }
</script>
