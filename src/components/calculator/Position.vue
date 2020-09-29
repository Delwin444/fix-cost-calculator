<template>
  <div class="position">
    <input type="text" class="name" placeholder="Position Name" :value="data.name" @input="updateName($event, data)"/>
    <input placeholder="Kosten" type="number" step=".01" :value="data.cost" @input="updateCost($event, data)"/>
    <button @click="removePosition(data)">Remove</button>
    <span class="handle"></span>
  </div>
</template>

<script>
export default {
  name: 'Position',
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
  background: $dark-shade;
  width: 20px;
  height: 100%;
  cursor: move;
}

.position {
  display: flex;
  margin-left: -$grid-size / 2;

  > * {
    margin-left: $grid-size / 2;
  }
}
</style>
