<template>
    <div class="page">
        <div class="user-input">
            <img @click="search" src="../../assets/images/icon_search.png" alt="" class="icon_user">
            <input v-model="keywork" type="text" id="username" name="username" class="input-block-level" placeholder="搜索作者、书名">
        </div>
        <!-- 热门推荐 -->
        <div class="hot_title">热门推荐</div>
        <div class="hot_search">
            <div class="hot_book"><span>解忧杂货店</span></div>
            <div class="hot_book"><span>解货店</span></div>
            <div class="hot_book"><span>解忧杂货</span></div>
            <div class="hot_book"><span>店认为呃呃呃</span></div>
            <div class="hot_book"><span>解忧杂货店</span></div>
        </div>
        <!-- 搜索历史 -->
        <div class="history_title">搜索历史</div>
        <div v-for="(history,index) in historys" v-if='index<=3'>
            <div class="history_content">
                <img src="../../assets/images/icon_search.png" alt="" class="icon_user">
                <div class="history_book">{{history}}</div>
            </div>
        </div>
        
        <div class="delete"><p @click="deleted()">清除全部历史记录</p></div>
    </div>
</template>
<script>
export default {
    name:'page',
    data(){
        return {
           keywork:"",
           historys: [],
        }
    },
    methods:{
        search(){
            this.$router.push('/newBook/'+ this.keywork);
        },
        deleted(){
            this.$http.delete(this.BaseUrl + 'api/book/search/history/user')
            .then(
                res => {
                    console.log(1);
                    this.historys = [];
                },
                err => {
                    console.log(2);
                }

            )
        }
    },
    mounted(){
        this.$http.get(this.BaseUrl + 'api/book/search/history/user')
        .then(
            res => {
                console.log(res);
                console.log(res.body);
                this.historys = res.body;
            },
            err => {
                console.log(err);
            }
        )
    }
}
</script>

<style scoped>
.page{
    background-color: rgb(44, 43, 43);
    height: 700px;
    width: 100%;
    color: #fff;
}
.user-input{
  background-color: rgb(70, 70, 70);
  border-bottom: 2px solid #fff;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
img.icon_user{
    width: 0.6rem;
    padding-left: 0.1rem;
}
.input-block-level{
    background-color:transparent;
    color:#fff;
    font-size:0.32rem;
    height:auto;
    padding:7px;
    *width:283px;
    border: none;
}
input:focus{
    outline: none;
    background-color: transparent;
}
/* input框的字体颜色 */
::-webkit-input-placeholder {
  color: #fff;
}
:-moz-placeholder {/* Firefox 18- */
  color: #fff;
}
::-moz-placeholder{/* Firefox 19+ */
  color: #fff;
}
:-ms-input-placeholder {
  color: #fff;
}
/* 热门推荐 */
.hot_title{
    font-size: 0.35rem;
    border-bottom: 1px solid #ccc;
    padding-top: 1.5rem;
    margin-left: 0.2rem;
    padding-bottom: 0.15rem;
}
.hot_search{
    font-size: 0.3rem;
}
.hot_book{
    margin-top:0.5rem;
    float:left;
}
.hot_search span{
    background-color: rgba(255, 255, 255, 0.2);
    border: 1px solid #ccc;
    padding: 0.1rem 0.2rem;
    margin-left: 0.2rem;
    margin-top: 1rem;
}
/* 搜索历史 */
.history_title{
    font-size: 0.35rem;
    border-bottom: 1px solid #ccc;
    margin-top: 2.3rem;
    margin-left: 0.2rem;
    padding-bottom: 0.15rem;
}
.history_content{
    height: 0.8rem;
}
.history_content img{
    margin-bottom: 0rem;
}
.history_content span{
    float:right;
    margin-top: -0.55rem;
    margin-right: 0.2rem;
    font-size: 0.5rem;
}
.history_book{
    font-size: 0.35rem;
    border-bottom: 1px solid rgb(116, 115, 115);
    margin-top: -0.6rem;
    margin-left: 0.2rem;
    padding-bottom: 0.15rem;
    padding-left: 0.8rem;
}
.delete{
    font-size: 0.3rem;
    text-align: center;
    color: #ccc;
    margin-top: 0.5rem;
}
</style>

