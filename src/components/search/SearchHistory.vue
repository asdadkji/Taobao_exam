<script setup lang="ts">
//引入仓库
import {useSearchStore} from '@/stores/search'
const store = useSearchStore()
//引入逻辑
import {useSearchHistory} from '@/composables/search/useSearchHistory'
const props = defineProps({
  maxHistory: {
    type: Number,
    default: 10
  }
})
//解构函数
const {
  searchHistory,
  hasHistory,
  removeFromHistory,
  clearHistory
} = useSearchHistory(props.maxHistory);
defineEmits(['select'])
</script>

<template>
  <transition name="fade">
    <div v-if="store.isHistoryVisible && hasHistory" class="search-history">
      <text>历史记录</text>
      <ul>
        <li v-for="(item,index) in searchHistory" :key="index" @click="$emit('select', item)" class="item">
          <span>{{item}}</span>
          <button class="delete-btn" @click.stop="removeFromHistory">x</button>
        </li>
      </ul>
      <div class="history-footer">
        <button @click="clearHistory">清空历史</button>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.search-history {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border:  1px solid #eee;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  z-index: 10;
  margin-top: 4px;
  display: flex;
  flex-direction: column;
  padding: 4px;
}
.search-history text{
  margin-bottom: 5px;
}
ul{
  list-style: none;
  padding: 0;
  margin: 0;
}
li{
  padding: 8px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  display: inline-block;
}
.item{
  border-radius: 4px;
}
li:hover{
  background-color: #f5f5f5;
}
.delete-btn{
  background: none;
  border: none;
  color: #999;
  font-size: 16px;
  cursor: pointer;
  padding: 0 4px;
}
.history-footer{
  padding: 8px;
  border-top: 1px solid #eee;
  text-align: right;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>