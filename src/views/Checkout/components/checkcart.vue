<script setup lang="ts">
import {useCartStore} from '@/stores/cart'
const cartStore = useCartStore()
</script>

<template>
  <div class="checkout-table">
    <p>结算明细</p>
    <div class="allgoods">
      <img>
    </div>
    <div class="allMoney">
      <p>商品总价</p>
      <p style="font-weight: bold">￥3000</p>
    </div>
    <div class="sum">
      <p>合计:</p>
      <p>￥{{ cartStore.totalAmount.toFixed(2) }}</p>
    </div>
    <router-link to="/orders"><button class="checkout-btn">提交订单</button></router-link>
  </div>
</template>

<style scoped>
.checkout-table {
  border-radius: 10px;
  border: #dddddd 1px solid;
  padding: 16px;
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
}
.checkout-table p{
  font-weight: bold;
  margin-bottom: 16px;
}
.allgoods, .allMoney, .sum {
  margin-bottom: 8px;
}
.allgoods {
  display: flex;
}
.allgoods img{
  flex: 1;
  border-radius: 5px;
  margin-bottom: 4px;
}
.allMoney .sum{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.checkout-btn{
  border-radius: 12px;
  background: red;
  color: white;
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 8px 0;
  cursor: pointer;
  width: 200px;
}
</style>