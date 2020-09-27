<template>
  <section class="positions">
    <Draggable v-model="positions" handle=".handle">
      <transition-group :name="transitionType" tag="ul">
        <li v-for="position in positions" :key="position">
          <Position :data="position"/>
        </li>
      </transition-group>
    </Draggable>
    <div>
      <button class="add-position" @click="addPosition">Add Position</button>
    </div>
  </section>
</template>

<script>
import Position from '@/components/calculator/Position'
import Draggable from 'vuedraggable'

export default {
  name: 'Positions',
  components: {
    Position,
    Draggable
  },
  computed: {
    positions: {
      get () {
        return this.$store.state.positions
      },
      set (value) {
        this.$store.commit('updatePositions', value)
      }
    },
    transitionType () {
      return this.$store.state.enableAnimations ? 'list' : 'none'
    }
  },
  watch: {
    positions: function (newPositions) {
      localStorage.setItem('calculator', JSON.stringify(newPositions))
    }
  },
  methods: {
    addPosition: function () {
      this.$store.commit('addPosition', {})
    }
  }
}
</script>

<style scoped lang="scss">
@import "componentStyles/box.scss";

.positions {
  @extend .box;
  grid-area: positions;
}

li {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: $light-shade;
  border-bottom: 1px solid $dark-accent;
  transform-origin: top center;

  > * {
    margin-left: 20px;

    &:first-child {
      margin-left: 0;
    }
  }

  &.list-enter-active,
  &.list-leave-active {
    transition: all .5s;
    z-index: -1;
  }

  &.list-enter,
  &.list-leave-to {
    opacity: 0;
    transform: scaleY(0);
    z-index: -1;
    position: relative;
  }
}

</style>
