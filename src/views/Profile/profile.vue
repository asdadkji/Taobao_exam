<script setup lang="ts">
import addressList from '@/views/Profile/components/address.vue'
import coupon from "@/views/Profile/components/coupon.vue"
</script>

<template>
  <div class="addressList"><addressList></addressList></div>
  <div class="couponList"><coupon></coupon></div>
</template>

<style scoped>
.addressList {
  width: 800px;
}
.couponList {
  width: 400px;
}
</style>