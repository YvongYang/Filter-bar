import Express from 'express';

const router = Express.Router();
  
router.get('/server', function(req, res) {
  res.send('I Am a Data From Server Loaded!!');
});


module.exports = router;