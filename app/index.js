const Koa = require('koa');
const app = new Koa();
const bodyparser = require('koa-bodyparser');
const routing = require('./routes');
const mongoose = require('mongoose');
const error = require('koa-json-error');
const { url } = require('./config.js');
mongoose.connect(url,()=>{
    console.log('连接成功')
})

mongoose.connection.on('error',(err)=>{
    console.log(err)
})
app.use(error())
app.use(bodyparser())
routing(app);
app.listen(3000,()=> {
    console.log('服务启动在3000端口');
});