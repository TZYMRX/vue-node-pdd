<template>
  <div class="recommend-container" v-if="recommendshoplist.length>0">
    <ul class="recommend">
      <shop-list
              tag="li"
              v-for="(item, index) in recommendshoplist"
              :item=item
              :key="index"
      />
    </ul>
  </div>
</template>

<script>
  import ShopList from "../../components/ShopList/ShopList";
  import BScroll from 'better-scroll'
  import {Indicator} from 'mint-ui'
  import {mapState} from 'vuex'

  export default {
    name: "Recommend",
    data() {
      return {
        page: 1,
        count: 20
      }
    },
    components: {
      ShopList
    },
    computed: {
      ...mapState(['recommendshoplist'])
    },
    mounted() {
      Indicator.open()
      this.$store.dispatch('reqRecommendShopList', {
        page: this.page,
        count: this.count,
        callback: () => {
          Indicator.close()
        }
      })
    },
    methods: {
      initBScroll() {
        this.listScroll = new BScroll('.recommend-container', {
          scrollY: true,
          probeType: 3
        })
        // 监听列表滚动
        this.listScroll.on('touchEnd', (pos) => {
          // 监听下拉
          if (pos.y >= 50) {

          }
          // 监听上拉
          if (this.listScroll.maxScrollY > pos.y + 20) {
            Indicator.open()
            this.$store.dispatch('reqRecommendShopList', {
              page: this.page,
              count: this.count,
              callback: () => {
                Indicator.close()
              }
            })
          }
        })

        this.listScroll.on('scrollEnd', () => {
          this.listScroll.refresh()
        })
      }
    },
    watch: {
      recommendshoplist() {
        this.$nextTick(() => {
          // 让当前页码 +1
          this.page += 1
          // 初始化BScroll
          this.initBScroll()
        })
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .recommend-container
    background #F5F5F5
    width 100%
    height 100vh
    overflow hidden

    .recommend
      display flex
      flex-direction row
      flex-wrap wrap
      background #F5F5F5
      padding-bottom 40px
</style>
