<!--Corresponds to large image on Homepage & "Page 1 of "-->

<template>
  <section id="feed">
    <feed>
      <slot />
    </feed>
  </section>
</template>

<script>
  export default {
    name: 'HomeAbout',

    components: {
      Feed: () => import('@/components/Feed'),
    },
  }
</script>
