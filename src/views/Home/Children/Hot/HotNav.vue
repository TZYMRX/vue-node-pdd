<template>
  <div id="hot-nav">
    <!-- 滚动区域 -->
    <div class="hot-nav-content" v-if="homenav.length>0">
      <div class="nav-content-inner">
        <a class="inner-item" v-for="(nav,index) in homenav" :key="index">
          <img :src="nav.iconurl">
          <span>{{nav.icontitle}}</span>
        </a>
      </div>
    </div>
    <!-- 进度条 -->
    <div class="hot-nav-bottom">
      <div class="hot-nav-bottom-inner" :style="innerBarStyle"/>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: "HotNav",
    data() {
      return {
        // 屏幕宽度
        scrennW: window.innerHeight || document.documentElement.clientWidth || document.body.clientWidth,
        // 滚动内容的宽度
        scrollContentW: 720,
        // 滚动条背景的长度
        bgBarW: 100,
        // 滚动条的长度
        barXWidth: 0,

        // 起点
        startX: 0,
        // 记录结束点
        endFlag: 0,
        // 移动的距离
        barMoveWidth: 0
      }
    },
    computed: {
      ...mapState(['homenav']),

      innerBarStyle() {
        return {
          width: `${this.barXWidth}px`,
          left: `${this.barMoveWidth}px`
        }
      }
    },
    mounted() {
      this.getBottomBarWidth()
      this.btnEvent()
    },
    methods: {
      // 获取滚动条的长度
      getBottomBarWidth() {
        const {bgBarW, scrennW, scrollContentW} = this
        this.barXWidth = bgBarW * (scrennW / scrollContentW)
      },
      // 移动端事件监听
      btnEvent() {
        this.$el.addEventListener('touchstart', this.handleTouchStart, false)
        this.$el.addEventListener('touchmove', this.handleTouchMove, false)
        this.$el.addEventListener('touchend', this.handleTouchEnd, false)
      },
      // 开始触摸
      handleTouchStart(event) {
        // 获取第一个触点
        let touch = event.touches[0]
        // 求出起始点
        this.startX = Number(touch.pageX)
      },
      // 开始移动
      handleTouchMove(event) {
        // 获取第一个触点
        let touch = event.touches[0]
        // 求出移动距离
        let moveWidth = Number(touch.pageX) - this.startX
        // 求出滚动条走的距离
        this.barMoveWidth = -((this.bgBarW / this.scrollContentW) * moveWidth - this.endFlag)
        // 边境值
        if (this.barMoveWidth <= 0) { // 左
          this.barMoveWidth = 0
        } else if (this.barMoveWidth >= this.bgBarW - this.barXWidth) {  //右
          this.barMoveWidth = this.bgBarW - this.barXWidth
        }
      },
      // 结束触摸
      handleTouchEnd() {
        this.endFlag = this.barMoveWidth
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  @import "stylus/hotnav.styl"
</style>
