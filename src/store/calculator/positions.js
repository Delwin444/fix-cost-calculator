import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export const positions = {
  namespaced: true,
  state: {
    items: []
  },
  getters: {
    valid: state => {
      return state.items.filter(position => !isNaN(position.cost))
    },
    byGroup: (state) => (targetGroup) => {
      return state.items.filter(position => position.group === targetGroup)
    }
  },
  mutations: {
    initialize (state) {
      if (localStorage.getItem('positions')) {
        state.items = JSON.parse(localStorage.getItem('positions'))
      }
    },
    add (state, position) {
      position.id = position.id || Math.random().toString(36).substr(2, 9)
      state.items.push(position)
    },
    update (state, positions) {
      state.items = positions
    },
    updateSingle (state, position) {
      Vue.set(state.items, state.items.indexOf(position), position)
    },
    remove (state, position) {
      state.items.splice(state.items.indexOf(position), 1)
    },
    removeByGroup (state, groupId) {
      state.items = state.items.filter(position => position.group !== groupId)
    }
  },
  actions: {
    updateGroupedPositions ({ commit, state }, data) {
      commit('removeByGroup', data.groupId)
      data.positions.forEach(position => {
        position.group = data.groupId
        if (state.items.indexOf(position) > -1) {
          commit('remove', position)
        }
        commit('add', position)
      })
    }
  }
}
