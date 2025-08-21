//创建router
import {createRouter, createWebHistory} from "vue-router";
//引入路由
import Layout from "@/views/Layout/index.vue"
import Login from '@/views/Login/index.vue'
import Home from "@/views/Home/index.vue";
import Category from '@/views/Category/index.vue'
import Detail from '@/views/Detail/index.vue'

//配置router
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: Layout,
            children: [
                {
                    path: '',
                    component: Home,
                },
                {
                    path: 'category',
                    component: Category
                },
                {
                    path: 'detail',
                    component: Detail
                }
            ]
        },
        {
            path: "/login",
            component: Login,
        }
    ]
})

//暴露router
export default router