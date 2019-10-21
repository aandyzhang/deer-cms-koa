const Article = require('../models/article.js')
const msg = {
    errcode: 0,
    errmsg: 'success'
}

class ArticleCtrl {
    async getList(ctx){
        const data = await Article.find();
        if(!data) {
            return ctx.body = Object.assign(msg,{data:null})
        }
        ctx.body = Object.assign(msg,{data})
    }
    async findById(ctx) {
        const article = await Article.findById(ctx.request.body);
        if(!article){
            return ctx.body = Object.assign(msg,{data:null})
        }
        ctx.body = Object.assign(msg,{data:article})
    }
    async add(ctx) {
        const article = await new Article(ctx.request.body).save();
        ctx.body = article;
    }
}

module.exports = new ArticleCtrl()