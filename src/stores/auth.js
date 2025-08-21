import {defineStore} from "pinia";
import {loginByPassword,loginBySms,sendSmsCode,gengerateQrCode,checkQrCodeStatus} from '@/api/auth/auth';
import {ref} from "vue";

export const useAuthStore = defineStore('auth',()=>{
    const token = ref('')
    const userInfo = ref<UserInfo|null>(null)

    const passwordLogin = async (payload:{account:string,password:string}) => {
        const response = await loginByPassword(payload)
        token.value = response.data
        userInfo.value = response.data
    }
    const smsLogin = async (payload:{phone:string,code:string}) => {
        const response = await loginBySms(payload)
        token.value = response.data
        userInfo.value = response.data
    }
    return {
        token,
        userInfo,
        passwordLogin,
        smsLogin,
        sendSmsCode,
        gengerateQrCode,
        checkQrCodeStatus,
    }
})







