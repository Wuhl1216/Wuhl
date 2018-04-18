<template>
  <div class="page">
      <div class="form-img-outer">
		<div class="form-img-inter">

            <div class="name_head_content">
                    <img class="name_head_img" src="../../assets/images/icon_head_portrait.png" alt="">
                </div>


			<div id="large-header">

				<form id="loginForm" class="form-signin">
					<div class="input-label-all">
						<div class="user-input">
                            <img src="../../assets/images/icon_user.png" alt="" class="icon_user">
						    <input type="text" id="username" name="username" class="input-block-level" placeholder="请输入用户名" v-model="name">
                        </div>
						<div class="user-input">
							<img src="../../assets/images/icon_psd.png" alt="" class="icon_user">
							<input type="password" id="password1" name="password" class="input-block-level" placeholder="请输入密码" v-model="Password">
						</div>
                        <div class="user-input">
							<img src="../../assets/images/icon_psd.png" alt="" class="icon_user">
							<input type="password" id="password2" name="password" class="input-block-level" placeholder="请确认密码" v-model="rePassword">
						</div>
						<!-- <label class="remember-me" for="rememberMe" title="下次不需要再登录">
                            <input type="checkbox" name="rememberMe"/> 记住我（公共场所慎用）
                        </label> -->
						<div class="btn_login_con" @click="register">
                            <button type="button" class="btn_login">注册</button>
                        </div>

						<router-link to="/login">
                            <div class="to_regist">
                                <a href="">登录 >></a>
                            </div>
                        </router-link>
					</div>
				</form>
				<div class="footer">
                    <p>登录即代表阅读并同意<span>服务条款</span></p>
				</div>

			</div>
		</div>
	</div>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
    name:'page',
    data(){
        return {
            name: "",
            rePassword:"",
            Password:""
        }
    },
    methods:{
        register(){
            if (this.name == "") {
                Toast({
                    message: "帐号不能为空",
                    position: "middle",
                    duration: 2000
                });
                return;
            }

            let params = {
                account: this.name,
                password: this.Password
                
            }
            this.$http.post(this.BaseUrl + "api/user/register",params,this.headerJSON)
            .then(
                res => {
                console.log(res);
                let _res = res.body;
                if(_res.success){
                    Toast({
                        message: "注册成功",
                        position: "middle",
                        duration: 2000
                    })
                }else{
                    Toast({
                        message: _res.msg,
                        position: "middle",
                        duration: 2000
                    })
                }
                this.$router.push({path:'/login'});
                
                },
                err => {
                console.log(err);
                }
            )

            return false;
        }
    }
}
</script>

<style scoped>
@import '../../assets/css/nightStyle.css';
</style>







