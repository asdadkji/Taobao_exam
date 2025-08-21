import {postComments} from "@/api/comments/postComments.js";
import {ref} from "vue";
export function postComments() {
    const comments = ref(null);
    const fetchComments = async () => {
        try {
            const response = await postComments(productid, content)
            if(response.success) {
                comments.value = response
            }else {
                console.log('获取评论失败')
            }
        }catch (error) {
            console.error(error);
        }
    }
}