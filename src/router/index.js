import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
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
  {            
    path: '/disease',            
    name: 'disease',            
    component: () => import('../views/Disease.vue')   
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
