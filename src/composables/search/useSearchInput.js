import {useSearchStore} from '@/stores/search.js'
export function useSearchInput() {
    const store = useSearchStore()
    function handleFocus(){
        store.isHistoryVisible = true
    }
    function handleBlur(){
        setTimeout(() => {
            store.isHistoryVisible = false
        }, 200)
    }
    return {
        handleFocus,
        handleBlur,
    }
}