//引入app
import { createApp } from 'vue'
import App from './App.vue'
//引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//引入SVG图标组件
import 'virtual:svg-icons-register';
//创建app
const app = createApp(App);
//注册ele图标
app.use(ElementPlus)
//注册font图标
app.component('font-awesome-icon', FontAwesomeIcon);
//注册pinia仓库
app.use(pinia);
//挂载
app.mount('#app');