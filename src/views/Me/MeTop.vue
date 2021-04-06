<template>
  <div class="me-top">
    <router-link tag="div" to="/userdetail" class="user">
      <img src="./images/me_icon.png" alt="">
      <p v-if="userInfo.use_phone">{{userInfo.user_phone | phoneFormat}}</p>
      <p v-else>{{userInfo.user_name}}</p>
      <img src="./images/card.png" class="icon">
    </router-link>
    <div class="my-older">
      <div class="older-top">
        <h3>我的订单</h3>
        <span>查看全部 ></span>
      </div>
      <div class="older-bottom">
        <div class="bottom-item">
          <i class="itlike-1"/>
          <span>待付款</span>
        </div>
        <div class="bottom-item">
          <i class="itlike-2"/>
          <span>待分享</span>
        </div>
        <div class="bottom-item">
          <i class="itlike-3"/>
          <span>待发货</span>
        </div>
        <div class="bottom-item">
          <i class="itlike-4"/>
          <span>待收货</span>
        </div>
        <div class="bottom-item">
          <i class="itlike-5"/>
          <span>待评价</span>
        </div>
      </div>
    </div>
    <div class="setting">
      <div class="setting-item">
        <i class="itlike-1"/>
        <span>新人红包</span>
      </div>
      <div class="setting-item">
        <i class="itlike-2"/>
        <span>多多果园</span>
      </div>
      <div class="setting-item">
        <i class="itlike-3"/>
        <span>砍价免费拿</span>
      </div>
      <div class="setting-item">
        <i class="itlike-4"/>
        <span>边逛边赚</span>
      </div>
      <div class="setting-item">
        <i class="itlike-5"/>
        <span>天天领红包</span>
      </div>
      <div class="setting-item">
        <i class="itlike-uniE902"/>
        <span>收货地址</span>
      </div>
      <div class="setting-item">
        <i class="itlike-1"/>
        <span>我的评价</span>
      </div>
      <div class="setting-item">
        <i class="itlike-3"/>
        <span>官方客服</span>
      </div>
      <router-link tag="div" class="setting-item" to="/setting">
        <i class="itlike-4"/>
        <span>设置</span>
      </router-link>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: "MeTop",
    computed: {
      ...mapState(['userInfo'])
    },
    filters: {
      phoneFormat(phone) {
        if (phone) {
          // 转数组
          let phoneArr = [...phone]
          let str = '';
          phoneArr.forEach((item, index) => {
            if (index === 3 || index === 4 || index === 5 || index === 6) {
              str += '*'
            } else {
              str += item
            }
          })
          return str
        }
      }
    },

  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .me-top
    font-size 13px
    color: #666;

    .user
      display: flex
      flex-direction row
      align-items: center
      padding: 20px
      background-color: #fff
      margin-bottom: 10px

      .icon
        width: 25px
        height: 25px

      p
        font-weight bold
        font-size 14px
        margin: 0 15px

      img
        border-radius 50%
        height: 55px
        width: 55px

      i
        font-size 25px

    .my-older
      background-color: #fff

      .older-top
        display: flex
        flex-direction row
        padding: 0 10px
        justify-content: space-between
        height: 44px
        line-height: 44px

      .older-bottom
        display: flex

        .bottom-item
          flex 1
          height: 60px
          display: flex
          flex-direction column
          justify-content: center
          align-items: center

          i
            font-size 30px
            color #E9232C
            margin-bottom 5px

    .setting
      margin-top 10px
      background-color #fff
      display flex
      justify-content space-between
      flex-wrap wrap

      .setting-item
        width 90px
        height 70px
        display flex
        flex-direction column
        justify-content center
        align-items center

        i
          font-size 30px
          color orange
          margin-bottom 5px
</style>