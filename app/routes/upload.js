const Router = require('koa-router');
const router = new Router({prefix: '/api'});
const { upload } = require('../controller/upload');

router.post('/upload',upload);

module.exports = router;
