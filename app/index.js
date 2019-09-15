const Koa = require('koa');
const app = new Koa();
const bodyparser = require('koa-bodyparser');
const routing = require('./routes')
const error = require('koa-json-error');

app.use(error())
app.use(bodyparser())
routing(app);
app.listen(3000,()=> {
    console.log('服务启动在3000端口');
});