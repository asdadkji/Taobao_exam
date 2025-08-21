<script setup lang="ts">
import {useSearchStore} from '@/stores/search'
import {useSearchHistory} from '@/composables/search/useSearchHistory'
import SearchInput from "@/components/search/SearchInput.vue";
import SearchHistory from "@/components/search/SearchHistory.vue";
const store = useSearchStore();
//动态样式控制
const props = defineProps({
  //尺寸
  size:{
    type:String,
    default:'medium',
    validator:(value:string)=>['small','medium','large'].includes(value)
  },
  //历史记录最大数量
  maxHistory:{
    type:Number,
    default:10
  },
  placeholder:{
    type:String,
    default:'搜一下'
  }
})
const emit = defineEmits(['keywordChange'])
//将搜索数据上传仓库
const {addToHistory} = useSearchHistory(props.maxHistory);
function handleSearch(query:string){
  addToHistory(query);
  store.setSearchQuery(query);
  emit('keywordChange', query);
}
</script>

<template>
  <div class="search-box" :class="size">
    <SearchInput @search="handleSearch" :placeholder="placeholder"></SearchInput>
    <SearchHistory @select="handleSearch" :max-history="maxHistory"></SearchHistory>
  </div>
</template>

<style scoped>
/* 把变量作用到输入框和下拉 */
.search-box {
  position: relative;
  width: var(--search-width);
  max-width: 100%;
}

/* size = small / medium / large */
.search-box.small {
  --search-height: 28px;
  --search-width: 320px;
  font-size: 12px;
}
.search-box.medium {
  --search-height: 36px;
  --search-width: 500px;
  font-size: 14px;
}
.search-box.large {
  --search-height: 44px;
  --search-width: 720px;
  font-size: 16px;
}
:v-deep(.search-input) {
  height: var(--search-height);
}
:v-deep(.search-history) {
  top: var(--search-height);
}
</style>