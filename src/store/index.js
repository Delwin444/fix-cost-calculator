import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    positions: [{}],
    enableAnimations: true
  },
  getters: {
    validPositions: state => {
      return state.positions
        .filter(position => !isNaN(position.cost))
    },
    chartData: state => {
      return state.positions
        .filter(position => !isNaN(position.cost))
        .map(position => [position.name, parseFloat(position.cost)])
    }
  },
  mutations: {
    updateEnableAnimations (state, enableAnimations) {
      state.enableAnimations = enableAnimations
    },
    updatePositions (state, positions) {
      state.positions = positions
    },
    addPosition (state, position) {
      state.positions.push(position)
    },
    removePosition (state, position) {
      state.positions.splice(state.positions.indexOf(position), 1)
    },
    updatePosition (state, position) {
      Vue.set(state.positions, state.positions.indexOf(position), position)
    }
  },
  actions: {},
  modules: {}
})
