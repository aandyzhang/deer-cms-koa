const User = require('../models/user.js')
const jsonwebtoken = require('jsonwebtoken');
const { secret } = require('../config')
class UserCtrl {
    async index(ctx) {
        ctx.body = await User.find();
    }
    async find() {
        ctx.body = await User.find();
    }
    async findById(ctx) {
        const user = await User.findById(ctx.params.id);
        if (!user) {
            ctx.throw('404', '用户不存在')
        }
        ctx.body = user;
    }
    async create(ctx) {
        ctx.verifyParams({
            username: {
                type: 'string',
                required: true
            },
            password: {
                type: 'string',
                required: true
            },
        });
        const user = await User.findOne(ctx.request.body);
        if(user) {
            ctx.throw(401, '用户已注册，请重新输入');
        }
        const { username, password } = ctx.request.body;
        const saveResult = await new User({
            username,password
        }).save()
        if(!saveResult) {
            ctx.throw({
                errmsg: "注册失败",
                errcode: 1,
                data: null
            })
        }
        ctx.body = {
            errmsg: "注册成功",
            errcode: 0,
            data: {
                username
            }
        }
    }
    async login(ctx) {
        ctx.verifyParams({
            username: {
                type: 'string',
                required: true
            },
            password: {
                type: 'string',
                required: true
            },
        });
        const user = await User.findOne(ctx.request.body);
        if (!user) {
            ctx.throw({
                errmsg: "用户名或密码不正确",
                errcode: 1,
                data: null
            });
        }
        const {
            _id,
            name
        } = user;
        const token = jsonwebtoken.sign({
            _id,
            name
        }, secret, {
            expiresIn: '1d'
        });
        ctx.body = {
            errmsg: "登录成功",
            errcode: 0,
            data: {
                token
            }
            
        };
    }
}

module.exports = new UserCtrl()