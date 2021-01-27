<template>
  <v-app id="app">
    <app-navigation></app-navigation>
    
    <v-content transition="slide-x-transition">
      <router-view></router-view>
    </v-content>

  </v-app>
</template>

<script>
  import AppNavigation from '@/components/AppNavigation';
  import LoadScene from '@/systems/LoadScene';
  //import app from '../examples/App'
  
  export default {
    name: 'App',

    components: {
      AppNavigation,   
      LoadScene,   
      //app,
    },
  }
</script>