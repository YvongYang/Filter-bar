import Express from 'express';
import {responseClient} from '../util';

const router = Express.Router();
  
router.get('/server', function(req, res) {
  res.send('I Am a Data From Server Loaded!!');
});