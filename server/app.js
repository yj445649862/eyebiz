var path = require('path')
var express = require('express')
var app = express()
var middle = require('./router') ;
app.use(middle)
app.use(require('connect-history-api-fallback')())
app.use(express.static('dist')) ;
var port = process.env.PORT ||25000;
app.listen(port,(error)=>{
  console.dir('服务器端口'+port);
  if(error){
    console.error('启动服务器错误') ;
  }
})

