  
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
    setName(state, name) {
      state.playerName = name
    },
    updateRoom(state, room = {}) {
      state.room = {...state.room, ...room}
    },
    toggleWait(state, value = !state.isWaiting) {
      state.isWaiting = value
    },
    updatePlayers(state, players) {
      state.room = {...state.room, players}
    },
    toggleHost(state, value = !state.isHost) {
      state.isHost = value
    },
    setRoles(state, roles) {
      state.roles = roles
    },
    updateTimer(state, {duration = 0, initial = Date.now()}) {
      state.timerDuration = duration
      state.timerInitial = initial
    },
    toggleNight(state, isNight = !state.isNight) {
      state.isNight = isNight
    },
    reset(state) {
      for (const s in state) {
        Vue.set(state, s, initialState()[s])
      }
    }
  },
  plugins: [createPersistedState()]
})


export default store