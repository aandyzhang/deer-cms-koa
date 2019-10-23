const Router = require('koa-router');
const router = new Router({prefix: '/articles'});
const { add,getList,findById, deleteArticle} = require('../controller/article');

// router.get('/list',list);
router.post('/add',add);
router.post('/deleteArticle',deleteArticle);
router.post('/findById',findById);
router.get('/getList',getList);
module.exports = router;
