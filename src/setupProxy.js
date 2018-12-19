const proxy = require('http-proxy-middleware');
module.exports = (app)=>{
	app.use(
		proxy('/api', {
			target: 'https://mce.mogucdn.com',
			pathRewrite: {'^/api' : ''},
			changeOrigin: true
		})
	),
	app.use(
		proxy('/detail', {
			target: 'http://m.meilishuo.com',
			pathRewrite: {'^/api' : ''},
			changeOrigin: true
		})
	) 
}