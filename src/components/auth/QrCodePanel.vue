<script setup lang="ts">
import {onMounted, ref} from "vue";
import {useQrCodeLogin} from '@/composables/auth/useQrCodeLogin'

const {status,errorMessage,qrCodeUrl,initQrCode} =  useQrCodeLogin();

// const qrCodeUrl = ref('')
onMounted(() => {
  // qrCodeUrl.value = '' //真实生成二维码的逻辑
  initQrCode()
})
</script>

<template>
  <div class="qrcode-panel">
    <h3>手机扫码登录</h3>
    <div class="qrcode-container">
      <img v-if="qrCodeUrl" :src="qrCodeUrl" alt="扫码登录二维码">
      <div v-else class="qrcode-placeholder">{{errorMessage || '正在生成二维码...'}}</div>
    </div>
    <p class="hint">打开淘宝APP→点击左上角扫一扫</p>
    <a href="#" class="help-link">怎么扫码登录？</a>
    <div v-if="String(status) === 'scanned'" class="status-message"> //有问题
      扫码成功，请在手机上确认登录
    </div>
  </div>
</template>

<style scoped>
.qrcode-panel {
  text-align: center;
}
.qrcode-container {
  width: 200px;
  height: 200px;
  margin: 20px auto;
  bordere: 1px solid #eee;
  display:  flex;
  align-items: center;
  justify-content: center;
}
.qrcode-container img{
  width: 100%;
  height: 100%;
}
.hint{
  color: #666;
  font-size: 14px;
  margin: 10px 0;
}
.help-link{
  color: #1890ff;
  font-size: 14px;
}
.status-message {
  color: #52c41a;
  margin-top: 10px;
  font-size: 14px;
}
</style>



















