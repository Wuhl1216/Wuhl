<template>
    <div class="page">
        <mt-header title="热门推荐">
            <router-link to="/" slot="left">
                <mt-button >
                    <img slot="icon" src="../../assets/images/back.png" alt="">
                </mt-button>
            </router-link>
        </mt-header>

        <div style="padding-top:1rem;">
            <div class="content" @click="toDetails">
                <div class="content_left">
                    <img src="../../assets/images/liu.jpg" alt="">
                </div>
                <div class="content_right">
                    <h2>马克思传</h2>
                    <div class="right_res">【简介】重读马克思，坚定理想信念！</div>
                    <div class="right_author">张光明</div>
                    <div class="right_money">￥19.9</div>
                    <div class="add_cart">
                        <img src="../../assets/images/add.png" alt="">
                        <span>购物车</span>
                    </div>
                </div>
            </div>
            <div class="content">
                <div class="content_left">
                    <img src="../../assets/images/liu.jpg" alt="">
                </div>
                <div class="content_right">
                    <h2>马克思传</h2>
                    <div class="right_res">【简介】重读马克思，坚定理想信念！</div>
                    <div class="right_author">张光明</div>
                    <div class="right_money">￥19.9</div>
                    <div class="add_cart">
                        <img src="../../assets/images/add.png" alt="">
                        <span>购物车</span>
                    </div>
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

      }
  },
  methods:{
      toDetails(){
          this.$router.push({path:'/detail'});
      }
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
    margin-top: 0.1rem;
    color: #ccc;
}
.right_money{color: rgb(86, 170, 248);margin-top: 0.3rem;}
.add_cart{border: 1px solid #56aaf8;width: 30%; color: #56aaf8;padding: 0rem 0.2rem 0.18rem;
border-radius: 0.1rem;margin-left: 2.5rem;margin-top: -0.4rem;}
.add_cart img{width: 0.4rem;margin-top: 0.1rem;margin-bottom: -0.1rem;}
.add_cart span{margin-bottom: 0.1rem;font-size: 0.20rem;}
</style>

