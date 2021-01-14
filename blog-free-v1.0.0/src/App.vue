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
      CoreCta: () => import('@/components/core/Cta'),
      CoreDrawer: () => import('@/components/core/Drawer'),
      CoreFooter: () => import('@/components/core/Footer'),
      CoreAppBar: () => import('@/components/core/AppBar'),
      CoreView: () => import('@/components/core/View'),
      AppNavigation
    },
  }
</script>
