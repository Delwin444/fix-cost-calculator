<template>
  <div class="home">
    <Controls/>
    <div class="calculator">
      <Positions/>
      <Result/>
    </div>
    <Graph/>
  </div>
</template>

<script>
import Controls from '@/components/calculator/Controls'
import Positions from '@/components/calculator/Positions'
import Result from '@/components/calculator/Result'
import Graph from '@/components/calculator/Graph'

export default {
  name: 'Home',
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
  max-width: 1280px;
  padding: $grid-size * 2;
  display: flex;
  justify-content: space-around;
}
</style>
