<script setup lang="ts">

</script>

<template>
  <div class="nav">
    <div class="nav-left">
      <img src="@/assets/images/logo.svg" />
    </div>
    <div class="nav-right">
      <text>网站无障碍</text>
      <text>“页面”改进建议</text>
    </div>
  </div>
</template>

<style scoped>
.nav{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.nav-left, .nav-right {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.nav-left img{
  width: 60px;
  height: 60px;
  background: white;
}
.nav-right text{
  font-size: small;
  margin-bottom: 5px;
}
</style>