<script setup lang="ts">
import { ref, watch,computed } from 'vue';
//图片展示
import { usePhoto } from "@/composables/Details/usePhoto";
const {changeImage,images,currentIndex} = usePhoto();
//图片放大镜
import {useBigger} from '@/composables/Details/useBigger'
const {handleMouseMove,showMagnifier,magnifierPosition} = useBigger()
//拿到仓库数据
import { useAuthStore } from "@/stores/auth";
const authStore = useAuthStore();
import { useCartStore } from '@/stores/cart'
const cartStore = useCartStore();
//拿到路由数据
import {useRoute} from "vue-router";
const route = useRoute();
//商品详情展示，拿到异步数据
import {useGoodsShow} from '@/composables/Details/useGoodsShow'
const {product} = useGoodsShow(route.params.id);
let loadProduct = ref()
watch(product,(newVal)=>{
  if(newVal){
    loadProduct.value = newVal
  }
},{immediate:true})
const productName = computed(() => loadProduct.value?.name || '')
const productPrice = computed(() => loadProduct.value?.price || 0)
//评分分数(暂时放在这)
const value = ref(3.7);
//添加到购物车
const addToCart = () => {
  cartStore.addToCart(loadProduct.value);
}
</script>

<template>
  <div class="productInfo-container">
    <div class="info-top">
      <div class="shopper">
        <img src="@/assets/others/cloth.jpg">
        <div class="shopper-text">
          <text style="font-size: large"></text> <!--{{loadProduct.name}}-->
          <el-rate v-model="value" disabled show-score text-color="#ff9900" score-template="{value} 分"></el-rate>
        </div>
      </div>
      <div class="customer">
        <a>联系客服~~</a>
        <a style="margin: 0px">进入店铺~~</a>
      </div>
    </div>
    <div class="info-bottom">
      <div class="info-lf">
        <div class="info-lf-lf">
          <div v-for="(img, index) in images"
               :key="index"
               :class="{ active: currentIndex === index }"
               @mouseover="changeImage(index)" style="margin-bottom: 4px;">
            <img :src="img.thumb"></img>
          </div>
        </div>
        <div class="info-lf-rg">
          <img
              :src="images[currentIndex].large"
              @mousemove="handleMouseMove"
              @mouseenter="showMagnifier=true"
              @mouseleave="showMagnifier=false">
        </div>
        <div v-show="showMagnifier" class="magnifier"
          :style="{
          left: `${magnifierPosition.x}px`,
          top: `${magnifierPosition.y}px`,
          backgroundImage: `url(${images[currentIndex].large})`,
          backgroundPosition: `${-magnifierPosition.x * 2}px ${-magnifierPosition.y * 2}px`
          }"></div>
      </div>
      <div class="info-rg">
        <div class="info-rg-top" v-if="authStore.isLogin">
          <div class="suggestion">
            <h2>{{productName}}</h2>
          </div>
          <div><p>粉丝福利价￥{{productPrice}}</p></div>
          <div class="suggestion">
            <span>配送</span>
            <p>本月平均2天内发货 | 承诺15天内发货</p>
            <p>快递: 免运费 四川成都 至 南京 江宁</p>
          </div>
          <div class="suggestion">
            <span>保障</span>
            <p><p>7天无理由退货 | 极速退款</p></p>
          </div>
          <div class="suggestion">
            <span>可选支付</span>
            <p>信用卡支付</p>
          </div>
          <div class="suggestion">
            <span>颜色分类</span>
            <a class="color">
              <img src="@/assets/others/cloth.jpg"></img>
              <text>米白色</text>
            </a>
            <a class="color">
              <img src="@/assets/others/cloth.jpg"></img>
              <text>杏色</text>
            </a>
            <a class="color">
              <img src="@/assets/others/cloth.jpg"></img>
              <text>黑色</text>
            </a>
          </div>
          <div class="suggestion">
            <span>尺码</span>
            <a>34</a>
            <a>35</a>
            <a>36</a>
            <a>37</a>
          </div>
          <div class="suggestion">
            <span>数量</span>
          </div>
        </div>
        <div class="info-rg-btn">
          <button @click="addToCart">加入购物车</button>
          <button>立即购买</button>
        </div>
<!--        v-if="authStore.isLogin"-->
<!--        <div v-else>
          <p><router-link to="/auth/login">您需要先登录</router-link></p>
        </div>-->
      </div>
    </div>
  </div>
</template>

<style scoped>
.info-top{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.shopper {
  display: flex;
  flex-direction: row;
  width: 582px;
  height: 52px;
}
.active {
  border: 1px solid #006fe6;
}
.shopper>img{
  width: 48px;
  height: 48px;
  margin-right: 12px;
}
.shopper-text{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 456px;
  margin-right: 12px;
  align-content: space-between;
}
.customer{
  display: flex;
  flex-direction: row;
  width: 223px;
  justify-content: flex-end;
}
.customer a{
  border-radius: 4px;
  border: 1px solid  #dddddd;
  padding: 0 10px 0 6px;
  margin-right: 10px;
  cursor: pointer;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
}
.info-bottom {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 12px;
}
.info-lf {
  display: flex;
  flex-direction: row;
}
.info-lf-lf{
  display: flex;
  flex-direction: column;
  margin-right: 16px;
  position: relative;
  height: 328px;
  overflow-y: hidden;
}
.info-lf-rg {
  border-radius: 4px;
  height: 328px;
  width: 328px;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-right: 16px;
}
.info-rg {
/*  width: 348px;*/
}
.info-rg-top {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.suggestion {
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
}
.suggestion span {
  text-align-last: justify;
  width: 60px;
  margin-right: 16px;
}

.color img{
  width: 24px;
  height: 24px;
  border-radius: 4px;
}
.magnifier {
  position: absolute;
  width: 500px;
  height: 500px;
  border: 3px solid #fff;
  border-radius: 50%;
  cursor: none;
  background-repeat: no-repeat;
  background-size: 1000px 1000px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  pointer-events: none;
  transform: translate(20%, 20%);
}
</style>