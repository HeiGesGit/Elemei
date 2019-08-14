// 路由对象模块

import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from '../pages/MSite/MSite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'

import Shop from '../pages/Shops/Shop.vue'
import ShopGoods from '../pages/Shops/ShopGoods/ShopGoods.vue'
import ShopInfo from '../pages/Shops/ShopInfo/ShopInfo.vue'
import ShopRating from '../pages/Shops/ShopRatings/ShopRatings.vue'

// 声明使用组件
Vue.use(VueRouter)

export default new VueRouter({
  // 所有路由
  routes: [
    { path: '/msite', component: MSite, meta: { showFooter: true } },
    { path: '/search', component: Search, meta: { showFooter: true } },
    { path: '/order', component: Order, meta: { showFooter: true } },
    { path: '/profile', component: Profile, meta: { showFooter: true } },
    { path: '/Login', component: Login },
    { path: '/', redirect: '/msite' },
    { path: '/shop',
      component: Shop,
      children: [{
        path: '/shop/goods',
        component: ShopGoods
      }, {
        path: '/shop/info',
        component: ShopInfo
      }, {
        path: '/shop/ratings',
        component: ShopRating
      },
      {
        path: '',
        redirect: '/shop/goods'
      }
      ]
    }

  ]
})
