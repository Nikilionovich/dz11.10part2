const {getmessbyusername}=require("../utils/utilget");
const url=require("url")
const messegebyusername=(req,res)=>{
    const {id}=url.parse(req.url,true).query;
    const arr=getmessbyusername(id);
    res.writeHead(200,{"Content-type":"application/json"});
    res.end(JSON.stringify({arr}));
}
module.exports={messegebyusername};