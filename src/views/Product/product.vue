<script setup lang="ts">
import productNav from './components/productNav.vue';
import productOthers from './components/productOthers.vue';
import productInfo from './components/productInfo.vue';
import { useAuthStore } from '@/stores/auth';
const authStore = useAuthStore();
</script>

<template>
  <div class="product-container">
    <div class="p-nav"><product-nav></product-nav></div>
    <div class="p-info"><product-info></product-info></div>
    <div class="p-others" v-if="authStore.isLogin"><product-others></product-others></div>
  </div>
</template>

<style scoped>
.product-container{
  margin: 0 30px;
  background: white;
  padding: 16px 60px;
  display: flex;
  flex-direction: column;
}
.p-nav{
  margin-bottom: 10px;
}
</style>