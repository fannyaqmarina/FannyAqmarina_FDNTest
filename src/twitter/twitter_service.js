const axios = require("axios").default;

async function getTwitterFeed (header,req){
    const max=req.max;
    console.log('service');
    let query = `max_results=${max}`
    if(req.pagination) query+=`&pagination_token=${req.pagination}`
    let url = `${process.env.URL_API_TWITTER}users/${header.twitterid}/tweets?${query}`
    console.log('URL = ',url);
    const response = await axios.get(url,{
        headers:{
            Authorization: `${header.authorization}`
        }
    }).then(result=>{
        return result.data
    }).catch(error=>{
        console.log(error)
        throw new Error(error.error);
    })
    return response;
}
module.exports = {
    getTwitterFeed
}