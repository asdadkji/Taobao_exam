import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Category } from '@/types/category'

export const useAppStore = defineStore('app', () => {
    const activeCategoryId = ref<number | null>(null)
    const setActiveCategory = (id: number | null) => (activeCategoryId.value = id)
    return { activeCategoryId, setActiveCategory }
})