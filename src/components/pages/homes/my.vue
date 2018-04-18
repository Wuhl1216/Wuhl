<template>
  <div class="wrap">
        <div class="header">
            <mt-header title="我的">
                <router-link to="/" slot="left">
                </router-link>
                <mt-button slot="right">
                    <img src="../../../assets/images/icon_the_message.png" alt="" class="icon_message">
                </mt-button>
            </mt-header>
            <div class="header_container">
                <div class="header_left"> 
                    <img src="../../../assets/images/icon_head_portrait.png" alt="" class="icon_head">
                    <div class="my_name">张三三</div>
                    <img src="../../../assets/images/icon_vip_member_gray.png" alt="" class="icon_vip">
                    <div class="super_vip">超级会员</div>
                </div>
                <div class="header_right">
                    <div>特权剩余：<span>90天</span></div>
                </div>
            </div>

        </div>
        <div class="content">
            <mt-cell title="邀请好友" is-link>
                <img slot="icon" src="../../../assets/images/icon_invite_friends.png" width="24" height="24">
            </mt-cell>
            <mt-cell title="实名认证" is-link>
                <span>审核通过</span>
                <img slot="icon" src="../../../assets/images/icon_real_name.png" width="24" height="24">
            </mt-cell>
            <mt-cell title="升级会员" is-link>
                <img slot="icon" src="../../../assets/images/vip.png" width="24" height="24">
            </mt-cell>
            <mt-cell title="我要提现" is-link>
                <img slot="icon" src="../../../assets/images/icon_cash_withdrawal.png" width="24" height="24">
            </mt-cell>
            <mt-cell title="关于我们" is-link>
                <img slot="icon" src="../../../assets/images/icon_administer.png" width="24" height="24">
            </mt-cell>
            <mt-cell title="帮助中心" is-link>
                <img slot="icon" src="../../../assets/images/icon_help_center.png" width="24" height="24">
            </mt-cell>
            <mt-cell title="安全设置" is-link>
                <img slot="icon" src="../../../assets/images/icon_setting.png" width="24" height="24">
            </mt-cell>
        </div>
    

  </div>
</template>
<script>
export default {
  name: "personal",
  data() {
    return {};
  },
  methods: {}
};
</script>
<style scoped>
.wrap{
    width: 100%;
}
.mint-header {
  /* background-color: skyblue; */
  background-color: transparent;
  font-size: 0.36rem;
  height: 0.75rem;
}
.mint-header img {
  width: 0.2rem;
  height: 0.35rem;
}
.header{
    background-image: url(../../../assets/images/my_background.png);
    background-size: 100% 100%;
    color: #fff;
}
img.icon_message{
    width:0.42rem;
    height:0.42rem;
    margin:0.22rem 0.2rem;
}
.header_container{
    margin-top: 0.4rem;
}
.icon_head{
    width: 1rem;
    height: 1rem;
    margin: 0.3rem;
    
}
.icon_vip{
    position: absolute;
    width: 0.4rem;
    margin-top: 0.9rem;
}
.my_name{
    font-size: 0.4rem;
    position: absolute;
    margin-left: 1.6rem;
    margin-top: -1.4rem;
}
.super_vip{
    font-size: 0.3rem;
    position: absolute;
    margin-top: -0.75rem;
    margin-left: 2.2rem;
}
.header_right{
    float:right;
    font-size: 0.32rem;
    margin-top: -1.35rem;
    background-image: url(../../../assets/images/member_box.png);
    background-size: 100% 100%;
    padding: 0.3rem 0.4rem;
}
.header_right span{
    color: rgb(251, 207, 29);
}
.content{
    margin-top: 7px;
    box-shadow: 0px -2px 8px #ccc;
}

</style>

