<script setup lang="ts">
import cartGoods from './components/cartGoods.vue';
import cartNav from './components/cartNav.vue';
import goToCheckout from './components/goToCheckout.vue';
</script>

<template>
  <div class="cart-container">
    <div class="cart-nav"><cart-nav></cart-nav></div>
    <div class="cart-event">
      <div class="cart-goods">
        <cart-goods></cart-goods>
      </div>
      <div class="cart-checkout"><goToCheckout></goToCheckout></div>
    </div>
  </div>
</template>

<style scoped>
.cart-container {
  display: flex;
  margin: 16px 48px;
  flex-flow: column;
}
.cart-event {
  display: flex;
  flex-direction: row;
  align-content: flex-start;
}
.cart-goods {
  flex: 3;
  margin-right: 24px;
}
.cart-checkout {
  flex: 1;
  position: sticky;
}
</style>