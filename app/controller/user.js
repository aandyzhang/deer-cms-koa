class User {
    index(ctx){
        ctx.body = "这是用户首页"
    }
}

module.exports = new User()