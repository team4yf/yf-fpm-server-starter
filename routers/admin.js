import Router from 'koa-router';
import views from 'co-views';
const render = views(__dirname + '../views', {
  map: { html: 'swig' }
});
const Admin = Router({
	prefix: '/admin'
});

Admin.get('/main', async (ctx, next) => {
    ctx.body = await render('index.html');
})

Admin.get('/install', async (ctx, next) => {
	console.log('install');
	ctx.body = 'ok';
})

Admin.post('/login', async(ctx, next) => {
	await ctx.success('ok');
})

export default Admin;
