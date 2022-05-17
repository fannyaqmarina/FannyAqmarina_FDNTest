const twitter = require('./twitter/twitter_controller');
const product = require('./product/product_controller');
const controller = {};
controller.twitter = twitter;
controller.product=product;

module.exports=controller;