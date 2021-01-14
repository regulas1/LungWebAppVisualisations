import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {            
      path: '/breathing',            
      name: 'breathing',            
      component: () => import('../views/Breathing.vue')   /* Need ../ to exit out of current directory and locate views folder in src */     
    },
  ],
})
