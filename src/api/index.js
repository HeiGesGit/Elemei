

/* 与后台交互模块
*/
import ajax from './ajax'

const BASE_URL = 'https://www.easy-mock.com/mock/5d00df4d5ae0851d625d26a8/heiRuanWm'
// const BASE_URL = './api'

/**
* 获取地址信息(根据经纬度串)
*/
export const reqAddress = geohash => ajax('/api/position/' + geohash)
/**
* 获取 msite 页面食品分类列表
*/
export const reqCategorys = () => ajax(BASE_URL + '/index_category')
/**
* 获取 msite 商铺列表(根据经纬度)
*/
export const reqShops = ({ latitude, longitude }) => ajax(BASE_URL + '/shops', {
  latitude,
  longitude
})
/**
 * 根据 经纬度和关键字搜索商铺列表
 */
export const reqSearchShop = ({ geohash, keyword }) => ajax(BASE_URL + '/search_shops', { geohash, keyword })

/**
* 账号密码登录
*/
export const reqPwdLogin = (name, pwd, captcha) => ajax(BASE_URL + '/login_pwd', {
  name,
  pwd,
  captcha
}, 'POST')
/**
* 获取短信验证码
*/
export const reqSendCode = phone => ajax('/api/sendcode', { phone })
/**
* 手机号验证码登录
*/
export const reqSmsLogin = (phone, code) => ajax('/api/login_sms', { phone, code }, 'POST')
/**
* 获取用户信息(根据会话)
*/
export const reqUser = () => ajax('/api/userinfo')
/**
 * * 请求登出
*/
export const reqLogout = () => ajax('/api/logout')


/**
* 获取商家信息
*/
export const reqShopInfo = () => ajax('/info')
/**
* 获取商家评价数组
*/
export const reqShopRatings = () => ajax('/ratings')
/**
* 获取商家商品数组
*/
export const reqShopGoods = () => ajax('/goods')
