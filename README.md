

# 
## 1. 异步数据
    封装ajax：
      promise+acios封装ajax请求的函数
      封装每个接口对应的请求函数（能根据接口定义ajax请求函数）
      解决ajax的跨域问题：配置代理， 对代理的李杰
    VUEX编码
      创建所有相关的模块： store/index|state|mutations|actions|getters|mutation_types
      设计state： 从后台获取的数据
      实现actions: 
        定义异步actions ： async/await
        流程：发ajax获取数据，commit给mutation
      实现mutations： 给状态赋值
      实现index：创建store对象
      main.js： 配置store
    组件异步显示数据
      在mounted（）通过$store.dispatch('actionName')来异步获取后台数据到state中
      mapState（['XXX‘]）读取state中数据到组件中
      在模板中显示XXX的数据
    模板中显示数据的来源
      data: 自身的数据（内部改变）
      props：外部传入的数据（外部改变）
      computed： 根据data/props/别的compute/state/getters
    异步显示轮播图
      通过vuex获取foodCategory数组（发请求，获取）
      对数据进行整合计算（一维变为二维数组）
      使用swiper显示轮播，如何在界面更新之后创建swiper对象
        1）使用回调函数——$nextTick()
        2) 使用watch+$nextTick()

## 2. 登录/注册：界面相关效果
  a. 切换登录方式
  b. 手机号合法检查
  c. 倒计时效果
  d. 切换显示隐藏密码
  e. 前台验证提示

## 3. 前后台交互相关问题
    1). 如何查看你的应用是否发送某个ajax请求
        浏览器的netword
    2). 发ajax请求404
      请求的路径的对代理是否生效（配置和重启）
      服务器应用是否运行
    3). 后台返回了数据，但页面没有显示
        vuex中是否有
        组件中是否读取

## 0602日凌晨1.34
  ## 使用一下命令安装stylus依赖包
  sudo cnpm i stylus stylus-loader --save-dev

  ## stylus的准备

  ## vue模板的配置
  vd打开指令


## 0602下午7点
  ## 引入reset样式

  ## CSS Reset，意为重置默认样式。HTML中绝大部分标签元素在网页显示中都有一个默认属性值，通常为了避免重复定义元素样式，需要进行重置默认样式（CSS Reset）

  ## 完成移动端适配
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
  ## 解决移动端延迟300ms的方法
    1.下载插件
    sudo cnpm install fastclick --save
    2.导入包
    import fastClick from 'fastclick'
    3.调用插件
    fastClick.attach(document.body)

## 0603下午
  ## 底部导航栏完成
  
## 0605
  ## 1、根据经纬度获取位置详情](#1 根据经纬度获取位置详情
    通过使用百度地图api获取位置详情
  ## 2. 封装ajax请求
  
## 0613
  1. 异步显示数据
  2. 登录注册

## 0617
  完成star组件 

## 0621 
  1.  完成图形验证码功能
    http://vueshop.glbuys.com/api/vcode/chkcode?token=1ec949a15fb709370f&nowtime=1312423435
  2.

## 0626
  1. 使用mock.js模拟数据
  
## ShopHeader.vue
1.
  <!-- 如何避免在没有数据的时候解析数据 ->>info -->
  在需要显示的dom元素中添加v-if语句,可以避免在异步未成功获取的数据导致访问不到supports[0] 数组的情况
  三级表达式a.b.c 会获取不到数据，因为当时为加载完请求的数据
  <div class="discounts-left" v-if="info.supports">
    <div class="activity" :class="supportsClass[info.supports[0].type]">
      <span class="content-tag">
        <span class="mini-tag">{{info.supports[0].name}}</span>
      </span>
      <span class="activity-content ellipsis">{{info.supports[0].content}}</span>
    </div>
  </div>
2. 添加了动画
  2.1
  <transition name="fade">
    ...需要添加动画的dom
  </transition>
  2.2 设置0.5秒渐变成透明
    &.fade-enter-active, &.fade-leave-active
			transition opacity 0.5s
		&.fade-enter, &.fade-leave-to
			opacity 0

  ## 1. ShopGoods
    - 制作上下滑动分类列表
      1. 当前分类
      2. 当前分类，当滑动右侧更新当前分类
      3. 点击某个分类项，右侧滑动到对应位置
        方法：
          制作一个计算属性:currentIndex
          根据那些数据计算
            scrollY: 右侧滑动Y轴的坐标  （滑动过程时变化）
            tops: 所有右侧分类li的top组成的数组 （列表显示一次之后不再显示）
      1. 在右侧滑动中，实时显示scrollY
      2. 列表第一次显示后，手机tops
      3. 实现currentIndex计算逻辑
  ## 2. ShopGoods
    1. 动态展现列表数据
    2. 基本滑动： 
      使用better-scroll
      理解基本原理
      创建BSCroll 对象的时机
        watch + $nextTick
        callBack + $nextTick
    3. 滑动右侧列表，左侧同步更新
      better-scroll 禁用了原生的dom事件， 使用的是自定义事件
      绑定监听： scroll/scrollEnd(过程个结束)
      滚动监听的类型：probeType
      列表滑动的三种类型
        1. 手指触摸
        2. 惯性
        3. 编码
      分析：
        类名：current 标识当前分类
        设计一个计算属性： currentIndex
        根据那些数据计算
          srollY
          top
      编码:
        1. 在右侧滑动中，实时显示scrollY
        2. 列表第一次显示后，手机tops
        3. 实现currentIndex计算逻辑
    4. 点击左侧列表表现，右侧滑动到相应位置
## cartControl组件
  1. 问题：更新状态数据。对应界面不变化
     原因： 一般方法给一个已有绑定的对象添加一个新的属性， 这个属性没有数据绑定
     解决： 
      Vue.set(obj, 'xxx', value) 才有数据绑定
      this.$set(obj, 'xxx', value) 才有数据绑定

## shopCart 组件
  1. 使用Vuex管理购物项数据 ： cartFoots
  2. 解决几个功能性bug

## Food组件
  1. 父子组件：
    子组件调用父组件的方法： 通过props将方法传递给子组件
    父组件调用子组件的方法： 通过ref找到子组件标签对象

## 购物车列表的滑动
  ### 实现BScroll对象的实例是一个单例
    if (!this.scroll) {
      this.scroll = new BScroll(".list-content", {
        click: true
      });
    }else{
      this.scroll.refresh()		//让滚动条刷新一下，重新统计内容的高度
    }

## 清空购物车
  

## 基础的动画需要掌握translate
## 还有food的逻辑思维也掌握
