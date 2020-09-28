import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    positions: [{}],
    positionGroups: [],
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
    },
    getPositionsByGroups: (state) => (targetGroup) => {
      return state.positionGroups.find(group => group === targetGroup).positions
    }
  },
  mutations: {
    initializeCalculator (state) {
      if (localStorage.getItem('calculator')) {
        state.positions = JSON.parse(localStorage.getItem('calculator'))
      }
      if (localStorage.getItem('budget')) {
        state.budget = JSON.parse(localStorage.getItem('budget'))
      }
      if (localStorage.getItem('positionGroups')) {
        state.positionGroups = JSON.parse(localStorage.getItem('positionGroups'))
      }
    },
    updateEnableAnimations (state, enableAnimations) {
      state.enableAnimations = enableAnimations
    },
    updatePositions (state, data) {
      if (data.group) {
        state.positionGroups.find(group => group === data.group).positions = data.positions
      } else {
        state.positions = data.positions
      }
    },
    addPositionWithoutGroup (state, position) {
      state.positions.push(position)
    },
    addPositionToGroup (state, targetGroup) {
      state.positionGroups.find(group => group === targetGroup).positions.push({})
    },
    removePosition (state, data) {
      let positions
      if (data.group) {
        positions = state.positionGroups.find(group => group === data.group).positions
      } else {
        positions = state.positions
      }
      positions.splice(state.positions.indexOf(data.position), 1)
    },
    removePositionGroup (state, positionGroup) {
      state.positionGroups.splice(state.positionGroups.indexOf(positionGroup), 1)
    },
    updatePosition (state, position) {
      Vue.set(state.positions, state.positions.indexOf(position), position)
    },
    updatePositionGroups (state, positionGroups) {
      state.positionGroups = positionGroups
    },
    updatePositionGroup (state, positionGroup) {
      Vue.set(state.positionGroups, state.positionGroups.indexOf(positionGroup), positionGroup)
    },
    addPositionGroup (state) {
      state.positionGroups.push({
        name: '',
        positions: []
      })
    },
    updateBudget (state, budget) {
      state.budget = budget
      localStorage.setItem('budget', JSON.stringify(budget))
    }
  },
  actions: {},
  modules: {}
})
