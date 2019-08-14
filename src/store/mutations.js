
import Vue from 'vue'
/*
vuex 的 mutations 模块
直接更新state的多个方法的对象

*/
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  RECEIVE_GOODS,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CART
} from './mutation-types'
export default {
  [RECEIVE_ADDRESS](state, {address}) {
    state.address = address
  },
  [RECEIVE_CATEGORYS](state, {categorys}) {
    state.categorys = categorys
  },
  [RECEIVE_SHOPS](state, {shops}) {
    state.shops = shops
  },
  [RECEIVE_INFO](state, {info}) {
    state.info = info
  },
  [RECEIVE_RATINGS](state, {ratings}) {
    state.ratings = ratings
  },
  [RECEIVE_GOODS](state, {goods}) {
    state.goods = goods
  },
  [INCREMENT_FOOD_COUNT](state, {food}) {
    if (!food.count) {
      // food.count = 1 // 新增属性是没有绑定效果的
      /**
       * 对象 属性名 属性值
       */
      Vue.set(food, 'count', 1)
      // 将food添加到cartFoods中
      state.cartFoods.push(food)
      // 能保证让新增的属性也有数据绑定
    } else {
      // 在state中 当里面的对象数据改变了 不需要使用这条添加语句也可以更新数据
      // state.cartFoods.push(food)
      food.count++
    }
  },
  [DECREMENT_FOOD_COUNT](state, {food}) {
    if (food.count) {
      food.count--
      if (food.count === 0) {
        // 将food从cartFoods中移除
        state.cartFoods.splice(state.cartFoods.indexOf(food), 1)
      }
    }
  },
  [CLEAR_CART](state) {
    // 清除foods中的count
    // eslint-disable-next-line
    /* eslint-disable */ 
    state.cartFoods.forEach(food => food.count = 0)
    // 移除购物车中所有购物项
    state.cartFoods = [];
  }

}
