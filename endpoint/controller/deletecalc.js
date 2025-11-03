const {fofdelisory}=require("../utils/utilytydelte");
const DELETEhistory=(req,res)=>{
fofdelisory();
res.writeHead(200,{"Content-type":"application/json"});
res.end(JSON.stringify({message:"алл гуд"}));
}
module.exports={DELETEhistory};