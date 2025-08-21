<script setup>
import {useAuthStore} from "@/stores/auth.js";
const authStore = useAuthStore();
const clearToken = () => {
  localStorage.removeItem('token');
  authStore.token.value = null
}
</script>

<template>
  <nav class="tb-nav">
    <!-- 左侧：登录状态 -->
    <div class="nav-left">
      <router-link to="auth/login" v-if="!authStore.isLogin" class="login-tip">亲，请登录</router-link>
      <div v-else class="has-sub">
        <span class="account">{{authStore.userName}}</span>
        <div class="sub-menu">
          <p>用户中心</p>
          <el-popconfirm
              confirm-button-text="Yes"
              cancel-button-text="No"
              :icon="InfoFilled"
              icon-color="#626AEF"
              title="你确定要退出账户吗"
              @confirm="clearToken">
            <p>退出账户</p>
          </el-popconfirm>
        </div>
      </div>
      <router-link to="/register" v-if="!authStore.isLogin">注册</router-link>
    </div>

    <!-- 右侧主导航 -->
    <ul class="nav-right">
      <li><a href="#">淘宝网首页</a></li>

      <li class="has-sub">
        <a href="#">已买到的宝贝<i class="arrow"></i></a>
        <div class="sub-menu">
          <p>我的订单</p>
          <p>待付款</p>
          <p>待收货</p>
        </div>
      </li>

      <li><a href="#">我的淘宝</a></li>

      <li class="has-sub">
        <router-link to="/cart">购物车</router-link>
      </li>

      <li class="has-sub">
        <a href="#">收藏夹<i class="arrow"></i></a>
        <div class="sub-menu">
          <p>收藏的宝贝</p>
          <p>收藏的店铺</p>
        </div>
      </li>

      <li><a href="#">免费开店</a></li>

      <li class="has-sub">
        <a href="#">千牛卖家中心<i class="arrow"></i></a>
        <div class="sub-menu">
          <p>卖家工作台</p>
          <p>出售中的宝贝</p>
        </div>
      </li>

      <li><router-link to="/user/profile">帮助中心</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
/* 整体导航栏 */
.tb-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 0 40px;
  height: 34px;
  font-size: 12px;
  color: #666;
}

/* 左侧登录提示 */
.nav-left .login-tip,
.nav-left .account {
  cursor: pointer;
  color: #ff0036;
  margin-right: 8px;
}

/* 右侧列表 */
.nav-right {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-right li {
  position: relative;
  margin-left: 20px;
}

.nav-right a {
  color: #666;
  text-decoration: none;
  transition: color 0.2s;
}

.nav-right a:hover {
  color: #ff0036;
}

/* 箭头 */
.arrow {
  display: inline-block;
  margin-left: 4px;
  border: 3px solid transparent;
  border-top-color: #666;
  vertical-align: middle;
  transition: transform 0.2s;
}

.nav-right li:hover .arrow {
  transform: rotate(180deg);
}

/* 下拉菜单 */
.has-sub .sub-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background: #fff;
  border: 1px solid #e5e5e5;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 999;
  padding: 8px 0;
  min-width: 100px;
}

.has-sub:hover .sub-menu {
  display: block;
}

.sub-menu p {
  margin: 0;
  padding: 4px 12px;
  cursor: pointer;
}

.sub-menu p:hover {
  background: #ffe6e6;
  color: #ff0036;
}
</style>