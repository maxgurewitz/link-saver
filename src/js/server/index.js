const Koa = require('koa');
const router = require('koa-router')();

const app = new Koa();


router.get('/connect', async (ctx, next) => {
    ctx.body = 'foo';
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3001);
