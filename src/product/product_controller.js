const productModel = require("../../config/models/product");
const service = require("./product_service");
const controller = {};
const statusResponse = require('../../helpers/status_helper');
 
// Get semua product
controller.getProducts = async (req, res) => {
    try {
        await productModel.findAll()
        .then(async (result) => {
         res.send(statusResponse.successMessage(result,'Success !!!'));
        });
    } catch (err) {
        res.send(statusResponse.emptyMessage(err))
    }
}
// Get semua product
controller.getData = async (req, res) => {
    try {
    const listData = await service.getData();
    res.send(statusResponse.successMessage('Success !!!',listData));
    } catch (error) {
        res.send(statusResponse.forbiddenMessage(error))
    }
   
}

// Get semua pivot
controller.getPivot = async (req, res) => {
    try {
        const listData = await service.getPivot();
        res.send(statusResponse.successMessage('Success !!!',listData));
    } catch (error) {
        res.send(statusResponse.forbiddenMessage(error))
    }
   
}
module.exports = controller;