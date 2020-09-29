import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueGoogleCharts from 'vue-google-charts'

Vue.use(VueGoogleCharts)

Vue.config.productionTip = false

Vue.filter('formatPrice', function (value) {
  if (!value) {
    return '0.00 €'
  }
  if (!isNaN(parseFloat(value))) {
    return parseFloat(value).toFixed(2) + ' €'
  }
  return value
})

new Vue({
  router,
  store,
  beforeCreate () {
    this.$store.dispatch('initializeCalculator')
  },
  render: h => h(App)
}).$mount('#app')
