import Vuex from 'vuex'
import Vue from 'vue'
import { positions } from './positions'

Vue.use(Vuex)

export const groups = {
  namespaced: true,
  state: {
    items: [{
      name: 'default',
      id: 'default'
    }]
  },
  getters: {
    getGroupById: (state) => (groupId) => {
      return state.items.filter(group => group.id === groupId)
    },
    isGroupEmpty: (state, getters) => (groupId) => {
      return getters['positions/byGroup'](groupId).length === 0
    }
  },
  mutations: {
    initialize (state) {
      if (localStorage.getItem('positionGroups')) {
        state.items = JSON.parse(localStorage.getItem('positionGroups'))
      }
    },
    add (state) {
      state.items.push({
        id: Math.random().toString(36).substr(2, 9),
        name: 'Group ' + state.items.length
      })
    },
    update (state, groups) {
      state.items = groups
    },
    updateSingle (state, group) {
      Vue.set(state.items, state.items.indexOf(group), group)
    },
    remove (state, group) {
      state.items.splice(state.items.indexOf(group), 1)
    }
  },
  modules: {
    positions
  }
}
