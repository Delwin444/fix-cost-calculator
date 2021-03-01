<template>
  <section class="groups">
    <Draggable v-model="positionGroups"
               handle=".group-handle"
               v-bind="dragOptions"
               group="groups"
               @start="drag = true"
               @end="drag = false">
      <transition-group :name="transitionType" tag="ul">
        <li class="group" v-for="group in positionGroups" :key="group.id">
          <template v-if="group.id !== 'default'">
            <div class="group-controls">
              <div>
                <i class="icon-down" v-b-toggle="group.id">
                  <b-icon-chevron-down></b-icon-chevron-down>
                </i>
                <i class="icon-move group-handle">
                  <b-icon-arrows-move></b-icon-arrows-move>
                </i>
                <input :value="group.name" @input="updateGroupName($event, group)" type="text"/>
              </div>
              <i class="icon-remove" @click="removePositionGroup(group)">
                <b-icon-x></b-icon-x>
              </i>
            </div>
            <b-collapse v-bind:id="group.id" visible class="mt-2">
              <Positions :group="group"/>
            </b-collapse>
          </template>
          <template v-else>
            <Positions :group="group"/>
          </template>
        </li>
      </transition-group>
    </Draggable>

    <button class="add-group" @click="addPositionGroup">Add Group</button>
  </section>
</template>

<script>
import Positions from '@/components/calculator/Positions'
import { BIconChevronDown, BIconX, BIconArrowsMove } from 'bootstrap-vue'
import Draggable from 'vuedraggable'

export default {
  name: 'Groups',
  components: {
    Positions,
    BIconChevronDown,
    BIconX,
    BIconArrowsMove,
    Draggable
  },
  data () {
    return {
      drag: false
    }
  },
  computed: {
    positionGroups: {
      get () {
        return this.$store.state.groups.items
      },
      set (value) {
        this.$store.commit('groups/update', value)
      }
    },
    transitionType () {
      return this.$store.state.enableAnimations && !this.drag ? 'list' : null
    },
    dragOptions () {
      return {
        animation: this.$store.state.enableAnimations ? 200 : 0
      }
    }
  },
  watch: {
    positionGroups: function (newPositionGroups) {
      localStorage.setItem('positionGroups', JSON.stringify(newPositionGroups))
    }
  },
  beforeMount () {
    while (this.$store.state.positions.items.length < 3) {
      this.$store.commit('positions/add', {
        group: 'default'
      })
    }
  },
  methods: {
    addPositionGroup () {
      this.$store.commit('groups/add')
    },
    updateGroupName (e, group) {
      group.name = e.target.value
      this.$store.commit('groups/updateSingle', group)
    },
    removePositionGroup (positionGroup) {
      let confirmText = 'Do you really want to delete your group'

      if (positionGroup.name) {
        confirmText += ' "' + positionGroup.name + '"'
      }
      confirmText += '?'

      if (confirm(confirmText)) {
        this.$store.commit('groups/remove', positionGroup)
        this.$store.commit('positions/removeByGroup', positionGroup.id)
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "node_modules/bootstrap/scss/mixins/_transition.scss";
@import "node_modules/bootstrap/scss/_transitions.scss";
@import "componentStyles/buttons.scss";

.group {
  padding-bottom: $grid-size;
  transform-origin: center top;

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

.group-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.icon-down {
  height: 1.2em;
  width: 1.2em;
  border-radius: 50%;
  display: inline-block;
  text-align: center;
  border: 1px solid $dark-shade;
  transition: transform .2s ease-in-out;
  cursor: pointer;
  margin-right: $grid-size / 2;

  &:hover {
    transform: rotate(30deg);
  }

  &.not-collapsed {
    transform: rotate(180deg);

    &:hover {
      transform: rotate(150deg);
    }
  }

  &:focus {
    outline: none;
  }

  svg {
    margin-top: 2px;
  }
}

.icon-move {
  display: inline-block;
  cursor: move;
  margin-right: $grid-size;
}

.icon-remove {
  border: 1px solid $red;
  display: inline-block;
  border-radius: 50%;
  text-align: center;
  width: 1.4em;
  height: 1.4em;
  overflow: hidden;
  cursor: pointer;
  transition: background-color .2s ease-in-out, border-color .2s ease-in-out;

  &:hover {
    border-color: darken($red, 10%);
    background-color: darken($red, 10%);

    svg {
      fill: white;
    }
  }

  svg {
    width: 1.4em;
    height: 1.4em;
    fill: $red;
    transition: fill .2s ease-in-out;
  }
}

.add-group {
  @extend .btn--full-width;
}
</style>
