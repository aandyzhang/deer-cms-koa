const Article = require('../models/article.js')
class ArticleCtrl {
    async getList(ctx) {
        const {
            pageCount = 10, pageIndex = 1, keyword
        } = ctx.request.body;
        const _pageIndex = Math.max(pageIndex * 1, 1) - 1;  //当前页吗
        const _pageCount = Math.max(pageCount * 1, 1);  //
        const data = await Article.find({
            status: true,
            name: new RegExp(keyword)
        }).limit(_pageIndex).skip(_pageCount * _pageIndex);
        if (!data) {
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
        ctx.verifyParams({
            _id: {
                type: String,
                required: true
            }
        })
        const {
            _id
        } = ctx.request.body;
        const res = await Article.updateOne({
            "_id": _id
        }, {
            status: false
        });
        if (!res) {
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
        if (!article) {
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
        ctx.verifyParams({
            title: {
                type: String,
                required: true
            },
            author: {
                type: String,
                required: true
            },
            keyword: {
                type: String,
                required: true
            },
            picture: {
                type: String,
                required: true
            },
            content: {
                type: String,
                required: true
            },
            multiple: {
                type: Array,
                required: true
            },
        })
        const {
            title,
            author,
            keyword,
            multiple,
            picture,
            content
        } = ctx.request.body;
        const params = {
            title,
            author,
            keyword,
            multiple,
            picture,
            content
        }
        const article = await new Article(params).save();
        if (article) {
            ctx.body = {
                errmsg: "success",
                errcode: 0,
            };
        } else {
            ctx.body = {
                errmsg: "操作失败",
                errcode: 1,
            };
        }
    }
}

module.exports = new ArticleCtrl()