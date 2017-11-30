
import Vue from 'vue'
import App from './App'
import router from './router'
require('swiper/dist/css/swiper.css')

//轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // template: '<App/>',
  // components: { App }
  render: h =>h(App)
})
