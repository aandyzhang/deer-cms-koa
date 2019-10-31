const Router = require('koa-router');
const router = new Router({prefix: '/users'});
const { index, login,create } = require('../controller/user');

router.get('/index',index);
router.post('/login',login);
router.post('/create',create);
module.exports = router;