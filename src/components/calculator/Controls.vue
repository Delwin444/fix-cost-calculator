<template>
  <section class="controls">
    <div class="field">
      <label for="enable-animations">Enable Animations</label>
      <input id="enable-animations" type="checkbox" value="true" v-model="enableAnimations"/>
    </div>
    <div class="field">
      <label for="budget">Budget</label>
      <input id="budget" type="number" step=".01" v-model="budget" placeholder="Budget"/>
    </div>
    <div class="field">
      <section class="btn-list btn-list--centered">
        <Import/>
        <Export/>
      </section>
    </div>
  </section>
</template>

<script>
import Import from '@/components/calculator/Import'
import Export from '@/components/calculator/Export'

export default {
  name: 'Controls',
  components: {
    Import,
    Export
  },
  computed: {
    enableAnimations: {
      get () {
        return this.$store.state.controls.enableAnimations
      },
      set (value) {
        this.$store.commit('controls/updateEnableAnimations', value)
      }
    },
    budget: {
      get () {
        return this.$store.state.controls.budget
      },
      set (value) {
        this.$store.commit('controls/updateBudget', value)
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import 'componentStyles/box.scss';

.controls {
  @extend .box;
  grid-area: controls;
}

.field {
  margin-bottom: $grid-size;

  &:last-child {
    margin-bottom: 0;
  }
}
</style>
