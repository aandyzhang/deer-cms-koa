const Router = require('koa-router');
const router = new Router({prefix: '/tag'});
const { findById,create,find } = require('../controller/tag');

router.post('/findById',findById);
router.post('/create',create);
router.post('/find',find);

module.exports = router;