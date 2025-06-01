//引入vue
import vue from '@vitejs/plugin-vue'
//引入vue-tools
import VueDevTools from 'vite-plugin-vue-devtools';
//引入svg
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
//引入mock
import {viteMockServe} from "vite-plugin-mock";
//引入格式化检查
import {defineConfig} from "vite";
//引入path路径
import path from 'path';
//引入全局自动注册组件
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
//引入@符号别名
import { fileURLToPath, URL } from 'node:url'
export default defineConfig({
  plugins: [
    vue(), VueDevTools(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')], // 指定 SVG 图标文件夹
      symbolId: 'icon-[dir]-[name]', // 定义 symbolId 格式
      inject: 'body-last', // DOM 插入位置
      customDomId: '__svg_icons' // 自定义容器 ID
    }),
    viteMockServe({
      mockPath: 'mock', //指定mock数据存储文件夹
      enable: process.env.NODE_ENV === 'development', //只在开发环境中自启动
      logger:true, //是否在控制台显示请求日志
      watchFiles: true //是否监视mock文件夹的文件更改
    }),
    Components({
      // 配置选项
      dts: true, // 生成类型声明文件
      resolvers: [
        // UI库解析器（如使用Ant Design）
        AntDesignVueResolver()
      ],
      // 自定义组件目录
      dirs: ['src/components']
    }),
  ],
  server: {
    open: true,
  },
  resolve:{
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})


