<template>
  <section class="box">
    <div>
      <label for="enable-animations">Enable Animations</label>
      <input id="enable-animations" type="checkbox" value="true" v-model="enableAnimations"/>
    </div>
    <div>
      <label for="budget">Budget</label>
      <input id="budget" type="number" step=".01" v-model="budget" placeholder="Budget"/>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Controls',
  data: function () {
    return {
    }
  },
  computed: {
    enableAnimations: {
      get () {
        return this.$store.state.enableAnimations
      },
      set (value) {
        this.$store.commit('updateEnableAnimations', value)
      }
    },
    budget: {
      get () {
        return this.$store.state.budget
      },
      set (value) {
        this.$store.commit('updateBudget', value)
      }
    }
  }
}
</script>

<style scoped>

</style>
