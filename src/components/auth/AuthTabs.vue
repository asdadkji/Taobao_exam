<script setup lang="ts">
defineProps<{
  modelValue: 'password' | 'sms'
}>()

const emit = defineEmits(['update:modelValue'])
const tabs = [
  {value: 'password', label: '密码登录'},
  {value: 'sms',label: '短信登录'}
]
</script>

<template>
  <div class="auth-tabs">
    <button
        v-for="tab in tabs"
        :key="tab.value"
        :class="{active:modelValue === tab.value}"
        @click="emit('update:modelValue',tab.value)">
      {{tab.label}}
    </button>
  </div>
</template>

<style scoped>
.auth-tabs {
  display: flex;
  margin-bottom: 24px;
  border-bottom: 1px solid #eee;
}
.auth-tabs button {
  padding: 12px 0;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #666;
  margin-right: 24px;
  outline: none;
}
.auth-tabs button.active {
  color: #1890ff;
  font-weight: 500;
}
.auth-tabs button:active::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background: #1890ff;
}












</style>