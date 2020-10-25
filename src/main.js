import Vue from 'vue'
import App from './App.vue'
import 'materialize-css/dist/js/materialize.min'
import store from './store'
import router from './router'
import mason from 'vue-masonry-css'

Vue.use(mason)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router:router,
  store,
  mason,
}).$mount('#app')
