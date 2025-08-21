<template>
  <button
      @click="handleClick"
      :disabled="disabled"
  >
    {{ disabled ? '提交中...' : '立即抢购' }}
  </button>
</template>

<script setup>
import { useClickControl } from '@/utils/clickControl';

const mockApi = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve('成功'), 1500);
  });
};

const { controlledFn: handleClick, disabled } = useClickControl(mockApi, {
  debounce: 1000,  // 防抖1秒
  throttle: 2000,  // 限流2秒
  autoDisable: true
});
</script>