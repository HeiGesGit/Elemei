<template>
	<div class="cartcontrol">
    <transition name="move">
      <div class="iconfont iconjianhao" v-if="food.count" @click.stop="upDateFoodCount(false)"></div>
    </transition>
		<div class="cart-count" v-if="food.count">{{food.count}}</div>
		<div class="iconfont iconjiahao" @click.stop="upDateFoodCount(true)"></div>
	</div>
</template>

<script>
export default {
  props: {
    food: Object
  },
  data() {
    return {};
  },

  components: {},

  methods: {
    upDateFoodCount(isAdd) {
      this.$store.dispatch('upDateFoodCount', {isAdd, food: this.food});
    }
  }
};
</script>
<style lang='stylus' rel='stylusheet/stylus'>
@import "../../common/stylus/mixins.styl"
.cartcontrol
  font-size: 0
  .cart-decrease
    display: inline-block
    padding: 6px
    line-height: 24px
    font-size: 24px
    color: rgb(0, 160, 220)
  .iconjianhao
    display: inline-block
    padding 6px
    line-height: 18px
    font-size: 18px
    color $green
    &.move-enter-active, &.move-leave-active
      transition all .3s // 0.3秒过度完毕,该div全部移除
    &.move-enter, &.move-leave-to
      opacity 0   //离开后透明度变为透明
      transform translateX(15px) rotate(180deg) // 向右移动15px，并且旋转180度
  .cart-count
    display: inline-block
    vertical-align: top
    width: 12px
    padding-top: 6px
    line-height: 24px
    text-align: center
    font-size: 10px
    color: rgb(147, 153, 159)
  .iconjiahao
    display: inline-block
    padding: 6px
    line-height: 18px
    font-size: 18px
    color $green
</style>
