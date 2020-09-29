<template>
  <section class="calculator">
    <Controls/>
    <section class="position-list">
      <Groups/>
    </section>
    <Result/>
    <Graph/>
  </section>
</template>

<script>
import Controls from '@/components/calculator/Controls'
import Groups from '@/components/calculator/Groups'
import Result from '@/components/calculator/Result'
import Graph from '@/components/calculator/Graph'

export default {
  name: 'Calculator',
  components: {
    Result,
    Groups,
    Controls,
    Graph
  },
  watch: {
    '$store.state.positions.items': function () {
      localStorage.setItem('positions', JSON.stringify(this.$store.state.positions.items))
    },
    '$store.state.positionGroups': function (newPositionGroups) {
      localStorage.setItem('positionGroups', JSON.stringify(newPositionGroups))
    }
  }
}
</script>

<style scoped lang="scss">
@import "componentStyles/box.scss";

.calculator {
  display: grid;
  grid-gap: $grid-size $grid-size * 2;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "controls controls"
    "position-list result"
    "graph graph";
  max-width: 1280px;
  margin: 0 auto;
}

.position-list {
  @extend .box;
  grid-area: position-list;
}
</style>
