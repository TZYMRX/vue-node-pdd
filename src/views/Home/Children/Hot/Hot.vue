<template>
  <div id="hot">
    <!-- 轮播图 -->
    <div class="swiper-container" v-if="homecasual.length>0">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(casual,index) in homecasual" :key="index">
          <img :src="casual.imgurl" width="100%">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>

    <!-- 中间导航 -->
    <hot-nav/>

    <!-- 广告位 -->
    <div class="hot-ad">
      <img src="../../imgs/hot_ad/home_ad.gif" width="100%" alt="">
    </div>

    <!-- 商品列表 -->
    <hot-shop-list/>
  </div>
</template>

<script>
  import HotNav from "./HotNav";
  import HotShopList from "./HotShopList";

  import Swiper from 'swiper';
  import 'swiper/swiper-bundle.min.css'

  import {
    mapState
  } from 'vuex'

  export default {
    name: "Hot",
    components: {
      HotNav,
      HotShopList
    },
    computed: {
      ...mapState(['homecasual'])
    },
    mounted() {
      // 请求轮播图数据
      this.$store.dispatch("reqHomeCasual")
      // 请求首页导航
      this.$store.dispatch('reqHomeNav')
      // 请求首页商品列表
      this.$store.dispatch('reqHomeShopList')
    },
    watch: {
      homecasual() {
        this.$nextTick(() => {
          // 创建 Swiper 实例
          new Swiper('.swiper-container', {
            loop: true,
            autoplay: true,
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
          })
        })
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  #hot
    overflow-x hidden !important
    width 100%
    height 100%
    padding-top 46px
    background $bg

    .hot-ad
      background-color: #fff;
      /*margin: 8px 0;*/
      padding: 5px;
</style>
