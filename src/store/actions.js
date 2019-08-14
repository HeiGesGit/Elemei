/*
vuex 的 actions 模块
通过mutation间接更新state的多个方法的对象
  1.Action 提交的是 mutation，而不是直接变更状态。
  2.Action 可以包含任意异步操作。
*/
import { reqAddress, reqCategorys, reqShops, reqShopGoods, reqShopRatings, reqShopInfo } from '../api'
import { RECEIVE_ADDRESS, RECEIVE_CATEGORYS, RECEIVE_SHOPS, RECEIVE_GOODS, RECEIVE_RATINGS, RECEIVE_INFO, INCREMENT_FOOD_COUNT, DECREMENT_FOOD_COUNT, CLEAR_CART } from './mutation-types'
export default {

  // 异步获取地址
  async getAddress({ commit, state }) {
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    // 提交一个mutation
    if (result.code === 0) {
      commit(RECEIVE_ADDRESS, { address: result.data })
    }
  },

  // 异步获取分类列表
  async getCategorys({ commit }) {
    const result = await reqCategorys()
    if (result.code === 0) {
      commit(RECEIVE_CATEGORYS, { categorys: result.data })
    }
  },

  // 异步获取商家列表
  async getShops({ commit, state }) {
    const { longitude, latitude } = state
    const result = await reqShops({ longitude, latitude })
    // 提交一个mutation
    if (result.code === 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, { shops })
    }
  },

  // 异步获取商家信息
  async getShopInfo({ commit }) {
    const result = await reqShopInfo()
    if (result.code === 0) {
      const info = result.data
      info.score = 3.5
      commit(RECEIVE_INFO, { info })
    }
  },
  // 异步获取商家评价列表
  async getShopRatings({ commit }, callback) {
    const result = await reqShopRatings()
    if (result.code === 0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS, { ratings })
      // 数据更新了，通知一下组件
      callback && callback()
    }
  },
  // 异步获取商家商品列表
  async getShopGoods({ commit }, callback) {
    const result = await reqShopGoods()
    if (result.code === 0) {
      const goods = result.data
      commit(RECEIVE_GOODS, { goods })
      // 数据更新了，通知一下组件
      callback && callback()
    }
  },
  // 同步更新食物count值
  upDateFoodCount({commit}, {isAdd, food}) {
    if (isAdd) {
      commit(INCREMENT_FOOD_COUNT, {food})
    } else {
      commit(DECREMENT_FOOD_COUNT, {food})
    }
  },
  // 同步清空购物车
  clearCart({commit}) {
    commit(CLEAR_CART)
  }
}
