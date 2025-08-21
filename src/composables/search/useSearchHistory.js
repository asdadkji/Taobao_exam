import {ref,computed} from "vue";
import {useSearchStore} from "@/stores/search.js";
export function useSearchHistory(maxItems = 10) {
    const store = useSearchStore();
    const searchHistory = ref([])
    //从localStorage初始化
    if(typeof window !== 'undefined') {
        const saved = localStorage.getItem('search-history');
        if(saved) {
            searchHistory.value = JSON.parse(saved);
        }
    }
    const hasHistory = computed(() =>searchHistory.value.length > 0)
    function addToHistory(query) {
        if(!query.trim()) return;
        //去重
        const index = searchHistory.value.indexOf(query);
        if(index !== -1) {
            searchHistory.value.splice(index, 1);
        }
        //添加到开头
        searchHistory.value.unshift(query);
        //切片限制数量
        if(searchHistory.value.length > maxItems) {
            searchHistory.value = searchHistory.value.slice(0, maxItems);
        }
        //保存到localStorage
        localStorage.setItem('search-history', JSON.stringify(searchHistory.value));
    }
    function removeFromHistory(index) {
        searchHistory.value.splice(index, 1);
        localStorage.setItem('search-history', JSON.stringify(searchHistory.value));
    }
    function clearHistory() {
        searchHistory.value = [];
        localStorage.removeItem('search-history');
    }
    return {
        searchHistory,
        hasHistory,
        addToHistory,
        removeFromHistory,
        clearHistory
    }
}


