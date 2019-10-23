const Article = require('../models/article.js')
class ArticleCtrl {
    async getList(ctx){
        const data = await Article.find({status: true});
        if(!data) {
            ctx.body = {
                errcode: 0,
                errmsg: "处理成功",
                data: null
            }
        }
        ctx.body = {
            errcode: 0,
            errmsg: "处理成功",
            data: data
        }
    }
    async deleteArticle(ctx) {
        const { _id } = ctx.request.body;
        const res = await Article.updateOne({"_id": _id},{status: false});
        console.log(res)
        if(!res) {
            ctx.body = {
                errcode: 1,
                errmsg: "删除失败",
                data: null
            }
        }
        ctx.body = {
            errcode: 0,
            errmsg: "处理成功",
            data: null
        }
    }
    async findById(ctx) {
        const article = await Article.findById(ctx.request.body);
        if(!article){
            ctx.body = {
                errcode: 0,
                errmsg: "处理成功",
                data: null
            }
        }
        ctx.body = {
            errcode: 0,
            errmsg: "处理成功",
            data: article
        }
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