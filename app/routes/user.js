const Router = require('koa-router');
const router = new Router({prefix: '/users'});
const { index } = require('../controller/user');

router.get('/',index);

module.exports = router;