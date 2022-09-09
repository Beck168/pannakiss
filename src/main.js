import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import components from './components'

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(components)

Vue.config.productionTip = false

//解决路由跳转不返回顶部问题

router.beforeEach((to, from, next) => {    
  // chrome
  document.body.scrollTop = 0
  // firefox
  document.documentElement.scrollTop = 0
  // safari
  window.pageYOffset = 0
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
