import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import './plugins/base'
import SequentialEntrance from 'vue-sequential-entrance'
import 'vue-sequential-entrance/vue-sequential-entrance.css'

Vue.use(SequentialEntrance);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  SequentialEntrance,
  render: h => h(App)
}).$mount("#app");
