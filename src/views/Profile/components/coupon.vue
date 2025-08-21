<script setup lang="ts">
import {ref, watch} from "vue";

//导入用户已有的优惠券
/*import {showCoupon} from '@/composables/coupon/useMyCoupons'
const {MyCouponList} = showCoupon()
let CouponList = ref(null)
watch(MyCouponList,(newVal) => {
  if (newVal) {
    CouponList.value = newVal
  }
},{immediate:true})*/
import ss from '@/components/tabs/tabs.vue'
</script>

<template>
  <ss></ss>
</template>

<style scoped>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>