import service from "@/utils/axios.js";;
export const getComments = async (productId) => {
    try {
        if(!productId) {
            throw new Error('Invalid product id');
        }
        const response = await service.get(`/comments/${productId}`)
        return {success:true,comments:response}
    }catch(error) {
        console.error(error)
    }
}

