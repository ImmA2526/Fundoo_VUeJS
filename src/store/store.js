import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state:{
    colors: ['#ef9a9a', '#F48FB1', '#CE93D8', '#B39DDB', '#9FA8DA', '#90CAF9', '#81D4FA', '#80CBC4', '#A5D6A7', '#E6EE9C', '#FFF59D', '#FFCC80', '#FFAB91', '#BCAAA4', '#EEEEEE', '#CFD8DC', 'white'],   
     },

  getters: {
   
    colors(state){
      return state.colors;
    }
  },
});
