// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
import VueResource from 'vue-resource'

Vue.use(VueResource)
// require styles
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

Vue.prototype.$axios = Axios
// 全局配置
Axios.defaults.baseURL = 'http://www.xyy.com'
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencode'

Vue.config.productionTip = false

// 添加请求拦截器
Axios.interceptors.request.use(function(config) {
  if (config.method == "post") {
    config.data = qs.stringify(config.data)
  }
  return config;
}, function(error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
Axios.interceptors.response.use(function(response) {
  return response;
}, function(error) {
  // 对响应错误做些什么
  return Promise.reject(error);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
