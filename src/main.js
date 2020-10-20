import Vue from 'vue'
import App from './App.vue'
import 'materialize-css/dist/js/materialize.min'
import store from './store'
import router from './router'
import lg from 'vue-light-gallery'


Vue.use(lg)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router:router,
  lg,
  store,
}).$mount('#app')
