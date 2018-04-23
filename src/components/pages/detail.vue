<template>
    <div class="page">
        <mt-header title="飘洋过海来看你" :class="searchBarChange == true?'isChange':''">
            <router-link to="/newBook" slot="left">
                <mt-button >
                    <img slot="icon" src="../../assets/images/back.png" alt="">
                </mt-button>
            </router-link>
            <mt-button slot="right" @click="actionSheet">
                分享
            </mt-button>
        </mt-header>
        <mt-actionsheet :actions= "data" v-model="sheetVisible"></mt-actionsheet>

        <div class="header">
            <div class="head_outer">
                <div class="head_inner"> 
                    <img src="../../assets/images/liu.jpg" alt="">
                    <div class="head_res">
                        <div class="head_res_title">飘洋过海来看你</div>
                        <div>作者：<span>凌霜将</span></div>
                        <div><span>9.4分</span> &nbsp;&nbsp; 35人评价</div>
                        <div>3.1万人阅读</div>
                    </div>
                </div>
                <div class="btn_two">
                    <span class="btn_money">购买<i>￥9.9</i></span>
                    <span class="btn_no">免费试读</span>
                </div>
            </div>
            <div class="head_bottom">
                <span><img src="../../assets/images/icon_setting.png" alt="">加入购物车</span>
                <span><img src="../../assets/images/icon_setting.png" alt="">收藏</span>
                <span><img src="../../assets/images/icon_setting.png" alt="">下载到书架</span>
            </div>
        </div>

        <div class="res_content">
            <h2>简介</h2>
            <p>本文服务范围夫妇畏畏缩缩公司收购公司所属的的点点滴滴点点滴滴反反复复反反复复点点滴滴</p>
            <div v-show="isShowMore">
                <h2>作者简介</h2>
                <p>古古怪怪古古怪怪古古怪怪古古怪怪跟分热热热热分热热热热分热热热热分热热热热分热热热热曾多次调查的</p>
            </div>
            <div class="more_outer">
                <span class="res_more" v-text="btnMore" @click="showMore"></span>
            </div>
        </div>

        <div class="comment">
            <h2>评论</h2>
            <span class="comment_me">我要评论</span>
            <div class="comment_content">
                <div class="comment_img">
                    <img src="../../assets/images/icon_administer.png" alt="">
                </div>
                <div class="comment_res">
                    <p class="comment_res_name">悠悠是个大美女</p>
                    <p class="comment_res_con">评论的东西：斤斤计较斤斤计较斤斤计较经济叫姐姐叫姐姐</p>
                    <p class="comment_res_time">2018-03-12</p>
                </div>
            </div>
            <div class="comment_content">
                <div class="comment_img">
                    <img src="../../assets/images/icon_administer.png" alt="">
                </div>
                <div class="comment_res">
                    <p class="comment_res_name">悠悠是个大美女</p>
                    <p class="comment_res_con">评论的东西：斤斤计较斤斤计较斤斤计较经济叫姐姐叫姐姐</p>
                    <p class="comment_res_time">2018-03-12</p>
                </div>
                <div class="comment_btn_morn"><span>查看更多</span></div>
            </div>
        </div>

        <div class="footer">
            <h2>图书信息</h2>
            <p>版权方：<span>长沙大鱼文化传媒有限公司授权</span></p>
            <p>出版社：贵州人民出版社</p>
            <p>出版年：2016-09-12</p>
            <p>纸书价：28.8元</p>
            <p>丛&nbsp;&nbsp;书：一生一爱</p>
            <p>书&nbsp;&nbsp;号：423435435455</p>
            <p>分&nbsp;&nbsp;类：小说-青春</p>
        </div>

    </div>
</template>
<script>
export default {
    name:'page',
    data(){
        return {
            searchBarChange: false,
            btnMore:"查看更多",
            isShowMore:false,
            data: [{  
                name: '分享',  
            }, {  
                name: '分享到朋友圈',    
            }],  
            // action sheet 默认不显示，为false。操作sheetVisible可以控制显示与隐藏  
            sheetVisible: false  
        }
    },
    mounted(){
        window.addEventListener('scroll',this.handleScroll);
    },
    methods:{
        showMore(){
            this.isShowMore = !this.isShowMore
            if(this.isShowMore){
                this.btnMore = "隐藏内容"
            }else{
                this.btnMore = "查看更多"
            }
        },
        actionSheet: function(){   
            this.sheetVisible = true;  
        },  
        handleScroll(){
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            // console.log(scrollTop);
            if(scrollTop > 50){
                this.searchBarChange = true
            }else{
                this.searchBarChange = false
            }
        }
    },
    destroyed(){
        window.removeEventListener('scroll',this.handleScroll)
    }
}
</script>

<style scoped>
/* 脚部 */
.footer{margin-left: 0.4rem;padding-bottom: 0.5rem;line-height: 0.5rem;}
.footer h2{margin-bottom: 0.2rem;}
.footer p{color: rgb(206, 204, 204);}
.footer p span{color: rgb(86, 170, 248);}
/* 评论 */
.comment_content{margin:0.5rem;border-bottom: 1px solid rgb(59, 59, 59);}
.comment h2{
    font-size: 0.35rem;
    margin: 0.5rem 0.3rem 0.6rem;
}
.comment_me{
    float: right;
    border: 1px solid #ccc;
    padding: 0.1rem 0.2rem;
    border-radius: 0.5rem;
    margin-top:-0.9rem;
    margin-right: 0.3rem;
    font-size: 0.2rem;
}
.comment_img img{
    width: 0.8rem;
    
}
.comment_res{margin-left: 1.3rem;margin-top: -0.8rem;}
.comment_res_name{font-weight: 600;margin-bottom: 0.2rem;}
.comment_res_con{color: rgb(206, 204, 204);font-size: 0.28rem;line-height: 0.4rem;}
.comment_res_time{color: rgb(206, 204, 204);font-size: 0.2rem;margin-top: 0.3rem;margin-bottom: 0.5rem;}
.comment_btn_morn{text-align: center;margin-bottom: 0.5rem;}
.comment_btn_morn span{border: 1px solid #ccc;font-size: 0.2rem;padding: 0.1rem 0.2rem;
border-radius: 0.5rem;}


.isChange{
    background: rgb(73, 73, 73) !important;
    transition: background 0.5s ease-in-out, padding 0.5s ease-in-out;
}
.page{
    background-color: #000;
    color: #fff;
    font-size: 0.3rem;
    letter-spacing: 0.04rem;
}
.mint-header{
    background-color: rgba(255, 255, 255, 0.2);
    border-bottom: 1px solid rgb(160, 159, 159);
    box-shadow: 0 2px 2px rgb(160, 159, 159);
    position: fixed;
    top: 0;
    width: 100%;
}
.mint-button-icon img{
    width: 0.2rem;
}
.header{
    border-bottom: 1px solid #ccc;
    padding-top: 1rem;
}
.head_inner img{
    width: 2rem;
    height: 2.8rem;
    margin: 0.5rem;
}
.head_res{
    margin-left: 3rem;
    margin-top: -3.4rem;
    line-height: 0.6rem;
    margin-bottom: 1rem;
}
.head_res_title{
    font-size: 0.35rem;
}
.head_res span{
    color: rgb(86, 170, 248);
}
.btn_two{
    margin-left: 0.1rem;
    margin-bottom: 0.8rem;
}
.btn_two span{
    padding: 0.15rem 0.9rem;
    border-radius: 20px;
    margin-left: 0.2rem;
}
.btn_money{
    background-color: rgb(86, 170, 248);
}
.btn_no{
    background-color: rgba(255, 255, 255, 0.3);
}
.head_bottom{
    height: 0.65rem;
    line-height: 10px;
    padding-top: 0.35rem;
    background-color: rgba(255, 255, 255, 0.1);
}
.head_bottom span{
    margin: 0.2rem 0.3rem;
}
.head_bottom span img{
    width: 0.3rem;
    margin-right: 0.16rem;
    margin-bottom: -0.05rem;
}
.res_content{
    border-bottom: 1px solid rgb(90, 90, 90);
    padding: 0.4rem 0.35rem;
    line-height: 0.4rem;
    
}
.res_content h2{
    margin-bottom: 0.2rem;
    margin-top: 0.2rem;
}
.res_content p{
    color: rgb(206, 204, 204);
    font-size: 0.28rem;
}
.more_outer{text-align: center;margin-top: 0.6rem;color: rgb(86, 170, 248);font-size: 0.18rem;}
.res_more{border: 1px solid rgb(86, 170, 248);padding: 0.1rem 0.25rem;border-radius: 0.3rem;}
</style>

