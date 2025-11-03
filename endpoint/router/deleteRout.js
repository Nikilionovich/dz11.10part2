const url=require("url")
const methoddelete=(req,res)=>{
const parsedname=url.parse(req.url,true);
const {DELETEhistory}=require("../controller/deletecalc");
 switch (parsedname.pathname) {
     case "/":
        DELETEhistory(req,res);
         break;
         case "/list-calc":
             DELETEhistory(req,res);
            break;
        case"/complex-calc":
        DELETEhistory(req,res);
        break;
     default:
        defaulteconroller(req,res)
         break;
 }
}
module.exports=methoddelete;