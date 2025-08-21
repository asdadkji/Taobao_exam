<script setup lang="ts">
import address_1 from './components/address.vue'
import checkcart_1 from './components/checkcart.vue';
import cartGoods from '../Cart/components/cartGoods.vue';
</script>

<template>
  <div class="checkout-container">
    <div class="checkout-lf">
      <div class="address"><address_1></address_1></div>
      <div class="Goods"><cartGoods></cartGoods></div>
    </div>
    <div class="checkcart"><checkcart_1></checkcart_1></div>
  </div>
</template>

<style scoped>
.checkout-container {
  padding: 24px 100px;
  display: flex;
  flex-direction: row;
}
.checkout-lf {
  display: flex;
  flex-direction: column;
  margin-right: 24px;
}
.address{
  width: 800px;
}
.Goods{
  margin-top: 24px;
  background: #ececec;
}
.checkcart {
  width: 400px;
}
</style>