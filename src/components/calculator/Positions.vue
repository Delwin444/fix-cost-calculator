<template>
  <section class="positions">
    <Draggable v-model="positions"
               handle=".handle"
               v-bind="dragOptions"
               group="positions"
               @start="drag = true"
               @end="drag = false">
      <transition-group :name="transitionType" tag="ul">
        <li v-for="position in positions" :key="position">
          <Position :data="position" :group="group"/>
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
  props: ['group'],
  data () {
    return {
      drag: false
    }
  },
  computed: {
    positions: {
      get () {
        return this.group
          ? this.$store.getters.getPositionsByGroups(this.group)
          : this.$store.state.positions
      },
      set (value) {
        this.$store.commit('updatePositions', {
          positions: value,
          group: this.group
        })
      }
    },
    transitionType () {
      return this.$store.state.enableAnimations && this.drag ? 'list' : null
    },
    dragOptions () {
      return {
        animation: this.$store.state.enableAnimations ? 200 : 0
      }
    }
  },
  watch: {
    positions: function (newPositions) {
      if (this.group) {
        // @TODO
      } else {
        localStorage.setItem('calculator', JSON.stringify(newPositions))
      }
    }
  },
  methods: {
    addPosition: function () {
      if (this.group) {
        this.$store.commit('addPositionToGroup', this.group)
      } else {
        this.$store.commit('addPositionWithoutGroup', {})
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "componentStyles/box.scss";

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

  .list-move {
    transition: transform 0.5s;
  }

  .no-move {
    transition: transform 0s;
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
