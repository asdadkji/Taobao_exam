import service from "@/utils/axios";

export const register = async (payload) => {
    const response = await service.post('/auth/register', payload);
    return response.data;
};