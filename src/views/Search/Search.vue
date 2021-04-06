<template>
  <div class="search">
    <!-- 搜索导航 -->
    <search-nav :isShowSearchPanel="isShowSearchPanel"/>
    <!-- -->
    <div class="shop">
      <!-- 左 -->
      <div class="menu-wrapper">
        <ul>
          <li class="menu-item "
              v-for="(goods,index) in searchgoods"
              :key="index"
              :class="{current: index === currentIndex}"
              @click="clickLeftItem(index)"
              ref="menuList"
          >
            <span>{{goods.name}}</span>
          </li>
        </ul>
      </div>
      <!-- 右 -->
      <div class="shop-wrapper">
        <ul ref="shopsParent">
          <li class="shops-li" v-for="(goods,index1) in searchgoods" :key="index1">
            <div class="shops-title">
              <h4>{{goods.name}}</h4>
              <a href="">查看更多 ></a>
            </div>
            <ul class="phone-type" v-if="goods.tag === 'phone'">
              <li v-for="(phone,index) in goods.category" :key="index">
                <img :src="phone.icon">
              </li>
            </ul>
            <ul class="shops-item">
              <li v-for="(item,index2) in goods.items" :key="index2">
                <img :src="item.icon" alt="">
                <span>{{item.title}}</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>

    </div>
    <!-- 搜索面板 -->
    <search-panel v-if="isShow" :isShowSearchPanel="isShowSearchPanel"/>
  </div>
</template>

<script>
  import SearchNav from "./children/SearchNav";
  import SearchPanel from "./children/SearchPanel";
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'

  export default {
    name: "Search",
    data() {
      return {
        // 右侧列表滑动的Y轴坐标
        srcollY: 0,
        // 所有分类的头部位置
        rightLiTops: [],
        // 搜索面板显示
        isShow: false
      }
    },
    components: {
      SearchNav, SearchPanel
    },
    computed: {
      ...mapState(['searchgoods']),
      // 动态决定左侧哪个选项选中
      currentIndex() {
        const {srcollY, rightLiTops} = this
        // 取出索引
        return rightLiTops.findIndex((liTop, index) => {
          this._leftScroll(index)
          return srcollY >= liTop && srcollY < rightLiTops[index + 1]
        })
      }
    },
    mounted() {
      this.$store.dispatch('reqSearchGoods', () => {
        // this.initBScroll()
        // // 求出右边所有板块头部位置
        // this.initRightLiTops()
      })
    },
    methods: {
      initBScroll() {
        this.leftScroll = new BScroll('.menu-wrapper', {click: true})
        this.rightScroll = new BScroll('.shop-wrapper', {
          click: true,
          probeType: 3
        })
        // 监听右侧滑动事件
        this.rightScroll.on('scroll', (pos) => {
          this.srcollY = Math.abs(pos.y)
        })
      },

      initRightLiTops() {
        // 临时数组
        const tempArr = []
        // 记录高度
        let top = 0
        tempArr.push(top)
        // 遍历 li 标签 取出高度
        let allLis = this.$refs.shopsParent.getElementsByClassName('shops-li')
        Array.prototype.slice.call(allLis).forEach(li => {
          top += li.clientHeight
          tempArr.push(top)
        })
        // 更新数据
        this.rightLiTops = tempArr
      },

      // 点击切换右侧
      clickLeftItem(index) {
        this.srcollY = this.rightLiTops[index]
        this.rightScroll.scrollTo(0, -this.srcollY, 300)
      },
      // 左侧联动
      _leftScroll(index) {
        let menuLists = this.$refs.menuList
        let el = menuLists[index]
        this.leftScroll.scrollToElement(el, 200, 0, -100)
      },
      // 搜索面板的显示
      isShowSearchPanel(flag) {
        this.isShow = flag
      }
    },
    watch: {
      searchgoods() {
        this.$nextTick(() => {
          this.initBScroll()
          this.initRightLiTops()
        })
      }
    },
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .search
    background #f5f5f5
    width 100%
    height 100%
    overflow hidden

  .shop
    display: flex
    position: absolute
    top: 60px
    bottom: 50px
    width: 100%
    overflow hidden
    background-color #fff

    .menu-wrapper
      background-color #fafafa
      width 80px
      flex 0 0 80px

      .menu-item
        width: 100%
        height: 60px
        background-color #fafafa
        display: flex
        justify-content center
        align-items: center
        font-width: line-height
        color #666666
        position: relative

      .current
        color #e02e24

      .current::before
        content: ''
        background-color #e02e24
        width: 4px
        height 30px
        position absolute
        left: 0

    .shop-wrapper
      flex 1
      overflow hidden
      height: 100%
      background-color #fff

      .shops-title
        display: flex
        flex-direction row
        padding 0 10px
        height: 44px
        align-items: center
        justify-content space-between
        color: #999

        a
          color: #999
          text-decoration none
          font-weight lighter
          font-size 14px

      .shops-item
        display: flex
        flex-wrap wrap

        li
          display: flex
          flex-direction column
          width 33.3%
          height 90px
          justify-content: center
          align-items: center
          color: #666
          font-weight: lighter
          font-size 14px

          img
            width 60%
            height 60%
            margin-bottom: 5px

      .phone-type
        width: 100%
        display: flex
        flex-direction row
        flex-wrap wrap
        border-bottom-1px(#ccc)

        li
          display: flex
          justify-content: center
          align-items: center
          width 33.3%
          margin: 9px 0

          img
            width 70%
</style>
