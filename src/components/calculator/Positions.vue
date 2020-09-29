<template>
  <section class="positions">
    <Draggable v-model=groupedPositions
               handle=".handle"
               v-bind="dragOptions"
               group="positions"
               @start="drag = true"
               @end="drag = false">
      <transition-group :name="transitionType" tag="ul">
        <li v-for="position in groupedPositions" :key="position.id">
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
  props: ['group'],
  data () {
    return {
      drag: false
    }
  },
  computed: {
    groupedPositions: {
      get () {
        return this.getPositionsByGroup(this.group.id)
      },
      set (positions) {
        this.$store.dispatch('positions/updateGroupedPositions', {
          positions: positions,
          groupId: this.group.id
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
  methods: {
    addPosition () {
      this.$store.commit('positions/add', {
        group: this.group.id
      })
    },
    getPositionsByGroup () {
      return this.$store.getters['positions/byGroup'](this.group.id)
    }
  }
}
</script>

<style scoped lang="scss">
@import "componentStyles/box.scss";

ul {
  margin-bottom: $grid-size / 2;
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

.add-position {
  display: block;
  width: 100%;
  background: transparent;
  border: 1px dashed $dark-accent;
  padding: $grid-size / 2 0;
  border-radius: $grid-size / 2;
  cursor: pointer;
  transition: background-color ease-in-out .2s;
  margin-bottom: $grid-size / 2;

  &:hover {
    background: rgba(0, 0, 0, .1);
  }
}
</style>
