import Vue from 'vue'
import App from './App.vue' /* Finds App.vue in same directory as main.js */

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
