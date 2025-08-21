import axios from "axios";

export const getAddress = async (userId) => {
    try {
/*        const userId = 1*/
        const response = await axios.get('http://localhost:3000/api/showaddresses', {
            params: { user_id: userId }
        });

        // 正确检查axios响应状态
        if (response.status === 200) {
            return response.data // 直接返回数据数组
        }
        throw new Error(response.data?.error || '请求失败')
    } catch (error) {
        console.error('获取地址失败:', error)
        throw error // 抛出错误由调用方处理
    }
}