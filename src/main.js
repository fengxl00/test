// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueRouter from 'vue-router'
Vue.use(VueRouter);

Vue.config.productionTip = false
// 第一种最简单路由
// const Foo = { template: '<div>foo</div>' }
// const Bar = { template: '<div>bar</div>' }
// const routes =[
//   {path:'/foo',component:Foo},
//   {path:'/bar',component:Bar}
// ]
// const router = new VueRouter({
//   routes
// })

//第二种：动态路由匹配
// const User = {
  // template: `<div>User {{ $route.params.id}}</div>`
  // template: `<div>Username :{{ $route.params.username}} ,id：{{ $route.params.post_id}}</div>`
// }
// const router = new VueRouter({
  // routes:[
    // {path:'/user/:id',component:User},
    // {path:'/user/:username/post/:post_id',component:User},
  // ]
// })


// 第三种 路由嵌套
// const User = {
//   template: `
//     <div class="user">
//       <h2>User {{ $route.params.id }}</h2>
//       <router-view></router-view>
//     </div>
//   `
// }
// const UserHome = { template: '<div>Home</div>' }
// const UserProfile = { template: '<div>Profile</div>' }
// const UserPosts = { template: '<div>Posts</div>' }
// const router = new VueRouter({
//   routes: [
//     { path: '/user/:id', component: User,
//       children: [
//         // UserHome will be rendered inside User's <router-view>
//         // when /user/:id is matched
//         { path: '', component: UserHome },
				
//         // UserProfile will be rendered inside User's <router-view>
//         // when /user/:id/profile is matched
//         { path: 'profile', component: UserProfile },

//         // UserPosts will be rendered inside User's <router-view>
//         // when /user/:id/posts is matched
//         { path: 'posts', component: UserPosts }
//       ]
//     }
//   ]
// })

// 第四种编程试导航
// const Home = { template: '<div>home a</div>' }
// const User = { template: '<div>user b</div>' }
// const Abc = { template: '<div>abc c {{$route.params.id}}</div>' }
// const routes =[
//   {path:'/home',component:Home},
//   {path:'/user',component:User},
//   {path:'/abc/:id',name:'abc',component:Abc}
// ]
// const router = new VueRouter({
//   routes
// })


//第五 路由组件传参之布尔模式 
// (1) $route的耦合
// const User = {
//   template:'<div>User   {{$route.params.name}}</div>'
// }
// const router = new VueRouter({
//   routes:[
//     {path:'/user/:name',component:User}
//   ]
// })
// (2) 通过props的解耦方式
// 如果 props 被设置为 true，route.params 将会被设置为组件属性
// const User = {
//   props:['name'],
//   template:'<div>User  {{name}}</div>'
// }
// const router=new VueRouter({
//   routes:[
//     {path:'/user/:name',component:User,props:true}
//   ]
// })



// 六：组件过渡
const Home ={
  template:`<div class="home"><h2>Home</h2><p>hello</p></div>`
}
const Parent = {
  data () {
    return {
      transitionName: 'slide-left'
    }
  },
  // dynamically set transition based on route change
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  },
  template: `
    <div class="parent">
      <h2>Parent</h2>
      <transition :name="transitionName">
        <router-view class="child-view"></router-view>
      </transition>
    </div>
  `
}
const Default = { template: '<div class="default">default</div>' }
const Foo = { template: '<div class="foo">foo</div>' }
const Bar = { template: '<div class="bar">bar</div>' }
const router = new VueRouter({
  mode:'history',
  base:__dirname,
  routes:[
    {path:'/',component:Home},
    {path:'/parent',component:Parent,
      children:[
        {path:'',component:Default},
        {path:'foo',component:Foo},
        {path:'bar',component:Bar}
      ]
    }
  ]
})



/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App }, vue1.0的写法
//   template: '<App/>'
// })


const app = new Vue({
	router,
	render: h => h(App)//vue2.0的写法
}).$mount('#app');
