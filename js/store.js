  
import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const initialState = () => ({
  interests: {}
})

const store = new Vuex.Store({
  state: initialState,
  getters: {
    player: state => state.room.players.find(p => p.name === state.playerName),
    role: (state, {player}) => (player ? player.role : "villager")
  },
  mutations: {
    
  },
})


export default store