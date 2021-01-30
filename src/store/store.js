import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state:{
    colors: ['#ef9a9a', '#F48FB1', '#CE93D8', '#B39DDB', '#9FA8DA', '#90CAF9', '#81D4FA', '#80CBC4', '#A5D6A7', '#E6EE9C', '#FFF59D', '#FFCC80', '#FFAB91', '#BCAAA4', '#EEEEEE', '#CFD8DC', 'white'],
    keepInputMode: false,
   
   keeps:[
      {
        title: "Sample Keep",
        list: [],
        text: "This isn a sample etxt.",
        labels: ["My"],
        color: "white"
      }
    ]
  },

  getters: {
    keeps(state){
      return state.keeps;
    },
    
    labels(state){
      return state.labels;
    },

    colors(state){
      return state.colors;
    }
  },

  mutations:{
    addKeep(state, k){
      console.log(k);
      state.keeps.push(k);
    },

    changeMode(state, modeName){
      if(modeName === "input") state.keepInputMode = !state.keepInputMode;
    },

  }
});
