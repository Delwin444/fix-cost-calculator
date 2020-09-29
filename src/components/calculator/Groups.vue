<template>
  <section class="groups">
    <div v-for="group in positionGroups" :key="group.id">
      <template v-if="group.id !== 'default'">
        <input :value="group.name" @input="updateGroupName($event, group)"/>
        <button @click="removePositionGroup(group)">Remove Group</button>
      </template>
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
  methods: {
    addPositionGroup () {
      this.$store.commit('addPositionGroup')
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
