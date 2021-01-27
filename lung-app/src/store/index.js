/* Need for all three images on Homepage */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // Added items in "state"
  state: {
    width: 0,
    height: 0,
    camera: null,
    scene: null,
    renderer: null
  },
    //articles: require('@/data/articles.json'),
    //mutations: {},
    //actions: {},
    //modules: {}
})