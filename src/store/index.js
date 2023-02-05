import Vue from 'vue'
import Vuex from 'vuex'
import products from "@/store/modules/products";
import slider from "@/store/modules/slider"

Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    products,
    slider
  }
})
