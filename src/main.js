// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引用API文件
import api from './api/index.js'
import promiseApi from './api/promise-api'
// 将API方法绑定到全局
Vue.prototype.$api = api
Vue.prototype.$psapi = promiseApi

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
