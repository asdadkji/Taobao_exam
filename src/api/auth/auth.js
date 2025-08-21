import axios from "axios";

// 密码登录
export const loginByPassword = async (payload) => {
    const {data} = await axios.post('http://localhost:3000/api/auth/password', payload);
    return data.data;
};

// 短信登录
export const loginBySms = async (payload) => {
    const {data} = await axios.post('http://localhost:3000/api/auth/sms', payload);
    return data.data;
};

// 发送短信验证码
export const sendSmsCode = async (phone) => {
    const data = await axios.post('http://localhost:3000/api/auth/sms-code', { phone });
    return data;
};

// 生成二维码
export const generateQrCode = async () => {
    const data = await axios.post('http://localhost:3000/api/auth/qrcode');
    return data;
};

// 检查二维码状态
export const checkQrCodeStatus = async (qrId) => {
    const data = await axios.get(`http://localhost:3000/api/auth/qrcode/${qrId}/status`);
    return data;
};