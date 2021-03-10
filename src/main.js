import Vue from 'vue'
import App from './App.vue'
import './plugins/element'

import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'

Vue.use(VXETable)

import bsLib from 'boss-lib'
import 'boss-lib/lib/theme-chalk/index.css'
Vue.use(bsLib)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
