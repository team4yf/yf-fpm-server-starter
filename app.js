import { Fpm, Hook,Biz }  from 'yf-fpm-server';
import path from 'path';
import Static from 'koa-static';
import views from 'koa-views';
import convert from 'koa-convert';
//加载配置信息的中间件，默认通过编码中的代码信息加载
import configuration from './config.js';
import routers from './routers';

global.__env = 'DEV';
let fpm = new Fpm();

fpm.use(configuration);

// fpm.getApp().use(views(__dirname + '/static'));
// fpm.getApp().use(convert(Static(path.join(__dirname, 'static'))));
// server.use(convert(Static(path.join(__dirname, 'upload'))));

// use all route
for (var item of routers) {
	fpm.getApp().use(item.routes()).use(item.allowedMethods());
}


//*
let biz = new Biz('0.0.1');

biz.addSubModules('test',{
	foo13:function(args){
		console.log('output from app.js');
		console.log(args);
		return new Promise( (resolve, reject) => {
			reject({errno: -3001});
		})
	}
})

fpm.addBizModules(biz);

let hook = new Hook();
hook.addBeforeHook('test.foo13', (args) => {
	return new Promise( (resolve, reject) => {
		console.log('run before hook from app.js');
		console.log(args);
		resolve('ok');
	});

},['0.0.1','0.0.2']);

// fpm.addHook(hook);
//*/
const httpPort = 9999;
fpm.run(httpPort);
