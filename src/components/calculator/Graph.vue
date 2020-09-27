<template>
  <section class="graph">
    <GChart
      type="PieChart"
      :data="chartData"
      :options="chartOptions"/>
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
    positions () {
      return this.$store.state.positions
    },
    chartData () {
      return [['Position', 'Cost']].concat(this.$store.getters.chartData)
    },
    enableAnimations () {
      return this.$store.state.enableAnimations
    }
  },
  mounted () {
    const googleChartScript = document.createElement('script')
    googleChartScript.setAttribute('src', 'https://www.gstatic.com/charts/loader.js')
    document.head.appendChild(googleChartScript)
  },
  methods: {}
}
</script>

<style scoped lang="scss">
@import "componentStyles/box.scss";

.graph {
  @extend .box;
  grid-area: graph;
}
</style>
