import service from "@/utils/axios.js";

export const postComments = async (productid, content) => {
    try {
        if(!productid || !content){
            throw new Error("No valid productid or content");
        }
        const body = JSON.stringify({
            productId:productid,
            content:content,
        });
        const response = await service.post('/comments',body);
        return {success:true, msg:'评论成功',commentId:response.commentId};
    }catch (error) {
        throw error;
    }
}