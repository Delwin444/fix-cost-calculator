import Vuex from 'vuex'
import Vue from 'vue'
import { positions } from './positions'
import { controls } from './controls'

Vue.use(Vuex)

const graphTableHeader = ['Position', 'Cost']

export const charts = {
  namespaced: true,
  state: {},
  getters: {
    getMappedPositions: () => (rawPositions) => {
      return rawPositions.map(position => [position.name, parseFloat(position.cost)])
    },
    getPreparedChartData: (state, getters) => (chartData, addLeftBudget = false) => {
      const tableBody = addLeftBudget && controls.state.budget > 0 && getters['controls/availableBudget'] >= 0
        ? [['Left Budget', getters['controls/availableBudget']]].concat(chartData)
        : chartData
      return [graphTableHeader].concat(tableBody)
    },
    getChartDataByGroup: (state, getters) => (groupId) => {
      const positionChartData = getters.getMappedPositions(getters['positions/byGroup'](groupId))
      return getters.getPreparedChartData(positionChartData)
    },
    getAllPositionsChartData: (state, getters) => {
      const positionChartData = getters.getMappedPositions(getters['positions/valid'])
      return getters.getPreparedChartData(positionChartData, true)
    }
  },
  modules: {
    positions,
    controls
  }
}
