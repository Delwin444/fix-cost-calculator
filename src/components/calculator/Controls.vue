<template>
  <section class="box">
    <label for="enable-animations">Enable Animations</label>
    <input id="enable-animations" type="checkbox" value="true" v-model="enableAnimations"/>
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
    }
  }
}
</script>

<style scoped>

</style>
