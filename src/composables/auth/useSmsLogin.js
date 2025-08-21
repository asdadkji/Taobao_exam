import {ref} from "vue";
import {useAuthStore} from "@/stores/auth.js";

export function useSmsLogin() {
    const authStore = useAuthStore();
    const form = ref({
        phonePrefix:'+86',
        phone: '',
        code:''
    });
    const loading = ref(false);
    const errorMessage = ref('');
    const countdown = ref(0);
    let timer = null;

    const sendSmsCode = async () => {
        if(countdown.value > 0) return;

        try{
            await authStore.sendSmsCode(form.value.phonePrefix+form.value.phone)
            countdown.value = 60;
            timer = setInterval(()=>{
                countdown.value --
                if(countdown.value <=0 && timer) {
                    clearInterval(timer);
                    timer = null;
                }
            },1000);
        }catch(error){
            errorMessage.value = error.message || '验证码发送失败';
        }
    }
    const handleSubmit = async () => {
        try{
            loading.value = true;
            errorMessage.value = '';
            await authStore.smsLogin({
                phone:form.value.phonePrefix+form.value.phone,
                code:form.value.code,
            })
        }catch(error){
            errorMessage.value = error.message || '登录失败，请检查验证码'
        }finally{
            loading.value = false;
        }
    }
    return {
        form,
        loading,
        countdown,
        sendSmsCode,
        errorMessage,
        handleSubmit
    }






}







