<template>
  <section class="box positions">
    <Draggable v-model="positions" handle=".handle">
      <template v-if="enableAnimations">
        <transition-group name="list" tag="ul">
          <li v-for="(position, index) in positions" :key="index">
            <Position :data="position"/>
          </li>
        </transition-group>
      </template>
      <template v-else>
        <ul>
          <li v-for="(position, index) in positions" :key="index">
            <Position :data="position"/>
          </li>
        </ul>
      </template>
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
  components: { Position, Draggable },
  computed: {
    positions: {
      get () {
        return this.$store.state.positions
      },
      set (value) {
        this.$store.commit('updatePositions', value)
      }
    },
    enableAnimations () {
      return this.$store.state.enableAnimations
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
