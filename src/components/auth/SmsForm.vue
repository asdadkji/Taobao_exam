<script setup lang="ts">
import {useSmsLogin} from '@/composables/auth/useSmsLogin'

const {
  form,
  loading,
  errorMessage,
  countdown,
  sendSmsCode,
  handleSubmit,
} =  useSmsLogin()
</script>

<template>
  <form @submit.prevent="handleSubmit" class="sms-form">
    <div class="form-group">
      <div class="phone-input">
        <select v-model="form.phonePrefix" class="prefix-select">
          <option value="+86">+86</option>
          <option value="+852">+852</option>
          <option value="+853">+853</option>
          <option value="+886">+886</option>
        </select>
        <input v-model="form.phone" type="tel" placeholder="请输入手机号" required class="phone-number" />
      </div>
    </div>
    <div class="form-group">
      <input v-model="form.code" type="text" placeholder="请输入验证码" required class="code-input" />
      <button type="button" class="get-code-btn" @click="sendSmsCode" :disabled="countdown>0">{{countdown>0?`${countdown}s后再次获取`:'获取验证码'}}</button>
    </div>
    <div v-if="errorMessage" class="error-message">{{errorMessage}}</div>
    <button type="submit" :disabled="loading" class="submit-btn">{{loading?'登录中...':'登录'}}</button>
  </form>
</template>

<style scoped>
.sms-form {
  display: flex;
  flex-direction: column;
  gap:16px
}
.phone-input {
  display: flex;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
}
.prefix-select {
  padding: 12px;
  border: none;
  border-right: 1px solid #ddd;
  background: #fafafa;
  color: #666;
  outline: none;
}
.phone-number{
  flex:1;
  padding: 12px;
  border: none;
  outline: none;
}
.form-group{
  position: relative;
}
.code-input{
  width:  100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
.get-code-btn {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  background: none;
  border: none;
  color: #1890ff;
  font-size: 12px;
  cursor: pointer;
  padding: 0;
}
.get-code-btn:disabled {
  color: #d9d9d9;
  cursor: not-allowed;
}
.error-message {
  color: #f5222d;
  font-size: 14px;
  text-align: center;
}
.submit-btn {
  width:  100%;
  padding: 12px;
  background-color: #1890ff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}
.submit-btn:hover {
  background-color: #40a9ff;
}
.submit-btn:disabled {
  background-color: #d9d9d9;
  cursor: not-allowed;
}











</style>