const User = require('../models/user.js')

class UserCtrl {
    async index(ctx){
        ctx.body = await User.find();
    }
    async find() {
        ctx.body = await User.find();
    }
    async findById(ctx) {
        const user = await User.findById(ctx.params.id);
        if(!user){
            ctx.throw('404','用户不存在')
        }
        ctx.body = user;
    }
    async create(ctx) {
        const user = await new User(ctx.request.body).save();
        ctx.body = user;
    }
}

module.exports = new UserCtrl()