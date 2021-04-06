<template>
  <div class="me-setting">
    <div>
      <me-common-cell left-icon="itlike-3" left-title="免密支付设置" :click-cell="dealClickCell"/>
      <me-common-cell left-icon="itlike-2" left-title="免拼卡设置" :click-cell="dealClickCell"/>
      <me-common-cell left-icon="itlike-1" left-title="消息接收设置" :click-cell="dealClickCell"/>
    </div>

    <div style="margin-top: 10px;">
      <me-common-cell left-icon="itlike-3" left-title="常见问题" :click-cell="dealClickCell"/>
      <me-common-cell left-icon="itlike-2" left-title="意见反馈" :click-cell="dealClickCell"/>
      <me-common-cell left-icon="itlike-1" left-title="商家免费入驻" :click-cell="dealClickCell"/>
    </div>

    <div class="logout" @click="dealLogout">
      退出登录
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import {Toast, MessageBox} from 'mint-ui'
  import MeCommonCell from "./MeCommonCell";

  export default {
    name: "MeSetting",
    components: {
      MeCommonCell
    },
    computed: {
      ...mapActions(['logout'])
    },
    methods: {
      dealClickCell(props) {
        Toast(props)
      },
      dealLogout() {
        MessageBox.confirm('确定退出').then(action => {
          if ('confirm' === action) {
            this.logout
            this.$router.replace('/me')
          }
        })
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .me-setting
    width 100%
    height 100%
    background-color #eee

    .logout
      height: 40px
      line-height: 40px
      background-color: #fff
      margin-top: 10px
      font-size 15px
      color: #666
      text-align: center
</style>