import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const initialState = () => ({
  interests: {}
})

const store = new Vuex.Store({
  state: initialState,
  mutations: {
    toggleInterest(state, key) {
      state.interests = {...state.interests, [key]: !state.interests[key]}
    }
  },
})

export default store
