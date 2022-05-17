var express = require('express');
var router = express.Router();
const controller = require('../src/index');

router.get('/get-tweets',controller.twitter.getTwitter);

module.exports=router;
