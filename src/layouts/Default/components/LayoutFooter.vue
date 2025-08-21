<!--主页底部组件-->
<script setup lang="ts">

</script>

<template>
  <div class="tb-footer tb-footer-with-logo">
    <div class="tb-footer-inner">
      <div class="tb-footer-hd">
        <p>
          <div class="tb-footer-col">
            <div>
              <strong>规则协议</strong>
            </div>
            <div>
              <a href="https://rulechannel.taobao.com/?spm=tbpc.pc_sem_alimama/a.1997523009-hd.1.32372a89i3ikic#/">淘宝规则</a>
            </div>
            <div>
              <a href="https://terms.alicdn.com/legal-agreement/terms/TD/TD201609301342_19559.html?spm=tbpc.pc_sem_alimama/a.1997523009-hd.2.32372a89i3ikic">平台服务协议</a>
            </div>
          </div><!--规则协议-->
          <div class="tb-footer-col">
            <div>
              <strong>新手上路</strong>
            </div>
            <div>
              <a href="https://ishop.taobao.com/openshop/tb_open_shop_landing.htm?spm=tbpc.pc_sem_alimama/a.1997523009-hd.3.32372a89i3ikic">0元开店</a>
            </div>
            <div>
              <a href="https://zhaoshang.tmall.com/?spm=tbpc.pc_sem_alimama/a.1997523009-hd.4.32372a89i3ikic">天猫开店</a>
            </div>
            <div>
              <a href="https://helpcenter.taobao.com/servicehall/home?spm=tbpc.pc_sem_alimama/a.1997523009-hd.5.32372a89i3ikic">商家服务</a>
            </div>
          </div><!--新手上路-->
          <div class="tb-footer-col">
            <div>
              <strong>付款方式</strong>
            </div>
            <div>
              <a href="https://cshall.alipay.com/lab/cateQuestion.htm?cateId=237708&pcateId=237707">快捷支付</a>
            </div>
            <div>
              <a href="https://cshall.alipay.com/lab/cateQuestion.htm?cateId=237760&pcateId=237707">余额宝</a>
            </div>
            <div>
              <a href="https://cshall.alipay.com/lab/cateQuestion.htm?cateId=237761&pcateId=237707">蚂蚁花呗</a>
            </div>
          </div><!--付款方式-->
          <div class="tb-footer-col">
            <div>
              <strong>淘宝特色</strong>
            </div>
            <div>
              <a href="https://pages.tmall.com/wow/qnww/act/index?spm=tbpc.pc_sem_alimama/a.1997523009-hd.9.32372a89i3ikic">旺旺</a>
            </div>
            <div>
              <a href="https://ai.alimebot.taobao.com/intl/index.htm?spm=tbpc.pc_sem_alimama/a.1997523009-hd.10.32372a89i3ikic&from=WgevAY26kl">官方客服</a>
            </div>
          </div><!--淘宝特色-->
        </p>
      </div><!--四部分-->
      <div class="tb-footer-bd">
        <p>
          <span><a href="https://www.alibabagroup.com/?spm=tbpc.pc_sem_alimama/a.1997523009-bd.1.32372a89i3ikic">阿里巴巴集团</a></span>
          <span><a href="https://www.taobao.com/?spm=tbpc.pc_sem_alimama/a.1997523009-bd.2.32372a89i3ikic">淘宝</a></span>
          <span><a href="https://www.tmall.com/?spm=tbpc.pc_sem_alimama/a.1997523009-bd.3.32372a89i3ikic">天猫</a></span>
          <span><a href="https://www.1688.com/?spm=tbpc.pc_sem_alimama/a.1997523009-bd.4.32372a89i3ikic">1688</a></span>
          <span><a href="https://www.aliyun.com/?spm=tbpc.pc_sem_alimama/a.1997523009-bd.17.32372a89i3ikic">阿里云</a></span>
          <span><a href="https://www.alipay.com/">支付宝</a></span>
        </p>
      </div><!--快速网址-->
      <div class="tb-footer-ft">
        <p>
          <div>
            <span>增值电信业务经营许可证（跨地区）： B2-20150210</span>
          </div>
          <div>
            <span>浙网文〔2025〕0051-019号浙江省网络食品销售第三方平台提供者备案：浙网食A33010001</span>
          </div>
          <div>
            <span>互联网药品信息服务资格证书（浙）-经营性-2023-0008</span>
          </div>
          <div>
            <span>出版物网络交易平台服务经营备案号：新出发浙备字第2024004号</span>
          </div>
          <div>
            <span>广播电视节目制作经营许可证：（浙）字第01012号</span>
          </div>
          <div>
            <span>药品网络交易第三方平台备案：（浙）网药平台备字〔2023〕第000016-001号</span>
          </div>
        </p>
      </div><!--法律备案-->
    </div>
  </div>
</template>

<style scoped>
.tb-footer{
  font-size: 12px;
  min-height: 150px;
  margin-top: 24px !important;
  padding: 32px 0;
  background-color: #fff;
  border-top: 1px solid #ebebeb;
}
.tb-footer-inner{
  position: relative;
  width: 1552px;
  margin:  0 auto;
}
.tb-footer p{
  overflow: hidden;/*控制溢出时为隐藏*/
}
.tb-footer div{
  font-size: 12px;
  color: #7a7a7a;
  line-height: 16px;/*控制行间距*/
  margin-bottom: 12px;
}
.tb-footer span{
  font-size: 12px;
  color: #7a7a7a;
  margin-right: 32px;
  line-height: 28px;
}
.tb-footer strong{
  font-size: 12px;
  color: #1f1f1f;
  font-weight: 500;
}
.tb-footer .tb-footer-hd, .tb-footer .tb-footer-bd, .tb-footer .tb-footer-ft{
  width: 100%;
  max-width: 100%;/*不能超过其父级元素的宽*/
  margin-right: 16px;
  margin-left: 16px;
}
.tb-footer .tb-footer-hd a, .tb-footer .tb-footer-bd a, .tb-footer .tb-footer-ft a{
  white-space: nowrap;
  text-decoration: none;
  font-size: 12px;
  color: #7a7a7a;
}
.tb-footer .tb-footer-hd a:hover, .tb-footer .tb-footer-bd a:hover, .tb-footer .tb-footer-ft a:hover{
  color: #ff5000;
  text-decoration: none;
}
.tb-footer .tb-footer-hd{
  margin-bottom: 4px;
}
.tb-footer .tb-footer-hd p{
  margin-bottom: 8px;
  line-height: 16px;
}
.tb-footer .tb-footer-bd{
  margin-bottom: 20px;
  border-bottom: 1px solid #ebebeb;
  padding-bottom: 20px;
}
.tb-footer .tb-footer-ft{
  margin-top: 8px;
}
.tb-footer .tb-footer-ft span{
  margin-right: 16px;
  margin-bottom: 20px;
}
.tb-footer .tb-footer-ft div{
  margin-right: 16px;
  margin-bottom: 8px;
  display: inline-block;
}
.tb-footer-col {
  width: 25%;
  display: inline-block;
  vertical-align: top;/*垂直对齐方式为顶部对齐，防止默认基线对齐导致错位，也就全部下沉到同一基线*/
}
</style>