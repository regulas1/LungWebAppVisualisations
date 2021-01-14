<template>
  <div id="app">
    <img alt="Vue logo" src="@/assets/logo.png">
    <HelloWorld msg="Welcome to Your Breathing Page"/>
    <!--Display navigation tree-->
    <img alt="Navigation tree" :src="fullTree" height="500px"/>  <!--Need to bind since using image as module-->

    <nav>
      <a href="breathing.html">Go to Breathing Page</a> <!-- Can use index.html or breathing.html -->
      </nav>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import nav from '@/assets/fullTree.png' /* Fetch fullTree image from assets */

export default {
  name: 'breathing', /* Can be "app" or "breathing" */
  components: {
    HelloWorld
  },
  /* data must be a function: https://vuejs.org/v2/guide/components.html */
  data: function() { 
    return {
      fullTree: nav 
      /* https://stackoverflow.com/questions/45116796/how-to-import-and-use-image-in-a-vue-single-file-component */ 
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
