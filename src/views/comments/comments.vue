<script setup lang="ts">
import { ref } from 'vue'
const comment = ref(null)
const value = ref()
import {postComments_1} from '@/composables/comments/usePostComments'
const {post_Comment} = postComments_1()
const props = defineProps({
  productId: Number,
})
import {useCategoryStore} from '@/stores/category'
const {getStar} = useCategoryStore()
</script>

<template>
  <div class="comment-container">
    <div class="comment-nav">
      <p>评价宝贝</p>
      <p>评价须知</p>
    </div>
    <div class="comment-content">
      <img>
      <div style="width: 450px">
        <el-form-item>
          <el-input v-model="comment" type="textarea"></el-input>
        </el-form-item>
      </div>
    </div>
    <el-rate
        v-model="value"
        :texts="['oops', 'disappointed', 'normal', 'good', 'great']"
        show-text
        @change="getStar(value)"
    />
  </div>
  <button @click="post_Comment(props.productId,comment.value)">发表评论</button>
  <router-view></router-view>
</template>

<style scoped>
.comment-container {
  display: flex;
  flex-direction: column;
  /*width: 100%;
  position: relative;*/
  width: 600px;
  border: #dddddd 1px solid;
  margin-top: 20px;
}
.comment-nav {
  display: flex;
  flex-direction: row;
  justify-content:  space-between;
  border-bottom: #dddddd 1px solid;
  margin-bottom: 16px;
}
.comment-nav:first-child {
  padding: 4px 16px;
  font-size: large;
  font-weight: bold;
  color: white;
  background: #006fe6;
}
.comment-content {
  display: flex;
  flex-direction: row;
  margin-bottom: 4px;
}
.comment-content img{
  width: 100px;
  height: 100px;
  margin: 0 10px;
}
button {
  padding: 4px 16px;
  color: white;
  background: #006fe6;
}
</style>