<template>
  <div id="home">
    <banner />
    <subscribe />
  </div>
</template>

<script>
export default {
  name: "Home",

  components: {
    //Articles: () => import('@/components/home/Articles'), // Corresponds to dimensions of main image on Homepage
    Banner: () => import("@/components/home/Banner"),
    Subscribe: () => import("@/components/home/Subscribe")
  }
};
</script>

<style scoped></style>
