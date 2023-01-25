const Koa = require("koa");
const KoaLogger = require('koa-logger');
const { koaBody } = require('koa-body');
const router = require('./routes');
const cors = require('@koa/cors');

const PORT = '3000'

const app = new Koa();

app.use(cors());
app.use(KoaLogger());
app.use(koaBody());

app.use(router.routes());

app.listen(PORT, () => {
  console.log(`Starting app in port ${PORT}`);
});
