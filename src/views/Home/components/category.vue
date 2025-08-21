<script setup lang="ts">
import { ref, watch} from 'vue'
//引入仓库
import { useCategoryStore } from '@/stores/category'
const categoryStore = useCategoryStore()
//拿到分类列表数据
import {useShowCategory} from '@/composables/category/useShowCategory'
const {res} = useShowCategory()
const categories = ref(null)
watch(res,(newVal)=>{
  if(newVal){
    categories.value = newVal
  }
},{immediate:true})
</script>

<template>
  <div class="nav">
    <div
        v-for="c in categories"
        :key="c.id"
        :class="{ active: categoryStore.activeCategoryId === c.id }"
        @click="categoryStore.toggleCategory(c.id)"
    >
      <div v-track="{category:c.name}">
        {{ c.name }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.nav{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.nav > div {
  cursor:pointer;
  padding:6px 8px;
  border-bottom:1px solid #eee;
  font-size: 15px;
  line-height: 26px;
}
.nav > div.active { color:#409EFF;background:#ecf5ff }

</style>