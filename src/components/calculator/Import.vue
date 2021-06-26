<template>
  <section class="import">
    <button @click="importData" class="btn--secondary">Import</button>
  </section>
</template>

<script>
export default {
  name: 'Import',
  methods: {
    importData () {
      const pseudoImportNode = document.createElement('input')
      let file
      let fileContent
      const self = this
      let isImportDataValid = 1
      const fileReader = new FileReader()
      const requiredImportDataKeys = [
        'groups',
        'positions',
        'settings',
        'budget'
      ]
      pseudoImportNode.type = 'file'
      pseudoImportNode.accept = '.json'
      pseudoImportNode.onchange = e => {
        const fileNameParts = e.target.value.split('.')
        const fileType = fileNameParts[fileNameParts.length - 1]

        if (fileType !== 'json') {

        }

        file = e.target.files[0]

        fileReader.addEventListener('load', (e) => {
          pseudoImportNode.remove()
          fileContent = e.target.result

          const importData = JSON.parse(fileContent)

          requiredImportDataKeys.every((value) => {
            if (importData[value] === undefined) {
              alert('Your selected JSON not valid. Please try another one.')
              isImportDataValid = 0
              return false
            }

            return true
          })

          if (!isImportDataValid) {
            return true
          }

          self.$store.commit('groups/update', importData.groups)
          self.$store.commit('positions/update', importData.positions)
          self.$store.commit('controls/updateEnableAnimations', importData.settings.enableAnimations)
          self.$store.commit('controls/updateBudget', importData.budget)
        })

        fileReader.readAsText(file)
      }

      pseudoImportNode.click()
    }
  }
}
</script>

<style scoped>

</style>
