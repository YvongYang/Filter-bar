/*eslint-disable no-console*/
/**
 * api请求server
 *
 * 测试：
 * 本地服务
 *    1. 在../config.js中设置
 *        isRemoteProxy = false;
 *    2. 在浏览器中访问 http://localhost:8889/ws/track-trace/user/userInfo/
 * 远程服务
 *    1. 在../config.js中设置
 *        isRemoteProxy = true;
 *        remoteProxy='http://ip.taobao.com:80'
 */
var express = require('express');
// import Express from 'express';
// import bodyParser from 'body-parser';
// import cookieParser from 'cookie-parser';
// import session from 'express-session';
// import proxy from 'express-http-proxy';
// import morgan from 'morgan';

var app = express();

// 本地API服务
// app.use(
//   bodyParser.urlencoded({
//     extended: false
//   })
// );

app.use('/', require('../api/main'));

var server = app.listen(8080, function(err) {
  var apiHost = server.address().address;
  var apiPort = server.address().port;

  if (err) {
    console.error('err:', err);
  } else {
    console.info(`===> api server is running at ${apiHost}:${apiPort}`);
  }
});