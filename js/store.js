import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const initialState = () => ({
  interests: {},
  selectedCourse: null,
  selectedSlot: null
})

const store = new Vuex.Store({
  state: initialState,
  mutations: {
    toggleInterest(state, key) {
      state.interests = { ...state.interests, [key]: !state.interests[key] }
    },
    setCourse(state, key) {
      state.selectedCourse = key
    },
    setSlot(state, key) {
      state.selectedSlot = key
    }
  },
})

export default store
