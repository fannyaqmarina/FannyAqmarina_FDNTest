var express = require('express');
var router = express.Router();
const controller = require('../src/index');

router.get('/',controller.product.getProducts);
router.get('/all',controller.product.getData);
router.get('/pivot',controller.product.getPivot);

module.exports=router;
