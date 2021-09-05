import Vue from 'vue'
import Vuex from 'vuex'
import { positions } from './positions'

Vue.use(Vuex)

export const controls = {
  namespaced: true,
  state: {
    budget: 0,
    enableAnimations: true
  },
  getters: {
    availableBudget: (state, getters) => {
      return state.budget - getters['positions/valid']
        .reduce((accumulator, currentValue) => accumulator - -currentValue.cost, 0)
        .toFixed(2)
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
  modules: {
    positions
  }
}
