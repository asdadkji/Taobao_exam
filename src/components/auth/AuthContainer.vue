<script setup lang="ts">
import { ref } from 'vue'
import QrCodePanel from "@/components/auth/QrCodePanel.vue";
import LoginForm from "@/components/auth/LoginForm.vue";
const currentMethod = ref<'password' | 'sms'>('password');
</script>

<template>
  <div class="auth-container-1">
    <div class="left-panel">
      <QrCodePanel></QrCodePanel>
    </div>
    <div class="right-panel">
      <LoginForm v-model="currentMethod"/>
    </div>
  </div>
</template>

<style scoped>
.auth-container-1 {
  display: flex;
  flex-direction: row;
  max-width: 700px;
  margin: 0 10px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  padding: 10px 0;
}
.left-panel {
  width: 350px;
  padding: 30px;
  border-right: 1px solid #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.right-panel {
  width: 350px;
  padding: 30px;
}
/*@media (max-width: 768px) {
  .auth-container {
    flex-direction: column;
  }
  .left-panel {
    border-right: none;
    border-right: 1px solid #eee;
  }
}*/
</style>