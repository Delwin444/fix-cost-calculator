import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueGoogleCharts from 'vue-google-charts'
import { CollapsePlugin } from 'bootstrap-vue'
import VueSweetalert2 from 'vue-sweetalert2'

import 'sweetalert2/dist/sweetalert2.min.css'

Vue.use(VueGoogleCharts)
Vue.use(CollapsePlugin)
Vue.use(VueSweetalert2)

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
