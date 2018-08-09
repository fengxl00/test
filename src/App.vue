<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <HelloWorld/> -->


    <!-- 第一种最简单路由 -->
    <!-- <p>
        <router-link to="/foo">Go to Foo</router-link>
        <router-link to="/bar">Go to Bar</router-link>
    </p> -->


    <!-- 第二种：动态路由匹配  -->
    <!-- <p> -->
      <!-- <router-link to="/user/first">/user/foo</router-link> -->
      <!-- <router-link to="/user/second">/user/bar</router-link> -->
      <!-- <router-link to="/user/evan/post/123">/user/evan/post/123</router-link> -->
    <!-- </p> -->

    <!-- 第三种 嵌套路由 -->
      <!-- <p>
        <router-link to="/user/foo">/user/foo</router-link>
        <router-link to="/user/foo/profile">/user/foo/profile</router-link>
        <router-link to="/user/foo/posts">/user/foo/posts</router-link>
      </p> -->


      <!-- 第四种 编程时导航 -->
      <!-- <p>编程试导航</p>
      <li  @click="$router.push('home')">a</li>
      <li  @click="$router.push({path:'user'})">b</li>
      <li  @click="$router.push({name:'abc',params:{id:123}})">c</li> -->


  <!-- 第五 路由组件传参之布尔模式 -->
    <!-- <router-link to="/user/aaa">/user/aaa</router-link>
    <router-link to="/user/bbb">/user/bbb</router-link> -->

    <!-- 六：组件过渡 -->
    <h1>Transitions</h1>
    <ul>
      <li><router-link to="/">/</router-link></li>
      <li><router-link to="/parent">/parent</router-link></li>
      <li><router-link to="/parent/foo">/parent/foo</router-link></li>
      <li><router-link to="/parent/bar">/parent/bar</router-link></li>
    </ul>
    <transition name="fade" mode="out-in">
      <router-view></router-view>      
    </transition>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  // watch:{
  //   $route(to,from){
  //     console.log("to",to)
  //     console.log(from)
  //   }
  // }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.router-link-active {
  background-color: red;
  color: #fff;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.slide-left-enter-active {
  transition: all .3s ease;
}
.slide-left-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-left-enter, .slide-left-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
  
.right-enter-active {
  animation: bounce-in .5s;
}
.right-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
