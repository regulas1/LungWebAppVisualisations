<template>
  <div class="breath">
    <h1>{{ msg }}</h1>
    <p>
      Use your mouse to <strong>spin &amp; zoom</strong><br>
      or click
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">here</a><br>
      for more information.
    </p>
    <h3>Click on a button to read more about it</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">Breathing</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">Asthma</a></li>
        <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">Smoking</a></li>
    </ul>
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

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>