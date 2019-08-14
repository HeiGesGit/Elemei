<template>
	<div class="msite">
		<!--首页头部-->
		<HeaderTop :title="address.name">
			<a class="header_search" slot="left">
				<i class="iconfont">&#xe601;</i>
			</a>
			<a class="header_login" slot="right">
				<span class="header_login_text">登录|注册</span>
			</a>
		</HeaderTop>
		<!--首页导航-->
		<nav class="msite_nav">
			<div class="swiper-container" v-if="categorys.length">
				<div class="swiper-wrapper">
					<div class="swiper-slide" v-for="(categorys, index) in categorysArr" :key="index">
						<a
							href="javascript:"
							class="link_to_food"
							v-for="(category, index) in categorys"
							:key="index"
						>
							<div class="food_container">
								<img :src="baseImageUrl + category.image_url">
							</div>
							<span>{{ category.title }}</span>
						</a>
					</div>
				</div>
				<!-- Add Pagination -->
				<div class="swiper-pagination"></div>
			</div>
			<img src="./images/msite_back.svg" v-else>
		</nav>

		<!--首页附近商家-->
		<div class="shoplist border-1px">
			<div class="shop_header">
				<i class="iconfont">&#xe637;</i>
				<span class="shop_header_title">附近商家</span>
			</div>
			<shop-list />
		</div>
	</div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import "swiper/dist/js/swiper.min.js";

import HeaderTop from "../../components/HeaderTop/HeaderTop.vue";
import ShopList from "../../components/ShopList/ShopList.vue";

// import BMap from "BMap";

import { mapState } from "vuex";

export default {
  props: [""],
  data() {
    return {
      baseImageUrl: "http://fuss10.elemecdn.com",
      LocationCity: "正在定位" // 给渲染层定义一个初始值
    };
  },
  computed: {
    ...mapState(["address", "categorys"]),

    /**
		 * 根据category一位数组生成一个二维数组
		 * 小数组中的元素个数最大是8
		 */
    categorysArr() {
      const { categorys } = this;
      // 准备一个空的二维数组(最大长度为8)
      const arr = [];
      // 准备一个小数组
      let minArr = [];
      // 遍历categorys
      categorys.forEach(c => {
        // 如果minArr是空的，将小数组保存到大数组中
        if (minArr.length === 8) {
          minArr = [];
        }
        // 如果当前minArr是空的，将小数保存到大数组中
        if (minArr.length === 0) {
          arr.push(minArr);
        }
        // 将当前分类保存到小数组中
        minArr.push(c);
      });
      return arr;
    }
    // 在vuex中找到这个address并且渲染到页面
  },
  components: {
    HeaderTop,
    ShopList
  },
  methods: {
    /*
		city() {
      // 定义获取城市方法
      const geolocation = new BMap.Geolocation();
      var _this = this;
      geolocation.getCurrentPosition(
        function getinfo(position) {
          let city = position.address.city; // 获取城市信息
          let province = position.address.province; // 获取省份信息
          _this.LocationCity = province + city;
          // console.log(position);
        },
        function(e) {
          _this.LocationCity = "定位失败";
        },
        { provider: "baidu" }
      );
		} */
  },
  mounted() {
    // this.city();
    this.$store.dispatch("getCategorys");
    this.$store.dispatch("getShops");
  },
  watch: {
    categorys(value) {
      // categorys数组中有数据，在异步更新界面之前执行
      // 创建swiper的实例对象
      // 使用timeout 可以实例对象，来实现轮播
      // 界面更新就创建swiper对象
      this.$nextTick(() => { // 一旦完成界面更新,立即调用
        new Swiper(".swiper-container", {
          direction: "horizontal", // 水平切换选项
          pagination: {
            el: ".swiper-pagination"
          },
          loop: true

        });
      });
    }
  }

};
</script>
<style lang='stylus' rel='stylusheet/stylus'>
// @import '../../common/stylus/mixins.styl'
.msite
	width 100%
	.header
		background-color #02a774
		position fixed
		z-index 100
		left 0
		top 0
		width 100%
		height 45px
		.header_search
			position absolute
			left 15px
			top 50%
			transform translateY(-50%)
			width 10%
			height 50%
			.icon-sousuo
				font-size 25px
				color #fff
		.header_title
			position absolute
			top 50%
			left 50%
			transform translate(-50%, -50%)
			width 50%
			color #fff
			text-align center
			.header_title_text
				font-size 20px
				color #fff
				display block
		.header_login
			font-size 14px
			color #fff
			position absolute
			right 15px
			top 50%
			transform translateY(-50%)
			.header_login_text
				color #fff
	.msite_nav
		border-bottom 1px solid #e4e4e4
		margin-top 45px
		height 200px
		background #fff
		.swiper-container
			width 100%
			height 100%
			.swiper-wrapper
				width 100%
				height 100%
				.swiper-slide
					display flex
					justify-content center
					align-items flex-start
					flex-wrap wrap
					.link_to_food
						width 25%
						.food_container
							display block
							width 100%
							text-align center
							padding-bottom 10px
							font-size 0
							img
								display inline-block
								width 50px
								height 50px
						span
							display block
							width 100%
							text-align center
							font-size 13px
							color #666
		.swiper-pagination
			>span.swiper-pagination-bullet-active
				background #02a774
	.shoplist
		border-top 1px solid #e4e4e4
		width 100%
		margin-top 10px
		background #fff
		.shop_header
			padding 10px 10px 0 10px
			.shop_icon
				margin-left 5px
				color #999
			.shop_header_title
				color #999
				font-size 14px
				line-height 20px
</style>
