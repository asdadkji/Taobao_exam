import service from "@/utils/axios.js";

export const getCoupon = async (coupon_id) => {
    try {
        const response = await service.post(`/user/coupons/${coupon_id}/acquire`);
        if (response.status === 200) {
            return response;
        }else {
            console.log('Coupon not found');
        }
    }catch (error) {
        console.error(error);
    }
}