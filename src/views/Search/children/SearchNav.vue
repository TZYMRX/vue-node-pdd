<template>
  <div class="search-nav">
    <a href="" class="search-nav-icon" @click.prevent="isShowSearchPanel(true)">
      <img src="../images/search.png" width="25">
      <span>搜索</span>
    </a>
  </div>
</template>

<script>
  export default {
    name: "SearchNav",
    props: {
      isShowSearchPanel: Function
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .search-nav
    width: 100%
    height: 60px
    background-color #fff
    border-bottom-1px(#ccc)
    position: fixed
    left: 0
    top: 0
    display flex
    justify-content: center
    align-items: center
    z-index: 998

    .search-nav-icon
      width: 90%
      height: 70%
      border-radius 16px
      background-color: #e8e8e8
      display: flex
      justify-content: center
      align-items: center

      span
        color: #aaa
        margin-left: 6px
        font-size 17px
        font-weight: lighter
</style>