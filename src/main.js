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
/*unction main() {
  // Get a reference to the container element
  const container = document.querySelector('#scene-container');

  // create a new model
  const model = new Model(container);

  // start the animation loop
  model.start();
}
// call main to start the app
main();
*/

/* ASYNC VERSION FOR LOADING MODELS */
// mark as async in order to call the async Model.init method
async function main() {
  // Get a reference to the container element
  const container = document.querySelector('#scene-container');

  // 1. Create an instance of the Model app
  const model = new Model(container);
  // complete async tasks
  await model.init();

  // 2. Render the scene (use .start for animation)
  model.start();
}

main().catch((err) => {
  console.error(err);
});

Vue.use(SequentialEntrance);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  SequentialEntrance,
  render: h => h(App)
}).$mount("#app");
