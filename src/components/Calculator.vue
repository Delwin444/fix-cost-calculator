<template>
  <section class="calculator">
    <Controls/>
    <Positions/>
    <Result/>
    <Graph/>
  </section>
</template>

<script>
import Controls from '@/components/calculator/Controls'
import Positions from '@/components/calculator/Positions'
import Result from '@/components/calculator/Result'
import Graph from '@/components/calculator/Graph'

export default {
  name: 'Calculator',
  components: {
    Result,
    Positions,
    Controls,
    Graph
  }
}
</script>

<style scoped lang="scss">
.calculator {
  display: grid;
  grid-gap: $grid-size $grid-size * 2;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "controls controls"
    "positions result"
    "graph graph";
  max-width: 1280px;
  margin: 0 auto;
}
</style>
