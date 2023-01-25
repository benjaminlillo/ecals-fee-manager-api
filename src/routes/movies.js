const KoaRouter = require('koa-router');

const router = new KoaRouter();

router.get('movies.show', '/', async (ctx) => {
  ctx.body = 'HOlaaaaa';
})

module.exports = router;