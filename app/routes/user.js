const Router = require('koa-router');
const jwt = require("koa-jwt")
const router = new Router({prefix: '/users'});
const { index, login,create,find } = require('../controller/user');
const { secret } = require('../config');

const auth = jwt({ secret })

router.get('/index',auth,index);
router.post('/login',login);
router.post('/create',create);
router.post('/find',auth,find);
module.exports = router;