<template>
  <div class="login">
    <div class="bottom">
      <img src="./images/logo.png" width="200">
    </div>
    <!--    <h4>选择登录方式</h4>-->
    <router-link tag="button" to="/login">登录</router-link>
  </div>
</template>

<script>
  export default {
    name: "Login",
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .login
    background-color: #fff
    width: 100%
    height: 100%
    position: fixed
    left: 0
    top: 0
    z-index 998
    display: flex
    flex-direction column
    justify-content: center
    align-items: center

    button
      width: 60%
      height: 40px
      background-color: palevioletred
      border none
      border-radius 5px
      font-size 17px
      color: #fff
      margin-top: 30px

    .bottom
      position: fixed
      top 100px
      left: 50%
      margin-left: -100px
</style>