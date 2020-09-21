<template>
  <section class="box result">
    <ul>
      <li v-for="position in positions" :key="position.id">
        {{ position.name }} {{ position.cost }}
      </li>
    </ul>
    <span v-text="animatedResult" v-if="enableAnimations"></span>
    <span v-text="result" v-else></span>
  </section>
</template>

<script>
import gsap from 'gsap'

export default {
  name: 'Result',
  data: () => {
    return {
      tweenedResult: 0
    }
  },
  computed: {
    positions () {
      return this.$store.getters.validPositions
    },
    result () {
      return this.$store.getters.validPositions
        .reduce((accumulator, currentValue) => accumulator - -currentValue.cost, 0)
        .toFixed(2)
    },
    animatedResult () {
      return this.enableAnimations ? this.tweenedResult.toFixed(2) : 0
    },
    enableAnimations () {
      return this.$store.state.enableAnimations
    }
  },
  watch: {
    result: function (newValue) {
      if (this.enableAnimations) {
        gsap.to(this.$data, {
          duration: 0.5,
          tweenedResult: newValue
        })
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>
