import service from "@/utils/axios.js";


export const applyCoupon = async (params) => {
    try {
        const response = await service.post('/orders/apply-coupon',params);
        return response;
    }catch (error) {
        console.error('优惠券应用失败',error);
        throw error;
    }
}