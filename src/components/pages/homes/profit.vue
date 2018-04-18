<template>
  <div class="page">
     
      <mt-navbar class="page-part" v-model="selected" fixed>  
          <mt-tab-item id="1">图书</mt-tab-item>  
          <mt-tab-item id="2">漫画</mt-tab-item>  
          <mt-tab-item id="3">小说</mt-tab-item>  
          <mt-tab-item id="4">杂志</mt-tab-item>  
      </mt-navbar>  
  
  
    <!-- tabcontainer -->  
    <mt-tab-container v-model="selected" swipeable>  
      <mt-tab-container-item id="1">  
        <div class="title_books">
          <img src="../../../assets/images/profit_icon1.png" alt="">
          <p>图书</p>
        </div>
        <div class="container">
            <router-link to="/newBook">
                <div class="books_story">
                    <div class="books_story_con">
                        <p>小说</p>
                        <p>1322</p>
                    </div>
                    <img src="../../../assets/images/liu.jpg" alt="">
                </div>
            </router-link>
            <div class="books_story">
                <div class="books_story_con">
                    <p>小说</p>
                    <p>1322</p>
                </div>
                <img src="../../../assets/images/liu.jpg" alt="">
            </div>
        </div>

        <div class="title_books">
          <img src="../../../assets/images/profit_icon2.png" alt="">
          <p>图书</p>
        </div>
        <div class="container">
            <div class="books_story">
                <div class="books_story_con">
                    <p>小说</p>
                    <p>1322</p>
                </div>
                <img src="../../../assets/images/liu.jpg" alt="">
            </div>
            <div class="books_story">
                <div class="books_story_con">
                    <p>小说</p>
                    <p>1322</p>
                </div>
                <img src="../../../assets/images/liu.jpg" alt="">
            </div>
        </div>
      </mt-tab-container-item>  

      <mt-tab-container-item id="2">  
            <div class="title_books">
                <img src="../../../assets/images/profit_icon2.png" alt="">
                <p>图书</p>
            </div>
            <div class="container">
                <router-link to="/newBook">
                    <div class="books_story">
                        <div class="books_story_con">
                            <p>小说</p>
                            <p>1322</p>
                        </div>
                        <img src="../../../assets/images/liu.jpg" alt="">
                    </div>
                </router-link>
              <div class="books_story">
                  <div class="books_story_con">
                      <p>小说</p>
                      <p>1322</p>
                  </div>
                  <img src="../../../assets/images/liu.jpg" alt="">
              </div>
          </div>
      </mt-tab-container-item>  
      <mt-tab-container-item id="3">  
          <div class="title_books">
            <img src="../../../assets/images/profit_icon3.png" alt="">
            <p>图书</p>
          </div>
          <div class="container">
              <div class="books_story">
                  <div class="books_story_con">
                      <p>小说</p>
                      <p>1322</p>
                  </div>
                  <img src="../../../assets/images/liu.jpg" alt="">
              </div>
              <div class="books_story">
                  <div class="books_story_con">
                      <p>小说</p>
                      <p>1322</p>
                  </div>
                  <img src="../../../assets/images/liu.jpg" alt="">
              </div>
          </div> 
      </mt-tab-container-item>  
      <mt-tab-container-item id="4">  
          <div class="title_books">
            <img src="../../../assets/images/profit_icon4.png" alt="">
            <p>图书</p>
          </div>
          <div class="container">
              <div class="books_story">
                  <div class="books_story_con">
                      <p>小说</p>
                      <p>1322</p>
                  </div>
                  <img src="../../../assets/images/liu.jpg" alt="">
              </div>
              <div class="books_story">
                  <div class="books_story_con">
                      <p>小说</p>
                      <p>1322</p>
                  </div>
                  <img src="../../../assets/images/liu.jpg" alt="">
              </div>
          </div>
      </mt-tab-container-item> 
    </mt-tab-container> 
      
  </div>
</template>
<script>
export default {
  name:'page',

  data(){
    return {
      value:'',
      selected:'1',
    }
  }
}
</script>
<style scoped>
a{
    color: #fff;
}
.page{
  width: 100%;
  min-height: 20rem;
    background-image: url("../../../assets/images/bg-background.png"); 
    background-position: center center; 
    background-repeat: no-repeat; 
    background-attachment: fixed;
    background-size: cover; 
    color: #fff;
}
.mint-tab-container {
    margin-top: 1rem;
}
.mint-navbar {
    border-bottom: 1px solid #eee;
    background-color: rgba(255, 255, 255, 0.2);
}
.mint-navbar .mint-tab-item.is-selected {
    border-bottom: none;
}
.title_books{
  border-bottom: 1px solid #eee;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
  margin-top: 0.2rem;
  padding-bottom: 0.2rem;
}
.title_books img{
  width: 0.4rem;
  margin: 0.2rem;
}
.title_books p{
  margin-left: 0.8rem;
  margin-top: -0.6rem;
}
.books_story{
  width: 45.5%;
  float: left;
  margin-left: 0.18rem;
  border: 1px solid #ccc;
  margin-top: 0.15rem;
  background-color: rgba(255, 255, 255, 0.2);
}
.books_story_con{
  margin-left: 0.5rem;
  padding-top:0.4rem;
  line-height: 0.4rem;
}
.books_story img{
  width: 0.9rem;
  height: 1.2rem;
  margin-left: 2rem;
  margin-top: -1rem;
}
</style>



