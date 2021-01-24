/* Need for all three images on Homepage */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles: require('@/data/articles.json'),
    //mutations: {},
    //actions: {},
    //modules: {}
  },
})