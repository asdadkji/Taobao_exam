import axios from "axios";

export const postAddress = async (user_id, address1, address2, city, state, zip_code, country) => {
    try {
        const response = await axios.post('http://localhost:3000/api/addresses', {
            user_id, address1, address2, city, state, zip_code, country
        });
        if (response.data.code === 200) {
            return response.data.data; // 返回成功时的数据
        } else {
            throw new Error(response.data.error); // 抛出错误信息
        }
    } catch (error) {
        console.error('添加地址失败:', error);
        throw error; // 向上抛出错误
    }
};