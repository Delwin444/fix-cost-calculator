import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    positions: [{}],
    enableAnimations: true,
    budget: 0
  },
  getters: {
    validPositions: state => {
      return state.positions
        .filter(position => !isNaN(position.cost))
    },
    result: (state, getters) => {
      return state.budget - getters.validPositions
        .reduce((accumulator, currentValue) => accumulator - -currentValue.cost, 0)
        .toFixed(2)
    },
    availableBudget: (state, getters) => {
      return state.budget - getters.validPositions
        .reduce((accumulator, currentValue) => accumulator - -currentValue.cost, 0)
        .toFixed(2)
    },
    chartData: (state, getters) => {
      const positionChartData = getters.validPositions
        .map(position => [position.name, parseFloat(position.cost)])
      if (state.budget > 0 && getters.availableBudget >= 0) {
        return [['Left Budget', getters.availableBudget]].concat(positionChartData)
      } else {
        return positionChartData
      }
    }
  },
  mutations: {
    initializeCalculator (state) {
      if (localStorage.getItem('calculator')) {
        state.positions = JSON.parse(localStorage.getItem('calculator'))
      }
    },
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
    },
    updateBudget (state, budget) {
      state.budget = budget
    }
  },
  actions: {},
  modules: {}
})
