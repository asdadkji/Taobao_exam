<script setup lang="ts">
import { ref,watch } from 'vue'
import AuthTabs from "@/components/auth/AuthTabs.vue";
import PasswordForm from "@/components/auth/PasswordForm.vue";
import SmsForm from "@/components/auth/SmsForm.vue";

const props = defineProps<{
  modelValue:'password' | 'sms'
}>()

const emit = defineEmits(['update:modelValue'])

const localMethod = ref(props.modelValue)
watch(localMethod,(val)=>{
  emit('update:modelValue',val)
})
</script>

<template>
  <div class="login-form">
    <AuthTabs v-model="localMethod"></AuthTabs>
    <PasswordForm v-if="localMethod === 'password'"></PasswordForm>
    <SmsForm v-else></SmsForm>

    <div class="footer-links">
      <a href="#">忘记密码</a>
      <span>|</span>
      <router-link to="/register">免费注册</router-link>
    </div>
  </div>
</template>

<style scoped>
.login-form {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.footer-links {
  margin-top:auto;
  padding-top: 20px;
  text-align: center;
  font-size: 14px;
}
.footer-links a {
  color: #666;
  text-decoration: none;
  margin: 0 8px;
}
.footer-links span{
  color: #ddd;
}










</style>