<template>
  <div class="breath">
    <h1>{{ msg }}</h1>
    <p>
      Use your mouse to <strong>spin &amp; zoom</strong><br>
      or click
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">here</a><br>
      for more information.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Breathing',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

a {
  color: #42b983;
}
</style>