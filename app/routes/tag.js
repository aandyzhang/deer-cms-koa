const Router = require('koa-router');
const jwt = require("koa-jwt")
const router = new Router({prefix: '/tag'});
const { findById,create,find } = require('../controller/tag');
const { secret } = require('../config');
const auth = jwt({ secret });
router.post('/findById',auth,findById);
router.post('/create',auth,create);
router.post('/find',auth,find);

module.exports = router;