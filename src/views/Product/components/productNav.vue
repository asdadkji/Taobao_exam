<script setup lang="ts">
import searchBox from '@/components/search/searchBox.vue';
</script>

<template>
  <div class="product-nav">
    <img src="@/assets/images/logo.svg">
    <search-box size="medium"></search-box>
  </div>
</template>

<style scoped>
.product-nav{
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}
.product-nav img{
  background: white;
  width: 64px;
  height: 40px;
}
</style>