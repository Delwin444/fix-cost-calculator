<template>
  <section class="graphs">
    <div class="graph">
      <GChart
        type="PieChart"
        :data="chartData"
        :options="chartOptions"/>
    </div>
    <div v-for="group in groups" :key="group.id">
      <GChart
        type="PieChart"
        v-if="!isGroupEmpty(group.id)"
        :data="getChartDataByGroup(group.id)"
        :options="chartOptions"/>
    </div>
  </section>
</template>

<script>
import GChart from 'vue-google-charts'

export default {
  name: 'Graph',
  comments: { GChart },
  data: () => {
    return {
      chartOptions: {
        title: 'Costs',
        is3D: true,
        width: 700,
        height: 400,
        backgroundColor: 'transparent'
      }
    }
  },
  computed: {
    chartData () {
      return this.$store.getters['charts/getAllPositionsChartData']
    },
    enableAnimations () {
      return this.$store.state.controls.enableAnimations
    },
    groups () {
      return this.$store.state.groups.items
    }
  },
  mounted () {
    const googleChartScript = document.createElement('script')
    googleChartScript.setAttribute('src', 'https://www.gstatic.com/charts/loader.js')
    document.head.appendChild(googleChartScript)
  },
  methods: {
    isGroupEmpty (groupId) {
      return this.$store.getters['groups/isGroupEmpty'](groupId)
    },
    getChartDataByGroup (groupId) {
      return this.$store.getters['charts/getChartDataByGroup'](groupId)
    }
  }
}
</script>

<style scoped lang="scss">
@import "componentStyles/box.scss";

.graphs {
  @extend .box;
  grid-area: graph;
}
</style>
