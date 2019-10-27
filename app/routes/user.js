const Router = require('koa-router');
const router = new Router({prefix: '/users'});
const { index, login } = require('../controller/user');

router.get('/index',index);
router.post('/login',login);
module.exports = router;