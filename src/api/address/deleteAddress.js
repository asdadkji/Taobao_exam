// src/api/address.js
import axios from "axios";

export const deleteAddress = async (addressId) => {
    try {
        const response = await axios.delete(`http://localhost:3000/api/addresses/${addressId}`);
        if (response.data.code === 200) {
            return response.data.data; // 返回成功时的数据
        } else {
            throw new Error(response.data.error); // 抛出错误信息
        }
    } catch (error) {
        console.error('删除地址失败:', error);
        throw error; // 向上抛出错误
    }
};