<template>
  <div class="wrap">
      <div>
          <div class="tap_content">
              <mt-navbar v-model="selected" fixed :class="searchBarChange == true?'isChange':''">
                <div class="tap_content">
                  <mt-tab-item id="1">图书</mt-tab-item>
                  <mt-tab-item id="2">漫画</mt-tab-item>
                  <mt-tab-item id="3">小说</mt-tab-item>
                </div>
                <div class="top_search" ><img @click="clickSearch" src="../../../assets/images/icon_search.png" alt=""></div>
              </mt-navbar>
          </div>

        <!-- tab-container -->
        <mt-tab-container class="container" v-model="selected" swipeable>
          <!-- 图书 -->
            <mt-tab-container-item id="1">
                <!-- 轮播 -->
                <mt-swipe :auto="3000">
                    <mt-swipe-item>
                        <img src="../../../assets/images/index_swiper_2.jpg" alt="">
                    </mt-swipe-item>
                    <mt-swipe-item>
                        <img src="../../../assets/images/index_swiper_4.jpg" alt="">
                    </mt-swipe-item>
                </mt-swipe>

                <!-- 视觉差滚动 -->
                <div class="fixedBg">
                    <div class="classify_top">
                        <div>
                            <img @click="toNewBook" src="../../../assets/images/classify_book.png" alt="">
                            
                        </div>
                        <div>
                            <img @click="toClassify" src="../../../assets/images/classify_san.png" alt="">
                            
                        </div>
                        <div>
                            <img src="../../../assets/images/classify_music.png" alt="">
                            
                        </div>
                        <div>
                            <img src="../../../assets/images/classify_time.png" alt="">
                            
                        </div>
                        <p class="classify_p_new">新书</p>
                        <p class="classify_p_class">分类</p>
                        <p class="classify_p_fun">娱乐</p>
                        <div class="classift_p_spec"><p>特定</p></div>
                    </div>

                    <router-link to="/recommend">
                        <div class="recommend">
                            <img class="img_recommend" src="../../../assets/images/liu.jpg" alt="">
                            <h2 class="h_recommend">重磅推荐</h2>
                            <p class="p_recommend">Heavy recommendation can't be missed</p>
                            <input class="input_recommend" type="button" value="点击进入 >">
                        </div>
                        
                    </router-link>   

                </div>
                <div class="testAfter">
                    <router-link to="/recommend"><img src="../../../assets/images/index1.png" alt=""></router-link>
                    <router-link to="/recommend"><img src="../../../assets/images/index2.png" alt=""></router-link>
                    <router-link to="/recommend"><img src="../../../assets/images/index3.png" alt=""></router-link>
                    <img src="../../../assets/images/index3.png" alt="">
                    <img src="../../../assets/images/index1.png" alt="">
                    <img src="../../../assets/images/index2.png" alt="">
                </div>
                <div class="tip_p">
                    <router-link to="/recommend"><p class="tip_p1">今日推荐</p></router-link>
                    <router-link to="/recommend"><p class="tip_p2">最新上架</p></router-link>
                    <router-link to="/recommend"><p class="tip_p3">今日免费</p></router-link>
                </div>

                <div class="fixedBg2">
                    <div class="famous_people">
                        <img src="../../../assets/images/people_head.png" alt="">
                        <div class="famous_people_p1">今日名人推荐<span>5</span></div>
                        <div class="famous_people_p2">戴上墨镜,世界在你眼前就立即失去了光彩.个人的不幸往往是脆弱者观察生活的墨镜.——培根</div>
                    
                        <div class="famous_people1">
                            <img src="../../../assets/images/people_head.png" alt="">
                            <div class="famous_people_p3">胡适</div>
                            <div class="famous_people_p4">戴上墨镜,世界在你眼前就立即失去了光彩.个人的不幸往往是脆弱者观察生活的墨镜.——培根</div>
                        </div>
                        <div class="famous_people1">
                            <img src="../../../assets/images/people_head.png" alt="">
                            <div class="famous_people_p3">胡适</div>
                            <div class="famous_people_p4">戴上墨镜,世界在你眼前就立即失去了光彩.个人的不幸往往是脆弱者观察生活的墨镜.——培根</div>
                        </div>
                        <div class="famous_people1">
                            <img src="../../../assets/images/people_head.png" alt="">
                            <div class="famous_people_p3">胡适</div>
                            <div class="famous_people_p4">戴上墨镜,世界在你眼前就立即失去了光彩.个人的不幸往往是脆弱者观察生活的墨镜.——培根</div>
                        </div>
                    </div>
                </div>
            </mt-tab-container-item>

            <!-- 漫画 -->
            <mt-tab-container-item id="2">
                <div class="banner_box">
                    <div class="mode_box clearfix">
                    <div class="repayment_box f-l">
                        <div class="mode_img_box">
                        <img src="../../../assets/images/people_head.png" alt="">
                        </div>
                        
                        <div class="title">热门推荐</div>
                        
                    </div>
                    <div class="quickpay_box f-r">
                        <div class="mode_img_box">
                        <img src="../../../assets/images/people_head.png" alt="">
                        </div>
                        
                        <div class="title">精选专题</div>
                    </div>
                    </div>
                </div>
                
                <div class="detail_box">
                    <h3 class="title">东野圭谷小说集（共五册）</h3>
                    <div class="items_box">
                    
                    <div class="item clearfix">
                        <div class="item_l f-l">
                        <span class="item_tit">《白夜行》</span>
                        <span class="item_num">￥29.9</span>
                        </div>
                        <div class="item_r f-r">
                        <span class="item_tit">《白金数据》</span>
                        <span class="item_num">￥35.5</span>
                        </div>
                    </div>
                    
                    <router-link to="/recommend" tag="a"><button class="item item_but">查看更多 >></button></router-link>
                    
                    
                    </div>
                </div>
                <!-- ******************************选择 -->
                <div class="content_box">
                    <div class="select_box  clearfix">
                    <router-link to="/detail">
                        <div class="sleect_item border_r border_b f-l">
                            <div class="sl_img"><img src="../../../assets/images/people_head.png" alt=""></div>
                            <div class="sl_tit">男神是一对</div>
                            <div class="sl_title">更新至100话</div>
                        </div>
                    </router-link>
                    <div class="sleect_item border_r border_b f-l">
                        <div class="sl_img"><img src="../../../assets/images/people_head.png" alt=""></div>
                        <div class="sl_tit">我的团队</div>
                        <div class="sl_title">更新至100话</div>
                    </div>
                    <div class="sleect_item border_b f-l">
                        <div class="sl_img"><img src="../../../assets/images/people_head.png" alt=""></div>
                        <div class="sl_tit">会员升级</div>
                        <div class="sl_title">更新至100话</div>
                    </div>
                    <div class="sleect_item border_r f-l">
                        <div class="sl_img"><img src="../../../assets/images/people_head.png" alt=""></div>
                        <div class="sl_tit">金融超市</div>
                        <div class="sl_title">更新至100话</div>
                    </div>
                    <div class="sleect_item border_r f-l">
                        <div class="sl_img"><img src="../../../assets/images/people_head.png" alt=""></div>
                        <div class="sl_tit">极速贷款</div>
                        <div class="sl_title">更新至100话</div>
                    </div>
                    <div class="sleect_item f-l">
                        <div class="sl_img"><img src="../../../assets/images/people_head.png" alt=""></div>
                        <div class="sl_tit">申请信用卡</div>
                        <div class="sl_title">更新至100话</div>
                    </div>
                    </div>
                </div>

            </mt-tab-container-item>

            <!-- 小说 -->
            <mt-tab-container-item id="3">
                <div class="banner_box">
                    <div class="mode_box clearfix">
                    <div class="repayment_box f-l">
                        <div class="mode_img_box">
                        <img src="../../../assets/images/people_head.png" alt="">
                        </div>
                        
                        <div class="title">热门推荐</div>
                        
                    </div>
                    <div class="quickpay_box f-r">
                        <div class="mode_img_box">
                        <img src="../../../assets/images/people_head.png" alt="">
                        </div>
                        
                        <div class="title">精选专题</div>
                    </div>
                    </div>
                </div>
                
                <div class="detail_box">
                    <h3 class="title">东野圭谷小说集（共五册）</h3>
                    <div class="items_box">
                    
                    <div class="item clearfix">
                        <div class="item_l f-l">
                        <span class="item_tit">《白夜行》</span>
                        <span class="item_num">￥29.9</span>
                        </div>
                        <div class="item_r f-r">
                        <span class="item_tit">《白金数据》</span>
                        <span class="item_num">￥35.5</span>
                        </div>
                    </div>
                    
                    <router-link to="/recommend" tag="a"><button class="item item_but">查看更多 >></button></router-link>
                    
                    
                    </div>
                </div>
                <!-- ******************************选择 -->
                <div class="content_box">
                    <div class="select_box  clearfix">
                    <router-link to="/detail">
                        <div class="sleect_item border_r border_b f-l">
                            <div class="sl_img"><img src="../../../assets/images/people_head.png" alt=""></div>
                            <div class="sl_tit">男神是一对</div>
                            <div class="sl_title">更新至100话</div>
                        </div>
                    </router-link>
                    <div class="sleect_item border_r border_b f-l">
                        <div class="sl_img"><img src="../../../assets/images/people_head.png" alt=""></div>
                        <div class="sl_tit">我的团队</div>
                        <div class="sl_title">更新至100话</div>
                    </div>
                    <div class="sleect_item border_b f-l">
                        <div class="sl_img"><img src="../../../assets/images/people_head.png" alt=""></div>
                        <div class="sl_tit">会员升级</div>
                        <div class="sl_title">更新至100话</div>
                    </div>
                    <div class="sleect_item border_r f-l">
                        <div class="sl_img"><img src="../../../assets/images/people_head.png" alt=""></div>
                        <div class="sl_tit">金融超市</div>
                        <div class="sl_title">更新至100话</div>
                    </div>
                    <div class="sleect_item border_r f-l">
                        <div class="sl_img"><img src="../../../assets/images/people_head.png" alt=""></div>
                        <div class="sl_tit">极速贷款</div>
                        <div class="sl_title">更新至100话</div>
                    </div>
                    <div class="sleect_item f-l">
                        <div class="sl_img"><img src="../../../assets/images/people_head.png" alt=""></div>
                        <div class="sl_tit">申请信用卡</div>
                        <div class="sl_title">更新至100话</div>
                    </div>
                    </div>
                </div>


                
                
            </mt-tab-container-item>
        </mt-tab-container>
      </div>

  </div>
</template>
<script>

export default {
  name:'wrap',
  data(){
    return {
      selected:'1',
      searchBarChange: false
    }
  },
  mounted(){
      window.addEventListener('scroll',this.handleScroll);
  },
  methods:{
      handleScroll(){
          var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        //   console.log(scrollTop);
          if(scrollTop > 50){
              this.searchBarChange = true
          }else{
              this.searchBarChange = false
          }
      },
      clickSearch(){
          this.$router.push({path:'/search'});
      },
      toClassify(){
          this.$router.push({path:'profit'});
      },
      toNewBook(){
          this.$router.push({path:'/newBook'});
      }
  },
  destroyed(){
      window.removeEventListener('scroll',this.handleScroll)
  }
}
</script>
<style scoped>
a{
    color: #000;
}
.isChange{
    background: rgba(255, 255, 255, 0.4) !important;
    transition: background 0.5s ease-in-out, padding 0.5s ease-in-out;
}
 .fixedBg{ 
            min-height: 300px;
            background-image: url("../../../assets/images/bg-background.png"); 
            background-position: center center; 
            background-repeat: no-repeat; 
            background-attachment: fixed;
            background-size: cover; 
        }
        .fixedBg2{ 
            background-image: url("../../../assets/images/bg-background1.png"); 
            background-position: center center; 
            background-repeat: no-repeat; 
            background-attachment: fixed;
            background-size: cover; 
            color: #fff;
        }
        .famous_people{
            padding-bottom: 100px;
            color: #fff;
            margin: 0 0.2rem;
        }
        .famous_people img{
            width: 0.9rem;
            margin-top: 0.8rem;
            margin-left: 0.5rem;
        }
        .famous_people1 img{
            width: 0.8rem;
            margin-top: 0.6rem;
            margin-left: 1rem;
        }
        .famous_people_p1{
            padding-left: 1.6rem;
            padding-bottom: 0.2rem;
            margin-top: -0.6rem;
            
        }
        .famous_people_p1 span{
            color: #26a2ff;
            padding: 0.1rem;
        }
        .famous_people_p2{
            padding: 0.5rem;
            font-size: 0.25rem;
            line-height: 0.35rem;
        }
        .famous_people_p3{
            padding-left: 2.5rem;
            padding-bottom: 0.2rem;
            margin-top: -1rem;
        }
        .famous_people_p4{
            padding-left: 2.5rem;
            padding-bottom: 0.2rem;
            margin-top: -0.1rem;
            font-size: 0.2rem;
            line-height: 0.35rem;
        }
        
        .testBefore,.testAfter{
            background: rgba(0, 0, 0, 0.2);
            width: 100%;
        }
        .testAfter{
            font-size: 0;
        }
        .testAfter img{
            width: 33.33%;
            
        }
        .tip_p p{
            position: absolute;
            z-index: 1;
            margin-top: -4rem;
            color: #fff;
        }
        .tip_p1{
            margin-left: 0.6rem;
        }
        .tip_p2{
            margin-left: 3rem;
        }
        .tip_p3{
            margin-left: 5.6rem;
        }
        h1{
            color: #fff;
            font-size: 20px;
            line-height: 30px;
        }
        .classify_top{
          padding-top: 0.2rem;
        }
        .classify_p_new{
            float: left;
            margin-left: -6.9rem;
            margin-top: 1.3rem;
        }
        .classify_p_class{
            float: left;
            margin-left: -5rem;
            margin-top: 1.3rem;
        }
        .classify_p_fun{
            float: left;
            margin-left: -3.18rem;
            margin-top: 1.3rem;
        }
        .classift_p_spec{
            text-align:right;
            padding-right:0.64rem;
            padding-bottom: 0.2rem;
            background: -webkit-linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.5));
            
        }
        .classify_top img{
          width: 1.86rem;
          float: left;
        }
        .classify_top p{
          color: #fff;
        }
        .recommend{
            background-color: rgba(255, 255, 255, 0.4)
        }
        .img_recommend{
            width: 2rem;
            height: 2.8rem;
            margin: 0.8rem;
        }
        .h_recommend{
            color: #fff;
            position: absolute;
            margin-left: 3.5rem;
            margin-top: -3.5rem;
        }
        .p_recommend{
            color: #000;
            position: absolute;
            margin-left: 3.5rem;
            margin-top: -2.8rem;
        }
        .input_recommend{
            padding: 0.2rem 0.4rem;
            border: 1px solid #000;
            background-color: transparent;
            position: absolute;
            margin-top: 2.6rem;
        }
.top_search img{
    width: 14%;
    float: right;
    margin-top: 0.15rem;
}
.tap_content{
  width: 40%;
  display: flex;
}
.mint-navbar {
    background-color: rgba(0, 0, 0, 0.3);
    width: 100%;
    height: 0.8rem;
}
.mint-navbar a{
  color: #fff;
}
.mint-navbar .mint-tab-item.is-selected {
    border-bottom: 3px solid #26a2ff;
    color: #26a2ff;
    margin-bottom: -3px;
    
}
/* 轮播 */
.mint-swipe {
    overflow: hidden;
    position: relative;
    height: 4rem;
}

.mint-swipe-items-wrap img{
    width: 100%;
    height: 100%;
}


.banner_box{background: #121216;width: 7.5rem;height: 3.2rem;padding-top: 0.7rem;}
.clearfix{height: 0.8rem;margin-top: 1.5rem;}
.mode_box{width: 4.90rem;height: 1.9rem;margin:0.3rem auto;}
.repayment_box, .quickpay_box{width: 1.55rem;height: 1.90rem;text-align: center;color: #fff;font-size: 0.28rem;}
.mode_img_box{width: 1.20rem;height: 1.20rem;border-radius: 0.12rem;background: #2f2f39;margin-left: 0.175rem;}
.repayment_box img{width:0.86rem;height: 0.75rem; margin-top: 0.2rem;}
.quickpay_box img{width: 0.75rem;height: 0.75rem;margin-top: 0.25rem;}
.quickpay_box .title, .repayment_box .title{margin-top: 0.1rem;line-height: 0.35rem;}
/* 详情 */
.detail_box{width: 6.9rem;height: 4.72rem;border-radius: 0.15rem;background: #fff;margin-left: -3.45rem;;position: absolute;top:3rem;left:50%;}
.detail_box::after{
  width: 0;height: 0;position: absolute;
  top:-0.3rem;left: 1.45rem;content: "";
  border-right: 0.3rem solid transparent;
  border-left:0.3rem solid transparent;
  border-bottom: 0.3rem solid #fff;
}
.detail_box .title{text-align: center;font-size: 0.32rem;margin-top: 0.5rem;}
.items_box{width: 6.22rem;padding:0 0.34rem;color: #000;}
.items_box .item{width: 100%; text-align: center; }
.items_box .item .item_l, .items_box .item .item_r{width: 3.1rem;height: 1.1rem;margin-top: -1.1rem;}
.items_box .item .item_l{border-right: 1px solid #ccc;}
.item_tit{color: #909090;font-size: 0.3rem;margin-top: 0.1rem;display: block;width: 100%;}
.item_num{display: block;width: 100%;color: #f52735;margin-top: 0.1rem;font-size: 0.5rem;}
.item_but{color: #fff;font-size: 0.34rem;background: #f52735;height: 0.88rem;border-radius: 0.08rem;border:none;}
/* 选择 */
.content_box{background: #f2f2f2;width: 7.5rem;box-sizing: border-box;padding: 0.3rem;}
.select_box{width:100%;height: 4.3rem;margin-top: 3.8rem;background: #fff;border-radius: 0.15rem;}
.sleect_item{width:2.26rem;height: 1.9rem;font-size: 0.32rem; text-align: center;}
.sleect_item .sl_img{width: 100%;margin-top: 0.5rem;}
.sleect_item .sl_img img{width: 0.5rem;height: 0.48rem;}
.sleect_item .sl_tit{margin-top: 0.2rem;width: 100%;}
.sl_title{font-size: 0.25rem;color: #909090;padding: 0.1rem;}
.border_r{border-right: 1px solid #f2f2f2;}
.border_b{border-bottom: 1px solid #f2f2f2;padding-bottom: 0.2rem;}
.mint-tab-container-item{margin-bottom: 1rem;}
</style>



