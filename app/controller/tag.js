const Tag = require('../models/tag.js')
const jsonwebtoken = require('jsonwebtoken');
const { secret } = require('../config')
class TagCtrl {
    async find(ctx) {
        const data = await Tag.find({status:{$ne:-1}});
        if(!data) {
            ctx.throw('404', '查询失败')
        }
        ctx.body = {
            data,
            errcode: 0,
            errmsg: "处理成功"
        }
    }

    async findById(ctx) {
        const data = await Tag.findById(ctx.params.id);
        if (!data) {
            ctx.throw('404', '用户不存在')
        }
        ctx.body = data;
    }
    async create(ctx) {
        ctx.verifyParams({
            tagName: {
                type: 'string',
                required: true
            },
            tagDes: {
                type: 'string',
                required: false
            },
        });
        const data = await Tag.findOne(ctx.request.body);
        if(data) {
            ctx.throw(401, '该标签已存在，请重新输入');
        }
        const { tagName, tagDes } = ctx.request.body;
        const saveResult = await new Tag({
            tagName,tagDes
        }).save()
        if(!saveResult) {
            ctx.throw({
                errmsg: "添加失败",
                errcode: 1,
                data: null
            })
        }
        ctx.body = {
            errmsg: "添加成功",
            errcode: 0,
            data: null
        }
    }
}
module.exports = new TagCtrl()