import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import Paginate from 'vuejs-paginate'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

Vue.component('paginate', Paginate);

Vue.prototype.$axios = axios

