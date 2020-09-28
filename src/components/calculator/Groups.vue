<template>
  <section class="groups">
    <div v-for="group in positionGroups" :key="group">
      <input :value="group.name" @input="updateGroupName($event, group)"/>
      <button @click="removePositionGroup(group)">Remove Group</button>
      <Positions :group="group"/>
    </div>
    <button @click="addPositionGroup">Add Group</button>
  </section>
</template>

<script>
import Positions from '@/components/calculator/Positions'

export default {
  name: 'Groups',
  components: {
    Positions
  },
  computed: {
    positionGroups: {
      get () {
        return this.$store.state.positionGroups
      },
      set (value) {
        this.$store.commit('updatePositionGroups', value)
      }
    }
  },
  watch: {
    positionGroups: function (newPositionGroups) {
      localStorage.setItem('positionGroups', JSON.stringify(newPositionGroups))
    }
  },
  methods: {
    addPositionGroup () {
      this.$store.commit('addPositionGroup')
    },
    getPositions (groupName) {
      return this.$store.getters.getPositionsByGroups(groupName)
    },
    updateGroupName (e, group) {
      group.name = e.target.value
      this.$store.commit('updatePositionGroup', group)
    },
    removePositionGroup (positionGroup) {
      this.$store.commit('removePositionGroup', positionGroup)
    }
  }
}
</script>

<style scoped>

</style>
