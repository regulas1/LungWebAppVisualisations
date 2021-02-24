import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import './plugins/base'
import SequentialEntrance from 'vue-sequential-entrance'
import 'vue-sequential-entrance/vue-sequential-entrance.css'

import { Model } from './Model/Model.js';

// create the main function
// mark as async in order to call the async World.init method
function main() {
  // Get a reference to the container element
  const container = document.querySelector('#scene-container');

  // 1. Create an instance of the World app
  const model = new Model(container);
  // complete async tasks
  //await model.init();

  // 2. Render the scene (use .start for animation)
  model.start();
}

// call main to start the app
/* use catch when using async */
/*main().catch((err) => {
  console.error(err);
});*/
main()


Vue.use(SequentialEntrance);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  SequentialEntrance,
  render: h => h(App)
}).$mount("#app");
