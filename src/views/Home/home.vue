<script setup lang="ts">
//导入组件
import searchBox from "@/components/search/searchBox.vue";
import tbLogo from "@/components/logo/tbLogo.vue";
import swiper from "@/views/Home/components/swiper.vue"
import other from "@/views/Home/components/other.vue";
import category from "@/views/Home/components/category.vue";
import goods from "@/views/Home/components/goods.vue";
import {ref} from "vue";
const keyword = ref('')
function onKeywordChange(k){
  keyword.value=k;
}
</script>

<template>
  <div class="container">
    <div class="home-nav">
      <div class="tbLogo"><tbLogo></tbLogo></div>
      <div class="search-box"><searchBox size="large" @keywordChange="onKeywordChange"></searchBox></div>
      <div style="width: 250px"></div>
    </div>
    <div class="home-show">
      <div class="category"><category></category></div>
      <div class="swiper"><swiper></swiper></div>
      <div class="other"><other></other></div>
    </div>
    <div class="guess">
      <text>猜你喜欢</text>
      <text style="font-size: small">精选好物推荐</text>
    </div>
    <div class="home-goods"><goods :keyword="keyword"></goods></div>
  </div>
</template>

<style scoped>
.container{
  margin-top: 10px;
  display:flex;
  flex-direction: column;
}
.home-nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.home-show {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
}
.home-goods{
  width: 1240px;
}
.swiper{
  width: 720px;
  margin: 0 10px;
}
.guess{
  display: flex;
  flex-direction: column;
  padding: 2px;
  align-content: space-between;
}

.guess text{
  color: red;
  margin-bottom: 2px;
}
.guess > text{
  font-size: large;
}
.tbLogo{
  padding: 0 45px;
}
.category{
  width: 250px;
}
.other{
  width: 250px;
}
</style>