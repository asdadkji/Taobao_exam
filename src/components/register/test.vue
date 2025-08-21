<template>
  <div>
    <form @submit.prevent="handleSubmit" class="form-test">
      <div class="test">
        <label>用户名</label>
        <input v-model="form.username" type="text" required />
      </div>
      <div class="test">
        <label>密码</label>
        <input v-model="form.password" type="password" required />
      </div>
      <div class="test">
        <label>邮箱</label>
        <input v-model="form.email" type="email" required />
      </div>
      <button type="submit">注册</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import {useRegisterStore} from "@/stores/register.js";

export default {
  setup() {
    const form = ref({
      username: '',
      password: '',
      email: ''
    });

    const registerStore = useRegisterStore();
    const handleSubmit = async () => {
      try {
        await registerStore.registerUser(form.value);
        alert('注册成功');
      } catch (error) {
        console.error('注册失败', error);
        alert('注册失败，请重试');
      }
    };

    return {
      form,
      handleSubmit
    };
  }
};
</script>
<style scoped>
.form-test {
  display: flex;
  flex-direction: column;
}
.test{
  margin-bottom: 10px;
}
.test input{
  border: 1px solid grey;
}
</style>