<script setup lang="ts">
import AuthContainer from "@/components/auth/AuthContainer.vue";
import AuthNav from "@/layouts/Auth/components/AuthNav.vue";
</script>

<template>
  <div class="auth-container">
    <AuthNav></AuthNav>
    <div class="auth"><AuthContainer></AuthContainer></div>
  </div>
</template>

<style scoped>
.auth-container {
  display: flex;
  flex-direction: column;
  padding: 10px 100px;
  background: white;
}
.auth{
  margin-top: 40px;
  position: absolute;
  top: 20%;
  left: 25%;
}
</style>