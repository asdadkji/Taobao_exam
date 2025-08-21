import {ref} from "vue";
import {useAuthStore} from "@/stores/auth.js";
import router from "@/router/index.js";
import {useRoute} from "vue-router";

export function usePasswordLogin() {
    const authStore = useAuthStore();
    const route =  useRoute();
    const form = ref({
        username:'',
        password:'',
    })

    const loading = ref(false);
    const errorMessage = ref('')

    const handleSubmit = async () => {
        try{
            loading.value = true
            errorMessage.value = ''
            await authStore.passwordLogin(form.value)
            await router.replace(route.query.redirect?.toString() || '/')
        }catch(error){
            errorMessage.value = error.message || '登录失败，请检查账号和密码'
        }finally{
            loading.value = false
        }
    }
    return{
        form,
        loading,
        errorMessage,
        handleSubmit
    }
}

































