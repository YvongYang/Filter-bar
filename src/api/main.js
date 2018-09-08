/**
 * 中间件 - API主入口
 */
import Express from 'express';

const router = Express.Router();

router.use('/test', require('./test'));

module.exports = router;