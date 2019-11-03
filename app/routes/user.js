const Router = require('koa-router');
const router = new Router({prefix: '/users'});
const { index, login,create,find } = require('../controller/user');

router.get('/index',index);
router.post('/login',login);
router.post('/create',create);
router.post('/find',find);
module.exports = router;