<template>
  <div class="page">
      <div>
          <div class="top_fixed">
              <div class="user-input">
                  <img src="../../../assets/images/icon_search.png" alt="" class="icon_user">
                  <input type="text" id="username" name="username" class="input-block-level" placeholder="搜索作者、书名">
              </div>
              
              <div class="btn_classify" @click="actionSheet">  
                  <img src="../../../assets/images/bill_classify.png" alt="">  
              </div>
          </div>  

          <mt-actionsheet :actions= "data" v-model="sheetVisible"></mt-actionsheet>

          <div class="all_book">
              <div class="single_book">
                  <div class="book_inner_div" @click="toRead">
                      <div>
                        <img src="../../../assets/images/liu.jpg" alt="">
                      </div>
                      <p>解忧杂货店</p>
                  </div>
              </div>
              <div class="single_book">
                  <div class="book_inner_div">
                      <div>
                        <img src="../../../assets/images/liu.jpg" alt="">
                      </div>
                      <p>解忧杂货店</p>
                  </div>
              </div>
              <div class="single_book">
                  <div class="book_inner_div">
                      <div>
                        <img src="../../../assets/images/liu.jpg" alt="">
                      </div>
                      <p>解忧杂货店</p>
                  </div>
              </div>

              <div class="single_book">
                  <div class="book_inner_div">
                      <div>
                        <img src="../../../assets/images/liu.jpg" alt="">
                      </div>
                      <p>解忧杂货店</p>
                  </div>
              </div>
              <div class="single_book">
                  <div class="book_inner_div">
                      <div>
                        <img src="../../../assets/images/liu.jpg" alt="">
                      </div>
                      <p>解忧杂货店</p>
                  </div>
              </div>
              <div class="single_book">
                  <div class="book_inner_div">
                      <div class="book_img">
                        <img src="../../../assets/images/liu.jpg" alt="">
                      </div>
                      <p>解忧杂货店</p>
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
      data: [{  
        name: '已购',  
      }, {  
        name: '显示本地图书',    
      }],  
      // action sheet 默认不显示，为false。操作sheetVisible可以控制显示与隐藏  
      sheetVisible: false  
    }
  },
  methods:{
    actionSheet: function(){   
      this.sheetVisible = true;  
    },  
    toRead(){
      this.$router.push({path:'/read'})
    } 
  }
  
}
</script>
<style scoped>
.page{
  width: 100%;
  min-height: 25rem;
  background-image: url("../../../assets/images/bg-background.png"); 
  background-position: center center; 
  background-repeat: no-repeat; 
  background-attachment: fixed;
  background-size: cover; 
  color: #fff;
}
.top_fixed{
  position:fixed;
  top:0;
  border-bottom: 1px solid rgb(70, 70, 70);
  width: 100%;
  background-color: rgb(48, 47, 47);
}
.user-input{
  background-color: rgba(255, 255, 255, 0.2);
  border: 2px solid #fff;
  margin: 0.25rem;
  width: 83.5%;
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
    margin-top: -0.4rem;
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
.btn_classify{
  width: 0.6rem;
  float: right;
  margin-top: -0.85rem;
  margin-right: 0.15rem;
}
.btn_classify img{
  width: 0.5rem;
}
.all_book{margin-top: 1rem;}
.single_book{
  width: 25%;
  float: left;
  margin-left: 0.5rem;
  margin-top: 0.5rem;
}
.book_inner_div p{
  margin-top: 0.1rem;
}
.single_book img{
  width: 1.6rem;
  height: 2.3rem;
  box-shadow: 0px 3px 3px rgb(128, 127, 127);
}

</style>

