// src/api/product.js
import service from '@/utils/axios.js';


export async function getProductById(id) {
    try {
        const response = await service.get(`/product/${id}`);
        return response; // 直接返回解析后的数据
    } catch (error) {
        throw error; // 抛出错误，由调用者处理
    }
}