<template>
  <div class="wrap">
      <div class="cont_box">
          <div class="r_item">
              <span class="r_tit">书名（必填）</span>
              <input class="r_input" type="text" placeholder="请输入书名" v-model="name">
          </div>

          <div class="r_item">
              <span class="r_tit">作者（必填）</span>
              <input class="r_input" type="text" placeholder="请输入作者" v-model="author">
          </div>

          <div class="r_item">
              <span class="r_tit">价钱（必填）</span>
              <input class="r_input" type="text" placeholder="请输入价钱" v-model="price">
          </div>

          <div class="r_item">
              <span class="r_tit">书封面地址</span>
              <input class="r_input validate" type="text" placeholder="请选择" v-model="imgUrl">
              <div class="get_file">
                  <input @change="onChange" ref="inputer" type="file" class="file_none" id="id">
                  <label class="get_code codebox" for="id">选择文件</label>
                  
              </div>
          </div>

          <div class="r_item">
              <span class="r_tit">简介</span>
              <textarea class="r_textarea" name="" id="" cols="40" rows="10" placeholder="请输入简介" v-model="brief"></textarea>
          </div>

          <div class="next_box">
              <button type="button" @click="next">上传</button>
          </div>

          
      </div>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  name:'wrap',
  data(){
    return {
      name: '',
      author: '',
      brief: '',
      imgUrl: '',
      price: '',
    }
  },
  methods:{

    onChange(e){
      //模拟表单上传，formData组装数据
      let formData = new FormData();
      formData.append('file', this.$refs.inputer.files[0]);  //文件数据
      console.log(this.$refs.inputer.files[0]);
      this.$http.post(this.BaseUrl + 'api/book/upload',formData,
      {header:{'Content-Type': 'multipart/form-data'}})
      .then(
        res => {
            let result = res.body;
            console.log(result.data);
            if(result.success){
              this.imgUrl = result.data;
              Toast("上传图片成功");
            }else{
              Toast(result.msg);
            }
        },
        err => {
            console.log(err);
        }
      )
    },

    next(){
      let params = {
        name:this.name,
        author:this.author,
        brief:this.brief,
        imgIcon:this.imgUrl,
        price:this.price,
      }
      this.$http.post(this.BaseUrl + "api/book/add",params,{header:{'content-type': 'application/json;charset=UTF-8'}})
      .then(
        res => {
          console.log(res.body);
          let _res = res.body
					if(_res.success){
						Toast({
							message: "上传成功",
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

        },
        err => {
          console.log(err)
          if(err){
            Toast("上传失败");
          }
        }
      )
    }
  }
}
</script>

<style scoped>
.file_none{
  position: absolute;
  left: -9999px;
}


.wrap {
  font-size: 0.3rem;
}
.cont_box {
  margin: 0 0.6rem;
}
.cont_box .prompt {
  color: #9f9f9f;
  font-size: 0.28rem;
  padding-bottom: 0.4rem;
  padding-top: 0.3rem;
}
.cont_box .r_item {
  border-bottom: 1px solid #e5e5e5;
  height: 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
}
.cont_box .r_item .r_input {
  width: 4.6rem;
  margin-left: 0.15rem;
  border: none;
  outline: none;
  font-size: 0.3rem;
  margin-bottom: -0.2rem;
}
.cont_box .r_item .r_tit {
  width: 2rem;
  color: #000;
  font-size: 0.3rem;
  margin-bottom: -0.2rem;
}
.cont_box .r_item .validate {
  width: 2.7rem;
}
.r_textarea{
    margin-top: 4.1rem;
    margin-left: -2rem;
}
/* 验证码 */

.cont_box .r_item .get_code {
  background: #ff4545;
  font-size: 0.24rem;
  color: #fff;
}
.cont_box .r_item .code_time {
  background: #f5f5f5;
  color: #000;
  font-size: 0.24rem;
}
.cont_box .r_item .codebox {
  width: 1.58rem;
  height: 0.58rem;
  border-radius: 0.06rem;
  line-height: 0.58rem;
  text-align: center;
  position: absolute;
  right: 0;
  bottom: 0.1rem;
}
.cont_box .r_item .passinput {
  width: 3.8rem;
}
.cont_box .r_item .open_icon {
  width: 0.43rem;
  height: 0.26rem;
  position: absolute;
  right: 0.2rem;
  bottom: 0.3rem;
}
.cont_box .r_item .close_icon {
  width: 0.42rem;
  height: 0.2rem;
  position: absolute;
  right: 0.2rem;
  bottom: 0.3rem;
}
/* check-box */
.check-box {
  height: 0.4rem;
  width: 0.4rem;
}

.regular-checkbox {
  display: none;
}

.check_box_div {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 1rem;
}
.check_box_div .i_agree {
  margin-left: 0.1rem;
}
.check_box_div .islink {
  color: #ff4545;
  text-decoration:none;
}
/* 下一步 */
.next_box button {
  width: 100%;
  border-radius: 0.09rem;
  height: 0.9rem;
  outline: none;
  color: #fff;
  font-size: 0.32rem;
  background: #ff4545;
  font-weight: 500;
  border: none;
  margin-top: 4.8rem;
}
.load_box button {
  width: 100%;
  border-radius: 0.09rem;
  height: 0.9rem;
  outline: none;
  color: #ff4545;
  font-size: 0.32rem;
  background: #fff;
  font-weight: 500;
  border: 1px solid #ff4545;
  margin-top: 0.8rem;
}
</style>