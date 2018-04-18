<template>
  <div>
      <!-- 分润收益奖励 -->
      <div class="top_h">
            <p class="top_title">一、分润收益奖励（月结）</p>
            <p class="top_sms">金牌创课：3000万≤商户月交易量</p>
      </div>

      <div class="share_table">
            <table border="1">
                <thead>
                    <td style="width:42%">奖项达标制度</td>
                    <td style="width:12%">奖项发放标准</td>
                    <td>奖项发放说明</td>
                </thead>
                <tr>
                    <td>0≤团队月交易量＜300万</td>
                    <td>万6</td>
                    <td rowspan="5">每位创客自己发展的客户当月产生的交易量分润</td>
                </tr>
                <tr>
                    <td>300万≤团队月交易量＜800万</td>
                    <td>万7</td>
                </tr>
                <tr>
                    <td>800万≤团队月交易量＜1500万</td>
                    <td>万8</td>
                </tr>
                <tr>
                    <td>1500万≤团队月交易量＜3000万</td>
                    <td>万9</td>
                </tr>
                <tr>
                    <td>3000万≤团队月交易量</td>
                    <td>万10</td>
                </tr>
                <tr>
                    <td>团队培养金牌创客≥1<br>非金牌创客的月总交易≥1200W</td>
                    <td rowspan="5">万1</td>
                    <td rowspan="2">团队总交易量减去交易量最小的金牌创客团队的交易量乘以万1</td>
                </tr>
                <tr>
                    <td>团队中培养金牌创客≥2<br>非金牌创客的月总交易≥1200W</td>
                </tr>
                <tr>
                    <td>团队中培养金牌创客≥1<br>非金牌拓客的月总交易量≥6000万</td>
                    
                    <td>未达到3000万的团队的交易量之和乘以万1</td>
                </tr>
                <tr>
                    <td>团队中培养金牌创客≥2<br>金牌拓客总交易量≥2亿</td>
                    
                    <td>（N-1）乘以3000万乘以万1       N为金牌创客达标个数</td>
                </tr>
                <tr>
                    <td>团队中培养金牌创客≥2<br>团队月总交易量≥3亿</td>
                    
                    <td>皇冠创客业绩量/公司所有皇冠创客总业绩量乘以公司全年交易总量乘以万1</td>
                </tr>
            </table>
      </div>

      <!-- 佣金收益奖励 -->
      <div class="top_h">
            <p class="top_title">二、佣金收益奖励</p>
            <p class="top_sms">有效创客：发展三个商户激活硬件</p>
      </div>

      <div class="share_table">
            <table border="1">
                <thead>
                    <td>奖项达标制度</td>
                    <td>奖项标准</td>
                    <td>发放时间</td>
                </thead>
                <tr>
                    <td>创客量≥100人</td>
                    <td>25000元</td>
                    <td rowspan="5">月结</td>
                </tr>
                <tr>
                    <td>50人≤创客量＜100人</td>
                    <td>10000元</td>
                </tr>
                <tr>
                    <td>30人≤创客量＜50人</td>
                    <td>5000元</td>
                </tr>
                <tr>
                    <td>10人≤创客量＜30人</td>
                    <td>1200元</td>
                </tr>
                <tr>
                    <td>5人≤创客量＜10人</td>
                    <td>500元</td>
                </tr>
            </table>
      </div>

      <div class="share_table">
            <table border="1">
                <thead>
                    <td>奖项达标制度</td>
                    <td>奖项标准</td>
                    <td>发放时间</td>
                </thead>
                <tr>
                    <td>商户激活硬件</td>
                    <td>130元/台</td>
                    <td>日结</td>
                </tr>
                
            </table>
      </div>

  </div>
</template>
<style scoped>
.top_h{
    text-align: left;
    padding: 0 0.2rem;
}
.top_title{
    font-size: 0.35rem;
    margin-top: 0.3rem;
}
.top_sms{
    font-size: 0.28rem;
    color: rgb(159, 159, 159);
    margin-top: 0.25rem;
    margin-bottom: 0rem;
}
table{
    text-align: center;
    vertical-align: middle;
    font-size: 0.28rem;
    width: 100%;
    border: 1px solid #ccc;
    line-height: 0.35rem;
}
.share_table{
    padding: 0.1rem;
    margin-top: 0.1rem;
}
thead,tr{
    border-bottom: 1px solid #ccc;
    
}
table thead{
    background-color: #f0f0f0;
    
}
td{
    border-right: 1px solid #ccc;
    vertical-align: middle;
}
table td{
    height: 0.8rem;
    padding: 4px;
}
</style>

