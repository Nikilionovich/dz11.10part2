const {dosomthwhithmasobj}=require("../utils/calcpost");
const listcalulatemote=(req,res)=>{
    let data="";
    req.on("data",(chunk)=>data+=chunk);
    req.on("end",()=>{
       const parseddata=JSON.parse(data);
       const sum=dosomthwhithmasobj(parseddata);
       res.writeHead(200,{"Content-type":"application/json"});
       res.end(JSON.stringify({sum}));
    })
}
module.exports={listcalulatemote};