<template>
  <div>
        <mt-swipe :auto="0">
            <mt-swipe-item class="swipe_1">
                <div class="swipe_content">
                    <h5 class="swipe_p">中国支付清算协会会员证</h5>
                <p class="swipe_span">2016年07月获得中国支付清算协会颁发的《中国支付清算协会会员证》。</p>
                </div>
                <img src="../../assets/images/hrt_member_card.png" alt="" class="images">
            </mt-swipe-item>
            <mt-swipe-item class="swipe_1">
                <div class="swipe_content">
                    <h5 class="swipe_p">银联卡收单外包服务机构注册登录认证</h5>
                <p class="swipe_span">2015年06月获得中国银联业务管理委员会颁发的《银联卡收单外包服务机构注册登录认证》。</p>
                </div>
                <img src="../../assets/images/hrt_certificate_receipt.png" alt="" class="images">
            </mt-swipe-item>
            <mt-swipe-item class="swipe_1">
                <div class="swipe_content">
                    <h5 class="swipe_p">支付业务许可证</h5>
                <p class="swipe_span">2017年08月获得中国人民银行颁发的《支付业务许可证》。</p>
                </div>
                <img src="../../assets/images/hrt_payment_permit.jpg" alt="" class="images">
            </mt-swipe-item>
        </mt-swipe>
  </div>
</template>
<script>
    export default{
        name:'glory',
        data () {
            return {
                
            }
        }
    }
</script>
<style scoped>
.mint-swipe-indicator.is-active {
    background-color: red !important;
}
.mint-swipe-items-wrap > div.is-active {
    background-color: rgb(248, 248, 248);
    height: 10rem;
}

.mint-swipe {
    height: 13rem;
    background-color:#fff;
}
img.images{
    height: 45%;
    width: 95%;
    position: absolute;
    z-index: 1000;
    margin-top: -10rem;
    margin-left: 0.2rem;
}
.swipe_content{
    background-color: #fff;
    text-align: left;
    padding:0.3rem 0.2rem;
    margin-top: 9rem;
}
h5.swipe_p{
    font-size: 0.36rem;
}
.swipe_span{
    font-size: 0.32rem;
    line-height: 0.5rem;
    color: rgb(159, 159, 159);
}
</style>










