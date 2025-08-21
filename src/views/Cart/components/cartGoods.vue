<script setup lang="ts">
import { ref } from "vue";
//引入仓库
import {useCartStore} from '@/stores/cart'
const cartStore = useCartStore()
//删除
const removeFromCart = (productId) => {
  cartStore.removeFromCart(productId);
};
//增加数量
const incrementQuantity = (productId) => {
  cartStore.incrementQuantity(productId);
};
//减少数量
const decrementQuantity = (productId) => {
  cartStore.decrementQuantity(productId);
};
//选择框(第三方库)
const checkAll = ref(false)
const isIndeterminate = ref(true)

const handleCheckAllChange = (val: boolean) => {
  isIndeterminate.value = false
  cartStore.checkedItems = val ? [...cartStore.items] : []
}
const handleCheckedCitiesChange = (value: string[]) => {
  cartStore.updateCheckedItems(value);
  const checkedCount = value.length
  checkAll.value = checkedCount === cartStore.items.length
  isIndeterminate.value = checkedCount > 0 && checkedCount < cartStore.items.length
}
</script>

<template>
  <div class="cartGoods-container">
    <h3>全部商品({{cartStore.items.length}})</h3>
    <div class="selectAll">
      <label>
        <el-checkbox
            v-model="checkAll"
            :indeterminate="isIndeterminate"
            @change="handleCheckAllChange">
        </el-checkbox>&nbsp;&nbsp;<text>全选</text>
      </label>
    </div>
    <div class="GoodsShow">
      <el-checkbox-group v-model="cartStore.checkedItems" @change="handleCheckedCitiesChange">
        <el-checkbox v-for="(item,index) in cartStore.items" :key="item.id" size="large" style="width: 400px;" :label="item">
          <img>
          <div class="goodsinfo">
            <p>{{item.name}}</p>
            <p>{{item.price}}</p>
          </div>
          <p></p>
          <button @click="decrementQuantity(item.id)">-</button>
          <span>{{ item.quantity }}</span>
          <button @click="incrementQuantity(item.id)">+</button>
          <button @click="removeFromCart(item.id)">删除</button>
        </el-checkbox>
      </el-checkbox-group>
    </div>
  </div>
</template>

<style scoped>
.cartGoods-container {
  display: flex;
  flex-direction:  column;
  justify-content: flex-start;
  width: 100%;
  position: relative;
}

.selectAll{
  padding: 16px 0;
  border-bottom: #dddddd 1px solid;
}
.selectAll:hover text {
  color: red;
}
.GoodsShow {
  padding: 16px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.goodsinfo{
  width: 200px;
  word-wrap: break-word;
  word-break: break-all;
  white-space: normal;
  display: flex;
  align-content: flex-start;
}
</style>