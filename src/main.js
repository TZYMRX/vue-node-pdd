import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import {Actionsheet, DatetimePicker} from 'mint-ui';

Vue.component(Actionsheet.name, Actionsheet);
Vue.component(DatetimePicker.name, DatetimePicker);

import 'mint-ui/lib/style.css'
import LyTab from 'ly-tab'
import FastClick from 'fastclick'

// 字体图标
import '../src/common/css/style.css'

FastClick.attach(document.body);

Vue.use(LyTab)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
