<template>
  <div class="search-panel">
    <div class="search-nav">
      <div class="search-input">
        <img src="../images/search.png" width="20">
        <input ref="mySearch" type="search" placeholder="搜索">
      </div>
      <button @click="isShowSearchPanel(false)">取消</button>
    </div>
    <div class="search-content">
      <div class="title">
        <img src="../images/hot.png" width="25">
        <span>热门搜索</span>
      </div>
      <ul class="search-list">
        <li>抽纸批发</li>
        <li>浴巾可穿</li>
        <li>石榴水果</li>
        <li>富豪卷纸</li>
        <li>冰箱收纳盒</li>
        <li>毛巾衣服</li>
        <li>小白鞋增高透气</li>
        <li>连衣裙夏</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SearchPanel",
    props: {
      isShowSearchPanel: Function
    },
    mounted() {
      this.$refs.mySearch.focus()
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .search-panel
    width: 100%
    height: 100%
    background-color: #fff
    position: fixed
    left: 0
    top: 0
    z-index 1000

    .search-nav
      width 100%
      height: 60px
      border-bottom-1px(#ddd)
      padding: 0 20px
      display: flex
      flex-direction row
      justify-content: space-between
      align-items: center

      .search-input
        width: 85%
        height: 38px
        display: flex
        flex-direction row
        align-items: center
        border-radius 10px
        padding: 0 10px
        background-color: #ededed

        input
          width: 90%
          height: 90%
          padding-left: 8px
          font-size 15px
          outline: none
          background-color: transparent

      button
        font-size 15px
        color: #666
        background-color: transparent
    .search-content
      padding 30px 15px
      .title
        display: flex
        flex-direction row
        align-items: center
        color: #aaa
        margin-bottom: 10px
      .search-list
        display: flex
        flex-direction row
        flex-wrap wrap
        li
          padding: 5px
          border-radius 8px
          margin: 5px 8px
          color: #aaa
          background: #ededed
          font-weight lighter
          font-size 13px
</style>