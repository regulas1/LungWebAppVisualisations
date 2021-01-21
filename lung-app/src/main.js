/**************************************************************************
	* IMPORTS
	***************************************************************************/

// NPM: MAIN
import Vue from "vue";

// PROJECT: MAIN
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

// PROJECT: OTHER
import "@/components/js/scene";



/**************************************************************************
	* VUE INSTANCE
	 ***************************************************************************/

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
