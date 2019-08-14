
<template>
	<div class="loginContainer">
		<div class="loginInner">
			<div class="login_header">
				<h2 class="login_logo">硅谷外卖</h2>
				<div class="login_header_title">
					<a href="javascript:;" :class="{on: loginWay}" @click="loginWay=true">短信登录</a>
					<a href="javascript:;" :class="{on: !loginWay}" @click="loginWay=false">密码登录</a>
				</div>
			</div>
			<div class="login_content">
				<form @submit.prevent="login">
					<div :class="{on: loginWay}">
						<section class="login_message">
							<input type="tel" maxlength="11" placeholder="手机号" v-model="phone">
							<button
								class="get_verification"
								:disabled="!rightPhone"
								:class="{right_phone: rightPhone}"
								@click.prevent="getCode"
							>{{ computerTime>0 ? `已发送(${computerTime}s)` : '获取验证码'}}</button>
						</section>
						<section class="login_verification">
							<input type="tel" maxlength="8" placeholder="验证码" v-model="code">
						</section>
						<section class="login_hint">
							温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
							<a href="javascript:;">《用户服务协议》</a>
						</section>
					</div>
					<div :class="{on: !loginWay}">
						<section>
							<section class="login_message">
								<input type="text" maxlength="11" placeholder="手机/邮箱/用户名" v-model="name">
							</section>
							<section class="login_verification">
								<input type="text" maxlength="8" placeholder="密码" v-if="showPwd" v-model="pwd">
								<input type="password" maxlength="8" placeholder="密码" v-else v-model="pwd">
								<div class="switch_button" :class="showPwd? 'on' : 'off'" @click="showPwd=!showPwd">
									<div class="switch_circle" :class="{right: showPwd}"></div>
									<span class="switch_text">{{ showPwd? 'abc' : '...' }}</span>
								</div>
							</section>
							<section class="login_message">
								<input type="text" maxlength="11" placeholder="验证码" v-model="captcha">
								<img class="get_verification" src="http://vueshop.glbuys.com/api/vcode/chkcode?token=1ec949a15fb709370f" alt="captcha" @click="getCap">
							</section>
						</section>
					</div>
					<button class="login_submit">登录</button>
				</form>
				<a href="javascript:;" class="about_us">关于我们</a>
			</div>
			<span href="javascript:" class="go_back" @click="$router.back()">
				<i class="iconfont iconleft"></i>
			</span>
		</div>
		<alertTip :alertText="alertText" v-show="alertShow" @closeTip="closeTip"></alertTip>
	</div>
</template>

<script>
import { clearInterval } from "timers";

import Vue from "vue";
import { Switch } from "mint-ui";
import "mint-ui/lib/style.css";

import alertTip from "../../components/AlertTip/AlertTip.vue";

import {reqSendCode, reqSmsLogin, reqPwdLogin} from '../../api'

Vue.component(Switch.name, Switch);

export default {
  props: [""],
  data() {
    return {
      loginWay: true, // true代表的是登录 false代表的是密码
      phone: "", // 手机号
      computerTime: 0, // 计时
      code: "", // 短信验证码
      showPwd: false,
      name: "", // 用户名
      captcha: "", // 验证码
      pwd: "", // 密码
      alertText: "", // 提示文本
      alertShow: false // 是否显示提示框
    };
  },
  computed: {
    rightPhone() {
      return /^1\d{10}$/.test(this.phone);
    }
  },
  components: {
    alertTip
  },

  methods: {
    // 异步获取短信验证码
    async getCode() {
      // 如果当前没有计时
      if (!this.computerTime) {
        // 启动倒计时
        this.computerTime = 30;
        this.intervalID = setInterval(() => {
          this.computerTime--;
          if (this.computerTime <= 0) {
            // 停止计时
            clearInterval(this.intervalID);
          }
        }, 1000);

        const result = await reqSendCode(this.phone)
        if (result.code === 1) {
          // 显示提示
          this.showAlert(result.msg)
          // 停止倒计时
          if (this.computerTime) {
            this.computerTime = 0
            clearInterval(this.intervalID)
            this.intervalID = undefined
            console.log(reqSmsLogin + reqPwdLogin);
          }
        }
      }

      // 发送ajax请求
    },
    showAlert(alertText) {
      this.alertShow = true
      this.alertText = alertText
    },
    login() {
      // 前台表单验证
      if (this.loginWay) {
        // 短信登录
        const { rightPhone, phone, code } = this;
        if (!this.rightPhone) {
          // 手机号不正确
          this.showAlert('手机号不正确')
          console.log(rightPhone + phone);
        } else if (/^\d{6}$/.test(code)) {
          // 验证码不正确
          this.showAlert('验证码不正确')
        }
      } else {
        // 密码登录
        const { name, pwd, captcha } = this;
        if (!this.name) {
          // 用户名必须指定
          this.showAlert('用户名必须指定')
        } else if (!this.pwd) {
          // 密码必须指定
          this.showAlert('密码必须指定')
        } else if (!this.captcha) {
          // 验证码必须指定
          this.showAlert('验证吗必须指定')
        }
        console.log(name + pwd + captcha);
      }
    },
    closeTip() {
      this.alertShow = false
      this.alertText = ''
    },
    getCap(event) {
      event.target.src = 'http://vueshop.glbuys.com/api/vcode/chkcode?token=1ec949a15fb709370f&nowtime=' + Date.now()
    }
  },
  mounted() {
  }
};
</script>
<style lang='stylus' rel='stylusheet/stylus'>
@import '../../common/stylus/mixins.styl'

.loginContainer
	width 100%
	height 100%
	background #fff
	.loginInner
		padding-top 60px
		width 80%
		margin 0 auto
		.login_header
			.login_logo
				font-size 40px
				font-weight bold
				color #02a774
				text-align center
			.login_header_title
				padding-top 40px
				text-align center
				>a
					color #333
					font-size 14px
					padding-bottom 4px
					&:first-child
						margin-right 40px
					&.on
						color #02a774
						font-weight 700
						border-bottom 2px solid #02a774
		.login_content
			>form
				>div
					display none
					&.on
						display block
					input
						width 100%
						height 100%
						padding-left 10px
						box-sizing border-box
						border 1px solid #ddd
						border-radius 4px
						outline 0
						font 400 14px Arial
						&:focus
							border 1px solid #02a774
					.login_message
						position relative
						margin-top 16px
						height 48px
						font-size 14px
						background #fff
						.get_verification
							width 90px
							height 35px
							position absolute
							top 50%
							right 10px
							transform translateY(-50%)
							border 0
							color #ccc
							font-size 14px
							background transparent
							&.right_phone
								color black
					.login_verification
						position relative
						margin-top 16px
						height 48px
						font-size 14px
						background #fff
						.switch_button
							font-size 12px
							border 1px solid #ddd
							border-radius 8px
							transition background-color 0.3s, border-color 0.3s
							padding 0 6px
							width 30px
							height 16px
							line-height 16px
							color #fff
							position absolute
							top 50%
							right 10px
							transform translateY(-50%)
							&.off
								background #fff
								.switch_text
									float right
									color #ddd
							&.on
								background #02a774
							>.switch_circle
								position absolute
								top -1px
								left -1px
								width 16px
								height 16px
								border 1px solid #ddd
								border-radius 50%
								background #fff
								box-shadow 0 2px 4px 0 rgba(0, 0, 0, 0.1)
								transition transform 0.3s
.login_hint // 不显示这个div
	margin-top 12px
	color #999
	font-size 14px
	line-height 20px
	>a
		color #02a774
.login_submit
	display block
	width 100%
	height 42px
	margin-top 30px
	border-radius 4px
	background #4cd96f
	color #fff
	text-align center
	font-size 16px
	line-height 42px
	border 0
.about_us
	display block
	font-size 12px
	margin-top 20px
	text-align center
	color #999
.go_back
	position absolute
	top 5px
	left 5px
	width 30px
	height 30px
	>.iconfont
		font-size 20px
		color #999
</style>
