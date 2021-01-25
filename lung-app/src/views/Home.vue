<template>
  <div id="home">
    <!--Main images on Homepage-->
    <!--<articles>
      <banner />
    </articles>-->
    <banner />
    <subscribe />

   
  </div>
</template>

<script>
  export default {
    name: 'Home',

    components: {
      //Articles: () => import('@/components/home/Articles'), // Corresponds to dimensions of main image on Homepage
      Banner: () => import('@/components/home/Banner'),
      Subscribe: () => import('@/components/home/Subscribe'),
    },
  }
</script>
