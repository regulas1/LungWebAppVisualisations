<!--Corresponds to large image on Homepage & "Page 1 of "-->

<template>
  <section id="layout">
    <layout>
      <slot />
    </layout>
  </section>
</template>

<script>
  export default {
    name: 'HomeAbout',

    components: {
      Layout: () => import('@/components/Layout'),
    },
  }
</script>
