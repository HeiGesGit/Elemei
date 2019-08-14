// 入口js
import Vue from 'vue'
import App from './app.vue'

// 引入路由器
import router from './router'


// 注册store
import store from './store'

// 解决移动端延迟300ms的方法
// sudo cnpm install fastclick --save
import fastClick from 'fastclick'

import './HeiGesIcon/iconfont.css'

import { Switch } from 'mint-ui';

import VueResource from 'vue-resource'

// 加载mockServer即可
import './mock/mockServer.js'

Vue.component(Switch.name, Switch);
// 注册resource
Vue.use(VueResource)

fastClick.attach(document.body)

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: c => c(App),
  router, // 使用vue-router
  store // 使用vuex

})
