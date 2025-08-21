<script setup lang="ts">

</script>

<template>
  <div class="others-container">
    <div class="others" style="background: #006fe6">
      <text>品质家具超值优惠</text>
      <img src="../../../assets/others/otherImage.svg" />
    </div>
    <div class="others" style="background: #b21f2d">
      <text>精致美妆品质之选</text>
      <img src="../../../assets/others/otherImage.svg" />
    </div>
    <div class="others" style="background: #b1dfbb">
      <text>品质五金超值优惠</text>
      <img src="../../../assets/others/otherImage.svg" />
    </div>
    <div class="others" style="background: #b9ca4a">
      <text>优惠百货省钱省心</text>
      <img src="../../../assets/others/otherImage.svg" />
    </div>
  </div>
</template>

<style scoped>
.others-container{
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  max-width: 250px;
  align-content: space-between;
}
.others {
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.others:hover {
  cursor: pointer;
}
.others img{
  width: 50px;
  height: 50px;
}
.others text{
  font-size: large;
  color: white;
  font-weight: bold;
  width: 80px;
}
</style>