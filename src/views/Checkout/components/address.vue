<script setup lang="ts">
import {ref, watch} from "vue";
import maskList from '@/components/mask/mask.vue'
const isChildModalOpen = ref(false);
const addressID = ref(null)

//控制弹框打开(修改模式)
const opChildModal_cg = (id) => {
  isChildModalOpen.value = true;
  addressID.value = id.toString();
}
//控制弹框打开(添加模式)
const opChildModal_add = () => {
  isChildModalOpen.value = true;
  addressID.value = ''
}
import {getAddress_1} from '@/composables/profile/usegetAddress'
const {address}  = getAddress_1();
let addresses = ref(null)
//获取异步数据：地址数据
watch(address, (newVal) => {
  if(newVal){
    addresses.value = newVal
  }
},{immediate: true})
const selectModel = ref(null)
//修改按钮
function showChange(id){
  selectModel.value = id
}
function leaveChange(){
  selectModel.value = false
}
//仓库
const selectedAddressId = ref(null)
import {addressStore} from '@/stores/address'
const {getAddress} = addressStore()
const handleAddressClick = (item) => {
  selectedAddressId.value = item.id; // 设置当前选中的地址ID
  getAddress(item); // 调用原来的方法
}
</script>

<template>
  <div class="address-container">
    <div class="address-nav">
      <h3>确认收货地址</h3>
      <div class="address_change">
        <p @click="opChildModal_add">使用新地址</p>
        <p>管理地址</p>
      </div>
    </div>
    <div class="address-list">
      <div v-for="(item,index) in addresses"
           :key="item.id"
           class="address"
           :class="{'address-selected': selectedAddressId === item.id}"
           @mouseenter="showChange(item.id)"
           @mouseleave="leaveChange()"
           @click="handleAddressClick(item)">
        <p>{{item.address1}}</p>
        <p>{{item.address2}}</p>
        <p class="change" v-if="selectModel === item.id" @click="opChildModal_cg(item.id)">编辑</p>
      </div>
    </div>
  </div>
  <maskList :isOpen="isChildModalOpen" @update:isOpen="(val)=>(isChildModalOpen = val)" :addressId="addressID"></maskList>
</template>

<style scoped>
.address-container{
  display: flex;
  flex-direction: column;
  padding: 24px;
  background: #ececec;
  border-radius: 10px;
  position: relative;
  width: 100%;
}
.address-selected {
  outline: 2px solid #42b983;
  outline-offset: 2px;
}
.address-nav{
  display: flex;
  flex-direction: row;
  justify-content:  space-between;
  margin-bottom: 8px;
}
.address_change {
  display: flex;
  flex-direction: row;
}
.address_change>p {
  margin-right: 8px;
}
.address-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.address {
  width: 30%;
  cursor: pointer;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-right: 8px;
  margin-bottom: 8px;
}

.address:hover{
  border: 1px solid #f5222d;
}

.change {
  position: relative;
  right: 0;
  bottom: 0;
  background: #ececec;
  color: lightblue;
  cursor: pointer;
  width: 24px;
  font-size: small;
  font-weight: 16px;
  height: 24px;
}
</style>