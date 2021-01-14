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
    /* Add paths for each page in "views" folder of "Components" */
    {            
      path: '/breathing',            
      name: 'breathing',            
      component: () => import('../views/Breathing.vue')   /* Need ../ to exit out of current directory and locate views folder in src */     
    },
    {            
      path: '/asthma',            
      name: 'asthma',            
      component: () => import('../views/Asthma.vue')   
    },
    {            
      path: '/smoking',            
      name: 'smoking',            
      component: () => import('../views/Smoking.vue')   
    },
  ],
})
