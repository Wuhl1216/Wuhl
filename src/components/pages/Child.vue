<template>

    <div class="app">
        <h2>child子组件部分</h2>
        <p>{{message}}</p>
        <button v-on:click="sendMsgToParent">向父组件传值</button>

        <input type="text" v-model="message">

        <!-- <hr>
        <foo></foo>
        <hr>
        <bar></bar> -->

        <!-- 选项卡 -->
        <div class="tab">
            <div class="tab-tit">
                <a href="#" @click="curId=0" :class="{'cur':curId===0}">html</a>
                <a href="#" @click="curId=1" :class="{'cur':curId===1}">css</a>
                <a href="#" @click="curId=2" :class="{'cur':curId===2}">javascript</a>
                <a href="#" @click="curId=3" :class="{'cur':curId===3}">vue</a>
            </div>
            <div class="tab-con">
                <div v-show="curId===0">
                    html<br/>
                </div>
                <div v-show="curId===1">
                    css<br/>
                </div>
                <div v-show="curId===2">
                    javascript<br/>
                </div>
                <div v-show="curId===3">
                    vue<br/>
                </div>
            </div>
        </div>

       
    </div>
</template>
<script>
export default {
    name: 'app',
    props: ["message"],
    data(){
        return {
            curId: 0,
        }
    },
    methods:{
        sendMsgToParent:function(){
            this.$emit("listenToChildEvent","来自子组件信息");
        }
    },
    
    // components:{
    //     foo,
    //     bar
    // }
}

// import Vue from 'vue'
// var eventBus = new Vue({})
// var foo = {
//     template: '<div><p>the count of foo is {{fooCount}}</p>' +
//                 '<button @click="addBar">add bar\'s count</button></div>',
//     data: function() {
//         return {
//             fooCount: 0            
//         }
//     },
//     methods: {
//         addBar: function() {
//             // 触发事件
//             eventBus.$emit('addBar')    
//         }
//     },
//     mounted: function() {
//         eventBus.$on('addFoo', function(num) {
//             this.fooCount +=num
//         }.bind(this)) 
//         // 这里必须将 this 绑定在组件实例上。如果不使用 bind , 也可以使用箭头函数。
//     }
// }
// // bar 组件
// var bar = {
//     template: '<div><p>the count of bar is {{barCount}}</p>' +
//                 '<button @click="addFoo">add foo\'s count</button></div>',
//     data: function() {
//         return {
//             barCount: 0
//         }
//     },
//     methods: {
//         addFoo: function() {
//             // 触发事件，同时传递一个参数
//             eventBus.$emit('addFoo', 2)
//         }
//     },
//     // 在 组件创建的钩子函数中 监听事件
//     mounted: function() {
//         eventBus.$on('addBar', function() {
//             this.barCount++
//         }.bind(this))
//     }
// }

</script>
<style scoped>
body{
        font-family:"Microsoft YaHei";
    }
    #tab{
        width: 600px;
        margin: 0 auto;
    }
    .tab-tit{
        font-size: 0;
    }
    .tab-tit a{
        display: inline-block;
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        width: 25%;
        text-align: center;
        background: #ccc;
        color: #333;
        text-decoration: none;
    }
    .tab-tit .cur{
        background: #09f;
        color: #fff;
    }
    .tab-con div{
        border: 1px solid #ccc;
        height: 100px;
        padding-top: 20px;
    }
</style>


