<template>
  <div class="position">
    <i class="icon-move handle">
      <b-icon-arrows-move></b-icon-arrows-move>
    </i>
    <input type="text" class="name" placeholder="Position Name" :value="data.name" @input="updateName($event, data)"/>
    <input placeholder="Kosten" type="number" step=".01" :value="data.cost" @input="updateCost($event, data)"/>
    <i class="icon-remove" @click="removePosition(data)">
      <b-icon-x></b-icon-x>
    </i>
  </div>
</template>

<script>
import { BIconX, BIconArrowsMove } from 'bootstrap-vue'

export default {
  name: 'Position',
  components: {
    BIconX,
    BIconArrowsMove
  },
  props: {
    data: Object
  },
  data: () => {
    return {
      tweenedCost: 0
    }
  },
  methods: {
    removePosition: function (position) {
      this.$store.commit('positions/remove', position)
    },
    updateName: function (e, position) {
      position.name = e.target.value
      this.$store.commit('positions/updateSingle', position)
    },
    updateCost: function (e, position) {
      position.cost = e.target.value
      this.$store.commit('positions/updateSingle', position)
    }
  }
}
</script>

<style scoped lang="scss">
.handle {
  display: inline-block;
  cursor: move;
  margin-top: 4px;
}

.position {
  display: flex;
  margin-left: -$grid-size / 2;

  > * {
    margin-left: $grid-size / 2;

    &:first-child {
      margin-left: 0;
    }
  }
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
</style>
