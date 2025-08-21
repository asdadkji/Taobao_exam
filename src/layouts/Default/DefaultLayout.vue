<script setup lang="ts">
import LayoutFooter from "@/layouts/Default/components/LayoutFooter.vue";
import LayoutNav from "@/layouts/Default/components/LayoutNav.vue";
import {provide, ref} from "vue";
/*const msgs = ref('')
provide('setMessage',(msg:string)=>{
  msgs.value = msg;
})*/
</script>

<template>
  <div class="default">
    <LayoutNav></LayoutNav>
    <router-view></router-view>
    <LayoutFooter></LayoutFooter>
  </div>

</template>

<style scoped lang="scss">
.default{
  background: white;
  padding: 0 40px;
  height: 100vh;
  overflow-y: auto;
}
</style>