<template>
    <div id="app">
        <router-view/>
        <!-- <child message="hello" v-on:listenToChildEvent=showMsgFromChild></child> -->
    </div>
</template>

<script>
// import child from './components/pages/Child';
export default {
  name: 'App',
  data(){
    return {
      // hello: "你好啊！"
    }
  },
  methods:{
    // showMsgFromChild(data){
    //   console.log(data);
    // }
  },
  // components:{
  //   child
  // }
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  font-family: "微软雅黑";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
}
body{
  margin: 0;
  padding: 0;
}

/* 轮播图 */
.mint-swipe-indicator.is-active {
    background-color: #fff;
}
.mint-swipe-indicators {
    left: 85%;
}
.mint-swipe-indicator{
    opacity: 0.6;
    background-color: #5b5b5b;
}
</style>
