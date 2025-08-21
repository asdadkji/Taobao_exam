import service from '@/utils/axios.js';

export const getCouponList = async () => {
    try {
        const response = await service.get('/coupons');
        if (response.status === 200) {
            return response;
        }else {
            throw new Error(response.error);
        }
    }catch (error) {
        throw error;
    }
}