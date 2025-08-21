import service from "@/utils/axios.js";
export const userCoupon = async (status) => {
    try {
        const params = status ? {status} : {}
        const response = await service.get('/user/coupons',{params});
        return response;
    }catch (error) {
        console.error(error);
    }
}
