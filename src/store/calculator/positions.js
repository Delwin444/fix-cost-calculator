import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export const positions = {
  namespaced: true,
  state: {
    items: []
  },
  getters: {
    valid: (state) => {
      return state.items.filter(position => !isNaN(position.cost))
    },
    byGroup: (state) => (targetGroup) => {
      return state.items.filter(position => position.group === targetGroup)
    }
  },
  mutations: {
    initialize (state) {
      if (localStorage.getItem('positions') !== null) {
        state.items = JSON.parse(localStorage.getItem('positions'))
      }
    },
    add (state, position) {
      position.id = position.id || Math.random().toString(36).substr(2, 9)
      state.items.push(position)
    },
    swap (state, { oldIndex, newIndex }) {
      const temp = state.items[newIndex]

      Vue.set(state.items, newIndex, state.items[oldIndex])
      Vue.set(state.items, oldIndex, temp)
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
    updateGroupedPositions ({ commit, state, getters }, data) {
      data.positions.forEach(position => {
        if (position.group !== data.groupId) {
          position.group = data.groupId
          commit('updateSingle', position)
        }
      })

      let statePositions = getters.byGroup(data.groupId)
      data.positions.forEach((position, index) => {
        if (position.id !== statePositions[index].id) {
          const oldIndex = state.items.indexOf(position)
          const newIndex = state.items.indexOf(statePositions[index])

          commit('swap', { oldIndex, newIndex })
          statePositions = getters.byGroup(data.groupId)
        }
      })
    }
  }
}
