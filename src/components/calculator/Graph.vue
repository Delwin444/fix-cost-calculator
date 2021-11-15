<template>
  <section class="graphs">
    <div class="graph">
      <GChart
        type="PieChart"
        :data="chartData"
        :options="chartOptions()"/>
    </div>
    <template v-for="group in groups">
      <div class="graph" :value="group" :key="group.id" v-if="!isGroupEmpty(group.id)">
        <GChart
          type="PieChart"
          :data="getChartDataByGroup(group.id)"
          :options="chartOptions(group.name)"/>
      </div>
    </template>
  </section>
</template>

<script>
import GChart from 'vue-google-charts'

export default {
  name: 'Graph',
  comments: { GChart },
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
    },
    chartOptions (groupName = 'Costs') {
      return {
        title: groupName,
        is3D: true,
        width: 500,
        height: 300,
        backgroundColor: 'transparent'
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "componentStyles/box.scss";

.graphs {
  @extend .box;
  grid-area: graph;
  display: flex;
  flex-wrap: wrap;
}

.graph {
  width: 50%;
}

@media screen and (min-width: 1260px) {
  .graph {
    width: 33%;
  }
}
</style>
