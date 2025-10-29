const {getallmessseng}=require("../utils/utilget");
const messcontroller=(req,res)=>{
const arr=getallmessseng();
res.writeHead(200,{"Content-type":"application/json"});
res.end(JSON.stringify({arr}));
}
module.exports={messcontroller};