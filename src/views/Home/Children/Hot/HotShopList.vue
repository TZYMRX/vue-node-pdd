<template>
  <div class="shop-container" v-if="homeshoplist.length>0">
    <ul class="shop-list">
      <li class="shop-list-item" v-for="(shop,index) in homeshoplist" :key="index">
        <img :src="shop.image_url" width="100%">
        <h4 class="list-item-tittle">
          {{shop.goods_name}}
        </h4>
        <div class="list-item-bottom">
          <span class="item-price">￥{{shop.normal_price / 100}}</span>
          <span class="item-counter">{{shop.sales_tip}}</span>
          <span class="item-user">
            <img src="../../imgs/shop_list/user1.jpg">
            <img src="../../imgs/shop_list/user2.jpg">
          </span>
          <span class="item-btn">
            <button>去购买 ></button>
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: "HotShopList",
    computed: {
      ...mapState(['homeshoplist'])
    },
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .shop-container
    margin-bottom 50px
    background-color: #f5f5f5

    .shop-list
      margin: 0;
      padding: 0;

      .shop-list-item
        background-color: #fff
        display: flex
        margin-bottom: 2px
        padding: 15px 0 0 0
        flex-direction column

        .list-item-tittle
          line-height 22px
          width: 94%
          margin-left: 3%
          height: 44px
          font-size 15px
          overflow hidden

        .list-item-bottom
          margin: 0 0 10px 0
          display: flex;
          flex-direction row
          justify-content space-around
          align-items: center;

          .item-price
            font-size 18px
            text-align center
            font-weight: bolder
            color: red;
            flex: 1

          .item-counter
            flex 2
            font-size 12px
            color: #cccccc;

          .item-user
            display: flex;
            justify-content: center
            align-items: center;
            flex: 1;

            img
              width: 30px;
              border-radius 50%

            img:nth-child(2)
              margin-left: -11px

          .item-btn
            flex 2

            button
              width: 80%
              height: 34px
              font-size 14px
              color: #fff
              display: flex
              justify-content: center
              align-items: center
              margin-left: 14px
              background-color: red
              border-radius: 6px
              border none
</style>
