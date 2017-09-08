var ihospitaApi = require('./ihospitalApi/ihospitalrouter');
var authApi = require('./authApi') ;
var express = require('express');
var router = express.Router();
router.use('/proxy/ihospital-api',ihospitaApi) ;
router.use('/proxy/auth-web',ihospitaApi) ;
module.exports = router;