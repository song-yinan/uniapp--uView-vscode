/*
 * @,@Author: ,: 宋一楠
 * @,@Date: ,: 2020-12-17 21:34:06
 * @,@LastEditTime: ,: 2021-02-04 14:17:28
 * @,@LastEditors: ,: Please set LastEditors
 * @,@Description: ,: vue配置
 * @,@FilePath: ,: /wxapp/src/vue.config.js
 */
// switch(process.env.NODE_ENV) {   
// 	case 'production':{   
// 	  process.env.mode = 'product';   
// 	  break;   
// 	}  
// 	case 'development': {   
// 	  process.env.mode = 'dev';
// 	  break;  
// 	}  
//   }
//   const proxy = process.env.NODE_ENV==="production" ? {
// 	  target : "https://cdc-test.risechina.com/",
// 	  changeOrigin: true
//   } : {
// 	  target : "https://cdc-test.risechina.com/",
// 	  changeOrigin: true
//   }
module.exports = {
	// 配置路径别名
	configureWebpack: {
		// devServer: {
		// 	// 调试时允许内网穿透，让外网的人访问到本地调试的H5页面
		// 	disableHostCheck: true,
		// 	devServer : {
		// 		port : 9000,
		// 		proxy : {
		// 			"/wxapp" : {
		// 			  target : "https://cdc-test.risechina.com/",
		// 			  changeOrigin: true ,
		// 			  secure:false
		// 			}
		// 		}
		// 	},
		// }
	},
	//productionSourceMap: false,
}
