<template>
  <section class="export">
    <button @click="exportData" class="btn--secondary">Export</button>
  </section>
</template>

<script>
export default {
  name: 'Export',
  methods: {
    exportData () {
      const pseudoDownloadNode = document.createElement('a')
      const exportData = {
        positions: this.$store.getters['positions/valid'],
        groups: this.$store.state.groups.items,
        budget: this.$store.state.controls.budget.budget,
        settings: {
          enableAnimations: this.$store.state.enableAnimations
        }
      }
      const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(exportData))
      pseudoDownloadNode.setAttribute('href', dataStr)
      pseudoDownloadNode.setAttribute('download', 'fix-cost-calculator-data.json')
      pseudoDownloadNode.click()
      document.removeChild(pseudoDownloadNode)
    }
  }
}
</script>

<style scoped>

</style>
