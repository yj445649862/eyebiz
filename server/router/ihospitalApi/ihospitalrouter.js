/**
 * Created by andy on 2017-06-03.
 */
var express = require('express')
var router = express.Router() ;
var httpProxy = require('http-proxy');
var config = require('../../config/serverconfig') ;
var apiProxy = httpProxy.createProxyServer({
  target: config.ihospitalapi,
  changeOrigin: true
});
router.all('/*',(req,res)=>{
    apiProxy.web(req, res,e=>{
      console.dir(e);
    });
});
module.exports = router ;
