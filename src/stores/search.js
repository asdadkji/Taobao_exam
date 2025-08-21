import {defineStore} from "pinia";
import {ref,computed} from 'vue';
export const useSearchStore = defineStore('search',()=>{
    const searchQuery = ref('');
    const isHistoryVisible =  ref(false);

    return {
        searchQuery,
        isHistoryVisible
    }
})