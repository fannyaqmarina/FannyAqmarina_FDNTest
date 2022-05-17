const productView = require("../../config/models/v_product");
async function getData (){
        const hasil = await productView.findAll({ attributes: [
            'fullname',
            'email',
            'item',
            'quantity',
             'price'
        ],})
        .then(async (result) => {
            return result
        }).catch((err)=>{
            throw new Error(err);
        });
        return hasil;
}
async function getBarang (CustomerId, itemId){
    const quantity =await productView.findOne({ attributes: [
        'quantity'],
        where:{
            'id_customer':CustomerId,
            'id_product':itemId
        }
    });
    return quantity ? quantity.dataValues.quantity:0;
}
async function getPivot (){
    const hasiltemp=[];
       const hasil= await productView.findAll({ attributes: [
            'fullname',
            'email',
            'customerid'
        ],})
        .then(async (result) => {
            for(let i=0;i<result.length;i++){
                hasiltemp.push({
                    'fullname':result[i].dataValues.fullname,
                    'email':result[i].dataValues.email,
                    'barang1':await getBarang(result[i].dataValues.customerid,1),
                    'barang2':await getBarang(result[i].dataValues.customerid,2),
                    'barang3':await getBarang(result[i].dataValues.customerid,3),
                    'barang4':await getBarang(result[i].dataValues.customerid,4),
                    'barang5':await getBarang(result[i].dataValues.customerid,5),
                });
            }
           return hasiltemp
        }).catch((err)=>{
           throw new Error(err);
        });
        return hasil;
}
module.exports={
    getData,
    getPivot
}
