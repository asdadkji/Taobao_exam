import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { useAuthStore } from '@/stores/auth'

// 创建自定义Axios实例
const service: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL, // 从环境变量读取,只有当前运行模式对应的可以读取到
    timeout: 15000, // 超时时间
    headers: {
        'Content-Type': 'application/json'
    }
})


// 请求拦截器
service.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        const authStore = useAuthStore()

        // 如果存在token，添加到请求头
        if (authStore.token) {
            config.headers = config.headers || {}
            config.headers.Authorization = `Bearer ${authStore.token}`
        }

        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

// 响应拦截器
service.interceptors.response.use(
    (response: AxiosResponse) => {
        // 统一处理响应数据格式
        if (response.data?.code !== 200) {
            return Promise.reject(response.data)
        }
        return response.data.data // 直接返回业务数据
    },
    (error) => {
        // 统一错误处理
        if (error.response?.status === 401) {
            // token过期处理
            const authStore = useAuthStore()
            authStore.logout()
            window.location.href = '/login'
        }

        const message = error.response?.data?.message || error.message
        console.error('API Error:', message)
        return Promise.reject(error)
    }
)

export default service




