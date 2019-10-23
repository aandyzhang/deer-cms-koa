const Article = require('../models/article.js')
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
            ctx.body = Object.assign(msg,{data:null})
        }
        ctx.body = Object.assign(msg,{data:article})
    }
    async add(ctx) {
        const {title,author,keyword,multiple,picture,content } = ctx.request.body;
        const params = {
            title,
            author,
            keyword,
            multiple,
            picture,
            content
        }
        const article = await new Article(params).save();
        if(article) {
            ctx.body = {
                errmsg: "success",
                errcode: 0,
            };
        }else{
            ctx.body = {
                errmsg: "操作失败",
                errcode: 1,
            };
        }
    }
}

module.exports = new ArticleCtrl()