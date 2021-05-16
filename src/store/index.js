import Vue from 'vue'
import Vuex from 'vuex'
import { positions } from './calculator/positions'
import { groups } from './calculator/groups'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
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
    updateEnableAnimations (state, enableAnimations) {
      state.enableAnimations = enableAnimations
    },
    updateBudget (state, budget) {
      state.budget = budget
      localStorage.setItem('budget', JSON.stringify(budget))
    }
  },
  actions: {
    initializeCalculator ({ commit, state }) {
      commit('positions/initialize')
      commit('groups/initialize')

      if (localStorage.getItem('budget')) {
        commit('updateBudget', JSON.parse(localStorage.getItem('budget')))
      }
    }
  },
  modules: {
    positions,
    groups
  }
})
