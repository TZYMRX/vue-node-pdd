import {get, post} from "./ajax";

// 基础路径
const BASE_URL = '/api'

// 请求首页轮播图
export const getHomeCasual = () => get(BASE_URL + '/api/homecasual')

// 请求首页导航
export const getHomeNav = () => get(BASE_URL + '/api/homenav')

// 请求首页商品数据
export const getHomeShopLIst = () => get(BASE_URL + '/api/homeshoplist')

// 请求推荐商品数据
export const getRecommendShopList = (params) => get(BASE_URL + '/api/recommendshoplist', params)

// 请求搜索分类数据
export const getSearchGoods = () => get(BASE_URL + '/api/searchgoods')

// 请求短信验证码
export const getPhoneCode = (phone) => get(BASE_URL + '/api/send_code', {phone})

// 手机短信验证码登录
export const phoneCodeLogin = (phone, code) => post(BASE_URL + '/api/login_code', {phone, code})

// 密码登录
export const pwdLogin = (name, pwd, captcha) => post(BASE_URL + '/api/login_pwd', {name, pwd, captcha})

// 获取登录的用户信息
export const getUserInfo = () => get(BASE_URL + '/api/user_info')

// 退出登录
export const getLogOut = () => get(BASE_URL + '/api/logout')


