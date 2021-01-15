<template>
  <div id="home">
    <articles>
      <banner />
    </articles>

  

    <subscribe />

   
  </div>
</template>

<script>
  export default {
    name: 'Home',

    components: {
      Articles: () => import('@/components/home/Articles'),
      Banner: () => import('@/components/home/Banner'),
      Subscribe: () => import('@/components/home/Subscribe'),
    },
  }
</script>
