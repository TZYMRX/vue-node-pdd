<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>

    <tab-bar v-show="this.$route.meta.ShowBar"/>
  </div>
</template>

<script>
  import TabBar from "./components/TabBar/TabBar";

  export default {
    name: 'App',
    created() {
      this.$store.dispatch('getUserInfo')
    },
    components: {
      TabBar
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">

</style>
