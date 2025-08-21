// src/api/address.js
import axios from "axios";

export const updateAddress = async (addressId, addressData) => {
    try {
        const response = await axios.put(`http://localhost:3000/api/change_addresses/${addressId}`, addressData);
        if (response.data.code === 200) {
            return response.data.data; // 返回成功时的数据
        } else {
            throw new Error(response.data.error); // 抛出错误信息
        }
    } catch (error) {
        console.error('修改地址失败:', error);
        throw error; // 向上抛出错误
    }
};