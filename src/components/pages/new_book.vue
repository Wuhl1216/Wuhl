<template>
    <div class="page">
        <mt-header title="新书专区">
            <router-link to="/" slot="left">
                <mt-button >
                    <img slot="icon" src="../../assets/images/back.png" alt="">
                </mt-button>
            </router-link>
        </mt-header>

        <div style="padding-top:1rem;">
            <div class="content" @click="toDetails" v-for="(item ,index) in datas" :key="index">
                <div class="content_left">
                    <img :src="imgUrl + item.imgIcon" alt="">
                </div>
                <div class="content_right">
                    <h2>{{item.name}}</h2>
                    <div class="right_res">{{item.brief}}</div>
                    <div class="right_author">{{item.author}}</div>
                </div>
            </div>
            
            
        </div>
    </div>
</template>
<script>
export default {
    name:'page',
    data(){
        return {   
             datas: [],
             imgUrl: '',
        }
    },
    methods:{
        toDetails(){
            this.$router.push({path:'/detail'});
        }
    },
    mounted(){
            this.imgUrl = this.BaseUrl;
            this.$http.get(this.BaseUrl + "api/book/search/" + encodeURI(this.$route.params.author),
                this.headerJSON)
            .then(
                res => {
                    if(res.body.length == 0){
                        return;
                    }
                    console.log(res);
                    console.log(res.url);
                    let _data = res.body;
                    this.datas = _data;

                },
                err => {
                    console.log(err)
                }
            )

            this.$http.post(this.BaseUrl + "api/book/search/history/user/"+encodeURI(this.$route.params.author))
            .then(
                res => {
                    console.log(res);
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
    background-color: #000;
    height: 700px;
    color: #fff;
}
.mint-header{
    background-color: rgb(41, 41, 41);
    border-bottom: 1px solid rgb(160, 159, 159);
    box-shadow: 0 2px 2px rgb(160, 159, 159);
    position: fixed;
    top: 0;
    width: 100%;
}
.mint-button-icon img{
    width: 0.2rem;
}
.content{
    border-bottom: 1px solid rgb(160, 159, 159);
    height: 2.5rem;
}
.content_left{
    width: 2rem;
    margin-left: 0.35rem;
    margin-top: 0.2rem;
}
.content_left img{
    width: 1.8rem;
    height: 2.5rem;
}
.content_right{
    font-size: 0.3rem;
    margin-top: -2.4rem;
    padding-left: 2.5rem;
    padding-right: 0.2rem;
    margin-bottom: 0.4rem;
}
.content_right h2{
    font-size: 0.35rem;
}
.right_res{
    margin-top: 0.4rem;
    color: #ccc;
}
.right_author{
    margin-top: 0.5rem;
    color: #ccc;
}
</style>

