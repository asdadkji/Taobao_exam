import { ref, watch, type Ref } from 'vue'
import { getProducts } from '@/api/product/product'
import type { Product } from '@/types/category'

export function useProductList(
    categoryId: Ref<number | null>,
    pageSize = 20
) {
    // const list     = ref<Product[]>([])
    const list     = ref()
    const page     = ref(1)
    const total    = ref(0)
    const loading  = ref(false)
    const finished = ref(false)

    const loadMore = async () => {
        if (loading.value || finished.value) return
        loading.value = true
        try {
            const { list: newList, pagination } = await getProducts({
                category_id: categoryId.value,
                page: page.value,
                size: pageSize
            })
            list.value.push(...newList)
            total.value = pagination.total
            page.value += 1
            finished.value = list.value.length >= total.value
        } finally {
            loading.value = false
        }
    }

    watch(
        categoryId,
        () => {
            list.value   = []
            page.value   = 1
            total.value  = 0
            finished.value = false
        },
        { immediate: true }
    )

    return { list:list, loading:loading, finished:finished, loadMore }
}