<template>
  <section class="result">
    <table>
      <tr v-if="budget > 0">
        <td class="name" colspan="2">Budget</td>
        <td class="price"><b>{{ budget | formatPrice }}</b></td>
      </tr>
      <template v-for="positionGroup in positionGroups">
        <tr v-for="(position, index) in getPositionsByGroup(positionGroup.id)" :key="position.id">
          <td class="group" v-bind:class="{'new-group': displayGroupName(positionGroup.id, index)}">
            <span v-if="displayGroupName(positionGroup.id, index)">{{ positionGroup.name }}</span>
          </td>
          <td class="name">{{ position.name }}</td>
          <td class="price">-{{ position.cost | formatPrice }}</td>
        </tr>
      </template>
      <tr class="calc-result" v-bind:class="{'positive': result > 0, 'negative': result < 0}">
        <td class="name" colspan="2">Result</td>
        <td class="price" v-text="$options.filters.formatPrice(animatedResult)" v-if="enableAnimations"></td>
        <td class="price" v-text="$options.filters.formatPrice(result)" v-else></td>
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
    positionGroups () {
      return this.$store.state.groups.items
    },
    budget () {
      return this.$store.state.controls.budget
    },
    result () {
      return this.$store.getters.result
    },
    animatedResult () {
      return this.enableAnimations ? this.tweenedResult : 0
    },
    enableAnimations () {
      return this.$store.state.controls.enableAnimations
    }
  },
  beforeMount () {
    if (this.result) {
      this.tweenedResult = parseFloat(this.result)
    }
  },
  methods: {
    getPositionsByGroup (groupId) {
      return this.$store.getters['positions/byGroup'](groupId)
        .filter(position => position.name || position.cost)
    },
    displayGroupName (groupId, index) {
      return groupId !== 'default' && index === 0
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
}

.group,
.name {
  text-align: left;
}

.price {
  text-align: right;
}

table {
  border-collapse: collapse;
  margin: 0 auto;

  tr {
    &:last-of-type {
      margin-bottom: $grid-size;
    }

    td {
      padding: $grid-size / 4 $grid-size $grid-size / 4 0;

      &:last-child {
        padding-right: 0;
      }

      &.new-group {
        border-top: 1px solid $dark-shade;
      }

      &.name,
      &.price {
        border-bottom: 1px solid $dark-shade;
      }
    }

    &:last-child {
      td {
        border-bottom-width: 0;
      }
    }
  }
}

.calc-result {
  font-weight: 800;
  font-size: 1.2em;
  padding-bottom: 3px;
  border-bottom: 3px double $dark-shade;
  transition: border-bottom-color .5s ease-in-out;

  td {
    border-top: 1px solid $dark-shade;
  }

  .price {
    transition: color .5s ease-in-out;
  }

  &.positive {
    border-bottom-color: green;

    .price {
      color: green;
    }
  }

  &.negative {
    border-bottom-color: red;

    .price {
      color: red;
    }
  }
}
</style>
