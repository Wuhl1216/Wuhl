<template>
  <div>
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
						    <input v-model="name" type="text" id="username" name="username" class="input-block-level" placeholder="请输入用户名">
                        </div>
						<div class="user-input">
							<img src="../../assets/images/icon_psd.png" alt="" class="icon_user">
							<input v-model="password" type="password" id="password" name="password" class="input-block-level" placeholder="请输入密码">
						</div>
						<!-- <label class="remember-me" for="rememberMe" title="下次不需要再登录">
                            <input type="checkbox" name="rememberMe"/> 记住我（公共场所慎用）
                        </label> -->
						<div class="btn_login_con" @click="login">
                            <button type="button" class="btn_login">登录</button>
                        </div>

						<router-link to="/register">
							<div class="to_regist">
								<a href="">注册>></a>
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
	data(){
		return {
			name: "",
			password: ""
		}
	},
	methods:{
		login(){
			let params = {
				account: this.name,
				password: this.password
			}
			this.$http.post(this.BaseUrl + "api/user/login",params,
			{header:{'content-type': 'application/json;charset=UTF-8'}})
			.then(
				res => {
					console.log(res)
					let _res = res.body
					if(_res.success){
						Toast({
							message: "登录成功",
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
					this.$router.push({path:'/home/main'})
				},
				err => {
					console.log(err)
				}
			)
				
		}
	}
}
</script>

<style scoped>
@import '../../assets/css/nightStyle.css';

</style>







