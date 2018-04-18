<template>
  <div class="wrap">
   
      <mt-tab-container class="page-tabbar-container" >
        <router-view></router-view>
      </mt-tab-container>
      
      <mt-tabbar v-model="selected" fixed>
        <mt-tab-item id="书城">
          <img slot="icon" :src="icon1">
         书城
        </mt-tab-item>
        <mt-tab-item id="分类">
          <img slot="icon" :src="icon2">
          分类
        </mt-tab-item>
        <mt-tab-item id="书架">
          <img slot="icon" :src="icon3">
          书架
        </mt-tab-item>
        <mt-tab-item id="我的">
          <img slot="icon" :src="icon4">
          我的
        </mt-tab-item>
      </mt-tabbar>
      
  </div>
   
</template>
<style scoped>
.mint-tab-container-wrap{display: block;}
.wrap {
  font-size: 16px;
}
.mint-tabbar {
  position: fixed;
}
.mint-tabbar > .mint-tab-item.is-selected {
    background-color: transparent;
    color:#ffa749;
}
</style>
<script>
// var cryptUtil = require("../../assets/js/utils/crypt");
// import indexPage from "./home/index";
// import BillPage from "./home/bill";
// import profitPage from "./home/profit";


export default {
  name: "home",
  data() {
    return {
      selected: "书城",
      icon1:require("../../assets/images/icon_home_2.png"),
      icon2:require("../../assets/images/icon_classify_1.png"),
      icon3:require("../../assets/images/icon_books_1.png"),
      icon4:require("../../assets/images/icon_my_1.png")
    };
  },
  // components: {
  //   indexPage,
  //   BillPage,
  //   profitPage
  // },
  mounted() {
   
  },
  watch:{
    selected (val,oldval) {
      console.log(val);
      if(val == "书城"){
        this.$router.push('main');
        this.icon1=require("../../assets/images/icon_home_2.png");
        this.icon2=require("../../assets/images/icon_classify_1.png");
        this.icon3=require("../../assets/images/icon_books_1.png");
        this.icon4=require("../../assets/images/icon_my_1.png");
      }
      if(val == "分类"){
         this.$router.push('profit');
        this.icon1=require("../../assets/images/icon_home_1.png");
        this.icon2=require("../../assets/images/icon_classify_2.png");
        this.icon3=require("../../assets/images/icon_books_1.png");
        this.icon4=require("../../assets/images/icon_my_1.png");
      }
      if(val == "书架"){
         this.$router.push('bill');
        this.icon1=require("../../assets/images/icon_home_1.png");
        this.icon2=require("../../assets/images/icon_classify_1.png");
        this.icon3=require("../../assets/images/icon_books_2.png");
        this.icon4=require("../../assets/images/icon_my_1.png");
      }
      if(val == "我的"){
         this.$router.push('my');
        this.icon1=require("../../assets/images/icon_home_1.png");
        this.icon2=require("../../assets/images/icon_classify_1.png");
        this.icon3=require("../../assets/images/icon_books_1.png");
        this.icon4=require("../../assets/images/icon_my_2.png");
      }
    }
  }
};
</script>

