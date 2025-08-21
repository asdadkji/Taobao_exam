<script setup lang="ts">
import {usePasswordLogin} from '@/composables/auth/usePasswordLogin'

const {
  form,
  loading,
  errorMessage,
  handleSubmit,
} = usePasswordLogin()
</script>

<template>
  <form @submit.prevent="handleSubmit" class="password-form">
    <div class="form-group">
      <input v-model="form.username" type="text" placeholder="请输入账号" required>
    </div>
    <div class="form-group">
      <input v-model="form.password" type="password" placeholder="请输入登录密码" required>
      <a href="#" class="forgot-password">忘记密码</a>
    </div>
    <div v-if="errorMessage" class="error-message">{{errorMessage}}</div>

    <button type="submit" :disabled="loading" class="submit-btn">{{loading?'登录中...':'登录'}}</button>
  </form>
</template>

<style scoped>
.password-form {
  display: flex;
  flex-direction: column;
  gap:16px
}
.form-group {
  position: relative;
}
.form-group input{
  width: 100%;
  padding: 12px;
  border: 1px solid grey;
  border-radius: 4px;
  font-size: 14px;
}
.forgot-password {
  position: absolute;
  right: 12px;
  top: 35%;
  transform: translate(-50%);
  color: #1890ff;
  font-size: 12px;
  text-decoration: none;
}
.error-message {
  color: #f5222d;
  font-size: 14px;
  text-align: center;
}
.submit-btn {
  width: 100%;
  padding: 12px;
  background-color:  #1890ff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}
.submit-btn:hover {
  background-color: #40a9ff;
}
.submit-btn:disabled {
  background-color: #d9d9d9;
  cursor: not-allowed;
}














</style>