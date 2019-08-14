<template>
	<!-- <transition name="move"> -->
		<div class="yes">
			<div class="shopheader">
				<ShopHeader />
				<div class="tab">
					<div class="tab-item">
						<router-link to="/shop/goods">点餐</router-link>
					</div>
					<div class="tab-item">
						<router-link to="/shop/ratings">评价</router-link>
					</div>
					<div class="tab-item">
						<router-link to="/shop/info">商家</router-link>
					</div>
				</div>
				<router-view></router-view>
			</div>
		</div>
	<!-- </transition> -->
</template>

<script>
import ShopHeader from "../../components/ShopHeader/ShopHeader.vue";

export default {
  props: [""],
  data() {
    return {};
  },

  components: {
    ShopHeader
  },

  methods: {},
  mounted() {
    this.$store.dispatch("getShopInfo");
    this.$store.dispatch("getShopGoods");
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'

.yes
  /* 可以设置不同的进入和离开动画 */
  /* 设置持续时间和动画函数 */
  // &.move-enter-active
  //   transition: all 3.0s ease
  // &.move-leave-active
  //   transition: all 5.0s cubic-bezier(1.0, 0.5, 0.8, 1.0)
  // &.move-enter,
  // &.move-leave-to
  //   transform: translateX(10px);
  //   opacity: 0;
	.tab
		height 40px
		line-height 40px
		background #fff
		bottom-border-1px(rgba(7, 17, 27, 0.1))
		.tab-item
			float left
			width 33.33333%
			text-align center
			font-size 14px
			color rgb(77, 85, 93)
			a
				display block
				position relative
				&.router-link-active
					color #02a774
					&::after
						content ''
						position absolute
						left 50%
						bottom 1px
						width 35px
						height 2px
						transform translateX(-50%)
						background #02a774
</style>
