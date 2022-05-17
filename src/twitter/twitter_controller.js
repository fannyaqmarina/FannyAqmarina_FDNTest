const controller = {};
const Joi = require('joi');
const service = require('./twitter_service');
const statusResponse = require('../../helpers/status_helper');

const validation = Joi.object({
    max: Joi.number().required(),
    pagination : Joi.string()});
const validationHeader = Joi.object({
    authorization: Joi.string().required(),
    twitterid : Joi.string().required(),
    "user-agent":Joi.string().optional(),
    "accept": Joi.string().optional(),
    "cache-control": Joi.string().optional(),
    "postman-token": Joi.string().optional(),
    "host": Joi.string().optional(),
    "accept-encoding": Joi.string().optional(),
    "connection": Joi.string().optional()});
controller.getTwitter = async function(req,res){
    try {
        const header = await validationHeader.validateAsync(req.headers);
        console.log(header);
        const query = await validation.validateAsync(req.query);
        const result = await service.getTwitterFeed(header,query);
        res.send(statusResponse.successMessage('Data berhasil ditampilkan !!!',result));
    } catch (error) {
        console.log(error);
        res.send(statusResponse.forbiddenMessage(error))
    }
   
   
}
module.exports= controller;