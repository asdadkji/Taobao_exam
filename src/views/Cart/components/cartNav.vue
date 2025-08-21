<script setup lang="ts">
import searchBox from '@/components/search/searchBox.vue';
</script>

<template>
  <div class="cartNav-container">
    <img src="@/assets/images/logo.svg" />
    <search-box size="medium"></search-box>
  </div>
</template>

<style scoped>
.cartNav-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  position: relative;
  align-items: center;
}
.cartNav-container img{
  width: 60px;
  height: 60px;
  background: white;
}
</style>