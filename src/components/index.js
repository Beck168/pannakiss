// 引入
import Font from './font.vue';
import BackTop from './backTop.vue';
import NavBar from './NavBar.vue';
export default {
  install(Vue) {
  // 注册全局组件
    Vue.component("NavBar",NavBar)
    Vue.component('Font', Font)
    Vue.component("BackTop",BackTop)
  }
}