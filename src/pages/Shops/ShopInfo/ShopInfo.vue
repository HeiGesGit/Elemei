<template>
	<div class="shop-info">
		<div class="info-content">
			<section class="section">
				<h3 class="section-title">配送信息</h3>
				<div class="delivery">
					<div>
						<span class="delivery-icon">硅谷专送</span>
						<span>由商家配送提供配送，约 40 分钟送达，距离 100m</span>
					</div>
					<div class="delivery-money">配送费￥5</div>
				</div>
			</section>
			<div class="split"></div>
			<section class="section">
				<h3 class="section-title">活动与服务</h3>
				<div class="activity">
					<div class="activity-item activity-green">
						<span class="content-tag">
							<span class="mini-tag">首单</span>
						</span>
						<span class="activity-content">新用户下单立减 17 元(不与其它活动同享)</span>
					</div>
					<div class="activity-item activity-red">
						<span class="content-tag">
							<span class="mini-tag">满减</span>
						</span>
						<span class="activity-content">满 35 减 19，满 65 减 35</span>
					</div>
					<div class="activity-item activity-orange">
						<span class="content-tag">
							<span class="mini-tag">特价</span>
						</span>
						<span class="activity-content">【立减 19.5 元】欢乐小食餐</span>
					</div>
				</div>
			</section>
			<div class="split"></div>
			<section class="section">
				<h3 class="section-title">商家实景</h3>
				<div class="pic-wrapper">
					<ul class="pic-list">
						<li class="pic-item">
							<img
								width="120"
								height="90"
								src="https://fuss10.elemecdn.com/f/7f/d1422ec824a0a9d1fb879c57ab533jpeg.jpeg"
							/>
						</li>
						<li class="pic-item">
							<img
								width="120"
								height="90"
								src="https://fuss10.elemecdn.com/f/7f/d1422ec824a0a9d1fb879c57ab533jpeg.jpeg"
							/>
						</li>
						<li class="pic-item">
							<img
								width="120"
								height="90"
								src="https://fuss10.elemecdn.com/f/7f/d1422ec824a0a9d1fb879c57ab533jpeg.jpeg"
							/>
						</li>
					</ul>
				</div>
			</section>
			<div class="split"></div>
			<section class="section">
				<h3 class="section-title">商家信息</h3>
				<ul class="detail">
					<li>
						<span class="bold">品类</span>
						<span>包子粥店</span>
					</li>
					<li>
						<span class="bold">商家电话</span>
						<span>13301083744</span>
					</li>
					<li>
						<span class="bold">地址</span>
						<span>北京市丰台区</span>
					</li>
					<li>
						<span class="bold">营业时间</span>
						<span>08:35-23:00</span>
					</li>
				</ul>
			</section>
		</div>
	</div>
</template>

<script>
export default {
  props: [""],
  data() {
    return {};
  },

  components: {},

  methods: {}
};
</script>
<style lang='stylus' rel='stylusheet/stylus'>
@import "../../../common/stylus/mixins.styl"
.shop-info
  position: absolute
  top: 195px
  bottom: 0
  left: 0
  width: 100%
  background: #fff;
  overflow: hidden
  .section
    padding 16px 14px 14px
    font-size 16px
    background-color #fff
    color #666
    border-bottom 1px solid #eee
    position relative
    .section-title
      color #000
      font-weight 700
      line-height 16px
      > .iconfont
        float right
        color #ccc
    .delivery
      margin-top 16px
      font-size 13px
      line-height 18px
      .delivery-icon
        width 55px
        font-size 11px
        margin-right 10px
        display inline-block
        text-align center
        color #fff
        background-color #0097ff
        padding 1px 0
        border-radius 4px
      .delivery-money
        margin-top 5px
    .activity
      margin-top 16px
      .activity-item
        margin-bottom 12px
        display flex
        font-size 13px
        align-items center
        &.activity-green
          .content-tag
            background-color rgb(112, 188, 70)
        &.activity-red
          .content-tag
            background-color rgb(240, 115, 115)
        &.activity-orange
          .content-tag
            background-color: rgb(241, 136, 79)
        .content-tag
          display inline-block
          border-radius 2px
          width 36px
          height: 18px
          margin-right 10px
          color #fff
          font-style normal
          position relative
          .mini-tag
            position absolute
            left 0
            top 0
            right -100%
            bottom -100%
            font-size 24px
            transform scale(.5)
            transform-origin 0 0
            display flex
            align-items center
            justify-content center
    .pic-wrapper
      width: 100%
      overflow: hidden
      white-space: nowrap
      margin-top 16px
      .pic-list
        font-size: 0
        .pic-item
          display: inline-block
          margin-right: 6px
          width: 120px
          height: 90px
          &:last-child
            margin: 0
    .detail
      margin-bottom -16px
      > li
        display flex
        justify-content space-between
        align-items center
        margin-right -10px
        padding 16px 12px 16px 0
        line-height 16px
        bottom-border-1px(#ddd)
        font-size 13px
        > .bold
          font-weight 700
          color #333
        &:last-child
          border-none()
    .split
      width: 100%
      height: 16px
      border-top: 1px solid rgba(7, 17, 27, 0.1)
      border-bottom: 1px solid rgba(7, 17, 27, 0.1)
      background: #f3f5f7
</style>
