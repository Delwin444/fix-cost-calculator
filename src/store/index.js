import Vue from 'vue'
import Vuex from 'vuex'
import { positions } from './calculator/positions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    positionGroups: [{
      name: 'default',
      id: 'default'
    }],
    enableAnimations: true,
    budget: 0
  },
  getters: {
    result: (state, getters) => {
      return state.budget - getters['positions/valid']
        .reduce((accumulator, currentValue) => accumulator - -currentValue.cost, 0)
        .toFixed(2)
    },
    availableBudget: (state, getters) => {
      return state.budget - getters['positions/valid']
        .reduce((accumulator, currentValue) => accumulator - -currentValue.cost, 0)
        .toFixed(2)
    },
    chartData: (state, getters) => {
      const positionChartData = getters['positions/valid']
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
      this.commit('positions/initialize')
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
    removePositionGroup (state, positionGroup) {
      state.positionGroups.splice(state.positionGroups.indexOf(positionGroup), 1)
    },
    updatePositionGroups (state, positionGroups) {
      state.positionGroups = positionGroups
    },
    updatePositionGroup (state, positionGroup) {
      Vue.set(state.positionGroups, state.positionGroups.indexOf(positionGroup), positionGroup)
    },
    addPositionGroup (state) {
      state.positionGroups.push({
        id: Math.random().toString(36).substr(2, 9),
        name: ''
      })
    },
    updateBudget (state, budget) {
      state.budget = budget
      localStorage.setItem('budget', JSON.stringify(budget))
    }
  },
  actions: {},
  modules: {
    positions
  }
})
