<script setup lang="ts">
import RegisterForm from "@/components/register/RegisterForm.vue";
import RegisterNav from "@/components/register/RegisterNav.vue";
import RegisterRule from "@/components/register/RegisterRule.vue";
import test1 from "@/components/register/test.vue";
</script>

<template>
  <div class="register-container">
    <RegisterNav></RegisterNav>
    <div class="smsform">
      <test1></test1>
      <RegisterRule></RegisterRule>
    </div>
  </div>
</template>

<style scoped>
.register-container{
  background: white;
  padding: 10px 100px;
}
.smsform{
  margin: 100px 300px;
}

</style>