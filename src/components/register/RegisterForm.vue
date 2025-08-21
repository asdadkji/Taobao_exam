<script setup lang="ts">

</script>

<template>
  <div class="register">
    <div class="register-up">
      <div class="phone">
        <text>手机号码</text>
        <select>
          <option value="中国大陆 +86">中国大陆 +86</option>
          <option value="中国香港 +852">中国香港 +852</option>
          <option value="中国澳门 +853">中国澳门 +853</option>
        </select>
        <input type="text" placeholder="请输入你的手机号码">
      </div>
      <div class="phone">
        <text>验证码</text>
        <input placeholder="请输入校验码" style="width: 273px">
        <button class="getcode">获取验证码</button>
      </div>
    </div>
    <button class="btn-register">同意并注册</button>
  </div>
</template>

<style scoped>
.register {
  display: flex;
  flex-direction: column;
  width: 400px;
  justify-content: flex-end;
}
.register-up{
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
}

.phone{
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
  justify-content: flex-end;
}
.phone text {
  margin-right: 10px;
  font-family: 黑体;
  align-content: center;
}
.phone select {
  border: 1px solid #dddddd;
}
.phone input {
  border: 1px solid #dddddd;
  padding: 10px;
}
.getcode{
  position: absolute;
  right: 700px;
  top: 39%;
  transform: translateY(-50%);
  cursor: pointer;
  background: none;
  border: none;
  color: #1890ff;
  font-size: 12px;
  cursor: pointer;
  padding: 0;
}
</style>