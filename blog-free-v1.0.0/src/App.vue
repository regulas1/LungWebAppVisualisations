<template>
  <v-app id="app">
    <app-navigation></app-navigation>
    
    <v-content transition="slide-x-transition">
      <router-view></router-view>
    </v-content>
    
    

    <!--
    <core-app-bar />

    <core-drawer />
    
    <core-view />

    <core-footer />

    <core-cta /> -->
  </v-app>
</template>

<script>
  import AppNavigation from '@/components/AppNavigation';
  
  export default {
    name: 'App',

    components: {
      CoreDrawer: () => import('@/components/core/Drawer'),
      CoreFooter: () => import('@/components/core/Footer'),
      CoreView: () => import('@/components/core/View'),
      AppNavigation
    },
  }
</script>
