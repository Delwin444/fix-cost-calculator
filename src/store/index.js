import Vue from 'vue'
import Vuex from 'vuex'
import { positions } from './calculator/positions'
import { groups } from './calculator/groups'
import { charts } from './calculator/charts'
import { controls } from './calculator/controls'

Vue.use(Vuex)

export default new Vuex.Store({
  getters: {
    result: (state, getters) => {
      return controls.state.budget - getters['positions/valid']
        .reduce((accumulator, currentValue) => accumulator - -currentValue.cost, 0)
        .toFixed(2)
    }
  },
  actions: {
    initializeCalculator ({ commit }) {
      commit('positions/initialize')
      commit('groups/initialize')

      if (localStorage.getItem('budget')) {
        commit('controls/updateBudget', JSON.parse(localStorage.getItem('budget')))
      }
    }
  },
  modules: {
    positions,
    groups,
    charts,
    controls
  }
})
