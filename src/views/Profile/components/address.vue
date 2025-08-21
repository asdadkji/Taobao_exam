<script setup lang="ts">
import { ref, watch} from "vue";
//引入选择框
import {ElMessageBox} from "element-plus";
//引入组件
import mask2 from '@/components/mask/mask.vue'
//获取已有地址
import {getAddress_1} from '@/composables/profile/usegetAddress'
const {address}  = getAddress_1();
//删除地址
import {deleteaddress} from '@/composables/profile/usedeleteaddress'
const {delete_Address} = deleteaddress()
//定义关键数据：地址id和地址数据
const addressID = ref(null)
let addresses = ref(null)
//获取异步数据：地址数据
watch(address, (newVal) => {
  if(newVal){
    addresses.value = newVal
  }
},{immediate: true})
//控制弹框关闭
const isChildModalOpen = ref(false);
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
//二次提示框——>删除地址
const open = () =>{
  try{
    ElMessageBox.confirm(
        '您确定要删除这条地址信息吗？一旦删除无法撤销',
        'Warning',
        {
          confirmButtonText: '确认',
          cancelButtonText: '取消',
          type:'warning'
        }
    );
    delete_Address()
  }catch(e){
    console.log('操作已取消')
    console.error(e)
  }
}
</script>

<template>
  <div class="address-container">
    <div class="address-nav">
      <h3>我的收货地址</h3>
      <button @click="opChildModal_add">添加地址</button>
    </div>
    <table>
      <tr>
        <th>收货人</th>
        <th>所在地区</th>
        <th>详细地址</th>
        <th>城市</th>
        <th>手机号</th>
        <th>邮编</th>
        <th>国家</th>
        <th>操作</th>
      </tr>
      <tr v-for="(item,index) in addresses" :key="item.id">
        <td>{{item.id}}</td>
        <td>{{item.address1}}</td>
        <td>{{item.address2}}</td>
        <td>{{item.city}}</td>
        <td>{{item.state}}</td>
        <td>{{item.zip_code}}</td>
        <td>{{item.country}}</td>
        <td class="c_d_btn">
          <p @click="opChildModal_cg(item.id)">修改</p>
          <el-button text @click="open">删除</el-button>
        </td>
      </tr>
    </table>
  </div>
  <mask2 :isOpen="isChildModalOpen" @update:isOpen="(val)=>(isChildModalOpen = val)" :addressId="addressID"></mask2>
</template>

<style scoped>
.address-container {
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
}
.address-nav{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  margin-bottom: 8px;
}
table {
  border-collapse:collapse;
  width: 100%;
  border:  1px solid black;
}
tr td {
  padding: 4px;
  text-align: center;
  border-bottom: 1px solid #b3b1b1;
}
tr th {
  background: #dddddd;
  padding: 8px 0;
}
tr:hover {
  background-color: #f5f5f5;
}
.c_d_btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>