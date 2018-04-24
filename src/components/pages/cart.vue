<template>
    <div>
        <mt-header title="购物车">
            <router-link to="/" slot="left">
                <mt-button >
                    <img slot="icon" src="../../assets/images/back.png" alt="">
                </mt-button>
            </router-link>
            <mt-button slot="right">
            </mt-button>
        </mt-header>
        <div class="page-shopping-cart" id="shopping-cart">
            <h4 class="cart-title">购物清单</h4>
            <div class="cart-product-title clearfix">
                <div class="td-check fl"><span class="check-span fl check-all" :class="{'check-true':isSelectAll}" 
                @click="selectProduct(isSelectAll)"></span>全选</div>
                <div class="td-product fl">商品</div>
            </div>
            <div class="cart-product clearfix">
                <table>
                    <tbody><tr v-for="(item,index) in productList" :key="index">
                        <td class="td-check"><span class="check-span" @click="item.select=!item.select" :class="{'check-true':item.select}"></span></td>
                        <td class="td-product"><img :src="imgUrl + item.value.imgIcon" width="80" height="98">
                            <div class="product-info">
                                <h6>{{item.value.name}}</h6>
                                <p>作者：{{item.value.author}}</p>
                            </div>
                            <div class="clearfix"></div>

                            <div class="product-num">
                                <a href="javascript:;" class="num-reduce num-do fl" @click="item.score--">-<span></span></a>
                                <input type="text" class="num-input" v-model="item.score">
                                <a href="javascript:;" class="num-add num-do fr" @click="item.score++">+<span></span></a>
                            </div>

                            <p class="red-text">单价：￥<span class="price-text">{{item.value.price/100}}</span></p>

                            <a href="javascript:;" class="product-delect" @click="deleteOneProduct(item.value.name,item.value.author)">删除</a>
                        </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="cart-product-info">
                <div style="margin-bottom:55px;">
                    <a class="delect-product" href="javascript:;" @click="deleteProduct"><span></span>删除所选商品</a>
                    <a class="keep-shopping" href="#"><span></span>继续购物</a>
                </div>
                <div class="buy_bottom">
                    <a class="btn-buy fr" href="javascript:;">去结算</a>
                    <p class="fr product-total">￥<span>{{getTotal.totalPrice}}</span></p>
                    <p class="fr check-num"><span>{{getTotal.totalNum}}</span>件商品总计：</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
    name: 'page-shopping-cart',
    data(){
        return {
            productList:[],
            imgUrl: ''
        }
    },
    mounted(){
        //为productList添加select（是否选中）字段，初始值为true
        var _this = this;
        this.productList.map(function(item){
            _this.$set(item,'select',true);
        });

        this.$http.get(this.BaseUrl + "api/book/shop/user",{header:{'content-type': 'application/json;charset=UTF-8'}})
        .then(
            res => {
                console.log(res.body);
                console.log(res);
                this.imgUrl = this.BaseUrl;
                this.productList = res.body;
                
            },
            err => {
                console.log(err);
            }
        )
    },
    computed:{
        isSelectAll(){
            //如果productList中每一条数据的select都为true，返回true，否则返回false;
            return this.productList.every(function(val){return val.select});
        },
        getTotal(){
            var _proList = this.productList.filter(function(val){return val.select});
            var totalPrice = 0;
            for(var i=0,len=_proList.length;i<len;i++){
                totalPrice+=_proList[i].score*_proList[i].price;
            }
            return {totalNum:_proList.length,totalPrice:totalPrice}
        }
    },
    methods:{
        selectProduct(_isSelect){
            for(var i=0,len = this.productList.length;i<len;i++){
                this.productList[i].select = !_isSelect;
            }
        },
        //删除已经选中(select=true)的产品      
        deleteProduct(){
            this.productList=this.productList.filter(function(item){return !item.select})
        },
        //删除单条产品
        deleteOneProduct(name,author){
            // this.productList.splice(index,1);
            this.$http.delete(this.BaseUrl + "api/book/shop/user/" + name + "/" + author)
            .then(
                res => {
                    console.log(res);
                    this.productList.splice(name,1);
                    Toast("删除成功");
                },
                err => {
                    console.log(err);
                }
            )
        }
    }
  
}
</script>

<style scoped>
/* 头部固定条 */
.mint-header{
    background-color: rgb(41, 41, 41);
    border-bottom: 1px solid rgb(160, 159, 159);
    box-shadow: 0 2px 2px rgb(160, 159, 159);
    position: fixed;
    top: 0;
    width: 100%;
}
.mint-button-icon img{
    width: 0.2rem;
}

.fl{
            float: left;
        }
        .fr{
            float: right;
        }
       blockquote, body, dd, div, dl, dt, fieldset, form, h1, h2, h3, h4, h5, h6, img, input, li, ol, p, table, td, textarea, th, ul {
            margin: 0;
            padding: 0;
        }
       .clearfix{
          zoom: 1;
       }
        .clearfix:after {
            clear: both;
        }
        .clearfix:after {
            content: '.';
            display: block;
            overflow: hidden;
            visibility: hidden;
            font-size: 0;
            line-height: 0;
            width: 0;
            height: 0;
        }
        a{
            text-decoration: none;
            color: #333;
        }
        img{vertical-align: middle;}
        .page-shopping-cart {
            font-size: 14px;
            border: 1px solid #e3e3e3;
            border-top: 2px solid #317ee7;
            margin-top: 40px; }
        .page-shopping-cart .cart-title {
            color: #317ee7;
            font-size: 16px;
            text-align: left;
            padding-left: 20px;
            line-height: 68px; }
        .page-shopping-cart .red-text {
            color: #e94826;
            margin-left: 110px;
            margin-top: -25px;}
        .product-delect{
            float: right;
            background: #e94826;
            color: #fff;
            padding: 5px 20px;
            margin-top: -23px;
        }
        .page-shopping-cart .check-span {
            display: block;
            width: 40px;
            height: 35px;
            background: url("../../assets/images/tick_gray.png") no-repeat 0 0; }
        .page-shopping-cart .check-span.check-true {
            background: url("../../assets/images/tick.png") no-repeat 0 0px; }
        .page-shopping-cart .td-check {
            width: 70px; }
        .page-shopping-cart .td-product {
            width: 460px; }
        .page-shopping-cart .td-num, .page-shopping-cart .td-price, .page-shopping-cart .td-total {
            width: 160px; }
        .page-shopping-cart .td-do {
            width: 150px; }
        .page-shopping-cart .cart-product-title {
            text-align: center;
            height: 38px;
            line-height: 38px;
            padding: 0 20px;
            background: #f7f7f7;
            border-top: 1px solid #e3e3e3;
            border-bottom: 1px solid #e3e3e3; }
        .page-shopping-cart .cart-product-title .td-product {
            text-align: center;
            font-size: 14px; 
            width: 208px;}
        .page-shopping-cart .cart-product-title .td-check {
            text-align: left; }
        .page-shopping-cart .cart-product-title .td-check .check-span {
            margin: 2px 1px 0 0; }
        .page-shopping-cart .cart-product {
            padding: 0 20px;
            text-align: center; }
        .page-shopping-cart .cart-product table {
            width: 100%;
            text-align: center;
            font-size: 14px; }
        .page-shopping-cart .cart-product table td {
            padding: 20px 0; }
        .page-shopping-cart .cart-product table tr {
            border-bottom: 1px dashed #e3e3e3; }
        .page-shopping-cart .cart-product table tr:last-child {
            border-bottom: none; }
        .page-shopping-cart .cart-product table .product-num {
            border: 1px solid #e3e3e3;
            display: inline-block;
            text-align: center;
            position: absolute;
            margin-left: 109px;
            margin-top: -55px; }
        .page-shopping-cart .cart-product table .product-num .num-do {
            width: 24px;
            height: 28px;
            display: block;
            background: #f7f7f7; }
        .page-shopping-cart .cart-product table .product-num .num-reduce span {
            background: url("../../assets/images/icon_books_1.png") no-repeat -40px -22px;
            display: block;
            width: 6px;
            height: 2px;
            margin: 13px auto 0 auto; }
        .page-shopping-cart .cart-product table .product-num .num-add span {
            background: url("../../assets/images/icon_books_1.png") no-repeat -60px -22px;
            display: block;
            width: 8px;
            height: 8px;
            margin: 10px auto 0 auto; }
        .page-shopping-cart .cart-product table .product-num .num-input {
            width: 42px;
            height: 28px;
            line-height: 28px;
            border: none;
            text-align: center; }
        .page-shopping-cart .cart-product table .td-product {
            text-align: left;
            font-size: 12px;
            line-height: 20px; }
        .page-shopping-cart .cart-product table .td-product img {
            border: 1px solid #e3e3e3;
            margin-right: 10px; }
        .page-shopping-cart .cart-product table .td-product .product-info {
            display: inline-block;
            vertical-align: middle;
            margin-top: -55px;
            margin-left: 15px; }
        .page-shopping-cart .cart-product table .td-do {
            font-size: 12px; }
        .page-shopping-cart .cart-product-info {
            height: 50px;
            line-height: 50px;
            background: #f7f7f7;
            padding-left: 20px; }
        .page-shopping-cart .cart-product-info .delect-product {
            color: #666; }
        .page-shopping-cart .cart-product-info .delect-product span {
            display: inline-block;
            vertical-align: top;
            margin: 18px 8px 0 0;
            width: 13px;
            height: 15px;
            background: url("../../assets/images/icon_books_1.png") no-repeat -60px 0; }
        .page-shopping-cart .cart-product-info .product-total {
            font-size: 14px;
            color: #e94826; }
        .page-shopping-cart .cart-product-info .product-total span {
            font-size: 20px; }
        .page-shopping-cart .cart-product-info .check-num {
            color: #333; }
        .page-shopping-cart .cart-product-info .check-num span {
            color: #e94826; }
        .page-shopping-cart .cart-product-info .keep-shopping {
            color: #666;
            margin-left: 40px; }
        .page-shopping-cart .cart-product-info .keep-shopping span {
            display: inline-block;
            vertical-align: top;
            margin: 18px 8px 0 0;
            width: 15px;
            height: 15px;
            background: url("../../assets/images/icon_books_1.png") no-repeat -40px 0; }
        .page-shopping-cart .cart-product-info .btn-buy {
            height: 50px;
            color: #fff;
            font-size: 20px;
            display: block;
            width: 110px;
            background: #ff7700;
            text-align: center;
            margin-left: 30px; }
        .page-shopping-cart .cart-worder {
            padding: 20px; }
        .page-shopping-cart .cart-worder .choose-worder {
            color: #fff;
            display: block;
            background: #39e;
            width: 140px;
            height: 40px;
            line-height: 40px;
            border-radius: 4px;
            text-align: center;
            margin-right: 20px; }
        .page-shopping-cart .cart-worder .choose-worder span {
            display: inline-block;
            vertical-align: top;
            margin: 9px 10px 0 0;
            width: 22px;
            height: 22px;
            background: url("../../assets/images/icon_books_1.png") no-repeat -92px 0; }
        .page-shopping-cart .cart-worder .worker-info {
            color: #666; }
        .page-shopping-cart .cart-worder .worker-info img {
            border-radius: 100%;
            margin-right: 10px; }
        .page-shopping-cart .cart-worder .worker-info span {
            color: #000; }

        .choose-worker-box {
            width: 620px;
            background: #fff; }
        .choose-worker-box .box-title {
            height: 40px;
            line-height: 40px;
            background: #F7F7F7;
            text-align: center;
            position: relative;
            font-size: 14px; }
        .choose-worker-box .box-title a {
            display: block;
            position: absolute;
            top: 15px;
            right: 16px;
            width: 10px;
            height: 10px;
            background: url("../../assets/images/icon_books_1.png") no-repeat -80px 0; }
        .choose-worker-box .box-title a:hover {
            background: url("../../assets/images/icon_books_1.png") no-repeat -80px -22px; }
        .choose-worker-box .worker-list {
            padding-top: 30px;
            height: 134px;
            overflow-y: auto; }
        .choose-worker-box .worker-list li {
            float: left;
            width: 25%;
            text-align: center;
            margin-bottom: 30px; }
        .choose-worker-box .worker-list li p {
            margin-top: 8px; }
        .choose-worker-box .worker-list li.cur a {
            color: #f70; }
        .choose-worker-box .worker-list li.cur a img {
            border: 1px solid #f70; }
        .choose-worker-box .worker-list li a:hover {
            color: #f70; }
        .choose-worker-box .worker-list li a:hover img {
            border: 1px solid #f70; }
        .choose-worker-box .worker-list li img {
            border: 1px solid #fff;
            border-radius: 100%; }
        .buy_bottom{
            position:fixed;bottom:0;left:0;right:0;background: #fff;
            border-top:1px solid #ccc;width: 100%;
        }
</style>

