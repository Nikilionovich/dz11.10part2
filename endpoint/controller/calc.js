const {dosomethwithnum}=require("../utils/calcpost");
const calcpost=(req,res)=>{
    let data="";
    req.on("data",(chunk)=>data+=chunk);
    req.on("end",()=>{
        const parseddata=JSON.parse(data);
        const {A,B,OP}=parseddata;
        let sum=dosomethwithnum(A,B,OP);
        res.writeHead(200,{"Content-type":"application/json"});
        res.end(JSON.stringify({sum}));
    })
}
module.exports={calcpost};