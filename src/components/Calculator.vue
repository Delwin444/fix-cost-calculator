<template>
  <section class="calculator">
    <Controls/>
    <section class="position-list">
      <Positions/>
      <Groups/>
    </section>
    <Result/>
    <Graph/>
  </section>
</template>

<script>
import Controls from '@/components/calculator/Controls'
import Positions from '@/components/calculator/Positions'
import Groups from '@/components/calculator/Groups'
import Result from '@/components/calculator/Result'
import Graph from '@/components/calculator/Graph'

export default {
  name: 'Calculator',
  components: {
    Result,
    Positions,
    Groups,
    Controls,
    Graph
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
