const{complexdosome}=require("../utils/calcpost")
const complexconrtroller=(req,res)=>{
    let data="";
    req.on("data",(chunk)=>data+=chunk);
    const parseddata=JSON.parse(data);
    let sum=complexdosome(parseddata);
    res.writeHead(200,{"Content-type":"application/json"});
    res.end(JSON.stringify({sum}));
}
module.exports={complexconrtroller};