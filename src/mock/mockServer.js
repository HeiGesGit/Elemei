// 使用mockjs模拟数据接口


import Mock from 'mockjs'
import data from './data.json'

// 返回商品列表
Mock.mock('/goods', {code: 0, data: data.goods})
// 返回评价
Mock.mock('/ratings', {code: 0, data: data.ratings})
// 返回商家信息
Mock.mock('/info', {code: 0, data: data.info})

// 不需要暴露任何数据,只需要保证能执行即可
