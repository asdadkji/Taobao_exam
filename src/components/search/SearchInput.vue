<script setup lang="ts">
//引入仓库
import {useSearchStore} from '@/stores/search'
const store = useSearchStore()
//引入逻辑
import {useSearchInput} from '@/composables/search/useSearchInput'
const {handleFocus,handleBlur} = useSearchInput()

defineEmits(['search'])
const props = defineProps({
  placeholder: {
    type: String,
  }
})
</script>

<template>
  <div class="search-input">
    <input type="text" v-model="store.searchQuery"
           @keyup.enter="$emit('search',store.searchQuery)"
           @focus="handleFocus"
           @blur="handleBlur"
           :placeholder="props.placeholder"/>
    <button @click="$emit('search',store.searchQuery)">搜索</button>
  </div>
</template>

<style scoped>
.search-input{
  position: relative;
  display: flex;
  gap: 8px;
  border: 2px solid red;
  border-radius: 8px;
  padding: 2px;
}
input{
  flex:1;
  padding: 8px 12px;
  border-radius: 4px;
}
button{
  padding: 8px 16px;
  background-color: #1890ff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover{
  background-color: deepskyblue;
}
button:active{
  background-color: lightblue;
}
</style>