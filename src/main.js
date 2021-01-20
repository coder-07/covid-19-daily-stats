import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'
import VueAxios from 'vue-axios'

export const bus = new Vue();

Vue.config.productionTip = false

Vue.use(VueAxios, Axios)

new Vue({
  render: h => h(App),
}).$mount('#app')
