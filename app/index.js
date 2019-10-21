const Koa = require('koa');
const app = new Koa();
const koaBody = require('koa-body');
const koaStatic = require('koa-static');
const routing = require('./routes');
const path = require('path');
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
app.use(koaBody({
    multipart:true, // 支持文件上传
    encoding:'gzip',
    formidable: {
        uploadDir:path.join(__dirname,'public/uploads/'), // 设置文件上传目录
        keepExtensions: true,    // 保持文件的后缀
    }
}))
app.use(koaStatic(path.join(__dirname,'/public')))  //生成完整http地址
routing(app);
app.listen(3301,()=> {
    console.log('服务启动在3301端口');
});