<script setup lang="ts">

</script>

<template>
  <a class="logo-container" href="https://baidu.com/">
    <div class="logo-lf">
      <img src="@/assets/images/logo.svg" />
      <img src="@/assets/images/e-name.svg" />
    </div>
    <div  class="logo-rg">
      <text>热卖商品</text>
    </div>
  </a>
</template>

<style scoped>
.logo-container{
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  max-width: 160px;
  background: white;
}
.logo-lf{
  display: flex;
  flex-flow: column nowrap;
  border-right: 1px solid rgb(238, 238, 238);
  padding: 0 8px;
}
.logo-lf img{
  width: 140px;
  height: 30px;
  background: white;
}
.logo-rg{
  width: 100px;
  padding: 0 16px;
}
.logo-rg text{
  font-size: larger;
  font-weight: bold;
  color: red;
}
</style>