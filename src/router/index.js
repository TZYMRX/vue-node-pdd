import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from "../views/Home/Home";
import Recommend from "../views/Recommend/Recommend";
import Search from "../views/Search/Search";
import Chat from "../views/Chat/Chat";
import Me from "../views/Me/Me";
import Login from "../views/Login/Login";

import Hot from "../views/Home/Children/Hot/Hot";
import Dress from "../views/Home/Children/Dress";
import Ele from "../views/Home/Children/Ele";
import Food from "../views/Home/Children/Food";
import General from "../views/Home/Children/General";
import Man from "../views/Home/Children/Man";
import Mbaby from "../views/Home/Children/Mbaby";
import Shirt from "../views/Home/Children/Shirt";
import Box from "../views/Home/Children/Box";

import MeSetting from "../views/Me/MeSetting";
import UserDetail from "../views/Me/UserDetail";


Vue.use(VueRouter)

//获取原型对象上的push函数
const originalPush = VueRouter.prototype.replace
//修改原型对象中的push方法
VueRouter.prototype.replace = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    children: [
      {path: '/home', redirect: '/home/hot'},
      {path: 'hot', component: Hot, meta: {ShowBar: true}},
      {path: 'dress', component: Dress, meta: {ShowBar: true}},
      {path: 'box', component: Box, meta: {ShowBar: true}},
      {path: 'ele', component: Ele, meta: {ShowBar: true}},
      {path: 'food', component: Food, meta: {ShowBar: true}},
      {path: 'general', component: General, meta: {ShowBar: true}},
      {path: 'man', component: Man, meta: {ShowBar: true}},
      {path: 'mbaby', component: Mbaby, meta: {ShowBar: true}},
      {path: 'shirt', component: Shirt, meta: {ShowBar: true}},
    ],
    meta: {ShowBar: true}
  },
  {
    path: '/recommend',
    component: Recommend,
    meta: {ShowBar: true}
  },
  {
    path: '/search',
    component: Search,
    meta: {ShowBar: true}
  },
  {
    path: '/chat',
    component: Chat,
    meta: {ShowBar: true}
  },
  {
    path: '/me',
    component: Me,
    meta: {ShowBar: true}
  },
  {
    path: '/login',
    component: Login,
    meta: {ShowBar: false}
  },
  {
    path: '/setting',
    component: MeSetting,
    meta: {ShowBar: true}
  },
  {
    path: '/userdetail',
    component: UserDetail,
    meta: {ShowBar: false}
  },

]

export default new VueRouter({
  mode: 'history',
  routes
})
