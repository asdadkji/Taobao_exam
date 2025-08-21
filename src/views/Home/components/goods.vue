<script setup lang="ts">
import {onMounted, toRef,watch} from 'vue'
//引入仓库
import { useCategoryStore } from '@/stores/category'
import { useSearchStore } from '@/stores/search'
const store = useCategoryStore()
const store2 = useSearchStore()
//引入逻辑
import { useProductList } from '@/composables/ProductList/useProductList'
const { list, loading, finished, loadMore, reset } = useProductList(toRef(store,'activeCategoryId'),toRef(store2,'searchQuery'))
//前往详情页
import {useRouter} from "vue-router";
const router = useRouter()
function goToDetail(product) {
  router.push({
    name: 'product',
    params: {
      id: product.id,
      slug: product.slug || product.name.toLowerCase().replace(/\s+/g, '-'),
    }
  })
}

const props = defineProps<{keyword: string}>()
watch(
    () => props.keyword,
    (kw) => {
      reset()
      if (kw.trim()) loadMore(kw)
    },
    { immediate: true }
)


onMounted(() => {
  list.value = list.value || []
})
</script>

<template>
  <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading || finished"
      infinite-scroll-distance="200"
      class="goods"
  >
    <li v-for="p in list" :key="p.id" @click="goToDetail(p)">
      <img :src="p.coverImg" />
      <p>{{ p.name }}</p>
      <p>¥{{ p.price }}</p>
    </li>
    <li v-if="loading">加载中…</li>
    <li v-if="finished">没有更多了</li>
  </ul>
</template>

<style scoped>
.goods{
  list-style:none;
  padding:0;
  display:flex;
  flex-wrap:wrap;
  justify-content:space-between;
}
.goods li{
  width:200px;
  text-align:center
}
.goods img{
  width:100%;
  height:250px;
  object-fit:cover;
  border-radius: 10px;
}
.goods p{
  margin: 5px 0;
  margin-bottom: 10px;
}
</style>