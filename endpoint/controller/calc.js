const {dosomethwithnum}=require("../utils/calcpost");
const {arrhistory}=require("../data/data");
const {createhistorycalc,checkrepeatcalc}=require("../utils/workwhithfile");
const calcpost=(req,res)=>{
    let data="";
    req.on("data",(chunk)=>data+=chunk);
    req.on("end",()=>{
        try {
            const parseddata=JSON.parse(data);
        const {A,B,OP}=parseddata;
        let sum=checkrepeatcalc(A,B,OP);
        if (sum==undefined) {
            sum=dosomethwithnum(A,B,OP);
            createhistorycalc(A,B,OP,sum);
        }
        res.writeHead(200,{"Content-type":"application/json"});
        res.end(JSON.stringify(sum));
        } catch (err) {
            if (err.message.includes("не поддерживается")) {
                res.writeHead(501, { "Content-Type": "application/json" });
                res.end(JSON.stringify({
                    error: "Операция не поддерживается"
                })); 
            }
        }
        
    })
}
module.exports={calcpost};