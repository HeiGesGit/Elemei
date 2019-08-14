<template>
  <div>
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"/>

  </div>
</template>

<script>

import {mapActions} from 'vuex'
import FooterGuide from './components/FooterGuide/FooterGuide.vue'

export default {
  components: {
    FooterGuide
  },
  mounted() {
    // this.$store.dispatch('getAddress')
    this.getAddress()
    /**
     * 异步显示数据
     * 1. 使用actions里面的方法
     * 2. 读state
     * 3. 显示数据
     */
  },
  methods: {
    ...mapActions(['getAddress'])
  }
}
</script>

<style lang="stylus" rel="stylusheet/stylus">
  .app
    color red

</style>
