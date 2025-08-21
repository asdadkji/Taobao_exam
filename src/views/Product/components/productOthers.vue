<script setup lang="ts">
import {useRoute} from "vue-router";
const route = useRoute();
import {getComment} from '@/composables/comments/useGetComments'
import {ref, watch} from "vue";
const {commentsList} = getComment(route.params.id)
let comments = ref(null)
watch(commentsList, (newVal) => {
  if (newVal) {
    comments.value = newVal
  }
})
import {formatISODateToChineseStrict} from '@/utils/Day'
</script>

<template>
  <div>
    <h2>商品评论</h2>
    <div v-if="true">  <!--comments.length>0-->
      <div v-for="comment in comments" :key="comment.id" class="comment">
        <p><strong>{{comment.username}}</strong>评论于{{formatISODateToChineseStrict(comment.createdAt)}}</p>
        <p>{{comment.content}}</p>
      </div>
    </div>
    <div v-else>
      <p>暂无评论</p>
    </div>
  </div>
</template>

<style scoped>

</style>