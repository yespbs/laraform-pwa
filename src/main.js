import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// laraform
// import Laraform from 'laraform' // <- Community package
import Laraform from '@laraform/laraform' // <- Preimum package

// scss
import './assets/scss/style.scss'

Vue.use(Laraform)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
