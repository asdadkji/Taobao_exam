import {ref} from "vue";
import {checkQrCodeStatus} from "@/api/auth/auth.js";
import {generateQrCode} from '@/api/auth/auth.js'

export function useQrCodeLogin() {
    const qrCodeUrl = ref('')
    const status = ref<'waiting' | 'scanned' | 'confirm' | 'expired'>('waiting')
    const errorMessage = ref('')
    let pollingTimer = null

    const initQrCode = async () => {
        try{
            const {url,qrId} = await generateQrCode()
            qrCodeUrl.value = url
            startPolling(qrId)
        }catch(error){
            errorMessage.value = '二维码生成失败，请刷新重试'
        }
    }
    const startPolling = (qrId) => {
        stopPolling()

        let pollingTimer = setInterval(async () => {
            try{
                const result = await checkQrCodeStatus(qrId)
                status.value = result.status

                if (status.value === 'confirmed') {
                    stopPolling()
                    //登录成功处理
                }else  if(status.value === 'expired') {
                    stopPolling()
                    errorMessage.value = '二维码已过期'
                }
            }catch(error){
                stopPolling()
                errorMessage.value = '检查状态失败'
            }
        },2000)
    }
    const stopPolling = () => {
        if(pollingTimer) {
            clearInterval(pollingTimer)
            pollingTimer = null
        }
    }

    return {
        qrCodeUrl,
        status,
        errorMessage,
        initQrCode,
        stopPolling,
    }
}































