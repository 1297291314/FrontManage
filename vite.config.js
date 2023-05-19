import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// import ViteComponents, { AntDesignVueResolver } from 'vite-plugin-components';
// https://vitejs.dev/config/
export default defineConfig({
	publicPath: './',
	productionSourceMap: false, // 不生成map
	resolve: {
		alias: {
			// 别名设置(代码运行只要在这设置)
			'@': path.resolve(__dirname, './src'),
			'~@': path.resolve(__dirname, './src')
		}
	},
	plugins: [
		// ViteComponents({
		//   customComponentResolvers: [AntDesignVueResolver()],
		// }),
		vue()
	],
	server: {
		port: '9090', // 设置服务启动的端口号
		open: true, // 设置服务启动时是否自动打开浏览器
		cors: true, // 允许跨域
		proxy: {
			'/api': {
				target: 'http://10.189.66.90:8001', // 凡是遇到 /api 路径的请求，都映射到 target 属性
				// target: 'http://10.189.66.90:8201', // 测试测试10.189.66.90:8201
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, '') // 重写 api 为 空，就是去掉它
			}
		}
	}
})
