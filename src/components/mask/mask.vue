<script setup>
import {onMounted, ref} from "vue";
//弹窗组件
import { useModal } from '@/composables/mask/useMask.js';
const { openModal, closeModal } = useModal();
//拿到绑定的提交数据和逻辑
import {postAddressList} from "@/composables/profile/usepostAddress.js";
const {address3,addAddress} = postAddressList();
//拿到已有的地址
import {getAddress_1} from '@/composables/profile/usegetAddress.js'
const {address}  = getAddress_1();
//调用修改地址的函数
import {changeAddress} from '@/composables/profile/usechangeAddress.js'
const {update_Address} = changeAddress();
//向父组件通报更改数据
const emit = defineEmits(['update:isOpen']);
//从父组件接收数据
const props = defineProps({
  isOpen:{ type: Boolean, default: false },
  addressId:{ type: String, default: '' },
})
console.log(props.addressId);
openModal(props.isOpen);
const header = ref(null)
//根据id展示不同样式
onMounted(() => {
  if(props.addressId){  //编辑模式
    address3.value = address.value
    header.value = '修改收货地址'
  }else {
    header.value = '提交收货地址'
  }
})
//根据id触发不同api
const close_modal = async () => {
  try {
    if (props.addressId) {
      await update_Address(props.addressId, address3.value)
    }else {
      await addAddress()
    }
    //通知父组件关闭弹窗
    emit('update:isOpen', false);
  } catch (e) {
    console.error(e)
    alert('操作失败，请重试')
  }
}
</script>

<template>
  <div>
    <!-- 遮罩层 -->
    <div
        v-if="isOpen"
        class="overlay"
        @click="closeModal"
    ></div>

    <!-- 弹窗内容 -->
    <div
        v-if="isOpen"
        class="modal"
    >
      <div class="modal-content">
        <h2>{{header}}</h2>
        <el-form :label-position="'right'" label-width="100px">
          <el-form-item label="地址信息"><el-input v-model="address3.address1" clearable></el-input></el-form-item>
          <el-form-item label="详细地址"><el-input v-model="address3.address2" clearable></el-input></el-form-item>
          <el-form-item label="城市"><el-input v-model="address3.city" clearable></el-input></el-form-item>
          <el-form-item label="手机号码"><el-input v-model="address3.state" clearable></el-input></el-form-item>
          <el-form-item label="邮政编码"><el-input v-model="address3.zip_code"></el-input></el-form-item>
          <el-form-item label="国家"><el-input v-model="address3.country"></el-input></el-form-item>
        </el-form>
        <button @click="close_modal">确认</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 遮罩层样式 */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

/* 弹窗样式 */
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1001;
  background: white;
  padding: 20px;
  border-radius: 8px;
  min-width: 300px;
  max-width: 80%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.modal-content {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

/* 关闭按钮样式 */
button {
  padding: 8px 16px;
  cursor: pointer;
}
</style>