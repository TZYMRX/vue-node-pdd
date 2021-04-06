import {
  getHomeCasual,
  getHomeNav,
  getHomeShopLIst,
  getRecommendShopList,
  getSearchGoods,
  getUserInfo,
  getLogOut
} from "../api";

import {
  HOME_CASUAL,
  HOME_NAV,
  HOME_SHOP_LIST,
  RECOMMEND_SHOP_LIST,
  SEARCH_GOODS,
  USER_INFO,
  RESET_USER_INFO,
} from "./mutations-type";

export default {
  // 获取首页轮播图
  async reqHomeCasual({commit}) {
    const result = await getHomeCasual()
    commit(HOME_CASUAL, {homecasual: result.message})
  },

  // 获取首页导航
  async reqHomeNav({commit}) {
    const result = await getHomeNav()
    commit(HOME_NAV, {homenav: result.message.data})
  },

  // 获取首页商品列表
  async reqHomeShopList({commit}) {
    const result = await getHomeShopLIst()
    commit(HOME_SHOP_LIST, {homeshoplist: result.message.goods_list})
  },

  // 获取推荐商品列表
  async reqRecommendShopList({commit}, params) {
    const result = await getRecommendShopList(params)
    commit(RECOMMEND_SHOP_LIST, {recommendshoplist: result.message})

    params.callback && params.callback()
  },

  // 获取搜索分类商品列表
  async reqSearchGoods({commit}, callback) {
    const result = await getSearchGoods()
    commit(SEARCH_GOODS, {searchgoods: result.message.data})

    callback && callback()
  },

  // 同步用户信息
  syncUserInfo({commit}, userInfo) {
    commit(USER_INFO, {userInfo})
  },

  // 异步获取用户信息
  async getUserInfo({commit}) {
    const result = await getUserInfo()
    console.log(result)
    if (result.success_code === 200)
      commit(USER_INFO, {userInfo: result.message})
  },

  // 退出登录
  async logout({commit}) {
    const result = await getLogOut()
    console.log(result)
    if (result.success_code === 200)
      commit(RESET_USER_INFO)
  }
}


// function takeLongTime() {
//   return new Promise(resolve => {
//     setTimeout(() => resolve("long_time_value"), 1000);
//   });
// }
//
// takeLongTime().then(v => {
//   console.log("got", v);
// });

// function takeLongTime() {
//   return new Promise(resolve => {
//     setTimeout(() => resolve("long_time_value"), 1000);
//   });
// }
//
// async function test() {
//   const v = await takeLongTime();
//   console.log(v);
// }
//
// test();
