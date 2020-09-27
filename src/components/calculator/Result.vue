<template>
  <section class="result">
    <table>
      <tr v-if="budget > 0">
        <th>Budget</th>
        <th>{{ budget | formatPrice }}</th>
      </tr>
      <tr v-for="position in positions" :key="position.id">
        <td>{{ position.name }}</td>
        <td>-{{ position.cost | formatPrice }}</td>
      </tr>
      <tr class="calc-result" v-bind:class="{'positive': result > 0, 'negative': result <0}">
        <td>Result</td>
        <td>
          <span v-text="$options.filters.formatPrice(animatedResult)" v-if="enableAnimations"></span>
          <span v-text="$options.filters.formatPrice(result)" v-else></span>
        </td>
      </tr>
    </table>
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
    budget () {
      return this.$store.state.budget
    },
    result () {
      return this.$store.getters.result
    },
    animatedResult () {
      return this.enableAnimations ? this.tweenedResult : 0
    },
    enableAnimations () {
      return this.$store.state.enableAnimations
    }
  },
  beforeMount () {
    if (this.result) {
      this.tweenedResult = parseFloat(this.result)
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
@import "componentStyles/box.scss";

.result {
  @extend .box;
  grid-area: result;
  display: flex;
  justify-content: center;
}
table {
  border-collapse: collapse;

  tr {
    &:last-child {
      td,
      th {
        border-bottom-width: 0;
      }
    }

    &.calc-result {
      font-weight: 800;
      font-size: 1.2em;

      td {
        padding-bottom: 3px;
        border-bottom: 3px double $dark-shade;
        transition: color .5s ease-in-out, border-bottom-color .5s ease-in-out;
      }

      &.positive {
        td {
          border-bottom-color: green;

          &:nth-child(2) {
            color: green;
          }
        }
      }

      &.negative {
        td {
          border-bottom-color: red;

          &:nth-child(2) {
            color: red;
          }
        }
      }
    }
  }

  td,
  th {
    border-bottom: 1px solid $dark-shade;
    padding-top: $grid-size / 2;
    padding-bottom: $grid-size / 2;

    &:nth-child(1) {
      text-align: left;
    }

    &:nth-child(2) {
      padding-left: $grid-size;
      text-align: right;
    }
  }
}
</style>
