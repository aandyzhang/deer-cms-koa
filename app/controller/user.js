const User = require('../models/user.js')
const jsonwebtoken = require('jsonwebtoken');
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
    async login(ctx) {
        ctx.verifyParams({
            name: {
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
            ctx.throw(401, '用户名或密码不正确');
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
            token
        };
    }
}

module.exports = new UserCtrl()