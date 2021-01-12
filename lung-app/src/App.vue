<template>
  <div id="app">

    <!-- added "contain" and "width" -->
    <img alt="ABI logo" src="./assets/abi-hc-rgb.png"
      contain
      width="50%" 
    ><img>
    <HelloWorld msg="Welcome to Your Lung Model"/>
    <Breathing msg="Welcome to your Lung Model"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Breathing from './components/Breathing.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Breathing
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
