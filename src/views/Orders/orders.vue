<script setup lang="ts">
import {addressStore} from '@/stores/address'
const store = addressStore()
import {useCartStore} from '@/stores/cart'
const cartStore = useCartStore()
const goods = cartStore.checkedItems
import { ref } from 'vue'
import {useRouter} from "vue-router";
const router = useRouter()
function goToComments(id){
  router.push({
    name: 'comments',
    params: {
      productId: id,
    }
  })
}
const activeName = ref('所有订单')

</script>

<template>
  <el-tabs v-model="activeName" class="demo-tabs">
    <el-tab-pane label="所有订单" name="所有订单">
      <div class="orders-container">
        <div class="orders-info">
          <p style="flex:4.5">订单信息</p>
          <p style="flex:1">商品金额</p>
          <p style="flex:1">实付款</p>
          <p style="flex:1">订单操作</p>
        </div>
        <div class="order-goods-container" v-for="(item,index) in goods" :key="index">
          <div class="order-goods-header">
            <p>2025-07-23</p>
            <p>交易成功</p>
          </div>
          <div class="order-goods-content">
            <div class="order-goods-info">
              <div style="flex:4.5; width:585px">
                <img>
                <p>商品</p>
              </div>
              <p style="flex:1.2; width: 130px; display: flex; justify-content: flex-end">￥{{item.price}}</p>
              <p style="flex:1.2; width: 130px; display: flex; justify-content: flex-end">￥300</p>
            </div>
            <div class="order-goods-use">
              <p @click="goToComments(item.id)">评价</p>
              <p>删除订单</p>
            </div>
          </div>
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane label="待付款" name="待付款"></el-tab-pane>
    <el-tab-pane label="待发货" name="待发货"></el-tab-pane>
    <el-tab-pane label="待评价" name="待评价"></el-tab-pane>
  </el-tabs>
</template>

<style scoped>
.orders-container {
  display: flex;
  flex-direction: column;
  width: 1000px;
}
.orders-info {
  display: flex;
  flex-direction: row;
}
.orders-info p {
  display: flex;
  justify-content: center;
  align-items: center;
}
.order-goods-container {
  display: flex;
  flex-direction: column;
  margin: 16px 0;
}
.order-goods-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #dddddd;
  margin-bottom:  16px;
  border-radius: 8px;
  padding: 8px;
}
.order-goods-content {
  display: flex;
  flex-direction: row;
}
.order-goods-info {
  display: flex;
  flex-direction: row;
}
.order-goods-info p {
  margin-right: 4px;
}
.order-goods-use {
  display: flex;
  flex-direction: column;
  width: 130px;
}
.order-goods-use p {
  margin: 4px 0;
  display: flex;
  justify-content: flex-end;
}
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>